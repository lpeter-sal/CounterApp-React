import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {


  return (
    <>
      <h1>CounterApp</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}

      <p> { value } </p>
    </>
  );
}


//Validacion de los propTypes
CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
