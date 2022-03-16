export default function createHandler({ actions }, api = null) {
  return {
    load: (input) => (dispatch) => {
      dispatch(actions.get(input));
    },
    loadMultiple: (input) => (dispatch) => {
      dispatch(actions.getMultiple(input));
    },
  };
}
