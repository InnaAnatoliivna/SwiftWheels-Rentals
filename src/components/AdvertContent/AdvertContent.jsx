import React from 'react'
import Button from '../Button/Button'
import { FlexList, WrappImg, Wrapper } from './AdvertsContent.styled';
// import { useSelector } from 'react-redux'
// import { selectLoadingAdverts } from '../../redux/selectors'
// import Loading from '../Loading/Loading'

const AdvertContent = ({ advert }) => {
    // const isLoader = useSelector(selectLoadingAdverts);

    const {
        img,
        make,
        year,
        model,
        rentalPrice,
        address,
        rentalCompany,
        type,
        id,
        functionalities
    } = advert;

    const shortestFunctionality = functionalities.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    }, functionalities[0]);

    return (
        <Wrapper>
            {/* {isLoader && <Loading />} */}
            <WrappImg><img src={img} alt='rental car' /></WrappImg>
            <p>{make}<span className='accent'>{model},</span>{year}
                <span className='price'>{rentalPrice}</span>
            </p>
            <FlexList>
                <li>{address[3]}  |</li>
                <li>{address[4]}  |</li>
                <li>{rentalCompany}  |</li>
                <li>{model}  |</li>
                <li>{type}  |</li>
                <li>{id}  |</li>
                <li>{shortestFunctionality}</li>
            </FlexList>
            <Button>Learn more</Button>
        </Wrapper>
    )
}

export default AdvertContent