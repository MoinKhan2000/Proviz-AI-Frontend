import { createContext, useContext } from 'react';
import { useUser } from './userContext';

// Create a context to store user data
export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const name = "Moin Khan";
  const host = "http://localhost:5000";
  const { token } = useUser()
  const addNewApplication = async (formData) => {
    try {
      const url = `${host}/api/v1/applications/newapplication`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      return json;
    } catch (error) {
      return { message: error.message };
    }
  }

  const getAllApplication = async () => {
    try {
      // http://localhost:5000/api/v1/applications/applications
      const url = `${host}/api/v1/applications/applications`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },

      });
      const json = await response.json();
      return json;
    } catch (error) {
      return { message: error.message };
    }
  }

  const deleteApplicationById = async (id) => {
    try {
      // delete/:applicationId 
      const url = `${host}/api/v1/applications/delete/${id}`;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      return { message: error.message };
    }
  }
  const getApplicationById = async (id) => {
    try {
      // http://localhost:5000/api/v1/applications/get/672e33b80b82955cd8f70801
      const url = `${host}/api/v1/applications/get/${id}`;
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      return { message: error.message };
    }
  }

  return (
    <ApplicationContext.Provider value={{ name, getAllApplication, addNewApplication, deleteApplicationById, getApplicationById }}>
      {children}
    </ApplicationContext.Provider>
  );
};

// Custom hook to access the ApplicationContext
export const useApplication = () => {
  // Get the value from ApplicationContext
  const ApplicationContextValue = useContext(ApplicationContext);

  // Ensure that the ApplicationContext is available in the component tree
  if (!ApplicationContextValue) {
    throw new Error('useApplication must be used within a ApplicationProvider');
  }

  // Return the context value (which contains the user data)
  return ApplicationContextValue;
};
