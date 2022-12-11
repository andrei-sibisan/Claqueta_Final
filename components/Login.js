import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        sendLogin();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const sendLogin = async (req, res) => {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      router.push(`/users/${data.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);

    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    console.log("handle change: ", e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};
    if (!form.username) {
      err.username = "username is required";
      console.log("no username");
    }
    if (!form.password) {
      err.password = "password is required";
      console.log("no password");
    }
    return err;
  };

  return (
    <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src="/film-slate.png" /> Log-in to your account
        </Header>
        <Form size="small" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              error={
                errors.username
                  ? { content: "Please enter a username", pointing: "below" }
                  : null
              }
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="username"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              error={
                errors.password
                  ? { content: "Please enter a password", pointing: "below" }
                  : null
              }
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="password"
              type="password"
              onChange={handleChange}
            />

            <Button color="olive" fluid size="large" type="submit">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link href="/register">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
