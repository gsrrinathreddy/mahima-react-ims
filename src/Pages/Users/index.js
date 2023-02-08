import { CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { fetchUsers } from "../../features/users/usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("user", user.users);
  return (
    <>
      List of Users
      {user.loading && <CircularProgress />}
      {!user.loading && user.error ? (
        <Typography>Error: {user.error}</Typography>
      ) : null}
      {!user.loading && user.users.length
        ? user.users.map((user) => {
            return <Typography>{user.name}</Typography>;
          })
        : null}
      <Button color="inherit" onClick={() => dispatch(fetchUsers())}>
        Fetch Users
      </Button>
    </>
  );
}
