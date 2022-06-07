import { Code } from "@react-meetup/ui-kit.code";
import { Container } from "@react-meetup/ui-kit.container";
import { Hero } from "@react-meetup/ui-kit.hero";
import { Toolbar } from "@react-meetup/ui-kit.toolbar";
import { Text } from "@react-meetup/ui-kit.typography.text";
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Toolbar title={"component-driven-development"} />
      <Hero
        title="I am the mobile app"
        subtitle="I import components as dependencies"
      />

      <Container>
        <Text>
          You can import and edit components and publish them directly from this
          repository, without worrying about <strong>versioning</strong>,{" "}
          <strong>compiling</strong>, <strong>package.json</strong> etc...
        </Text>

        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <Code>bit init</Code>

          <Code>{"bit import <your-component-id>"}</Code>

          <Code>bit tag</Code>

          <Code>bit status</Code>

          <Code>bit export --eject</Code>
        </div>
      </Container>
    </div>
  );
}

export default App;
