import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Overlay,
} from "@mantine/core";
import SlickSlider from "../../components/SlickSlider";
import { SlideText } from "../../helper/Data";
import ModalMail from "../../components/ModalMail";
import { useState } from "react";
import Fade from "react-reveal/Fade";
const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
    paddingTop: 50,
    paddingBottom: 50,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },
  uppertitle: {
    fontSize: 40,
    fontWeight: 900,
    lineHeight: 2,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 30,
      lineHeight: 1.5,
    },
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 5,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,
    textAlign: "justify",
    [BREAKPOINT]: {
      fontSize: 18,
      textAlign: "justify",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const [Title, setTitle] = useState("");
  const handleOpen = (title) => {
    setOpened(true);
    setTitle(title);
  };

  return (
    <Fade top>
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />
        <Container className={classes.inner}>
          <h1 className={classes.uppertitle}>
            <Text component="span" color="dimmed" inherit>
              CULTURE OF DIGITAL EXCELLENCE
            </Text>
          </h1>

          <SlickSlider>
            {SlideText.map((item, i) => {
              return (
                <h1 key={i} className={classes.title}>
                  <Text
                    component="span"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    inherit
                  >
                    {item}
                  </Text>
                </h1>
              );
            })}
          </SlickSlider>

          <Text component="div" className={classes.description} color="dimmed">
            We are a team of innovators- technical, creative and digital
            marketing professionals working tirelessly to offer best services
            that drive you to another level of branding and professionalism. We
            are geared to take any challenge to bring rapid innovations in
            technology.
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              onClick={() => handleOpen("Request A Quote")}
            >
              Request A Quote
            </Button>

            <Button
              size="xl"
              variant="default"
              className={classes.control}
              onClick={() => handleOpen("Free Consultancy")}
            >
              Free Consultancy
            </Button>
          </Group>
          <ModalMail opened={opened} setOpened={setOpened} title={Title} />
        </Container>
      </div>
    </Fade>
  );
}
