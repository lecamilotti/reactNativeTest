// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import Card from './components/Card';
import Footer from './components/Footer';
import HeaderLogo from './components/HeaderLogo';

export default function App() {

  
  return (
    <>
        
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <HeaderLogo />
    <HomeIcon name='home' style={styles.homeIcon}>
      <Text>Home</Text>
      
      </HomeIcon>

    <View style={styles.userName}>
      <Text style={styles.userNameText}>Welcome, Leandro Camilotti</Text>
      </View>
    </View>
     

      <StatusBar barStyle="dark-content" />

        <Card style={styles.card}>
          <View style={styles.card.iconContainer}>
          <Icon name="database" style={styles.card.iconContainer.icon} />
          </View>
          <View>
            <Text style={styles.firstTitle}>Payment status</Text>
            <Text style={styles.titleLatestPayment}>Latest payment</Text>
            <Text style={styles.latestePayment}>never</Text>
            <Text style={styles.titleRemaininingPrincial}>Remaining principal</Text>
            <Text style={styles.totalRemaining}>1.732,00 kr.</Text>
            <Text style={styles.titleCardStatus}>Card status</Text>
            <Text style={styles.cardStatus}>Active.</Text>


          </View>
         
        </Card>
        <Footer />
      </SafeAreaView>
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#f5f0ef',
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    padding: 20,
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',


  },
  homeIcon: {
    color: '#808080',
    fontSize: 50,
    borderRadius: 50,
    padding: 30,

    
  },



  userName: {
    display: 'flex',

    width: '100%',
    flexDirection: 'column',
    padding: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },

  





  firstTitle: {
    fontSize: 16,
    fontWeight: '600',
    top: -20,
    left: -20,
    color: '#222',
  },
  titleLatestPayment: {
    fontSize: 14,
    top: -5,
    left: -20,
    color: '#222',
  },
  latestePayment: {
    fontSize: 14,
    position: 'absolute',
    top: 15,
    left: 150,
    color: '#222',
  },
  titleRemaininingPrincial: {
    fontSize: 14,
    top: 5,
    left: -20,
    color: '#222',
  },
  totalRemaining: {
    position: 'absolute',
    fontSize: 14,
    top: 40,
    left: 150,
    color: '#222',
  },
  titleCardStatus: {
    fontSize: 14,
    top: 15,
    left: -20,
    color: '#222',
  },
  cardStatus: {
    position: 'absolute',
    fontSize: 14,
    top: 70,
    left: 150,
    color: '#63b587',
  },

  card: {
    position: 'absolute',
    top: 480,
    left: 20,
    height: '20%',
    width: '90%',
    backgroundColor: '#fff',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    iconContainer:{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      position: 'absolute',
      top: 50,
      left: 20,
      borderRadius: '50%',
      padding: 10,
      backgroundColor: '#faf8f6',

    icon : {
      fontSize: 40,
      color: '#996b68',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
    },
    },
  },
});
