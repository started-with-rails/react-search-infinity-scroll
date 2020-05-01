import React from 'react'

class  SearchForm extends React.Component{
		state = {searchTerm : ''}
		onSubmitForm = (e) => {
			e.preventDefault();
			this.props.onSubmit(this.state.searchTerm);
		}
    render(){
        return(
					<div className="ui segment">
						<form className="ui form" onSubmit={this.onSubmitForm}>
							<div className="field">
								<label>Search :</label>
								<input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})}/>
							</div>
						</form>
					</div>
        )
    }
}

export default SearchForm;