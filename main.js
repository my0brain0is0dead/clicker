// Получение переменных доступа к кнопкам
const clickerButton = document.querySelector ("#clickerButton")
const resetButton = document.querySelector("#resetButton")

// Счетчик кликов
let clickCounter = 0

// Получение кол-ва кликов и привязка этого количества к названию
let get__ = localStorage.getItem("clickCounter")
clickCounter = get__
clickerButton.innerHTML = clickCounter

// Cлушает клики по кликерной кнопке, сохраняет их кол-во и меняет счетчик
clickerButton.addEventListener ("click", function() {
    clickCounter++
    let set__ = localStorage.setItem("clickCounter", clickCounter)
    clickerButton.innerHTML = clickCounter
});
// Обнуляет количество кликов
resetButton.addEventListener ("click", function() {
    clickCounter = 0
    let set__ = localStorage.setItem("clickCounter", clickCounter)
    clickerButton.innerHTML = clickCounter
});

