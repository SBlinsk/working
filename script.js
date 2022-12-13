'use strict';

function calculateVolumeAndArea(a) {
if (typeof(a)==="number" && Number.isInteger(a) === "true" && a > 0){
    const volume = Math.pow(a, 3);
    const length = 6 * Math.pow(a, 2);
    let result = "Объем куба: `${volume}`, площадь всей поверхности: `${length }`";
    console.log(result);
} else {console.log("При вычислении произошла ошибка");}
}

calculateVolumeAndArea(2);
