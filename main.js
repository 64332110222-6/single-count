// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0
const counter = document.querySelector(".counter");
let count = 0;
document.querySelector(".btn-inc").onclick = function(){
    count++;
    document.querySelector(".number").innerText = count;
}
document.querySelector(".btn-dec").onclick = function(){
    count--;
    if(count<0){
        count = 0;
    }
    document.querySelector(".number").innerText = count;
}
document.querySelector(".btn-clr").onclick = function(){
    count = 0;
    document.querySelector(".number").innerText = count;
}