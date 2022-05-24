import React, { useState } from 'react';
import { forwardRef } from 'react';
import classNames from 'classnames';

import images from '../../assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    // Khi không truyền fallback thì nó sẽ lấy cái mặc định là images.noImage
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage); // Ở đây là trường hợp lỗi xảy ra
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
