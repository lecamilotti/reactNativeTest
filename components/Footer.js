import { StyleSheet, View } from 'react-native';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import Settings from 'react-native-vector-icons/Feather';
import Payment from 'react-native-vector-icons/MaterialIcons';

export default function Footer() {
  return (
    <View style={styles.container}>
    
      <HomeIcon name='home' style={styles.iconHome} />

      <Payment name='payment' style={styles.iconHome} />
      <Settings name='settings' style={styles.iconHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHome: {
    color: '#808080',
    fontSize: 50,
    borderRadius: 50,
    padding: 30,
    margin: 'auto',
  },
});
