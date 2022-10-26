let i = 1;
let dem = 0;
while (dem < 100) {
    if (i%3 ==0 && i%5 == 0) {
        document.write("FizzBuzz");
    }else if (i%5 == 0) {
            document.write("Buzz");
    }else if (i%3 == 0) {
            document.write("Fizz");
    }else{ document.write(i);}
    
    dem++;
    i++;
}