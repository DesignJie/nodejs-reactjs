import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router';

import '../css/common.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(0);
    this.state = {
      name : 'react app'
    }
  }
  componentDidMount () {
    console.log('mount');
  }
  componentWillUnmount () {
    console.log('un mount');
  }
  data(){
    return {
      name : 'reactjs data'
    }
  }
  render() {
    console.log(1);
    return (
      <div>
      {name}
        <ul>
         <li><Link to="/hello">hello</Link></li>
         <li><Link to="/name">name</Link></li>
         <li><Link to="/name/detail">home detail</Link></li>
        </ul>
        <NoMatch />
      </div>
    )
  }
}

class Hello extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props = {
      age : 24,
      name : '123'
    }
    console.log(123);
  }
  render() {

    return (
      <div>Hello {this.props.name},age {this.props.age}</div>
    );
  }
  componentDidMount(){
    console.log(3);
  }
}

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '林辉',
      arr : [{ id : 1, name : 'react'}, {id : 2, name : 'angularjs'}, {id : 3, name : 'vuejs'}]
    }
  }
  changeName(){
    this.setState({name:'林杰'});
  }
  changeArr(){
    var newItems = this.state.arr.concat([{id : 4, name : 'backbone'}]);
    this.setState({arr : newItems})
  }
  render(){
    return (
      <div>
        <ul>
          {
            this.state.arr.map((items,i) =>{
              return <li key={i}>{items.name}</li>
            })
          }
        </ul>
        <div className="demo" onClick={this.changeName.bind(this)}>my name is {this.state.name}</div>
        <button onClick={this.changeArr.bind(this)}>changeArr</button>
      </div>

    )
  }
}

class NoMatch extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
          404
          <div>
            <Link to="/">hello</Link>
          </div>
      </div>)
  }
}

class User extends React.Component {
   constructor(props) {
     super(props);
   }
   render(){
     return <div>{this.props.params.userId}</div>
   }
}

class detail extends React.Component {
  constructor(props) {
    super(props)
  }
  changeAnimate(){
    console.log(1);
  }
  render(){
    return (
      <div>
        <p>home detail</p>
          <h1>Fading at Initial Mount</h1>
        <button onClick={this.changeAnimate.bind(this)}>动画</button>
      </div>
    )
  }
}

render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='hello' component={Hello} />
    <Route path='name'>
      <IndexRoute component={Name}/>
      <Route path ="detail" component={detail} />
    </Route>
    <Route path='user/:userId' component={User} />
    <Route path='*' component={NoMatch} />
  </Router>,
  document.getElementById('app')
);