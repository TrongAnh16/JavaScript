let f0 = 0;
let f1 = 1;
let tong = 0;
for (let i = 0; i < 20; i++) {
    
    const a = f0;
    f0 = f1;
    f1 = f1 + a;
    
}
tong = tong + f1 -1;
document.write(`Tổng của 20 số đầu tiên trong dãy Fibonacci:  ${tong}`);