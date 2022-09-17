import math 
def logLin(n):
    if n == 0:
       return "Done"
    n = math.floor(n/2)
    logLin(n)

print(logLin(12))