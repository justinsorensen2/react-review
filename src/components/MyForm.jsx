import React from 'react'

export default class MyForm extends React.Component {
  state = {
    name: '',
    age: '',
    rememberMe: true,
    title: 'Mr.',
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleChangeAge = (e) => {
    this.setState({ age: e.target.value })
  }

  handleCheck = (e) => {
    this.setState({ rememberMe: e.target.checked })
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleSubmit = (e) => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <select value={this.state.title} onChange={this.handleTitle}>
          <option value="Mr.">Mr.</option>
          <option value="Miss">Miss</option>
          <option value="Ms.">Ms.</option>
          <option value="Mrs.">Mrs.</option>
        </select>
        Name: <input value={this.state.name} onChange={this.handleChange} />{' '}
        <br />
        Age: <input value={this.state.age} onChange={this.handleChangeAge} />
        Remember Me?{' '}
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheck}
        />
        <br />
        <button onClick={this.handleSubmit}>SUBMIT</button>
      </div>
    )
  }
}
