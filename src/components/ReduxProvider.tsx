"use client";
import store from "@/services/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const ReduxProvider = (props: { children: ReactNode }) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
