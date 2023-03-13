/** @format */

import React from "react";
import { MFACard } from "./mfa-card";
import { Header } from "./common/header";
import { Footer } from "./common/footer";
import { Provider } from "mobx-react";
import { MFA } from "../shared/mobx-store/mfa";

function MFAApp() {
  return (
    <Provider value={new MFA()}>
      <div className="w-full h-screen font-mono border-l border-r border-t max-w-xl mx-auto flex flex-col">
        <Header />
        <MFACard />
        <Footer />
      </div>
    </Provider>
  );
}

export default MFAApp;
