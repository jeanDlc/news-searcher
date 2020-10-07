import React from 'react';
import errorImg from '../error.jpg';
import './noticia.css';
import PropTypes from 'prop-types';
const Noticia = ({noticia}) => {
    const {urlToImage,url, title,description}=noticia;
    const imagen=(urlToImage)? urlToImage : errorImg;
    
    return ( 
        <div className="col-lg-6 mb-2">
            <div className="p-3 bg-dark rounded-lg noticia">
                <img className="mw-100 mb-2" src={imagen} alt="imagen new"/>
                <h3 className="border-bottom pb-2">{title}</h3>
                <p>
                    {description==='' || description===null?
                    'The description is empty, please, visit the page. Click the button'
                    : 
                    description
                    }
                </p>                
                <a href={url} target="_blank" className="btn btn-light  d-block">More</a>
            </div>
        </div>
     );
}
Noticia.propTypes={
    news: PropTypes.object
}
export default Noticia;