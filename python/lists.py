# Flaten the lists

import itertools

a = [[1, 2], [3, 4], [5, 6]]
b = list(itertools.chain.from_iterable(a))

print(b)