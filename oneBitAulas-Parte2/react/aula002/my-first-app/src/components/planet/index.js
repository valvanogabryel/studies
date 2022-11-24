import React, { useState, useEffect } from 'react';
import GrayImage from '../shared/gray_img';
import DescriptionWithLink from '../shared/description_with_link';
import SatelliteForm from './form';
import { useParams, useNavigate } from 'react-router-dom';
import NotFoundScreen from '../../screen/notFound';

const getPlanet = async (id) => {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
};

const Planet = () => {
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanets] = useState({});
    const [redirectFunction, setRedirect] = useState(false);
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getPlanet(id)
            .then(data => {
                setSatellites(data['satellites']);
                setPlanets(data['data']);
            }, error => {
                setRedirect(true);
            });
    }, []);

    const goToPlanets = () => {
        navigate('/');
    };

    let title;
    if (planet.title_with_underline) title = <h4><u>{planet.name}</u></h4>
    else title = <h4>{planet.name}</h4>;

    const addNewSatellite = satelliteToAdd => {
        setSatellites([...satellites, satelliteToAdd]);
    };

    if (redirectFunction)
        navigate('NotFoundScreen')

    return (
        // <div onClick={() => planet.clickOnPlanet(planet.name)}>
        <div>
            {title}
            < DescriptionWithLink description={planet.description} link={planet.link} name={planet.name} />
            <GrayImage img_url={planet.img_url} gray={planet.gray} />
            <SatelliteForm addNewSatellite={addNewSatellite} />

            <h2>Satelites</h2>

            <ul>
                {
                    satellites.map((satellite, index) =>
                        <li key={index}>{satellite.name}</li>
                    )
                }
            </ul>
            <hr></hr>
            <button type='button' onClick={goToPlanets}>Voltar à listagem</button>

        </div>
    );
};

export default Planet;



