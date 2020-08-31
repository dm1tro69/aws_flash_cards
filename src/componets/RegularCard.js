import React from "react";

const RegularCard = (props) => {
    return(
        <div>
            <div className={'card-back'}>
                {props.questionData.service}
            </div>
            <div className={'card-front'}>
                <div>{props.questionData.desc}</div>
                <div>{props.questionData.cat}</div>
            </div>
        </div>
    )
}
export default RegularCard