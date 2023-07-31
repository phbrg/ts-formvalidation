const elements = {
  username: document.querySelector(".username") as HTMLInputElement,
  email: document.querySelector(".email") as HTMLInputElement,
  password: document.querySelector(".password") as HTMLInputElement,
  rPassword: document.querySelector(".rPassword") as HTMLInputElement,
  errUsername: document.querySelector(".errUsername") as HTMLParagraphElement,
  errEmail: document.querySelector(".errEmail") as HTMLParagraphElement,
  errPassword: document.querySelector(".errPassword") as HTMLParagraphElement,
  errRPassword: document.querySelector(".errRPassword") as HTMLParagraphElement,
  btn: document.querySelector("#btn") as HTMLButtonElement
};

elements.btn.addEventListener("click", (event: Event): void => {
  event.preventDefault();
  if(usernameValidate() === false) error("Usuario invalido!", elements.errUsername); 
  if(emailValidate() === false) error("Email invalido!", elements.errEmail); 
  if(passwordValidate() === false) error("Senha invalida!", elements.errPassword); 
  if(rPasswordValidate() === false) error("Senha invalida!", elements.errRPassword); 
});

function error(msg: string, exit: HTMLParagraphElement): void {
  exit.style.display = "block";
  exit.innerHTML = msg

  setTimeout(() => {
    exit.style.display = "none";
  }, 5000);
}

function usernameValidate(): boolean {
  if(elements.username.value.length < 3 || elements.username.value.length > 12) return false;
  if(!/^[a-zA-Z0-9]+$/.test(elements.username.value)) return false;
  return true;
}

function emailValidate(): boolean {
  if(elements.email.value.length <= 0) return false;
  return true;
}

function passwordValidate(): boolean {
  if(elements.password.value.length < 6) return false;
  return true;
}

function rPasswordValidate(): boolean {
  if(elements.email.value.length <= 0) return false;
  if(elements.rPassword.value !== elements.password.value) return false;
  return true;
}