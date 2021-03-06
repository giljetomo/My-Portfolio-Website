import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const About = () => {

  return ( 
    <div className="about">
      <h2>
        I'm an iOS developer based in Vancouver.<br />
        I enjoy building mobile apps and teaching how to create them.
      </h2><br /><br />
      <Grid 
        container
        spacing={2}
        justify="center"
        alignItems="center">
        <Grid item>
          <Paper className="paperSwift"
            style={{
              height: 90,
              width: 160,
              color: '#f4f4f9',
              background: 'linear-gradient(315deg, #7fcec5 0%, #14557b 74%)'
            }}>
            Swift
          </Paper>
        </Grid>

        <Grid item>
          <Paper className="paperObjC"
            style={{
              height: 35,
              width: 100,
              color: '#f4f4f9',
              background: 'linear-gradient(315deg, #7fcec5 0%, #14557b 74%)'
            }}>
            Objective-C
          </Paper>
          <br />
        <Grid item>
          <Paper className="java"
            color="primary"
            style={{
              height: 55,
              width: 100,
              color: '#f4f4f9',
              background: 'linear-gradient(315deg, #7fcec5 0%, #14557b 74%)'
            }}>
            Java
          </Paper>
        </Grid>
        </Grid>

        <Grid item>
            <Paper className="c"
              style={{
                height: 50,
                width: 65,
                color: '#f4f4f9',
                background: 'linear-gradient(315deg, #7fcec5 0%, #14557b 74%)'
            }}>
              C
            </Paper>
        </Grid>
      </Grid>
    </div>
   );
}
 
export default About;