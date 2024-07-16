<template>
    <div class="main">
        <div class="about">
            <div id="1" class="container">
                <h1>#ABOUT ME</h1>
                <div class="br" />
                <img class="profile pointer" src="/profile.jpg" />
                <ul>
                    <li><i class="fa fa-user" /> 박수현</li>
                    <li><i class="fa fa-calendar" /> 01.11.21</li>
                    <li><i class="fa fa-envelope" /> <a href="mailto:claphyeon@kakao.com">claphyeon@kakao.com</a></li>
                    <li><i class="fa fa-pen" /> 금오공과대학교 컴퓨터공학과</li>
                </ul>
            </div>
        </div>

        <div class="skills">
            <div id="2" class="container">
                <h1>#SKILLS</h1>
                <div class="br" />
                <h4>Frontent</h4>
                <div class="tag">
                    #HTML5 <i class="fab fa-html5" />
                </div>
                <div class="tag">
                    #CSS3 <i class="fab fa-css3" />
                </div>
                <div class="tag">
                    #JavaScript <i class="fab fa-js-square" />
                </div>
                <div class="tag">
                    #React <i class="fab fa-react" />
                </div>
                <div class="tag">
                    #Bootstrap <i class="fab fa-bootstrap" />
                </div>

                <h4>Version Control</h4>
                <div class="tag">
                    #git <i class="fab fa-git" />
                </div>
                <div class="tag">
                    #GitHub <i class="fab fa-github" />
                </div>

                <h4>Communication</h4>
                <div class="tag">
                    #Figma <i class="fab fa-figma" />
                </div>

                <!--h4>Certificate</h4-->
            </div>
        </div>

        <div class="archiving">
            <div id="3" class="container">
                <h1>#ARCHIVING</h1>
                <div class="br" />
                <h4>GitHub</h4>
                <div class="tag">
                    <a target="_blank" href="https://github.com/suhye0n">
                        <i class="fa fa-link" /> github.com/suhye0n
                    </a>
                </div>
                <h4>Programmers</h4>
                <div class="tag">
                    <a target="_blank" href="https://career.programmers.co.kr/pr/suhye0n">
                        <i class="fa fa-link" /> career.programmers.co.kr/pr/suhye0n
                    </a>
                </div>
                <h4>BOJ</h4>
                <div class="tag">
                    <a target="_blank" href="https://www.acmicpc.net/user/claphye0n">
                        <i class="fa fa-link" /> acmicpc.net/user/claphye0n
                    </a>
                </div>
                <h4>velog</h4>
                <div class="tag">
                    <a target="_blank" href="https://velog.io/@devl0g">
                        <i class="fa fa-link" /> velog.io/@devl0g
                    </a>
                </div>
            </div>
        </div>

        <div class="detail-container project">
            <div id="4" class="container">
                <h1>#PROJECTS</h1>
                <div class="br" />
                <div class="image-grid">
                    <img src="/proj/semtle/1.png" @click="openDetail('semtlekkun')" />
                    <img src="/proj/card/1.png" @click="openDetail('card')" />
                    <img src="/proj/bokmark/1.png" @click="openDetail('bokmark')" />
                    <img src="/proj/cafe/1.png" @click="openDetail('cafe')" />
                </div>
            </div>
        </div>

        <div class="image-container award">
            <div id="5" class="container">
                <h1>#AWARD</h1>
                <div class="br" />
                <div class="award-grid">
                    <img src="/award/1.png" @click="openModal('/award/1.png')" />
                    <img src="/award/2.png" @click="openModal('/award/2.png')" />
                    <img src="/award/3.jpg" @click="openModal('/award/3.jpg')" />
                </div>
            </div>
            <div v-if="showModal" class="image-modal" @click="closeModal">
                <img :src="currentAward" alt="" />
            </div>
        </div>

        <div class="image-container cert">
            <div id="6" class="container">
                <h1>#CERTIFICATE</h1>
                <div class="br" />
                <div class="award-grid">
                    <img src="/cert/1.png" @click="openModal('/cert/1.png')" />
                </div>
            </div>
            <div v-if="showModal" class="image-modal" @click="closeModal">
                <img :src="currentAward" alt="" />
            </div>
        </div>

        <div class="volunteer">
            <div id="7" class="container">
                <h1>#VOLUNTEER</h1>
                <div class="br" />
                <div class="pointer box" @click="openModal('/volunteer/230422.png')">
                    <h4>대학생 과학교육봉사단 "과학의달" 행사 지원 활동</h4>
                    <ul>
                        <li>- 인증기관: DOVOL</li>
                        <li>- 모집기관: 구미과학관</li>
                        <li>- 자원봉사유형: 학습지도 교육</li>
                        <li>- 활동구분: 오프라인</li>
                        <li>- 봉사날짜: 2023.04.22</li>
                        <li>- 봉사시간: 12:00~17:00 (5시간 0분)</li>
                        <li>- 활동내역: 대학생 과학교육봉사단 "과학의달" 행사 지원 활동</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="image-container edu">
            <div id="8" class="container">
                <h1>#EDUCATION</h1>
                <div class="br" />
                <div class="award-grid">
                    <img src="/edu/200207.png" @click="openModal('/edu/200207.png')" />
                    <img src="/edu/200302.png" @click="openModal('/edu/200302.png')" />
                    <img src="/edu/200310.png" @click="openModal('/edu/200310.png')" />
                    <img src="/edu/200308.png" @click="openModal('/edu/200308.png')" />
                    <img src="/edu/200426.png" @click="openModal('/edu/200426.png')" />
                </div>
            </div>
        </div>

        <div class="detail-container activity">
            <div id="9" class="container">
                <h1>#ACTIVITY</h1>
                <div class="br" />
                <div class="image-grid activity">
                    <img class="scale-down" src="/activity/semtle1.png" @click="openDetail('semtle')" />
                    <img class="scale-down" src="/activity/kite1.png" @click="openDetail('kite')" />
                </div>
            </div>
        </div>

        <div v-if="showModal" class="image-modal" @click="closeModal">
            <img :src="currentAward" alt="" />
        </div>

        <div v-if="showDetail" class="detail-modal" @click="closeDetail">
            <div class="container shadow" @click.stop>
                <img :src="currentImage" alt="" />
                <p class="controller">
                    <span @click="prevImage"><i class="fa fa-arrow-left" /></span>
                    <span @click="nextImage"><i class="fa fa-arrow-right" /></span>
                </p>
                <p class="pagination">
                    <span v-for="(image, index) in currentImages" :key="index" @click="jumpToImage(index)"
                        :class="{ 'active-button': currentImageIndex === index }">
                    </span>
                </p>
                <div v-if="currentDetailType === 'bokmark'">
                    <h3>bokmark</h3>
                    <h4>개요</h4>
                    <ul>
                        <li>- 북마크를 공유할 수 있는 웹 플랫폼을 개발하였습니다.</li>
                        <li>- 사용자는 북마크를 웹 서랍에 추가하여 모아볼 수 있습니다.</li>
                        <li>- 사용자는 북마크 스크랩 기능을 사용할 수 있습니다.</li>
                    </ul>
                    <h4>GitHub</h4>
                    <div class="tag">
                        <a target="_blank" href="https://github.com/suhye0n/bokmark">
                            <i class="fa fa-link" /> github.com/suhye0n/bokmark
                        </a>
                    </div>
                    <h4>URL</h4>
                    <div class="tag">
                        <a target="_blank" href="https://b0kmark.web.app/">
                            <i class="fa fa-link" /> b0kmark.web.app
                        </a>
                    </div>
                    <h4>Part</h4>
                    <div class="tag">
                        #Front-end
                    </div>
                    <div class="tag">
                        #Back-end
                    </div>
                    <h4>Front-end</h4>
                    <div class="tag">
                        #React <i class="fab fa-react" />
                    </div>
                    <h4>Back-end</h4>
                    <div class="tag">
                        #Firebase Authentication
                    </div>
                    <div class="tag">
                        #Firebase Storage
                    </div>
                    <h4>Database</h4>
                    <div class="tag">
                        #Firebase Database
                    </div>
                    <h4>Deployment</h4>
                    <div class="tag">
                        #Firebase
                    </div>
                </div>
                <div v-if="currentDetailType === 'semtlekkun'">
                    <h3>셈틀꾼 공식 홈페이지</h3>
                    <h4>개요</h4>
                    <ul>
                        <li>- 금오공과대학교 컴퓨터공학과 학술동아리 셈틀꾼의 회원들이 사용할 수 있는 공식 홈페이지입니다.</li>
                        <li>- 프로젝트 공고, 게시, 질문 사이트 등을 구현했고, 관리자 페이지를 통한 인원 관리를 구현했습니다.</li>
                    </ul>
                    <h4>GitHub</h4>
                    <div class="tag">
                        <a target="_blank" href="https://github.com/semtlekkun">
                            <i class="fa fa-link" /> github.com/semtlekkun
                        </a>
                    </div>
                    <h4>Part</h4>
                    <div class="tag">
                        #Front-end
                    </div>
                    <h4>Front-end</h4>
                    <div class="tag">
                        #Vue.js <i class="fab fa-vuejs" />
                    </div>
                    <h4>Back-end</h4>
                    <div class="tag">
                        #Node.js <i class="fab fa-node" />
                    </div>
                    <div class="tag">
                        #Express
                    </div>
                    <h4>Database</h4>
                    <div class="tag">
                        #Mongoose
                    </div>
                    <h4>Deployment</h4>
                    <div class="tag">
                        #ipTIME
                    </div>
                </div>
                <div v-if="currentDetailType === 'card'">
                    <h3>아동급식카드 가맹점 안내 서비스</h3>
                    <h4>개요</h4>
                    <ul>
                        <li>- 아동급식카드 가맹점 정보 안내 홈페이지입니다.</li>
                        <li>- 결식 아동들이 보다 다양한 가맹점을 선택할 수 있도록.</li>
                    </ul>
                    <h4>GitHub</h4>
                    <div class="tag">
                        <a target="_blank" href="https://github.com/KITtowel">
                            <i class="fa fa-link" /> github.com/KITtowel
                        </a>
                    </div>
                    <h4>URL</h4>
                    <div class="tag">
                        <a target="_blank" href="https://forunderwater.life/">
                            <i class="fa fa-link" /> forunderwater.life
                        </a>
                    </div>
                    <h4>Part</h4>
                    <div class="tag">
                        #Front-end
                    </div>
                    <h4>Back-end</h4>
                    <div class="tag">
                        #Django
                    </div>
                    <h4>Database</h4>
                    <div class="tag">
                        #SQLite
                    </div>
                    <h4>Deployment</h4>
                    <div class="tag">
                        #Amazon Web Services (AWS) <i class="fab fa-aws" />
                    </div>
                </div>
                <div v-if="currentDetailType === 'cafe'">
                    <h2>카페 메뉴 관리</h2>
                    <h4>개요</h4>
                    <ul>
                        <li>- 카페 메뉴를 관리 및 주문 할 수 있는 웹 플랫폼을 개발하였습니다.</li>
                        <li>- 사용자는 카페 메뉴를 추가하고, 추가된 상품을 주문할 수 있습니다.</li>
                    </ul>
                    <h4>GitHub</h4>
                    <div class="tag">
                        <a target="_blank" href="https://github.com/suhye0n/cafe-menu">
                            <i class="fa fa-link" /> github.com/suhye0n/cafe-menu
                        </a>
                    </div>
                    <h4>Part</h4>
                    <div class="tag">
                        #Front-end
                    </div>
                    <div class="tag">
                        #Back-end
                    </div>
                    <h4>Front-end</h4>
                    <div class="tag">
                        #Vue.js <i class="fab fa-vuejs" />
                    </div>
                    <h4>Back-end</h4>
                    <div class="tag">
                        #Spring
                    </div>
                    <h4>Database</h4>
                    <div class="tag">
                        #MySQL
                    </div>
                </div>

                <div v-if="currentDetailType === 'semtle'">
                    <h3>셈틀꾼</h3>
                    <h4>활동 구분</h4>
                    <div class="tag">
                        #교내동아리활동
                    </div>
                    <h4>활동기간</h4>
                    <div class="tag">
                        #2022.03~2022.12
                    </div>
                    <h4>주요활동 내용</h4>
                    <ul>
                        <li>금오공과대학교 컴퓨터공학과 학술동아리 셈틀꾼에서 총무를 맡아 재정 관리 및 운영에 관한 일들을 주도적으로 수행</li>
                    </ul>
                </div>

                <div v-if="currentDetailType === 'kite'">
                    <h3>KITE</h3>
                    <h4>활동 구분</h4>
                    <div class="tag">
                        #교내동아리활동
                    </div>
                    <h4>활동기간</h4>
                    <div class="tag">
                        #2022.03~2022.12
                    </div>
                    <h4>주요활동 내용</h4>
                    <ul>
                        <li>금오공과대학교 영어동아리 KITE에서 부회장을 맡아 부원들의 영어 능력 향상을 위한 활동 기획 및 실행</li>
                    </ul>
                </div>

            </div>
        </div>

        <!--div id="6" class="container">
            <h1>#CAREER</h1>
        </div-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            showDetail: false,
            activeProject: null,
            currentAward: '',
            currentTooltip: null,
            currentDetailType: null,
            currentImageIndex: 0,
            allImages: {
                bokmark: ["/proj/bokmark/1.png", "/proj/bokmark/2.png", "/proj/bokmark/3.png", "/proj/bokmark/4.png", "/proj/bokmark/5.png", "/proj/bokmark/6.png"],
                cafe: ["/proj/cafe/1.png", "/proj/cafe/2.png", "/proj/cafe/3.png", "/proj/cafe/4.png"],
                semtle: ["/activity/semtle2.jpg", "/activity/semtle3.jpg"],
                card: ["/proj/card/1.png", "/proj/card/2.png", "/proj/card/3.png", "/proj/card/4.png", "/proj/card/5.png", "/proj/card/6.png"],
                semtlekkun: ["/proj/semtle/1.png", "/proj/semtle/2.png", "/proj/semtle/3.png", "/proj/semtle/4.png", "/proj/semtle/5.png", "/proj/semtle/6.png", "/proj/semtle/7.png", "/proj/semtle/8.png", "/proj/semtle/9.png", "/proj/semtle/10.png"],
                kite: ["/activity/kite2.jpg", "/activity/kite3.jpg", "/activity/kite4.jpg", "/activity/kite5.jpg", "/activity/kite6.jpg"]
            },
        };
    },
    computed: {
        currentImages() {
            return this.allImages[this.currentDetailType] || [];
        },
        currentImage() {
            return this.currentImages[this.currentImageIndex] || '';
        },
    },
    methods: {
        openModal(imageUrl) {
            this.currentAward = imageUrl;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        showTooltip(tooltipText) {
            this.currentTooltip = tooltipText;
        },
        hideTooltip() {
            this.currentTooltip = null;
        },
        prevImage() {
            if (this.currentImageIndex > 0) {
                this.currentImageIndex--;
            } else {
                this.currentImageIndex = this.currentImages.length - 1;
            }
        },
        nextImage() {
            if (this.currentImageIndex < this.currentImages.length - 1) {
                this.currentImageIndex++;
            } else {
                this.currentImageIndex = 0;
            }
        },
        jumpToImage(index) {
            this.currentImageIndex = index;
        },
        openDetail(type) {
            this.currentDetailType = type;
            this.showDetail = true;
        },
        closeDetail() {
            this.showDetail = false;
            this.currentDetailType = null;
            this.currentImageIndex = 0;
        },
    },
    mounted() {
        this.autoSlide = setInterval(() => {
            this.nextImage();
        }, 4000);
    },
    beforeUnmount() {
        clearInterval(this.autoSlide);
    },
}
</script>

<style>
@font-face {
    font-family: 'GangwonState';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/GangwonState.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

:root {
    --point-color: #c954f830;
    --point-color2: #3e1a4b60;
    --point-color3: #fafbff;
    --point-color4: #fafffa;
    --point-color5: #fffffa;
    --point-color6: #fefaff;
    --point-color7: #fffcfa;
    --point-color8: #fffafc;
    --point-color9: #fffcfa;
    --shadow-color: #e5ece6;
    --background-color1: #f8f4fa;
    --background-color2: #fefaff;
    --font-size: 16px;
    --font-color: #726f69;
    --content-width: 950px;
    --transition: all 0.4s;
    --border-radius: 10px;
    --container-padding: 40px;
}

* {
    font-family: 'GangwonState';
    margin: 0;
    padding: 0;
    border: 0;
    font-size: inherit;
    list-style: none;
    box-sizing: border-box;
}

html {
    display: block;
}

body {
    padding-top: 50px;
    background: var(--background-color1);
    font-size: var(--font-size);
    line-height: 1.8;
    word-wrap: break-word;
    color: var(--font-color);
    background-size: cover;
    overflow-y: scroll;
}

::-webkit-scrollbar {
	width: 0;
}

.pointer {
    cursor: pointer;
    transition: var(--transition);
}

.pointer:hover {
    cursor: pointer;
	opacity: .8;
}

.br {
    margin: 40px 0;
}

.scale-down {
    object-fit: scale-down !important;
}

.main {}

.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .4);
    z-index: 1000;
}

.image-modal img {
    max-width: 90%;
    max-height: 90%;
    border-radius: var(--border-radius);
    box-shadow: 8px 6px 0px var(--shadow-color);
}

.detail-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
}

.detail-modal h4 {
    margin: 20px 0;
}

.detail-modal .container {
    width: 90%;
    max-width: 750px;
    height: 70%;
    overflow: auto;
}

.detail-modal .container img {
    width: 100%;
    height: 350px;
    object-fit: cover;
}

.controller {
    position: relative;
    top: -200px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    max-width: 670px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
}

.controller span {
    cursor: pointer;
    background-color: var(--point-color3);
    opacity: .7;
    padding: 12px 19px;
    margin: 0 30px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.image-grid img {
    width: calc(100% - 20px) !important;
    height: 80%;
}

.award-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.award-grid img {
    width: calc(100% - 20px) !important;
    height: 80%;
    object-fit: cover;
}

.pagination {
    overflow: hidden;
    position: relative;
    bottom: 50px;
    width: 100%;
    text-align: center;
    z-index: 10;
}

.pagination span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: var(--point-color);
    margin: 0 5px;
    cursor: pointer;
    border-radius: 50%;
}

.pagination span.active-button {
    background: var(--point-color2);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.about {
    background: var(--point-color3);
}

.skills, .cert {
    background: var(--point-color4);
}

.archiving {
    background: var(--point-color5);
}

.project {
    background: var(--point-color6);
}

.award {
    background: var(--point-color7);
}

.edu {
    background: var(--point-color8);
}

.activity {
    background: var(--point-color9);
}

.container {
    width: 90%;
    max-width: var(--content-width);
    margin: auto;
    z-index: 2;
    border-radius: var(--border-radius);
    padding: 160px var(--container-padding);
}

.shadow {
    background: var(--background-color1);
    box-shadow: 0px 2px 4px 0px var(--shadow-color);
    padding: var(--container-padding);
}

.container h1 {
    text-align: left;
    display: inline-block;
    border-radius: calc(var(--border-radius) + 15px);
    background-color: var(--point-color2);
    padding: 6px 14px;
    font-weight: 400;
    text-transform: capitalize;
    color: #fff;
    box-shadow: 0px 2px 4px 0px var(--shadow-color);
}

.container h3 {
    font-size: 20px;
}

.container h4 {
    font-size: 17px;
    margin: 14px 0 6px;
    color: var(--point-color2);
    text-align: left;
}

.container img {
    width: 200px;
}

.about li {
    text-align: center;
}

.profile {
    display: block;
    border-radius: 50%;
    margin: 30px auto;
    box-shadow: 8px 6px 0px var(--shadow-color);
    transition: var(--transition);
}

.image-container img,
.detail-container img {
    cursor: pointer;
    margin: 30px 12px;
    border-radius: var(--border-radius);
    box-shadow: 8px 6px 0px var(--shadow-color);
    transition: var(--transition);
    max-height: 400px;
}

.box {
    cursor: pointer;
    margin: 30px 12px;
    padding: 17px 34px;
    border-radius: var(--border-radius);
    box-shadow: 8px 6px 0px var(--shadow-color);
    transition: var(--transition);
    background-color: #fff;
}

.detail-container img {
    width: 40%;
    height: 82%;
    object-fit: cover;
}

.image-container img:hover,
.detail-container img:hover {
    opacity: .6;
}

.skills i {
    margin-right: 5px;
}

.tag {
    position: relative;
    width: auto;
    height: auto;
    display: inline-block;
    border-radius: calc(var(--border-radius) + 15px);
    background-color: #f0ede6;
    padding: 6px 14px;
    font-weight: 400;
    color: var(--font-color);
    box-shadow: inset 3px 3px 6px var(--shadow-color), 2px 2px 4px var(--shadow-color);
    margin: 0 10px 10px 0;
    cursor: pointer;
    transition: var(--transition);
    white-space: normal;
    overflow-wrap: break-word;
}

.tag:hover {
    opacity: .6;
}

.tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 12px;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    z-index: 10;
    opacity: 1;
}

.tooltip::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #000 transparent transparent transparent;
}

.activity img {
    box-shadow: none;
}

@media (max-width: 768px) {
    .image-grid {
        grid-template-columns: repeat(1, 1fr);
    }

    .award-grid {
        grid-template-columns: repeat(1, 1fr);
    }

    .activity {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>