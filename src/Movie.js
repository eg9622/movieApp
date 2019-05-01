import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

/*
class Movie extends Component...
클래스형 컴포넌트
장점: state를 쓸 수 있음
    -componentDidMount(),
    -componentWillMount()...
단점: 코드가 복잡해짐

function Movie({poster1, poster2...})
함수형 컴포넌트(dumb component)
장점:코드가 단순함
단점:state가 없음
 */
function Movie({title, poster, genres, synopsis}){
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
            <p>
                {genres.map((y,index)=><MovieGenres genres={y} key={index}/>)}
            </p>
            <p>
            <LinesEllipsis
  text={synopsis}
  maxLine='3'
  ellipsis='...'
  trimRight
  basedOn='letters'
/>
            </p>
        </div>
    )
}

function MovieGenres({genres}){
    return(
        <span>{genres}</span>
    )
}
// class Movie extends Component{

//     static propTypes={
//         title:PropTypes.string.isRequired,
//         poster:PropTypes.string.isRequired
//     }
//     render(){
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//             )
//     }//render

// }
/*
component
-props : 부모로부터 받아오는 값(읽기전용)
-state: 각각의 컴포넌트가 가지는 객체
   state에 변경사항이 있을 때 마다
   component가 새로 랜더링 되기 때무내!!
 */

 function MoviePoster({poster}){
     return(
         <img src={poster} alt="Movie Poster"/>
     )
 }

// class MoviePoster extends Component{

    
//     static propTypes={
//         poster:PropTypes.string.isRequired
//     }

//     render(){
//       return <img src={this.props.poster}/>
//     }
  
//   }

Movie.propTypes={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}
MoviePoster.propTypes={
    poster:PropTypes.string.isRequired
}

export default Movie;