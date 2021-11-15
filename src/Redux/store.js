// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer, filterReducer } from './contacts-reducer';
import { combineReducers } from 'redux';
// import storage from 'redux-persist/lib/storage';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

// const persistConfig = {
//   key: 'contacts',
//   version: 1,
//   storage,
//   blacklist: ['filter'],
// };

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

// export const persistor = persistStore(store);
