var React = require('react'),

    Item;

Item = React.createClass({
    render: function () {
        var album = this.props.album;
        return <li className="album">
          <div className="album__inner">
            <h2>{album.name}</h2>
            <img src={album.images[0].url} alt="" />
            <span>Available in {album.available_markets.length} markets</span>
          </div>
       </li>;
    }
});

module.exports = Item;
