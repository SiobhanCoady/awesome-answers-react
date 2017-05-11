import React from 'react';
import { getQuestions } from '../utilities/requests';

class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    getQuestions()
      .then((questions) => {
        this.setState({
          questions: questions
        });
      });
  }

  _renderQuestions() {
    return this.state.questions.map(function(question) {
      return <div key={question.id}>{question.title}</div>
    });
  }

  render() {
    return (
      <div className="QuestionsIndex">
        <h1>Questions Index</h1>
        { this._renderQuestions() }
      </div>
    );
  }
};

export default QuestionsIndex;
