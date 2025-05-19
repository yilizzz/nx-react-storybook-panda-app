// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import './app.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import { css } from '@styled-system/frontend/css';
import { Text, Icon } from '@packages/ui';
import { NkAArrowDown } from '@packages/icons';
export function App() {
  return (
    <div>
      <Text variant="sectionTitle">I am Text</Text>
      <div className={css({ bg: 'secondary' })}>i am pandacssed</div>
      <Icon
        as={NkAArrowDown}
        size={120}
        color="secondary"
        opacity={0.5}
        borderColor={'primary'}
        borderStyle={'solid'}
        borderWidth={1}
        borderRadius={'full'}
        boxShadow={'12px 12px 2px 1px rgba(0, 0, 255, 0.2)'}
      />

      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
