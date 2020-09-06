
const selectLength = document.getElementById('select-length');
const selectWidth = document.getElementById('select-width');
const button = document.getElementById('button');

button.addEventListener('click', function(e) {
    const result = calc(selectLength.value * selectWidth.value / 4);
    value =
    popup.classList.add('active');
});


arr = [8, 6];

function compare(newResult, result) {
    return newResult.rem <= result.rem ? newResult : result;
}

function calc(base, i = 0, arrInt = []) {
       const rem = base % arr[i];
       const int = (base - rem) / arr[i];
       let result = {
           rem: rem,
           arr: arrInt.concat(int)
       }
       if (rem === 0) return result;

       let newResult = compare({
               rem: Math.abs(rem - arr[i]),
               arr: arrInt.concat(int + 1)
       }, result);

       if (i !== arr.length - 1) {
           newResult = compare(newResult, calc(rem,i + 1, arrInt.concat(int)));
           newResult = compare(newResult, calc(base, i + 1, arrInt.concat(0)));
       }

       return newResult;
}