import React, { useState } from 'react';
const Form = (props) => {
    const {actions, data} = props;
    const [formData, setFormData] = useState({userName:''})

    const handleSubmit = (event) =>{
        event.preventDefault();
       actions.createUser(formData.userName);
    }
return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text'
        placeholder="github username"
        value={formData.userName}
        onChange={(event)=>{setFormData({...formData,userName: event.target.value })}}
        >
        </input>
        <button>Add Card</button>
    </form>
    </>
)
}
export default Form;