import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('teste');
    async function loadUser() {
      const token = localStorage.getItem('@context-demo:token');

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get('/profile');

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  async function registerUser(data) {
    try {
      const response = await api.post('/sessions', data);
      console.log(response);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);

      localStorage.setItem('@context-demo:token', token);

      navigate('/dashboard', { replace: true });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ registerUser, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
