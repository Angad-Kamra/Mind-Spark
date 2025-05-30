var e;
e = function() {
		var t = function() {
			function e(t) {
				return n.appendChild(t.dom), t
			}

			function i(t) {
				for (var e = 0; e < n.children.length; e++) n.children[e].style.display = e === t ? "block" : "none";
				s = t
			}
			var s = 0,
				n = document.createElement("div");
			n.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", n.addEventListener("click", function(t) {
				t.preventDefault(), i(++s % n.children.length)
			}, !1);
			var o = (performance || Date).now(),
				r = o,
				a = 0,
				h = e(new t.Panel("FPS", "#0ff", "#002")),
				l = e(new t.Panel("MS", "#0f0", "#020"));
			if (self.performance && self.performance.memory) var d = e(new t.Panel("MB", "#f08", "#201"));
			return i(0), {
				REVISION: 16,
				dom: n,
				addPanel: e,
				showPanel: i,
				begin: function() {
					o = (performance || Date).now()
				},
				end: function() {
					a++;
					var t = (performance || Date).now();
					if (l.update(t - o, 200), t > r + 1e3 && (h.update(1e3 * a / (t - r), 100), r = t, a = 0, d)) {
						var e = performance.memory;
						d.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576)
					}
					return t
				},
				update: function() {
					o = this.end()
				},
				domElement: n,
				setMode: i
			}
		};
		return t.Panel = function(t, e, i) {
			var s = 1 / 0,
				n = 0,
				o = Math.round,
				r = o(window.devicePixelRatio || 1),
				a = 80 * r,
				h = 48 * r,
				l = 3 * r,
				d = 2 * r,
				c = 3 * r,
				u = 15 * r,
				p = 74 * r,
				f = 30 * r,
				y = document.createElement("canvas");
			y.width = a, y.height = h, y.style.cssText = "width:80px;height:48px";
			var w = y.getContext("2d");
			return w.font = "bold " + 9 * r + "px Helvetica,Arial,sans-serif", w.textBaseline = "top", w.fillStyle = i, w.fillRect(0, 0, a, h), w.fillStyle = e, w.fillText(t, l, d), w.fillRect(c, u, p, f), w.fillStyle = i, w.globalAlpha = .9, w.fillRect(c, u, p, f), {
				dom: y,
				update: function(h, g) {
					s = Math.min(s, h), n = Math.max(n, h), w.fillStyle = i, w.globalAlpha = 1, w.fillRect(0, 0, a, u), w.fillStyle = e, w.fillText(o(h) + " " + t + " (" + o(s) + "-" + o(n) + ")", l, d), w.drawImage(y, c + r, u, p - r, f, c, u, p - r, f), w.fillRect(c + p - r, u, r, f), w.fillStyle = i, w.globalAlpha = .9, w.fillRect(c + p - r, u, r, o((1 - h / g) * f))
				}
			}
		}, t
	}, "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : this.Stats = e(),
	function() {
		var e = window;
		const i = 320,
			s = 200,
			n = i * s,
			o = 0,
			r = 2 * n,
			a = 3 * n,
			h = 4 * n,
			l = 9 * n,
			d = Math;

		function c(t) {
			return cos(6.28318531 * t)
		}

		function u(t) {
			return sin(6.28318531 * -t)
		}
		Object.getOwnPropertyNames(d).forEach(t => e[t] = e[t] || d[t]), viewX = 0, viewY = 0, viewW = i, viewH = s, cursorX = 0, cursorY = 0, cursorColor = 22, cursorColor2 = 0, floodStack = [], fontString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_!@#.'\"?/<()", fontBitmap = "11111100011111110001100011111010001111101000111110111111000010000100000111111100100101000110001111101111110000111001000011111111111000011100100001000011111100001011110001111111000110001111111000110001111110010000100001001111111111000100001010010111101000110010111001001010001100001000010000100001111110001110111010110001100011000111001101011001110001011101000110001100010111011110100011001011100100000111010001100011001001111111101000111110100011000101111100000111000001111101111100100001000010000100100011000110001100010111010001100011000101010001001000110001101011010101110100010101000100010101000110001010100010000100001001111100010001000100011111001000110000100001000111001110100010001000100111111111000001001100000111110100101001011111000100001011111100001111000001111100111110000111101000101110111110000100010001000010001110100010111010001011100111010001011110000101110011101000110001100010111000000000000000000000111110010000100001000000000100111111000110111101011011101010111110101011111010100000000000000000000000100001100001000100000000000011011010011001000000000000111010001001100000000100000010001000100010001000000010001000100000100000100001000100001000010000010", dither = [65535, 65527, 65015, 65013, 62965, 62901, 58805, 58789, 42405, 42401, 42145, 42144, 41120, 40992, 32800, 32768, 0], pat = 65535, palDefault = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63];
		var p = document.getElementById("canvas"),
			f = (document.createElement("canvas").getContext("2d"), p.getContext("2d")),
			y = 0,
			w = r,
			g = [4278715910, 4279439380, 4280620859, 4281145203, 4280950964, 4280499935, 4278872826, 4280001529, 4282504703, 4282449151, 4284805846, 4282637212, 4281712985, 4281245716, 4282284570, 4282077732, 4280295442, 4284757012, 4291058728, 4292779812, 4291286560, 4292607142, 4294967295, 4290835454, 4290303738, 4288127221, 4285754088, 4288367292, 4286593657, 4283642688, 4281606692, 4279901218, 4280822578, 4282073457, 4282873275, 4284720347, 4288467700, 4293583066, 4291934643, 4289696651, 4287460717, 4284634186, 4282464563, 4281541698, 4281872731, 4283585166, 4285167034, 4288919017, 4294960867, 4294688697, 4293172100, 4290678104, 4286938439, 4283328291, 4284777522, 4287475549, 4290436242, 4293064653, 4289385188, 4287344839, 4284647072, 4283787129, 4282666586, 4281612610, 4278190080];
		pal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64], f.imageSmoothingEnabled = !1, p.width = i, p.height = s;
		var x = f.getImageData(0, 0, i, s),
			m = new ArrayBuffer(x.data.length),
			v = new Uint8Array(m),
			b = new Uint32Array(m),
			C = new Uint8Array(i * s * 20);

		function E(t, e, n = 64) {
			return !(0 - n > t || t > i + n || 0 - n > e || e > s + n)
		}

		function I(t = 0, e = y) {
			C.fill(t, e, e + n)
		}

		function D(t = cursorColor, e = cursorColor2) {
			cursorColor = t, cursorColor2 = e
		}

		function S(t, e, n = cursorColor, o = cursorColor2) {
			let r = (e |= 0) % 4 * 4 + (t |= 0) % 4,
				a = pat & Math.pow(2, r),
				h = a ? cursorColor : cursorColor2;
			64 != h && (h > 64 && (h = 0), 0 > t | t > i - 1 || 0 > e | e > s - 1 || (C[y + e * i + t] = a ? cursorColor : cursorColor2))
		}

		function Y(t = cursorX, e = cursorY, s = y) {
			return C[s + t + e * i]
		}

		function X(t, e, i, s, n = cursorColor, o = cursorColor2) {
			cursorX = i, cursorY = s, cursorColor2 = o, cursorColor = n;
			var r, a, h = (s |= 0) - (e |= 0),
				l = (i |= 0) - (t |= 0);
			if (0 > h ? (h = -h, a = -1) : a = 1, 0 > l ? (l = -l, r = -1) : r = 1, h <<= 1, l <<= 1, S(t, e), l > h)
				for (var d = h - (l >> 1); t != i;) 0 > d || (e += a, d -= l), d += h, S(t += r, e);
			else
				for (d = l - (h >> 1); e != s;) 0 > d || (t += r, d -= h), d += l, S(t, e += a)
		}

		function R(t, e, i = 5, s = cursorColor, n = cursorColor2) {
			if (cursorColor2 = n, cursorColor = s, t |= 0, e |= 0, s |= 0, (i |= 0) >= 0) {
				t |= 0, e |= 0, s |= 0;
				var o = -(i |= 0),
					r = 0,
					a = 2 - 2 * i;
				do {
					X(t - o, e - r, t + o, e - r, s), X(t - o, e + r, t + o, e + r, s), (i = a) > r || (a += 2 * ++r + 1), (i > o || a > r) && (a += 2 * ++o + 1)
				} while (0 > o)
			}
		}

		function M(t = cursorX, e = cursorY, i, s, n = cursorColor, o = cursorColor2) {
			cursorColor2 = o, cursorColor = n;
			let r, a = (t |= 0) + i | 0,
				h = (e |= 0) + s | 0,
				l = Math.abs(a - t),
				d = Math.abs(h - e),
				c = 1 & d,
				u = 4 * (1 - l) * d * d,
				p = 4 * (c + 1) * l * l,
				f = u + p + c * l * l;
			t > a && (t = a, a += l), e > h && (e = h), h = (e += (d + 1) / 2) - c, l *= 8 * l, c = 8 * d * d;
			do {
				X(a, e, t, e), X(t, h, a, h), (r = 2 * f) > p || (e++, h--, f += p += l), u > r && p >= 2 * f || (t++, a--, f += u += c)
			} while (a >= t);
			for (; d > e - h;) S(t - 1, e), S(a + 1, e++), S(t - 1, h), S(a + 1, h--)
		}

		function G(t, e, i = 16, s = 16, n = cursorColor, o = cursorColor2) {
			cursorColor2 = o, cursorColor = n, x1 = 0 | t, y1 = 0 | e, i |= 0, s |= 0, X(x1, y1, i, y1, n), X(i, y1, i, s, n), X(x1, s, i, s, n), X(x1, y1, x1, s, n)
		}

		function A(t, e, i = 16, s = 16, n = cursorColor, o = cursorColor2) {
			cursorColor2 = o, cursorColor = n, x1 = 0 | t, y1 = 0 | e, i |= 0, n |= 0;
			var r = (s |= 0) - y1;
			if (X(x1, y1, i, y1, n), r > 0)
				for (; --r;) X(x1, y1 + r, i, y1 + r, n);
			else if (0 > r)
				for (; ++r;) X(x1, y1 + r, i, y1 + r, n);
			X(x1, s, i, s, n)
		}

		function P(t = 0, e = 0, n = i, o = s, r = 0, a = 0, h = !1, l = !1, d = pal) {
			t |= 0, e |= 0, n |= 0, o |= 0, r |= 0, a |= 0;
			for (var c = 0; o > c; c++)
				for (var u = 0; n > u; u++) s > a + c && i > r + u && a + c > -1 && r + u > -1 && (h & l ? 0 > C[w + ((e + (o - c)) * i + t + (n - u))] || (C[y + ((a + c) * i + r + u)] = d[C[w + ((e + (o - c - 1)) * i + t + (n - u - 1))]]) : l && !h ? 0 > C[w + ((e + (o - c)) * i + t + u)] || (C[y + ((a + c) * i + r + u)] = d[C[w + ((e + (o - c - 1)) * i + t + u)]]) : h && !l ? 0 > C[w + ((e + c) * i + t + (n - u - 1))] || (C[y + ((a + c) * i + r + u)] = d[C[w + ((e + c) * i + t + (n - u - 1))]]) : h || l || 0 > C[w + ((e + c) * i + t + u)] || (C[y + ((a + c) * i + r + u)] = d[C[w + ((e + c) * i + t + u)]]))
		}

		function L(e) {
			e[7] || (e[7] = 1), e[8] || (e[8] = 1);
			for (var i = e[0].length, s = 0; i > s; s++) {
				var n;
				a = e[0].charAt(s), index = fontString.indexOf(a), n = fontBitmap.substring(25 * index, 25 * index + 25).split("");
				for (var o = 0; 5 > o; o++)
					for (var r = 0; 5 > r; r++)
						if (1 == n[5 * o + r])
							if (1 == e[4]) S(e[1] + r * e[4] + (5 * e[4] + e[3]) * s, e[2] + (e[6] ? Math.sin(1 * (t + s * e[8]) / e[7]) * e[6] : 0) + o * e[4] | 0);
							else {
								let i = e[1] + r * e[4] + (5 * e[4] + e[3]) * s,
									n = e[2] + (e[6] ? Math.sin(1 * (t + s * e[8]) / e[7]) * e[6] : 0) + o * e[4] | 0;
								A(i, n, i + e[4], n + e[4], e[5])
							}
			}
			var a
		}

		function O(t) {
			var e = 5 * t[7],
				i = t[0].split("\n"),
				s = i.slice(0),
				n = i.length,
				o = s.sort(function(t, e) {
					return e.length - t.length
				})[0],
				r = o.length * e + (o.length - 1) * t[3],
				a = n * e + (n - 1) * t[4];
			t[5] || (t[5] = "left"), t[6] || (t[6] = "bottom");
			var h = t[1],
				l = t[2],
				d = t[1] + r,
				c = t[2] + a;
			"center" == t[5] ? (h = t[1] - r / 2, d = t[1] + r / 2) : "right" == t[5] && (h = t[1] - r, d = t[1]), "center" == t[6] ? (l = t[2] - a / 2, c = t[2] + a / 2) : "bottom" == t[6] && (l = t[2] - a, c = t[2]);
			for (var u = h + r / 2, p = l + a / 2, f = 0; n > f; f++) {
				var y = i[f],
					w = y.length * e + (y.length - 1) * t[3],
					g = t[1],
					x = t[2] + (e + t[4]) * f;
				"center" == t[5] ? g = t[1] - w / 2 : "right" == t[5] && (g = t[1] - w), "center" == t[6] ? x -= a / 2 : "bottom" == t[6] && (x -= a), L([y, g, x, t[3] || 0, t[7] || 1, t[8], t[9], t[10], t[11]])
			}
			return {
				sx: h,
				sy: l,
				cx: u,
				cy: p,
				ex: d,
				ey: c,
				width: r,
				height: a
			}
		}

		function k(t, e = 1, i = 0, s = .5, n = !1) {
			var o = audioCtx.createBufferSource(),
				r = audioCtx.createGain(),
				a = audioCtx.createStereoPanner();
			return o.buffer = t, o.connect(a), a.connect(r), r.connect(audioMaster), o.playbackRate.value = e, o.loop = n, r.gain.value = s, a.pan.value = i, o.start(), {
				volume: r,
				sound: o
			}
		}

		function K(t = Date.now(), e = 1664525, i = 1013904223, s = Math.pow(2, 32)) {
			this.seed = t, this.a = e, this.c = i, this.m = s
		}
		audioCtx = new AudioContext, Number.prototype.clamp = function(t, e) {
			return Math.min(Math.max(this, t), e)
		}, Number.prototype.map = function(t, e, i, s) {
			return (this - t) / (e - t) * (s - i) + i
		}, Number.prototype.pad = function(t, e = "0") {
			for (var i = String(this); i.length < (t || 2);) i = e + i;
			return i
		}, Key = {
			_pressed: {},
			_released: {},
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40,
			SPACE: 32,
			ONE: 49,
			TWO: 50,
			THREE: 51,
			FOUR: 52,
			a: 65,
			c: 67,
			w: 87,
			s: 83,
			d: 68,
			z: 90,
			x: 88,
			f: 70,
			p: 80,
			r: 82,
			isDown(t) {
				return this._pressed[t]
			},
			justReleased(t) {
				return this._released[t]
			},
			onKeydown(t) {
				this._pressed[t.keyCode] = !0
			},
			onKeyup(t) {
				this._released[t.keyCode] = !0, delete this._pressed[t.keyCode]
			},
			update() {
				this._released = {}
			}
		}, K.prototype.setSeed = function(t) {
			this.seed = t
		}, K.prototype.nextInt = function() {
			return this.seed = (this.seed * this.a + this.c) % this.m, this.seed
		}, K.prototype.nextFloat = function() {
			return this.nextInt() / this.m
		}, K.prototype.nextBool = function(t) {
			return null == t && (t = .5), this.nextFloat() < t
		}, K.prototype.nextFloatRange = function(t, e) {
			return t + this.nextFloat() * (e - t)
		}, K.prototype.nextIntRange = function(t, e) {
			return Math.floor(this.nextFloatRange(t, e))
		}, K.prototype.nextColor = function() {
			for (var t = this.nextIntRange(0, Math.pow(2, 24)).toString(16).toUpperCase(); 6 > t.length;) t = "0" + t;
			return "#" + t
		};
		var T = function() {
				var t, e, i, s, n, o = function(t) {
						return Math.sin(6.283184 * t)
					},
					r = function(t) {
						return .003959503758 * Math.pow(2, (t - 128) / 12)
					},
					a = function(t, e, i) {
						var s, n, o, a, l, d, c, u = h[t.i[0]],
							p = t.i[1],
							f = t.i[3],
							y = h[t.i[4]],
							w = t.i[5],
							g = t.i[8],
							x = t.i[9],
							m = t.i[10] * t.i[10] * 4,
							v = t.i[11] * t.i[11] * 4,
							b = t.i[12] * t.i[12] * 4,
							C = 1 / b,
							E = t.i[13],
							I = i * Math.pow(2, 2 - t.i[14]),
							D = new Int32Array(m + v + b),
							S = 0,
							Y = 0;
						for (s = 0, n = 0; m + v + b > s; s++, n++) 0 > n || (n -= I, d = r(e + (15 & (E = E >> 8 | (255 & E) << 4)) + t.i[2] - 128), c = r(e + (15 & E) + t.i[6] - 128) * (1 + 8e-4 * t.i[7])), o = 1, m > s ? o = s / m : m + v > s || (o -= (s - m - v) * C), a = d, f && (a *= o * o), l = u(S += a) * p, a = c, g && (a *= o * o), l += y(Y += a) * w, x && (l += (2 * Math.random() - 1) * x), D[s] = 80 * l * o | 0;
						return D
					},
					h = [o, function(t) {
						return .5 > t % 1 ? 1 : -1
					}, function(t) {
						return t % 1 * 2 - 1
					}, function(t) {
						var e = t % 1 * 4;
						return 2 > e ? e - 1 : 3 - e
					}];
				this.init = function(o) {
					t = o, e = o.endPattern, i = 0, s = o.rowLen * o.patternLen * (e + 1) * 2, n = new Int32Array(s)
				}, this.generate = function() {
					var r, l, d, c, u, p, f, y, w, g, x, m, v, b, C = new Int32Array(s),
						E = t.songData[i],
						I = t.rowLen,
						D = t.patternLen,
						S = 0,
						Y = 0,
						X = !1,
						R = [];
					for (d = 0; e >= d; ++d)
						for (f = E.p[d], c = 0; D > c; ++c) {
							var M = f ? E.c[f - 1].f[c] : 0;
							M && (E.i[M - 1] = E.c[f - 1].f[c + D] || 0, 16 > M && (R = []));
							var G = h[E.i[15]],
								A = E.i[16] / 512,
								P = Math.pow(2, E.i[17] - 9) / I,
								L = E.i[18],
								O = E.i[19],
								k = 43.23529 * E.i[20] * 3.141592 / 44100,
								K = 1 - E.i[21] / 255,
								T = 1e-5 * E.i[22],
								H = E.i[23] / 32,
								N = E.i[24] / 512,
								F = 6.283184 * Math.pow(2, E.i[25] - 9) / I,
								j = E.i[26] / 255,
								z = E.i[27] * I & -2;
							for (x = (d * D + c) * I, u = 0; 4 > u; ++u)
								if (p = f ? E.c[f - 1].n[c + u * D] : 0) {
									R[p] || (R[p] = a(E, p, I));
									var B = R[p];
									for (l = 0, r = 2 * x; l < B.length; l++, r += 2) C[r] += B[l]
								} for (l = 0; I > l; l++)(g = C[y = 2 * (x + l)]) || X ? (m = k, L && (m *= G(P * y) * A + .5), Y += (m = 1.5 * Math.sin(m)) * (v = K * (g - Y) - (S += m * Y)), g = 3 == O ? Y : 1 == O ? v : S, T && (g = 1 > (g *= T) ? g > -1 ? o(.25 * g) : -1 : 1, g /= T), X = (g *= H) * g > 1e-5, b = g * (1 - (w = Math.sin(F * y) * N + .5)), g *= w) : b = 0, z > y || (b += C[y - z + 1] * j, g += C[y - z] * j), C[y] = 0 | b, C[y + 1] = 0 | g, n[y] += 0 | b, n[y + 1] += 0 | g
						}
					return ++i / t.numChannels
				}, this.createWave = function() {
					var t = 44 + 2 * s - 8,
						e = t - 36,
						i = new Uint8Array(44 + 2 * s);
					i.set([82, 73, 70, 70, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 87, 65, 86, 69, 102, 109, 116, 32, 16, 0, 0, 0, 1, 0, 2, 0, 68, 172, 0, 0, 16, 177, 2, 0, 4, 0, 16, 0, 100, 97, 116, 97, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]);
					for (var o = 0, r = 44; s > o; ++o) {
						var a = n[o];
						a = -32767 > a ? -32767 : a > 32767 ? 32767 : a, i[r++] = 255 & a, i[r++] = a >> 8 & 255
					}
					return i
				}, this.getBuffer = function() {
					return n
				}, this.getData = function(t, e) {
					for (var i = 2 * Math.floor(44100 * t), s = new Array(e), o = 0; 2 * e > o; o += 1) {
						var r = i + o;
						s[o] = t > 0 && r < n.length ? n[r] / 32768 : 0
					}
					return s
				}
			},
			H = {
				songData: [{
					i: [3, 138, 116, 0, 0, 138, 128, 4, 0, 0, 47, 48, 166, 124, 3, 0, 139, 4, 1, 3, 64, 160, 3, 32, 147, 4, 121, 5],
					p: [1, 1, 4, 2, 3],
					c: [{
						n: [111],
						f: []
					}, {
						n: [114],
						f: []
					}, {
						n: [113],
						f: []
					}, {
						n: [112, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 113],
						f: []
					}]
				}],
				rowLen: 5513,
				patternLen: 32,
				endPattern: 4,
				numChannels: 1
			},
			N = {
				songData: [{
					i: [1, 100, 128, 1, 3, 201, 128, 0, 1, 55, 0, 6, 36, 40, 1, 0, 195, 6, 1, 2, 135, 44, 40, 32, 125, 6, 0, 6],
					p: [1],
					c: [{
						n: [140],
						f: []
					}]
				}],
				rowLen: 5513,
				patternLen: 32,
				endPattern: 0,
				numChannels: 1
			},
			F = {
				songData: [{
					i: [1, 100, 128, 1, 2, 201, 128, 0, 1, 75, 0, 6, 93, 40, 1, 0, 195, 6, 0, 2, 60, 0, 1, 15, 125, 4, 0, 0],
					p: [1],
					c: [{
						n: [123],
						f: []
					}]
				}],
				rowLen: 5513,
				patternLen: 10,
				endPattern: 0,
				numChannels: 1
			},
			j = {
				songData: [{
					i: [0, 147, 128, 0, 0, 127, 116, 1, 0, 0, 0, 22, 34, 0, 0, 0, 41, 1, 1, 1, 23, 167, 0, 32, 77, 6, 25, 6],
					p: [1, 1, 2],
					c: [{
						n: [125, 127, 132, 137, 125, 132, 130, 127, , , 128, 127, 128, 125, 127, 128, 121, 130, 128, 127, 130, 128, 127, 121, , , 121, 123, 125, 127, 128, 132, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 152, , , 151, , , 152, , , , 149, , 151, , 152, , 157, , , 156, , , 154, , , , 152, , 151, , 149],
						f: []
					}, {
						n: [118, 120, 121, 120, 121, 125, 123, 121, , , 121, 123, 125, 128, 127, 125, 127, 120, 124, 125, 127, 130, 128, 127, , , 120, 124, 125, 127, 128, 127, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 151, , , 152, , , 154, , , , 152, , 151, , 149, , 151, , , 152, , , 154, , , , 157, , 156, , 154],
						f: []
					}]
				}, {
					i: [2, 45, 128, 0, 2, 41, 140, 18, 0, 0, 0, 29, 9, 0, 0, 0, 0, 0, 0, 2, 5, 0, 0, 32, 0, 0, 24, 8],
					p: [1, 1, 2],
					c: [{
						n: [116, 113, 116, 113, 116, 113, 116, 113, 116, 113, 116, 113, 116, 113, 116, 113, 113, 109, 113, 109, 113, 109, 113, 109, 113, 109, 113, 109, 113, 109, 113, 109],
						f: []
					}, {
						n: [109, 106, 109, 106, 109, 106, 109, 106, 109, 106, 109, 106, 109, 106, 109, 106, 112, 108, 112, 108, 112, 108, 112, 108, 112, 108, 112, 108, 112, 108, 112, 108],
						f: []
					}]
				}],
				rowLen: 5513,
				patternLen: 32,
				endPattern: 2,
				numChannels: 2
			},
			z = {
				songData: [{
					i: [2, 100, 128, 0, 3, 201, 128, 0, 0, 0, 5, 6, 58, 0, 0, 0, 195, 6, 1, 2, 135, 0, 0, 32, 147, 6, 40, 3],
					p: [1],
					c: [{
						n: [147, 154],
						f: []
					}]
				}],
				rowLen: 5513,
				patternLen: 32,
				endPattern: 0,
				numChannels: 1
			},
			B = {
				songData: [{
					i: [2, 138, 116, 0, 2, 138, 128, 4, 0, 0, 1, 29, 52, 124, 3, 0, 139, 4, 1, 3, 64, 160, 3, 32, 147, 4, 57, 5],
					p: [1],
					c: [{
						n: [147, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 150],
						f: []
					}]
				}, {
					i: [2, 100, 128, 0, 3, 201, 128, 0, 0, 0, 5, 6, 58, 0, 0, 0, 195, 6, 1, 2, 135, 0, 0, 32, 147, 6, 121, 6],
					p: [1],
					c: [{
						n: [],
						f: []
					}]
				}],
				rowLen: 5513,
				patternLen: 32,
				endPattern: 0,
				numChannels: 2
			},
			U = {
				songData: [{
					i: [3, 51, 128, 1, 2, 80, 128, 4, 1, 0, 45, 0, 0, 0, 0, 0, 195, 6, 1, 2, 135, 0, 0, 32, 147, 6, 48, 1],
					p: [1],
					c: [{
						n: [156],
						f: []
					}]
				}],
				rowLen: 5513,
				patternLen: 32,
				endPattern: 0,
				numChannels: 1
			},
			W = {
				songData: [{
					i: [0, 56, 128, 0, 3, 134, 128, 0, 0, 0, 5, 6, 58, 0, 0, 0, 195, 6, 1, 2, 135, 0, 0, 32, 147, 6, 121, 6],
					p: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					c: [{
						n: [135, 142, 140, 142, 145, 142, 140, 142, 135, 142, 140, 142, 145, 142, 140, 142, 135, 142, 140, 142, 145, 142, 140, 142, 135, 142, 140, 142, 145, 142, 140, 142],
						f: []
					}]
				}, {
					i: [0, 61, 128, 0, 3, 131, 128, 0, 0, 0, 0, 45, 29, 0, 0, 0, 195, 4, 1, 3, 50, 184, 119, 244, 147, 6, 17, 3],
					p: [, 2, 2, 3, 3, 2, 2, 4, 4, 5, 6, 2],
					c: [{
						n: [],
						f: []
					}, {
						n: [111, , , 123, , , 118, , , , 111, , 123, , 118, , 111, , , 123, , , 118, , , , 111, , 123, , 118],
						f: []
					}, {
						n: [109, , , 121, , , 118, , , , 109, , 121, , 118, , 109, , , 121, , , 118, , , , 109, , 121, , 118],
						f: []
					}, {
						n: [116, , , 123, , , 116, , , , 116, , 123, , 116, , 116, , , 123, , , 116, , , , 116, , 123, , 116],
						f: []
					}, {
						n: [111, , , 123, , , 111, , , , 109, , 108, , 109, , 111, , , 123, , , 111, , , , 111, , 108, , 109],
						f: []
					}, {
						n: [106, , , 118, , , 106, , , , 109, , 108, , 106, , 104, , , 116, , , 104, , , , 104, , 114, , 113],
						f: []
					}]
				}],
				rowLen: 6014,
				patternLen: 32,
				endPattern: 12,
				numChannels: 2
			};

		function _(e, i, s, n = 8, o = 0) {
			this.colors = [58, 59, 38, 39], this.color = this.colors[o], this.x = e, this.y = i, this.oldX = 0, this.oldY = 0, this.width = 1.2 * n, this.height = n, this.startHealth = s, this.health = s, this.hit = !1, this.facingLeft = !0, this.following = !1, this.biting = !1, this.blinkTimer = 30 * random() | 0, this.draw = function() {
				this.oldX = this.x, this.oldY = this.y;
				let e = this.x - viewX,
					i = this.y - viewY,
					s = 2 * (t % 30 > 15);
				if (E(e, i, 24)) {
					pat = dither[8], M(e, i - s, this.width, this.height, 0, 64),
						function(t = cursorX, e = cursorY, i, s, n = cursorColor, o = cursorColor2) {
							cursorColor2 = o, cursorColor = n;
							let r, a = (t |= 0) + i | 0,
								h = (e |= 0) + s | 0,
								l = Math.abs(a - t),
								d = Math.abs(h - e),
								c = 1 & d,
								u = 4 * (1 - l) * d * d,
								p = 4 * (c + 1) * l * l,
								f = u + p + c * l * l;
							t > a && (t = a, a += l), e > h && (e = h), h = (e += (d + 1) / 2) - c, l *= 8 * l, c = 8 * d * d;
							do {
								S(a, e), S(t, e), S(t, h), S(a, h), (r = 2 * f) > p || (e++, h--, f += p += l), u > r && p >= 2 * f || (t++, a--, f += u += c)
							} while (a >= t);
							for (; d > e - h;) S(t - 1, e), S(a + 1, e++), S(t - 1, h), S(a + 1, h--)
						}(e, i - s, this.width, this.height, this.color, this.color - 1);
					let n = this.width / 5 | 0;
					D(22, 22), t % 40 > this.blinkTimer && (M(e + n, i + n, n, n, 22, 22), M(e + 3 * n, i + n, n, n, 22, 22)), this.biting, this.health < this.startHealth && (D(12, 12), G(e, i - 3, e + this.health, i - 2)), 0 > this.health && this.kill()
				}
			}, this.update = function() {
				let e = this.x - viewX,
					i = this.y - viewY;
				this.following = !1, this.biting = !1;
				let s = 10 > t % 30;
				if (E(e, i, 24)) {
					this.x += random() > .5 ? s : -s, this.y += random() > .5 ? s : -s;
					let t = player.x - this.x,
						e = player.y - this.y,
						i = sqrt(e * e + t * t),
						n = atan2(e, t);
					100 > i && (this.following = !0, this.x += 10 * cos(n) / this.width, this.y += 10 * sin(n) / this.width), rectCollision(this, player) && (player.hit = !0, player.health -= .1, this.biting = !0), this.hit && (this.health -= 3, score += 5 * multiplier, this.hit = !1), 1 != getGID(this.x, this.oldY) && 1 != getGID(this.x + this.width, this.oldY) && 1 != getGID(this.x + this.width, this.oldY + this.height) && 1 != getGID(this.x, this.oldY + this.height) || (this.x = this.oldX), 1 != getGID(this.oldX, this.y) && 1 != getGID(this.oldX + this.width, this.y) && 1 != getGID(this.oldX + this.width, this.y + this.height) && 1 != getGID(this.oldX, this.y + this.height) || (this.y = this.oldY)
				}
			}, this.kill = function() {
				let t = this.x - viewX,
					e = this.y - viewY,
					i = this.width.map(0, 32, 1.7, 0);
				k(sounds.sndSplode1, 1 + i, 0, .7, !1), R(t + this.width / 2, e + this.width / 2, 2 * this.width, 22, 22);
				let s = random(),
					n = random(),
					o = random(),
					r = random();
				for (let t = 0; 40 > t; t++) particles.push(new q(this.x, this.y, 7, 3 * random() - 1.5, 3 * random() - 1.5));
				for (let t = 0; 50 > t; t++) particles.push(new q(this.x, this.y, 19, cos(360 / t) * s, sin(360 / t) * (1 + n), 15));
				for (let t = 0; 50 > t; t++) particles.push(new q(this.x, this.y, 19, cos(360 / t) * (1 + o), sin(360 / t) * r, 15));
				random() > .25 && batteries.push(new Z(this.x + 1, this.y + 1)), score += 100 * this.width * multiplier, enemies.splice(enemies.indexOf(this), 1)
			}
		}

		function V(t, e, i, s, n, o = 15, r = 0) {
			this.x = t, this.y = e, this.width = 4, this.height = 4, this.xspeed = s, this.yspeed = n, this.life = o, this.color = i, this.type = r, this.draw = function() {
				this.oldX = this.x, this.oldY = this.y;
				let t = this.x - viewX,
					e = this.y - viewY;
				E(t, e, 24) && (pat = dither[15 * random() | 0], D(this.color, this.color - 1), R(t, e, 2), pat = dither[8])
			}, this.update = function() {
				if (this.life--, this.oldX = this.x, this.oldY = this.y, this.x += this.xspeed, this.y += this.yspeed, this.x, viewX, this.y, viewY, 1 == getGID(this.x, this.y)) switch (this.type) {
					case 1:
						this.xspeed = -this.xspeed, this.yspeed = -this.yspeed;
					default:
						this.kill()
				}
				0 > this.life && this.kill()
			}, this.kill = function() {
				let t = this.x - viewX,
					e = this.y - viewY;
				R(t + this.width / 2, e + this.width / 2, 2 * this.width, 22, 22);
				for (let t = 0; 20 > t; t++) particles.push(new q(this.x, this.y, 22, random() - .5, .5 * random(), 20));
				bullets.splice(bullets.indexOf(this), 1)
			}
		}

		function q(t, e, i, s, n, r = 40) {
			this.x = t, this.y = e, this.width = 1, this.height = 1, this.xspeed = s, this.yspeed = n, this.life = r, this.color = i, this.draw = function() {
				this.oldX = this.x, this.oldY = this.y;
				let t = this.x - viewX,
					e = this.y - viewY;
				E(t, e, 24) && (y = o, D(this.color, this.color - 1), S(t, e))
			}, this.update = function() {
				this.life--, this.oldX = this.x, this.oldY = this.y, this.x += this.xspeed, this.y += this.yspeed, this.x, viewX, this.y, viewY, 1 == getGID(this.x, this.y) && this.kill(), 0 > this.life && this.kill()
			}, this.kill = function() {
				particles.splice(particles.indexOf(this), 1)
			}
		}

		function Z(t, e) {
			this.x = t, this.y = e, this.width = 4, this.height = 4, this.update = function() {
				if (E(this.x - viewX, this.y - viewY)) {
					rectCollision(this, player) && (this.kill(), player.batteries++, multiplier++);
					for (let t = 0; 3 > t; t++) particles.push(new q(this.x + 4 * random() | 0, this.y, 63 * random() | 0, .2 * random() - .1, -2 * random(), 5));
					let t = player.x - this.x,
						e = player.y - this.y,
						i = sqrt(e * e + t * t),
						s = atan2(e, t);
					20 > i && (this.x += 3 * cos(s), this.y += 3 * sin(s))
				}
			}, this.draw = function() {
				let t = this.x - viewX,
					e = this.y - viewY;
				E(t, e) && (D(63 * random() | 0, 63 * random() | 0), R(t + 2, e + 2, 2))
			}, this.kill = function() {
				for (let t = 0; 40 > t; t++) particles.push(new q(this.x, this.y, 22, 3 * random() - 1.5, 3 * random() - 1.5));
				for (let t = 0; 50 > t; t++) particles.push(new q(this.x, this.y, 12, 3 * cos(360 / t), 3 * sin(360 / t), 20));
				k(sounds.batteryPickup, 1, 0, .6, 0), batteries.splice(batteries.indexOf(this), 1)
			}
		}
		player = {
			x: 3840,
			y: 2400,
			oldX: 0,
			oldY: 0,
			vx: 1.8,
			vy: 1.8,
			width: 6,
			height: 10,
			color: 12,
			gravity: gravity = 4,
			health: 100,
			tx: 0,
			ty: 0,
			steps: 0,
			index: 0,
			hit: !1,
			xm: 0,
			ym: 0,
			batteries: 4,
			color: 22,
			draw: function(t) {
				let e = this.x - viewX,
					i = this.y - viewY,
					s = this.steps % 20 > 10 ? 0 : 1,
					n = this.steps % 30 > 15 ? 0 : 1;
				D(this.color, this.color), A(e + 1, i + n, e + 5, i + 4 + n), A(e, i + 1 + n, e + this.width, i + 3 + n), A(e + 2, i + 2, e + 4, i + 8), S(e, i + 7), S(e + 6, i + 7), X(e + 1, i + 6, e + 5, i + 6), X(e + 1, i + 9, e + 1, i + 10 + s), X(e + 5, i + 9, e + 5, i + 10 + !s)
			},
			fire: function(e) {
				var i, s, n, o = Y(this.x / J | 0, this.y / Q | 0, h);
				if (1 == e) n = hypot(gp.axes[2], gp.axes[3]), i = gp.axes[2] / n * 6, s = gp.axes[3] / n * 6;
				else if (0 == e) {
					var r = this.x - viewX,
						a = this.y - viewY,
						l = mouse.x - r,
						d = mouse.y - a;
					i = l / (n = hypot(l, d)) * 6, s = d / n * 6
				}
				switch (o) {
					case 1:
						1 > t % 7 && (bullets.push(new V(this.x + 3, this.y + 5, 27, i, s, 100, 1)), k(sounds.sndGun, 1, 0, .5, 0));
						break;
					case 2:
						1 > t % 14 && (bullets.push(new V(this.x + 3, this.y + 5, 11, i + u(.1), s + c(.1))), bullets.push(new V(this.x + 3, this.y + 5, 11, i, s)), bullets.push(new V(this.x + 3, this.y + 5, 11, i - u(.2), s - c(.2))), bullets.push(new V(this.x + 3, this.y + 5, 11, i - u(.3), s - c(.3))), bullets.push(new V(this.x + 3, this.y + 5, 11, i - u(.4), s - c(.4))), bullets.push(new V(this.x + 3, this.y + 5, 11, i - u(.5), s - c(.5))), k(sounds.sndGun, 1, 0, .5, 0));
						break;
					case 3:
						1 > t % 2 && (bullets.push(new V(this.x + 3, this.y + 5, 20, i * cos(t), s * sin(t), 90)), k(sounds.sndGun, 1, 0, .5, 0));
						break;
					case 4:
						1 > t % 2 && (bullets.push(new V(this.x + 3, this.y + 5, 7 + round(3 * random() - 1.5), i / 3.5 + .4 * random() - .8, s / 3.5 + .4 * random() - .8, 40)), k(sounds.sndGun, .7, 0, .5, 0));
						break;
					default:
						1 > t % 7 && (bullets.push(new V(this.x + 3, this.y + 5, 9, i, s)), k(sounds.sndGun, 1, 0, .5, 0))
				}
			},
			mouseFire: function() {
				if (1 > t % 5) {
					let t = this.x - viewX,
						e = this.y - viewY,
						i = mouse.x - t,
						s = mouse.y - e,
						n = hypot(i, s),
						o = i / n * 6,
						r = s / n * 6;
					bullets.push(new V(this.x + 3, this.y + 5, 9, o, r)), k(sounds.sndGun, .7, 0, .3, 0)
				}
			},
			update: function() {
				this.color = 22, this.oldX = player.x, this.oldY = player.y, player.x, viewX, player.y, viewY, this.xm = 1, this.hit && (player.health -= .3, this.hit = !1, this.color = 6, multiplier = 1), 0 > player.health && (this.kill(), state = "gameover"), Key.isDown(Key.d) || Key.isDown(Key.RIGHT) ? (this.x += this.vx, this.steps++) : (Key.isDown(Key.a) || Key.isDown(Key.LEFT) || Key.isDown(Key.q)) && (this.x -= this.vx, this.steps++), Key.isDown(Key.w) || Key.isDown(Key.UP) || Key.isDown(Key.z) ? (this.y -= this.vy, this.steps++) : (Key.isDown(Key.s) || Key.isDown(Key.DOWN)) && (this.y += this.vy, this.steps++), gp && (abs(gp.axes[0]) > .1 && (this.x += this.vx * gp.axes[0], this.steps++), abs(gp.axes[1]) > .1 && (this.y += this.vy * gp.axes[1], this.steps++), abs(gp.axes[2]) > .1 && this.fire(1), abs(gp.axes[3]) > .1 && this.fire(1)), 1 == mouse.pressed && this.fire(0), 1 != getGID(this.x, this.oldY) && 1 != getGID(this.x + this.width, this.oldY) && 1 != getGID(this.x + this.width, this.oldY + this.height) && 1 != getGID(this.x, this.oldY + this.height) || (this.x = this.oldX), 1 != getGID(this.oldX, this.y) && 1 != getGID(this.oldX + this.width, this.y) && 1 != getGID(this.oldX + this.width, this.y + this.height) && 1 != getGID(this.oldX, this.y + this.height) || (this.y = this.oldY), (2 == getGID(this.x, this.y) || 2 == getGID(this.x + this.width - 1, this.y) || 2 == getGID(this.x + this.width - 1, this.y + this.height - 1) || 2 == getGID(this.x, this.y + this.height - 1)) && (foundSwitch = switches.find(function(t) {
					return t.index == getIndex(player.x, player.y)
				}), foundSwitch && 4 > foundSwitch.state && (foundSwitch.state > 3 || player.batteries > 0 && (3 == foundSwitch.state && (k(sounds.cellComplete, 1, 0, .7, 0), score += 2e4 * multiplier, player.health += 2, y = h, R(player.x / J, player.y / J, 4, foundSwitch.color, foundSwitch.color), y = o), k(sounds.powerLevel, 1, 0, .7, 0), foundSwitch.state++, player.batteries--, score += 2500 * multiplier)))
			},
			kill: function() {
				counts.enemiesKilled = counts.totalEnemies - enemies.length, counts.switchesActivated = switches.filter(t => 4 == t.state).length, counts.scores.push(score)
			}
		};
		const J = 20,
			Q = 20;
		score = 0, multiplier = 1, rooms = [], switches = [], enemies = [], objects = [], bullets = [], particles = [], batteries = [], states = {}, gp = !1, mouse = {
			x: 0,
			y: 0,
			pressed: !1
		}, counts = {}, titleMusic = {}, gameMusic = {}, lcg = new K(1019), tileng = new K(42), init = (() => {
			window.addEventListener("keyup", function(t) {
				Key.onKeyup(t)
			}, !1), window.addEventListener("keydown", function(t) {
				Key.onKeydown(t)
			}, !1), window.addEventListener("blur", function(t) {
				paused = !0
			}, !1), window.addEventListener("focus", function(t) {
				paused = !1
			}, !1), window.addEventListener("click", getMousePos), window.addEventListener("gamepadconnected", function(t) {
				t.gamepad.index, t.gamepad.id, t.gamepad.buttons.length, t.gamepad.axes.length
			}), p.addEventListener("mousemove", getMousePos), p.addEventListener("mousedown", getMousePos), drawMap(), createSwitches(), spawnEnemies(12e3), counts.totalSwitches = switches.length, counts.totalEnemies = enemies.length, counts.scores = [], state = "menu", last = 0, t = 0, audioCtx = new AudioContext, audioMaster = audioCtx.createGain(), audioMaster.connect(audioCtx.destination), deadzoneX = 100, deadzoneY = 80, viewX = player.x - i / 2, viewY = player.y - s / 2, sounds = {}, soundsReady = 0, sndData = [{
				name: "song",
				data: H
			}, {
				name: "sndGun",
				data: N
			}, {
				name: "sndSplode1",
				data: F
			}, {
				name: "titleSong",
				data: j
			}, {
				name: "batteryPickup",
				data: z
			}, {
				name: "cellComplete",
				data: B
			}, {
				name: "gameSong",
				data: W
			}, {
				name: "powerLevel",
				data: U
			}], sndData.forEach(function(t) {
				var e = new T;
				e.init(t.data);
				var i = !1;
				setInterval(function() {
					if (!i && (i = 1 == e.generate())) {
						let i = e.createWave().buffer;
						audioCtx.decodeAudioData(i, function(e) {
							sounds[t.name] = e, soundsReady++
						})
					}
				}, 0)
			}), paused = !1, loop()
		}), loop = (e => {
			var s = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [];
			gp = s[0], paused ? (D(22, 22), y = o, O(["PAUSED", i / 2, 128, 3, 1, "center", "top", 3, 21, 0]), audioMaster.gain.value = 0) : (dt = 1, t += 1, audioMaster.gain.value = 1, states[state].step(1), states[state].draw()), Key.update(),
				function() {
					let t = n;
					for (; t--;) b[t] = g[pal[C[t]]];
					x.data.set(v), f.putImageData(x, 0, 0)
				}(), requestAnimationFrame(loop)
		}), drawMap = (t => {
			rooms.push({
				x: 156,
				y: 96,
				width: 10,
				height: 10
			}), y = l, A(0, 0, 320, 200, 1, 1);
			for (let t = 0; 1e5 > t; t++) roomCandidate = {
				x: lcg.nextIntRange(5, i - 15),
				y: lcg.nextIntRange(5, s - 15),
				width: lcg.nextIntRange(7, 16),
				height: lcg.nextIntRange(7, 16)
			}, collides = rooms.some(t => rectCollision(roomCandidate, t)), collides || rooms.push(roomCandidate);
			rooms.forEach(drawRoom), drawCorridor(400);
			for (var e = a; a + n >= e; e++) C[e] = tileng.nextIntRange(0, 15);
			y = o
		}), drawRoom = (t => {
			D(0, 0), A(t.x, t.y, t.x + t.width, t.y + t.height, 0, 0), G(t.x, t.y, t.x + t.width + 1, t.y + t.height + 1, 1, 1), D(0, 0), X(t.x - 3, t.y + t.height / 2, t.x + t.width + 3, t.y + t.height / 2), X(t.x + t.width / 2, t.y - 3, t.x + t.width / 2, t.y + t.height + 3)
		}), drawCorridor = (t => {
			var e = 0,
				i = 0;
			for (let s = 0; t > s; s++) {
				for (let t = 0; 5e4 > t && 1 != Y(e = lcg.nextIntRange(0, 320), i = lcg.nextIntRange(0, 200), l); t++);
				y = l, D(0, 0), S(e, i);
				for (let t = 0; 100 > t; t++) {
					let t = "";
					if (315 > e + 3 && 1 == Y(e + 3, i) && (t += "E"), e - 3 > 5 && 1 == Y(e - 3, i) && (t += "W"), i - 3 > 5 && 1 == Y(e, i - 3) && (t += "N"), 195 > i + 3 && 1 == Y(e, i + 3) && (t += "S"), t) switch (t[lcg.nextIntRange(0, t.length)]) {
						case "N":
							S(e, i - 1), S(e, i - 2), i -= 2;
							break;
						case "S":
							S(e, i + 1), S(e, i + 2), i += 2;
							break;
						case "E":
							S(e + 1, i), S(e + 2, i), e += 2;
							break;
						case "W":
							S(e - 1, i), S(e - 2, i), e -= 2
					}
				}
			}
		}), createSwitches = (t => {
			rooms.forEach(t => {
				[{
					x: t.x + 1,
					y: t.y + 1
				}, {
					x: t.x + t.width - 1,
					y: t.y + 1
				}, {
					x: t.x + 1,
					y: t.y + t.height
				}, {
					x: t.x + t.width - 1,
					y: t.y + t.height
				}, {
					x: lcg.nextIntRange(t.x, t.x + t.width),
					y: lcg.nextIntRange(t.y, t.x + t.height)
				}, {
					x: lcg.nextIntRange(t.x, t.x + t.width),
					y: lcg.nextIntRange(t.y, t.x + t.height)
				}, {
					x: lcg.nextIntRange(t.x, t.x + t.width),
					y: lcg.nextIntRange(t.y, t.x + t.height)
				}].forEach(t => {
					y = l, D(2, 2), S(t.x, t.y), switches.push({
						x: t.x,
						y: t.y,
						index: l + 320 * t.y + t.x,
						color: lcg.nextIntRange(1, 5),
						state: 0
					})
				})
			})
		}), drawSwitches = (t => {
			switches.forEach(function(t) {
				var e = t.y * Q - viewY,
					i = t.x * J - viewX;
				if (E(i, e, J)) switch (y = o, t.state) {
					case 4:
						pat = dither[8], e = t.y * Q - viewY, i = t.x * J - viewX, pat = dither[16 * random() | 0], A(i + 4, e + 4, i + J - 4, e + Q - 4, t.color, 22);
						break;
					case 3:
						pat = dither[8], e = t.y * Q - viewY, A(4 + (i = t.x * J - viewX), e + 4, i + J - 4, e + Q - 4, t.color, 22), A(i + 4, e + 16, i + J - 4, e + Q - 4, t.color, 0);
						break;
					case 2:
						pat = dither[8], e = t.y * Q - viewY, A(4 + (i = t.x * J - viewX), e + 4, i + J - 4, e + Q - 4, t.color, 22), A(i + 4, e + 12, i + J - 4, e + Q - 4, t.color, 0);
						break;
					case 1:
						pat = dither[8], e = t.y * Q - viewY, A(4 + (i = t.x * J - viewX), e + 4, i + J - 4, e + Q - 4, t.color, 22), A(i + 4, e + 8, i + J - 4, e + Q - 4, t.color, 0);
						break;
					default:
						pat = dither[8], e = t.y * Q - viewY, A(4 + (i = t.x * J - viewX), e + 4, i + J - 4, e + Q - 4, t.color, 0)
				}
			})
		}), getIndex = ((t, e) => l + (t / J | 0) + 320 * (e / Q | 0)), getGID = ((t, e) => C[getIndex(t, e)]), drawObjects = (t => {
			objects.forEach(function(t) {
				t.draw()
			})
		}), updateObjects = (t => {
			objects.forEach(function(t) {
				t.update()
			})
		}), updateCollisions = (t => {
			enemiesOnScreen = enemies.filter(function(t) {
				return E(t.x - viewX, t.y - viewY)
			}), enemiesOnScreen.forEach(function(t) {
				bullets.forEach(function(e) {
					rectCollision(t, e) && (e.kill(), t.hit = !0)
				})
			})
		}), spawnEnemies = (t => {
			for (let e = 0; t > e; e++) {
				let t = lcg.nextIntRange(0, i),
					e = lcg.nextIntRange(0, s),
					n = lcg.nextIntRange(5, 19);
				0 == getGID(t * J, e * Q) && (t * J > player.x + 100 || t * J < player.x - 100) && (e * Q > player.y + 100 || e * Q < player.x - 100) && enemies.push(new _(t * J, e * Q, n, n, lcg.nextIntRange(0, 3)))
			}
		}), rectCollision = ((t, e) => {
			let i = t.x,
				s = t.x + t.width,
				n = t.y,
				o = t.y + t.height,
				r = e.x,
				a = e.x + e.width,
				h = e.y,
				l = e.y + e.height;
			return !(r > s || i > a || h > o || n > l)
		}), buttonPressed = (t => "object" == typeof t ? t.pressed : 1 == t), getMousePos = (t => {
			var e = p.getBoundingClientRect(),
				i = p.width / e.width,
				s = p.height / e.height;
			mouse = {
				x: (t.clientX - e.left) * i | 0,
				y: (t.clientY - e.top) * s | 0,
				pressed: t.buttons
			}
		}), isOnScreen = (t => E(t.x - viewX, t.y - viewY)), getNeighbors = ((t, e) => ({
			N: getGID(t, e - 1)
		})), reset = (t => {
			lcg.seed = 1019, tileng.seed = 42, player.health = 100, player.x = 160 * J, player.y = 100 * Q, score = 0, switches = [], enemies = [], objects = [], bullets = [], particles = [], batteries = [], player.batteries = 20, createSwitches(), spawnEnemies(), state = "game"
		}), states.menu = {
			ready: !1,
			musicPlaying: !1,
			titleSong: {},
			step: function(t) {
				for (let t = 0; 10 > t; t++) particles.push(new q(100 - viewX, 100 - viewY, 22, 3 * random(), 3 * random()));
				this.ready = soundsReady == sndData.length, !this.musicPlaying && this.ready && (titleMusic = k(sounds.titleSong, 1, 0, .4, !0), this.musicPlaying = !0), this.ready && (Key.justReleased(Key.SPACE) || Key.justReleased(Key.w) || mouse.pressed ? (state = "game", titleMusic.sound.stop(), gameMusic = k(sounds.gameSong, 1, 0, .2, !0)) : gp && (abs(gp.axes[0]) > .1 || abs(gp.axes[1]) > .1 || abs(gp.axes[2]) > .1 || abs(gp.axes[3]) > .1) && (state = "game", titleMusic.sound.stop(), gameMusic = k(sounds.gameSong, 1, 0, .4, !0))), particles.forEach(function(t) {
					t.update()
				})
			},
			draw: function(t) {
				y = o, I(0), w = l, mapPal = [1, 31], P(0, 0, i, s, 0, 0, 0, 0, mapPal);
				let e = i / sndData.length;
				pat = dither[8], A(0, 188, soundsReady * e, 200, 13, 14), particles.forEach(function(t) {
					t.draw()
				}), D(22, 22), O(["THE", 50, 54, 3, 9, "left", "top", 2, 22, 0]), O(["INCIDENT", 270, 106, 3, 9, "right", "top", 2, 22, 0]), O(["CHROMA", i / 2, 70, 8, 9, "center", "top", 6, 22, 0]), O([gp ? "GAMEPAD DETECTED" : "GAMEPADS SUPPORTED-PRESS A BUTTON", i / 2, 170, 1, 9, "center", "top", 1, 22, 0]), O(["WASD/ZQSD TO MOVE   MOUSE TO AIM/SHOOT", i / 2, 180, 1, 9, "center", "top", 1, 22, 0]), D(22, 22), O([this.ready ? "PRESS OR CLICK TO PLAY" : "ASSETS OFFLINE. LOADING...", i / 2, 191, 1, 9, "center", "top", 1, 22, 0])
			}
		}, states.game = {
			step: function(t) {
				player.update(t), updateObjects(), player.x - viewX + deadzoneX > viewW ? viewX = player.x - (viewW - deadzoneX) : player.x - deadzoneX < viewX && (viewX = player.x - deadzoneX), player.y - viewY + deadzoneY > viewH ? viewY = player.y - (viewH - deadzoneY) : player.y - deadzoneY < viewY && (viewY = player.y - deadzoneY), enemies.forEach(function(t) {
					t.update()
				}), bullets.forEach(function(t) {
					t.update()
				}), particles.forEach(function(t) {
					t.update()
				}), batteries.forEach(t => {
					t.update()
				}), updateCollisions()
			},
			draw: function(t) {
				terrainColors = [
					[60, 62, 63, 64, 16, 32],
					[25, 26, 27, 28, 29, 30],
					[9, 11, 12, 13, 15, 53],
					[21, 20, 19, 18, 17, 16],
					[8, 7, 6, 5, 3, 2]
				], pat = dither[8], A(0, 0, i, s, 2), y = o, I(0);
				let e = viewX / J - 3 | 0,
					n = (viewX + i) / J + 3 | 0,
					r = viewY / Q - 3 | 0,
					d = (viewY + s) / Q + 3 | 0;
				for (let t = e; n > t; t++)
					for (let e = r; d > e; e++) {
						let i, s, n = C[l + 320 * e + t],
							o = terrainColors[Y(t, e, h)];
						switch (n) {
							case 1:
								D(o[1], o[2]), i = t * J - viewX, s = e * Q - viewY;
								let r = J / 2;
								pat = dither[C[a + 320 * e + t]], A(i, s, i + r, s + r), pat = dither[C[a + 320 * e + t - 1]], A(i + r, s, i + J, s + r), pat = dither[C[a + 320 * e + t - 2]], A(i + r, s + r, i + J, s + Q), pat = dither[C[a + 320 * e + t - 3]], A(i, s + r, i + J, s + Q), 0 == getGID(t * J, (e + 1) * Q) && (pat = dither[8], D(o[3], o[4]), A(i, s + r, i + J, s + J), X(i, s + r, i + J, s + r, o[0], o[0]), X(i, s + Q - 1, i + Q, s + Q - 1, 1, 1)), 0 == getGID(t * J, (e - 1) * Q) && X(i, s, i + J, s, o[0], o[0]), 0 == getGID((t + 1) * J, e * Q) && (0 == getGID(t * J, (e + 1) * Q) ? (X(i + J - 1, s, i + J - 1, s + r, o[0], o[0]), X(i + J - 1, s + r, i + J - 1, s + Q - 1, 1, 1)) : X(i + J - 1, s, i + J - 1, s + Q - 1, o[0], o[0])), 0 == getGID((t - 1) * J, e * Q) && (0 == getGID(t * J, (e + 1) * Q) ? (X(i, s, i, s + r, o[0], o[0]), X(i, s + r, i, s + Q - 1, 1, 1)) : X(i, s, i, s + Q - 1, o[0], o[0]));
								break;
							case 2:
								break;
							default:
								i = t * J - viewX, s = e * Q - viewY, pat = dither[C[a + 320 * e + t]], A(i, s, i + J, s + Q, o[4], o[5])
						}
					}
				drawSwitches(), enemies.forEach(function(t) {
						t.draw()
					}), bullets.forEach(function(t) {
						t.draw()
					}), particles.forEach(function(t) {
						t.draw()
					}), batteries.forEach(function(t) {
						t.draw()
					}), player.draw(), D(22, 22), O(["HEALTH", 5, 5, 1, 1, "left", "top", 1, 22, player.hit ? 2 : 0, 4]), pat = dither[8], A(42, 5, 42 + player.health / 2, 10, 64, 11), D(22, 22), O(["SCORE " + multiplier.pad(3) + "X " + score.pad(11), i - 5, 5, 1, 1, "right", "top", 1, 22, player.score ? 2 : 0, 4]), O(["CELLS " + player.batteries.pad(4), 160, 5, 1, 1, "right", "top", 1, 22, player.score ? 2 : 0, 4]),
					function(t = cursorX, e = cursorY, i = 5, s = cursorColor, n = cursorColor2) {
						cursorColor2 = n, cursorColor = s, t |= 0, e |= 0, s |= 0;
						var o = -(i |= 0),
							r = 0,
							a = 2 - 2 * i;
						do {
							S(t - o, e + r), S(t - r, e - o), S(t + o, e - r), S(t + r, e + o), (i = a) > r || (a += 2 * ++r + 1), (i > o || a > r) && (a += 2 * ++o + 1)
						} while (0 > o)
					}(mouse.x, mouse.y, 3, 22)
			}
		}, states.gameover = {
			step: function(t) {
				Key.justReleased(Key.SPACE) && (player.health = 100, score = 0, player.batteries = 20, player.x = 3840, player.y = 2400, player.score = 0, enemies = [], batteries = [], spawnEnemies(12e3), counts.switchesActivated = 0, counts.enemiesKilled = 0, counts.totalEnemies = enemies.length, switches.forEach(t => {
					t.state = 0
				}), y = h, A(0, 0, 320, 200, 0, 0), y = o, state = "game")
			},
			draw: function(t) {
				y = o, I(0), w = l, mapPal = [1, 31], P(0, 0, i, s, 0, 0, 0, 0, mapPal), switches.forEach(t => {
					4 == t.state && (D(22, 22), S(t.x, t.y))
				}), D(7, 7), O(["THIS GAME MADE POSSIBLE BY\nTHE AMAZING TRAVIS GERLECZ\nWHO LENT ME HIS LAPTOP\nFOR THE MONTH OF JS13K", i / 2, 10, 2, 3, "center", "top", 1, 7, 0]), D(0, 5), O(["GAME OVER", i / 2, 80, 3, 9, "center", "top", 4, 4, 16, 10, 3]), D(7, 7), O([counts.enemiesKilled + " ACHROMATS VANQUISHED\n" + counts.switchesActivated + " CHROMA NODES RESTORED", i / 2, 150, 2, 7, "center", "top", 1, 7, 0]), D(22, 22), O(["PRESS SPACE TO PLAY AGAIN", i / 2, 175, 2, 9, "center", "top", 1, 7, 0])
			}
		}, window.init()
	}();