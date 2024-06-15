# Create a simple server with python

import socket

# Create a socket object
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Get the local machine name
host = socket.gethostname()
port = 9999

# Bind to the port
server.bind((host, port))

# Queue up to 5 requests
server.listen(5)

while True:
    # Establish a connection
    client, address = server.accept()
    print("Got a connection from %s" % str(address))
    message = 'Thank you for connecting'
    client.send(message.encode('ascii'))
    client.close()