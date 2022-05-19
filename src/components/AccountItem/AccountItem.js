import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './AccountItem.modile.scss';

const cx = classNames.bind(styles);

AccountItem.propTypes = {};

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/521fd1462b9bcdd9f8723613f65af3e8~c5_100x100.jpeg?x-expires=1652907600&x-signature=13hnef%2BpTPfG6lFWVYZooCq9RGI%3D"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>
                </p>
                <span className={cx('user-name')}>nguyenthehoang</span>
            </div>
        </div>
    );
}

export default AccountItem;
