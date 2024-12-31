import React from "react";
import UserInfoProvider from "./context/UserInfoProvider";
import User from "./context/User";
import { Provider } from "react-redux";
import ColorConfig from "./Redux/ColorConfig";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from './Redux/ColorConfig';

export default function Practice() {
  return (
    <div>
      <Provider store={ColorConfig}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <UserInfoProvider>
            <User />
          </UserInfoProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}
