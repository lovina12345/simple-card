import { Component } from 'react'
import Description from './Description'
import Image from "./images"
import Title from "./Title"
import pic from '../images/love.jpg'


class simplecard extends  Component {

    render() {

        return (
    <div className = 'card-body'>
            <div className= 'img-box'>
                <Image url={pic} style = {{width: '100%'}}/>
            </div>
            <div>
                <div className = 'title-box'>
                 <Title title= "love simplecard"/>
                 </div>
                 <div className ='des-box' >
            <Description desc ="my description goes here" />
            </div>
        </div>
    </div>

        )
    }
}

export default simplecard;