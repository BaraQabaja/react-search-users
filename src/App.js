import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
 
  return (
    <AuthWrapper>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </AuthWrapper>
  );
}

export default App;
