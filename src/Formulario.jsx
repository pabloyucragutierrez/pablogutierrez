// export function Formulario(e) {
//   e.preventDefault();
//   let loader = document.querySelector(".loader"),
//     text = document.querySelector(".text-exito"),
//     errorEmail = document.querySelector(".error_email"),
//     errorNombre = document.querySelector(".error_nombre"),
//     errorMensaje = document.querySelector(".error_mensaje"),
//     btnSubmit = document.querySelector(".btnSubmit"),
//     errorAll = document.querySelectorAll(".error");
//   function loadFormulario() {
//     loader.classList.add("active");
//     btnSubmit.disabled = true;
//     fetch("https://formsubmit.co/ajax/pabloyucragutierrez@gmail.com", {
//       method: "POST",
//       body: new FormData(e.target),
//     })
//       .then((res) => (res.ok ? res.json() : Promise.reject(res)))
//       .then((json) => {
//         text.textContent = "Formulario enviado con éxito";
//         loader.classList.remove("active");
//         btnSubmit.disabled = false;
//         console.log(json);
//         e.target.reset();
//       })
//       .catch((err) => {
//         loader.classList.remove("active");
//         btnSubmit.disabled = false;
//         text.textContent = `Error ${err.status}: ${err.statusText}`;
//       })
//       .finally(() =>
//         setTimeout(() => {
//           text.textContent = "";
//         }, 3000)
//       );
//   }
//   let expEmail =
//       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-\s]+)*$/,
//     expName =
//       /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
//     expMensaje = /^\s*$/;
//   if (
//     !expName.test(e.target.nombres.value) &&
//     !expEmail.test(e.target.email.value) &&
//     !expMensaje.test(e.target.mensaje.value)
//   ) {
//     errorAll.forEach((el) => {
//       el.classList.add("active");
//     });
//   } else if (!expEmail.test(e.target.email.value)) {
//     errorNombre.classList.remove("active");
//     errorMensaje.classList.remove("active");
//     errorEmail.classList.add("active");
//   } else if (!expName.test(e.target.nombres.value)) {
//     errorEmail.classList.remove("active");
//     errorMensaje.classList.remove("active");
//     errorNombre.classList.add("active");
//   } else if (!expMensaje.test(e.target.mensaje.value)) {
//     errorEmail.classList.remove("active");
//     errorNombre.classList.remove("active");
//     errorMensaje.classList.add("active");
//   } else {
//     errorAll.forEach((el) => {
//       el.classList.remove("active");
//     });
//     loadFormulario();
//   }
// }




export function Formulario(e) {
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
        text.textContent = "Formulario enviado con éxito";
        loader.classList.remove("active");
        btnSubmit.disabled = false;
        console.log(json);
        e.target.reset();
      })
      .catch((err) => {
        loader.classList.remove("active");
        btnSubmit.disabled = false;
        text.textContent = `Error ${err.status || 'Error desconocido'}: ${err.statusText || 'error con el texto'}`;
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
    expMensaje = /.+/; // Cambiado para permitir mensajes no vacíos

  // Limpiar errores
  errorAll.forEach((el) => el.classList.remove("active"));

  // Validar campos
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
