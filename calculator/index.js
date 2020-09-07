const popup = document.getElementById('popup');
const selectLength = document.getElementById('select-length');
const selectWidth = document.getElementById('select-width');
const button = document.getElementById('button');

button.addEventListener('click', function(e) {
    const result = calc(selectLength.value * selectWidth.value / 4);
    const resultArr = arr.length > result.arr.length ? result.arr.concat(0) : result.arr;

    let ansver = ''
    arr.forEach(function (el, i) {
       ansver = i === 0 ? ansver : ', ' + ansver;
       ansver = resultArr[i] + ' packs of ' + el + 'pcs' + ansver;
    });

    popup.firstChild.data = 'You will need ' + ansver + '.';
    popup.classList.add('active');
});

popup.lastElementChild.addEventListener('click', function (e) {
   e.target.parentElement.classList.remove('active');
});

arr = [8, 6];

function compare(newResult, result) {
    return newResult.rem <= result.rem ? newResult : result;
}

function calc(base, i = 0, arrInt = []) {
       const rem = base % arr[i];
       const int = (base - rem) / arr[i];
       const result = {
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