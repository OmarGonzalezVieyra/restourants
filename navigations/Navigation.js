import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "restaurants":
                iconName ="compass-outline"
                break;
            case "favoritos":
                iconName ="heart-outline"
                break;
            case "top-restaurants":
                iconName ="star-outline"
                break;
            case "Search":
                iconName ="magnify"
                break;
            case "account":
                iconName ="home-outline"
                break;
        }

        return (
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="restaurants"
                tabBarOptions={{
                    inactiveTintColor: "#5c6c14",
                    activeTintColor: "#282c34"
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                }) }
            >
                <Tab.Screen
                name="restaurants"
                component={RestaurantsStack}
                options={{ title:"Restauranes" }}
                />              
                <Tab.Screen
                name="favoritos"
                component={FavoritesStack}
                options={{ title:"Favoritos" }}
                />              
                <Tab.Screen
                name="top-restaurants"
                component={TopRestaurantsStack}
                options={{ title:"Restauranes" }}
                />              
                <Tab.Screen
                name="Search"
                component={SearchStack}
                options={{ title:"Buscar" }}
                />              
                <Tab.Screen
                name="account"
                component={AccountStack}
                options={{ title:"Cuentas" }}
                />              
            </Tab.Navigator>
        </NavigationContainer>
    )
}
