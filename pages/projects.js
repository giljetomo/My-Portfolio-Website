import Head from 'next/head'
import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import addRecipe1 from './../public/add-recipe-1.png'
import addRecipe2 from './../public/add-recipe-2.png'
import profile1 from './../public/profile-1.png'
import profile2 from './../public/profile-2.png'
import profile3 from './../public/profile-3.png'
import recipeList1 from './../public/recipe-list-1.png'
import recipeList2 from './../public/recipe-list-2.png'
import addRecipe from './../public/addRecipe.gif'

const images = [
  { img: addRecipe2, title: 'Make a New Recipe' },
  { img: addRecipe1, title: 'Add and Update Ingredients' },
  { img: recipeList1, title: 'Review Your Recipes' },
  { img: recipeList2, title: "Update a Recipe" },
  { img: profile1, title: "Make Your Own Profile" },
  { img: profile2, title: "Make Your Own Profile" },
  { img: profile3, title: "Update Your Statistics"},
  { img: addRecipe, title: "Demo"},
];

function getSizes(screenWidth) {
  if (isWidthUp('lg', screenWidth)) {
    return {
      col: 2.8, 
      tileWidth: 800,
      gridHeight: 610,
      fontSizeHeader: 30,
      fontSizeBody: 23
    }
  }
  if (isWidthUp('md', screenWidth)) {
    return {
      col: 2.5, 
      tileWidth: 600,
      gridHeight: 500,
      fontSizeHeader: 27,
      fontSizeBody: 21
    }
  }
  return {
    col: 1.3, 
    tileWidth: 370,
    gridHeight: 600,
    fontSizeHeader: 23,
    fontSizeBody: 18
  }
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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const Projects = (props) => {
  const classes = useStyles();
  const values = getSizes(props.width);

  return (
    <>
    <Head>
      <title>Gil's Projects</title>
    </Head>
      <div className="project-desc" style={{ fontSize: values.fontSizeHeader }}>
        <Box>Recipes and Calories Manager</Box>
          <div style={{ fontSize: values.fontSizeBody }}>
            <Box lineHeight={1.7}>
              <p>With this app you can concoct any dish that is tailored to your personal daily calorie needs.
                <br />The recipes are organized in a list as meals: breakfast, lunch, snack, and dinner.
                <br />You can regularly update your profile's statistics to keep track of your BMI to keep it within normal level.</p>
            </Box>
          </div>
      </div>
      <div className={classes.root}>
        <GridList className={classes.gridList} 
                  cols={values.col} 
                  cellHeight={values.gridHeight} 
                  spacing={15}
                  style={{
                    width: values.tileWidth
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
              />
            </GridListTile>
          ))}
        </GridList>
    </div>
    </>
   );
}
 
export default withWidth()(Projects);