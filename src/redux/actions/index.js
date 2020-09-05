import { DELETE_USER, USER_EDIT } from "./../constants/ActionType";

export const actDeleteUser = (id) => {
    // let action = {
    //     type: DELETE_USER,
    //     id //id: id
    // };
    // return action;

    return {
        type: DELETE_USER,
        id //id: id
    };

}
export const actUserEdit = (user) => {
    return {

        type: USER_EDIT,
        user //user:user
    };
}