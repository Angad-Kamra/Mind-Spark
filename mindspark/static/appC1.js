let aa = (a, b) => a.reduce((d, e, g) => d && e == b[g], !0),
	ea = (a, b) => {
		b = a.indexOf(b);
		0 <= b && a.splice(b, 1)
	},
	ia = (a, b, d) => {
		a = [0, 0, a, b];
		let e = [];
		fa(a, a, (g, f) => {
			f || e.push([]);
			e[g].push(d(g, f))
		});
		return e
	},
	ja = (a, b) => {
		for(let d in a) b(a[d], d)
	},
	ma = a => {
		let [b, d, e] = a;
		return `hsl(${b},${d}%,${e}%)`
	},
	oa = (a, b, d, e, g) => {
		na(a, b, d, b.ya, e, g)
	},
	na = (a, b, d, e, g, f) => {
		e && e.forEach(l => {
			a.save();
			pa(a, l.K, 1);
			f.forEach(m => pa(a, b.kb[m.jb][l.ca], m.cb));
			na(a, b, d, l.Sb, g, f);
			null != l.J && b.va[l.J].forEach(m => {
				a.beginPath();
				var n;
				if(8 > m.length) {
					let [k, p, u, x, q, r, v] = m, t, y, z;
					r && (r.length ? [n, t, y, z] = r : n = t = y = z = r);
					n = n || 0;
					t = t || 0;
					y = y || 0;
					z = z || 0;
					a.moveTo(k + n, p);
					a.arcTo(k + u, p, k + u, p + t, t);
					a.arcTo(k + u, p + x, k + u - y, p + x, y);
					a.arcTo(k, p + x, k, p + z, z);
					a.arcTo(k, p, k + n, p, n);
					m = q;
					n = v
				} else {
					let [k, p, u, x, q, r, v, t] = m;
					a.moveTo(k, p);
					a.lineTo(u, x);
					a.lineTo(q, r);
					a.lineTo(k, p);
					m = v;
					n = t
				}
				a.fillStyle = ma(d[m]);
				a.fill();
				null != n && (a.strokeStyle = ma(d[n]), a.lineWidth = 1, a.stroke())
			});
			na(a, b, d, l.na, g, f);
			g(a, l);
			a.restore()
		})
	},
	pa = (a, b, d) => {
		b && b.forEach(e => {
			switch(e.i) {
				case 0:
					a.scale(1 - (1 - e.sa) * d, 1 - (1 - e.ta) * d);
					break;
				case 1:
					a.translate(e.w * d, e.G * d);
					break;
				case 2:
					a.translate(e.Pa || 0, e.Qa || 0);
					a.rotate(e.I * d);
					a.translate(-e.Pa || 0, -e.Qa || 0);
					break;
				case 3:
					a.globalAlpha = e.opacity * d
			}
		})
	};
let qa = [0, 7E-5],
	ra = [{
		W: [48],
		Da: "o"
	}, {
		W: [49],
		Da: "un"
	}, {
		W: [50],
		Da: "to"
	}, {
		W: [51],
		Da: "tre"
	}, {
		W: [52],
		Da: "or"
	}, {
		W: [53],
		Da: "fi"
	}, {
		W: [54],
		Da: "si"
	}, {
		W: [55],
		Da: "sen"
	}, {
		W: [56],
		Da: "at"
	}, {
		W: [57],
		Da: "ni"
	}, {}, {
		W: [87, 38],
		Ja: "up",
		Ha: 1
	}, {
		W: [83, 40],
		Ja: "down",
		Ha: 1
	}, {
		W: [65, 37],
		Ja: "left",
		Aa: 2,
		Ha: 1
	}, {
		W: [68, 39],
		Ja: "right",
		Aa: 2,
		Ha: 1
	}, {
		W: [74, 32]
	}, {
		W: [219],
		Aa: 9,
		Ha: 1,
		Ta: 199
	}, {
		W: [221],
		Aa: 9,
		Ha: 1,
		Ta: 199
	}, {}, {
		W: [71],
		Aa: 6
	}, {
		W: [66],
		Ja: "drop",
		Aa: 8
	}, {
		W: [84],
		Aa: 7
	}, {
		W: [73],
		Ja: "insert",
		Aa: 5
	}, {
		W: [75],
		Ja: "eject"
	}, {
		W: [80],
		Aa: 9,
		Ha: 1,
		Qb: 1,
		Ta: 999
	}, {
		W: [82],
		Ha: 1,
		Ta: 999
	}, {
		Ja: "save",
		Aa: 13
	}, {
		Ja: "fire",
		W: [13],
		Ha: 1,
		Ta: 199
	}, {
		Ta: 999
	}, {}],
	sa = {},
	ta = {},
	wa = (a, b) => {
		ra.forEach((d, e) => {
			d.W && d.W.forEach(g => sa[g] = e);
			ta[e] = d.Aa; {
				let g = ra[e].Da || ua(e);
				d.Ub = g && va(a, g) || b[e]
			}
		})
	},
	ua = a => {
		a = ra[a];
		return a.Ja || a.Yb || a.W && String.fromCharCode(a.W[0])
	};
let xa = (a, b, d) => {
		let e = a.hb || 1;
		a.hb = 0;
		a.la.za[b] = d;
		return e
	},
	ya = (a, b, d) => {
		a = a.la;
		if((a.Va[b] || 0) < a.za[b]) return a.Va[b] = d, 1
	},
	w = (a, b, d) => {
		let e = a.la,
			g = ra[b].Ha,
			f = e.za[b],
			l = e.Va[b] || 0;
		return(!a.Ea || 0 <= a.Ea.indexOf(b)) && f && l < f ? (g || (e.Va[b] = d), 1) : 0
	},
	za = (a, b, d, e) => {
		let g = a.la;
		if(!a.Ea || 0 <= a.Ea.indexOf(b)) {
			if(!e) {
				a = a.ba;
				let f = ta[b];
				if(a = a.ua && a.ua[f]) e = a.da
			}
			if(e) return b = d - g.za[b], (b / e | 0) != ((b + 19) / e | 0)
		}
	};
let Aa = [
	[-1, 0],
	[0, -1],
	[1, 0],
	[0, 1]
];
let Ba = (a, b) => B(a, b, ([d, e], [g, f]) => Math.max(0, Math.min(d + e, g + f) - Math.max(d, g))),
	Ca = (a, b) => {
		a = Ba(a, b);
		return a[0] * a[1]
	},
	Da = (a, b) => B(a, b, ([d, e], [, g]) => [Math.max(0, Math.floor(d)), Math.min(Math.floor(d + e), g - 1)]),
	fa = (a, b, d) => {
		if(a) {
			let [
				[e, g],
				[f, l]
			] = Da(a, b);
			for(a = e; a <= g; a++)
				for(b = f; b <= l; b++) d(a, b)
		}
	};
let Ea = (a, b) => 0 == b % 2,
	Fa = (a, b) => 0 < b % 2;
let B = (a, b, d, e = [], g = 0) => {
		e[g] = d(a.filter(Ea), b.filter(Ea), 0);
		e[g + 1] = d(a.filter(Fa), b.filter(Fa), 1);
		return e
	},
	Ia = (a, b, d, e, g, f, l, m, n) => () => {
		let k = a.currentTime,
			p = a.createOscillator();
		p.frequency.setValueAtTime(g, k);
		p.frequency.linearRampToValueAtTime(f, k + b);
		p.type = e;
		let u = a.createGain();
		Ga(u, k, d, .05, 0, .2 * b, b);
		let x;
		if(m) {
			var q = a.createOscillator();
			q.frequency.value = n;
			q.type = m;
			x = a.createGain();
			x.gain.value = -999;
			q.connect(x);
			x.connect(p.detune);
			q.start();
			q.stop(k + b)
		}
		l ? (q = a.createBiquadFilter(), q.type = l < g ? "highpass" : "lowpass", q.Q.value = 0, q.frequency.value = l, p.connect(q), q.connect(u)) : p.connect(u);
		u.connect(a.destination);
		p.start();
		p.stop(k + b);
		p.onended = () => {
			[u].map(Ha)
		}
	};
let Ha = a => {
		a && a.disconnect()
	},
	Ga = (a, b, d, e, g, f, l) => {
		a.gain.value = 0;
		a.gain.setValueAtTime(0, b);
		a.gain.linearRampToValueAtTime(d, b + g);
		a.gain.linearRampToValueAtTime(e, b + f);
		a.gain.linearRampToValueAtTime(0, b + l)
	},
	Ja = (a, b, d, e, g, f) => {
		var l = a.sampleRate;
		let m = b * l | 0,
			n = a.createBuffer(1, m, l);
		for(l = n.getChannelData(0); m--;) l[m] = 2 * Math.random() - 1;
		return() => {
			let k = a.createBufferSource();
			k.buffer = n;
			k.loop = !0;
			let p = a.createBiquadFilter();
			p.type = "lowpass";
			p.Q.value = 0;
			p.frequency.value = e;
			let u = a.createGain();
			Ga(u, a.currentTime, g, f, d, .2 * b, b);
			k.connect(p);
			p.connect(u);
			u.connect(a.destination);
			k.start();
			k.stop(a.currentTime + b);
			k.onended = () => {
				u && u.disconnect()
			}
		}
	},
	va = (a, b) => {
		let d = .2 * b.length,
			e = a.sampleRate,
			g = a.createBuffer(1, d * e | 0, 2 * e),
			f = g.getChannelData(0);
		Ka(f, b, e);
		return() => {
			let l = a.createBufferSource();
			l.buffer = g;
			let m = a.createGain();
			m.gain.value = .01;
			l.connect(m);
			m.connect(a.destination);
			l.start();
			l.stop(a.currentTime + d);
			l.onended = () => {
				m && m.disconnect()
			}
		}
	};
let La;
La = [
	[10, 10, 0, 18, 30], , , [10, 10, 10, 4, 40, 80],
	[10, 10, 0, 14, 50],
	[10, 10, 10, 8, 20, 34],
	[15, 5, 2, 2, 10, 26],
	[30, 10, 30, 22, 26, 32],
	[10, 10, 0, 5, 56],
	[10, 10, 0, 5, 56], , , , [10, 10, 0, 4, 40],
	[10, 10, 0, 12, 15],
	[5, 10, 10, 4, 10, 20], , [30, 8, 1, 3, 10, 20],
	[80, 40, 0, 80, 110],
	[10, 20, 5, 4, 20, 40],
	[10, 10, 0, 5, 14]
];
let Ka = (a, b, d) => {
		let e = 0;
		b.split("").forEach((g, f) => {
			f = b.charCodeAt(f) - 97;
			if(g = La[f]) {
				f = d / 15 * (2 + f / 9);
				for(let n = 0; 3 > n; n++) {
					var l = g[n + 3];
					if(l) {
						l *= 30 / d;
						let k = 0,
							p = 0,
							u = 1 - 6.28 * 5 / d * g[n],
							x = e,
							q = 0;
						for(let r = 0; r < f; r++) {
							var m = 376.8 / d * r;
							m = .5 - (m - 6.28 * Math.floor(m / 6.28)) / 6.28;
							m += 2 * Math.cos(6.28 * l) * k * u - p * u * u;
							p = k;
							k = m;
							q = m = .75 * q + 3 * m;
							m = m / 128 - 1;
							a[x++] = a[x] / 2 + m;
							a[x++] = a[x] / 2 + m
						}
					}
				}
				e += 3 * f / 4 << 1
			} else 32 == f && (e += .2 * d | 0)
		})
	},
	Na = ([a, b, d], e = 4, g = 1, f = 1) => {
		let l = Ma(32 * g, 32 * f, e);
		return(m, n, k) => {
			var p = d + 5 * Math.random() - n;
			let u = b - 5 * Math.random() + n;
			p = [
				[a, u, p + 9],
				[a, u - 9, p],
				[a, u, p - 9]
			];
			return [{
				ha: k(),
				ba: l,
				ra: p,
				V: 2,
				X: 0,
				ia: -1,
				j: [m + (1 - g) / 2, n, g, f]
			}]
		}
	},
	Qa = (a, b) => (d, e, g) => [{
		ba: Oa,
		ra: Pa,
		V: 1,
		j: [d + -.25, e + 1 - 1.9, 1.5, 1.9],
		X: 4,
		ia: 9435151,
		ma: 1,
		fa: 1,
		Ca: 0,
		ha: g(),
		ga: 49,
		u: [0, 0],
		Ka: .006,
		Xa: 1,
		la: {},
		N: {
			[11]: a && a(d, e, g)[0]
		},
		qa: 1,
		ka: 11,
		Ia: 12,
		Ea: ra.map((f, l) => l),
		ea: 0,
		sb: b && b()
	}],
	Ua = (a, b, d) => [{
		ha: d(),
		V: 3,
		X: 3,
		ia: 268431615,
		j: [a + (1 - .95) / 2, b + 1 - .95, .95, .95],
		ma: 1,
		ga: 2,
		u: [0, 0],
		ba: Ra,
		ra: Ta,
		Xa: 1
	}],
	Wa = a => (b, d, e) => {
		let g = {
			V: 11,
			ba: Va,
			ra: [
				[0, 0, 80],
				[0, 0, 90]
			],
			j: [b + (1 - .8) / 2, d + 1 - .3, .8, .3],
			X: 1,
			ia: 61455,
			ma: 1,
			ha: e(),
			ga: .1,
			u: [0, 0],
			lb: .4,
			fa: 0,
			Ca: 0,
			pb: 0,
			wb: 199
		};
		return a ? (b = a(b, d, e), d = b[0], d.N[d.ka] = g, b) : [g]
	},
	Ya = a => {
		let b = [
			[a, 40, 60],
			[0, 0, 30],
			[0, 0, 9]
		];
		return(d, e, g) => [{
			V: 1,
			ba: Xa,
			ra: b,
			j: [d + 0, e + 1 - 1.5, 1, 1.5],
			ia: 0,
			X: 6,
			ma: 0,
			ha: g(),
			zb: 0,
			ea: 0,
			u: [0, 0],
			Ka: .002,
			fa: 1,
			Ca: 0,
			la: {},
			qa: a,
			N: {},
			Ea: [10, 26]
		}]
	},
	Za = (a, b) => (d, e, g) => {
		d = a(d, e, g, b);
		localStorage.getItem(b) ? d = [] : (d[0].Ab = b, d[0].ha = b);
		return d
	},
	D = (a, b, d, e) => {
		let g = d % 2 ? [11, 12] : [13, 14];
		return(f, l, m, n) => {
			n = n ? 30 : -30; {
				var k = 32 * a;
				var p = 32 * b;
				let u = d % 2,
					x = p > k ? 0 : $a;
				k = {
					xa: k,
					wa: p,
					va: [
						[
							[-k / 2, 0, k, p, 1, x],
							[-k / 2, 0, k - 2, p - 2, 0, x],
							[2 - k / 2, 2, k - 2, p - 2, 2, x],
							[2 - k / 2, 2, k - 4, p - 4, 1, x]
						],
						[
							[0, 0, -8, -4, -8, 4, 3, 4]
						]
					],
					ya: [{
						J: 0,
						na: [{
							J: 1,
							K: [{
								i: 1,
								w: u ? 0 : k / 2 - 4,
								G: u ? p - 4 : p / 2
							}, {
								i: 2,
								I: u ? 1.57 : 0
							}]
						}, {
							J: 1,
							K: [{
								i: 1,
								w: u ? 0 : -k / 2 + 4,
								G: u ? 4 : p / 2
							}, {
								i: 2,
								I: u ? -1.6 : 3.1
							}]
						}]
					}]
				}
			}
			return [{
				V: 9,
				ba: k,
				ra: [
					[e, 60, 60],
					[e, 40, 50],
					[e, 60, 40],
					[e, 40, 50 - n],
					[e, 40, 50 + n]
				],
				qa: e,
				j: [f, l, a, b],
				ia: -1,
				X: 0,
				ma: 0,
				ha: m(),
				u: [0, 0],
				Ka: .0028,
				la: {},
				N: {},
				Ea: [...g, 10],
				Xa: 1,
				direction: d
			}]
		}
	},
	bb = (a, b, d) => [{
		ba: Oa,
		ra: ab,
		V: 0,
		j: [a + .2, b + 1 - .8, .6, .8],
		X: 4,
		ia: 9435151,
		Jb: 41,
		ma: 1,
		fa: 1,
		Ca: 0,
		ha: d(),
		ga: 1,
		u: [0, 0],
		Ka: .006,
		Xa: 1,
		la: {},
		N: {},
		Wa: [],
		ka: 11,
		Ia: 12
	}],
	J = (a, [b, d, e], g = 1) => {
		let f = [
				[b, d, e + 9],
				[b, d - 9, e],
				[b, d, e - 9],
				[b, d, e - 19],
				[0, 0, 99]
			],
			l = cb(32 * a, g);
		return(m, n, k) => [{
			ha: k(),
			ba: l,
			ra: f,
			V: 8,
			X: 0,
			ia: -1,
			j: [m, n, a, 1],
			Ka: 0,
			N: {},
			ka: 0,
			Ia: 3,
			la: {},
			ma: 0,
			Wa: [],
			u: [0, 0],
			tb: 1,
			Ob: g
		}]
	},
	eb = () => {
		let a = [
			[289, 30, 60],
			[289, 40, 50],
			[0, 0, 30],
			[289, 30, 30],
			[0, 0, 99]
		];
		return(b, d, e) => [{
			ba: db,
			tb: 1,
			Ka: 0,
			j: [b + 0, d + 1 - .75, 1, .75],
			X: 6,
			ia: 0,
			ma: 0,
			N: {},
			ha: e(),
			la: {},
			V: 6,
			Ia: 1,
			ra: a,
			u: [0, 0],
			Ua: 1,
			Ya: 0,
			Wa: [],
			qa: 289,
			Ra: [24],
			Ea: [24, 16, 17, 22, 23]
		}]
	},
	gb = (a, b) => {
		let d = [
			[b, 50, 50],
			[b, 50, 40],
			[b, 50, 20],
			[b, 0, 99]
		];
		return(e, g, f) => [{
			V: 1,
			ba: fb,
			ra: d,
			j: [e + (1 - .9) / 2, g + 1 - .9, .9, .9],
			ia: 10680335,
			X: 5,
			ma: 1,
			ha: f(),
			ga: 2,
			u: [0, 0],
			Ka: .002,
			fa: a,
			Ca: 0,
			la: {},
			N: {},
			qa: b,
			ka: 5,
			ea: 0,
			Ea: [11, 12, 13, 14, 20, 27]
		}]
	},
	hb = [15, 35, 40],
	ib = [
		[240, 60, 80],
		[240, 50, 50],
		[120, 20, 20]
	],
	M = [240, 40, 40],
	jb = [
		[199, 5, 20],
		[120, 20, 20]
	],
	kb = [
		[120, 20, 20],
		[0, 30, 20]
	],
	P = [299, 20, 40],
	lb = [
		[299, 20, 30],
		[199, 5, 20]
	],
	mb = [
		[240, 20, 50],
		[299, 20, 30]
	],
	nb = [
		[240, 100, 100],
		[240, 20, 50]
	],
	ob = a => (b, d, e) => a.reduce((g, f) => [...g, ...f(b, d, e)], []),
	rb = () => {
		let a = pb(),
			b = {
				o: Na(hb, 6),
				y: Na(M),
				z: Na(P, 2),
				a: Ua,
				v: a,
				T: qb("\ud83c\udf33", 3),
				O: qb("\u2601\ufe0f", 2),
				U: qb("\u2601\ufe0f", 3),
				m: Ya(60)
			},
			d = [4, 13, 29, 4, 14, 21, 28, 15, 4, 28, 29, 4, 13, 21, 28, 2, 14, 15, 28, 29, 2, 14, 15, 28, 23],
			e = [Ua, Ua, R([29, 4, 13, 15, 28, 4, 14, 20, 28, 29, 4, 13, 15, 28, 20, 28, 29, 2, 14, 15, 28, 2, 14, 23], 145, null, 2), Wa(gb(0, 145)), Wa(gb(1, 217)), R(d, 60, null, 2)],
			g = [
				[, , , W(Object.assign({}, b, {
					C: qb("\ud83c\udff0", 3),
					T: qb("Fin", 2),
					B: R([28, 4, 13, 28, 2, 14, ...d], 60, Qa(null, () => {
						let f = 0;
						return(l, m, n) => e[f++ % e.length](l, m, n)
					}), 2)
				}), "                                                               T                                                                                                        C     B      O O O O OzzzO OO UO U U U U U U U Uzzzzzzz    zzzzzzz", nb)],
				[, , , W(Object.assign({}, b, {
					Z: Na(P, 3, 1, .5),
					F: D(6, 1, 2, 60),
					1: R([6, 14], 60, J(1, P, 3)),
					2: R([6, 13], 60, J(1, P, 3)),
					3: R([, , , , 22], 1, J(1, P, 3)),
					5: R([14, 3, 27, 13, 3, 27], 145, J(1, P, 2)),
					6: R([13, 13, 3, 27, 14, 3, 27], 217, J(1, P, 0)),
					7: R([5, 14], 60, J(1, P, 3)),
					8: R([5, 13], 60, J(1, P, 3))
				}), "zzzzzzz    zzzzzzzz3  7  2  1  8  3zz                zz                zZ                Z5     F          6z                zz                zzzz            zzzz                zz                zzzvvvvzz  zzvvvvzzzzzzzzz    zzzzzzz", mb)],
				[, , , W(Object.assign({}, b, {
					F: D(4, 1, 1, 289),
					1: R([9, 11], 289, J(1, P, 2))
				}), "zzzzzzz    zzzzzzzz    yy          zz     y          zz                z1                zz      F         zz         yy     zz          yy    zz           yy   zz            yy  zz                zz              yyzzzzzzzz       yyzz", lb)],
				[W(Object.assign({}, b, {
					t: R([11, 12, 13, 14], 217),
					B: R([28, 14, 28, 20, 28, 9, 13], 60, Qa(Za(bb, 1)), 2)
				}), "                    O                B         O      yyy   U           ooo         aT  T ooo         ooooooooo         ooooooooo        Foooooooooo       oooooooooooooooooooo    ooooooooooooo      ooooooooooooo  t  oooooooooooooooooo", ib), W(Object.assign({}, b, {
					R: gb(0, 60),
					1: R([1, 3, 13, 1, 5, 14, , , , , , , ], 60, eb()),
					p: D(2, 1, 2, 217),
					M: R([26], 60, J(1, M, 0))
				}), "                           O              a                oo      M     T T  R      ym  Tooooooo      yyoooooooooo    1 yooooooooooooooooooooooooooooooooooooooooooo            ooo     p                yvvvvvvvv     o  yyyyyyyyyyyyyyy", ib), W(Object.assign({}, b, {
					a: R([14], 60, J(1, M)),
					A: D(2, 1, 2, 60),
					1: R([7, 13], 60, J(1, M, 0)),
					b: R([14], 145, J(1, M)),
					B: D(2, 1, 2, 145),
					2: R([7, 13], 145, J(1, M, 0)),
					c: R([14], 1, J(1, M)),
					C: D(2, 1, 2, 1),
					3: R([7, 13], 1, J(1, M, 3))
				}), "               yyy    O          yyy         U     3yy                  T                 oo           yyyyyooc         C yyyyooo           yyyyooob     B    2yyyoooo                 oa A        1yy   oovvvvvvvvvvyyyyy oooooooooooooyy", ib), W(Object.assign({}, b, {
					d: D(1, 5, 1, 60),
					U: R([11, 11, 11, 11, 26], 60, J(2, M)),
					D: R([12, 12, 12, 12], 60, J(1, M, 0)),
					P: Za(D(1, 1, 1, 1), 4),
					h: D(1, 1, 2, 145),
					H: R([14], 145, J(2, M)),
					S: Za(D(2, 1, 1, 217), 3)
				}), "yyyyyyy       yyyyyha ydyI     yyy  y y y yy    yy y                 yPy             Z   yyyyH  U yyyS     yy         yyy   yyym         yyy   yyyyyy            y    y yyyyyyyyyyyyy   D            yyyyyyy           yyyyyyyyy  yyyyyyyy", jb), W(Object.assign({}, b, {
					1: R([3, 0, 12], 289, J(1, M, 3)),
					t: R([1, 0, 23], 289),
					T: R([13, 14, 12, 20], 1)
				}), "yyyyyyyyyyyyyyyyyy             y  1y           t y   yyyyy yyyyyyyyy   yy         yyy    yy         1yy y  yy    yyy         yy    yyyyyy      yy    yyyyyy      yy    yyyyyy      yy    yyyyyyyy    yyT   yyyyyyyy    yyyy  yyyyyyyy    y", jb)],
				[, W(Object.assign({}, b, {
					Y: Na(M, 1, .8, .6),
					0: R([11, 11, 11, , , 12, 12, 12], 60, eb()),
					1: R([12, 12, 12, 11, 11, 11], 145, eb()),
					2: D(2, .5, 0, 145),
					3: D(2, .5, 2, 60),
					4: D(1, 4, 1, 60),
					5: D(1, 4, 3, 145),
					6: ob([R([13, 13, 13, 13, 13, 14, 14, 14, 14, 14, , ], 60, eb()), a]),
					7: ob([R([14, 14, 14, 14, 14, , 13, 13, 13, 13, 13], 145, eb()), a])
				}), "y   yyyyyyyyyyyyyyyy  y  5 5 5 5   yy   yy         1 yy  yy             y   y y 4 4 4 yyyyy   y            yy4  yy           yy   y0           yy  YYYYYYYYYYyy  yy         2      yyy2           3  yy7vvvvvvvvvvvvvv6yyyyyyyyyyyyyyyyyyy", kb), W(Object.assign({}, b, {
					M: R([26], 60, J(2, M)),
					R: Wa(gb(1, 60)),
					d: D(1, 2, 1, 60),
					D: R([11, 6, 27, 12], 60, J(2, M)),
					c: R([1], 60, J(1, M, 2))
				}), "yy  yyyyyyyyyyyyyyyy                yyyyyyyyyyyyyyyyyy       yy       yyyy     y         yy     my   yyy   yy yyM yy    y    yy  yyyyyy   y   yyyy yy       y     y  yc      yy     y yyyyyyyyyyyd  yyy R             yyyyyyyyyyyyyyyyD yy", kb), W(Object.assign({}, b, {
					1: R([, 14], 289, eb()),
					2: R([13], 289, eb()),
					a: D(1, 2, 3, 60),
					A: R([11], 60, J(1, M, 3)),
					3: R([12], 60, J(1, M)),
					b: D(1, 2, 3, 145),
					B: R([11], 145, J(1, M, 3)),
					4: R([12], 145, J(1, M)),
					c: Za(D(1, 2, 3, 217), 9),
					d: Za(D(1, 2, 3, 1), 10),
					R: ob([gb(1, 289), a])
				}), "yyyyyyyy  yyyyyyyy    2c      d1    y yby   yy   yay  y y y        y y yy yyyy4    3yyyy yy y     BA     y yy                yyByyy  yyyy  yyyAy    yy      yy                      yy yvvvvRvvvvvy yyy  yyyyyyyyyyyy  yy3yyyyyyyyyyyyyy4y", kb), W(Object.assign({}, b, {
					a: Wa(gb(0, 60)),
					A: R([13, 27], 60, J(1, M)),
					1: R([27], 60, J(1, M, 2)),
					b: Wa(gb(0, 145)),
					B: R([6, 27], 145, J(1, M)),
					2: R([13], 145, J(1, M, 3)),
					c: Wa(gb(0, 1)),
					C: R([27], 1, J(1, M)),
					3: R([27], 1, J(1, M, 2)),
					Q: R([13], 1, J(1, M, 3)),
					d: Wa(gb(0, 217)),
					D: R([27], 217, J(2, M)),
					4: R([27], 217, J(1, M, 2)),
					$: R([13], 217, J(1, M, 3)),
					e: Za(D(1, 6, 3, 289), 6),
					f: D(1, 1, 3, 289),
					g: Za(D(1, 7, 3, 289), 7),
					E: R([2, 0, 11, , , ], 289, J(2, M)),
					l: Za(D(4, 1, 2, 289), 8),
					k: D(1, 1, 2, 289),
					L: R([6, 14], 289, J(1, M, 3)),
					m: Ya(289),
					M: R([26], 289, J(2, M))
				}), "yyy eyy$2Qyyyg   y  y       y      yl        Ly     ayy1              fyyyy  A         b yyyk     B      yyyyyy4          c  yyyy   yyy    yyyyy  y3            dy  y           yyyyy yyy4       yy  yy        E      myyyM yyyyyyyyyyyyyy", kb)]
			];
		return {
			Ib: (f, l, m) => {
				let n = g[l][f];
				return n && n(f, l, m)
			},
			Xb: 5,
			Wb: 5
		}
	},
	W = (a, b, d = [
		[0, 0, 30]
	]) => {
		let e = (b.length / 18 | 0) + 1,
			g = Na(hb);
		return(f, l, m) => {
			let n = {
				bb: [],
				j: [f, l, 19, e],
				Kb: qa,
				Eb: ia(19, e, () => []),
				Na: [],
				qb: [],
				ub: d
			};
			b.split("").forEach((k, p) => {
				let u = p % 18 + 1,
					x = (p / 18 | 0) + 1;
				(k = a[k]) && k(u, x, m).forEach(q => {
					q.ma && q.ga && (q.j[1] -= 1E-6);
					sb(n, q);
					1 != x || 2 != q.V && 8 != q.V || (q = g(u, 0, m)[0], q.j[1] -= .5, sb(n, q))
				})
			});
			for(let k = 1; 11 > k; k++) {
				let p = localStorage.getItem(k);
				if(p) {
					let [u, x, q] = JSON.parse(p);
					u == f && x == l && sb(n, q)
				}
			}
			return n
		}
	};
let qb = (a, b) => (d, e, g) => [{
	ha: g(),
	X: 6,
	ia: 0,
	text: a,
	V: 13,
	j: [d, e - b + 1, 1, b]
}];
let pb = () => (a, b, d) => {
		d = d(); {
			var e = [];
			let g = 4 * Math.random() | 8;
			for(let f = 0; f <= g; f++) {
				let l = f / g - .5;
				e.push({
					J: 0,
					K: [{
						i: 1,
						w: 32 * (f + (2 * Math.random() - 1)) / g - 16 - 3 * l,
						G: 14
					}, {
						i: 0,
						sa: (Math.random() + 2) / 3,
						ta: (Math.random() + 2.5 - Math.abs(l)) / 2
					}, {
						i: 2,
						I: 3 * (Math.random() - .5) / 9 + 3 * l / 9
					}]
				})
			}
			e = {
				xa: 32,
				wa: 8,
				va: [
					[
						[0, -12, 4, 0, -4, 0, 0, 1]
					]
				],
				ya: e
			}
		}
		return [{
			ha: d,
			ba: e,
			ra: tb,
			V: 7,
			X: 2,
			ia: 2228239,
			j: [a + 0, b + 1 - .25, 1, .25]
		}]
	},
	R = (a, b, d, e = 1) => {
		let g = [
			[b, 99, 70],
			[0, 0, 25],
			[0, 0, 99]
		];
		return(f, l, m) => {
			var n = .5 * e,
				k = .4 * e;
			n = {
				V: 5,
				ba: ub,
				ra: g,
				j: [f + (1 - n) / 2, l + 1 - k, n, k],
				X: 1 < e ? 3 : 1,
				ia: 1 < e ? 268431615 : 61455,
				ma: 1,
				ha: m(),
				ga: e,
				u: [0, 0],
				lb: .4,
				fa: 0,
				Ca: 0,
				Tb: [...a],
				qa: b
			};
			return d ? (f = d(f, l, m), l = f[0], l.N[l.Ia] = n, f) : [n]
		}
	};
let xb = (a, b, d, e, g, f) => {
		if(f) {
			vb(a, b);
			let l = b.Ma - g;
			b.Ma = g;
			B(b.j, b.u, wb(l), b.j)
		}
		b.u[e] += d;
		[...b.Ga, ...b.Fa].forEach(l => !e && xb(a, l, d, e, g, 1));
		f && yb(a, b)
	},
	zb = a => {
		if(a.Ba) {
			let b = a.Ma;
			b ? (B(a.j, a.u, ([d], [e]) => d + Math.min(0, e * b) - 1E-6, a.Ba), B(a.j, a.u, ([, d], [e]) => d + Math.abs(e * b) + 2E-6, a.Ba, 2)) : a.Ba = [...a.j]
		}
	},
	Ab = (a, b, d) => {
		a && b && a.u && b.u && (ea(a.Ga, b), ea(a.Fa, b), d ? (a.Fa.push(b), b.oa = a, b.yb = d) : b.oa == a && (b.oa = null))
	},
	Bb = a => (a.ga || null) && [...a.Fa, ...a.Ga].reduce((b, d) => b + Bb(d), a.ga) || 0,
	wb = a => ([b], [d]) => b + d * a,
	Cb = (a, b, d) => {
		if(b.u && b.Ma > d) {
			vb(a, b);
			let e = b.Ma - d;
			b.Ma = d;
			B(b.j, b.u, wb(e), b.j);
			yb(a, b)
		}
	},
	Db = (a, b, d, e, g, f) => {
		let l = ta[b],
			m = g();
		!a.Sa[l] && m && (null != a.ba.ua[l] ? a.Sa[l] = {
			Nb: n => {
				g() == m && (f(m, n), Z(a, b, d))
			},
			rb: e
		} : (f(m, e), Z(a, b, d)))
	},
	Z = (a, b, d, e) => {
		e ? a.Wa.unshift(b) : (a = d[b]) && a()
	},
	Fb = (a, b, d, e) => {
		let g = new Set;
		Eb(a, b, f => f.forEach(l => {
			!g.has(l.ha) && Ca(e && l.Ba || l.j, b) && (d(l), g.add(l.ha))
		}))
	},
	Eb = (a, b, d) => {
		fa(b, a.j, (e, g) => {
			d(a.Eb[e][g], e, g)
		})
	},
	sb = (a, b, d) => {
		d && B(d, b.j, ([e], [g]) => g + e, b.j);
		a.bb.push(b);
		b.u && a.Na.push(b);
		yb(a, b);
		d && [...b.Fa, ...b.Ga].forEach(e => sb(a, e, d))
	},
	yb = (a, b) => {
		b.pa || (zb(b), Eb(a, b.Ba || b.j, d => d.push(b)))
	},
	Gb = (a, b, d) => {
		ea(a.bb, b);
		(b.u || b.ba) && ea(a.Na, b);
		vb(a, b);
		d && [...b.Fa, ...b.Ga].forEach(e => Gb(a, e, 1))
	},
	vb = (a, b) => {
		Eb(a, b.Ba || b.j, d => {
			ea(d, b)
		})
	};
let Jb = (a, b, d) => {
		let [e, g] = b.fb;
		[...Aa, [0, 0]].forEach(([f, l]) => {
			let m = e + f,
				n = g + l;
			if(0 <= m && m < b.size[0]) {
				var k = b.mb[m][n];
				if(k) {
					f = !f && !l;
					k = Hb(a, b, k, f ? b.Lb : {}, f && d);
					let [p, u] = b.size;
					k.forEach((x, q) => {
						let r = Aa[q],
							v = m + r[0],
							t = n + r[1];
						if(0 <= v && 0 <= t && v < p && t < u) {
							let y = b.mb[v][t];
							y && x.forEach(z => {
								let C = 1;
								Ib(z) && (b.fb = [v, t], 0 >= r[1] && (C = 0));
								let A = B([...r, ...y.j], z.j, ([S, , T], [H, ba], ka) => 0 < S ? C - (ba - .15) - H + 1 - ka : 0 > S ? T - .15 - C - H : 0);
								sb(y, z, A)
							})
						}
					})
				}
			}
		});
		b.Oa += 19
	},
	Ib = a => [...a.Fa, ...a.Ga].reduce((b, d) => b || Ib(d), 0 == a.V),
	Kb = (a, b) => {
		for(; a;)
			if(a = a.oa, a == b) return 1
	},
	Lb = (a, b) => (Kb(a, b) || 0) - (Kb(b, a) || 0) || b.j[1] - a.j[1],
	Hb = (a, b, d, e, g) => {
		d.Na.sort(Lb);
		let f = b.Oa;
		[...d.Na].forEach(q => Mb(q, b, d, e));
		let l = 19;
		for(;;) {
			let q = l,
				r, v, t;
			d.Na.forEach(F => {
				Cb(d, F, l);
				F.u && !F.pa && Fb(d, F.Ba, L => {
					if(L != F && (L != r || F != v)) {
						Cb(d, L, l);
						var K = B(F.u, L.u || [0, 0], ([G], [N]) => G - N);
						let [U, I] = B([...K, ...F.j], L.j, ([G, N, la], [ca, Y]) => {
							if(0 < G) return(ca - (N + la)) / G;
							if(0 > G) return(N - (ca + Y)) / -G
						});
						if(null != U || null != I) {
							let G, N;
							(null == I || U >= I) && 0 <= U ? (G = U, N = 0 < K[0] ? 2 : 0) : (null == U || I > U) && 0 <= I && (G = I, N = 0 < K[1] ? 3 : 1);
							K = F.ia >> 4 * L.X + N & L.ia >> 4 * F.X + (N + 2) % 4 & 1;
							if(null != G && G <= q && K) {
								var X = wb(G);
								K = B(F.j, F.u, X, [...F.j]);
								X = B(L.j, L.u || [0, 0], X, [...L.j]);
								Ba(K, X)[(N + 1) % 2] && (q = G, r = F, v = L, t = N)
							}
						}
					}
				}, 1)
			});
			if(!r) break;
			l -= q;
			vb(d, r);
			vb(d, v);
			let y = v;
			r.La != v && (r.La = null);
			v.La != r && (v.La = null);
			var m = r.ja[(t + 2) % 4] < f && y.ja && y.ja[t] < f;
			let z = [...r.u],
				C = [...y.u || [0, 0]],
				A = t % 2,
				S = (t + 2) % 4;
			var n = (A + 1) % 2,
				k = wb(q);
			B(r.j, z, k, r.j);
			B(v.j, C, k, v.j);
			k = Bb(r);
			let T = Bb(y);
			var p;
			if(r.gb && y.gb) var u = p = 0;
			else p = r.gb, u = y.gb;
			p = T && !p ? k || 1 : 0;
			u = k && !u ? T || 1 : 0;
			r.ja[t] = f + l;
			let H = z[A] - C[A];
			n && r.oa != y.oa && (u && (0 > H && 0 == t || 0 < H && 2 == t || r.oa == v) && Ab(r.oa, r), p && (0 > H && 2 == t || 0 < H && 0 == t || y.oa == r) && Ab(y.oa, y));
			n = Nb(r, v, f + q, t);
			let ba = Nb(v, r, f + q, S),
				ka = Math.max(r.lb || .15, y.lb || .15),
				E = p || u ? (C[A] * u + z[A] * p) / (p + u) : 0;
			n && xb(d, r, (m && (p || u) ? E - u * ka * H / (p + u) : z[A] > C[A] && 2 > t || z[A] < C[A] && 1 < t ? z[A] : 0) - r.u[A], A, l);
			ba && (m = m && (p || u) ? E + p * ka * H / (p + u) : C[A] > z[A] && 1 < t || C[A] < z[A] && 2 > t ? C[A] : 0, y.u && (y.ja[S] = f + l, xb(d, y, m - y.u[A], A, l)));
			n && ba && (3 == t && k && u && Ab(v, r, f), 1 == t && T && p && Ab(r, v, f));
			y.Ma = r.Ma = l;
			yb(d, r);
			yb(d, v)
		}
		d.bb.sort((q, r) => r.X - q.X);
		if(g) {
			let q = a.createLinearGradient(0, 0, 0, d.j[3]);
			d.ub.forEach((r, v) => q.addColorStop(v / Math.max(1, d.ub.length - 1), ma(r)));
			a.fillStyle = q;
			a.fillRect(0, 0, d.j[2], d.j[3]);
			a.save();
			d.qb = d.qb.filter(r => {
				a.fillStyle = ma([r.qa, 99, 80]);
				r.Vb.forEach((v, t) => {
					v.forEach((y, z) => {
						if(0 > y) {
							let C = 1 - Math.abs(f - (r.Fb + 40 * -y)) / 99;
							0 < C && (a.globalAlpha = C / -y, a.fillRect(z - 1, t - 1, 1, 1))
						}
					})
				});
				return r.Fb + 1782 > f
			});
			a.restore()
		}
		let x = [
			[],
			[],
			[],
			[]
		];
		d.bb.forEach(q => {
			q.ja && q.ja[3] + 40 < f && !q.ab && (q.ab = 3);
			q.La && (q.ja[4] = f + 19, Ab(q.La, q, f));
			Cb(d, q, 0);
			var r = B(q.j, d.j, ([v, t], [y, z]) => 1.15 > v + t ? y - 1 : v > z - .15 ? y + 1 : y);
			if((!q.yb || q.yb < f - 40) && q.u && (!aa(r, d.j) || 999 < f - q.pa)) {
				let v = q.pa;
				if(!v) {
					let [t, y] = B(d.j, [...r, ...q.u], ([z], [C, A]) => {
						z = C - z;
						if(0 < z && 0 < A || 0 > z && 0 > A || !z) return z
					});
					r = Aa.findIndex(([z, C]) => z == t && C == y);
					(v = 0 <= r) && x[r].push(q)
				}
				v && Gb(d, q, !q.pa)
			}
			if(g) {
				a.save();
				let [v, t, y] = q.j;
				a.translate(v + y / 2 - 1, t - 1);
				Ob(a, q, f + 19);
				a.restore()
			}
		});
		return x
	},
	Ob = (a, b, d, e = 1, g = 1) => {
		let [, , f, l] = b.j;
		a.save();
		if(b.ba) {
			if(b.eb != b.ab) {
				var m = b.ba.ua && b.ba.ua[b.eb];
				b.Pb = m && m.da || 0;
				b.eb = b.ab;
				b.Hb = d
			}
			m = 1;
			null != b.Ca && (m = 2 * Math.min(1, (d - b.Ca) / 150) - 1, m = 0 < m ? Math.max(.2, m) : Math.min(-.2, m), m = 0 != b.fa ? m : -m);
			let p = f / (b.ba.xa * e),
				u = l / (b.ba.wa * g);
			a.scale(p * m, u);
			if(b.eb && (e = b.ba.ua && b.ba.ua[b.eb])) {
				var n = d - b.Hb;
				var k = b.Pb;
				k < e.da && (n -= k);
				0 <= n ? (k = Math.floor(n / e.da), e.$a ? (g = e.aa.length * e.da, Math.floor(k / e.aa.length) >= e.$a && (k = e.aa.length - 1), n = Math.min(n - k * e.da, g)) : (n -= k * e.da, k %= e.aa.length), n /= e.da, k = e.aa[k]) : (n = 1 - n / k, k = e.aa[e.aa.length - 1])
			}
			b.vb != k && (b.Bb = b.vb, b.vb = k);
			let x = [];
			b.Sa && ja(b.Sa, (q, r) => {
				r = b.ba.ua[r];
				q = (d - q.rb) / r.da;
				let v, t;
				q < r.aa.length ? (v = q | 0, q -= v, t = v - 1) : (v = r.aa.length - 1, q = r.aa.length - q + 1, t = -1);
				x.push({
					jb: r.aa[v],
					cb: q
				});
				0 <= t && x.push({
					jb: r.aa[t],
					cb: 1 - q
				})
			});
			null != k && x.unshift({
				jb: k,
				cb: n
			});
			null != b.Bb && 1 > n && x.unshift({
				jb: b.Bb,
				cb: 1 - n
			});
			oa(a, b.ba, b.ra, (q, r) => {
				(r = b.N && b.N[r.ca]) && Ob(q, r, d, p, u)
			}, x)
		} else if(13 == b.V) n = b.j[3], a.scale(n, n), a.fillText(b.text, 0, 1);
		else {
			n = ua(b.xb);
			g = a.measureText(n).width;
			k = g + .4;
			e = -1.4 - .2 - .2;
			g = -g / 2 - .2;
			m = Math.sqrt(Math.abs(1 - (d - b.Db) / 1998));
			let p = .5 * (b.pa ? 1 - (d - b.pa) / 999 : 1);
			a.scale(p, p);
			a.globalAlpha = m;
			a.beginPath();
			a.moveTo(g + .2, e);
			a.arcTo(g + k, e, g + k, e + .2, .2);
			a.arcTo(g + k, e + 1.4, g + k - .2, e + 1.4, .2);
			a.lineTo(.1, e + 1.4);
			a.lineTo(0, -.2);
			a.lineTo(-.1, e + 1.4);
			a.arcTo(g, e + 1.4, g, e + .2, .2);
			a.arcTo(g, e, g + .2, e, .2);
			a.fillStyle = ma([b.qa, 80, 80]);
			a.fill();
			a.strokeStyle = a.fillStyle = "#333";
			a.stroke();
			a.fillText(n, 0, -.2 - .4)
		}
		a.restore()
	},
	Mb = (a, b, d, e) => {
		let g;
		vb(d, a);
		let f = b.Oa,
			l = a.N && a.N[a.Ia],
			m = l && l.Tb;
		a.nb = 0;
		a.ja = a.ja || [0, 0, 0, 0, 0];
		a.Ba = a.Ba || [0, 0, 0, 0];
		a.Ra = a.Ra || [];
		if(a.Wa && a.Wa.length) {
			let E = a.Wa.pop();
			if(null != E) {
				var n = ra[E].Ub;
				let [, , F, L] = d.j, K = ia(L, F, () => 0), X = [
					[a.j[0] | 0, Math.max(1, a.j[1] | 0), -1]
				];
				for(; X.length;) {
					let [I, G, N] = X.pop();
					if(0 < I && 0 < G && I < F && G < L) {
						var k = K[G][I];
						if(!k || N > k) {
							let la = [I, G, 1, 1];
							(k = d.Eb[I][G].find(ca => .8 < Ca(ca.j, la) && (0 == ca.X || 3 == ca.X))) ? K[G][I] = k.ha: (K[G][I] = N, Aa.forEach(([ca, Y]) => {
								X.push([I + ca, G + Y, N - 1])
							}))
						}
					}
				}
				let U;
				d.Na.forEach(I => {
					let G;
					fa(I.j, d.j, (N, la) => G = G || 0 > K[la][N] || K[la][N] == I.ha);
					G && (U = U || 0 == I.V, !I.Ra || I == a || I.qa && I.qa != (l && l.qa) || I.Ra.unshift(E))
				});
				if(U) {
					k = l && l.qa;
					var p = {
						X: -1,
						ia: 0,
						V: 10,
						qa: k,
						ha: b.ob(),
						j: [...a.j],
						Db: f,
						xb: E,
						ma: 0,
						u: [0, 0]
					};
					sb(d, p);
					n();
					d.qb.push({
						qa: k,
						Vb: K,
						Fb: f
					})
				}
			}
		}
		a.Sa = a.Sa || {};
		ja(a.Sa, (E, F) => {
			let L = a.ba.ua[F],
				K = E.rb + L.da * L.aa.length;
			K < f + 19 && (K >= f && E.Nb(f), K + L.da < f + 19 && delete a.Sa[F])
		});
		a.La = null;
		a.u && (a.Ma = 19, B(a.u, d.Kb, ([E], [F]) => E + F * a.ma * 19, a.u), a.u = a.u.map(E => Math.min(Math.max(E, -.015), .015)));
		let [u, x, q, r] = a.j;
		n = f - a.ja[3];
		p = f - a.ja[4];
		var v = Math.min(n, p);
		k = [0, 0];
		var t = a.fa;
		let y;
		let z;
		a.u && (a.Ga && a.Ga.forEach(E => Ab(E.oa, E)), a.oa && (k = a.oa.u || k), a.Ga = a.Fa || [], a.Fa = []);
		let C = t;
		if(a.la && !a.pa) {
			t = a.la;
			t.za = t.za || {};
			t.Va = t.Va || {};
			let E;
			var A;
			switch(a.V) {
				case 6:
				case 1:
				case 9:
					if((a.zb || 0) <= f) {
						var S = 0;
						var T = a.ea;
						t.za = {};
						t = 1 == a.V && m && T < m.length ? m[T++] : a.Ra && a.Ra.pop();
						null == t && (t = a.Rb);
						if(0 <= t) {
							if(11 > t || 0 <= a.Ea.indexOf(t)) switch(a.Rb = ra[t].Qb ? t : -1, t) {
								case 14:
									var H = 2;
								case 11:
									H || (H = 1);
								case 12:
									H || (H = 3);
								case 13:
									H || (H = 0);
									S = a.j[H % 2];
									var ba = Math.min(1, a.j[H % 2 + 2]);
									H = Math.abs((S + ba / 2 | 0) + Aa[H][H % 2] + (1 - ba) / 2 - S) + xa(a, t, f) - 1;
									S = 19 * ((H / a.Ka / 19 | 0) + 1);
									a.Gb = H / S;
									break;
								default:
									10 > t ? a.hb = 10 * (a.hb || 0) + t : S = xa(a, t, f) * (ra[t].Ta || 1)
							} else a.hb = 0;
							a.zb = f + S;
							a.ea = T
						}
					}
					break;
				case 8:
					T = a.ja[a.Ob] > f - 19 || a.Ua && (a.ea || 0) < m.length, !a.Ua && T && (a.ea = 0), t.za[24] = T ? f : 0
			}
			t = 99 >= v;
			ba = w(a, 13, f);
			let F = w(a, 14, f),
				L = (Bb(a) || 1) < 2 * a.ga,
				K = a.Gb || a.Ka;
			19 > n && (A = 1);
			H = w(a, 11, f);
			v = w(a, 12, f);
			E = w(a, 15, f);
			y = w(a, 19, f);
			let X = w(a, 20, f),
				U = w(a, 21, f),
				I = w(a, 22, f),
				G = w(a, 23, f),
				N = w(a, 24, f);
			var ka = w(a, 27, f);
			let la = w(a, 26, f),
				ca = w(a, 29, f);
			z = w(a, 25, f);
			T = w(a, 16, f);
			S = w(a, 17, f);
			la && Db(a, 26, e, f, () => b.mb[b.fb[0]][b.fb[1]] == d, () => {
				b.mb.forEach((O, da) => O.forEach((Q, ha) => Q && Q.Na.forEach(V => {
					if(V.Ab) {
						let Sa = Object.assign({}, V, {
							j: 0 == V.V ? [a.j[0], a.j[1], V.j[2], V.j[3]] : V.j,
							Ga: [],
							Fa: [],
							oa: null,
							La: null,
							N: {},
							la: {
								za: {},
								Va: {}
							},
							Ca: 0
						});
						localStorage.setItem(V.Ab, JSON.stringify([da, ha, Sa]))
					}
				})));
				localStorage.setItem(0, f);
				b.Mb = f
			});
			m && (T ? (A = 9, za(a, 16, f, 199) && (0 < a.ea ? (a.ea--, Z(a, 16, e)) : ya(a, 16, f) && Z(a, 18, e))) : S ? (A = 9, za(a, 17, f, 199) && (a.ea < m.length ? (a.ea++, Z(a, 17, e)) : ya(a, 17, f) && Z(a, 18, e))) : z ? a.ea < m.length || !a.Za ? (A = 9, a.Za || (a.Ya || (a.Ya = f), a.ea >= m.length && (a.ea = 0), d.Cb = a), a.Za = 1) : ya(a, 25, f) && Z(a, 18, e) : N && (A = 9, a.Ua || (a.Ya = f, a.ea = a.ea % m.length, Z(a, 24, e)), a.Ua = 1));
			z || (a.Za = 0);
			N || (a.Ua = 0);
			E && t && L && (a.u[1] = -.014, a.ja[3] = 0, a.ja[4] = 0, Z(a, 15, e), n = 20);
			H && (19 >= p || !a.ga) && (a.u[1] = a.ga ? -.011 : -K, a.ja[4] = 0, n = 20);
			a.ga || (v ? a.u[1] = K : H || (a.u[1] = 0));
			X && a.N && Db(a, 20, e, f, () => a.N[a.ka], O => {
				O.u = [0, 0];
				delete a.N[a.ka];
				B(a.j, O.j, ([da, Q], [, ha], V) => da + Q * a.fa * (1 - V) + (Q * V - ha) / 2, O.j);
				sb(d, O)
			});
			I && a.N && Db(a, 22, e, f, () => !a.N[a.Ia] && a.N[a.ka], O => {
				a.N[a.Ia] = O;
				a.ea = 0;
				delete a.N[a.ka]
			});
			G && a.N && (p = a.N[a.Ia]) && (p.u = [null != C ? .01 * (C - .5) : 0, -.01], delete a.N[a.Ia], a.Ra = [], B(a.j, p.j, ([O, da], [, Q]) => O + (da - Q) / 2, p.j), p.fa = a.fa, sb(d, p), Z(a, 23, e));
			ca && Db(a, 29, e, f, () => !a.N[a.ka] && a.sb, () => a.N[a.ka] = a.sb(u, x, b.ob)[0]);
			U && Db(a, 21, e, f, () => a.N && a.N[a.ka], O => {
				O.u = [.04 * (2 * C - 1), -.01];
				delete a.N[a.ka];
				B(a.j, O.j, ([da, Q], [, ha]) => da + (Q - ha) / 2, O.j);
				O.fa = a.fa;
				sb(d, O)
			});
			a.N && (p = a.N[a.ka]) && 11 == p.V && (ka && p.pb < f - p.wb && (ka = {
				V: 12,
				ba: Pb,
				ra: Qb,
				j: [u + (a.fa ? q : -.3), x + r / 2 - .1 * Math.random(), .3, .1],
				X: 7,
				ia: 15,
				ma: 0,
				ha: b.ob(),
				ja: [0, 0, 0, 0, 0],
				ga: .1,
				Ba: [0, 0, 0, 0],
				u: [.015 * (2 * a.fa - 1), 0],
				lb: .4,
				fa: a.fa,
				Ca: 0
			}, sb(d, ka), p.pb = f, Z(a, 27, e)), p.pb > f - p.wb && (A = 12));
			a.gb = 19 < n && a.ga;
			let Y;
			if(!v && 0 < a.u[1] && (19 < n || H)) {
				let O = u + q * C;
				let da = 0;
				Fb(d, [O - .15, x - .15, .3, .3], Q => {
					if(1 << Q.X & a.Jb) {
						Q.ia >> 4 * a.X & a.ia >> 4 * Q.X & 15 && da++;
						let [ha, V, Sa] = Q.j;
						(.075 > Math.abs(ha + (C + 1) % 2 * Sa - O) || 6 == Q.X) && .15 > Math.abs(V - x) && (Y = Q)
					}
				});
				if(1 == da && Y) {
					let [Q, ha, V] = Y.j;
					a.u = [(6 == Y.X ? 0 : Q + (C + 1) % 2 * (V + .02) - O - .01) / 19 + k[0], (ha - x - .01) / 19];
					a.La = Y;
					A = 4
				}
			}
			if(a.Xa || t) a.u[0] = (F - ba) * K + k[0], ba ? (!t && a.ga || Y || (A = 2, za(a, 13, f) && Z(a, 13, e)), C = 0) : F && (C = 1, !t && a.ga || Y || (A = 2, za(a, 14, f) && Z(a, 14, e)));
			a.ab = A
		} else if(a.u) {
			if(10 == a.V) {
				a.u = [0, 0];
				if((A = d.Cb) && A.Za) {
					let [E, F] = B(d.Cb.j, a.j, ([L, K], [X, U]) => L - X + (K - U) / 2);
					A = Math.atan2(F, E);
					a.u = [Math.cos(A) * Math.min(.01, Math.abs(E) / 19), Math.sin(A) * Math.min(.01, Math.abs(F) / 19)]
				}
				a.Db + 1998 < f && (Gb(d, a), g = 1)
			}(19 >= n || a.Xa) && 0 < a.u[1] && (a.u[0] = k[0])
		}
		a.fa != C && null != C && null != a.fa && (a.fa = C, a.Ca = f);
		!a.Ua || S || T || (A = f - a.Ya, n = a.ea || 0, (A / 999 | 0) < ((A + 19) / 999 | 0) && (n < m.length ? (Z(a, m[n], e, f), a.ea = n + 1) : a.tb ? a.ea = 0 : (a.Ya = 0, ya(a, 24, f) && Z(a, 18, e))));
		Fb(d, a.j, E => {
			if(y) {
				let F = () => 1 == E.X && a.N && !a.N[a.ka];
				F() && (Db(a, 19, e, f, F, () => {
					E.fa = 0;
					Gb(d, E);
					a.N[a.ka] = E
				}), y = 0)
			}
			12 == a.V && (Gb(d, a), g = 1, Nb(E, a, f, 0));
			a.Za && 10 == E.V && a.ea < m.length && (m[a.ea++] = E.xb, E.pa = f, E.u = [0, 0], Z(a, 25, e))
		});
		a.pa && (a.ab = 10);
		g || yb(d, a)
	},
	Nb = (a, b, d, e) => {
		let g;
		a.ga && (!b.ga || a.ga < b.ga) && (a.nb = a.nb | 1 << e, g = a.nb >> (e + 2) % 4 & 1);
		if(7 == b.V || 12 == b.V && 1 << a.X & 48 || g) a.u = [0, -.015], a.ma = 1, a.pa = d;
		else if(12 == a.V) a.pa = d - 999;
		else return 1
	},
	Rb = (a, b, d, e) => {
		let g = 11;
		let f = () => g++;
		let l, m, n;
		let k = ia(b, d, (u, x) => {
				let q = e && e(u, x, f);
				let r;
				let v = t => {
					t && (0 == t.V && (r = t), ja(t.N, v))
				};
				q && q.Na.forEach(v);
				r && (l = r, m = u, n = x);
				return q
			}),
			p = {
				[15]: Ia(a, .3, .2, "triangle", 499, 699, 399, "sine", 60), [21]: Ia(a, .2, .2, "triangle", 499, 2E3, 599), [16]: Ia(a, .2, .1, "sine", 1440, 2999, 999, "sawtooth", 199), [17]: Ia(a, .2, .1, "sine", 2999, 1440, 2E3, "triangle", 199), [13]: Ja(a, .05, .01, 2E3, .1, .05), [14]: Ja(a, .05, .01, 2E3, .1, .05), [23]: Ia(a, .2, .2, "triangle", 299, 2E3, 699), [20]: Ia(a, .2, .2, "triangle", 199, 2E3, 599), [19]: Ia(a, .2, .2, "triangle", 699, 2E3, 599), [27]: Ja(a, .3, .01, 399, 1, .5), [18]: Ja(a, .1, 0, 1E3, .5, .4), [25]: Ia(a, .3, .2, "triangle", 799, 1E3, 499, "sawtooth", 99), [29]: Ia(a, .2, .2, "triangle", 299, 2E3, 599)
			};
		wa(a, p);
		a = parseInt(localStorage.getItem(0) || 0);
		return {
			fb: [m, n],
			size: [b, d],
			mb: k,
			ob: f,
			Oa: a,
			ib: l,
			Lb: p
		}
	},
	Ma = (a, b, d = 4) => ({
		xa: a,
		wa: b,
		va: [
			[
				[-a / 2, 0, a, b, 1, d],
				[-a / 2, 0, a - 2, b - 2, 0, d],
				[2 - a / 2, 2, a - 2, b - 2, 2, d],
				[2 - a / 2, 2, a - 4, b - 4, 1, d]
			]
		],
		ya: [{
			J: 0
		}]
	}),
	Qb = [
		[60, 99, 80],
		[30, 99, 70],
		[0, 99, 60]
	],
	Pb = {
		xa: 6,
		wa: 2,
		va: [
			[
				[0, 0, 2, 2, 2],
				[2, 0, 2, 2, 1],
				[4, 0, 2, 2, 0]
			]
		],
		ya: [{
			J: 0
		}]
	},
	Ta = [
		[30, 40, 40],
		[30, 50, 30],
		[30, 50, 20]
	],
	Ra = {
		xa: 16,
		wa: 16,
		va: [
			[
				[-7.5, -1.5, 15, 3, 1],
				[-8, -1, 1, 2, 0],
				[-7, -2, 14, 1, 0],
				[7, -1, 1, 2, 2],
				[-7, 1, 14, 1, 2]
			]
		],
		ya: [{
			K: [{
				i: 1,
				w: 0,
				G: 2
			}],
			na: [{
				J: 0,
				K: [{
					i: 1,
					w: 0,
					G: 4
				}]
			}, {
				J: 0,
				K: [{
					i: 1,
					w: 0,
					G: 8
				}]
			}, {
				J: 0,
				K: [{
					i: 1,
					w: -6,
					G: 6
				}, {
					i: 0,
					sa: 1,
					ta: -1
				}, {
					i: 2,
					I: -1.6
				}]
			}, {
				J: 0,
				K: [{
					i: 1,
					w: 6,
					G: 6
				}, {
					i: 0,
					sa: 1,
					ta: -1
				}, {
					i: 2,
					I: -1.6
				}]
			}, {
				J: 0
			}, {
				J: 0,
				K: [{
					i: 1,
					w: 0,
					G: 12
				}]
			}]
		}]
	},
	Va = {
		xa: 24,
		wa: 10,
		va: [
			[
				[-2, 0, 5, 8, 1],
				[7, 2, 5, 8, 1],
				[-12, 0, 4, 4, 0],
				[-12, 1, 22, 2, 0],
				[-5, 0, 15, 4, 0]
			]
		],
		ya: [{
			J: 0
		}]
	},
	Xa = {
		xa: 32,
		wa: 48,
		va: [
			[
				[-16, 0, 32, 48, 0],
				[-16, 2, 32, 44, 0],
				[-13, 4, 26, 36, 1],
				[-5, 12, 10, 10, 2],
				[-10, 30, 5, 10, 2],
				[5, 30, 5, 10, 2],
				[-5, 8, 10, 1, 2],
				[-16, 22, 32, 8, 0]
			],
			[
				[-5, -5, 10, 10, 0, 5],
				[-1, -1, 2, 2, 2, 1]
			],
			[
				[2, -.5, 2, 1, 2, .5]
			]
		],
		ya: [{
			ca: 0,
			J: 0,
			na: [{
				ca: 1,
				J: 1,
				K: [{
					i: 1,
					w: -6,
					G: 13
				}, {
					i: 2,
					I: .5
				}],
				na: [{
					J: 2
				}, {
					J: 2,
					K: [{
						i: 2,
						I: 2
					}]
				}, {
					J: 2,
					K: [{
						i: 2,
						I: 4
					}]
				}]
			}, {
				ca: 2,
				J: 1,
				K: [{
					i: 1,
					w: 6,
					G: 13
				}, {
					i: 2,
					I: .5
				}],
				na: [{
					J: 2
				}, {
					J: 2,
					K: [{
						i: 2,
						I: 2
					}]
				}, {
					J: 2,
					K: [{
						i: 2,
						I: 4
					}]
				}]
			}]
		}],
		kb: [{
			[0]: [{
				i: 2,
				I: -.1,
				Pa: 16,
				Qa: 48
			}, {
				i: 1,
				w: 0,
				G: -3
			}], [1]: [{
				i: 2,
				I: 6
			}], [2]: [{
				i: 2,
				I: 6
			}]
		}, {
			[0]: [{
				i: 2,
				I: .1,
				Pa: 0,
				Qa: 48
			}], [1]: [{
				i: 2,
				I: 9
			}], [2]: [{
				i: 2,
				I: 9
			}]
		}],
		ua: {
			[13]: {
				da: 150,
				aa: [0, 1, 0, 1]
			}
		}
	},
	$a = [0, 0, 10, 10],
	ab = [
		[40, 5, 60],
		[40, 5, 40],
		[120, 40, 30],
		[40, 5, 10],
		[0, 99, 40]
	],
	Pa = [
		[0, 40, 30],
		[0, 40, 20],
		[0, 0, 50],
		[0, 0, 30],
		[0, 99, 40]
	],
	Oa = {
		xa: 22,
		wa: 30,
		va: [
			[
				[0, 0, 20, 26, 0],
				[2, 6, 16, 8, 1],
				[3, 0, 14, 4, 3],
				[3, 0, 3, 4, 4],
				[3, 16, 2, 2, 1],
				[9, 16, 2, 2, 1],
				[15, 16, 2, 2, 1],
				[3, 21, 2, 2, 1],
				[9, 21, 2, 2, 1],
				[15, 21, 2, 2, 1]
			],
			[
				[-8, 0, 8, 26, 1]
			],
			[
				[-2, 0, 4, 2, 3],
				[-3, 2, 8, 2, 3]
			],
			[
				[-2, 0, 4, 8, 3]
			],
			[
				[-.5, -1, 1, 2, 3],
				[-1, -.5, 2, 1, 3]
			],
			[
				[-5, -4, 2, 4, 1],
				[15, -4, 2, 4, 1],
				[-5, -4, 22, 2, 1]
			]
		],
		ya: [{
			ca: 0,
			K: [{
				i: 1,
				w: -6,
				G: 0
			}],
			na: [{
				ca: 3,
				J: 2,
				K: [{
					i: 1,
					w: 0,
					G: 26
				}]
			}, {
				ca: 4,
				J: 2,
				K: [{
					i: 1,
					w: 14,
					G: 26
				}]
			}, {
				ca: 7,
				na: [{
					ca: 1,
					J: 0,
					Sb: [{
						ca: 6,
						J: 3,
						K: [{
							i: 1,
							w: 18,
							G: 8
						}]
					}, {
						ca: 10,
						J: 5
					}],
					na: [{
						J: 4,
						K: [{
							i: 1,
							w: 7,
							G: 10
						}]
					}, {
						J: 4,
						K: [{
							i: 1,
							w: 14,
							G: 10
						}]
					}, {
						ca: 12,
						K: [{
							i: 1,
							w: 10,
							G: 5
						}]
					}]
				}, {
					ca: 2,
					J: 1,
					na: [{
						ca: 5,
						J: 3,
						K: [{
							i: 1,
							w: -5,
							G: 8
						}],
						na: [{
							ca: 11,
							K: [{
								i: 1,
								w: 0,
								G: 6
							}]
						}]
					}]
				}]
			}]
		}],
		kb: [{
			[0]: [{
				i: 1,
				w: -6,
				G: 0
			}, {
				i: 2,
				I: .15
			}], [1]: [{
				i: 0,
				sa: 1.2,
				ta: 1
			}], [2]: [{
				i: 0,
				sa: .6,
				ta: 1
			}], [3]: [{
				i: 1,
				w: 0,
				G: -6
			}, {
				i: 2,
				I: .6
			}], [5]: [{
				i: 2,
				I: -1
			}], [6]: [{
				i: 2,
				I: 1
			}], [10]: [{
				i: 0,
				sa: .8,
				ta: 1
			}, {
				i: 1,
				w: 3,
				G: 0
			}]
		}, {
			[0]: [{
				i: 1,
				w: 6,
				G: 0
			}, {
				i: 2,
				I: -.15
			}], [1]: [{
				i: 0,
				sa: .6,
				ta: 1
			}], [2]: [{
				i: 0,
				sa: 1.2,
				ta: 1
			}], [3]: [{
				i: 1,
				w: -4,
				G: 0
			}], [4]: [{
				i: 1,
				w: -4,
				G: -6
			}, {
				i: 2,
				I: .6
			}], [5]: [{
				i: 2,
				I: 1
			}], [6]: [{
				i: 2,
				I: -1
			}], [10]: [{
				i: 0,
				sa: .7,
				ta: 1
			}]
		}, {
			[3]: [{
				i: 2,
				I: .375
			}], [4]: [{
				i: 2,
				I: -.375
			}], [5]: [{
				i: 2,
				I: 2
			}], [6]: [{
				i: 2,
				I: -2
			}]
		}, {
			[7]: [{
				i: 1,
				w: 0,
				G: -2
			}, {
				i: 0,
				sa: .95,
				ta: 1.1
			}]
		}, {}, {
			[0]: [{
				i: 1,
				w: -6,
				G: 0
			}, {
				i: 2,
				I: -.3
			}], [5]: [{
				i: 2,
				I: .3
			}], [6]: [{
				i: 2,
				I: -1
			}]
		}, {
			[5]: [{
				i: 2,
				I: -1.6
			}], [11]: [{
				i: 2,
				I: 1.6
			}]
		}, {
			[7]: [{
				i: 0,
				sa: 1.1,
				ta: .8
			}, {
				i: 1,
				w: 0,
				G: 10
			}], [5]: [{
				i: 2,
				I: -.8
			}]
		}, {
			[0]: [{
				i: 2,
				I: -.8,
				Pa: 3,
				Qa: 26
			}], [7]: [{
				i: 0,
				sa: 1.2,
				ta: .8
			}, {
				i: 1,
				w: 0,
				G: 10
			}], [5]: [{
				i: 2,
				I: .8 * 3
			}], [4]: [{
				i: 2,
				I: .8
			}]
		}, {
			[0]: [{
				i: 2,
				I: .8,
				Pa: 10,
				Qa: 26
			}], [7]: [{
				i: 0,
				sa: .9,
				ta: 1.2
			}, {
				i: 1,
				w: 0,
				G: -4
			}], [5]: [{
				i: 2,
				I: 3 * 1.6
			}], [4]: [{
				i: 2,
				I: -.8
			}]
		}, {
			[5]: [{
				i: 2,
				I: -1
			}]
		}, {
			[5]: [{
				i: 2,
				I: -.8 * 3
			}, {
				i: 1,
				w: 0,
				G: 4
			}]
		}],
		ua: {
			[2]: {
				da: 299,
				aa: [0, 1]
			}, [3]: {
				da: 399,
				aa: [2],
				$a: 1
			}, [1]: {
				da: 999,
				aa: [3, 4]
			}, [4]: {
				da: 99,
				aa: [5],
				$a: 1
			}, [5]: {
				da: 299,
				aa: [6]
			}, [6]: {
				da: 199,
				aa: [7]
			}, [7]: {
				da: 180,
				aa: [8, 9]
			}, [8]: {
				da: 199,
				aa: [10]
			}, [9]: {
				da: 299,
				aa: [11],
				$a: 1
			}, [10]: {
				da: 99,
				aa: [2]
			}
		}
	},
	cb = (a, b) => {
		var d = 32;
		let e = 1.6 * (b - 1),
			g = a,
			f = d;
		b % 2 || (a = d, d = g);
		let l = b / 2 | 0;
		b = (b + l + 1) % 2;
		let m = [0, 0, 4, 4],
			n = d - 6,
			k = [4, 4],
			p = [];
		let u = a / 16;
		let x = (a - 4 * u) / (u + 1);
		let q = 0;
		for(; u--;) q += x, p.push([q, -2, 4, 2, 2]), q += 4;
		return {
			xa: g,
			wa: f,
			va: [
				[...p, [0, 0, a, n, 1, m],
					[2 * b, 2 * l, a - 2, n - 2, 0, m],
					[(b + 1) % 2 * 2, (l + 1) % 2 * 2, a - 2, n - 2, 2, m],
					[2, 1, a - 4, n - 2 - 1, 1, m]
				],
				[
					[0, 0, a, 6, 1, k],
					[2 * b, 2 * l, a - 2, 4, 0, k],
					[(b + 1) % 2 * 2, (l + 1) % 2 * 2, a - 2, 4, 2, k],
					[2, 2, a - 4, 3, 1, k]
				],
				[
					[-7, 0, 14, 9, 3],
					[-3, 4, 1, 1, 4],
					[3, 4, 1, 1, 4]
				]
			],
			ya: [{
				ca: 0,
				J: 0,
				K: [{
					i: 2,
					I: e,
					Pa: 0,
					Qa: d / 2
				}, {
					i: 1,
					w: -a / 2,
					G: 6
				}]
			}, {
				ca: 1,
				J: 1,
				K: [{
					i: 2,
					I: e,
					Pa: 0,
					Qa: d / 2
				}, {
					i: 1,
					w: -a / 2,
					G: -2
				}]
			}, {
				ca: 3,
				J: 2,
				K: [{
					i: 1,
					w: 16 - a / 2,
					G: 10
				}]
			}],
			kb: [{
				[1]: [{
					i: 1,
					w: 0,
					G: 2
				}]
			}],
			ua: {
				[9]: {
					da: 99,
					aa: [0],
					$a: 1
				}
			}
		}
	},
	db = {
		xa: 32,
		wa: 24,
		va: [
			[
				[-16, -12, 32, 24, 1, 5],
				[-15, -11, 30, 22, 0, 4],
				[1.5, -6.5, 12, 12, 1, 6],
				[2, -6, 12, 12, 2, 6],
				[-13.5, -6, 13, 8, 3],
				[-5, -3, 2, 2, 4, 1],
				[-11, -3, 2, 2, 4, 1]
			]
		],
		ya: [{
			J: 0,
			K: [{
				i: 1,
				w: 0,
				G: 12
			}]
		}, {
			ca: 1,
			K: [{
				i: 1,
				w: -7.5,
				G: 5.5
			}]
		}]
	},
	fb = {
		xa: 32,
		wa: 32,
		va: [
			[
				[-12, -28, 32, 16, 0],
				[-12, -28, 16, 28, 0]
			],
			[
				[-9, -10, 18, 12, 1],
				[-7, -8, 14, 8, 2]
			],
			[
				[-1, -.5, 2, 1, 3],
				[-.5, -1, 1, 2, 3]
			],
			[
				[-2, -3, 4, 6, 2]
			],
			[
				[-2, 0, 4, 6, 2]
			]
		],
		ya: [{
			K: [{
				i: 1,
				w: -10,
				G: 0
			}],
			na: [{
				ca: 3,
				J: 4,
				K: [{
					i: 1,
					w: -4,
					G: 26
				}]
			}, {
				ca: 4,
				J: 4,
				K: [{
					i: 1,
					w: 4,
					G: 26
				}]
			}, {
				ca: 1,
				J: 0,
				K: [{
					i: 1,
					w: 4,
					G: 28
				}],
				na: [{
					ca: 5,
					J: 3,
					K: [{
						i: 1,
						w: 18,
						G: -10
					}]
				}, {
					J: 3,
					K: [{
						i: 1,
						w: 8,
						G: -10
					}]
				}, {
					ca: 2,
					J: 1,
					K: [{
						i: 1,
						w: 15,
						G: -12
					}],
					na: [{
						J: 2,
						K: [{
							i: 1,
							w: 3,
							G: -4
						}]
					}, {
						J: 2,
						K: [{
							i: 1,
							w: -3,
							G: -4
						}]
					}]
				}]
			}]
		}],
		kb: [{
			[1]: [{
				i: 2,
				I: -.15
			}], [3]: [{
				i: 1,
				w: 0,
				G: -3
			}], [2]: [{
				i: 2,
				I: .15
			}]
		}, {
			[1]: [{
				i: 2,
				I: .15
			}], [4]: [{
				i: 1,
				w: 0,
				G: -3
			}], [2]: [{
				i: 2,
				I: -.15
			}]
		}, {
			[1]: [{
				i: 2,
				I: -.375
			}]
		}],
		ua: {
			[2]: {
				da: 299,
				aa: [0, 1]
			}, [12]: {
				da: 199,
				aa: [2]
			}
		}
	},
	tb = [
		[0, 0, 99],
		[0, 0, 40]
	],
	ub = {
		xa: 18,
		wa: 12,
		va: [
			[
				[-9, -6, 18, 12, 1, [2, 2]],
				[-8, -5, 16, 8, 0],
				[-6, -3, 12, 4, 1, 2]
			],
			[
				[-1, -1, 2, 2, 2, 1]
			]
		],
		ya: [{
			J: 0,
			K: [{
				i: 1,
				w: 0,
				G: 6
			}],
			na: [{
				J: 1,
				K: [{
					i: 1,
					w: -4,
					G: -1
				}]
			}, {
				J: 1,
				K: [{
					i: 1,
					w: 4,
					G: -1
				}]
			}]
		}]
	};
onload = () => {
	let a = new AudioContext,
		{
			Ib: b,
			Wb: d,
			Xb: e
		} = rb();
	let g;
	g = Rb(a, e, d, b);
	let f, l, m, n;
	let k = [c, o],
		p = () => {
			l = (innerWidth / innerHeight < 18 / 13 ? innerWidth / 18 : innerHeight / 13) | 0;
			m = 18 * l;
			n = 13 * l;
			c.width = m;
			c.height = n;
			f = c.getContext("2d");
			f.textAlign = "center";
			f.font = "1px fantasy";
			f.lineWidth = 1 / l;
			k.forEach(v => v.setAttribute("style", `width:${m}px;height:${n}px`))
		};
	onresize = p;
	p();
	let u = {};
	onkeydown = v => {
		a.resume();
		u[v.keyCode] = u[v.keyCode] ? u[v.keyCode] : g.Oa
	};
	onkeyup = v => {
		u[v.keyCode] = 0
	};
	let x, q = 0;
	let r = v => {
		let t = Math.min((v || 0) - (x || 0), 57) + q;
		var y = g.ib.la;
		y.za = {};
		for(let z in sa) {
			let C = sa[z];
			y.za[C] = Math.max(y.za[C] || 0, u[z] || 0)
		}
		for(; !(19 > t);) t -= 19, y = 19 > t, f.save(), f.scale(l, l), Jb(f, g, y), f.restore();
		q = t;
		g.ib.pa && w(g.ib, 15, g.Oa) && (g = Rb(a, e, d, b)); {
			let z;
			g.ib.pa ? z = "Space to Retry" : g.Mb > g.Oa - 2999 && (z = "Saved");
			z && (o.innerText = z);
			o.style.opacity = z ? 1 : 0
		}
		requestAnimationFrame(r);
		x = v
	};
	r()
};
