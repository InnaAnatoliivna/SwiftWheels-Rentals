import React from 'react'
import Button from '../Button/Button'
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
        <div>
            {/* {isLoader && <Loading />} */}
            <img src={img} alt='rental car' width='401' />
            <p>{make}<span>{model}</span>,{year}</p>
            <span>{rentalPrice}</span>
            <ul>
                <li>{address[3]} |</li>
                <li>{address[4]} |</li>
                <li>{rentalCompany} |</li>
                <li>{model} |</li>
                <li>{type} |</li>
                <li>{id} |</li>
                <li>{shortestFunctionality}</li>
            </ul>
            <Button>Learn more</Button>
        </div>
    )
}

export default AdvertContent