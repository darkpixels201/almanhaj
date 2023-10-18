import React from "react";
import theme from "../common/theme";
import "../assets/style/font.css";

function CustomButton({ containerStyle, title, titleStyle }) {
  const buttonStyle = {
    backgroundColor: "pink",
    width: "30%",
    height: 40,
    ...containerStyle,
  };

  const titleStyles = {
    ...titleStyle
  }
  return (
    <div
      style={buttonStyle}
      // style={{
      //   backgroundColor: "pink",
      //   // // backgroundGradient: <LinearGradient colors={["#8E59E2", "#f3f3f3"]} />,
      //   // color: props.color || "black",
      //   // // display: props.display || "flex",
      //   width: "30%",
      //   height: 40,
      //   // fontFamily: props.fontFamily,
      //   // borderColor: props.borderColor,
      //   // borderRadius: props.borderRadius || 8,
      //   // borderWidth: props.borderWidth,
      //   // opacity: props.opacity,
      //   // alignItems: props.alignItems || "center",
      //   // alignSelf: props.alignSelf || "center",
      //   // justifyContent: props.justifyContent || "center",
      //   // marginTop: props.marginTop,
      //   // shadowColor: props.shadowColor || "black",
      //   // shadowRadius: props.shadowRadius || 8,
      //   // //   alignItems: props.alignItems ||  "center",
      //   // justifyContent: props.justifyContent || "center",
      //   // marginBottom: props.marginBottom,
      //   // marginHorizontal: props.marginHorizontal,
      //   // paddingVertical: props.paddingVertical || 12,
      //   // cursor: "pointer",
      //   ...containerStyle
      // }}
      // onClick={props.onClick}
      // onSubmit={props.onSubmit}
    >
      <div
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          // alignSelf: "center",
          // textAlign: "center",
          display: "flex",
          justifyContent: "center",
          height:"100%",
          width:"100%"
        }}
      >
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignSelf:"center", 
            // backgroundColor:"pink"
          }}
        > */}
        {/* {props.icon ? props.icon : null} */}

        <span
          style={{
            fontSize: 15,
            color: "white",
            // backgroundColor: "pink",
            // textAlign: "center",
            // alignItems: "center",
            alignSelf:"center",
            // fontFamily: props.textFamily || "bold",
            ...titleStyle
          }}
        >
          {title}
        </span>
        {/* </div> */}
      </div>
    </div>
  );
}

export default CustomButton;
