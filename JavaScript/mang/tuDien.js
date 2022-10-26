function dich(){
    let eng = ["banana", "apple"];
    let vie = ["chuối", "táo"];
    let text = document.getElementById("text").value;
    let transcript;
    for (let i=0; i<eng.length; i++) {
        transcript = "not found";
        if (text == eng[i]) {
            transcript = vie[i];
            break;
        }
    } 
    document.getElementById("transcript").innerHTML = transcript;
}

