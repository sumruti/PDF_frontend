export const createTenant = tenant => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("tenants")
      .add({
        ...tenant,

        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_TENANT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_TENANT_ERROR" }, err);
      });
  };
};
