import React, { useReducer } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

export const AuthContext = React.createContext();

let initialState = {}
if (localStorage.token) {
  initialState = {
    isAuthenticated: true, 
    user: JSON.parse(localStorage.user), 
    token: JSON.parse(localStorage.token),
  }
} else {
  initialState = {
    isAuthenticated: false, 
    user: null, 
    token: null,
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      console.log("token", action.payload)
      return {
        ...state,
        isAuthenticated: true, 
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false, 
        user: null,
        token: null,
      };
    case "UPDATE_USER":
      console.log("action payload", action.payload)
      console.log("action payload user", action.payload.user);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        user: action.payload.user,
      }
    default:
      return state;
  }
};

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;