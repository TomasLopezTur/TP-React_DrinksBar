import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import WineBarIcon from '@mui/icons-material/WineBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../CopyRight';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

    const {login} = useAuth();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <WineBarIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Inicia sesión
                    </Typography>
                    <Formik

                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validate={(values) => {
                            const errors = {};
                            const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

                            if (!values.email) {

                                errors.email = 'Email es requerido.';

                            } else if (!regexpEmail.test(values.email)) {

                                errors.email = 'El email es invalido.';

                            }

                            if (!values.password) {
                                errors.password = 'El password es requerido.';

                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmiting }) => {
                            login(values)

                            setSubmiting(false)

                        }}
                    >
                        {
                            ({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting
                            }) => (
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="email"
                                        label="Email"
                                        type="email"
                                        id="email"
                                        value={values.email}
                                        error={errors.email && touched.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.email && touched.email && errors.email}
                                    />
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoFocus
                                        value={values.password}
                                        error={errors.password && touched.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.password && touched.password && errors.password}
                                    />
                                    {/* <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    /> */}
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="outlined"
                                        color="primary"
                                        sx={{ mt: 3, mb: 2,  paddingTop: 2, paddingBottom: 2, boxShadow: '0 0px 5px 2px rgba(0, 0, 255, .5)',border: 0  }}
                                    >
                                        Iniciar
                                    </Button>
                                    <Grid container>
                                        {/* <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid> */}
                                        <Grid item>
                                            <Link to="/register" variant="body2">
                                                {"No tenes una cuenta?, registrate!!"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )
                        }

                    </Formik>
                </Box>

                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}