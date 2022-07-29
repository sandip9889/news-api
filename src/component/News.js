import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles=[]
  constructor(){ 
   
      
    super();
    console.log("hello i am a constructo  from news component");
    this.state = {
articles: this.articles,
loading: false
    }
  }

  async componentDidMount(){
    console.log("cdm")
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=8bb27947fd114ece9abbafe30260a699";
    let data = await fetch(url);
    let parsedData =await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
    
  }
  handlenextclick = async () =>{
    
  let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=8bb27947fd114ece9abbafe30260a699&page =${this.state.page+1}`;
  let data = await fetch(url);
  let parsedData =await data.json()
  console.log(parsedData);
  
this.setState({
  
  page: this.state.page +1,
  articles:parsedData.articles
})
  }
  handleprevclick = ()=> {
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=8bb27947fd114ece9abbafe30260a699&page =${this.state.page-1}`;
    // let data = await fetch(url);
    // let parsedData =await data.json()
    // console.log(parsedData);
    
  this.setState({
    
    page: this.state.page -1,
    // articles:parsedData.articles
  })
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
return <div className="col-md-4" key= {element.url}>
<NewsItem
  title={element.title?element.title.slice(0,45):""}
  description={element.description?element.description.slice(0,88):" "}
  imageurl={element.urlToImage}

  newsUrl ={element.url}
/>
</div>
        })}
          
         
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" class="btn btn-dark" >&larr; Previous</button>
<button  type="button" class="btn btn-dark" >Next &rarr;</button>
      </div>
      </div>

    )
  }
}

export default News;
