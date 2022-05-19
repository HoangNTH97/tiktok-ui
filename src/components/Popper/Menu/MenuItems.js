import React from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '../../Button/Button';

const cx = classNames.bind(styles);

MenuItems.propTypes = {};

function MenuItems({ data }) {
    return (
        <div>
            <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItems;
