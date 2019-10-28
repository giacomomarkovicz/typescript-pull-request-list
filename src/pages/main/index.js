import React, { Component, Fragment } from "react";

import parse from "parse-link-header";

import api from "../../services/api";

import PullRequestCard from "../../components/pullRequestCard";
import Header from "../../components/header";

import { Typography, Container, Button, Box, styled } from "@material-ui/core/";

export default class Main extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = async (page = 1) => {
    const response = await api.get(`&page=${page}&per_page=15`);

    if (page === 1) {
      var parsed = parse(response.headers.link);

      this.setState({ lastPage: parseInt(parsed.last.page) });
    }

    this.setState({ items: response.data, page });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadItems(pageNumber);
  };

  nextPage = () => {
    const { page, lastPage } = this.state;

    if (page === lastPage) return;

    const pageNumber = page + 1;

    this.loadItems(pageNumber);
  };

  render() {
    const { items, page, lastPage } = this.state;

    return (
      <Fragment>
        <Header />

        <Container maxWidth="xl">
          {items.map(item => (
            <PullRequestCard
              number={item.number}
              title={item.title}
              createdAt={item.created_at}
              key={item.id}
            />
          ))}

          <Box
            display="flex"
            style={{ marginTop: "20px", marginBottom: "30px" }}
          >
            <PrevPageButton
              disabled={page === 1}
              onClick={this.prevPage}
              variant="contained"
              color="primary"
            >
              Anterior
            </PrevPageButton>

            <NextPageButton
              disabled={page === lastPage}
              onClick={this.nextPage}
              variant="contained"
              color="primary"
            >
              Próximo
            </NextPageButton>

            <Typography style={{ marginLeft: "10px" }} component="p">
              Página {page} - Total de {lastPage} páginas.
            </Typography>

          </Box>
        </Container>
      </Fragment>
    );
  }
}

const NextPageButton = styled(Button)({
  marginLeft: "25px",
  marginRight: "10px"
});

const PrevPageButton = styled(Button)({
  marginRight: "25px"
});