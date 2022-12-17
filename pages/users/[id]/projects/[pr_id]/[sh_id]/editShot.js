import { Button, Form, Segment } from "semantic-ui-react";

import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

const EditShotForm = ({ shot }) => {
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

  const { id, pr_id, sh_id } = router.query;

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        editShot();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const editShot = async (req, res) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/users/${id}/projects/${pr_id}/${sh_id}`,
        {
          method: "PUT",
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
          defaultValue={shot.name}
        ></Form.Input>
        <Form.Input
          fluid
          onChange={handleChange}
          name="scene"
          defaultValue={shot.scene}
        ></Form.Input>
        <Form.Input
          fluid
          onChange={handleChange}
          name="dayNight"
          defaultValue={shot.dayNight}
        ></Form.Input>
        <Form.Input
          fluid
          onChange={handleChange}
          name="interiorExterior"
          defaultValue={shot.interiorExterior}
        ></Form.Input>
        <Form.Input
          fluid
          onChange={handleChange}
          name="Characters"
          defaultValue={shot.Characters}
        ></Form.Input>
        <Button color="grey" fluid size="medium" type="submit">
          Submit
        </Button>
      </Segment>
    </Form>
  );
};

export default EditShotForm;

EditShotForm.getInitialProps = async ({ query: { id, pr_id, sh_id } }) => {
  const res = await fetch(
    `http://localhost:3000/api/users/${id}/projects/${pr_id}/${sh_id}`
  );

  const { data } = await res.json();

  return { shot: data };
};
