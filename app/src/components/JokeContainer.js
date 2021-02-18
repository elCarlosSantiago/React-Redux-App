import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoke } from './../actions/jokeActions';

function JokeContainer(props) {
  const { getJoke, joke, isFetching, error } = props;
  useEffect(() => {
    props.getJoke();
  }, []);

  const handleClick = () => {
    props.getJoke();
  };

  return (
    <section>
      <h2>Daily dose of Kneeslappery</h2>
      <button onClick={handleClick}>Slap Knee!</button>
      {isFetching && <p>Protect your knees, slapper incoming...</p>}
      <p>{props.joke}</p>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    joke: state.jokeReducer.joke,
    jokeId: state.jokeReducer.jokeId,
    isFetching: state.jokeReducer.isFetching,
    error: state.jokeReducer.error,
  };
};

export default connect(mapStateToProps, { getJoke })(JokeContainer);
