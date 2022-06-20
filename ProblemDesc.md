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
