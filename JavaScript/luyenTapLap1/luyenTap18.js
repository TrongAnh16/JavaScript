function start() {
  let min = Number(prompt("Nhập giới hạn dưới"));
  let max = Number(prompt("Nhập giới hạn trên"));
  let rdm = Math.round(Math.random() * (max - min) + min);

  for (var i = 1; i <= 3; i++) {
    let guessNum = Number(prompt(`Nhập số bạn đoán lần ${i}: `));
    if (guessNum == rdm) {
      alert("Chuẩn xác!");
      break;
    } else if (rdm > guessNum) {
      alert("Số bạn đoán nhỏ hơn số bí mật");
    } else {
      alert("Số bạn đoán lớn hơn số bí mật");
    }
  }
  if (i == 4) {
    alert("Bạn đã hết lượt đoán");
  }
}
