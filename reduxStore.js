import { createStore, combineReducers } from "redux";

const initialState1 = {
  users: null,
};

function usersReducer1(state = initialState1, action) {
  switch (action.type) {
    case "GET_UPDATED_USERS_DATA":
      return { ...state, users: action.payload };
    // return action.payload;
    default:
      return state;
  }
}

const initialState2 = {
  details: [],
};

function usersReducer2(state = initialState2, action) {
  switch (action.type) {
    case "ADDED_DATE":
      return { ...state, details: [...state.details, action.payload] };
    // return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  userReducer: usersReducer1,
  detailsReducer: usersReducer2,
});

const store = createStore(rootReducer);
export default store;
