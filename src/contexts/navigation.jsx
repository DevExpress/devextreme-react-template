import React, { useState, createContext } from 'react';



const NavigationContext = createContext({});

function NavigationProvider(props) {
  const [navigationData, setNavigationData] = useState({ currentPath: '' });

  return (
    <NavigationContext.Provider
      value={{ navigationData, setNavigationData }}
      {...props}
    />
  );
}

export {
  NavigationProvider,
  NavigationContext,
}
