import {
  instagram,
  facebook,
  twitter,
  appStore,
  playStore,
  windowStore,
} from "../assets";

import Image from "next/image";
import { Grid, Typography } from "@mui/material";

const footerStyle = {
  backgroundColor: "#414141",
  color: "#bdbdbd",
  width: "100%",
  height: "150px",
  paddingTop: "30px",
};

const typoStyle = {
  fontSize: "12px",
  marginLeft: "60px",
};
const mediaStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "14px",
};
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "130px",
};
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Typography variant="body1" color="inherit" style={typoStyle}>
        {" "}
        Home | Terms and Conditions | Privacy Policy | Collection Statement |
        Help | Manage Account
      </Typography>

      <Typography variant="body1" color="inherit" style={typoStyle}>
        Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
      </Typography>
      <Grid container spacing={3} style={containerStyle}>
        <Grid item xs={12} style={mediaStyle}>
          <Grid style={mediaStyle} xs={6}>
            <Image src={facebook} alt="facebook" width={30} height={30} />
            <Image src={twitter} alt="twitter" width={30} height={30} />
            <Image src={instagram} alt="instagram" width={30} height={30} />
          </Grid>
          <Grid style={mediaStyle} xs={6}>
            <Image src={appStore} alt="instagram" width={100} height={80} />
            <Image src={playStore} alt="instagram" width={100} height={80} />
            <Image src={windowStore} alt="instagram" width={90} height={30} />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
