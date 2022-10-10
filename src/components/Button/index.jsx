import { Container } from './styles';

const Button = ({ variant, onClick, type, children }) => (
  <Container variant={variant} type={type} onClick={onClick}>
    {children}
  </Container>
);

export default Button;
