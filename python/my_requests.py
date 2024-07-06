import requests

response = requests.get('https://pokeapi.co/api/v2/pokemon/')


data = response.json()

print(data)

for pokemon in data['results']:
    print(pokemon['name'])