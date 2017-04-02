import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { Modal, GameListManager } from '../components';
import * as gamesActionCreators from '../actions/games';

class GamesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedGame: {}, searchBar: '' };

    this.toggleModal = this.toggleModal.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    this.props.gamesActions.getGames();
  }

  deleteGame(id) {
    fetch(`http://localhost:8080/games/${id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    .then(response => response.json())
    .then((response) => {
      this.setState({ games: this.state.games.filter(game => game._id !== id) });
      console.log(response.message);
    });
  }

  setSearchBar(event) {
    this.setState({ searchBar: event.target.value.toLowerCase() });
  }

  toggleModal(index) {
    this.setState({ selectedGame: this.state.games[index] });

    $('#game-modal').modal();
  }

  render() {
    const { selectedGame, searchBar } = this.state;
    const { games } = this.props;

    return (
      <div>
        <Modal game={selectedGame} />
        <GameListManager
          games={games}
          searchBar={searchBar}
          setSearchBar={this.setSearchBar}
          toggleModal={this.toggleModal}
          deleteGame={this.deleteGame}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.getIn(['games', 'list'], Immutable.List()).toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gamesActions: bindActionCreators(gamesActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
