func longestConsecutive(nums []int) int {
    set := make(map[int]bool)
    for _, num := range nums {
        set[num] = true
    }

    max := 0

    for num := range set {
        if !set[num-1] {
            curr := num
            len := 1

            for set[curr+1] {
                curr++
                len++
            }

            if len > max {
                max = len
            }
        }
    }

    return max
}