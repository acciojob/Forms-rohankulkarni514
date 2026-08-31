import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
      {children}
    </div>
  );
};

export default Card;