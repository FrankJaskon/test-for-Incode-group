import React from 'react';
import classNames from 'classnames';
import preloader from '../../assets/spinner.svg';

import s from './Preloader.module.css';

const Preloader = ({preloaderClass}) => {
    return <div className={classNames(s.preloader, preloaderClass)}>
        <img src={preloader} alt='preloader' />
    </div>
}

export default Preloader;