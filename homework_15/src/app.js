import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import ColorItems from './features/ColorItems';
import Counter from './features/Counter';
import InputForm from './features/InputForm';
import SelectedColors from './features/SelectedColors';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: '',
            showItemColor: true,
            selectedColors: [],
            showColor: [],
            itemColor: []
        };
    };

    createList(item, id){
        return (
            <div key={item.id} >
                <ColorItems color={item.color} />
            </div>
        )
    };

    handleChange (elem){
        this.setState({ searchStr: elem.target.value }, function() {
        this.filterSearch();
        });
    };


    componentDidMount() {
        fetch('https://epam-fe-homework-15.firebaseio.com/colors.json')
        .then((response) => response.json())
        .then((data) => this.setState({ showColor: data, itemColor: data }));
    };

    filterSearch() {
        let searchStr = this.state.searchStr,
            colors = [];
            
        let showColors = this.state.itemColor.filter(function (el) {
            if(el.tags.toString().match(searchStr)){
            colors.push(el);
        };
        })
        this.setState({ showColor: colors})
    };

    render() {
        let color = this.state.showColor;

        return (
            <div className = "">
                <div className = "header">
                    <InputForm onChange = {this.handleChange.bind(this)}/>
                    <SelectedColors showItemColor = {this.state.showItemColor} color={this.state.selectedColors}/>
                    <Counter length = {this.state.showColor.length} />
                </div>
                <div className = "color-box">
                    {color.map(this.createList)};
                </div>
            </div>
        )
    };
};

export default hot(module)(App);