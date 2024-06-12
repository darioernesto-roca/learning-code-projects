userExample = "ernesto"
passwordExample = "ernesto123"

user_input = input("Enter your user: ")
password_input = input("Enter your password: ")

if userExample != user_input or passwordExample != password_input:
    print("User or password incorrect")
    quit()

print("Welcome, you have accessed the system")