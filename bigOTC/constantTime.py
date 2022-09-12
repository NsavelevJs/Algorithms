# constant time complexity algo

def foo(n):
    result = 0 
    # iterates a fixed number of times.
    for i in range(5): 
        result += n
# and only changes n in constant time due to arithmatics
    
    return result

print(foo(4))

thisArray = [3,5,1,4,7]

# once again shows the first and the last element
# and multiplies them also O(1) time complexity. 
def bar(arr): 
    return arr[0] * arr[len(arr) - 1]

print(bar(thisArray))
