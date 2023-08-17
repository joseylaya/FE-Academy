import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography } from '@mui/material';

import { LoadingButton } from '@mui/lab';
import Axios from 'axios';
import { Zoom, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);



  // ----------------------------------------------------------------------

  // const [errorMessages, setErrorMessages] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // const validate = () => {
  //   let result = true;
  //   if (emailLogin === '' || emailLogin === null) {
  //     result = false;
  //     alert("Username Required!")
  //   }
  //   if (passwordLogin === '' || passwordLogin === null) {
  //     result = false;
  //     alert("Password Required!")
  //   }
  //   return result;
  // }

  const handleClick = (event) => {
    event.preventDefault();

    const validate = () => {
      if (!emailLogin || !passwordLogin) {

        let isproceed = true;
        if (emailLogin === null || emailLogin === '') {
          isproceed = false;
          toast.warning('Required Email Address', { autoClose: 2000, transition: Zoom });
        }
        if (passwordLogin === null || passwordLogin === '') {
          isproceed = false;
          toast.warning('Required Password', { autoClose: 2000, transition: Zoom });
        }
        // if (!checkboxChecked) {
        //   toast.warning('Must Agree to the EULA', { autoClose: 2000, transition: Zoom });
        //   return false;
        // }
        return isproceed;
      };
      return true;
    }

    if (validate()) {
      Axios.post('http://localhost:8000/login', {
        email: emailLogin,
        password: passwordLogin,
      })
        .then((response) => {
          if (response.data.message) {
            // console.log(response.data.message);
            toast.error('Email and Password do not match', { autoClose: 2000, transition: Zoom });
          } else if (response.data.length > 0) {
            const userId = response.data[0].Id;
            console.log(userId);
            console.log(response);

            sessionStorage.setItem('userId', userId);
            const storedUserId = sessionStorage.getItem('userId');
            if (storedUserId) {
              console.log('Session ID:', storedUserId);
            } else {
              console.log('Session expired or not established');
            }

            const authToken = response.data.token;
            sessionStorage.setItem('token', authToken);

            setIsSubmitted(true);
            // toast.success('Logged in successfully!');
          } else {
            alert('Empty response received.');
          }
        })
        .catch((error) => {
          console.error('Error occurred during login:', error);
          // Handle error case
        });
    }
  };



  // Generate JSX code for error message
  // const renderErrorMessage = (email) =>
  //   email === errorMessages.email && (
  //     <div className="errors" style={{ color: "red" }}>{errorMessages.message}</div>
  //   );

  // ----------------------------------------------------------------------






  const renderForm = (
    <>
      <form>
        <Stack spacing={3}>
          <TextField name="email" label="Email address" onChange={(event) => { setEmailLogin(event.target.value); }} />
          {/* {renderErrorMessage("email")} */}
          <TextField
            name="pass"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}

            onChange={(event) => { setPasswordLogin(event.target.value); }}
          />
          {/* {renderErrorMessage("pass")} */}
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>

          <Typography variant="body2" sx={{ mb: 5 }}>
            <Checkbox name="remember" label="Agree to the End-User Licence Agreement" checked={checkboxChecked}
              onChange={(event) => setCheckboxChecked(event.target.checked)} />
            <Link variant="subtitle2" underline="hover">
              Agree to the End-User Licence Agreement {''}
            </Link>

          </Typography>
          <Typography variant="body2" sx={{ mb: 5 }}>
            <Link variant="subtitle2" underline="hover">
              Forgot password?
            </Link>
          </Typography>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
          Login
        </LoadingButton>
      </form>
    </>
  );

  return (
    <div className="app">
      <div className="login-form">
        <ToastContainer />
        {isSubmitted ? navigate("/dashboard") : renderForm}
      </div>
    </div>
  );
}
