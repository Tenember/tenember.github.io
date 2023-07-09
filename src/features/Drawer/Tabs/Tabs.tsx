import { useState } from "react";
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";

import { SubmitHandler } from "react-hook-form";
import { GeneralTab } from "./GeneralTab/GeneralTab";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const Tabs = () => {
  // OnSubmit function for the form in GeneralTab component
  // This is just a placeholder for now to test the loading state
  const sleep = (ms: number | undefined) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit: SubmitHandler<Inputs> = async (data) => await sleep(2000);

  return (
    <>
      <div className="flex flex-col justify-start font-sans py-8 px-6 text-neutral-500">
        <div className="flex flex-bold text-2xl mb-4 text-stone-100">
          My Settings
        </div>
        <ReactTabs selectedTabClassName="border-[#8200b1] border-b-2 text-stone-100">
          {/* Tabs List */}
          <TabList className="flex flex-row text-base space-x-8 border-b border-spacing-2 border-[#F3F0EE]/[.08] cursor-pointer leading-8">
            <Tab className="hover:opacity-70 transition-opacity">General</Tab>
            <Tab className="hover:opacity-70 transition-opacity">Security</Tab>
            <Tab className="hover:opacity-70 transition-opacity">
              Notifications
            </Tab>
            <Tab className="hover:opacity-70 transition-opacity">Advanced</Tab>
          </TabList>

          {/* Tab Contents */}
          <TabPanel>
            <GeneralTab onSubmit={onSubmit} />
          </TabPanel>
        </ReactTabs>
      </div>
    </>
  );
};
