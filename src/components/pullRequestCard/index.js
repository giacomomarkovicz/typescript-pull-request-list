import React from "react";

import Moment from "react-moment";

import { withStyles } from "@material-ui/styles";

import { Typography, Paper, Box, Link } from "@material-ui/core/";

const pullRequestCard = ({ number, title, createdAt, classes }) => (
  <Link
    underline="none"
    href={`https://github.com/microsoft/TypeScript/pull/${number}`}
  >
    <Paper className={classes.cardItem}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography component="p">#{number}</Typography>
        <Moment className={classes.dateTypography} format="DD/MM/YYYY HH:mm">
          {createdAt}
        </Moment>
      </Box>
    </Paper>
  </Link>
);

export default withStyles({
  cardItem: {
    marginTop: "8px",
    marginBottom: "8px",
    padding: "16px",
    "&:hover": {
      background: "#f2f2f2"
    }
  },
  dateTypography: {
    color: "#aaa",
    fontSize: "12px",
    marginLeft: "10px"
  }
})(pullRequestCard);
