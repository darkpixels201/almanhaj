import React from "react";
import theme from "../common/theme";
import { Grid } from "@mui/material";
import icons from "../assets/icons";
import "../assets/style/homeScreen.css";
import CustomText from "../components/CustomText";
import images from "../assets/images";
import Spacer from "../components/Spacer";
import CustomButton from "../components/CustomButton";

const HomeScreen = () => {
  return (
    <div>
      {window.innerWidth >= 893 ? (
        <div style={{ ...styles.rightContent }}>
          <div style={{ ...styles.mainProfileImage }}>
            <img src={images.profilePic} style={{ ...styles.profileImage }} />
            <Spacer height={40} />
            <CustomText
              title="Prof.Hafiz Saif ur Rehman Butt"
              fontFamily="bold"
              fontSize={25}
              textAlign={"center"}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      <Grid container>
        <Grid xs={1}>
          <div style={{ ...styles.leftContent }} />
        </Grid>

        <Grid item xs={6.5}>
          <div style={{ display: "flex" }}>
            <img src={icons.logo} style={{ height: 100, width: 100 }} />
            {window.innerWidth >= 839 ? (
              <div style={{ ...styles.navbar, cursor:"pointer" }}>
                <h4>Home</h4>
                <h4>Course</h4>
                <h4>Pricing</h4>
                <h4>Contact</h4>
              </div>
            ) : (
              ""
            )}
          </div>
        </Grid>
        <Grid item xs={4.5} style={{ ...styles.buttonBody }}>
          <div style={{ ...styles.button }}>Join us</div>
        </Grid>
      </Grid>

      {/* Header Body */}
      <Spacer height={50} />

      <div>
        <Grid
          container
          justifyContent={window.innerWidth >= 839 ? "" : "center"}
          spacing={3}
        >
          <Grid item md={6} style={{ ...styles.bodyMainText }}>
            <Spacer height={50} />
            <CustomText
              title="For Better Future"
              fontFamily="semiBold"
              color={theme.primary}
            />
            <Spacer height={40} />
            <CustomText
              title="Al Manhaj Online"
              fontFamily="bold"
              fontSize={window.innerWidth >= 839 ? 65 : 50}
              fontWeight={700}
            />
            <Spacer height={window.innerWidth >= 839 ? 20 : 0} />
            <CustomText
              title="Quran Course"
              fontFamily="bold"
              fontSize={window.innerWidth >= 839 ? 65 : 50}
              fontWeight={700}
            />
            <Spacer height={40} />
            <CustomButton
              title={"Get a online Course"}
              titleStyle={{ fontFamily: "bold" }}
              containerStyle={{
                backgroundColor: theme.primary,
                width: "30%",
                height: 40,
                borderRadius: 5,
              }}
            />
            <Spacer height={40} />
            {window.innerWidth >= 839 ? (
              ""
            ) : (
              <div style={{ ...styles.mainProfileImage }}>
                <img
                  src={images.profilePic}
                  style={{ ...styles.profileImage }}
                />
                <Spacer height={40} />
                <CustomText
                  title="Prof.Hafiz Saif ur Rehman Butt"
                  fontFamily="bold"
                  fontSize={25}
                  textAlign={"center"}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const styles = {
  leftContent: {
    height: 176,
    width: 100,
    backgroundColor: theme.secondary,
    borderBottomRightRadius: 50,
    position: "absolute",
    zIndex: -1,
  },
  rightContent: {
    height: 650,
    // width: 567,
    width: "40%",
    backgroundColor: theme.secondary,
    borderBottomLeftRadius: 50,
    position: "absolute",
    zIndex: -1,
    right: 0,
    display: "flex",
    justifyContent: "center",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 400,
  },
  buttonBody: {
    display: "flex",
    justifyContent: "flex-end",
    //  justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: window.innerWidth >= 893 ? theme.secondary : "",
    paddingRight: 50,
    // backgroundColor:"pink"
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 100,
    backgroundColor: theme.primary,
    color: "white",
    fontSize: 15,
    borderRadius: 5,
  },
  profileImage: {
    // height: 300,
    // width: 300,
    height: "60%",
    width: "60%",
    borderRadius: 200,
    objectFit: "contain",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "red",
  },
  mainProfileImage: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
  },
  bodyMainText: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
  },
};

export default HomeScreen;
