// 等頁面載入完先執行
document.addEventListener('DOMContentLoaded', () => {
    // 搵所有內容區
    const sections = document.querySelectorAll('.section');
    // 搵所有導航選項
    const navLinks = document.querySelectorAll('.navbar li');

    // 為每個導航加點擊事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = e.target.dataset.target;  // 讀取 data-target
            // 隱藏所有內容
            sections.forEach(sec => sec.classList.remove('active'));
            // 顯示選中嗰個
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 默認顯示第一個內容（真人攝影）
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
});
