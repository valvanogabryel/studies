import React from 'react';
import GrayImage from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/description_with_link';

const Planet = (props) => {
    let title;
    if (props.title_with_underline) title = <h4><u>{props.name}</u></h4>
    else title = <h4>{props.name}</h4>;

    return (
        <div onClick={() => props.clickOnPlanet(props.name)}>
            {title}
            <DescriptionWithLink description={props.description} link={props.link} name={props.name} />
            <GrayImage img_url={props.img_url} />
        </div>
    );
};

export default Planet;