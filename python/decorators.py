# Decorators are a way to modify or enhance the behavior of functions or methods. In this code snippet, we define a decorator called announce that prints a message before and after the function it decorates is called. We then apply this decorator to a function called hello, which prints "Hello, world!" when called. When we call hello, the message "About to run the function..." is printed before the function is called, and "Done with the function." is printed after the function is called.

def announce(f):
    def wrapper():
        print("About to run the function...")
        f()
        print("Done with the function.")
    return wrapper

@announce
def hello():
    print("Hello, world!")

hello()