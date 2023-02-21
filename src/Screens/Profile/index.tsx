import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Theme from "../../Utils/Theme";

type Props = {};

const Profile = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  txt: {
    color: Theme.primary,
    fontSize: Theme.txtExtraLarge,
    fontFamily: Theme.fontInstaRegular,
  },
});
export default Profile;
