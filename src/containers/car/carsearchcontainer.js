import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeCarFilters, listCars } from "../../modules/car";
import Carsearch from "../../components/carsearch/Carsearch";


const Carsearchcontainer = () => {
    const dispatch = useDispatch();
    const {cars,filters} = useSelector(({car}) => ({
        cars: car.cars,
        filters : car.filters
    }));

    const handleChangeFilters = (filterObj) => {
        const updatedFilters = { ...filters, ...filterObj };
        dispatch(changeCarFilters(updatedFilters));
        dispatch(listCars());
    };

    useEffect(() => {
        dispatch(listCars());
    },[dispatch])

    return (
        <Carsearch 
        cars={cars}
        handleChangeFilters={handleChangeFilters}
        />
    )
}

export default Carsearchcontainer;