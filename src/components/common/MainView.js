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
    width: 1300px;
    height: 590px;
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
        width: 1250px;
        height: 550px;
        margin: 0 auto;
        cursor: pointer;
    }
    .carousel .control-dots .dot {
        background-color: gray;
    }
    .carousel .control-dots .dot.selected {
        background-color: black;
    }
    .carousel .carousel-status {  // 1 of 5 <p> 태그 안보이게 하기
        display : none;
    }
    .carousel .control-arrow.control-prev {
        display : none;
    }
    .carousel .control-arrow.control-next {
        display : none;
    }
`

const Text1 = styled.div`
    user-select: none;
    position: absolute;
    top: 30%;
    width: 300px;
    transform: translateY(-50%);
    left: 80px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: #004D40;
    font-weight: bold;
    font-size: 30px;
`
const Text2 = styled.div`
    user-select: none;
    position: absolute;
    top: 25%;
    width: 330px;
    transform: translateY(-50%);
    left: 40px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
`
const Text3 = styled.div`
    user-select: none;
    position: absolute;
    top: 25%;
    width: 320px;
    transform: translateY(-50%);
    left: 40px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
`
const Text4 = styled.div`
    user-select: none;
    position: absolute;
    top: 40%;
    width: 300px;
    transform: translateY(-50%);
    left: 40px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
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
    font-size: 30px;
`
const Button1 = styled.div`
    position: absolute;
    top: 93%;
    width: 200px;
    transform: translateY(-50%);
    left: 110px;
    z-index: 10;
    border-radius: 20px;
    color: white;
    background: green;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

const Button2 = styled.div`
    position: absolute;
    top: 93%;
    width: 200px;
    transform: translateY(-50%);
    left: 110px;
    z-index: 10;
    border-radius: 20px;
    color: white;
    background: green;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

const Button3 = styled.div`
    position: absolute;
    top: 90%;
    width: 200px;
    transform: translateY(-50%);
    left: 90px;
    z-index: 10;
    border-radius: 20px;
    color: white;
    background: green;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`
const Button4 = styled.div`
    position: absolute;
    top: 90%;
    width: 200px;
    transform: translateY(-50%);
    left: 90px;
    z-index: 10;
    border-radius: 20px;
    color: white;
    background: green;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`
const Button5 = styled.div`
    position: absolute;
    top: 90%;
    width: 200px;
    transform: translateY(-50%);
    left: 90px;
    z-index: 10;
    border-radius: 20px;
    color: white;
    background: green;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

const MainView = () => {
    return(
        <View>
            <Carousel showThumbs={false} autoPlay infiniteLoop interval={4000}>
            <div className="div">
                <a href="http://localhost:3000/carsearch"> 
                    <img src={Search} alt="Search" />
                    <Text1>중고차 옵션 검색 서비스를 통해 꿈에 그리던 차량을 더욱 빠르게 찾아보세요!</Text1>
                    <Button1>자세히 살펴보기</Button1>
                </a>
            </div>
            <div className="div">
                <img src={Recommend} alt="Recommend" />
                <Text2>중고차 구매에 어려움을 겪고 계신가요? 이제는 중고차 추천 서비스를 통해 당신에게 딱 맞는 차량을 찾아드립니다.</Text2>
                <Button2>자세히 살펴보기</Button2>
            </div>
            <div className="div"> 
                <img src={Recall} alt="Recall" />
                <Text3>차량 안전을 최우선으로 생각하시나요? 이제는 리콜 정보 서비스를 통해 중요한 차량 리콜 정보를 손쉽게 확인할 수 있습니다.</Text3>
                <Button3>자세히 살펴보기</Button3>
            </div>
            <div className="div">
                <a href="http://localhost:3000/Information"> 
                <img src={Info} alt="Info" />
                <Text4>차량 정보와 보험, 옵션 등 차량과 관련된 정보를 얻기 어려우신가요? 이제는 차량 정보 서비스를 통해 필요한 모든 정보를 손쉽게 찾아보세요.</Text4>
                <Button4>자세히 살펴보기</Button4>
                </a>
            </div>
            <div className="div">
                <a href="http://localhost:3000/board/view/*">
                    <img src={Lease} alt="Lease" />
                    <Text5>차량 리스에 어려움을 겪고 계신가요? 이제는 역경매 방식의 리스 게시판을 통해 최적의 리스 계약을 더욱 쉽게 체결할 수 있습니다.</Text5>
                    <Button5>자세히 살펴보기</Button5>
                </a>
            </div>
            </Carousel>
        </View>
    )
}

export default MainView;