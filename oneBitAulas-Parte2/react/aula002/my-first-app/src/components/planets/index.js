import React, { Fragment, useState, useEffect } from 'react';
import Planet from './planet';
import Form from './form';

// const clickOnPlanet = (name) => {
//     alert(`Um clique no planeta: ${name}`);
// };

const getPlanets = async () => {
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();
    return data;
}

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        getPlanets()
            .then(data => {
                setPlanets(data['planets'])
            });
    }, []);


    const removeLast = () => {
        let new_planets = [...planets];
        new_planets.pop();
        setPlanets(new_planets);
    };

    const duplicateLastPlanet = () => {
        let last_planet = planets[planets.length - 1];
        setPlanets([...planets, last_planet]);
    };

    const addNewPlanet = planetToAdd => {
        setPlanets([...planets, planetToAdd]);
    };

    return (
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={removeLast}>Remover o último</button>
            <button onClick={duplicateLastPlanet}>Duplicar o último</button>
            <hr />
            <Form addNewPlanet={addNewPlanet} />
            <hr />
            <br />
            <hr />
            {
                planets.map((planet, index) => {
                    return <Planet
                        id={planet.id}
                        name={planet.name}
                        description={planet.description}
                        img_url={planet.img_url}
                        link={planet.link}
                        title_with_underline
                        // clickOnPlanet={clickOnPlanet}
                        key={index}
                    />
                })
            }
        </Fragment >
    );
};

export default Planets;