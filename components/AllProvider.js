"use client";

import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react"; // Add PersistGate
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import { useEffect } from "react";
import { lockAction } from "@/lib/action/lockAction";

export default function AllProvider({ children }) {
  // useEffect(() => {
  //   const lockAction_ = async () => {
  //     const lock = await lockAction(false);
  //     console.log(lock);
  //   };
  //   lockAction_();
  // }, []);
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
