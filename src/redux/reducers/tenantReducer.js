const initState = {};

const tenantReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TENANT_SUCCESS":
      console.log("create tenant success");
      return state;
    case "CREATE_TENANT_ERROR":
      console.log("create tenant error");
      return state;
    default:
      return state;
  }
};

export default tenantReducer;
