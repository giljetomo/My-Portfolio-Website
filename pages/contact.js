import Head from 'next/head'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Grid } from '@material-ui/core';

const Contact = () => {
  return (
    <>
    <Head>
      <title>Gil's Contact</title>
    </Head>
      <div className="contact">
        <Grid
          container
          justify="center"
          >
          <Card
            style={{
            width: 450,
            height: 200,
            background: 'linear-gradient(to right, #6999d8 6%, #fafafa 100%)'
            }}>
            <CardHeader
            title="Gil Jetomo"
            subheader="Software Developer - iOS"
            >
            </CardHeader>
            <CardContent>
                gmjetomo@outlook.com<br />
                (778) 721-8808
            </CardContent>
          </Card>
        </Grid>
      </div>
    </>
   );
}
 
export default Contact;

