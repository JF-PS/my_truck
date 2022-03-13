import { difference, isEmpty, merge, cloneDeep } from "lodash";
import { arrayToObj } from "./format-obj-array";

export default function createReducer(
  listName: any,
  listState: any,
  customMethods: any = {}
) {
  const output = {
    setIsLoading(state: any, action: any) {
      const value = action.payload;
      state[listName].isLoading = value;
    },

    reset(state: any) {
      state[listName] = cloneDeep(listState);
    },

    get(state: any, action: any) {
      const entry = action.payload;
      const byId = { [entry.id]: entry };
      const allIds = [entry.id];
      state[listName] = { byId, allIds };
    },

    getMultiple(state: any, action: any) {
      const entries: any = action.payload;
      const byId: any = arrayToObj(entries);
      const allIds: any = Object.keys(byId);
      state[listName] = { byId, allIds };
    },

    push(state: any, action: any) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entry = action.payload;
      state[listName] = {
        byId: { ...byId, [entry.id]: entry },
        allIds: [...allIds, entry.id],
      };
    },

    pushMultiple(state: any, action: any) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entries: any = arrayToObj(action.payload);

      const mergeArrayIds: any = new Set([...allIds, ...Object.keys(entries)]);

      state[listName] = {
        byId: merge(byId, entries),
        allIds: [...mergeArrayIds],
      };
    },

    update(state: any, action: any) {
      const { byId } = state[listName];
      const entry = action.payload;
      const { id } = entry;
      byId[id] = entry;
    },
    updateMultiple(state: any, action: any) {
      const { byId } = state[listName];
      const entries = action.payload;
      merge(byId, entries);
    },

    delete(state: any, action: any) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entryId = action.payload;
      delete byId[entryId];
      allIds.filter((_entryId: any) => _entryId !== entryId);
      state[listName] = { byId, allIds };
    },

    deleteMultiple(state: any, action: any) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entryIds = action.payload;
      entryIds.forEach((id: any) => {
        delete byId[id];
      });
      state[listName] = { byId, allIds: difference(allIds, entryIds) };
    },
  };

  if (!isEmpty(customMethods)) return { ...output, ...customMethods };
  return output;
}
