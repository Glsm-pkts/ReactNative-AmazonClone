import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import RecommendProduct from "../assets/recommend.jpg";

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image style={styles.imgStyle} source={RecommendProduct} />

      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.discountPrice}>1,59999 ₺</Text>

          <Text style={styles.actualPrice}>1,900 ₺</Text>
        </View>

        <Text style={styles.productName}>
          {" "}
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>

        <TouchableOpacity>
          <Text style={styles.allDeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#0000000",
    fontWeight: "bold",
    marginBottom: 10,
  },
  imgStyle: {
    height: 250,
    width: "100%",
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  offDealBtn: {
    backgroundColor: "#be0201",
    width: 60,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  offDeal: {
    fontSize: 12,
    color: "#ffffff",
  },
  deal: {
    color: "#be0201",
    fontWeight: "600",
    marginLeft: 6,
    fontSize: 12,
  },
  discountPrice: {
    color: "#000000",
    fontSize: 16,
    marginVertical: 5,
  },

  actualPrice: {
    fontSize: 10,
    marginLeft: 7,
    textDecorationLine: "line-through",
  },

  productName: {
    color: "#000000",
    fontSize: 14,
  },
  allDeals: {
    color: "#017185",
    marginVertical: 10,
    fontSize: 14,
  },
});