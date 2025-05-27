"use client";
import { Header as BCGovHeader } from "@bcgov/design-system-react-components";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <BCGovHeader />
      <Navbar />
    </>
  );
};

export default Header;
