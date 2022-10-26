for (i = 1; i <= 6; i++) {
    for (j = 1; j <= 8; j++) {
        if (i == 1 && (j == 2 || j ==3 || j == 6 || j == 7) ||
            i == 2 && (j == 1 || j ==4 || j == 5 || j == 8) ||
            i == 3 && (j == 1 || j ==8) ||
            i == 4 && (j == 2 || j ==7) ||
            i == 5 && (j == 3 || j ==6) ||
            i == 6 && (j == 4 || j ==5)) {
                document.write("&nbsp&nbsp*");
            }else{
                document.write("&nbsp&nbsp&nbsp&nbsp");
            }
    }
    document.write("<br>");
}