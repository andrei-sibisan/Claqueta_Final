import { Container, Divider, Grid, Header, Icon } from "semantic-ui-react";

import LoginForm from "../components/Login";
import ContainerText from "../components/ContainerText";

const HomePage = () => {
  return (
    <>
      <Header as="h2" icon textAlign="center">
        <Icon name="film" />
        <Header.Content>Welcome to Claqueta Final!</Header.Content>
        <Header.Subheader>
          The shot organiser you were looking for!
        </Header.Subheader>
      </Header>

      <Divider inverted />
      <Container>
        <Grid
          centered
          columns={2}
          verticalAlign="middle"
          horizontalAlign="middle"
        >
          <Grid.Row centered>
            <Grid.Column centered>
              <LoginForm />
            </Grid.Column>
            <Grid.Column centered>
              <div style={{ fontSize: "1.5rem", padding: "0.5rem" }}>
                <ul>
                  <li style={{ paddingTop: "1em" }}>
                    Are you a script supervisor?
                  </li>
                  <li style={{ paddingTop: "1em" }}>
                    Are you an indie director?
                  </li>
                  <li style={{ paddingTop: "1em" }}>
                    Keep your shots organized.
                  </li>
                  <li style={{ paddingTop: "1em" }}>Try Claqueta Final now!</li>
                </ul>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
