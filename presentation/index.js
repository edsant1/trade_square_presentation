// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  University: require("../assets/University.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#263238",
  textColors: "#dce0e0"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} progress={"bar"} transitionDuration={500}>
          <Slide transition={["zoom"]} bgImage={images.University} bgDarken={0.50}>
            <Heading size={1} fit caps lineHeight={1.5} textColor="textColors">
              Trade Square
            </Heading>
            <Text size={1} lineHeight={2} fit caps textColor="textColors">
              The University Bartering App
            </Text>
          </Slide>
          <Slide transition={["spin", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="textColors">
              How it Works
            </Heading>
          </Slide>
          <Slide transition={["spin", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="textColors">
              User experience
            </Heading>
          </Slide>
          <Slide transition={["spin", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="textColors">
              Why Trade Square
            </Heading>
          </Slide>
          <Slide transition={["spin", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} align="flex-start" textColor="textColors">
              Some of the Libraries Used
            </Heading>
          </Slide>
          <Slide transition={["spin", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} align="flex-start" textColor="textColors">
              The developers and the future of Trade square
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
