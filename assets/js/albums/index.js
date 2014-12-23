var React = require('react'),
    $     = require('jquery'),

    Item  = require('./item'),

    List;

List = React.createClass({
    getInitialState: function () {
        return { posts: [] };
    },
    componentDidMount: function () {
        this.fetchLatestAlbums();
    },
    componentWillReceiveProps: function(nextProps) {
      this.fetchLatestAlbums(nextProps);
    },
    fetchLatestAlbums: function (nextProps) {
        nextProps = nextProps || {query: this.props.query};

        $.ajax({
            url:       'https://api.spotify.com/v1/search',
            data:      {
              q: nextProps.query,
              type: 'album'
            },
            success: function (result) {
                this.setState({ posts: result.albums.items });
            }.bind(this),
            error: function (e) {
                console.log('error getting posts. please try again later');
            }
        });
    },
    render: function () {
        return <ul query={this.props.query}>
            <h1>{this.props.query}</h1>

            {this.state.posts.map(function (album) {
                return <Item key={album.id} album={album}/>
            })}
        </ul>;
    }
});

module.exports = List;
