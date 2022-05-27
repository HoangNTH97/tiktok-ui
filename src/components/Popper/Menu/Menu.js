import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '../Popper';
import MenuItems from './MenuItems';
import HeaderMenu from './HeaderMenu';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; // convert sang boolean, nghĩa là thằng nào không có children thì sẽ là undefined và trả về false
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // ở đây điều kiện là thằng cha có item con là children thì mới được
                            setHistory((prev) => [...prev, item.children]); // Nghĩa là khi ta click thì nó sẽ set vào cái mảng history này 1 cái item mới là item.children, lúc mày mảng history vẫn chứa item cũ nhưng ta sẽ luôn show cái item cuối cùng chính là cái mới được thêm vào này
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            offset={[12, 8]} // căn chỉnh vị trí
            placement="bottom-end" // vị trí của tippy
            hideOnClick={hideOnClick} // Không ẩn đi khi click vào avatar
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <HeaderMenu
                                title={'Language'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
