import React, { Fragment } from 'react';
import Planet from './planet';

const clickOnPlanet = (name) => {
    alert(`Um clique no planeta: ${name}`);
};

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr></hr>
            <Planet name="Mercúrio"
                description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
                link="https://pt.wikipedia.org/wiki/Mercúrio_(planeta)"
                clickOnPlanet={clickOnPlanet}
                title_with_underline={true}
            />

            <Planet name="Saturno"
                description="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
                clickOnPlanet={clickOnPlanet}
                gray
            />
        </Fragment>
    );
};

export default Planets;