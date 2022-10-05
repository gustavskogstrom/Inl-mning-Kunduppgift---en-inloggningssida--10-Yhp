
const knapp = document.getElementById("knapp"); 
const mainContent = document.querySelector(".form-content");
const secondContent = document.querySelector(".second_content");
const checkLogin = localStorage.getItem("check");
const error = document.getElementById("error");
const loggaut = document.getElementById("loggaut");

knapp.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == "Sara" && password == "qwe123") {
        mainContent.classList.add("loggedin");
        secondContent.classList.add("loggedin");
        localStorage.setItem("check", "yes");
    } else {
        error.innerHTML = "Ditt namn eller lösennord är fel!";
    }
});
function kolla(){
    if (checkLogin) {
        mainContent.classList.add("loggedin");
        secondContent.classList.add("loggedin");
    }
    
};

kolla();
loggaut.addEventListener("click", function(){
    localStorage.clear();
    mainContent.classList.remove("loggedin");
    secondContent.classList.remove("loggedin");
});

