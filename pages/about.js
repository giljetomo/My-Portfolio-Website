import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const About = () => {

  return ( 
    <div className="about">
      <h1>I'm an iOS developer based in Vancouver. I enjoy building apps and teaching how to create them.</h1>
      <Grid 
        container
        spacing={2}
        justify="center"
        // direction="row"
        alignItems="center">
        <Grid item>
          <Paper className="paperSwift"
            style={{
              height: 80,
              width: 120,
            }}>
            Swift
          </Paper>
        </Grid>

        <Grid item>
          <Paper className="paperObjC"
            style={{
              height: 35,
              width: 100,
            }}>
            Objective-C
          </Paper>
          <br />
        <Grid item>
          <Paper className="java"
            style={{
              height: 55,
              width: 100,
            }}>
            Java
          </Paper>
        </Grid>
        </Grid>

        <Grid item>
            <Paper className="c"
              style={{
                height: 60,
                width: 60,
            }}>
              C
            </Paper>
        </Grid>

      </Grid>
    </div>
   );
}
 
export default About;