import * as actionTypes from "../actionTypes"


export const AddNotification = (notification) => {
    return {
        type : actionTypes.ADD_NOTIFICATION,
        payload : notification
    }
}

export const UpdateNotification = (id) => {
    return {
        type : actionTypes.UPDATE_NOTIFICATION_STATUS,
        payload : id
    }
}