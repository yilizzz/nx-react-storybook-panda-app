import { Route, Routes, Link } from 'react-router-dom';
import { Text, CardFlip, Icon, Image, Button, CardDeco } from '@packages/ui';
import { Card } from '@packages/ui';
import { NkAArrowDown } from '@packages/icons';
import {
  Center,
  Grid,
  GridItem,
  Stack,
  Container,
  Group,
  Box,
} from '@packages/ui/styled-system/jsx';
import p1 from '@packages/ui/src/assets/p.png';
import p2 from '@packages/ui/src/assets/p-inverse.png';
import { InsightCardContent } from '@apps/frontend/app/components/insight-card-content';
import { css, cva } from '@styled-system/frontend/css';
import { useState } from 'react';

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
  const [color, setColor] = useState('secondary');

  return (
    <Stack>
      <Button
        onClick={() => setColor(color === 'primary' ? 'secondary' : 'primary')}
      >
        color now : {color}
      </Button>

      <Button variant={color} shape={color === 'primary' ? 'circle' : 'normal'}>
        Click me
      </Button>
      <CardDeco deco={color === 'primary' ? p1 : p2}>CardDeco</CardDeco>

      <Box color={color}>Runtime conditions</Box>

      <Box color={color}>
        <Icon as={NkAArrowDown} size={color === 'primary' ? 120 : 24}></Icon>
      </Box>

      <Card
        variant={color === 'primary' ? 'primary' : 'background'}
        backgroundImage={color === 'primary' ? undefined : p1}
      >
        <Text color="white">card</Text>
      </Card>
      <Text variant={color === 'primary' ? 'sectionTitle' : 'headLine'}>
        I am Text
      </Text>
      <Image
        src={p1}
        variant={color === 'primary' ? 'default' : 'pointed'}
      ></Image>
      {/*  <Grid columns={6} w="full" h="full">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <GridItem w="full" h="full">
              <CardFlip
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
              />
            </GridItem>
          );
        })}
        <GridItem w="full" h="full">
          <CardFlip
            face={
              <Card variant="background" backgroundImage={p1}>
                front sectionTitle
              </Card>
            }
            back={
              <Card variant="background" backgroundImage={p2}>
                <Box w="full" h="full">
                  back
                </Box>
              </Card>
            }
          />
        </GridItem>
      </Grid> */}
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
  );
}

export default App;
