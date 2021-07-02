import React, { Component } from "react";
import { StyleSheet, Text, TextInput, Button, View, FlatList, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Card, Divider, Badge } from 'react-native-elements'

export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreating: false,
      movieTitle: "",
      movieComment: "",
      movieRating: "",
      movieAuthor: "Anonymous",
      movies: [
        {
          title: "Pulp Fiction",
          comment: "Excellent film. Un chef-d'oeuvre dans son genre. Ce film mêle comique et action, ce qui en fait bien évidement un film poignant. Le fait qu'il sois narré de façon non-linéaire peut paraître troublant voir ennuyeux, mais lorsque surgit la scène finale, tout se démêle, et cette fin vous tient en haleine jusqu'à la dernière seconde.",
          rating: 9,
          author: "Anonymous"
        },
        {
          title: "Léon",
          comment: "Une histoire magnifique qui est aussi l’un des meilleurs rôles de Jean Reno et la découverte par Luc Besson de la future star Natalie Portman, impeccable pour son premier film.",
          rating: 8,
          author: "LeCritique"
        },
        {
          title: "Once upon a time... in Hollywood",
          comment: "Quentin Tarantino, plus désenchanté que d’habitude, rassemble un casting de folie pour évoquer une période-charnière de Los Angeles et de l’Amérique. D’une nostalgie touchante. D’une érudition totale. Et d’une audace folle !",
          rating: 10,
          author: "LeCinephile75"
        },
      ],
    };
  }

  handleTitleInputChange = (text) => {
      this.setState({
        movieTitle: text,
      });
  };

  handleCommentInputChange = (text) => {
      this.setState({
        movieComment: text,
      });
  };

  handleRatingInputChange = (text) => {
      this.setState({
        movieRating: text,
      });
  };

  handleAuthorInputChange = (text) => {
    this.setState({
      movieAuthor: text,
    });
};

  handleSubmit = () => {
    let movie = {
      title: this.state.movieTitle,
      comment: this.state.movieComment,
      rating: this.state.movieRating,
      author: this.state.movieAuthor,
    };
    let newMovies = [...this.state.movies, movie];
    this.setState((prevState) => ({
      isCreating: false,
      movies: newMovies,
    }));
  };

  showForm = () => {
    this.setState(() => ({
      isCreating: true,
    }));
  };
  showMovies = () => {
    this.setState(() => ({
      isCreating: false,
    }));
  };

  render() {
    const widget = this.state.isCreating ? (
      <View>
        <Text style={styles.label}>Titre du film:</Text>
        <TextInput
          style={styles.input}
          value={this.state.movieTitle}
          onChangeText={this.handleTitleInputChange}
        />
        <Text style={styles.label}>Votre commentaire:</Text>
        <TextInput
          style={styles.input}
          value={this.state.movieComment}
          onChangeText={this.handleCommentInputChange}
        />
        <Text style={styles.label}>Note(jusqu'à 10):</Text>
        <TextInput
          style={styles.input}
          value={this.state.movieRating}
          onChangeText={this.handleRatingInputChange}
        />
        <Text style={styles.label}>Auteur:</Text>
        <TextInput
          style={styles.input}
          value={this.state.movieAuthor}
          onChangeText={this.handleAuthorInputChange}
        />
        <Divider orientation="horizontal" width={5} />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    ) : (
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color:"#eae122",textAlign: "center", }}> Les critiques de films: </Text>
        <SafeAreaView>
          <FlatList
            data={this.state.movies}
            renderItem={({ item }) => (

              <Card>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider/>
                <Text style={{marginBottom: 10}}>{item.comment}</Text>
                <Card.Divider/>
                <Text>Note: <Badge value={item.rating}/> - Author: {item.author}</Text>
              </Card>

            )}
          />
        </SafeAreaView>
      </View>
    );
    return (
      <View style={{ flex: 1, backgroundColor: "#0A0A15",alignItems: "center",justifyContent: "flex-start", }}>
        <View style={{ flexDirection: "row",textAlign: "center",alignContent: "center",alignItems: "center",justifyContent: "center", }}>
          <Text style={{fontSize: 25, fontWeight: "bold", color:"#eae122"}}><Ionicons name="star" size="25px" color="#eae122" />MOVIE RATING</Text>
          <Divider orientation="vertical" width={5} />
          <Button
            onPress={this.showForm}
            title="Ajouter une critique"
          />
          <Divider orientation="vertical" width={5} />
          <Button
            onPress={this.showMovies}
            title="Les critiques de films"
          />
        </View>
        {widget}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    fontWeight: "200",
    padding: 5,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  label: {
    marginTop: 10,
    padding: 5,
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
  },
});