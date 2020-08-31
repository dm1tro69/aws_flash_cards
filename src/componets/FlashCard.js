import React, {Component} from 'react'
import RandomWeighted from "./RandomWeighted";
import RegularCard from "./RegularCard";
import MultiCard from "./MultiCard";

import axios from 'axios'

export default class FlashCard extends Component{

    componentDidMount() {
        this.newCard()
    }

    state = {
        flipClass: '',
        questionData: ''
    }
    apiHostRoot = `https://aws-services.robertbunch.dev/services`

    flip = () => {
         let newFlip = this.state.flipClass === '' ? 'flip' : ''
        this.setState({flipClass: newFlip})
    }

    newCard = () => {
        let path

        const cardStyle = this.props.cardStyle
        if((cardStyle === 'Random') || (cardStyle === 'Regular')){
            path = this.apiHostRoot + '/all'
        }else if (cardStyle === 'Weighted'){
            path = this.apiHostRoot + '/weighted'
        }else{
            path = this.apiHostRoot + '/multi'
        }
        axios.get(path)
            .then((resp)=> {
                this.setState({questionData: resp.data})
            })

    }

    render() {
        return(
            <div>
                <div className={'row align-items-center card-holder'}>
                    <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
                        <RegularCard questionData={this.state.questionData}/>
                    </div>

                </div>
                <button onClick={this.newCard} className={'btn btn-primary btn-lg'}>Next Question!</button>

            </div>
        )
    }

}