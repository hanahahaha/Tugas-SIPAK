const form = document.getElementById("form");
const username = document.getElementById("asal prodi");
const jamkeberangkatan = document.getElementById("username");
const jumlahtiket = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    //get the values form the inputs
    const ussernameValue = asalprodi.value.trim();
    const usseremailValue = username.value.trim();
    const usserjamkeberangkatanValue = password.value.trim();

    if (asalprodiValue === "") {
        //show error
        //add error class
        setErrorfor(asalprodi, "Asalprodi cannot be blank");
    }else {
        //add success class
        setSuccessFor(username);
    }
    if (emailValue === "") {
        setErrorFor(username, 'Username cannot be blank');
    }else if (isEmail, (emailValue)) {
        setErrorfor(username, "Username is not valid");
    }else {
        setSuccessFor(username);
    }
    if (passwordValue === "") {
        setErrorFor(password, "hours of depature cannot be blank");
    }else {
        setSuccessFor(password);
    }
}

function setErrorfor(input, message){
    const inputGroup = input.parentElement;
    const small = inputGroup.QuerySelector("small");

    //add error message inside small
    small.innerText = message;

    //add error class
    inputGroup.className = "input-group error"
}

function setSuccessFor(input){
    const inputGroup = input.parentElement;
    inputGroup.className = "input-group success"
}