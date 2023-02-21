import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Theme from "../../Utils/Theme";
const Textinput = (props: any) => {
  const {
    Emailinput,
    value,
    onChangeText,
    secureTextEntry,
    placeholder,
    maxLength,
    keyboardType,
    autoCorrect,
    onBlur,
    editable,
    inputpassword,
    iconName,
    onEyePress,
    searchInput,
  } = props;
  return (
    <>
      {Emailinput ? (
        <TextInput
          cursorColor={Theme.instaPrimary}
          value={value}
          placeholderTextColor={Theme.lightGreish}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          style={styles.inputstyle}
          placeholder={placeholder}
          maxLength={maxLength}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
          editable={editable}
        />
      ) : inputpassword ? (
        <View style={styles.inputpassword}>
          <TextInput
            cursorColor={Theme.instaPrimary}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={Theme.lightGreish}
            style={{ flex: 1, backgroundColor: "#fff" }}
            autoCapitalize="none"
            autoCorrect={autoCorrect}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
          />

          <TouchableOpacity>
            <Ionicons name={iconName} size={18} onPress={onEyePress} />
          </TouchableOpacity>
        </View>
      ) : searchInput ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingVertical: 10,
            position: "relative",
          }}
        >
          <Ionicons
            name="search"
            style={{
              fontSize: 18,
              opacity: 0.7,
              position: "absolute",
              zIndex: 1,
              left: 25,
            }}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#909090"
            style={{
              width: "94%",
              backgroundColor: "#EBEBEB",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              fontSize: 15,
              padding: 4,
              paddingLeft: 40,
            }}
          />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  inputpassword: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.8,
    fontFamily: "regular",
    fontSize: 14,
    paddingLeft: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: Theme.grey,
    backgroundColor: "#fff",
    height: Theme.hp("7%"),
  },
  inputstyle: {
    borderWidth: 0.8,
    borderColor: Theme.grey,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 14,
    paddingLeft: 20,
    borderRadius: 5,
    height: Theme.hp("7%"),
  },
});
export default Textinput;
