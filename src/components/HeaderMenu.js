import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
} from "@mantine/core";
import { Link, NavLink } from "react-router-dom";
import { IconChevronDown } from "@tabler/icons";
import Logo from "../images/LOGO.png";
const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
  },
  mainContainer: {
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100% !important",
    },
  },
  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export function HeaderMenu({ links, opened, setOpened }) {
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item, i) => (
      <Menu.Item key={i}>
        <NavLink to={item.link} className={classes.link}>
          {item.label}
        </NavLink>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <NavLink to={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </NavLink>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <NavLink to={link.link} key={link.label} className={classes.link}>
        {link.label}
      </NavLink>
    );
  });

  return (
    <Header height={56} className={classes.header}>
      <Container size={"74%"} className={classes.mainContainer}>
        <div className={classes.inner}>
          <Link to="/">
            <img src={Logo} alt={"Logo"} width="105px" height="50px" />
          </Link>

          <Group spacing={{ md: 5, lg: 10 }} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
    </Header>
  );
}
