import React, { Fragment } from 'react';

export const AnimateWrapper = ({animate, children}) => {
    return (
        <Fragment data-aos={animate} >
            {children}
        </Fragment>
    );
};
