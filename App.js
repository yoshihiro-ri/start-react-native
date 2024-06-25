import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import Constants from "expo-constants"

export default function App() {
  const [articles, setArticles] = useState([]);
  console.log("first")
  console.log(Constants.manifest.extra.apiKey)
  const URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${Constants.manifest.extra.apiKey}`
  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response)
      setArticles(response.data.articles);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem imageUrl={item.urlToImage} title={item.title} author={item.author} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
