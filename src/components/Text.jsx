import React from "react";
import { textData } from "../data/textData";

const Text = () => {
    return (
        <section id="textType" className="section">
            <span>텍스트 유형</span>
            <h2>다채로운 베이커리 컬렉션</h2>
            <div className="container text_inner">
                {textData.map((txt, index) => (
                    <div className={`txt t${txt.id}`} key={index}>
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
