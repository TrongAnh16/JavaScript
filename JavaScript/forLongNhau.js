let sout;
sout = "<table border='1' width = '300' cellspacing='0' cellpadding='3'>"
for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        sout = sout + "<td>" + i*j + "</td>";
    }
    sout = sout + "<tr>";
}
document.write(sout);