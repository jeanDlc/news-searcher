import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListaNews from './components/ListaNews';
import Spinner from './components/Spinner';
function App() {
  //definir la categoria
  const [categoria, guardarCategoria]=useState('');
  const [news, guardarNews]=useState([]);
  const [spinner, mostrarSpinner]= useState(false);
  useEffect(()=>{
    if(categoria==='') return;
    const llamadoApi=async ()=>{
      const apiKey='c357601ed666496eaa6d95bbe88e8a39';
      //const url=`https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`;
      const url=`https://saurav.tech/NewsAPI/top-headlines/category/${categoria}/us.json`
      const respuesta= await fetch(url);
      const news=await respuesta.json();
      mostrarSpinner(false);
      guardarNews(news.articles);
      guardarCategoria('');
      
    }
    llamadoApi();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="News App" />
      <div className="container mt-3">
        <Form 
          guardarCategoria={guardarCategoria}
          mostrarSpinner={mostrarSpinner}
        />
        {spinner? <Spinner/> : 
          <ListaNews news={news} />
        }
        
      </div>
    </Fragment>
  );
}

export default App;
