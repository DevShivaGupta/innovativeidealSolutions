import {
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  TextInput,
  Textarea,
  Button,
  createStyles,
} from "@mantine/core";
import React from "react";
import { ChevronRight } from "../../helper/svg";
import Fade from "react-reveal/Fade";
const useStyles = createStyles((theme) => ({
  contact_details: {
    color: theme.colorScheme === "dark" ? "white" : "black",
  },
  contact_wrapper: {
    maxWidth: "74%",
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "90%",
    },
  },
}));
const ContactUs = () => {
  const { classes } = useStyles();
  return (
    <Fade bottom>
      <Container className={classes.contact_wrapper} mt={50}>
        <Grid justify="space-between" align="center" pt={50}>
          <Grid.Col sm={12} lg={6}>
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "#03BFCB", to: "cyan", deg: 45 }}
              size="md"
              weight={700}
            >
              CONTACT US NOW
            </Text>
            <Title order={2} weight={900} color="rgb(0, 71, 103)" mt={10}>
              Request a free consultation with us
            </Title>
            <Text
              weight={700}
              size="sm"
              mt={20}
              className={classes.contact_details}
            >
              Stop Letting Your Customers Find Your Competitors! Techinnovator
              is the ultimate solution for your business goals.
            </Text>
            <Group mt={20}>
              <Text weight={700} color="dimmed" size="md">
                You accept our policy
              </Text>
              <ChevronRight fill="#000" />
            </Group>
          </Grid.Col>
          <Grid.Col sm={12} lg={5}>
            <Stack>
              <TextInput placeholder="Your Name" label="Name" withAsterisk />
              <TextInput placeholder="Your Email" label="Email" withAsterisk />
              <Textarea
                placeholder="Your Message"
                label="Message"
                withAsterisk
                autosize
                minRows={3}
              />
              <Button
                radius="xs"
                uppercase
                variant="gradient"
                mt={20}
                px={40}
                gradient={{ from: "blue", to: "cyan" }}
              >
                Send Message
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Fade>
  );
};

export default ContactUs;
