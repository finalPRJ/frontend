import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeLegion, listCars } from "../../modules/car";
import Carsearch from "../../components/carsearch/Carsearch";


const Carsearchcontainer = () => {
    const dispatch = useDispatch();
    const cars = useSelector(({car}) => ({
        cars: car.cars,
    }));

    const handleLegionChange = (legion) => {
        dispatch(changeLegion(legion));
    };

    useEffect(() => {
        dispatch(listCars());
    },[dispatch])

    return (
        <Carsearch 
        cars={cars.cars}
        onLegionChange={handleLegionChange}
        />
    )
}

export default Carsearchcontainer;