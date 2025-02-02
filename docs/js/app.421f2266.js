(function () {
  "use strict";
  var a = {
      130: function (a, i, e) {
        var l = e(963),
          t = e(252);
        const s = { class: "wrap" };
        function n(a, i, e, l, n, r) {
          const c = (0, t.up)("Header"),
            o = (0, t.up)("Main"),
            d = (0, t.up)("Footer");
          return (
            (0, t.wg)(),
            (0, t.iD)("div", s, [(0, t.Wm)(c), (0, t.Wm)(o), (0, t.Wm)(d)])
          );
        }
        var r = e(577);
        const c = { class: "header" },
          o = (0, t._)("a", { href: "#1" }, "@claphye0n's Portfolio", -1),
          d = (0, t._)("i", { class: "fa fa-bars" }, null, -1),
          g = [d],
          u = (0, t.uE)(
            '<a href="#1">ABOUT ME</a><a href="#2">SKILLS</a><a href="#3">ARCHIVING</a><a href="#4">PROJECTS</a><a href="#5">AWARD</a><a href="#6">CERTIFICATE</a><a href="#7">VOLUNTEER</a><a href="#8">EDUCATION</a><a href="#9">ACTIVITY</a>',
            9
          ),
          h = [u];
        function v(a, i, e, l, s, n) {
          return (
            (0, t.wg)(),
            (0, t.iD)("div", c, [
              o,
              (0, t._)(
                "div",
                {
                  onClick:
                    i[0] ||
                    (i[0] = (...i) => a.toggleSidebar && a.toggleSidebar(...i)),
                  class: "sidebar-toggler",
                },
                g
              ),
              (0, t._)(
                "div",
                { class: (0, r.C_)(["header-btn", { active: a.showSidebar }]) },
                h,
                2
              ),
              a.showSidebar
                ? ((0, t.wg)(),
                  (0, t.iD)("div", {
                    key: 0,
                    class: "overlay",
                    onClick:
                      i[1] ||
                      (i[1] = (...i) =>
                        a.toggleSidebar && a.toggleSidebar(...i)),
                  }))
                : (0, t.kq)("", !0),
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
                    l = document.getElementById(e),
                    t = window.pageYOffset + l.getBoundingClientRect().top;
                  window.scrollTo({ top: t - i, behavior: "smooth" });
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
          f = e(744);
        const k = (0, f.Z)(m, [["render", v]]);
        var b = k;
        const _ = { class: "footer" };
        function w(a, i, e, l, s, n) {
          return (0, t.wg)(), (0, t.iD)("div", _);
        }
        const y = { data: () => ({}), mounted() {} };
        var I = y;
        const D = (0, f.Z)(I, [["render", w]]);
        var j = D;
        const C = { class: "main" },
          T = (0, t.uE)(
            '<div class="about"><div id="1" class="container"><h1>#ABOUT ME</h1><div class="br"></div><img class="profile pointer" src="/profile.jpg"><ul><li><i class="fa fa-user"></i> 박수현</li><li><i class="fa fa-calendar"></i> 01.11.21</li><li><i class="fa fa-envelope"></i> <a href="mailto:claphyeon@kakao.com">claphyeon@kakao.com</a></li><li><i class="fa fa-pen"></i> 금오공과대학교 컴퓨터공학과</li></ul></div></div><div class="skills"><div id="2" class="container"><h1>#SKILLS</h1><div class="br"></div><h4>Frontent</h4><div class="tag"> #HTML5 <i class="fab fa-html5"></i></div><div class="tag"> #CSS3 <i class="fab fa-css3"></i></div><div class="tag"> #JavaScript <i class="fab fa-js-square"></i></div><div class="tag"> #React <i class="fab fa-react"></i></div><div class="tag"> #Bootstrap <i class="fab fa-bootstrap"></i></div><h4>Version Control</h4><div class="tag"> #git <i class="fab fa-git"></i></div><div class="tag"> #GitHub <i class="fab fa-github"></i></div><h4>Communication</h4><div class="tag"> #Figma <i class="fab fa-figma"></i></div></div></div><div class="archiving"><div id="3" class="container"><h1>#ARCHIVING</h1><div class="br"></div><h4>GitHub</h4><div class="tag"><a target="_blank" href="https://github.com/claphye0n"><i class="fa fa-link"></i> github.com/claphye0n </a></div><h4>Programmers</h4><div class="tag"><a target="_blank" href="https://career.programmers.co.kr/pr/claphye0n"><i class="fa fa-link"></i> career.programmers.co.kr/pr/claphye0n </a></div><h4>BOJ</h4><div class="tag"><a target="_blank" href="https://www.acmicpc.net/user/claphye0n"><i class="fa fa-link"></i> acmicpc.net/user/claphye0n </a></div><h4>velog</h4><div class="tag"><a target="_blank" href="https://velog.io/@devl0g"><i class="fa fa-link"></i> velog.io/@devl0g </a></div></div></div>',
            3
          ),
          S = { class: "detail-container project" },
          M = { id: "4", class: "container" },
          E = (0, t._)("h1", null, "#PROJECTS", -1),
          A = (0, t._)("div", { class: "br" }, null, -1),
          O = { class: "image-grid" },
          x = { class: "image-container award" },
          F = { id: "5", class: "container" },
          R = (0, t._)("h1", null, "#AWARD", -1),
          q = (0, t._)("div", { class: "br" }, null, -1),
          H = { class: "award-grid" },
          L = ["src"],
          B = { class: "image-container cert" },
          P = { id: "6", class: "container" },
          V = (0, t._)("h1", null, "#CERTIFICATE", -1),
          U = (0, t._)("div", { class: "br" }, null, -1),
          G = { class: "award-grid" },
          K = ["src"],
          N = { class: "volunteer" },
          W = { id: "7", class: "container" },
          J = (0, t._)("h1", null, "#VOLUNTEER", -1),
          Y = (0, t._)("div", { class: "br" }, null, -1),
          Z = (0, t._)(
            "h4",
            null,
            '대학생 과학교육봉사단 "과학의달" 행사 지원 활동',
            -1
          ),
          Q = (0, t._)(
            "ul",
            null,
            [
              (0, t._)("li", null, "- 인증기관: DOVOL"),
              (0, t._)("li", null, "- 모집기관: 구미과학관"),
              (0, t._)("li", null, "- 자원봉사유형: 학습지도 교육"),
              (0, t._)("li", null, "- 활동구분: 오프라인"),
              (0, t._)("li", null, "- 봉사날짜: 2023.04.22"),
              (0, t._)("li", null, "- 봉사시간: 12:00~17:00 (5시간 0분)"),
              (0, t._)(
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
          aa = (0, t._)("h1", null, "#EDUCATION", -1),
          ia = (0, t._)("div", { class: "br" }, null, -1),
          ea = { class: "award-grid" },
          la = { class: "detail-container activity" },
          ta = { id: "9", class: "container" },
          sa = (0, t._)("h1", null, "#ACTIVITY", -1),
          na = (0, t._)("div", { class: "br" }, null, -1),
          ra = { class: "image-grid activity" },
          ca = ["src"],
          oa = ["src"],
          da = { class: "controller" },
          ga = (0, t._)("i", { class: "fa fa-arrow-left" }, null, -1),
          ua = [ga],
          ha = (0, t._)("i", { class: "fa fa-arrow-right" }, null, -1),
          va = [ha],
          pa = { class: "pagination" },
          ma = ["onClick"],
          fa = { key: 0 },
          ka = (0, t.uE)(
            '<h3>bokmark</h3><h4>개요</h4><ul><li>- 북마크를 공유할 수 있는 웹 플랫폼을 개발하였습니다.</li><li>- 사용자는 북마크를 웹 서랍에 추가하여 모아볼 수 있습니다.</li><li>- 사용자는 북마크 스크랩 기능을 사용할 수 있습니다.</li></ul><h4>GitHub</h4><div class="tag"><a target="_blank" href="https://github.com/claphye0n/bokmark"><i class="fa fa-link"></i> github.com/claphye0n/bokmark </a></div><h4>URL</h4><div class="tag"><a target="_blank" href="https://b0kmark.web.app/"><i class="fa fa-link"></i> b0kmark.web.app </a></div><h4>Part</h4><div class="tag"> #Front-end </div><div class="tag"> #Back-end </div><h4>Front-end</h4><div class="tag"> #React <i class="fab fa-react"></i></div><h4>Back-end</h4><div class="tag"> #Firebase Authentication </div><div class="tag"> #Firebase Storage </div><h4>Database</h4><div class="tag"> #Firebase Database </div><h4>Deployment</h4><div class="tag"> #Firebase </div>',
            19
          ),
          ba = [ka],
          _a = { key: 1 },
          wa = (0, t.uE)(
            '<h3>셈틀꾼 공식 홈페이지</h3><h4>개요</h4><ul><li>- 금오공과대학교 컴퓨터공학과 학술동아리 셈틀꾼의 회원들이 사용할 수 있는 공식 홈페이지입니다.</li><li>- 프로젝트 공고, 게시, 질문 사이트 등을 구현했고, 관리자 페이지를 통한 인원 관리를 구현했습니다.</li></ul><h4>GitHub</h4><div class="tag"><a target="_blank" href="https://github.com/semtlekkun"><i class="fa fa-link"></i> github.com/semtlekkun </a></div><h4>Part</h4><div class="tag"> #Front-end </div><h4>Front-end</h4><div class="tag"> #Vue.js <i class="fab fa-vuejs"></i></div><h4>Back-end</h4><div class="tag"> #Node.js <i class="fab fa-node"></i></div><div class="tag"> #Express </div><h4>Database</h4><div class="tag"> #Mongoose </div><h4>Deployment</h4><div class="tag"> #ipTIME </div>',
            16
          ),
          ya = [wa],
          Ia = { key: 2 },
          Da = (0, t.uE)(
            '<h3>아동급식카드 가맹점 안내 서비스</h3><h4>개요</h4><ul><li>- 아동급식카드 가맹점 정보 안내 홈페이지입니다.</li><li>- 결식 아동들이 보다 다양한 가맹점을 선택할 수 있도록.</li></ul><h4>GitHub</h4><div class="tag"><a target="_blank" href="https://github.com/KITtowel"><i class="fa fa-link"></i> github.com/KITtowel </a></div><h4>URL</h4><div class="tag"><a target="_blank" href="https://forunderwater.life/"><i class="fa fa-link"></i> forunderwater.life </a></div><h4>Part</h4><div class="tag"> #Front-end </div><h4>Back-end</h4><div class="tag"> #Django </div><h4>Database</h4><div class="tag"> #SQLite </div><h4>Deployment</h4><div class="tag"> #Amazon Web Services (AWS) <i class="fab fa-aws"></i></div>',
            15
          ),
          ja = [Da],
          Ca = { key: 3 },
          Ta = (0, t.uE)(
            '<h2>카페 메뉴 관리</h2><h4>개요</h4><ul><li>- 카페 메뉴를 관리 및 주문 할 수 있는 웹 플랫폼을 개발하였습니다.</li><li>- 사용자는 카페 메뉴를 추가하고, 추가된 상품을 주문할 수 있습니다.</li></ul><h4>GitHub</h4><div class="tag"><a target="_blank" href="https://github.com/claphye0n/cafe-menu"><i class="fa fa-link"></i> github.com/claphye0n/cafe-menu </a></div><h4>Part</h4><div class="tag"> #Front-end </div><div class="tag"> #Back-end </div><h4>Front-end</h4><div class="tag"> #Vue.js <i class="fab fa-vuejs"></i></div><h4>Back-end</h4><div class="tag"> #Spring </div><h4>Database</h4><div class="tag"> #MySQL </div>',
            14
          ),
          Sa = [Ta],
          Ma = { key: 4 },
          Ea = (0, t._)("h3", null, "셈틀꾼", -1),
          Aa = (0, t._)("h4", null, "활동 구분", -1),
          Oa = (0, t._)("div", { class: "tag" }, " #교내동아리활동 ", -1),
          xa = (0, t._)("h4", null, "활동기간", -1),
          Fa = (0, t._)("div", { class: "tag" }, " #2022.03~2022.12 ", -1),
          Ra = (0, t._)("h4", null, "주요활동 내용", -1),
          qa = (0, t._)(
            "ul",
            null,
            [
              (0, t._)(
                "li",
                null,
                "금오공과대학교 컴퓨터공학과 학술동아리 셈틀꾼에서 총무를 맡아 재정 관리 및 운영에 관한 일들을 주도적으로 수행"
              ),
            ],
            -1
          ),
          Ha = [Ea, Aa, Oa, xa, Fa, Ra, qa],
          La = { key: 5 },
          Ba = (0, t._)("h3", null, "KITE", -1),
          Pa = (0, t._)("h4", null, "활동 구분", -1),
          Va = (0, t._)("div", { class: "tag" }, " #교내동아리활동 ", -1),
          Ua = (0, t._)("h4", null, "활동기간", -1),
          Ga = (0, t._)("div", { class: "tag" }, " #2022.03~2022.12 ", -1),
          Ka = (0, t._)("h4", null, "주요활동 내용", -1),
          Na = (0, t._)(
            "ul",
            null,
            [
              (0, t._)(
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
            (0, t.wg)(),
            (0, t.iD)("div", C, [
              T,
              (0, t._)("div", S, [
                (0, t._)("div", M, [
                  E,
                  A,
                  (0, t._)("div", O, [
                    (0, t._)("img", {
                      src: "/proj/semtle/1.png",
                      onClick: i[0] || (i[0] = a => c.openDetail("semtlekkun")),
                    }),
                    (0, t._)("img", {
                      src: "/proj/card/1.png",
                      onClick: i[1] || (i[1] = a => c.openDetail("card")),
                    }),
                    (0, t._)("img", {
                      src: "/proj/bokmark/1.png",
                      onClick: i[2] || (i[2] = a => c.openDetail("bokmark")),
                    }),
                    (0, t._)("img", {
                      src: "/proj/cafe/1.png",
                      onClick: i[3] || (i[3] = a => c.openDetail("cafe")),
                    }),
                  ]),
                ]),
              ]),
              (0, t._)("div", x, [
                (0, t._)("div", F, [
                  R,
                  q,
                  (0, t._)("div", H, [
                    (0, t._)("img", {
                      src: "/award/1.png",
                      onClick:
                        i[4] || (i[4] = a => c.openModal("/award/1.png")),
                    }),
                    (0, t._)("img", {
                      src: "/award/2.png",
                      onClick:
                        i[5] || (i[5] = a => c.openModal("/award/2.png")),
                    }),
                  ]),
                ]),
                n.showModal
                  ? ((0, t.wg)(),
                    (0, t.iD)(
                      "div",
                      {
                        key: 0,
                        class: "image-modal",
                        onClick:
                          i[6] ||
                          (i[6] = (...a) => c.closeModal && c.closeModal(...a)),
                      },
                      [
                        (0, t._)(
                          "img",
                          { src: n.currentAward, alt: "" },
                          null,
                          8,
                          L
                        ),
                      ]
                    ))
                  : (0, t.kq)("", !0),
              ]),
              (0, t._)("div", B, [
                (0, t._)("div", P, [
                  V,
                  U,
                  (0, t._)("div", G, [
                    (0, t._)("img", {
                      src: "/cert/1.png",
                      onClick: i[7] || (i[7] = a => c.openModal("/cert/1.png")),
                    }),
                  ]),
                ]),
                n.showModal
                  ? ((0, t.wg)(),
                    (0, t.iD)(
                      "div",
                      {
                        key: 0,
                        class: "image-modal",
                        onClick:
                          i[8] ||
                          (i[8] = (...a) => c.closeModal && c.closeModal(...a)),
                      },
                      [
                        (0, t._)(
                          "img",
                          { src: n.currentAward, alt: "" },
                          null,
                          8,
                          K
                        ),
                      ]
                    ))
                  : (0, t.kq)("", !0),
              ]),
              (0, t._)("div", N, [
                (0, t._)("div", W, [
                  J,
                  Y,
                  (0, t._)(
                    "div",
                    {
                      class: "pointer box",
                      onClick:
                        i[9] ||
                        (i[9] = a => c.openModal("/volunteer/230422.png")),
                    },
                    z
                  ),
                ]),
              ]),
              (0, t._)("div", X, [
                (0, t._)("div", $, [
                  aa,
                  ia,
                  (0, t._)("div", ea, [
                    (0, t._)("img", {
                      src: "/edu/200207.png",
                      onClick:
                        i[10] || (i[10] = a => c.openModal("/edu/200207.png")),
                    }),
                    (0, t._)("img", {
                      src: "/edu/200302.png",
                      onClick:
                        i[11] || (i[11] = a => c.openModal("/edu/200302.png")),
                    }),
                    (0, t._)("img", {
                      src: "/edu/200310.png",
                      onClick:
                        i[12] || (i[12] = a => c.openModal("/edu/200310.png")),
                    }),
                    (0, t._)("img", {
                      src: "/edu/200308.png",
                      onClick:
                        i[13] || (i[13] = a => c.openModal("/edu/200308.png")),
                    }),
                    (0, t._)("img", {
                      src: "/edu/200426.png",
                      onClick:
                        i[14] || (i[14] = a => c.openModal("/edu/200426.png")),
                    }),
                  ]),
                ]),
              ]),
              (0, t._)("div", la, [
                (0, t._)("div", ta, [
                  sa,
                  na,
                  (0, t._)("div", ra, [
                    (0, t._)("img", {
                      class: "scale-down",
                      src: "/activity/semtle1.png",
                      onClick: i[15] || (i[15] = a => c.openDetail("semtle")),
                    }),
                    (0, t._)("img", {
                      class: "scale-down",
                      src: "/activity/kite1.png",
                      onClick: i[16] || (i[16] = a => c.openDetail("kite")),
                    }),
                  ]),
                ]),
              ]),
              n.showModal
                ? ((0, t.wg)(),
                  (0, t.iD)(
                    "div",
                    {
                      key: 0,
                      class: "image-modal",
                      onClick:
                        i[17] ||
                        (i[17] = (...a) => c.closeModal && c.closeModal(...a)),
                    },
                    [
                      (0, t._)(
                        "img",
                        { src: n.currentAward, alt: "" },
                        null,
                        8,
                        ca
                      ),
                    ]
                  ))
                : (0, t.kq)("", !0),
              n.showDetail
                ? ((0, t.wg)(),
                  (0, t.iD)(
                    "div",
                    {
                      key: 1,
                      class: "detail-modal",
                      onClick:
                        i[21] ||
                        (i[21] = (...a) =>
                          c.closeDetail && c.closeDetail(...a)),
                    },
                    [
                      (0, t._)(
                        "div",
                        {
                          class: "container shadow",
                          onClick:
                            i[20] || (i[20] = (0, l.iM)(() => {}, ["stop"])),
                        },
                        [
                          (0, t._)(
                            "img",
                            { src: c.currentImage, alt: "" },
                            null,
                            8,
                            oa
                          ),
                          (0, t._)("p", da, [
                            (0, t._)(
                              "span",
                              {
                                onClick:
                                  i[18] ||
                                  (i[18] = (...a) =>
                                    c.prevImage && c.prevImage(...a)),
                              },
                              ua
                            ),
                            (0, t._)(
                              "span",
                              {
                                onClick:
                                  i[19] ||
                                  (i[19] = (...a) =>
                                    c.nextImage && c.nextImage(...a)),
                              },
                              va
                            ),
                          ]),
                          (0, t._)("p", pa, [
                            ((0, t.wg)(!0),
                            (0, t.iD)(
                              t.HY,
                              null,
                              (0, t.Ko)(
                                c.currentImages,
                                (a, i) => (
                                  (0, t.wg)(),
                                  (0, t.iD)(
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
                            ? ((0, t.wg)(), (0, t.iD)("div", fa, ba))
                            : (0, t.kq)("", !0),
                          "semtlekkun" === n.currentDetailType
                            ? ((0, t.wg)(), (0, t.iD)("div", _a, ya))
                            : (0, t.kq)("", !0),
                          "card" === n.currentDetailType
                            ? ((0, t.wg)(), (0, t.iD)("div", Ia, ja))
                            : (0, t.kq)("", !0),
                          "cafe" === n.currentDetailType
                            ? ((0, t.wg)(), (0, t.iD)("div", Ca, Sa))
                            : (0, t.kq)("", !0),
                          "semtle" === n.currentDetailType
                            ? ((0, t.wg)(), (0, t.iD)("div", Ma, Ha))
                            : (0, t.kq)("", !0),
                          "kite" === n.currentDetailType
                            ? ((0, t.wg)(), (0, t.iD)("div", La, Wa))
                            : (0, t.kq)("", !0),
                        ]
                      ),
                    ]
                  ))
                : (0, t.kq)("", !0),
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
          components: { Header: b, Main: Qa, Footer: j },
          mounted: () => {},
        };
        var Xa = za;
        const $a = (0, f.Z)(Xa, [["render", n]]);
        var ai = $a;
        (0, l.ri)(ai).mount("#app");
      },
    },
    i = {};
  function e(l) {
    var t = i[l];
    if (void 0 !== t) return t.exports;
    var s = (i[l] = { exports: {} });
    return a[l](s, s.exports, e), s.exports;
  }
  (e.m = a),
    (function () {
      var a = [];
      e.O = function (i, l, t, s) {
        if (!l) {
          var n = 1 / 0;
          for (d = 0; d < a.length; d++) {
            (l = a[d][0]), (t = a[d][1]), (s = a[d][2]);
            for (var r = !0, c = 0; c < l.length; c++)
              (!1 & s || n >= s) &&
              Object.keys(e.O).every(function (a) {
                return e.O[a](l[c]);
              })
                ? l.splice(c--, 1)
                : ((r = !1), s < n && (n = s));
            if (r) {
              a.splice(d--, 1);
              var o = t();
              void 0 !== o && (i = o);
            }
          }
          return i;
        }
        s = s || 0;
        for (var d = a.length; d > 0 && a[d - 1][2] > s; d--) a[d] = a[d - 1];
        a[d] = [l, t, s];
      };
    })(),
    (function () {
      e.d = function (a, i) {
        for (var l in i)
          e.o(i, l) &&
            !e.o(a, l) &&
            Object.defineProperty(a, l, { enumerable: !0, get: i[l] });
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
      var i = function (i, l) {
          var t,
            s,
            n = l[0],
            r = l[1],
            c = l[2],
            o = 0;
          if (
            n.some(function (i) {
              return 0 !== a[i];
            })
          ) {
            for (t in r) e.o(r, t) && (e.m[t] = r[t]);
            if (c) var d = c(e);
          }
          for (i && i(l); o < n.length; o++)
            (s = n[o]), e.o(a, s) && a[s] && a[s][0](), (a[s] = 0);
          return e.O(d);
        },
        l = (self["webpackChunkclaphye0n_github_io"] =
          self["webpackChunkclaphye0n_github_io"] || []);
      l.forEach(i.bind(null, 0)), (l.push = i.bind(null, l.push.bind(l)));
    })();
  var l = e.O(void 0, [998], function () {
    return e(130);
  });
  l = e.O(l);
})();
//# sourceMappingURL=app.421f2266.js.map
