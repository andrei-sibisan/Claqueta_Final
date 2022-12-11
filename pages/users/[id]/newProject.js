import AddProjectForm from "../../../components/AddProjectForm";
import { useRouter } from "next/router";

const NewProject = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div>
        <h1>I'm a little new project stand in</h1>
        <AddProjectForm id={id} />
      </div>
    </>
  );
};

export default NewProject;
