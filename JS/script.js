let output = document.querySelector(".output");
let outputBox = document.querySelector(".output-box");
let getBody = document.body;

function getValue() {
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    let alpha = document.getElementById('alpha').value;

    getBody.style.background = `rgba(${red},${green},${blue},${alpha})`;
    output.innerHTML = `rgba(${red},${green},${blue},${alpha})`;
    outputBox.style.background = `rgba(${red},${green},${blue},${alpha})`;
}


let copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener("click", copy);

function copy() {
    let color = output.innerText;
    // console.log(color);

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = color;
    tempTextArea.setAttribute('readonly', '');
    tempTextArea.style.position = 'absolute';
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    tempTextArea.remove();


    let alert = ""
    copyBtn.innerHTML = "✔️";

    alert = copyBtn.innerHTML;

    setTimeout(() => {
        window.location.reload();
    }, 2000)

}