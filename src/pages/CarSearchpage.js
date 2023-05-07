import HeaderContainer from "../containers/common/HeaderContainer";
import Carsearch from "../components/carsearch/Carsearch";
import SearchBox from "../components/common/SearchBox";


const CarSearchpage = () => {
    return (
        <div>
            <HeaderContainer/>
            <SearchBox/>
            <Carsearch/>
        </div>
    )
}

export default CarSearchpage;