"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <Navbar />
      <main className="bg-gray50">{children}</main>
    </Provider>
  );
}
