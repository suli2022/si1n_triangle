let baseInput = document.querySelector('#base')
let heightInput = document.querySelector('#height')
let areaInput = document.querySelector('#area')
let calcButton = document.querySelector('#calcButton')

// console.log(baseInput, heightInput, areaInput, calcButton)

if(calcButton) {
    calcButton.addEventListener('click', () => {    
        workInput()   
     })     
}

function workInput() {
    let base = Number(baseInput.value)
    let height = Number(heightInput.value)
    let area = calcTriangleArea(base, height)
    areaInput.value = area
    console.log(area)
}

function calcTriangleArea(base, height) {
    if ( base <= 0 || height <=0) {
        throw new Error('Hiba! Az érték nem megfelelő!');
    }
    return base * height / 2
}

function checkInput(input) {
    //Szabályos kifejezések
    let res = input.match(/^[0-9]+$/);
    if(res) {
        return true;
    }else {
        return false;
    }
}