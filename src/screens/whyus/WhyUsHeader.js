import {
  createStyles,
  Title,
  Container,
  Breadcrumbs,
  Anchor,
  Overlay,
} from "@mantine/core";
import { Dots } from "../../components/Dots";
const useStyles = createStyles((theme) => ({
  innerWrapper: {
    [theme.fn.smallerThan("md")]: {
      maxWidth: "90%",
    },
  },
  wrapper: {
    position: "relative",
    height: "150px",
    paddingTop: 30,
    paddingBottom: 20,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderBottom: "1px solid #e9ecef",
    overflow: "hidden",
    "@media (max-width: 755px)": {
      paddingTop: 30,
      paddingBottom: 20,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    "@media (max-width: 755px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    textTransform: "uppercase",
    letterSpacing: -1,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: -1,
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    marginBottom: theme.spacing.lg,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 14,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export default function WhyUsHeader({ pathname }) {
  const { classes } = useStyles();
  const items = [
    { title: "Home" },
    { title: "Why Innovative Ideal Solutions" },
  ].map((item, index) => (
    <Anchor key={index} color="dimmed">
      {item.title}
    </Anchor>
  ));
  return (
    <Container className={classes.wrapper} size={"100%"}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 40 }} />
      <Container p={0} size={"74%"} className={classes.innerWrapper}>
        <div className={classes.inner}>
          <Title className={classes.title}>
            WHY INNOVATIVE IDEAL SOLUTIONS
          </Title>
          <Breadcrumbs mt={10}>{items}</Breadcrumbs>
        </div>
      </Container>
    </Container>
  );
}
