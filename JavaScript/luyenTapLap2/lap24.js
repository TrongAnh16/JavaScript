let dai = Number(prompt("Nhập chiều dài: "));
let rong = Number(prompt("Nhập chiều rộng: "));
for (i = 1; i <= rong; i++) {
  for (j = 1; j <= dai; j++) {
    if (i == 1 || i == rong || j == 1 || j == dai) {
      document.write("*");
    } else {
      document.write("&nbsp&nbsp");
    }
  }
  document.write("<br>");
}
