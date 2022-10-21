import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Alerts() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <p>
          Los penales debe cargarlos como goles. En esta etapa NO hay empates!!
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Ver Info</Button>;
}
export default Alerts;