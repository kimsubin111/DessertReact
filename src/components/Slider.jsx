import React from "react";
import { sliderData } from "../data/silder";

const Slider = () => {
    return (
        <section id="sliderType">
            <h2 className="blind">슬라이더 유형</h2>
            <div className="swiper hero">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="assets/img/sldeImg01.jpg" alt="" />
                        <div className="desc">
                            <div className="container">
                                <span>dessert cafe</span>
                                <h3>DESSERT TRENDS</h3>
                                <p>
                                    카페와 어울리는 세상의 모든 디저트를 만나보세요! 공간의 분위기를 매력적으로 전환시켜
                                    줄 거예요!
                                </p>
                                <div className="btn">
                                    <a href="#">자세히 보기</a>
                                    <a href="#">사이트 보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src="assets/img/sldeImg02.jpg" alt="" />
                        <div className="desc">
                            <div className="container">
                                <span>dessert cafe</span>
                                <h3>DESSERT TRENDS</h3>
                                <p>
                                    카페와 어울리는 세상의 모든 디저트를 만나보세요! 공간의 분위기를 매력적으로 전환시켜
                                    줄 거예요!
                                </p>
                                <div className="btn">
                                    <a href="#">자세히 보기</a>
                                    <a href="#">사이트 보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src="assets/img/sldeImg03.jpg" alt="" />
                        <div className="desc">
                            <div className="container">
                                <span>dessert cafe</span>
                                <h3>DESSERT TRENDS</h3>
                                <p>
                                    카페와 어울리는 세상의 모든 디저트를 만나보세요! 공간의 분위기를 매력적으로 전환시켜
                                    줄 거예요!
                                </p>
                                <div className="btn">
                                    <a href="#">자세히 보기</a>
                                    <a href="#">사이트 보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src="assets/img/sldeImg01.jpg" alt="" />
                        <div className="desc">
                            <div className="container">
                                <span>dessert cafe</span>
                                <h3>DESSERT TRENDS</h3>
                                <p>
                                    카페와 어울리는 세상의 모든 디저트를 만나보세요! 공간의 분위기를 매력적으로 전환시켜
                                    줄 거예요!
                                </p>
                                <div className="btn">
                                    <a href="#">자세히 보기</a>
                                    <a href="#">사이트 보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src="assets/img/sldeImg02.jpg" alt="" />
                        <div className="desc">
                            <div className="container">
                                <span>dessert cafe</span>
                                <h3>DESSERT TRENDS</h3>
                                <p>
                                    카페와 어울리는 세상의 모든 디저트를 만나보세요! 공간의 분위기를 매력적으로 전환시켜
                                    줄 거예요!
                                </p>
                                <div className="btn">
                                    <a href="#">자세히 보기</a>
                                    <a href="#">사이트 보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default Slider;
