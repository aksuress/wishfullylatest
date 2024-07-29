import { Stack } from "expo-router";

const Layout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="CreateWishList" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
