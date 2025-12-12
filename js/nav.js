document.addEventListener("DOMContentLoaded", function() {
    // 🌟🌟🌟 네비게이션 최종 해결 코드: Base Path를 이용한 절대 경로 구축 🌟🌟🌟
    
    const path = window.location.pathname;
    let basePath = '/'; // 기본값 (서버 루트)

    // GitHub Pages 환경을 고려하여 최상위 저장소 이름을 basePath로 설정합니다.
    // 현재 경로를 '/'로 나누고, 파일명과 빈 문자열을 제외한 배열을 만듭니다.
    const pathSegments = path.split('/').filter(p => p.length > 0 && p !== 'index.html');
    
    // 만약 pathSegments에 내용이 있다면 (예: ['myrepo', '페이지', '조편성']),
    // 첫 번째 요소(대부분 저장소 이름)를 basePath에 포함시킵니다.
    if (pathSegments.length > 0) {
        // 이 코드는 '/reponame/'을 basePath로 설정하려고 시도합니다.
        // 이는 로컬 서버(Live Server)에서는 필요 없지만, GitHub Pages에서 필수입니다.
        const repoName = pathSegments[0];
        // 로컬 환경에서는 대부분 첫 세그먼트가 빈 문자열이거나 프로젝트 이름이 아니므로,
        // Live Server를 사용한다면 'index.html' 파일을 기준으로 실행하는 것이 좋습니다.
        
        // 경로가 '/페이지/조편성/...' 처럼 시작하면, basePath는 '/'입니다.
        // 경로가 '/myrepo/페이지/조편성/...' 처럼 시작하면, basePath는 '/myrepo/'입니다.
        if (repoName !== '페이지' && repoName !== 'index.html') {
             basePath = '/' + repoName + '/';
        }
    }
    
    // 🚨 로컬 개발 환경(Live Server 등)에서 사용하실 경우:
    // 아래 basePath = '/'로 설정하는 것이 더 안정적입니다.
    // basePath = '/'; 

    
    // 이 코드에서는 안정성을 위해 basePath 계산은 복잡하게 하지 않고,
    // HTML 헤드에 <base href> 태그를 사용하는 것을 권장하지만,
    // JS 내에서 최대한 경로를 고정하는 방식으로 작성합니다.

    const navHTML = `
        <nav>
            <a href="${basePath}index.html" class="logo">My Ocean View</a>
            <ul>
                <li><a href="${basePath}index.html">홈</a></li>
                <li><a href="${basePath}페이지/조편성/index.html">조편성</a></li>
                <li><a href="${basePath}페이지/학습지/index.html">학습지</a></li>
            </ul>
        </nav>
    `;

    if (document.body) {
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
});
