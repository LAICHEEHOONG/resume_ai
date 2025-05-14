import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, createMigrate } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import languageSlice from "./features/language/languageSlice";
// import authSlice from "./features/auth/authSlice";
// import dataSlice from "./features/data/dataSlice";
// import pageSlice from "./features/page/pageSlice";
// import imageSlice from "./features/image_/imageSlice";
// import quotationSlice from "./features/quotation/quotationSlice";
// import data_Slice from "./features/data_/data_Slice";
import { combineReducers } from "redux";

// Combine all slices into a root reducer
const rootReducer = combineReducers({
  language: languageSlice,
  //   auth: authSlice,
  //   data: dataSlice,
  //   page: pageSlice,
  //   images: imageSlice,
  //   quotation: quotationSlice,
  //   data_: data_Slice,
});

// Define migrations
const migrations = {
  0: (state) => state, // 初始版本
  1: () => undefined,
};

// Persist configuration with version control
const persistConfig = {
  key: "root",
  version: 1, // 每当 reducer 结构有变化时就 +1
  storage,
  whitelist: ["language"], // 可持久化的 slices

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
