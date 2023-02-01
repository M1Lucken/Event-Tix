import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          A Wookpack Production
        </Typography>
        <Typography variant="h5" component="div">
          among{bull}the{bull}stars
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          celebration
        </Typography>
        <Typography variant="body2">
          Date: tbd
          <br />
          Time: tbd
          <br />
          Coordinates: tbd
          {/* {'"Extra info: TBD"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">Tickets</Button>
      </CardActions>
      <CardActions>
        <Button size="small" color="secondary">Driving Directions</Button>
      </CardActions>
    </React.Fragment>
  );

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://wookpack.com/">
        wookpack.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function PswrdForm() {
  const [showCard, setShowCard] = React.useState(false);
  const [showForm, setShowForm] = React.useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('password'),
    });
    if (data.get('password') === "toothbrush") {
        setShowCard(true);
        setShowForm(false);
      }
      else {
        window.alert("Try again ;)");
        // setShowCard(false);
        // setShowForm(true);
      }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${require('./image.jpg')})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            {showCard && (
            <Box sx={{ minWidth: 300 }}>
                <Card variant="outlined">{card}</Card>
            </Box>  
            )}

            {showForm && (
            <Avatar sx={{ m: 1, bgcolor: 'grey' }}>
              <LockOutlinedIcon />
            </Avatar>
            )}

            {showForm && (
            <Typography component="h1" variant="h5">
              Hi.
            </Typography>
            )}


            {showForm && (
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                color="secondary"
                autoComplete="current-password"
              />
             
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="inherit"
                sx={{ mt: 3, mb: 2 }}
              >
                Enter
              </Button>

              
              
              <Copyright sx={{ mt: 5 }} />
            </Box>
            )}
            
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}