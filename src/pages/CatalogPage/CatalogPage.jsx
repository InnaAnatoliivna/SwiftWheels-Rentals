import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import AdvertsList from '../../components/AdvertsList/AdvertsList'
import { useDispatch, useSelector } from 'react-redux'
import { selectAdverts, selectCurrentPage, selectLoadingAdverts, selectNextAdverts, selectPerPage } from '../../redux/selectors'
import { fetchAdverts, getNextPageAdverts } from '../../redux/operations'
import Loading from '../../components/Loading/Loading'
import LoadMoreButton from '../../components/LoadMore/LoadMore'
import { setCurrentPage } from '../../redux/reducers/paginationSlice'
// import { setItems } from '../../redux/reducers/advertsSlice'
// import { setCurrentPage, setPerPage } from '../../redux/reducers/paginationSlice'
// import { setCurrentPage, setPerPage } from '../../redux/reducers/paginationSlice'

const CatalogPage = () => {
    const dispatch = useDispatch();
    const dataAdverts = useSelector(selectAdverts);
    const dataNextAdverts = useSelector(selectNextAdverts);
    const isLoader = useSelector(selectLoadingAdverts);
    const currentPage = useSelector(selectCurrentPage);
    const perPage = useSelector(selectPerPage);
    useEffect(() => {
        const getDataAdverts = async () => {
            try {
                await dispatch(fetchAdverts())
            } catch (error) {
                console.error("Error fetching adverts: ", error);
            }
        };
        getDataAdverts();
    }, [dispatch, currentPage, perPage]);

    const [resultsAdverts, setResultsAdverts] = useState(null);

    // console.log('ADVERS :', dataAdverts, resultsAdverts)

    const onLoadMore = async () => {
        // event.preventDefault();
        dispatch(setCurrentPage(currentPage + 1));

        await dispatch(getNextPageAdverts());
        // if (dataNextAdverts.length > 0) {
        setResultsAdverts([...dataAdverts, ...dataNextAdverts]);
        // }
    }
    console.log('NEXT ADVERS :', dataNextAdverts)
    // useEffect(() => {
    //     if (dataNextAdverts.length > 0) {
    //         setResultsAdverts([...dataAdverts, ...dataNextAdverts]);
    //     }
    // }, [dispatch, currentPage, perPage, dataNextAdverts, dataAdverts]);

    console.log('OURS RESULTS :', dataNextAdverts)


    // if (dataNextAdverts.length > 0) {
    //     setResultsAdverts([...dataAdverts, ...dataNextAdverts]);
    // }
    console.log('1 - page', resultsAdverts)

    return (
        <Container>
            {isLoader
                ? <Loading />
                : (<>
                    <AdvertsList
                        dataAdverts={resultsAdverts ? resultsAdverts : dataAdverts} />
                    {currentPage < 3 && <LoadMoreButton onLoadMore={onLoadMore} />}
                </>)
            }
        </Container>
    )
}

export default CatalogPage