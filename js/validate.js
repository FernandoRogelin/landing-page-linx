function validateEmail(field) {
  let user = field.value.substring(0, field.value.indexOf("@"));
  let domain = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  let btn = document.getElementById('main-share-footer-submit');

  if ((user.length >=1) &&
      (domain.length >=3) &&
      (user.search("@")==-1) &&
      (domain.search("@")==-1) &&
      (user.search(" ")==-1) &&
      (domain.search(" ")==-1) &&
      (domain.search(".")!=-1) &&
      (domain.indexOf(".") >=1)&&
      (domain.lastIndexOf(".") < domain.length - 1))
      isValid('email', true);
    else
      isValid('email', false);
}

function validateName(field) {
  let name = field.value;

  name >= 1 ? isValid('name', true) : isValid('name', false);
}

let valid = {
  email: false,
  name: false,
}

function isValid(name, value) {
  valid[name] = value;
  let btn = document.getElementById('main-share-footer-submit');

  if (valid.email && valid.name) {
    btn.classList.remove("disabled");
    btn.removeAttribute("disabled", "");
  } else {
    btn.classList.add("disabled");
    btn.setAttribute("disabled", "");
  }
}
