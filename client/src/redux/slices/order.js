import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  error: null,
  shippingAddress: null,
  orderInfo: null,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    shippingAddressAdd: (state, { payload }) => {
      state.shippingAddress = payload
      state.loading = false
    },
    // clearOrder: (state) => {
    //   state = initialState
    // },
    clearOrder: (state) => {
      state.loading = initialState.loading
      state.error = initialState.error
      state.shippingAddress = initialState.shippingAddress
      state.orderInfo = initialState.orderInfo
    },
  },
})

export const { setLoading, setError, shippingAddressAdd, clearOrder } = orderSlice.actions
export default orderSlice.reducer

export const orderSelector = (state) => state.order
