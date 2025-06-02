import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, createMigrate } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import languageSlice from "./features/language/languageSlice";
import lockSlice from "./features/lock/lockSlice";
import { combineReducers } from "redux";

// Combine all slices into a root reducer
const rootReducer = combineReducers({
  language: languageSlice,
  lock: lockSlice,
});

// Define migrations
const migrations = {
  0: (state) => state, // 初始版本
  3: () => undefined,
};

// Persist configuration with version control
const persistConfig = {
  key: "root",
  version: 3, // 每当 reducer 结构有变化时就 +1
  storage,
  whitelist: ["language", "lock"], // 可持久化的 slices

  //   whitelist: ["auth", "data", "images", "page", "quotation", "data_"], // 可持久化的 slices
  migrate: createMigrate(migrations, { debug: false }),
};

// Create a persisted reducer using persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create persistor to persist the store
export const persistor = persistStore(store);
