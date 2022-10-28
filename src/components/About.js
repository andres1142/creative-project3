import React from "react";
import {AboutImage} from './Images'


export default class About extends React.Component {

    render() {
        return (

            <div className={'about_paragraph'}>
                <AboutImage/>
                <div className="par_div">
                    This website I really good to help us keep track of our investments/expenses. When I was in college
                    I used to struggled a lot in terms of keeping my money under a budget. When I created this website, I had
                    in mind those hundreds of students who struggle as much as me.<br/><br/>

                    I will help you save as much money as I can since this is meant to help you see what your money goes. Once
                    you know where your money is going, you will be able to make smart expenses which will help you increase your net worth
                    over time.<br/><br/>

                    Now that we have this app. We can always work towards a better goals. Use this program and then
                    recommended to other students. We are going to create a culture were people are more aware of their
                    financial expenses. This will lead to a better generation of students!!<br/><br/>

                    Have a great time using the App!
                </div>
            </div>
        );
    }
}