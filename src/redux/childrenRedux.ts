import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    children:{}
}

const childrenRedux = createSlice({
  name: 'children',
  initialState,
  reducers: {
    getChildren:(state, action: PayloadAction<[]>) => {
        state.children = action.payload
      },
  }
});

export const {getChildren} = childrenRedux.actions

export default childrenRedux.reducer