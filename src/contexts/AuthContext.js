// "use client"

// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const isAuthenticated = !!user; 

//   const login = (userData) => {
//     setUser(userData); 
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // export const useAuth = () => useContext(AuthContext);
