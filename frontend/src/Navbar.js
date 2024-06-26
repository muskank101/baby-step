// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     makeStyles,
//   } from "@mui/material";
// import {AppBar,Toolbar,Typography,makeStyles} from "@mui/styles";
import {Button,AppBar,Toolbar,Typography} from "@mui/material";
  import {makeStyles} from "@mui/styles";
  import { useNavigate } from "react-router-dom";
  
  import isAuth, { userType } from "./lib/isAuth";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 2,
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const Navbar = (props) => {
    const classes = useStyles();
    let navigate = useNavigate();
  
    // const handleClick = (goto) => {
    //   navigate("/")
    // };
    const LoginButton=()=>{
      navigate("/login")
    }
    const SignupButton=()=>{
      navigate("/signup")
    }
  
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Job Portal
          </Typography>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                {/* <Button color="inherit" onClick={() => handleClick("/home")}>
                  Home
                </Button>
                {/* <button></button> */}
                {/* <Button
                    onClick={() => {
                        navigate("/home")
                    }}
                >
                    HOME
                </Button> */}



                {/* <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  Add Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/employees")}>
                  Employees
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button> */}
                {/* <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button> */}
              </> 
            ) : (
              <>
                {/* <Button color="inherit" onClick={() => handleClick("/home")}>
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  Applications
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button> */}
              </>
            )
          ) : (
            <>
                {/* <Button color="primary"
                onClick={() => {
                // alert('clicked');
                }}
                >
                  Click me
                </Button> */}
                    {/* //////////() => handleClick("/login")}> */}
              <Button color="inherit" onClick={LoginButton}>
                Login
              </Button>
              <Button color="inherit" onClick={SignupButton}>
                Signup
              </Button>
              {/* <Button color="inherit" onClick={() => handleClick("/signup")}>
                Signup
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;