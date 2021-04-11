import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
