import { Card, Text, createStyles, Button } from "@mantine/core";
import ModalMail from "../../components/ModalMail";
import { useState } from "react";
const useStyles = createStyles((theme) => ({
  cardWrapper: {
    height: "100%",
    minHeight: "200px",
    transition: "0.3s",
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      transform: "translate(0, -10px)",
    },
  },
  cardText: {
    textAlign: "justify",
  },
  iconWrapper: {
    padding: "10px",
  },
  icon: {
    color: theme.colorScheme === "dark" ? "white" : "black",
  },
  image: {
    height: "80px",
    width: "80px",
    filter: theme.colorScheme === "dark" && "invert(100%)",
  },
}));
const ServiceSubCard = ({ Item }) => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  return (
    <>
      <ModalMail
        opened={opened}
        setOpened={setOpened}
        title={"Enquiry Now"}
        enquiry={Item.title}
      />
      <Card withBorder shadow="lg" radius="md" className={classes.cardWrapper}>
        <div className={classes.iconWrapper}>
          {/* eslint-disable-next-line */}
          {Item.icon && (<Item.icon size={80} stroke={1} className={classes.icon} />
          )}
          {Item.image && (
            <img
              src={Item.image}
              alt="services"
              className={classes.image}
            ></img>
          )}
        </div>
        <Text
          component="div"
          size="lg"
          weight={700}
          className={classes.cardText}
        >
          {Item.title}
        </Text>
        <Text>{Item.detail}</Text>

        <Button
          mt={20}
          size="sm"
          variant="outline"
          onClick={() => setOpened(true)}
        >
          Enquiry Now
        </Button>
      </Card>
    </>
  );
};

export default ServiceSubCard;
