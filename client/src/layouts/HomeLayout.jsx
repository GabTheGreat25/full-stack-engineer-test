import React from "react";
import { Navbar, Footer } from "@components";
import { Outlet } from "react-router-dom";

export function HomeLayout() {
  return (
    <>
      <main>
        <section className="z-[1000] sticky top-0 bg-light-default text-dark-default dark:bg-dark-default dark:text-light-default">
          <Navbar />
        </section>
        <section>
          <Outlet />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
