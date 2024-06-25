import { StyleSheet, Image, Text, View } from "react-native";

export const ListItem = (props) => {
  const sampleText = "sample_sample_sample_sample";
  const sampleSubText = "subtext_subtext_subtext_subtext_";
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image source={{ uri:props.imageUrl }} style={styles.imageBox}></Image>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.headerText}>{props.title}</Text>
        <Text style={styles.subText}>{props.author}</Text>
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    marginVertical:5
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
  },
  imageBox: {
    height: 100,
    width: 100,
  },
  textBox: {
    width: "100%",
  },
  headerText: {
    color: "#707070",
    fontWeight: "bold",
    fontSize: 18,
  },
  subText: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 12,
  },
});
