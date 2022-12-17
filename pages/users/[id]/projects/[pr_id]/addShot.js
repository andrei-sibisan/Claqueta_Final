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

const AddShotForm = () => {
  const [form, setForm] = useState({
    shot: {
      name: "",
      scene: "",
      dayNight: "",
      interiorExterior: "",
      Characters: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const { id, pr_id } = router.query;

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        sendShot();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const sendShot = async (req, res) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/users/${id}/projects/${pr_id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      router.push(`/users/${id}/projects/${pr_id}`);
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
    if (!form.name) {
      err.username = "name is required";
      console.log("no name");
    }
    if (!form.scene) {
      err.password = "scene is required";
      console.log("no scene");
    }
    if (!form.dayNight) {
      err.password = "day or night is required";
      console.log("no day or night");
    }
    if (!form.interiorExterior) {
      err.password = "int or ext is required";
      console.log("no int or ext");
    }

    return err;
  };

  return (
    <Form size="small" onSubmit={handleSubmit}>
      <Segment stacked>
        <Form.Input
          fluid
          onChange={handleChange}
          name="name"
          placeholder="shotname"
        ></Form.Input>
        <Form.Input
          fluid
          onChange={handleChange}
          name="scene"
          placeholder="scene name"
        ></Form.Input>
        <Form.Input
          fluid
          onChange={handleChange}
          name="dayNight"
          placeholder="day or night"
        ></Form.Input>
        <Form.Input
          fluid
          onChange={handleChange}
          name="interiorExterior"
          placeholder="interior or exterior"
        ></Form.Input>
        <Form.Input
          fluid
          onChange={handleChange}
          name="Characters"
          placeholder="Characters"
        ></Form.Input>
        <Button color="grey" fluid size="medium" type="submit">
          Submit
        </Button>
      </Segment>
    </Form>
  );
};

export default AddShotForm;
