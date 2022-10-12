import {
  Box,
} from '@mui/material';
import {
  Sort,
  Filter,
} from '@mui/icons-material';

const ViewMode = () => {
  return (
    <Box style={{"display":"flex"}}>
      <Box style={{"width":"60px"}}>Filter</Box>
      <Box style={{"width":"60px"}}>Sort</Box>
    </Box>
  )
};

export default ViewMode;