let array = [1, 2, 3, 4, 5];


function logArray() {
    console.log("Array:", array);
}

function alertArray() {
    alert("Array: " + array.join(", "));
}

function truncateArray() {
    let confirmation = confirm("Sizning arrayingizdan bitta son olib tashlamoqchimiz");

    if (confirmation) {
        let removedElement = array.pop();
        console.log("Ochirilgan son:", removedElement);
        alert("Ochirilgan son: " + removedElement);
    } else {
        alert("exit");
    }

    logArray();
}

logArray();
alertArray();
truncateArray();