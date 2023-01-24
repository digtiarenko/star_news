import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './page404.scss';

const Page404: React.FC = () => {
  return (
    <Container className="error">
      <Typography className="error_title">PAGE 404</Typography>
      <Typography className="error_text">
        Oops. There's nothing here...
      </Typography>
      <Button
        startIcon={<KeyboardBackspaceIcon className="error_button--icon" />}
        className="error_content--button"
        component={Link}
        to={'/'}
      >
        Back to homepage
      </Button>
    </Container>
  );
};

export default Page404;
