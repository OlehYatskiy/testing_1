const popup = document.getElementById('popup');
const selectLength = document.getElementById('select-length');
const selectWidth = document.getElementById('select-width');
const button = document.getElementById('button');

button.addEventListener('click', function(e) {
    const border = selectLength.value * selectWidth.value / 4;
    const resultArr = calc(border).arr;

    let ansver = ''
    packs.forEach(function (el, i) {
       ansver = i === 0 ? ansver : ', ' + ansver;
       ansver = resultArr[i] + ' packs of ' + el + 'pcs' + ansver;
    });

    popup.firstChild.data = 'You will need ' + ansver + '.';
    popup.classList.add('active');
});

popup.lastElementChild.addEventListener('click', function (e) {
   e.target.parentElement.classList.remove('active');
});

packs = [8, 6];

function calc(
    border,
    arrInt = Array.from(packs).fill(0),
    area = 0) {

    if (area >= border) {
        return {
            arr: arrInt,
            rem: area - border
        }
    }
    return packs.reduce((oldResult, pack, i) => {
        const newArrInt = Array.from(arrInt);
        newArrInt.splice(i, 1, arrInt[i] + 1);
        const result = calc(border, newArrInt, area + pack);

        return result.rem < oldResult.rem ? result : oldResult;
    }, { rem: packs[0] });
}