import React from 'react'

export default class ImageSlider extends React.Component {
  state = {
    images: [
      'https://www.hitc.com/static/uploads/hitcn/1812/when_will_ff7_remake_part_2_come_out_1541315.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRAHycIhXzNXV1Urf4g5EhuF5ojZsaT9dzrZumCB2wdZLbG0l&s',
      'https://gh.cdn.sewest.net/assets/ident/news/heroes-gather-new-final-fantasy-vii-remake-key-art/en_US/FFVIIR_Key_Art_1920x1080-header.jpeg?quality=65',
      'https://gamespot1.cbsistatic.com/uploads/original/1593/15930215/3551640-3551597-ffviir_june_screenshots_14_1561027404.jpg',
    ],
    idx: 0,
  }

  handleNext = () => {
    this.setState({
      idx: this.state.idx + 1,
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              idx: this.state.idx - 1,
            })
          }}
        >
          LAST
        </button>
        <img
          style={{
            width: 200,
            height: 200,
          }}
          src={this.state.images[this.state.idx]}
        />
        <button onClick={this.handleNext}>NEXT</button>
      </div>
    )
  }
}
