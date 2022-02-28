import React from 'react';

import MapElement from './MapElement';

const Location = () => {
    return (
        <div className='Location container-fluid p-3 my-3'>
            <h3 className="topic display-6 text-uppercase text-center">Find us here</h3>
            <div className="row my-5">
                <div className="col-10 mx-auto my-4">
                    <MapElement />
                </div>
            </div>
        </div>
    );
}

export default Location;