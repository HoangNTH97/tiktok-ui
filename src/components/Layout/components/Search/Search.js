import React, { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchSevices from '../../../../apiServices/searchSevices';
import AccountItem from '../../../AccountItem/AccountItem';
import { SearchIcon } from '../../../icons/icons';
import { useDebounce } from '../../../../hooks';
import { Wrapper as PopperWrapper } from '../../../Popper/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // 1: '' Lần đầu tiên chạy searchValue là chuỗi rỗng truyền vào debounce cũng là chuỗi rỗng
    // 2: lần này và các lần tiếp theo nếu ngừng gõ thì giá trị debounce mới dc trả về
    const debounce = useDebounce(searchValue, 800);

    const searchRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        } // lần đầu tiên là chuỗi rỗng nên lọt vào đây

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchSevices.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]); //debounce  trả về khác chuỗi rỗng ban đầu => depedency thay đổi nên lọt vào đây và call Api

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        searchRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <TippyHeadless
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem data={result} key={result.id} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={searchRef}
                    value={searchValue}
                    type="text"
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
