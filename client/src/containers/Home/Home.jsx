import React, { useState } from 'react';
import { StyledHome } from './StyledHome';
import { useSelector } from "react-redux";
import Card from '../../components/Card/Card';
import Buscador from '../../components/Buscador/Buscador';
import Filtro from '../../components/Filtro/Filtro';
import Ordenador from '../../components/Ordenador/Ordenador';
import ReactPaginate from 'react-paginate'
import Modal from '../../components/Modal/Modal';


function Home(props) {
    const [title, setTitle] = useState('');
    const [showNoResult, setShowNoResult] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showBreed, setShowBreed] = useState({})


    const breedsLoaded = useSelector(state => state.breedsLoaded);
    const filteredBreeds = useSelector(state => state.filteredBreeds);
    const loading = useSelector(state => state.loading);

    const [pageNumber, setPageNumber] = useState(0);

    const breedsPerPage = 10;
    const pagesVisited = pageNumber * breedsPerPage;

    function renderCards(array) {
        console.log(array)
        if (array.length === 0)
            return
        let filtered = array?.filter(b => b.name.toLowerCase().includes(title.toLocaleLowerCase()));

        const displayBreeds = filtered.slice(pagesVisited, pagesVisited + breedsPerPage);
        const pageCount = Math.ceil(filtered.length / breedsPerPage);

        function changePage({ selected }) {
            setPageNumber(selected);
        }
        return (
            <>
                <div className='cards-container'>
                    {
                        displayBreeds.length > 0
                            ?
                            displayBreeds.map((breed) => (
                                <Card key={breed.id} breed={breed} setShowModal={setShowModal} setShowBreed={setShowBreed} />
                            ))
                            :
                            <p> </p>
                    }
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </>
        )
    }
    return (

        <StyledHome>
            <Modal showModal={showModal} setShowModal={setShowModal} breed={showBreed} />
            <div className='buscador'>
                <Buscador setTitle={setTitle} />
            </div>

            <div className='container'>
                <div className='cards'>
                    { }
                    {
                        loading
                            ? <p>cargando</p>
                            :
                            showNoResult
                                ?
                                <h1> </h1>
                                :
                                filteredBreeds.length > 0
                                    ? renderCards(filteredBreeds)
                                    : renderCards(breedsLoaded)
                    }
                </div>
                <div className='filtro'>
                    <Ordenador />
                    <Filtro setShowNoResult={setShowNoResult} />
                </div>
            </div>
        </StyledHome>
    )
}

export default Home;