
const formulario = document.getElementById("contacto__form");
const inputs = document.querySelectorAll("#contacto__form input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}

const campos = {
    nombre : false,
    email : false,
    asunto : false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, "nombre");
            break; 
            case "email":
                validarCampo(expresiones.correo, e.target, "email");
            break;
            case "asunto":
                validarCampo(expresiones.asunto, e.target, "asunto");
            break;
    }
    
}


const validarCampo = (expresion, input, campo) => {   
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove("formcontacto__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formcontacto__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add("formcontacto__grupo-incorrecto");
        document.querySelector(`#grupo__${campo}`).classList.remove("formcontacto__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

// EJEMPLO

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.email && campos.asunto ){
		formulario.reset();

		document.getElementById('formcontacto__mensaje-exito').classList.add('formcontacto__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formcontacto__mensaje-exito').classList.remove('formcontacto__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formcontacto__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formcontacto__grupo-correcto');
		});
	} else {
        document.getElementById('formcontacto__mensaje').classList.add('formcontacto__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formcontacto__mensaje').classList.remove('formcontacto__mensaje-activo');
        }, 3000);
    }
});

