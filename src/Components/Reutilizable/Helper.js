export const HelperAlerta = (presupuesto, restante) =>{
    
    let alerta

    if ( (presupuesto / 4) > restante ) {
    
        alerta = 'badge badge-danger p-2 mt-2 mb-2'
    
    }else if ( (presupuesto / 2) > restante ) {
     
        alerta = 'badge badge-warning p-2 mt-2 mb-2'
    
    }else{
        alerta = 'badge badge-success p-2 mt-2 mb-2'
    }

    return alerta

}