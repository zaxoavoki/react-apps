import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { provider } from "../../index";

export default function Header() {
  function handleLogIn() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          console.log("error");
          return;
        }
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Advance to-do
        </Typography>
        <Button color="inherit" onClick={handleLogIn}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
