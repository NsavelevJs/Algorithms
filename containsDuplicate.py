def containsDup(arr):
    hashSet = set()
    for i in arr:
        if i in hashSet:
            return True
        hashSet.add(i)
    return False

thisList = [1,4,3,2,1]
thatList = [2,51,100,5,52,111,231]
otherList = [1,2,5,3,5,2,1,5,3,2]
print(containsDup(thisList))
print(containsDup(thatList))
print(containsDup(otherList))
# sets cannot have duplicates 
# there for when you check if i is in the hast set it will automatically true because then it would be a dulpicate 
# time complexity: O(n)
# space complexity: O(n) *because we're using a set
