import { createPortal } from 'react-dom'
import Backdrop from '../Backdrop/Backdrop'

import React from 'react'
import { Modal } from './ModalWindow.styled'

const ModalWindow = () => {

    console.log('Creating portal for ModalWindow');

    return createPortal(
        <Backdrop>
            <Modal></Modal>
        </Backdrop>,
        document.querySelector('#modal-root')
    )
}

export default ModalWindow