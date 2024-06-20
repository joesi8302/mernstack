
import * as actionTypes from "../actionTypes"

let initialState = {
    notifications : []
};

// let notification = {
//     id : "",
//     description : "",
//     checked : false,
//     type: ""
// }

let notificationReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_NOTIFICATION:
            console.log("GRABBING NOTIFICATIONS: " + state.notifications);
            console.log("adding notification: " + JSON.stringify(action.payload));
            let notification = action.payload;
            
            return {...state, notifications: [...state.notifications, notification]};

        case actionTypes.UPDATE_NOTIFICATION_STATUS:
            let updatedNotifications = state.notifications.map(notification => {
                if (notification.id === action.payload) {
                    return {...notification, checked: true};
                }
                return notification;
            });

            return {...state, notifications: updatedNotifications};

        default:
            return state;
    }

}


export default notificationReducer;