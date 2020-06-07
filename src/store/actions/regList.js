import axios from 'axios';
import * as actionTypes from './actionTypes';


export const listUpdate = (regList) => {
    return {
        type: actionTypes.REGLIST_UPDATE,
        regList : regList,
    };
};



export const regListUpdate = (tokenString) => {
    return dispatch => {
        axios.get("https://stackhack-backendserver.herokuapp.com/reg/registration", { headers : { Authorization: tokenString }}).then(res => {
            dispatch(listUpdate(res.data.Registrations));
        }).catch(e => {
            console.log(e);
        })
    }
}