import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeCarFilters, listCars } from "../../modules/car";
import Carsearch from "../../components/carsearch/Carsearch";
import SearchBox from "../../components/common/SearchBox";
import CarReco from "../../components/carsearch/CarReco";


const Carsearchcontainer = () => {
    const dispatch = useDispatch();
    const {cars,filters} = useSelector(({car}) => ({
        cars: car.cars,
        filters : car.filters
    }));

    const handleChangeFilters = (filterObj) => {
        const updatedFilters = { ...filters, ...filterObj, page: '1'};
        dispatch(changeCarFilters(updatedFilters));
        dispatch(listCars());
    };

    const handleChangePage = (page) => {
        const updatedFilters = { ...filters, ...page };
        dispatch(changeCarFilters(updatedFilters));
        dispatch(listCars());
    }

    useEffect(() => {
        dispatch(listCars());
    },[dispatch])

    return (
        <div>
            <SearchBox
            handleChangeFilters={handleChangeFilters}
            />
            <Carsearch 
            cars={cars}
            handleChangeFilters={handleChangeFilters}
            handleChangePage={handleChangePage}
            />
            {cars.data && cars.data.response !== null && (
                <CarReco
                carsReco={cars.data.response}
                />
            )}
        </div>
    )
}

export default Carsearchcontainer;