import React from 'react';
import unsplash from './api/unsplash.js';
import SearchForm from './components/SearchForm.js';
import SearchList from './components/SearchList.js'

class App extends React.Component {
  state = {results: [], scrolling: false, total_pages: null, page: 1, term: null}
  onFormSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
      params:{
        query: term,
        per_page: 10,
        page: this.state.page
      } 
    })
    this.setState({
      results: [...this.state.results, ...response.data.results],
      total_pages: response.total_pages,
      term: term
    })
  }

  loadMore = () => {
    const {term} = this.state
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      () => this.onFormSubmit(term)
    );
  };

  handleScroll = () => { 
    var lastLi = document.querySelector("div.image-list > img:last-child");
    var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    var pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset+100 > lastLiOffset) {
         this.loadMore();
    }
  };

  componentWillMount() {
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }
 

  render(){
    return (
      <div className="ui container" style={{position: 'relative', top: '50px'}}>
        <SearchForm onSubmit={this.onFormSubmit}/>
        <SearchList items={this.state.results} />
      </div>
    )
  }
}

export default App;
