var n = Number(prompt("Nhập chiều cao tam giác: "));
for (var i = 0; i < n; i++) {
    for( j = 0; j <= i; j++ ) {
        document.write(" * ")
}
document.write("</br>");
}
document.write("</br>");

for (var i = n; i > 0; i-- ) {
    for ( j = i; j > 0; j-- ) {
        document.write(" * ")
}
document.write("</br>");
}
document.write("</br>");

for (var i = 1; i <= n; i++) {
    for( j = 1; j <= n; j++ ) {
        if (j > (n - i)){
                document.write("&nbsp*")
            }else{document.write("&nbsp&nbsp&nbsp")}
}
document.write("</br>");
}

document.write("</br>");

for (var i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (j >= i) {
            document.write("&nbsp*")
        }else{document.write("&nbsp&nbsp&nbsp")}
}
document.write("</br>");
}