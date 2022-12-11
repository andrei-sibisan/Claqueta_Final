import { Button, Form, Grid, Segment } from "semantic-ui-react";

import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

const AddProjectForm = ({ id }) => {
  const [form, setForm] = useState({ name: "", shotlist: [] });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  console.log(id);
  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        addProject();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const addProject = async (req, res) => {
    try {
      const proj = { project: form };
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proj),
      });
      const data = await res.json();
      console.log(data);
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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log("handle change: ", e.target.name, form);
  };

  const validate = () => {
    let err = {};
    if (!form.name) {
      err.name = "Project name is required";
      console.log("no project name");
    }

    return err;
  };

  return (
    <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="small" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              error={
                errors.name
                  ? {
                      content: "Please enter a project name",
                      pointing: "below",
                    }
                  : null
              }
              name="name"
              icon="user"
              iconPosition="left"
              placeholder="project name"
              onChange={handleChange}
            />

            <Button color="olive" fluid size="large" type="submit">
              add
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default AddProjectForm;
