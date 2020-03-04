import React, {Component} from 'react';
import {StyleSheet,Text,Button, View,TouchableOpacity,FlatList,ScrollView
} from 'react-native';

class TapMaster extends Component {

    state = {
        timer: null,
        counter: '00',
        miliseconds: '00',
        startDisabled: true,
        stopDisabled: false,
        result:[],
        result2:[],
        
    }
    constructor( props ) {
        super( props );

        this.start = this.start.bind(this);
    }

    componentDidMount() {
        this.start();
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.miliseconds) + 1).toString(),
                count = this.state.counter;

            if( Number(this.state.miliseconds) == 99 ) {
                count = (Number(this.state.counter) + 1).toString();
                num = '00';
            }

            self.setState({
                counter: count.length == 1 ? '0'+count : count,
                miliseconds: num.length == 1 ? '0'+num : num
            });
        }, 0);
        this.setState({timer});
    }
    render() {
        return(
        <View style={{flex:1, backgroundColor:"grey",alignItems:"center", paddingTop:30}}>

  <Text style={{fontSize:30}}>00:{this.state.counter}:{this.state.miliseconds}</Text>
              
          <View style={{
          flexDirection:"row", justifyContent:"space-evenly"
          ,paddingTop:30,flex:1,}}>
          <View style={{flex:1, alignItems:"center", justifyContent:"flex-end",paddingBottom:60}}>
              {/* <Text style={{fontSize:30}}>00:{this.state.counter}:{this.state.miliseconds}</Text> */}
                  <FlatList 
              data={this.state.result}
              keyExtractor={(result)=>result}
              renderItem={({item})=>{
                  return(
                     <Text style={{fontSize:20, paddingBottom:5}}>{item}</Text>
          
                  ); }}
              />
              <View style={{justifyContent:"flex-end"}}>
              <TouchableOpacity onPress={()=>{ 
                
                this.setState({result: [ ...this.state.result, `${this.state.counter}:${this.state.miliseconds}`]})}}>
             
                <View style={{backgroundColor:"white", width:100,height:60,alignItems:"center",justifyContent:"center"}}>
                  <Text style={{fontSize:25}}>Tap</Text>
                </View>
              </TouchableOpacity>
              </View>

            </View>
            <View style={{ flex:1,alignItems:"center", justifyContent:"space-between",paddingBottom:60}}>
              {/* <Text style={{fontSize:30}}>00:{this.state.counter}:{this.state.miliseconds}</Text> */}
                  <FlatList 
              data={this.state.result2}
              keyExtractor={(result2)=>result2}
              renderItem={({item})=>{
                  return(
                    <Text style={{fontSize:20, paddingBottom:5}}>{item}</Text>
                    ); }}
              />
              <TouchableOpacity onPress={()=>{ 
                
                this.setState({result2: [ ...this.state.result2, `${this.state.counter}:${this.state.miliseconds}`]})}}>
             
                <View style={{backgroundColor:"white", width:100,height:60,alignItems:"center",justifyContent:"center"}}>
                  <Text style={{fontSize:25}}>Tap</Text>
                </View>
              </TouchableOpacity>
              

            </View> 
                    </View>
                    </View>
            
        );
    }
}

module.exports = TapMaster;