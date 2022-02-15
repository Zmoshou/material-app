import React, { useState } from 'react';

const App = () => {
  const [num] = useState(1);
  return <div>{num}</div>;
};

export default App;
