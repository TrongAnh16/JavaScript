function check() {
  let number = Number(document.getElementById("number").value); //nhập giá trị từ bàn phím số lượng prime cần in ra
  let count = 0; //đếm số lượng prime xem có lớn hơn number chưa?
  let n = 2;
  let demPrime = true;
  while (count < number) {
    demPrime = true;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        demPrime = false;
        break;
      }
    }
    if (demPrime) {
      count++;
      document.getElementById("prime").innerHTML += `${n} <br>`;
    }
    n++;
  }
}
