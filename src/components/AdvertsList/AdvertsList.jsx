import React from 'react'
import CardAdverts from '../../components/CardAdverts/CardAdverts'
import AdvertContent from '../../components/AdvertContent/AdvertContent'
import { nanoid } from 'nanoid'

const AdvertsList = ({ dataAdverts }) => {
    return (
        dataAdverts.map((item) => {
            return (
                <CardAdverts key={nanoid()}>
                    <AdvertContent advert={item} />
                </CardAdverts>)
        })

    )
}

export default AdvertsList