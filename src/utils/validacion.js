

export function validarTexto(input) {
    const regex = /^[a-zA-Z]*$/;   // solo permite letras
    return regex.test(input);
  }
 export function validarNombre(nombre) { 
    const regex = /^[A-Z][a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return nombre.length > 0 && regex.test(nombre) ; // solo texto que empiecen con mayuscula && nombre.trim() === nombre
  }

 export function validarContrasena(contrasena) {
    // Expresión regular para validar la contraseña
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    // Comprueba si la contraseña coincide con la expresión regular
    if (regex.test(contrasena)) {
      // La contraseña es válida
      return true;
    } else {
      // La contraseña es inválida
      return false;
    }
  }

  /*
  Esta expresión regular tiene las siguientes características:

^: coincide con el inicio de la cadena.
(?=.*[A-Za-z]): asegura que al menos haya una letra en la cadena.
(?=.*\d): asegura que al menos haya un dígito en la cadena.
[A-Za-z\d]{8,}: coincide con caracteres alfanuméricos de longitud mínima 8.
$: coincide con el final de la cadena.
  */