// KMP - Knuth–Morris–Pratt
/*
    - The Brute Force:

    The naive approach to solving this is looking in s for 
    the first character in p.

    If a match is found we begin a search from that index, 
    call it i (for intersect).

    // s => [a,a,a,a,a,a,b]
    // p => [a,a,a,b]

    We compare the 2nd character of p with index i + 1 of s
    We compare the 3rd character of p with index i + 2 of s

    ...and so on until we have matched to all of p without either 
    having overrun s or having found a mismatch between characters 
    being compared.

    We can then return i as our answer.

    It doesn’t work well in cases where we see many matching 
    characters followed by a mismatching character.

    Complexities:

    Time: O( len(s) * len(p) )

    In a simple worst case we can have
    s = "aaaaaab"
    p = "aaab"

    The problem is that for each first character match we have the 
    potential to naively go into a search on a string that would 
    never yield a correct answer repeatedly.


    - Other Algorithms:

    There are three linear time string matching algorithms: KMP 
    (Knuth–Morris–Pratt), Boyer-Moore, and Rabin-Karp.

    Of these, Rabin-Karp is by far the simplest to understand and 
    implement


    - Analysis:

    The time complexity of the KMP algorithm is O(len(s) + len(p)) 
    "linear" in the worst case.

    The key behind KMP is that it takes advantage of the 
    succesful character checks during an unsuccessful pattern 
    comparison subroutine.

    We may have a series of many comparisons that succeed and then 
    even if one fails at the end, we should not repeat the comparison 
    work done since we already saw that a series matched.

    What we will do is very similar to the naive algorithm, it is 
    just that we save comparisons by tracking the longest propert 
    prefixes of pattern that are also suffixes.

    The key is that everytime we have a mismatch we try our best 
    to prevent going backwards in s and repeating comparisons.


    - Algorithm Steps:

    We will preprocess the pattern string and create an array that 
    indicates the longest proper prefix which is also suffix at each 
    point in the pattern string.

    A proper prefix does not include the original string.

    For example, prefixes of “ABC” are “”, “A”, “AB” and “ABC”. 
    Proper prefixes are “”, “A” and “AB”.

    For example, suffixes of "ABC" are, "", "C", "BC", and "ABC". 
    Proper prefixes are "", "C", and "BC".

    Why do we care about these?

    We know all characters behind our mismatch character match.

    If we can find the length of the longest prefix that matches a 
    suffix to that point, we can skip len(prefix) comparisons at the 
    beginning.

    The key reason we care about the prefix to suffix is because we 
    want to "teleport" back to as early in the string to the point 
    that we still know that there is a match.

    Our goal is to minimize going backwards in our search string.


    Complexities:

    Time: O( len(p) + len(s) )

    We spend len(p) time to build the prefix-suffix table and we 
    spend len(s) time for the traversal on average.

    Space: O( len(p) )

    Our prefix-suffix table is going to be the length of the pattern 
    string.
    */

/* 
    https://www.youtube.com/watch?v=BXCEFAzhxGY&ab_channel=BackToBackSWE
    https://www.youtube.com/watch?v=GTJr8OvyEVQ&ab_channel=TusharRoy-CodingMadeSimple
*/
