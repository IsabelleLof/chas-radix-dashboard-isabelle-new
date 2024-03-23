import { Box, Flex, DropdownMenu, Button } from "@radix-ui/themes";

import { CaretDownIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <Box justify="between">
      <Flex gap="3" align="center">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft" size="2">
              Options
              <CaretDownIcon width="16" height="16" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content size="2">
            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
              Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft" size="1">
              Options
              <CaretDownIcon width="12" height="12" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content size="1">
            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
              Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
    </Box>
  );
}
