alert("안녕하세요~ 개인사진전에 오신걸 환영합니다!");

function fun1(){
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    // text = x + "+" + y + "=" + (x+y);
    let text = `${x} + ${y} = ${x+y} <br>`;
        text += `${x} - ${y} = ${x-y} <br>`;
        text += `${x} * ${y} = ${x*y} <br>`;
        text += `${x} / ${y} = ${x/y} <br>`;
        
    document.getElementById("result").innerHTML = text
}