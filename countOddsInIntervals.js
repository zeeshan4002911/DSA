/*
Count Odd Numbers in an Interval Range
Easy
1.4K
93
Companies

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

 

Constraints:

    0 <= low <= high <= 10^9

*/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    let count = 0;
    let start = (low % 2) ? low : low + 1;
    while (start <= high) {
        count++;
        start += 2;
    }
    return count;
};