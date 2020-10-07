import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';
const ListaNews = ({news}) => {
    if(Object.keys(news).length===0) return null;
    
    return ( 
        <div className="row">
            {news.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
     );
}
ListaNews.propTypes={
    news: PropTypes.array.isRequired
}
export default ListaNews;