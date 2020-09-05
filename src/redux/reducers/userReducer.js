import { DELETE_USER, USER_EDIT } from "./../constants/ActionType"

let initialState = {
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        },
        {
            id: 2,
            name: "Nguyen Dinh Phuc",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        }
    ],
    //tạo thêm state useredit
    userEdit: null,
    keyword: ""
};

//Hàm tìm vị trí
// timViTri = (id) => {
//     return this.state.userList.findIndex(user => {
//         return id === user.id;
//     })
// };

const userReducer = (state = initialState, action) => {

    // console.log(action);
    //do switch gửi về action.type nên muốn gửi lên phải gửi type
    switch (action.type) {
        //Hàm DELETE_USER
        case DELETE_USER:
            //console.log(action);
            let index = state.userList.findIndex((item) => {
                return item.id === action.id;
            })
            if (index !== -1) {
                let userList = [...state.userList];
                userList.splice(index, 1);

                //cập nhật lại mảng
                state.userList = userList;
            }

            return { ...state };
        case "ON_SAVE":
            //ADD USER
            //push theo action.user của mapDispatchToProps
            if (action.user.id) {

                let index = state.userList.findIndex((item) => {
                    return item.id === action.user.id;
                })
                if (index !== -1) {
                    const userList = [...state.userList];
                    userList[index] = action.user;
                    state.userList = userList;
                };


            } else {
                const userList = [...state.userList];
                const id = Math.random().toString(36).substr(2, 5);
                userList.push({ ...action.user, id });
                state.userList = userList;
            };


            return { ...state };
        //EDIT USER
        case USER_EDIT:
            state.userEdit = action.user;
            return { ...state };
        //SEARCH
        case "GET_KEYWORD":
            state.keyword = action.keyword;

            return { ...state };
        default:
            return { ...state };

    }
}

export { userReducer }