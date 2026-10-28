import React from "react";
import { imageData } from "../data/imageData";

const Image = () => {
    return (
        <section id="imageType" className="section">
            <h1 className="blind">이미지 유형 만들기</h1>
            <h2>프리미어 케이크와 디저트를 만나보세요</h2>
            <p>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</p>
            <div className="container image_inner">
                {imageData.map((image, index) => (
                    <figure className={`image hover${image.id}`} key={index}>
                        <img src={image.img} alt="" />
                        <div>
                            <h3 className="image_title">{image.title}</h3>
                            <figcaption className="image_desc">{image.desc}</figcaption>
                            <p className="image_btn">{image.more}</p>
                        </div>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Image;
