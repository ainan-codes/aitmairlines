import os

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY") or os.getenv("SUPABASE_SERVICE_ROLE_KEY")

_client = None
_client_init_attempted = False


def get_supabase():
    """Returns a cached Supabase client, or None if not configured/unreachable."""
    global _client, _client_init_attempted
    if _client_init_attempted:
        return _client
    _client_init_attempted = True

    if not SUPABASE_URL or not SUPABASE_SERVICE_KEY:
        print("Supabase not configured (SUPABASE_URL / SUPABASE_SERVICE_KEY missing). Skipping DB persistence.")
        return None

    try:
        from supabase import create_client
        _client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)
        return _client
    except Exception as e:
        print(f"Supabase client init failed: {e}")
        return None


def persist_fares_snapshot(records: list, weights_data: list):
    """Best-effort: replace routes_weights, append a fares_history snapshot."""
    client = get_supabase()
    if not client:
        return
    try:
        client.table("routes_weights").upsert(weights_data, on_conflict="route_id").execute()

        fares_rows = [{
            "route_id": r["route_id"], "origin": r["origin"], "destination": r["destination"],
            "origin_lat": r["origin_lat"], "origin_lon": r["origin_lon"],
            "dest_lat": r["dest_lat"], "dest_lon": r["dest_lon"],
            "airline": r["airline"], "cabin_class": r["cabin_class"], "horizon": r["horizon"],
            "fare_base": r["fare_base"], "fare_current": r["fare_current"], "pct_change": r["pct_change"],
            "passenger_share": r["passenger_share"], "passenger_count": r["passenger_count"],
        } for r in records]

        batch_size = 500
        for i in range(0, len(fares_rows), batch_size):
            client.table("fares_history").insert(fares_rows[i:i + batch_size]).execute()

        print(f"Persisted {len(fares_rows)} fare records + {len(weights_data)} route weights to Supabase.")
    except Exception as e:
        print(f"Supabase fares persistence failed: {e}")


def persist_mospi(mospi_rows: list):
    """Best-effort: upsert the full MoSPI CPI history."""
    client = get_supabase()
    if not client:
        return
    try:
        rows = [{"date": r["date"], "cpi_index": r["cpi_index"], "inflation_pct": r["inflation_pct"]} for r in mospi_rows]
        batch_size = 500
        for i in range(0, len(rows), batch_size):
            client.table("mospi_history").upsert(rows[i:i + batch_size], on_conflict="date").execute()
        print(f"Persisted {len(rows)} MoSPI CPI rows to Supabase.")
    except Exception as e:
        print(f"Supabase MoSPI persistence failed: {e}")
