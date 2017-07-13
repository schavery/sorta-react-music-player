import React, { Component } from 'react';
import Cell from 'fixed-data-table';

class Track extends Component {
  render() {
    return (
      <Cell className="track-item">
        <span className="track-title">{this.props.title}</span>
        <span className="track-artist">{this.props.artist}</span>
        <span className="track-length">{this.props.length}</span>
      </Cell>
    );
  }
}

export default Track;