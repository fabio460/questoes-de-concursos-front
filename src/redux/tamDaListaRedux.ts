import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tamanho:0
}

const tamDaListaRedux = createSlice({
  name: "tamDaLista",
  initialState,
  reducers: {
    getTamLista:(state, action)=>{
        state.tamanho = action.payload
    }
  }
});

export const {getTamLista} = tamDaListaRedux.actions

export default tamDaListaRedux.reducer