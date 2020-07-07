import React, { Component } from 'react';
import SearchName from '../SearchComponent';
import ImageComponent from '../ImageComponent';
import axios from 'axios';

class MainContainer extends Component {
    constructor(){
        super();
        this.state = {
            dataCharacter : null,
        }
    }
    componentWillMount(){
        this.getCharacterData();
    }

    getCharacterData = () =>{
        axios.get(`https://rickandmortyapi.com/api/character/2`)
        .then(data =>{
            this.setState({dataCharacter: data.data});
        });
    }
    render(){
        return(
            <div className="mainContainer">
                <div className="headerDiv">RICK AND MORTY WANTED CHARACTERS</div>
                <SearchName />
                <ImageComponent data={this.state.dataCharacter}  />
            </div>
        );
    }   
}

export default MainContainer;