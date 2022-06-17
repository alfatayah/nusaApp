import React, { Component } from 'react'
// import { connect } from 'react-redux'
import {
    Text,
    View,
  } from 'react-native';
import { buttonComponent } from '../../components/button'; 
export class Home extends Component {
  render() {
    return (
        <View>
            <Text>Home</Text>
            {buttonComponent(
                false,
                "Home",
                () => { console.log("Home")}
            )}
        </View>
    )
  }
}

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(index)

export default Home;