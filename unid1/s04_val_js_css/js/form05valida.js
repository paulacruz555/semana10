const fnValidar05 = () => {
    var xTexto = document.getElementById("txtTexto").value;
	if (!(/^\d{3}\s\d{3}\s\d{3}$/.test(xTexto))) {
		alert("Escriba 9 numeros agrupados entre 3 y sepadarados por un espacio...");
		return false;
	}
	
    var xNumero= document.getElementById("txtNumero").value;
    if(!(/^\d{9}$/.test(xNumero))) {
        alert("Falta Numeros....");
        return false;
    }
	
    var xFijo = document.getElementById("txtFijo").value;
    if(!(/^05[45]\s\d{9}$/.test(xFijo))) {
        alert("NUMERO DE TELEFONO FIJO...");
        return false;

    }

    return true;
	
}