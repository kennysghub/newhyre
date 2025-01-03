from gridstatus import CAISO
from datetime import datetime, timedelta

def get_caiso_curtailment_data():
    # Initialize the CAISO client
    caiso = CAISO()
    
    # Define the date range (e.g., the last day)
    today = datetime.utcnow()
    yesterday = today - timedelta(days=1)
    
    try:
        # Fetch curtailment data
        curtailment_data = caiso.get_curtailment(
            start=yesterday,
            end=today
        )
        
        # Process the data to extract total curtailed MWh
        total_curtailed_mwh = curtailment_data["Curtailment (MWh)"].sum()

        # Return the result
        return total_curtailed_mwh
    except Exception as e:
        print(f"Error fetching curtailment data: {e}")
        return None

if __name__ == "__main__":
    curtailed_mwh = get_caiso_curtailment_data()
    if curtailed_mwh is not None:
        print(f"Total Curtailed MWh: {curtailed_mwh}")
    else:
        print("Failed to fetch curtailment data.")
