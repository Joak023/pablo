const recitales = ['Los Piojos', 'La Renga', 'El Duki'];
const ubicaciones = ['Campo', 'Platea', 'Palco'];
// crear constante ubicaciones con las tres ubicaciones posibles;
let sinEntradas = true;
function sacarEntradas(){
    do{
        let recitalSelecionado = false;
        const recital = prompt(`
            ¿Que entradas queres?
            1- Los Piojos.
            2- La Renga
            3- El Duki`);
        for (let index = 0; index < recitales.length; index++) {
            const reci = recitales[index];
            recitalSelecionado = recital === reci;
            if (recitalSelecionado) {
                break;
            }
        }
        
        if(recitalSelecionado){
           let recitalUbicacion = false; 
             const ubicacion = prompt(
                `¿Que ubicacion quiere?
                1-Campo
                2-Platea
                3-Palco`);
            for (let index = 0; index < ubicaciones.length; index++) {
                const lugar = ubicaciones[index];
                recitalUbicacion = lugar === ubicacion;
                if(recitalUbicacion) {
                    break;
                
                }
            }    
            // validar que ingreso alguna de estas tres opciones
            //si es valida la ubicacion
            if (recitalUbicacion) {
                const confirmaEntrada = confirm(`¿Confirma que va a comprar una entrada para el recital de ${recital} y la ubicacion ${ubicacion}?`);
                if(confirmaEntrada) {
                    alert('Compra realizada con exito')
                    sinEntradas = false;
            
                }
            }else{
                alert('Cancela compra')
                console.error("Cancelacion de la compra")
            }
        }
        else{
            alert('Cancelo la compra')
            console.error("Cancelacion de la compra")
      
        }
        
    
    }while(sinEntradas)
}
sacarEntradas();

