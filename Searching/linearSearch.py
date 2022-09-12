def linSearch(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return 'Not home'

thisArray = [17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
thatArray = [17, 200, 23, 20, 31, 67, 41, 13, 47, 53, 50]    
print(linSearch(thisArray, 19))