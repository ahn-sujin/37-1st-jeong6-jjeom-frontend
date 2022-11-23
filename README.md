![logo_w-1](https://user-images.githubusercontent.com/67556491/193203493-632c4b7a-b06b-4e8f-b306-dec380bb4b5b.png)


## 정육쩜 **프로젝트 소개**

- **정육쩜**은 초신선 육류를 주력으로 판매하는 쇼핑몰입니다. 
- 프로젝트 기간동안 **메인, 회원가입, 로그인, 리스트, 상세, 장바구니, 주문** 페이지를 구현했습니다.
- 개발은 **초기 세팅부터 전부 직접 구현**했으며, 아래 데모 영상에서 보이는 기능은 모두 백앤드와 연결하여 구현했습니다. 

### **개발 인원 및 기간**

- 개발기간 : 2022/9/19 ~ 2022/9/30
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/37-1st-jeong6-jjeom-backend)

### **프로젝트 선정이유**

- UI가 군더더기 없이 깔끔했고, 기능 구현에 집중할 수 있을 것 같았기 때문입니다. 

### **데모 영상(이미지 클릭)**
[![image](https://user-images.githubusercontent.com/67556491/193550184-64c1ae8b-c644-45ea-9abd-33d29eb8f036.gif)](https://youtu.be/NzY8gplL_xM)


<br> 

## **적용 기술 및 구현 기능**

### **적용 기술**

> Front-End : `React.js`, `sass`

> Back-End : `My SQL`, `Bcrypt`, `Node.js` 

> Common :  `RESTful API`, `Git`, `GitHub`


### **내가 구현한 기능**

### 1) header [👉🏻 자세히 보기](https://github.com/ahn-sujin/37-1st-jeong6-jjeom-frontend/tree/master/src/components/Header)
![image](https://user-images.githubusercontent.com/67556491/193551784-9fc59d4a-7f43-4edd-ad0e-3f259f179954.gif)

- 페이지별 공통 컴포넌트인 **header레이아웃**을 잡았습니다.
- **nav 메뉴 아이콘을 클릭 이벤트**를 구현했습니다.
- **사용자가 로그인**했을 때, localstorage에 저장된 token을 가져와서 header **로그인/회원가입** 메뉴를 **로그아웃/마이페이지** 로 바뀌도록 구현했습니다.



### 2) footer [👉🏻 자세히 보기](https://github.com/ahn-sujin/37-1st-jeong6-jjeom-frontend/tree/master/src/components/Footer)
![image](https://user-images.githubusercontent.com/67556491/193551250-79229c45-b088-4844-aeeb-492d090e33a4.png)

- 페이지별 공통 컴포넌트인 **footer레이아웃**을 잡았습니다.


### 3) 장바구니 [👉🏻 자세히 보기](https://github.com/ahn-sujin/37-1st-jeong6-jjeom-frontend/tree/master/src/pages/Cart)

#### 3-1) 체크박스 구현

![장바구니1](https://user-images.githubusercontent.com/67556491/193556592-c37a7851-56de-428d-a80d-cff8cc7efff4.gif)


- 체크박스 기능을 구현 했습니다.
- 선택한 상품만 삭제되는 기능을 구현 했습니다.(백엔드와의 통신(DELETE)을 통해서 구현)
- 선택한 상품의 가격만 총 합계 금액에 표시되도록 구현했습니다.

#### 3-2) 수량 조절 기능 구현
![장바구니2](https://user-images.githubusercontent.com/67556491/193556611-7dc566c1-8e4f-4a19-aad9-a521219dfb02.gif)


- 장바구니에 있는 수량을 조절할 수 있도록 구현했습니다.
- 수량이 1이하로 떨어지지 않도록 설정해두었습니다.
- 변경된 수량이 서버에 저장되는 것은 백엔드와의 통신(PATCH)을 통해서 구현했습니다.


#### 3-3) 장바구나에 담긴 상품이 없을 때
<img width="1440" alt="스크린샷 2022-10-03 오후 7 19 12" src="https://user-images.githubusercontent.com/67556491/193555961-d12a4337-4855-4049-a57a-962f359577f0.png">

- 장바구니에 담긴 상품이 없을 때 보여질 화면을 따로 만들어 담긴 상품이 없을 때 보여지도록 구현했습니다. 

<br>

## **Reference**

- 이 프로젝트는 [정육각](https://www.jeongyookgak.com/index) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
