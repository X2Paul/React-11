import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="end"
            color="info"
            aria-label="menu"
            sx={{ mr: 2 }}>

          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Main Page
          </Typography>
          <Box sx={{ mx: 5, display: { xs: 'none', md: 'flex', gap: 20} }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Pages</Button>
            <Button color="inherit">Blog</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}