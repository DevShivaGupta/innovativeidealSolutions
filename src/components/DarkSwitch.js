import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons";

export default function DarkSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="left" m="xl">
      <SegmentedControl
        value={colorScheme}
        onChange={(value) => toggleColorScheme(value)}
        data={[
          {
            value: "light",
            label: (
              <Center>
                <IconSun size={16} stroke={1.5} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center>
                <IconMoon size={16} stroke={1.5} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}
