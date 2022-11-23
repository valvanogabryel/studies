import React, { Fragment, useState } from "react";

const initialState = {
    name: '',
    description: '',
    img_url: '',
    link: ''
};

const Form = (props) => {
    const [fields, setFields] = useState(initialState);

    const handleFieldsChange = event => setFields({
        ...fields,
        [event.currentTarget.name]: event.currentTarget.value
    });

    const handleSubmit = event => {
        props.addNewPlanet(fields);
        event.preventDefault();
        setFields(initialState);
    };

    return (
        <Fragment>
            <h3>Adicionar planeta:</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <label htmlFor="description">Descrição:</label>
                    <input type="text" id="description" name="description" value={fields.description} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <label htmlFor="img_url">URL da imagem:</label>
                    <input type="text" id="img_url" name="img_url" value={fields.img_url} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <label htmlFor="link">Link da página:</label>
                    <input type="text" id="link" name="link" value={fields.link} onChange={handleFieldsChange}></input>
                </div>
                <br />
                <input type="submit" />
            </form>
        </Fragment >
    );
};

export default Form;