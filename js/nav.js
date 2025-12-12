document.addEventListener("DOMContentLoaded", function() {
    // 🌟 핵심 수정: rootPath를 절대 경로(/) 대신 상대 경로로 정확히 계산 🌟

    // 현재 URL의 경로 부분을 가져옵니다.
    const path = window.location.pathname;
    
    // 현재 경로의 깊이를 계산합니다. (폴더의 개수 - 1)
    // 예: /index.html -> 1 레벨
    // 예: /페이지/조편성/index.html -> 3 레벨
    const depth = path.split('/').length - 1; 

    let rootPath = './'; // 기본값 (루트 폴더 내의 index.html)

    // 만약 깊이가 3 이상 (예: 페이지/조편성/*)이면, 두 번 상위 폴더로 이동해야 함
    if (depth >= 3) {
        rootPath = '../../'; 
    } 
    // 만약 깊이가 2 (예: /페이지/*) 이라면, 한 번 상위 폴더로 이동해야 함
    else if (depth === 2 && path.includes('/페이지/')) {
        // 이 로직은 현재 폴더 구조상 필요 없지만, 다른 구조를 위해 남겨둡니다.
        // 현재는 '페이지' 바로 밑에 파일이 없으므로 depth=3 로직이 주로 사용됨
        rootPath = '../';
    }


    const navHTML = `
        <nav>
            <a href="${rootPath}index.html" class="logo">My Ocean View</a>
            <ul>
                <li><a href="${rootPath}index.html">홈</a></li>
                <li><a href="${rootPath}페이지/조편성/index.html">조편성</a></li>
                <li><a href="${rootPath}페이지/학습지/index.html">학습지</a></li>
            </ul>
        </nav>
    `;

    // body 태그의 가장 첫 번째 자식으로 네비게이션 추가
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});
