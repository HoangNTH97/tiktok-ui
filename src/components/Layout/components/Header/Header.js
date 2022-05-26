import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import React from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import image from '../../../../assets/images/index';
import Button from '../../../Button/Button';
import {
    CoinIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    ProfileIcon,
    SettingIcon,
    UploadIcon,
} from '../../../icons/icons';
import Image from '../../../Image/Image';
import Menu from '../../../Popper/Menu/Menu';
import Search from '../Search/Search';

import styles from './Header.module.scss';

const cx = classNames.bind(styles); // Ở đây sử dụng css module nhé

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'languages',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'languages',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true; // Biến này dùng để check nếu có curren-user thì sẽ render current-user nếu không có thì sẽ render trạng thái chưa đăng nhập

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'Feedback and help',
            to: '/user',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="" />
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/521fd1462b9bcdd9f8723613f65af3e8~c5_100x100.jpeg?x-expires=1653465600&x-signature=zPpKM0Tpj%2BV5Ag64JevkhDceeC4%3D"
                                alt="PNT"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
