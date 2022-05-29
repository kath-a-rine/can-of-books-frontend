import React from "react";
import { withAuth0} from "@auth0/auth0-react";
import axios from "axios";

class Content extends React.Component {
  
  getBooks = async () => {
    if (this.props.auth0.isAuthenticated) {
      
      const result = await this.props.auth0.getIdTokenClaims();

      const jwt = result.__raw;
      console.log(jwt);

      let url = `${process.env.REACT_APP_SERVER}/books`;
      const bookResults = await axios.get(url);
      console.log(bookResults.data);

    }
  }
    componentDidMount() {
      this.getBooks();
    }

  render() {

    return(
      <>
        <h3>Content Page</h3>
      </>
    )
    }
  
}

export default withAuth0(Content);