import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import SendMail from  './SendMail'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  clickableIcon: {
    color: 'gray',
    '&:hover': {
    color: 'black',
    },
  },
}));

const Socials = () => {
  const classes = useStyles()

  return ( 
    <div>
      <IconButton
        color="primary"
      >
        <GitHubIcon onClick={event => window.open('https://bit.ly/3fa8bWY')} />
       </IconButton>
      <IconButton
      color="primary"
      >
        <LinkedInIcon onClick={event => window.open('https://bit.ly/3eLyh3L')} />
      </IconButton>
      <IconButton
        color="primary"
      >
        <EmailTwoToneIcon onClick={SendMail}/>
      </IconButton>
    </div>
   );
}
 
export default Socials;