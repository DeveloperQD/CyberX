import React from 'react';
import { Button } from 'react-bootstrap';

export default function TableButton({ src, alt, size, onClick }) {
  return (
    <Button onClick={onClick} style={{width: "100%", height: size+"px"}} variant="secondary" className="p-0">
      <img src={src} alt={alt} className="image-button " style={{height: "90%"}} />
    </Button>
  )
}
