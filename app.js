const loginInput = document.querySelector("#login-form #hi");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function LinkCLick(event) {
//     console.dir(event);
//     console.log(event.defaultPrevented);

//     alert("clicked!");
//     alert("clicked!");
// }
//link.addEventListener("click", LinkCLick);

const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmit);
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}
console.log(loginInput);