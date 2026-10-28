import React from "react";

const Banner = ({ title }) => {
    return (
        <section id="bannerType" className="section">
            <div className="banner_inner">
                <h2 className="blind">배너 영역</h2>
                <h3 className="title">{title}</h3>
                <p className="desc">
                    카페와 어울리는 세상의 모든 디저트
                    <a href="/">www.twosome.co.kr</a>
                    <span className="small">투썸플레이스</span>
                </p>
            </div>
        </section>
    );
};

export default Banner;
