import Head from 'next/head'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Image from 'next/image'
import addRecipe1 from './../public/add-recipe-1.png'
import addRecipe2 from './../public/add-recipe-2.png'
import profile1 from './../public/profile-1.png'
import profile2 from './../public/profile-2.png'
import profile3 from './../public/profile-3.png'
import recipeList1 from './../public/recipe-list-1.png'
import recipeList2 from './../public/recipe-list-2.png'

const images = [
  { img: addRecipe2 },
  { img: addRecipe1 },
  { img: recipeList1 },
  { img: recipeList2 },
  { img: profile1 },
  { img: profile2 },
  { img: profile3 },
];

function getCols(screenWidth) {
  if (isWidthUp('lg', screenWidth)) {
    return 2.8;
  }

  if (isWidthUp('md', screenWidth)) {
    return 2.5;
  }

  return 1.3;
}

function getWidth(screenWidth) {
  if (isWidthUp('lg', screenWidth)) {
    return 800;
  }

  if (isWidthUp('md', screenWidth)) {
    return 600;
  }

  return 370;
}

function getHeight(screenWidth) {
  if (isWidthUp('lg', screenWidth)) {
    return 610;
  }

  if (isWidthUp('md', screenWidth)) {
    return 500;
  }

  return 600;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // width: {tileWidth},
    // height: 433,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const Projects = (props) => {
  const classes = useStyles();
  const cols = getCols(props.width); 
  const tileWidth = getWidth(props.width)
  const gridHeight = getHeight(props.width)

  return (
    <>
    <Head>
      <title>Gil's Projects</title>
    </Head>
      <div className="projects">
        <h2 className="projects-h2">Recipes and Calories Manager</h2>
        <div className="project-desc">
        <p>With this app you can concoct any dish that is tailored to your personal daily calorie needs.
          <br />The recipes are organized in a list as meals: breakfast, lunch, snack, and dinner.
          <br />You can regularly update your profile's statistics to keep track of your BMI to keep it within normal level.</p>
        </div>
      </div>
      <div className={classes.root}>
      <GridList className={classes.gridList} 
                cols={cols} 
                cellHeight={gridHeight} 
                spacing={15}
                style={{
                  width: tileWidth
                }}>
        {images.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              // actionIcon={
              //   <IconButton aria-label={`star ${tile.title}`}>
              //     <StarBorderIcon className={classes.title} />
              //   </IconButton>
              // }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </>
   );
}
 
export default withWidth()(Projects);