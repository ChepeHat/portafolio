import { validaInputs, validaTextAreas } from "./validaciones.js";


const input = document.querySelectorAll("formcontacto__input");
const textarea = document.querySelectorAll("formcontacto__textarea");
const botonDescargaCv = document.getElementById("title__network__item-descarga");
const botonDescargaPort = document.querySelector("experiencia__boton--rep");


inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validaInputs(input.target);
    });
});

textareas.forEach((textarea) => {
    textarea.addEventListener("blur", (textarea) => {
        validaTextAreas(textarea.target);
    });
});


