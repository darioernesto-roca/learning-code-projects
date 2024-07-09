# 1. Flatten the lists

import itertools

a = [[1, 2], [3, 4], [5, 6]]
b = list(itertools.chain.from_iterable(a))

print(b)
# Output: [1, 2, 3, 4, 5, 6]


# Trick 2: Reverse a list

a = [1, 2, 3, 4, 5]
b = a[::-1]

print(b)
# Output: [5, 4, 3, 2, 1]


# Trick 3: Combining different lists

a=['a','b','c','d']
b=['e','f','g','h']

for x, y in zip(a, b):
    print(x,y)

# Output:
# a e
# b f
# c g
# d h


# Trick 4: Negative indexing lists

a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a[-3:-1]

# Output: [8, 9]


# Trick 5: Analyzing the most frequent on the list

a = [1, 2, 3, 4, 2, 2, 3, 1, 4, 4, 4]
print(max(set(a), key = a.count))

# Output: 4
