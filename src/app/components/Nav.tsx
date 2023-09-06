import Button from "@material-ui/core/Button";
import { AppBar, Toolbar, Typography, Hidden } from "@mui/material";
import Link from "next/link";

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" style={{ flex: 1, marginLeft: "35px" }}>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            DEMO Streaming
          </Link>
        </Typography>
        <Button color="inherit">Login</Button>

        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: "55px" }}
        >
          Start Your Free Trial
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
