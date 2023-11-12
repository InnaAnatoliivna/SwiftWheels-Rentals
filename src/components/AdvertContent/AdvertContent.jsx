import React from 'react'
import Button from '../Button/Button'
import { FlexList, WrappImg, Wrapper } from './AdvertsContent.styled';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';
import { selectIsOpenModal } from '../../redux/selectors';
import ModalWindow from '../ModalWindow/ModalWindow';
// import { useSelector } from 'react-redux'
// import { selectLoadingAdverts } from '../../redux/selectors'
// import Loading from '../Loading/Loading'

const AdvertContent = ({ advert }) => {
    const dispatch = useDispatch();
    const isOpenModal = useSelector(selectIsOpenModal);
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

    const handleOpenModal = () => {
        console.log('open modal')
        dispatch(openModal());
    }

    return (
        <Wrapper>
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
            <Button onClick={handleOpenModal}>Learn more</Button>
            {isOpenModal && <ModalWindow />}
        </Wrapper>
    )
}

export default AdvertContent