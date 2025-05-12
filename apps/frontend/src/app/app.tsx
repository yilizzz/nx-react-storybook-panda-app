// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import './app.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import { css } from '../../styled-system/css';
import { Text, Button, CardFlip } from '@packages/ui';
import { NkAArrowDown } from '@packages/icons';
import { Center, Grid, GridItem } from '@packages/ui/styled-system/jsx';
import p1 from '@packages/ui/src/assets/p.png';
import p2 from '@packages/ui/src/assets/p-inverse.png';
import { InsightCardContent } from '@apps/frontend/app/components/insight-card-content';
export function App() {
  const content = {
    title: 'Energy Transition Project and technology evolution',
    content: 'Energy Transition Project and technology evolution',
    date: '24/04',
    type: 'webinar',
    author: 'Jean-Charles ',
    position: 'Chairman of the Boat',
    duration: '10',
  };
  return (
    <div>
      <Text variant="sectionTitle">I am Text</Text>
      <div className={css({ bg: 'secondary' })}>i am pandacssed</div>
      <Button iconLeft={NkAArrowDown}>button</Button>
      <Grid w="full" columns={2}>
        <GridItem h="full">
          <CardFlip
            frontContent={
              <Center>
                <InsightCardContent
                  title={content.title}
                  content={content.content}
                  date={content.date}
                  type={content.type}
                  author={content.author}
                  position={content.position}
                  duration={content.duration}
                />
              </Center>
            }
            backContent={
              <Center>
                {' '}
                <InsightCardContent
                  title={content.title}
                  content={content.content}
                  date={content.date}
                  type={content.type}
                  author={content.author}
                  position={content.position}
                  duration={content.duration}
                  face="back"
                />
              </Center>
            }
            frontBgImage={p1}
            backBgImage={p2}
          />
        </GridItem>{' '}
        <GridItem h="full">
          <CardFlip
            frontContent={<Center>front</Center>}
            backContent={<Center>back</Center>}
            frontBgImage={p1}
            backBgImage={p2}
          />
        </GridItem>
      </Grid>

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
