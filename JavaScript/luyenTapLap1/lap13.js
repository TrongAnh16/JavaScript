let f0 = +prompt("Enter the F(0): ");
let f1 = +prompt("Enter the F(1): ");
for (let i = 0; i < 20; i++) {
    document.writeln(`     ${f0}`);

    const a = f0;
    f0 = f1;
    f1 = f1 + a;

}