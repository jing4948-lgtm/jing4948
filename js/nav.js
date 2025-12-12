document.addEventListener("DOMContentLoaded", function() {
    // 🌟🌟🌟 네비게이션 최종 안정화 및 정다영 선생님 이름 적용 🌟🌟🌟
    
    // **GitHub Pages 환경** (저장소 이름이 'jing4948'인 경우)를 가정하고 basePath를 고정합니다.
    // 만약 로컬 환경(Live Server 등)에서 테스트하실 경우,
    // 아래 basePath를 `let basePath = '/';`로 변경하시면 됩니다.
    
    // 사용자님의 URL 구조 (예: .../jing4948/index.html)에 맞춰 basePath 설정:
    let basePath = '/jing4948/'; 

    // 네비게이션에 사용할 HTML 구조
    const navHTML = `
        <nav>
            <a href="${basePath}index.html" class="logo">정다영 선생님</a>
            <ul>
                <li><a href="${basePath}index.html">홈</a></li>
                <li><a href="${basePath}페이지/조편성/index.html">조편성</a></li>
                <li><a href="${basePath}페이지/학습지/index.html">학습지</a></li>
            </ul>
        </nav>
    `;

    // <body> 태그가 존재할 때만 네비게이션을 삽입합니다.
    if (document.body) {
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
});
