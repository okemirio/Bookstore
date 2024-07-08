import { createSlice } from '@reduxjs/toolkit'

const productinitialState = {
products:[],
product: {}
}

export const ProductSlice = createSlice({
  name: 'products',
  initialState: productinitialState,

  reducers: {
    post_product: (state, action) => {
      console.log(action);
      return{
        ...state,
        products: action.payload,
        product: { ...action.payload[0], title: 1000000 }

       }
    
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { post_product} = ProductSlice.actions

export default ProductSlice.reducer