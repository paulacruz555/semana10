const fnValidar01 = () => {
    let xTexto =document.getElementById("txtTexto").value;
    if (xTexto == "" || /^\s+$/.test(xTexto)) {
        alert("FALTA TEXTO...");
        return false
        
    }

    let xNumero = document.getElementById("txtNumero").value;
    if(xNumero=="") {
        alert("Falta NUMERO....")
        return false;
    }


/// si todo va bien ///
	return true;
}