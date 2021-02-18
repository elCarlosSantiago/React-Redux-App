import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoke } from './../actions/jokeActions';
import { getDog } from './../actions/picActions';

function JokeContainer(props) {
  const { isFetching } = props;
  useEffect(() => {
    props.getJoke();
    props.getDog();
  }, []);

  const handleClick = () => {
    props.getJoke();
    props.getDog();
  };

  return (
    <section className="joke-section">
      <button onClick={handleClick}>Slap Knee!</button>
      {isFetching ? (
        <p>Protect your knees, slapper incoming...</p>
      ) : (
        <p>{props.joke}</p>
      )}
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

export default connect(mapStateToProps, { getJoke, getDog })(JokeContainer);
