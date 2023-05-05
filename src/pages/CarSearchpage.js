import HeaderContainer from "../containers/common/HeaderContainer";
import SearchBox from "../components/common/SearchBox";
import Carsearchcontainer from "../containers/car/carsearchcontainer";


const CarSearchpage = () => {
    return (
        <div>
            <HeaderContainer/>
            <SearchBox/>
            <Carsearchcontainer/>
        </div>
    )
}

export default CarSearchpage;