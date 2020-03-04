import React, { useState, createRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  Button,
} from '@material-ui/core';
import LanguageForm  from './LanguageForm';
// import { AuthContext } from "../../../../App";

// const useStyles = makeStyles(() => ({
//   root: {}
// }));

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
    // minWidth: 180,
    // width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Language = props => {
  // const { state: authState, dispatch } = useContext(AuthContext);
  const { className, ...rest } = props;

  // const { user } = authState;
  // console.log("user ******", authState)
  const classes = useStyles();

  const [languageFormsRef, setLanguageFormsRef] = useState([])
  const [languageFormCount, setLanguageFormCount] = useState([
    <LanguageForm 
      ref={(lf) => { languageFormsRef[0] =  lf}}
      id={`LanguageForm0`}
    />
  ]);

  React.useEffect(() => {
    //add or remove refs
    setLanguageFormsRef(languageFormsRef => (
      Array(languageFormCount.length).fill().map((_, i) => languageFormsRef[i] || createRef())
    ))
  }, [languageFormCount])


  const handleUpdate = event => {
    event.preventDefault();
    languageFormCount.map((value, idx) => {
      // console.log("value hereeeee", value)
      // console.log("idx", idx, languageFormsRef[idx])
    })
  }

  const handleAddLanguageForm = event => {
    event.preventDefault();
    const insertedIdx = languageFormCount.length
    setLanguageFormCount([
      ...languageFormCount, 
      <LanguageForm 
        ref={(lf) => { languageFormsRef[insertedIdx] =  lf}}
        id={`LanguageForm${insertedIdx}`}
      />
    ]);
  }

  const handleRemoveLanguageForm = (event) => {
    event.preventDefault();
    const removeIdx = languageFormCount.length - 1;
    setLanguageFormCount(languageFormCount.filter(item => 
      item.props.id !== `LanguageForm${removeIdx}`
    ))
  }

  const renderLanguageForm = () => {
    return (languageFormCount.map((value , idx) => {
      return (
        <div style={{marginBottom: "25px"}}key={idx}> {value} </div>
      )
    }));
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Language"
        // subheader="The information can be edited"
      />
      <form
        // autoComplete="off"
        // noValidate
        className={classes.formControl}
      >
          {renderLanguageForm()}
          {/* <br /> */}
          <Button
            color="primary"
            variant="contained"
            onClick={handleUpdate}
          >
            Save details
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={handleAddLanguageForm}
          >
            Add Language
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={handleRemoveLanguageForm}
          >
            RemoveLanguage
          </Button>
      </form>
    </Card>
  );
};

Language.propTypes = {
  className: PropTypes.string
};

export default Language;
