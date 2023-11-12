import React from 'react'
import CardAdverts from '../../components/CardAdverts/CardAdverts'
import AdvertContent from '../../components/AdvertContent/AdvertContent'
import AddToFavoritesButton from '../AddToFavoritesButton/AddToFavoritesButton'
// import { useSelector } from 'react-redux'
// import { selectAdverts } from '../../redux/selectors'
import { Flex, Wrapper } from './AdvertsList.styled'

const AdvertsList = ({ adverts }) => {

    // const dataAdverts = useSelector(selectAdverts);

    return (
        <Flex>
            {adverts.map(item => {
                return (
                    <Wrapper>
                        <CardAdverts customKey={item.id}>
                            <AdvertContent advert={item} />
                            <AddToFavoritesButton
                                advertId={item.id}
                            />
                        </CardAdverts>
                    </Wrapper>)
            })}
        </Flex>
    )
}

export default AdvertsList