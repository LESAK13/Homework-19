import React, { Component } from "react";
import WireCharacterCard from "./components/WireCharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./wirecharacters.json";


class App extends Component {
  state = {
    characters
  };

  filterCharacter = location => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.location === location);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  sortCharacter = episodecount => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.sort(function(a,b) {
      return b.episodecount - a.episodecount;
    })
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  render() {
    return (
      <Wrapper>
        <Title>The Wire Directory</Title>
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
