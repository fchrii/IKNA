const loginFrom = document.getElementById("login-form");
const loginSubmit = document.getElementById("login-submit");
const loginMsg = document.getElementById("login-error");

loginSubmit.addEventListener("click", (e) =>
{
    e.preventDefault();
    const username = loginFrom.username.value;
    const password = loginFrom.password.value;

        if (username === "ikna" && password === "100309"){
            alert("Kamu telah sukses login");
            location.reload();
        } else {
            loginMsg.style.opacity = 1;
        }
})
