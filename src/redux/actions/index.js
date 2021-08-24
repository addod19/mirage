const testAPI = () => (dispatch) => {
  fetch(`https://dashboard.nbshare.io/api/v1/apps/reddit`)
  .then((res) => res.json())
  .then((data) => dispatch({
    type: 'GET_DATA',
    payload: data.data,
  }));

};

