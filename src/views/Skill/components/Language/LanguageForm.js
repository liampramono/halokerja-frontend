import React from 'react';
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Select,
  FormControl,
} from '@material-ui/core';

const levels = [
  {
    value: 'beginner',
    label: 'Beginner'
  },
  {
    value: 'intermediate',
    label: 'Intermediate'
  },
  {
    value: 'expert',
    label: 'Expert'
  }
];

const languages = [
  {
    value: 'chinese',
    label: 'Chinese'
  },
  {
    value: 'english',
    label: 'English'
  },
  {
    value: 'indonesia',
    label: 'Indonesia'
  }
];

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(3),
//     // minWidth: 180,
//     // width: 200,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

class LanguageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '', 
      proficiency: '',
    }
  }

  renderOptions = (opts) => {
    return (
      opts.map(function (opt, i) {
        return <option key={i} value={opt.value}>{opt.label}</option>
      })
    );
  }

  handleChange = (name, e) => {
    this.setState({
      [name]: e.target.value,
    })
  }


  render() {
    return (
      <Card
        // {...rest}
        // className={clsx(classes.root, className)}
        // style={{marginBottom: "40px"}}
      >
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
                title="Choose your language"
              />
            </Grid>
            <Grid 
              item
              md={9}
              xs={12}
            >
              <FormControl
                style={{width: "80%", marginTop: "15px"}}
              >
              <Select
                native
                value={this.state.language}
                // value={languageState.language}
                onChange={ e => this.handleChange('language', e)}
                inputProps={{
                  // name: 'age',
                  // id: 'age-native-simple',
                }}
              >
                {this.renderOptions(languages)}
              </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <CardHeader
                // subheader="Proficiency"
                title="Choose your Proficiency"
              />
            </Grid>
            <Grid 
              item 
              md={9}
              xs={12}
            >
              <FormControl
                style={{width: "80%", marginTop: "15px"}}
              >
              {/* <InputLabel htmlFor="proficiency-simple">Proficiency</InputLabel> */}
              <Select
                native
                value={this.state.proficiency}
                onChange={ e => this.handleChange('proficiency', e)}
                inputProps={{
                  name: 'proficiency',
                  // id: 'proficiency-simple',
                }} 
              >
                {this.renderOptions(levels)}
              </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    );
  }
};

export default LanguageForm;
