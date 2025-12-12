document.addEventListener("DOMContentLoaded", function() {
    // 🌟🌟🌟 네비게이션 최종 안정화 코드 🌟🌟🌟
    
    // 현재 URL 경로를 가져옵니다.
    const path = window.location.pathname;
    let rootPath = './'; // 기본값 (루트 index.html 경로)

    // '페이지/' 폴더 아래에 있는지 확인하여 경로 깊이를 결정
    if (path.includes('/페이지/')) {
        // 경로를 '/'로 나누고, 파일명과 빈 문자열을 제외한 배열의 길이를 계산
        // 예: /페이지/조편성/index.html -> parts: ['페이지', '조편성'] -> depth: 2
        // 예: /프로젝트/페이지/조편성/index.html -> parts: ['프로젝트', '페이지', '조편성'] -> depth: 3
        const parts = path.split('/').filter(p => p.length > 0 && p !== 'index.html');
        
        // '페이지'가 포함되어 있다면, '페이지/' 폴더부터 시작하여 상위로 올라가야 합니다.
        // 여기서는 '프로젝트 루트'를 기준으로 합니다.
        // 현재 폴더 구조가 css, js, 페이지가 루트에 있으므로,
        // /페이지/하위/index.html 에서의 depth는 2 (페이지, 하위) 입니다.
        const depth = parts.length; 
        
        rootPath = '';
        for (let i = 0; i < depth; i++) {
            rootPath += '../';
        }
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

    // <body> 태그가 존재할 때만 네비게이션을 삽입하여 스크립트 오류를 방지합니다.
    if (document.body) {
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    } else {
        console.error("Error: The body element was not found for navigation insertion.");
    }
});
