import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FormProvider from './hooks/useFormValidation';
import './index.css';

ReactDOM.render(
  <FormProvider>
  <App />
  </FormProvider>,
  document.getElementById('root')
);
