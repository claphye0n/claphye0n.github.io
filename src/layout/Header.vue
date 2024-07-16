<template>
    <div class="header">
        <a href="#1">@suhye0n's Portfolio</a>
        <div @click="toggleSidebar" class="sidebar-toggler"><i class="fa fa-bars" /></div>
        <div class="header-btn" :class="{ active: showSidebar }">
            <a href="#1">ABOUT ME</a>
            <a href="#2">SKILLS</a>
            <a href="#3">ARCHIVING</a>
            <a href="#4">PROJECTS</a>
            <a href="#5">AWARD</a>
            <a href="#6">CERTIFICATE</a>
            <a href="#7">VOLUNTEER</a>
            <a href="#8">EDUCATION</a>
            <a href="#9">ACTIVITY</a>
        </div>
        <div class="overlay" v-if="showSidebar" @click="toggleSidebar"></div>
    </div>
</template>

<script>
const App = {
    data: () => {
        return {
            showSidebar: false
        }
    },
    methods: {
        setupSmoothScroll() {
            const links = document.querySelectorAll('.header-btn a');
            const headerHeight = document.querySelector('.header').offsetHeight;

            links.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    const href = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(href);

                    const offsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;

                    window.scrollTo({
                        top: offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                });
            });
        },

        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        }
    },
    mounted() {
        this.setupSmoothScroll();
    }
}

export default App;
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
    --shadow-color: #eae5ec;
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
    scroll-behavior: smooth;
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

a {
    text-decoration-line: none;
    color: var(--font-color);
}

.header {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    grid-area: header;
    width: 100%;
    padding: 11px 40px;
    background: var(--background-color2);
    box-shadow: 0px 2px 4px 0px var(--shadow-color);
}

.header-btn {
    display: inline-flex;
    margin-left: auto;
    gap: 20px;
    font-size: 14px;
}

.sidebar-toggler {
    display: none;
}

@media only screen and (max-width: 768px) {
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .4);
        z-index: 997;
    }

    .header-btn {
        position: fixed;
        top: 0;
        right: -250px;
        width: 250px;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0;
        padding: 100px 20px 20px;
        background-color: var(--background-color2);
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
        transition: right 0.3s ease-in-out;
        z-index: 998;
    }

    .header-btn.active {
        right: 0;
    }

    .header-btn a {
        margin-bottom: 15px;
    }

    .sidebar-toggler {
        display: inline-block;
        margin-left: auto;
        cursor: pointer;
    }
}
</style>