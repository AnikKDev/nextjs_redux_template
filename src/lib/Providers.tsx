"use client";

import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
