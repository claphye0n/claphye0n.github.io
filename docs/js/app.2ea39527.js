(function () {
  "use strict";
  var a = {
      764: function (a, i, e) {
        var t = e(9242),
          l = e(3396);
        const s = { class: "wrap" };
        function n(a, i, e, t, n, r) {
          const c = (0, l.up)("Header"),
            o = (0, l.up)("Main"),
            d = (0, l.up)("Footer");
          return (
            (0, l.wg)(),
            (0, l.iD)("div", s, [(0, l.Wm)(c), (0, l.Wm)(o), (0, l.Wm)(d)])
          );
        }
        var r = e(7139);
        const c = { class: "header" },
          o = (0, l._)("a", { href: "#1" }, "@claphye0n's Portfolio", -1),
          d = (0, l._)("i", { class: "fa fa-bars" }, null, -1),
          g = [d],
          u = (0, l.uE)(
            '<a href="#1">ABOUT ME</a><a href="#2">SKILLS</a><a href="#3">ARCHIVING</a><a href="#4">PROJECTS</a><a href="#5">AWARD</a><a href="#6">CERTIFICATE</a><a href="#7">VOLUNTEER</a><a href="#8">EDUCATION</a><a href="#9">ACTIVITY</a>',
            9
          ),
          h = [u];
        function v(a, i, e, t, s, n) {
          return (
            (0, l.wg)(),
            (0, l.iD)("div", c, [
              o,
              (0, l._)(
                "div",
                {
                  onClick:
                    i[0] ||
                    (i[0] = (...i) => a.toggleSidebar && a.toggleSidebar(...i)),
                  class: "sidebar-toggler",
                },
                g
              ),
              (0, l._)(
                "div",
                { class: (0, r.C_)(["header-btn", { active: a.showSidebar }]) },
                h,
                2
              ),
              a.showSidebar
                ? ((0, l.wg)(),
                  (0, l.iD)("div", {
                    key: 0,
                    class: "overlay",
                    onClick:
                      i[1] ||
                      (i[1] = (...i) =>
                        a.toggleSidebar && a.toggleSidebar(...i)),
                  }))
                : (0, l.kq)("", !0),
            ])
          );
        }
        const p = {
          data: () => ({ showSidebar: !1 }),
          methods: {
            setupSmoothScroll() {
              const a = document.querySelectorAll(".header-btn a"),
                i = document.querySelector(".header").offsetHeight;
              a.forEach(a => {
                a.addEventListener("click", function (a) {
                  a.preventDefault();
                  const e = this.getAttribute("href").substring(1),
                    t = document.getElementById(e),
                    l = window.pageYOffset + t.getBoundingClientRect().top;
                  window.scrollTo({ top: l - i, behavior: "smooth" });
                });
              });
            },
            toggleSidebar() {
              this.showSidebar = !this.showSidebar;
            },
          },
          mounted() {
            this.setupSmoothScroll();
          },
        };
        var m = p,
          f = e(89);
        const k = (0, f.Z)(m, [["render", v]]);
        var b = k;
        const _ = { class: "footer" };
        function w(a, i, e, t, s, n) {
          return (0, l.wg)(), (0, l.iD)("div", _);
        }
        const y = { data: () => ({}), mounted() {} };
        var I = y;
        const j = (0, f.Z)(I, [["render", w]]);
        var D = j;
        const C = { class: "main" },
          T = (0, l.uE)(
            '<div class="about"><div id="1" class="container"><h1>#ABOUT ME</h1><div class="br"></div><img class="profile pointer" src="/profile.jpg"><ul><li><i class="fa fa-user"></i> 박수현</li><li><i class="fa fa-calendar"></i> 01.11.21</li><li><i class="fa fa-envelope"></i> <a href="mailto:claphyeon@kakao.com">claphyeon@kakao.com</a></li><li><i class="fa fa-pen"></i> 금오공과대학교 컴퓨터공학과</li></ul></div></div><div class="skills"><div id="2" class="container"><h1>#SKILLS</h1><div class="br"></div><h4>Frontent</h4><div class="tag"> #HTML5 <i class="fab fa-html5"></i></div><div class="tag"> #CSS3 <i class="fab fa-css3"></i></div><div class="tag"> #JavaScript <i class="fab fa-js-square"></i></div><div class="tag"> #React <i class="fab fa-react"></i></div><div class="tag"> #Bootstrap <i class="fab fa-bootstrap"></i></div><h4>Version Control</h4><div class="tag"> #git <i class="fab fa-git"></i></div><div class="tag"> #GitHub <i class="fab fa-github"></i></div><h4>Communication</h4><div class="tag"> #Figma <i class="fab fa-figma"></i></div></div></div><div class="archiving"><div id="3" class="container"><h1>#ARCHIVING</h1><div class="br"></div><h4>GitHub</h4><div class="tag"><a target="_blank" href="https://github.com/claphye0n"><i class="fa fa-link"></i> github.com/claphye0n </a></div><h4>Programmers</h4><div class="tag"><a target="_blank" href="https://career.programmers.co.kr/pr/claphye0n"><i class="fa fa-link"></i> career.programmers.co.kr/pr/claphye0n </a></div><h4>BOJ</h4><div class="tag"><a target="_blank" href="https://www.acmicpc.net/user/claphye0n"><i class="fa fa-link"></i> acmicpc.net/user/claphye0n </a></div><h4>velog</h4><div class="tag"><a target="_blank" href="https://velog.io/@devl0g"><i class="fa fa-link"></i> velog.io/@devl0g </a></div></div></div>',
            3
          ),
          M = { class: "detail-container project" },
          S = { id: "4", class: "container" },
          E = (0, l._)("h1", null, "#PROJECTS", -1),
          A = (0, l._)("div", { class: "br" }, null, -1),
          O = { class: "image-grid" },
          x = { class: "image-container award" },
          F = { id: "5", class: "container" },
          R = (0, l._)("h1", null, "#AWARD", -1),
          q = (0, l._)("div", { class: "br" }, null, -1),
          H = { class: "award-grid" },
          L = ["src"],
          B = { class: "image-container cert" },
          P = { id: "6", class: "container" },
          V = (0, l._)("h1", null, "#CERTIFICATE", -1),
          U = (0, l._)("div", { class: "br" }, null, -1),
          G = { class: "award-grid" },
          K = ["src"],
          N = { class: "volunteer" },
          W = { id: "7", class: "container" },
          J = (0, l._)("h1", null, "#VOLUNTEER", -1),
          Y = (0, l._)("div", { class: "br" }, null, -1),
          Z = (0, l._)(
            "h4",
            null,
            '대학생 과학교육봉사단 "과학의달" 행사 지원 활동',
            -1
          ),
          Q = (0, l._)(
            "ul",
            null,
            [
              (0, l._)("li", null, "- 인증기관: DOVOL"),
              (0, l._)("li", null, "- 모집기관: 구미과학관"),
              (0, l._)("li", null, "- 자원봉사유형: 학습지도 교육"),
              (0, l._)("li", null, "- 활동구분: 오프라인"),
              (0, l._)("li", null, "- 봉사날짜: 2023.04.22"),
              (0, l._)("li", null, "- 봉사시간: 12:00~17:00 (5시간 0분)"),
              (0, l._)(
                "li",
                null,
                '- 활동내역: 대학생 과학교육봉사단 "과학의달" 행사 지원 활동'
              ),
            ],
            -1
          ),
          z = [Z, Q],
          X = { class: "image-container edu" },
          $ = { id: "8", class: "container" },
          aa = (0, l._)("h1", null, "#EDUCATION", -1),
          ia = (0, l._)("div", { class: "br" }, null, -1),
          ea = { class: "award-grid" },
          ta = { class: "detail-container activity" },
          la = { id: "9", class: "container" },
          sa = (0, l._)("h1", null, "#ACTIVITY", -1),
          na = (0, l._)("div", { class: "br" }, null, -1),
          ra = { class: "image-grid activity" },
          ca = ["src"],
          oa = ["src"],
          da = { class: "controller" },
          ga = (0, l._)("i", { class: "fa fa-arrow-left" }, null, -1),
          ua = [ga],
          ha = (0, l._)("i", { class: "fa fa-arrow-right" }, null, -1),
          va = [ha],
          pa = { class: "pagination" },
          ma = ["onClick"],
          fa = { key: 0 },
          ka = (0, l.uE)(
            '<h3>bokmark</h3><h4>개요</h4><ul><li>- 북마크를 공유할 수 있는 웹 플랫폼을 개발하였습니다.</li><li>- 사용자는 북마크를 웹 서랍에 추가하여 모아볼 수 있습니다.</li><li>- 사용자는 북마크 스크랩 기능을 사용할 수 있습니다.</li></ul><h4>GitHub</h4><div class="tag"><a target="_blank" href="https://github.com/claphye0n/bokmark"><i class="fa fa-link"></i> github.com/claphye0n/bokmark </a></div><h4>URL</h4><div class="tag"><a target="_blank" href="https://b0kmark.web.app/"><i class="fa fa-link"></i> b0kmark.web.app </a></div><h4>Part</h4><div class="tag"> #Front-end </div><div class="tag"> #Back-end </div><h4>Front-end</h4><div class="tag"> #React <i class="fab fa-react"></i></div><h4>Back-end</h4><div class="tag"> #Firebase Authentication </div><div class="tag"> #Firebase Storage </div><h4>Database</h4><div class="tag"> #Firebase Database </div><h4>Deployment</h4><div class="tag"> #Firebase </div>',
            19
          ),
          ba = [ka],
          _a = { key: 1 },
          wa = (0, l.uE)(
            '<h3>셈틀꾼 공식 홈페이지</h3><h4>개요</h4><ul><li>- 금오공과대학교 컴퓨터공학과 학술동아리 셈틀꾼의 회원들이 사용할 수 있는 공식 홈페이지입니다.</li><li>- 프로젝트 공고, 게시, 질문 사이트 등을 구현했고, 관리자 페이지를 통한 인원 관리를 구현했습니다.</li></ul><h4>GitHub</h4><div class="tag"><a target="_blank" href="https://github.com/semtlekkun"><i class="fa fa-link"></i> github.com/semtlekkun </a></div><h4>Part</h4><div class="tag"> #Front-end </div><h4>Front-end</h4><div class="tag"> #Vue.js <i class="fab fa-vuejs"></i></div><h4>Back-end</h4><div class="tag"> #Node.js <i class="fab fa-node"></i></div><div class="tag"> #Express </div><h4>Database</h4><div class="tag"> #Mongoose </div><h4>Deployment</h4><div class="tag"> #ipTIME </div>',
            16
          ),
          ya = [wa],
          Ia = { key: 2 },
          ja = (0, l.uE)(
            '<h3>아동급식카드 가맹점 안내 서비스</h3><h4>개요</h4><ul><li>- 아동급식카드 가맹점 정보 안내 홈페이지입니다.</li><li>- 결식 아동들이 보다 다양한 가맹점을 선택할 수 있도록.</li></ul><h4>GitHub</h4><div class="tag"><a target="_blank" href="https://github.com/KITtowel"><i class="fa fa-link"></i> github.com/KITtowel </a></div><h4>URL</h4><div class="tag"><a target="_blank" href="https://forunderwater.life/"><i class="fa fa-link"></i> forunderwater.life </a></div><h4>Part</h4><div class="tag"> #Front-end </div><h4>Back-end</h4><div class="tag"> #Django </div><h4>Database</h4><div class="tag"> #SQLite </div><h4>Deployment</h4><div class="tag"> #Amazon Web Services (AWS) <i class="fab fa-aws"></i></div>',
            15
          ),
          Da = [ja],
          Ca = { key: 3 },
          Ta = (0, l.uE)(
            '<h2>카페 메뉴 관리</h2><h4>개요</h4><ul><li>- 카페 메뉴를 관리 및 주문 할 수 있는 웹 플랫폼을 개발하였습니다.</li><li>- 사용자는 카페 메뉴를 추가하고, 추가된 상품을 주문할 수 있습니다.</li></ul><h4>GitHub</h4><div class="tag"><a target="_blank" href="https://github.com/claphye0n/cafe-menu"><i class="fa fa-link"></i> github.com/claphye0n/cafe-menu </a></div><h4>Part</h4><div class="tag"> #Front-end </div><div class="tag"> #Back-end </div><h4>Front-end</h4><div class="tag"> #Vue.js <i class="fab fa-vuejs"></i></div><h4>Back-end</h4><div class="tag"> #Spring </div><h4>Database</h4><div class="tag"> #MySQL </div>',
            14
          ),
          Ma = [Ta],
          Sa = { key: 4 },
          Ea = (0, l._)("h3", null, "셈틀꾼", -1),
          Aa = (0, l._)("h4", null, "활동 구분", -1),
          Oa = (0, l._)("div", { class: "tag" }, " #교내동아리활동 ", -1),
          xa = (0, l._)("h4", null, "활동기간", -1),
          Fa = (0, l._)("div", { class: "tag" }, " #2022.03~2022.12 ", -1),
          Ra = (0, l._)("h4", null, "주요활동 내용", -1),
          qa = (0, l._)(
            "ul",
            null,
            [
              (0, l._)(
                "li",
                null,
                "금오공과대학교 컴퓨터공학과 학술동아리 셈틀꾼에서 총무를 맡아 재정 관리 및 운영에 관한 일들을 주도적으로 수행"
              ),
            ],
            -1
          ),
          Ha = [Ea, Aa, Oa, xa, Fa, Ra, qa],
          La = { key: 5 },
          Ba = (0, l._)("h3", null, "KITE", -1),
          Pa = (0, l._)("h4", null, "활동 구분", -1),
          Va = (0, l._)("div", { class: "tag" }, " #교내동아리활동 ", -1),
          Ua = (0, l._)("h4", null, "활동기간", -1),
          Ga = (0, l._)("div", { class: "tag" }, " #2022.03~2022.12 ", -1),
          Ka = (0, l._)("h4", null, "주요활동 내용", -1),
          Na = (0, l._)(
            "ul",
            null,
            [
              (0, l._)(
                "li",
                null,
                "금오공과대학교 영어동아리 KITE에서 부회장을 맡아 부원들의 영어 능력 향상을 위한 활동 기획 및 실행"
              ),
            ],
            -1
          ),
          Wa = [Ba, Pa, Va, Ua, Ga, Ka, Na];
        function Ja(a, i, e, s, n, c) {
          return (
            (0, l.wg)(),
            (0, l.iD)("div", C, [
              T,
              (0, l._)("div", M, [
                (0, l._)("div", S, [
                  E,
                  A,
                  (0, l._)("div", O, [
                    (0, l._)("img", {
                      src: "/proj/semtle/1.png",
                      onClick: i[0] || (i[0] = a => c.openDetail("semtlekkun")),
                    }),
                    (0, l._)("img", {
                      src: "/proj/card/1.png",
                      onClick: i[1] || (i[1] = a => c.openDetail("card")),
                    }),
                    (0, l._)("img", {
                      src: "/proj/bokmark/1.png",
                      onClick: i[2] || (i[2] = a => c.openDetail("bokmark")),
                    }),
                    (0, l._)("img", {
                      src: "/proj/cafe/1.png",
                      onClick: i[3] || (i[3] = a => c.openDetail("cafe")),
                    }),
                  ]),
                ]),
              ]),
              (0, l._)("div", x, [
                (0, l._)("div", F, [
                  R,
                  q,
                  (0, l._)("div", H, [
                    (0, l._)("img", {
                      src: "/award/1.png",
                      onClick:
                        i[4] || (i[4] = a => c.openModal("/award/1.png")),
                    }),
                    (0, l._)("img", {
                      src: "/award/2.png",
                      onClick:
                        i[5] || (i[5] = a => c.openModal("/award/2.png")),
                    }),
                    (0, l._)("img", {
                      src: "/award/3.jpg",
                      onClick:
                        i[6] || (i[6] = a => c.openModal("/award/3.jpg")),
                    }),
                  ]),
                ]),
                n.showModal
                  ? ((0, l.wg)(),
                    (0, l.iD)(
                      "div",
                      {
                        key: 0,
                        class: "image-modal",
                        onClick:
                          i[7] ||
                          (i[7] = (...a) => c.closeModal && c.closeModal(...a)),
                      },
                      [
                        (0, l._)(
                          "img",
                          { src: n.currentAward, alt: "" },
                          null,
                          8,
                          L
                        ),
                      ]
                    ))
                  : (0, l.kq)("", !0),
              ]),
              (0, l._)("div", B, [
                (0, l._)("div", P, [
                  V,
                  U,
                  (0, l._)("div", G, [
                    (0, l._)("img", {
                      src: "/cert/1.png",
                      onClick: i[8] || (i[8] = a => c.openModal("/cert/1.png")),
                    }),
                  ]),
                ]),
                n.showModal
                  ? ((0, l.wg)(),
                    (0, l.iD)(
                      "div",
                      {
                        key: 0,
                        class: "image-modal",
                        onClick:
                          i[9] ||
                          (i[9] = (...a) => c.closeModal && c.closeModal(...a)),
                      },
                      [
                        (0, l._)(
                          "img",
                          { src: n.currentAward, alt: "" },
                          null,
                          8,
                          K
                        ),
                      ]
                    ))
                  : (0, l.kq)("", !0),
              ]),
              (0, l._)("div", N, [
                (0, l._)("div", W, [
                  J,
                  Y,
                  (0, l._)(
                    "div",
                    {
                      class: "pointer box",
                      onClick:
                        i[10] ||
                        (i[10] = a => c.openModal("/volunteer/230422.png")),
                    },
                    z
                  ),
                ]),
              ]),
              (0, l._)("div", X, [
                (0, l._)("div", $, [
                  aa,
                  ia,
                  (0, l._)("div", ea, [
                    (0, l._)("img", {
                      src: "/edu/200207.png",
                      onClick:
                        i[11] || (i[11] = a => c.openModal("/edu/200207.png")),
                    }),
                    (0, l._)("img", {
                      src: "/edu/200302.png",
                      onClick:
                        i[12] || (i[12] = a => c.openModal("/edu/200302.png")),
                    }),
                    (0, l._)("img", {
                      src: "/edu/200310.png",
                      onClick:
                        i[13] || (i[13] = a => c.openModal("/edu/200310.png")),
                    }),
                    (0, l._)("img", {
                      src: "/edu/200308.png",
                      onClick:
                        i[14] || (i[14] = a => c.openModal("/edu/200308.png")),
                    }),
                    (0, l._)("img", {
                      src: "/edu/200426.png",
                      onClick:
                        i[15] || (i[15] = a => c.openModal("/edu/200426.png")),
                    }),
                  ]),
                ]),
              ]),
              (0, l._)("div", ta, [
                (0, l._)("div", la, [
                  sa,
                  na,
                  (0, l._)("div", ra, [
                    (0, l._)("img", {
                      class: "scale-down",
                      src: "/activity/semtle1.png",
                      onClick: i[16] || (i[16] = a => c.openDetail("semtle")),
                    }),
                    (0, l._)("img", {
                      class: "scale-down",
                      src: "/activity/kite1.png",
                      onClick: i[17] || (i[17] = a => c.openDetail("kite")),
                    }),
                  ]),
                ]),
              ]),
              n.showModal
                ? ((0, l.wg)(),
                  (0, l.iD)(
                    "div",
                    {
                      key: 0,
                      class: "image-modal",
                      onClick:
                        i[18] ||
                        (i[18] = (...a) => c.closeModal && c.closeModal(...a)),
                    },
                    [
                      (0, l._)(
                        "img",
                        { src: n.currentAward, alt: "" },
                        null,
                        8,
                        ca
                      ),
                    ]
                  ))
                : (0, l.kq)("", !0),
              n.showDetail
                ? ((0, l.wg)(),
                  (0, l.iD)(
                    "div",
                    {
                      key: 1,
                      class: "detail-modal",
                      onClick:
                        i[22] ||
                        (i[22] = (...a) =>
                          c.closeDetail && c.closeDetail(...a)),
                    },
                    [
                      (0, l._)(
                        "div",
                        {
                          class: "container shadow",
                          onClick:
                            i[21] || (i[21] = (0, t.iM)(() => {}, ["stop"])),
                        },
                        [
                          (0, l._)(
                            "img",
                            { src: c.currentImage, alt: "" },
                            null,
                            8,
                            oa
                          ),
                          (0, l._)("p", da, [
                            (0, l._)(
                              "span",
                              {
                                onClick:
                                  i[19] ||
                                  (i[19] = (...a) =>
                                    c.prevImage && c.prevImage(...a)),
                              },
                              ua
                            ),
                            (0, l._)(
                              "span",
                              {
                                onClick:
                                  i[20] ||
                                  (i[20] = (...a) =>
                                    c.nextImage && c.nextImage(...a)),
                              },
                              va
                            ),
                          ]),
                          (0, l._)("p", pa, [
                            ((0, l.wg)(!0),
                            (0, l.iD)(
                              l.HY,
                              null,
                              (0, l.Ko)(
                                c.currentImages,
                                (a, i) => (
                                  (0, l.wg)(),
                                  (0, l.iD)(
                                    "span",
                                    {
                                      key: i,
                                      onClick: a => c.jumpToImage(i),
                                      class: (0, r.C_)({
                                        "active-button":
                                          n.currentImageIndex === i,
                                      }),
                                    },
                                    null,
                                    10,
                                    ma
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          "bokmark" === n.currentDetailType
                            ? ((0, l.wg)(), (0, l.iD)("div", fa, ba))
                            : (0, l.kq)("", !0),
                          "semtlekkun" === n.currentDetailType
                            ? ((0, l.wg)(), (0, l.iD)("div", _a, ya))
                            : (0, l.kq)("", !0),
                          "card" === n.currentDetailType
                            ? ((0, l.wg)(), (0, l.iD)("div", Ia, Da))
                            : (0, l.kq)("", !0),
                          "cafe" === n.currentDetailType
                            ? ((0, l.wg)(), (0, l.iD)("div", Ca, Ma))
                            : (0, l.kq)("", !0),
                          "semtle" === n.currentDetailType
                            ? ((0, l.wg)(), (0, l.iD)("div", Sa, Ha))
                            : (0, l.kq)("", !0),
                          "kite" === n.currentDetailType
                            ? ((0, l.wg)(), (0, l.iD)("div", La, Wa))
                            : (0, l.kq)("", !0),
                        ]
                      ),
                    ]
                  ))
                : (0, l.kq)("", !0),
            ])
          );
        }
        var Ya = {
          data() {
            return {
              showModal: !1,
              showDetail: !1,
              activeProject: null,
              currentAward: "",
              currentTooltip: null,
              currentDetailType: null,
              currentImageIndex: 0,
              allImages: {
                bokmark: [
                  "/proj/bokmark/1.png",
                  "/proj/bokmark/2.png",
                  "/proj/bokmark/3.png",
                  "/proj/bokmark/4.png",
                  "/proj/bokmark/5.png",
                  "/proj/bokmark/6.png",
                ],
                cafe: [
                  "/proj/cafe/1.png",
                  "/proj/cafe/2.png",
                  "/proj/cafe/3.png",
                  "/proj/cafe/4.png",
                ],
                semtle: ["/activity/semtle2.jpg", "/activity/semtle3.jpg"],
                card: [
                  "/proj/card/1.png",
                  "/proj/card/2.png",
                  "/proj/card/3.png",
                  "/proj/card/4.png",
                  "/proj/card/5.png",
                  "/proj/card/6.png",
                ],
                semtlekkun: [
                  "/proj/semtle/1.png",
                  "/proj/semtle/2.png",
                  "/proj/semtle/3.png",
                  "/proj/semtle/4.png",
                  "/proj/semtle/5.png",
                  "/proj/semtle/6.png",
                  "/proj/semtle/7.png",
                  "/proj/semtle/8.png",
                  "/proj/semtle/9.png",
                  "/proj/semtle/10.png",
                ],
                kite: [
                  "/activity/kite2.jpg",
                  "/activity/kite3.jpg",
                  "/activity/kite4.jpg",
                  "/activity/kite5.jpg",
                  "/activity/kite6.jpg",
                ],
              },
            };
          },
          computed: {
            currentImages() {
              return this.allImages[this.currentDetailType] || [];
            },
            currentImage() {
              return this.currentImages[this.currentImageIndex] || "";
            },
          },
          methods: {
            openModal(a) {
              (this.currentAward = a), (this.showModal = !0);
            },
            closeModal() {
              this.showModal = !1;
            },
            showTooltip(a) {
              this.currentTooltip = a;
            },
            hideTooltip() {
              this.currentTooltip = null;
            },
            prevImage() {
              this.currentImageIndex > 0
                ? this.currentImageIndex--
                : (this.currentImageIndex = this.currentImages.length - 1);
            },
            nextImage() {
              this.currentImageIndex < this.currentImages.length - 1
                ? this.currentImageIndex++
                : (this.currentImageIndex = 0);
            },
            jumpToImage(a) {
              this.currentImageIndex = a;
            },
            openDetail(a) {
              (this.currentDetailType = a), (this.showDetail = !0);
            },
            closeDetail() {
              (this.showDetail = !1),
                (this.currentDetailType = null),
                (this.currentImageIndex = 0);
            },
          },
          mounted() {
            this.autoSlide = setInterval(() => {
              this.nextImage();
            }, 4e3);
          },
          beforeUnmount() {
            clearInterval(this.autoSlide);
          },
        };
        const Za = (0, f.Z)(Ya, [["render", Ja]]);
        var Qa = Za;
        const za = {
          data: () => {},
          methods: {},
          watch: {},
          computed: {},
          components: { Header: b, Main: Qa, Footer: D },
          mounted: () => {},
        };
        var Xa = za;
        const $a = (0, f.Z)(Xa, [["render", n]]);
        var ai = $a;
        (0, t.ri)(ai).mount("#app");
      },
    },
    i = {};
  function e(t) {
    var l = i[t];
    if (void 0 !== l) return l.exports;
    var s = (i[t] = { exports: {} });
    return a[t].call(s.exports, s, s.exports, e), s.exports;
  }
  (e.m = a),
    (function () {
      var a = [];
      e.O = function (i, t, l, s) {
        if (!t) {
          var n = 1 / 0;
          for (d = 0; d < a.length; d++) {
            (t = a[d][0]), (l = a[d][1]), (s = a[d][2]);
            for (var r = !0, c = 0; c < t.length; c++)
              (!1 & s || n >= s) &&
              Object.keys(e.O).every(function (a) {
                return e.O[a](t[c]);
              })
                ? t.splice(c--, 1)
                : ((r = !1), s < n && (n = s));
            if (r) {
              a.splice(d--, 1);
              var o = l();
              void 0 !== o && (i = o);
            }
          }
          return i;
        }
        s = s || 0;
        for (var d = a.length; d > 0 && a[d - 1][2] > s; d--) a[d] = a[d - 1];
        a[d] = [t, l, s];
      };
    })(),
    (function () {
      e.n = function (a) {
        var i =
          a && a.__esModule
            ? function () {
                return a["default"];
              }
            : function () {
                return a;
              };
        return e.d(i, { a: i }), i;
      };
    })(),
    (function () {
      e.d = function (a, i) {
        for (var t in i)
          e.o(i, t) &&
            !e.o(a, t) &&
            Object.defineProperty(a, t, { enumerable: !0, get: i[t] });
      };
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (a) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (a, i) {
        return Object.prototype.hasOwnProperty.call(a, i);
      };
    })(),
    (function () {
      var a = { 143: 0 };
      e.O.j = function (i) {
        return 0 === a[i];
      };
      var i = function (i, t) {
          var l,
            s,
            n = t[0],
            r = t[1],
            c = t[2],
            o = 0;
          if (
            n.some(function (i) {
              return 0 !== a[i];
            })
          ) {
            for (l in r) e.o(r, l) && (e.m[l] = r[l]);
            if (c) var d = c(e);
          }
          for (i && i(t); o < n.length; o++)
            (s = n[o]), e.o(a, s) && a[s] && a[s][0](), (a[s] = 0);
          return e.O(d);
        },
        t = (self["webpackChunkclaphye0n_github_io"] =
          self["webpackChunkclaphye0n_github_io"] || []);
      t.forEach(i.bind(null, 0)), (t.push = i.bind(null, t.push.bind(t)));
    })();
  var t = e.O(void 0, [998], function () {
    return e(764);
  });
  t = e.O(t);
})();
//# sourceMappingURL=app.2ea39527.js.map
