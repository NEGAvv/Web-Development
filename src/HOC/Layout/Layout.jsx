import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  if (JSON.parse(localStorage.getItem("user")) || location.pathname === "/") {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
  navigate("/");
}
