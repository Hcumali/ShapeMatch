import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import {
  dikdortgen_prizmasi_2d,
  dikdortgen_prizmasi_3d,
  kare_piramit_2d,
  kare_piramit_3d,
  kup_2d,
  kup_3d,
  ucgen_piramit_2d,
  ucgen_piramit_3d,
  ucgen_prizma_2d,
  ucgen_prizma_3d
} from "../../assets/images"

const result = [
  { key: "dikdortgen_prizmasi_2d", value: "dikdortgen_prizmasi_3d" },
  { key: "kare_piramit_2d", value: "kare_piramit_3d" },
  { key: "kup_2d", value: "kup_3d" },
  { key: "ucgen_piramit_2d", value: "ucgen_piramit_3d" },
  { key: "ucgen_prizma_2d", value: "ucgen_prizma_3d" }
];

const MainPage = () => {
  const [firstShapeBorder, setFirstShapeBorder] = useState(false);
  const [secondShapeBorder, setSecondShapeBorder] = useState(false);
  const [firstShape, setFirstShape] = useState(null);
  const [totalCorrectCount, setTotalCorrectCount] = useState(0);

  const resetBorders = () => {
    setFirstShapeBorder(false)
    setSecondShapeBorder(false)
  }

  const drawFirst = (key, shapeNumber) => {
    resetBorders()

    switch (shapeNumber) {
      case 1:
        if (!firstShapeBorder) {
          setFirstShape(key)
        } else {
          setFirstShape(null)
        }
        setFirstShapeBorder(!firstShapeBorder)
        break;

      case 2:
        if (!secondShapeBorder) {
          setFirstShape(key)
        } else {
          setFirstShape(null)
        }
        setSecondShapeBorder(!secondShapeBorder)
        break;

      case 3:

        break;

      case 4:

        break;

      case 5:

        break;

      default:
        break;
    }
  }

  const checkIt = (value) => {
    if (firstShape != null) {
      let isCorrect = false;
      let temp = { key: firstShape, value: value}

      result.map((item) => {
        if (JSON.stringify(item)===JSON.stringify(temp)) {
          isCorrect = true;
        }
      });

      if (isCorrect) {
        setTotalCorrectCount(totalCorrectCount + 1)
        setFirstShape(null)
        resetBorders()

        if (totalCorrectCount == 4) {
          // finish modal
        } else {
          // succes modal
        }
      } else {
        // show modal
      }

    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.headerView}>
        <View style={styles.cardNumberView}>
          <View style={styles.numberView}>
            <Text style={styles.number}>39</Text>
          </View>
        </View>
        <View style={styles.titleTextView}>
          <Text style={styles.title}>Şekil Katlamaca</Text>
        </View>
      </View>

      <View style={styles.textView}>
        <Text style={styles.paragraph}>
          Sol taraftaki her bir iki boyutlu şekil, katlanarak sağ taraftaki üç boyutlu şekillerden biri haline getirilebilir. İki boyutlu şekilleri, üç boyutlu karşılıklarıyla eşleştiriniz.
        </Text>
      </View>

      <View style={styles.shapesView}>
        <View style={styles.shapeView}>
          <TouchableOpacity onPress={() => drawFirst("dikdortgen_prizmasi_2d", 1)}>
            <Image
              style={[styles.shape, firstShapeBorder ? styles.selectedShape : null]}
              source={dikdortgen_prizmasi_2d}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => checkIt("dikdortgen_prizmasi_3d")}>
            <Image
              style={styles.shape}
              source={dikdortgen_prizmasi_3d}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.shapeView}>
          <TouchableOpacity onPress={() => drawFirst("kare_piramit_2d", 2)}>
            <Image
              style={[styles.shape, secondShapeBorder ? styles.selectedShape : null]}
              source={kare_piramit_2d}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => checkIt("kare_piramit_3d")}>
            <Image
              style={styles.shape}
              source={kare_piramit_3d}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#bad95d",
    alignItems: "center",
    justifyContent: "center"
  },
  headerView: {
    width: "100%",
    height: "6%",
    flexDirection: "row"
  },
  cardNumberView: {
    width: "28%",
    height: "100%"
  },
  titleTextView: {
    width: "72%",
    height: "100%",
    marginTop: "2%",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  textView: {
    width: "90%",
    height: "18%",
    alignItems: "center",
    justifyContent: "center"
  },
  shapesView: {
    width: "100%",
    height: "76%",
    paddingTop: "5%"
  },
  numberView: {
    width: "28%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginLeft: "10%",
    marginTop: "6%",
    backgroundColor: "#e3ed77"
  },
  number: {
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    color: "black",
    textAlign: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "italic",
    color: "black",
    textAlign: "center"
  },
  paragraph: {
    fontSize: 15.5,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#232421",
    textAlign: "left",
    lineHeight: 21
  },
  shapeView: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: "5%"
  },
  shape: {
    width: 84,
    height: 84
  },
  selectedShape: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4
  }
});