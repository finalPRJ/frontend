import styled from "styled-components";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Search from "../../lib/image/car_search.jpg";
import Recommend from "../../lib/image/car_recommend.jpg";
import Recall from "../../lib/image/car_recall.jpg";
import Info from "../../lib/image/car_info.jpg";
import Lease from "../../lib/image/car_lease.jpg";

// 실행 안될 시 npm install react-responsive-carousel 

const View = styled.div`
    background: coral;
    width: 900px;
    height: 490px;
    margin: 30px auto;
    overflow: hidden;
    .div {
        position: relative;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .carousel .slide img {
        object-fit: fill;
        width: 850px;
        height: 450px;
        margin: 0 auto;
    }
`

const Text1 = styled.div`
    position: absolute;
    top: 30%;
    width: 300px;
    transform: translateY(-50%);
    left: 40px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: #004D40;
    font-weight: bold;
    font-size: 20px;
`
const Text2 = styled.div`
    position: absolute;
    top: 20%;
    width: 245px;
    transform: translateY(-50%);
    left: 40px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 20px;
`
const Text3 = styled.div`
    position: absolute;
    top: 70%;
    width: 400px;
    transform: translateY(-50%);
    left: 40px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 20px;
`
const Text4 = styled.div`
    position: absolute;
    top: 60%;
    width: 310px;
    transform: translateY(-50%);
    left: 560px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: #0D47A1;
    font-weight: bold;
    font-size: 20px;
`
const Text5 = styled.div`
    position: absolute;
    top: 20%;
    width: 400px;
    transform: translateY(-50%);
    left: 40px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 20px;
`


const MainView = () => {
    return(
        <View>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div className="div">
                <img src={Search} alt="Search" />
                <Text1>중고차 옵션 검색 서비스를 통해 꿈에 그리던 차량을 더욱 빠르게 찾아보세요!</Text1>
            </div>
            <div className="div">
                <img src={Recommend} alt="Recommend" />
                <Text2>중고차 구매에 어려움을 겪고 계신가요? 이제는 중고차 추천 서비스를 통해 당신에게 딱 맞는 차량을 찾아드립니다.</Text2>
            </div>
            <div className="div"> 
                <img src={Recall} alt="Recall" />
                <Text3>차량 안전을 최우선으로 생각하시나요? 이제는 리콜 정보 서비스를 통해 중요한 차량 리콜 정보를 손쉽게 확인할 수 있습니다.</Text3>
            </div>
            <div className="div">
                <img src={Info} alt="Info" />
                <Text4>차량 정보와 보험, 옵션 등 차량과 관련된 정보를 얻기 어려우신가요? 이제는 차량 정보 서비스를 통해 필요한 모든 정보를 손쉽게 찾아보세요.</Text4>
            </div>
            <div className="div">
                <img src={Lease} alt="Lease" />
                <Text5>차량 리스에 어려움을 겪고 계신가요? 이제는 역경매 방식의 리스 게시판을 통해 최적의 리스 계약을 더욱 쉽게 체결할 수 있습니다.</Text5>
            </div>
            </Carousel>
        </View>
    )
}

export default MainView;