import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faDice, faDumbbell, faFileAlt, faFont} from "@fortawesome/free-solid-svg-icons";


library.add(faDumbbell)
library.add(faFont)
library.add(faFileAlt)
library.add(faDice)

const QuizType = (props) => {
    return(
        <li className={'col-sm-3 text-center'}>
            <div onClick={()=> props.userChoice(props.quizType)} className="nav-card">
                <FontAwesomeIcon icon={props.icon} size={'4x'}/>
                <span>{props.quizType}</span>
            </div>
        </li>
    )

}
export default QuizType