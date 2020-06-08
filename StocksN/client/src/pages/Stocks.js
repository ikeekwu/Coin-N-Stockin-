import React, { Component } from "react";
import API from "../utils/API";

import Charts from "../pages/Charts";

import Button from '@material-ui/core/Button';
import theme from "../utils/themes/theme"
import { withTheme } from "@material-ui/core/styles";
// const theme = useTheme();


import { Box, Container, Grid, Paper } from "@material-ui/core";

import SideBar from "../components/SideBar";

export default class Stocks extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search: "",
      stocks: [],
      results: [],
      error: ""
    };
  } 
  

  componentDidMount() {
    API.getAllStocks()
      .then(res => 
        // this.setState({ results: res.data.companies } )
        console.log(res.data)
        // this.setState
            )
      .catch(err => console.log(err));
  };

  
  render(){
    // console.log(this.state.results)
    return (
        <>
        <Box>
        <SideBar />
          <Box>
            <Charts />
          </Box>
        </Box>    
        </>
        )
    }
}

