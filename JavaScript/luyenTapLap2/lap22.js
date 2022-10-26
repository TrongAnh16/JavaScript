let a = Number(prompt("Nhập số cần tính giai thừa: "));
let result = 1;

for (var i = 1; i <=a; i++) {
   result *= i;
}
document.write(`Giai thừa của ${a} là: ${result}`);