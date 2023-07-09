import { useState } from "react";
import "./App.css";
import { Drawer } from "./features/Drawer/Drawer";
import { Tabs } from "./features/Drawer/Tabs/Tabs";
import { StarsBackground } from "./features/Backgrounds/Stars";
import { DrawerCTA } from "./features/DrawerCTA/DrawerCTA";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="App-header ">
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </header>
      <body className="flex h-screen w-screen">
        {/* Black background */}
        <div className="overflow-y-auto scrollbar-none h-full w-full bg-black content-center align-middle">
          <StarsBackground>
            {/* Middle square CTA */}
            <DrawerCTA setIsOpen={setIsOpen} />
            {/* Hidden Drawer on the right */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Tabs />
            </Drawer>
          </StarsBackground>
        </div>
      </body>
    </>
  );
}

export default App;
