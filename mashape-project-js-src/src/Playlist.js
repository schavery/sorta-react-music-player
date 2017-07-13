import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import moment from 'moment';

const TitleCell = ({rowIndex, data, ...props}) => {
  var title = data[rowIndex].title[0] || 'Untitled Track';

  return (
    <Cell {...props}>
      <div className="track-title">
        {title}
      </div>
    </Cell>
  )
};

const ArtistCell = ({rowIndex, data, ...props}) => {
  var artist = data[rowIndex].artist[0] || 'Unknown Artist';

  return (
    <Cell {...props}>
      <div className="track-artist">
        {artist}
      </div>
    </Cell>
  )
};

const LengthCell = ({rowIndex, data, ...props}) => {
  var length = moment.duration(data[rowIndex].length * 1000);
  return (
    <Cell {...props}>
      <div className="track-length">
        {Math.round(length.asMinutes())}:{("00" + Math.round(length.seconds())).slice(-2)}
      </div>
    </Cell>
  )
};

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {tracklist: props.tracks};
  }

  render() {
    return (
      <Table
        rowsCount={this.state.tracklist.length}
        width={800}
        height={550}
        headerHeight={30}
        rowHeight={40}>
        <Column
          header={<Cell className="header">Track Title</Cell>}
          cell={<TitleCell data={this.state.tracklist} />}
          width={300}
        />
        <Column
          header={<Cell className="header">Track Artist</Cell>}
          cell={<ArtistCell data={this.state.tracklist} />}
          width={150}
        />
        <Column
          header={<Cell className="header">Track Length</Cell>}
          cell={<LengthCell data={this.state.tracklist} />}
          width={150}
        />
        </Table>
      );
  }
}

export default Playlist;
