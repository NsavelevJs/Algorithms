def twoSum(nums, target):
    hashMap = {}
    for i in range(len(nums)):
        if nums[i] not in hashMap:
            hashMap[target - nums[i]] = i
        else:
            return [hashMap[nums[i]], i]

arr = [2,5,10,25]
tar = 30
print(twoSum(arr, tar))