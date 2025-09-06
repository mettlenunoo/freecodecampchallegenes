
# QUESTION:
# Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half

# The string can contain any characters.• The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
# If there's an odd number of characters in the string, ignore the center character.

# STEPS TO SOLVE:

# Define the vowel set: a, e, i, o, u (treat upper/lower the same).

# Measure the string length n. Compute mid = floor(n / 2).

# If n is even: left half = s[0..mid-1], right half = s[mid..n-1].
# If n is odd: ignore the center character — left = s[0..mid-1], right = s[mid+1..n-1].

# Count vowels in left and in right (case-insensitive).

# Compare counts — equal → halves have same number of vowels.

# Tests
# isBalanced("racecar") //should return true.

# isBalanced("Lorem Ipsum") //should return true.

# isBalanced("Kitty Ipsum") //should return false.

# isBalanced("string") //should return false.

# isBalanced("") //should return true.

# isBalanced("abcdefghijklmnopqrstuvwxyz") //should return false.

# isBalanced("123A#b!E&*456-o.U") //should return true.

def isBalanced(s):
    vowels = set('aeiou')
    n = len(s)
    mid = n // 2

    left_count = 0
    right_count = 0

    if n % 2 == 0:
        for i in range(mid):
            if s[i].lower() in vowels:
                left_count += 1
        for i in range(mid, n):
            if s[i].lower() in vowels:
                right_count += 1
    else:
        for i in range(mid):
            if s[i].lower() in vowels:
                left_count += 1
        for i in range(mid + 1, n):
            if s[i].lower() in vowels:
                right_count += 1

    return left_count == right_count

print(isBalanced("racecar")) #should return true.
print(isBalanced("Lorem Ipsum")) #should return true.
print(isBalanced("Kitty Ipsum")) #should return false.
print(isBalanced("string")) #should return false.
print(isBalanced("")) #should return true.
print(isBalanced("abcdefghijklmnopqrstuvwxyz")) #should return false.
print(isBalanced("123A#b!E&*456-o.U")) #should return true.