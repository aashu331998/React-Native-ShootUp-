// made by :Ashutosh Bansal
// email: aashutoshbansal03@gmail.com
// linkedin : https://www.linkedin.com/in/aashutosh-bansal-57a968175/


import React,{useState,useEffect} from 'react';
import{View, Text,TouchableOpacity,StyleSheet,Image,ImageBackground,Dimensions} from "react-native";
import SoundPlayer from 'react-native-sound-player'
import { setInterval } from 'core-js';

const MainScreen =({navigation}) => {
    const [teamRed,setTeamRed]= useState(0);
    const [teamBlue,setTeamBlue]= useState(0);
    const [w,getW1]= useState(Dimensions.get("screen").width);
    const [h,getH1]= useState(Dimensions.get("screen").height);

    const audio=()=>{
    try {
      SoundPlayer.stop();
       SoundPlayer.playSoundFile('gun1', 'mp3');
      } catch (e) {
      console.log(`cannot play the sound file`, e)
    };}

    const audioStop=()=>{
      try {
        SoundPlayer.pause();
        } catch (e) {
        console.log(`cannot play the sound file`, e)
      };}

    useEffect(()=>{
      const listener=  navigation.addListener("didFocus",()=>{
        setTeamBlue(0),setTeamRed(0);setSeconds_Counter(0) });
        return()=>{
            listener.remove();
        };
    },[])


    const [seconds_Counter,setSeconds_Counter]= useState(0);
    const [ti,ti1]= useState(null);
    
    const onButtonStart = () => {
      if(seconds_Counter==0){
        setSeconds_Counter(1)
      setInterval(() => {
        setSeconds_Counter(seconds_Counter => seconds_Counter + 1);
      }, 1000);
    }
          }
    
   return (<View style={{flex:1}}>
     {/* {console.log(seconds_Counter)} */}
        <Image
        source={require('../image/full_bg.png')}
        style={{position:"absolute",width:100+"%",height:100+"%",resizeMode:"cover"}}/>             
      
      <View style={styles.mainView}>
        <TouchableOpacity onPress={()=>{teamBlue>=99?navigation.navigate("TeamBlue",{red:teamRed,blue:teamBlue,sec:seconds_Counter}) :setTeamBlue(teamBlue+1);audio();onButtonStart()}}>
          <Image
            source={require('../image/Fire_icon.png')}
            style={{width:w*0.3,height:w*0.3,resizeMode:"contain"}}/>             
        </TouchableOpacity>

          <View style={{width:w*0.8,height:80,borderWidth:2,borderColor:"#FFFFFF",borderRadius:50,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:40,fontWeight:"bold",color:"#FFFFFF"}}>{teamBlue}</Text>
          </View>

         <TouchableOpacity onPress={()=>{{setTeamBlue(0),setTeamRed(0),setSeconds_Counter(0)}}}>
          <Image
            source={require('../image/war_logo.png')}
            style={{width:w*0.8,height:w*0.3, resizeMode:"contain"}}/>             
         </TouchableOpacity>
          
          <View style={{width:w*0.8,height:80,borderWidth:2,borderColor:"#FFFFFF",borderRadius:50,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:40,fontWeight:"bold",color:"#FFFFFF"}}>{teamRed}</Text>
          </View>

         <TouchableOpacity onPress={()=>{teamRed>=99?navigation.navigate("TeamRed",{red:teamRed,blue:teamBlue,sec:seconds_Counter}):setTeamRed(teamRed+1);audio();onButtonStart()}}>   
          <Image
            source={require('../image/Fire_icon.png')}
            style={{width:w*0.3,height:w*0.3,resizeMode:"contain"}}/>             
        </TouchableOpacity>
          </View>
          
        </View>
    );
  };

  MainScreen.navigationOptions =({navigation})=>{
    return{
    title:null,
    headerShown:false  
    };
};

const styles = StyleSheet.create({
    mainView:{
   flex:1,
   alignItems:"center",
   justifyContent:"space-evenly"
   },
});
export default MainScreen;
  