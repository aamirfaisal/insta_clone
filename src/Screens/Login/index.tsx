import { Text, TouchableOpacity, View, Image, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Textinput from "../../Components/Textinput";
import Buttons from "../../Components/Button";
import { images } from "../../Assets/Images";
import Theme from "../../Utils/Theme";
import styles from "./Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  type UserData = {
    email?: String;
    password?: String;
  };
  const navigation = useNavigation();
  const { setLoading } = useContext(AuthContext);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });
  const onPressLogin = async () => {
    if (
      userData.email === "admin@gmail.com" &&
      userData.password === "123456"
    ) {
      setLoading(true);
      await AsyncStorage.setItem("IS_USER_LOGGED_IN", JSON.stringify(true));
      navigation.navigate("BottomTabs");
      setLoading(false);
    } else {
      Alert.alert("", "Please enter valid credentials");
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ backgroundColor: "#F5F7F4", flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View
        style={{
          height: Theme.wp("18%"),
          width: Theme.wp("18%"),
          alignSelf: "center",
          marginTop: Theme.hp("10%"),
        }}
      >
        <Image source={images.logo} style={{ height: "100%", width: "100%" }} />
      </View>

      <View style={styles.maincontainer}>
        <View>
          <Text style={styles.mainheader}>Login</Text>
          <View style={styles.inputcontainer}>
            <Textinput
              Emailinput={true}
              placeholder={"Enter Email"}
              autoCapitalize="none"
              autoCorrect={false}
              cursorColor="#d75f4f"
              value={userData.email}
              onChangeText={(text: String) =>
                setUserData({ ...userData, email: text })
              }
            />
          </View>
          <View style={styles.inputcontainers}>
            <Textinput
              inputpassword={true}
              placeholder={"Enter Password"}
              returnKeyType={"done"}
              secureTextEntry={isPasswordSecure}
              keyboardType={"default"}
              iconName={isPasswordSecure ? "eye-off-sharp" : "eye"}
              onEyePress={() => {
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true);
              }}
              value={userData.password}
              onChangeText={(text: String) =>
                setUserData({ ...userData, password: text })
              }
            />
          </View>

          <View style={styles.inputcontainers}>
            <Buttons btnLarge={true} label={"Login"} onPress={onPressLogin} />
          </View>

          <View style={styles.txtview}>
            <TouchableOpacity>
              <Text style={styles.txt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: Theme.hp("15%"),
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.btnCreateAcc}>
            <Text style={styles.txt}>Create new account</Text>
          </TouchableOpacity>
          <View style={styles.metaView}>
            <Image source={images.meta} style={styles.metaImg} />

            <Text style={styles.metaTxt}>Meta</Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
