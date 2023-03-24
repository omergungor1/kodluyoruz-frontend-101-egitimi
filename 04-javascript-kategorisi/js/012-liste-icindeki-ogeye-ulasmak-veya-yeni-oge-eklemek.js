// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********
console.log(!!2);

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

// ulDOM.append(liDOM) // en sona ekler
ulDOM.prepend(liDOM)


var money;
var canBuy =
    (money < 17) ? "Satın alamazsın.." :
        (money > 30) ? "Satın alabilirsin.." :
            "Para miktarını girmen gerekmektedir..";

console.log('CanBuy=: ' + canBuy) 