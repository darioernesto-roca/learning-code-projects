# This code scrap a website using python and beautifulsoup

import requests

from bs4 import BeautifulSoup

url = 'https://www.nytimes.com/'

r = requests.get(url)

r_html = r.text

soup = BeautifulSoup(r_html, 'html.parser')

for link in soup.find_all('a'):
    print(link.get('href'))

# Create a file with the output

with open('output.txt', 'w') as f:
    for link in soup.find_all('a'):
        f.write(str(link.get('href')) + '\n')



# Output:
# https://www.nytimes.com/
# #site-content
# #site-index