import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import SendMail from  '../components/SendMail'

const useStyles = makeStyles(theme => ({
  clickableIcon: {
    color: 'gray',
    '&:hover': {
    color: 'blue',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <IconButton
        color="primary"
      >
        <GitHubIcon onClick={event => window.open('https://github.com/giljetomo')} />
       </IconButton>
      <IconButton
      color="primary"
      >
        <LinkedInIcon onClick={event => window.open('https://www.linkedin.com/in/gmjetomo')} />
      </IconButton>
      <IconButton
        color="primary"
      >
        <EmailTwoToneIcon onClick={SendMail}/>
      </IconButton>
      <br />
      I built this website on React, Next.js, and Material-UI.
    </footer>
  );
}
 
export default Footer;