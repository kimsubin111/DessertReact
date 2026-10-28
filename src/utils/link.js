// 버튼 클릭해서 이동하고 애니메이션 주기
const link = () => {
    const lis = document.querySelectorAll(".header_nav ul li a");

    lis.forEach((li) => {
        li.addEventListener("click", (e) => {
            e.preventDefault();

            const $href = document.querySelector(li.getAttribute("href"));
            $href.scrollIntoView({ behavior: "smooth" });
        });
    });
};

export default link;
