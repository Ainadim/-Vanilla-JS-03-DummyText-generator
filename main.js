
const result = document.getElementById("result");
const submit = document.getElementById("submit");

function binaryNumber(e) {
    e.preventDefault();
    const number = document.getElementById("number").value;
    if (number === "") {
        alert("Type a valid number")
    } else if (number < 0) {
        alert("Type a positive number")
    } else {
        result.style.visibility = "visible";
    }
    convertNumber = Number(number).toString(2);
    result.innerText = convertNumber;
}

submit.addEventListener("click", binaryNumber)