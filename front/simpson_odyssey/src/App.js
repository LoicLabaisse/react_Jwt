import "./App.css";
import SignUp from "./components/SignUp";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className='App'>
      <MuiThemeProvider>
        <Grid
          container
          alignItems='center'
          style={{ height: "100%", backgroundColor: "#fcb571" }}>
          <Grid item xs={12} sm={12} style={{ "text-align": "center" }}>
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container alignItems='center' justify='center'>
                <Grid item xs={12} sm={6} style={{ "text-align": "center" }}>
                  <img
                    src='http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png'
                    alt='homer'
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  direction='column'
                  alignItems='center'>
                  <SignUp />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
