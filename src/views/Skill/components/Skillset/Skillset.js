import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  Select,
} from '@material-ui/core';
import { AuthContext } from "../../../../App";

const useStyles = makeStyles(() => ({
  root: {}
}));

const skills = [
  {
    value: 'software',
    label: 'Software Engineering'
  },
  {
    value: 'data',
    label: 'Data'
  },
  {
    value: 'product',
    label: 'Product'
  },
  {
    value: 'sales',
    label: 'Sales'
  },
  {
    value: 'marketing',
    label: 'Marketing'
  }, 
  {
    value: 'finance',
    label: 'Accounting && Finance',
  },
  {
    value: 'humanResources',
    label: 'HR'
  }
];

const Skillset = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [state, setState] = React.useState({
    role: '',
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  }

  const handleUpdate = e => {

  }

  const renderOptions = (opts) => {
    return (
      opts.map(function (opt, i) {
        return <option key={i} value={opt.value}>{opt.label}</option>
      })
    );
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          title="Skillset"
          // subheader=""
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={3}
              xs={12}
            >
              <CardHeader
                // subheader="Language"
                title="What role interest you?"
              />
            </Grid>
            <Grid
              item
              md={9}
              xs={12}
            >
               <Select
                native
                value={state.role}
                onChange={handleChange('role')}
                style={{width: "80%", marginTop: "15px"}}

              >
                {renderOptions(skills)}
              </Select>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={handleUpdate}
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Skillset.propTypes = {
  className: PropTypes.string
};

export default Skillset;
