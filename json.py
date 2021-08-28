import requests
response = requests.get("https://raw.githubusercontent.com/Joel598/api-reactjs/main/src/data/posts.json")
data = response.json()
print(data)