import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { database } from '../../firebaseConfiguration'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const Auth = ({ onSignup }) => {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        const password = data.get('password')
        if (onSignup) {
            createUserWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authdata");
                navigate('/login');
            }).catch(err => {
                alert(err.code);
            });
        } else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authdata");
                data.user.getIdToken().then(token => {
                    localStorage.setItem('firebaseToken', token);
                    navigate('/');
                }).catch(err => {
                    console.error('Error getting ID token:', err.message);
                });
            }).catch(err => {
                alert(err.code);
            });
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {onSignup ? "Sign Up" : "Sign in"}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {onSignup && <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {onSignup && <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="verifyPassword"
                            label="Verify Password"
                            type="password"
                            id="verifyPassword"
                        />}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {onSignup ? "Sign Up" : "Sign In"}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                {!onSignup && <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>}
                                {onSignup && <Link href="/login" variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>}

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default Auth
