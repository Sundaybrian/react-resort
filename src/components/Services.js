import React, { Component } from "react";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaBeer />,
        title: "free beer",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, sed?",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, sed?",
      },
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, sed?",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, sed?",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
