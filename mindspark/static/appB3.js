(function() {
	function A(a, b) {
		for (var c = Object.keys(a), d = 0; d < c.length; d++) {
			var f = c[d];
			b[f] || (b[f] = a[f])
		}
	}

	function Ca() {
		this.$ = function(a) {
			for (var b = 0; 24 > b; b++) this[String.fromCharCode(97 + b)] = a[b] || 0;
			.01 > this.c && (this.c = .01);
			a = this.b + this.c + this.e;
			.18 > a && (a = .18 / a, this.b *= a, this.c *= a, this.e *= a)
		}
	}

	function Da(a, b, c) {
		X.$.$(a);
		var d = X.gb();
		a = new Uint8Array(4 * ((d + 1) / 2 | 0) + 44);
		d = 2 * X.fb(new Uint16Array(a.buffer, 44), d);
		var f = new Uint32Array(a.buffer, 0, 44);
		f[0] = 1179011410;
		f[1] = d + 36;
		f[2] = 1163280727;
		f[3] = 544501094;
		f[4] = 16;
		f[5] = 65537;
		f[6] = 44100;
		f[7] = 88200;
		f[8] = 1048578;
		f[9] = 1635017060;
		f[10] = d;
		d += 44;
		f = 0;
		for (var h = "data:audio/wav;base64,"; f < d; f += 3) {
			var q = a[f] << 16 | a[f + 1] << 8 | a[f + 2];
			h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [q >> 18] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [q >> 12 & 63] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [q >> 6 & 63] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [q & 63]
		}
		b && b.decodeAudioData(a.buffer, c);
		return h
	}

	function Ea(a) {
		for (var b = [], c = [], d = [], f = 0, h = 0; h < a.length; h += 2) {
			var q = parseInt(a[h] + a[h + 1], 16);
			if (2 == q) {
				f = h + 2;
				break
			}
			if (1 == q) b.push(JSON.parse(JSON.stringify(d))), c = d;
			else {
				var e = c.indexOf(q); - 1 == e ? d.push(q) : (e = d.indexOf(q), d.splice(e, 1))
			}
		}
		b.push(d);
		c = [];
		d = [];
		var g = [];
		for (h = f; h < a.length; h += 2) q = parseInt(a[h] + a[h + 1], 16), 1 == q ? (g.push(JSON.parse(JSON.stringify(d))), c = d) : (e = c.indexOf(q), -1 == e ? d.push(q) : (e = d.indexOf(q), d.splice(e, 1)));
		g.push(d);
		for (h = 0; h < b.length; h++)
			for (a = 0; a < b[h].length; a++) q = b[h][a],
				c = q & 15, q >>= 4, b[h][a] = [c, q];
		for (h = 0; h < g.length; h++)
			for (a = 0; a < g[h].length; a++) q = g[h][a], c = q & 15, q >>= 4, b[h].push([c, q, 1]);
		return b
	}

	function R(a) {
		return {
			x: a[0],
			y: a[1],
			visible: !0,
			update: function() {},
			N: function() {}
		}
	}

	function S(a) {
		var b = R(a);
		a = {
			O: b.x,
			sa: b.y,
			id: (~~(1E7 * Math.random())).toString(16),
			frame: [],
			type: "sprite",
			animation: y[a[2]],
			color: a[3],
			V: 0,
			A: 4,
			orientation: 1,
			na: function() {},
			Ia: function(a) {
				this.V += 22 * a;
				this.V >= this.animation.length && (this.V = 0, this.na());
				this.frame = this.animation[~~this.V]
			},
			U: function() {},
			update: function(a) {
				this.U(a);
				this.Ia(a)
			},
			Ra: function() {
				for (var a = 0; a < this.frame.length; a++) {
					var b = this.frame[a];
					e.fillStyle = this.color;
					1 == this.orientation ? e.fillRect(b[0] * this.A, b[1] * this.A, this.A, this.A) : e.fillRect(14 * this.A - b[0] * this.A, b[1] * this.A, this.A, this.A)
				}
			},
			N: function() {
				e.save();
				e.translate(this.x, this.y);
				e.fillStyle = this.color;
				this.Ra();
				e.restore()
			},
			C: function(a) {
				this.animation = y[a]
			}
		};
		A(b, a);
		return a
	}

	function Fa(a) {
		var b = S(a);
		a = {
			type: "character",
			oa: !1,
			F: 30,
			pa: F[a[2]],
			qa: [],
			J: 2,
			Z: 1,
			update: function(a) {
				this.U(a);
				this.Ia(a);
				this.qa = this.pa[~~this.V];
				this.Fa()
			},
			Fa: function() {
				for (var a = 0; a < this.qa.length; a++) {
					var b = this.qa[a];
					1 == this.orientation ? G(this.x + b[0] * this.A, this.y + b[1] * this.A, this.id, this.J) : G(this.x + 14 * this.A - b[0] * this.A, this.y + b[1] * this.A, this.id, this.J)
				}
			}
		};
		A(b, a);
		return a
	}

	function pa(a) {
		var b = S([a[0], a[1], 30]);
		b.frame = b.animation[a[2]];
		b.A = 1;
		b.color = "#9bbc0f";
		b.type = "pickable";
		b.oa = !1;
		b.pa = F[30];
		b.qa = b.pa[a[2]];
		b.J = 3;
		a = {
			Ia: function() {},
			Fa: function() {
				G(this.x, this.y, this.id, this.J);
				G(this.x + 4, this.y +
					4, this.id, this.J);
				G(this.x + 8, this.y - 4, this.id, this.J);
				G(this.x + 12, this.y + 4, this.id, this.J);
				G(this.x + 16, this.y - 4, this.id, this.J)
			},
			update: function() {
				this.Fa()
			}
		};
		A(b, a);
		return a
	}

	function H(a) {
		a = pa([a[0], a[1], 6]);
		var b = {
			Pa: function(a) {
				a.ob(15);
				B(Y)
			}
		};
		A(a, b);
		return b
	}

	function qa(a) {
		a = pa([a[0], a[1], 7]);
		var b = {
			Pa: function() {
				B(Y);
				g.mb()
			}
		};
		A(a, b);
		return b
	}

	function ra(a) {
		a = Fa(a);
		var b = {
			speed: 0,
			wa: 0,
			va: 0,
			status: sa[0],
			D: 0,
			locked: !1,
			da: 0,
			ka: 0,
			M: 0,
			Ab: 0,
			S: 0,
			aa: 0,
			Ya: 0,
			ra: 0,
			Da: 0,
			orientation: 1,
			bb: !1,
			Ra: function() {
				if (0 >
					this.F) {
					var a = ~~(100 * this.da);
					if (a < this.Da) {
						this.Da = .8 * a;
						return
					}
				}
				for (a = 0; a < this.frame.length; a++) {
					var b = this.frame[a];
					e.fillStyle = this.color;
					1 == this.orientation ? (e.fillRect(b[0] * this.A, b[1] * this.A, this.A, this.A), ta(this.x + b[0] * this.A, this.y + b[1] * this.A, this.id, this.Z)) : (e.fillRect(14 * this.A - b[0] * this.A, b[1] * this.A, this.A, this.A), ta(this.x + 14 * this.A - b[0] * this.A, this.y + b[1] * this.A, this.id, this.Z))
				}
			},
			U: function(a) {
				if (this.locked && (this.da -= a, 0 > this.da))
					if (this.locked = !1, this.speed = this.M = this.ka = 0, 0 >
						this.F) {
						this.da = .8;
						this.locked = !0;
						this.Da = 50;
						if (this.bb) return T == this && L.Y(""), this.ea ? g.nb(this) : g.sb(this);
						this.bb = !0
					} else this.na();
				this.M && (this.speed = this.M += this.ka * a);
				120 != this.y && (this.S += 2500 * a, this.sa += this.S * a, this.y = ~~(this.sa / this.A) * this.A, 120 <= this.y && (this.y = 120, this.S = 0, 18 != this.D ? this.L > M[0] ? this.C(6) : this.C(12) : (this.speed = this.M = this.ka = 0, this.Z = this.Z ^ 3, this.J = this.J ^ 3, this.C(20, !0, 1))));
				if (this.speed) {
					this.O += this.speed * a;
					a = g.H[0] - 10;
					var b = g.H[1] - 40;
					this.O < a ? this.O = a : this.O >
						b && (this.O = b);
					this.x = ~~(this.O / this.A) * this.A
				} else 5 == this.D ? this.C(0) : 6 === this.D && this.C(7), this.L = 0
			},
			ua: function() {
				this.locked || 120 != this.y || (this.C(10), this.S -= 650, this.y -= this.A, B(Ga))
			},
			Ta: function(a, b) {
				if (this.locked) return !0;
				var c = ~~(3 * Math.random());
				return this.L === M[1] ? (this.M = aa[this.orientation] * M[1] * .8, this.ka = .1 * -this.M, 120 != this.y ? (this.C(14, !0), this.aa = U[5]) : (this.C(a, !0), this.aa = U[b]), B(P[c]), !0) : 120 != this.y ? (this.C(13, !0), B(P[c]), this.aa = U[4], !0) : !1
			},
			Ba: function() {
				this.Ta(9, 2) || 3 ===
					this.D || 4 === this.D || 0 !== this.D && 5 !== this.D || (this.C(ua[this.va]), this.va++, this.speed = 0, this.aa = U[1], this.va === ua.length && (this.va = 0), B(P[~~(3 * Math.random())]))
			},
			ab: function() {
				this.Ta(8, 2) || 1 === this.D || 2 === this.D || 0 !== this.D && 5 !== this.D || (this.C(va[this.wa]), this.wa++, this.speed = 0, this.aa = U[0], B(P[~~(3 * Math.random())]), this.wa === va.length && (this.wa = 0))
			},
			move: function(a) {
				this.locked || (5 !== this.D && 6 != this.D && 7 != this.D && 120 == this.y && this.C(5), this.L = 0 != this.L ? this.L : M[0], void 0 == a ? a = this.orientation :
					a != this.orientation && (this.L = M[0], 5 !== this.D && this.C(5)), this.speed = aa[a] * this.L)
			},
			ha: function() {
				this.C(6);
				this.L = M[1]
			},
			ja: function() {
				this.orientation ^= 1
			},
			C: function(a, b, f) {
				this.D = a;
				this.status = sa[a];
				this.animation = y[this.status.B];
				this.pa = F[this.status.B];
				this.V = 0;
				b && (this.da = f || this.animation.length / 20, this.locked = !0)
			},
			na: function() {
				this.status.loop || this.locked || (this.oa = !1, this.C(this.status.end))
			},
			ub: function(a, b, f) {
				if (this.oa || this.locked || 18 === this.D) return !1;
				this.oa = !0;
				if (this.ea && (a -= m.ma,
						0 >= a)) return;
				var c = (b - this.y) / this.A;
				b = !1;
				var d = 0,
					e = 1;
				if (6 >= c) {
					c = 15;
					var g = 2
				} else 11 >= c ? (c = 16, g = 1) : (c = 17, g = .6, b = !0, d = 100, e = .5);
				B(Ha[~~(3 * Math.random())]);
				350 > +new Date - this.Ya ? (this.ra++, g += .1 * this.ra, 3 < this.ra && 2 < g * a && (b = !0, d = 200)) : this.ra = 0;
				4 < g * a && (d = 100, b = !0, e = 2);
				this.Ya = +new Date;
				this.F -= g * a;
				0 > this.F && (b = !0, d = 300);
				120 != this.y && (d = -200);
				b ? (this.M = -aa[f] * M[1] * e, this.ka = 2 * -this.M, this.S -= 200 + d, this.y -= this.A, this.C(18, !0, 1), this.Z = this.Z ^ 3, this.J = this.J ^ 3) : (this.speed = 0, this.C(c, !0));
				this.ea || (L.Y(this.id),
					L.color = this.color, T = this);
				return !0
			},
			W: function(a, b) {
				var c = this.x > a.x ? 1 : 0,
					d = this.aa;
				this.ea && (d += m.W);
				return a.ub(d || 2, b, c)
			},
			rb: function(a) {
				a.Pa(this);
				g.remove(a)
			},
			ob: function(a) {
				this.F += a;
				this.ea && this.F > m.R && (this.F = m.R)
			},
			tb: function() {
				this.ea && (this.F = m.R)
			}
		};
		A(a, b);
		return b
	}

	function wa(a) {
		for (var b = [], c = 0; c < a.length; c++) b.push("abcdefghijklmnopqrstuvwxyz0123456789!?# :,.\u2019+()><".indexOf(a[c]));
		return b
	}

	function n(a) {
		var b = R(a),
			c = wa(a[2]);
		return {
			x: b.x,
			y: b.y,
			visible: !0,
			color: "#ddfed9",
			size: 1,
			update: b.update,
			Y: function(a) {
				c = wa(a)
			},
			N: function() {
				e.fillStyle = this.color;
				for (var a = 0; a < c.length; a++) {
					e.save();
					e.translate(~~this.x + 7 * a * this.size, ~~this.y);
					for (var b = this.size, h = y[0][c[a]], g = 0; g < h.length; g++) {
						var k = h[g];
						e.fillRect(k[0] * b, k[1] * b, b, b)
					}
					e.restore()
				}
			}
		}
	}

	function Ia(a) {
		var b = S([a[0], a[1], 30]);
		b.frame = b.animation[a[2]];
		b.color = "#ddfed9";
		b.A = 2;
		a = {
			update: function() {}
		};
		A(b, a);
		return a
	}

	function xa(a, b) {
		for (var c = [], d = 0; d < b; d++) {
			var f = a.slice();
			f[5] = .05 * (d - b / 2) + a[5];
			c.push(ia(f))
		}
		return c
	}

	function G(a,
		b, c, d) {
		a = a + "-" + b;
		C[a] || (C[a] = []);
		C[a][0] = [c, d]
	}

	function ta(a, b, c, d) {
		var f = a + "-" + b;
		if (C[f])
			for (C[f].push([c, d]), c = C[f][0], d = 1; d < C[f].length; d++) {
				var h = C[f][d];
				if (0 != (c[1] & h[1]) && c[0] != h[0]) {
					h = ja[h[0]];
					var e = ja[c[0]];
					if ("pickable" === e.type) return h.rb(e);
					if (!e.W(h, b)) break;
					t.id === h.id && Ja("#60004b");
					h = S([a - 8, b - 8, 29, "#fff"]);
					h.A = 2;
					h.orientation = 0;
					h.na = function() {
						g.remove(this)
					};
					g.add(h)
				}
			}
	}

	function Ja(a) {
		I = [.02, a, 0, 1];
		ka = a
	}

	function ya(a) {
		return {
			G: a[0],
			update: function() {}
		}
	}

	function Ka(a) {
		function b(a) {
			return Math.abs(a.x -
				t.x)
		}

		function c(a) {
			var c = b(a);
			if (24 < c && 300 > c) {
				var d = 0 > a.x - t.x ? 1 : 0;
				a.orientation != d && a.ja();
				a.move(d)
			}
			return 24 <= c
		}

		function d(a) {
			a.ab();
			return !0
		}

		function f(a) {
			a.Ba();
			return !0
		}

		function h(a) {
			var c = b(a);
			if (270 < c) return !1;
			a.T || a.ha();
			a.T = !0;
			a.move();
			return 60 < c
		}

		function e(a) {
			var c = b(a);
			if (270 < c) return !1;
			a.T || a.ha();
			a.T = !0;
			a.move();
			return 70 > c && 100 < t.L ? (a.ua(), !1) : 60 < c
		}

		function k(a) {
			return a.T = !1
		}

		function n(a) {
			var c = b(a);
			10 < c && 120 > c && a.move((0 > a.x - t.x ? 1 : 0) ^ 1);
			return !0
		}

		function m() {
			return !0
		}

		function p(a) {
			var c =
				b(a);
			a.orientation != (0 > a.x - t.x ? 1 : 0) && a.ja();
			if (60 > c && 100 < t.L) return a.ua(), !1;
			40 > c && a.Ba();
			return !0
		}
		var v = {
			id: Math.random().toString(16),
			time: 0,
			ta: 100,
			Xa: 0,
			za: [],
			Oa: [
				[
					[c, 1.5],
					[m, .1],
					[d, .5],
					[m, .1],
					[n, 1]
				],
				[
					[c, 1.4],
					[m, .1],
					[f, 1],
					[m, .2],
					[n, .5]
				],
				[
					[c, .2],
					[d, .1],
					[f, .1],
					[m, .3],
					[c, .1],
					[h, 1],
					[d, .3],
					[m, 1],
					[c, .1],
					[d, .5],
					[n, .8],
					[k, .1],
					[m, .5]
				],
				[
					[c, .2],
					[f, .3],
					[m, .4],
					[c, .2],
					[h, .6],
					[c, .1],
					[f, .3],
					[m, .6],
					[c, .1],
					[f, .5],
					[n, 1],
					[k, .1],
					[m, .6]
				],
				[
					[p, 1.5],
					[d, .3],
					[c, .2],
					[m, .2],
					[d, .3],
					[n, .4],
					[m, .3],
					[c, .5]
				],
				[
					[p, 1.7],
					[c, .2],
					[p,
						.5
					],
					[function(a) {
						var c = b(a);
						if (270 < c) return !1;
						a.T || a.ha();
						a.T = !0;
						a.move();
						return 24 < c
					}, 1],
					[m, .1],
					[c, .1],
					[d, 1],
					[c, .1],
					[f, 1],
					[c, .1],
					[n, .5],
					[k, .1],
					[c, .1],
					[d, 1]
				],
				[
					[c, .1],
					[p, .6],
					[function(a) {
						var c = b(a);
						if (270 < c) return !1;
						a.T || a.ha();
						a.T = !0;
						a.move();
						return 70 > c && 100 < t.L ? (a.ua(), !1) : 24 < c
					}, .6],
					[c, .1],
					[p, .6],
					[k, .1],
					[e, .6],
					[d, .6],
					[n, .5],
					[c, .1],
					[f, .8],
					[k, .1]
				],
				[
					[c, .1],
					[e, .6],
					[c, .1],
					[f, 1],
					[k, .1],
					[c, .1],
					[e, 1],
					[c, .1],
					[d, 1],
					[k, .1]
				]
			][a[1] || 0],
			$a: function() {
				this.ta++;
				this.ta >= this.Oa.length && (this.ta = 0);
				this.za = this.Oa[this.ta];
				this.Xa = this.za[1];
				this.time = 0
			},
			update: function(a, b) {
				g.ga ? this.G.speed = 0 : this.G.locked || (this.G.speed = 0, this.time += b, this.time > this.Xa && this.$a(), this.za[0](this.G, b) || this.$a())
			}
		};
		A(ya(a), v);
		return v
	}

	function la() {
		var a = {
			x: 0,
			O: 0,
			active: !0,
			children: [],
			Aa: void 0,
			H: [],
			maxWidth: 320,
			create: function() {},
			add: function(b) {
				a.children.push(b);
				if ("character" === b.type || "pickable" === b.type) ja[b.id] = b
			},
			remove: function(b) {
				b = a.children.indexOf(b); - 1 != b && a.children.splice(b, 1)
			},
			U: function() {},
			update: function(b, c) {
				if (a.active) {
					for (var d =
							0; d < a.children.length; d++) {
						var f = a.children[d];
						f.x + 24 > -this.x && f.x < -this.x + 320 && f.update(c)
					}
					a.U(b, c);
					this.ga ? (this.ga = this.x > -this.Ha && this.x - 320 > -this.H[1]) && --this.x : this.Aa && (this.x = -(this.Aa.x - 150), this.x = ~~this.x, this.x > -this.H[0] ? this.x = -this.H[0] : this.x < -this.H[1] + 320 && (this.x = -this.H[1] + 320))
				}
			},
			Za: function() {},
			N: function() {
				if (a.active) {
					e.save();
					e.translate(this.x, 0);
					for (var b = 0; b < a.children.length; b++) {
						var c = a.children[b];
						c.x + 24 > -this.x && c.x < -this.x + 310 && c.visible && c.N()
					}
					e.restore()
				}
			},
			qb: function(a,
				c) {
				this.ga = !0;
				this.Ha = t.x - 150;
				this.Ha < a && (this.Ha = a);
				this.H[0] = a;
				this.H[1] = c
			}
		};
		return a
	}

	function za(a) {
		var b = (a - Aa) / 1E3;
		Aa = a;
		C = {};
		0 !== I[3] && (I[2] += b, I[2] >= I[0] && (I[3] = 0, ka = "#0c1d05"));
		N.update(a, b);
		e.save();
		e.clearRect(0, 0, 320, 240);
		e.fillStyle = ka;
		e.fillRect(0, 0, 320, 240);
		e.restore();
		N.N();
		requestAnimationFrame(za)
	}
	var La = document.getElementById("c"),
		X = new function() {
			this.$ = new Ca;
			var a, b, c, d, f, e, g, k, m, n, p, t;
			this.Ja = function() {
				var a = this.$;
				d = 100 / (a.f * a.f + .001);
				f = 100 / (a.g * a.g + .001);
				e = 1 - a.h * a.h * a.h * .01;
				g = -a.i * a.i * a.i * 1E-6;
				a.a || (p = .5 - a.n / 2, t = 5E-5 * -a.o);
				k = 1 + a.l * a.l * (0 < a.l ? -.9 : 10);
				m = 0;
				n = 1 == a.m ? 0 : (1 - a.m) * (1 - a.m) * 2E4 + 32
			};
			this.gb = function() {
				this.Ja();
				var d = this.$;
				a = d.b * d.b * 1E5;
				b = d.c * d.c * 1E5;
				c = d.e * d.e * 1E5 + 12;
				return 3 * ((a + b + c) / 3 | 0)
			};
			this.fb = function(h, q) {
				var l = this.$,
					v = 1 != l.s || l.v,
					u = l.v * l.v * .1,
					x = 1 + 3E-4 * l.w,
					w = l.s * l.s * l.s * .1,
					y = 1 + 1E-4 * l.t,
					A = 1 != l.s,
					B = l.x * l.x,
					C = l.g,
					z = l.q || l.r,
					K = l.r * l.r * l.r * .2,
					E = l.q * l.q * (0 > l.q ? -1020 : 1020),
					G = l.p ? ((1 - l.p) * (1 - l.p) * 2E4 | 0) + 32 : 0,
					M = l.d,
					I = l.j / 2,
					O = l.k * l.k * .01,
					F = l.a,
					H = a,
					R = 1 / a,
					T = 1 / b,
					U =
					1 / c;
				l = 5 / (1 + l.u * l.u * 20) * (.01 + w);
				.8 < l && (l = .8);
				l = 1 - l;
				for (var N = !1, Q = 0, ba = 0, ca = 0, S = 0, L = 0, da, ea = 0, D, V = 0, W, P = 0, r, X = 0, Z, Y = 0, ha = Array(1024), fa = Array(32), J = ha.length; J--;) ha[J] = 0;
				for (J = fa.length; J--;) fa[J] = 2 * Math.random() + -1;
				for (J = 0; J < q; J++) {
					if (N) return J;
					G && ++X >= G && (X = 0, this.Ja());
					n && ++m >= n && (n = 0, d *= k);
					e += g;
					d *= e;
					d > f && (d = f, 0 < C && (N = !0));
					D = d;
					0 < I && (Y += O, D *= 1 + Math.sin(Y) * I);
					D |= 0;
					8 > D && (D = 8);
					F || (p += t, 0 > p ? p = 0 : .5 < p && (p = .5));
					if (++ba > H) switch (ba = 0, ++Q) {
						case 1:
							H = b;
							break;
						case 2:
							H = c
					}
					switch (Q) {
						case 0:
							ca = ba * R;
							break;
						case 1:
							ca =
								1 + 2 * (1 - ba * T) * M;
							break;
						case 2:
							ca = 1 - ba * U;
							break;
						case 3:
							ca = 0, N = !0
					}
					z && (E += K, W = E | 0, 0 > W ? W = -W : 1023 < W && (W = 1023));
					v && x && (u *= x, 1E-5 > u ? u = 1E-5 : .1 < u && (u = .1));
					Z = 0;
					for (var aa = 8; aa--;) {
						V++;
						if (V >= D && (V %= D, 3 == F))
							for (da = fa.length; da--;) fa[da] = 2 * Math.random() + -1;
						switch (F) {
							case 0:
								r = V / D < p ? .5 : -.5;
								break;
							case 1:
								r = 1 - V / D * 2;
								break;
							case 2:
								r = V / D;
								r = 6.28318531 * (.5 < r ? r - 1 : r);
								r = 1.27323954 * r + .405284735 * r * r * (0 > r ? 1 : -1);
								r = .225 * ((0 > r ? -1 : 1) * r * r - r) + r;
								break;
							case 3:
								r = fa[Math.abs(32 * V / D | 0)]
						}
						v && (da = ea, w *= y, 0 > w ? w = 0 : .1 < w && (w = .1), A ? (L += (r - ea) * w, L *=
							l) : (ea = r, L = 0), ea += L, S += ea - da, r = S *= 1 - u);
						z && (ha[P % 1024] = r, r += ha[(P - W + 1024) % 1024], P++);
						Z += r
					}
					Z *= .125 * ca * B;
					h[J] = 1 <= Z ? 32767 : -1 >= Z ? -32768 : 32767 * Z | 0
				}
				return q
			}
		};
	var Q = new AudioContext;
	var ma = Q.createDynamicsCompressor();
	var p = Q.createGain();
	p.gain.value = .35;
	ma.connect(p);
	p.connect(Q.destination);
	var ia = function(a) {
		var b = [];
		Da(a, Q, function(a) {
			b.push(a)
		});
		return b
	};
	var B = function(a) {
		if (a[0]) {
			var b = Q.createBufferSource();
			b.context.sampleRate += ~~(500 * Math.random());
			b.buffer = a[0];
			b.start(0);
			b.connect(ma);
			setTimeout(function() {
					b.disconnect(ma)
				},
				1E3 * a[0].duration + 300)
		}
	};
	var x = 0,
		w = {
			zb: 38,
			xb: 40,
			La: 37,
			Na: 39,
			Ma: 83,
			Ka: 68,
			ib: 32,
			hb: 13,
			yb: 27
		},
		v = {},
		K = Object.keys(w);
	for (p = 0; p < K.length; p++) v[w[K[p]]] = 1 << p;
	document.onkeydown = function(a) {
		var b = a.keyCode || a.which;
		v[b] && (x |= v[b], a.preventDefault())
	};
	document.onkeyup = function(a) {
		var b = a.keyCode ? a.keyCode : a.which;
		x & v[b] && (x ^= v[b], a.preventDefault())
	};
	var y = "565758596566696a7576797a8586898a95969798999aa5a6a9aab5b6b9ba01b8b7888755ba98978a01b59a998988877a795501b59a998a897a795501ba88875aaaa99a998a897a796a6901bab9b8b701bab9b8b7aaa99a998a896a69b5875a5501b5877a795a55b8b7585701b8b7a8a79897787768675857bab5aaa9a6a59a9996958a8986857a7976756a6966655a5501a5b9b801bab9b5aaa9a699969586857976756a6966655a55b7a8a797776867585701b8b7aaa99998888779786a695a5901aa9a988a887a786a6968675a5957b9b8b701b9a999897977987868675701b8b75857bab588775a5501b5989755b9b8b7aaa99a01cac9b9b8b7aaa99ab598975501bab5989755cac9b8b79a01b8b79a8887bab5989796958a857a795501a8a79897787768675a55b9b6aaa9a6a59a99898676756a69666501b9b6aaa9a6a59a9996958a8986857a7976756a696665a8a79897888778776867585701a8a7b9b6aaa501bab9b6b5aaa5988878b899897969590199978779776959b7a8a79a958a86857a7501b8b7a8a789867a75bab9b6b5aaa9a6a59996787701bab9b6b5a6a596785857a8a79889867a7675666501a9a79a99958a8986857a76756866bab9b6b5a5978887786a5a59565501bab9b6b5a898978887787767a9a69a9996958a8986857a7976756901a6a596897a796a69655956a8a77877686701aaa99a99867877685a55bab59897967a796a666501a8989796958579767566b7b6aaa6a587775a565501b7b6aaa6a58a77655655a8989796958886856968019695888786856a698a7978775501a8a7989779785a55b9b6aaa9a6a59a999695898685767501b9b6aaa9a6a59a99969589867a777675a8a797785a55018a9896957701b59678776867b9b8b7b6aaa9a6a59a998a89887a79756a66655601b79789887a796a666556b59686787776686701b9b6aaa9a8a7a6a599968678777675b79788876a655958575601b9b6aaa9a8a7a6a5999689867a7978777675696601a6a596956665565501c4b56665565501c4b501847566655655a6a5969501a7978988878685776784756665565501b8b7a69676665857a79789888785776701a999897969a696867666019a8b8a888786857ab8b7585701a79796777667a99a997a796902010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101 2728373846475657596667687677879798a7a9b7b9c7c9d6d9e6e9f5f9010101010101786948685928270101caba86c9b946010101010101c9b946caba860102010101010101010101010101010101 37384748565766676976777886879798a7a9b7bac7cad6d9e6e9f5f901655578694847010178694847655502014d4c4b4a4948474601014d4c4b4a49484746 37384748565766676976777886879798a7a9b7bac7cad6d9e6e9f5f901f4e5d5c6b6a888595849f5e6d6c7b786696657564738370101f5e6d6c7b78669665756473837f4e5d5c6b6a88859584902018d8c7b7a696801018d8c7b7a6968 34354445545556646566677476777886888996979aa6aab6bac6d6e5f501baaa9a978988787776010101baaa9a9789887877760102017e7d7c7b7a797877760101017e7d7c7b7a7978777601 343544455455566465666773757686888996979aa6aab6bac6d6e5f501e67877745746e5baaa9a9789887567010101e5baaa9a9789887567e678777457460102016a695c5b4e4d3e0101016a695c5b4e4d3e01 27283738464756575a666768697677879798a7a9b7bac7cad6dae6eaf5fb010101fae9d97858483929fbeada766656463727010101f6e7d7f5e6d60101f5e6d6f6e7d701010201010101010101010101 4a4b58595a5b6768696a78797a7b8889989aa7abb6bac5c9d4e4f30101fdfcecdcccbb96957c57f3e4d4c9c5bab678680101f9e9d9c9baaaa9a8a6998b68fdfcecdcccbbab9a96957c7b67570101f5f4e5e4d6d5c7c6b8b7f9e9d9c9baaaa7a68b0101f2e3d4c5bab9b6aba79a57f5f4e5e4d6d5c7c6b8b7a9a80101feeeddccbb9695f2e3d4c5bab9b69968570101f9e9d9c9bab7aaa9a8a6a59968feeeddccbbaba79a96950101f2e3d4c5b6a79a7b7667f9e9d9c9baaaa6a5680102010101010101010101010101010101 464756576667686a7577787986878898a8a9b8bac8cbd8dbe7ecf7fd0101020101 5a5b67686a6b7688898a9798a6a7b5b8b9c3c4cad2d8d9e1e7f0f7010101010102797a7b7c7d7e7f0101010101 6a6b797a7b898a999aa8a9b5b6b8bac7cbdbecfd0101f6ede6d7cac9c8b9b7a7a6a596958577767574686564585655544645fdcbc7bab6b5a99a998a897b7a796b6a0101f3f2e7e5e4e2d9d4d3c7c4c3c2b5b3b2edecdbcac8b9b7a8a7a6a59695857776757468656458565554464501010101010101010201010101fffefdfcfbfaf9f8f7ebda0101010101010101 5859686977788687888a96979899a7b7b8b9bac8cbd8dae7eaf6fa01e8d5c9c6aaa89a89676657564a4847463938372928faf6eae7dacbc8bab8a79997968a8669680201 1819262728293537384547484955575867777879888a989aa8a9b7b8c7d7e702 2728363738464756575866677686878889979aa8aab8bac7cad6e6f60101faf4eae7e5dad8cbc8b9b7a79998968a7877696859f6d6cac7aaa89a897667665756474638373628270101cabbaaa9a8897a7667574948cbbab9b79998968a6901020101010101 181926272829353738454748495758677778797a888b989ba8abb7bac6019796958736c6bab7aba89b8b450102017e7d7c7b01 44455455636465677374757682858693969798a6a7a8a9babbc9ca010101010102ccdddeeeef0101010101 45465556656667757677788486879697a6a7a8b7b8c7c9d7d9e7eaf6fa0101020101 595a68696a77787987889798a7b7b8c7c9d8dae7eaf6f90101020101 4b4c595a5b5c68696a7778797b87888a8c8d9697a3a6a7a8b4b6b9c5c9d7d8e601010102010101 455565929596979899a2a6a7aab3b8bac7cbd7dbe6f6025152616272737482838485 b7b8b9bac6c7c8c9cacbccd6d7dadbdce3e4e5e6e7eaf2f4f5f6f7f8fb01010101010101010101010102010101010101010101010101 e2e3e4e5e6e7f0f1f2f3f4f5f6f7f8f9fafbfcfdfeff02 37384748565766676976777886879798a7a9b7bac7cad6d9e6e9f5f902 37384748565766676976777886879798a7a9b7bac7cad6d9e6e9f5f902 37384748565766676976777886879798a7a9b7bac7cad6d9e6e9f5f902 37384748565766676976777886879798a7a9b7bac7cad6d9e6e9f5f902 37384748565766676976777886879798a7a9b7bac7cad6d9e6e9f5f902 37384748565766676976777886879798a7a9b7bac7cad6d9e6e9f5f902 01d6d5cbcac8c7c6c5c4bcbbbab9b8b7b6b5b4acabaaa9a8a7a6a59b9a99989796958f8d8c8b8a89888786857b7a79787776756c6b6a69686766655c5b5a59575655544b4a464501ebeae9e8dad99d9c949384837447443a393635cbcac8bcbbbab7b4acaba6a59b9a98978f8d8c8b8a877b77766a686766655c5b5a59575401f8f3f2e4e3cac9c3c2bab7a6a3a2929187828173726a67664c42343229282423eadad9d6d5c7c4b8b5aaa9a89d9c96958988857875746c6b4b4a47464544360101fae7e2dbd8d785757468544a454419181312f8ebe9e4cac6c5c3c2bab9b7b6a6a3a294938786837a7973726a696766564c423a393534320101faf3e8e3e2dbd8d7c9a7999291858275746855544a452928242319130101f2e7848144181202010101010101010101 01b9b5a8a689857a77746701ebe7dad7d3c4b79b99959388866b645c53474337b9b589857a746701fce2b8b6a9a59d91898578764d3227dad7c4b7a8a69b9995938886776b64534701fcebe7e2d3b8b6a9a59d91898578765c4d433732270101010101010201010101010101010101 12131415161718191a1b1c1d2122232425262728292a2b2c2d2e3132333435363738393a3b3c3d3e4142444d4e5152535455565758595a5b5d5e6162636465666768696a6b6d6e7172737475767778797a7b7d7e8182838485868788898a8b8d8e9192939495969798999a9b9c9d9ea1a2a4a5a6a7a8a9aaabadaeb1b2b5b6b7b8b9babbbcbdbec2c3c4c5c6c7c8c9cacbcccdd1d2d3d4d5d6d7d8d9dadbdcdddee2e4e6e8eaeced01ac4abc998979787701bcb399897877b5aca49301eeebe9e7e5e3e1dfd0cfc0bfb0afa09f908f807f706f605f504f4c43403f302f201e11ddd2cdc2bbbab9b8b7b6abaaa9a89c9b9a9998978b8a8988878685837b7a7877767574736867666564635b57565554534a443e3d32312d2201ddd2cecdc2c19c9b9a999897938c8b8a8988878685837c7b7a797877767574735c5b57565554534b4a4948474645443e3d32312d22eeedecebeae9e8e7e6e5e4e3e2e1bfbebdbcb3b2b1b0afaeada7a6a5a2a1a06f6e6d6b6a696261601e1d1c1b1a19181716151413121101fbfaf9f7f6f5ebeae9e7e6e51b1a19171615dcd8d4ccc8c49c98948c88847c78745c58544c48443c38342c282401ccc8c4bdbcb9b8b7b6b5b3adabaaa9a8a7a6a5a4a39c98948c88847c786d6c6b6a6966656463625c544838fbfaf9f7f6f5ebe9e7e6e5dfdedddad9d3d2d1d0cfcecdcbcac3c2c1c09f9e91908f8d81807f7d7a71705f5e5d595756535251504f4e4d49474645434241403f3e3d3b3a3935333231302f2e2d2b2a29232221201b1a1917161501fefdfbfaf9f8f7f6f5f3f2edebe9e8e7e6e5e3deddd3d2cdcbcac3beb2aea28d7d746e68675e5d5958575653524d474645433e3d3b3533322e2d2b2823221e1d1b181716151312dbd7d6d5ccc4bcb9b8b7b6b5abaaa9a8a7a6a5a4927b79787776756c645c544a4802010101010101bab49e7a745301cec2924e4842bab47a7453".split(" "),
		O = [
			[
				["tank: operator", 2],
				["", .6],
				["neo: tank, i need an exit", 2],
				["", .6],
				["neo: now!", 2],
				["", 1],
				["operator: .", .4],
				["operator: ..", .4],
				["operator: ...", 1],
				["operator: got one ready", 2],
				["", .6],
				["operator: subway station, state and balboa.", 2]
			],
			[
				["...", .2],
				["agent smith: mr. anderson", 2],
				["", .6],
				["agent smith: we meet again", 2],
				["", 2],
				["trinity: run, neo. run! what is he doing?", 3],
				["", .6],
				["morpheus: he\u2019s beginning to believe.", 2]
			],
			[
				["agent smith: i\u2019m going to enjoy...", 1.5],
				["agent smith: watching you die,",
					1.5
				],
				["agent smith: mr. anderson.", 1.5],
				["", .6],
				["neo: my name is..", 1.2],
				["", .6],
				["neo: n", .4],
				["neo: ne", .4],
				["neo: neo", .4],
				["neo: neo!", .2],
				["neo: neo!!", .2],
				["neo: neo!!!", .2],
				["neo: neo!!!!", 1]
			],
			[
				["neo: mr. wizard...", 2],
				["neo: get me the hell out of here.", 3],
				["", .6],
				["tank: got a patch on an old exit...", 2],
				["tank: wabash and lake.", 2]
			],
			[
				["", .6],
				[".", .6],
				["..", .6],
				["...", 1],
				["", 1],
				["neo: oh shit...", 1.5],
				["neo: help.", 1.5],
				["neo: need a little help.", 1.5]
			],
			[
				["", .6],
				["agent smith: i\u2019m going to be honest",
					3
				],
				["agent smith: i hate this place,", 3],
				["", .6],
				["agent smith: this zoo", 2],
				["agent smith: this prison", 2],
				["agent smith: this reality", 2],
				["agent smith: whatever you want to call it", 3],
				["agent smith: i can\u2019t stand it any longer.", 3],
				["", 1],
				["agent smith: it\u2019s the smell", 3],
				["agent smith: if there is such a thing", 3],
				["agent smith: i feel.", .6],
				["agent smith: i feel..", .6],
				["agent smith: i feel...", 1.8],
				["agent smith: saturated by it", 2],
				["", .6],
				["agent smith: i can taste your stink",
					2
				],
				["agent smith: and every time i do", 2],
				["agent smith: i feel i have somehow been...", 3],
				["agent smith: infected by it", 2],
				["agent smith: it\u2019s repulsive", 2],
				["agent smith: ", 2],
				["agent smith: i must get out of here", 2]
			],
			[
				["...", .6],
				["i know you\u2019re out there.", 2],
				["i can feel you now.", 2],
				["i know that you\u2019re afraid.", 2],
				["you\u2019re afraid of us.", 2],
				["you\u2019re afraid of change.", 2],
				["", .6],
				["i don\u2019t know the future.", 2],
				["i didn\u2019t come here to tell you ", 2],
				["how this is going to end.",
					2
				],
				["i came here to tell you how ", 2],
				["it\u2019s going to begin.", 2],
				["", .6],
				["i\u2019m going to hang up this phone", 2],
				["and then i\u2019m going to show these", 2],
				["people what you don\u2019t want", 2],
				["them to see.", 2],
				["", .6],
				["i\u2019m going to show them a world without you,", 2],
				["a world without rules and controls,", 2],
				["without borders or boundaries,", 2],
				["a world where anything is possible.", 2],
				["where we go from there is a choice", 2],
				["i leave to you", 2],
				["", .6],
				["thanks for playing", 3],
				["m", .05],
				["ma", .05],
				["mad", .05],
				["made", .05],
				["made ", .05],
				["made w", .05],
				["made wi", .05],
				["made wit", .05],
				["made with", .05],
				["made with ", .05],
				["made with l", .05],
				["made with lo", .05],
				["made with lov", .05],
				["made with love", .05],
				["made with love ", .05],
				["made with love b", .05],
				["made with love by", .05],
				["made with love by ", .05],
				["made with love by a", .05],
				["made with love by ag", .05],
				["made with love by aga", .05],
				["made with love by agar", .05],
				["made with love by agar3", .05],
				["made with love by agar3s",
					60
				]
			]
		],
		F = [];
	for (p = 0; p < y.length; p++)
		for (y[p] = Ea(y[p]), F.push([]), K = 0; K < y[p].length; K++) {
			F[p].push([]);
			for (var na = 0; na < y[p][K].length; na++) {
				var oa = y[p][K][na];
				1 == oa[2] && F[p][K].push([oa[0], oa[1]])
			}
		}
	var aa = [-1, 1],
		va = [1, 2],
		ua = [3, 4],
		k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
		sa = [{
			B: k[0],
			loop: 1
		}, {
			B: k[1],
			loop: 0,
			end: 0
		}, {
			B: k[2],
			loop: 0,
			end: 0
		}, {
			B: k[3],
			loop: 0,
			end: 0
		}, {
			B: k[4],
			loop: 0,
			end: 0
		}, {
			B: k[5],
			loop: 1
		}, {
			B: k[6],
			loop: 1
		}, {
			B: k[7],
			loop: 0,
			end: 0
		}, {
			B: k[8],
			loop: 0,
			end: 0
		}, {
			B: k[9],
			loop: 0,
			end: 0
		}, {
			B: k[10],
			loop: 0,
			end: 11
		}, {
			B: k[11],
			loop: 1
		}, {
			B: k[12],
			loop: 0,
			end: 0
		}, {
			B: k[13],
			loop: 0,
			end: 11
		}, {
			B: k[14],
			loop: 1
		}, {
			B: k[15],
			loop: 0,
			end: 0
		}, {
			B: k[16],
			loop: 0,
			end: 0
		}, {
			B: k[17],
			loop: 0,
			end: 20
		}, {
			B: k[18],
			loop: 1
		}, {
			B: k[19],
			loop: 0,
			end: 0
		}, {
			B: k[20],
			loop: 0,
			end: 19
		}, {
			B: k[21],
			loop: 1
		}, {
			B: k[22],
			loop: 1
		}, {
			B: k[23],
			loop: 1
		}, {
			B: k[24],
			loop: 1
		}, {
			B: k[25],
			loop: 1
		}, {
			B: k[26],
			loop: 1
		}],
		M = [60, 160],
		U = [1, 1.5, 4.1, 1, 2, 5],
		P = xa([3, .38, .26, .33, .81, .2, .09, .62, -.6799, .06, .87, , .67, .42, -.324, , -.86, -.88, .33, -.78, .2, .29, -.64, .6], 3),
		Ha = xa([3, .0016, .1344, , .1768, .559, .0332, -.4474, -.0545, .0188, , -.0954, , .1008, -.0342, , -.0528, .0403, .9406, .0121, , .3799, .0431, .4], 3),
		Ga = ia([0, .1, .15, , .29, .11, .04, .1, .1, .25, , .2199, .1, .36, .26, .08, .06, , .99, .02, .16, .15, -.72, .29]),
		Y = ia([1, , .3504, , .3541, .385, , .2852, , , , , , , , .6757, , , 1, , , , , .5]),
		ja = {},
		C = {},
		ka = "#0c1d05",
		I = [.015, "#fff", 0, 0],
		t = ra([8, 120, k[0], "#ddfed9"]),
		m = {
			R: 30,
			W: 0,
			ma: 0
		},
		e = La.getContext("2d"),
		N = {
			ia: [],
			add: function(a) {
				a.create();
				this.ia.push(a)
			},
			update: function(a, b) {
				for (var c = 0; c < this.ia.length; c++) this.ia[c].update(a, b)
			},
			N: function() {
				for (var a = 0; a < this.ia.length; a++) this.ia[a].Za(), this.ia[a].N()
			}
		},
		g = la({}),
		Ba = function(a) {
			a = ya(a);
			a.G.ea = !0;
			a.G.F = m.R;
			a.G.J = 1;
			a.G.Z = 2;
			a.G.orientation = 1;
			a.fa = {
				left: 0,
				right: 0
			};
			a.I = {
				left: !1,
				right: !1
			};
			var b = {
				update: function(a, b) {
					if (u.active) return this.lb(a, b);
					if (g.ga) this.G.speed = 0;
					else if (b = this.G, !b.locked) {
						b.speed = 0;
						var c = !1;
						x & v[w.Ma] && (b.ab(), c = 120 == b.y);
						x & v[w.Ka] && (b.Ba(), c = 120 == b.y);
						c || (x & v[w.La] ? (this.I.left || (0 == b.orientation && 300 > a - this.fa.left ? b.ha() : 1 == b.orientation && 1E3 > a - this.fa.left &&
							b.ja()), this.wb && 1 == b.orientation && b.ja(), b.move(0), this.fa.left = a, this.I.left = !0, this.I.right = !0) : this.I.left = !1, x & v[w.Na] ? (this.I.right || (1 == b.orientation && 300 > a - this.fa.right ? b.ha() : 0 == b.orientation && 1E3 > a - this.fa.right && b.ja()), this.wb && 0 == b.orientation && b.ja(), b.move(1), this.fa.right = a, this.I.right = !0, this.I.left = !0) : this.I.right = !1);
						x & v[w.hb] && (b.orientation ^= 1);
						x & v[w.ib] && b.ua()
					}
				},
				lb: function() {
					x & v[w.Na] ? this.I.right || (this.I.right = !0, u.Ga(u.P + 1)) : this.I.right = !1;
					x & v[w.La] ? this.I.left || (this.I.left = !0, u.Ga(u.P - 1)) : this.I.left = !1;
					if (x & v[w.Ma] || x & v[w.Ka]) u.jb(), u.active = !1, E.active = !0, t.locked = !1
				}
			};
			A(a, b);
			return b
		}([t]),
		z = [],
		Ma = [
			[0, "#346856", 10],
			[1, "#306230", 10],
			[2, "#768448", 20],
			[3, "#7e8416", 20],
			[4, "#8fcc3e", 30],
			[5, "#7bc67b", 30],
			[6, "#F6FF97", 40],
			[7, "#9bbc0f", 50]
		];
	g.create = function() {
		this.pb();
		this.ca = 0;
		this.add(t);
		this.Aa = t;
		this.ba = [];
		this.Ua = 0;
		for (var a = [0], b = 1; 150 > b; b++) 0 == b % 15 && (a[b - 1] = 3, a[b - 10] = 0), a.push(4);
		a[5] = 1;
		a[20] = 1;
		a[35] = 1;
		a[50] = 1;
		for (b = 0; b < a.length; b++) this.add(Ia([32 * b, 182, a[b]]));
		g.maxWidth = 32 * a.length;
		this.Ea = [
			[480, [],
				[], O[0]
			],
			[480, [
					[320, 0]
				],
				[
					[0, 0],
					[0, 0],
					[1]
				]
			],
			[960, [],
				[]
			],
			[960, [
					[800, 1],
					[864, 1]
				],
				[
					[1],
					[1, 1],
					[],
					[2]
				]
			],
			[1440, [],
				[]
			],
			[1440, [
					[1280, 4]
				],
				[], O[1]
			],
			[1920, [],
				[],
				[
					["operator: i cant believe it!", 2]
				]
			],
			[1920, [
					[1856, 2]
				],
				[
					[1, 1],
					[0, 0],
					[1, 1],
					[],
					[3]
				]
			],
			[2400, [],
				[]
			],
			[2400, [
					[2208, 0],
					[2272, 0],
					[2336, 3]
				],
				[
					[0, 1],
					[0, 0],
					[1, 0]
				]
			],
			[2880, [],
				[]
			],
			[2880, [
					[2720, 5]
				],
				[], O[2]
			],
			[3360, [],
				[], O[3]
			],
			[3360, [],
				[
					[0, 0],
					[1, 1],
					[0, 0, 0],
					[1, 1, 1],
					[],
					[],
					[0, 0, 1, 1],
					[1, 0, 0, 1],
					[],
					[],
					[],
					[2]
				]
			],
			[3840, [],
				[],
				[
					["trinity: hurry, neo!",
						2
					]
				]
			],
			[3840, [],
				[
					[5, 6]
				], O[4]
			],
			[4320, [],
				[]
			],
			[4320, [
					[4160, 7]
				],
				[], O[5]
			],
			[4800, [],
				[]
			],
			[4800, [],
				[], O[6]
			]
		];
		g.H = [0, 320];
		this.add(new H([608, 168, 6]));
		this.add(new H([1088, 168, 6]));
		this.add(new qa([1568, 168, 6]));
		this.add(new H([2048, 168, 6]));
		this.add(new H([2528, 168, 6]));
		this.add(new qa([3008, 168, 6]));
		this.add(new H([3488, 168, 6]));
		this.add(new H([3968, 168, 6]));
		this.Ca(0);
		this.Ca(0)
	};
	g.pb = function() {
		var a = n([140, 35, "the matr13k"]);
		a.color = "#306230";
		a.size = 2;
		this.add(a);
		a = n([140, 35, "        13k"]);
		a.color = "#9bbc0f";
		a.size = 2;
		this.add(a);
		a = n([170, 55, "made by agar3s"]);
		a.color = "#9bbc0f";
		a.size = 1;
		this.add(a);
		a = n([160, 100, "arrow keys to move"]);
		a.color = "#306230";
		a.size = 1;
		this.add(a);
		a = n([160, 112, "(s key) to punch"]);
		a.color = "#306230";
		a.size = 1;
		this.add(a);
		a = n([160, 124, "(d key) to kick"]);
		a.color = "#306230";
		a.size = 1;
		this.add(a);
		a = n([160, 136, "(space key) to jump"]);
		a.color = "#306230";
		a.size = 1;
		this.add(a);
		a = n([320, 100, "(> > s) special punch"]);
		a.color = "#306230";
		a.size = 1;
		this.add(a);
		a = n([320, 112, "(> > d) special kick"]);
		a.color = "#306230";
		a.size = 1;
		this.add(a);
		a = n([480, 220, "your progress is down here"]);
		a.color = "#306230";
		a.size = 1;
		this.add(a);
		a = n([480, 220, "                      here"]);
		a.color = "#9bbc0f";
		a.size = 1;
		this.add(a)
	};
	g.Ca = function(a) {
		var b = this.Ea[a][0];
		this.ca = 0;
		t.O = b - 480;
		t.x = t.O;
		this.x = -t.x;
		g.H = [0, b - 160];
		this.Wa(a)
	};
	g.nb = function(a) {
		a.F = m.R;
		Ba.G = a;
		this.ba = [];
		for (a = z.length - 1; 0 <= a; a--) this.remove(z[a].G), z.splice(a, 1);
		this.Ca(this.Ua)
	};
	g.U = function(a, b) {
		Ba.update(a, b);
		for (var c = 0; c < z.length; c++) z[c].update(a,
			b);
		!this.ga && -this.x >= this.H[1] - 320 - 128 && 0 == this.ca && 0 == this.ba.length && g.Wa(this.Qa + 1);
		this.xa -= b;
		0 < this.ba.length && 0 > this.xa && (a = this.ba.splice(0, 1)[0], b = g.Va([a[0], a[1]]), b.C(11), b.speed = a[2], b.y = 0, b.S = -250, b.sa = 0, b.locked = !0, this.xa = .5)
	};
	g.Wa = function(a) {
		if (!(a >= this.Ea.length)) {
			this.Qa = a;
			var b = JSON.parse(JSON.stringify(this.Ea[this.Qa]));
			g.qb(this.H[1] - 320, b[0]);
			for (var c = 0; c < b[1].length; c++) this.Va(b[1][c]);
			this.Sa = b[2].reverse();
			0 == c && this.eb(-(this.H[1] - 320), 2);
			b[3] && setTimeout(function() {
					E.vb(b[3])
				},
				1500);
			this.Ua = 2 * ~~(a / 2)
		}
	};
	g.Va = function(a) {
		var b = Ma[a[1]];
		a = ra([a[0], 120, k[0], b[1]]);
		this.add(a);
		a.F = b[2];
		z.push(Ka([a, b[0]]));
		this.ca += 1;
		return a
	};
	g.sb = function(a) {
		--this.ca;
		for (var b = 0; b < z.length; b++)
			if (z[b].G.id == a.id) {
				z.splice(b, 1);
				break
			} this.remove(a);
		g.eb(this.x, 0);
		0 == this.ca && 0 == this.ba.length && (E.X.active = !0)
	};
	g.eb = function(a, b) {
		if (this.Sa.length)
			for (var c = this.Sa.pop(), d = 0; d < c.length; d++) {
				var e = c[d],
					g = -a + (0 == d % 2 ? 0 : 256);
				this.xa = .5 + b;
				this.ba.push([g, e, 0 == d % 2 ? 250 : -250])
			}
	};
	g.mb = function() {
		u.active = !0;
		E.active = !1;
		t.locked = !0
	};
	N.add(g);
	var E = la({}),
		T, L = n([250, 28, ""]);
	E.create = function() {
		var a = R([20, 20]);
		a.kb = 80;
		a.N = function() {
			e.fillStyle = "#DFEFE2";
			var a = t.F / 30 * 80;
			0 > a || e.fillRect(this.x, this.y, ~~a, 5)
		};
		a.direction = 1;
		a.update = function() {};
		this.add(a);
		var b = R([300, 20]);
		b.kb = 80;
		b.N = function() {
			if (T) {
				e.fillStyle = T.color;
				var a = ~~(T.F / 30 * 80);
				0 > a || e.fillRect(this.x - a, this.y, a, 5)
			}
		};
		b.direction = 1;
		b.update = function() {};
		this.add(a);
		a = n([20, 28, "mr anderson"]);
		a.size = 1;
		this.add(a);
		this.add(b);
		this.add(L);
		b =
			R([20, 234]);
		b.length = 280;
		b.N = function() {
			e.fillStyle = "#306230";
			e.fillRect(this.x, this.y, this.length, 3);
			e.fillStyle = "#9bbc0f";
			e.fillRect(this.x + ~~((t.x + 12) / (g.maxWidth - 24) * this.length), this.y, 3, 3)
		};
		this.add(b);
		this.X = n([200, 60, "go!"]);
		this.X.size = 2;
		this.X.time = 0;
		this.X.color = "#9bbc0f";
		this.X.visible = !1;
		this.X.update = function(a) {
			this.active && (this.time += a, this.visible = .6 > this.time % .8, 4 < this.time && (this.visible = !1, this.time = 0, this.active = !1))
		};
		this.add(this.X);
		this.la = n([150, 1, "00:00"]);
		this.la.time =
			0;
		this.la.setTime = function(a) {
			this.time = a;
			a = this.time % 100;
			10 > a && (a = "0" + a);
			var b = ~~(this.time / 100);
			10 > b && (b = "0" + b);
			this.Y(b + ":" + a)
		};
		this.add(this.la);
		this.K = n([10, 70, ""]);
		this.K.size = 1;
		this.K.time = 0;
		this.K.visible = !1;
		this.K.ya = [];
		this.K.index = -1;
		this.K.color = "#9bbc0f";
		this.K.cb = function(a) {
			this.index = a;
			this.index >= this.ya.length ? this.visible = this.active = !1 : (a = this.ya[this.index], this.Y(a[0]), this.time = a[1], this.visible = this.active = !0)
		};
		this.K.update = function(a) {
			this.active && (this.time -= a, 0 > this.time &&
				this.cb(this.index + 1))
		};
		this.add(this.K)
	};
	E.U = function(a) {
		a = ~~(a / 10);
		this.la.time != a && this.la.setTime(a)
	};
	E.vb = function(a) {
		this.K.ya = a;
		0 < this.K.ya.length && this.K.cb(0)
	};
	N.add(E);
	var u = la({});
	u.active = !1;
	u.create = function() {
		var a = n([40, 28, "n30: tank, load a new program: "]);
		this.add(a);
		this.options = [];
		this.P = 0;
		this.options.push(n([55, 50, "hit points: " + m.R + " (+5)"]));
		this.options.push(n([55, 65, "defense: +" + m.ma + " (+0.5)"]));
		this.options.push(n([55, 80, "damage: +" + m.W + " (+0.5)"]));
		for (a = 0; a < this.options.length; a++) this.add(this.options[a]);
		this.Ga(0)
	};
	u.Ga = function(a) {
		this.options[this.P].color = "#ddfed9";
		this.P = a;
		this.P >= this.options.length && (this.P = 0);
		0 > this.P && (this.P = this.options.length - 1);
		this.options[this.P].color = "#9bbc0f"
	};
	u.jb = function() {
		switch (this.P) {
			case 0:
				m.R += 5;
				break;
			case 1:
				m.ma += .5;
				break;
			case 2:
				m.W += .5
		}
		this.options[0].Y("hit points: " + m.R + " (+5)");
		this.options[1].Y("defense: +" + m.ma + " (+0.5)");
		this.options[2].Y("damage: +" + m.W + " (+0.5)");
		t.tb();
		B(Y)
	};
	u.U = function() {};
	u.Za = function() {
		this.active && (e.fillStyle = "rgba(0,0,0,0.5)",
			e.fillRect(0, 0, 320, 240))
	};
	N.add(u);
	var Aa = 0;
	za(1)
})();