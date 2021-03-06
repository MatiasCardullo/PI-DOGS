import React, { useEffect, useState } from 'react';
import { StyledCreateBreed } from './StyledCreateBreed';
import { useDispatch } from "react-redux";
import { getBreeds } from '../../Redux/Actions/index';
import axios from '../../axios';
import CreateBreedModal from './CreateBreedModal';



function CreateBreed() {

    const dispatch = useDispatch();

    const [temps, setTemps] = useState([]);
    const [selectedTemp, setSelectedTemp] = useState('');
    const [input, setInput] = useState({
        temperaments: [],
        name: '',
        weight: '',
        height: '',
        life_span: ''
    });
    const [showModal, setShowModal] = useState({ created: false, temp: false });


    useEffect(() => {
        async function getTemps() {
            let t = (await axios.get('/temperament')).data;
            setTemps(t);
        }
        getTemps();
    }, [])

    const handleChange = (ev) => {
        setInput({
            ...input,
            [ev.target.name]: ev.target.value,
        });
    };
    const handleSubmit = (ev) => {
        ev.preventDefault();

        axios.post("/dog", input).then((res) => {
            if (res.status === 200) {
                setShowModal({
                    ...showModal,
                    created: true
                })
                dispatch(getBreeds())
            }
        })
            .catch(() => {
                setShowModal({
                    ...showModal,
                    temp: true
                })
            })

        setInput({
            ...input,
            temperaments: []
        });

    };

    const handleChangeTemp = (ev) => {

        setSelectedTemp(
            ev.target.value
        );

        if (ev.target.value) {

            if (!input.temperaments.includes(ev.target.value)) {
                setInput({
                    ...input,
                    temperaments: [...input.temperaments, ev.target.value]
                })
            }
        }

    };

    function getNames(arr) {
        let names = [];
        temps.forEach((t) => {
            arr.forEach((id) => {
                if (parseInt(id) === t.id) {
                    names.push({ id: t.id, name: t.name })
                }
            })

        })
        return names;
    }
    const deleteTemp = (id) => {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temp => parseInt(temp) !== id)
        })

    }
    return (

        <StyledCreateBreed>
            <CreateBreedModal setShowModal={setShowModal} showModal={showModal} />
            <div className='img-container'></div>
            <div className='form'>
                <h1>Crear raza:</h1>
                <form className='form-top' id='form-top' onSubmit={handleSubmit}>
                    <input
                        required
                        name='name'
                        type='text'
                        value={input.name}
                        placeholder='name'
                        onChange={handleChange}
                    />
                    <input
                        required
                        name='weight'
                        type='number'
                        value={input.weight}
                        placeholder='weight'
                        onChange={handleChange}
                    />
                    <input
                        required
                        name='height'
                        type='number'
                        value={input.height}
                        placeholder='height'
                        onChange={handleChange}
                    />
                    <input
                        required
                        name='life_span'
                        type='number'
                        value={input.life_span}
                        placeholder='life span'
                        onChange={handleChange}
                    />

                    <select onChange={handleChangeTemp} name="temperaments" value={selectedTemp}  >
                        <option value=''>Seleccionar temperamentos</option>
                        {
                            temps.map((t) => (
                                <option value={t.id} key={t.id}>{t.name}</option>
                            ))
                        }
                    </select>
                    <div className='temp-container'>
                        {
                            getNames(input.temperaments).map((t) => (
                                <p key={t.id}>{t.name} <button onClick={() => deleteTemp(t.id)}><i className="fas fa-times"></i></button></p>
                            ))
                        }
                    </div>
                    <input className='submit' type="submit" value='Crear' />
                </form>
            </div>
        </StyledCreateBreed>
    )

}

export default CreateBreed;