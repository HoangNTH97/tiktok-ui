import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '../Popper';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />);
    };

    return (
        <div>
            <Tippy
                interactive
                delay={[0, 700]}
                placement="bottom-end" // vị trí của tippy
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
