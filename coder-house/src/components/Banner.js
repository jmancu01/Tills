import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../App.css'


class Banner extends Component {
  state = {
    items: [
      {id: 1, url: "https://images.pexels.com/photos/6009146/pexels-photo-6009146.jpeg?cs=srgb&dl=pexels-mary-taylor-6009146.jpg&fm=jpg"},
      {id: 3, url: "https://images.pexels.com/photos/6311158/pexels-photo-6311158.jpeg?cs=srgb&dl=pexels-monstera-6311158.jpg&fm=jpg", title: 'item #3'},
      {id: 4, url: "https://images.pexels.com/photos/374845/pexels-photo-374845.jpeg?cs=srgb&dl=pexels-burst-374845.jpg&fm=jpg", title: 'item #4'},
      {id: 5, url: "https://images.pexels.com/photos/1174370/pexels-photo-1174370.jpeg?cs=srgb&dl=pexels-alexandr-podvalny-1174370.jpg&fm=jpg", title: 'item #5'}
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel className = 'carousel'>
        {items.map(item => <div key={item.id}><img src={item.url} alt='imagen' ></img></div>)}
      </Carousel>
    )
  }
}
export default Banner;