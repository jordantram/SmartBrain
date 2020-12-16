import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="cb Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 120, width: 120 }} >
        <div className="Tilt-inner pa3"> <img alt='logo' src={brain} style={{ paddingTop: '0.8em' }}></img> </div>
      </Tilt>
    </div>
  );
};

export default Logo;