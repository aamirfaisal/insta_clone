import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useContext } from "react";
import Theme from "../../Utils/Theme";
import { AuthContext } from "../../Context/AuthProvider";

const Button = (props: any) => {
  const { loading } = useContext(AuthContext);

  const { label, disabled, onPress, btnLarge } = props;

  return (
    <View>
      {btnLarge === true ? (
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          style={styles.opacity}
        >
          {loading && <ActivityIndicator size={"small"} color="#fff" />}
          <Text style={styles.txt0}>{label}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  opacity: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: Theme.instaPrimary,
    height: Theme.hp("7%"),
  },
  txt0: {
    marginLeft: Theme.wp("2%"),
    color: Theme.white,
    fontSize: Theme.txtMedium,
    fontWeight: "bold",
  },
});
export default Button;
