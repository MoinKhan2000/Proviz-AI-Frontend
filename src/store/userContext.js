import { createContext, useContext, useState, useEffect } from 'react';

// Create UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Manage token and user state
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [user, setUser] = useState(null);
  const host = "http://localhost:5000";

  // Synchronize token with local storage
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Store token and user role in localStorage
  const storeTokenInLS = (authToken, userRole) => {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('userType', userRole);
  };

  // Clear token and user info during logout
  const logOutUser = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userType');
    setToken(null);
    setUser(null);
  };

  // Sign-up function to handle user registration 
  const signUp = async (formData) => {
    try {
      const url = `${host}/api/v1/users/signup`;
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        // Do not set the Content-Type header
      });
      const json = await response.json();
      return json;
    } catch (error) {
      return { message: error.message };
    }
  };


  // Login function to handle user sign-in
  const login = async (formData) => {
    try {
      const url = `${host}/api/v1/users/signin`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const json = await response.json();

      // If login successful, store token and user data
      if (json.token) {
        storeTokenInLS(json.token, json.user.role);
        setToken(json.token);
        setUser(json.user);
      }
      return json;
    } catch (error) {
      return { message: error.message };
    }
  };
  const getUser = async () => {
    try {
      // getuserdetails
      const url = `${host}/api/v1/users/getuserdetails`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Authorization': `${token || localStorage.getItem('authToken')}`
        },
      })
      const json = await response.json()
      setUser(json.data)
      return user;
    } catch (error) {
      return { message: error.message };
    }
  }
  const updateUser = async (formData) => {
    console.log(formData);
    try {
      const url = `${host}/api/v1/users/update`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Authorization': `${token || localStorage.getItem('authToken')}`
        },
        body: formData,
      })
      const json = await response.json()
      setUser(json.data)
      return json;
    } catch (error) {
      return { message: error.message };
    }
  }

  const changePassword = async (formData) => {
    try {
      const url = `${host}/api/v1/users/updatepassword`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Authorization': `${token || localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      const json = await response.json()
      setUser(json.data)
      return json;
    } catch (error) {
      return { message: error.message };
    }
  }
  return (
    <UserContext.Provider value={{ token, user, signUp, login, logOutUser, setUser, getUser, updateUser, changePassword }} >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
