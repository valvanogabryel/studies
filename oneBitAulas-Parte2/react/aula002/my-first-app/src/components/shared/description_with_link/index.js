import React, { Fragment } from 'react';

const DescriptionWithLink = (props) => {
    if (props.link) {
        return (
            <Fragment>
                <p>{props.description}</p>
                <a href={props.link} target="_blank">{props.name}</a>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <u><p>{props.description}</p></u>
            </Fragment>
        )
    };
};

export default DescriptionWithLink;