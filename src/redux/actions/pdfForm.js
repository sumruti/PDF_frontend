import axios from 'axios';

export const PDF_DATA = 'PDF_DATA';
const api_url = "http://localhost:5060";
export function PdfFormData(items) {

	const params = {name:'items'}
	axios.post(api_url+"/PdfDetails",items)
      .then(res => console.log(res,'0--0-0'))
      .then(json => {
      	//console.log(json)
        //return json.products;
      })
  /*return {
    type: PDF_DATA,
    items,
  };*/
}

/*export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("/products")
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json.products));
        return json.products;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}*/

