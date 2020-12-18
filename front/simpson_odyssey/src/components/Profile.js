import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core/";

const Profile = () => {
  const [profile, setProfile] = useState({
    email: "homer.simpson@wildcodeschool.fr",
    name: "Homer",
    lastname: "Simpson",
  });
  return (
    <div className='Profile'>
      <Link to='/signin'>Deconnexion</Link>
      <List>
        <ListItem
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "baseline",
          }}>
          <ListItemText primary='Email' secondary={profile.email} />
          <ListItemText primary='Name' secondary={profile.name} />
          <ListItemText primary='LastName' secondary={profile.lastname} />
        </ListItem>
      </List>
    </div>
  );
};

export default Profile;
