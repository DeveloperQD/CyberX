import React from 'react';
import { Button } from 'react-bootstrap';

export default function StoryHeaderButton({ src, alt, size, onClick }) {
  return (
    <Button onClick={onClick} className="p-1">
      <img src={src} alt={alt} height={size} width={size} className="image-button" />
    </Button>
  )
}
