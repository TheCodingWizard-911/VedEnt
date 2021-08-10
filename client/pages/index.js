import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(2),
    },
  },
}));

const VedEntHomePage = () => {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.card}>
      Home Page
    </Card>
  );
};

export default VedEntHomePage;
