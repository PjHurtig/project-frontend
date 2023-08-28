import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import './api/axiosDefaults'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
            <Route exact path="/" render={() => <h1>home page</h1>} />
            <Route exact path="/signin" render={() => <h1>signin</h1>} />
            <Route exact path="/signup" render={() => <h1>singup</h1>} />
            <Route render={() => <h1>Page not found!</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;