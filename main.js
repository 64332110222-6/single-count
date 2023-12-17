// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0
const counter = document.querySelector(".counter");
let count = 0;
let plus = document.querySelector(".btn-inc")
let minus = document.querySelector(".btn-dec")
let clear = document.querySelector(".btn-clr")
let number = document.querySelector(".number")
plus.onclick = function(){
    count++;
    number.innerText = count;
}
minus.onclick = function(){
    count--;
    if(count<0){
        count = 0;
    }
    number.innerText = count;
}
clear.onclick = function(){
    count = 0;
    number.innerText = count;
}