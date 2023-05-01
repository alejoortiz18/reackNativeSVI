import { Icon } from "react-native-elements";
import MainPage from "./MainPage";
import Regiones from './Regiones';
import Pokemon from './PokemonScreen';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function BarraNav() {
    return ( 
        <Tab.Navigator> 
            <Tab.Screen 
            name="Inicio"
            component={MainPage}
            option={{
                tabBarIcon:({color, size})=>(
                    <Icon name="heart" type="font-awesome" color={color} size={size} />
                )
            }}/>
            
            <Tab.Screen 
            name="Regiones"
            component={Regiones}
            options={{
                tabBarIcon:({color,size})=>(
                    <Icon name="map" type="font-awesome" color={color} size={size} />
                ),
            }}/>

            <Tab.Screen 
            name="pokemon"
            component={Pokemon}
            options={{
                tabBarIcon:({color,size})=>(
                    <Icon name="user" type="font-awesome" color={color} size={size} />
                ),
            }}/>
            
        </Tab.Navigator>             
       
    )
}

export default BarraNav