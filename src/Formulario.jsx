export function Formulario(e) {
  e.preventDefault();
  let loader = document.querySelector(".loader"),
    text = document.querySelector(".text-exito"),
    errorEmail = document.querySelector(".error_email"),
    errorNombre = document.querySelector(".error_nombre"),
    errorAll = document.querySelectorAll(".error");
  function loadFormulario() {
    loader.classList.add("active");
    fetch("https://formsubmit.co/ajax/pabloyucragutierrez@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        text.textContent = "Formulario enviado con éxito";
        loader.classList.remove("active");
        console.log(json);
        e.target.reset();
      })
      .catch((err) => {
        loader.classList.remove("active");
        text.textContent = `Error ${err.status}: ${err.statusText}`;
      })
      .finally(() =>
        setTimeout(() => {
          text.textContent = "";
        }, 3000)
      );
  }
  let expEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-\s]+)*$/,
    expName =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
  if (
    !expName.test(e.target.nombres.value) &&
    !expEmail.test(e.target.email.value)
  ) {
    errorAll.forEach((el) => {
      el.classList.add("active");
    });
  } else if (!expEmail.test(e.target.email.value)) {
    errorNombre.classList.remove("active");
    errorEmail.classList.add("active");
  } else if (!expName.test(e.target.nombres.value)) {
    errorEmail.classList.remove("active");
    errorNombre.classList.add("active");
  } else {
    errorAll.forEach((el) => {
      el.classList.remove("active");
    });
    loadFormulario();
  }
}
