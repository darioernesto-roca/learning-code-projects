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

