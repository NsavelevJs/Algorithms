import math 
def logLin(str):
    print(str)
    if len(str) < 1:
        return
    midIndex = math.floor(len(str) / 2)
    divide = slice(0, midIndex)
    logLin(divide) 

print(logLin("abcdefghijklmnopqrstuvwxyz"))

# does not work and will be fixed.