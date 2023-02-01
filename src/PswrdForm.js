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
import { createTheme, rgbToHex, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import LinearProgress from '@mui/material/LinearProgress';
import Fade from '@mui/material/Fade';
import Switch from '@mui/material/Switch';



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
          (noun)
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
        <Button size="small" href="https://www.eventbrite.com/" target="_blank" color="secondary">Tickets</Button>
      </CardActions>
      <CardActions>
        <Button size="small" href="comgooglemaps://?center=34.499656,-119.718794&zoom=14&views=traffic" color="secondary">Driving Directions</Button>
      </CardActions>
    </React.Fragment>
  );

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
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
  const [showLoad, setShowLoad] = React.useState(false);
  const [showForm, setShowForm] = React.useState(true);


//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
const [progress, setProgress] = React.useState(0);
const [buffer, setBuffer] = React.useState(10);

const progressRef = React.useRef(() => {});
React.useEffect(() => {
  progressRef.current = () => {
    if (progress > 100) {
      //setProgress(0);
      //setBuffer(10);
      const diff = Math.random() * 1;
      const diff2 = Math.random() * 1;
      setProgress(progress + diff);
      setBuffer(progress + diff + diff2);

    } else {
      const diff = Math.random() * 5;
      const diff2 = Math.random() * 5;
      setProgress(progress + diff);
      setBuffer(progress + diff + diff2);
    }
  };
});

React.useEffect(() => {
  const timer = setInterval(() => {
    progressRef.current();
  }, 500);

  return () => {
    clearInterval(timer);
  };
}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('password'),
    });
    if (data.get('password') === "toothbrush") {
        setShowLoad(true);
        setShowForm(false);
        setTimeout(() => {
            setShowLoad(false);
            setShowCard(true);
        }, 1000);

        
      }
      else {
        window.alert("Try again ;)");
        
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

          

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} sx={{
            backgroundImage: `url(${require('./flip.jpg')})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} square>
        
        {/* <Box sx={{ width: '100%' }}>
            <LinearProgress variant="buffer" color="inherit" value={progress} valueBuffer={buffer} />
        </Box> */}
        <br></br>  
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
                <Fade in={showCard}>
                <Card variant="outlined">{card}</Card>
                </Fade>
            </Box> 
             )}

            {showLoad && (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress color="secondary" />
            </Box>
            )}

            {/* <Box>
            <CircularProgress variant="determinate" value={progress} color="secondary" />
            </Box> */}

            {showForm && (
                <Fade in={!showCard}>
            <Avatar sx={{ m: 1, bgcolor: 'grey'}}>
              <LockOutlinedIcon />
            </Avatar>
            </Fade>
            )}

            {showForm && (
            <Fade in={!showCard}>
            <Typography color="white" component="h1" variant="h5">
              Hi.
            </Typography>
            </Fade>
            )}


            {showForm && (
                <Fade in={!showLoad} out={showLoad}>
            <Box component="form" noValidate color="inherit" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              
              <TextField
                inputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'grey' } }}

                
                margin="normal"
                required
                fullWidth
                name="password"
                label="password"
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
              
              
            </Box>
            </Fade>
            )}
            
          </Box>
        {/* <br></br> */}
        <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}