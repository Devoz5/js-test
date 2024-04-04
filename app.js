let round = prompt("วันนี้คุณรับประทานอาหารกี่อย่างคับ ?");
let sum = 0;
for(let i =0; i<round; i++){
    let call = prompt("แคลลอรี่");
    sum = sum + parseInt(call)
    document.getElementById('main').innerHTML += "ที่ "+ (i+1) + " " + call + " แคลลอรี่" + "<br>"
 

}
document.getElementById("sum").innerHTML = "ผลรวมแคลลอรี่" + "" + sum;

console.log(typeof sum)