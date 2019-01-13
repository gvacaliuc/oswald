import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import icon from "../static/images/icon.svg";

class Home extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Head />
        <div className="center">
            <img className="icon" src={icon} />
            <span>Hi, I'm Oswald.</span>
        </div>
        <style jsx>{`
            @import url("https://use.typekit.net/eud4dzk.css");

            html, body {
                height: 100% !important;
                overflow: hidden !important;
            }

            .icon {
                display: block;
                margin: auto;
                padding-bottom: 1em;
            }

            .center {
                width: 100%;
                text-align: center;
                margin-top: 15%;
            }

            .center span {
                font-family: "Paralucent", sans-serif !important;
                font-size: 2rem;
                font-weight: bold;
            }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Home;
