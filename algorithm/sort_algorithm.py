#!/usr/bin/python3

numbers = [233,1,100,23,53,42,244,88,1, 2,9]

def findMinNumber(list):
    min_number = list[0]
    n = 1
    while n < len(list) :
        if min_number >= list[n]:
            min_number = list[n]
            n += 1
        n += 1
    print(min_number)

findMinNumber(numbers)