const initState = {};

const propertyReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROPERTY_SUCCESS":
      console.log("create property success");
      return state;
    case "CREATE_PROPERTY_ERROR":
      console.log("create property error");

      return state;
    default:
      return state;
  }
};

export default propertyReducer;
