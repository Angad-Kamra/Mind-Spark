    let R, G, V, U, bn, au, w = window,
        fA = navigator.userAgent.match(/andro|ipho|ipa|ipo|windows ph/i),
        __ = fA ? 1400 : 1e3,
        di = "Dismiss";
_u = ((t, s, i) => s < t ? t : s > i ? i : s), _f = ((t, s, i) => s >= t && s <= i), C = ((t, s) => random() * (s - t) + t), _a = (t => t[~~(random() * t.length)]), bu = ((t, s, i, h) => sqrt(pow(t - i, 2) + pow(s - h, 2))), F = ((t, s) => bu(t.x, t.y, s.x, s.y)), bc = (t => t < 0 ? -1 : t > 0 ? 1 : 0), cZ = ((t, s) => ((t %= 2 * s) > s && (t -= 2 * s), t < -s && (t += 2 * s), t)), aP = (t => cZ(t, PI)), _Q = ((t, s) => atan2(s.y - t.y, s.x - t.x));
let m = Math;
Object.getOwnPropertyNames(m).forEach(t => w[t] = w[t] || m[t]), M = 2 * PI;
let p = CanvasRenderingContext2D.prototype;
p.N = function(t) {
    this.save(), t(), this.restore()
}, p.fr = p.fillRect, p.I = function(t) {
    this.fillStyle = t
}, _E = (t => {
    let s, i = [],
        h = 0;
    t.toLowerCase().split("").forEach(t => {
        let e = hL[t] || [],
            a = h;
        e.forEach(t => {
            i.push([h + t[0], t[1], h + t[2], t[3]]), a = max(a, h + t[0] + .4, h + t[2] + .4)
        }), e.length || (a += 1), s = (h = a) - .4
    });
    let e = [];
    return i.forEach((t, s) => {
        e.splice(~~(random() * e.length), 0, s)
    }), {
        aB: i,
        bI: e,
        width: s
    }
}), aQ = ((t, s, i, h, e, a) => {
    t.aB.forEach((r, l) => {
        N(() => {
            let _ = t.bI[l],
                n = _u(0, (h - _ * e) / a, 1),
                o = bc((l + _) % 2 - .5);
            l % 2 - .5 > 0 ? translate(o * (1 - n) * 50, 0) : translate(0, o * (1 - n) * 50), R.globalAlpha *= n, beginPath(), moveTo(r[0] * s, r[1] * i), lineTo(r[2] * s, r[3] * i), stroke()
        })
    })
});
let _c = [0, 0, 0, 1],
    ao = [1, 0, 1, 1],
    _K = [0, 0, 1, 0],
    _P = [0, 1, 1, 1],
    aR = [0, .5, 1, .5],
    co = [1, .5, 1, 1],
    hL = {
        a: [
            [0, 1, .5, 0],
            [1, 1, .5, 0]
        ],
        b: [_c, _P, aR, co, [0, 0, .75, 0],
            [.75, 0, .75, .5]
        ],
        c: [_c, _K, _P],
        d: [_c, [0, 0, 1, .5],
            [1, .5, 0, 1]
        ],
        e: [_c, _K, [0, .5, 2 / 3, .5], _P],
        f: [_c, _K, [0, .5, 2 / 3, .5]],
        g: [_K, _c, _P, co],
        h: [_c, ao, aR],
        i: [_c],
        j: [ao, _P, [0, .5, 0, 1]],
        k: [_c, [1, 0, 0, .5],
            [1, 1, 0, .5]
        ],
        l: [_c, _P],
        m: [_c, [0, 0, .5, .5],
            [1, 0, .5, .5], ao
        ],
        n: [_c, [0, 0, 1, 1], ao],
        o: [_K, _P, _c, ao],
        p: [_c, _K, [1, 0, 1, .5], aR],
        q: [_K, _P, _c, ao, [1, 1, 1, 1.3]],
        r: [_c, _K, [1, 0, 1, .5], aR, [0, .5, 1, 1]],
        s: [_K, [0, 0, 0, .5], aR, co, _P],
        t: [_K, [.5, 0, .5, 1]],
        u: [_c, _P, ao],
        v: [
            [0, 0, .5, 1],
            [1, 0, .5, 1]
        ],
        w: [
            [0, 0, .25, 1],
            [.25, 1, .5, .5],
            [.75, 1, .5, .5],
            [1, 0, .75, 1]
        ],
        x: [
            [0, 0, 1, 1],
            [1, 0, 0, 1]
        ],
        y: [
            [0, 0, .5, .5],
            [.5, .5, 1, 0],
            [.5, .5, .5, 1]
        ],
        z: [_K, _P, [1, 0, 0, 1]],
        "'": [
            [0, .25, .25, 0]
        ],
        "-": [
            [0, .5, 1, .5]
        ]
    },
    aU = (t, s, i) => {
        let h = document.createElement("canvas");
        return h.width = t, h.height = s, i(h.getContext("2d"), h), h
    };
eI = (() => {
    beginPath(), arc(0, -12, 15, 0, M), fill(), beginPath(), arc(12, 12, 15, 0, M), fill(), beginPath(), arc(-12, 12, 15, 0, M), fill()
}), eH = ((t, s, i, h) => aU(t.width + 2 * s, t.height + 2 * s, (e, a) => {
    let r = e.createRadialGradient(a.width / 2, a.height / 2, t.width / 2, a.width / 2, a.height / 2, t.width / 2 + s);
    r.addColorStop(0, i), r.addColorStop(1, h), e.I(r), e.fr(0, 0, a.width, a.height);
    try {
        e.drawImage(t, s, s)
    } catch (t) {}
})), _C = ((t, s, i) => {
    let h;
    U.cN.push(h = {
        bi: t,
        dV: 1,
        _e: () => N(() => {
            if (i) return i(h);
            V._x(h, h.hn) && (R.globalAlpha = h.dV, I(h.bi), beginPath(), arc(h.x, h.y, h.hn / 2, 0, M), fill())
        })
    }), s.forEach((t, s) => {
        let i = [h].concat(t);
        s || (i[7] = (() => U._D(U.cN, h))), _g.apply(0, i)
    })
});
class ae {
    constructor() {
        this._W = []
    }
    Y() {}
    hh() {
        this._W.forEach(t => G.aJ.hg(t._J, t._A)), this._W = []
    }
    _v(t, s) {
        this._W.push({
            _J: t,
            _A: s
        }), G.aJ._v(t, s)
    }
    bg() {
        this.Y()
    }
    _r(t) {
        this.hd(t)
    }
}
class hc extends ae {
    Y() {
        V.cR = 1, G._l("Follow a quick tutorial?", [{
            hM: "Yes",
            hX: () => this._r(new ha)
        }, {
            hM: "No",
            hX: () => this._r(new eT)
        }])
    }
}
class ha extends ae {
    Y() {
        G._l("Use arrow keys to control your ship");
        let t = {
            x: U.D.x,
            y: U.D.y
        };
        this._v(1, () => {
            F(t, U.D) > 500 && this._r(new h_)
        })
    }
}
class h_ extends ae {
    Y() {
        G._l("Press [SPACE] for blasters, [ENTER] for torpedoes");
        let t = 20;
        this._v(2, s => {
            s._H !== U.D || --t || this._r(new gZ)
        })
    }
}
class gZ extends ae {
    Y() {
        G._l("Communications OFFLINE. Find resources to repair", [{
            hM: "Help",
            hX: () => G._l("Resources can be collected by destroying asteroids")
        }]), this._v(1, () => {
            U.D.B._G >= 20 && this._r(new gW), U._b.length < 10 && U.eC()
        })
    }
}
class gW extends ae {
    Y() {
        G._l("Communications ONLINE. Good job"), setTimeout(() => this._r(new eT), 5e3)
    }
}
class eT extends ae {
    Y() {
        V.cR = 0, U.gU(), G._l("Bring PEACE to the galaxy, or WAR...", [{
            hM: di,
            hX: () => this._r()
        }]), G.df = 0
    }
}
class gS extends ae {
    constructor(t) {
        super(), this.O = t
    }
    Y() {
        super.Y();
        let t = 15;
        this._v(1, s => {
            (t -= s) < 0 && this._r()
        }), G._l(() => "Incoming communication from " + this.O.B.K.dR() + " - " + da(t), [{
            hM: "Respond",
            hX: () => {
                t = 15, G._l(() => this.O._M + " - " + da(t), [{
                    hM: "Accept",
                    hX: () => this._r(this.O)
                }, {
                    hM: "Refuse",
                    hX: () => this._r()
                }])
            }
        }, {
            hM: "Ignore",
            hX: () => this._r()
        }])
    }
    _r(t) {
        super._r(t), t || (this.O.B.aH(-.1), G._l("Communication ignored. " + this.O.B.K._B + " will remember that", [{
            hM: di,
            hX: () => G._l()
        }]), setTimeout(() => G._l(), 5e3))
    }
}
class aF extends ae {
    Y() {
        this.aa = 120, this._v(1, t => {
            (this.aa -= t) < 0 && G.aY(0)
        }), G._l(() => this.ag() + " - " + da(this.aa))
    }
    dZ(t, s) {
        let i = new gM(t, s);
        i.B = this.B, this._r(i), i.aa = this.aa
    }
}
class gL extends aF {
    constructor(t) {
        super(), this.H = t, this._M = "Destroy facilities on " + t.dR(), this._t = [t], this.dP = 0, this.dN = min(this.H.aq.length, ~~C(3, 5))
    }
    ag() {
        return "Facilities destroyed: " + this.dP + "/" + this.dN
    }
    Y() {
        super.Y(), this._v(0, t => {
            t.H === this.H && (this.dP++, this.dP >= this.dN && G.aY(1))
        })
    }
}
class gI extends aF {
    constructor(t) {
        super(), this.J = t, this._M = "Collect some data on " + t.dR() + " for us", this._t = [t], this.dG = 0
    }
    ag() {
        return this.dF() ? "Collecting data... - " + ~~(100 * this.dG) + "%" : "Get close to " + this.J._B
    }
    Y() {
        super.Y(), this._v(1, t => {
            this.dF() && (this.dG += .025 * t, this.dG >= 1 && this.dZ(this.B.K, "Return to " + this.B.K._B))
        })
    }
    dF() {
        return F(U.D, this.J) < 4 * this.J.$
    }
}
class gG extends aF {
    constructor() {
        super(), this._M = "Collect some resources for us", this.bl = 100, this.gF = 0
    }
    ag() {
        return "Collect resources - " + this.gF + "/" + this.bl
    }
    Y() {
        super.Y(), this._v(3, () => {
            U.D.B._G--, ++this.gF >= this.bl && this.dZ(this.B.K, "Return to " + this.B.K._B)
        })
    }
}
class gE extends aF {
    constructor() {
        super(), this._M = "Destroy these asteroids for us"
    }
    ag() {
        return "Destroy the asteroids"
    }
    Y() {
        super.Y();
        let t = [];
        for (let s = 0; s < 5; s++) {
            let s = new cD;
            s.x = U.D.x + 1e3 * _a([-1, 1]) / .25, s.y = U.D.y + C(-1, 1) * __ * 2, s._n = bc(U.D.x - s.x) * min(abs(s._n), 100), s._m = bc(U.D.y - s.y) * min(abs(s._m), 100), s.gB = 1, U._b.push(s), t.push(s)
        }
        this._v(1, () => {
            this._t = t.filter(t => t._k > 0), this._t.length || G.aY(1)
        })
    }
}
class gz extends aF {
    constructor() {
        super(), this._M = "Help us fight these pirates"
    }
    ag() {
        return "Destroy the pirate ships"
    }
    Y() {
        super.Y();
        let t = U.fk(this.B.K._N.x + _a([-1, 1]) * (this.B.K._N.ai + 2e3), this.B.K.y + C(-2e3, 2e3));
        this._v(1, () => {
            this._t = t.filter(t => t._k > 0), this._t.length || G.aY(1)
        })
    }
}
class gM extends aF {
    constructor(t, s) {
        super(), this._t = [t], this._M = s
    }
    ag() {
        return this._M
    }
    Y() {
        super.Y(), this._v(1, () => {
            F(this._t[0], U.D) < 3 * this._t[0].$ && G.aY(1)
        })
    }
}
class gx {
    constructor() {
        this._p = [], this._b = [], this.aT = [], this.cN = [], this.aA = [], this.aV = [], this.aG = [], this.K = {
            x: 0,
            y: 0
        }, this.cb = createRadialGradient(0, 0, 0, 0, 0, 1), this.cb.addColorStop(0, "rgba(255,255,200,1)"), this.cb.addColorStop(.3, "rgba(255,255,200,0.1)"), this.cb.addColorStop(1, "rgba(255,255,200,0)"), this.fa(), this.f_ = 0
    }
    fa() {
        this._D(this._p, this.D), this._p.push(this.D = new gv(this.K.x, this.K.y))
    }
    W(t) {
        (this.f_ -= t) <= 0 && (this.f_ = 3, this.eC()), this.forEach([this._b, this._p, this.aV, this.aA, [V]], s => s.W(t))
    }
    eC() {
        let t = new cD;
        t.x = U.D.x + _a([-1.1, 1.1]) * V.be / 2, t.y = U.D.y + _a([-1.1, 1.1]) * V.cl / 2, U._b.push(t)
    }
    forEach(t, s) {
        t.forEach(t => t.forEach(t => s(t)))
    }
    _e() {
        I("#000"), fr(0, 0, 1e3, __);
        let t = bW(1);
        N(() => {
            translate(500, __ / 2), scale(V.ac, V.ac), I(this.cb);
            for (let s = 0; s < 400; s++) N(() => {
                let s = t._f(.1, .3);
                translate(cZ(1e3 * t._f(-1, 1) - U.D.x * s, 1e3), cZ(t._f(-1, 1) * __ - U.D.y * s, __)), scale(20 * s, 20 * s), beginPath(), arc(0, 0, 1, 0, M), fill()
            })
        }), N(() => {
            scale(V.ac, V.ac), translate(-V.x, -V.y), this.forEach([this.aA, this.cN, this._p, this._b, this.aV], t => N(() => {
                t._e()
            }))
        })
    }
    _D(t, s) {
        let i = t.indexOf(s);
        i >= 0 && t.splice(i, 1)
    }
    gl(t) {
        this.forEach([this._p, this._b], t), this._b.forEach(s => (s.aq || []).forEach(t))
    }
    gU() {
        this.K = {
            x: U.D.x,
            y: U.D.y
        };
        let t = bW(1);
        for (let s = 0; s < 3; s++) {
            let i = 6800 * s,
                h = t._f(0, M),
                e = ~~(M * i / 6800);
            for (let s = 0; s < e; s++) {
                let a = s / e * M,
                    r = new eG(t);
                r.x = cos(a + h) * i + U.D.x, r.y = sin(a + h) * i + U.D.y, this._b.push(r), this.aT.push(r);
                let l = t._f(2, 4),
                    _ = t._f(500, 700);
                for (let s = 0; s < l; s++) {
                    let s = new gf(r, _, 999 * t.ge());
                    this._b.push(s), r.ai = _ + s.$, _ += t._f(500, 700)
                }
                let n = t._f(0, M);
                this.fk(cos(n) * (i + 3400), sin(n) * (i + 3400))
            }
        }
    }
    fk(t, s) {
        let i = [...Array(~~C(4, 6))].map(() => new eA(new cu({
            x: t,
            y: s,
            $: 300
        }, 0), t + C(-300, 300), s + C(-300, 300)));
        return this._p = this._p.concat(i), this.aG = this.aG.concat(i), i
    }
    cv(t, s, i) {
        [...Array(~~i)].forEach(() => U.aV.push(new gc(t, s)))
    }
}
class cw {
    constructor() {
        this.x = this.y = 0, this.$ = 0
    }
    W() {
        U._p.forEach(t => {
            let s = this.$ + t.$,
                i = s - F(t, this);
            if (i > 0) {
                let h = _Q(this, t);
                t.x = this.x + cos(h) * (s + 5), t.y = this.y + sin(h) * (s + 5), t._n += cos(h) * (i + 100), t._m += sin(h) * (i + 100), _g(t, "fD", _a([-6, 6]), 0, 1), t._q(this, .1), V._x(t) && cG()
            }
        })
    }
    _q(t) {
        _C(this.cH(), [
            ["dV", 1, 0, 1],
            ["hn", C(2, 4), C(5, 10), 1],
            ["x", t.x, t.x + C(-20, 20), 1],
            ["y", t.y, t.y + C(-20, 20), 1]
        ])
    }
    eq() {
        N(() => {
            let t = cos(-PI / 4) * (this.$ + 20),
                s = sin(-PI / 4) * (this.$ + 20),
                i = cos(-PI / 4) * (this.$ + 50),
                h = sin(-PI / 4) * (this.$ + 50),
                e = i + 30,
                a = h;
            I("#fff"), R.strokeStyle = R.fillStyle, R.lineWidth = 2, beginPath(), moveTo(t, s), lineTo(i, h), lineTo(e, a), stroke(), R.hU = 8, translate(e + 10, a - 7), aQ(this._E, 10, 15, 1, 0, 0)
        })
    }
}
let em = [.1, .3, .2, .5];
class eG extends cw {
    constructor(t) {
        super(), this.$ = t._f(100, 200), this._B = el(t), this._E = _E(this._B), this.cJ = eH(aU(2 * this.$, 2 * this.$, () => 0), 100, "rgba(255,0,0,0.3)", "rgba(255,0,0,0)"), this._z = createRadialGradient(0, 0, 0, 0, 0, this.$), this._z.addColorStop(0, "#fff"), this._z.addColorStop(.3, "#ff0"), this._z.addColorStop(1, "#f80"), this.cH = (() => "#ff0")
    }
    _e() {
        if (V._x(this, this.$ + 100)) {
            drawImage(this.cJ, this.x - this.cJ.width / 2, this.y - this.cJ.height / 2), translate(this.x, this.y), I(this._z), beginPath();
            for (let t = 0; t < 40; t++) {
                let s = t / 40 * M,
                    i = sin(Date.now() / 1e3 * 2 * M + t * em[t % em.length]) * this.$ * .02 + .98 * this.$;
                R[t ? "lineTo" : "moveTo"](cos(s) * i, sin(s) * i)
            }
            fill(), this.eq()
        }
    }
    dR() {
        return this._B + "(star)"
    }
}
class cD extends cw {
    constructor(t, s) {
        super(), this.$ = t || C(25, 50), this.ai = 5 * this.$, this._k = this.$ / 25, this.ei = 0, this.cH = (() => _a(["#aaa", "#fff", "#ccc"])), s = s || C(100, 200);
        let i = random() * M;
        this._n = cos(i) * s, this._m = sin(i) * s, this.cL = C(PI / 2, PI / 4) * _a([-1, 1]), this._w = aU(2 * this.$, 2 * this.$, t => {
            t.I("#aaa"), t.translate(this.$, this.$), t.beginPath();
            for (let s = 0; s < 40; s++) {
                let i = s / 40 * M,
                    h = C(.75 * this.$, this.$);
                t[s ? "lineTo" : "moveTo"](cos(i) * h, sin(i) * h)
            }
            t.fill(), t.globalCompositeOperation = "destination-out", t.I("#000"), t.lineWidth = 2;
            for (let s = 0; s < 10; s++) {
                let s = C(0, M),
                    i = C(0, 1.5 * this.$);
                t.beginPath(), t.arc(cos(s) * i, sin(s) * i, C(2 * this.$ / 25, 5 * this.$ / 25), 0, M, 0), t.fill()
            }
        })
    }
    get _T() {
        return bu(0, 0, this._n, this._m)
    }
    W(t) {
        super.W(t), this.x += this._n * t, this.y += this._m * t, this.ei += this.cL * t, U._b.forEach(t => {
            if (t === this) return;
            let s = this.$ + t.$,
                i = s - F(t, this);
            if (i > 0) {
                let h = _Q(t, this);
                this.x = t.x + cos(h) * s, this.y = t.y + sin(h) * s, this._n += cos(h) * (i + 100), this._m += sin(h) * (i + 100)
            }
        }), V._x(this, V.be) || this.gB || U._D(U._b, this)
    }
    _e() {
        V._x(this, this.$) && (translate(this.x, this.y), rotate(this.ei), drawImage(this._w, -this._w.width / 2, -this._w.height / 2))
    }
    _q(t, s) {
        if (super._q(t), t._H) {
            let s = .05 * t._T * (1 - this.$ / 50);
            this._n += cos(t.A) * s, this._m += sin(t.A) * s
        }(this._k -= s) <= 0 && this.ab()
    }
    ab() {
        U.cv(this.x, this.y, .5 * this.$);
        for (let t = 0; t < 50; t++) {
            let t = random() * M,
                s = random() * this.$;
            _C(_a(["#aaa", "#fff", "#ccc"]), [
                ["dV", 1, 0, 1],
                ["hn", C(2, 4), C(5, 10), 1],
                ["x", this.x + cos(t) * s, this.x + cos(t) * s + C(-20, 20), 1],
                ["y", this.y + sin(t) * s, this.y + sin(t) * s + C(-20, 20), 1]
            ])
        }
        if (U._D(U._b, this), this.$ > 23)
            for (let t = 0; t < 2; t++) {
                let t = new cD(this.$ / 2, this._T / 4);
                t.x = this.x + C(-this.$, this.$), t.y = this.y + C(-this.$, this.$), U._b.push(t)
            }
        cG()
    }
}
class gf extends cw {
    constructor(t, s, i) {
        super(), this.L = bW(i), this.$ = ~~this.L._f(100, 200), this.ai = 4 * this.$, this.B = new cu(this, this.L._f(0, .7)), this._B = el(this.L), this._E = _E(this._B), this.cL = this.L._f(PI / 8, PI / 12), this.cH = (() => "#fff"), this._N = t, this.bB = this.L._f(0, M), this._R = s, this.eb = this.L.ge() < .3, this.aq = [], this.A = 0, this.ea();
        let h = this.B._G = C(50, 150);
        for (let t = 0; t < h / 10; t++) this.e$();
        this._w = cT(() => eH(aU(2 * this.$, 2 * this.$, t => {
            t.I("#fff"), t.arc(this.$, this.$, this.$, 0, M), t.fill(), t.globalCompositeOperation = "source-atop";
            let s = bW(this._B.charCodeAt(0) + this.$),
                i = [...Array(3)].map(() => s._f(32, 255));
            for (let h = 0; h < 2 * this.$; h += s._f(10, 20)) t.I("rgb(" + i[0] + "," + i[1] + "," + i[2] + ")"), t.fillRect(0, h, 2 * this.$, 2 * this.$), i = i.map(t => ~~_u(32, t + s._f(-20, 20), 255))
        }), 50, "rgba(255,255,255,0.1)", "rgba(255,255,255,0)")), this.dX = cT(() => aU(4 * this.$, 2 * this.$, (t, s) => {
            let i = t.createLinearGradient(0, 0, s.width, 0);
            i.addColorStop(0, "#000"), i.addColorStop(1, "rgba(0,0,0,0)"), t.I(i), t.globalAlpha = .4, t.beginPath(), t.N(() => {
                t.translate(0, this.$), t.scale(.7, 1), t.arc(0, 0, this.$, -PI / 2, PI / 2)
            }), t.lineTo(s.width, s.height), t.lineTo(s.width, 0), t.fill()
        }))
    }
    ea() {
        this.x = this._N.x + cos(this.bB) * this._R, this.y = this._N.y + sin(this.bB) * this._R
    }
    W(t) {
        super.W(t);
        let s = M * this._R / 25,
            i = M / s;
        this.bB += t * i, this.ea(), this.A += this.cL * t, this.aq.forEach(s => s.W(t)), this.B._G = min(200, this.B._G + .2 * t), (this.fS -= t) < 0 && this.e$()
    }
    e$() {
        this.B._G >= 10 && (this.B._G -= 10, _a([() => this.cU(fQ), () => this.cU(fP), () => this.cU(fO), () => this.fN()])(), this.fS = 20)
    }
    cU(t) {
        let s = M * this.$ / 30,
            i = [];
        for (let t = 0; t < M; t += M / s) i.push(t);
        this.aq.forEach(t => U._D(i, t.ak)), i.length && this.aq.push(new t(this, _a(i)))
    }
    fN() {
        U._p.push(new eA(this.B, this.x + C(-1, 1), this.y + C(-1, 1)))
    }
    _e() {
        V._x(this._N, this._R + 2 * this.$) && (R.lineWidth = 10, R.strokeStyle = "rgba(255,255,255,0.1)", beginPath(), arc(this._N.x, this._N.y, this._R, 0, M), stroke(), V._x(this, this.$ + 50) && (R.strokeStyle = "#fff", R.lineWidth = 60, this.eb && N(() => {
            R.globalAlpha = .5, translate(this.x, this.y), rotate(PI / 4), scale(1, .2), beginPath(), arc(0, 0, 1.5 * this.$, 0, PI), stroke()
        }), this.aq.forEach(t => N(() => {
            translate(t.x, t.y), rotate(t.ak + this.A), t._e()
        })), translate(this.x, this.y), N(() => {
            rotate(this.A), drawImage(this._w(), -this._w().width / 2, -this._w().height / 2)
        }), N(() => {
            rotate(this.bB), drawImage(this.dX(), 0, -this.dX().height / 2)
        }), this.eb && N(() => {
            R.globalAlpha = .5, rotate(PI / 4), scale(1, .2), beginPath(), arc(0, 0, 1.5 * this.$, -PI, 0), stroke()
        }), this.eq()))
    }
    dR() {
        return this._B + " (" + ("#f00" === this.B._y() ? "enemy" : "ally") + ")"
    }
}
class cu {
    constructor(t, s) {
        this._G = 0, this.K = t, this.aM = s, this.fJ = this._y()
    }
    _y() {
        return this.aM < .5 ? "#f00" : "#0f0"
    }
    fI() {
        return "#f00" === this._y() ? "enemy" : "ally"
    }
    aH(t) {
        let s = this._y();
        this.aM = _u(0, this.aM + t, 1), this._y() !== s && G.dE(this.K._B + " is now your " + this.fI())
    }
}
class dD {
    constructor(t) {
        this.B = t, this.x = this.y = 0, this._n = this._m = 0, this.af = 0, this.bw = 0, this.A = 0, this.$ = 20, this.ai = 200, this._k = 1, this._X = 0
    }
    W(t) {
        if (this.x += this._n * t, this.y += this._m * t, this.af && !this.fD) {
            this._n += this.af * cos(this.A) * 400 * t, this._m += this.af * sin(this.A) * 400 * t;
            for (let s = 0; s < ceil(60 * t); s++) _C("#fff", [
                ["dV", 1, 0, 1],
                ["hn", C(2, 4), C(5, 10), 1],
                ["x", this.x, this.x + C(-20, 20), 1],
                ["y", this.y, this.y + C(-20, 20), 1]
            ])
        }
        let s = atan2(this._m, this._n),
            i = min(max(0, bu(0, 0, this._n, this._m) - 50 * t), 500);
        this._n = i * cos(s), this._m = i * sin(s), this.A += t * (this.fD || this.bw) * 3, G.S - (this.bq || 0) > .5 && (this._X -= .5 * t), this._X <= 0 && (this.bp = 0)
    }
    _e() {
        if (!V._x(this, this.$)) return;
        I(1 - _u(0, G.S - this.bb, .1) / .1 > 0 ? "#f00" : this.fz()), translate(this.x, this.y), rotate(this.A), beginPath(), moveTo(-5, 0), lineTo(-10, 10), lineTo(20, 0), lineTo(-10, -10), fill();
        let t = U.aT.reduce((t, s) => !t || F(t, this) > F(s, this) ? s : t, null);
        if (t) {
            let s = aP(this.A - _Q(this, t));
            I("#000"), R.globalAlpha = (1 - 2 * abs(abs(s) / PI - .5)) * _u(0, 1 - F(t, this) / 5e3, 1), beginPath(), moveTo(-5, 0), lineTo(-10, 10 * bc(s)), lineTo(20, 0), fill()
        }
    }
    ba(t, s = .1) {
        if (G.S - (this.bq || 0) < s || this.bp) return;
        this.bq = G.S;
        let i = new t(this, this.x, this.y, this.A);
        this.dp(i), U.aA.push(i), this._X = min(1, max(this._X, 0) + i._X), G.aJ.c_(2, i), this._X >= 1 && (this.bp = 1)
    }
    dp() {}
    _q(t, s) {
        _C("#ff0", [
            ["dV", 1, 0, 1],
            ["hn", C(2, 4), C(5, 10), 1],
            ["x", this.x, this.x + C(-20, 20), 1],
            ["y", this.y, this.y + C(-20, 20), 1]
        ]), this.bb = G.S, (this._k -= s) <= .05 && this.ab(t)
    }
    ab() {
        this._k = 0;
        for (let t = 0; t < 100; t++) {
            let t = random() * M,
                s = C(5, 50),
                i = C(.2, 1.5);
            _C(_a(["#ff0", "#f80", "#f00"]), [
                ["dV", 1, 0, i],
                ["hn", C(2, 4), C(5, 10), i],
                ["x", this.x, this.x + cos(t) * s, i],
                ["y", this.y, this.y + sin(t) * s, i]
            ])
        }
        U._D(U._p, this), U._D(U.aG, this), V._x(this) && cG(), U.cv(this.x, this.y, 10)
    }
}
class gv extends dD {
    constructor(t, s) {
        super(new cu, t, s), this.A = -PI / 8, this.dj = 0, this.aj = 1, this.bo = 0
    }
    W(t) {
        this.bo += t, this.af = w.Z[38] ? 1 : w.Z[40] ? -.25 : 0, this.bw = w.Z[37] ? -1 : w.Z[39] ? 1 : 0, w.Z[32] && this.ba(dr), w.Z[13] && this.bo > 1 && this.ba(ds, .5);
        let s = this.aX();
        s && this._q(s, .15 * t), G.S - this.dt > 5 && (this.aj += .05 * t), this.aj = min(this._k, this.aj), (this.dj -= t) < 0 && this.fB(), super.W(t), this.af ? this.a$ || (this.a$ = a$(), this.a$.loop = 1) : this.a$ && (this.a$.pause(), this.a$ = 0)
    }
    fB() {
        let t = min(1 - this._k, .1),
            s = ~~(10 * t / .1);
        this.B._G >= s && t > 0 && G.fC(() => {
            this._k += t, this.B._G -= s
        }), this.dj = 1
    }
    _q(t, s) {
        let i = t instanceof eG;
        if (this.aj > 0) return this.aj -= s, void((!i || G.S - (this.dt || 0) > .3) && (this.dt = G.S, this.fE = _Q(this, t), _g(this, "ia", .8, 1, .2)));
        i || V.fF(.1), super._q(t, .5 * s), this.dj = 5
    }
    dp(t) {
        t.dI = 100
    }
    fz() {
        return "#fff"
    }
    ab(t) {
        super.ab(t), setTimeout(() => G.fK(), 2e3), this.a$ && this.a$.pause()
    }
    _F() {
        return this._k <= .3 ? "CRITICAL HULL DAMAGE" + (this.B._G < 10 ? ". FIND RESOURCES TO REPAIR" : "") : this.aX() ? "CRITICAL HEAT" : U.aG.filter(t => F(t, this) < 1e3).length ? "PIRATES NEARBY" : this.aj <= 0 ? "SHIELDS OFFLINE" : void 0
    }
    aX() {
        return U.aT.filter(t => F(this, t) < 2 * t.$)[0]
    }
    _e() {
        N(() => super._e()), translate(this.x, this.y), rotate(this.fE), I("#fff"), beginPath(), arc(0, 0, 25, -PI / 2, PI / 2), N(() => {
            scale(this.ia, 1), arc(0, 0, 25, PI / 2, -PI / 2, 1)
        }), fill()
    }
}
class eA extends dD {
    constructor(t, s, i) {
        super(t), this.dM = 0, this.x = s, this.y = i
    }
    fz() {
        return this.B._y()
    }
    dO() {
        return this.aw ? F(this, this.aw) > 400 && F(this.B.K, this.aw) > 2 * this.B.K.$ ? 0 : F(this.B.K, this.aw) < this.B.K.$ ? 0 : 1 : 0
    }
    fR() {
        return this.dO() ? this.aw : this.T
    }
    fV() {
        this.bw = 0, this.af = 0;
        let t = this.fR();
        if (!t) return;
        let s = bu(0, 0, this._n, this._m),
            i = _Q(this, t),
            h = aP(i - this.A);
        if (abs(h) > PI / 64 && (this.bw = bc(h)), abs(h) < PI / 64) {
            let i = atan2(this._m, this._n),
                h = s / 50,
                e = -50 * h * h / 2 + s * h,
                a = {
                    x: this.x + e * cos(i),
                    y: this.y + e * sin(i)
                },
                r = F(a, t);
            this.af = r > 50 ? 1 : 0
        }
        this.dO() && abs(h) > PI / 64 && !this.bp && (this._X += .08, this.ba(dr)), s > 250 && (this.af = 0)
    }
    W(t) {
        if (V._x(this, 500) && (this.aw = "#f00" === this.B._y() ? U.D : null, (!this.T || F(this, this.T) < this.fZ || F(this.B.K, this.T) < this.B.K.$ || (this.dM -= t) <= 0) && this.g$(), this.fV(), super.W(t), this.B.K._B)) {
            let t = _Q(this.B.K, this),
                s = max(F(this, this.B.K), this.B.K.$ + 2 * this.$);
            this.x = this.B.K.x + cos(t) * s, this.y = this.B.K.y + sin(t) * s
        }
    }
    g$() {
        let t = ga(this.B.K, [this.B.K.$ + 150, this.B.K.$ + 250]),
            s = s => t.slice().sort((t, i) => F(t, s) - F(i, s))[0],
            i = s(this),
            h = U.aw ? s(U.aw) : _a(i.aS),
            e = i.aS.concat([i]).reduce((t, s) => !t || F(s, h) < F(t, h) ? s : t, null);
        this.fZ = 50, this.T = F(this, e) > F(this, h) ? h : e, this.dM = 2
    }
    _q(t, s) {
        super._q(t, s), t._H === U.D && this.B.aH(-.05)
    }
    ab(t) {
        super.ab(t), t._H === U.D && this.B.aH(-.3)
    }
}
class cB {
    constructor(t, s) {
        this.H = t, this.ak = s, this.$ = 15, this.scale = 1, this.bb = 0, this._k = 1
    }
    get bm() {
        return this.ak + this.H.A
    }
    W() {
        this.x = this.H.x + (this.H.$ - 2) * cos(this.bm), this.y = this.H.y + (this.H.$ - 2) * sin(this.bm)
    }
    _e() {
        let t = 1 - _u(0, G.S - this.bb, .1) / .1;
        scale(1 + .2 * t, 1 + .2 * t), I(t > 0 ? "#fff" : this.H.B._y()), this.bh()
    }
    _q(t, s) {
        t._H == U.D && (_C("#ff0", [
            ["dV", 1, 0, 1],
            ["hn", C(2, 4), C(5, 10), 1],
            ["x", this.x, this.x + C(-20, 20), 1],
            ["y", this.y, this.y + C(-20, 20), 1]
        ]), this.bb = G.S, this.H.B.aH(-.05), (this._k -= s) <= 0 && this.ab(t))
    }
    ab(t) {
        for (let t = 0; t < 50; t++) {
            let t = this.bm + C(-PI / 2, PI / 2),
                s = C(30, 50);
            _C(_a(["#ff0", "#f80", "#f00"]), [
                ["dV", 1, 0, 1],
                ["hn", C(2, 4), C(5, 10), 1],
                ["x", this.x, this.x + cos(t) * s, 1],
                ["y", this.y, this.y + sin(t) * s, 1]
            ])
        }
        U._D(this.H.aq, this), t == U.D && this.H.B.aH(-.2), G.aJ.c_(0, this), U.cv(this.x, this.y, 10)
    }
}
class fQ extends cB {
    bh() {
        fr(0, -11, 10, 6), fr(0, -3, 20, 6), fr(0, 5, 6, 6)
    }
}
class fP extends cB {
    constructor(t, s) {
        super(t, s), this.bf = 0
    }
    bh() {
        beginPath(), arc(0, 0, 10, 0, M), fill(), rotate(this.bf), fr(0, -2, 20, 4)
    }
    W(t) {
        super.W(t);
        let s = aP(_Q(this, U.D) - this.bm),
            i = _u(-PI / 4, s, PI / 4),
            h = t * PI / 4;
        this.bf += _u(-h, i - this.bf, h), F(this, U.D) < 500 && abs(aP(this.bf - s)) < PI / 64 && "#f00" === this.H.B._y() && this.ba()
    }
    ba() {
        if (G.S - (this.bq || 0) < 3) return;
        this.bq = G.S;
        let t = this.bm + this.bf;
        U.aA.push(new ds(this, this.x + cos(t) * (this.$ + 15), this.y + sin(t) * (this.$ + 15), t))
    }
}
class fO extends cB {
    bh() {
        beginPath(), moveTo(0, -10), lineTo(10, -10), lineTo(7, -2), lineTo(10, -2), lineTo(7, 6), lineTo(18, 6), lineTo(18, 9), lineTo(0, 9), fill()
    }
}
class gd {
    constructor(t, s) {
        this.gg = random(), this.cs = 15, _g(this, "x", t, t + C(-50, 50), .3), _g(this, "y", s, s + C(-50, 50), .3)
    }
    W(t) {
        if ((this.cs -= t) <= 0 && U._D(U.aV, this), U.D._k <= 0) return;
        let s = F(this, U.D);
        if (s < 80) {
            let i = _Q(this, U.D);
            this.x += cos(i) * min(s, 200 * t), this.y += sin(i) * min(s, 200 * t)
        }
        s < 10 && (U._D(U.aV, this), this.gi(U.D))
    }
    _e() {
        !V._x(this) || this.cs < 3 && this.cs % .25 < .125 || (translate(this.x, this.y), scale(sin(this.gg + M * G.S), 1), this.bh())
    }
}
class gc extends gd {
    bh() {
        scale(.3, .3), I("#fff"), eI()
    }
    gi(t) {
        t.B._G = min(200, t.B._G + 1), G.aJ.c_(3, this), G.gj(), gk()
    }
}
class eQ {
    constructor(t, s, i, h) {
        this._H = t, this.x = s, this.y = i, this.A = h, this.dI = 0, this.bo = 0, gn()
    }
    W(t) {
        this.x += cos(this.A) * this._T * t, this.y += sin(this.A) * this._T * t, (!V._x(this, 500) || (this.bo += t) >= 2) && U._D(U.aA, this), U.gl(s => {
            if (s !== this._H && (F(s, this) < s.$ + this.$ && (U._D(U.aA, this), s._q(this, this._q), gp()), F(s, this) < this.dI)) {
                let i = _Q(this, s),
                    h = aP(i - this.A);
                if (abs(h) < PI / 4) {
                    let s = _u(-t * PI / 2, h, t * PI / 2);
                    this.A += s
                }
            }
        })
    }
}
class dr extends eQ {
    constructor(t, s, i, h) {
        super(t, s, i, h), this._T = 400, this.$ = 4, this._q = .1, this._X = .05
    }
    W(t) {
        super.W(t);
        _C("cyan", [
            ["dV", 1, 0, .3],
            ["hn", 4, C(4, 6), .3],
            ["x", this.x, this.x + C(-3, 3), .3],
            ["y", this.y, this.y + C(-3, 3), .3]
        ])
    }
    _e() {
        translate(this.x, this.y), rotate(this.A), I("cyan"), fr(0, -2, 8, 4)
    }
}
class ds extends eQ {
    constructor(t, s, i, h) {
        super(t, s, i, h), this._T = 800, this.S = 0, this.$ = 15, this._q = .5, this._X = .5
    }
    W(t) {
        super.W(t);
        let s = 0 * sin((this.S += t) * M * 4);
        _C("red", [
            ["dV", 1, 0, .5],
            ["hn", 16, C(16, 32), .5],
            ["x", this.x + cos(this.A + PI / 2) * s * 10, this.x + cos(this.A + PI / 2) * s * 10 + C(-16, 16), .5],
            ["y", this.y + sin(this.A + PI / 2) * s * 10, this.y + sin(this.A + PI / 2) * s * 10 + C(-16, 16), .5]
        ])
    }
    _e() {
        translate(this.x, this.y), rotate(this.A), I("red"), fr(-5, -5, 10, 10)
    }
}
onresize = (() => {
    var t, s, i = innerWidth,
        h = innerHeight,
        e = i / h,
        a = 1e3 / __,
        r = document.querySelector("#cc").style;
    e <= a ? s = (t = i) / a : t = (s = h) * a, r.width = t + "px", r.height = s + "px"
}), gu = ((t, s, i, h) => t / h * i + s), _g = ((t, s, i, h, e, a, r, l) => {
    var _ = {
        o: t,
        p: s,
        a: i,
        b: h,
        d: e,
        l: a || 0,
        f: r || gu,
        e: l || (() => 0),
        t: 0,
        W: t => {
            if (_.l > 0) _.l -= t, _.o[_.p] = _.a;
            else if (_.t = min(_.d, _.t + t), _.o[_.p] = _.f(_.t, _.a, _.b - _.a, _.d), _.t == _.d) {
                _.e();
                let t = ca.indexOf(_);
                t >= 0 && ca.splice(t, 1)
            }
        }
    };
    ca.push(_)
}), ca = [];
let fb = "BCDFGHJKLMNPQRSTVWXZ".split(""),
    fc = "AEIOUY".split("");

function gA() {
    this.gC = function(t) {
        for (var s = 0; s < 24; s++) this[String.fromCharCode(97 + s)] = t[s] || 0;
        this.c < .01 && (this.c = .01);
        var i = this.b + this.c + this.e;
        if (i < .18) {
            var h = .18 / i;
            this.b *= h, this.c *= h, this.e *= h
        }
    }
}

function gD() {
    var t, s, i, h, e, a, r, l, _, n, o, c;
    this.bO = new gA, this.dC = function() {
        var t = this.bO;
        h = 100 / (t.f * t.f + .001), e = 100 / (t.g * t.g + .001), a = 1 - t.h * t.h * t.h * .01, r = -t.i * t.i * t.i * 1e-6, t.a || (o = .5 - t.n / 2, c = 5e-5 * -t.o), l = 1 + t.l * t.l * (t.l > 0 ? -.9 : 10), _ = 0, n = 1 == t.m ? 0 : (1 - t.m) * (1 - t.m) * 2e4 + 32
    }, this.gH = function() {
        this.dC();
        var h = this.bO;
        return t = h.b * h.b * 1e5, s = h.c * h.c * 1e5, i = h.e * h.e * 1e5 + 12, 3 * ((t + s + i) / 3 | 0)
    }, this.gJ = function(f, d) {
        var b = this.bO,
            u = 1 != b.s || b.v,
            G = b.v * b.v * .1,
            g = 1 + 3e-4 * b.w,
            p = b.s * b.s * b.s * .1,
            y = 1 + 1e-4 * b.t,
            x = 1 != b.s,
            w = b.x * b.x,
            U = b.g,
            m = b.q || b.r,
            I = b.r * b.r * b.r * .2,
            $ = b.q * b.q * (b.q < 0 ? -1020 : 1020),
            R = b.p ? 32 + ((1 - b.p) * (1 - b.p) * 2e4 | 0) : 0,
            B = b.d,
            P = b.j / 2,
            D = b.k * b.k * .01,
            A = b.a,
            T = t,
            E = 1 / t,
            S = 1 / s,
            F = 1 / i,
            v = 5 / (1 + b.u * b.u * 20) * (.01 + p);
        v > .8 && (v = .8), v = 1 - v;
        for (var W, M, N, k, V, Z, H = 0, q = 0, K = 0, O = 0, Y = 0, X = 0, L = 0, Q = 0, J = 0, j = 0, z = 0, tt = new Array(1024), st = new Array(32), it = tt.length; it--;) tt[it] = 0;
        for (it = st.length; it--;) st[it] = C(-1, 1);
        for (it = 0; it < d; it++) {
            if (H) return it;
            if (R && ++j >= R && (j = 0, this.dC()), n && ++_ >= n && (n = 0, h *= l), (h *= a += r) > e && (h = e, U > 0 && (H = 1)), M = h, P > 0 && (M *= 1 + sin(z += D) * P), (M |= 0) < 8 && (M = 8), A || ((o += c) < 0 ? o = 0 : o > .5 && (o = .5)), ++K > T) switch (K = 0, ++q) {
                case 1:
                    T = s;
                    break;
                case 2:
                    T = i
            }
            switch (q) {
                case 0:
                    O = K * E;
                    break;
                case 1:
                    O = 1 + 2 * (1 - K * S) * B;
                    break;
                case 2:
                    O = 1 - K * F;
                    break;
                case 3:
                    O = 0, H = 1
            }
            m && ((N = 0 | ($ += I)) < 0 ? N = -N : N > 1023 && (N = 1023)), u && g && ((G *= g) < 1e-5 ? G = 1e-5 : G > .1 && (G = .1)), Z = 0;
            for (var ht = 8; ht--;) {
                if (++Q >= M && (Q %= M, 3 == A))
                    for (var et = st.length; et--;) st[et] = C(-1, 1);
                switch (A) {
                    case 0:
                        V = Q / M < o ? .5 : -.5;
                        break;
                    case 1:
                        V = 1 - Q / M * 2;
                        break;
                    case 2:
                        V = .225 * (((V = 1.27323954 * (k = 6.28318531 * ((k = Q / M) > .5 ? k - 1 : k)) + .405284735 * k * k * (k < 0 ? 1 : -1)) < 0 ? -1 : 1) * V * V - V) + V;
                        break;
                    case 3:
                        V = st[abs(32 * Q / M | 0)]
                }
                u && (W = L, (p *= y) < 0 ? p = 0 : p > .1 && (p = .1), x ? (X += (V - L) * p, X *= v) : (L = V, X = 0), Y += (L += X) - W, V = Y *= 1 - G), m && (tt[J % 1024] = V, V += tt[(J - N + 1024) % 1024], J++), Z += V
            }
            Z *= .125 * O * w, f[it] = Z >= 1 ? 32767 : Z <= -1 ? -32768 : 32767 * Z | 0
        }
        return d
    }
}
fd = (t => t._a(fb) + t._a(fc) + t._a(fb.concat(fc))), el = (t => fd(t) + fd(t) + " " + t._a(["III", "IV", "V", "VI", "VII", "IX", "X"])), fe = (t => {
    for (t += ""; t.length < 2;) t = "0" + t;
    return t
}), da = (t => fe(~~(t / 60)) + ":" + fe(~~t % 60)), ga = ((t, s) => {
    let i = [],
        h = [];
    return s.forEach(s => {
        let e = [];
        h.push(e);
        for (let h = 0; h < 6; h++) {
            let a = M * (h / 6),
                r = {
                    x: cos(a) * s + t.x,
                    y: sin(a) * s + t.y,
                    aS: []
                };
            i.push(r), e.push(r)
        }
    }), h.forEach((t, s) => {
        t.forEach((i, e) => {
            let a = t[(e + 1) % t.length];
            i.aS.push(a), a.aS.push(i);
            let r = h[(s + 1) % h.length][e];
            i.aS.push(r), r.aS.push(i)
        })
    }), i
}), bW = (t => {
    let s = new Uint32Array([imul(t, 2246822507), imul(t, 3266489909)]),
        i = () => {
            let t = s[0],
                i = s[1] ^ t;
            return s[0] = (t << 26 | t >> 8) ^ i ^ i << 9, s[1] = i << 13 | i >> 19, (imul(t, 2654435771) >>> 0) / 4294967295
        };
    return {
        _a: t => t[~~(i() * t.length)],
        _f: (t, s) => i() * (s - t) + t,
        ge: i
    }
}), cT = (t => {
    let s;
    return () => s = s || t()
});
var cW = new gD,
    hb = function(t) {
        cW.bO.gC(t);
        var s = cW.gH(),
            i = new Uint8Array(4 * ((s + 1) / 2 | 0) + 44),
            h = 2 * cW.gJ(new Uint16Array(i.buffer, 44), s),
            e = new Uint32Array(i.buffer, 0, 44);
        e[0] = 1179011410, e[1] = h + 36, e[2] = 1163280727, e[3] = 544501094, e[4] = 16, e[5] = 65537, e[6] = 44100, e[7] = 88200, e[8] = 1048578, e[9] = 1635017060, e[10] = h, h += 44;
        for (var a = 0, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = "data:audio/wav;base64,"; a < h; a += 3) {
            var _ = i[a] << 16 | i[a + 1] << 8 | i[a + 2];
            l += r[_ >> 18] + r[_ >> 12 & 63] + r[_ >> 6 & 63] + r[63 & _]
        }
        var n = new Audio;
        return n.src = l, n
    };
_U = ((t, s = 1) => {
    let i = 0,
        h = cT(() => [...Array(s)].map(() => hb(t)));
    return () => {
        let t = h()[i++ % h().length];
        return t.play(), t
    }
});
let cG = _U([3, , .3346, .2953, .4941, .1205, , -.2565, , , , , , , , , -.1093, -.2344, 1, , , , , .5]),
    gn = _U([0, , .1584, .1384, .2216, .63, , -.2653, , , , , , .1485, , , , , 1, , , .1888, , .5], 10),
    hi = _U([1, .12, .1, .0079, .32, .83, .0017, , .04, .34, .96, .0056, , , .8422, .0048, , -.0327, 1, , , , , .37]),
    hj = _U([0, , .1696, , .0103, .2617, , , , , , , , .1416, , , , , 1, , , .1, , .5]),
    gk = _U([0, , .0323, .3656, .1925, .4276, , , , , , , , , , , , , 1, , , , , .5], 10),
    gp = _U([3, , .0825, , .2264, .3697, , -.5926, , , , , , , , , , , 1, , , .0684, , .5], 10),
    a$ = _U([3, , 1, , , .14, , , , , , , , , , 1, , , 1, , , .0684, , .2], 1),
    hk = _U([2, 1, .01, .0079, 1, .23, .0017, .0194, .0078, .81, .41, .0056, , , .8422, .0048, , -.0327, 1, , , , , .45]),
    hl = _U([2, .72, .01, .0079, 1, .6, .0017, .0194, .0078, .57, .71, .0056, , , .8422, .0048, , -.0327, 1, , , , , .45]),
    hm = _U([1, .03, .42, .0079, .32, .14, .0017, , .04, , , .0056, , , .8422, .0048, , -.0327, 1, , , , , .37]);
class ho {
    constructor() {
        this._W = {}
    }
    c_(t, s) {
        (this._W[t] || []).forEach(t => t(s))
    }
    _v(t, s) {
        this._W[t] = this._W[t] || [], this._W[t].push(s)
    }
    hg(t, s) {
        let i = (this._W[t] || []).indexOf(s);
        i >= 0 && this._W[t].splice(i, 1)
    }
}
w.Z = {}, onkeydown = (t => {
    w.Z[t.keyCode] = 1
}), onkeyup = (t => {
    w.Z[t.keyCode] = 0;
    let s = String.fromCharCode(t.keyCode).toLowerCase();
    isNaN(s) && G.e_(s)
}), ontouchstart = (t => ontouchmove(t, 1)), ontouchmove = ontouchend = ((t, s) => {
    t.preventDefault();
    let i = document.querySelector("canvas").getBoundingClientRect();
    w.Z[32] = 0, w.Z[37] = 0, w.Z[38] = 0, w.Z[39] = 0;
    for (let h = 0; h < t.touches.length; h++) {
        let e = (t.touches[h].clientX - i.left) / i.width,
            a = (t.touches[h].clientY - i.top) / i.height;
        a > 1 - 200 / __ ? e < .25 ? w.Z[37] = 1 : e < .5 ? w.Z[39] = 1 : e < .75 ? w.Z[32] = 1 : w.Z[38] = 1 : s && a > 1 - 400 / __ && G.e_(~~(e / (1 / (G.bH || []).length)))
    }
    bn = 1, G.bg()
});
class hs {
    constructor() {
        this.x = this.y = 0, this.cE = this.cq = 0, this.ac = this.b$ = 1
    }
    W(t) {
        let s = 999;
        U._b.forEach(t => {
            s = min(s, F(t, U.D))
        }), s > 700 ? this.b$ = bn ? .7 : .5 : s < 500 && (this.b$ = 1);
        let i = this.cR || this.b$;
        this.ac += _u(-.5 * t, i - this.ac, .5 * t), this.be = 1e3 / this.ac, this.cl = __ / this.ac, (this.ex -= t) > 0 && (this.cE = C(-10, 10), this.cq = C(-10, 10)), this.x = U.D.x - this.be / 2 + this.cE, this.y = U.D.y - this.cl / 2 + this.cq
    }
    _x(t, s = 0) {
        return t.x + s > this.x && t.y + s > this.y && t.x - s < this.x + this.be && t.y - s < this.y + this.cl
    }
    fF(t) {
        this.ex = max(this.ex || 0, t)
    }
}
class hw {
    constructor() {
        G = this, U = new gx, V = new hs, G.eR(), G.S = 0, G.bZ = _E("everyone's"), G.c$ = _E("sky"), G.cm = _E("press enter to send a ship"), G.eU = G.cg = 50, G.cf = G.eY = 100, G.ci = 0, G.dl = 1, G.eZ = 0, G.cr = 1, G.hy = 1, G.ff = 1, G.ct = "#fff"
    }
    bQ(t) {
        G.O && G.O.hh(), G.O = t, G.df = 20, G._l(), t && (t.hd = (t => G.bQ(t)), t.Y())
    }
    cC(t, s, i, h, e) {
        N(() => {
            translate(t, s), I("rgba(128,128,128,0.5)"), fr(0, -5, 200, 10), I(h), fr(0, -5, -2, 10), fr(200, -5, 2, 10), fr(0, -5, 200 * _u(0, i, 1), 10), translate(-25, 0), e()
        })
    }
    fC(t) {
        _g(G, "eZ", 0, -30, .3, 0, 0, () => {
            G.eZ = 0
        }), _g(G, "ff", 1, 2, .3, .2, 0, () => {
            _g(G, "ff", 2, 1, .3, 0, 0, () => {
                G.ct = "#fff"
            })
        }), setTimeout(() => G.ct = "#0f0", 200), _g(G, "cr", 1, 0, .3, 0, 0, () => {
            G.cr = 1, t()
        }), _g(G, "hy", 1, 0, .3, 0, 0, () => {
            _g(G, "hy", 0, 1, .3, .3)
        })
    }
    gj() {
        _g(G, "cr", 1, 2, .3, 0, 0, () => {
            _g(G, "cr", 2, 1, .3)
        })
    }
    W(t) {
        G.S += t, G.bP && ((G.df -= t) <= 0 && G.hC(), U.W(t), G.aJ.c_(1, t)), ca.slice().forEach(s => s.W(t)), w.Z[13] && G.bg(), U._e(), N(() => {
            translate(V.cE, V.cq), I("rgba(0,0,0,0.5)"), R.strokeStyle = "#fff", fr(50, 30, 270, 125), strokeRect(50.5, 30.5, 270, 125), R.font = "10pt " + au, R.textAlign = "center", I("#fff");
            let t = U._b.reduce((t, s) => (s.B && (t[s.B._y()]++, t.total++), t), {
                total: 1,
                "#0f0": 0
            });
            fillText("Peace: " + ~~(100 * t["#0f0"] / t.total) + "%", 185, 140), G.cC(100, 50, U.D._k, U.D._k < .25 || G.S - U.D.bb < .2 ? "#f00" : G.ct, () => {
                scale(.5 * G.ff, .5 * G.ff), beginPath(), moveTo(0, -15), lineTo(14, -10), lineTo(10, 10), lineTo(0, 18), lineTo(-10, 10), lineTo(-14, -10), fill()
            }), N(() => {
                R.shadowColor = "#0f0", R.shadowBlur = 10, I("cyan"), fr(100, 45, 200 * _u(0, U.D.aj, 1), 10)
            }), G.cC(100, 80, U.D.B._G / 200, "#fff", () => {
                R.globalAlpha = G.hy, translate(0, G.eZ), scale(.3 * G.cr, .3 * G.cr), eI()
            }), G.cC(100, 110, U.D._X, U.D.bp ? "#f00" : "#fff", () => {
                fr(-5, -5, 3, 10), fr(-1, -5, 3, 10), fr(3, -5, 3, 10)
            });
            let s = [],
                i = U.aT.sort((t, s) => F(t, U.D) - F(s, U.D)).slice(0, 3),
                h = i[0] && F(i[0], U.D) < i[0].ai;
            h && !i[0].hI && (i[0].hI = 1, G.dE("system discovered - " + i[0]._B)), G.O ? s = G.O._t || [] : h || (s = i), s.forEach(t => {
                if (F(t, U.D) < (t.ai || 0)) return;
                let s = _Q(U.D, t);
                N(() => {
                    let i = 200 * _u(0, (F(t, U.D) - t.ai) / 4e3, 1) + 50;
                    translate(500 + cos(s) * i, __ / 2 + sin(s) * i), rotate(s), I(G.O ? "#f80" : "#888"), beginPath(), moveTo(0, 0), lineTo(-14, 10), lineTo(-8, 0), lineTo(-14, -10), fill()
                })
            });
            let e = G._$();
            e && N(() => {
                I("rgba(0,0,0,0.5)"), R.font = "20pt " + au, translate(0, __ - (bn ? 400 : 200)), fr(0, 0, 1e3, 200);
                let t = measureText(e + "_").width,
                    s = this.f$();
                I("#fff"), R.textAlign = "left", G.aZ || fillText(s, (1e3 - t) / 2, 50), s.length >= e.length && (R.textAlign = "center", R.textBaseline = "middle", R.font = "16pt " + au, G.bH.forEach((t, s) => {
                    if (I("#fff"), G.aZ) {
                        if (G.aZ != t) return;
                        R.globalAlpha = (sin(G.S * M * 4) + 1) / 2
                    }
                    let i = "[" + t.hM[0] + "]" + t.hM.slice(1),
                        h = (s + 1) * (1e3 / (G.bH.length + 1));
                    fr(h - 75, 85, 150, 30), R.globalAlpha = 1, I("#000"), fillText(i, h, 100)
                }))
            });
            let a = U.D._F();
            a && a != G._F && (G.hN = G.S + 3, G._F = a, hm()), a || (G._F = 0), G._F && G.S < G.hN && (I("rgba(255,0,0,0.5)"), fr(0, 200, 1e3, 125), R.font = "36pt " + au, R.textBaseline = "middle", R.textAlign = "center", I("#fff"), fillText("/!\\ WARNING /!\\", 500, 250), R.font = "18pt " + au, fillText(G._F, 500, 300), G._Z = 0), R.strokeStyle = "#fff", R.lineCap = "round", G._Z && G.hO && N(() => {
                R.lineWidth = 4;
                let t = 20 * G._Z.width;
                translate((1e3 - t) / 2, (__ - 100) / 2 - 200), aQ(G._Z, 20, 30, G.hO, .1, 1)
            }), N(() => {
                translate(0, G.dW), I("#000"), fr(0, 0, 1e3, __), R.lineWidth = 8;
                let t = (__ - 12 * G.cf / 5) / 2;
                N(() => {
                    translate((1e3 - G.bZ.width * G.eU) / 2, t), aQ(G.bZ, G.eU, G.cf, G.S - .5, .1, 1)
                }), N(() => {
                    R.lineWidth = G.hR, translate((1e3 - G.c$.width * G.cg) / 2, t + 7 * G.cf / 5), aQ(G.c$, G.cg, G.eY, G.S - .5, G.bZ.aB.length / G.c$.aB.length * .1, 1)
                }), R.lineWidth = 4;
                N(() => {
                    G.S % 1 > .5 && G.S > 6 || G.dW || (translate((1e3 - 20 * G.cm.width) / 2, __ - 30 - 100), aQ(G.cm, 20, 30, G.S - 5, .01, .2))
                }), R.font = "20pt " + au, I("#fff"), R.textAlign = "center", G.fo.forEach((t, s) => {
                    fillText(t, 500, 3 * __ / 4 - 50 + 30 * s)
                })
            })
        }), N(() => {
            bn && (translate(0, __ - 200), R.globalAlpha = .8, I("#000"), fr(0, 0, 1e3, 200), I("#fff"), translate(0, 100), N(() => {
                R.globalAlpha = w.Z[37] ? 1 : .5, translate(125, 0), rotate(PI), G.d_()
            }), N(() => {
                R.globalAlpha = w.Z[39] ? 1 : .5, translate(375, 0), G.d_()
            }), N(() => {
                R.globalAlpha = w.Z[32] ? 1 : .5, translate(625, 0), beginPath(), moveTo(0, 0), arc(0, 0, 40, 0, M), fill()
            }), N(() => {
                R.globalAlpha = w.Z[38] ? 1 : .5, translate(875, 0), rotate(-PI / 2), G.d_()
            }))
        })
    }
    d_() {
        beginPath(), moveTo(40, 0), lineTo(-40, -40), lineTo(-40, 40), fill()
    }
    _l(t, s) {
        G._$ = t && t.call ? t : () => t, G.hS = G.S, G.bH = s || [], G.aZ = 0, G._$() && hi()
    }
    e_(t) {
        G.f$().length < (G._$() || "").length || G.aZ || (G.bH || []).forEach((s, i) => {
            i != t && s.hM[0].toLowerCase() !== t || (G.aZ = s, setTimeout(s.hX, 500), hj())
        })
    }
    dE(t) {
        G._Z = _E(t), _g(G, "hO", G._Z.aB.length, 0, .1 * G._Z.aB.length, 3), _g(G, "hO", 0, G._Z.aB.length, .1 * G._Z.aB.length), hl()
    }
    hC() {
        let t = U._b.filter(t => t._N).reduce((t, s) => !t || F(U.D, s) < F(U.D, t) ? s : t, null);
        if (t && !G.O) {
            let s = s => _f(1e3, F(s, t), 1e4),
                i = () => U._b.filter(t => t._N).filter(s),
                h = () => i().concat(U.aT.filter(s)),
                e = _a([new gL(_a(i())), new gI(_a(h())), new gG, new gE, new gz]);
            e.B = t.B, G.bQ(new gS(e));
            for (let s = 0, i = max(t.$, F(U.D, t) - V.be); i < F(U.D, t); s++, i += 50) {
                let h = _Q(t, U.D);
                _C(0, [
                    ["dV", 1, 0, .1, .02 * s + .2],
                    ["dV", 0, 1, .1, .02 * s]
                ], s => {
                    R.strokeStyle = "#fff", R.lineWidth = 2, R.globalAlpha = s.dV, beginPath(), arc(t.x, t.y, i, h - PI / 16, h + PI / 16), stroke()
                })
            }
        }
    }
    aY(t) {
        let s = G.O;
        G.bQ(), s.B.aH(t ? .5 : -.2), G._l("Mission " + (t ? "SUCCESS" : "FAILED") + ". " + s.B.K._B + " will remember that.", [{
            hM: di,
            hX: () => G._l()
        }])
    }
    bg() {
        !G.bP && G.dl && (U.fa(), _g(G, "dW", 0, -__, .3), G.ci || (V.ac = V.cR = 1, setTimeout(() => G.bQ(new hc), 3e3)), G.df = G.ci ? 20 : 9, G.bP = G.ci = 1, hk())
    }
    fK() {
        let t, s = U._b.filter(t => t.B && t.B._y() != t.B.fJ).map(t => t.B),
            i = s.filter(t => "#f00" == t._y()).length,
            h = s.filter(t => "#0f0" == t._y()).length;
        t = i + h < 10 ? "you were barely noticed" : abs(i - h) < 5 ? "little has changed" : i > h ? "you brought war" : "you brought peace", G.bZ = _E("game over"), G.c$ = _E(t), G.cm = _E("press enter to send another ship"), G.cg = 25, G.eY = 50, G.hR = 6, G.dl = G.bP = 0, G.S = 0, _g(G, "dW", -__, 0, .3, 0, 0, () => G.eR()), setTimeout(() => {
            G.fo = [i + " planets have declared war against you", h + " species have become your allies"], G.dl = 1
        }, 4e3)
    }
    eR() {
        G.aJ = new ho, G._$ = (() => 0), G.bP = 0, G.dW = 0, G.O = 0, G._F = 0, G.fo = []
    }
    f$() {
        let t = G._$() || "",
            s = ~~min(20 * (G.S - G.hS), t.length);
        return t.slice(0, s) + (s < t.length || G.S % 1 > .5 ? "_" : "")
    }
}
onload = (() => {
    onresize();
    let t = document.querySelector("canvas");
    t.width = 1e3, t.height = __, R = t.getContext("2d"), Object.getOwnPropertyNames(p).forEach(t => {
        R[t] && R[t].call && (w[t] = p[t].bind(R))
    }), R.font = "99pt f";
    let s = measureText(w.title).width;
    for (let t of ["Mono", "Courier"])
        if (R.font = "99pt " + t, measureText(w.title).width != s) {
            au = t;
            break
        } new hw;
    let i = Date.now(),
        h = () => {
            let t = Date.now(),
                s = (t - i) / 1e3;
            i = t, G.W(s), requestAnimationFrame(h)
        };
    h()
});