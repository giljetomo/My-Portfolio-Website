import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';

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
      <GitHubIcon onClick={event => window.open('https://github.com/giljetomo')}
      className={classes.clickableIcon}
       />
      <LinkedInIcon />
    </footer>
  );
}
 
export default Footer;