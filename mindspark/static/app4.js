! function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var o = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var i = {};
    t.m = e, t.c = i, t.d = function(e, i, n) {
        t.o(e, i) || Object.defineProperty(e, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.n = function(e) {
        var i = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(i, "a", i), i
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 0)
}([function(e, t, i) {
    "use strict";

    function n() {
        return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
    }

    function o(e, t, i, n, o, s, r, a) {
        return !(e + i - 1 < o || o + r - 1 < e || t + n - 1 < s || s + a - 1 < t)
    }

    function s(e, t) {
        var i = t / 2,
            n = e % t;
        return n < i ? n / i : 1 - (n - i) / i
    }

    function r(e, t, i) {
        return e[Math.floor(t / 32) + 48 * Math.floor(i / 32)]
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function h(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function p(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function d(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function g() {
        pe.play(100), we = I.layers[0].data, ve = Array.from(I.layers[1].data), ke = I.layers[2].objects, xe = new V({
            left: ye,
            right: fe,
            down: ge,
            up: me
        }, "down", 626, 1141, 30, 30, de), be = [], v(), Ee = {
            images: 0,
            imagesLoaded: 0,
            backgroundColor: "#000",
            viewport: {
                x: 513,
                y: 1024
            },
            currentMap: he,
            fps: 0,
            lastfps: 0,
            fpsTimer: 0,
            message: null,
            tooltip: null,
            state: "menu"
        }, Te = 0, Se = 0, De = 0, Me = 0
    }

    function y(e) {
        var t, i;
        t = Ee.viewport.x <= 0 ? xe.x : Ee.viewport.x >= 32 * Ee.currentMap.width - oe.width ? xe.x - Ee.viewport.x : Math.round(oe.width / 2 - xe.width / 2), i = Ee.viewport.y <= 0 ? xe.y : Ee.viewport.y >= 32 * Ee.currentMap.height - oe.height ? xe.y - Ee.viewport.y : Math.round(oe.height / 2 - xe.height / 2), se.drawImage(e.stateAnimations[e.currentState].tileset.image, 16 * e.stateAnimations[e.currentState].frames[e.stateAnimations[e.currentState].currentFrame].split(",")[0], 16 * e.stateAnimations[e.currentState].frames[e.stateAnimations[e.currentState].currentFrame].split(",")[1], 16, 16, Math.round(t), Math.round(i), 30, 30)
    }

    function f(e, t) {
        xe.currentState = e;
        var i, n, o = {
            x: xe.x,
            y: xe.y
        };
        switch (e) {
            case "left":
                xe.x > 0 && (o.x = xe.x - xe.speed * t), i = r(ve, o.x, o.y), n = r(ve, o.x, o.y + 30), 2 === i && 2 === n && (xe.x = o.x);
                break;
            case "up":
                xe.y <= 0 && (o.y = xe.y + xe.speed * t), o.y = xe.y - xe.speed * t, i = r(ve, o.x, o.y), n = r(ve, o.x + 30, o.y), 2 === i && 2 === n && (xe.y = o.y);
                break;
            case "right":
                xe.x < 32 * Ee.currentMap.colTileCount - xe.height && (o.x = xe.x + xe.speed * t), i = r(ve, o.x + 30, o.y), n = r(ve, o.x + 30, o.y + 30), 2 === i && 2 === n && (xe.x = o.x);
                break;
            case "down":
                xe.y < 32 * Ee.currentMap.rowTileCount - xe.height && (o.y = xe.y + xe.speed * t), i = r(ve, o.x, o.y + 30), n = r(ve, o.x + 30, o.y + 30), 2 === i && 2 === n && (xe.y = o.y)
        }
        m(), A(xe.stateAnimations[xe.currentState]), xe.x + xe.width / 2 < oe.width / 2 ? Ee.viewport.x = 0 : xe.x + oe.width / 2 + xe.width / 2 >= 32 * he.width ? Ee.viewport.x = 32 * he.width - oe.width : Ee.viewport.x = Math.floor(xe.x - (oe.width / 2 - xe.width / 2)), xe.y + xe.height / 2 < oe.height / 2 ? Ee.viewport.y = 0 : xe.y + oe.height / 2 + xe.height / 2 >= 32 * he.height ? Ee.viewport.y = 32 * he.height - oe.height : Ee.viewport.y = Math.floor(xe.y - (oe.height / 2 - xe.height / 2))
    }

    function m() {
        for (var e = 0; e < be.length; e++) {
            var t = be[e];
            if (!t.collected && o(xe.x, xe.y, 32, 32, t.x + 8, t.y + 8, 16, 16)) switch (t.type) {
                case "key":
                case "floor":
                    if ("floor" === t.type && 1 === t.finish_id) {
                        Ee.state = "outro";
                        break
                    }
                    if ("floor" === t.type && 5 !== xe.scrolls) break;
                    t.collected = !0;
                    be.filter(function(e) {
                        return "door" === e.type && e.key_id === t.key_id
                    }).forEach(function(e) {
                        e.collected = !0, ve[48 * e.cY + e.cX] = 2
                    }), "key" === t.type && pe.keySound(), !t.message || Ee.message || Ee.tooltip || (Ee.tooltip = t.message, setTimeout(function() {
                        Ee.tooltip = null
                    }, 2500));
                    break;
                case "message":
                    if (Ee.message || Ee.tooltip) break;
                    Ee.message = t.message, setTimeout(function() {
                        Ee.message = null
                    }, 2500);
                    break;
                case "scroll":
                    if (t.collected = !0, xe.scrolls++, pe.scrollSound(), Ee.message || Ee.tooltip) break;
                    Ee.tooltip = "code " + xe.scrolls + " of 5", setTimeout(function() {
                        Ee.tooltip = null
                    }, 2500)
            }
        }
    }

    function A(e) {
        n() - e.frameTimer > e.frameDuration && (e.currentFrame < e.frames.length - 1 ? e.currentFrame++ : e.currentFrame = 0, e.frameTimer = n())
    }

    function w() {
        for (var e = 0; e < we.length; e++) {
            var t = e % 48 * 32,
                i = 32 * Math.floor(e / 48),
                n = 8 * (we[e] - 1);
            we[e] - 1 == 22 ? n = Ee.fps >= 51 ? 352 : 8 * (we[e] - 1) : we[e] - 1 == 4 ? n = Ee.fps >= 51 ? 360 : 8 * (we[e] - 1) : we[e] - 1 == 5 && (n = Ee.fps >= 51 ? 480 : 8 * (we[e] - 1)), 5 === xe.scrolls ? we[e] - 1 >= 29 && we[e] - 1 <= 36 && (n = 8 * (we[e] + 20)) : we[e] - 1 == 31 ? n = Ee.fps >= 51 ? 368 : 8 * (we[e] - 1) : we[e] - 1 == 34 ? n = Ee.fps >= 51 ? 376 : 8 * (we[e] - 1) : we[e] - 1 == 29 ? n = Ee.fps >= 51 ? 384 : 8 * (we[e] - 1) : we[e] - 1 == 36 && (n = Ee.fps >= 51 ? 392 : 8 * (we[e] - 1)), se.drawImage(Ee.currentMap.tileset.image, n, 0, 8, 8, t - Ee.viewport.x, i - Ee.viewport.y, 32, 32)
        }
    }

    function v() {
        for (var e = 0; e < ke.length; e++) be.push(new H(ke[e]))
    }

    function k() {
        for (var e = 0; e < be.length; e++)
            if (!be[e].collected) {
                var t = be[e].x - Ee.viewport.x,
                    i = be[e].y - Ee.viewport.y,
                    n = 8 * be[e].gid;
                "key" !== be[e].type && "scroll" !== be[e].type || (se.globalAlpha = .55 + s(Ee.fps, 100)), se.drawImage(Ee.currentMap.tileset.image, n, 0, 8, 8, t, i, 32, 32), se.globalAlpha = 1
            }
    }

    function x(e) {
        "play" === Ee.state && (37 in Ae && f("left", e), 39 in Ae && f("right", e), 38 in Ae && f("up", e), 40 in Ae && f("down", e)), n() - Ee.fpsTimer > 1e3 && (Ee.lastfps = Ee.fps, Ee.fps = 0, Ee.fpsTimer = n()), Ee.fps++
    }

    function b() {
        for (var e = 0; e < R.length; e++) {
            var t = e % 8 * 32,
                i = 32 * Math.floor(e / 8),
                n = 8 * (R[e] - 1);
            R[e] - 1 == 22 ? n = Ee.fps >= 51 ? 352 : 8 * (R[e] - 1) : R[e] - 1 == 4 ? n = Ee.fps >= 51 ? 360 : 8 * (R[e] - 1) : R[e] - 1 == 5 && (n = Ee.fps >= 51 ? 480 : 8 * (R[e] - 1)), se.drawImage(Ee.currentMap.tileset.image, n, 0, 8, 8, t, i, 32, 32)
        }
        se.drawImage(le.image, 0, 0, 51, 50, oe.width - 227.5, 36.25, 204, 200)
    }

    function E() {
        Ee.message ? Y(se, Ee.message, {
            w: oe.width,
            h: oe.height
        }, ue.image) : Ee.tooltip && Q(se, Ee.tooltip, {
            w: oe.width,
            h: oe.height
        }, ue.image)
    }

    function q() {
        if (6 === Se) return qe = new W(3), Ee.state = "play", pe.play(100), void setTimeout(function() {
            Ee.tooltip = "hmm 3 mins", setTimeout(function() {
                Ee.tooltip = null, qe.start()
            }, 2500)
        }, 1e3);
        Q(se, O[Se], {
            w: oe.width,
            h: oe.height
        }, ue.image), n() - Te >= 2500 && (Se++, Te = n(), xe.currentState = 2 === Se ? "left" : 3 === Se ? "right" : 4 === Se ? "up" : "down")
    }

    function T() {
        if (370 === xe.x) {
            if (5 === Me) return f("down", .01), void(1249 === xe.y && (Ee.state = "finish"));
            xe.currentState = "down", se.drawImage(ae.image, 0, 64, 16, 16, xe.x - Ee.viewport.x, xe.y - Ee.viewport.y + 107, 30, 30), Q(se, B[Me], {
                w: oe.width,
                h: oe.height
            }, ue.image, "top"), n() - De >= 2500 && (Me++, De = n())
        } else f("left", .01)
    }

    function S() {
        Y(se, "quest of tod **   samirh ***  js13k 18", {
            w: oe.width,
            h: oe.height
        }, ue.image)
    }

    function D() {
        j(se, qe.minutes + ":" + qe.seconds, {
            w: oe.width,
            h: oe.height
        }, ue.image), "00" === qe.minutes && "00" === qe.seconds && (Ee.state = "gameover")
    }

    function M() {
        Ee.message = "  game over ** you need to * be faster. * stay locked * forever!", E()
    }

    function F() {
        switch (se.fillStyle = Ee.backgroundColor, se.fillRect(0, 0, oe.width, oe.height), Ee.state) {
            case "menu":
                b();
                break;
            case "intro":
                y(xe), q();
                break;
            case "play":
                w(), k(), y(xe), D(), E();
                break;
            case "outro":
                w(), k(), y(xe), T();
                break;
            case "finish":
                S();
                break;
            case "gameover":
                w(), k(), y(xe), D(), M()
        }
    }

    function C() {
        for (re = n(), Fe += Math.min(1, (re - Ce) / 1e3); Fe > Oe;) Fe -= Oe, x(Oe);
        F(), Ce = re, requestAnimationFrame(C, oe)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var O = [" ", " ", "dan daaaaan!!!", "what happened", ". click click .", ".. lock .."],
        B = [" ", "stupid machine", "thank god", "you made it", "lets move out"],
        R = [8, 8, 4, 4, 5, 4, 8, 8, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 4, 4, 4, 4, 5, 7, 4, 4, 4, 6, 7, 4, 4, 5, 4, 4, 4, 4, 4, 4, 8, 8, 29, 4, 7, 6, 21, 21, 38, 21, 21, 21, 21, 38, 23, 23, 23, 23, 23, 23, 23, 23, 23, 22, 23],
        I = {
            layers: [{
                data: [12, 13, 14, 13, 13, 13, 14, 13, 13, 14, 13, 13, 13, 14, 13, 12, 2, 3, 3, 3, 3, 3, 3, 2, 8, 8, 8, 23, 23, 23, 23, 23, 23, 23, 2, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 2, 12, 1, 1, 1, 1, 1, 1, 1, 17, 17, 28, 28, 28, 28, 28, 12, 2, 20, 20, 19, 20, 27, 27, 3, 21, 21, 38, 23, 23, 23, 22, 23, 23, 23, 2, 27, 27, 27, 27, 2, 2, 4, 5, 4, 4, 4, 7, 2, 12, 25, 1, 1, 1, 1, 1, 1, 17, 17, 28, 28, 28, 28, 28, 15, 3, 20, 20, 20, 19, 20, 27, 24, 23, 23, 23, 23, 24, 23, 23, 23, 23, 24, 3, 20, 20, 20, 19, 3, 3, 4, 8, 4, 4, 8, 4, 2, 12, 25, 1, 17, 17, 17, 1, 1, 1, 1, 28, 28, 1, 1, 1, 1, 20, 19, 20, 19, 20, 20, 20, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 20, 20, 19, 20, 20, 18, 4, 4, 4, 4, 6, 4, 5, 2, 12, 1, 1, 17, 17, 17, 1, 1, 1, 1, 28, 28, 1, 1, 1, 1, 20, 20, 19, 20, 19, 19, 20, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 20, 20, 19, 20, 20, 18, 4, 4, 8, 4, 4, 4, 4, 2, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 28, 28, 12, 2, 27, 27, 27, 20, 20, 19, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 19, 19, 20, 19, 20, 2, 2, 4, 4, 4, 4, 6, 4, 2, 12, 1, 1, 1, 1, 1, 1, 1, 28, 17, 1, 1, 1, 28, 28, 12, 2, 27, 27, 27, 27, 27, 20, 24, 23, 23, 23, 23, 24, 23, 23, 23, 23, 24, 2, 27, 27, 27, 27, 2, 3, 4, 26, 10, 10, 26, 8, 3, 12, 13, 15, 1, 1, 13, 13, 12, 13, 13, 13, 13, 13, 13, 13, 13, 3, 3, 3, 3, 3, 3, 3, 3, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 3, 3, 3, 3, 3, 3, 21, 21, 21, 10, 10, 21, 21, 38, 12, 13, 13, 1, 1, 14, 13, 12, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 10, 10, 23, 23, 23, 12, 28, 1, 1, 1, 1, 28, 12, 8, 6, 7, 7, 5, 7, 7, 8, 8, 4, 6, 4, 8, 4, 4, 8, 23, 23, 23, 60, 7, 59, 23, 23, 23, 23, 23, 23, 22, 23, 23, 23, 23, 60, 26, 10, 10, 26, 59, 23, 12, 1, 1, 1, 1, 1, 17, 12, 8, 7, 29, 26, 7, 7, 4, 8, 8, 4, 4, 8, 4, 5, 4, 26, 23, 23, 26, 5, 6, 4, 59, 23, 23, 23, 23, 23, 23, 23, 60, 6, 4, 7, 4, 4, 4, 4, 6, 59, 12, 1, 1, 25, 25, 1, 1, 12, 8, 7, 5, 7, 7, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 11, 11, 11, 11, 4, 4, 4, 8, 23, 23, 60, 7, 59, 23, 23, 4, 4, 4, 5, 4, 4, 8, 7, 4, 4, 12, 1, 1, 28, 28, 1, 1, 12, 8, 26, 7, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 8, 4, 11, 11, 11, 11, 4, 4, 6, 4, 4, 6, 4, 6, 5, 4, 7, 4, 21, 21, 4, 4, 8, 8, 21, 4, 5, 12, 17, 1, 1, 1, 1, 1, 12, 8, 6, 7, 4, 4, 6, 4, 8, 8, 4, 5, 4, 8, 4, 4, 26, 23, 23, 26, 4, 4, 4, 4, 5, 4, 4, 8, 4, 6, 4, 4, 23, 23, 4, 4, 21, 38, 23, 4, 4, 12, 28, 1, 1, 1, 1, 28, 12, 8, 7, 4, 4, 4, 4, 4, 8, 8, 6, 4, 8, 4, 6, 4, 8, 23, 23, 23, 6, 4, 8, 21, 21, 21, 21, 21, 4, 4, 21, 38, 23, 23, 6, 4, 23, 23, 23, 4, 4, 12, 13, 13, 1, 1, 15, 13, 12, 8, 4, 4, 4, 4, 4, 6, 8, 8, 8, 8, 8, 8, 8, 8, 23, 23, 23, 23, 4, 4, 8, 23, 23, 23, 23, 23, 6, 4, 23, 23, 23, 23, 4, 5, 23, 23, 23, 4, 4, 12, 13, 14, 9, 9, 13, 13, 12, 8, 26, 4, 5, 4, 4, 4, 8, 23, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 5, 4, 4, 23, 23, 23, 23, 23, 4, 4, 23, 23, 23, 23, 4, 4, 8, 8, 8, 4, 6, 12, 8, 8, 4, 4, 4, 8, 12, 8, 4, 4, 4, 4, 4, 26, 8, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 60, 6, 4, 4, 59, 23, 23, 23, 60, 4, 6, 59, 23, 23, 23, 4, 4, 6, 4, 4, 4, 4, 12, 7, 4, 4, 4, 5, 8, 12, 8, 6, 4, 8, 8, 8, 8, 8, 23, 23, 23, 60, 4, 6, 59, 23, 23, 60, 8, 4, 4, 5, 8, 59, 23, 23, 7, 4, 4, 8, 23, 23, 23, 5, 4, 4, 4, 7, 4, 8, 12, 4, 5, 4, 4, 4, 7, 12, 8, 4, 4, 4, 4, 4, 4, 8, 23, 23, 60, 7, 6, 4, 4, 59, 23, 8, 4, 6, 4, 4, 7, 4, 23, 23, 8, 4, 7, 4, 23, 23, 23, 8, 26, 10, 10, 26, 8, 38, 12, 4, 4, 4, 4, 4, 4, 12, 8, 4, 4, 4, 4, 6, 4, 8, 23, 23, 5, 4, 4, 4, 8, 8, 23, 8, 8, 4, 4, 6, 4, 4, 23, 23, 39, 5, 4, 8, 23, 23, 23, 39, 21, 10, 10, 21, 38, 23, 12, 8, 6, 4, 4, 5, 4, 12, 8, 8, 8, 8, 8, 4, 4, 8, 23, 23, 39, 26, 10, 10, 26, 38, 23, 39, 8, 4, 4, 4, 8, 38, 23, 22, 23, 39, 21, 38, 23, 23, 23, 23, 23, 10, 10, 23, 23, 23, 12, 8, 8, 4, 4, 7, 8, 12, 8, 26, 4, 4, 4, 4, 4, 8, 23, 23, 23, 39, 10, 10, 38, 23, 23, 23, 39, 21, 21, 21, 38, 23, 23, 23, 23, 23, 23, 23, 23, 22, 23, 23, 23, 10, 10, 23, 23, 23, 12, 13, 13, 9, 9, 15, 13, 12, 8, 4, 6, 4, 5, 4, 4, 8, 23, 23, 23, 23, 10, 10, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 10, 10, 23, 23, 22, 12, 13, 14, 1, 1, 14, 13, 12, 8, 4, 4, 4, 4, 4, 4, 8, 8, 23, 23, 26, 10, 10, 26, 8, 8, 8, 8, 8, 8, 8, 8, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 10, 10, 23, 23, 23, 12, 1, 1, 1, 1, 1, 1, 12, 8, 4, 4, 6, 7, 4, 4, 8, 8, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 10, 10, 23, 23, 23, 12, 1, 1, 17, 17, 1, 1, 13, 8, 4, 6, 29, 29, 6, 4, 8, 8, 6, 4, 4, 4, 4, 5, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 4, 5, 7, 4, 8, 8, 8, 26, 10, 10, 26, 8, 8, 12, 1, 1, 17, 17, 1, 1, 1, 9, 4, 6, 26, 26, 5, 4, 4, 4, 4, 4, 7, 6, 4, 4, 4, 4, 4, 8, 7, 4, 8, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 6, 4, 4, 4, 4, 4, 8, 12, 1, 1, 17, 17, 1, 1, 1, 9, 4, 5, 29, 29, 6, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 5, 4, 7, 4, 6, 4, 4, 4, 4, 4, 4, 4, 5, 4, 8, 12, 1, 1, 17, 17, 1, 1, 12, 8, 4, 4, 7, 6, 4, 4, 8, 8, 29, 4, 4, 6, 4, 29, 8, 8, 4, 5, 4, 4, 4, 5, 8, 4, 4, 4, 4, 4, 4, 4, 8, 8, 4, 5, 4, 4, 4, 4, 8, 12, 1, 1, 1, 1, 1, 1, 12, 8, 4, 4, 4, 4, 4, 4, 8, 8, 29, 29, 18, 4, 4, 18, 8, 8, 6, 8, 6, 4, 8, 4, 8, 4, 4, 6, 4, 4, 5, 4, 8, 8, 4, 4, 4, 4, 7, 4, 8, 12, 1, 1, 12, 12, 1, 1, 12, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 8, 8, 8, 12, 9, 9, 12, 12, 1, 1, 12, 12, 13, 14, 13, 13, 14, 13, 12, 12, 16, 30, 31, 32, 33, 16, 12, 12, 13, 13, 4, 4, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 2, 8, 8, 8, 5, 5, 8, 8, 8, 12, 4, 6, 12, 14, 1, 1, 12, 12, 17, 17, 1, 1, 1, 17, 12, 12, 17, 34, 35, 36, 37, 17, 12, 12, 4, 4, 4, 4, 6, 4, 2, 2, 4, 4, 4, 4, 4, 18, 2, 8, 7, 6, 5, 7, 5, 6, 8, 12, 4, 4, 12, 17, 1, 1, 13, 13, 17, 17, 1, 1, 1, 1, 13, 13, 1, 1, 1, 1, 1, 1, 13, 13, 4, 4, 5, 4, 4, 4, 3, 3, 4, 6, 4, 4, 4, 4, 2, 39, 21, 5, 6, 6, 6, 21, 38, 12, 6, 4, 12, 17, 1, 1, 1, 1, 1, 1, 17, 17, 17, 17, 17, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 4, 4, 8, 4, 4, 4, 18, 4, 4, 8, 8, 5, 4, 2, 23, 23, 6, 4, 4, 5, 23, 23, 12, 4, 4, 12, 1, 1, 1, 1, 1, 1, 1, 17, 17, 17, 17, 17, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4, 8, 8, 5, 4, 4, 18, 4, 4, 8, 4, 4, 4, 2, 23, 23, 4, 5, 4, 6, 23, 23, 12, 9, 4, 12, 1, 1, 1, 12, 12, 28, 1, 17, 17, 1, 1, 12, 12, 17, 1, 1, 1, 1, 1, 12, 12, 4, 4, 4, 8, 4, 4, 12, 2, 18, 4, 8, 6, 4, 4, 2, 23, 23, 7, 4, 6, 5, 23, 23, 12, 4, 5, 12, 28, 1, 17, 12, 12, 28, 28, 17, 17, 1, 28, 12, 12, 17, 17, 1, 1, 1, 17, 12, 12, 4, 6, 4, 4, 4, 4, 12, 2, 4, 7, 8, 4, 4, 18, 2, 23, 23, 8, 8, 8, 8, 23, 23, 13, 13, 13, 15, 15, 13, 13, 13, 13, 13, 15, 17, 17, 15, 13, 13, 13, 15, 16, 15, 15, 16, 15, 13, 13, 13, 13, 15, 15, 13, 13, 13, 3, 3, 3, 3, 3, 3, 3, 3, 23, 23, 39, 21, 21, 38, 23, 23]
            }, {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 0, 2, 2, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 0, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                objects: [{
                    gid: 41,
                    properties: {
                        key_id: "0"
                    },
                    x: 168.068723520391,
                    y: 304.210537259897
                }, {
                    gid: 41,
                    properties: {
                        key_id: "1",
                        message: "forest open"
                    },
                    x: 271.907779481714,
                    y: 272.11010318925
                }, {
                    gid: 43,
                    properties: {
                        cX: 23,
                        cY: 35,
                        key_id: "0"
                    },
                    x: 183.963926729017,
                    y: 287.997234483859
                }, {
                    gid: 43,
                    properties: {
                        cX: 23,
                        cY: 36,
                        key_id: "0"
                    },
                    x: 183.963926729017,
                    y: 295.974684890709
                }, {
                    gid: 43,
                    properties: {
                        cX: 16,
                        cY: 35,
                        key_id: "99"
                    },
                    x: 127.856255066198,
                    y: 287.977303431505
                }, {
                    gid: 43,
                    properties: {
                        cX: 16,
                        cY: 36,
                        key_id: "99"
                    },
                    x: 127.856255066198,
                    y: 295.948122129154
                }, {
                    gid: 43,
                    properties: {
                        cX: 36,
                        cY: 33,
                        key_id: "3"
                    },
                    x: 288.031664915439,
                    y: 272.020598121953
                }, {
                    gid: 43,
                    properties: {
                        cX: 36,
                        cY: 34,
                        key_id: "3"
                    },
                    x: 288.031664915439,
                    y: 279.998598121953
                }, {
                    gid: 40,
                    properties: {
                        message: "Hmm machine *locked whole *this place. *Find a way to *turn it down! **         Dan",
                        message_id: "0"
                    },
                    x: 143.110327622781,
                    y: 277.832664074891
                }, {
                    gid: 42,
                    properties: {
                        scroll_id: "0"
                    },
                    x: 295.786697692457,
                    y: 304.036247715519
                }, {
                    gid: 44,
                    properties: {
                        cX: 27,
                        cY: 32,
                        key_id: "1"
                    },
                    x: 216.014969126177,
                    y: 264.088567329882
                }, {
                    gid: 44,
                    properties: {
                        cX: 28,
                        cY: 32,
                        key_id: "1"
                    },
                    x: 223.967317407846,
                    y: 264.088567329882
                }, {
                    gid: 44,
                    properties: {
                        cX: 43,
                        cY: 26,
                        key_id: "4"
                    },
                    x: 343.929743023581,
                    y: 216.130033954836
                }, {
                    gid: 44,
                    properties: {
                        cX: 44,
                        cY: 26,
                        key_id: "4"
                    },
                    x: 351.881743023581,
                    y: 216.130033954836
                }, {
                    gid: 41,
                    properties: {
                        key_id: "4"
                    },
                    x: 351.960538561284,
                    y: 208.040405553523
                }, {
                    gid: 41,
                    properties: {
                        key_id: "8",
                        message: "basement open"
                    },
                    x: 223.893219903859,
                    y: 176.030661123198
                }, {
                    gid: 41,
                    properties: {
                        key_id: "3",
                        message: "garden open"
                    },
                    x: 159.964706387747,
                    y: 152.002747775548
                }, {
                    gid: 43,
                    properties: {
                        cX: 15,
                        cY: 3,
                        key_id: "8"
                    },
                    x: 119.965612538113,
                    y: 32.0421363127097
                }, {
                    gid: 43,
                    properties: {
                        cX: 15,
                        cY: 4,
                        key_id: "8"
                    },
                    x: 119.965612538113,
                    y: 40.0201363127097
                }, {
                    gid: 43,
                    properties: {
                        cX: 7,
                        cY: 35,
                        key_id: "99"
                    },
                    x: 55.9864200478847,
                    y: 287.994347894629
                }, {
                    gid: 43,
                    properties: {
                        cX: 7,
                        cY: 36,
                        key_id: "99"
                    },
                    x: 55.9864200478847,
                    y: 295.965347894629
                }, {
                    gid: 44,
                    properties: {
                        cX: 20,
                        cY: 24,
                        key_id: "6"
                    },
                    x: 160.004822951058,
                    y: 200.038858311182
                }, {
                    gid: 44,
                    properties: {
                        cX: 21,
                        cY: 24,
                        key_id: "6"
                    },
                    x: 167.956822951058,
                    y: 200.038858311182
                }, {
                    gid: 44,
                    properties: {
                        cX: 43,
                        cY: 6,
                        key_id: "7"
                    },
                    x: 344.049482255728,
                    y: 56.0111452750509
                }, {
                    gid: 44,
                    properties: {
                        cX: 44,
                        cY: 6,
                        key_id: "7"
                    },
                    x: 352.001482255728,
                    y: 56.0111452750509
                }, {
                    gid: 42,
                    properties: {
                        scroll_id: "1"
                    },
                    x: 360.022009871549,
                    y: 39.9176360746903
                }, {
                    gid: 41,
                    properties: {
                        key_id: "7"
                    },
                    x: 360.04990006203,
                    y: 16.1254393824523
                }, {
                    gid: 42,
                    properties: {
                        scroll_id: "2"
                    },
                    x: 359.980774807226,
                    y: 303.981810008799
                }, {
                    gid: 42,
                    properties: {
                        scroll_id: "3"
                    },
                    x: 7.9777483110204,
                    y: 311.932761238971
                }, {
                    gid: 41,
                    properties: {
                        key_id: "6",
                        message: "island open"
                    },
                    x: 72.0635739198713,
                    y: 79.9484141306786
                }, {
                    gid: 1,
                    properties: {
                        key_id: "99"
                    },
                    x: 175.975550145427,
                    y: 288.037648029262
                }, {
                    gid: 1,
                    properties: {
                        key_id: "99"
                    },
                    x: 175.959735627496,
                    y: 296.040782242246
                }, {
                    gid: 42,
                    properties: {
                        scroll_id: "4"
                    },
                    x: 8.04977665612947,
                    y: 16.0203051993646
                }, {
                    gid: 40,
                    properties: {
                        message: "keep off the *flowers...",
                        message_id: "1"
                    },
                    x: 223.960032778568,
                    y: 222.382451699703
                }, {
                    gid: 40,
                    properties: {
                        message: "This beatiful *water... *Makes me soo *happy!",
                        message_id: "2"
                    },
                    x: 247.908866997143,
                    y: 150.575282635577
                }, {
                    gid: 40,
                    properties: {
                        message: "Code with *five digits.. *Security!!",
                        message_id: "3"
                    },
                    x: 24.0332488200485,
                    y: 110.034071874533
                }, {
                    gid: 40,
                    properties: {
                        message: "Someone needs *to clean this!",
                        message_id: "4"
                    },
                    x: 136.183798224027,
                    y: 14.2705302013792
                }, {
                    gid: 40,
                    properties: {
                        message: "Who is hiding*in grass..",
                        message_id: "5"
                    },
                    x: 368.049794875805,
                    y: 222.495687931816
                }, {
                    gid: 1,
                    properties: {
                        finish_id: 1
                    },
                    x: 119.745771662646,
                    y: 288.022893681401
                }, {
                    gid: 1,
                    properties: {
                        finish_id: 1
                    },
                    x: 119.745771662646,
                    y: 295.872971468535
                }]
            }]
        },
        X = {
            a: 0,
            b: 8,
            c: 16,
            d: 24,
            e: 32,
            f: 40,
            g: 48,
            h: 56,
            i: 64,
            j: 72,
            k: 80,
            l: 88,
            m: 96,
            n: 104,
            o: 112,
            p: 120,
            q: 128,
            r: 136,
            s: 144,
            t: 152,
            u: 160,
            v: 168,
            w: 176,
            x: 184,
            y: 192,
            z: 200,
            0: 208,
            1: 216,
            2: 224,
            3: 232,
            4: 240,
            5: 248,
            6: 256,
            7: 264,
            8: 272,
            9: 280,
            ".": 288,
            "!": 296,
            " ": 304,
            ":": 312
        },
        Y = function(e, t, i, n) {
            var o = t.split("*").length,
                s = t.split(""),
                r = 0,
                a = 0;
            e.globalAlpha = .55, e.fillStyle = "#1a2332", e.fillRect(0, 0, i.w, i.h), e.globalAlpha = 1, s.forEach(function(t) {
                "*" === t ? (r += 16, a = 0) : (e.drawImage(n, X[t.toLowerCase()], 0, 8, 8, 26 + 16 * a, r + i.h / 2 - 16 * o / 2, 16, 16), a++)
            })
        },
        Q = function(e, t, i, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "bottom",
                s = "bottom" === o ? i.h - i.h / 5 : 0,
                r = "bottom" === o ? i.h - i.h / 8 : i.h / 12,
                a = t.split("");
            e.globalAlpha = .55, e.fillStyle = "#1a2332", e.fillRect(0, s, i.w, i.h / 5), e.globalAlpha = 1, a.forEach(function(t, o) {
                e.drawImage(n, X[t.toLowerCase()], 0, 8, 8, i.w / 2 - 16 * a.length / 2 + 16 * o, r, 16, 16)
            })
        },
        j = function(e, t, i, n) {
            e.globalAlpha = .55, e.fillStyle = "#1a2332", e.fillRect(i.w - i.w / 3, 0, i.w, i.h / 8), e.globalAlpha = 1, t.split("").forEach(function(t, o) {
                e.drawImage(n, X[t.toLowerCase()], 0, 8, 8, i.w - i.w / 3.1 + 16 * o, 8, 16, 16)
            })
        },
        J = function e(t, i, o) {
            a(this, e), this.tileset = t, this.frames = i, this.currentFrame = 0, this.frameTimer = n(), this.frameDuration = o
        },
        N = J,
        G = function e(t, i, n, o, s) {
            c(this, e), this.image = new Image, this.image.src = t, this.tileWidth = i, this.tileHeight = n, this.tilesInImgRow = o, this.image.onload = function() {
                s.imageSmoothingEnabled = !1
            }
        },
        Z = G,
        U = function e(t, i, n, o, s, r, a) {
            h(this, e), this.stateAnimations = t, this.currentState = i, this.x = n, this.y = o, this.width = s, this.height = r, this.speed = a, this.scrolls = 0
        },
        V = U,
        _ = function e(t, i) {
            l(this, e), this.data = t, this.tileset = i, this.width = 48, this.height = 40, this.rowTileCount = 40, this.colTileCount = 48
        },
        P = _,
        K = function e(t) {
            u(this, e), this.gid = t.gid - 1, this.x = 4 * t.x, this.y = 4 * t.y - 32, this.cX = (t.properties || {}).cX || null, this.cY = (t.properties || {}).cY || null, this.key_id = (t.properties || {}).key_id || null, this.message_id = (t.properties || {}).message_id || null, this.scroll_id = (t.properties || {}).scroll_id || null, this.finish_id = (t.properties || {}).finish_id || null, this.collected = !1, this.type = 41 == t.gid ? "key" : 43 == t.gid || 44 == t.gid ? "door" : 40 == t.gid ? "message" : 1 == t.gid ? "floor" : "scroll", this.message = (t.properties || {}).message || null
        },
        H = K,
        L = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        z = function() {
            function e(t) {
                p(this, e), this.timer = 60 * t, this.minutes = "0" + t, this.seconds = "00"
            }
            return L(e, [{
                key: "start",
                value: function() {
                    var e = this,
                        t = setInterval(function() {
                            e.minutes = parseInt(e.timer / 60, 10), e.seconds = parseInt(e.timer % 60, 10), e.minutes = e.minutes < 10 ? "0" + e.minutes : e.minutes, e.seconds = e.seconds < 10 ? "0" + e.seconds : e.seconds, --e.timer < 0 && (e.timer = 0, clearInterval(t))
                        }, 1e3)
                }
            }]), e
        }(),
        W = z,
        $ = i(1),
        ee = i.n($),
        te = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        ie = function() {
            function e() {
                d(this, e), this.ac = "undefined" != typeof AudioContext ? new AudioContext : new webkitAudioContext, this.key = ["E6 e", "E4 q"], this.scroll = ["E5 e", "E3 q"], this.lead = ["D4 q", "F4 q", "D4 q", "F4 q", "E4 q", "G4 q", "E4 q", "G4 q", "F4 q", "E4 q", "F4 q", "E4 q", "D4 q"], this.harmony = ["D4 q", "A4 e", "D4 q", "D4 e", "E4 q", "D4 e", "E4 q", "D4 e", "F4 q", "E4 e", "G4 e", "F4 e", "G4 e", "F4 e", "D4 q"], this.sequence1 = new ee.a.Sequence(this.ac, 100, this.lead), this.sequence2 = new ee.a.Sequence(this.ac, 100, this.harmony), this.keyTake = new ee.a.Sequence(this.ac, 100, this.key), this.keyTake.loop = !1, this.keyTake.tempo = 300, this.keyTake.staccato = .55, this.scrollTake = new ee.a.Sequence(this.ac, 100, this.scroll), this.scrollTake.loop = !1, this.scrollTake.tempo = 300, this.scrollTake.smoothing = 1, this.sequence1.staccato = .55, this.sequence2.staccato = .55, this.sequence1.gain.gain.value = .1, this.sequence2.gain.gain.value = .05, this.keyTake.gain.gain.value = .1, this.scrollTake.gain.gain.value = .1
            }
            return te(e, [{
                key: "play",
                value: function(e) {
                    this.muted || (this.sequence1.stop(), this.sequence2.stop(), this.sequence1.tempo = e, this.sequence2.tempo = e, this.sequence1.play(this.ac.currentTime), this.sequence2.play(this.ac.currentTime))
                }
            }, {
                key: "keySound",
                value: function() {
                    this.keyTake.play(this.ac.currentTime)
                }
            }, {
                key: "scrollSound",
                value: function() {
                    this.scrollTake.play(this.ac.currentTime)
                }
            }, {
                key: "mute",
                value: function() {
                    this.muted ? (this.sequence1.gain.gain.value = .1, this.sequence2.gain.gain.value = .05, this.keyTake.gain.gain.value = .1, this.scrollTake.gain.gain.value = .1, this.muted = !1) : (this.sequence1.gain.gain.value = 0, this.sequence2.gain.gain.value = 0, this.keyTake.gain.gain.value = 0, this.scrollTake.gain.gain.value = 0, this.muted = !0)
                }
            }]), e
        }(),
        ne = ie,
        oe = document.getElementById("game"),
        se = oe.getContext("2d");
    oe.width = 256, oe.height = 256;
    var re, ae = new Z("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABQBAMAAACt2OvuAAAALVBMVEUAAABQSDiYeFhIIADCbTYoFQ1tNiA9GQD3sW2goHA9Nin399QyLiXBwZiOjl7CHnRsAAAAAXRSTlMAQObYZgAAAqRJREFUOMuVlEFPE0EUgAfrVo/7lkYt4eAOsbE3YNjGk6FhykE8VMtsoAdTKYwe9eJyNQHZxBNN/AEk9iBn/gCJx178DYaLv8I3bzczk7g1uge+fN97pc1rUuY9CxAS/UB/Ix5btwHZnrTPnbsQRe0JhN5CEZBdACI5TkygzVwirZcBkGdXD5DWKdDG2VXDcxdYLuWidT9IuSV8p7CKZGK9hTTeIQ9EwsdIprT2F1hvuKeLwSctDPd0wd7S120aDOXYhGB3m8jS86nqI9n+DbE2VT/Jg6O+MmT1hMCS/hHRPgCsMkA8Ad8p0PnjSRxatwHJI6R1F3gUgVvwQkS0ToHeLooB6ZwCvSlEvrvwGmDR9/oawD3DTksL8nKhNhZiXFJ4ZB0hWmO8v9BYiCtEtiLWuX7IWEvjpuEBJ7JbnCtekBMfvUTS2VWHzq+UIqaJMqDE/CfA8T9+H00OvlOgKzc5D627gMRzO3chhi54CwzKAI3GSTe0jhuNLoXbO8dnPzbRQZKXAfmZaN0GludS+l4rA3uSyy1D46vIpAy1Tnnux+gDM9jGMMKB0lrhoI7fxwYNXixdnqQ42AXo4WCcX15MabD/S6mUXiGUGSj17WZQ3l+NkAjj9USlSfX9XZn/c0WMeAyhcxeak/YktG4DLrYncey8DCESoEEsvAxEmXvOgILhx53j0DluUMDS3Tl27gJbkzK37gexIaXvtTEGw4MVQU4LftBaGXb4QNCthNanBd8WA3063aXQOez1iXJKg8NnFzQInqrhqqF69YURh83iZykNBkQ2GBFUkPbZ358sm9erJ3d0lr0ZVQ0y/SF7VznAp2pg+vxXZHP/1f98XHY/y95X9QW4XoawYnB3eTa73qwaPJ/NvlcNgjRJjyrvrPD5s/4G5gPXsiwAB6wAAAAASUVORK5CYII=", 16, 16, 3, se),
        ce = new Z("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAegAAAAICAMAAAAFvZwIAAAAclBMVEUAAAA5fz4aIzInM048UHJETS4tO1NqTy8hiqZCV3u9jVE7LRlHOx9nZS9hThVUcaAXGiFZQSceQy5pPyEnKxdOOiLKx7QgK0ErVUNQp75mq0QzQ2YYNRpSKxcAK1KohyRip1gWcJKwklTat063pjTWhz2ASEVGAAAAAXRSTlMAQObYZgAAAxJJREFUSMe1l4tW2kAQhrPZLgmuXSEIQksMSvv+r9h/bt00F5Ojp58TJgRh58znrKHwyvcBbpEzQMJ7Haj+Ejm+LfHEfPOKCwGfEkb8UOoBQfGKU0J4AHSdMl2n7NxCNVTHZlNOstngRakiAjl7UIoROw6jVpxi65WKPbd11teZcoUp1+kYWzHzSdEn8ny7wTSLxpFFHzk+NtwT/cKwaPyMeFRQ+dvbW0/0AxO8ZO8ku5nrK0WnUiJpQmgDuYgY2zZGPq2Ox2MFCuME2DPBsneI/yc6qV47NdFm2i2IfpfHd9ejGXn+dXINRN8amJapjkcmLosugSQA0T8BRCshhn84HB6JQ12/rhO9p1QFL9k7ydLg7SR90YSIzq65gVxHbCOCyjlUSgG6ruubllBqxdq4VejD6bC6Sl1nXZ0jsmhjSfTzO/H83JPc4OAwzRTnBqYbEv3xRD+NKAGlDpRPJpp2bj6YbBtNJR4hGqwQHat9tY/BS/ZOsuOlN5PwS957dHuS7RYvch1tBC1OZKJB1XX3+2+4hugQTjzRqZOJhv480dbHjVIqVpet89U63RTNlGil90sNwpzbOGPnbsDt7Ek0mBOd6zDJRmpb/EkPRc9v3ZhoEn25XFg09CGCl+ydZEx0BJhoyd5JdlhwvkF48MRmEg/GW7dS3Ivifs8T3ROdEonWkq2PefwEW9/W+WqdY8kUa0RfqcCrKteJZtG0dZNoJm/ds6JfwLxop9g4GzzQJPryCi41LPMRIhO8ZO8kQzRNMERL9k6y417av199SHYTYw3cTuIJrgOaoZorgtL9vsjYRI+3binZ+mj3TlvF1rd15PmQ9XVOjPOyaFN9ze+QDK5ncDtfPVn2yxMN1LOxS2lHohlPht3ERJNkarKJBjwiMxOtW3cYbt0qOgE8cEZi2drABQ4y0XUtE30YitaRHt2M0TQT1sdUMskrWpetvyx6nk+KXuLKkOaB6IhYFg12u1y4iAbzW/cFrPl6FQFdp0zXKTv3tQba1l0DFk0THWNhrP96VQoDsYPn47vqT4s2/gCrvGswdZW5EwAAAABJRU5ErkJggg==", 8, 8, 49, se),
        he = new P(we, ce),
        le = new Z("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAyBAMAAAAD0/68AAAAGFBMVEUAAAAAAADZV2OsMjL////WzQL78jaohySbWC2NAAAAAXRSTlMAQObYZgAAAV5JREFUOMvVkztuwzAQRJdV2h2KlGsJuQDBEyjwAeJCB3Dj3pWvn9m1PjTsAEGQJo/CUqNHigvYEjyishNHDMPoI45xfFCRihoRMcahVV2HUgq60qHjvbSqFh+maqetwgOKBVPpuDI1cYJ3uDLIHt8nfVIYF/eswpqxL2MgKnFfGABLA2AdQBtFXEn64HR8pZZD8Ep5jhyIr5SaEnyvwo9UV2stoRLlb1PEb8sfKrxSxRQsV5gJrlAdMDhqBuuzVhVXtVkPLAZiqv3H6Jrk3wPdPsgA9awB8kmVkDCllI5Us3pWTG9iajomA1Q39axpEld3mGBYpnpbXuhA82nOJ8vbLuVZmHjW4Xo7XJn9rK3DsH2se4e/JKxv8irYUMGl156F9YIzi039ub+o9ODDHlQ4mwcnwlWSlYPXScMpZxZwyqwiGRx23RUy1ZyzKcy8w7xs0Dz7Lldh6yggtB3KF3g5a66Y6rXgAAAAAElFTkSuQmCC", 16, 16, 3, se),
        ue = new Z("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAIAQMAAACyIrRcAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAOBJREFUGNONz0FKBTEMBuDCg64eupOAZdy57hAIbxEyOw/hKhDILAZ8woAzoHQu6CE8iZi+E1hKy08/SP9U2vB1HE8bD9uPWWmlSXM380OAObehsSRIKQkijSMSnEm3lZDQXjuMfXG/0xohcUBDw1o1IAfsSSHeyF/m3fODav7oEJKJoogKnC96fJpcRQIuhcsCpTy3Vni6jT7QAs4E36zL1arjqUOCcYWap2zwdrpB63+sGJDUZqoTGjiTgcXt2ePMwWJ0b71H6337jdbvj6swAxkf0hrfs0BECPifBcH+AD/wS0IfpdkEAAAAAElFTkSuQmCC", 8, 8, 39, se),
        pe = new ne,
        de = 100,
        ge = new N(ae, ["1,2", "0,2", "2,2"], de),
        ye = new N(ae, ["0,0", "1,0", "2,0"], de),
        fe = new N(ae, ["0,3", "1,3", "2,3"], de),
        me = new N(ae, ["0,1", "1,1", "2,1"], de),
        Ae = {},
        we = [],
        ve = [],
        ke = {},
        xe = {},
        be = [],
        Ee = {},
        qe = {},
        Te = 0,
        Se = 0,
        De = 0,
        Me = 0,
        Fe = 0,
        Ce = n(),
        Oe = .01;
    if (document.querySelector("canvas").addEventListener("click", function() {
            "menu" === Ee.state ? (g(), Ee.state = "intro", pe.play(55)) : "finish" === Ee.state ? Ee.state = "menu" : "gameover" === Ee.state && (Ee.state = "menu")
        }), window.addEventListener("keydown", function(e) {
            Ae[e.keyCode] = !0, 77 === e.keyCode && pe.mute(), e.preventDefault()
        }), window.addEventListener("keyup", function(e) {
            delete Ae[e.keyCode], e.preventDefault()
        }), function() {
            return "ontouchstart" in document.documentElement
        }()) {
        var Be = {
            left: 37,
            right: 39,
            up: 38,
            down: 40
        };
        ! function(e) {
            var t = document.getElementById("mobile-control"),
                i = document.getElementById("orientation"),
                n = screen.height * window.devicePixelRatio - e.offsetHeight;
            t.setAttribute("style", "display: flex; height: " + n / 4 + "px"), e.setAttribute("style", "width: 99.5vmin; height: 99.5vmin; bottom: " + n / 4 + "px;"), window.addEventListener("orientationchange", function() {
                0 !== window.orientation ? i.setAttribute("style", "display: flex;") : i.setAttribute("style", "display: none;")
            })
        }(oe), document.getElementById("mobile-control").addEventListener("touchstart", function(e) {
            Be[e.target.id] && (Ae[Be[e.target.id]] = !0), e.preventDefault()
        }), document.getElementById("mobile-control").addEventListener("touchend", function(e) {
            Be[e.target.id] && delete Ae[Be[e.target.id]], e.preventDefault()
        })
    }
    C(), g();
    var Re = i(2);
    i.n(Re);
    window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    })
}, function(e, t, i) {
    var n, o, s;
    "function" == typeof Symbol && Symbol.iterator;
    ! function(i, r) {
        o = [t], n = r, void 0 !== (s = "function" == typeof n ? n.apply(t, o) : n) && (e.exports = s)
    }(0, function(e) {
        function t(e) {
            var i = e.split(s);
            this.frequency = t.getFrequency(i[0]) || 0, this.duration = t.getDuration(i[1]) || 0
        }

        function i(e, t, i) {
            this.ac = e || new AudioContext, this.createFxNodes(), this.tempo = t || 120, this.loop = !0, this.smoothing = 0, this.staccato = 0, this.notes = [], this.push.apply(this, i || [])
        }
        var n = 440 * Math.pow(Math.pow(2, 1 / 12), -9),
            o = /^[0-9.]+$/,
            s = /\s+/,
            r = /(\d+)/,
            a = {};
        "B#-C|C#-Db|D|D#-Eb|E-Fb|E#-F|F#-Gb|G|G#-Ab|A|A#-Bb|B-Cb".split("|").forEach(function(e, t) {
            e.split("-").forEach(function(e) {
                a[e] = t
            })
        }), t.getFrequency = function(e) {
            var t = e.split(r),
                i = a[t[0]],
                o = (t[1] || 4) - 4;
            return n * Math.pow(Math.pow(2, 1 / 12), i) * Math.pow(2, o)
        }, t.getDuration = function(e) {
            return o.test(e) ? parseFloat(e) : e.toLowerCase().split("").reduce(function(e, t) {
                return e + ("w" === t ? 4 : "h" === t ? 2 : "q" === t ? 1 : "e" === t ? .5 : "s" === t ? .25 : 0)
            }, 0)
        }, i.prototype.createFxNodes = function() {
            var e = [
                    ["bass", 100],
                    ["mid", 1e3],
                    ["treble", 2500]
                ],
                t = this.gain = this.ac.createGain();
            return e.forEach(function(e, i) {
                i = this[e[0]] = this.ac.createBiquadFilter(), i.type = "peaking", i.frequency.value = e[1], t.connect(t = i)
            }.bind(this)), t.connect(this.ac.destination), this
        }, i.prototype.push = function() {
            return Array.prototype.forEach.call(arguments, function(e) {
                this.notes.push(e instanceof t ? e : new t(e))
            }.bind(this)), this
        }, i.prototype.createCustomWave = function(e, t) {
            t || (t = e), this.waveType = "custom", this.customWave = [new Float32Array(e), new Float32Array(t)]
        }, i.prototype.createOscillator = function() {
            return this.stop(), this.osc = this.ac.createOscillator(), this.customWave ? this.osc.setPeriodicWave(this.ac.createPeriodicWave.apply(this.ac, this.customWave)) : this.osc.type = this.waveType || "square", this.osc.connect(this.gain), this
        }, i.prototype.scheduleNote = function(e, t) {
            var i = 60 / this.tempo * this.notes[e].duration,
                n = i * (1 - (this.staccato || 0));
            return this.setFrequency(this.notes[e].frequency, t), this.smoothing && this.notes[e].frequency && this.slide(e, t, n), this.setFrequency(0, t + n), t + i
        }, i.prototype.getNextNote = function(e) {
            return this.notes[e < this.notes.length - 1 ? e + 1 : 0]
        }, i.prototype.getSlideStartDelay = function(e) {
            return e - Math.min(e, 60 / this.tempo * this.smoothing)
        }, i.prototype.slide = function(e, t, i) {
            var n = this.getNextNote(e),
                o = this.getSlideStartDelay(i);
            return this.setFrequency(this.notes[e].frequency, t + o), this.rampFrequency(n.frequency, t + i), this
        }, i.prototype.setFrequency = function(e, t) {
            return this.osc.frequency.setValueAtTime(e, t), this
        }, i.prototype.rampFrequency = function(e, t) {
            return this.osc.frequency.linearRampToValueAtTime(e, t), this
        }, i.prototype.play = function(e) {
            return e = "number" == typeof e ? e : this.ac.currentTime, this.createOscillator(), this.osc.start(e), this.notes.forEach(function(t, i) {
                e = this.scheduleNote(i, e)
            }.bind(this)), this.osc.stop(e), this.osc.onended = this.loop ? this.play.bind(this, e) : null, this
        }, i.prototype.stop = function() {
            return this.osc && (this.osc.onended = null, this.osc.disconnect(), this.osc = null), this
        }, e.Note = t, e.Sequence = i
    })
}, function(e, t) {}]);