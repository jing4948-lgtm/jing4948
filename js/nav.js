document.addEventListener("DOMContentLoaded", function() {
    // 현재 페이지가 루트(최상위)인지 하위 폴더인지 확인하여 경로 조정
    // 간단하게 '../' 개수로 깊이를 판단하거나, 절대 경로(/)를 사용할 수 있습니다.
    // 여기서는 GitHub Pages나 Live Server 환경을 고려해 상대 경로 로직을 씁니다.
    
    const isRoot = window.location.pathname.endsWith('index.html') && window.location.pathname.split('/').length < 3;
    // 단순히 폴더 깊이에 따라 경로 접두사를 정합니다.
    // 만약 잘 안 되면 아래 pathPrefix를 직접 수정하면 됩니다.
    
    // 이 스크립트가 실행되는 위치에 따라 경로 설정
    // 루트 index.html에서 실행되면 '', 페이지/* 폴더에서 실행되면 '../../'
    const isInSubfolder = window.location.href.includes('/페이지/'); 
    const rootPath = isInSubfolder ? '../../' : './';

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
