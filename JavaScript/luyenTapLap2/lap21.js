let f0 = 0;
let f1 = 1;
let i = 0;
document.write('Dãy số fibonacci với 20 số: ');
for (i = 0; i < 20; i++) {
    document.write(`  ${f0} ,`);
    const a = f0;
    f0 = f1;
    f1 = f1 + a;
}
