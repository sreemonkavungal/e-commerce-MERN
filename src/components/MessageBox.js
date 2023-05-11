import { Alert } from 'bootstrap';


export default function MessageBox(props) {
    return (
      <Alert variant = {props.varient || 'info'}>{props.children}</Alert>
      );
}