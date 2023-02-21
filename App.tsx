import React from "react";
import { AuthProvider } from "./src/Context/AuthProvider";
import RootNavigator from "./src/Navigation/StackNavigator";
type Props = {};

const App = (props: Props) => {
  return (
    <AuthProvider>
      <RootNavigator {...props} />
    </AuthProvider>
  );
};

export default App;
