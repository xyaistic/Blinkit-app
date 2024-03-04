import React, { useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';
import { Toast } from 'native-base';

const GlobalLoader = () => {
  const { isLoading } = useLoading();

  useEffect(() => {
    if (isLoading) {
      Toast.show({
        title: 'Data is loading...',
        status: 'info',
        placement: 'top', // You can change this to 'bottom' or 'top-right' etc. as per your requirement
        duration: null, // Keep the toast visible until isLoading is false
      });
    } else {
      Toast.closeAll(); // Close the toast when data is loaded
    }
  }, [isLoading]);

  return null; // This component does not render anything itself
};

export default GlobalLoader;
