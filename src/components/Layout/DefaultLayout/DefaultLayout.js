import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import Header from '../components/Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
        // Layout mặc định , children ở đây là các pages
    );
}

export default DefaultLayout;
