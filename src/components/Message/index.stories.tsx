import React from "react";
import Message from "./Message";
import SecondaryMessage from "./SecondaryMessage";

export default {
  title: "Components/Message",
  component: Message,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <Message variant="warning" mb="16px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Message>
      <Message variant="danger">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Message>
      <Message variant="warning" mb="16px">
        This is me my name
      </Message>
      <SecondaryMessage>
        If you dont have any LUA or TOMO in your wallet, you will be in Tier 0. You still have a chance to buy token by
        commit your fund. You will receive your fund if token sold out for Tier 1, 2, 3, 4
      </SecondaryMessage>
    </>
  );
};
