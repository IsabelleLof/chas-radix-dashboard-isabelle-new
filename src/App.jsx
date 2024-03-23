import Overview from "./Overview.jsx";
import TableContainer from "./Table.jsx";
import Nav from "./Nav.jsx";
//import TopNav from "./TopNav.jsx";
import "@radix-ui/themes/styles.css";
import { Button } from "@radix-ui/themes";
import { PopoverDemo } from "./Popover.jsx";

import Cards from "./Cards.jsx";
import "./App.css";
import { Flex, Container, Section } from "@radix-ui/themes";

function App() {
  //let card1 = "Total";

  //let title = "Overview";
  return (
    <div className="container">
      <div className="nav-top">
        <h1 className="flex-1">Dashboard</h1>
        <div className="nav-content">
          <PopoverDemo />
          <Button
            style={{
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#4a5568",
              },
              outline: "none",
              ringWidth: "2px",
              ringColor: "#9f7aea",
              ringOffsetWidth: "2px",
              ringOffsetColor: "#f7fafc",
              color: "black",
              fontWeight: "600",
              height: "3rem", // Equivalent to h-12
              padding: "1.5rem", // Equivalent to px-6
              borderRadius: "0.375rem", // Equivalent to rounded-lg
              width: "115px", // Equivalent to w-full
              display: "flex",
              alignItems: "center", // Equivalent to items-center
              justifyContent: "center", // Equivalent to justify-center
              "@media (min-width: 640px)": {
                // Equivalent to sm:w-auto
                width: "auto",
              },
            }}
          >
            Download
          </Button>
        </div>
      </div>
      <Nav />
      <Container className="mx-auto relative max-w-5xl pt-20 sm:pt-24 lg:pt-32 px-4 mb-20">
        <Section style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          <Cards />
        </Section>
        <Flex gap="4">
          <Overview />
          <TableContainer />
        </Flex>
      </Container>
    </div>
  );
}

export default App;
