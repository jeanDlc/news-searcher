import React from 'react';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';
const Form = ({guardarPais,guardarCategoria, mostrarSpinner}) => {
    const OPCIONES=[
        {value: 'general', label: 'General'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'}
    ];
    const opcionesPaises=[
        {value: 'us', label: 'USA'},
        {value: 'au', label: 'Australia'},
        {value: 'ru', label: 'Russia'},
        {value: 'fr', label: 'France'},
        {value: 'gb', label: 'United Kingdom'}
    ];
    //utilizar custom hook
    const [categoria, SelectNews]= useSelect('general', OPCIONES);
    const [pais, SelectPais]=useSelect('us', opcionesPaises);
    //submit al formulario
    const buscarNews=(e)=>{
        e.preventDefault();
        if(categoria==='') return;
        mostrarSpinner(true);
        guardarPais(pais);
        guardarCategoria(categoria);
    }
    return ( 
        <div className="p-3 bg-primary mb-3 rounded">
            <form onSubmit={buscarNews} >
                <h2 className="text-center text-white mb-3">Find your Category</h2>
                <div className="row">
                    <SelectNews/>
                    <SelectPais/>
                </div>
                <button type="submit" className="btn btn-light">Search Now</button>
            </form>
        </div>
     );
}
Form.propTypes={
    guardarCategoria: PropTypes.func.isRequired,
    mostrarSpinner: PropTypes.func.isRequired
}
export default Form;