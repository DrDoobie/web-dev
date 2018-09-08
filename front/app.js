var userInp = document.getElementById("userInp");
userInp.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) 
        validate(e);
    }
);

function validate(e) {
    var text = e.target.value;
    window.open(href = "results.html");
    //search(text);
}

function func () {
    let userInp = document.querySelector("#userInp").value;
    window.open(href = "results.html");
    //search(userInp);
}

function search (value) {
    document.write(value);
}