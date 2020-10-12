(function() {
  let valid = {
    email: false,
    name: false,
  }

  document.getElementById('labelInput-email').onchange = (e) => {
    let user = e.target.value.substring(0, e.target.value.indexOf("@"));
    let domain = e.target.value.substring(e.target.value.indexOf("@")+ 1, e.target.value.length);

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

  document.getElementById('labelInput-name').onchange = (e) => {
    let name = e.target.value;

    name.length >= 1 ? isValid('name', true) : isValid('name', false);
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
})();


