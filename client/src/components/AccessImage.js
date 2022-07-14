import React from 'react';
import Access from '../img/access.svg';
import NoAccess from '../img/noaccess.svg';

export default function StatusImage({ permission, size}) {
  return (
    <div>
      {permission ? 
      <img src={Access} alt="Access" height={size} width={size} className="image-button"/> 
      :
      <img src={NoAccess} alt="NoAccess" height={size} width={size} className="image-button"/>}
    </div>
  )
}
