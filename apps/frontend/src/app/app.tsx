// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import './app.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import { css } from '../../styled-system/css';
import { Text, Button } from '@packages/ui';
import { NkAArrowDown } from '@packages/icons';
import { InsightCard } from './components/insight-card';
import { Group } from '../../styled-system/jsx';
export function App() {
  return (
    <div>
      <Text variant="sectionTitle">I am Text</Text>
      <div className={css({ bg: 'secondary' })}>i am pandacssed</div>
      <Button iconLeft={NkAArrowDown}>button</Button>
      <Group>
        <InsightCard
          title={
            'Lorem ipsum dolor sit amet consectetur. At est id viverra morbi arcu commodo. Fermentum facilisi et integer nulla amet. '
          }
          content={
            'Lorem ipsum dolor sit amet consectetur. At est id viverra morbi arcu commodo. Fermentum facilisi et integer nulla amet. Phasellus dignissim imperdiet consequat egestas. Duis integer nibh nunc rhoncus porttitor elit ut viverra. Eget lorem ornare aliquet nibh mattis.'
          }
        />
        <InsightCard
          title={
            ' At est id viverra morbi arcu commodo. Fermentum facilisi et integer nulla amet. '
          }
          content={'Lorem ipsum dolor sit amet consectetur.'}
        />
      </Group>
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
