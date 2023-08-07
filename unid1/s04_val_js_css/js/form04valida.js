const fnValidar04 = () => {

    let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia ="";
	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++){
		if(elementoPref[i].checked){
			valorElegidoPreferencia=elementoPref[i].value;
			eligioPreferencia = true;
		}
	}
	if(!eligioPreferencia){
		alert("Elija una preferencia...");
		return false;
	}else{
		alert("Sus preferencias elegidas son" + valorElegidoPreferencia);
    }
    return true
	alert(elementoPref);
}