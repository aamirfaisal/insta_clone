import { StyleSheet } from "react-native";
import Theme from "../../Utils/Theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  petimg: {
    height: 100,
    width: 100,
    alignItems: "center",
    alignSelf: "center",
    marginTop: Theme.hp("14%"),
    marginLeft: Theme.hp("0.5%"),
  },
  maincontainer: {
    padding: Theme.wp("2.5%"),
    flex: 1,
    backgroundColor: Theme.bacolor,
    justifyContent: "space-between",
  },
  mainheader: {
    fontSize: Theme.txtExtraLarge,
    color: Theme.black,
    marginVertical: Theme.hp("1.4%"),
    fontFamily: Theme.fontInstaRegular,
    textAlign: "center",
  },

  description: {
    fontsize: 20,
    color: Theme.lightGrey,
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: "regular",
  },
  inputcontainer: {
    marginTop: 10,
  },
  inputcontainers: {
    marginTop: Theme.hp("2.5%"),
  },

  inputpassword1: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 14,
    paddingLeft: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: "#d75f4f",
    backgroundColor: "#FAFAFA",
    height: Theme.hp("6%"),
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    color: Theme.labelclr,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
  },
  opacity: {
    borderColor: Theme.opacityborder,
    height: 42,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#87CEEB",

    marginTop: Theme.hp("10%"),
    height: 60,
  },
  txtview: {
    marginVertical: Theme.hp("1.5%"),
    alignItems: "center",
  },
  txt0: {
    color: Theme.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  txt: {
    fontSize: Theme.txtSmall,
    color: Theme.black,
    fontWeight: "600",
  },
  txt2: {
    fontSize: 11,
    color: Theme.txt2clr,
  },
  txt3: {
    fontSize: 13,
  },
  txt4: {
    fontSize: 14,
    color: "#d75f4f",
  },
  txt5: {
    borderBottomWidth: 1,
    width: "45%",
    height: 1,
    borderBottomColor: Theme.borderclr,
  },
  txt6: { width: "10%", textAlign: "center", color: Theme.grey },
  txt7: {
    borderBottomWidth: 1,
    width: "45%",
    height: 1,
    borderBottomColor: Theme.borderclr,
  },
  txt8: {
    borderBottomWidth: 1,
    width: "100%",
    paddingLeft: 100,
    borderBottomColor: Theme.grey,
    paddingTop: 70,
    borderBottomColor: Theme.borderclr,
  },
  viewacc: {
    flexDirection: "row",
    // marginTop: '10%',
    marginVertical: "5%",
    justifyContent: "center",
  },
  imagestyle: {
    width: 300,
    height: 300,
  },
  google: {
    // borderWidth: 2,
    flexDirection: "row",
    // width: '100%',
    // height: Theme.hp('6%'),
    // alignSelf: 'center',
    // borderColor: '#d75f4f',
    // borderRadius: 5,
    // backgroundColor: '#d75f4f',
    // margin: 10,
    // backgroundColor: 'white',
    justifyContent: "space-evenly",
    margin: 10,
    padding: 10,
    marginTop: "8%",
    // alignItems: 'center',
    // padding: 10,
    // opacity: 0.6,
  },
  radioTxtContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Theme.wp("1%"),
    marginVertical: 20,
  },
  radioTxt: {
    color: "#d75f4f",
    fontSize: 12,
    fontWeight: "800",
    // left: Theme.wp('5%'),
  },
  btnCreateAcc: {
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
    padding: Theme.hp("1.2%"),
    borderColor: Theme.lightGreish,
  },
  metaView: {
    marginTop: Theme.hp("1%"),
    flexDirection: "row",
    alignItems: "center",
  },
  metaImg: {
    width: Theme.wp("6%"),
    height: Theme.wp("6%"),
    tintColor: "#7E8B94",
  },
  metaTxt: {
    fontSize: Theme.RFPercentage(2.2),
    fontWeight: "600",
    color: "#7E8B94",
    marginLeft: Theme.wp("2%"),
  },
});
export default styles;
