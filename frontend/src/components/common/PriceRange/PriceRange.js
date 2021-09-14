import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: 200,
    margin: 10,
  },
});

function valuetext(value) {
  return `${value}`;
}

const RangeSlider = ({ maxPrice, minPrice, setMax, setMin }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([300, 1400]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    setMax(newValue[1]);
    setMin(newValue[0]);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <Typography id="range-slider" gutterBottom>
            Search by price
          </Typography>
        </Grid>

        <Slider
          label="srech"
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          max={maxPrice + 500}
          min={0}
        />
      </Grid>
    </div>
  );
};

export default RangeSlider;
