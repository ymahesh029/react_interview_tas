// import * as actions from "../Actions/actionTypes";
// import * as actions from "../action/actionTypes";
import * as actions from "../action/actionTypes"
const initialState = {
    members: [],
    member: {},
    loading: false,
    error: false,
    pagination: {
        pagesCount: 0,
        memberCount: 0
    }
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // // GET ALL MEMBER
        // case actions.GET_ALL_MEMBER_REQUEST:
        //     return { ...state, loading: true, error: false };
        // case actions.GET_ALL_MEMBER_SUCCESS:
        //     return { ...state, members: payload.data, pagination: payload.pagination, loading: false };
        // case actions.GET_ALL_MEMBER_FAILURE:
        //     return { ...state, loading: false, error: true };
        // // GET ONE MEMBER
        // case actions.GET_ONE_MEMBER_REQUEST:
        //     return { ...state, loading: true };
        // case actions.GET_ONE_MEMBER_SUCCESS:
        //     return { ...state, member: payload, loading: false };
        // case actions.GET_ONE_MEMBER_FAILURE:
        //     return { ...state, loading: false };
        // case actions.SEARCH_MEMBER_REQUEST:
        //     return { ...state, loading: true, error: false };
        // case actions.SEARCH_MEMBER_SUCCESS:
        //     return { ...state, members: payload, loading: false };
        // case actions.SEARCH_MEMBER_FAILURE:
        //     return { ...state, members: [], loading: false, error: true };
        // case actions.UPDATE_MEMBER_STATUS_REQUEST:
        //     return { ...state, loading: true };
        // case actions.UPDATE_MEMBER_STATUS_SUCCESS:
        //     return { ...state, loading: false };
        // case actions.UPDATE_MEMBER_STATUS_FAILURE:
        //     return { ...state, loading: false };
        default:
            return state;
        // GET ALL MEMBER

    }
};

export default userReducer;