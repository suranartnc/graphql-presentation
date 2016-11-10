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
  diagram1: require("../assets/how-graphql-works.png")
};

preloader(images);

const theme = createTheme({
  primary: "#888",
  bgCode: "#2d2d2d"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transitionDuration={250}>

          {/* Topic */}
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading caps textSize="2em" lineHeight={1.5} textColor="primary">
              The GraphQL Battle
            </Heading>
            <Heading textSize="4.2em" lineHeight={1.0} textColor="black">
              RELAY vs APOLLO
            </Heading>
          </Slide>


          {/* REST API */}
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>         
            <Heading size={1} caps textColor="primary">
              GET
            </Heading>
            <Heading size={1} caps textColor="tertiary">
              POST
            </Heading>
            <Heading size={1} caps textColor="primary">
              PUT
            </Heading>
            <Heading size={1} caps textColor="tertiary">
              PATCH
            </Heading>
            <Heading size={1} caps textColor="primary">
              DELETE
            </Heading>
          </Slide>

          {/* Question */}
          <Slide transition={["zoom", "fade"]} bgColor="black" notes="Problem with REST API">
            {/* <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/> */}
            <Heading size={2} caps textColor="primary" textFont="primary">
              What's wrong with REST API ?
            </Heading>
          </Slide>

          {/* Code */}
          <Slide bgColor="bgCode" notes="">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/code/query.code")}
              textSize={'1em'}
            />
          </Slide>


          {/* Code */}
          <Slide bgColor="bgCode" notes="">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/code/result.code")}
              textSize={'0.6em'}
            />
          </Slide>

          {/* Code */}
          <Slide bgColor="bgCode" notes="">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/code/query2.code")}
              textSize={'1em'}
            />
          </Slide>


          {/* Code */}
          <Slide bgColor="bgCode" notes="">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/code/result2.code")}
              textSize={'0.6em'}
            />
          </Slide>



          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            
            <Appear fid="1">
              <Heading size={1} caps textColor="primary">
                Flexible
              </Heading>
            </Appear>

            <Appear fid="2">
              <Heading size={1} caps textColor="tertiary">
                Single Request
              </Heading>
            </Appear>

            <Appear fid="3">
              <Heading size={1} caps textColor="primary">
                Caching
              </Heading>
            </Appear>

          </Slide>


          {/* Code */}
          <Slide bgColor="bgCode" notes="">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/code/query3.code")}
              textSize={'1em'}
            />
          </Slide>


          {/* Code */}
          <Slide bgColor="bgCode" notes="">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/code/result3.code")}
              textSize={'0.6em'}
            />
          </Slide>


          {/* Question */}
          <Slide transition={["zoom", "fade"]} bgColor="tertiary" notes="">
            {/* <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/> */}
            <Heading size={2} caps textColor="primary" textFont="primary">
              What's about
            </Heading>
            <Heading size={2} caps textColor="black" textFont="primary">
              Security ?
            </Heading>
          </Slide>

          

          {/* Diagram */}
          <Slide transition={["zoom", "fade"]} bgColor="tertiary" notes="">
            <Image src={images.diagram1.replace("/", "")} margin="0px auto" width="100vh" height="auto"/>
          </Slide>


          
          {/* Code */}
          <Slide bgColor="bgCode" notes="">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/code/express_graphql.code")}
              textSize={'0.6em'}
            />
          </Slide>

          {/* Code */}
          <Slide bgColor="bgCode" notes="">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/code/schema2.code")}
              textSize={'0.6em'}
            />
          </Slide>


          {/* Code */}
          <Slide bgColor="bgCode" notes="">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/code/schema1.code")}
              textSize={'0.6em'}
            />
          </Slide>

          
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            
            <Appear fid="1">
              <Heading size={1} caps textColor="primary">
                Caching
              </Heading>
            </Appear>

            <Appear fid="2">
              <Heading size={1} caps textColor="tertiary">
                Pagination
              </Heading>
            </Appear>

            <Appear fid="3">
              <Heading size={1} caps textColor="primary">
                Mutation
              </Heading>
            </Appear>

            <Appear fid="3">
              <Heading size={1} caps textColor="tertiary">
                Optimistic
              </Heading>
            </Appear>

            <Appear fid="3">
              <Heading size={1} caps textColor="primary">
                Refetch
              </Heading>
            </Appear>

          </Slide>
          







          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading fit>Relay vs Apollo</Heading>

            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Concept
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Declarative
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Incrementally adoptable
                </Heading>
              </Fill>
            </Layout>

            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Caching
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  server-side ID
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  client-side ID
                </Heading>
              </Fill>
            </Layout>

            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Pagination
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  curser-based
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  arbitary
                </Heading>
              </Fill>
            </Layout>

            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Compatibility
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  React
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  React, Vue, Angular 2
                </Heading>
              </Fill>
            </Layout>

            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Mutation
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Config
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Reducer
                </Heading>
              </Fill>
            </Layout>

            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Documentation
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  T__T
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  :P
                </Heading>
              </Fill>
            </Layout>

          </Slide>

          {/* Quote */}
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>

          

          {/* List */}
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Single Request</ListItem></Appear>
              <Appear><ListItem>Flexible</ListItem></Appear>
              <Appear><ListItem>Caching</ListItem></Appear>
            </List>
          </Slide>

        
        </Deck>
      </Spectacle>
    );
  }
}
