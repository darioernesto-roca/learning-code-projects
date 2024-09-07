import datetime
import time
from playsound import playsound

# Function to get the current time in HH:MM format
def get_current_time():
    now = datetime.datetime.now()
    return now.strftime("%H:%M")

# Function to set an alarm
def set_alarm(alarm_time):
    print(f"Alarm set for {alarm_time}")
    while True:
        current_time = get_current_time()
        if current_time == alarm_time:
            print("Wake up!")
            playsound('alarm_sound.mp3')  # Replace with the path to your sound file
            break
        time.sleep(30)  # Check every 30 seconds

# Ask user for alarm time input
alarm_time = input("Enter the alarm time in HH:MM format: ")

# Call the function to set the alarm
set_alarm(alarm_time)
