let temp = +prompt("Enter the temp: ");
let i = 1;
while (i > 0) {
    if (temp > 20 && temp < 100) {
        temp = +prompt("Enter the temp: ");
    }
    if (temp < 20) {
        temp = +prompt("Please increase temp: ");
    }
    if (temp > 100) {
        temp = +prompt("Please decrease temp: ");
    }
    
}
