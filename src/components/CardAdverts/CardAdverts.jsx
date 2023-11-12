import React from 'react'
import { Card } from './CardAdverts.styled';

const CardAdverts = ({ children, customKey }) => {

    return (
        <Card key={customKey}>
            {children}
        </Card>
    )
};

export default CardAdverts;