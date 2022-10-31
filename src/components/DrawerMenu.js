import { Navbar, Drawer, ScrollArea, createStyles } from "@mantine/core";
import { LinksGroup } from "./LinkGroup";
import { linksData } from "../helper/Data";
import Logo from "../images/LOGO.png";
import DarkSwitch from "./DarkSwitch";
const useStyles = createStyles((theme) => ({
  navbar: {
    position: "fixed",
    zIndex: 6,
    transform: "translateX(-100%)",
    transition: "transform 0.3s ease-in-out",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  out: {
    transform: "translateX(0)",
    position: "fixed",
  },
  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function DrawerMenu({ opened, setOpened }) {
  const { classes } = useStyles();
  const links = linksData.map((item) => (
    <LinksGroup {...item} key={item.label} setOpen={setOpened} />
  ));

  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      title={<img src={Logo} alt={"Logo"} width="105px" height="50px" />}
      padding="xl"
      size="xl"
      className={
        opened ? `${classes.navbar}${classes.out}` : `${classes.navbar}`
      }
    >
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
        <DarkSwitch />
      </Navbar.Section>
    </Drawer>
  );
}
