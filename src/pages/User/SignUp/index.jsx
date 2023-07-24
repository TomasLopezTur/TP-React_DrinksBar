import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../CopyRight';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

    const {register} = useAuth();

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
                    <Avatar sx={{ m: 1, bgcolor: 'error.main'  }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registrate
                    </Typography>

                    <Formik

                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                        }}
                        validate={(values) => {
                            const errors = {};
                            const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

                            if (!values.email) {

                                errors.email = 'El email es requerido.';

                            } else if (!regexpEmail.test(values.email)) {

                                errors.email = 'El email es invalido.';

                            }

                            if (!values.name) {
                                errors.name = 'El nombre es requerido.';

                            }
                            if (!values.password) {
                                errors.password = 'Ingrese una contraseña.';

                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmiting }) => {
                            register(values)

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
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        {/* <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="firstName"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                            />
                                        </Grid> */}
                                        <Grid item xs={12} /* sm={6} */>
                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                name="name"
                                                label="Nombre"
                                                type="text"
                                                id="name"
                                                autoFocus
                                                value={values.name}
                                                error={errors.name && touched.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={errors.name && touched.name && errors.name}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
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
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                value={values.password}
                                                error={errors.password && touched.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={errors.password && touched.password && errors.password}
                                            />
                                        </Grid>
                                        {/* <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                label="I want to receive inspiration, marketing promotions and updates via email."
                                            />
                                        </Grid> */}
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="outlined"
                                        color="secondary"
                                        sx={{ mt: 3, mb: 2,  paddingTop: 2, paddingBottom: 2, boxShadow: '0 0px 5px 2px rgba(255, 0, 0, .8)',border: 0  }}
                                    >
                                        Registrarme
                                    </Button>
                                    <Grid container justifyContent="flex-start"sx={{ mt: 2 }}>
                                        <Grid item>
                                            <Link to="/login" variant="body2">
                                                Usted tiene una cuenta?, Ingrese!!
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )
                        }
                    </Formik>
                </Box>
                <Copyright sx={{ mt: 8 }} />
            </Container>
        </ThemeProvider>
    );
}