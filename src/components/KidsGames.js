import React, {Component} from 'react';
import Game from './Game';

// NPM Package that fetches JSONP, Wal-Mart has NO-CORS issue
import fetchJsonp from 'fetch-jsonp';

class KidsGames extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    }
  }

  componentDidMount() {
    fetchJsonp('http://api.walmartlabs.com/v1/search?apiKey=5q8hhdk3vxe8xu92m8c7ntrs&query=kids%20board%20games')
    .then(response => response.json())
    .then(data => {
      console.log(data.items);
      this.setState({games: data.items});
    })
    .catch((error) => {console.log(error)})
  };

  render() {

    const kids = this.state.games.map((game) => {
      return (
        <Game game={game} key={game.itemId} />
      );
    });

    return (
      <div>
        <div className="banner kidBanner">
          <h1>Kids Games</h1>
          <h1>fun for the family</h1>
        </div>
        <h3 className="productsBanner">Featured Products</h3>
        <section className="products">
          {kids}
        </section>
      </div>
    )
  }
}

export default KidsGames;
