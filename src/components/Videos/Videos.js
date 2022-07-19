import React from 'react';
import video from '../../assets/ExteriorNight.mp4';

function Videos() {
    return (
        <div>
            <video className="day" autoPlay muted loop>
                <source className="day-sunny" type="video/mp4" src={video} />
            </video>
        </div>
    );
}

export default Videos;
