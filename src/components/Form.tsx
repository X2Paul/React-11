import { Box, Button, Container, Grid, TextField } from '@mui/material'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const Form = () => {
  return (
    <Container maxWidth="sm">
  <form>
    <Box sx={{ my: 4 }}>
      <TextField id="login" type="text" label="Login" fullWidth variant="outlined" required />
    </Box>
    <Box sx={{ my: 4 }}>
      <TextField id="email" type="email" label="Email" fullWidth variant="outlined" required />
    </Box>
    <Box sx={{ my: 4 }}>
      <TextField id="password" type="password" label="Password" fullWidth variant="outlined" required />
    </Box>
    <Box sx={{ my: 4 }}>
      <Grid container justifyContent="space-between">
      <Button type="submit" variant="outlined" color="info" endIcon={<DoneAllIcon />}>Submit</Button>
      <Button type="reset" variant="outlined" color="error" endIcon={<BackspaceOutlinedIcon />}>Reset </Button>
      </Grid>
    </Box>
  </form>
    </Container>
  )
}

export default Form