import React, { Component } from "react";
import WireCharacterCard from "./components/WireCharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./wirecharacters.json";
import Header from "./components/Header";


class App extends Component {
  state = {
    characters
  };

  filterCharacter = location => {
    const characters = this.state.characters.filter(character => character.location === location);
    this.setState({ characters });
  };

  sortCharacter = episodecount => {
    const characters = this.state.characters.sort(function(a,b) {
      return b.episodecount - a.episodecount;
    })
    this.setState({ characters });
  };

  render() {
    return (
      <Wrapper>
        <Title>The Wire Directory</Title>
        <Header></Header>
        {this.state.characters.map(character => (
          <WireCharacterCard
            filterCharacter={this.filterCharacter}
            sortCharacter={this.sortCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            location={character.location}
            image={character.image}
            episodecount={character.episodecount}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
