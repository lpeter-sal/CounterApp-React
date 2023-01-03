
// function saludoNombre() {
//   return "Hola Pedro!!!";
// }

// const getTotal = (a,b) => {
//   return a + b;
// }

import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle} ) => {

  //console.log(props)


  return (
    <>
      <h1>{ title }</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}

      <p> { subTitle } </p>
    </>
  );
}



FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}


FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo'
}