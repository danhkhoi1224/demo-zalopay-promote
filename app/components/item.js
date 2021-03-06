import React,  {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import RemainTime from './remainTime';


export default class Item extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		const {text, img, time} = this.props.data;
		return(
        <View style = {styles.container}>
            <Text style = {styles.title}>{text}</Text>
            <View style = {styles.imagebox}>
                <Image source={{uri: img}}
                    style={styles.image} >
                </Image>
            </View>
            <View style = {styles.lastRow}>
              <Image style = {styles.timeIcon} source={require('../resource/time_icon.png')} style={{width: 40, height: 40}}></Image>
              <RemainTime style = {styles.rowText} time={time}></RemainTime>
            </View>
        </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: '#ffffff',
		margin: 10
	},
	title:{
		fontSize:20,
		marginBottom: 10
	},
	imagebox:{
		flex:1,
	},
	image:{
      
		height:100,
		width: 500,
		flex: 1,
		resizeMode: 'cover'
	},
	lastRow:{
		flex:1,
		flexDirection:'row',
		padding:5,
	},
	rowText:{
		flex:1,
		fontSize:15
	},
	timeIcon: {
		flex:1,
		height:20,
		width:20,
	}
});