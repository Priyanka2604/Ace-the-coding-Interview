func containsNearbyDuplicate(nums []int, k int) bool {
    arr := map[int]bool{}

    for i := 0; i < len(nums); i++{
        if _, ok := arr[nums[i]]; ok {
            return true;
        }

        arr[nums[i]] = true
        if len(arr) > k {
            delete(arr, nums[i-k])
        }
    }

    return false;
}