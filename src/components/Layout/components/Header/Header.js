import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles); // Ở đây sử dụng css module nhé

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>{/* {logo} */}</div>
        </header>
    );
}

export default Header;
