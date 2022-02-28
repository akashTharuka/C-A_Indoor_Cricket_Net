import React from 'react';

const EventScheduler = () => {

    return (
        <div className='container-fluid mx-auto'>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FColombo&showTitle=0&showDate=1&showPrint=0&showCalendars=0&mode=WEEK&src=Y2FpbmRvb3I0NEBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IubGsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043" style={{borderWidth: 0, width: "100%", minHeight: "600px"}} frameBorder="0" scrolling="no" title='Bookings'></iframe>
        </div>
    );
}

export default EventScheduler;