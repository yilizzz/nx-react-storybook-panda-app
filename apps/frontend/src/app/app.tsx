// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import './app.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Text, Button, CardFlip, Card } from '@packages/ui';
import { NkAArrowDown } from '@packages/icons';
import {
  Center,
  Grid,
  GridItem,
  Stack,
  Container,
} from '@packages/ui/styled-system/jsx';
import p1 from '@packages/ui/src/assets/p.png';
import p2 from '@packages/ui/src/assets/p-inverse.png';
import { InsightCardContent } from '@apps/frontend/app/components/insight-card-content';
import { CardFlipMotion } from '@apps/frontend/app/components/card-flip-motion';
import { css } from '../../styled-system/css';
export function App() {
  const content = {
    title: 'Energy Transition Project and technology evolution',
    content: 'Energy Transition Project and technology evolution',
    date: '24/05',
    type: 'webinar',
    author: 'Jean-Charles ',
    position: 'Chairman of the Boat',
    duration: '10',
  };
  return (
    <Container>
      <Stack>
        <Text variant="sectionTitle">sectionTitle</Text>
        <Button iconLeft={NkAArrowDown}>button</Button>
        {/*  CardFlip
        <Grid w="full" h="full" columns={6}>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <GridItem w="full" h="full">
                <CardFlip
                  frontContent={
                    <Center>
                      <InsightCardContent content={content} />
                    </Center>
                  }
                  backContent={
                    <Center>
                      {' '}
                      <InsightCardContent content={content} face="back" />
                    </Center>
                  }
                  frontBgImage={p1}
                  backBgImage={p2}
                />
              </GridItem>
            );
          })}
          <GridItem w="full" h="full">
            <CardFlip
              frontContent={<Center>front</Center>}
              backContent={<Center>back</Center>}
              frontBgImage={p1}
              backBgImage={p2}
            />
          </GridItem>
        </Grid> */}
        CardFlipMotion
        <Grid w="full" h="full" columns={6}>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <GridItem h="full">
                <CardFlipMotion
                  face={
                    <Card variant="background" backgroundImage={p1}>
                      <InsightCardContent content={content} />
                    </Card>
                  }
                  back={
                    <Card variant="background" backgroundImage={p2}>
                      <InsightCardContent content={content} face="back" />
                    </Card>
                  }
                ></CardFlipMotion>
              </GridItem>
            );
          })}
          <GridItem h="full" w="full">
            <CardFlipMotion
              face={
                <Card variant="background" backgroundImage={p1}>
                  front
                </Card>
              }
              back={
                <Card variant="background" backgroundImage={p2}>
                  back
                </Card>
              }
            ></CardFlipMotion>
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
      </Stack>
    </Container>
  );
}

export default App;
