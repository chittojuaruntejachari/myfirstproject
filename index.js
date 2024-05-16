function passVis() {
    console.log("fun called");
    document.getElementById("eyeButton").setAttribute("class", "fa-solid fa-eye");
    document.getElementById("pass").type = "text";
}

function passInVis() {
    console.log("fun called");
    document.getElementById("eyeButton").setAttribute("class", "fa-solid fa-eye-slash");
    document.getElementById("pass").type = "password";
}