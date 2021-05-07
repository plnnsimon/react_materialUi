import {AppBar, Box, Button, Card, CardActions, CardContent, 
  CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, 
  Paper, TextField, Toolbar, Typography} from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import LayerIcon from '@material-ui/icons/Layers'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  cardMedia: {
    paddingTop: "70%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }


  return (
    <div>
      <AppBar color="default" position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton 
              edge="start" 
              className={classes.menuButton}
              color="inherit"
              aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6">Web Blog</Typography>
              <Box mr={3}>
                <Button color="primary" variant="outlined" onClick={handleClickOpen} >Log in</Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="from-dialog-title">
                  <DialogTitle id="from-dialog-title">Log In</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Log in to see videos</DialogContentText>
                    <TextField 
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Adress"
                      type="email"
                      fullWidth
                    />
                    <TextField 
                      autoFocus
                      margin="dense"
                      id="pass"
                      label="Password"
                      type="password"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">log In</Button>
                  </DialogActions>
                </Dialog>
              </Box>
              <Button color="secondary" variant="contained">Sign up</Button>
          </Toolbar> 
        </Container>
      </AppBar>
      <main>
        <Paper className={classes.mainFeaturesPost}
        style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}>
          <Container fixed>
          <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Blog
                  </Typography>
                  <Typography
                    variant="h5"
                    color="inherit"
                    paragraph
                  >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Qui dicta minus molestiae vel beatae natus eveniet ratione 
                  temporibus aperiam harum alias officiis assumenda officia 
                  quibusdam deleniti eos cupiditate dolore doloribus!
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="sm">
            <Typography 
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              >Web Blog</Typography>
            <Typography 
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Qui dicta minus molestiae vel beatae natus eveniet ratione 
              temporibus aperiam harum alias officiis assumenda officia 
              quibusdam deleniti eos cupiditate dolore doloribus!</Typography>
              <div className={classes.mainButtons}>
                <Grid container spacing={5} justify="center">
                  <Grid item>
                    <Button variant="outlined" color="primary" >Start Now</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="secondary" >Learn more</Button>
                  </Grid>
                </Grid>
              </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"/>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Block Post
                    </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Qui dicta minus molestiae vel.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>

                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
              <BottomNavigationAction
                label="Recents"
                value='recents'
                icon={<RestoreIcon />}
              />
              <BottomNavigationAction
                label="Favorites"
                value='favorites'
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction
                label="Nearby"
                value='nearby'
                icon={<LocationOnIcon />}
              />
              <BottomNavigationAction
                label="Folder"
                value='folder'
                icon={<FolderIcon />}
              />
        </BottomNavigation>
        <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
          Web Blog React JS Material UI site
        </Typography>
      </footer>
    </div>
  );
}

export default App;
