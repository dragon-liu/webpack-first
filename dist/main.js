(() => {
  var r = {
      341: (r, t, e) => {
        r.exports = e(685);
      },
      171: (r, t, e) => {
        e(450);
        var n = e(58).Object,
          o = (r.exports = function (r, t, e) {
            return n.defineProperty(r, t, e);
          });
        n.defineProperty.sham && (o.sham = !0);
      },
      685: (r, t, e) => {
        var n = e(910);
        r.exports = n;
      },
      883: (r, t, e) => {
        var n = e(475),
          o = e(826);
        r.exports = function (r) {
          if (n(r)) return r;
          throw TypeError(o(r) + " is not a function");
        };
      },
      59: (r, t, e) => {
        var n = e(941);
        r.exports = function (r) {
          if (n(r)) return r;
          throw TypeError(String(r) + " is not an object");
        };
      },
      532: (r) => {
        var t = {}.toString;
        r.exports = function (r) {
          return t.call(r).slice(8, -1);
        };
      },
      29: (r, t, e) => {
        var n = e(746),
          o = e(988),
          i = e(216);
        r.exports = n
          ? function (r, t, e) {
              return o.f(r, t, i(1, e));
            }
          : function (r, t, e) {
              return (r[t] = e), r;
            };
      },
      216: (r) => {
        r.exports = function (r, t) {
          return {
            enumerable: !(1 & r),
            configurable: !(2 & r),
            writable: !(4 & r),
            value: t,
          };
        };
      },
      746: (r, t, e) => {
        var n = e(981);
        r.exports = !n(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      333: (r, t, e) => {
        var n = e(899),
          o = e(941),
          i = n.document,
          u = o(i) && o(i.createElement);
        r.exports = function (r) {
          return u ? i.createElement(r) : {};
        };
      },
      861: (r, t, e) => {
        var n = e(626);
        r.exports = n("navigator", "userAgent") || "";
      },
      385: (r, t, e) => {
        var n,
          o,
          i = e(899),
          u = e(861),
          a = i.process,
          c = i.Deno,
          s = (a && a.versions) || (c && c.version),
          f = s && s.v8;
        f
          ? (o = (n = f.split("."))[0] < 4 ? 1 : n[0] + n[1])
          : u &&
            (!(n = u.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
            (n = u.match(/Chrome\/(\d+)/)) &&
            (o = n[1]),
          (r.exports = o && +o);
      },
      887: (r, t, e) => {
        "use strict";
        var n = e(899),
          o = e(475),
          i = e(677).f,
          u = e(252),
          a = e(58),
          c = e(843),
          s = e(29),
          f = e(953),
          p = function (r) {
            var t = function (t, e, n) {
              if (this instanceof r) {
                switch (arguments.length) {
                  case 0:
                    return new r();
                  case 1:
                    return new r(t);
                  case 2:
                    return new r(t, e);
                }
                return new r(t, e, n);
              }
              return r.apply(this, arguments);
            };
            return (t.prototype = r.prototype), t;
          };
        r.exports = function (r, t) {
          var e,
            l,
            v,
            y,
            b,
            h,
            x,
            g,
            m = r.target,
            w = r.global,
            d = r.stat,
            j = r.proto,
            O = w ? n : d ? n[m] : (n[m] || {}).prototype,
            S = w ? a : a[m] || s(a, m, {})[m],
            P = S.prototype;
          for (v in t)
            (e = !u(w ? v : m + (d ? "." : "#") + v, r.forced) && O && f(O, v)),
              (b = S[v]),
              e && (h = r.noTargetGet ? (g = i(O, v)) && g.value : O[v]),
              (y = e && h ? h : t[v]),
              (e && typeof b == typeof y) ||
                ((x =
                  r.bind && e
                    ? c(y, n)
                    : r.wrap && e
                    ? p(y)
                    : j && o(y)
                    ? c(Function.call, y)
                    : y),
                (r.sham || (y && y.sham) || (b && b.sham)) && s(x, "sham", !0),
                s(S, v, x),
                j &&
                  (f(a, (l = m + "Prototype")) || s(a, l, {}),
                  s(a[l], v, y),
                  r.real && P && !P[v] && s(P, v, y)));
        };
      },
      981: (r) => {
        r.exports = function (r) {
          try {
            return !!r();
          } catch (r) {
            return !0;
          }
        };
      },
      843: (r, t, e) => {
        var n = e(883);
        r.exports = function (r, t, e) {
          if ((n(r), void 0 === t)) return r;
          switch (e) {
            case 0:
              return function () {
                return r.call(t);
              };
            case 1:
              return function (e) {
                return r.call(t, e);
              };
            case 2:
              return function (e, n) {
                return r.call(t, e, n);
              };
            case 3:
              return function (e, n, o) {
                return r.call(t, e, n, o);
              };
          }
          return function () {
            return r.apply(t, arguments);
          };
        };
      },
      626: (r, t, e) => {
        var n = e(58),
          o = e(899),
          i = e(475),
          u = function (r) {
            return i(r) ? r : void 0;
          };
        r.exports = function (r, t) {
          return arguments.length < 2
            ? u(n[r]) || u(o[r])
            : (n[r] && n[r][t]) || (o[r] && o[r][t]);
        };
      },
      229: (r, t, e) => {
        var n = e(883);
        r.exports = function (r, t) {
          var e = r[t];
          return null == e ? void 0 : n(e);
        };
      },
      899: (r, t, e) => {
        var n = function (r) {
          return r && r.Math == Math && r;
        };
        r.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof e.g && e.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      953: (r, t, e) => {
        var n = e(678),
          o = {}.hasOwnProperty;
        r.exports =
          Object.hasOwn ||
          function (r, t) {
            return o.call(n(r), t);
          };
      },
      840: (r, t, e) => {
        var n = e(746),
          o = e(981),
          i = e(333);
        r.exports =
          !n &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(i("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      26: (r, t, e) => {
        var n = e(981),
          o = e(532),
          i = "".split;
        r.exports = n(function () {
          return !Object("z").propertyIsEnumerable(0);
        })
          ? function (r) {
              return "String" == o(r) ? i.call(r, "") : Object(r);
            }
          : Object;
      },
      475: (r) => {
        r.exports = function (r) {
          return "function" == typeof r;
        };
      },
      252: (r, t, e) => {
        var n = e(981),
          o = e(475),
          i = /#|\.prototype\./,
          u = function (r, t) {
            var e = c[a(r)];
            return e == f || (e != s && (o(t) ? n(t) : !!t));
          },
          a = (u.normalize = function (r) {
            return String(r).replace(i, ".").toLowerCase();
          }),
          c = (u.data = {}),
          s = (u.NATIVE = "N"),
          f = (u.POLYFILL = "P");
        r.exports = u;
      },
      941: (r, t, e) => {
        var n = e(475);
        r.exports = function (r) {
          return "object" == typeof r ? null !== r : n(r);
        };
      },
      592: (r) => {
        r.exports = !0;
      },
      664: (r, t, e) => {
        var n = e(475),
          o = e(626),
          i = e(302);
        r.exports = i
          ? function (r) {
              return "symbol" == typeof r;
            }
          : function (r) {
              var t = o("Symbol");
              return n(t) && Object(r) instanceof t;
            };
      },
      497: (r, t, e) => {
        var n = e(385),
          o = e(981);
        r.exports =
          !!Object.getOwnPropertySymbols &&
          !o(function () {
            var r = Symbol();
            return (
              !String(r) ||
              !(Object(r) instanceof Symbol) ||
              (!Symbol.sham && n && n < 41)
            );
          });
      },
      988: (r, t, e) => {
        var n = e(746),
          o = e(840),
          i = e(59),
          u = e(894),
          a = Object.defineProperty;
        t.f = n
          ? a
          : function (r, t, e) {
              if ((i(r), (t = u(t)), i(e), o))
                try {
                  return a(r, t, e);
                } catch (r) {}
              if ("get" in e || "set" in e)
                throw TypeError("Accessors not supported");
              return "value" in e && (r[t] = e.value), r;
            };
      },
      677: (r, t, e) => {
        var n = e(746),
          o = e(760),
          i = e(216),
          u = e(529),
          a = e(894),
          c = e(953),
          s = e(840),
          f = Object.getOwnPropertyDescriptor;
        t.f = n
          ? f
          : function (r, t) {
              if (((r = u(r)), (t = a(t)), s))
                try {
                  return f(r, t);
                } catch (r) {}
              if (c(r, t)) return i(!o.f.call(r, t), r[t]);
            };
      },
      760: (r, t) => {
        "use strict";
        var e = {}.propertyIsEnumerable,
          n = Object.getOwnPropertyDescriptor,
          o = n && !e.call({ 1: 2 }, 1);
        t.f = o
          ? function (r) {
              var t = n(this, r);
              return !!t && t.enumerable;
            }
          : e;
      },
      811: (r, t, e) => {
        var n = e(475),
          o = e(941);
        r.exports = function (r, t) {
          var e, i;
          if ("string" === t && n((e = r.toString)) && !o((i = e.call(r))))
            return i;
          if (n((e = r.valueOf)) && !o((i = e.call(r)))) return i;
          if ("string" !== t && n((e = r.toString)) && !o((i = e.call(r))))
            return i;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      58: (r) => {
        r.exports = {};
      },
      219: (r) => {
        r.exports = function (r) {
          if (null == r) throw TypeError("Can't call method on " + r);
          return r;
        };
      },
      911: (r, t, e) => {
        var n = e(899);
        r.exports = function (r, t) {
          try {
            Object.defineProperty(n, r, {
              value: t,
              configurable: !0,
              writable: !0,
            });
          } catch (e) {
            n[r] = t;
          }
          return t;
        };
      },
      30: (r, t, e) => {
        var n = e(899),
          o = e(911),
          i = "__core-js_shared__",
          u = n[i] || o(i, {});
        r.exports = u;
      },
      726: (r, t, e) => {
        var n = e(592),
          o = e(30);
        (r.exports = function (r, t) {
          return o[r] || (o[r] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.18.2",
          mode: n ? "pure" : "global",
          copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
        });
      },
      529: (r, t, e) => {
        var n = e(26),
          o = e(219);
        r.exports = function (r) {
          return n(o(r));
        };
      },
      678: (r, t, e) => {
        var n = e(219);
        r.exports = function (r) {
          return Object(n(r));
        };
      },
      935: (r, t, e) => {
        var n = e(941),
          o = e(664),
          i = e(229),
          u = e(811),
          a = e(813)("toPrimitive");
        r.exports = function (r, t) {
          if (!n(r) || o(r)) return r;
          var e,
            c = i(r, a);
          if (c) {
            if (
              (void 0 === t && (t = "default"),
              (e = c.call(r, t)),
              !n(e) || o(e))
            )
              return e;
            throw TypeError("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), u(r, t);
        };
      },
      894: (r, t, e) => {
        var n = e(935),
          o = e(664);
        r.exports = function (r) {
          var t = n(r, "string");
          return o(t) ? t : String(t);
        };
      },
      826: (r) => {
        r.exports = function (r) {
          try {
            return String(r);
          } catch (r) {
            return "Object";
          }
        };
      },
      418: (r) => {
        var t = 0,
          e = Math.random();
        r.exports = function (r) {
          return (
            "Symbol(" +
            String(void 0 === r ? "" : r) +
            ")_" +
            (++t + e).toString(36)
          );
        };
      },
      302: (r, t, e) => {
        var n = e(497);
        r.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      813: (r, t, e) => {
        var n = e(899),
          o = e(726),
          i = e(953),
          u = e(418),
          a = e(497),
          c = e(302),
          s = o("wks"),
          f = n.Symbol,
          p = c ? f : (f && f.withoutSetter) || u;
        r.exports = function (r) {
          return (
            (i(s, r) && (a || "string" == typeof s[r])) ||
              (a && i(f, r) ? (s[r] = f[r]) : (s[r] = p("Symbol." + r))),
            s[r]
          );
        };
      },
      450: (r, t, e) => {
        var n = e(887),
          o = e(746);
        n(
          { target: "Object", stat: !0, forced: !o, sham: !o },
          { defineProperty: e(988).f }
        );
      },
      910: (r, t, e) => {
        var n = e(171);
        r.exports = n;
      },
    },
    t = {};
  function e(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { exports: {} });
    return r[n](i, i.exports, e), i.exports;
  }
  (e.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (r) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      "use strict";
      var r = e(341);
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            r(t, o.key, o);
        }
      }
      new ((function () {
        function r(t) {
          !(function (r, t) {
            if (!(r instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
            (this.name = t);
        }
        var e, n;
        return (
          (e = r),
          (n = [
            {
              key: "getName",
              value: function () {
                return this.name;
              },
            },
          ]) && t(e.prototype, n),
          r
        );
      })())("dog");
    })();
})();
