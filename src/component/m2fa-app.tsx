/** @format */

import React from "react";
import { MFACard } from "./mfa-card";
import { Header } from "./common/header";
import { Footer } from "./common/footer";

function M2faApp() {
  return (
    <div className="w-full h-screen font-mono border-l border-r border-t  max-w-xl  mx-auto flex flex-col">
      <Header />
      <MFACard />;
      <Footer />
    </div>
  );
}

export default M2faApp;
