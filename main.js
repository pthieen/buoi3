function exercise1() {
    let num = prompt("Nhập số nguyên dương: ");
    num = parseInt(num);

    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    alert(`Số ước số của ${num} là ${count}`);
}

function exercise2() {
    let result = [];

    for (let num = 2000; num <= 3200; num++) {
    if (num % 7 === 0 && num % 5 !== 0) {
        result.push(num);
        }
    }

alert(result);

}


function exercise3() {
    let product = 1;
    while (true) {
        let num = prompt("Nhập số thực: ");
        num = parseFloat(num);

        if (num > 0) {
            product *= num;
        } else if (num < 0) {
            continue;
        } else {
            break;
        }
    }

    alert('Tích của các số nhập vào là '+product);
}

function exercise4() {
    alert('23 con ga va 12 con tho')
}