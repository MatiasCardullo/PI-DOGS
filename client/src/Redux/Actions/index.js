import axios from '../../axios';
export const GET_BREEDS = 'GET_BREEDS';
export const GET_BREED_DETAIL = 'GET_BREED_DETAIL';
export const CREATE_BREED = 'CREATE_BREED';
export const SET_FILTERED = 'SET_FILTERED';
export const SET_LOADING = 'SET_LOADING';
export const ORDER_ASC = 'ORDER_ASC';
export const ORDER_DESC = 'ORDER_DESC';
export const SET_BREEDS = 'SET_BREEDS';


export function getBreeds() {
  return function (dispatch) {

    return axios.get("/dogs")
      .then(response => response.data)
      .then(json => {
        dispatch({ type: GET_BREEDS, payload: json });
      });


  };
}

export function getBreedDetail(id) {
  return function (dispatch) {
    return axios.get("/dogs/" + id)
      .then(response => response.data)
      .then(json => {
        dispatch({ type: GET_BREED_DETAIL, payload: json });
      });
  };
}

export function setFiltered(payload) {
  return { type: SET_FILTERED, payload };
};

export function setLoading(payload) {
  return { type: SET_LOADING, payload };
};

export function ordenar(order, category) {

  return { type: order === 'asc' ? ORDER_ASC : ORDER_DESC, payload: category };
};

export function setBreeds(payload) {

  return {
    type: SET_BREEDS, payload
  }
}
