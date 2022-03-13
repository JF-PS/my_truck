export default function createHandler({ actions }: any, api: any) {
  return {
    setIsLoading: (value: any) => (dispatch: any) => {
      dispatch(actions.setValue({ key: "isLoading", value }));
    },
    setValue: (key: any, value: any) => (dispatch: any) => {
      dispatch(actions.setValue({ key, value }));
    },
    reset: () => (dispatch: any) => {
      dispatch(actions.reset());
    },
    load: (input: any) => (dispatch: any) => {
      // dispatch(actions.setIsLoading(true));
      dispatch(actions.get(input));
      // dispatch(actions.setIsLoading(false));
    },
    loadMultiple: (input: any) => (dispatch: any) => {
      // dispatch(actions.setIsLoading(true));
      dispatch(actions.getMultiple(input));
      // dispatch(actions.setIsLoading(false));
    },
    get:
      (input: any, output: any, type = "get") =>
      async (dispatch: any) => {
        // dispatch(actions.setIsLoading(true));
        const entry = await api.get(input, output);
        if (entry) {
          dispatch(actions[type](entry));
          // dispatch(actions.setIsLoading(false));
          return entry;
        }
      },
    getMultiple:
      (input: any, output: any, type = "getMultiple") =>
      async (dispatch: any) => {
        const entries = await api.getMultiple(input, output);
        if (entries) {
          dispatch(actions[type](entries));
          return entries;
        }
      },
    create:
      (input: any, output: any, type = "push") =>
      async (dispatch: any) => {
        const entry = await api.create(input, output);
        dispatch(actions["push"](entry));
        return entry;
      },
    createMultiple:
      (input: any, output: any, type = "pushMultiple") =>
      async (dispatch: any) => {
        // const response = await api.createMultiple(input, output);
        // if (response) {
        //   dispatch(
        //     actions[`${type}${capitalizeFirstLetter(option)}`](
        //       response.data || []
        //     )
        //   );
        // }
        // return response;
      },
    update:
      (input: any, output: any, type = "update") =>
      async (dispatch: any) => {
        const entry = await api.update(input, output);
        dispatch(actions["update"](entry));
        return entry;
      },
    updateMultiple:
      ({ ids, attributes }: any, output: any, type = "updateMultiple") =>
      async (dispatch: any) => {
        // const res = await api.updateMultiple({ ids, attributes }, output);
        // if (res && "status" in res && res.status === 200) {
        //   const inputs = ids.map((id) => ({ id, ...attributes }));
        //   dispatch(actions[`${type}${capitalizeFirstLetter(option)}`](inputs));
        // }
        // return res;
      },
    delete: (id: any) => async (dispatch: any) => {
      //   const entry = await api.deleteOne(id, ["id"]);
      //   if (entry) {
      //     dispatch(actions.delete(entry.id));
      //   }
      //   return entry;
    },
    deleteMultiple: (ids: any) => async (dispatch: any) => {
      //   const entries = await api.deleteMultiple(ids);
      //   if (entries) {
      //     dispatch(actions.deleteMultiple(ids));
      //   }
      //   return entries;
    },
  };
}
