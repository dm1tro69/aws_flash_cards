import React from "react";

const MultiCard = (props) => {
    return(
        <div>
            <div className={'card-back'}>
                <div>AWS Service</div>
                <ul className={'multi'}>
                    options
                </ul>
            </div>
            <div className={'card-front'}>
                  multiChoice Answer
            </div>
        </div>
    )
}
export default MultiCard