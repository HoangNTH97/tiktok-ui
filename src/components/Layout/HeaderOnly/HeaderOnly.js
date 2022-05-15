import React from 'react';
import Header from '../components/Header/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
    // Layout cho các page đặc biệt children nhận được ở đây chính là các page đặc biệt
}

export default HeaderOnly;
