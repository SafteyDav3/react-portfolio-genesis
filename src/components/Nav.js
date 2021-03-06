import { React } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

import { Tabs } from "@mantine/core";

import {
  BsFillFolderFill,
  BsInfoSquareFill,
  BsFillChatRightTextFill,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";

function Nav() {
  return (
    <Tabs
      color="cyan"
      tabSize="lg"
      position="right"
      tabPadding="xl"
      variant="outline"
    >
      <Tabs.Tab label="About" icon={<BsInfoSquareFill size={14} />}>
        <About />
      </Tabs.Tab>
      <Tabs.Tab label="Portfolio" icon={<BsFillFolderFill size={14} />}>
        <Portfolio />
      </Tabs.Tab>
      <Tabs.Tab label="Contact" icon={<BsFillChatRightTextFill size={14} />}>
        <Contact />
      </Tabs.Tab>
      <Tabs.Tab
        label="Resume"
        icon={<BsReverseLayoutTextSidebarReverse size={14} />}
      >
        <Resume />
      </Tabs.Tab>
    </Tabs>
  );
}

export default Nav;
