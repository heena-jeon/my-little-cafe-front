import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import { useEffect, useState } from 'react';

const CoffeeCard = (props) => {
  const {
    name,
    url,
    description,
    onClick
  } = props;

  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require(`../../${url}`)}
          alt="haha"
        />
        <CardContent>
          <Typography>
            {name}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CoffeeCard;