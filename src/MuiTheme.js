import {
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack,
  teal700,
  teal500,
  teal200,
  green500,
  red500
} from "material-ui/styles/colors";
import { fade } from "material-ui/utils/colorManipulator";
import spacing from "material-ui/styles/spacing";

import { ListItem } from "material-ui/List";
ListItem.defaultProps.disabled = true;
document.body.style.backgroundColor = grey300;
export default {
  spacing: spacing,
  fontFamily: "Roboto, sans-serif",
  palette: {
    sliderValueStyle: {
      top: "25px"
    },
    incomeStyle: {
      color: green500,
      fontWeight: "bold",
      float: "right"
    },
    expenseStyle: {
      color: red500,
      fontWeight: "bold",
      float: "right"
    },
    primary1Color: teal500,
    primary2Color: teal700,
    primary3Color: grey400,
    accent1Color: teal200,
    accent2Color: grey300,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey500,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: teal500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
};
