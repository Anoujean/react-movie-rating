import React, { Component, useState } from "react";
import axios from "axios";
import { Card, Badge } from 'react-native-elements'
import { Text,TextInput,View,FlatList,Image,} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Search() {
  const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=f2660ddd";
  const [state, setState] = useState({
    title: "",
    results: [],
  });

  const search = () =>
    axios(apiKey + "&s=" + state.title+"&type=movie").then(({ data }) => {
      let results = data.Search;

      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });

  return (
    <View style={{ flex: 1,backgroundColor: "#0A0A15",alignItems: "center",justifyContent: "flex-start",paddingTop: 70,paddingHorizontal: 20, }}>
      <Text style={{ color: "#FFF",fontSize: 32,fontWeight: "700",textAlign: "center",marginBottom: 20, }}><Ionicons name="search" size="30px" color="#FFF" />Recherche (titre du film):</Text>
      <TextInput
        style={{ fontSize: 20,fontWeight: "200",padding: 10,width: "75%",backgroundColor: "#FFF",borderRadius: 10,marginBottom: 20, }}
        onChangeText={(text) =>
          setState((prevState) => {
            return { ...prevState, title: text };
          })
        }
        onSubmitEditing={search}
        value={state.title}
      />

      <FlatList style={{ width: "100%", marginBottom:20}} data={state.results} renderItem={(result) => (
          <Card>
            <Card.Title>{result.item.Title}</Card.Title>
            <Card.Divider/>
            <Image
              source={{ uri: result.item.Poster }}
              style={{ width: 600, height: 900, }}
            />
            <Card.Divider/>
            <Text style={{ fontSize:20 }}>Année de sortie: <Badge style={{marginBottom: 10, fontSize:20}} value={result.item.Year}/></Text>
          </Card>
        )}
        keyExtractor={(result) => result.imdbID}
      />
    </View>
  );
}