import { configureStore } from '@reduxjs/toolkit'
import childrenRedux from './childrenRedux'
import clickSelectQuestoesMateriaRedux from './clickSelectQuestoesMateriaRedux'
import paginaRedux from './paginaRedux'
import tamDaListaRedux from './tamDaListaRedux'
export const store = configureStore({
  reducer: {
    tamDaListaRedux,
    clickSelectQuestoesMateriaRedux,
    childrenRedux,
    paginaRedux,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch