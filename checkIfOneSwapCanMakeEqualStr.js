/*
Check if One String Swap Can Make Strings Equal
Easy
815
42
Companies

You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

 

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.

Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.

 

Constraints:

    1 <= s1.length, s2.length <= 100
    s1.length == s2.length
    s1 and s2 consist of only lowercase English letters.


*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1 === s2) return true;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] == s2[i]) continue;
        let j = i;
        while (j < s2.length) {
            if (s1[i] != s2[j]) {
                j++;
                continue;
            }
            let arr = s2.split("");

            // swapping the i and j index element
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            if (s1 == arr.join("")) return true;
            j++;
        }
        return false;
    }
};