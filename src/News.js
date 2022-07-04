import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country:'us',
    pageSize:3,
    category:'general'

  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:true,
      page:1  ,
      totalResults:0    
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-Newsmonkey`
  }
  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    
    this.setState({articles: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
  }
  async componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7eea8bb58dda43b78f524d7a9eb29836&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();
    
    // this.setState({articles: parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // })
    this.updateNews()
  }
  
  handlePrevClick= async()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7eea8bb58dda43b78f524d7a9eb29836&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();    
    // this.setState({
    //   page:this.state.page - 1,
    //   articles:parsedData.articles,
    //   loading:false
    // })
    this.setState({
      page:this.state.page-1
    })
    this.updateNews()
    
  }
  handleNextClick= async()=>{
    // if(!(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6aa42379f4f24d6bad9fa9412b971f14&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();     
    // this.setState({
    //   page:this.state.page + 1,
    //   articles:parsedData.articles,
    //   loading:false
    // })
    this.setState({
      page:this.state.page+1,
    })
    this.updateNews()
  
  }
    fetchMoreData = async () => {
      this.setState({
        page:this.state.page+1,
      })
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    
    let data=await fetch(url);
    let parsedData=await data.json();
    
    this.setState({articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
      
    })

    };
  
  
  render() {
    return (
      
      <div className="container my-3">
        <h2 className="text-center">NewsTarek- {this.capitalizeFirstLetter(this.props.category)} Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
        > 
        <div className="container">
        <div className="row">
          {this.state.articles.map((element,index)=>{
            return <div className="col-md-4"  key={index} >
             <Newsitems title={element.title?element.title.slice(0,20):""} description={element.description?element.description.slice(0,85):""} imageUrl={element.urlToImage} newsUrl={element.url}
             author={element.author} date={element.publishedAt} source={element.source.name}/>
           </div>
          })}
          
          </div>
          </div>
          </InfiniteScroll>  
        </div>
      
        
    );
  }
}

export default News;
