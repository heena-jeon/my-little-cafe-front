import {
  Box, Toolbar, AppBar, Typography, IconButton,
} from '@mui/material';
import {
  ArrowBackIosNew,
  Menu,
} from '@mui/icons-material';

const Header = ({ title, onClickBack }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <ArrowBackIosNew />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
            align="center"
          >
            {title}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
};

export default Header;