import React, { useState, useEffect } from 'react';
import GrayImage from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/description_with_link';
import SatelliteForm from './form';

const getSatellites = async (id) => {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
};

const Planet = props => {
    const [satellites, setSatellites] = useState([])

    useEffect(() => {
        getSatellites(props.id)
            .then(data => {
                setSatellites(data['satellites'])
            });
    }, []);

    let title;
    if (props.title_with_underline) title = <h4><u>{props.name}</u></h4>
    else title = <h4>{props.name}</h4>;

    const addNewSatellite = satelliteToAdd => {
        setSatellites([...satellites, satelliteToAdd]);
    };

    return (
        // <div onClick={() => props.clickOnPlanet(props.name)}>
        <div>
            {title}
            < DescriptionWithLink description={props.description} link={props.link} name={props.name} />
            <GrayImage img_url={props.img_url} gray={props.gray} />
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
        </div>
    );
};

export default Planet;



