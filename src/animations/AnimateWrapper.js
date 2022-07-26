import React, { Fragment } from 'react';

export const AnimateWrapper = ({animate, children}) => {
    return (
        <Fragment >
            <div data-aos={animate} data-aos-offset="0">
                {children}
            </div>
        </Fragment>
    );
};
