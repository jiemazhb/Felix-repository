import React from "react";
import UserInfoProvider from "./context/UserInfoProvider";
import User from "./context/User";
import { Provider } from "react-redux";
import ColorConfig from "./Redux/ColorConfig";
export default function Practice() {
  return (
    <div>
      <Provider store={ColorConfig}>
        <UserInfoProvider>
          <User />
        </UserInfoProvider>
      </Provider>
    </div>
  );
}
