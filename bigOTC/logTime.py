def logTime(n):
    while n > 1:
        print(n)
        n /= 2
    return int(n)

print(logTime(32))

# recursive solution 
def logTimeTwo(n): 
    if n <= 1:
        return print('YES!')
    print(n)
    logTimeTwo(n/2)
print(logTimeTwo(55))