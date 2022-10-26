let f0 = +prompt("Enter the F(0): ");
let f1 = +prompt("Enter the F(1): ");

for (let i = 0; i < 10; i++) {
    
    const a = f0;
    f0 = f1;
    f1 = f1 + a;
    if (f1 % 5 ==0){
        document.write(`Số đầu tiên trong dãy Fibonacci chia hết cho 7 là:  ${f1}`);
    }
}
