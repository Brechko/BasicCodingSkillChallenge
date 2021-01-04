"use strict"

const inputValue = document.querySelector('.mainInput'),
      arrayValue = document.querySelector('.array-field'),
      resultValue = document.querySelector('.result-field');

const inputValueArray = [];

const print = (elem, body) => {
    elem.innerHTML = body;
}

const onChangeValue = (e) => {
    inputValueArray.push(e.target.value);
    print(arrayValue, inputValueArray);
    filter(inputValueArray);
    inputValue.value = '';
}

const filter = (arr) => {
    const lastValue = inputValueArray[inputValueArray.length -1]

    const result = arr.filter((value) => value === lastValue);

    print(resultValue, result.length);
}

inputValue.addEventListener('change', onChangeValue);