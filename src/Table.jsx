import "@radix-ui/themes/styles.css";
import { Table, Avatar, Flex, Text } from "@radix-ui/themes";
import "./Table.css";

export default function TableContainer() {
  return (
    <div className="table-container">
      <Flex direction="column" gap="1">
        <Text mb="2" size="4">
          Recent Sales
        </Text>
        <Text mb="3" size="2">
          You made 265 sales this month.
        </Text>
      </Flex>

      <Table.Root gap="8">
        {/* <Text>Recent Sales</Text>
        <Text>You made 256 sales this month.</Text> */}

        <Table.Body className="font-color">
          <Table.Row className="font-color">
            <Avatar
              radius="full"
              src="https://ui.shadcn.com/avatars/01.png"
              fallback="A"
            />
            <Table.Cell>Olivia Martin</Table.Cell>
            <Table.Cell>+$1,999.00</Table.Cell>
          </Table.Row>
          <br />

          <Table.Row className="font-color">
            <Avatar
              radius="full"
              src="https://ui.shadcn.com/avatars/02.png"
              fallback="A"
            />
            <Table.Cell>Jackson Lee</Table.Cell>
            <Table.Cell>+$39.00</Table.Cell>
          </Table.Row>
          <br />

          <Table.Row className="font-color">
            <Avatar
              radius="full"
              src="https://ui.shadcn.com/avatars/03.png"
              fallback="A"
            />
            <Table.Cell>Isabella Nguyen</Table.Cell>

            <div className="table-item">
              <div className="table-item"><Table.Cell>+$299.00</Table.Cell></div>
            </div>
          </Table.Row>
          <br />

          <Table.Row className="font-color">
            <Avatar
              radius="full"
              src="https://ui.shadcn.com/avatars/04.png"
              fallback="A"
            />
            <Table.Cell>William Kim</Table.Cell>
            <div className="table-item"><Table.Cell>+$99.00</Table.Cell></div>
          </Table.Row>
          <br />

          <Table.Row className="font-color">
            <Avatar
              radius="full"
              src="https://ui.shadcn.com/avatars/05.png"
              fallback="A"
            />
            <Table.Cell>Sofia Davis</Table.Cell>
            <div className="table-item"><Table.Cell>+$39.00</Table.Cell></div>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}
