let domain="kodluyoruz"
let isActive = false
let items = [1,2,3,isActive,domain]

console.log(items)

let emptyArray = []

// array boyutunu öğrenme
items.length

// array ilk elemanı 
items[0]

// Değişkenin türünü görmek 
Array.isArray(items)

// Dizi içinde farklı diziler oluşturma
let arr1 = [1,2,"bir string ifade",false,{title:"kodluyoruz"}];

let arr2 = [1,2,3,["dört","beş","altı"],7,8];
console.log(arr2[3][1]); // 5 Sonucunu verir.


document.querySelector("#info").innerHTML = items.length
