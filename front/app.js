var userInp = document.getElementById("userInp");
userInp.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) 
        validate(e);
    }
);

function validate(e) {
    var text = e.target.value;
    search(text);
}

function func () {
    let userInp = document.querySelector("#userInp").value;
    search(userInp);
}

function search (value) {
    document.write(value);
}