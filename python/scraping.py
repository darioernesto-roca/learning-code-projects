# This code scrap a website using python and beautifulsoup

# Request is a Python module for sending HTTP requests using Python 
import requests

# BeautifulSoup is a Python library for pulling data out of HTML and XML files
from bs4 import BeautifulSoup

# URL of the website
url = 'https://www.nytimes.com/'

# Get the HTML content of the website
r = requests.get(url)

# Parse the HTML content
r_html = r.text

# Create a BeautifulSoup object
soup = BeautifulSoup(r_html, 'html.parser')

# Print the title of the website
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