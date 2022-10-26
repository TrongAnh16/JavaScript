let bang;
bang = "<table border = '1' cellspacing = '0' cellpadding = '3' width = '100%'>"
for (i = 1; i < 10; i++) {
        bang = bang + "<tr>";
    for (j = 1; j < 10; j++) {
        bang = `${bang} <td> ${j} x ${i} = ${i*j} </td>`
    }
        bang = bang + "</tr>";
}
document.write(bang);