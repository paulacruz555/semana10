const fnValidar02 = () => {

    let xTextu = document.getElementById("txtTextu").value;
    if(xTextu=="" ||/^\s+$/.test(xTextu)) {
        alert("Escriba un texto");
        return false;
   
    }

    let elementoEstado = document.getElementsByName("radEstado");
    let valorElegidoPreEstado = "";
    let eligioEstado = false;
    for(let i=0; i < elementoEstado.length;i++){
        if(elementoEstado[i].checked){
            valorElegidoPreEstado = elementoEstado [i].value;
            eligioEstado = true;
        }
    }
    
    let elementoPref = document.getElementsByName("chkPrefer");
    let valorElegidoPreferencia = "";
    let eligioPreferencia = false;
    for (let i=0; i < elementoPref.length; i++) {
        if (elementoPref[i].checked){
            valorElegidoPreferencia = elementoPref[i].value;
            eligioPreferencia = true;
        }
    }

    if(!eligioEstado){
        alert("Elija un Género");
        return false;
    }else{
        alert("Su estado civil es "+valorElegidoPreEstado)
    }
    
    if(!eligioPreferencia){
        alert("Elija 2 preferencias");
        return false;
    }else{
        alert("Su preferencia elegida es "+valorElegidoPreferencia);
    }

    return true;
    
}