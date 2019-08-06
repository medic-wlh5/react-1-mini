import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      friends: [],
      picture: '',
      name: ''
    }
  
  }

  updatePicture=(value)=>{
    this.setState({
      picture: value
    })
  }

  updateName=(value)=>{
    this.setState({
      name: value
    })
  }

  addFriend=()=>{
    const {picture, name, friends}= this.state
    let newFriend= friends.slice()
    newFriend.push({picture, name})
    this.setState({
      friends: newFriend,
      picture: '',
      name: ''
    })


  }

//[{name:'Cate', picture: 'aahkdfui'}]

  render(){
    const mappedFriends= this.state.friends.map((friend, i)=>{
      return <div key={i}>
        <img alt='img' src={friend.picture}></img>
        <span>{friend.name}</span>
      </div>
    })
    console.log(this.state)
  return (
    <div className="App">
      <span>Picture</span>
     <input placeholder='picture' onChange={(e)=> this.updatePicture(e.target.value)} value={this.state.picture}></input>
     <span>Name</span>
     <input placeholder='name' onChange={(e)=>this.updateName(e.target.value)} value={this.state.name}></input>
     <button onClick={()=>this.addFriend()}>Add Friend</button>
     {mappedFriends}
    </div>
  

  );
  }
}

export default App;
