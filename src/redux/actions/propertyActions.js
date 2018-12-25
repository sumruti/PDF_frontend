export const createProperty = property => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("propertys")
      .add({
        ...property,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROPERTY_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROPERTY_ERROR" }, err);
      });
  };
};
