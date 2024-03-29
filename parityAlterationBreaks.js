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
const t1 = [1, 2, 5, 3, 6];
const t2 = [1, 4, 7, 2, 5, 6];
const t3 = [0];
const t4 = [100, 100, 100, 100];
const t5 = [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40];
const t6 = [51, 52, 53, 54, 60];
const t7 = [1000000000, 1, 900000000, 2, 3, 4, 5];
const t8 = [972423194, 776100481, 736859790, 844690425, 823033043, 944853776, 971324293, 162355436];
const t9 = [278987595, 723712500, 181868340, 911972022, 971678045, 109002520, 936442861, 351571714, 615190353, 972198082];
const t10 = [28969601, 441869524, 436734027, 80539398, 110861487, 134300596, 342673051, 509389018, 623484865, 482540390];

function solution(numbers){
    //iterate over the array
    //sliding window technique
    for (let i = 0; i < numbers.length - 1; i++){
        //if the first number is even, the second number should be odd
        if (numbers[i] % 2 == 0){
            if (numbers[i+1] % 2 != 0){
                continue
            }
            else{
                return i + 1
            }
        }else if(numbers[i] % 2 != 0){
            if (numbers[i+1] % 2 == 0){
                continue
            }
            else{
                return i + 1
            }
        }
        //if the first number is odd, the second number should be even
    }
    return -1
}

console.log(solution(t1))
console.log(solution(t2))
console.log(solution(t3))
console.log(solution(t4))
console.log(solution(t5))
console.log(solution(t6))
console.log(solution(t7))
console.log(solution(t8))
console.log(solution(t9))
console.log(solution(t10))