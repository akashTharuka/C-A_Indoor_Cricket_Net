import React from 'react';

const MapElement = () => {
    return (
        <div className='embedded-map mx-auto'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.982629060452!2d79.92252441477275!3d6.892680795019399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25138514423cb%3A0x981f4120a1d021d1!2sC%26A%20Indoor%20Cricket%20Net!5e0!3m2!1sen!2slk!4v1646079287761!5m2!1sen!2slk" style={{border: 0, height: "70vh", width: "80vw"}} allowFullScreen="" loading="lazy" title='directions'></iframe>
        </div>
    );
}

export default MapElement;