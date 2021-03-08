import {
  Box,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React from "react";
import useMobile from "../hooks/responsive";
import Autocomplete from '@material-ui/lab/Autocomplete';

interface Props {
  initialData: { title: string , year: number}[]
  label : string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBox: {
      paddingLeft:'10px',
      paddingRight: '15px'
    },
  })
);

export const Search:  React.FC<Props> = ({ initialData,label }) => {
  const mobile = useMobile();
  const classes = useStyles();

  return (
    <Box className={classes.searchBox}>
      <Autocomplete
      id={label}
      options={initialData}
      getOptionLabel={(option) => option.title}
      style={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
    />
    </Box>
  );
}
