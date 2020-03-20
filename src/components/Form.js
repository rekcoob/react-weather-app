import React from 'react';


const Form = (props) => (
    <form onSubmit={props.getPocasie}>
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="country" placeholder="country" />
        <button>Get Weather</button>
    </form>

)

export default Form;