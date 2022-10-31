import { Card, Text, createStyles, Group } from "@mantine/core";
import Lottie from "react-lottie";
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
  lottieImg: {
    width: "auto",
    height: "300px",
    [theme.fn.smallerThan("sm")]: { width: "auto", height: "300px" },
  },
}));
function ServiceCard({ item }) {
  const { classes } = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: item.image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Card
      shadow="sm"
      p="xl"
      component="a"
      href={item.link}
      className={classes.cardWrapper}
    >
      <Card.Section>
        <Lottie options={defaultOptions} className={classes.lottieImg} />
      </Card.Section>

      <Text weight={500} size="lg" mt="md">
        {item.title}
      </Text>
      <Group grow>
        <div>
          <Text weight={500} size="sm" mt="sm">
            TYPE
          </Text>
          <Text color="cyan" size="sm" mt="sm">
            {item.type}
          </Text>
        </div>
        <div>
          <Text weight={500} size="sm" mt="sm">
            CLIENT
          </Text>
          <Text color="cyan" size="sm" mt="sm">
            {item.client}
          </Text>
        </div>
      </Group>
      <Text
        component="div"
        mt="xs"
        color="dimmed"
        size="sm"
        sx={{ textAlign: "justify" }}
      >
        {item.details}
      </Text>
    </Card>
  );
}
export default ServiceCard;
