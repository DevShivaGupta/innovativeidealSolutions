import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Container,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import { ContactIconsList } from "./ContactIconsList";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
const useStyles = createStyles((theme) => ({
  mainWrapper: {
    marginTop: "100px",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "90%",
      marginTop: "50px",
    },
  },
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colorScheme === "light"
        ? theme.colors[theme.primaryColor][4]
        : theme.colors.dark[4]
    } 0%, ${
      theme.colorScheme === "light"
        ? theme.colors[theme.primaryColor][7]
        : theme.colors.dark[3]
    } 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    background: theme.colorScheme === "light" ? "white" : theme.colors.dark[7],
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function ContactPage() {
  const { classes } = useStyles();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <Fade bottom>
      <Container size={"74%"} className={classes.mainWrapper}>
        <div className={classes.wrapper}>
          <SimpleGrid
            cols={2}
            spacing={50}
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <div>
              <Title className={classes.title}>Contact us</Title>
              <Text className={classes.description} mt="sm" mb={30}>
                Leave your email and we will get back to you within 24 hours
              </Text>

              <ContactIconsList variant="white" />

              <Group mt="xl">{icons}</Group>
            </div>
            <div className={classes.form}>
              <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label="Name"
                placeholder="Your Name"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Textarea
                required
                label="Message"
                placeholder="Your Message"
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />

              <Group position="right" mt="md">
                <Button className={classes.control}>Send message</Button>
              </Group>
            </div>
          </SimpleGrid>
        </div>
      </Container>
    </Fade>
  );
}
