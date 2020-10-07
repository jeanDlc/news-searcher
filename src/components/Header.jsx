import React from 'react';
import PropTypes from 'prop-types';
const Header = ({titulo}) => {
    return ( 
    <div className="bg-primary p-3">
        <p className="m-0 display-4 text-center text-light">{titulo}</p>
    </div>
     );
}
Header.propTypes={
    titulo: PropTypes.string.isRequired
}
export default Header;