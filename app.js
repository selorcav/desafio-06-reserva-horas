var registrar = document.getElementById("registrar");

registrar.addEventListener("click", function(){

    var rut = document.getElementById("rut").value;
    const patronRut = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gim;
    var nombre = document.getElementById("nombre").value;  
    const patronNombre = /[a-zA-Z]/gim;
    var apellidos = document.getElementById("apellidos").value;  
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    const patronCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;
    var especialidad = document.getElementById("especialidad").value;
    var calendario = document.getElementById("calendario").value;
    console.log(calendario)
    var hora = document.getElementById("hora").value;  
    console.log(hora);

    if(nombre ==''|| apellidos==''|| edad==''||correo ==''|| especialidad ==''){
        alert('Aún hay campos vacíos. Debes llenar todos los campos.')
    }else if(!rut.match(patronRut)){
        alert('Introduce un rut válido.')
    }else if(!nombre.match(patronNombre)){
        alert('Tu nombre solo debe contener letras.');
    }else if(!apellidos.match(patronNombre)){
        alert('Tu apellido solo debe contener letras.');
    }else if(edad.length>3){
        alert('Introduce una edad correcta.');
    }else if(!correo.match(patronCorreo)){
        alert('Introduce un correo válido.');
    }else{
        alert('Estimado(a) ' + nombre + ' ' + apellidos +', su hora para '+ especialidad+' ha sido reservada para el día ' + calendario + ' a las ' + hora + '. Además, se le envió un mensaje a su correo '+ correo+' con el detalle de su cita. Gracias por preferirnos.');
        return true 
    }
});