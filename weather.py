import requests

def fetch_weather_data(api_key, city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    response = requests.get(url)
    data = response.json()
    return data

api_key = "0f61198bd0ddcf9af105acf173863d4f"
city = "Bengaluru"
weather_data = fetch_weather_data(api_key, city)
print(weather_data)
