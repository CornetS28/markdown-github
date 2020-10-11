import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { Button } from "semantic-ui-react";
import Button from "@material-ui/core/Button";


class Logout extends Component {
  state = {
    navigate: false,
  };

  logout = () => {
    localStorage.clear("token");
    this.setState({ navigate: true });
  };

  logInOrOut = () => {
     if (this.state.navigate) {
       return <div>Please log in</div>;
     } else {
       return (
         <Button onClick={this.logout} style={{ color: "#fff" }}>
           Log Out
         </Button>
       );
     }
    
  };

  render() {
    const { navigate } = this.state;
    // if (navigate) {
    //   return <div>Please log in</div>;
    
    // }

    return (navigate !== false ? (
      <div>Please log in</div>
    ) : (
      <Button onClick={this.logout} style={{ color: "#fff" }}>
        Log Out
      </Button>)
    );
  }
}

export default Logout;