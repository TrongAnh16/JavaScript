
do {
     var diem = +prompt("Enter the diem");
}
while (diem < 0 || diem > 10 || Number.isNaN(diem))
    document.write(diem);
