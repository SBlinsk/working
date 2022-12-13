'use strict';
// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'



//Вариант 1(не рабоатет)
function calculateVolumeAndArea(a) {
if (typeof(a) ==="number" && Number.isInteger(a) === "true" && a > 0){
    const volume = Math.pow(a, 3);
    const length = 6 * Math.pow(a, 2);
    let result = `Объем куба: ${volume}, площадь всей поверхности: ${length }`;
    console.log(result);
} else {console.log("При вычислении произошла ошибка");}
}

calculateVolumeAndArea(2);

//Вариант 1(рабоатет)
function calculateVolumeAndArea(a) {
    if (typeof(a)!=="number" || a < 0 || Number.isInteger(a) === "false"){
        console.log("При вычислении произошла ошибка");
    }
    const volume = Math.pow(a, 3);
    const length =  6 * Math.pow(a, 2);
    let result = `Объем куба: ${ volume }, площадь всей поверхности: ${length }`;
    console.log(result);
}
calculateVolumeAndArea(2);