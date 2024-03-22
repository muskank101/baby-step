import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid } from '@mui/material';
import {makeStyles} from "@mui/styles";
import Welcome from "./component/Welcome";
import Signup from "./component/Signup";
import Navbar from "./Navbar"
const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const SetPopupContext = createContext();

function App() {
  const classes = useStyles();
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
    <BrowserRouter>
      <SetPopupContext.Provider value={setPopup}>
        <Grid conatiner direction="column">
          <Grid item xs>
            <Navbar/>
          </Grid>
          <Grid item className={classes.body}>


            <Routes>
              {/* <Route exact path="/">
              element=
                <{<Welcome/>} /> */}
              <Route path="/" element={<Welcome />} />
              {/* </Route> */}
              <Route exact path="/login">
                {/* <Login /> */}
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/logout">
                {/* <Logout /> */}
              </Route>
              <Route exact path="/home">
                {/* <Home /> */}
              </Route>
              <Route exact path="/applications">
                {/* <Applications /> */}
              </Route>
              {/* <Route exact path="/profile">
                {userType() === "recruiter" ? (
                  <RecruiterProfile />
                ) : (
                  <Profile />
                )}
              </Route> */}
              <Route exact path="/addjob">
                {/* <CreateJobs />
              {/* </Route>
              <Route exact path="/myjobs">
                {/* <MyJobs /> */}
              </Route>
              <Route exact path="/job/applications/:jobId">
                {/* <JobApplications /> */}
              </Route>
              <Route exact path="/employees">
                {/* <AcceptedApplicants /> */}
              </Route>
              <Route>
                {/* <ErrorPage /> */}
              </Route> */} */}
            </Routes>
          </Grid>
        </Grid>
        {/* <MessagePopup
          open={popup.open}
          setOpen={(status) =>
            setPopup({
              ...popup,
              open: status,
            })
          }
          severity={popup.severity}
          message={popup.message}
        /> */}
      </SetPopupContext.Provider>
    </BrowserRouter>

  );
}

export default App;
