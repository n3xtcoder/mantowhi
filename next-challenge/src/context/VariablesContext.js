import React, { useState, createContext, useEffect } from "react";

//Initialization of the variables in the context
const initContextVariables = {
  photoAlbum: [],
};

export const VariablesContext = createContext(initContextVariables);
//Creation of the provider that will share the variables values through the components
export const VariablesContextProvider = ({ children }) => {
  const [photoAlbum, setPhotoAlbum] = useState(initContextVariables.photoAlbum);

  useEffect(() => {
    let photoFetch = async () => {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/1/photos`
        );
        let data = await response.json();
        setPhotoAlbum(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    photoFetch();
  }, []);

  return (
    <VariablesContext.Provider
      value={{
        photoAlbum,
        setPhotoAlbum,
      }}
    >
      {children}
    </VariablesContext.Provider>
  );
};
