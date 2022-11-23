import React, { Fragment, useState } from "react";

const initialState = {
    name: ''
}

// Fiz em forma de array, o form não limpava desse jeito

// Na forma de objeto, o componente passa de 'uncontrolled' para 'controlled'

// const SatelliteForm = props => {
//     const [fields, setSatellites] = useState(initialState);

//     const handleChange = event => setSatellites([
//         event.currentTarget.value
//     ]);

//     const handleSubmit = event => {
//         props.addNewSatellite({ name: fields });
//         event.preventDefault();
//         setSatellites(initialState);
//     };

//     return (
//         <Fragment>
//             <h3>Cadastrar satélites: </h3>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name"></label>
//                     <input type="text" id="name" value={fields.name} name="name" onChange={handleChange} />
//                 </div>
//                 <br />
//                 <input type="submit" value="Enviar"></input>
//             </form>

//         </Fragment>
//     );
// };

//FORMA FEITA PELO PROFESSOR:

const SatelliteForm = props => {
    const [fields, setFields] = useState(initialState);

    const handleFieldsChange = event => setFields({
        ...fields,
        [event.currentTarget.name]: event.currentTarget.value
    });

    const handleSubmit = event => {
        props.addNewSatellite(fields);
        event.preventDefault();
        setFields(initialState);
    };

    return (
        <Fragment>
            <h3>Cadastrar satélites: </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange} />
                </div>
                <br />
                <input type="submit" value="Enviar"></input>
            </form>

        </Fragment>
    );
};



export default SatelliteForm;