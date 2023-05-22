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
    top: 20%;
    width: 300px;
    transform: translateY(-50%);
    left: 70px;
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
    top: 20%;
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
    top: 20%;
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
    top: 20%;
    width: 300px;
    transform: translateY(-50%);
    left: 30px;
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
    left: 10px;
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
    left: 120px;
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
            <Carousel showThumbs={false} autoPlay infiniteLoop interval={3500}>
            <div className="div">
                <a href="http://localhost:3000/carsearch"> 
                    <img src={Search} alt="Search" />
                    <Text1>차량 검색 서비스</Text1>
                    <Button1>자세히 살펴보기</Button1>
                </a>
            </div>
            <div className="div">
                <img src={Recommend} alt="Recommend" />
                <Text2>차량 추천 서비스</Text2>
                <Button2>자세히 살펴보기</Button2>
            </div>
            <div className="div"> 
                <img src={Recall} alt="Recall" />
                <Text3>리콜 정보 서비스</Text3>
                <Button3>자세히 살펴보기</Button3>
            </div>
            <div className="div">
                <a href="http://localhost:3000/Information"> 
                    <img src={Info} alt="Info" />
                    <Text4>자동차 정보 서비스</Text4>
                    <Button4>자세히 살펴보기</Button4>
                </a>
            </div>
            <div className="div">
                <a href="http://localhost:3000/board/view/*">
                    <img src={Lease} alt="Lease" />
                    <Text5>리스 서비스</Text5>
                    <Button5>자세히 살펴보기</Button5>
                </a>
            </div>
            </Carousel>
        </View>
    )
}

export default MainView;