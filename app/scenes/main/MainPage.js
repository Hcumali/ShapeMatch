import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import FlashMessage, { showMessage } from "react-native-flash-message";
import Modal from "react-native-modal";
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
} from "../../assets/images";
import { FinishModal as InfoModal } from "../../components";

const result = [
  { key: "dikdortgen_prizmasi_2d", value: "dikdortgen_prizmasi_3d" },
  { key: "kare_piramit_2d", value: "kare_piramit_3d" },
  { key: "kup_2d", value: "kup_3d" },
  { key: "ucgen_piramit_2d", value: "ucgen_piramit_3d" },
  { key: "ucgen_prizma_2d", value: "ucgen_prizma_3d" }
];

const MainPage = () => {
  const myLocalFlashMessage = useRef();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isCloseApp, setIsCloseApp] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");

  const [firstShapeBorder, setFirstShapeBorder] = useState(false);
  const [secondShapeBorder, setSecondShapeBorder] = useState(false);
  const [thirdShapeBorder, setThirdShapeBorder] = useState(false);
  const [fourthShapeBorder, setFourthShapeBorder] = useState(false);
  const [fifthShapeBorder, setFifthShapeBorder] = useState(false);
  const [firstShape, setFirstShape] = useState(null);
  const [totalCorrectCount, setTotalCorrectCount] = useState(0);

  const playAgain = () => {
    resetBorders()
    setFirstShape(null)
    setTotalCorrectCount(0)
    setIsCloseApp(false)
    setModalTitle("")
    setModalText("")
    toggleModal()
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const resetBorders = () => {
    setFirstShapeBorder(false)
    setSecondShapeBorder(false)
    setThirdShapeBorder(false)
    setFourthShapeBorder(false)
    setFifthShapeBorder(false)
  };

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
        if (!thirdShapeBorder) {
          setFirstShape(key)
        } else {
          setFirstShape(null)
        }
        setThirdShapeBorder(!thirdShapeBorder)
        break;

      case 4:
        if (!fourthShapeBorder) {
          setFirstShape(key)
        } else {
          setFirstShape(null)
        }
        setFourthShapeBorder(!fourthShapeBorder)
        break;

      case 5:
        if (!fifthShapeBorder) {
          setFirstShape(key)
        } else {
          setFirstShape(null)
        }
        setFifthShapeBorder(!fifthShapeBorder)
        break;

      default:
        break;
    }
  };

  const getTextAndTitle = (shapeNumber, isFinish) => {
    if (isFinish) {
      setIsCloseApp(true)
    }

    switch (shapeNumber) {
      case 2:
        setModalTitle("Dikdörtgenler Prizması")
        setModalText("Kare dik prizma tabanları eş ve birbirine paralel olan karelerden oluşan, yan yüzleri eş dikdörtgenlerden oluşan kapalı şekildir. Alt taban ve üst taban olmak üzere iki tabanı ve dört tane yan yüzü vardır. Üç boyutu vardır en, boy ve yüksekliktir.")
        break;

      case 3:
        setModalTitle("Kare Piramit")
        setModalText("Yan yüzeyleri dört tane ikizkenar üçgenin birleşmesinden oluşur. İkizkenar üçgen taban uzunluğu piramit tabanının tek bir kenarına eştir. h piramit yüksekliği olarak simgelenir. Tüm alan ise taban alanı ve yan yüz alanları toplamına eşittir.")
        break;

      case 1:
        setModalTitle("Küp")
        setModalText("Küp, üç boyutlu, alanları birbirine eşit altı karenin dik açılarla birleşmesinden oluşan altı yüzlü bir geometrik şekildir. Düzgün altıyüzlü olarak da anılır ve tamamı 5 tane olan Platonik cisimlerden biridir. Küpün en önemli özelliği tüm yüzlerinin kare olmasıdır. Hacmi 3 eşit ayrıtının çarpılması ile bulunur.")
        break;

      case 4:
        setModalTitle("Üçgen Piramit")
        setModalText("Geometride tetrahedron veya dört yüzlü, dört üçgen yüzden oluşan bir çokyüzlüdür (polihedron), her köşesinde üç üçgen birleşir. Düzgün dört yüzlü dört üçgenin eşkenar olduğu bir dört yüzlüdür ve Platonik cisimlerden biridir. Dörtyüzlü, dört yüzü olan tek konveks çokyüzlüdür.")
        break;

      case 5:
        setModalTitle("Üçgen Prizma")
        setModalText("Üçgen prizmalar yüz sayısı 5 olan prizmalardır. 2 taban sayısı ve 3 yanal yüz sayısı bulunan bu prizma çeşidinin 6 köşesi bulunur. Taban ayrıt sayısı 6, yanal ayrıt sayısı 3'tür. Toplamda 9 ayrıt sayısından oluşan üçgen prizmaların yanal yüzey kısımları ise dikdörtgen şeklindedir.")
        break;

      default:
        break;
    }
  }

  const checkIt = (value, shapeNumber) => {
    if (firstShape != null) {
      let isCorrect = false;
      let temp = { key: firstShape, value: value }

      result.map((item) => {
        if (JSON.stringify(item) === JSON.stringify(temp)) {
          isCorrect = true;
        }
      });

      if (isCorrect) {
        setTotalCorrectCount(totalCorrectCount + 1)
        setFirstShape(null)
        resetBorders()

        showMessage({
          message: "Başarılı",
          description: "✓ Doğru Eşleşme ✓",
          type: "success",
          duration: 3000
        });
        getTextAndTitle(shapeNumber, totalCorrectCount == 4 ? true : false)
        toggleModal()
      } else {
        showMessage({
          message: "Başarısız",
          description: "✖ Yanlış Eşleşme ✖",
          type: "danger",
          duration: 3000
        });
      }

    } else {
      showMessage({
        message: "Başarısız",
        description: "İki boyutlu bir şekil seçmelisiniz.",
        type: "info",
        duration: 3000
      });
    }
  };

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

      <ScrollView style={styles.shapesView}>
      <View >
        <View style={styles.shapeView}>
          <TouchableOpacity onPress={() => drawFirst("kup_2d", 1)}>
            <Image
              style={[styles.shape, firstShapeBorder ? styles.selectedShape : null, {width: 140}]}
              source={kup_2d}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => checkIt("ucgen_piramit_3d", 4)}>
            <Image
              style={[styles.shape, {height: 115}]}
              source={ucgen_piramit_3d}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.shapeView}>
          <TouchableOpacity onPress={() => drawFirst("dikdortgen_prizmasi_2d", 2)}>
            <Image
              style={[styles.shape, secondShapeBorder ? styles.selectedShape : null]}
              source={dikdortgen_prizmasi_2d}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => checkIt("ucgen_prizma_3d", 5)}>
            <Image
              style={styles.shape}
              source={ucgen_prizma_3d}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.shapeView}>
          <TouchableOpacity onPress={() => drawFirst("kare_piramit_2d", 3)}>
            <Image
              style={[styles.shape, thirdShapeBorder ? styles.selectedShape : null]}
              source={kare_piramit_2d}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => checkIt("dikdortgen_prizmasi_3d", 2)}>
            <Image
              style={styles.shape}
              source={dikdortgen_prizmasi_3d}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.shapeView}>
          <TouchableOpacity onPress={() => drawFirst("ucgen_piramit_2d", 4)}>
            <Image
              style={[styles.shape, fourthShapeBorder ? styles.selectedShape : null]}
              source={ucgen_piramit_2d}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => checkIt("kare_piramit_3d", 3)}>
            <Image
              style={styles.shape}
              source={kare_piramit_3d}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.shapeView}>
          <TouchableOpacity onPress={() => drawFirst("ucgen_prizma_2d", 5)}>
            <Image
              style={[styles.shape, fifthShapeBorder ? styles.selectedShape : null, {width: 140}]}
              source={ucgen_prizma_2d}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => checkIt("kup_3d", 1)}>
            <Image
              style={[styles.shape, {height: 100}]}
              source={kup_3d}
            />
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>

      <Modal
        isVisible={isModalVisible}
        statusBarTranslucent={true}
      >
        <InfoModal
          title={modalTitle}
          text={modalText}
          closeModal={toggleModal}
          playAgain={playAgain}
          closeApp={isCloseApp}
        />
      </Modal>

      <FlashMessage ref={myLocalFlashMessage} />
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
    paddingTop: "1%"
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