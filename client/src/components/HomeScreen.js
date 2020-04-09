import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
      backgroundColor
      borderWidth
      borderColor
      borderRadius
      padding
      margin
    }
  }
`;

class HomeScreen extends Component {

    render() {
        return (
            <Query pollInterval={500} query={GET_LOGOS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    return (
                        <div className="container row">
                            <div className="col s4" style={{ color: "white", textAlign: "center" }}>
                                <h3 style={{ fontSize: "5rem", textAlign: "center", margin: "1.9466666667rem 0 1.168rem 0" }}>YOUR LOGOS</h3>
                                {data.logos.sort((a, b) => new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()).map((logo, index) => (
                                    <div key={index} className='home_logo_link'
                                        style={{ cursor: "pointer" }}>
                                        <Link to={`/view/${logo._id}`}>
                                            <div className='home_logo_link' style={ {cursor: "pointer", backgroundColor: "#26a69a", color: "white", borderStyle: "solid", borderColor: "#546e7a",
                                            textAlign: "center", textOverflow: "ellipsis", overflow: "hidden", fontSize: "1.5rem"} }>{logo.text}</div></Link>
                                    </div>
                                ))}
                            </div>
                            <div className="col s8">
                                <div id="home_banner_container">
                                    goLogoLo Maker
                                </div>
                                <br></br>
                                <div style={{ textAlign: "center" }}>
                                    <Link id="add_logo_button" to="/create"><button class="btn btn-primary btn-lg" type="submit" style={{backgroundColor: "#26a69a"}}>CREATE A NEW LOGO</button></Link>
                                </div>
                            </div>
                        </div>
                    );
                }
                }
            </Query >
        );
    }
}

export default HomeScreen;
