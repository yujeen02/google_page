# 🌐 Google 메인 화면 클론 프로젝트

📌 **Google의 메인 화면을 클론하여 바로가기 버튼, 드롭다운 메뉴 등을 구현한 프로젝트입니다.**  
사용자는 드롭다운 및 바로가기 기능을 통해 간편하게 원하는 서비스로 이동할 수 있습니다.

---

## 🚀 프로젝트 미리보기

### 📌 Google 메인 화면  
Google의 UI를 그대로 구현하여 깔끔한 검색창과 로고를 배치했습니다.  

![Google Main Page](https://github.com/user-attachments/assets/16880edb-6824-40ae-9856-a8653822b5c0)

---

### 🔽 바로가기 기능 및 드롭다운

- 사용자 프로필 및 설정을 드롭다운 메뉴로 제공합니다.  

![Dropdown & Shortcuts](https://github.com/user-attachments/assets/cae66132-03af-4c3c-82b8-6fe416dd145e)

---

## 💡 주요 기능 코드 설명

### ✅ 드롭다운 메뉴 동작

`apps` 아이콘 클릭 시 드롭다운 메뉴가 열리고, 화면의 다른 곳을 클릭하면 메뉴가 닫히는 로직입니다.

```js
appsIcon.addEventListener('click', (event) => {
    event.stopPropagation(); 
    dropdown.classList.toggle('active'); // 메뉴 열기/닫기
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.apps') && !event.target.closest('.dropdown')) {
        dropdown.classList.remove('active'); // 외부 클릭 시 닫기
    }
});
```

### ✅ 동적으로 바로가기 아이콘 생성
data 배열을 순회하면서 각각의 아이템을 동적으로 생성해 UI에 렌더링합니다.
```js
data.forEach(item => {
    const itemDiv = document.createElement('div');
    // 이미지와 텍스트를 포함한 버튼 요소 구성
    // 클릭 시 item.url로 이동
});
```
