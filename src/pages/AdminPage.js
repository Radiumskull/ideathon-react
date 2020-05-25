import React, { useState } from 'react';

import RegTypeDash from '../components/Admin/RegTypeDash'
import RegisteredList from '../components/Admin/RegisteredList'

const AdminPage = (props) => {
    const [listType, changeList] = useState('all');
    return(
        <div className="admin-page">
            <RegTypeDash />
            <RegisteredList list={listType}/>
            
        </div>
    );
}

export default AdminPage;