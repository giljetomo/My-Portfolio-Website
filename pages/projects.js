import Head from 'next/head'
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';

import Image from 'next/image'
import addRecipe1 from './../public/add-recipe-1.png'
import addRecipe2 from './../public/add-recipe-2.png'
import { BorderColor } from '@material-ui/icons';

const grey900 = grey["900"];
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius: 10,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 250,
    height: 541,
    borderRadius: 10,
    borderColor: grey900,
  },
}));

const Projects = () => {
  const classes = useStyles();
  const theme = useTheme();

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
         {/* <Image 
          className="img"
          src={img} 
          width={250}
          height={541}
          layout="fixed"/> */}
      </div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={addRecipe1}
        />
         <CardContent className={classes.content}>
        </CardContent>
      </Card>
      <br />
      <Card className={classes.root}>
        <CardContent className={classes.content}>
        </CardContent>
        <CardMedia
          className={classes.cover}
          image={addRecipe2}
        />
      </Card>
    </>
   );
}
 
export default Projects;