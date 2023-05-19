import HeaderContainer from "../containers/common/HeaderContainer";
import Chart from "../components/recall/Chart";
import WordClude from "../components/recall/WordClude";
import RecallList from "../components/recall/RecallList";

const ReCallPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <RecallList />
            <Chart/>
            <WordClude/>
        </div>
    )
}

export default ReCallPage;