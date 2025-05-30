! function() {
	function setFont(e) {
		Ap.font = e ? "normal lighter 12px" : "normal lighter 20px monospace"
	}

	function Ah(e, t) {
		return !(t.left > e.right || t.right < e.left || t.top > e.AJ || t.AJ < e.top)
	}

	function Ai(e, t, a) {
		return af[e][t] * a / 2
	}

	function Ad(e, t, a, n, i, r) {
		var s = this;
		s.x = e, s.y = t, s.vx = a, s.vy = n, s.size = i, s.ac = r, s.Aw = 100, s.d = function() {
			return s.x += s.vx, s.vy += .2, s.y += s.vy, s.size *= 1, --s.Aw < 0
		}, s.ag = function() {
			Ap.fillStyle = "hsla(" + s.ac + "," + s.Aw + "%, " + s.Aw + "%, " + s.Aw / 100 + ")", Ap.fillRect(s.x, s.y, s.size, s.size)
		}
	}

	function Ac(e, t, a, n, i) {
		for (var r = 0; r < e.D.length; r++) {
			var s = 15 & e.D[r];
			aq.push(new Ad(e.x + (e.aa ? s : 15 - s) * e.e, e.y + (e.D[r] >> 4) * e.e, ((e.aa ? s : 15 - s) - 8) * t + a, ((e.D[r] >> 4) - 8) * t + n - 2, e.e, i))
		}
	}

	function randomAds() {
		aq.push(new Ad(-at.x + 1024 * Math.random(), at.y + 720 * Math.random(), 0, .1, 2, 360 * Math.random()))
	}

	function Ae(e, t, a, n) {
		ar.push(new Af(e, t, a, n))
	}

	function restartAK(e) {
		var t = levels[currentAK];
		enemies = [], ap = [], an = [], ar = [], Ap.translate(-at.x, -e + at.y), at.x = 0, at.y = e, Am.reset(), aw.reset(), ax = void 0, xlevel = AKGenerator(t), xAxis = 0, yAxis = 0
	}

	function nextAK() {
		currentAK = levels[currentAK].nextl, restartAK(at.y)
	}

	function bl(vx, vy) {
		Ap.fillStyle = "rgba(0,0,0,0.1)", Ap.fillRect(vx, vy, 1024, 720), randomAds(), Ap.fillStyle = Ab[1], Ap.strokeStyle = "hsl(" + ++hue % 720 + ",50%,50%)", Ap.font = "normal lighter 242px fantasy", Ap.strokeText("VIER", vx + 512, vy + 216), Ap.font = "normal lighter 30px fantasy", Ap.lineWidth = 1, Ap.strokeText("W i z a r d    W a r s", vx + 512, vy + 360), Ap.font = "normal lighter 20px monospace", Ap.fillText("Press         to Start", vx + 512, vy + 432), Ap.fillText("made by @agar3s", vx + 512, vy + 648), Ap.fillStyle = as % 16 == 0 ? Ab[1] : Ab[0], Ap.fillText("      <Enter>         ", vx + 512, vy + 432);
		for (var i = aq.length - 1; i >= 0; i--) with(aq[i]) ag(), d() && aq.splice(i, 1)
	}

	function bm(e, t) {
		Ap.fillStyle = "rgba(0,0,0,0.1)", Ap.fillRect(e, t, au.w, 720), Ap.fillStyle = wbae, setFont(0), Ap.ft("PAUSE", e + 512, t + 144), Ap.ft("Controls", e + 512, t + 216), Ap.ft("<S>: Shoot", e + .5 * au.w, t + 288), Ap.ft("<- : move to left ", e + .2 * au.w, t + 720 * .48), Ap.ft("-> : move to right", e + .2 * au.w, t + 381.6), Ap.ft("<space>   : jump       ", e + .5 * au.w, t + 720 * .48), Ap.ft("<space>2X : double jump", e + .5 * au.w, t + 381.6), Ap.ft("<D> : next element    ", e + .8 * au.w, t + 720 * .48), Ap.ft("<A> : previous element", e + .8 * au.w, t + 381.6), Ap.ft("Powers", e + 512, t + 453.6), Ap.ft("      beats      ", e + 512, t + 720 * .7), Ap.ft("      beats     ", e + .7 * au.w, t + 576), Ap.ft("     beats    ", e + 512, t + 648), Ap.ft("    beats      ", e + .3 * au.w, t + 576), Ap.fillStyle = Ab[1], Ap.ft("Water            ", e + 512, t + 720 * .7), Ap.ft("          Water", e + .3 * au.w, t + 576), Ap.fillStyle = Ab[2], Ap.ft("Earth           ", e + .7 * au.w, t + 576), Ap.ft("            Earth", e + 512, t + 720 * .7), Ap.fillStyle = Ab[3], Ap.ft("Fire          ", e + 512, t + 648), Ap.ft("            Fire", e + .7 * au.w, t + 576), Ap.fillStyle = Ab[0], Ap.fillText("Air            ", e + .3 * au.w, t + 576), Ap.fillText("           Air", e + 512, t + 648)
	}

	function bn(e, t) {
		Ap.fillStyle = "rgba(0,0,0,0.6)", Ap.fillRect(e, t, au.w, 720), Ap.fillStyle = wbae, setFont(0), Ap.fillText("DEAD", e + 512, t + 216), setFont(1), Ap.fillText("enter to restart level", e + 512, t + 360)
	}

	function Al() {
		var wx = -at.x,
			wy = at.y;
		Ap.clearRect(wx, wy, au.w, au.h), xlevel.ag(wx, wy), Am.b(.8), xlevel.Av(Am), aw.del || aw.d(), xlevel.onPlayerX(Am.x);
		for (var j = ap.length - 1; j >= 0; j--) with(ap[j]) d(), S.ag(), as % 4 == 0 && ah(), as % 2 == 0 && Av(), (ai || del) && ap.splice(j, 1);
		for (var j = enemies.length - 1; j >= 0; j--) with(enemies[j]) {
			if (del) {
				enemies.splice(j, 1), xlevel.onAWDied();
				continue
			}
			S.ag(), S.b(.8), xlevel.Av(S), d(), as % 2 == 0 && S.ah()
		}
		for (var j = an.length - 1; j >= 0; j--) with(an[j]) d(), S.ag(), as % 4 == 0 && ah(), as % 2 == 0 && v(Am.Aq()), (ai || del) && an.splice(j, 1);
		for (var i = aq.length - 1; i >= 0; i--) with(aq[i]) ag(), d() && aq.splice(i, 1);
		for (var i = ar.length - 1; i >= 0; i--) with(ar[i]) d(), xlevel.Av(S), S.ag(), as % 2 == 0 && v(Am.Aq()), del && ar.splice(i, 1);
		as % 8 == 0 && firexx.u(), firexx.c(), as % 2 == 0 && Am.ah(), aw.del ? bo = "d" : (Am.ag(), aw.aj(), aw.ag(wx, wy)), aw.S.x > 450 - wx && aw.S.x < xlevel.w - au.w + 450 ? (at.x -= aw.S.vx, xxx = -aw.S.vx) : xxx = 0, yyy = 0, wy - at.oY < -au.h && aw.S.y + at.oY + 16 * e > wy + au.h && aw.S.vy > 0 ? yyy = -aw.S.vy : aw.S.y - at.oY < at.y && (aw.S.vy < 0 ? yyy = -aw.S.vy : 0 == aw.S.vy && (yyy = yOld - aw.S.y)), at.y -= yyy, yOld = aw.S.y, Ap.translate(xxx, yyy), dBackground(xxx)
	}

	function bj() {
		bp[bo](-at.x, at.y), 256 & az && (actionsScreen[bo](1), az -= 256), as % 64 == 0 && (as = 0), as++, ra(bj)
	}
	var doc = document;
	doc.get = doc.getElementById;
	var i, j, xlevel, Ao = doc.get("c"),
		Ap = Ao.getContext("2d"),
		e = 4,
		ppp = 16,
		pp1 = 15,
		au = {
			w: 1024,
			h: 720
		},
		at = {
			x: 0,
			y: -720,
			oY: 250
		},
		bs = "#000",
		wbae = "#fff",
		xAxis = 0,
		yAxis = 0,
		currentAK = "level1",
		av = (innerHeight - 100) / au.h;
	Ao.width = au.w * av, Ao.height = au.h * av, Ap.scale(av, av), Ap.translate(at.x, -at.y);
	var ap = [],
		an = [],
		Aj = [55, 205, 115, 25, 99],
		Ab = ["yellow", "#09F", "#1F0", "#F60", "purple"],
		enemies = [],
		aq = [],
		ar = [],
		ax = null,
		elementalNames = ["Air", "Water", "Earth", "Fire"];
	Ap.textBaseline = "middle", Ap.textAlign = "center", setFont();
	for (var Ax = 0, ay = ["ms", "moz", "webkit", "o"], x = 0; x < ay.length && !window.requestAnimationFrame; ++x) requestAnimationFrame = window[ay[x] + "RequestAnimationFrame"];
	requestAnimationFrame || (requestAnimationFrame = function(e) {
		var t = (new Date).getTime(),
			a = Math.max(0, 16 - (t - Ax)),
			n = setTimeout(function() {
				e(t + a)
			}, a);
		return Ax = t + a, n
	}), ra = requestAnimationFrame;
	var az = 0,
		Aa = {
			37: 1,
			38: 2,
			39: 4,
			40: 8,
			65: 16,
			83: 32,
			68: 64,
			32: 128,
			13: 256
		};
	doc.addEventListener("keydown", function(e) {
		var t = e.keyCode || e.which;
		Aa[t] && (az |= Aa[t], e.preventDefault())
	}), doc.addEventListener("keyup", function(e) {
		var t = e.keyCode ? e.keyCode : e.which;
		az & Aa[t] && (az ^= Aa[t], e.preventDefault())
	});
	for (var af = [
			[0, 4, 2, 1],
			[1, 0, 4, 2],
			[2, 1, 0, 4],
			[4, 2, 1, 0]
		], Ak = function(e, t) {
			var a = this;
			a.elements = e, a.charges = [], a.locks = [0, 0, 0, 0], a.current = a.elements[0], a.bq = t;
			for (var n = 0; n < e.length; n++) a.charges.push(t);
			a.bd = function(e, t, n) {
				if (a.charges[a.current]-- > 0) {
					var i = new Power(a.current, 2, 1, t, n, Am.aa ? 13 : -13, e);
					ap.push(i), a.za()
				} else a.charges[a.current] = 0, a.za()
			}, a.lock = function(e) {
				a.locks[e] = 1
			}, a.za = function() {
				a.bq = a.charges[a.current]
			}, a.nextElement = function() {
				a.current++, a.current > 3 && (a.current = 0)
			}, a.ag = function(e, t) {
				for (var n = 0; 4 > n; n++) a.locks[n] || (Ap.fillStyle = n == a.current && as % 8 == 0 ? "#000" : Ab[n], Ap.fillText("" + a.charges[n], e + 40 + (n % 2 == 0 ? 35 : 1 == n ? 69 : 0), t - 40 - (n % 2 == 1 ? 30 : 0 == n ? 60 : 0)));
				firexx.x = e + 50, firexx.y = t - 95, firexx.ag()
			}
		}, fire = "{f{g{h{i{u!$%056?@ABFORV`bcefostu~,", AX = '{H{I{X{Y"#$134ACEQSVacdsu~.~1~=~@~M~P~]~^~`~a', Ar = '{I{J{Y{Z"#$134ACERSVcdsu~.~0~=~?~M~O~]~^~_~`', AXrun = '{Y{Z{i{j"#$134ACDESVWbcdqru~)~*~+~0~9~A~Q~a~b', AXjump = "{Z{[{g{h{i{j{k!#$134ACESTcesu~-~0~=~?~L~O~\\~_", AZ = "ABCDEQSUabcdequ~,~0~<~@~L~P~\\~]~^~_~`", ab = ["", '~A~>~0tqfUD2{i{h~@~=~1udVE1$#"{I{H', "B65VREA", "~@~>tD2('&%{m{j{i~?~=udB651\"{J{I", "~_~P~O~J~;~:~,tUB~b~a~Q~9~+~*~)uqWEA", '~`~M~?~>~=~/T2{k{[~P~J~A~;~:~0~,rdbVB1"{i{Y', "~k~j~Lo_N>~i~Y~Im]M=.", "~p~n~m~l~`~]~~P~M~=~0~$pi`YOG?92({m{g{^{U{N{J{E{9{4{%~t~s~k~j~b~[~Z~R~K~J~;~%njb^[NKA>;/+!{p{k{`{[{O{K{H{;{8{*", "~o~_~O~N~?~>~#hXPA@8'{l{]{M~a~Q~L~A~<~$oi_ZYOJ?:*{o{_{N", "~/~.~-uqecaTR", "~?~>~=~0~,usqdb", "~O~N~M~@~<~0~.~,tr", "~`~_~^~]~P~O~N~M~b~a~Z~Y~R~Q~J~I~B~A~2~1", "~^~N~>~.s{j{i{[{X~a~]~~Q~M~L~<~0~,uTR{J{I{;{8", "~o~n~m~^~~O~M~>~=~.~-pF6{3~q~p~k~`~[~P~L~?~<~/~,soVG{U", "~]~Na`5%{2~o~l~^~~O~M~.p_UF6{V", "~Y~X~:~+X9(~k~j~i~h~$~#8", "~d~c~B~1N-{s~t~s~r~q~@nm.", ".{r2{u{d{c{b", "{>{3{.{#", "{Y{X{J{G{l{e{9{8{*{'", "{{U", "{9{8{*{'{Y{X{M{J{G{D", "{>{3", "{Y{X{J{G{-{${9{8{.{*{'{#", "{<{5", "{{U{9{8{*{'{Y{X{J{G", "{l{e{M{D{<{5{-{$"], defaultAnimations = {
			i: {
				kf: "",
				f: [0]
			}
		}, bw = {
			i: {
				kf: AX,
				f: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
			},
			p: {
				kf: Ar,
				f: [2, 3, 3, 2, 0, -1]
			},
			r: {
				kf: AXrun,
				f: [0, 4, 0, 5, 0, 5, 0, 4, 0]
			},
			j: {
				kf: AXjump,
				f: [0]
			}
		}, Ay = function(e) {
			for (var t = new Int16Array(ppp), a = 0; a < e.length; a++) t[e[a] >> 4] |= 1 << pp1 - (15 & e[a]);
			return t
		}, Az = function(e) {
			for (var t = 0, a = e[t], n = []; a;) {
				var i = 85;
				"{" == a[0] && (a = e[++t], i = 0), "~" == a[0] && (a = e[++t], i = 170), n.push(a.charCodeAt() + i - 33), a = e[++t]
			}
			return n
		}, faceMask = Az("{%{&{'{({){*{+{,{5{6{7{8{9{:{;{<{E{F{G{H{I{J{K{L{U{V{W{X{Y{Z{[{\\{e{f{g{h{i{j{k{l{u!\"#$%&'"), AM = function(t, a) {
			var n = this;
			n.w = new Int16Array(ppp), n.D = Az(t), n.ab = [], n.ad = 0, n.w = Ay(n.D), n.AD = 2.2 * e, n.n = .25, n.e = 0, n.At = a || defaultAnimations, n.hp = 1, n.reset = function() {
				n.ac = bs, n.x = 0, n.y = -720, n.vx = 0, n.vy = 0, n.aa = 1, n.p = 0, n.z = 0
			}, n.reset(), n.AA = function(e) {
				n.e = e, n.height = n.width = 16 * n.e
			}, n.AA(e), n.generateFace = function() {
				for (var e = [], t = Ay(n.D), a = Ay(faceMask), i = 0; ppp > i; i++)
					for (var r = t[i] & a[i], s = 0; ppp > s; s++) 1 << pp1 - s & r && e.push(i * ppp + s);
				n.faceAM = e
			}, n.generateFace(), n.u = function() {
				for (var e = [], t = 0; ppp > t; t++)
					for (var a = 0; ppp > a; a++) n.w[t] & 1 << pp1 - a && e.push(a * ppp + pp1 - t);
				n.D = e, n.w = Ay(e)
			}, n.AB = function(e) {
				n.ab.push(Ay(e)), n.ad = n.ab.length - 1
			}, n.AC = function() {
				n.y += n.vy, n.vy < 0 && (n.p = 0)
			}, n.ah = function() {
				if (++n.ad >= n.ab.length && (n.ad = 0), "string" == typeof n.ab[n.ad]) return n.o(n.ab[n.ad]);
				for (var e = [], t = 0; ppp > t; t++) {
					n.w[t] = n.w[t] ^ n.ab[n.ad][t];
					for (var a = 0; ppp > a; a++) 1 << pp1 - a & n.w[t] && e.push(t * ppp + a)
				}
				n.D = e
			}, n.xi = function() {
				return n.x + 5 * n.e
			}, n.xpi = function() {
				return n.x + n.e
			}, n.xf = function() {
				return n.x + 11 * n.e
			}, n.xpf = function() {
				return n.x + 14 * n.e
			}, n.yi = function() {
				return n.y + 2 * n.e
			}, n.yil = function() {
				return n.y + 12 * n.e
			}, n.yf = function() {
				return n.y + 16 * n.e
			}, n.b = function(e) {
				n.vy += e, n.vy > 3 * n.e && (n.vy = 3 * n.e)
			}, n.AH = function(e) {
				n.p || n.o("i"), n.vy = 0, n.p = 1, n.z = 1, n.downed = 0, n.y = e - 15 * n.e
			}, n.left = function() {
				n.vx > 0 && (n.vx = 0), n.vx -= n.n, n.p && n.o("r"), n.vx < -n.AD && (n.vx = -n.AD), n.aa = 0
			}, n.right = function() {
				n.vx < 0 && (n.vx = 0), n.vx += n.n, n.p && n.o("r"), n.vx > n.AD && (n.vx = n.AD), n.aa = 1
			}, n.forward = function() {
				n.aa ? n.x + 17 * e + n.vx < xlevel.w ? n.right() : n.g() : n.x + n.vx > 0 ? n.left() : n.g()
			}, n.turn = function() {
				n.aa = !n.aa
			}, n.g = function() {
				0 != n.vx && (n.vx = 0, n.o("i"))
			}, n.jump = function() {
				(n.p || n.z) && (n.vy = 3 * -n.e, n.vy < -20 && (n.vy = -20), n.p || (n.z = 0), n.p = 0, n.o("j"))
			}, n.d = function() {
				n.AC(), n.x += n.vx
			}, n.c = function() {
				n.x += n.vx
			}, n.dY = function() {
				n.y += n.vy
			}, n.ag = function() {
				Ap.fillStyle = n.ac;
				for (var e = 0; e < n.D.length; e++) {
					var t = 15 & n.D[e];
					Ap.fillRect(n.x + (n.aa ? t : 15 - t) * n.e, n.y + (n.D[e] >> 4) * n.e, n.e, n.e)
				}
			}, n.agFace = function(e, t) {
				Ap.fillStyle = n.ac;
				for (var a = 0; a < n.faceAM.length; a++) {
					var i = 15 & n.faceAM[a];
					Ap.fillRect(e + 9 * (n.aa ? i : 15 - i), t + 9 * (n.faceAM[a] >> 4), 9, 9)
				}
			}, n.o = function(e) {
				if (n.t != e && n.At[e]) {
					n.t = e, n.ab = [];
					var t = n.At[e].f;
					for (n.w = Ay(Az(n.At[e].kf)), j = 0; j < t.length; j++) {
						var a = ab[t[j]];
						if (-1 == t[j]) return n.ad = n.ab.length, n.ab.push("i");
						n.AB(Az(a))
					}
				}
			}, n.ba = function(e) {
				return n.hp -= e, n.hp < 0 && (n.hp = 0), 0 == n.hp
			}, n.Aq = function() {
				return {
					left: n.xi(),
					right: n.xf(),
					top: n.yi(),
					AJ: n.yf()
				}
			}
		}, AF = function(e, t, a) {
			var n = this;
			n.x = e, n.y = t, n.width = a, n.AG = 1, n.Av = function(e) {
				(e.xi() > n.x && e.xi() < n.x + n.width || e.xf() > n.x && e.xf() < n.x + n.width || e.xi() < n.x && e.xf() > n.x + n.width) && n.y > e.yil() && n.y + 5 < e.yf() && e.vy >= 0 ? (n.AG = 1, e.AH(t)) : n.AG = 0
			}, n.ag = function() {
				Ap.fillRect(n.x, n.y, n.width, 5)
			}
		}, Power = function(e, t, a, n, i, r, s) {
			var o = this;
			o.type = e, o.D = fire, o.S = new AM(o.D), o.ai = 0, o.ac = Aj[e], o.S.ac = Ab[e], o.S.x = n, o.S.y = i, o.S.AA(t), o.S.vx = r, o.S.vy = s, o.S.aa = r > 0, o.damage = a, o.del = 0, o.Av = function() {
				for (var e = enemies.length - 1; e >= 0; e--) {
					var t = enemies[e].S;
					Ah(t.Aq(), o.S.Aq()) && (enemies[e].ba(o.type, o.damage, o.S.aa), o.del = 1, Ac(o.S, 2, o.S.vx / 2, -3, o.ac))
				}
			}, o.v = function(e) {
				Ah(e, o.S.Aq()) && (aw.ba(o.type, o.damage, o.S.aa), o.del = 1, Ac(o.S, 2, o.S.vx / 2, -3, o.ac))
			}, o.d = function() {
				o.S.c(), o.S.dY(), o.ai = o.S.x > xlevel.w || o.S.x < -10
			}, o.ah = function() {
				o.S.u()
			}
		}, Af = function(e, t, a, n) {
			var i = this;
			i.type = e, i.AP = t, i.S = new AM(AZ), i.ac = Aj[e], i.S.ac = Ab[e], i.S.x = a, i.S.y = n, i.S.vy = .5, i.S.p = 0, i.times = 256, i.del = 0, i.d = function() {
				var t = as % 32 == 0;
				i.S.p ? (i.del = 0 == i.times--, t = as % ~~(i.times / 16) == 0) : i.S.dY(), i.S.ac = t ? wbae : Ab[e]
			}, i.v = function(e) {
				Ah(e, i.S.Aq()) && (aw.charge(i.type, i.AP), i.del = 1, Ac(i.S, 0, 0, -4, i.ac))
			}
		}, monster0 = "{'{({){*{7{8{9{:{G{H{I{J{W{X{Y{Z{e{f{g{h{i{j{u!\"#$%./2367>?BCFGHRSbcrs~-~.~/~0~1~2~=~>~?~@~A~B~I~J~K~L~Q~R~Y~Z~[~\\~a~b", monster1 = "{3{4{8{9{B{C{D{E{H{I{J{K{S{T{U{V{X{Y{[{\\{d{e{f{h{i{l{u!$%&'1267BCQRSTUabcflpqrst~\"~'~*~+~,~.~8~9~:~;~I~J", monster2 = "{&{'{({){*{5{6{7{8{:{;{F{G{H{K{O{V{W{X{Y{Z{[{_{`{h{i{j{k{n{o{p!\"#$%)*+./013567:;=ABCDEHIJKMSZ[]^abcdejmnqsu~%~-~.~/~;~<~@~A~I~J~K~Q~R~Y~Z~[~a~b~i~q~r~s~t", monster3 = '{4{5{6{7{8{G{H{I{U{V{W{X{Y{g{h"123@BCDGORUV_bors~,~/~<~?~L~P~[~`~k~l~p~q', boss1 = "{D{L{S{T{V{W{X{Y{Z{\\{]{c{d{e{f{g{h{i{j{k{l{m{t{u#&'0123456@ABCDEFQRSTUabcderst", boss4 = "{&{'{({){*{5{6{7{8{9{:{;{E{H{K{U{X{[{e{f{j{k{u!%&./012345678=ABCDEIMRSTY]^bcdhimnrst~#~$~,~-~.~/~0~;~<~@~A~J~K~Q~R~Z~[~a~b~h~i~j~k~q~r~s~t", boss5 = '{6{:{E{F{I{J{K{V{W{X{Y{Z{[{b{c{d{g{h{i{k{s{t{u#$%&/012345@ABCDEFGOQRSTUX_cdimostu~"~$~)~-~.~/~0~3~>~?~M~N~]', boss6 = "{'{*{4{7{8{9{:{={D{E{H{I{L{M{U{V{[{\\{e{f{g{h{i{j{k{l{s!\"#$%&).13469?@CDGHSTbcderu~,~-~0~1~<~A~K~L~Q~R~[~\\~a~b", elemental0 = '{8{;{H{I{J{K{Y{Z{g{k"#$%&123456@CEPRSTVW`bdru~,~0~<~?~L~M~O~P~Q~\\~]~_~`~a', by = {
			A0: monster0,
			A1: monster1,
			A2: monster2,
			A3: monster3,
			A4: boss1,
			A5: boss6,
			A6: AX,
			W0: monster0,
			W1: elemental0,
			W2: monster2,
			W3: monster3,
			W4: boss1,
			W5: AX,
			W6: AX,
			E0: monster0,
			E1: elemental0,
			E2: monster2,
			E3: monster3,
			E4: boss4,
			E5: AX,
			E6: AX,
			F0: monster0,
			F1: monster1,
			F2: monster2,
			F3: monster3,
			F4: boss1,
			F5: AX,
			F6: AX
		}, bx = {
			B0: {
				i: {
					kf: monster0,
					f: [0, 0, 0, 12, 0, 12]
				}
			},
			B1: bw,
			B2: {
				i: {
					kf: monster2,
					f: [0, 6, 7, 8, 8, 7, 6, 0]
				}
			},
			B3: {
				i: {
					kf: monster3,
					f: [0, 14, 0, 0, 0, 14]
				}
			},
			B4: {
				i: {
					kf: boss1,
					f: [9, 0, 10, 11, 0, 0, 11, 10, 9, 0]
				}
			},
			B5: {
				i: {
					kf: boss6,
					f: [19, 0, 0, 20, 21, 22, 23, 0, 0, 0, 24, 25, 26, 27, 0, 0, 0]
				}
			},
			B6: bw
		}, i = 0; 7 > i; i++) bx["A" + i] = bx["B" + i], bx["W" + i] = bx["B" + i], bx["E" + i] = bx["B" + i], bx["F" + i] = bx["B" + i];
	bx.A1 = {
		i: {
			kf: monster1,
			f: [0]
		}
	}, bx.F1 = bx.A1, bx.E1 = {
		i: {
			kf: elemental0,
			f: [0, 0, 0, 0, 13]
		}
	}, bx.W1 = bx.E1, bx.E4 = {
		i: {
			kf: boss4,
			f: [0, 0, 16, 0, 0, 16, 0, 0, 17, 0, 0, 17]
		}
	}, bx.F4 = {
		i: {
			kf: boss5,
			f: [0, 0, 18]
		}
	}, bx.W4 = bx.F4;
	var Ba = {
		a: "ljlw90taw90",
		b: "lf80sw30asw30t",
		c: "lg60asw5aw5r20s",
		d: "ljdsw60ajdw30at",
		e: "ltja30w20",
		f: "ltg30a30w20",
		m: "w20hk20f9w9m20tas",
		n: "ljw20tg60stf30asw20",
		o: "lja10lf30jla10t",
		p: "w15hk30af15am30tw15am30af15k30at",
		q: "w15thk30af15am30tw15am30f15k30a",
		r: "ljda3jsw40hk20a5tf30sxa3"
	};
	Ba.z = Ba.m + "zx" + Ba.e + "z" + Ba.c + "z" + Ba.d + "jw20z";
	var Bc = {
			minion: "2060F0",
			elemental: "3102E2",
			monster: "3153C1",
			wizard: "415291",
			Bf: "304361",
			boss1: "310490",
			boss2: "420490",
			boss3: "430590",
			boss4: "330730",
			boss5: "420551",
			boss6: "750621",
			boss7: "820811"
		},
		Bb = {
			a0: "00" + Bc.minion,
			a1: "01" + Bc.minion,
			a2: "02" + Bc.minion,
			a3: "03" + Bc.minion,
			b0: "10" + Bc.elemental,
			b1: "11" + Bc.elemental,
			b2: "12" + Bc.elemental,
			b3: "13" + Bc.elemental,
			c0: "20" + Bc.monster,
			c1: "21" + Bc.monster,
			c2: "22" + Bc.monster,
			c3: "23" + Bc.monster,
			d0: "30" + Bc.wizard,
			d1: "31" + Bc.wizard,
			d2: "32" + Bc.wizard,
			d3: "33" + Bc.wizard,
			e0: "10" + Bc.Bf,
			e1: "11" + Bc.Bf,
			e2: "12" + Bc.Bf,
			e3: "13" + Bc.Bf,
			f0: "20" + Bc.Bf,
			f1: "21" + Bc.Bf,
			f2: "22" + Bc.Bf,
			f3: "23" + Bc.Bf,
			x1: "23" + Bc.boss1,
			x2: "10" + Bc.boss2,
			x3: "40" + Bc.boss3,
			x4: "42" + Bc.boss4,
			x5: "41" + Bc.boss5,
			x6: "43" + Bc.boss5,
			x7: "50" + Bc.boss6,
			z1: "60" + Bc.boss7,
			z2: "61" + Bc.boss7,
			z3: "62" + Bc.boss7,
			z4: "63" + Bc.boss7
		},
		generateMonster = function(e, t, a) {
			var n = e[0],
				i = e[1],
				r = parseInt(e[2], 16),
				s = parseInt(e[3] + e[4], 16),
				o = parseInt(e[5]) + 4,
				A = 3 * parseInt(e[6], 16),
				l = e[7];
			return new AW(n, i, 100 * t, r, a, s, o, A, l)
		},
		bt = ["Minion", "Elemental", "Monster", "Wizard", "Master", "Grand Master", "Gran Elemental"],
		AW = function(e, t, a, n, i, r, s, o, A) {
			var l = this;
			l.name = elementalNames[t] + " " + bt[e], l.damage = parseInt(e) + 1, l.ac = Aj[t], l.monsterCode = elementalNames[t][0] + e, l.S = new AM(by[l.monsterCode], bx[l.monsterCode]), l.S.ac = "hsl(" + l.ac + ",100%, 50%)", l.S.o("i"), l.S.AA(s), l.S.AD = n || 2.2 * l.e, l.S.x = a, l.S.y = -720, l.AN = new Ak([t]), l.AO = r, l.S.hp = r, l.q = o, l.maxColdown = o, l.triggerType = A || 2, l.AV = 100, l.del = 0, l.AU = function(e) {
				for (var t = "", a = 0; a < e.length; a++) {
					var n = e[a],
						i = parseInt(e.substring(a + 1, a + 4));
					if (i) {
						a += ("" + i).length;
						for (var r = 0; i > r; r++) t += n
					} else t += n
				}
				l.AQ = t
			}, l.AU(i || "f60taw20"), l.AY = 0, l.attack1 = function() {
				if (l.q <= 0) {
					l.S.o("p");
					var e = -(l.S.x - Am.x),
						t = -(l.S.y - Am.y),
						a = Math.sqrt(e * e + t * t);
					e /= a, t /= a;
					var n = new Power(l.AN.current, l.S.e / 3, l.damage, l.S.x + 24, l.S.y, 3 * e, 3 * t);
					an.push(n), l.q = l.maxColdown
				}
			}, l.bb = function() {
				l.S.aa = l.S.x < Am.x, l.S.forward()
			}, l.be = function() {
				l.S.aa = l.S.x > Am.x, l.S.forward()
			}, l.actions = {
				f: l.S.forward,
				t: l.S.turn,
				j: l.S.jump,
				m: function() {},
				a: l.attack1,
				b: l.attack2,
				c: l.attack3,
				s: l.S.g,
				w: function() {},
				l: function() {
					l.S.p || l.AY--
				},
				d: function() {
					l.S.p ? l.S.g() : (l.AY--, l.S.forward())
				},
				g: l.bb,
				r: l.be,
				h: function() {
					l.S.AC = function() {}
				},
				x: function() {
					l.S.AC = function() {
						l.S.y += l.S.vy, l.S.vy < 0 && (l.S.p = 0)
					}
				},
				u: function() {
					l.S.y -= 3
				},
				n: function() {
					l.S.y += 3
				},
				k: function() {
					l.actions.u(), l.S.forward()
				},
				m: function() {
					l.actions.n(), l.S.forward()
				},
				z: function() {
					l.AN.nextElement(), console.log("nx", l.AN.current), l.ac = Aj[l.AN.current], l.S.ac = "hsl(" + l.ac + ",100%, 50%)"
				}
			}, l.ao = function() {
				var e = l.AQ[l.AY];
				l.actions[e](), ++l.AY >= l.AQ.length && (l.AY = 0)
			}, l.d = function() {
				l.ao(), l.S.d(), --l.q < 0 && (l.q = 0), l.S.y > 400 && (l.del = 1)
			}, l.triggers = [function() {
				Ae(l.AN.current, l.AO, l.S.x, l.S.y)
			}, function() {
				Ae(4, l.AO, l.S.x, l.S.y)
			}, function() {
				0 == ~~(10 * Math.random()) ? l.triggers[1]() : l.triggers[0]()
			}, function() {
				console.log("otra cosa")
			}], l.trigger = function() {
				l.triggers[l.triggerType]()
			}, l.ba = function(e, t, a) {
				var n = Ai(e, l.AN.current, t);
				l.S.x += (a ? 1 : -1) * n * (10 - l.damage), l.S.ba(n) && !l.del && (l.del = 1, Ac(l.S, t, 0, 0, l.ac), l.trigger("death")), ax = l
			}, l.agAvatar = function(e, t) {
				Ap.fillStyle = wbae, Ap.fillText(l.name, e - 120, t + 20), Ap.fillStyle = as % 16 == 0 ? bs : "yellow", Ap.fillRect(e - 335, t + 35, 300, 8), Ap.fillStyle = "#300", Ap.fillRect(e - 334, t + 36, 300 * (1 - l.S.hp / l.AO) - 2, 6), l.del && as % 8 != 0 || l.S.agFace(e - 135, t + 50)
			}
		},
		xf = 0,
		yf = 0,
		platformFunctions = {
			a: function(e, t) {
				return -t + yf
			},
			b: function(e, t, a) {
				return -t + yf + a * (e - xf)
			},
			c: function(e, t, a, n) {
				var i = (e / n - xf) % (2 * Math.PI);
				return -t + yf + 200 * a * Math.cos(i)
			},
			d: function(e, t, a) {
				var n = (e - xf) % (2 * Math.PI);
				return -t + yf + 200 * a * Math.tan(n)
			},
			e: function(e, t, a) {
				return -t + yf - a * (e - xf)
			},
			f: function(e, t, a) {
				var n = (e - xf) % (2 * Math.PI);
				return -t + yf + 200 * a * Math.sin(n * n)
			},
			g: function(e, t, a, n) {
				return .005 * platformFunctions.b(e, t, a, n) * platformFunctions.c(e, t, a, n)
			},
			h: function(e, t, a) {
				return -t + yf + .005 * a * (e - xf - 650) * (e - xf - 650)
			},
			i: function(e, t, a) {
				return -t + yf + 800 + .005 * a * (e - xf - 400) * (e - xf - 400)
			},
			v: function(e, t, a, n) {
				return platformFunctions.a(e, t, a, n) * ((e - xf) / n % 3 == 0 ? 1 : 1e3)
			},
			w: function(e, t, a, n) {
				return platformFunctions.c(e, t, a, n) * ((e - xf) / n % 3 == 0 ? 1 : 1e3)
			},
			x: function(e, t, a, n) {
				return platformFunctions.c(e, t, a, n) * ((e - xf) / n % 2 == 1 ? 1e3 : 1)
			}
		},
		AK = function(e, t, a, n, r, s, o) {
			xf = 0, yf = 0;
			var A = this;
			A.w = e, A.h = 0, A.title = s, A.enemiesVector = t, A.totalEnemies = A.enemiesVector.length, A.remainingEnemies = 0, A.count = 0, A.Bi = a, A.AE = function(e, t) {
				var a = 0,
					i = 0,
					r = e[0];
				n = [];
				for (var s = 0; s <= A.w; s += A.Bi) {
					var o = platformFunctions[r](s, 0, t, A.Bi);
					A.h = o < A.h ? o : A.h, n.push(new AF(s, o, A.Bi)), ++a == e[i + 1] && (a -= e[i + 1], i += 2, r = e[i], yf = o, xf = s)
				}
			}, A.AE(n, r), A.backG = o, A.ag = function(e, t) {
				A.count++, o();
				var a = ~~(e / A.Bi);
				0 > a && (a = 0);
				var r = a + 1 + ~~(au.w / A.Bi);
				for (r >= n.length && (r = n.length - 1), Ap.fillStyle = "#A4A", i = a; r >= i; i++) n[i].ag();
				Ap.fillStyle = wbae, Ap.fillText(A.remainingEnemies + "/" + A.totalEnemies, e + 900, t + 650)
			}, A.onAWDied = function() {
				++A.remainingEnemies == A.totalEnemies && setTimeout(nextAK, 2e3)
			}, A.onPlayerX = function(e) {
				if (!(A.count < 60 || 0 == A.enemiesVector.length)) {
					var t = A.enemiesVector[0];
					e + au.w - 300 > t.S.x && (t.S.y = at.y, enemies.push(t), A.enemiesVector.splice(0, 1))
				}
			}, A.Av = function(e) {
				var t = ~~(e.xi() / A.Bi) - 1;
				0 > t && (t = 0);
				var a = ~~(e.xf() / A.Bi) + 1;
				for (a >= n.length && (a = n.length - 1), i = t; a >= i; i++) n[i].Av(e)
			}
		},
		AKGenerator = function(e) {
			for (var t = e.Bg, a = e.Bh, n = [], i = 0; i < t.length; i++) {
				var r = t[i],
					s = r[0] + r[1],
					o = r[2],
					A = parseInt(r.substring(3));
				n.push(generateMonster(Bb[s], A, Ba[o]))
			}
			var l = aw;
			return e.locks && l.lock(e.locks), e.skill && (l.selectSkill(e.skill), l.s = Aj[l.AN.current], l.S.ac = "hsl(" + l.s + ",100%, 50%)"), new AK(e.width, n, e.Bi, a, e.Bj, e.title, e.backG)
		},
		snowBack = function() {
			randomAds()
		},
		bsBack = function() {
			Ap.fillStyle = "#002", Ap.fillRect(-at.x, yAxis + at.y, au.w, au.h), snowBack()
		},
		greenBack = function() {
			Ap.fillStyle = "#121", Ap.fillRect(-at.x, yAxis + at.y, au.w, au.h), aq.push(new Ad(-at.x + 1024 * Math.random(), at.y + 720 * Math.random(), 4, 0, 1, 360 * Math.random()))
		},
		blueBack = function() {
			Ap.fillStyle = "#202", Ap.fillRect(-at.x, yAxis + at.y, au.w, au.h), aq.push(new Ad(-at.x + 1024 * Math.random(), at.y + 720 * Math.random(), 9, -10, 2, 30))
		},
		stormLoop = 0,
		stormBack = function() {
			stormLoop++, Ap.fillStyle = "#000", (stormLoop % 220 == 0 || stormLoop % 221 == 0 || stormLoop % 224 == 0 || stormLoop % 225 == 0 || stormLoop % 228 == 0 || stormLoop % 229 == 0 || stormLoop % 230 == 0 || stormLoop % 231 == 0) && (Ap.fillStyle = "#555"), Ap.fillRect(-at.x, yAxis + at.y, au.w, au.h), aq.push(new Ad(-at.x + 1024 * Math.random(), at.y + 720 * Math.random(), 0, 0, 2, 180 * Math.random()))
		},
		levels = {
			level1: {
				Bg: ["a3b4", "a3b9", "a3b12", "a3b15", "a1b24", "a1b27", "a1b30", "a1b35"],
				Bh: ["a", 10, "b", 20, "a", 10, "b", 7, "a", 15, "w", 15, "a", 15, "b", 15, "a", 30],
				width: 3700,
				Bi: 28,
				Bj: -.1,
				title: "The Beginning",
				nextl: "boss1",
				locks: [0, 2],
				skill: 1,
				backG: function() {
					Ap.ft("      S         ", xAxis + 200, yAxis - 300), Ap.ft("       ->                ", xAxis + 600, yAxis - 200), Ap.ft("      SPACE        ", xAxis + 1800, yAxis - 300), Ap.ft("      D                  ", xAxis + 2600, yAxis - 220), Ap.ft("                    ALL        ", xAxis + 3400, yAxis - 320), Ap.fillStyle = wbae, Ap.ft("press   to shoot", xAxis + 200, yAxis - 300), Ap.ft("press     to move forward", xAxis + 600, yAxis - 200), Ap.ft("Press   to change element", xAxis + 2600, yAxis - 220), Ap.ft("press       to jump", xAxis + 1800, yAxis - 300), Ap.ft("You must to destroy     enemies", xAxis + 3400, yAxis - 320)
				}
			},
			boss1: {
				Bg: ["x1n4"],
				Bh: ["c", 70],
				width: 1024,
				Bi: 20,
				Bj: -.05,
				title: "Fire Skeleton",
				nextl: "level2",
				locks: [0, 2],
				skill: 1,
				backG: function() {
					Ap.ft("            BOSS!", xAxis + 400, yAxis - 350), Ap.fillStyle = wbae, Ap.ft("Destroy the     ", xAxis + 400, yAxis - 350)
				}
			},
			level2: {
				Bg: ["a0b4", "a2b9", "a2b12", "a0b15", "a2b18", "a0b27", "a2c30", "a0c35", "a2c40", "a0c45"],
				Bh: ["a", 20, "b", 15, "a", 20, "b", 15, "a", 7, "v", 21, "a", 10, "b", 22, "a", 100],
				width: 4800,
				Bi: 27,
				Bj: -.3,
				title: "The Gate",
				nextl: "boss2",
				locks: [1, 3],
				skill: 2,
				backG: function() {
					Ap.ft("         VIER                                    ", xAxis + 400, yAxis - 350), Ap.ft("      A                                  ", xAxis + 1600, yAxis - 240), Ap.ft("      SPACE                                ", xAxis + 2600, yAxis - 380), Ap.ft("             charges                   ", xAxis + 4200, yAxis - 240), Ap.fillStyle = wbae, Ap.ft("With the      stone you can control the elements ", xAxis + 400, yAxis - 350), Ap.ft("Press   to change to the previous element", xAxis + 1600, yAxis - 240), Ap.ft("Press       two times to make a double jump", xAxis + 2600, yAxis - 380), Ap.ft("Enemies drop        for element energy", xAxis + 4200, yAxis - 240)
				}
			},
			boss2: {
				Bg: ["x2m4"],
				Bh: ["c", 30],
				width: 1024,
				Bi: 37,
				Bj: -.05,
				title: "Fire Dragon",
				nextl: "level3",
				locks: [1, 3],
				skill: 2,
				backG: function() {
					Ap.ft("      up                flying        ", xAxis + 400, yAxis - 350), Ap.fillStyle = wbae, Ap.ft("Press    arrow to shoot        enemies", xAxis + 400, yAxis - 350)
				}
			},
			level3: {
				Bg: ["b1b4", "b1a9", "b2a12", "b2a15", "b3m20", "b3m25", "b0m35", "b0m40", "c1a47", "c2a55", "b2a70", "c3b80"],
				Bh: ["a", 6, "f", 6, "a", 5, "b", 5, "a", 5, "b", 5, "x", 8, "c", 9, "a", 9],
				width: 8400,
				Bi: 149,
				Bj: -.5,
				title: "Air Palace",
				nextl: "boss3",
				backG: function() {
					Ap.ft("      Enter                  ", xAxis + 7650, yAxis - 1e3), Ap.ft("                          Masters!", xAxis + 8650, yAxis - 1100), Ap.fillStyle = wbae, Ap.ft("Elements are balanced", xAxis + 400, yAxis - 350), Ap.ft("    makes double damage to      ", xAxis + 700, yAxis - 250), Ap.ft("      makes double damage to      ", xAxis + 1250, yAxis - 350), Ap.ft("      makes double damage to     ", xAxis + 1950, yAxis - 200), Ap.ft("     makes double damage to    ", xAxis + 3650, yAxis - 300), Ap.ft("Press       to pause the game", xAxis + 7650, yAxis - 1e3), Ap.ft("I'm ready to destroy the         ", xAxis + 8650, yAxis - 1100), Ap.fillStyle = Ab[0], Ap.ft("Air                             ", xAxis + 700, yAxis - 250), Ap.ft("                            Air", xAxis + 3650, yAxis - 300), Ap.fillStyle = Ab[1], Ap.ft("                           Water", xAxis + 700, yAxis - 250), Ap.ft("Water                             ", xAxis + 1250, yAxis - 350), Ap.fillStyle = Ab[2], Ap.ft("                             Earth", xAxis + 1250, yAxis - 350), Ap.ft("Earth                            ", xAxis + 1950, yAxis - 200), Ap.fillStyle = Ab[3], Ap.ft("                             Fire", xAxis + 1950, yAxis - 200), Ap.ft("Fire                           ", xAxis + 3650, yAxis - 300)
				}
			},
			boss3: {
				Bg: ["x3m4"],
				Bh: ["c", 2, "x", 24, "c", 2],
				width: 1024,
				Bi: 50,
				Bj: -.1,
				title: "Air Master",
				nextl: "level4",
				backG: bsBack
			},
			level4: {
				Bg: ["d3m4", "d2m12", "d2m20", "d0m22", "b2a28", "b2a31", "b2a32", "b0m44", "b3m50", "a1c58", "a3c60", "a1c62", "a3c64", "c2b70", "c2a75", "d3d91", "d1d95", "d3d99"],
				Bh: ["a", 4, "g", 30, "a", 15, "b", 25, "a", 15, "b", 20, "w", 18, "a", 20, "e", 20, "x", 10, "d", 20, "a", 50, "v", 18, "e", 10, "a", 20, "e", 30, "a", 49],
				width: 10024,
				Bi: 27,
				Bj: -.55,
				title: "Earth Palace",
				nextl: "boss4",
				backG: greenBack
			},
			boss4: {
				Bg: ["x4o4"],
				Bh: ["h", 100],
				width: 1350,
				Bi: 50,
				Bj: -.01,
				title: "Earth Master",
				nextl: "level5",
				backG: greenBack
			},
			level5: {
				Bg: ["b1b4", "e1e19", "e3e24", "f1b30", "f3b32", "d3m40", "d1m44", "d0m48", "d2m56", "e0a67", "e3a70", "e1a73"],
				Bh: ["a", 4, "f", 5, "v", 9, "a", 3, "b", 3, "h", 3, "e", 3, "a", 4, "v", 6, "a", 6],
				width: 7650,
				Bi: 170,
				Bj: -.5,
				title: "Water & Fire Montains",
				nextl: "boss5",
				backG: blueBack
			},
			boss5: {
				Bg: ["x5p5", "x6q7"],
				Bh: ["b", 14, "a", 12, "e", 14],
				width: 1330,
				Bi: 35,
				Bj: -.1,
				title: "Water & Fire Masters",
				nextl: "level6",
				backG: blueBack
			},
			level6: {
				Bg: ["b2a10", "b2a12", "b2a14", "a0f25", "a2f26", "a2f27", "a0f28", "b1b38", "b3e40", "c0b68", "c2b70", "d1a106", "d3m108", "f0f110", "f2f11", "d3m113", "d1a115"],
				Bh: ["a", 60, "b", 60, "a", 60, "c", 30, "a", 60, "d", 20, "a", 60, "f", 60, "a", 60, "b", 20, "i", 30, "a", 20, "v", 60, "a", 60, "v", 33, "a", 99],
				width: 12e3,
				Bi: 16,
				Bj: -.8,
				title: "Grand Master Palace",
				nextl: "boss6a",
				backG: stormBack
			},
			boss6a: {
				Bg: ["x7z4"],
				width: 1200,
				Bh: ["a", 2],
				Bi: 700,
				Bj: 1,
				title: "Grand Master",
				nextl: "boss6b",
				backG: stormBack
			},
			boss6b: {
				Bg: ["z1r6", "z2r6", "z3r6", "z4r6"],
				width: 1800,
				Bh: ["a", 3],
				Bi: 700,
				Bj: 1,
				title: "Element's Avatar challenge",
				nextl: "ends",
				backG: stormBack
			},
			ends: {
				Bg: [],
				width: 1800,
				Bh: ["a", 3],
				Bi: 700,
				Bj: 1,
				title: "Grand master mode",
				nextl: "ends",
				backG: function() {
					Ap.ft("Congratulations! you beat the Game!", xAxis + 400, yAxis - 350), Ap.ft("==Thanks for playing==", xAxis + 600, yAxis - 150), Ap.ft("made by @agar3s", xAxis + 1400, yAxis - 150), Ap.ft("      F5                        ", xAxis + 1600, yAxis + 150), Ap.fillStyle = wbae, Ap.ft("press    to start the game again", xAxis + 1600, yAxis + 150)
				}
			}
		},
		Am = new AM(AX, bw);
	Am.o("i");
	var AT = function(S) {
			var m = this;
			m.S = S, m.S.AA(5), m.r = 0, m.down = 0, m.up = 0, m.reset = function() {
				m.del = 0, m.S.hp = 31, m.AO = 31, m.AN = new Ak([0, 1, 2, 3], 99), m.q = 16, m.s = Aj[m.AN.current], m.S.ac = "hsl(" + m.s + ",100%, 50%)"
			}, m.reset(), m.lock = function(e) {
				for (var t = 0; t < e.length; t++) m.AN.lock(e[t])
			}, m.nextSkill = function(e, t) {
				return e + t > 3 ? e = t - 1 : 0 > e + t ? e = 3 + t + 1 : e += t, m.AN.locks[e] ? m.nextSkill(e, t) : e
			}, m.selectSkill = function(e) {
				m.AN.current = e, m.AN.za(), firexx.ac = Ab[m.AN.current]
			}, m.next = function() {
				m.selectSkill(m.nextSkill(m.AN.current, 1)), m.r = 5, az -= 64
			}, m.prev = function() {
				m.selectSkill(m.nextSkill(m.AN.current, -1)), az -= 16, m.r = -5
			}, m.bd = function() {
				if (m.q <= 0) {
					m.S.o("p");
					var e = 0;
					m.down && (e = 7), m.up && (e = -7), m.AN.bd(e, Am.x + 24, Am.y), m.q = 16
				}
				m.S.ac = "hsl(" + m.s + "," + m.AN.bq + "%, 50%)"
			}, m.d = function() {
				m.S.d(), m.s += m.r, m.s < 0 && (m.s = 355), m.s > 355 && (m.s = 5), m.s != Aj[m.AN.current] ? m.S.ac = "hsl(" + m.s + "," + m.AN.bq + "%, 50%)" : m.r = 0, --m.q < 0 && (m.q = 0), m.S.y > 400 && (m.del = 1)
			}, m.aj = function() {
				64 & az && m.next(), 16 & az && m.prev(), m.down = 8 & az ? 1 : 0, m.up = 2 & az ? 1 : 0, 128 & az && (m.S.jump(), az ^= 128), 32 & az && m.bd(), 1 & az && m.S.x > -16 ? m.S.left() : 4 & az && m.S.x + 16 * e < xlevel.w ? m.S.right() : m.S.g()
			}, m.ba = function(e, t) {
				var a = Ai(e, m.AN.current, t);
				Am.ba(a) && !m.del && (m.del = 1, Ac(Am, t, 0, 0, m.ac))
			}, m.charge = function(e, t) {
				4 == e ? (m.S.hp += t, m.S.hp > m.AO && (m.S.hp = m.AO)) : (m.AN.charges[e] += t, m.AN.charges[e] > 99 && (m.AN.charges[e] = 99))
			}, m.ag = function(vx, vy) {
				with(Ap) fillStyle = wbae, fillText("Agtaske", vx + 73, vy + 20), strokeStyle = "yellow", fillStyle = "#300", strokeRect(vx + 35, vy + 35, 300, 8), fillRect(vx + 35, vy + 35, 300, 8), fillStyle = "yellow", fillRect(vx + 35, vy + 35, 300 * (m.S.hp / m.AO), 8), fillText("- " + xlevel.title + " -", vx + au.w / 2, vy + 35);
				if (m.AN.ag(vx, vy + au.h), ax) with(ax) agAvatar(vx + au.w, vy), del && 0 == --AV && (ax = null);
				m.S.agFace(vx - 35, vy + 50)
			}
		},
		hue = 0;
	Ap.ft = Ap.fillText;
	var aw = new AT(Am),
		firexx = new AM(fire);
	firexx.ac = Ab[0], firexx.e = 3;
	var as = 0,
		yOld = aw.S.y,
		bo = "i",
		dBackground = function(e) {
			xAxis += .1 * e
		},
		bp = {
			g: Al,
			i: bl,
			p: bm,
			d: function(e, t) {
				Al(), bn(e, t)
			}
		},
		actionsScreen = {
			g: function() {
				bo = "p"
			},
			i: function() {
				restartAK(-720), bo = "g"
			},
			p: function() {
				bo = "g"
			},
			d: function() {
				console.log("restart level"), restartAK(-720), bo = "g"
			}
		};
	ra(bj)
}();