import React, { useEffect, useRef } from "react";
import { textData } from "../data/textData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Text = ({ title }) => {
    const textInner = useRef(null);
    const textRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            textRef.current,
            {
                y: 200,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: textInner.current,
                    start: "top 80%",
                },
            },
        );
    }, []);

    return (
        <section id="textType" className="section">
            <span>텍스트 유형</span>
            <h2>{title}</h2>
            <div className="container text_inner" ref={textInner}>
                {textData.map((txt, index) => (
                    <div
                        className={`txt t${txt.id}`}
                        key={index}
                        ref={(el) => (textRef.current[index] = el)}
                    >
                        <div className="text_title">{txt.title}</div>
                        <div className="text_desc">{txt.desc}</div>
                        <a href="/" className="text_btn">
                            더보기
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Text;
