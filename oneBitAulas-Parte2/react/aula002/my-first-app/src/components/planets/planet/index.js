import React from 'react';
import GrayImage from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/description_with_link';

const Planet = (props) => {
    const names = ['a', 'b', 'c', 'd', 'e', 'f'];

    let title;
    if (props.title_with_underline) title = <h4><u>{props.name}</u></h4>
    else title = <h4>{props.name}</h4>;

    return (
        <div onClick={() => props.clickOnPlanet(props.name)}>
            {title}
            <DescriptionWithLink description={props.description} link={props.link} name={props.name} />
            <GrayImage img_url={props.img_url} gray={props.gray} />

            <h4>Satelites</h4>
            <ul>
                {names.map(n => <li>Satelite {n}</li>)}
            </ul>
            <hr></hr>
            <h4>Asteróides</h4>
            <ul>
                {['B89734', 'D00188', '01LKLNM', '10OMJM'].map(n => <li>{n}</li>)}
            </ul>
        </div>
    );
};

export default Planet;