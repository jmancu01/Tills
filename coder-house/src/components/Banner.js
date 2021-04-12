import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

class Banner extends Component {
  state = {
    items: [
      {id: 1, url: "data:image/jpeg;base64,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"},
      {id: 2, url: 'data:image/jpeg;base64,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'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <div key={item.id}><img src={item.url} alt='imagen'></img></div>)}
      </Carousel>
    )
  }
}
export default Banner;