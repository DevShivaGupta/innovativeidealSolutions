import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import { ContactIconsList } from "../screens/contact/ContactIconsList";
const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 500,
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "30px",
    },
  },

  description: {
    marginTop: 5,
    textAlign: "justify",
    marginRight: 40,
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "justify",
      marginRight: 0,
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "74%",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      maxWidth: "90%",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: 100,
    [theme.fn.smallerThan("md")]: {
      marginRight: 30,
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,
    textDecorationLine: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
  contact_details: {
    margin: "0px",
    [theme.fn.smallerThan("sm")]: {
      marginTop: "20px",
    },
  },
  contact: {
    listStyleType: "none",
    margin: "0px",
    padding: "0px",
    letterSpacing: "1px",
  },
  serviceNContact: {
    display: "flex",
    justifyContent: "space-between",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
  contactDetails: {
    whiteSpace: "pre-wrap",
  },
}));

export function FooterSection({ data }) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <NavLink to={link.link} key={index} className={classes.link}>
        <Text>{link.label}</Text>
      </NavLink>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size={"lg"} weight={700}>
            INNOVATIVE IDEAL SOLUTIONS
          </Text>
          <Text size="xs" color="dimmed" className={classes.description}>
            Innovative Ideal Solutions is an Online Marketing, IT Solution
            providerwith a reputation for producing innovativeand successful
            Mobile app development, e-commercewebsite development,
            ERP/Softwaredevelopment, Custom software and database solutions.With
            our knowledge and experience insoftware & website development and
            its marketing methods,we help your business to succeedonline and
            increase ROI.
          </Text>
        </div>
        <div className={classes.serviceNContact}>
          <div className={classes.groups}>{groups}</div>
          <ContactIconsList />
        </div>
      </Container>
      <Container className={classes.afterFooter} size={"74%"}>
        <Text color="dimmed" size="sm">
          © 2022 INNOVATIVE IDEAL SOLUTIONS.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
