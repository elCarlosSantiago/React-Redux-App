import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getDog} from './../actions/picActions'

export const DogPic = (props) => {


    return (
        <div className='img-container'>
            <img alt='random dog' src={props.imgUrl}/>
        </div>
    )
}

const mapStateToProps = state => {
    return({
        imgUrl: state.picReducer.imgUrl,
        joke: state.jokeReducer.joke
    })
}


export default connect(mapStateToProps, {getDog})(DogPic)
