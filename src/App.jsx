import React from 'react'
import Counter from './components/Counter'
import ImageSlider from './components/ImageSlider'

class App extends React.Component {
  state = {
    visible: true,
  }

  render() {
    const buttonText = this.state.visible
      ? 'HIDE IMG SLIDER'
      : 'SHOW IMG SLIDER'

    return (
      <>
        <Counter />

        {this.state.visible ? <ImageSlider /> : null}
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible })
          }}
        >
          {buttonText}
        </button>
      </>
    )
  }
}

export default App
