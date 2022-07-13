import React, { Component } from 'react'
import _ from 'lodash'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  onClick(item) {
    console.log(item)
    window.App.setState({ current: item })
  }

  render() {
    let item = this.props.item
    let venue
    if (!venue) venue = item.journal
    if (!venue) venue = item.booktitle
    if (!venue) venue = item.venue
    let author = item.authors
    if (author) {
      author = _.last(author.split(' '))
    }
    return (
      <div className="column" key={ this.props.key } onClick={ this.onClick.bind(this, item) }>
        <div className="paper-card ui raised link card">
          <div className="content">
            <div className="meta">
              <div className="left floated">
                <span className="date">{ item.year }</span>
              </div>
              <div className="right floated">
                <span className="date">{ `${author} et al.` }</span>
              </div>
            </div>
          </div>
          <div className="image">
            <img className="ui small image" src={ `/augmented-presentation/cover/${item.key}.jpg` } />
          </div>
          <div className="content main-content">
            <div className="description max-three-lines">
              <b>{ item.title }</b>
            </div>
            <div className="meta max-two-lines">
              { venue }
            </div>
          </div>
          <div className="extra content">
            <div className="right floated">
              <a className="ui mini button" href={ `https://doi.org/${item.doi}` } target="_blank">DOI</a>
              <a className="ui mini button" href={ item.paperUrl } target="_blank"><i class="fa-solid fa-paperclip"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Card