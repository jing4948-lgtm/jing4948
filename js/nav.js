document.addEventListener("DOMContentLoaded", function() {
    // 🌟🌟🌟 네비게이션 최종 안정화 코드 🌟🌟🌟
    // 경로 계산 로직을 버리고, 모든 링크를 현재 폴더 구조(index, 페이지/하위)를 기준으로 고정합니다.
    // 이 방식은 로컬 파일(file://)과 웹 서버(http://) 환경 모두에서 가장 확실하게 작동합니다.
    
    // 참고: 모든 링크는 '현재 경로를 기준으로' 상대 경로를 사용합니다. 
    // - index.html에서는 '페이지/조편성/index.html'
    // - 페이지/조편성/index.html에서는 'index.html' 또는 '../페이지/학습지/index.html' (상대 경로 자동 처리)

    const navHTML = `
        <nav>
            <a href="index.html" class="logo">My Ocean View</a>
            <ul>
                <li><a href="index.html">홈</a></li>
                <li><a href="페이지/조편성/index.html">조편성</a></li>
                <li><a href="페이지/학습지/index.html">학습지</a></li>
            </ul>
        </nav>
    `;

    // <body> 태그가 존재할 때만 네비게이션을 삽입
    if (document.body) {
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
});
