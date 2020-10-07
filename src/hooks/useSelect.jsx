import React, {useState} from 'react';
import { act } from 'react-dom/test-utils';
const useSelect = (stateInicial, opciones) => {
    //state del custom hook
    const [state, actualizarState]= useState(stateInicial);    
    const selectNews=()=>(
        <div className="form-group">
              <select 
                name=""
                className="custom-select"
                onChange={e=>actualizarState(e.target.value)}
                value={state}
                >
                 <option value='' disabled>Seleccione...</option>
                 {opciones.map(opcion=>(
                     <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                 ))}
             </select>   
        </div>
       
    );
    return [state, selectNews];
}
 
export default useSelect;