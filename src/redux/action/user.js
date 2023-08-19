import * as actions from './actionTypes';
import axios from 'axios';
import { toast } from "react-toastify"

export const getAllMembers = (page = 1, searchTerm, condition) => async (dispatch) => {
  dispatch({
    type: actions.GET_ALL_MEMBER_REQUEST,
  });

  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/member/all?page=${page}&limit=10${searchTerm ? "&term=" + searchTerm : ""}${condition ? "&is_aprroved=" + condition : ""}`);

    dispatch({
      type: actions.GET_ALL_MEMBER_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: actions.GET_ALL_MEMBER_FAILURE,
    });
  }
}


export const addMembers = (payload) => async (dispatch) => {

  dispatch({
    type: actions.CREATE_MEMBER_SUCCESS,
  });
  let url = (`${process.env.REACT_APP_BASE_URL}/api/member`);

  try {
    const response = await axios.post(url, payload.formData);
    dispatch({
      type: actions.CREATE_MEMBER_SUCCESS,
      payload: response.data
    });
    payload.callback();
    setTimeout(() => toast.success("Member created successfully!"), 100)

  } catch (error) {
    dispatch({
      type: actions.CREATE__MEMBER_FAILURE,
    });
    toast.error("Something Went Wrong!")
  }
}


// memberDeatais
export const getMember = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_MEMBER });
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/member/${id}`);
    let products = res.data.data;
    dispatch({
      type: actions.GET_MEMBER_SUCCESS,
      payload: products,
    });
  } catch (error) {
    console.log("error", error)
    dispatch({ type: actions.GET_MEMBER_FAILURE });
  }
};

export const editMemberData = (payload, id) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_MEMBER_REQUEST });

  let url = (`${process.env.REACT_APP_BASE_URL}/api/member/${id}`);

  try {
    const res = await axios.patch(url, payload, {
      headers: {
        'Content-type': 'application/json',
      }
    });

    dispatch({
      type: actions.UPDATE_MEMBER_SUCCESS,
      payload: res.data.data,
    });
    payload.callback();
    setTimeout(() => toast.success("Member updated successfully!"), 100)

  } catch (error) {
    dispatch({ type: actions.UPDATE_MEMBER_FAILURE });
    toast.error("Something Went Wrong!")

  }
};


export const removeMember = (id, currentPage) => async (dispatch) => {
  const activePage = currentPage;
  dispatch({ type: actions.REMOVE_MEMBER_REQUEST });
  let url = (`${process.env.REACT_APP_BASE_URL}/api/member/${id}`
  );

  try {
    const res = await axios.delete(url, { data: { product: id } });

    dispatch({ type: actions.REMOVE_MEMBER_REQUEST, payload: res.data.data });
    dispatch(getAllMembers(activePage))
  } catch (error) {
    dispatch({ type: actions.REMOVE_MEMBER_FAILURE });
  }
};



export const editMemberStatus = (payload, id, currentPage) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_MEMBER_STATUS_REQUEST });
  const activePage = currentPage;

  const memberStatus = {
    _id: id,
    activeSwitch: payload
  }

  let url = (`${process.env.REACT_APP_BASE_URL}/api/member/${id}`);

  try {
    const res = await axios.patch(url, memberStatus, {
      headers: {
        'Content-type': 'application/json',
      }
    });

    dispatch({
      type: actions.UPDATE_MEMBER_STATUS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: actions.UPDATE_MEMBER_STATUS_FAILURE });
  } finally {
    dispatch(getAllMembers(activePage))
  }
};