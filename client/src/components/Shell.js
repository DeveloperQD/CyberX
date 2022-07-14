import React from 'react';
import { Button } from 'react-bootstrap';

export default function Shell({ onClick }) {
  return (
    <Button onClick={onClick} variant="primary" className="fs-5 font-bold">
      Execute Script
    </Button>
  )
}
