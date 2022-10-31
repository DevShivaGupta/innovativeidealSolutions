import { Card, Text, createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  cardWrapper: {
    height: "100%",
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
}));
const MainCard = ({ Item }) => {
  const { classes } = useStyles();
  return (
    <Card withBorder shadow="sm" radius="md" className={classes.cardWrapper}>
      {/* eslint-disable-next-line */}
      <Item.icon height="64px" width="64px" fill="#04a9db" />
      <Text component="div" size="lg" weight={700} className={classes.cardText}>
        {Item.title}
      </Text>
      <Text>{Item.details}</Text>
    </Card>
  );
};

export default MainCard;
