! function(t) {
  var s = {};

  function i(h) {
    if (s[h]) return s[h].t;
    var e = s[h] = {
      s: h,
      i: !1,
      t: {}
    };
    return t[h].call(e.t, e, e.t, i), e.i = !0, e.t
  }
  i.h = t, i.c = s, i.d = function(t, s, h) {
    i.o(t, s) || Object.defineProperty(t, s, {
      l: !0,
      get: h
    })
  }, i.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "u", {
      value: !0
    })
  }, i.M = function(t, s) {
    if (1 & s && (t = i(t)), 8 & s) return t;
    if (4 & s && "object" == typeof t && t && t.u) return t;
    var h = Object.create(null);
    if (i.r(h), Object.defineProperty(h, "default", {
        l: !0,
        value: t
      }), 2 & s && "string" != typeof t)
      for (var e in t) i.d(h, e, function(s) {
        return t[s]
      }.bind(null, e));
    return h
  }, i.n = function(t) {
    var s = t && t.u ? function() {
      return t.default
    } : function() {
      return t
    };
    return i.d(s, "a", s), s
  }, i.o = function(t, s) {
    return Object.prototype.hasOwnProperty.call(t, s)
  }, i.m = "", i(i.C = 1)
}([function(t, s) {
  zzfx_v = .5, zzfx_x = new AudioContext, zzfx = (t, s, i, h = 1, e = .1, n = 0, o = 0, c = 0, r = 0) => {
    let a = 44100,
      d = Math.PI;
    i *= 2 * d / a, i *= 1 + s * (2 * Math.random() - 1), n *= 1e3 * d / a ** 2, e *= 0 | (h = 0 < h ? a * (10 < h ? 10 : h) | 0 : 1), c *= 2 * d / a, r *= d, s = [];
    for (var l = 0, f = 0, u = 0; u < h; ++u) s[u] = t * zzfx_v * Math.cos(l * i * Math.cos(f * c + r)) * (u < e ? u / e : 1 - (u - e) / (h - e)), l += 1 + o * (2 * Math.random() - 1), f += 1 + o * (2 * Math.random() - 1), i += n;
    return t = zzfx_x.createBuffer(1, h, a), i = zzfx_x.createBufferSource(), t.getChannelData(0).set(s), i.buffer = t, i.connect(zzfx_x.destination), i.start(), i
  }
}, function(t, s, i) {
  "use strict";
  i.r(s);
  class h {
    constructor(t = 0, s = 0) {
      this.x = t, this.y = s
    }
    v() {
      return new h(this.x, this.y)
    }
    p() {
      return this.x = 0, this.y = 0, this
    }
    _(t) {
      const s = this.x * Math.cos(t) - this.y * Math.sin(t),
        i = this.x * Math.sin(t) + this.y * Math.cos(t);
      return this.x = s, this.y = i, this
    }
    B(t) {
      return this.x += t.x, this.y += t.y, this
    }
    P(t) {
      return this.x -= t.x, this.y -= t.y, this
    }
    g() {
      const t = Math.sqrt(this.x * this.x + this.y * this.y);
      return t ? (this.x /= t, this.y /= t, this) : this.p()
    }
    V(t) {
      return this.x *= t, this.y *= t, this
    }
    k(t) {
      return this.x * t.x + this.y * t.y
    }
    S() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    H() {
      return Math.PI - Math.atan2(-this.x, -this.y)
    }
    G(t) {
      return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2))
    }
    A(t) {
      return Math.PI - Math.atan2(this.x - t.x, this.y - t.y)
    }
    T(t) {
      return Math.acos(this.k(t) / (this.S() * t.S())) || 0
    }
  }
  class e {
    constructor(t) {
      this.O = t % 2147483647, this.O <= 0 && (this.O += 2147483646)
    }
    j() {
      return this.O = 16807 * this.O % 2147483647
    }
    L() {
      return (this.j() - 1) / 2147483646
    }
    $() {
      return this.L() - .5
    }
  }

  function n(t, s, i, n, o, c, r) {
    const a = new e(c),
      d = t.createLinearGradient(0, 0, 0, s);
    d.addColorStop(.5, "#151515"), d.addColorStop(1, "#000"), t.strokeStyle = d,
      function t(s, i, e, n, o, c, r, a, d) {
        const l = Math.PI / 2;
        const f = l - c;
        c += (1 + 1.2 * f * (Math.sin(a) + 2)) / n * d;
        const u = new h(0, -1)._(c).V(r);
        const w = e.v().B(u);
        i.beginPath();
        i.lineWidth = Math.pow(n, .9);
        i.moveTo(e.x, e.y);
        i.lineTo(w.x, w.y);
        i.stroke();
        i.closePath();
        n >= 1 && (t(s, i, w, n - 1, o * (1 + (s.L() - .5) / 3), c + o, r * Math.min(s.L() + .4, .8), a, d), t(s, i, w, n - 1, o * (1 + (s.L() - .5) / 3), c - o, r * Math.min(s.L() + .4, .8), a, d))
      }(a, t, new h(s / 2, s), i, n, 0, o, r, 1 / Math.pow(i, 1.5))
  }
  async function o(t, s, i, h, e) {
    const o = s * h / 1.5;
    return t.R(o, o), r(t, 30, (t, c) => n(t, o, s, i, h, e, c))
  }

  function c(t, s, i) {
    return t.R(50, 50), r(t, 15, (t, n) => (function(t, s, i, n) {
      const o = new e(i),
        c = t.createLinearGradient(0, 0, 0, 50);
      c.addColorStop(0, "#111"), c.addColorStop(1, "#000"), t.strokeStyle = c, t.lineWidth = .2;
      for (let i = 0; i < 10; i++) {
        let i = new h(o.j() % 10 + 20, 50);
        t.beginPath(), t.moveTo(i.x, i.y);
        let e = (o.L() + .5) / 10,
          c = 0;
        const r = (o.L() + 1) * s;
        for (let s = 0; s < 10; s++) {
          const s = new h(0, -1)._(c).V(r);
          i = i.v().B(s), t.lineTo(i.x, i.y), c += e + Math.sin(n) / 30
        }
        t.stroke(), t.closePath()
      }
    })(t, s, i, n))
  }
  async function r(t, s, i) {
    const h = [],
      e = Math.PI / s;
    let n = Math.PI / 2;
    for (let o = 0; o < s; o++) n = n += e, h.push(await t.D(t => i(t, n)));
    return h
  }
  class a {
    constructor() {
      this.F = document.createElement("canvas"), this.I = this.F.getContext("2d")
    }
    R(t, s) {
      this.F.width = t, this.F.height = s
    }
    async D(t) {
      return new Promise((s, i) => {
        t(this.I);
        const h = new Image;
        h.onload = () => s(h), h.src = this.F.toDataURL(), this.W()
      })
    }
    W() {
      this.I.clearRect(0, 0, this.F.width, this.F.height)
    }
  }
  const d = 1,
    l = 2,
    f = 4;

  function u(t) {
    return new Promise((s, i) => {
      const h = document.getElementById(t),
        e = (new XMLSerializer).serializeToString(h),
        n = "data:image/svg+xml;base64," + btoa(e),
        o = new Image;
      o.onload = () => s(o), o.src = n
    })
  }
  const w = {};
  async function M() {
    w.N = await u("h"), w.q = await u("e"), w.J = await u("t"), w.X = await u("l"), w.K = await u("s"), w.U = await u("m"), w.Y = await async function() {
      const t = new e(1),
        s = new a,
        i = [];
      for (let h = 4; h < 11; h++) i.push({
        Z: await o(s, h, t.L() / 4 + .3, 5 * h, h),
        tt: 25 * Math.pow(h, 1.3),
        st: f
      });
      for (let t = 0; t < 4; t++) i.push({
        Z: await c(s, 1 + .5 * t, t),
        tt: 6 + t,
        st: l
      });
      return i
    }()
  }
  const m = 100;

  function C(t, s) {
    return 1e4 * t + s
  }

  function v(t, s, i) {
    const h = t.G(i),
      e = s.G(i),
      n = t.G(s);
    return h + e >= n - .1 && h + e <= n + .1
  }

  function p(t, s, i, e) {
    const n = ((e.x - i.x) * (t.y - i.y) - (e.y - i.y) * (t.x - i.x)) / ((e.y - i.y) * (s.x - t.x) - (e.x - i.x) * (s.y - t.y)),
      o = ((s.x - t.x) * (t.y - i.y) - (s.y - t.y) * (t.x - i.x)) / ((e.y - i.y) * (s.x - t.x) - (e.x - i.x) * (s.y - t.y));
    return n >= 0 && n <= 1 && o >= 0 && o <= 1 ? new h(t.x + n * (s.x - t.x), t.y + n * (s.y - t.y)) : null
  }

  function* z(t, s) {
    const i = Math.floor(Math.min(t.x, s.x) / m),
      h = Math.ceil(Math.max(t.x, s.x) / m),
      e = Math.floor(Math.min(t.y, s.y) / m),
      n = Math.ceil(Math.max(t.y, s.y) / m);
    for (let t = i; t <= h; t++)
      for (let s = e; s <= n; s++) yield C(t, s)
  }

  function _(t, s, i, e) {
    const n = i.G(e),
      o = ((t.x - i.x) * (e.x - i.x) + (t.y - i.y) * (e.y - i.y)) / Math.pow(n, 2);
    let c = new h(i.x + o * (e.x - i.x), i.y + o * (e.y - i.y));
    if (!v(i, e, c))
      if (t.G(i) <= s) c = i;
      else {
        if (!(t.G(e) <= s)) return null;
        c = e
      } const r = s - t.G(c);
    return r < 0 ? null : [c.v().P(t).g().V(r), c]
  }
  class y {
    constructor() {
      this.it = new Map, this.ht = []
    }
    et(t) {
      this.ht.push(t);
      for (const s of z(t.nt, t.ot)) this.it.has(s) ? this.it.get(s).push(t) : this.it.set(s, [t]);
      return t
    }
    ct() {
      this.ht = [], this.it.clear()
    }* rt(t) {
      t.at = [];
      const s = new Set;
      for (const i of function*(t, s) {
          const i = Math.floor((t.x - s) / m),
            h = Math.ceil((t.x + s) / m),
            e = Math.floor((t.y - s) / m),
            n = Math.ceil((t.y + s) / m);
          for (let t = i; t <= h; t++)
            for (let s = e; s <= n; s++) yield C(t, s)
        }(t.dt, t.lt))
        for (const h of this.it.get(i) || [])
          if (!s.has(h)) {
            s.add(h);
            const i = _(t.dt, t.lt, h.nt, h.ot);
            i && (yield {
              ft: h,
              ut: i[0],
              wt: i[1]
            })
          }
    }
    Mt(t, s) {
      const i = z(t, s),
        h = [];
      for (const e of i)
        if (this.it.has(e))
          for (const i of this.it.get(e)) {
            const e = p(t, s, i.nt, i.ot);
            e && h.push(e)
          }
      return h.length ? h.sort((t, s) => t.y - s.y)[0] : null
    }
  }
  class b {
    constructor() {
      this.Ct = 100
    }
    async vt(t) {
      this.pt = [];
      for (let s = 0; s <= 2 * t._t.zt.x; s += this.Ct) this.pt.push([]);
      const s = new e(t.yt._t + 2);
      for (const i of w.Y) {
        let e = s.L() * i.tt;
        for (; e < t._t.zt.x;) {
          e += i.tt + i.tt * (s.L() - .5);
          const n = this.pt[Math.floor(e / this.Ct)],
            o = this.bt(t, e, i.st);
          for (const t of o)
            if (t) {
              const e = s.L() > .8;
              n.push({
                dt: t.B(new h(0, (e ? 5 : 0) + 5 * s.L())),
                Bt: i,
                Pt: e
              })
            }
        }
      }
    }* bt(t, s, i) {
      let e = i === f ? 200 : 30;
      const n = z(new h(s, -1e3), new h(s, t._t.zt.y)),
        o = new Set,
        c = t.gt.it,
        r = new Set;
      for (const t of n)
        if (c.has(t))
          for (const s of c.get(t)) r.has(s) || (r.add(s), o.add([s.nt, s.ot, !!(s.xt & i)]));
      let a = [];
      for (const [t, i, e] of o) {
        const n = i.v().P(t);
        if (!n.x) continue;
        const o = n.y / n.x,
          c = t.y - o * t.x,
          r = new h(s, o * s + c);
        a.push([t, i, r, o, e])
      }
      a.sort((t, s) => t[2].y - s[2].y);
      let d = !0,
        l = 0;
      for (const [t, s, i, h, n] of a) v(t, s, i) && (n && i.y - l > e && Math.abs(h) < 1.5 && d && (yield i), l = i.y, d = !d)
    }
  }
  class B {
    constructor(t) {
      this.Vt = t, this.kt = []
    }
    St() {
      for (const t of this.kt)
        if (t.dt.B(t.Ht), t.Ht.y += .03, this.Vt.Gt > t.At + t.Tt) {
          const s = this.kt.indexOf(t);
          this.kt.splice(s, 1)
        }
    }
    Ot(t) {
      for (let s = 0; s < t.count; s++) {
        const s = t.jt.v()._((Math.random() - .5) * Math.PI * 2).V(.3 * (Math.random() + .5)),
          i = {
            At: this.Vt.Gt,
            dt: t.dt.v(),
            Ht: s,
            Tt: t.Tt * (Math.random() + .5) * 5
          };
        this.kt.push(i)
      }
    }
  }
  i(0);
  class P {
    constructor(t, s) {
      this.gt = t, this.Lt = s, this.jt = "r", this.$t = 3.5, this.Rt = 4, this.Dt = 0, this.Ft = 0, this.It = !1, this.Wt = 0, this.Nt = 0, this.qt = 0, this.Jt = .25, this.Et = 0, this.Xt = 0
    }
    St() {
      if (this.Lt.Kt) return;
      const t = this.Lt.Qt;
      if (this.Ut(), this.Et && this.Lt.Vt.Gt - this.Et > 3500 && (this.Jt = .25, this.Lt.Qt.dt.y += 20, this.Et = 0), t.Yt = t.dt.v(), 0 === this.Wt) {
        t.dt.x += t.Ht.x;
        const s = this.gt.Mt(new h(t.dt.x, t.dt.y - 20 * (this.Jt > 0 ? 1 : -1)), new h(t.dt.x, t.dt.y + 20 * (this.Jt > 0 ? 1 : -1)));
        s && (t.dt.y = s.y - t.lt * (this.Jt > 0 ? 1 : -1)), this.Lt.Zt && (this.Lt.Qt.Ht.x > 0 ? "r" : "l") === this.jt || (t.Ht.x *= .5), t.Ht.y = 0
      }
      1 === this.Wt && (t.Ht.y += this.Jt, t.Ht.x *= .94, t.dt.B(t.Ht), this.Lt.ts = 1 + Math.abs(t.Ht.y / 17)), 2 === this.Wt && t.Ht.p(), 3 === this.Wt && (t.dt.B(t.Ht), zzfx(.06, .1, 200 * Math.sin(t.Ht.y / 5) + 100, .15, .51, 5, 2, 0, .09), this.Lt.Vt.kt.Ot({
        count: 3,
        jt: new h(3, 0),
        Tt: 120,
        dt: t.dt
      }));
      const s = Math.min(t.Ht.S(), t.lt);
      if (t.Ht = t.Ht.g().V(s), 2 !== this.Wt) {
        const s = Array.from(this.gt.rt(t));
        s.length && (1 === this.Wt && this.Lt.Vt.Gt - this.Ft > 150 && (this.Lt.Vt.Gt - this.Xt > 150 && zzfx(1, .1, 304, .2, .01, 0, .3, 0, .5), this.Xt = this.Lt.Vt.Gt, this.Lt.ts = Math.min(1, 1 / Math.abs(t.Ht.y) / 8 + .7)), 3 === this.Wt && this.ss());
        for (const i of s) {
          t.at.push(i.wt), i.ft.hs && this.Lt.es();
          const s = i.wt.y - t.dt.y;
          if ((this.Jt > 0 ? s <= this.Rt : s >= -this.Rt) && t.dt.P(i.ut), 1 === this.Wt) {
            const s = t.dt.v().P(t.Yt),
              i = t.Ht;
            t.Ht.x = Math.abs(i.x) < Math.abs(s.x) ? i.x : s.x, t.Ht.y = Math.abs(i.y) < Math.abs(s.y) ? i.y : s.y
          }
        }
      }
      t.dt.x = Math.max(0, t.dt.x), t.dt.y > this.Lt.Vt._t.zt.y && this.Lt.es()
    }
    Ut() {
      if (this.ns = null, 3 === this.Wt) {
        if (!(this.Lt.Vt.Gt - this.Nt > 1700)) return;
        this.ss()
      }
      for (const t of this.Lt.Qt.at) {
        const s = (t.y - this.Lt.Qt.dt.y) * (this.Jt > 0 ? 1 : -1),
          i = t.x - this.Lt.Qt.dt.x;
        if (s > this.Rt) return void(this.Wt = 0);
        Math.abs(s) <= this.Rt && (this.ns = i)
      }
      if (this.ns) {
        const t = this.Lt.Vt.cs.os;
        if (this.ns < 0 && t.get("ArrowLeft") || this.ns > 0 && t.get("ArrowRight")) return 2 !== this.Wt && (this.Dt = this.Lt.Vt.Gt), this.Wt = 2, void(this.It = !1)
      }
      1 !== this.Wt && (this.Ft = this.Lt.Vt.Gt, this.Wt = 1, this.It = !1)
    }
    rs(t) {
      if (3 === this.Wt) return void this.Lt.Qt.Ht._(t / 13);
      this.Lt.Zt = 0 === this.Wt;
      let s = .3;
      0 === this.Wt && (s = .2);
      const i = t * s;
      Math.abs(this.Lt.Qt.Ht.x + i) < this.$t && (this.Lt.Qt.Ht.x += i), this.jt = t < 0 ? "l" : "r", this.Lt.as()
    }
    ds() {
      if ((0 === this.Wt || 2 === this.Wt || 1 === this.Wt && this.Lt.Vt.Gt - this.Ft < 150) && this.Lt.Vt.Gt - this.Dt > 151) return this.Lt.Qt.Ht.y = 5, 2 === this.Wt && (this.Lt.Qt.Ht.x = -this.ns / 3, this.Lt.Qt.Ht.y = 5), this.Lt.Qt.Ht.y *= this.Jt > 0 ? -1 : 1, this.Lt.Qt.at = [], this.Dt = this.Lt.Vt.Gt, this.It = !1, void zzfx(.6, 1, 150, .15, .47, 4.2, 1.4, 1, .25);
      1 === this.Wt && !this.It && this.Lt.Vt.Gt - this.Dt > 300 && (this.Lt.Qt.Ht.y = 5 * (this.Jt > 0 ? -1 : 1), this.It = !0, zzfx(.6, 1, 200, .1, .47, 4.2, 1.4, 1, .15)), 3 === this.Wt && this.Lt.Vt.Gt - this.Dt > 150 && this.ss()
    }
    ls(t) {
      3 === this.Wt ? this.ss() : (this.Lt.Qt.Ht = new h(0, -5), this.Lt.Qt.dt.x = t.dt.x, this.Lt.Qt.dt.y = t.dt.y), this.Wt = 3, this.fs = t, this.Nt = this.Lt.Vt.Gt, this.Dt = this.Lt.Vt.Gt
    }
    ss() {
      this.Wt = 1, this.It = !1, this.Dt = this.Lt.Vt.Gt, this.Lt.Vt.kt.Ot({
        count: 250,
        jt: new h(8, 0),
        Tt: 80,
        dt: this.Lt.Qt.dt.v().B(this.Lt.Qt.Ht.v().V(9))
      });
      const t = this.fs;
      this.fs = null, zzfx(1, .1, 428, .2, .31, 0, .2, 5.1, .42), setTimeout(() => t.us = !1, 1e3)
    }
    ws() {
      this.Jt = -.25, this.It = !1, this.Et = this.Lt.Vt.Gt
    }
  }

  function g() {
    return JSON.parse(localStorage.getItem("tww_s")) || {
      _t: 0,
      dt: null,
      Ms: {}
    }
  }

  function x(t) {
    localStorage.setItem("tww_s", JSON.stringify(t))
  }

  function V(t, s, i) {
    return (1 - i) * t + i * s
  }
  class k {
    constructor(t, s) {
      this.Vt = t, this.ms = 90, this.Cs = 0, this.vs = 0, this.ps = new h(1, 1), this.Kt = !0, this.zs = {
        _s: 0,
        ys: -1,
        bs: 1,
        Bs: 0,
        Ps: 0,
        gs: 1,
        xs: -15,
        Vs: 1,
        ks: 0
      }, this.Zt = !1, this.ts = 1, this.Ss(s), this.gt = new P(t.gt, this)
    }
    Hs() {
      if (this.Kt || this.Vt.As.Gs) return;
      const t = this.Vt.cs;
      t.os.get("Space") && this.gt.ds(), 2 !== this.gt.Wt && (t.os.get("ArrowLeft") && this.gt.rs(-1), t.os.get("ArrowRight") && this.gt.rs(1))
    }
    Ts() {
      this.zs.Bs = 0, this.zs.Ps = 0, this.zs.ys = -1, this.zs.bs = 1, Math.abs(this.zs.Vs - this.ts) < .05 && (this.ts = 1), this.zs.Vs = V(this.zs.Vs, this.ts, .25), this.Zt && (this.zs.Bs = Math.sin(this.Vt.Gt / 30) / 2, this.zs.Ps = Math.cos(this.Vt.Gt / 30) / 2), 2 === this.gt.Wt && (this.zs.Bs = -.6, this.zs.Ps = -.7, this.zs.ys = -1.3, this.zs.bs = -.7), this.Vt.Gt - this.vs > 100 && (this.vs = this.Vt.Gt, this.Qt.Ht.y > 1 ? this.zs.xs = -11 : this.Qt.Ht.y < -1 ? this.zs.xs = -21 : this.zs.xs = -15), 1 === this.gt.Wt && (this.Qt.Ht.y > .3 ? (this.zs.ys = Math.sin(this.Vt.Gt / 50) / 3 - 1.5, this.zs.bs = 1.5 + Math.cos(this.Vt.Gt / 50) / 3, this.zs.Bs = .3, this.zs.Ps = -.3) : (this.zs.ys = Math.sin(this.Vt.Gt / 200) / 10 - .7, this.zs.bs = .7 - Math.sin(this.Vt.Gt / 200) / 10)), this.zs._s = Math.sin(this.Vt.Gt / 200) - 2, Math.random() > .99 && (this.zs.ks = this.Vt.Gt);
      const t = this.Vt.Gt - this.zs.ks;
      if (t < 200) {
        const s = t * (Math.PI / 100);
        this.zs.gs = (Math.cos(s) + 1) / 2
      } else this.zs.gs = 1
    }
    as() {
      this.Vt.Gt - this.Cs > this.ms && (this.Cs = this.Vt.Gt, this.Qt.at.length > 0 && zzfx(.4, .6, 50, .02, .54, 4, .9, 10.7, .37))
    }
    St() {
      this.Zt = !1, this.Hs(), this.gt.St(), this.Os(), this.Ts()
    }
    Os() {
      const t = this.Vt._t.js;
      for (const [s, i] of t.entries())
        if (!i.us && i.dt.G(this.Qt.dt) < i.lt) switch (i.us = !0, i.type) {
          case 0:
            const t = this.Vt.yt;
            t.Ms[t._t] || (t.Ms[t._t] = []), t.Ms[t._t].push(s), zzfx(.8, 0, 10, .2, .88, 1, .3, 10, .41);
            break;
          case 1:
            this.gt.ws(), setTimeout(() => i.us = !1, 5e3), zzfx(.8, 0, 10, .2, .88, 1, .3, 10, .41);
            break;
          case 2:
            this.gt.ls(i)
        }
    }
    es() {
      this.Kt = !0, localStorage.setItem("tww_d", ((parseInt(localStorage.getItem("tww_d")) || 0) + 1).toString()), this.Vt.Ls(), this.Vt.kt.Ot({
        count: 250,
        jt: new h(5, 0),
        Tt: 150,
        dt: this.Qt.dt
      }), zzfx(.8, .7, 450, .5, .21, 11.3, .8, 7, .56), setTimeout(() => {
        this.Vt.$s(g())
      }, 1e3)
    }
    Ss(t) {
      this.Kt = !1, this.Qt = {
        lt: 10,
        dt: t,
        Yt: t.v(),
        Ht: new h,
        at: []
      }
    }
  }
  class S {
    constructor(t) {
      this.As = t, this.os = new Map
    }
    init() {
      window.addEventListener("keydown", t => {
        this.os.set(t.code, !0), "Escape" === t.key && (1 === this.As.Rs.mode ? this.As.Rs.Ds() : 2 === this.As.Rs.mode ? this.As.Fs() : this.As.Is())
      }), window.addEventListener("keyup", t => {
        this.os.set(t.code, !1)
      })
    }
  }
  class H {
    constructor(t, s = {}) {
      this.Vt = t, this.Ws = !1, this.ct = !1, this.Ns = !1, this.qs = 1, H.Js.push(this), Object.assign(this, s), this.F || (this.F = document.createElement("canvas")), this.I = this.F.getContext("2d")
    }
    Es() {
      this.Ws ? (this.F.width = this.Vt._t.zt.x, this.F.height = 1 === this.qs ? this.Vt._t.zt.y : this.Vt.F.height) : (this.F.width = this.Vt.F.width, this.F.height = this.Vt.F.height), this.Xs()
    }
    Xs() {
      this.I.clearRect(0, 0, this.F.width, this.F.height)
    }
    Ks() {
      const t = this.Vt.Qs;
      t.Us = this, t.I = this.I, this.ct && this.Xs()
    }
  }
  H.Js = [];
  const G = ["400 70 0-2-6l14 1c12 5-19 13-8 34 25 3 25 6 48 1l15-2 0-3c6 0 12 4 32-1 2 4-4 5 0 11dl7 0dc4-8-3-4 0-11 9-4 14 0 23-1-1 8-6 8-3 13d13-5 7 4 21-1d2-5-4-5-1-10 17 4 78-1 81 2l0 13dc19 0 11 18 33 15d48 2 57-6 102 0l0-11c10-1 23 3 43 5l-1 21-406 1czm253 26c10 2 16-6 18-2l0 7 9 0 0 9 10 0 0 10-18 0-19-15czC138 16C314 20C251 29C228 32C184 8C350 24dpv318 43dv309 43v165 24v184 18v350 36V318 31dV309 31dV217 21s158s295s91s347s223", "200 90 0-1 71c28-4 63 7 102 1dl0-26d0-2c32 7 26-4 100 0l0 47-202 0czm103 18c6 3 8-1 14 2 0 4 4 5 1 12l-14-6czB95 65C40 57C54 47C45 53C134 15pM158 39h42 60H47 50v42 55v131 18s83", "310 130 0 209 131dl-1-41d0-2c27 6 48-8 19-10l-27-1d0-9dc27-1 18-9 71-14l0-11c30 4 23-1 40 0l0 88czm135 86c7 0 14-1 25 3l-6 4-19 0czm262 18l3 0c-2 7 4 9 0 20l-3 0czm-1 99c8 4 15-2 30 2l0 30-31 0czB40 105B83 90B111 89B181 84B201 104B83 69B112 68B98 78C97 49C148 84C97 69C235 83C284 16C120 34C70 35dpP266 27db240 56h284 19V171 87s152s252", "320 70 50-1 52c29 5 57-3 67 0d45-13 95 12 113-18d23 5 28 0 45 2 0 5-3 9-1 15d6 3 10-1 14 0d3-8-1-12 0-17 35-3 65 2 83 1l0 36-322 0czdm156-1l0 31dc-52-4-74 0-87 4-1-3 0-5 1-8d-5 1-9-2-15 0d-1 5 4 6 2 8l-20-1dc-24-3-36-17-36-35dzm288-1l0 3-7 0 0 4 7 0c0 7-2 11-7 11-5 0-7-4-14-18zB134 46C63 35C96 43C283 21C283 5C297 15C160 14C237 44C224 47G44 50G102 37dpP236 37P224 42db220 33M243 29h281 24h158 16H96 40dH296 1dv81 35dv113 30dv295 14v281 19V127 33dV303 10ds194", "400 120 0-1 59c19 1 28 8 50 2l51 1 1 33d11 0d0-28c44-5 42 5 83 4 5-19-18-25-17-34 18 4 19-2 26 0l-1 26 32 2dc9 12 0 19 34 20 25 0 41-3 40-14d-2-8-66-7-70-15l3-14c13 5 19-3 24 1 9 6 13-1 22-2 16-2 14 4 31 1d31 9 35 10 59 3dl24 0 0 76-402 0czm335 33l-10 3 0-9c13-6 16-2 22-2 20 1 35 24-1 8zm47 37c11-2 27-1 28 0l-28 6czB181 65C299 72C379 13C67 23C69 43C110 71C110 90pP252 76P266 79P291 78P255 76P294 78P341 21P347 17P353 13dP60 22dP36 50dP102 85h365 20h103 63h110 76H376 8dv317 43dv274 75dv281 81v293 68v366 31v21 53v81 43dV287 79dV254 61dV378 40dV376 17dV361 23dV62 29s311s352s230s159s94", "240 100-1-1 18c15 3 20-1 28 0-14 54-8 50 8 51d24-11 35-4 36-1 9 23 17 21 40 21 57-10 91-24 90-38-2-12 5-23 40-25dl0 75-242 0czm50-1dl191 0d0 11c-11 2-51 4-52 12-3 20-21 18-27 27-14 15-24 15-39 16-23 3-49-16-66-26zB38 55B75 59B104 81B141 67B197 28B177 63C38 33C38 43C38 23C104 66ph105 69dH195 44dv211 17v211 33dV100 62V152 74", "400 80 65-1 68l28 0dc8-18 14-25 26-21 29 11 16 27 27 28 51 0 35-7 58-22 11-9 6-23 29-13dl35 0 0 38 32 0dc4-4 30-3 34-5 8-7 6-16 9-27 2-7-14-14-8-20 5-6 24 16 37 18 44 4 43-12 62-18 14-2 20 19 34 22dl0 32-402 0czm-1-1dl402 0d0 32c-19-4-26-24-39-21-15 5-7 17-19 21-28 8-33-5-68-16-21-8-23 1-23 20l0 27-35 0-1-51c-43 5-57-8-76 8-18 17-23 39-30 39-41-6-36-24-54-27-24-1-35 18-39 18l-18 0czB262 19B261 51B135 41B57 41B25 61B121 60B295 32B333 37B363 21B87 61C168 15C146 18C168 21C187 18G185 35G227 71dpP203 62h203 43dh168 18h187 21dH215 54v241 63dV158 18dV201 32V173 25ds177s219", "250 120 110-1 114l32-1c-7-29 6-31 2-59l37 0-8 59 55 0dc45-13 52-19 55-28 2-5-9-8-7-17dl0-2 18 0c-6 14 2 14-1 22 23-5 35 2 49 0d-13-39-1-49-3-57dl23-1 0 91-251 0czm-1-1l61 1dc-31 11-42 52-43 57d-1 28-10 24-12 42l-6 0czdm84 101dl0-52c25 3 42 14 66 8l0 2dc-1 4 3 6 5 18d-42 3-37-12-52-3-9 6-4 9-11 27zB17 107B143 87B102 97B220 79C18 70C10 86C95 103C155 41C108 76C195 20dpP71 57dP195 30h26 92dh81 65h71 75h81 84H17 82H71 96dH105 79dv23 97dv91 105v114 80dv33 68ds42s177", "250 120 50 0 78l34 0dc1 21 27 15 64 14 18-1 7-36 24-45d25 8 50 14 129 13l0 60-251 0czdm29 68l-8-58dc35 2 59 16 59 28d-25-7-27 11-22 14 12 4 16-3 32-2-5 10 0 8-3 18dzdm132-2dl77 1 8 27c-36 2-64 5-85 5zB44 85B92 71C63 89C63 46C44 4C210 28C131 4C225 40G71 84G135 49G171 31G197 29pP63 48P108 38dP200 39P132 8dh63 92h71 82h175 41dH124-1H108-1dv78 49v92 37v154 32dV58 86V76 82dV175 32V202 33s127", "300 100 0-1 81c38 1 44-4 103 0l0-16c31 2 50-4 81-2l0 2d0 31 16 0 0-25d0-2 30 0 0-8 10 0 0-8 11 0 0 16d26 0d26-2 0 34-301-1czm173-1l128 0 0 44dc-72-8-66 10-128 0dzdm143-1dc4 5-4 15-1 32d-16 5-21-2-43 2d-32-8-37 3-51-1d-3-8 5-23 3-33dzC37 37C86 42C95 45C57 46C130 36C189 91C189 73C252 61C172 4C145 6G59 57G119 62G193 88dpP172 10db28 69M27 77M34 77h39 34h60 50h122 48dh92 57dH83 39H59 61H82 57dH144 46H151-1H166-1dv34 53dv34 45dv34 37dv26 53dv26 45dv26 37v74 42dv196 86dv50 61V49 39V90 48V135 39V125 39V260 44V99 37ds108s176s224", "300 100 0-1 17c8 5 14-2 28 0l0 4dc-9 8-8 65-7 80dl-21 0czdm57 101c9-43 8-65-1-72dl0-8c16-2 18 3 26 0l0 6c-5 16-1 63 0 73zm115 101dc5-32 5-45 0-53dl0-10c7 0 11-2 16 0l0 10dc-7 8 0 30 0 53dzm301 101l-16 0c2-46-9-45-8-52 15 2 21-1 24 0zm214 101dc1-46-14-68 5-68 23 0 2 22 2 68dzB129 31B51 86B54 58B231 21B158 30B166 60B191 26B164 85C26 60C35 47C53 6C34 67C30 34C81 45C81 63C83 84C113 87C115 69C115 59C220 23C177 77C147 78G97 88dpP26 56P35 43dP30 79P36 84dP34 63P80 52h80 38h82 74dh117 56h117 66h115 84dH99 79dv27 33v37 46v24 59v36 66dV215 29V225 29ds74s123", "150 50 0-1 30c21 1 32-5 43-2 24 6 30-3 61 3l69 0 0 21-173 0czpv103 30"];
  class A {
    constructor(t) {
      this.Vt = t, this.Ys = new H(this.Vt, {
        F: this.Vt.F
      }), this.Zs = new H(this.Vt, {}), this.ti = new H(this.Vt, {
        Ws: !0,
        Ns: !0,
        ct: !0
      }), this.si = [.2, .35, .5].map(t => new H(this.Vt, {
        Ws: !0,
        Ns: !0,
        qs: t
      }))
    }
    init() {
      for (const t of H.Js) t.Xs();
      this.Es(), this.ii()
    }
    hi() {
      let t;
      for (const s of this.Vt._t.ei) switch (s.type) {
        case 0:
          t = s.points[0], this.I.beginPath(), this.I.moveTo(t.x, t.y);
          break;
        case 1:
          t = s.points[0], this.I.lineTo(t.x, t.y);
          break;
        case 2:
          const [i, h, e] = s.points;
          this.I.bezierCurveTo(i.x, i.y, h.x, h.y, e.x, e.y);
          break;
        case 3:
          this.I.closePath(), this.I.fill()
      }
    }
    ni() {
      this.I.beginPath();
      for (const t of this.Vt._t.oi) this.I.fillRect(t.x, t.y, t.w, t.ci)
    }
    ri() {
      const t = new e(1),
        s = this.Vt.gt.ht.filter(t => t.hs);
      for (const i of s) {
        const s = i.nt.A(i.ot),
          h = i.nt.G(i.ot);
        this.I.save(), this.I.translate(i.nt.x, i.nt.y), this.I.rotate(s);
        let e = 0;
        for (; e < h;) this.I.beginPath(), this.I.moveTo(-4, e), this.I.lineTo(-4, e + 4), this.I.lineTo(9 + 7 * t.L(), e + 2), this.I.closePath(), this.I.fill(), e += 5;
        this.I.restore()
      }
    }
    ai() {
      const t = this.I,
        s = this.Vt.Lt;
      t.save(), t.translate(s.Qt.dt.x, s.Qt.dt.y + 10 * (s.gt.Jt > 0 ? 1 : -1)), 3 === s.gt.Wt ? (t.translate(0, -10), t.rotate(s.Qt.Ht.H() + Math.PI), t.scale(.9, 1.1)) : t.scale(1, s.zs.Vs * (s.gt.Jt > 0 ? 1 : -1)), "l" === s.gt.jt && t.scale(-1, 1), t.save(), t.translate(-3, -10), t.rotate(s.zs.Bs), t.drawImage(w.X, 0, 0, 5, 10), t.restore(), t.save(), t.translate(1, -10), t.rotate(s.zs.Ps), t.drawImage(w.X, 0, 0, 5, 10), t.restore(), t.drawImage(w.J, -20, -36, 40, 40), t.save(), t.translate(0, s.zs._s), t.save(), t.translate(-3, -13), t.rotate(s.zs.bs), t.scale(.8, .8), t.drawImage(w.X, 0, 0, 5, 10), t.restore(), t.save(), t.translate(3, -10), t.rotate(s.zs.ys), t.scale(.8, .8), t.drawImage(w.X, 0, 0, 5, 10), t.restore(), t.drawImage(w.N, -20, -33), t.translate(0, s.zs.xs), t.scale(1, s.zs.gs), t.drawImage(w.q, -3, -8), t.restore(), 3 === s.gt.Wt && (t.rotate(-s.Qt.Ht.H() - Math.PI), this.di(new h(0, -18)._(s.Qt.Ht.H() + Math.PI), !1)), t.restore()
    }
    li() {
      const t = this.Vt.Qs.Us.F,
        s = this.I.createLinearGradient(0, 0, 0, t.height);
      s.addColorStop(0, "#555"), s.addColorStop(1, "#111"), this.I.fillStyle = s, this.I.fillRect(0, 0, t.width, t.height);
      const i = this.I.createRadialGradient(150, 100, 10, 150, 100, 300);
      i.addColorStop(0, "#ddd"), i.addColorStop(.03, "#ddd"), i.addColorStop(.04, "#777"), i.addColorStop(1, "transparent"), this.I.fillStyle = i, this.I.fillRect(0, 0, t.width, t.height)
    }
    fi(t, s, i, h, n) {
      const o = new e(n),
        c = this.Vt.Qs.Us.F,
        r = this.I.createLinearGradient(0, 0, 0, c.height);
      r.addColorStop(0, t), r.addColorStop(1, "#111"), this.I.filter = `blur(${2/this.Vt.Qs.Us.qs}px)`, this.I.fillStyle = r, this.I.lineWidth = 0;
      let a = 0;
      for (; a < c.width;) this.I.beginPath(), this.I.save(), this.I.translate(a, c.height), this.I.scale(1, i + o.$() * i * .5), this.I.arc(0, 0, s, Math.PI, 2 * Math.PI), this.I.closePath(), this.I.fill(), this.I.restore(), a += h + o.$() * h * .5
    }
    ui(t) {
      const s = this.Vt.wi.dt.x - 100,
        i = this.Vt.wi.dt.x + this.Vt.F.width + 100;
      for (let h = s; h < i; h += this.Vt.Mi.Ct) {
        const s = Math.floor(h / this.Vt.Mi.Ct);
        for (const i of this.Vt.Mi.pt[s] || []) {
          if (i.Pt !== t) continue;
          const s = i.Bt.Z.length;
          let h = Math.abs(Math.round(this.Vt.Gt / 40 + i.dt.x) % (2 * s) - s);
          h === s && (h = s - 1);
          const e = i.Bt.Z[h];
          this.I.drawImage(e, i.dt.x - e.width / 2, i.dt.y - e.height + 5)
        }
      }
    }
    mi(t, s, i) {
      this.I.save(), this.I.translate(t.x, t.y - 1), i += 5 * Math.sin(this.Vt.Gt / 300);
      const h = this.I.createRadialGradient(0, 0, 10, 0, 0, i);
      h.addColorStop(0, s), h.addColorStop(1, "transparent"), this.I.fillStyle = h, this.I.fillRect(-i, -i, 2 * i, 2 * i), this.I.restore()
    }
    Ci() {
      this.I.strokeStyle = "#fff", this.I.lineWidth = .5;
      for (const t of this.Vt.kt.kt) {
        const s = t.dt,
          i = t.Ht;
        this.I.beginPath(), this.I.moveTo(s.x, s.y), this.I.lineTo(s.x + i.x, s.y + i.y), this.I.stroke()
      }
    }
    vi() {
      const t = new e(1);
      this.I.lineWidth = .5, this.I.strokeStyle = "#fff3";
      for (let s = 0; s < 50; s++) {
        const s = .6 + .8 * t.L(),
          i = .2 + .2 * t.L(),
          h = (t.L() * this.Us.F.width + s * this.Vt.Gt / 5) % this.Us.F.width,
          e = (t.L() * this.Us.F.height + i * this.Vt.Gt / 5) % this.Us.F.height;
        this.I.beginPath(), this.I.moveTo(h, e), this.I.lineTo(h + 4 * s, e + 4 * i), this.I.stroke()
      }
    }
    pi() {
      for (const t of this.Vt._t.js)
        if (!t.us) switch (t.type) {
          case 0:
            this.zi(t, 12, !1);
            break;
          case 1:
            this.zi(t, 8, !0);
            break;
          case 2:
            this.di(t.dt)
        }
    }
    di(t, s = !0) {
      this.I.save(), this.I.translate(t.x, t.y + (s ? 3 * Math.sin(this.Vt.Gt / 400) : 0)), s && this.I.scale(1 + .05 * Math.sin(this.Vt.Gt / 230), 1 + .05 * Math.sin(this.Vt.Gt / 280));
      const i = this.I.createRadialGradient(0, 0, 0, 0, 0, 22);
      i.addColorStop(0, "#8883"), i.addColorStop(.65, "#8888"), i.addColorStop(.95, "#888a"), i.addColorStop(1, "#8880"), this.I.fillStyle = i, this.I.beginPath(), this.I.fillRect(-22, -22, 44, 44), this.I.closePath(), this.I.fillStyle = "#ccc8", this.I.beginPath(), this.I.arc(8, -8, 5, 0, 2 * Math.PI), this.I.closePath(), this.I.fill(), this.I.restore()
    }
    zi(t, s, i) {
      this.I.save(), this.I.translate(t.dt.x, t.dt.y + 5 * Math.sin(this.Vt.Gt / 800));
      for (let t = 0; t < 4; t++) {
        const h = (this.Vt.Gt + t * Math.PI * 125) % (Math.PI / 2 * 1e3),
          e = Math.cos(h / 1e3),
          n = Math.sin(h / 1e3);
        this.I.scale(1, -1), this._i(n, e, 1, s, i), this.I.scale(1, -1), this._i(n, e, .6, s, i)
      }
      this.I.globalCompositeOperation = "screen", this.mi(new h(0, 0), i ? "#001" : "#200", 25), this.I.globalCompositeOperation = "source-over", this.I.restore()
    }
    _i(t, s, i, h, e) {
      const n = this.yi(50 + 180 * s * i),
        o = this.yi(120 * s * i);
      this.I.fillStyle = e ? `#${o}${o}${n}` : `#${n}${o}${o}`, this.I.beginPath(), this.I.lineTo(8 - 16 * t, 0), this.I.lineTo(0, h), this.I.lineTo(16 * s - 8, 0), this.I.closePath(), this.I.fill()
    }
    yi(t) {
      const s = Math.round(t).toString(16);
      return 1 === s.length ? "0" + s : s
    }
    bi() {
      this.I.drawImage(w.K, 80, 170, 80, 160), this.I.save(), this.I.translate(130, 175), this.I.rotate(Math.sin(this.Vt.Gt / 450) / 25 - .1), this.I.drawImage(w.U, -15, 0, 80, 120), this.I.restore()
    }
    Bi() {
      this.I.lineWidth = 5, this.I.strokeStyle = "#000";
      let t = 1090;
      for (; t < this.Vt._t.zt.x;) this.I.save(), this.I.translate(t, 310), this.I.beginPath(), this.I.arc(0, 0, 25, Math.PI, 2 * Math.PI), this.I.closePath(), this.I.fill(), this.I.beginPath(), this.I.moveTo(0, 0), this.I.lineTo(0, -80), this.I.stroke(), this.I.beginPath(), this.I.moveTo(-15, -65), this.I.lineTo(15, -65), this.I.stroke(), this.I.restore(), t += 80
    }
    Pi() {
      if (this.Vt.gi || this.Vt.xi) {
        const t = this.Vt.Gt - Math.max(this.Vt.gi, this.Vt.xi),
          s = Math.sqrt(this.I.canvas.width * this.I.canvas.width + this.I.canvas.height * this.I.canvas.height);
        let i = s * (t / 1100);
        this.Vt.xi && (i = s - i), this.I.globalCompositeOperation = "destination-in", this.I.beginPath(), this.I.arc(this.Vt.Lt.Qt.dt.x, this.Vt.Lt.Qt.dt.y, Math.max(0, i), 0, 2 * Math.PI), this.I.closePath(), this.I.fill(), this.I.globalCompositeOperation = "source-over"
      }
    }
    ii() {
      this.Zs.Ks(), this.li(), this.ti.Ks(), this.I.fillStyle = "#000", this.ri(), this.ni(), this.hi();
      const t = [
        ["#282828", 500, .5, 1300, 3],
        ["#222", 400, .7, 1e3, 7],
        ["#1d1d1d", 200, 1, 800, 9]
      ];
      for (const [s, i] of this.si.entries()) i.Ks(), this.fi(...t[s])
    }
    D() {
      const t = this.Vt.wi.dt;
      this.Ys.Ks(), this.Vi(this.Zs);
      for (const t of this.si) this.Vi(t);
      this.I.translate(-t.x, -t.y), this.ui(!1), 0 === this.Vt.yt._t && this.bi(), this.Vt.yt._t === G.length - 1 && this.Bi(), this.I.translate(t.x, t.y), this.vi(), this.Vi(this.ti), this.I.translate(-t.x, -t.y), this.Vt.Lt.Kt || this.ai(), this.pi();
      const s = this.Vt.Mi.bt(this.Vt, this.Vt.Lt.Qt.dt.x, l);
      for (const t of s) this.I.fillRect(t.x - 1, t.y - 1, 2, 2);
      if (this.Ci(), this.ui(!0), !this.Vt.Lt.Kt) {
        this.I.globalCompositeOperation = "screen";
        let t = "#333";
        const s = this.Vt.Lt.gt.Et,
          i = this.Vt.Gt - s;
        s && (t = i > 2500 ? Math.sin(i / 50) > 0 ? "#005" : t : "#005"), this.mi(this.Vt.Lt.Qt.dt, t, 50), this.I.globalCompositeOperation = "source-over"
      }
      this.Pi(), this.I.translate(t.x, t.y)
    }
    Es() {
      this.Vt.F.width = .4 * window.outerWidth, this.Vt.F.height = .4 * window.outerHeight;
      for (const t of H.Js) t.Es();
      this.ii()
    }
    Vi(t) {
      t.Ns ? this.ki(t) : this.I.drawImage(t.F, 0, 0)
    }
    ki(t) {
      this.I.drawImage(t.F, this.Vt.wi.dt.x * t.qs, this.Vt.wi.dt.y * (1 === t.qs ? 1 : 0), this.Us.F.width, this.Us.F.height, 0, 0, this.Us.F.width, this.Us.F.height)
    }
  }
  class T {
    constructor(t) {
      this.Vt = t, this.dt = new h
    }
    St() {
      const t = this.Vt.F.width,
        s = this.Vt.F.height,
        i = this.Vt.Lt.Qt.dt,
        [h, e, n, o] = [this.Vt._t.zt.x - t, this.Vt._t.zt.y - s, i.x - t / 2, this.Si(this.dt.y, i.y - s / 1.7, -5, 50)];
      this.dt.x = Math.min(Math.max(0, n), h), this.dt.y = Math.min(Math.max(0, o), e)
    }
    Si(t, s, i, h) {
      const e = t - s;
      return e < i || e > h ? V(t, s + (e < i ? i : h), .12) : t
    }
  }

  function* O(t, s) {
    let i, e, n, o, c = null;
    for (let u = 0; u < t.length - 2; u += 4) {
      i = t[u], e = t[u + 1], n = t[u + 2], o = t[u + 3];
      for (let t = 0; t < 1; t += s) {
        const s = (a = e, d = n, l = o, f = t, new h(j((r = i).x, a.x, d.x, l.x, f), j(r.y, a.y, d.y, l.y, f)));
        c && (yield [c, s]), c = s
      }
    }
    var r, a, d, l, f
  }

  function j(t, s, i, h, e) {
    return Math.pow(1 - e, 3) * t + 3 * Math.pow(1 - e, 2) * e * s + 3 * (1 - e) * Math.pow(e, 2) * i + Math.pow(e, 3) * h
  }
  const L = "mlczpdsCGB";
  class $ {
    constructor(t, s) {
      this.Vt = t, this.d = s, this.Hi = 0
    }
    Gi() {
      this.next();
      const t = [],
        s = [],
        i = [],
        h = [];
      this.Vt._t = {
        zt: this.Ai(),
        Ti: this.Oi(),
        ei: t,
        oi: s,
        ji: i,
        js: h
      };
      let e = "m",
        n = null,
        o = this.d[this.Hi - 1],
        c = !1;
      for (; o;) {
        if (L.includes(o)) {
          if ("d" === o) {
            c = !c, o = this.next();
            continue
          }
          "z" === (e = o) && (t.push({
            type: 3,
            hs: !1
          }), this.et(this.dt, n, c)), o = this.next();
          continue
        }
        if (" " === o) {
          o = this.next();
          continue
        }
        let r, a = [];
        switch (e) {
          case "m":
            this.dt = this.Ai(), n = this.dt.v(), t.push({
              type: 0,
              points: [n],
              hs: c
            }), e = "l";
            break;
          case "l":
            a = [this.dt.v(), this.dt.B(this.Ai()).v()], t.push({
              type: 1,
              points: [a[1]],
              hs: c
            }), this.et(a[0], a[1], c, l | f);
            break;
          case "c":
            const d = this.dt.v();
            a = [this.dt.v().B(this.Ai()), this.dt.v().B(this.Ai()), this.dt.B(this.Ai()).v()], t.push({
              type: 2,
              points: a,
              hs: c
            });
            const u = O([d].concat(a), .1);
            for (const [t, s] of u) this.et(t, s, c, l | f);
            break;
          case "p":
            this.Hi++, r = this.Ai();
            const w = new Map([
                ["P", [15, 5]],
                ["h", [40, 10]],
                ["H", [80, 10]],
                ["v", [10, 40]],
                ["V", [10, 80]],
                ["b", [40, 40]],
                ["M", [60, 60]]
              ]),
              [M, m] = w.get(o);
            s.push({
              x: r.x - M,
              y: r.y - m,
              w: 2 * M,
              ci: 2 * m,
              hs: c
            }), this.Li(r, M, m, c);
            break;
          case "s":
            const C = this.Oi();
            i.push(C);
            break;
          case "C":
            r = this.Ai();
            const v = this.Vt.yt.Ms[this.Vt.yt._t] || [];
            h.push({
              dt: r,
              type: 0,
              us: v.includes(h.length),
              lt: 20
            });
            break;
          case "G":
            r = this.Ai(), h.push({
              dt: r,
              type: 1,
              us: !1,
              lt: 25
            });
            break;
          case "B":
            r = this.Ai(), h.push({
              dt: r,
              type: 2,
              us: !1,
              lt: 25
            })
        }
        o = this.d[this.Hi - 1]
      }
    }
    Li(t, s, i, e) {
      const [n, o, c, r] = [t.v().B(new h(-s, -i)), t.v().B(new h(s, -i)), t.v().B(new h(s, i)), t.v().B(new h(-s, i))], a = s > 30 ? l : 0;
      this.et(n, o, e, a), this.et(o, c, e, a), this.et(c, r, e, a), this.et(r, n, e, a)
    }
    Ai() {
      return new h(this.Oi(), this.Oi())
    }
    Oi() {
      let t = this.d[this.Hi - 1],
        s = this.next();
      for (; s >= "0" && s <= "9";) t += s, s = this.next();
      return 10 * parseFloat(t)
    }
    next() {
      return this.d[this.Hi++]
    }
    et(t, s, i, h = 0) {
      i && (h = 0), this.Vt.gt.et({
        nt: t,
        ot: s,
        xt: d | h,
        hs: i
      })
    }
  }
  class R {
    constructor(t, s) {
      this.As = t, this.F = s, this.Gt = 0, this.$i = parseInt(localStorage.getItem("tww_t")) || 0, this.gt = new y, this.Mi = new b, this.kt = new B(this), this.cs = new S(this.As), this.Qs = new A(this), this.wi = new T(this), this.gi = 0, this.xi = 0, this.cs.init()
    }
    $s(t) {
      this.gt.ct(), this.yt = t,
        function(t, s) {
          const i = G[s];
          new $(t, i).Gi()
        }(this, t._t), this.Ri(), this.Qs.init(), this.Mi.vt(this)
    }
    Ri() {
      this.Di(), this.Lt = new k(this, new h(this.yt.dt.x, this.yt.dt.y))
    }
    Di() {
      const t = new h(150, this._t.Ti);
      this.yt.dt || (this.yt.dt = t);
      const s = this.gt.Mt(new h(this.yt.dt.x, this.yt.dt.y), new h(this.yt.dt.x, this._t.zt.y));
      s ? this.yt.dt.y = s.y - 10 : this.yt.dt = t
    }
    Fi() {
      this.yt.dt = this.Lt.Qt.dt.v(), x(this.yt), this.Ls()
    }
    Ls() {
      localStorage.setItem("tww_t", this.$i.toString())
    }
    St(t) {
      if (this.Gt += t, this.kt.St(), this.xi) return;
      if (this.Lt.St(), this.As.Gs) return;
      this.$i += t;
      const s = this.Lt.Qt.dt;
      for (const t of this._t.ji) t > this.yt.dt.x && s.x > t && this.Fi();
      if (s.x > this._t.zt.x + 10) {
        if (this.yt._t === G.length - 1) return this.Ls(), this.As.Rs.finish(this.yt), void(this.As.Gs = !0);
        this.xi = this.Gt, setTimeout(() => {
          this.xi = 0, this.yt._t++, this.yt.dt = null, x(this.yt), this.$s(this.yt), this.gi = this.Gt, setTimeout(() => {
            this.gi = 0
          }, 1100)
        }, 1100)
      }
    }
  }
  class D {
    constructor(t) {
      this.Ii = document.getElementsByTagName("t")[0], this.Wi = document.getElementsByTagName("w")[0], this.Ni = document.getElementById("o"), this.qi = document.getElementById("c"), this.Ji = document.getElementById("n"), this.Ei = document.getElementById("f"), this.Xi = document.getElementById("tm"), this.Ki = document.getElementById("p"), this.Qi = document.getElementById("d"), this.Ui = document.getElementById("r"), this.mode = 0, this.qi.addEventListener("click", () => t.Is()), this.Ji.addEventListener("click", () => t.Fs()), this.Ni.classList.remove("r"), this.Wi.classList.add("r")
    }
    Yi() {
      this.Ii.classList.remove("r"), this.Ni.classList.add("r"), this.Ei.classList.add("r"), this.Ui.classList.add("r")
    }
    show() {
      this.Yi(), this.Ni.classList.remove("r")
    }
    hide() {
      this.Ii.classList.add("r")
    }
    finish(t) {
      this.Yi(), this.mode = 1, this.Ei.classList.remove("r");
      let s = parseInt(localStorage.getItem("tww_t")) / 1e3,
        i = Math.floor(s / 60);
      this.Xi.innerText = `${i}m ${(s-60*i).toFixed(1)}s`, this.Ki.innerText = Object.values(t.Ms).reduce((t, s) => t + s.length, 0).toString(), this.Qi.innerText = localStorage.getItem("tww_d") || "0"
    }
    Ds() {
      this.mode = 2, this.Ei.classList.add("r"), this.Ui.classList.remove("r")
    }
  }
  class F {
    constructor(t) {
      this.Gs = !0, this.Vt = new R(this, t), this.Rs = new D(this)
    }
    start() {
      this.Vt.$s(g())
    }
    Is() {
      this.Gs = !this.Gs, this.Gs ? this.Rs.show() : this.Rs.hide()
    }
    Fs() {
      this.Rs.mode = 0, localStorage.removeItem("tww_d"), localStorage.removeItem("tww_t"), this.Vt.$i = 0, localStorage.removeItem("tww_s"), this.start(), this.Gs = !1, this.Rs.hide()
    }
  }
  let I = 0;
  i.d(s, "tick", function() {
    return J
  });
  let W = 0;
  const N = 1e3 / 60;
  let q;

  function J(t) {
    const s = t - W,
      i = Math.floor(s / N);
    W += i * N;
    for (let t = 0; t < i; t++) q.Vt.St(N);
    q.Vt.wi.St(), q.Vt.Qs.D(), requestAnimationFrame(J),
      function(t) {
        if (t - I > 100) {
          I = t;
          const s = 170 + 40 * Math.sin(t / 631) + 60 * Math.cos(t / 487) + 30 * Math.sin(t / 227);
          zzfx(.015, 2, s, 1.5, .5, 0, 5, .1, 0)
        }
      }(W)
  }!async function() {
    await M();
    const t = document.getElementsByTagName("canvas")[0];
    (q = new F(t)).start(), requestAnimationFrame(J), window.addEventListener("resize", () => q.Vt.Qs.Es())
  }()
}]);