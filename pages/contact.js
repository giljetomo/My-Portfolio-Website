import Head from 'next/head'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Grid } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Play'
    ].join(','),
  },});

const Contact = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Gil's Contact</title>
      </Head>
        <div>
          <Grid
            container
            justify="center"
            >
            <Card
              style={{
              width: 400,
              height: 200,
              background: 'linear-gradient(to right, #6999d8 6%, #fafafa 100%)'
              }}>
              <CardHeader 
              title="Gil Jetomo"
              subheader="Software Developer - iOS"
              >
              </CardHeader>
              <CardContent className="contact">
                  <br />
                  gmjetomo@outlook.com<br />
                  (778) 721-8808
              </CardContent>
            </Card>
          </Grid>
        </div>
      </ThemeProvider>
    </>
   );
}
 
export default Contact;

