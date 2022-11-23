import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const handleChange = (e) => setName(e.currentTarget.value);

    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input type={text} id={name} value={name} onChange={handleChange}></input>
        </div>
    );
};

export default Form;