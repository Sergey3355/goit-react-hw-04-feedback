import { useState } from 'react';

import Container from './Container';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

 const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const onLeaveFeedback = (even) => {
    switch(even){
      case "good":
        setGood(prevGood => prevGood + 1);
          break;
        case "neutral":
        setNeutral(prevNeutral => prevNeutral + 1);
          break;
        case "bad":
        setBad(prevBad => prevBad + 1);
          break;
        default:
          return;           
    }
  };

  const countTotalFeedback = () =>{
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
      return Math.round((good / countTotalFeedback()) * 100) || 0 
  };


    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={onLeaveFeedback} />

        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification messege="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }


export default App