import React from "react";
import {storiesOf} from "@kadira/storybook";
import ConnectToArchetype from "./connect-to-archetype";

storiesOf('Connect', module)
  .add('without a user', () => (
    <ConnectToArchetype />
  ));
