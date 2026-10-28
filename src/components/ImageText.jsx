import React from "react";
import { imageTextData, imageTextData2 } from "../data/imageText";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageText = ({ title }) => {
    AOS.init();
    return (
        <section id="imageText" className="section">
            <h1 className="blind">이미지 텍스트 유형</h1>
            <div className="container imageText_inner">
                <div className="imageText_txt">
                    <div className="small">이미지/텍스트 유형</div>
                    <div className="title">{title}</div>
                    <div className="desc">
                        제빵사, 파티시에, 요식업 종사자를 위한 유용한 사이트입니다
                    </div>
                    <ul className="list">
                        {imageTextData2.map((title, index) => (
                            <li key={index}>
                                <a href="/">&#8231;{title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {imageTextData.map((text, index) => (
                    <div
                        className={`imageText_img img${text.id}`}
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 300}
                    >
                        <img src={text.img} alt="" />
                        <a href="/">{text.text}</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageText;
