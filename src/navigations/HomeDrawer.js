import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/homeScreen";


const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    
    </Drawer.Navigator>
  );
}

export default HomeDrawer;