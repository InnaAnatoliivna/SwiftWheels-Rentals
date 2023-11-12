import React from 'react'
import CardAdverts from '../../components/CardAdverts/CardAdverts'
import AdvertContent from '../../components/AdvertContent/AdvertContent'
import AddToFavoritesButton from '../AddToFavoritesButton/AddToFavoritesButton'
import { useSelector } from 'react-redux'
import { selectAdverts } from '../../redux/selectors'
import { Wrapper } from './AdvertsList.styled'

const AdvertsList = () => {

    const dataAdverts = useSelector(selectAdverts);

    return (
        dataAdverts.map(item => {
            return (
                <Wrapper>
                    <CardAdverts key={item.id}>
                        <AdvertContent advert={item} />
                        <AddToFavoritesButton
                            advertId={item.id}
                        />
                    </CardAdverts>
                </Wrapper>)
        })
    )
}

export default AdvertsList