import { configureStore } from '@reduxjs/toolkit'

import usersSlice from './features/usersSlice'
import workspacesSlice from './features/workspacesSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: usersSlice,
      workspaces: workspacesSlice
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']