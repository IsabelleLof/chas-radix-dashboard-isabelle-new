import "@radix-ui/themes/styles.css";
import "./Cards.css";

//import { card1 } from "./Cards.jsx";

import { Card, Grid, Flex, Box, Text } from "@radix-ui/themes";

export default function Cards() {
  return (
    <Grid columns={{ initial: "2", sm: "4" }} gap="3" width="auto">
      <Card size="2" style={{ backgroundColor: "black" }}>
        <Flex gap="4" align="center">
          <Box>
            <Text as="div" size="4" weight="bold">
              Total Revenue
            </Text>
            <Text as="div" size="4">
              $45,231.89
            </Text>
            <Text size="1">+20.1% from last month</Text>
          </Box>
          <svg
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </Flex>
      </Card>
      <Card size="2" style={{ backgroundColor: "black" }}>
        <Flex gap="4" align="center">
          <Box>
            <Text as="div" size="4" weight="bold">
              Subscriptions
            </Text>
            <Text as="div" size="4">
              +2350
            </Text>
            <Text size="1">+180.1% from last month</Text>
          </Box>
          <svg
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </Flex>
      </Card>
      <Card size="2" style={{ backgroundColor: "black" }}>
        <Flex gap="4" align="center">
          <Box>
            <Text as="div" size="4" weight="bold">
              Total Revenue
            </Text>
            <Text as="div" size="4">
              $45,231.89
            </Text>
            <Text size="1">+20.1% from last month</Text>
          </Box>
          <svg
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </Flex>
      </Card>

      <Card size="2" style={{ backgroundColor: "black" }}>
        <Flex gap="4" align="center">
          <Box>
            <Text as="div" size="4" weight="bold">
              Total Revenue
            </Text>
            <Text as="div" size="4">
              $45,231.89
            </Text>
            <Text size="1">+20.1% from last month</Text>
          </Box>
          <svg
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </Flex>
      </Card>
    </Grid>
  );

  // <div>
  //     <Flex gap="3" direction="row" align="center">
  // <Card size="3" style={{ width: 250, backgroundColor: 'black' }}>
  //   <Flex gap="4" align="center">
  //     <Box>
  //       <Text as="div" size="4" weight="bold">
  //         Total Revenue
  //       </Text>
  //       <Text as="div" size="4">
  //         $45,231.89
  //       </Text>
  //       <Text size="1">+20.1% from last month</Text>
  //     </Box>
  //     <svg
  //       width="20"
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="2"
  //       class="h-4 w-4 text-muted-foreground"
  //     >
  //       <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  //     </svg>
  //   </Flex>
  // </Card>

  // <Card size="3" style={{ width: 250, backgroundColor: 'black' }}>
  //   <Flex gap="4" align="center">
  //     <Box>
  //       <Text as="div" size="4" weight="bold">
  //         Subscriptions
  //       </Text>
  //       <Text as="div" size="4">
  //         +2350
  //       </Text>
  //       <Text size="1">+180.1% from last month</Text>
  //     </Box>
  //     <svg
  //       width="20"
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="2"
  //       class="h-4 w-4 text-muted-foreground"
  //     >
  //       <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  //     </svg>
  //   </Flex>
  // </Card>

  // <Card size="3" style={{ width: 250, backgroundColor: 'black' }}>
  //   <Flex gap="4" align="center">
  //     <Box>
  //       <Text as="div" size="4" weight="bold">
  //         Total Revenue
  //       </Text>
  //       <Text as="div" size="4">
  //         $45,231.89
  //       </Text>
  //       <Text size="1">+20.1% from last month</Text>
  //     </Box>
  //     <svg
  //       width="20"
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="2"
  //       class="h-4 w-4 text-muted-foreground"
  //     >
  //       <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  //     </svg>
  //   </Flex>
  // </Card>

  // <Card size="3" style={{ width: 250, backgroundColor: 'black' }}>
  //   <Flex gap="4" align="center">
  //     <Box>
  //       <Text as="div" size="4" weight="bold">
  //         Total Revenue
  //       </Text>
  //       <Text as="div" size="4">
  //         $45,231.89
  //       </Text>
  //       <Text size="1">+20.1% from last month</Text>
  //     </Box>
  //     <svg
  //       width="20"
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="2"
  //       class="h-4 w-4 text-muted-foreground"
  //     >
  //       <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  //     </svg>
  //   </Flex>
  // </Card>
  //     </Flex>
  //   </div>
}
