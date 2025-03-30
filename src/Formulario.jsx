export function Formulario(e, language) {
  e.preventDefault();
  let loader = document.querySelector(".loader"),
    text = document.querySelector(".text-exito"),
    errorEmail = document.querySelector(".error_email"),
    errorNombre = document.querySelector(".error_nombre"),
    errorMensaje = document.querySelector(".error_mensaje"),
    btnSubmit = document.querySelector(".btnSubmit"),
    errorAll = document.querySelectorAll(".error");

  function loadFormulario() {
    loader.classList.add("active");
    btnSubmit.disabled = true;
    fetch("https://formsubmit.co/ajax/pabloyucragutierrez@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        text.textContent =
          language === "es"
            ? "Formulario enviado con éxito"
            : "Form sent successfully";
        loader.classList.remove("active");
        btnSubmit.disabled = false;
        console.log(json);
        e.target.reset();
      })
      .catch((err) => {
        loader.classList.remove("active");
        btnSubmit.disabled = false;
        text.textContent = `Error ${err.status || "unknown"}: ${
          err.statusText || "error with text"
        }`;
      })
      .finally(() =>
        setTimeout(() => {
          text.textContent = "";
        }, 3000)
      );
  }

  let expEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    expName =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
    expMensaje = /.+/;

  errorAll.forEach((el) => el.classList.remove("active"));

  let isValid = true;
  if (!expEmail.test(e.target.email.value)) {
    errorEmail.classList.add("active");
    isValid = false;
  }
  if (!expName.test(e.target.nombres.value)) {
    errorNombre.classList.add("active");
    isValid = false;
  }
  if (!expMensaje.test(e.target.mensaje.value)) {
    errorMensaje.classList.add("active");
    isValid = false;
  }

  if (isValid) {
    loadFormulario();
  }
}