import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RegTypeBlock from './RegTypeBlock';


const RegTypeDash = (props) => {
    const [ regTypes, updateRegTypes ] = useState({
        self : 0,
        other : 0,
        coorporate : 0,
        group : 0
    });
    useEffect(() => {
        axios.get('https://stackhack-backendserver.herokuapp.com/reg/count/self', { headers : { Authorization: props.tokenString }}).then(res => {
            updateRegTypes({...regTypes, self : parseInt(res.data.split(':')[1])})
        })
        axios.get('https://stackhack-backendserver.herokuapp.com/reg/count/coorporate', { headers : { Authorization: props.tokenString }}).then(res => {
            updateRegTypes({...regTypes, coorporate : parseInt(res.data.split(':')[1])})
        })
        axios.get('https://stackhack-backendserver.herokuapp.com/reg/count/group', { headers : { Authorization: props.tokenString }}).then(res => {
            updateRegTypes({...regTypes, group : parseInt(res.data.split(':')[1])})
        })
        axios.get('https://stackhack-backendserver.herokuapp.com/reg/count/other', { headers : { Authorization: props.tokenString }}).then(res => {
            updateRegTypes({...regTypes, other : parseInt(res.data.split(':')[1])})
        })
    })
    return(
        <div className="reg-type-dash">
            <RegTypeBlock title="Self" count={regTypes.self}/>
            <RegTypeBlock title="Corporate" count={regTypes.coorporate}/>
            <RegTypeBlock title="Group" count={regTypes.group}/>
            <RegTypeBlock title="Other" count={regTypes.other}/>
        </div>
    );
}

export default RegTypeDash;