import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import AppHeader from '../components/AppHeader';
var Sound;
class SoundButton extends React.Component {
  
  playSound= async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://www.mboxdrive.com/Marshmello%20&%20Anne-Marie%20-%20FRIENDS%20OFFICIAL%20FRIENDZONE%20ANTHEM%20.mp3',
      },
      { shouldPlay: true }
    );
  };

  playSound2= async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://www.mboxdrive.com/Bahjat%20Hometown%20Smile%20Lyrics%20Original].mp3',
      },
      { shouldPlay: true }
    );
  };

  playSound3= async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://www.mboxdrive.com/One+Direction+Night+Changes+Lyrics.mp3',
      },
      { shouldPlay: true }
    );
  };

  playSound4= async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://www.mboxdrive.com/Katy+Perry+Harleys+In+Hawaii+Official.mp3',
      },
      { shouldPlay: true }
    );
  };

  playSound5= async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://www.mboxdrive.com/Selena+Gomez+Marshmello+Wolves.mp3',
      },
      { shouldPlay: true }
    );
  };
  

  render() {
    
    return (
      <view>
      
   

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => this.playSound() <alert("please wait a moment...")
        }>
        <Text style={styles.buttonText}>Friends Marshmello</Text>
      </TouchableOpacity>
      
      
     <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => this.playSound2() <alert("please wait a moment...")
        }>
           
          
          <Text style={styles.buttonText}>Homwtown smile </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'orange' }]}
          onPress={() => this.playSound3() <alert("please wait a moment...")
        }>
           
          
          <Text style={styles.buttonText}>Night Changes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'pink' }]}
          onPress={() => this.playSound4() <alert("please wait a moment...")
        }>
           
          
          <Text style={styles.buttonText}>Harleys in Hawaii</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => this.playSound5() <alert("please wait a moment...")
        }>
           
          
          <Text style={styles.buttonText}>Wolves Selena </Text>
        </TouchableOpacity>
     

     </view>

    
     
    );

  }

  
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: '',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default SoundButton;
