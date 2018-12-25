import {
 
  PDF_DATA,
} from '../actions/pdfForm';

const initialState = {
  PDF: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
   
    case PDF_DATA:
     console.log( action.items,'0000000000000000000000000000000')
      return { ...state, items: PDF };
    default:
      return state;
  }
}
