import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../../../../components/Navbar";

import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Table,
} from "semantic-ui-react";
import Link from "next/link";

const projectPage = ({ user }) => {
  const router = useRouter();
  const { id, pr_id } = router.query;
  // console.log(pr_id);
  // console.log(user.projects);
  const currentProject = user.projects.find((project) => project._id === pr_id);

  return (
    <>
      <Navbar user={user.userName} id={user._id} pr_id={pr_id} />

      <Header as="h2" icon textAlign="center">
        <Icon name="film" />
        <Header.Content>
          Your current project is: {currentProject.name}
        </Header.Content>
      </Header>
      <Divider />
      <Container>
        <Button
          animated
          onClick={(e) => router.push(`/users/${id}/projects/${pr_id}/addShot`)}
        >
          <Button.Content visible>
            <Icon name="add" />
          </Button.Content>
          <Button.Content hidden>Add shot</Button.Content>
        </Button>
      </Container>
      <Divider />
      <div>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Scene</Table.HeaderCell>
              <Table.HeaderCell>Shot name</Table.HeaderCell>
              <Table.HeaderCell>Day / Night</Table.HeaderCell>
              <Table.HeaderCell>Interior / Exterior</Table.HeaderCell>
              <Table.HeaderCell>Characters</Table.HeaderCell>
              <Table.HeaderCell>Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {currentProject.shotlist.map((shot) => {
            console.log(currentProject.shotlist);
            return (
              <Table.Body key={shot._id}>
                <Table.Row>
                  <Table.Cell>{shot.scene}</Table.Cell>
                  <Table.Cell>{shot.name}</Table.Cell>
                  <Table.Cell>{shot.dayNight}</Table.Cell>
                  <Table.Cell>{shot.interiorExterior}</Table.Cell>
                  <Table.Cell>{shot.Characters}</Table.Cell>
                  <Table.Cell>
                    <Button
                      size="tiny"
                      icon
                      onClick={async (req, res) => {
                        try {
                          res = await fetch(
                            `http://localhost:3000/api/users/${id}/projects/${pr_id}`,
                            {
                              method: "DELETE",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(shot),
                            }
                          );
                          const data = await res.json();
                          router.push(`/users/${id}/projects/${pr_id}`);
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      <Button.Content visible>
                        <Icon name="delete" link />
                      </Button.Content>
                    </Button>
                    <Button
                      size="tiny"
                      icon
                      onClick={() => {
                        console.log("edit click");
                        router.push(
                          `/users/${id}/projects/${pr_id}/${shot._id}/editShot`
                        );
                        // body: JSON.stringify(shot),
                      }}
                    >
                      <Button.Content>
                        <Icon name="edit" link />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
        </Table>
      </div>
    </>
  );
};

projectPage.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const { data } = await res.json();

  return { user: data };
};
export default projectPage;
