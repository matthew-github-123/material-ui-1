import './App.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar';
import TemporaryDrawer from './components/TemporaryDrawer/TemporaryDrawer';
import BasicAlerts from './components/BasicAlerts/BasicAlerts';
import BasicCard from './components/BasicCard/BasicCard';
import Typography from '@mui/material/Typography';
import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation';

function App() {
  return (   
    <>
    {/* Row 1 */}

    <Box sx={{ display: 'flex' }}>
          <ButtonAppBar />
    </Box>

     {/* Row 2 */}
     <Box sx={{ display: 'flex', margin: '20px 0px 20px 0px' }}>
        <Container sx={{ 
          display: 'flex' }}>
          <TemporaryDrawer />
        </Container>
    </Box>

    {/* Row 3 */}
    <Box sx={{ margin: '20px 0px 20px 0px' }} >
        <Container sx={{ 
          display: 'flex' }}>
          <Typography variant="h2" component="div" gutterBottom>
            Welcome
          </Typography>
        </Container>
    </Box>

      {/* Row 4 */}
     <Box sx={{ display: 'flex', margin: '20px 0px 20px 0px' }}>
        <Container sx={{ 
            display: 'flex' }}>
            <BasicAlerts />
        </Container>
    </Box>

           {/* Row 5 */}
    <Box sx={{ display: 'flex', margin: '20px 0px 20px 0px' }}>
        <Container sx={{ 
          display: 'flex' }}>
          <Typography variant="body1" component="div" gutterBottom>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.
          </Typography>
        </Container>
    </Box>

           {/* Row 6 */}
    <Box sx={{ display: 'flex', margin: '10px 0px 10px 0px' }}>
        <Container sx={{ 
          display: 'flex', justifyContent: 'space-between' }}>
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
        </Container>
    </Box>

            {/* Row 7 */}
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0px 20px 0px' }}>
          <SimpleBottomNavigation />
    </Box>


    </>
  );
}

export default App
