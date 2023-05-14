import React, { Component } from 'react';

import Button from './LinkButton';
import SubTitle from './SubTitle';

import "../assets/choice-box.css"

class ChoiceBox extends Component {
  render() {
    return (
      <div className="choice-box">
          <SubTitle subtitle={this.props.question} />

          {this.props.choices.map((choice, index) => (
            <span key={index}>
              <Button title={choice.title}
                      subTitle={choice.subTitle}
                      url={choice.url} />
            </span>
          ))}
      </div>
    );
  }
}

export default ChoiceBox;
