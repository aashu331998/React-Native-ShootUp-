// made by :Ashutosh Bansal
// email: aashutoshbansal03@gmail.com
// linkedin : https://www.linkedin.com/in/aashutosh-bansal-57a968175/


import React,{useState} from 'react';
import{View, Text, Image,Dimensions} from "react-native";

const TeamRed =({navigation}) => {
    const [w,getW1]= useState(Dimensions.get("screen").width);
    const [h,getH1]= useState(Dimensions.get("screen").height);
   
    return (<View style={{flex:1}}>
        <Image
            source={require('../image/redteam.png')}
            style={{position:"absolute",width:w,height:h,resizeMode:"cover"}}/>             
    
      <View style={{flex:1,flexDirection:"row"}}>
        <View style={{width:100+"%",height:h*0.3,alignSelf:"flex-end",flex:1,alignItems:"center"}}>
        <View style={{flexDirection:"row",height:50+"%",width:100+"%"
        ,justifyContent:"space-evenly",alignItems:"center",paddingHorizontal:20}}>
        <View style={{height:100+"%",width:40+"%",alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"#4A90E2",fontWeight:"bold",fontSize:50}}>{navigation.getParam('blue')+1}</Text>
            <Text style={{fontWeight:"bold"}}>Rounds</Text>
        </View>
       <Text style={{fontWeight:"bold",fontSize:20}}>v/s</Text>
       <View style={{height:100+"%",width:40+"%",alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"#D0021B",fontWeight:"bold",fontSize:50}}>{navigation.getParam('red')+1}</Text>
            <Text style={{fontWeight:"bold"}}>Rounds</Text>
        </View>
        </View>
        <Text style={{fontSize:20,fontWeight:"bold"}}>in</Text>
        <View style={{height:50+"%",width:100+"%"
        ,alignItems:"center",paddingHorizontal:20,marginTop:10}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:40}}>{navigation.getParam('sec')}</Text>
            <Text style={{fontWeight:"bold"}}>Seconds</Text>
        </View>
    </View>
    </View>
    </View>);
}

TeamRed.navigationOptions =({navigation})=>{
    return{
    title:null,
    headerShown:false  
    };
};
export default TeamRed;
 