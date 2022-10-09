import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign,Entypo, FontAwesome,SimpleLineIcons, Ionicons, MaterialIcons } 
from '@expo/vector-icons';
export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
          style={styles.imagenProfile}
          source={require("./img/2.jpg")}/>
        
        <View style={styles.container_middle}>
        <Entypo style={styles.paddi} name="switch" size={25} height={30} color="green"/>
        <Text style={{paddingLeft: 20}}>Seller mode</Text>
        </View>

        <View/>
      <Text style={{paddingLeft: 20}}></Text>
        <View style={styles.textPrincipal}>

          <Text style={styles.texto}>My Fiverr</Text> 
          <Text ><FontAwesome name="diamond" size={17} color="black" /> Get Inspired                                           <AntDesign name="right" size={24} color="black" /></Text>
          <Text ><AntDesign name="heart" size={18} color="black" /> Saved Gigs                                             <AntDesign name="right" size={24} color="black" /></Text>
          <Text ><Ionicons name="ios-mail-open" size={20} color="black" /> My Interests                                          <AntDesign name="right" size={24} color="black" /></Text>
        </View>
        
        <View style={styles.textPrincipal}>
          <Text style={styles.texto}>Buying</Text>
          <Text><SimpleLineIcons name="bag" size={18} color="black" /> Post a Request                                     <AntDesign name="right" size={24} color="black" /></Text>
          <Text><Entypo name="brush" size={16} color="black" />  Manage request                                  <AntDesign name="right" size={24} color="black" /></Text>
          </View>
      
        <View style={styles.textPrincipal} >
          <Text style={styles.texto}>General</Text>
          <Text><Entypo name="cog" size={20} color="black" /> Setting </Text>
          <Text><FontAwesome name="dot-circle-o" size={20} color="black" /> Show online status                             <Entypo style={styles.paddi} name="switch" size={25}  color="green"/></Text>
          <Text><MaterialIcons name="payments" size={20} color="black" /> Payments                                            <AntDesign name="right" size={24} color="black" /></Text>
          <Text><Entypo name="paper-plane" size={20} color="black" /> Invite Friends                                      <AntDesign name="right" size={24} color="black" /></Text>
          <Text>  Become a seller                                      <AntDesign name="right" size={24} color="black" /></Text>
          <Text><FontAwesome name="support" size={18} color="black" />  Support                                               <AntDesign name="right" size={24} color="black" /></Text>
          
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "90%"
    
    
  },
  header: {
    height: "35%",
    backgroundColor: "green",
  },

  imagenProfile:{
    height: "20%",
    width: "25%",
    top: 50,
    marginLeft: "32%",
    borderRadius: 50,
    position: 'absolute',
},
  container_middle: {
    width: "90%",
    absolute: 5,
    alignSelf: "center",
    height: 55,
    top: "32%",
    elevation: 90,
    borderRadius: 15,
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "white",
  },
  paddi:{
    paddingLeft: "90%",
    position: 'absolute',
    color:"green",
  },
  
  textPrincipal: {
    padding: 15,
    margin: 0,
    
  },
  texto: {
   
    padding: 0,
    margin: 0,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  
});
