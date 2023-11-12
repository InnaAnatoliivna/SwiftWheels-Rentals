import React from 'react'
import Container from '../../components/Container/Container'
import Loading from '../../components/Loading/Loading'
import { useSelector } from 'react-redux';
import { selectLoadingAdverts } from '../../redux/selectors';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import LoadMoreButton from '../../components/LoadMore/LoadMore';

const FavoritesPage = () => {
    const isLoader = useSelector(selectLoadingAdverts);

    return (
        <Container>
            {isLoader
                ? <Loading />
                : (<>
                    <AdvertsList />
                    <LoadMoreButton
                    // onLoadMore={onLoadMore} 
                    />
                </>)
            }
        </Container>
    )
}

export default FavoritesPage