// 햄버거 메뉴 기능 구현
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const menuItems = document.querySelector('.menu-items');
    
    hamburgerIcon.addEventListener('click', function() {
        // 햄버거 아이콘 애니메이션
        this.classList.toggle('active');
        // 메뉴 표시/숨김
        menuItems.classList.toggle('active');
    });

    // 메뉴 항목 클릭 시 메뉴 닫기
    const menuLinks = document.querySelectorAll('.menu-items a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerIcon.classList.remove('active');
            menuItems.classList.remove('active');
        });
    });

    // 메뉴 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', function(event) {
        if (!hamburgerIcon.contains(event.target) && !menuItems.contains(event.target)) {
            hamburgerIcon.classList.remove('active');
            menuItems.classList.remove('active');
        }
    });
}); 