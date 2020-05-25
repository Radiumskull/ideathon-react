import React from 'react';

import RegTypeBlock from './RegTypeBlock';


const RegTypeDash = () => {
    return(
        <div className="reg-type-dash">
            <RegTypeBlock title="Self" count="12"/>
            <RegTypeBlock title="Corporate" count="36"/>
            <RegTypeBlock title="Group" count="56"/>
            <RegTypeBlock title="Other" count="14"/>
        </div>
    );
}

export default RegTypeDash;