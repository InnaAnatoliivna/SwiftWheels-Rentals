import React from 'react';
import Button from '../Button/Button';

const LoadMoreButton = ({ onLoadMore }) => {

    const handleLoadMore = async (event) => {
        event.preventDefault();
        onLoadMore();
    };

    return (
        <Button onClick={handleLoadMore}>Load more</Button>
    );
}


export default LoadMoreButton;
