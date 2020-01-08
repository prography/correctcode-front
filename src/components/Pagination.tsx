import React, { useState } from 'react';

const PageLayout: React.FC = () => {
  const currentPage = useState(1);
  return <div>{currentPage}</div>;
};

export default PageLayout;
