document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { id: 1, name: "계정", url: "#", image: "/imgs/1.png" },
        { id: 2, name: "검색", url: "#", image: "/imgs/1.svg" },
        { id: 3, name: "지도", url: "#", image: "/imgs/1.svg" },
        { id: 4, name: "YouTube", url: "#", image: "/imgs/1.svg" },
        { id: 5, name: "Gemini", url: "#", image: "/imgs/1.svg" },
        { id: 6, name: "뉴스", url: "#", image: "/imgs/1.svg" },
        { id: 7, name: "Gmail", url: "#", image: "/imgs/1.svg" },
        { id: 8, name: "Meet", url: "#", image: "/imgs/1.svg" },
        { id: 9, name: "채팅", url: "#", image: "/imgs/1.svg" },
        { id: 10, name: "주소록", url: "#", image: "/imgs/1.svg" },
        { id: 11, name: "드라이브", url: "#", image: "/imgs/1.svg" },
        { id: 12, name: "Calendar", url: "#", image: "/imgs/1.svg" },
        { id: 13, name: "Play", url: "#", image: "/imgs/1.svg" },
        { id: 14, name: "번역", url: "#", image: "/imgs/1.svg" },
        { id: 15, name: "사진", url: "#", image: "/imgs/1.svg" },
        { id: 16, name: "내 광고 센터", url: "#", image: "/imgs/1.svg" },
        { id: 17, name: "쇼핑", url: "#", image: "/imgs/1.svg" },
        { id: 18, name: "금융", url: "#", image: "/imgs/1.svg" },
        { id: 19, name: "Docs", url: "#", image: "/imgs/1.svg" },
        { id: 20, name: "Sheets", url: "#", image: "/imgs/1.svg" },
        { id: 21, name: "Slides", url: "#", image: "/imgs/1.svg" },
        { id: 22, name: "도서", url: "#", image: "/imgs/1.svg" },
        { id: 23, name: "Blogger", url: "#", image: "/imgs/1.svg" },
        { id: 24, name: "Keep", url: "#", image: "/imgs/1.svg" },
        { id: 25, name: "클래스룸", url: "#", image: "/imgs/1.svg" },
        { id: 26, name: "어스", url: "#", image: "/imgs/1.svg" },
        { id: 27, name: "저장됨", url: "#", image: "/imgs/1.svg" },
        { id: 28, name: "Google Ads", url: "#" , image: "/imgs/1.svg"},
        { id: 29, name: "여행", url: "#", image: "/imgs/1.svg" },
        { id: 30, name: "Forms", url: "#" , image: "/imgs/1.svg"},
        { id: 31, name: "Google store", url: "#", image: "/imgs/1.svg" },
        { id: 32, name: "Chrome 웹스토어", url: "#", image: "/imgs/1.svg" }
    ];

    const dropdown = document.querySelector('.dropdown');
    const box1 = document.getElementById('box1');
    const appsIcon = document.getElementById('appsIcon'); // 아이콘 참조 추가

    // 데이터 추가
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item'; 
        
        const box2 = document.createElement('div');
        box2.style.display = 'flex';
        box2.style.flexDirection = 'column'; 
        box2.style.alignItems = 'center'; 
        box2.style.margin = '10px'; 

        // 이미지 추가
        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.style.width = '40px'; 
            img.style.height = '40px'; 
            img.style.cursor = 'pointer'; 
            box2.appendChild(img);
        }
    
        // 텍스트 추가
        const text = document.createElement('span');
        text.textContent = item.name;
        text.style.fontSize = '14px'; 
        text.style.cursor = 'pointer';
        text.style.overflow = 'hidden';
        text.style.whiteSpace = 'nowrap';    
        text.style.textOverflow = 'ellipsis';
        box2.appendChild(text);

        // 클릭 이벤트 추가
        box2.addEventListener('click', () => {
            if (item.url) {
                window.open(item.url, '_blank');
            }
        });

        itemDiv.appendChild(box2);
        box1.appendChild(itemDiv);
    });

    // 드롭다운 토글
    appsIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // 클릭 이벤트 전파 방지
        dropdown.classList.toggle('active');
    });

    // 드롭다운 외부 클릭 시 닫기
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.apps') && !event.target.closest('.dropdown')) {
            dropdown.classList.remove('active');
        }
    });
});
