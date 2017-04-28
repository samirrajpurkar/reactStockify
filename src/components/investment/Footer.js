import React from 'react';
import {Link} from '../router';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="Footer">
      <Link>All</Link>
      <Link>Active</Link>
      <Link>Complete</Link>
    </div>
  );
};