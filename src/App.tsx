import { Button } from "@gle/base-ui.buttons.button";
import { EmojiFeedback } from "@gle/base-ui.emoji-feedback";
import { Theme } from "@gle/base-ui.theme-provider";
import { Chip } from "@gle/base-ui.typography.chip";
import { Heading } from "@gle/base-ui.typography.heading";
import React from "react";
import "./App.css";

function App() {
  return (
    <Theme>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Heading>I'm the consumer app</Heading>
        <Heading level={3}>
          I'm using components imported from{" "}
          <Chip color="danger">@gle.base-ui</Chip>
        </Heading>

        <Button>Click me</Button>

        <br />
        <EmojiFeedback title="How would you rate bit.dev?" />
      </div>
    </Theme>
  );
}

export default App;
