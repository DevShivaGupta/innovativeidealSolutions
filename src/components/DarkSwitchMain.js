import {
  useMantineColorScheme,
  ActionIcon,
  Group,
  createStyles,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
const useStyles = createStyles((theme) => ({
  switch: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.blue[6],
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.dark[0]
    }`,
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));
export default function DarkSwitchMain() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  return (
    <Group
      position="center"
      my="xl"
      sx={{ position: "fixed", top: "50px", right: "30px", zIndex: "1500" }}
    >
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        className={classes.switch}
      >
        {colorScheme === "dark" ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </Group>
  );
}
