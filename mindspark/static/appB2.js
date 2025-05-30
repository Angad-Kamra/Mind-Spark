const t = new Set,
	e = new Set,
	s = new Set(["w", "a", "s", "d", " ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
	i = () => t.has("w") || t.has("ArrowUp") || e.has(0) || e.has(12),
	h = () => t.has("a") || t.has("ArrowLeft") || e.has(14),
	n = () => t.has("d") || t.has("ArrowRight") || e.has(15);
document.addEventListener("keydown", e => {
	t.add(e.key), s.has(e.key) && e.preventDefault()
}), document.addEventListener("keyup", ({
	key: e
}) => {
	t.delete(e)
});
const o = new Map,
	r = (t, e) => {
		o.has(t) || o.set(t, []), o.get(t).push(e)
	};
requestAnimationFrame(function t(s) {
	const i = navigator.getGamepads()[0];
	i ? (i.buttons.forEach((t, s) => {
		if (t.pressed) {
			if (!e.has(s)) {
				const t = o.get(s);
				t && t.forEach(t => t())
			}
			e.add(s)
		} else e.delete(s)
	}), requestAnimationFrame(t)) : e.clear()
});
const a = function(t, e) {
	return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t)) + t
};
var c = [
		[
			[24, 239],
			[724, 244],
			[
				[0, 288, 330, 192, 1],
				[438, 288, 330, 192, 1]
			],
			[]
		],
		[
			[371, 51],
			[724, 404],
			[
				[0, 100, 768, 16, 1],
				[0, 216, 768, 16, 0],
				[0, 332, 768, 16, 1],
				[0, 448, 768, 32, 0]
			],
			[]
		],
		[
			[24, 239],
			[724, 244],
			[
				[0, 288, 330, 192, 1],
				[438, 288, 330, 192, 0]
			],
			[]
		],
		[
			[23, 263],
			[724, 268],
			[
				[0, 312, 768, 8, 1],
				[380, 0, 8, 312, 1],
				[0, 408, 768, 72, 0]
			],
			[]
		],
		[
			[116, 96],
			[628, 412],
			[
				[64, 448, 128, 32, !1],
				[320, 448, 128, 32, !0],
				[576, 448, 128, 32, !1]
			],
			[]
		],
		[
			[24, 399],
			[604, 152],
			[
				[0, 448, 768, 32, 1],
				[128, 320, 512, 8, 1],
				[632, 328, 8, 120, 1],
				[128, 192, 512, 8, 1],
				[128, 200, 8, 120, 1],
				[640, 384, 128, 8, 0],
				[0, 256, 128, 8, 0]
			],
			[]
		],
		[
			[16, 275],
			[566, 248],
			[
				[0, 0, 768, 64, 1],
				[0, 64, 128, 192, 1],
				[0, 324, 248, 92, 1],
				[0, 416, 768, 64, 1],
				[192, 132, 180, 96, 1],
				[440, 64, 100, 224, 1],
				[620, 112, 72, 245, 1],
				[192, 228, 56, 96, 1],
				[300, 288, 320, 69, 1]
			],
			[]
		],
		[
			[16, 367],
			[704, 84],
			[
				[0, 416, 244, 64, 1],
				[524, 128, 244, 352, 1],
				[288, 320, 64, 160, 0],
				[416, 224, 64, 256, 0]
			],
			[]
		],
		[
			[104, 175],
			[176, 32],
			[
				[96, 224, 56, 8, 1],
				[96, 232, 56, 8, 0],
				[144, 72, 8, 152, 1],
				[152, 72, 8, 168, 0],
				[160, 72, 128, 92, 1],
				[160, 164, 256, 92, 1],
				[160, 256, 384, 92, 1],
				[544, 256, 8, 92, 0],
				[160, 348, 512, 92, 1],
				[160, 440, 512, 8, 0],
				[552, 340, 120, 8, 0]
			],
			[]
		],
		[
			[16, 422],
			[724, 416],
			[
				[0, 472, 48, 8, 1],
				[0, 376, 48, 8, 0],
				[0, 280, 48, 8, 1],
				[0, 184, 96, 8, 0],
				[384, 456, 384, 24, 1]
			],
			[]
		],
		[
			[16, 239],
			[724, 244],
			[
				[0, 288, 768, 192, 1],
				[336, 0, 96, 288, 1]
			],
			[]
		],
		[
			[16, 56],
			[724, 216],
			[0, 1, 2, 3, 4, 5, 6, 7].map(t => [96 * t, a(240, 300), a(24, 72), a(24, 180), a(0, 2)]), []
		],
		[
			[48, 383],
			[696, 384],
			[
				[48, 432, 24, 24, 1],
				[156, 348, 24, 24, 0],
				[48, 264, 24, 24, 1],
				[156, 180, 24, 24, 0],
				[264, 180, 24, 24, 1],
				[372, 180, 24, 24, 0],
				[480, 180, 24, 24, 1],
				[588, 180, 24, 24, 0],
				[696, 264, 24, 24, 1],
				[588, 348, 24, 24, 0],
				[696, 432, 24, 24, 1]
			],
			[]
		],
		[
			[24, 8],
			[724, a(128, 416)],
			[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(t => [32 * t, a(64, 464), 8, 8, a(0, 2)]), []
		],
		[
			[372, 391],
			[372, 20],
			[
				[320, 440, 128, 8, 1],
				[320, 344, 128, 8, 0],
				[320, 248, 128, 8, 1],
				[320, 152, 128, 8, 0]
			],
			[
				[320, 448, 128, 8, 1, "down"],
				[320, 352, 128, 8, 0, "down"],
				[320, 256, 128, 8, 1, "down"],
				[320, 160, 128, 8, 0, "down"]
			]
		],
		[
			[372, 15],
			[372, 418],
			[
				[320, 64, 128, 16, 1],
				[256, 80, 256, 128, 0],
				[320, 208, 128, 16, 1],
				[348, 224, 72, 160, 1],
				[348, 384, 8, 96, 1],
				[356, 384, 8, 96, 0],
				[412, 384, 8, 96, 1],
				[404, 384, 8, 96, 0]
			],
			[
				[312, 64, 8, 16, 1, "left"],
				[448, 64, 8, 16, 1, "right"],
				[312, 208, 8, 16, 1, "left"],
				[448, 208, 8, 16, 1, "right"]
			]
		],
		[
			[24, 64],
			[724, a(128, 416)],
			[
				[0, a(128, 352), 768, 2, !0]
			],
			[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(t => [48 * t, a(128, 352), 16, 8, a(0, 2), "up"])
		],
		[
			[371, 20],
			[372, 372],
			[
				[336, 320, 96, 8, !0],
				[336, 416, 96, 8, !0],
				[336, 328, 8, 88, !0],
				[424, 328, 8, 88, !0]
			],
			[
				[336, 312, 96, 8, !0, "up"]
			]
		],
		[
			[371, 20],
			[584, 404],
			[
				[0, 152, 368, 8, !0],
				[0, 248, 448, 8, !0],
				[0, 344, 528, 8, !0]
			],
			[
				[0, 144, 368, 8, !0, "up"],
				[0, 240, 448, 8, !0, "up"],
				[0, 336, 528, 8, !0, "up"]
			]
		],
		[
			[12, 312],
			[725, 307],
			[
				[0, 152, 768, 72, !0],
				[0, 362, 64, 8, !0],
				[192, 362, 128, 8, !0],
				[448, 362, 128, 8, !0],
				[704, 362, 64, 8, !0]
			],
			[
				[0, 224, 768, 8, !0, "down"]
			]
		],
		[
			[371, 20],
			[372, 404],
			[
				[320, 384, 128, 8, !0],
				[320, 272, 128, 8, !1],
				[320, 168, 128, 8, !0]
			],
			[
				[320, 376, 128, 8, !0, "up"],
				[320, 264, 128, 8, !1, "up"],
				[320, 160, 128, 8, !0, "up"]
			]
		],
		[
			[63, 263],
			[660, 272],
			[
				[48, 312, 96, 96, 1],
				[144, 124, 48, 284, 1],
				[192, 124, 96, 96, 1],
				[192, 312, 96, 96, 0],
				[288, 124, 48, 284, 1],
				[336, 312, 96, 96, 1],
				[432, 124, 48, 284, 1],
				[480, 124, 96, 96, 1],
				[480, 312, 96, 96, 0],
				[576, 124, 48, 284, 1],
				[624, 312, 96, 96, 1]
			],
			[
				[232, 304, 16, 8, 0, "up"],
				[520, 304, 16, 8, 0, "up"]
			]
		],
		[
			[148, 254],
			[600, 266],
			[
				[94, 176, 8, 128, !0],
				[222, 176, 8, 128, !0],
				[94, 168, 136, 8, !0],
				[94, 304, 136, 8, !0],
				[318, 176, 8, 128, !0],
				[446, 176, 8, 128, !0],
				[318, 168, 136, 8, !0],
				[318, 304, 136, 8, !0],
				[542, 176, 8, 128, !0],
				[670, 176, 8, 128, !0],
				[542, 168, 136, 8, !0],
				[542, 304, 136, 8, !0]
			],
			[]
		],
		[
			[400, 20],
			[372, 432],
			[],
			[
				[0, 96, 384, 8, !0, "up"],
				[0, 104, 384, 8, !1, "down"],
				[400, 240, 368, 8, !0, "up"],
				[400, 248, 368, 8, !1, "down"],
				[0, 384, 384, 8, !0, "up"],
				[0, 392, 384, 8, !1, "down"]
			]
		],
		[
			[368, 14],
			[269, 419],
			[],
			[
				[328, 32, 8, 80, 1, "right"],
				[320, 32, 8, 80, 0, "left"],
				[424, 32, 8, 80, 1, "left"],
				[432, 32, 8, 80, 0, "right"],
				[280, 175, 8, 80, 1, "right"],
				[272, 174, 8, 80, 0, "left"],
				[376, 175, 8, 80, 1, "left"],
				[384, 175, 8, 80, 0, "right"],
				[232, 320, 8, 80, 1, "right"],
				[224, 319, 8, 80, 0, "left"],
				[328, 320, 8, 80, 1, "left"],
				[336, 319, 8, 80, 0, "right"]
			]
		]
	],
	d = t => new Promise((e, s) => {
		let i = performance.now();
		requestAnimationFrame(function s(h) {
			if (h >= i + t) return e();
			requestAnimationFrame(s)
		})
	});
class l {
	constructor(t) {
		this.element = t, this.bounds = {}
	}
	get hidden() {
		return this.element.hasAttribute("hidden")
	}
	set hidden(t) {
		t ? this.element.setAttribute("hidden", "") : this.element.removeAttribute("hidden")
	}
	get x() {
		return this._x
	}
	set x(t) {
		this._x = t || 0, this.element.setAttribute("x", Math.round(this.x))
	}
	get y() {
		return this._y
	}
	set y(t) {
		this._y = t || 0, this.element.setAttribute("y", Math.round(this.y))
	}
	get width() {
		return this._width
	}
	set width(t) {
		this._width = Math.max(0, t || 0), this.element.setAttribute("width", Math.round(this.width))
	}
	get height() {
		return this._height
	}
	set height(t) {
		this._height = Math.max(0, t || 0), this.element.setAttribute("height", Math.round(this.height))
	}
	get top() {
		return this.y
	}
	get bottom() {
		return this.y + this.height
	}
	set bottom(t) {
		this.y = (t || 0) - this.height
	}
	get left() {
		return this.x
	}
	get right() {
		return this.x + this.width
	}
	set right(t) {
		this.x = (t || 0) - this.width
	}
	set bottom(t) {
		this.y = t - this.height
	}
	isLeftOf(t) {
		return this.right <= t.left
	}
	isRightOf(t) {
		return this.left >= t.right
	}
	isAbove(t) {
		return this.bottom <= t.top
	}
	isBelow(t) {
		return this.top >= t.bottom
	}
	overlaps(t) {
		return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
	}
	append({
		element: t
	}) {
		this.element.appendChild(t)
	}
	remove() {
		this.element.remove()
	}
}
var u = t => document.createElementNS("http://www.w3.org/2000/svg", t);
class g extends l {
	constructor(t, e) {
		super(u("svg")), this.element.innerHTML = '\n    <svg id="goal"><g id="inner-goal"><g id="inner-goal-finish">\n      <path d="M12 19.26L6.37 22.1a1 1 0 0 1-1.44-1.07l1.05-5.98-4.47-4.22a1 1 0 0 1 .55-1.72l6.22-.88 2.83-5.5a1 1 0 0 1 1.78 0l2.83 5.5 6.22.88a1 1 0 0 1 .55 1.72l-4.47 4.22 1.05 5.98a1 1 0 0 1-1.44 1.07L12 19.26z"/>\n    </g></g></svg>', this.width = 22, this.height = 20, this.load(t, e)
	}
	load(t, e) {
		this.x = t, this.y = e
	}
	toJSON() {
		return [Math.round(this.x), Math.round(this.y)]
	}
}
class m extends l {
	constructor(t, e) {
		super(u("svg")), this.element.innerHTML = '\n    <svg id="guy">\n      <g id="inner-guy">\n        <rect class="accent" x="0" y="17" width="24" height="21"/>\n        <rect id="left_foot" class="accent" x="4" y="38" width="6" height="10"/>\n        <rect id="right_foot" class="accent" x="14" y="38" width="6" height="10"/>\n        <g id="head">\n          <rect class="accent" x="0" y="0" width="26" height="19"/>\n          <rect id="face" x="4" y="3" width="20" height="14"/>\n          <rect class="accent" x="9" y="7" width="4" height="4"/>\n          <rect class="accent" x="17" y="7" width="4" height="4"/>\n        </g>\n      </g>\n    </svg>', this.load(t, e), this.height = 48, this.width = 26, this.speed = 360, this.vx = 0, this.vy = 0
	}
	tick(t) {
		h() && !n() ? (this.vx = -t(this.speed), this.faceLeft = !0) : n() && !h() ? (this.vx = t(this.speed), this.faceLeft = !1) : this.vx = 0, this.walking = h() || n()
	}
	get faceLeft() {
		return !!this._faceLeft
	}
	set faceLeft(t) {
		this._faceLeft = !!t, this.element.classList.toggle("left", this.faceLeft)
	}
	get walking() {
		return !!this._walking
	}
	set walking(t) {
		this._walking = !!t, this.element.classList.toggle("walk", this.walking)
	}
	load(t, e) {
		this.x = t, this.y = e
	}
	toJSON() {
		return [Math.round(this.x), Math.round(this.y)]
	}
}
class p extends l {
	constructor(t, e, s, i, h) {
		super(u("rect")), this.width = s, this.height = i, this.x = t, this.y = e, this.on = h
	}
	get on() {
		return !!this._on
	}
	set on(t) {
		this._on = !!t, this.element.classList.toggle("light", this.on), this.element.classList.toggle("dark", !this.on)
	}
	toJSON() {
		return [Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height), Number(this.on)]
	}
}
const w = 0,
	y = 1,
	b = 2,
	f = [w, y, b];
class v extends l {
	constructor(t) {
		super(document.getElementById("title")), this.game = t, this.items = [].slice.call(this.element.querySelectorAll(".menu .item")), this.selected = w
	}
	keydown({
		key: t
	}) {
		switch (t) {
			case "ArrowUp":
				this.selected -= 1;
				break;
			case "ArrowDown":
				this.selected += 1;
				break;
			case "Enter":
				this.choose()
		}
	}
	choose() {
		switch (this.selected) {
			case w:
				this.game.scene.index = 0, this.game.scene.paused = !1, this.game.state = "play";
				break;
			case b:
				this.game.state = "edit";
				break;
			case y:
				this.game.state = "controls"
		}
	}
	get selected() {
		return this._selected
	}
	set selected(t) {
		this._selected = Math.min(f.length - 1, Math.max(0, t || 0)), this.items.forEach((t, e) => {
			t.classList.toggle("selected", e === this.selected)
		})
	}
}
var x = 440 * Math.pow(Math.pow(2, 1 / 12), -9),
	q = /^[0-9.]+$/,
	k = /\s+/,
	B = /(\d+)/,
	A = {};
"B#-C|C#-Db|D|D#-Eb|E-Fb|E#-F|F#-Gb|G|G#-Ab|A|A#-Bb|B-Cb".split("|").forEach(function(t, e) {
	t.split("-").forEach(function(t) {
		A[t] = e
	})
});
const E = function t(e) {
	var s = e.split(k);
	this.frequency = t.getFrequency(s[0]) || 0, this.duration = t.getDuration(s[1]) || 0
};
E.getFrequency = function(t) {
	var e = t.split(B),
		s = A[e[0]],
		i = (e[1] || 4) - 4;
	return x * Math.pow(Math.pow(2, 1 / 12), s) * Math.pow(2, i)
}, E.getDuration = function(t) {
	return q.test(t) ? parseFloat(t) : t.toLowerCase().split("").reduce(function(t, e) {
		return t + ("w" === e ? 4 : "h" === e ? 2 : "q" === e ? 1 : "e" === e ? .5 : "s" === e ? .25 : 0)
	}, 0)
};
const D = function(t, e, s) {
	this.ac = t || new AudioContext, this.createFxNodes(), this.tempo = e || 120, this.loop = !0, this.smoothing = 0, this.staccato = 0, this.notes = [], this.push.apply(this, s || [])
};
D.prototype.createFxNodes = function() {
	var t = this.gain = this.ac.createGain();
	return [
		["bass", 100],
		["mid", 1e3],
		["treble", 2500]
	].forEach(function(e, s) {
		(s = this[e[0]] = this.ac.createBiquadFilter()).type = "peaking", s.frequency.value = e[1], t.connect(t = s)
	}.bind(this)), t.connect(this.ac.destination), this
}, D.prototype.push = function() {
	return Array.prototype.forEach.call(arguments, function(t) {
		this.notes.push(t instanceof E ? t : new E(t))
	}.bind(this)), this
}, D.prototype.createCustomWave = function(t, e) {
	e || (e = t), this.waveType = "custom", this.customWave = [new Float32Array(t), new Float32Array(e)]
}, D.prototype.createOscillator = function() {
	return this.stop(), this.osc = this.ac.createOscillator(), this.customWave ? this.osc.setPeriodicWave(this.ac.createPeriodicWave.apply(this.ac, this.customWave)) : this.osc.type = this.waveType || "square", this.osc.connect(this.gain), this
}, D.prototype.scheduleNote = function(t, e) {
	var s = 60 / this.tempo * this.notes[t].duration,
		i = s * (1 - (this.staccato || 0));
	return this.setFrequency(this.notes[t].frequency, e), this.smoothing && this.notes[t].frequency && this.slide(t, e, i), this.setFrequency(0, e + i), e + s
}, D.prototype.getNextNote = function(t) {
	return this.notes[t < this.notes.length - 1 ? t + 1 : 0]
}, D.prototype.getSlideStartDelay = function(t) {
	return t - Math.min(t, 60 / this.tempo * this.smoothing)
}, D.prototype.slide = function(t, e, s) {
	var i = this.getNextNote(t),
		h = this.getSlideStartDelay(s);
	return this.setFrequency(this.notes[t].frequency, e + h), this.rampFrequency(i.frequency, e + s), this
}, D.prototype.setFrequency = function(t, e) {
	return this.osc.frequency.setValueAtTime(t, e), this
}, D.prototype.rampFrequency = function(t, e) {
	return this.osc.frequency.linearRampToValueAtTime(t, e), this
}, D.prototype.play = function(t) {
	return t = "number" == typeof t ? t : this.ac.currentTime, this.createOscillator(), this.osc.start(t), this.notes.forEach(function(e, s) {
		t = this.scheduleNote(s, t)
	}.bind(this)), this.osc.stop(t), this.osc.onended = this.loop ? this.play.bind(this, t) : null, this
}, D.prototype.stop = function() {
	return this.osc && (this.osc.onended = null, this.osc.disconnect(), this.osc = null), this
};
const G = new AudioContext,
	L = new D(G, 100, ["B2 q", "- q", "Db3 q", "- q", "D3 q", "- q", "Gb3 q", "Bb3 q", "B2 q", "- q", "Db3 q", "- q", "D3 q", "- q", "Gb3 q", "B2 q", "B2 q", "- q", "Db3 q", "- q", "D3 q", "- q", "Gb3 q", "Bb3 q", "B2 q", "- q", "Db3 q", "- q", "D3 q", "- q", "Gb3 q", "B2 q", "- 32"]),
	M = new D(G, 100, ["- w", "- h", "D3 q", "Db3 q", "- w", "- h", "D3 q", "Gb3 q", "- w", "- h", "D3 q", "Db3 q", "- w", "- h", "D3 q", "Gb3 q", "- 32"]),
	_ = new D(G, 100, ["B4 e", "- e", "Bb4 e", "- e", "A4 s", "A4 s", "Ab4 e", "G4 e", "- e", "Gb4 s", "B4 s", "Gb4 e", "D4 e", "B3 e", "D4 e", "- e", "Db4 e", "- e", "B4 e", "- e", "Bb4 e", "- e", "A4 s", "A4 s", "Ab4 e", "G4 e", "- e", "Gb4 s", "B4 s", "Gb4 e", "D4 e", "B3 e", "D4 e", "Db4 e", "B3 e", "- e", "B4 e", "- e", "Bb4 e", "- e", "A4 s", "A4 s", "Ab4 e", "G4 e", "- e", "Gb4 s", "B4 s", "Gb4 e", "D4 e", "B3 e", "D4 e", "- e", "Db4 e", "- e", "B4 e", "- e", "Bb4 e", "- e", "A4 s", "A4 s", "Ab4 e", "G4 e", "- e", "Gb4 s", "B4 s", "Gb4 e", "D4 e", "B3 e", "D4 e", "Db4 e", "B3 e", "- e", "- 32"]),
	C = new D(G, 100, ["- 32", "G3 e", "E3 e", "D3 e", "C3 e", "A2 e", "G2 e", "C2 e", "Bb2 e", "B2 e", "Db3 e", "D3 e", "E3 e", "Gb3 e", "G3 e", "Gb3 e", "Bb2 e", "G3 e", "E3 e", "D3 e", "C3 e", "A2 e", "G2 e", "C2 e", "Bb2 e", "B2 e", "Db3 e", "D3 e", "E3 e", "D3 e", "Db3 e", "B2 e", "- e", "G3 e", "E3 e", "D3 e", "C3 e", "A2 e", "G2 e", "C2 e", "Bb2 e", "B2 e", "Db3 e", "D3 e", "E3 e", "Gb3 e", "G3 e", "Gb3 e", "Bb2 e", "G3 e", "E3 e", "D3 e", "C3 e", "A2 e", "G2 e", "C2 e", "Bb2 e", "B2 e", "Db3 e", "D3 e", "E3 e", "D3 e", "Db3 e", "B2 e", "- e"]),
	F = new D(G, 100, ["- 32", "G4 w", "Gb4 w", "G4 w", "Gb4 w", "G4 w", "Gb4 w", "G4 w", "Gb4 w"]),
	S = new D(G, 100, ["- 32", "C4 w", "D4 w", "C4 w", "D4 w", "C4 w", "D4 w", "C4 w", "D4 w"]),
	R = new D(G, 200, ["C3 q", "- q", "G3 q", "- q", "C3 q", "- q", "G3 q", "G2 q", "C3 q", "- q", "G3 q", "- q", "B2 q", "- q", "B2 q", "A2 q", "G2 q", "- h", "- q", "E3 q", "- h", "- q", "G2 q", "- w", "- h", "B2 q"]),
	z = new D(G, 200, ["G4 e", "Gb4 e", "G4 e", "Gb4 e", "G4 q", "A4 q", "G4 h", "C4 q", "E4 q", "G4 e", "Gb4 e", "G4 e", "Gb4 e", "G4 q", "E4 q", "F4 h", "D4 q", "E4 q", "F4 e", "E4 e", "F4 e", "E4 e", "F4 q", "G4 q", "E4 e", "D4 e", "E4 e", "D4 e", "E4 q", "F4 q", "G3 e", "A3 e", "B3 e", "C4 e", "D4 e", "E4 e", "F4 e", "E4 e", "D4 e", "C4 e", "B3 e", "A3 e", "G3 q", "E4 q"]);
R.staccato = .3, z.staccato = .5, R.waveType = "sine", R.gain.gain.value = .7, z.gain.gain.value = .3, L.staccato = .5, C.staccato = .3, M.staccato = .5, _.staccato = .5, L.waveType = "sine", C.waveType = "sine", M.waveType = "sine", L.gain.gain.value = .4, C.gain.gain.value = .6, M.gain.gain.value = .4, _.gain.gain.value = .4;
let N = 1,
	U = "up";
setInterval(function() {
	"up" === U && (N += 1) > 9 && (U = "down", N -= 1), "down" === U && (N -= 1) < 1 && (U = "up", N += 2), F.gain.gain.value = .01 * N, S.gain.gain.value = .01 * N
}, 300);
const I = () => {
		L.play(), M.play(), _.play(), C.play(), F.play(), S.play(), R.stop(), z.stop()
	},
	T = () => {
		L.stop(), M.stop(), _.stop(), C.stop(), F.stop(), S.stop(), R.play(), z.play()
	};
I();
const O = new D(G, 320, ["Bb3 e", "G5 e", "Bb4 e"]),
	J = new D(G, 400, ["Bb6 e", "D6 e"]),
	P = new D(G, 400, ["D6 e", "Bb6 e"]),
	W = new D(G, 280, ["C4 s", "G4 s", "C5 h"]),
	$ = new D(G, 280, ["Bb3 e", "Bb2 q"]);
O.loop = !1, W.loop = !1, $.loop = !1, J.loop = !1, P.loop = !1, O.smoothing = 1, $.smoothing = .5, W.staccato = .2, J.staccato = .5, P.staccato = .5, $.waveType = "sawtooth", $.bass.gain.value = 10, O.gain.gain.value = .3, W.gain.gain.value = .6, $.gain.gain.value = .4, J.gain.gain.value = .3, P.gain.gain.value = .3;
const H = 768,
	V = 480;
class K extends l {
	constructor(t) {
		super(t), this.value = 0
	}
	get value() {
		return this._value
	}
	set value(t) {
		this._value = t || 0, this.element.innerHTML = "";
		let e = 0;
		for (let t of this.value.toString()) {
			const s = new l(u("rect"));
			s.element.setAttribute("fill", `url(#n${t})`), s.width = 10, s.height = 16, s.x = 12 * e++, this.append(s)
		}
	}
}
class j extends l {
	constructor(t, e, s, i, h, n) {
		super(u("svg")), this.rect = u("rect"), this.rect.setAttribute("x", "0"), this.rect.setAttribute("y", "0"), this.rect.setAttribute("width", "100%"), this.rect.setAttribute("height", "100%"), this.element.appendChild(this.rect), this.width = s, this.height = i, this.x = t, this.y = e, this.on = h, this.direction = n
	}
	get isUp() {
		return "up" === this.direction
	}
	get isDown() {
		return "down" === this.direction
	}
	get isLeft() {
		return "left" === this.direction
	}
	get isRight() {
		return "right" === this.direction
	}
	get width() {
		return super.width
	}
	set width(t) {
		super.width = t, (this.isUp || this.isDown) && this.element.setAttribute("width", 16 * Math.round(this.width / 16))
	}
	get height() {
		return super.height
	}
	set height(t) {
		super.height = t, (this.isLeft || this.isRight) && this.element.setAttribute("height", 16 * Math.round(this.height / 16))
	}
	get on() {
		return !!this._on
	}
	set on(t) {
		this._on = !!t, this.element.classList.toggle("light", this.on), this.element.classList.toggle("dark", !this.on)
	}
	get direction() {
		return this._direction
	}
	set direction(t) {
		this._direction = t, this.rect.setAttribute("fill", `url(#spike-${this.direction})`)
	}
	toJSON() {
		return [Math.round(this.x), Math.round(this.y), this.isUp || this.isDown ? 16 * Math.round(this.width / 16) : this.width, this.isLeft || this.isRight ? 16 * Math.round(this.height / 16) : this.height, Number(this.on), this.direction]
	}
}
class X extends l {
	constructor(t, e) {
		super(document.getElementById(t)), this.pressed = e
	}
	tick() {
		this.element.classList.toggle("dark", !this.pressed()), this.element.classList.toggle("light", this.pressed())
	}
}
class Y extends l {
	constructor(s) {
		super(document.getElementById("controls")), this.game = s, this.keys = [new X("key-w", () => t.has("w")), new X("key-a", () => t.has("a")), new X("key-d", () => t.has("d")), new X("key-space", () => t.has(" ")), new X("button-toggle", () => e.has(1)), new X("button-jump", () => e.has(0)), new X("button-left", () => e.has(14)), new X("button-right", () => e.has(15))]
	}
	keydown({
		key: t
	}) {
		switch (t) {
			case "Enter":
				this.game.state = "title";
				break;
			case "ArrowUp":
			case "ArrowDown":
				this.element.querySelector(".menu .item").classList.add("selected")
		}
	}
	tick() {
		if (!this.hidden)
			for (const t of this.keys) t.tick()
	}
}
const Q = 3,
	Z = document.getElementById("editor"),
	tt = Z.createSVGPoint(),
	et = ({
		clientX: t,
		clientY: e
	}) => (tt.x = t, tt.y = e, tt.matrixTransform(Z.getScreenCTM().inverse()));
let st = null,
	it = null;
document.addEventListener("mouseup", () => {
	st = it = null
}), document.addEventListener("mousedown", t => {
	0 === t.button && (it = et(t))
}), document.addEventListener("mousemove", t => {
	if (!st) return;
	const {
		x: e,
		y: s
	} = et(t);
	st({
		x: e - it.x,
		y: s - it.y
	}), it = {
		x: e,
		y: s
	}
}), document.getElementById("close-dialog").addEventListener("click", () => {
	document.getElementById("dialog").hidden = !0
});
class ht extends p {
	constructor(...t) {
		super(...t), this.element.addEventListener("dblclick", this.dblclick.bind(this)), this.element.addEventListener("mousemove", this.mousemove.bind(this)), this.element.addEventListener("mousedown", this.mousedown.bind(this))
	}
	dblclick() {
		this.on = !this.on
	}
	mousemove(t) {
		const {
			x: e,
			y: s
		} = et(t);
		this.element.style.cursor = this.cursor(this.region(e, s))
	}
	mousedown(t) {
		if (0 !== t.button) return;
		const {
			x: e,
			y: s
		} = et(t);
		st = this.resize.bind(this, this.region(e, s))
	}
	resize(t, {
		x: e,
		y: s
	}) {
		switch (t) {
			case "m":
				this.x += e, this.y += s;
				break;
			case "n":
				this.y += s, this.height -= s;
				break;
			case "s":
				this.height += s;
				break;
			case "e":
				this.width += e;
				break;
			case "w":
				this.x += e, this.width -= e;
				break;
			case "nw":
				this.resize("n", {
					x: e,
					y: s
				}), this.resize("w", {
					x: e,
					y: s
				});
				break;
			case "ne":
				this.resize("n", {
					x: e,
					y: s
				}), this.resize("e", {
					x: e,
					y: s
				});
				break;
			case "sw":
				this.resize("s", {
					x: e,
					y: s
				}), this.resize("w", {
					x: e,
					y: s
				});
				break;
			case "se":
				this.resize("s", {
					x: e,
					y: s
				}), this.resize("e", {
					x: e,
					y: s
				})
		}
	}
	region(t, e) {
		return t -= this.x, e -= this.y, t <= Q ? e <= Q ? "nw" : e < this.height - Q ? "w" : "sw" : t < this.width - Q ? e <= Q ? "n" : e < this.height - Q ? "m" : "s" : e <= Q ? "ne" : e < this.height - Q ? "e" : "se"
	}
	cursor(t) {
		switch (t) {
			case "n":
			case "s":
				return "ns-resize";
			case "e":
			case "w":
				return "ew-resize";
			case "nw":
			case "se":
				return "nwse-resize";
			case "ne":
			case "sw":
				return "nesw-resize";
			case "m":
				return "move"
		}
	}
}
class nt extends j {
	constructor(...t) {
		super(...t), this.element.style.cursor = "move", this.element.addEventListener("dblclick", this.dblclick.bind(this)), this.element.addEventListener("mousedown", this.mousedown.bind(this)), this.element.addEventListener("mousemove", this.mousemove.bind(this))
	}
	get direction() {
		return super.direction
	}
	set direction(t) {
		super.direction = t, this.rect.setAttribute("fill", `url(#edit-spike-${this.direction})`)
	}
	dblclick() {
		this.on = !this.on
	}
	mousemove(t) {
		const {
			x: e,
			y: s
		} = et(t);
		this.element.style.cursor = this.cursor(this.region(e, s))
	}
	mousedown(t) {
		if (0 !== t.button) return;
		const {
			x: e,
			y: s
		} = et(t);
		st = this.resize.bind(this, this.region(e, s))
	}
	resize(t, {
		x: e,
		y: s
	}) {
		switch (t) {
			case "n":
				this.y += s, this.height -= s;
				break;
			case "s":
				this.height += s;
				break;
			case "e":
				this.width += e;
				break;
			case "w":
				this.x += e, this.width -= e;
				break;
			case "m":
				this.x += e, this.y += s
		}
	}
	region(t, e) {
		return t -= this.x, e -= this.y, this.isUp || this.isDown ? t <= Q ? "w" : t < this.width - Q ? "m" : "e" : e <= Q ? "n" : e < this.height - Q ? "m" : "s"
	}
	cursor(t) {
		switch (t) {
			case "n":
			case "s":
				return "ns-resize";
			case "e":
			case "w":
				return "ew-resize";
			case "m":
				return "move"
		}
	}
}
class ot extends m {
	constructor(...t) {
		super(...t), this.element.style.cursor = "move", this.element.addEventListener("mousedown", this.mousedown.bind(this))
	}
	mousedown(t) {
		0 === t.button && (st = (({
			x: t,
			y: e
		}) => {
			this.x += t, this.y += e
		}))
	}
}
class rt extends g {
	constructor(...t) {
		super(...t), this.element.style.cursor = "move", this.element.addEventListener("mousedown", this.mousedown.bind(this))
	}
	mousedown(t) {
		0 === t.button && (st = (({
			x: t,
			y: e
		}) => {
			this.x += t, this.y += e
		}))
	}
}
class at extends l {
	constructor(t, e) {
		super(document.getElementById("editor")), this.bars = [], this.spikes = [], this.levels = t, this.game = e, this.guy = new ot, this.append(this.guy), this.goal = new rt, this.append(this.goal), this.level = 0, document.addEventListener("keydown", this.keydown.bind(this))
	}
	addBar(t) {
		this.bars.push(t), this.append(t), t.element.addEventListener("click", ({
			shiftKey: e
		}) => {
			e && (t.remove(), this.bars = this.bars.filter(e => e === t))
		})
	}
	addSpike(t) {
		this.spikes.push(t), this.append(t), t.element.addEventListener("click", ({
			shiftKey: e
		}) => {
			e && (t.remove(), this.spikes = this.spikes.filter(e => e === t))
		})
	}
	get level() {
		return this._level
	}
	set level(t) {
		this._level = Math.max(0, Math.min(this.levels.length - 1, t));
		const [e, s, i, h] = this.levels[this.level];
		for (this.guy.load(...e), this.goal.load(...s); this.bars.length;) this.bars.pop().remove();
		for (const t of i) this.addBar(new ht(...t));
		for (; this.spikes.length;) this.spikes.pop().remove();
		for (const t of h) this.addSpike(new nt(...t))
	}
	keydown({
		key: e
	}) {
		if (!this.hidden) switch (e) {
			case "ArrowRight":
				this.level += 1;
				break;
			case "ArrowLeft":
				this.level -= 1;
				break;
			case "p":
				this.addBar(new ht(0, 0, 48, 48, !0));
				break;
			case "c":
				navigator.clipboard.writeText(JSON.stringify(this));
				break;
			case "u":
			case "d":
			case "l":
			case "r":
				if (!t.has("s")) return;
				this.addSpike("u" === e || "d" === e ? new nt(0, 0, 64, 8, !0, "u" === e ? "up" : "down") : new nt(0, 0, 8, 64, !0, "l" === e ? "left" : "right"));
				break;
			case "h":
				document.getElementById("dialog").hidden = !document.getElementById("dialog").hidden;
				break;
			case "g":
				const s = new URL(window.location);
				s.searchParams.set("level", JSON.stringify(this)), window.location = s.toString();
				break;
			case "Escape":
				this.game && (this.game.state = "title")
		}
	}
	toJSON() {
		return [this.guy, this.goal, this.bars, this.spikes]
	}
}
class ct extends l {
	constructor(t, e) {
		super(document.getElementById("game")), this.deaths = new K(document.getElementById("death-counter")), this.stars = new K(document.getElementById("level-counter")), this.congrats = new l(document.getElementById("congrats")), this.esc = new l(document.getElementById("esc")), this.game = t, this.levels = e, this.bars = [], this.spikes = [], this.paused = !1, this.guy = new m, this.append(this.guy), this.goal = new g, this.append(this.goal), this.index = 0
	}
	get fromURL() {
		return !!this._fromURL
	}
	set fromURL(t) {
		this._fromURL = !!t, this.esc.hidden = !this.fromURL
	}
	keydown({
		key: t
	}) {
		switch (t) {
			case "Enter":
				this.finished && (this.fromURL = !1, this.levels = c, this.game.state = "title", I());
				break;
			case "Escape":
				this.fromURL && (this.fromURL = !1, this.levels = c, this.game.state = "title", I())
		}
	}
	get on() {
		return this._on
	}
	set on(t) {
		this._on = t, document.body.classList.toggle("on", t), document.body.classList.toggle("off", !t)
	}
	get index() {
		return this._index
	}
	set index(t) {
		for (this._index = Math.min(this.levels.length, Math.max(t || 0)), this.on = !0, this.stars.value = this.index; this.bars.length;) this.bars.pop().remove();
		for (; this.spikes.length;) this.spikes.pop().remove();
		if (this.finished) return this.guy.hidden = !0, this.congrats.hidden = !1, void T();
		const [e, s, i, h] = this.level;
		this.guy.load(...e), this.guy.hidden = !1, this.goal.load(...s), this.goal.hidden = !1, this.congrats.hidden = !0;
		for (const t of i) {
			const e = new p(...t);
			this.append(e), this.bars.push(e)
		}
		for (const t of h) {
			const e = new j(...t);
			this.append(e), this.spikes.push(e)
		}
	}
	get level() {
		return this.levels[this.index]
	}
	get finished() {
		return this.index >= this.levels.length
	}
	async advance() {
		W.play(), this.paused = !0, document.body.classList.add("finish"), await d(1e3), this.index += 1, document.body.classList.remove("finish"), await d(1e3), this.finished ? this.goal.hidden = !0 : this.paused = !1
	}
	async death() {
		$.play(), this.deaths.value += 1, this.paused = !0;
		const t = document.getElementById("death");
		t.setAttribute("x", this.guy.x - 32 + this.guy.width / 2), t.setAttribute("y", this.guy.y - 32 + this.guy.height / 2), this.guy.element.setAttribute("hidden", !0), document.body.classList.add("dying"), await d(700), document.body.classList.remove("dying"), this.reset(), this.guy.element.removeAttribute("hidden"), this.paused = !1
	}
	reset() {
		this.guy.load(...this.level[0])
	}
	lost() {
		return this.guy.bottom > V || this.bars.some(t => t.on === this.on && t.overlaps(this.guy)) || this.spikes.some(t => t.on === this.on && t.overlaps(this.guy))
	}
	setBounds(t) {
		const {
			bounds: e
		} = t;
		e.left = -t.left, e.right = H - t.right, e.top = -t.top, e.bottom = V - t.bottom + 1;
		for (const s of this.bars) s.on === this.on && (s.top < t.bottom && s.bottom > t.top && (s.isRightOf(t) ? e.right = Math.min(e.right, s.left - t.right) : s.isLeftOf(t) && (e.left = Math.max(e.left, s.right - t.left))), s.left < t.right && s.right > t.left && (s.isBelow(t) ? e.bottom = Math.min(e.bottom, s.top - t.bottom) : s.isAbove(t) && (e.top = Math.max(e.top, s.bottom - t.top))));
		return e
	}
	tick(t) {
		if (this.paused || this.hidden) return;
		this.guy.tick(t);
		const {
			left: e,
			right: s
		} = this.setBounds(this.guy);
		this.guy.x += Math.min(s, Math.max(e, this.guy.vx));
		const {
			top: h,
			bottom: n
		} = this.setBounds(this.guy);
		this.guy.y += Math.min(n, Math.max(h, this.guy.vy)), 0 === n ? (this.guy.vy = i() ? -t(1200) : 0, i() && O.play()) : this.guy.vy = Math.min(t(600), this.guy.vy + t(120)), this.lost() ? this.death() : this.guy.overlaps(this.goal) && this.advance()
	}
}
const dt = new class {
		constructor() {
			this.title = new v(this), this.controls = new Y(this), this.scene = new ct(this, c), this.editor = new at([
				[
					[100, 300],
					[500, 300],
					[
						[84, 361, 362, 48, 1]
					],
					[
						[446, 401, 176, 8, 1, "up"]
					]
				]
			], this), this.dialog = document.getElementById("dialog"), r(1, this.toggle.bind(this)), document.addEventListener("keydown", this.keydown.bind(this))
		}
		toggle() {
			this.scene.on = !this.scene.on, this.scene.on ? P.play() : J.play()
		}
		keydown(t) {
			" " === t.key && this.toggle(), this.scene.hidden ? this.controls.hidden ? this.title.hidden || this.title.keydown(t) : this.controls.keydown(t) : this.scene.keydown(t)
		}
		get state() {
			return this._state
		}
		set state(t) {
			this._state = t, this.scene.hidden = "play" !== this.state, this.title.hidden = "title" !== this.state, this.controls.hidden = "controls" !== this.state, this.editor.hidden = "edit" !== this.state, this.dialog.hidden = "edit" !== this.state
		}
		tick(t) {
			this.scene.tick(t), this.controls.tick(t)
		}
	},
	lt = new URL(window.location).searchParams.get("level");
if (lt) try {
	dt.scene.levels = [JSON.parse(lt)], dt.scene.fromURL = !0, dt.scene.index = 0, dt.state = "play"
} catch (t) {}
let ut = 0;
requestAnimationFrame(function t(e) {
	const s = e - ut;
	dt.tick(t => Math.round(t * s / 1e3)), ut = e, requestAnimationFrame(t)
});