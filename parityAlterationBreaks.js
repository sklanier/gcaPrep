/*
Let's say that an array follows an alternating parity pattern if it contains no two consecutive integers of the same parity (in other words, neither two consecutive even numbers nor two consecutive odd numbers).
Given an array of non-negative integers numbers, find if it contains elements that break the alternating parity pattern.
Return an index of the first element where the alternating parity pattern breaks, or -1 if there is no such element.
Example

    For numbers = [1, 2, 5, 3, 6], the output should be solution(numbers) = 3.
    Since both numbers[2] = 5 and numbers[3] = 3 are odd, the first element where the alternating parity pattern breaks is numbers[3].
    For numbers = [1, 4, 7, 2, 5, 6], the output should be solution(numbers) = -1.
    All elements in even-numbered positions (numbers[0] = 1, numbers[2] = 7 and numbers[4] = 5) are odd, and all elements in odd-numbered positions (numbers[1] = 4, numbers[3] = 2 and numbers[5] = 6) are even, therefore there is no elements where pattern breaks.

Input/Output

    [execution time limit] 4 seconds (js)
    [input] array.integer numbers
    An array of integers.

    Guaranteed constraints:
    1 ≤ numbers.length ≤ 1000,
    0 ≤ numbers[i] ≤ 109.

    [output] integer

    Return an index of the first element where the alternating parity pattern breaks, or -1 if there is no such element.
*/

/*
-----------------------------------------------------------------------------------------------------------------------
Tests
-----------------------------------------------------------------------------------------------------------------------

     [1, 2, 5, 3, 6] --> 3
     [1, 4, 7, 2, 5, 6] --> -1
     [0] --> -1
     [100, 100, 100, 100] --> 1
     [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40] --> -1
     [51, 52, 53, 54, 60] --> 4
     [1000000000, 1, 900000000, 2, 3, 4, 5] --> 3
     [972423194, 776100481, 736859790, 844690425, 823033043, 944853776, 971324293, 162355436] --> 4
     [278987595, 723712500, 181868340, 911972022, 971678045, 109002520, 936442861, 351571714, 615190353, 972198082] --> 2
     [28969601, 441869524, 436734027, 80539398, 110861487, 134300596, 342673051, 509389018, 623484865, 482540390] --> -1

*/

function solution(numbers){
    
}