import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setPerPage } from '../../redux/reducers/paginationSlice';
import Button from '../Button/Button';
// import { selectCurrentPage, selectPerPage } from '../../redux/selectors';
// import { getNextPageAdverts } from '../../redux/operations';
// import { setCurrentPage, setPerPage } from '../../redux/reducers/paginationSlice';

const LoadMoreButton = ({ onLoadMore }) => {


    // const dispatch = useDispatch();
    // const perPage = useSelector(selectPerPage);
    // const currentPage = useSelector(selectCurrentPage);

    const handleLoadMore = async (event) => {
        onLoadMore();
        // event.preventDefault();
        // dispatch(setCurrentPage(currentPage + 1));
        // await dispatch(setPerPage(perPage + 12));

        // dispatch(getNextPageAdverts());
    };


    return (
        // perPage <= dataAdverts.length && <Button onClick={handleLoadMore}>Load more</Button>
        <Button onClick={handleLoadMore}>Load more</Button>
    );
}


export default LoadMoreButton;
