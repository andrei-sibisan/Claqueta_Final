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

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        sendRegister();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const sendRegister = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/");
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
    if (form.password !== form.confirmPassword) {
      err.passwordConfirm = "passwords must match";
      console.log("passwords don't match");
    }
    return err;
  };

  return (
    <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src="/film-slate.png" /> Create an account
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
            <Form.Input
              fluid
              error={
                errors.passwordConfirm
                  ? { content: "Passwords do not match", pointing: "below" }
                  : null
              }
              name="confirmPassword"
              icon="lock"
              iconPosition="left"
              placeholder="confirm password"
              type="password"
              onChange={handleChange}
            />

            <Button color="olive" fluid size="large" type="submit">
              Create account
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
