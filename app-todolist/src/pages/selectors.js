import {createSelector} from "reselect";


export const getStatusCustomer = createSelector(
  state => state.select,
  (sv) => sv.status,
);
