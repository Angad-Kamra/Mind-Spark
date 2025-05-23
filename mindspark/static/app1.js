function t(t, e, a) {
    this.type = t, this.x = e, this.y = a, this.active = 1, this.collisionRadius = 35;
    let i = 0,
        s = 1;
    const n = new r([
        [
            [18, 0, 18, 37, 0, 17], "", "power", 1
        ]
    ], [
        [
            [18, 4, 18, 42, 36, 21]
        ]
    ], 500);
    this.center = () => new o(this.x + 15, this.y + 15), this.destroy = () => {
        this.active = 0, s = 0, i = +new Date, particles.takePower(new o(this.x, this.y)), sfx.takePower()
    }, this.n = () => {
        !this.active && +new Date - i >= 4e3 && (this.active = 1), this.active && (s += .03) > 1 && (s = 1)
    }, this.r = () => {
        this.active && (c.save(), c.globalAlpha = s, c.translate(this.x, this.y), c.scale(1, -1), draw.r(n.n(), [36, 37]), c.globalAlpha = 1, c.restore())
    }
}

function e(t, e, a) {
    this.type = t, this.x = e, this.y = a, this.active = 1;
    let i = +new Date;
    const s = new r([
        [
            [1, 56, 118, 55, 109, 44, 9, 45], "black", "black", 1
        ],
        [
            [0, 50, 0, 81, 120, 81, 120, 50], "black", "black", 1
        ],
        [
            [8, 60, 7, 66, 11, 69, 15, 68, 15, 62], "", "mechanics", 1
        ],
        [
            [103, 59, 108, 62, 107, 68, 100, 69, 99, 62], "", "mechanics", 1
        ],
        [
            [18, 45, 14, 34, 14, 27, 12, 18, 15, 11, 18, 1, 19, 1, 17, 11, 14, 17, 17, 26, 18, 34, 20, 44], "black", "black", 1
        ],
        [
            [30, 46, 27, 37, 29, 30, 25, 15, 29, 6, 29, 0, 32, 0, 31, 6, 27, 15, 31, 29, 30, 37, 33, 45], "black", "black", 1
        ],
        [
            [62, 45, 64, 44, 63, 30, 61, 21, 64, 12, 65, 1, 62, 1, 60, 11, 58, 21, 61, 30], "black", "black", 1
        ],
        [
            [90, 45, 92, 45, 91, 37, 92, 26, 95, 17, 94, 8, 94, 2, 91, 2, 92, 9, 92, 16, 88, 25, 88, 37], "black", "black", 1
        ]
    ], [
        [0, 0, 0, 0, [18, 45, 23, 34, 24, 26, 23, 20, 13, 19, 10, 13, 13, 8, 16, 16, 26, 17, 27, 26, 25, 35, 20, 44],
            [30, 46, 37, 37, 39, 30, 41, 16, 44, 9, 36, 1, 41, 1, 47, 8, 44, 17, 42, 29, 41, 37, 33, 45],
            [62, 45, 64, 44, 58, 30, 67, 26, 73, 21, 63, 10, 62, 17, 69, 20, 64, 24, 56, 31],
            [90, 45, 92, 45, 95, 37, 101, 24, 99, 16, 92, 10, 85, 5, 82, 6, 88, 13, 96, 17, 99, 25, 92, 37]
        ],
        [0, 0, 0, 0, [17, 45, 9, 35, 4, 29, 2, 19, 3, 12, 18, 13, 19, 16, 7, 14, 6, 20, 9, 28, 14, 35, 19, 44],
            [30, 46, 24, 38, 21, 31, 12, 20, 7, 14, 1, 10, 4, 8, 12, 14, 17, 20, 25, 30, 27, 38, 33, 45],
            [62, 45, 64, 44, 70, 31, 65, 18, 56, 13, 44, 10, 42, 13, 52, 15, 62, 20, 67, 32],
            [90, 45, 92, 45, 88, 36, 83, 28, 83, 21, 86, 13, 94, 14, 93, 9, 84, 12, 79, 20, 79, 28, 84, 36]
        ]
    ], rInt(100, 200));
    this.n = () => {
        if (+new Date - i < 100) return 0;
        particles.addFan(new o(this.x, this.y)), i = +new Date
    }, this.r = () => {
        c.save(), c.translate(this.x + 60, this.y + 41), c.scale(1, -1), draw.r(s.n(), [120, 81]), c.restore()
    }
}

function a(t, e, a, i, s, n) {
    this.type = t, this.x = e, this.y = a, this.w = i, this.h = s, this.d = n, this.active = 1, this.collisionRadius = 35;
    const r = [() => {
            d += w += g, w <= -.5 && m()
        }, () => {
            d += w *= .97;
            const t = p.get().add(this.d.get().mult(f));
            this.x = t.x, this.y = t.y, (f > 1 || f < 0) && (u *= -1, m()), f += x * u
        }],
        l = [
            [
                [19, 0, 28, 11, 27, 21, 13, 17, 0, 28, 12, 26, 20, 34, 10, 39, 7, 56, 16, 45, 24, 46, 22, 56, 36, 68, 32, 56, 39, 48, 48, 58, 65, 56, 53, 50, 49, 40, 63, 43, 76, 30, 62, 33, 52, 27, 64, 16, 54, 0, 54, 12, 41, 19, 33, 4], "black", "black", 1
            ]
        ],
        h = [
            [
                [6, 6, 0, 22, 7, 37, 23, 41, 36, 35, 40, 22, 36, 7, 21, 0], "", "black", 1
            ],
            [
                [20, 17, 17, 21, 20, 24, 24, 23, 26, 18], "", "mechanics", 1
            ]
        ];
    let d = 0,
        g = -.015,
        w = 0,
        y = -1,
        p = new o(e, a),
        f = 0,
        x = 1 / Math.floor(n.mag() / 6),
        u = 1;

    function m() {
        ++y === r.length && (y = 0)
    }
    m(), this.n = () => {
        r[y]()
    }, this.center = () => new o(this.x + 15, this.y + 15), this.r = () => {
        c.save(), c.translate(this.x + 18, this.y + 18), c.scale(1, -1), c.rotate(d), draw.r(l, [76, 68]), c.restore(), c.save(), c.translate(p.x + 18, p.y + 18), draw.r(h, [40, 40]), c.restore(), c.save(), c.translate(p.x + n.x + 18, p.y + n.y + 18), draw.r(h, [40, 40]), c.restore()
    }
}

function i(t, e, a, i, s, n) {
    this.type = t, this.x = e, this.y = a, this.w = i, this.h = s, this.d = n, this.active = 1, this.isMovable = n.mag() > 0, this.falling = {
        active: 0,
        falling: 0,
        dead: 0,
        position: new o,
        velocity: new o,
        opacity: 1,
        start: 0
    };
    const r = [
            [
                [0, 0, 40, 0, 39, 33, 33, 29, 26, 37, 16, 31, 9, 29, 7, 38, 0, 34], "", "black", 1
            ]
        ],
        l = [
            [
                [12, 0, 0, 22, 11, 40, 40, 36, 40, 4], "", "black", 1
            ],
            [
                [19, 16, 16, 20, 19, 24, 24, 23, 26, 17], "", "mechanics", 1
            ]
        ];
    let h = new o(e, a),
        d = 0,
        g = this.isMovable ? 1 / Math.floor(n.mag() / 2) : 0,
        w = 1;
    this.startFalling = () => {
        this.falling.active || (sfx.fallingBlock(), this.falling.active = 1, this.falling.start = +new Date)
    }, this.getVelocity = () => new o, this.n = () => {
        if (this.isMovable && !this.falling.falling) {
            const t = h.get().add(this.d.get().mult(d));
            this.x = t.x, this.y = t.y, (d > 1 || d < 0) && (w *= -1), d += g * w
        }
        if (this.falling.active && !this.falling.falling) {
            if (+new Date - this.falling.start < 1e3) return;
            this.falling.falling = 1, this.active = 0, this.falling.position = new o(this.x, this.y)
        } else if (this.falling.falling && !this.falling.dead) {
            const t = this.falling.velocity.get().normalize().mult(-.017);
            t.add(gc.gravity.get().mult(.3)), this.falling.velocity.add(t), this.falling.position.add(this.falling.velocity), this.x = this.falling.position.x, this.y = this.falling.position.y, this.falling.opacity -= .04, this.falling.opacity < 0 && (this.falling.dead = 1, this.falling.opacity = 0, setTimeout(() => {
                this.falling.active = 0, this.falling.falling = 0, this.falling.velocity = new o, this.falling.dead = 0, this.active = 1, this.x = e, this.y = a
            }, 2e3))
        }
        this.falling.active || (this.falling.opacity += .05, this.falling.opacity > 1 && (this.falling.opacity = 1))
    }, this.r = () => {
        this.isMovable && (c.save(), c.translate(h.x + i / 2, h.y + s / 2), draw.r(l, [40, 40]), c.restore(), c.save(), c.translate(h.x + n.x + i / 2, h.y + n.y + s / 2), draw.r(l, [40, 40]), c.restore(), c.save(), c.strokeStyle = color.mechanics, c.moveTo(h.x + i / 2, h.y + s / 2), c.lineTo(h.x + n.x + i / 2, h.y + n.y + s / 2), c.stroke(), c.restore()), c.save(), c.translate(this.x + 20, this.y + 20), c.globalAlpha = this.falling.opacity, c.scale(1, -1);
        for (let t = 0; t < Math.floor(this.w / 40); t++) c.save(), this.falling.active ? c.translate(40 * t + rInt(-1, 1), rInt(-1, 1)) : c.translate(40 * t, 0), draw.r(r, [40, 38]), c.restore();
        c.globalAlpha = 1, c.restore()
    }
}

function s(t, e, a, i, s, n) {
    this.type = t, this.x = e, this.y = a, this.w = i, this.h = s, this.d = n, this.isMovable = n.mag() > 0, this.active = 1;
    const r = [color.black, color.black, color.ice, color.black],
        l = [
            [
                [0, 8, 40, 8, 35, 0, 34, 6, 23, 1, 21, 5, 15, 7, 11, 1, 8, 6, 3, 1], "black", "black", 1
            ]
        ],
        h = [
            [
                [12, 0, 0, 22, 11, 40, 40, 36, 40, 4], "", "black", 1
            ],
            [
                [19, 16, 16, 20, 19, 24, 24, 23, 26, 17], "", "mechanics", 1
            ]
        ];
    let d = new o(e, a),
        g = 0,
        w = this.isMovable ? 1 / Math.floor(n.mag() / 2) : 0,
        y = 1;
    this.n = () => {
        if (this.isMovable) {
            const t = d.get().add(this.d.get().mult(g));
            this.x = t.x, this.y = t.y, (g > 1 || g < 0) && (y *= -1), g += w * y
        }
    }, this.getVelocity = () => n.get().normalize().mult(2 * y), this.r = () => {
        if (this.isMovable && (c.save(), c.translate(d.x + i / 2, d.y + s / 2), draw.r(h, [40, 40]), c.restore(), c.save(), c.translate(d.x + n.x + i / 2, d.y + n.y + s / 2), draw.r(h, [40, 40]), c.restore(), c.save(), c.strokeStyle = color.mechanics, c.moveTo(d.x + i / 2, d.y + s / 2), c.lineTo(d.x + n.x + i / 2, d.y + n.y + s / 2), c.stroke(), c.restore()), c.save(), c.translate(this.x, this.y), 1 === this.type) {
            c.save(), c.scale(1, -1), c.translate(-20, -this.h - 4);
            for (let t = 0; t < Math.floor(this.w / 40); t++) c.translate(40, 0), draw.r(l, [40, 8]);
            c.restore(), c.save(), c.translate(-20, -4);
            for (let t = 0; t < Math.floor(this.w / 40); t++) c.translate(40, 0), draw.r(l, [40, 8]);
            c.restore(), c.save(), c.rotate(Math.PI / 2), c.translate(-20, -this.w - 4);
            for (let t = 0; t < Math.floor(this.h / 40); t++) c.translate(40, 0), draw.r(l, [40, 8]);
            c.restore(), c.save(), c.rotate(-Math.PI / 2), c.translate(-this.h - 20, -4);
            for (let t = 0; t < Math.floor(this.h / 40); t++) c.translate(40, 0), draw.r(l, [40, 8]);
            c.restore(), c.fillStyle = color.black, c.fillRect(0, 0, this.w, this.h)
        } else c.fillStyle = r[this.type], c.fillRect(0, 0, this.w, this.h);
        c.restore()
    }
}

function n(t, e, a, i, s, n) {
    this.isActive = 1;
    let r = a.get(),
        l = i.get(),
        h = new o;
    const d = +new Date;
    this.n = () => {
        h.add(l.get().normalize().mult(.001)), h.add(gc.gravity.get().mult(t)), l.add(h), r.add(l), h.mult(0), +new Date - d >= s && (this.isActive = 0)
    }, this.r = () => {
        const t = 1 - (+new Date - d) / s;
        c.save(), c.translate(r.x + 20, r.y), c.globalAlpha = t >= 0 ? t : 0, bp(), c.fillStyle = n, c.rect(-e / 2, -e / 2, 2 * e, 2 * e), c.fill(), cp(), c.restore()
    }
}

function r(t, e, a, i) {
    const s = a || 200,
        c = e.length + 1,
        n = [];
    let r, l = 0,
        o = 0,
        h = 0,
        d = +new Date,
        g = d,
        w = 0;
    n.push(t), e.forEach(e => {
        n.push(t.map((t, a) => {
            let i = t;
            return e[a] && (i = t.map((t, i) => i ? t : e[a])), i
        }))
    }), this.n = () => {
        g = +new Date - d, o += g, (l = Math.floor(o % (c * s) / s)) + 1 === c && (w = 1);
        const t = l + 1 === c ? i ? l : 0 : l + 1;
        return h = o % (c * s) % s, d = +new Date, r = i && w ? n[c - 1] : n[l].map((e, a) => e.map((e, i) => i ? e : e.map((e, c) => e + (n[t][a][i][c] - e) * h / s)))
    }, this.isFinished = () => w
}

function o(t, e) {
    this.x = t || 0, this.y = e || 0, this.add = t => (this.x += t.x, this.y += t.y, this), this.angle = t => t ? Math.atan2(this.y, this.x) : Math.atan2(t.y - this.y, t.x - this.x), this.apply = t => (this.x = t.x, this.y = t.y, this), this.distance = t => Math.hypot(this.x - t.x, this.y - t.y), this.div = t => (this.x /= t, this.y /= t, this), this.dot = t => this.mag() * t.mag() * Math.cos(this.angle(t)), this.get = () => new o(this.x, this.y), this.mag = () => Math.hypot(this.x, this.y), this.mult = t => (this.x *= t, this.y *= t, this), this.normalize = () => (this.mag() > 0 && this.div(this.mag()), this), this.perpendicular = () => {
        let t = this.x;
        return this.x = this.y, this.y = -t, this
    }, this.round = () => (this.x = Math.round(this.x), this.y = Math.round(this.y), this), this.sub = t => (this.x -= t.x, this.y -= t.y, this), this.normal = t => new o(this.x - t.x, this.y - t.y).perpendicular().normalize(), this.center = t => new o(this.x + (t.x - this.x) / 2, this.y + (t.y - this.y) / 2)
}(() => {
    function t() {
        gc.size = {
            x: window.innerWidth,
            y: window.innerHeight
        }, gc.originalRatio = Math.min(gc.size.x / gc.res.x, gc.size.y / gc.res.y), gc.canvas.style.width = Math.round(gc.res.x * gc.originalRatio) + "px", gc.canvas.style.height = Math.round(gc.res.y * gc.originalRatio) + "px", gc.ratio = gc.originalRatio * (window.devicePixelRatio || 1), e()
    }

    function e() {
        gc.canvas.width = Math.round(gc.res.x * gc.ratio * gc.graphicsQuality), gc.canvas.height = Math.round(gc.res.y * gc.ratio * gc.graphicsQuality)
    }

    function a() {
        gc.last = +new Date,
            function() {
                if (gc.paused) return;
                scene.n(), character.isGoingBack() ? (gc.paused = 1, s(-1)) : character.levelIsCompleted() ? (gc.paused = 1, s(1)) : character.isDead() && (gc.paused = 1, i())
            }(), c.save(), c.scale(gc.ratio * gc.graphicsQuality, gc.ratio * gc.graphicsQuality), scene.r(), c.restore(), requestAnimationFrame(a)
    }

    function i() {
        scene.reset(), gc.paused = 0
    }

    function s(t) {
        setTimeout(() => {
            map.nextLevel(t), i()
        }, 30)
    }
    window.rInt = (t, e) => Math.floor(t + Math.random() * (e - t)), window.rFloat = (t, e) => t + Math.random() * (e - t), window.gc = {
        res: {
            x: 1280,
            y: 720
        },
        start: +new Date,
        last: +new Date,
        paused: 0,
        splashScreen: 1,
        graphicsQuality: 1,
        muted: 0,
        changeQuality: t => {
            gc.graphicsQuality = t, e()
        }
    }, window.onload = function() {
        var e;
        e = document.getElementById("app"), gc.canvas = e, window.c = gc.canvas.getContext("2d"), window.l = c.lineTo.bind(c), window.m = c.moveTo.bind(c), window.bp = c.beginPath.bind(c), window.cp = c.closePath.bind(c), gc.gravity = new o(0, -.8), t(), control.i(), scene.i(), a(), gc.canvas.addEventListener("click", t => {
            gc.splashScreen && (gc.splashScreen = 0), gc.ac = window.AudioContext ? new AudioContext : new window.webkitAudioContext
        })
    }, window.onresize = t
})(), window.control = (() => {
    const t = [0, 0, 0];
    return {
        i: () => {
            window.addEventListener("keydown", e => {
                "KeyA" !== e.code && "ArrowLeft" !== e.code || (t[0] = 1), "KeyW" !== e.code && "Space" !== e.code && "ArrowUp" !== e.key || (t[1] = 1), "KeyD" !== e.code && "ArrowRight" !== e.code || (t[2] = 1), "Digit1" === e.code && gc.changeQuality(1), "Digit2" === e.code && gc.changeQuality(.75), "Digit3" === e.code && gc.changeQuality(.5), "Digit4" === e.code && gc.changeQuality(.3), "KeyM" === e.code && (gc.muted = !gc.muted)
            }), window.addEventListener("keyup", e => {
                "KeyA" !== e.code && "ArrowLeft" !== e.code || (t[0] = 0), "KeyW" !== e.code && "Space" !== e.code && "ArrowUp" !== e.code || (t[1] = 0), "KeyD" !== e.code && "ArrowRight" !== e.code || (t[2] = 0)
            })
        },
        pressed: t
    }
})(), window.characterAnimations = (() => {
    const t = [36, 59],
        e = [
            [
                [0, 9, 36, 0, 21, 26], "", "black", 1
            ],
            [
                [21, 27, 34, 39, 34, 59], "", "black", 1
            ],
            [
                [21, 27, 21, 45, 8, 58], "", "black", 1
            ],
            [
                [22, 7, 29, 6, 26, 11], "", "red", 1
            ]
        ],
        a = {
            stay: [e, [
                [
                    [1, 12, 37, 3, 22, 29],
                    [22, 29, 35, 41, 34, 59],
                    [22, 29, 21, 47, 8, 58],
                    [23, 10, 30, 9, 27, 14]
                ]
            ], 400, 0],
            walk: [e, [
                [
                    [3, 8, 41, 5, 21, 28],
                    [21, 27, 24, 44, 13, 60],
                    [22, 26, 28, 44, 21, 58],
                    [24, 9, 31, 10, 27, 14]
                ],
                [
                    [0, 9, 36, 0, 21, 26],
                    [21, 27, 17, 44, 1, 55],
                    [22, 26, 34, 40, 32, 58],
                    [22, 7, 29, 6, 26, 11]
                ],
                [
                    [2, 8, 39, 3, 21, 28],
                    [21, 26, 30, 41, 25, 60],
                    [21, 27, 25, 45, 14, 60],
                    [23, 8, 31, 9, 26, 13]
                ]
            ], 110],
            slowWalk: [e, [
                [
                    [3, 8, 41, 5, 21, 28],
                    [21, 27, 24, 44, 13, 60],
                    [22, 26, 28, 44, 21, 58],
                    [24, 9, 31, 10, 27, 14]
                ],
                [
                    [0, 9, 36, 0, 21, 26],
                    [21, 27, 17, 44, 1, 55],
                    [22, 26, 34, 40, 32, 58],
                    [22, 7, 29, 6, 26, 11]
                ],
                [
                    [2, 8, 39, 3, 21, 28],
                    [21, 26, 30, 41, 25, 60],
                    [21, 27, 25, 45, 14, 60],
                    [23, 8, 31, 9, 26, 13]
                ]
            ], 320],
            jump: [e, [
                [
                    [1, 5, 36, -7, 24, 20],
                    [24, 20, 26, 39, 17, 59],
                    [24, 21, 20, 41, 8, 58],
                    [24, 1, 30, -2, 28, 4]
                ],
                [
                    [2, 4, 39, -5, 23, 21],
                    [23, 21, 27, 36, 17, 52],
                    [23, 21, 23, 40, 11, 53],
                    [25, 2, 32, 0, 29, 6]
                ]
            ], 150, 1],
            drop: [e, [
                [
                    [1, 21, 38, 22, 17, 44],
                    [17, 43, 38, 46, 26, 58],
                    [16, 42, 22, 56, 8, 58],
                    [21, 25, 28, 26, 24, 30]
                ],
                [0, 0, 0, 0]
            ], 120, 1],
            sit: [e, [
                [
                    [1, 21, 38, 22, 17, 44],
                    [17, 43, 38, 46, 26, 58],
                    [16, 42, 22, 56, 8, 58],
                    [21, 25, 28, 26, 24, 30]
                ]
            ], 400, 1],
            wall: [
                [
                    [
                        [0, 2, 34, 0, 20, 21], "", "black", 1
                    ],
                    [
                        [20, 20, 40, 30, 34, 14], "", "black", 1
                    ],
                    [
                        [19, 20, 32, 33, 38, 53], "", "black", 1
                    ],
                    [
                        [12, 9, 7, 4, 14, 4], "", "red", 1
                    ]
                ],
                []
            ],
            fall: [
                [
                    [
                        [3, 0, 39, 10, 13, 26], "", "black", 1
                    ],
                    [
                        [13, 25, 26, 38, 26, 57], "", "black", 1
                    ],
                    [
                        [13, 25, 13, 44, 0, 57], "", "black", 1
                    ],
                    [
                        [23, 8, 30, 10, 25, 13], "", "red", 1
                    ]
                ],
                [
                    [0, [13, 25, 29, 33, 28, 52],
                        [13, 25, 8, 43, -7, 51], 0
                    ]
                ], 150
            ],
            die: [e, [
                [
                    [3, 56, 27, 27, 31, 58],
                    [66, 46, 57, 60, 34, 59],
                    [-29, 57, -8, 49, 7, 59],
                    [21, 40, 25, 34, 26, 41]
                ]
            ], 1e3, 1],
            flying: [
                [
                    [
                        [38, 0, 63, 28, 32, 27], "", "black", 1
                    ],
                    [
                        [32, 26, 21, 40, 2, 42], "", "black", 1
                    ],
                    [
                        [32, 26, 13, 27, 0, 14], "", "black", 1
                    ],
                    [
                        [51, 19, 56, 24, 50, 24], "", "red", 1
                    ]
                ],
                [
                    [
                        [33, 0, 62, 23, 32, 27],
                        [32, 27, 18, 37, -2, 28],
                        [32, 26, 14, 23, 7, 9],
                        [48, 17, 55, 19, 49, 22]
                    ]
                ], 500
            ],
            dancing: [e, [
                [
                    [20, -2, 49, 22, 18, 25],
                    [19, 25, 35, 32, 22, 43],
                    [19, 25, 16, 44, 1, 58],
                    [36, 15, 42, 19, 36, 20]
                ],
                [
                    [4, 10, 38, -6, 28, 23],
                    [27, 23, 24, 40, 7, 56],
                    [26, 23, 30, 41, 24, 56],
                    [27, 2, 33, -1, 31, 5]
                ],
                [
                    [17, -4, 50, 14, 21, 23],
                    [21, 23, 21, 41, 8, 56],
                    [21, 24, 38, 31, 25, 40],
                    [35, 9, 41, 13, 35, 14]
                ]
            ], 250]
        };
    let i, s = new r(...a.stay, 300),
        n = "stay",
        l = 0,
        o = 0;
    return {
        mirror: t => {
            l = t
        },
        to: (t, e, c) => {
            "walk" === t ? sfx.run() : "wall" === t ? sfx.wall() : "flying" === t && sfx.flying(), n !== t && ("jump" === t ? sfx.jump() : "drop" === t ? sfx.fall() : "die" === t && sfx.die(), o && !c ? i = t : (s = new r(...a[t]), n = t, o = e))
        },
        r: (e, h) => {
            let d = h || 1;
            c.translate(e.x + t[0] / 2, e.y + t[1] / 2), c.scale(l ? -d : d, -d), draw.r(s.n(), t), o && s.isFinished() && i && (s = new r(...a[i]), n = i, i = null, o = 0)
        }
    }
})(), window.character = (() => {
    const t = 15;
    let e, a = 0,
        i = 1,
        s = {
            isDead: 0,
            dying: 0
        },
        n = 0,
        r = 0,
        l = new o;
    const h = {
        x: 36,
        y: 59
    };
    let d = {
            first: 1,
            second: 0,
            done: 0
        },
        g = 0,
        w = +new Date,
        y = 0,
        p = t;

    function f(t) {
        s.dying || (t ? particles.dying(e.get().add(new o(0, h.y)), [color.dying1, color.dying2, color.dying3, color.dying4]) : particles.dying(e, [color.dying1, color.dying2, color.dying3, color.dying4]), l = new o, s.dying = 1, setTimeout(() => {
            s.isDead = 1
        }, 1e3))
    }
    return {
        i: () => {
            e = map.getStart().get()
        },
        reset: () => {
            l = new o, e = map.getCharacterStart().get(), p = t, characterAnimations.mirror(0 !== e.x), s = {
                dying: 0,
                isDead: 0
            }, characterAnimations.to("stay"), g = 0, n = 0, r = 0
        },
        n: () => {
            if (s.dying) {
                characterAnimations.to("die", 0, 1);
                const t = l.get().normalize().mult(-.017);
                return t.add(gc.gravity.get().mult(.45)), l.add(t), e.add(l), 0
            }
            const a = l.get().normalize().mult(-.017);
            a.add(gc.gravity.get().mult(.9)), control.pressed[0] ? (a.add(new o(-1, 0)), characterAnimations.mirror(1)) : control.pressed[2] && (a.add(new o(1, 0)), characterAnimations.mirror(0)), l.add(a), l.x = Math.abs(l.x) < 4 ? l.x : Math.abs(l.x) / l.x * 4, e.add(l);
            const i = function(e) {
                const a = {
                    touches: [],
                    sides: [],
                    isOverFan: 0
                };
                return map.getMap().enemy.forEach(i => {
                    if (8 === i.type) {
                        if (e.x + h.x / 2 > i.x && e.x + h.x / 2 < i.x + 120 && e.y >= i.y - 10) {
                            const t = e.y - i.y;
                            t < 400 && (l.add(new o(0, 3 * (1 - t / 400))), characterAnimations.to("flying")), a.isOverFan = 1
                        }
                    } else 3 === i.type ? i.active && i.center().distance(e.get().add(new o(h.x / 2, h.y / 2))) < i.collisionRadius + 20 && (d.done = 0, p = t, i.destroy()) : i.center().distance(e.get().add(new o(h.x / 2, h.y / 2))) < i.collisionRadius + 20 && f()
                }), map.getMap().map.forEach(t => {
                    if (t.active && e.x + h.x > t.x && e.x < t.x + t.w && e.y < t.y + t.h && e.y + h.y > t.y) {
                        const i = [t.y + t.h, t.x + t.w, t.y - h.y, t.x - h.x],
                            s = [t.y + t.h - e.y, t.x + t.w - e.x, e.y + h.y - t.y, e.x + h.x - t.x],
                            c = s.indexOf(Math.min(...s));
                        a.sides.push(c), a.touches.push({
                            side: c,
                            type: t.type,
                            intersect: i[c],
                            velocity: t.getVelocity()
                        }), 4 === t.type && t.startFalling()
                    }
                }), a
            }(e);
            i.touches.forEach(a => {
                if (1 === a.type) return l.y > 0 && (l.y = 0), void f();
                0 === a.side && l.y <= 0 && ((p += .3) > t && (p = t), e.y = a.intersect, l.y = 0, e.add(a.velocity), control.pressed[0] || control.pressed[2] || (2 === a.type ? l.x /= 1.02 : l.x /= 2), Math.abs(l.x) > .1 && particles.addRunning(e, l)), 1 === a.side && (e.x = a.intersect, control.pressed[0] && l.y < 0 && p > 0 && -1 === i.sides.indexOf(0) && (l = a.velocity, characterAnimations.to("wall"), particles.addWall(e, -1), p -= .07, control.pressed[1] ? d.first && (l.add(new o(20, 15)), characterAnimations.to("jump", 0, 1), d.first = 0, p -= 2.5) : d.first = 1)), 3 === a.side && (e.x = a.intersect, control.pressed[2] && l.y < 0 && p > 0 && -1 === i.sides.indexOf(0) && (l = a.velocity, characterAnimations.to("wall"), particles.addWall(e, 1), p -= .07, control.pressed[1] ? d.first && (l.add(new o(-20, 15)), characterAnimations.to("jump", 0, 1), d.first = 0, p -= 2.5) : d.first = 1)), 2 === a.side && (e.y = a.intersect, l.y = l.y >= 0 ? 0 : l.y)
            }), -1 !== i.sides.indexOf(0) && l.y <= 0 ? (control.pressed[0] || control.pressed[2] ? characterAnimations.to("walk") : y || characterAnimations.to("stay"), control.pressed[1] && d.first && (l.add(new o(0, 15)), characterAnimations.to("jump", 0, 1), d.first = 0), d.first || control.pressed[1] || (d.first = 1, d.second = 0, d.done = 0), g && (characterAnimations.to("drop", 1), particles.addJump(e, l.x), g = 0)) : g = 1, (!i.sides.length || p < 0) && l.y < 0 && (i.isOverFan || characterAnimations.to("fall"), control.pressed[1] && (d.second || d.first) && (l.apply(new o(0, 15)), characterAnimations.to("jump", 0, 1), d.first = 0, d.second = 0, d.done = 1), control.pressed[1] || d.first || d.done || (d.second = 1)), !control.pressed[1] && l.y > 0 && (l.y /= 1.2), e.x < 0 && map.isFirst() ? e.x = 0 : e.x + h.x <= 0 && (r = 1), e.y + h.y < 0 && f(1), e.x >= map.getEnd().x + 40 && (n = 1), (control.pressed[0] || control.pressed[1] || control.pressed[2]) && (w = +new Date), +new Date - w > 2e4 ? y || (y = 1, characterAnimations.to(["dancing", "sit"][rInt(0, 2)])) : y = 0
        },
        nFinal: () => {
            if (a)(i -= .004) < 0 && (i = 0);
            else {
                characterAnimations.to("slowWalk");
                const t = l.get().normalize().mult(-.017);
                t.add(new o(.1, 0)), l.add(t), l.x = Math.abs(l.x) < 1 ? l.x : Math.abs(l.x) / l.x * 1, e.add(l), e.x >= 1e3 - h.x / 2 && (e.x = 1e3 - h.x / 2, a = 1, characterAnimations.to("dancing"), setTimeout(() => {
                    finalScene.i()
                }, 5e3))
            }
        },
        nSplashScreen: () => {},
        r: () => {
            c.save(), characterAnimations.r(e), c.restore(), p < t && (c.save(), c.fillStyle = color.stamina, c.fillRect(e.x - 10, e.y + h.y + 10, 4 * p < 0 ? 0 : 6 * p, 8), c.restore())
        },
        rFinal: () => {
            c.save(), c.globalAlpha = i, c.scale(1, 1 - i + 1), characterAnimations.r(e), c.globalAlpha = 1, c.restore()
        },
        rSplashScreen: () => {
            c.save(), characterAnimations.r(new o(320, 350), 6), c.restore()
        },
        position: () => e,
        isDead: () => s.isDead,
        levelIsCompleted: () => n,
        isGoingBack: () => r
    }
})(), window.background = (() => {
    const t = [
        [
            [0, 2, 494, 0, 497, 163, 469, 51, 471, 144, 451, 96, 447, 162, 423, 65, 425, 139, 385, 52, 373, 146, 352, 157, 350, 37, 330, 130, 310, 159, 290, 151, 281, 38, 273, 163, 262, 88, 255, 141, 232, 39, 215, 141, 203, 162, 180, 94, 174, 163, 152, 157, 143, 89, 117, 124, 113, 172, 77, 149, 74, 85, 57, 164, 54, 82, 32, 173, 19, 60, 2, 160], "", "black", 1
        ],
        [
            [138, 107, 124, 167, 156, 194], "", "black", 1
        ],
        [
            [183, 116, 189, 156, 182, 195, 179, 154], "", "black", 1
        ],
        [
            [233, 63, 214, 158, 232, 159], "", "black", 1
        ],
        [
            [236, 75, 251, 151, 237, 195], "", "black", 1
        ],
        [
            [281, 94, 279, 158, 288, 162], "", "black", 1
        ],
        [
            [346, 76, 347, 149, 353, 182, 321, 199, 322, 167], "", "black", 1
        ],
        [
            [387, 75, 374, 149, 386, 149, 401, 181, 401, 147, 426, 150, 393, 106], "", "black", 1
        ],
        [
            [455, 117, 455, 154, 475, 158], "", "black", 1
        ],
        [
            [18, 88, 2, 204, 23, 162], "", "black", 1
        ],
        [
            [50, 115, 41, 163, 55, 193], "", "black", 1
        ]
    ];
    return {
        i: () => {},
        reset: () => {},
        n: () => {},
        r: () => {
            c.save(), c.translate(2400 - camera.getPosition().x / 2, 1e3 - camera.getPosition().y / 2), c.globalAlpha = .1, c.scale(10, -10), draw.r(t, [497, 204]), c.globalAlpha = 1, c.restore()
        }
    }
})(), window.map = (() => {
    const c = 40;
    let n = 0;
    const r = [
        [
            [0, 10, 0, 30, 9],
            [0, 0, 0, 10, 50],
            [0, 13, 17, 27, 33],
            [0, 19, 9, 21, 2],
            [0, 19, 15, 21, 2],
            [6, 14, 9, 1, 1],
            [7, 39, 11, 1, 1]
        ],
        [
            [0, 0, 0, 8, 11],
            [0, 8, 0, 13, 4],
            [0, 44, 0, 2, 4],
            [0, 46, 0, 2, 7],
            [0, 0, 14, 28, 16],
            [0, 28, 10, 14, 20],
            [0, 42, 13, 28, 17],
            [1, 32, 0, 2, 1],
            [0, 21, 0, 11, 1],
            [0, 34, 0, 10, 1],
            [7, 69, 7, 1, 1],
            [6, 0, 11, 1, 1],
            [0, 51, 0, 19, 7]
        ],
        [
            [0, 0, 0, 7, 7],
            [0, 7, 0, 14, 1],
            [0, 23, 3, 6, 1],
            [0, 31, 0, 10, 1],
            [0, 7, 1, 1, 5],
            [0, 8, 1, 1, 4],
            [0, 9, 1, 1, 3],
            [0, 10, 1, 1, 2],
            [0, 11, 1, 1, 1],
            [0, 55, 0, 4, 1],
            [0, 62, 0, 4, 1],
            [0, 69, 0, 21, 1],
            [0, 0, 11, 22, 19],
            [0, 22, 19, 68, 11],
            [0, 22, 13, 2, 6],
            [0, 24, 15, 2, 4],
            [0, 26, 17, 2, 2],
            [4, 41, 0, 1, 1],
            [4, 42, 0, 1, 1],
            [4, 43, 0, 1, 1],
            [4, 44, 0, 1, 1],
            [4, 45, 0, 1, 1],
            [4, 46, 0, 1, 1],
            [4, 47, 0, 1, 1],
            [4, 48, 0, 1, 1],
            [4, 49, 0, 1, 1],
            [4, 50, 0, 1, 1],
            [4, 51, 0, 1, 1],
            [4, 52, 0, 1, 1],
            [4, 53, 0, 1, 1],
            [4, 54, 0, 1, 1],
            [1, 69, 7, 4, 5],
            [1, 76, 9, 4, 6],
            [1, 83, 8, 6, 1],
            [6, 0, 7, 1, 1],
            [7, 89, 1, 1, 1]
        ],
        [
            [0, 0, 0, 10, 1],
            [0, 10, 0, 4, 7],
            [0, 14, 0, 9, 9],
            [0, 27, 8, 3, 1],
            [4, 33, 8, 3, 1],
            [0, 39, 8, 3, 1],
            [4, 45, 8, 3, 1],
            [0, 51, 8, 3, 1],
            [0, 79, 0, 11, 1],
            [4, 73, 3, 2, 1],
            [0, 31, 16, 15, 2],
            [0, 26, 18, 25, 13],
            [0, 82, 7, 4, 3],
            [7, 89, 1, 1, 1],
            [6, 0, 1, 1, 1],
            [0, 57, 0, 12, 5],
            [1, 23, 0, 34, 1],
            [0, 57, 12, 12, 19]
        ],
        [
            [0, 0, 0, 9, 1],
            [0, 11, 0, 1, 10],
            [0, 14, 0, 4, 7],
            [0, 33, 5, 1, 14],
            [0, 37, 14, 13, 2],
            [0, 25, 0, 5, 7],
            [0, 55, 11, 5, 1],
            [0, 68, 0, 1, 7],
            [0, 69, 0, 1, 5],
            [0, 63, 0, 5, 8],
            [0, 70, 0, 1, 3],
            [0, 0, 17, 4, 13],
            [0, 4, 15, 12, 15],
            [0, 16, 20, 6, 10],
            [0, 22, 23, 21, 11],
            [0, 43, 25, 27, 9],
            [0, 25, 13, 5, 1],
            [1, 76, 8, 6, 1],
            [6, 0, 1, 1, 1],
            [7, 89, 1, 1, 1],
            [0, 71, 0, 19, 1]
        ],
        [
            [0, 0, 0, 40, 1],
            [6, 0, 1, 1, 1],
            [7, 39, 1, 1, 1],
            [0, 0, 8, 12, 16],
            [0, 12, 10, 3, 14],
            [0, 15, 11, 13, 13],
            [0, 28, 9, 5, 15],
            [0, 33, 7, 7, 17],
            [1, 19, 0, 5, 1],
            [1, 17, 7, 9, 1]
        ],
        [
            [0, 0, 0, 15, 7],
            [0, 28, 0, 9, 7],
            [0, 56, 0, 14, 7],
            [0, 86, 0, 14, 12],
            [1, 15, 0, 13, 1],
            [1, 37, 0, 19, 1],
            [1, 70, 0, 16, 1],
            [6, 0, 7, 1, 1],
            [7, 99, 12, 1, 1],
            [0, 16, 6, 3, 1, 8, 0],
            [0, 38, 6, 3, 1, 14, 0],
            [0, 71, 6, 3, 1, 11, 5],
            [0, 15, 15, 12, 15],
            [0, 0, 17, 15, 13],
            [0, 27, 17, 17, 13],
            [0, 44, 11, 6, 19],
            [0, 50, 13, 21, 17],
            [0, 71, 16, 6, 14],
            [0, 77, 19, 23, 11]
        ],
        [
            [0, 0, 0, 10, 1],
            [0, 11, 2, 3, 1, 7, 7],
            [0, 23, 0, 7, 11],
            [0, 49, 0, 15, 1],
            [0, 64, 0, 6, 4],
            [0, 32, 9, 4, 1, 9, -5],
            [1, 30, 0, 19, 1],
            [1, 10, 0, 13, 1],
            [0, 23, 16, 7, 16],
            [0, 6, 18, 17, 14],
            [0, 30, 20, 15, 12],
            [4, 50, 6, 3, 1],
            [4, 56, 8, 3, 1],
            [0, 64, 14, 6, 18],
            [0, 62, 20, 2, 12],
            [0, 45, 24, 17, 8],
            [7, 69, 4, 1, 1],
            [6, 0, 1, 1, 1]
        ],
        [
            [0, 0, 0, 5, 4],
            [0, 35, 2, 4, 1, -29, 0],
            [0, 40, 0, 6, 4],
            [1, 14, 3, 1, 1],
            [1, 20, 3, 1, 1],
            [1, 25, 3, 1, 1],
            [1, 31, 3, 1, 1],
            [1, 5, 0, 35, 1],
            [1, 14, 9, 1, 7],
            [1, 20, 9, 1, 7],
            [1, 25, 9, 1, 7],
            [1, 31, 9, 1, 7],
            [0, 56, 0, 14, 1],
            [0, 72, 3, 1, 7],
            [0, 76, 5, 1, 8],
            [1, 76, 8, 1, 2],
            [0, 80, 6, 1, 10],
            [0, 84, 0, 16, 7],
            [0, 84, 11, 16, 19],
            [0, 62, 22, 22, 8],
            [0, 58, 9, 10, 13],
            [0, 45, 12, 13, 10],
            [0, 0, 22, 62, 8],
            [0, 5, 11, 2, 11],
            [0, 2, 13, 3, 9],
            [0, 7, 14, 5, 8],
            [2, 48, 3, 6, 1],
            [6, 0, 4, 1, 1],
            [7, 99, 7, 1, 1]
        ],
        [
            [0, 0, 0, 10, 3],
            [0, 14, 4, 3, 1, 0, 9],
            [0, 22, 6, 1, 12],
            [0, 24, 11, 4, 1, 11, 0],
            [0, 37, 21, 29, 1],
            [0, 35, 12, 1, 4, 7, 0],
            [0, 44, 0, 22, 21],
            [1, 10, 0, 34, 1],
            [0, 33, 14, 1, 17],
            [0, 47, 22, 1, 1],
            [0, 48, 22, 1, 2],
            [0, 49, 22, 1, 3],
            [0, 52, 22, 1, 3],
            [0, 53, 22, 1, 2],
            [0, 54, 22, 1, 1],
            [0, 49, 30, 4, 8],
            [0, 53, 31, 5, 7],
            [0, 58, 33, 8, 5],
            [0, 39, 32, 10, 6],
            [0, 12, 35, 27, 3],
            [1, 50, 21, 2, 1],
            [7, 65, 22, 1, 1],
            [6, 0, 3, 1, 1]
        ],
        [
            [0, 12, 9, 3, 1, 8, -7],
            [0, 24, 1, 1, 8],
            [5, 13, 2, 1, 1, 7, 7],
            [0, 26, 2, 3, 1, 9, 7],
            [5, 29, 6, 1, 1, 10, 0],
            [1, 10, 0, 40, 1],
            [0, 44, 2, 1, 15],
            [0, 0, 0, 10, 8],
            [0, 50, 0, 2, 15],
            [0, 68, 0, 2, 15],
            [0, 52, 0, 16, 12],
            [1, 52, 12, 16, 1],
            [0, 39, 23, 13, 12],
            [0, 15, 25, 24, 10],
            [0, 52, 22, 18, 13],
            [0, 54, 14, 2, 1, 11, 0],
            [6, 0, 8, 1, 1],
            [7, 69, 15, 1, 1]
        ],
        [
            [8, 14, 0, 3, 1],
            [8, 17, 0, 3, 1],
            [8, 20, 0, 3, 1],
            [8, 23, 0, 3, 1],
            [8, 26, 0, 3, 1],
            [8, 29, 0, 3, 1],
            [8, 32, 0, 3, 1],
            [8, 35, 0, 3, 1],
            [8, 38, 0, 3, 1],
            [8, 41, 0, 3, 1],
            [0, 44, 0, 16, 6],
            [7, 59, 6, 1, 1],
            [6, 0, 6, 1, 1],
            [0, 0, 0, 14, 6],
            [0, 0, 12, 11, 13],
            [0, 11, 14, 11, 11],
            [0, 22, 11, 10, 14],
            [0, 32, 16, 10, 9],
            [0, 42, 13, 18, 12],
            [1, 12, 14, 9, 1],
            [1, 31, 12, 1, 3],
            [1, 34, 16, 7, 1]
        ],
        [
            [0, 0, 0, 14, 1],
            [8, 11, 1, 3, 1],
            [0, 63, 0, 7, 26],
            [7, 69, 26, 1, 1],
            [6, 0, 1, 1, 1],
            [0, 17, 13, 19, 1],
            [5, 20, 13, 1, 1, 12, 0],
            [5, 32, 13, 1, 1, -12, 0],
            [8, 33, 14, 3, 1],
            [0, 40, 25, 14, 1],
            [0, 0, 12, 6, 28],
            [0, 6, 25, 21, 15],
            [0, 27, 34, 43, 6],
            [0, 0, 40, 70, 8],
            [0, 6, 18, 1, 7],
            [0, 7, 19, 1, 6],
            [0, 8, 20, 1, 5],
            [0, 9, 21, 1, 4],
            [0, 10, 22, 1, 3],
            [0, 11, 23, 1, 2],
            [0, 12, 24, 1, 1],
            [0, 31, 33, 4, 1],
            [0, 32, 32, 2, 1],
            [0, 32, 31, 1, 1]
        ],
        [
            [0, 0, 0, 15, 8],
            [6, 0, 8, 1, 1],
            [8, 18, 1, 3, 1],
            [8, 24, 1, 3, 1],
            [8, 30, 1, 3, 1],
            [8, 36, 1, 3, 1],
            [0, 42, 0, 18, 1],
            [1, 15, 0, 27, 1],
            [7, 59, 1, 1, 1],
            [0, 0, 19, 60, 13],
            [0, 24, 18, 7, 1],
            [0, 25, 17, 5, 1],
            [0, 26, 16, 3, 1],
            [0, 27, 15, 1, 1],
            [1, 35, 19, 10, 1],
            [1, 27, 15, 1, 1],
            [1, 7, 19, 13, 1],
            [1, 50, 0, 2, 1],
            [0, 49, 8, 11, 11],
            [0, 46, 10, 3, 9],
            [1, 46, 11, 1, 7]
        ],
        [
            [0, 0, 0, 13, 6],
            [2, 17, 5, 2, 1],
            [2, 23, 5, 2, 1],
            [2, 29, 5, 2, 1],
            [2, 35, 5, 2, 1],
            [2, 41, 5, 2, 1],
            [2, 47, 5, 2, 1],
            [1, 13, 0, 47, 1],
            [5, 15, 3, 1, 1, 11, 0],
            [5, 27, 3, 1, 1, 11, 0],
            [5, 50, 3, 1, 1, -11, 0],
            [2, 53, 5, 2, 1],
            [0, 60, 0, 10, 6],
            [0, 0, 14, 70, 25],
            [7, 69, 6, 1, 1],
            [6, 0, 6, 1, 1]
        ],
        [
            [0, 0, 0, 2, 12],
            [0, 0, 12, 5, 1],
            [0, 8, 6, 1, 18],
            [0, 2, 4, 4, 1],
            [3, 10, 5, 1, 1],
            [0, 13, 6, 1, 12],
            [0, 0, 24, 59, 16],
            [0, 17, 6, 15, 1],
            [5, 17, 6, 1, 1, 11, 0],
            [8, 29, 7, 3, 1],
            [0, 40, 18, 1, 6],
            [3, 42, 16, 1, 1],
            [0, 44, 20, 8, 1],
            [0, 53, 0, 6, 16],
            [1, 53, 0, 1, 15],
            [7, 58, 16, 1, 1],
            [6, 0, 13, 1, 1],
            [1, 24, 20, 2, 1],
            [1, 23, 21, 4, 1],
            [1, 22, 22, 6, 1],
            [1, 21, 23, 8, 1],
            [0, 9, 23, 1, 1],
            [0, 39, 23, 1, 1],
            [1, 2, 0, 51, 1],
            [1, 1, 6, 1, 5],
            [0, 34, 18, 3, 1]
        ],
        [
            [0, 0, 0, 50, 6],
            [0, 4, 16, 20, 1],
            [5, 5, 16, 1, 1, 18, 0],
            [0, 21, 48, 29, 2],
            [0, 47, 38, 3, 3],
            [7, 49, 41, 1, 1],
            [6, 0, 6, 1, 1],
            [1, 1, 21, 19, 1],
            [0, 24, 40, 3, 1],
            [0, 28, 42, 3, 1, 14, 0],
            [5, 36, 46, 1, 1, 0, -8],
            [0, 0, 11, 21, 1],
            [5, 2, 11, 1, 1, 17, 0],
            [0, 3, 30, 21, 1],
            [5, 22, 30, 1, 1, -18, 0],
            [0, 19, 24, 3, 1, -17, 0],
            [1, 11, 24, 2, 1],
            [0, 0, 50, 50, 8],
            [0, 24, 6, 26, 32],
            [1, 24, 37, 23, 1],
            [0, 0, 35, 21, 15],
            [0, 0, 12, 1, 23]
        ],
        [
            [0, 0, 0, 15, 50],
            [6, 0, 50, 1, 1],
            [0, 0, 57, 30, 11],
            [0, 19, 48, 6, 1, 0, -42],
            [5, 17, 42, 1, 1, 9, 0],
            [5, 17, 32, 1, 1, 9, 0],
            [5, 17, 22, 1, 1, 9, 0],
            [1, 17, 14, 1, 3, 9, 0],
            [1, 15, 0, 45, 1],
            [0, 30, 3, 1, 9],
            [0, 37, 3, 1, 9],
            [0, 44, 3, 1, 9],
            [0, 51, 3, 1, 9],
            [0, 60, 0, 20, 12],
            [7, 79, 12, 1, 1],
            [8, 55, 0, 3, 1],
            [5, 37, 11, 1, 1, 0, -8]
        ],
        [
            [0, 0, 0, 30, 1],
            [0, 30, 0, 20, 50],
            [8, 13, 1, 3, 1],
            [6, 0, 1, 1, 1],
            [7, 49, 50, 1, 1],
            [0, 18, 15, 3, 1, 8, 6],
            [0, 18, 20, 2, 1, -16, 0],
            [0, 5, 24, 1, 1, 0, 10],
            [1, 4, 31, 1, 1, 5, 0],
            [0, 8, 35, 1, 9],
            [0, 0, 48, 13, 1],
            [0, 12, 39, 1, 9],
            [0, 0, 5, 1, 43],
            [3, 14, 38, 1, 1],
            [0, 16, 39, 3, 1, 3, 3],
            [0, 0, 49, 21, 13],
            [0, 21, 57, 29, 5],
            [1, 30, 27, 1, 18],
            [0, 25, 45, 5, 1],
            [1, 0, 13, 1, 4],
            [1, 0, 7, 1, 3]
        ],
        [
            [0, 0, 0, 10, 4],
            [3, 17, 5, 1, 1],
            [3, 21, 5, 1, 1],
            [3, 25, 5, 1, 1],
            [3, 29, 5, 1, 1],
            [1, 10, 0, 23, 1],
            [0, 33, 0, 17, 4],
            [6, 0, 4, 1, 1],
            [0, 35, 4, 15, 1],
            [0, 37, 5, 13, 1],
            [0, 39, 6, 11, 1],
            [0, 41, 7, 9, 1],
            [0, 43, 8, 7, 1],
            [0, 45, 9, 5, 1],
            [0, 47, 10, 3, 1],
            [7, 49, 11, 1, 1],
            [0, 0, 15, 50, 16],
            [2, 7, 10, 1, 5],
            [2, 11, 12, 1, 3],
            [2, 15, 12, 1, 3],
            [1, 19, 13, 1, 2],
            [2, 23, 12, 1, 3]
        ],
        [
            [6, 0, 1, 1, 1],
            [0, 49, 0, 11, 1],
            [0, 0, 0, 12, 1],
            [0, 43, 0, 5, 1, -30, 0],
            [1, 22, 2, 1, 5],
            [3, 20, 8, 1, 1],
            [1, 31, 2, 5, 1],
            [3, 33, 5, 1, 1],
            [1, 45, 2, 1, 5],
            [3, 43, 8, 1, 1],
            [8, 57, 1, 3, 1],
            [0, 65, 0, 7, 17],
            [1, 65, 0, 1, 16],
            [0, 0, 23, 72, 16],
            [0, 0, 8, 12, 15],
            [0, 12, 12, 13, 12],
            [0, 25, 15, 27, 8],
            [7, 71, 17, 1, 1]
        ],
        [
            [0, 0, 0, 10, 1],
            [8, 7, 1, 3, 1],
            [0, 13, 15, 2, 1],
            [3, 21, 18, 1, 1],
            [3, 25, 10, 1, 1],
            [0, 28, 9, 1, 10],
            [0, 25, 12, 1, 16],
            [0, 0, 28, 32, 18],
            [1, 28, 15, 1, 4],
            [3, 28, 22, 1, 1],
            [0, 32, 21, 3, 1, 0, -8],
            [3, 34, 37, 1, 1],
            [0, 0, 46, 77, 12],
            [0, 36, 42, 5, 1],
            [6, 0, 1, 1, 1],
            [0, 76, 4, 1, 42],
            [0, 74, 0, 3, 1],
            [0, 43, 39, 3, 1, 27, 0],
            [5, 47, 34, 1, 1, 8, 9],
            [5, 64, 43, 1, 1, 0, -8],
            [7, 76, 1, 1, 1]
        ],
        [
            [0, 0, 0, 16, 1],
            [0, 16, 0, 1, 20],
            [1, 16, 6, 1, 1],
            [0, 44, 0, 6, 30],
            [7, 49, 30, 1, 1],
            [6, 0, 1, 1, 1],
            [1, 16, 11, 1, 1],
            [1, 16, 16, 1, 1],
            [0, 0, 4, 13, 21],
            [1, 12, 9, 1, 1],
            [1, 12, 14, 1, 1],
            [1, 12, 19, 1, 1],
            [0, 0, 25, 39, 19],
            [0, 20, 5, 1, 20],
            [1, 20, 14, 1, 1],
            [1, 20, 9, 1, 1],
            [1, 20, 19, 1, 1],
            [0, 24, 0, 1, 19],
            [0, 17, 0, 7, 1],
            [1, 25, 13, 19, 1],
            [0, 39, 34, 11, 10],
            [3, 32, 19, 1, 1],
            [3, 36, 19, 1, 1],
            [3, 40, 19, 1, 1]
        ],
        [
            [0, 0, 0, 9, 1],
            [1, 12, 5, 1, 1],
            [1, 10, 9, 1, 1],
            [3, 18, 17, 1, 1],
            [0, 22, 15, 1, 12],
            [6, 0, 1, 1, 1],
            [0, 67, 0, 3, 1],
            [0, 69, 4, 1, 36],
            [7, 69, 1, 1, 1],
            [0, 26, 18, 1, 13],
            [1, 22, 16, 1, 1],
            [3, 26, 15, 1, 1],
            [3, 29, 16, 1, 1],
            [0, 32, 17, 1, 10],
            [0, 0, 31, 33, 9],
            [1, 26, 22, 1, 4],
            [0, 10, 13, 3, 1, 0, -11],
            [0, 0, 40, 2, 10],
            [0, 5, 45, 28, 1],
            [0, 0, 50, 62, 12],
            [0, 62, 40, 8, 22],
            [5, 5, 45, 1, 1, 12, 0],
            [0, 36, 45, 22, 1],
            [0, 58, 31, 3, 1],
            [8, 58, 32, 3, 1],
            [1, 34, 45, 1, 1],
            [5, 15, 45, 1, 1, 7, 0],
            [5, 32, 45, 1, 1, -7, 0]
        ],
        [
            [2, 0, 9, 10, 1],
            [3, 17, 13, 1, 1],
            [3, 20, 15, 1, 1],
            [3, 23, 17, 1, 1],
            [3, 26, 19, 1, 1],
            [6, 0, 10, 1, 1],
            [3, 29, 21, 1, 1],
            [3, 32, 23, 1, 1],
            [3, 35, 25, 1, 1],
            [3, 38, 27, 1, 1],
            [3, 41, 25, 1, 1],
            [3, 44, 23, 1, 1],
            [3, 47, 21, 1, 1],
            [3, 50, 19, 1, 1],
            [3, 53, 17, 1, 1],
            [3, 56, 15, 1, 1],
            [3, 59, 13, 1, 1],
            [2, 63, 10, 5, 1],
            [2, 70, 10, 1, 1],
            [2, 73, 10, 1, 1],
            [2, 76, 10, 1, 1],
            [2, 79, 10, 1, 1],
            [2, 82, 8, 1, 1],
            [2, 85, 6, 1, 1],
            [2, 89, 0, 11, 1],
            [7, 99, 1, 1, 1]
        ],
        [
            [0, 0, 0, 30, 1],
            [8, 11, 1, 3, 1],
            [0, 16, 17, 5, 1],
            [4, 10, 20, 3, 1],
            [4, 5, 23, 2, 1],
            [4, 11, 25, 1, 1],
            [4, 14, 29, 1, 1],
            [4, 8, 29, 1, 1],
            [4, 2, 29, 2, 1],
            [0, 0, 5, 1, 45],
            [0, 0, 50, 25, 4],
            [0, 30, 0, 13, 50],
            [0, 0, 54, 43, 15],
            [7, 42, 50, 1, 1],
            [6, 0, 1, 1, 1],
            [4, 17, 27, 2, 1, -1, 6],
            [1, 0, 20, 1, 3],
            [1, 0, 27, 1, 2],
            [1, 0, 33, 1, 3],
            [1, 0, 40, 1, 1],
            [1, 0, 45, 1, 3],
            [1, 0, 13, 1, 2],
            [0, 11, 33, 1, 1],
            [2, 14, 37, 2, 1],
            [4, 17, 41, 2, 1],
            [3, 23, 46, 1, 1],
            [3, 26, 48, 1, 1],
            [1, 30, 37, 1, 5],
            [1, 30, 33, 1, 1],
            [1, 30, 25, 1, 5]
        ],
        [
            [0, 0, 8, 16, 2],
            [0, 0, 0, 7, 6],
            [0, 20, 7, 3, 1],
            [8, 20, 8, 3, 1],
            [0, 27, 18, 3, 1],
            [8, 27, 19, 3, 1],
            [0, 0, 31, 57, 15],
            [6, 0, 10, 1, 1],
            [0, 51, 0, 6, 27],
            [7, 56, 27, 1, 1],
            [0, 35, 16, 1, 15],
            [3, 36, 14, 1, 1],
            [3, 38, 15, 1, 1],
            [4, 39, 26, 1, 1],
            [4, 40, 26, 1, 1],
            [4, 41, 26, 1, 1],
            [4, 42, 26, 1, 1],
            [4, 43, 26, 1, 1],
            [4, 44, 26, 1, 1],
            [4, 45, 26, 1, 1],
            [4, 46, 26, 1, 1]
        ],
        [
            [0, 0, 0, 8, 1],
            [0, 97, 0, 3, 50],
            [7, 99, 50, 1, 1],
            [3, 15, 4, 1, 1],
            [0, 18, 6, 1, 1],
            [0, 28, 6, 1, 19],
            [0, 17, 29, 17, 1],
            [3, 21, 24, 1, 1],
            [3, 18, 25, 1, 1],
            [3, 15, 26, 1, 1],
            [3, 13, 28, 1, 1],
            [0, 33, 10, 1, 19],
            [1, 33, 22, 1, 1],
            [1, 28, 17, 1, 1],
            [1, 33, 13, 1, 1],
            [3, 33, 7, 1, 1],
            [3, 36, 13, 1, 1],
            [3, 36, 22, 1, 1],
            [8, 25, 30, 3, 1],
            [0, 20, 45, 1, 1],
            [0, 30, 45, 1, 1],
            [2, 36, 45, 1, 1],
            [4, 39, 45, 1, 1],
            [2, 42, 45, 1, 1],
            [4, 45, 45, 1, 1],
            [0, 48, 45, 4, 1, 24, 0],
            [1, 57, 46, 1, 5],
            [3, 55, 51, 1, 1],
            [0, 82, 40, 3, 1],
            [0, 90, 40, 3, 1],
            [8, 82, 41, 3, 1],
            [8, 90, 41, 3, 1],
            [4, 48, 48, 1, 1],
            [0, 50, 53, 1, 1],
            [5, 62, 47, 1, 1, 10, 0],
            [6, 0, 1, 1, 1],
            [3, 25, 17, 1, 1]
        ],
        [
            [0, 0, 0, 32, 1],
            [6, 0, 1, 1, 1],
            [7, 31, 1, 1, 1]
        ]
    ];
    let l = 0,
        h = {
            map: [],
            enemy: [],
            start: new o,
            end: new o
        };

    function d() {
        h = {
            map: [],
            enemy: [],
            start: new o,
            end: new o
        }, r[n].forEach(n => {
            4 === n[0] ? h.map.push(new i(n[0], n[1] * c, n[2] * c, n[3] * c, n[4] * c, (void 0 !== n[5] ? new o(n[5], n[6]) : new o).get().mult(c))) : 5 === n[0] ? h.enemy.push(new a(n[0], n[1] * c, n[2] * c, n[3] * c, n[4] * c, (void 0 !== n[5] ? new o(n[5], n[6]) : new o).get().mult(c))) : 6 === n[0] ? h.start = new o(n[1] * c, n[2] * c) : 7 === n[0] ? h.end = new o(n[1] * c, n[2] * c) : 3 === n[0] ? h.enemy.push(new t(n[0], n[1] * c, n[2] * c)) : 8 === n[0] ? h.enemy.push(new e(n[0], n[1] * c, n[2] * c)) : h.map.push(new s(n[0], n[1] * c, n[2] * c, n[3] * c, n[4] * c, (void 0 !== n[5] ? new o(n[5], n[6]) : new o).get().mult(c)))
        })
    }
    return {
        i: () => {
            d()
        },
        reset: () => {
            d()
        },
        n: () => {
            h.map.forEach(t => {
                t.n()
            }), h.enemy.forEach(t => {
                t.n()
            })
        },
        r: () => {
            h.map.forEach(t => {
                t.r()
            }), h.enemy.forEach(t => {
                t.r()
            })
        },
        getMap: () => h,
        currentLevel: () => n,
        nextLevel: t => {
            l = -1 === t, n += t
        },
        getStart: () => h.start,
        getCharacterStart: () => l ? h.end : h.start,
        getEnd: () => h.end,
        isFirst: () => 0 === n,
        isLast: () => n === r.length - 1
    }
})(), window.particles = function() {
    let t = [],
        e = +new Date,
        a = +new Date;
    return {
        reset: () => {
            t = []
        },
        addRunning: (a, i) => {
            if (+new Date - e < 200) return 0;
            for (let e = 0; e < 5; e++) t.push(new n(rFloat(.1, .15), 1, a.get(), new o(rFloat(-1, 1), rFloat(.5, .5 + i.x / 5)), 500, color.walking));
            e = +new Date
        },
        addWall: (e, i) => {
            if (+new Date - a < 200) return 0;
            for (let a = 0; a < 5; a++) t.push(new n(rFloat(.1, .15), 1, e.get().add(new o(20 * i, 0)), new o(rFloat(-.5, .5), rFloat(.1, .5)), 500, color.walking));
            a = +new Date
        },
        addJump: (e, a) => {
            for (let i = 0; i < 50; i++) t.push(new n(rFloat(.1, .15), 1, e.get(), new o(rFloat(a - 2, a + 2), rFloat(.5, 1)), 500, color.walking))
        },
        addFan: e => {
            for (let a = 0; a < 1; a++) t.push(new n(rFloat(1e-4, 15e-5), 2, e.get().add(new o(rInt(0, 100), rInt(0, 20))), new o(0, rFloat(1, 3)), 2e3, color.walking))
        },
        dying: (e, a) => {
            for (let i = 0; i < 30; i++) t.push(new n(rFloat(.1, .3), rInt(3, 10), e.get(), new o(rFloat(.5, 2) * Math.sin(rFloat(0, 2 * Math.PI)), rFloat(3, 4) * Math.cos(rFloat(0, 2 * Math.PI))), 500, a[rInt(0, a.length)]))
        },
        takePower: e => {
            for (let a = 0; a < 30; a++) t.push(new n(rFloat(.1, .3), rInt(1, 4), e.get(), new o(rFloat(.5, 2) * Math.sin(rFloat(0, 2 * Math.PI)), rFloat(3, 4) * Math.cos(rFloat(0, 2 * Math.PI))), 500, color.power))
        },
        n: () => {
            t = t.filter(function(t) {
                return t.n(), t.isActive
            })
        },
        r: () => {
            t.forEach(function(t) {
                t.r()
            })
        }
    }
}(), window.camera = (() => {
    let t = new o,
        e = new o;
    return {
        reset: () => {
            const e = character.position();
            t.apply(new o(e.x - gc.res.x / 2, e.y - gc.res.y / 2)), t.x < 0 && (t.x = 0), t.x + gc.res.x > map.getEnd().x + 40 && (t.x = map.getEnd().x + 40 - gc.res.x), t.y < 0 && (t.y = 0)
        },
        n: () => {
            const a = character.position();
            e.apply(new o(a.x - gc.res.x / 2, a.y - gc.res.y / 2)), e.x < 0 && (e.x = 0), e.x + gc.res.x > map.getEnd().x + 40 && (e.x = map.getEnd().x + 40 - gc.res.x), e.y < 0 && (e.y = 0), t.add(e.get().sub(t).mult(.05))
        },
        r: () => {
            c.translate(-t.x, -t.y)
        },
        getPosition: () => t
    }
})(), window.finalScene = (() => {
    const t = [
        [
            [8, 52, 11, 72, 16, 36], "", "black", 1
        ],
        [
            [75, 36, 86, 53, 80, 72], "", "black", 1
        ],
        [
            [39, 35, 56, 35, 67, 72, 26, 72], "", "rgba(255, 255, 255, .1)", 1
        ],
        [
            [51, 0, 0, 36, 97, 37], "", "black", 1
        ],
        [
            [36, 17, 15, 30, 33, 29], "", "red", 1
        ],
        [
            [65, 17, 82, 31, 67, 29], "", "red", 1
        ]
    ];
    let e, a, i = 0,
        s = new o(1e3, 147),
        n = new o,
        l = 0,
        h = 3;
    return {
        i: () => {
            i = 1, a = +new Date, e = new r(t, [
                [0, 0, [39, 35, 56, 35, 56, 35, 38, 35], 0, 0, 0],
                [
                    [33, 32, 47, 16, 16, 35],
                    [76, 36, 56, 34, 46, 16],
                    [39, 35, 56, 35, 57, 35, 38, 35], 0, 0, 0
                ]
            ], 2e3, 1)
        },
        n: () => {
            if (i && +new Date - a > 2500) {
                (l += .01) > Math.PI / 4 && (l = Math.PI / 4), h -= .01;
                const t = n.get().normalize().mult(-.017);
                t.add(new o(-.2, .1)), n.add(t), s.add(n)
            }
        },
        r: () => {
            c.save(), c.translate(100, 550), c.scale(1, -1), c.font = "120px Courier New", c.textAlign = "left", c.fillStyle = "white", c.fillText("THE END", 0, 0), c.translate(0, 100), c.font = "60px Courier New", c.fillText("Thanks for playing!", 10, 0), c.restore(), c.save(), c.translate(s.x, s.y), c.scale(h, -h), c.rotate(l), draw.r(i ? e.n() : t, [97, 72]), c.restore()
        },
        rBackground: () => {
            let t = c.createLinearGradient(0, 0, 0, gc.res.y);
            t.addColorStop(0, "hsl(238, 10%, 30%)"), t.addColorStop(1, "hsl(238, 10%, 10%)"), c.save(), c.fillStyle = t, c.fillRect(0, 0, gc.res.x, gc.res.y), c.restore()
        }
    }
})(), window.scene = (() => {
    let t;
    return {
        i: () => {
            (t = c.createLinearGradient(0, 0, 0, gc.res.y)).addColorStop(0, "hsl(37, 30%, 45%)"), t.addColorStop(1, "hsl(37, 30%, 10%)"), background.i(), map.i(), character.i()
        },
        reset: () => {
            background.reset(), map.reset(), character.reset(), particles.reset(), camera.reset()
        },
        n: () => {
            gc.splashScreen ? splashScreen.n() : (background.n(), map.n(), map.isLast() ? (character.nFinal(), finalScene.n()) : character.n(), particles.n(), camera.n())
        },
        r: () => {
            c.save(), c.fillStyle = t, c.fillRect(0, 0, gc.res.x, gc.res.y), c.restore(), gc.splashScreen ? splashScreen.r() : (map.isLast() ? finalScene.rBackground() : background.r(), c.save(), camera.r(), map.r(), map.isLast() ? (character.rFinal(), finalScene.r()) : character.r(), particles.r(), c.restore()), c.save(), c.translate(1250, 690), c.scale(.3, .3), gc.muted ? draw.r([
                [
                    [0, 23, 0, 59, 30, 59, 55, 75, 55, 0, 30, 24], "", "white", 1
                ]
            ], [55, 75]) : draw.r([
                [
                    [0, 27, 0, 64, 30, 63, 55, 80, 55, 4, 30, 28], "", "white", 1
                ],
                [
                    [59, 28, 60, 57, 65, 57, 64, 28], "", "white", 1
                ],
                [
                    [66, 18, 67, 64, 71, 64, 71, 19], "", "white", 1
                ],
                [
                    [73, 8, 75, 72, 80, 72, 79, 8], "", "white", 1
                ],
                [
                    [83, 0, 84, 81, 89, 81, 87, 0], "", "white", 1
                ]
            ], [89, 81]), c.restore()
        }
    }
})(), window.sfx = (() => {
    let t = +new Date;

    function e(t, e, a) {
        if (gc.muted) return 0;
        const i = gc.ac.createOscillator(),
            s = gc.ac.createGain();
        i.type = "triangle", i.connect(s), s.connect(gc.ac.destination), i.frequency.value = t, i.start(0), s.gain.value = a || 1, s.gain.exponentialRampToValueAtTime(1e-5, gc.ac.currentTime + (e || .5))
    }
    return {
        fall: () => {
            e(43.65)
        },
        jump: () => {
            e(82.41, .2)
        },
        run: () => {
            +new Date - t < 200 || (e(146.83, .05, .4), t = +new Date)
        },
        wall: () => {
            +new Date - t < 100 || (e(41.2, .2), t = +new Date)
        },
        die: () => {
            e(61.74, 3)
        },
        fallingBlock: () => {
            e(51.91, 5)
        },
        takePower: () => {
            e(220, .5)
        },
        flying: () => {
            +new Date - t < 30 || (e(27.5, .5), t = +new Date)
        }
    }
})(), window.splashScreen = (() => ({
    n: () => {
        character.nSplashScreen()
    },
    r: () => {
        c.save(), c.translate(500, 340), c.scale(1, -1), c.font = "120px Courier New", c.textAlign = "left", c.fillStyle = "white", c.fillText("Triangle:", 0, 0), c.translate(0, 100), c.font = "60px Courier New", c.fillText("Back To Home", 30, 0), c.translate(0, 160), c.font = "30px Courier New", c.fillText("(Click to Start)", -30, 0), c.restore(), character.rSplashScreen()
    }
}))(), window.color = {
    mechanics: "hsl(60, 100%, 15%)",
    walking: "hsl(224, 4%, 5%)",
    dying1: "hsl(15, 85%, 41%)",
    dying2: "hsl(15, 85%, 60%)",
    dying3: "hsl(15, 85%, 10%)",
    dying4: "hsl(15, 85%, 30%)",
    black: "#141212",
    ice: "#001933",
    stamina: "#023609",
    power: "yellow",
    white: "#b4b5b8"
}, window.draw = (() => {
    let t = "transparent";
    return {
        r: (e, a, i) => {
            c.save(), a && c.translate(-a[0] / 2, -a[1] / 2), e.forEach(e => {
                bp(), c.fillStyle = color[e[2]] || e[2] || t, c.strokeStyle = color[e[1]] || e[1] || t, c.lineWidth = e[3] ? .001 : i, c.lineJoin = "round", m(e[0][0], e[0][1]);
                for (let t = 2; t < e[0].length; t += 2) l(e[0][t], e[0][t + 1]);
                e[3] && cp(), e[1] && c.stroke(), e[3] && c.fill()
            }), c.restore()
        }
    }
})();