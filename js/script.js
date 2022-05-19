let inputs = document.querySelectorAll('.form__input');
let labels = document.querySelectorAll('.loginForm__row label');

for (let input of inputs) {
  for (let label of labels) {    
    if (input.getAttribute("id") === label.getAttribute("for")) {
      input.onclick = function () {
        label.classList.add("focused");

        if (input.getAttribute("id")==="login") {
          input.value = "7 (___) ___-__-__";
          let mask = input.value;
          input.setSelectionRange(3,3);
          input.oninput = function() {
            this.value = this.value.replace(/[^\d]/g,'');
          }
        }
      }

      input.onblur = function () {
        label.classList.remove("focused");
        input.value = '';
      }       
    }
  }
}