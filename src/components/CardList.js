import React, {Fragment} from 'react'
import Card from './Card'

const CardList = ({ robots }) => {

    return(
        <Fragment>
            {
                robots.map((robot, i) => {
                    return (
                        <Card
                            key={ i }
                            id={ robot.id }
                            name={ robot.name } 
                            email={ robot.email }
                        />
                    )
                })
            }
        </Fragment>
    )
}

export default CardList;