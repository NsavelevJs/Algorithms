def binSearch(arr, x):
    low = 0 
    high = len(arr) - 1
    mid = 0 
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] < x:
            low = mid + 1 
        elif arr[mid] > x:
            high = mid - 1
        else:
            return mid
    return 'No one home!'

thisArray = [17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
thatArray = [17, 200, 23, 20, 31, 67, 41, 13, 47, 53, 50];
print(binSearch(thisArray,19))
print(binSearch(thatArray,31))