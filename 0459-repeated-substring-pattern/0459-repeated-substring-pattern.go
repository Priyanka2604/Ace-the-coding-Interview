func repeatedSubstringPattern(s string) bool {
     ss := s
    for i := 0; i < len(s)-1; i++ {
        s = string(s[len(s)-1]) + string(s[:len(s)-1])

        if ss == s {
            return true
        }
    }

    return false
}