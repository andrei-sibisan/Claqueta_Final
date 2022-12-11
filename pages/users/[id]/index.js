import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";

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

const userPage = ({ user }) => {
  // console.log(document.cookie);
  return (
    <>
      <Navbar user={user.userName} id={user._id} />

      <Header as="h2" icon textAlign="center">
        <Icon name="film" />
        <Header.Content>Your current projects are:</Header.Content>
      </Header>
      <div className="grid wrapper">
        {user.projects.map((project) => {
          return (
            <div key={project._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/users/${user._id}/projects/${project._id}`}>
                      {project.name}
                    </Link>
                  </Card.Header>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

userPage.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const { data } = await res.json();

  return { user: data };
};

export default userPage;
