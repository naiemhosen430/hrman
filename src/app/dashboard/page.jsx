import React from "react";
import PageHeader from "./Components/PageHeader";

export default function page() {
  return <>
  <PageHeader />
    <div className="p-4">
      <div>
        <h1 className="text-xl font-bold">Dashboard Overview</h1>
        <p className="text-lg">Get a comprehensive snapshot of your HR operations at aglance</p>
      </div>
    </div>
  </>;
}
