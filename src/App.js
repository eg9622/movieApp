import React, {Component} from "react";
import './App.css';
import Movie from './Movie';


class App extends Component{

  state={
    movies:[
        {
          title: '타이타닉',
          poster:'http://image.cine21.com/resize/cine21/poster/2018/0102/17_50_39__5a4b47df43cd9[X230,330].jpg'
        },
        {
          title:'극한직업',
          poster:'http://image.cine21.com/resize/cine21/poster/2019/0129/14_35_36__5c4fe6280c438[X230,330].jpg'
        },
        {
          title:'컨저링',
          poster:'http://image.cine21.com/resize/cine21/poster/2013/0902/10_10_02__5223e56a44558[X230,330].jpg'
        },
        {
          title:'도둑들',
          poster:'http://image.cine21.com/resize/cine21/poster/2012/0629/09_53_58__4fecfca6a36e3[X230,330].jpg'
        }
    ]
  }

  //5초뒤에 새로운 영화가 추가되기
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies:[
          ...this.state.movies,
          {
            title:'스파이더맨',
            poster:'http://image.cine21.com/resize/IMGDB/still/2004/0524/large/142849_01[X230,330].jpg'
          }
          
        ]
      })
    },5000)
  }
  
  render(){
    return (
      <div className = "App">
     
      {
        this.state.movies.map((x,index)=>{
          return <Movie title={x.title} poster={x.poster} key={index}/>
        })
      }
      </div>
    );
  }//render

}

//하나의 컴포넌트는 반드시 하나의 render함수를 가짐.
export default App; 
  //내보내는 것. 내보내줘야 index.js에서 가져갈 수 있음.
  //default를 붙이면 이파일 전체를 내보내겠다는 것. 