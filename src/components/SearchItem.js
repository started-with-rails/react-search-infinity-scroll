import React from 'react';

class SearchItem extends React.Component {
    constructor(props){
        super(props)
        this.ImageRef = React.createRef();
        this.state = { spans: null}
    }
    componentDidMount(){
        this.ImageRef.current.addEventListener('load', this.setSpan);
    }
    setSpan = () => {
        const height = this.ImageRef.current.clientHeight
        const spans  = Math.ceil(height/10);
        this.setState({spans: spans})
    }
    render(){
        const {urls, description} = this.props.image
        return <img style={{gridRowEnd: `span ${this.state.spans}`}} ref={this.ImageRef} className="ui image" src={urls.regular} alt={description}></img>
    }
}

export default SearchItem;