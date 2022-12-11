import Link from "next/link";

let isLoggedIn = false;

const logout = () => {
  let x = document.cookie;
  console.log(x);
};

const Navbar = ({ user, id, pr_id }) => {
  // console.log(pr_id);
  return (
    <nav className="navbar">
      <Link href={`/users/${id}/`} className="navbar-brand">
        Hello, {user}!
      </Link>
      {pr_id ? (
        <Link
          href={`/users/${id}/projects/${pr_id}/addShot`}
          className="create"
        >
          Add shot
        </Link>
      ) : (
        <Link href={`/users/${id}/newProject`} className="create">
          Add project
        </Link>
      )}
      <Link href="/" className="create" onClick={logout}>
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
