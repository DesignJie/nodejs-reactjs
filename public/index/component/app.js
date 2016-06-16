export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name : 'react app',
      data : {}
    }
  }
  componentDidMount () {
    console.log('did');
    console.log(this.state);
  }
  componentWillMount(){
    console.log('mount');
    var _self = this;

    fetch('/api/api',{ method : 'POST'})
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      _self.setState({data : data});
      console.log('fecth end');
    })
    .catch((err) => {
      console.log(err);
    });
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
    console.log('reader')
    return (
      <div>
      {this.state.name}
      <p>{this.state.data.data}</p>
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