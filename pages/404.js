import Head from 'next/head'
import Button from '@material-ui/core/Button';

const NotFound = () => {
  return ( 
    <>
    <Head>
      <title>Page Not Found</title>
    </Head>
      <div className="not-found">
        <h1>Sorry about that!</h1>
        <h2>That page cannot be found.</h2>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/"
        >
          Bring Me Back to the Homepage
        </Button>
      </div>
    </>
   );
}
 
export default NotFound;