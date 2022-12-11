import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../../../../components/Navbar";

import {
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
  const { pr_id } = router.query;
  console.log(pr_id);
  console.log(user.projects);
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
      <div>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Scene</Table.HeaderCell>
              <Table.HeaderCell>Shot name</Table.HeaderCell>
              <Table.HeaderCell>Day / Night</Table.HeaderCell>
              <Table.HeaderCell>Interior / Exterior</Table.HeaderCell>
              <Table.HeaderCell>Characters</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {currentProject.shotlist.map((shot) => {
            return (
              <Table.Body>
                <Table.Row>
                  <Table.Cell></Table.Cell>
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
