import React, { useContext, useEffect } from 'react';
import { NavigationContext } from './navigation';

const useNavigation = () => useContext(NavigationContext);

function withNavigationWatcher(Component, path) {
  const WrappedComponent = function (props) {
    const { setNavigationData } = useNavigation();

    useEffect(() => {
      setNavigationData({ currentPath: path });
    }, [setNavigationData]);

    return <Component {...props} />;
  }
  return <WrappedComponent />;
}

export {
  useNavigation,
  withNavigationWatcher
}
