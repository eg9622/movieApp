import React, {Component} from "react";
import './App.css';
import Movie from './Movie';


class App extends Component{

  state={}
  /*
  async, await
   fetch로 받아온 데이터와 그걸 처리하는 then들을 더욱 간결하고 명료하게 만들어주는 도구
   fetch와 then을 사용해서 일일이 모든 동작을 지정해주지 않고,
   fetch가 끝난 다음 바로 실행시킬 것들을 지정할 수 있게 만드는 tool

   async: 이전라인의 작업이 끝날때까지 기다리징 낳고 실행 될 작업
   await: 해당 기능이 끝나는 것을 기다리고, 바로 실행

   fetch(주소).then(a => a.json()).then(b => b...).then(...)
   */
  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(b => b.json())
    .then(c => c.data.movies)
    .catch(err => console.log(err));  //err가 났을때 catch
  }

  _getMovies = async () =>{
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  //5초뒤에 새로운 영화가 추가되기
  componentDidMount(){ 
     
      this._getMovies()
  }
  
  //랜더링 function
  _renderMovies =() =>{
    const movies=this.state.movies.map((x,index)=>{
      return <Movie 
      title={x.title} 
      poster={x.medium_cover_image} 
      key={index}
      genres={x.genres}
      synopsis={x.synopsis}/>
    });
    return movies;
  }


  render(){
    return (
      <div className = "App">
     
      {
        //this.state.movies가 있을땐 _renderMovies 실행
        //state가 비어있는 상황일땐 loading...문구
        this.state.movies ? this._renderMovies() : 'Loading'
        /*
        if(this.tate.movie){
          this._renderMovies()
        }else{
          loading
        }
         */
      }
      </div>
    );
  }//render

}

//하나의 컴포넌트는 반드시 하나의 render함수를 가짐.
export default App; 
  //내보내는 것. 내보내줘야 index.js에서 가져갈 수 있음.
  //default를 붙이면 이파일 전체를 내보내겠다는 것. 