import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Button, Paper, CircularProgress,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Persons from '../components/Persons/Persons'

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { createStructuredSelector } from 'reselect';
// import { selectLoggedIn, selectShowLoader } from '../store/selector';
// import { setLoggedIn, login, setShowToast } from '../store/actions';
import CoverImage from '../assets/login_cover.png';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    //localStorage.removeItem('token');
  //  localStorage.removeItem('ename');
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
 
  onSubmit = () => {
    if (this.state.username.length === 0) {
      this.props.setShowToast(true, 'Kullanıcı Adı Giriniz', 'warning');
    } else {
      //<Persons/>  
      //this.props.login(this.state.username, this.state.password);
    }
   

  };

  render() {
    return (
      <Grid container style={{ height: '100%', overflow: 'hidden' }}>
        <Hidden smDown>
          <Grid item xs={6}>
            <img src={CoverImage} height="100%" width="100%" alt="Sütaş" />
            {/* Image yüksekliği küçültülecek */}
          </Grid>
        </Hidden>
        <Grid container justify="center" direction="column" xs={12} md={6}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              style={{ color: 'gray' }}
            >
              Performans Yönetim Sistemi
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              style={{ color: 'gray' }}
            >
              Lütfen kimliğinizi doğrulayın
            </Typography>
          </Grid>
          <Paper
            align="center"
            style={{
              width: '70%',
              height: '300px',
              marginBottom: '30%',
              marginTop: 70,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <form
              noValidate
              autoComplete="off"
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
              }}
            >
              <TextField
                required
                id="outlined-required"
                label="Kullanıcı Adı"
                margin="normal"
                name="username"
                onChange={this.handleChange('username')}
                variant="outlined"
                style={{ width: '60%', marginTop: 50 }}
              />

              <TextField
                // required
                id="outlined-requwired"
                label="Şifre"
                name="password"
                margin="normal"
                onChange={this.handleChange('password')}
                variant="outlined"
                type="password"
                style={{ width: '60%' }}
              />

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {

                  this.props.showLoader ? (<CircularProgress color="secondary" />) : (
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      style={{ marginTop: 15, backgroundColor: 'green' }}
                     // onClick={this.onSubmit}
                      >
                    
                      GİRİŞ YAP
                    </Button>
                  )
                }
            
              </div>
             
            
            
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  setShowToast: PropTypes.func.isRequired,
  showLoader: PropTypes.bool.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   loggedIn: selectLoggedIn(),
//   showLoader: selectShowLoader(),
// });


// const mapDispatchToProps = (dispatch) => ((
//   bindActionCreators({
//     setLoggedIn,
//     login,
//     setShowToast,
//   }, dispatch)
// ));


//export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginPage;