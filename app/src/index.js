import React from "react";
import Routes from "./routes";
import { UserContextProvider } from "./store/contexts/userContext";
import HelpContextProvider from "./store/contexts/helpContext";
import CategoryContextProvider from "./store/contexts/categoryContext";

export default function Root() {
  return (
    <CategoryContextProvider>
      <UserContextProvider>
        <HelpContextProvider>
          <Routes />
        </HelpContextProvider>
      </UserContextProvider>
    </CategoryContextProvider>
  );
}
