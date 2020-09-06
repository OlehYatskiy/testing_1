const selectLength = document.getElementById('select-length');
const selectWidth = document.getElementById('select-width');
const button = document.getElementById('button');

button.addEventListener('click', function(e) {
    debugger;
    console.log(calc(15));
});


arr = [8, 6];



function calc(base, i = 0, arrInt = []) {
       const rem = base % arr[i];
       const int = (base - rem) / arr[i];
        if (rem === 0) return {
            rem: rem,
            arr: arrInt.concat(int)
        }
       let newResult = {};

       if (i === arr.length - 1) {
           newResult = {
               rem: Math.abs(rem - arr[i]),
               arr: arrInt.concat(int + 1)
               // arr: arrInt.slice(0, -1).concat(int + 1)
           }
       } else {
           newResult = calc(rem,i + 1, arrInt.concat(int));
       }
        if (newResult.rem <= rem) {
            let result = newResult;
            newResult = calc(base, i + 1);

            // if (newResult <= result.rem)
            return newResult;
            // return {
            //     rem: newResult.rem,
            //     arr: arrInt
            // }
        } else {
            return {
                rem: rem,
                arr: arrInt//arrInt.concat(int)
            }
        }
}