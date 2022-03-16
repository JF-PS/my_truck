export default function createHandler({ actions }, api = null) {
  return {
    setValue: (key, value) => (dispatch) => {
      dispatch(actions.setValue({ key, value }));
    },
    load: (input) => (dispatch) => {
      dispatch(actions.get(input));
    },
    loadMultiple: (input) => (dispatch) => {
      dispatch(actions.getMultiple(input));
    },
  };
}
