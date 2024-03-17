import {configureStore} from '@reduxjs/toolkit';

import loginReducer from '../slice/login_slice';
import registerReducer from '../slice/register_slice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
