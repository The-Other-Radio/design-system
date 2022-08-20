import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import PlayIcon from './assets/Play.svg';
import VolumeIcon from './assets/Volume.svg';
import MenuIcon from './assets/Menu.svg';
import './header.css';

export const Header = ({ }) => (
  <header>
    <div className="wrapper">
      <div className="nav-top">
        <div className="play-btn">
          <img src={PlayIcon} alt="Play" />
          <div>Play</div>
        </div>
        <div className="cur-info-vol">
          <div className="cur-info">NWFP w/ Phijos & rahat ft. Piá</div>
          <img src={VolumeIcon} alt="Volume" />
        </div>
      </div>
      <div className="nav-bot">
        <h1>The Other Radio</h1>
        <div className="menu-btn">
          <img src={MenuIcon} alt="Menu" className="menu-icon" />
          <div>Menu</div>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {

};

Header.defaultProps = {
  user: null,
};
