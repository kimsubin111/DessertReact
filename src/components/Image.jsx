import React, { useEffect, useRef } from "react";
import { imageData } from "../data/imageData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Image = ({ title }) => {
    const imageRef = useRef([]);
    const imageInner = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            imageRef.current,
            { y: 300, opacity: 0 },

            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                eacs: "back.out",

                scrollTrigger: {
                    trigger: imageInner.current,
                    start: "top 80%",
                },
            },
        );
    }, []);

    return (
        <section id="imageType" className="section">
            <h1 className="blind">이미지 유형 만들기</h1>
            <h2>{title}</h2>
            <p>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</p>
            <div className="container image_inner" ref={imageInner}>
                {imageData.map((image, index) => (
                    <figure
                        className={`image hover${image.id}`}
                        key={index}
                        ref={(el) => (imageRef.current[index] = el)}
                    >
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
