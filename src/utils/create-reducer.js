import { difference, isEmpty, merge, cloneDeep } from "lodash";
import { arrayToObj } from "./format-obj-array";

export default function createReducer(listName, listState, customMethods = {}) {
  const output = {
    setIsLoading(state, action) {
      const value = action.payload;
      state[listName].isLoading = value;
    },

    reset(state) {
      state[listName] = cloneDeep(listState);
    },

    get(state, action) {
      const entry = action.payload;
      const id = Object.keys(entry)[0];

      const byId = { [id]: entry[id] };
      const allIds = [entry.id];
      state[listName] = { byId, allIds };
    },

    getMultiple(state, action) {
      const entries = action.payload;
      const byId = arrayToObj(entries);
      const allIds = Object.keys(byId);
      state[listName] = { byId, allIds };
    },

    push(state, action) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entry = action.payload;
      state[listName] = {
        byId: { ...byId, [entry.id]: entry },
        allIds: [...allIds, entry.id],
      };
    },

    pushMultiple(state, action) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entries = arrayToObj(action.payload);

      const mergeArrayIds = new Set([...allIds, ...Object.keys(entries)]);

      state[listName] = {
        byId: merge(byId, entries),
        allIds: [...mergeArrayIds],
      };
    },

    update(state, action) {
      const { byId } = state[listName];
      const entry = action.payload;
      const { id } = entry;
      byId[id] = entry;
    },
    updateMultiple(state, action) {
      const { byId } = state[listName];
      const entries = action.payload;
      merge(byId, entries);
    },

    delete(state, action) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entryId = action.payload;
      delete byId[entryId];
      allIds.filter((_entryId) => _entryId !== entryId);
      state[listName] = { byId, allIds };
    },

    deleteMultiple(state, action) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entryIds = action.payload;
      entryIds.forEach((id) => {
        delete byId[id];
      });
      state[listName] = { byId, allIds: difference(allIds, entryIds) };
    },
  };

  if (!isEmpty(customMethods)) return { ...output, ...customMethods };
  return output;
}
