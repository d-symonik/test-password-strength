import './App.css';

import React from 'react';
import Header from './components/Layout/Header/Header';
import Container from './components/Layout/Container/Container';
import PasswordStrength from './components/PasswordStrength/PasswordStrength';
import {PasswordProvider} from './store/PasswordContext/password-context';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <main>
          <PasswordProvider>
            <PasswordStrength />
          </PasswordProvider>
        </main>
      </Container>
    </div>
  );
}

export default App;
