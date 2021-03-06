import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {profile: []};
  }

  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "billings"}})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      this.setState({profile:[data]});
    });
  }

  render() {
    return (
      <div> 
        <h2>Your Contacts</h2>
        { 
        this.state.profile.map((value, index) => {
          return <h1 key={index}> {value.count}</h1>
        })
       }
      </div>
    );
  }
}

export default Profile;