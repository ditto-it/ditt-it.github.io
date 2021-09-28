import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>Ditto</span>
          </a>
          <span>Reverse Image Search</span>
        </h1>
      </div>
    </header>
  );
}