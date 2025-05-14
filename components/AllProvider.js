"use client";

import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react"; // Add PersistGate
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";

export default function AllProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* {children} */}
        <HeroUIProvider>
          <ToastProvider />
          {children}
        </HeroUIProvider>
      </PersistGate>
    </Provider>
  );
}
