import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();
export const useLoading = () => useContext(LoadingContext);

let globalSetLoading; // This will hold the setLoading function

export const setLoading = (isLoading) => {
    if (globalSetLoading) {
        globalSetLoading(isLoading);
    }
};

export default LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  globalSetLoading = setIsLoading; // Assign the function to the global variable

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
