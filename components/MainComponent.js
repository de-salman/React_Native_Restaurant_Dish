import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import ContactUs from './ContactUsComponent';
import AboutUs from './AboutUsComponent';

const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
  return (
    <MenuNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff"
        }
      }}
    >
      <MenuNavigator.Screen
        name="Menu"
        component={Menu}
      />
      <MenuNavigator.Screen
        name="Dishdetail"
        component={Dishdetail}
        options={{ headerTitle: "Dish Detail" }}
      />
    </MenuNavigator.Navigator>
  );
}

const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen() {
  return(
      <HomeNavigator.Navigator
          initialRouteName='Home'
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}
      >
          <HomeNavigator.Screen
              name="Home"
              component={Home}
          />         
      </HomeNavigator.Navigator>
  );
}

const ContactUsNavigator = createStackNavigator();

function ContactUsNavigatorScreen() {
  return(
      <ContactUsNavigator.Navigator
          initialRouteName='Contact Us'
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}
      >
          <ContactUsNavigator.Screen
              name="Contact Us"
              component={ContactUs}
          />         
      </ContactUsNavigator.Navigator>
  );
}

const AboutUsNavigator = createStackNavigator();

function AboutUsNavigatorScreen() {
  return(
      <AboutUsNavigator.Navigator
          initialRouteName='About Us'
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#512DA8"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"            
              }
          }}
      >
          <AboutUsNavigator.Screen
              name="About Us"
              component={AboutUs}
          />         
      </AboutUsNavigator.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MainNavigator() {
    return(

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
          <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
          <Drawer.Screen name="Contact Us" component={ContactUsNavigatorScreen} />
          <Drawer.Screen name="About Us" component={AboutUsNavigatorScreen} />
        </Drawer.Navigator>

    );
}

class Main extends Component {

  render() {

    return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );
  }
}

export default Main;