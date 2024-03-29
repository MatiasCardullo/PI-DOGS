import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFiltered } from '../../Redux/Actions';
import { StyledFiltro } from './StyledFiltro';
import axios from '../../axios';




function Filtro({ setShowNoResult }) {
    const [temps, setTemps] = useState([]);
    const [selectedTemp, setSelectedTemp] = useState('');
    const [arrayTemps, setArrayTemps] = useState([]);

    const breeds = useSelector(state => state.breedsLoaded);
    const dispatch = useDispatch();



    useEffect(() => {
        async function getTemps() {
            let info=await axios.get('/temperament')
            console.log(info)
            let t = (info.data?.map(temp => temp.name));
            setTemps(t)
        }
        getTemps();

    }, [])


    const handleChangeTemp = (ev) => {

        setSelectedTemp(
            ev.target.value
        );

        if (ev.target.value) {

            if (!arrayTemps.includes(ev.target.value)) {
                setArrayTemps(
                    [...arrayTemps, ev.target.value]
                )
            }
        }

    };



    const handleClick = (ev, empty) => {
        let filtered = [];
        setShowNoResult(false);

        if (arrayTemps.length === 0) {
            dispatch(setFiltered([]));
            return
        }

        if (!empty) {
            breeds.forEach((b) => {
                let temps = b.temperaments?.map(t => t.name);
                for (let i = 0; i < arrayTemps.length; i++) {
                    if (!temps.includes(arrayTemps[i])) {
                        return
                    }
                }
                filtered.push(b);
            })

            if (filtered.length === 0) {
                setShowNoResult(true);
            }

        } else {
            setArrayTemps([]);
        }

        dispatch(setFiltered(filtered));
    }

    useEffect(() => {
        let filtered = [];
        setShowNoResult(false);
        if (arrayTemps.length === 0) {
            dispatch(setFiltered([]));
            return
        }


        breeds.forEach((b) => {
            let temps = b.temperaments?.map(t => t.name); 
            for (let i = 0; i < arrayTemps.length; i++) {
                if (!temps.includes(arrayTemps[i])) {
                    return
                }
            }
            filtered.push(b);
        })

        if (filtered.length === 0) {
            setShowNoResult(true);
        }

        dispatch(setFiltered(filtered));
    }, [arrayTemps, setShowNoResult, breeds, dispatch])


    const deleteTemp = (name) => {
        setArrayTemps(arrayTemps.filter(temp => temp !== name));
    }



    return (
        <StyledFiltro>
            <h1>Filtrar</h1>
            <div className='container'>
                <select onChange={handleChangeTemp} name="temperaments" value={selectedTemp}  >
                    <option value=''>Seleccionar temperamentos</option>
                    {
                        temps.map((t, index) => (
                            <option value={t} key={t + index}>{t}</option>
                        ))
                    }
                </select>
                <div className='temp-container'>
                    {
                        arrayTemps.map((t) => (
                            <p key={t}>{t} <button onClick={() => deleteTemp(t)}><i className="fas fa-times"></i></button></p>
                        ))
                    }
                </div>

                <button className='filter-button' onClick={(ev) => handleClick(ev, 'empty')}>Limpiar filtro</button>


            </div>
        </StyledFiltro >
    )
}


export default Filtro;