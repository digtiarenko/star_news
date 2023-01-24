import { Button, Container, Typography } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './errorFallback.scss';

function ErrorFallback({ error }: FallbackProps) {
  return (
    <Container className="error">
      <Typography className="error_title">
        💥Something went very wrong...💥
      </Typography>
      <Typography className="error_text">{error.message}</Typography>
      <Button
        startIcon={<KeyboardBackspaceIcon className="article_button--icon" />}
        className="error_content--button"
        component={Link}
        to={'/'}
      >
        Back to homepage
      </Button>
    </Container>
  );
}

export default ErrorFallback;
