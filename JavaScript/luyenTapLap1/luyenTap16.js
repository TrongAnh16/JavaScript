let i = 1;
let tong = 0;
let dem = 0;
while (dem < 30){
    if (i % 7 ==0){
        dem += 1;
        tong = tong + i;
    }
    i++;
}
document.write(tong);