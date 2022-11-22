import React, { Fragment } from 'react';
import Planet from './planet';

const clickOnPlanet = (name) => {
    alert(`Um clique no planeta: ${name}`);
};

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [
                {
                    name: "Mercúrio",
                    description: "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
                    link: "https://pt.wikipedia.org/wiki/Mercúrio_(planeta)"
                },
                {
                    name: "Saturno",
                    description: "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
                }
            ]
        };
    };

    removeLast = () => {
        let new_planets = [...this.state.planets];
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }));
    };

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1];
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }));
    };

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remover o último</button>
                <button onClick={this.duplicateLastPlanet}>Duplicar o último</button>
                <hr></hr>
                {
                    this.state.planets.map((planet) => {
                        return <Planet
                            name={planet.name}
                            description={planet.description}
                            img_url={planet.img_url}
                            link={planet.link}
                            clickOnPlanet={clickOnPlanet}
                        />
                    })
                }
            </Fragment >
        );
    };
};

export default Planets;