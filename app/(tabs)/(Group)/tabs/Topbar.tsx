import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WishList from "./WishList";
import Feed from "./Feed";
import { color, fontFamily } from "../../../../utils/Color";

const Tab = createMaterialTopTabNavigator();

const Topbar: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontSize: 18,
          fontFamily: fontFamily.DMSans_500,
          lineHeight: 27,
        },

        tabBarActiveTintColor: color.green, // Color when tab is active
        tabBarInactiveTintColor: color.black, // Color when tab is inactive
        tabBarIndicatorStyle: {
          borderColor: color.green,
          borderWidth: 1,
        },
      }}
    >
      <Tab.Screen name="Wishlist" component={WishList} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
};

export default Topbar;
