const cluster = document.querySelector('.star-cluster');
const treeRoot = document.getElementById('treeRoot');
const count = 250; 

// 1. 별 생성 및 배치
for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const ratio = i / count;
    const angle = i * 0.25; 
    const x = Math.cos(angle) * ratio * 200;
    const z = Math.sin(angle) * ratio * 200;
    const y = ratio * 550 - 275; 
    
    star.style.setProperty('--x', `${x}px`);
    star.style.setProperty('--y', `${y}px`);
    star.style.setProperty('--z', `${z}px`);
    
    // 초기 크기 설정
    star.style.width = '5px';
    star.style.height = '5px';
    
    cluster.appendChild(star);
}

// 2. 컨트롤 패널 연동
const starColorInput = document.getElementById('starColor');
const shineColorInput = document.getElementById('shineColor');
const bgColorInput = document.getElementById('bgColor');
const starSizeInput = document.getElementById('starSize');
const speedInput = document.getElementById('speed');

// 별 색상 변경
starColorInput.addEventListener('input', (e) => {
    const color = e.target.value;
    document.querySelectorAll('.star').forEach(s => {
        s.style.backgroundColor = color;
    });
});

// 별 반짝임 색상 변경
    shineColorInput.addEventListener('input', (e) => {
    const shinecolor = e.target.value;
    document.querySelectorAll('.star').forEach(s => {
        // 투명도 결합 오류 방지를 위해 색상 코드만 깨끗하게 전달
        // 또는 약간의 투명도를 원한다면 `${shinecolor}80` (50% 투명도) 사용
        s.style.boxShadow = `0 0 10px 2px ${shinecolor}`;
    });
});



// 배경색 변경
bgColorInput.addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value;
});

// 별 크기 변경
starSizeInput.addEventListener('input', (e) => {
    const size = e.target.value;
    document.querySelectorAll('.star').forEach(s => {
        s.style.width = `${size}px`;
        s.style.height = `${size}px`;
    });
});

// 회전 속도 변경 (애니메이션 duration 조절)
speedInput.addEventListener('input', (e) => {
    const val = e.target.value;
    // 슬라이더 값이 클수록 빠르게 (21초~1초 사이로 가변)
    const duration = 21 - val;
    treeRoot.style.animationDuration = `${duration}s`;
    document.querySelectorAll('.star').forEach(s => {
        s.style.animationDuration = `${duration}s`;
    });
});