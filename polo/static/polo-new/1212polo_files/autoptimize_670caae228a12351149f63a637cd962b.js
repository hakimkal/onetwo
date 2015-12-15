window._wpemojiSettings = {
    "baseUrl": "http:\/\/s.w.org\/images\/core\/emoji\/72x72\/",
    "ext": ".png",
    "source": {
        "concatemoji": "http:\/\/demo.curlythemes.com\/equestrian\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.3.1"
    }
};
! function(a, b, c) {
    function d(a) {
        var c = b.createElement("canvas"),
            d = c.getContext && c.getContext("2d");
        return d && d.fillText ? (d.textBaseline = "top", d.font = "600 32px Arial", "flag" === a ? (d.fillText(String.fromCharCode(55356, 56812, 55356, 56807), 0, 0), c.toDataURL().length > 3e3) : (d.fillText(String.fromCharCode(55357, 56835), 0, 0), 0 !== d.getImageData(16, 16, 1, 1).data[0])) : !1
    }

    function e(a) {
        var c = b.createElement("script");
        c.src = a, c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
    }
    var f, g;
    c.supports = {
        simple: d("simple"),
        flag: d("flag")
    }, c.DOMReady = !1, c.readyCallback = function() {
        c.DOMReady = !0
    }, c.supports.simple && c.supports.flag || (g = function() {
        c.readyCallback()
    }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
        "complete" === b.readyState && c.readyCallback()
    })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
}(window, document, window._wpemojiSettings);
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.3",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = "length" in a && a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function() {
                    return [0]
                }),
                last: oa(function(a, b) {
                    return [b - 1]
                }),
                eq: oa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                    return a === b
                }, h, !0), l = sa(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function aa() {
        return !0
    }

    function ba() {
        return !1
    }

    function ca() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ca() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function da(a) {
        var b = ea.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fa = / jQuery\d+="(?:null|\d+)"/g,
        ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
        ha = /^\s+/,
        ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ja = /<([\w:]+)/,
        ka = /<tbody/i,
        la = /<|&#?\w+;/,
        ma = /<(?:script|style|link)/i,
        na = /checked\s*(?:[^=]|=\s*.checked.)/i,
        oa = /^$|\/(?:java|ecma)script/i,
        pa = /^true\/(.*)/,
        qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ra = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sa = da(y),
        ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;

    function ua(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]);
                else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (la.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                    e = 0;
                    while (f = h[e++]) oa.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ca, Da = {};

    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fa(a) {
        var b = y,
            c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Ga = /^margin/,
        Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ia = function(a) {
        return a.currentStyle
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function La(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Ma = /alpha\([^)]*\)/i,
        Na = /opacity\s*=\s*([^)]*)/,
        Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = new RegExp("^(" + S + ")(.*)$", "i"),
        Qa = new RegExp("^([+-])=(" + S + ")", "i"),
        Ra = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ta = ["Webkit", "O", "Moz", "ms"];

    function Ua(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ta.length;
        while (e--)
            if (b = Ta[e] + c, b in a) return b;
        return d
    }

    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Ya(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ia(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
                    return Ya(a, b, d)
                }) : Ya(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Va(this, !0)
        },
        hide: function() {
            return Va(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e)
    }
    m.Tween = Za, Za.prototype = {
        constructor: Za,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/,
        bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cb = /queueHooks$/,
        db = [ib],
        eb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bb.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fb() {
        return setTimeout(function() {
            $a = void 0
        }), $a = m.now()
    }

    function gb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ab.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = db.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $a || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++)
            if (d = db[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kb, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? db.unshift(a) : db.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kb(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gb("show"),
            slideUp: gb("hide"),
            slideToggle: gb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $a = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _a || (_a = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_a), _a = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lb = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mb, nb, ob = m.expr.attrHandle,
        pb = /^(?:checked|selected)$/i,
        qb = k.getSetAttribute,
        rb = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nb = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rb && qb || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
        }
    }), qb || (mb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ob.id = ob.name = ob.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mb.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i,
        tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vb = m.now(),
        wb = /\?/,
        xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yb, zb, Ab = /#.*$/,
        Bb = /([?&])_=[^&]*/,
        Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Eb = /^(?:GET|HEAD)$/,
        Fb = /^\/\//,
        Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hb = {},
        Ib = {},
        Jb = "*/".concat("*");
    try {
        zb = location.href
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Gb.exec(zb.toLowerCase()) || [];

    function Lb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mb(a, b, c, d) {
        var e = {},
            f = a === Ib;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qb = /%20/g,
        Rb = /\[\]$/,
        Sb = /\r?\n/g,
        Tb = /^(?:submit|button|image|reset|file)$/i,
        Ub = /^(?:input|select|textarea|keygen)/i;

    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vb(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
    } : Zb;
    var Wb = 0,
        Xb = {},
        Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xb) Xb[a](void 0, !0)
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zb() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = [],
        ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bc = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cc = a.document.documentElement;

    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cc
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ec = a.jQuery,
        fc = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
jQuery.noConflict();
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
    function(e, t, n) {
        function r(n) {
            var r = t.console;
            i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function a(t, a, i, o) {
            if (Object.defineProperty) try {
                return Object.defineProperty(t, a, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(o), i
                    },
                    set: function(e) {
                        r(o), i = e
                    }
                }), n
            } catch (s) {}
            e._definePropertyBroken = !0, t[a] = i
        }
        var i = {};
        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
            i = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var o = e("<input/>", {
                size: 1
            }).attr("size") && e.attrFn,
            s = e.attr,
            u = e.attrHooks.value && e.attrHooks.value.get || function() {
                return null
            },
            c = e.attrHooks.value && e.attrHooks.value.set || function() {
                return n
            },
            l = /^(?:input|button)$/i,
            d = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            f = /^(?:checked|selected)$/i;
        a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
            var c = a.toLowerCase(),
                g = t && t.nodeType;
            return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
                get: function(t, r) {
                    var a, i = e.prop(t, r);
                    return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
                },
                set: function(t, n, r) {
                    var a;
                    return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
                }
            }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
        }, e.attrHooks.value = {
            get: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
            },
            set: function(e, t) {
                var a = (e.nodeName || "").toLowerCase();
                return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
            }
        };
        var g, h, v = e.fn.init,
            m = e.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        e.fn.init = function(t, n, a) {
            var i;
            return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
        }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
            return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
        }, e.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
            function t(e, n) {
                return new t.fn.init(e, n)
            }
            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
                return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
            }, t.fn.init.prototype = t.fn;
            var n = t(document);
            return r("jQuery.sub() is deprecated"), t
        }, e.ajaxSetup({
            converters: {
                "text json": e.parseJSON
            }
        });
        var b = e.fn.data;
        e.fn.data = function(t) {
            var a, i, o = this[0];
            return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
        };
        var j = /\/(java|ecma)script/i,
            w = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
        }, e.clean || (e.clean = function(t, a, i, o) {
            a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
            var s, u, c, l, d = [];
            if (e.merge(d, e.buildFragment(t, a).childNodes), i)
                for (c = function(e) {
                        return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
                    }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
            return d
        });
        var Q = e.event.add,
            x = e.event.remove,
            k = e.event.trigger,
            N = e.fn.toggle,
            T = e.fn.live,
            M = e.fn.die,
            S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            C = RegExp("\\b(?:" + S + ")\\b"),
            H = /(?:^|\s)hover(\.\S+|)\b/,
            A = function(t) {
                return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
            };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
            e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
        }, e.event.remove = function(e, t, n, r, a) {
            x.call(this, e, A(t) || "", n, r, a)
        }, e.fn.error = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
        }, e.fn.toggle = function(t, n) {
            if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var a = arguments,
                i = t.guid || e.guid++,
                o = 0,
                s = function(n) {
                    var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                    return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
                };
            for (s.guid = i; a.length > o;) a[o++].guid = i;
            return this.click(s)
        }, e.fn.live = function(t, n, a) {
            return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
        }, e.fn.die = function(t, n) {
            return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
        }, e.event.trigger = function(e, t, n, a) {
            return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
        }, e.each(S.split("|"), function(t, n) {
            e.event.special[n] = {
                setup: function() {
                    var t = this;
                    return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                        e.event.trigger(n, null, t, !0)
                    }), e._data(this, n, e.guid++)), !1
                },
                teardown: function() {
                    return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                }
            }
        })
    }(jQuery, window);;
(function(d) {
    var k = d.scrollTo = function(a, i, e) {
        d(window).scrollTo(a, i, e)
    };
    k.defaults = {
        axis: 'xy',
        duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1
    };
    k.window = function(a) {
        return d(window)._scrollable()
    };
    d.fn._scrollable = function() {
        return this.map(function() {
            var a = this,
                i = !a.nodeName || d.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!i) return a;
            var e = (a.contentWindow || a).document || a.ownerDocument || a;
            return d.browser.safari || e.compatMode == 'BackCompat' ? e.body : e.documentElement
        })
    };
    d.fn.scrollTo = function(n, j, b) {
        if (typeof j == 'object') {
            b = j;
            j = 0
        }
        if (typeof b == 'function') b = {
            onAfter: b
        };
        if (n == 'max') n = 9e9;
        b = d.extend({}, k.defaults, b);
        j = j || b.speed || b.duration;
        b.queue = b.queue && b.axis.length > 1;
        if (b.queue) j /= 2;
        b.offset = p(b.offset);
        b.over = p(b.over);
        return this._scrollable().each(function() {
            var q = this,
                r = d(q),
                f = n,
                s, g = {},
                u = r.is('html,body');
            switch (typeof f) {
                case 'number':
                case 'string':
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                        f = p(f);
                        break
                    }
                    f = d(f, this);
                case 'object':
                    if (f.is || f.style) s = (f = d(f)).offset()
            }
            d.each(b.axis.split(''), function(a, i) {
                var e = i == 'x' ? 'Left' : 'Top',
                    h = e.toLowerCase(),
                    c = 'scroll' + e,
                    l = q[c],
                    m = k.max(q, i);
                if (s) {
                    g[c] = s[h] + (u ? 0 : l - r.offset()[h]);
                    if (b.margin) {
                        g[c] -= parseInt(f.css('margin' + e)) || 0;
                        g[c] -= parseInt(f.css('border' + e + 'Width')) || 0
                    }
                    g[c] += b.offset[h] || 0;
                    if (b.over[h]) g[c] += f[i == 'x' ? 'width' : 'height']() * b.over[h]
                } else {
                    var o = f[h];
                    g[c] = o.slice && o.slice(-1) == '%' ? parseFloat(o) / 100 * m : o
                }
                if (/^\d+$/.test(g[c])) g[c] = g[c] <= 0 ? 0 : Math.min(g[c], m);
                if (!a && b.queue) {
                    if (l != g[c]) t(b.onAfterFirst);
                    delete g[c]
                }
            });
            t(b.onAfter);

            function t(a) {
                r.animate(g, j, b.easing, a && function() {
                    a.call(this, n, b)
                })
            }
        }).end()
    };
    k.max = function(a, i) {
        var e = i == 'x' ? 'Width' : 'Height',
            h = 'scroll' + e;
        if (!d(a).is('html,body')) return a[h] - d(a)[e.toLowerCase()]();
        var c = 'client' + e,
            l = a.ownerDocument.documentElement,
            m = a.ownerDocument.body;
        return Math.max(l[h], m[h]) - Math.min(l[c], m[c])
    };

    function p(a) {
        return typeof a == 'object' ? a : {
            top: a,
            left: a
        }
    }
})(jQuery);
/*!
 * jQuery Form Plugin
 * version: 3.37.0-2013.07.11
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
! function(a) {
    "use strict";

    function b(b) {
        var c = b.data;
        b.isDefaultPrevented() || (b.preventDefault(), a(this).ajaxSubmit(c))
    }

    function c(b) {
        var c = b.target,
            d = a(c);
        if (!d.is("[type=submit],[type=image]")) {
            var e = d.closest("[type=submit]");
            if (0 === e.length) return;
            c = e[0]
        }
        var f = this;
        if (f.clk = c, "image" == c.type)
            if (void 0 !== b.offsetX) f.clk_x = b.offsetX, f.clk_y = b.offsetY;
            else if ("function" == typeof a.fn.offset) {
            var g = d.offset();
            f.clk_x = b.pageX - g.left, f.clk_y = b.pageY - g.top
        } else f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop;
        setTimeout(function() {
            f.clk = f.clk_x = f.clk_y = null
        }, 100)
    }

    function d() {
        if (a.fn.ajaxSubmit.debug) {
            var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b)
        }
    }
    var e = {};
    e.fileapi = void 0 !== a("<input type='file'/>").get(0).files, e.formdata = void 0 !== window.FormData;
    var f = !!a.fn.prop;
    a.fn.attr2 = function() {
        if (!f) return this.attr.apply(this, arguments);
        var a = this.prop.apply(this, arguments);
        return a && a.jquery || "string" == typeof a ? a : this.attr.apply(this, arguments)
    }, a.fn.ajaxSubmit = function(b) {
        function c(c) {
            var d, e, f = a.param(c, b.traditional).split("&"),
                g = f.length,
                h = [];
            for (d = 0; g > d; d++) f[d] = f[d].replace(/\+/g, " "), e = f[d].split("="), h.push([decodeURIComponent(e[0]), decodeURIComponent(e[1])]);
            return h
        }

        function g(d) {
            for (var e = new FormData, f = 0; f < d.length; f++) e.append(d[f].name, d[f].value);
            if (b.extraData) {
                var g = c(b.extraData);
                for (f = 0; f < g.length; f++) g[f] && e.append(g[f][0], g[f][1])
            }
            b.data = null;
            var h = a.extend(!0, {}, a.ajaxSettings, b, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: i || "POST"
            });
            b.uploadProgress && (h.xhr = function() {
                var c = a.ajaxSettings.xhr();
                return c.upload && c.upload.addEventListener("progress", function(a) {
                    var c = 0,
                        d = a.loaded || a.position,
                        e = a.total;
                    a.lengthComputable && (c = Math.ceil(100 * (d / e))), b.uploadProgress(a, d, e, c)
                }, !1), c
            }), h.data = null;
            var j = h.beforeSend;
            return h.beforeSend = function(a, b) {
                b.data = e, j && j.call(this, a, b)
            }, a.ajax(h)
        }

        function h(c) {
            function e(a) {
                var b = null;
                try {
                    a.contentWindow && (b = a.contentWindow.document)
                } catch (c) {
                    d("cannot get iframe.contentWindow document: " + c)
                }
                if (b) return b;
                try {
                    b = a.contentDocument ? a.contentDocument : a.document
                } catch (c) {
                    d("cannot get iframe.contentDocument: " + c), b = a.document
                }
                return b
            }

            function g() {
                function b() {
                    try {
                        var a = e(r).readyState;
                        d("state = " + a), a && "uninitialized" == a.toLowerCase() && setTimeout(b, 50)
                    } catch (c) {
                        d("Server abort: ", c, " (", c.name, ")"), h(A), w && clearTimeout(w), w = void 0
                    }
                }
                var c = l.attr2("target"),
                    f = l.attr2("action");
                x.setAttribute("target", o), i || x.setAttribute("method", "POST"), f != m.url && x.setAttribute("action", m.url), m.skipEncodingOverride || i && !/post/i.test(i) || l.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (w = setTimeout(function() {
                    v = !0, h(z)
                }, m.timeout));
                var g = [];
                try {
                    if (m.extraData)
                        for (var j in m.extraData) m.extraData.hasOwnProperty(j) && (a.isPlainObject(m.extraData[j]) && m.extraData[j].hasOwnProperty("name") && m.extraData[j].hasOwnProperty("value") ? g.push(a('<input type="hidden" name="' + m.extraData[j].name + '">').val(m.extraData[j].value).appendTo(x)[0]) : g.push(a('<input type="hidden" name="' + j + '">').val(m.extraData[j]).appendTo(x)[0]));
                    m.iframeTarget || (q.appendTo("body"), r.attachEvent ? r.attachEvent("onload", h) : r.addEventListener("load", h, !1)), setTimeout(b, 15);
                    try {
                        x.submit()
                    } catch (k) {
                        var n = document.createElement("form").submit;
                        n.apply(x)
                    }
                } finally {
                    x.setAttribute("action", f), c ? x.setAttribute("target", c) : l.removeAttr("target"), a(g).remove()
                }
            }

            function h(b) {
                if (!s.aborted && !F) {
                    if (E = e(r), E || (d("cannot access response document"), b = A), b === z && s) return s.abort("timeout"), y.reject(s, "timeout"), void 0;
                    if (b == A && s) return s.abort("server abort"), y.reject(s, "error", "server abort"), void 0;
                    if (E && E.location.href != m.iframeSrc || v) {
                        r.detachEvent ? r.detachEvent("onload", h) : r.removeEventListener("load", h, !1);
                        var c, f = "success";
                        try {
                            if (v) throw "timeout";
                            var g = "xml" == m.dataType || E.XMLDocument || a.isXMLDoc(E);
                            if (d("isXml=" + g), !g && window.opera && (null === E.body || !E.body.innerHTML) && --G) return d("requeing onLoad callback, DOM not available"), setTimeout(h, 250), void 0;
                            var i = E.body ? E.body : E.documentElement;
                            s.responseText = i ? i.innerHTML : null, s.responseXML = E.XMLDocument ? E.XMLDocument : E, g && (m.dataType = "xml"), s.getResponseHeader = function(a) {
                                var b = {
                                    "content-type": m.dataType
                                };
                                return b[a]
                            }, i && (s.status = Number(i.getAttribute("status")) || s.status, s.statusText = i.getAttribute("statusText") || s.statusText);
                            var j = (m.dataType || "").toLowerCase(),
                                k = /(json|script|text)/.test(j);
                            if (k || m.textarea) {
                                var l = E.getElementsByTagName("textarea")[0];
                                if (l) s.responseText = l.value, s.status = Number(l.getAttribute("status")) || s.status, s.statusText = l.getAttribute("statusText") || s.statusText;
                                else if (k) {
                                    var o = E.getElementsByTagName("pre")[0],
                                        p = E.getElementsByTagName("body")[0];
                                    o ? s.responseText = o.textContent ? o.textContent : o.innerText : p && (s.responseText = p.textContent ? p.textContent : p.innerText)
                                }
                            } else "xml" == j && !s.responseXML && s.responseText && (s.responseXML = H(s.responseText));
                            try {
                                D = J(s, j, m)
                            } catch (t) {
                                f = "parsererror", s.error = c = t || f
                            }
                        } catch (t) {
                            d("error caught: ", t), f = "error", s.error = c = t || f
                        }
                        s.aborted && (d("upload aborted"), f = null), s.status && (f = s.status >= 200 && s.status < 300 || 304 === s.status ? "success" : "error"), "success" === f ? (m.success && m.success.call(m.context, D, "success", s), y.resolve(s.responseText, "success", s), n && a.event.trigger("ajaxSuccess", [s, m])) : f && (void 0 === c && (c = s.statusText), m.error && m.error.call(m.context, s, f, c), y.reject(s, "error", c), n && a.event.trigger("ajaxError", [s, m, c])), n && a.event.trigger("ajaxComplete", [s, m]), n && !--a.active && a.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, s, f), F = !0, m.timeout && clearTimeout(w), setTimeout(function() {
                            m.iframeTarget || q.remove(), s.responseXML = null
                        }, 100)
                    }
                }
            }
            var j, k, m, n, o, q, r, s, t, u, v, w, x = l[0],
                y = a.Deferred();
            if (c)
                for (k = 0; k < p.length; k++) j = a(p[k]), f ? j.prop("disabled", !1) : j.removeAttr("disabled");
            if (m = a.extend(!0, {}, a.ajaxSettings, b), m.context = m.context || m, o = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (q = a(m.iframeTarget), u = q.attr2("name"), u ? o = u : q.attr2("name", o)) : (q = a('<iframe name="' + o + '" src="' + m.iframeSrc + '" />'), q.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), r = q[0], s = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(b) {
                        var c = "timeout" === b ? "timeout" : "aborted";
                        d("aborting upload... " + c), this.aborted = 1;
                        try {
                            r.contentWindow.document.execCommand && r.contentWindow.document.execCommand("Stop")
                        } catch (e) {}
                        q.attr("src", m.iframeSrc), s.error = c, m.error && m.error.call(m.context, s, c, b), n && a.event.trigger("ajaxError", [s, m, c]), m.complete && m.complete.call(m.context, s, c)
                    }
                }, n = m.global, n && 0 === a.active++ && a.event.trigger("ajaxStart"), n && a.event.trigger("ajaxSend", [s, m]), m.beforeSend && m.beforeSend.call(m.context, s, m) === !1) return m.global && a.active--, y.reject(), y;
            if (s.aborted) return y.reject(), y;
            t = x.clk, t && (u = t.name, u && !t.disabled && (m.extraData = m.extraData || {}, m.extraData[u] = t.value, "image" == t.type && (m.extraData[u + ".x"] = x.clk_x, m.extraData[u + ".y"] = x.clk_y)));
            var z = 1,
                A = 2,
                B = a("meta[name=csrf-token]").attr("content"),
                C = a("meta[name=csrf-param]").attr("content");
            C && B && (m.extraData = m.extraData || {}, m.extraData[C] = B), m.forceSync ? g() : setTimeout(g, 10);
            var D, E, F, G = 50,
                H = a.parseXML || function(a, b) {
                    return window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"), b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null
                },
                I = a.parseJSON || function(a) {
                    return window.eval("(" + a + ")")
                },
                J = function(b, c, d) {
                    var e = b.getResponseHeader("content-type") || "",
                        f = "xml" === c || !c && e.indexOf("xml") >= 0,
                        g = f ? b.responseXML : b.responseText;
                    return f && "parsererror" === g.documentElement.nodeName && a.error && a.error("parsererror"), d && d.dataFilter && (g = d.dataFilter(g, c)), "string" == typeof g && ("json" === c || !c && e.indexOf("json") >= 0 ? g = I(g) : ("script" === c || !c && e.indexOf("javascript") >= 0) && a.globalEval(g)), g
                };
            return y
        }
        if (!this.length) return d("ajaxSubmit: skipping submit process - no element selected"), this;
        var i, j, k, l = this;
        "function" == typeof b ? b = {
            success: b
        } : void 0 === b && (b = {}), i = b.type || this.attr2("method"), j = b.url || this.attr2("action"), k = "string" == typeof j ? a.trim(j) : "", k = k || window.location.href || "", k && (k = (k.match(/^([^#]+)/) || [])[1]), b = a.extend(!0, {
            url: k,
            success: a.ajaxSettings.success,
            type: i || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, b);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, b, m]), m.veto) return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (b.beforeSerialize && b.beforeSerialize(this, b) === !1) return d("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var n = b.traditional;
        void 0 === n && (n = a.ajaxSettings.traditional);
        var o, p = [],
            q = this.formToArray(b.semantic, p);
        if (b.data && (b.extraData = b.data, o = a.param(b.data, n)), b.beforeSubmit && b.beforeSubmit(q, this, b) === !1) return d("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [q, this, b, m]), m.veto) return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var r = a.param(q, n);
        o && (r = r ? r + "&" + o : o), "GET" == b.type.toUpperCase() ? (b.url += (b.url.indexOf("?") >= 0 ? "&" : "?") + r, b.data = null) : b.data = r;
        var s = [];
        if (b.resetForm && s.push(function() {
                l.resetForm()
            }), b.clearForm && s.push(function() {
                l.clearForm(b.includeHidden)
            }), !b.dataType && b.target) {
            var t = b.success || function() {};
            s.push(function(c) {
                var d = b.replaceTarget ? "replaceWith" : "html";
                a(b.target)[d](c).each(t, arguments)
            })
        } else b.success && s.push(b.success);
        if (b.success = function(a, c, d) {
                for (var e = b.context || this, f = 0, g = s.length; g > f; f++) s[f].apply(e, [a, c, d || l, l])
            }, b.error) {
            var u = b.error;
            b.error = function(a, c, d) {
                var e = b.context || this;
                u.apply(e, [a, c, d, l])
            }
        }
        if (b.complete) {
            var v = b.complete;
            b.complete = function(a, c) {
                var d = b.context || this;
                v.apply(d, [a, c, l])
            }
        }
        var w = a('input[type=file]:enabled[value!=""]', this),
            x = w.length > 0,
            y = "multipart/form-data",
            z = l.attr("enctype") == y || l.attr("encoding") == y,
            A = e.fileapi && e.formdata;
        d("fileAPI :" + A);
        var B, C = (x || z) && !A;
        b.iframe !== !1 && (b.iframe || C) ? b.closeKeepAlive ? a.get(b.closeKeepAlive, function() {
            B = h(q)
        }) : B = h(q) : B = (x || z) && A ? g(q) : a.ajax(b), l.removeData("jqxhr").data("jqxhr", B);
        for (var D = 0; D < p.length; D++) p[D] = null;
        return this.trigger("form-submit-notify", [this, b]), this
    }, a.fn.ajaxForm = function(e) {
        if (e = e || {}, e.delegation = e.delegation && a.isFunction(a.fn.on), !e.delegation && 0 === this.length) {
            var f = {
                s: this.selector,
                c: this.context
            };
            return !a.isReady && f.s ? (d("DOM not ready, queuing ajaxForm"), a(function() {
                a(f.s, f.c).ajaxForm(e)
            }), this) : (d("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")), this)
        }
        return e.delegation ? (a(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, c).on("submit.form-plugin", this.selector, e, b).on("click.form-plugin", this.selector, e, c), this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, b).bind("click.form-plugin", e, c)
    }, a.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, a.fn.formToArray = function(b, c) {
        var d = [];
        if (0 === this.length) return d;
        var f = this[0],
            g = b ? f.getElementsByTagName("*") : f.elements;
        if (!g) return d;
        var h, i, j, k, l, m, n;
        for (h = 0, m = g.length; m > h; h++)
            if (l = g[h], j = l.name, j && !l.disabled)
                if (b && f.clk && "image" == l.type) f.clk == l && (d.push({
                    name: j,
                    value: a(l).val(),
                    type: l.type
                }), d.push({
                    name: j + ".x",
                    value: f.clk_x
                }, {
                    name: j + ".y",
                    value: f.clk_y
                }));
                else if (k = a.fieldValue(l, !0), k && k.constructor == Array)
            for (c && c.push(l), i = 0, n = k.length; n > i; i++) d.push({
                name: j,
                value: k[i]
            });
        else if (e.fileapi && "file" == l.type) {
            c && c.push(l);
            var o = l.files;
            if (o.length)
                for (i = 0; i < o.length; i++) d.push({
                    name: j,
                    value: o[i],
                    type: l.type
                });
            else d.push({
                name: j,
                value: "",
                type: l.type
            })
        } else null !== k && "undefined" != typeof k && (c && c.push(l), d.push({
            name: j,
            value: k,
            type: l.type,
            required: l.required
        }));
        if (!b && f.clk) {
            var p = a(f.clk),
                q = p[0];
            j = q.name, j && !q.disabled && "image" == q.type && (d.push({
                name: j,
                value: p.val()
            }), d.push({
                name: j + ".x",
                value: f.clk_x
            }, {
                name: j + ".y",
                value: f.clk_y
            }))
        }
        return d
    }, a.fn.formSerialize = function(b) {
        return a.param(this.formToArray(b))
    }, a.fn.fieldSerialize = function(b) {
        var c = [];
        return this.each(function() {
            var d = this.name;
            if (d) {
                var e = a.fieldValue(this, b);
                if (e && e.constructor == Array)
                    for (var f = 0, g = e.length; g > f; f++) c.push({
                        name: d,
                        value: e[f]
                    });
                else null !== e && "undefined" != typeof e && c.push({
                    name: this.name,
                    value: e
                })
            }
        }), a.param(c)
    }, a.fn.fieldValue = function(b) {
        for (var c = [], d = 0, e = this.length; e > d; d++) {
            var f = this[d],
                g = a.fieldValue(f, b);
            null === g || "undefined" == typeof g || g.constructor == Array && !g.length || (g.constructor == Array ? a.merge(c, g) : c.push(g))
        }
        return c
    }, a.fieldValue = function(b, c) {
        var d = b.name,
            e = b.type,
            f = b.tagName.toLowerCase();
        if (void 0 === c && (c = !0), c && (!d || b.disabled || "reset" == e || "button" == e || ("checkbox" == e || "radio" == e) && !b.checked || ("submit" == e || "image" == e) && b.form && b.form.clk != b || "select" == f && -1 == b.selectedIndex)) return null;
        if ("select" == f) {
            var g = b.selectedIndex;
            if (0 > g) return null;
            for (var h = [], i = b.options, j = "select-one" == e, k = j ? g + 1 : i.length, l = j ? g : 0; k > l; l++) {
                var m = i[l];
                if (m.selected) {
                    var n = m.value;
                    if (n || (n = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), j) return n;
                    h.push(n)
                }
            }
            return h
        }
        return a(b).val()
    }, a.fn.clearForm = function(b) {
        return this.each(function() {
            a("input,select,textarea", this).clearFields(b)
        })
    }, a.fn.clearFields = a.fn.clearInputs = function(b) {
        var c = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var d = this.type,
                e = this.tagName.toLowerCase();
            c.test(d) || "textarea" == e ? this.value = "" : "checkbox" == d || "radio" == d ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == d ? /MSIE/.test(navigator.userAgent) ? a(this).replaceWith(a(this).clone(!0)) : a(this).val("") : b && (b === !0 && /hidden/.test(d) || "string" == typeof b && a(this).is(b)) && (this.value = "")
        })
    }, a.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, a.fn.enable = function(a) {
        return void 0 === a && (a = !0), this.each(function() {
            this.disabled = !a
        })
    }, a.fn.selected = function(b) {
        return void 0 === b && (b = !0), this.each(function() {
            var c = this.type;
            if ("checkbox" == c || "radio" == c) this.checked = b;
            else if ("option" == this.tagName.toLowerCase()) {
                var d = a(this).parent("select");
                b && d[0] && "select-one" == d[0].type && d.find("option").selected(!1), this.selected = b
            }
        })
    }, a.fn.ajaxSubmit.debug = !1
}(jQuery);
var mailchimpSF = {
    "ajax_url": "http:\/\/demo.curlythemes.com\/equestrian\/"
};;
(function($) {
    $(function($) {
        $('#mc_submit_type').val('js');
        $('#mc_signup_form').ajaxForm({
            url: mailchimpSF.ajax_url,
            type: 'POST',
            dataType: 'text',
            beforeSubmit: mc_beforeForm,
            success: mc_success
        });
    });

    function mc_beforeForm() {
        $('#mc_signup_submit').attr("disabled", "disabled");
    }

    function mc_success(data) {
        $('#mc_signup_submit').removeAttr("disabled");
        $('#mc_message').html(data);
        var reg = new RegExp("class='mc_success_msg'", 'i');
        if (reg.test(data)) {
            $('#mc_signup_form').each(function() {
                this.reset();
            });
            $('#mc_submit_type').val('js');
        }
        $.scrollTo('#mc_signup', {
            offset: {
                top: -28
            }
        });
    }
})(jQuery);
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(b, d) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g)) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
    }

    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        scrollParent: function(b) {
            var c = this.css("position"),
                d = "absolute" === c,
                e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                f = this.parents().filter(function() {
                    var b = a(this);
                    return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
                }).eq(0);
            return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function(c) {
            return b(c, !isNaN(a.attr(c, "tabindex")))
        },
        tabbable: function(c) {
            var d = a.attr(c, "tabindex"),
                e = isNaN(d);
            return (e || d >= 0) && b(c, !e)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
            f = c.toLowerCase(),
            g = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px")
            })
        }, a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(b) {
            if (void 0 !== b) return this.css("zIndex", b);
            if (this.length)
                for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
                    if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                    e = e.parent()
                }
            return 0
        }
    }), a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
        }
    }
});
(function($, undefined) {
    $.extend($.ui, {
        datepicker: {
            version: "1.8.14"
        }
    });
    var PROP_NAME = 'datepicker';
    var dpuuid = new Date().getTime();
    var instActive;

    function Datepicker() {
        this.debug = false;
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = 'ui-datepicker-div';
        this._inlineClass = 'ui-datepicker-inline';
        this._appendClass = 'ui-datepicker-append';
        this._triggerClass = 'ui-datepicker-trigger';
        this._dialogClass = 'ui-datepicker-dialog';
        this._disableClass = 'ui-datepicker-disabled';
        this._unselectableClass = 'ui-datepicker-unselectable';
        this._currentClass = 'ui-datepicker-current-day';
        this._dayOverClass = 'ui-datepicker-days-cell-over';
        this.regional = [];
        this.regional[''] = {
            closeText: 'Done',
            prevText: 'Prev',
            nextText: 'Next',
            currentText: 'Today',
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            weekHeader: 'Wk',
            dateFormat: 'mm/dd/yy',
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        this._defaults = {
            showOn: 'focus',
            showAnim: 'fadeIn',
            showOptions: {},
            defaultDate: null,
            appendText: '',
            buttonText: '...',
            buttonImage: '',
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: 'c-10:c+10',
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: '+10',
            minDate: null,
            maxDate: null,
            duration: 'fast',
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: '',
            altFormat: '',
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false
        };
        $.extend(this._defaults, this.regional['']);
        this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
    }
    $.extend(Datepicker.prototype, {
        markerClassName: 'hasDatepicker',
        maxRows: 4,
        log: function() {
            if (this.debug)
                console.log.apply('', arguments);
        },
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(settings) {
            extendRemove(this._defaults, settings || {});
            return this;
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute('date:' + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue);
                    } catch (err) {
                        inlineSettings[attrName] = attrValue;
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase();
            var inline = (nodeName == 'div' || nodeName == 'span');
            if (!target.id) {
                this.uuid += 1;
                target.id = 'dp' + this.uuid;
            }
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {});
            if (nodeName == 'input') {
                this._connectDatepicker(target, inst);
            } else if (inline) {
                this._inlineDatepicker(target, inst);
            }
        },
        _newInst: function(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1');
            return {
                id: id,
                input: target,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: inline,
                dpDiv: (!inline ? this.dpDiv : bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))
            };
        },
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName))
                return;
            this._attachments(input, inst);
            input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(event, key, value) {
                inst.settings[key] = value;
            }).bind("getData.datepicker", function(event, key) {
                return this._get(inst, key);
            });
            this._autoSize(inst);
            $.data(target, PROP_NAME, inst);
        },
        _attachments: function(input, inst) {
            var appendText = this._get(inst, 'appendText');
            var isRTL = this._get(inst, 'isRTL');
            if (inst.append)
                inst.append.remove();
            if (appendText) {
                inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
                input[isRTL ? 'before' : 'after'](inst.append);
            }
            input.unbind('focus', this._showDatepicker);
            if (inst.trigger)
                inst.trigger.remove();
            var showOn = this._get(inst, 'showOn');
            if (showOn == 'focus' || showOn == 'both')
                input.focus(this._showDatepicker);
            if (showOn == 'button' || showOn == 'both') {
                var buttonText = this._get(inst, 'buttonText');
                var buttonImage = this._get(inst, 'buttonImage');
                inst.trigger = $(this._get(inst, 'buttonImageOnly') ? $('<img/>').addClass(this._triggerClass).attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage == '' ? buttonText : $('<img/>').attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                })));
                input[isRTL ? 'before' : 'after'](inst.trigger);
                inst.trigger.click(function() {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
                        $.datepicker._hideDatepicker();
                    else
                        $.datepicker._showDatepicker(input[0]);
                    return false;
                });
            }
        },
        _autoSize: function(inst) {
            if (this._get(inst, 'autoSize') && !inst.inline) {
                var date = new Date(2009, 12 - 1, 20);
                var dateFormat = this._get(inst, 'dateFormat');
                if (dateFormat.match(/[DM]/)) {
                    var findMax = function(names) {
                        var max = 0;
                        var maxI = 0;
                        for (var i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i;
                            }
                        }
                        return maxI;
                    };
                    date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ? 'monthNames' : 'monthNamesShort'))));
                    date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ? 'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
                }
                inst.input.attr('size', this._formatDate(inst, date).length);
            }
        },
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName))
                return;
            divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker", function(event, key, value) {
                inst.settings[key] = value;
            }).bind("getData.datepicker", function(event, key) {
                return this._get(inst, key);
            });
            $.data(target, PROP_NAME, inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);
            inst.dpDiv.show();
        },
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var inst = this._dialogInst;
            if (!inst) {
                this.uuid += 1;
                var id = 'dp' + this.uuid;
                this._dialogInput = $('<input type="text" id="' + id + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
                this._dialogInput.keydown(this._doKeyDown);
                $('body').append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], PROP_NAME, inst);
            }
            extendRemove(inst.settings, settings || {});
            date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
            this._dialogInput.val(date);
            this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
            if (!this._pos) {
                var browserWidth = document.documentElement.clientWidth;
                var browserHeight = document.documentElement.clientHeight;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
            }
            this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI)
                $.blockUI(this.dpDiv);
            $.data(this._dialogInput[0], PROP_NAME, inst);
            return this;
        },
        _destroyDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            $.removeData(target, PROP_NAME);
            if (nodeName == 'input') {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).unbind('focus', this._showDatepicker).unbind('keydown', this._doKeyDown).unbind('keypress', this._doKeyPress).unbind('keyup', this._doKeyUp);
            } else if (nodeName == 'div' || nodeName == 'span')
                $target.removeClass(this.markerClassName).empty();
        },
        _enableDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == 'input') {
                target.disabled = false;
                inst.trigger.filter('button').each(function() {
                    this.disabled = false;
                }).end().filter('img').css({
                    opacity: '1.0',
                    cursor: ''
                });
            } else if (nodeName == 'div' || nodeName == 'span') {
                var inline = $target.children('.' + this._inlineClass);
                inline.children().removeClass('ui-state-disabled');
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
            }
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return (value == target ? null : value);
            });
        },
        _disableDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == 'input') {
                target.disabled = true;
                inst.trigger.filter('button').each(function() {
                    this.disabled = true;
                }).end().filter('img').css({
                    opacity: '0.5',
                    cursor: 'default'
                });
            } else if (nodeName == 'div' || nodeName == 'span') {
                var inline = $target.children('.' + this._inlineClass);
                inline.children().addClass('ui-state-disabled');
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
            }
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return (value == target ? null : value);
            });
            this._disabledInputs[this._disabledInputs.length] = target;
        },
        _isDisabledDatepicker: function(target) {
            if (!target) {
                return false;
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] == target)
                    return true;
            }
            return false;
        },
        _getInst: function(target) {
            try {
                return $.data(target, PROP_NAME);
            } catch (err) {
                throw 'Missing instance data for this datepicker';
            }
        },
        _optionDatepicker: function(target, name, value) {
            var inst = this._getInst(target);
            if (arguments.length == 2 && typeof name == 'string') {
                return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) : (inst ? (name == 'all' ? $.extend({}, inst.settings) : this._get(inst, name)) : null));
            }
            var settings = name || {};
            if (typeof name == 'string') {
                settings = {};
                settings[name] = value;
            }
            if (inst) {
                if (this._curInst == inst) {
                    this._hideDatepicker();
                }
                var date = this._getDateDatepicker(target, true);
                var minDate = this._getMinMaxDate(inst, 'min');
                var maxDate = this._getMinMaxDate(inst, 'max');
                extendRemove(inst.settings, settings);
                if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
                    inst.settings.minDate = this._formatDate(inst, minDate);
                if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
                    inst.settings.maxDate = this._formatDate(inst, maxDate);
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst);
            }
        },
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value);
        },
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst);
            }
        },
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst);
            }
        },
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline)
                this._setDateFromField(inst, noDefault);
            return (inst ? this._getDate(inst) : null);
        },
        _doKeyDown: function(event) {
            var inst = $.datepicker._getInst(event.target);
            var handled = true;
            var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing)
                switch (event.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker();
                        handled = false;
                        break;
                    case 13:
                        var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' +
                            $.datepicker._currentClass + ')', inst.dpDiv);
                        if (sel[0])
                            $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
                        else
                            $.datepicker._hideDatepicker();
                        return false;
                        break;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, 'stepBigMonths') : -$.datepicker._get(inst, 'stepMonths')), 'M');
                        break;
                    case 34:
                        $.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, 'stepBigMonths') : +$.datepicker._get(inst, 'stepMonths')), 'M');
                        break;
                    case 35:
                        if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
                        handled = event.ctrlKey || event.metaKey;
                        break;
                    case 36:
                        if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
                        handled = event.ctrlKey || event.metaKey;
                        break;
                    case 37:
                        if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
                        handled = event.ctrlKey || event.metaKey;
                        if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, 'stepBigMonths') : -$.datepicker._get(inst, 'stepMonths')), 'M');
                        break;
                    case 38:
                        if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
                        handled = event.ctrlKey || event.metaKey;
                        break;
                    case 39:
                        if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
                        handled = event.ctrlKey || event.metaKey;
                        if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, 'stepBigMonths') : +$.datepicker._get(inst, 'stepMonths')), 'M');
                        break;
                    case 40:
                        if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
                        handled = event.ctrlKey || event.metaKey;
                        break;
                    default:
                        handled = false;
                } else if (event.keyCode == 36 && event.ctrlKey)
                $.datepicker._showDatepicker(this);
            else {
                handled = false;
            }
            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },
        _doKeyPress: function(event) {
            var inst = $.datepicker._getInst(event.target);
            if ($.datepicker._get(inst, 'constrainInput')) {
                var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
                var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
            }
        },
        _doKeyUp: function(event) {
            var inst = $.datepicker._getInst(event.target);
            if (inst.input.val() != inst.lastVal) {
                try {
                    var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'), (inst.input ? inst.input.val() : null), $.datepicker._getFormatConfig(inst));
                    if (date) {
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst);
                    }
                } catch (event) {
                    $.datepicker.log(event);
                }
            }
            return true;
        },
        _showDatepicker: function(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() != 'input')
                input = $('input', input.parentNode)[0];
            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input)
                return;
            var inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst != inst) {
                if ($.datepicker._datepickerShowing) {
                    $.datepicker._triggerOnClose($.datepicker._curInst);
                }
                $.datepicker._curInst.dpDiv.stop(true, true);
            }
            var beforeShow = $.datepicker._get(inst, 'beforeShow');
            extendRemove(inst.settings, (beforeShow ? beforeShow.apply(input, [input, inst]) : {}));
            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);
            if ($.datepicker._inDialog)
                input.value = '';
            if (!$.datepicker._pos) {
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight;
            }
            var isFixed = false;
            $(input).parents().each(function() {
                isFixed |= $(this).css('position') == 'fixed';
                return !isFixed;
            });
            if (isFixed && $.browser.opera) {
                $.datepicker._pos[0] -= document.documentElement.scrollLeft;
                $.datepicker._pos[1] -= document.documentElement.scrollTop;
            }
            var offset = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null;
            inst.dpDiv.empty();
            inst.dpDiv.css({
                position: 'absolute',
                display: 'block',
                top: '-1000px'
            });
            $.datepicker._updateDatepicker(inst);
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({
                position: ($.datepicker._inDialog && $.blockUI ? 'static' : (isFixed ? 'fixed' : 'absolute')),
                display: 'none',
                left: offset.left + 'px',
                top: offset.top + 'px'
            });
            if (!inst.inline) {
                var showAnim = $.datepicker._get(inst, 'showAnim');
                var duration = $.datepicker._get(inst, 'duration');
                var postProcess = function() {
                    var cover = inst.dpDiv.find('iframe.ui-datepicker-cover');
                    if (!!cover.length) {
                        var borders = $.datepicker._getBorders(inst.dpDiv);
                        cover.css({
                            left: -borders[0],
                            top: -borders[1],
                            width: inst.dpDiv.outerWidth(),
                            height: inst.dpDiv.outerHeight()
                        });
                    }
                };
                inst.dpDiv.zIndex($(input).zIndex() + 1);
                $.datepicker._datepickerShowing = true;
                if ($.effects && $.effects[showAnim])
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
                else
                    inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
                if (!showAnim || !duration)
                    postProcess();
                if (inst.input.is(':visible') && !inst.input.is(':disabled'))
                    inst.input.focus();
                $.datepicker._curInst = inst;
            }
        },
        _updateDatepicker: function(inst) {
            var self = this;
            self.maxRows = 4;
            var borders = $.datepicker._getBorders(inst.dpDiv);
            instActive = inst;
            inst.dpDiv.empty().append(this._generateHTML(inst));
            var cover = inst.dpDiv.find('iframe.ui-datepicker-cover');
            if (!!cover.length) {
                cover.css({
                    left: -borders[0],
                    top: -borders[1],
                    width: inst.dpDiv.outerWidth(),
                    height: inst.dpDiv.outerHeight()
                })
            }
            inst.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
            var numMonths = this._getNumberOfMonths(inst);
            var cols = numMonths[1];
            var width = 17;
            inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
            if (cols > 1)
                inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
            inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') + 'Class']('ui-datepicker-multi');
            inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl');
            if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input && inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
                inst.input.focus();
            if (inst.yearshtml) {
                var origyearshtml = inst.yearshtml;
                setTimeout(function() {
                    if (origyearshtml === inst.yearshtml && inst.yearshtml) {
                        inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
                    }
                    origyearshtml = inst.yearshtml = null;
                }, 0);
            }
        },
        _getBorders: function(elem) {
            var convert = function(value) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[value] || value;
            };
            return [parseFloat(convert(elem.css('border-left-width'))), parseFloat(convert(elem.css('border-top-width')))];
        },
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth();
            var dpHeight = inst.dpDiv.outerHeight();
            var inputWidth = inst.input ? inst.input.outerWidth() : 0;
            var inputHeight = inst.input ? inst.input.outerHeight() : 0;
            var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
            var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();
            offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
            offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
            offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;
            offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ? Math.abs(dpHeight + inputHeight) : 0);
            return offset;
        },
        _findPos: function(obj) {
            var inst = this._getInst(obj);
            var isRTL = this._get(inst, 'isRTL');
            while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
            }
            var position = $(obj).offset();
            return [position.left, position.top];
        },
        _triggerOnClose: function(inst) {
            var onClose = this._get(inst, 'onClose');
            if (onClose)
                onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ''), inst]);
        },
        _hideDatepicker: function(input) {
            var inst = this._curInst;
            if (!inst || (input && inst != $.data(input, PROP_NAME)))
                return;
            if (this._datepickerShowing) {
                var showAnim = this._get(inst, 'showAnim');
                var duration = this._get(inst, 'duration');
                var postProcess = function() {
                    $.datepicker._tidyDialog(inst);
                    this._curInst = null;
                };
                if ($.effects && $.effects[showAnim])
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
                else
                    inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' : (showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
                if (!showAnim)
                    postProcess();
                $.datepicker._triggerOnClose(inst);
                this._datepickerShowing = false;
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: 'absolute',
                        left: '0',
                        top: '-100px'
                    });
                    if ($.blockUI) {
                        $.unblockUI();
                        $('body').append(this.dpDiv);
                    }
                }
                this._inDialog = false;
            }
        },
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
        },
        _checkExternalClick: function(event) {
            if (!$.datepicker._curInst)
                return;
            var $target = $(event.target);
            if ($target[0].id != $.datepicker._mainDivId && $target.parents('#' + $.datepicker._mainDivId).length == 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.hasClass($.datepicker._triggerClass) && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))
                $.datepicker._hideDatepicker();
        },
        _adjustDate: function(id, offset, period) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._isDisabledDatepicker(target[0])) {
                return;
            }
            this._adjustInstDate(inst, offset +
                (period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), period);
            this._updateDatepicker(inst);
        },
        _gotoToday: function(id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            } else {
                var date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        },
        _selectMonthYear: function(id, select, period) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            inst._selectingMonthYear = false;
            inst['selected' + (period == 'M' ? 'Month' : 'Year')] = inst['draw' + (period == 'M' ? 'Month' : 'Year')] = parseInt(select.options[select.selectedIndex].value, 10);
            this._notifyChange(inst);
            this._adjustDate(target);
        },
        _clickMonthYear: function(id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (inst.input && inst._selectingMonthYear) {
                setTimeout(function() {
                    inst.input.focus();
                }, 0);
            }
            inst._selectingMonthYear = !inst._selectingMonthYear;
        },
        _selectDay: function(id, month, year, td) {
            var target = $(id);
            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return;
            }
            var inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $('a', td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
        },
        _clearDate: function(id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            this._selectDate(target, '');
        },
        _selectDate: function(id, dateStr) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
            if (inst.input)
                inst.input.val(dateStr);
            this._updateAlternate(inst);
            var onSelect = this._get(inst, 'onSelect');
            if (onSelect)
                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
            else if (inst.input)
                inst.input.trigger('change');
            if (inst.inline)
                this._updateDatepicker(inst);
            else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof(inst.input[0]) != 'object')
                    inst.input.focus();
                this._lastInput = null;
            }
        },
        _updateAlternate: function(inst) {
            var altField = this._get(inst, 'altField');
            if (altField) {
                var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
                var date = this._getDate(inst);
                var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).each(function() {
                    $(this).val(dateStr);
                });
            }
        },
        noWeekends: function(date) {
            var day = date.getDay();
            return [(day > 0 && day < 6), ''];
        },
        iso8601Week: function(date) {
            var checkDate = new Date(date.getTime());
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            var time = checkDate.getTime();
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
        },
        parseDate: function(format, value, settings) {
            if (format == null || value == null)
                throw 'Invalid arguments';
            value = (typeof value == 'object' ? value.toString() : value + '');
            if (value == '')
                return null;
            var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
            var year = -1;
            var month = -1;
            var day = -1;
            var doy = -1;
            var literal = false;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches)
                    iFormat++;
                return matches;
            };
            var getNumber = function(match) {
                var isDoubled = lookAhead(match);
                var size = (match == '@' ? 14 : (match == '!' ? 20 : (match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
                var digits = new RegExp('^\\d{1,' + size + '}');
                var num = value.substring(iValue).match(digits);
                if (!num)
                    throw 'Missing number at position ' + iValue;
                iValue += num[0].length;
                return parseInt(num[0], 10);
            };
            var getName = function(match, shortNames, longNames) {
                var names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
                    return [
                        [k, v]
                    ];
                }).sort(function(a, b) {
                    return -(a[1].length - b[1].length);
                });
                var index = -1;
                $.each(names, function(i, pair) {
                    var name = pair[1];
                    if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
                        index = pair[0];
                        iValue += name.length;
                        return false;
                    }
                });
                if (index != -1)
                    return index + 1;
                else
                    throw 'Unknown name at position ' + iValue;
            };
            var checkLiteral = function() {
                if (value.charAt(iValue) != format.charAt(iFormat))
                    throw 'Unexpected literal at position ' + iValue;
                iValue++;
            };
            var iValue = 0;
            for (var iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal)
                    if (format.charAt(iFormat) == "'" && !lookAhead("'"))
                        literal = false;
                    else
                        checkLiteral();
                else
                    switch (format.charAt(iFormat)) {
                        case 'd':
                            day = getNumber('d');
                            break;
                        case 'D':
                            getName('D', dayNamesShort, dayNames);
                            break;
                        case 'o':
                            doy = getNumber('o');
                            break;
                        case 'm':
                            month = getNumber('m');
                            break;
                        case 'M':
                            month = getName('M', monthNamesShort, monthNames);
                            break;
                        case 'y':
                            year = getNumber('y');
                            break;
                        case '@':
                            var date = new Date(getNumber('@'));
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case '!':
                            var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "'":
                            if (lookAhead("'"))
                                checkLiteral();
                            else
                                literal = true;
                            break;
                        default:
                            checkLiteral();
                    }
            }
            if (iValue < value.length) {
                throw "Extra/unparsed characters found in date: " + value.substring(iValue);
            }
            if (year == -1)
                year = new Date().getFullYear();
            else if (year < 100)
                year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                (year <= shortYearCutoff ? 0 : -100);
            if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    var dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim)
                        break;
                    month++;
                    day -= dim;
                } while (true);
            }
            var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
                throw 'Invalid date';
            return date;
        },
        ATOM: 'yy-mm-dd',
        COOKIE: 'D, dd M yy',
        ISO_8601: 'yy-mm-dd',
        RFC_822: 'D, d M y',
        RFC_850: 'DD, dd-M-y',
        RFC_1036: 'D, d M y',
        RFC_1123: 'D, d M yy',
        RFC_2822: 'D, d M yy',
        RSS: 'D, d M y',
        TICKS: '!',
        TIMESTAMP: '@',
        W3C: 'yy-mm-dd',
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
            Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function(format, date, settings) {
            if (!date)
                return '';
            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches)
                    iFormat++;
                return matches;
            };
            var formatNumber = function(match, value, len) {
                var num = '' + value;
                if (lookAhead(match))
                    while (num.length < len)
                        num = '0' + num;
                return num;
            };
            var formatName = function(match, value, shortNames, longNames) {
                return (lookAhead(match) ? longNames[value] : shortNames[value]);
            };
            var output = '';
            var literal = false;
            if (date)
                for (var iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal)
                        if (format.charAt(iFormat) == "'" && !lookAhead("'"))
                            literal = false;
                        else
                            output += format.charAt(iFormat);
                    else
                        switch (format.charAt(iFormat)) {
                            case 'd':
                                output += formatNumber('d', date.getDate(), 2);
                                break;
                            case 'D':
                                output += formatName('D', date.getDay(), dayNamesShort, dayNames);
                                break;
                            case 'o':
                                output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case 'm':
                                output += formatNumber('m', date.getMonth() + 1, 2);
                                break;
                            case 'M':
                                output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
                                break;
                            case 'y':
                                output += (lookAhead('y') ? date.getFullYear() : (date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
                                break;
                            case '@':
                                output += date.getTime();
                                break;
                            case '!':
                                output += date.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (lookAhead("'"))
                                    output += "'";
                                else
                                    literal = true;
                                break;
                            default:
                                output += format.charAt(iFormat);
                        }
                }
            return output;
        },
        _possibleChars: function(format) {
            var chars = '';
            var literal = false;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches)
                    iFormat++;
                return matches;
            };
            for (var iFormat = 0; iFormat < format.length; iFormat++)
                if (literal)
                    if (format.charAt(iFormat) == "'" && !lookAhead("'"))
                        literal = false;
                    else
                        chars += format.charAt(iFormat);
            else
                switch (format.charAt(iFormat)) {
                    case 'd':
                    case 'm':
                    case 'y':
                    case '@':
                        chars += '0123456789';
                        break;
                    case 'D':
                    case 'M':
                        return null;
                    case "'":
                        if (lookAhead("'"))
                            chars += "'";
                        else
                            literal = true;
                        break;
                    default:
                        chars += format.charAt(iFormat);
                }
            return chars;
        },
        _get: function(inst, name) {
            return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
        },
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() == inst.lastVal) {
                return;
            }
            var dateFormat = this._get(inst, 'dateFormat');
            var dates = inst.lastVal = inst.input ? inst.input.val() : null;
            var date, defaultDate;
            date = defaultDate = this._getDefaultDate(inst);
            var settings = this._getFormatConfig(inst);
            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate;
            } catch (event) {
                this.log(event);
                dates = (noDefault ? '' : dates);
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = (dates ? date.getDate() : 0);
            inst.currentMonth = (dates ? date.getMonth() : 0);
            inst.currentYear = (dates ? date.getFullYear() : 0);
            this._adjustInstDate(inst);
        },
        _getDefaultDate: function(inst) {
            return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
        },
        _determineDate: function(inst, date, defaultDate) {
            var offsetNumeric = function(offset) {
                var date = new Date();
                date.setDate(date.getDate() + offset);
                return date;
            };
            var offsetString = function(offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'), offset, $.datepicker._getFormatConfig(inst));
                } catch (e) {}
                var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date();
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
                var matches = pattern.exec(offset);
                while (matches) {
                    switch (matches[2] || 'd') {
                        case 'd':
                        case 'D':
                            day += parseInt(matches[1], 10);
                            break;
                        case 'w':
                        case 'W':
                            day += parseInt(matches[1], 10) * 7;
                            break;
                        case 'm':
                        case 'M':
                            month += parseInt(matches[1], 10);
                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break;
                        case 'y':
                        case 'Y':
                            year += parseInt(matches[1], 10);
                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break;
                    }
                    matches = pattern.exec(offset);
                }
                return new Date(year, month, day);
            };
            var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) : (typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
            newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
            }
            return this._daylightSavingAdjust(newDate);
        },
        _daylightSavingAdjust: function(date) {
            if (!date) return null;
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date;
        },
        _setDate: function(inst, date, noChange) {
            var clear = !date;
            var origMonth = inst.selectedMonth;
            var origYear = inst.selectedYear;
            var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
                this._notifyChange(inst);
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? '' : this._formatDate(inst));
            }
        },
        _getDate: function(inst) {
            var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return startDate;
        },
        _generateHTML: function(inst) {
            var today = new Date();
            today = this._daylightSavingAdjust(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
            var isRTL = this._get(inst, 'isRTL');
            var showButtonPanel = this._get(inst, 'showButtonPanel');
            var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
            var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
            var numMonths = this._getNumberOfMonths(inst);
            var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
            var stepMonths = this._get(inst, 'stepMonths');
            var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
            var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            var minDate = this._getMinMaxDate(inst, 'min');
            var maxDate = this._getMinMaxDate(inst, 'max');
            var drawMonth = inst.drawMonth - showCurrentAtPos;
            var drawYear = inst.drawYear;
            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--;
            }
            if (maxDate) {
                var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
                maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--;
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;
            var prevText = this._get(inst, 'prevText');
            prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst)));
            var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._adjustDate(\'#' + inst.id + '\', -' + stepMonths + ', \'M\');"' + ' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' : (hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
            var nextText = this._get(inst, 'nextText');
            nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst)));
            var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._adjustDate(\'#' + inst.id + '\', +' + stepMonths + ', \'M\');"' + ' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' : (hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
            var currentText = this._get(inst, 'currentText');
            var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
            currentText = (!navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
            var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._hideDatepicker();">' + this._get(inst, 'closeText') + '</button>' : '');
            var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
                (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._gotoToday(\'#' + inst.id + '\');"' + '>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
            var firstDay = parseInt(this._get(inst, 'firstDay'), 10);
            firstDay = (isNaN(firstDay) ? 0 : firstDay);
            var showWeek = this._get(inst, 'showWeek');
            var dayNames = this._get(inst, 'dayNames');
            var dayNamesShort = this._get(inst, 'dayNamesShort');
            var dayNamesMin = this._get(inst, 'dayNamesMin');
            var monthNames = this._get(inst, 'monthNames');
            var monthNamesShort = this._get(inst, 'monthNamesShort');
            var beforeShowDay = this._get(inst, 'beforeShowDay');
            var showOtherMonths = this._get(inst, 'showOtherMonths');
            var selectOtherMonths = this._get(inst, 'selectOtherMonths');
            var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
            var defaultDate = this._getDefaultDate(inst);
            var html = '';
            for (var row = 0; row < numMonths[0]; row++) {
                var group = '';
                this.maxRows = 4;
                for (var col = 0; col < numMonths[1]; col++) {
                    var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    var cornerClass = ' ui-corner-all';
                    var calender = '';
                    if (isMultiMonth) {
                        calender += '<div class="ui-datepicker-group';
                        if (numMonths[1] > 1)
                            switch (col) {
                                case 0:
                                    calender += ' ui-datepicker-group-first';
                                    cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left');
                                    break;
                                case numMonths[1] - 1:
                                    calender += ' ui-datepicker-group-last';
                                    cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right');
                                    break;
                                default:
                                    calender += ' ui-datepicker-group-middle';
                                    cornerClass = '';
                                    break;
                            }
                        calender += '">';
                    }
                    calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
                        (/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
                        (/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
                        this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + '</div><table class="ui-datepicker-calendar"><thead>' + '<tr>';
                    var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
                    for (var dow = 0; dow < 7; dow++) {
                        var day = (dow + firstDay) % 7;
                        thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' + '<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
                    }
                    calender += thead + '</tr></thead><tbody>';
                    var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
                    var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    var curRows = Math.ceil((leadDays + daysInMonth) / 7);
                    var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows);
                    this.maxRows = numRows;
                    var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (var dRow = 0; dRow < numRows; dRow++) {
                        calender += '<tr>';
                        var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
                            this._get(inst, 'calculateWeek')(printDate) + '</td>');
                        for (var dow = 0; dow < 7; dow++) {
                            var daySettings = (beforeShowDay ? beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
                            var otherMonth = (printDate.getMonth() != drawMonth);
                            var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] || (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
                            tbody += '<td class="' +
                                ((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') +
                                (otherMonth ? ' ui-datepicker-other-month' : '') +
                                ((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || (defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ? ' ' + this._dayOverClass : '') +
                                (unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') +
                                (otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] +
                                    (printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') +
                                    (printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' +
                                ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') +
                                (unselectable ? '' : ' onclick="DP_jQuery_' + dpuuid + '.datepicker._selectDay(\'#' +
                                    inst.id + '\',' + printDate.getMonth() + ',' + printDate.getFullYear() + ', this);return false;"') + '>' +
                                (otherMonth && !showOtherMonths ? '&#xa0;' : (unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
                                    (printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
                                    (printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') +
                                    (otherMonth ? ' ui-priority-secondary' : '') + '" href="#">' + printDate.getDate() + '</a>')) + '</td>';
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate);
                        }
                        calender += tbody + '</tr>';
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++;
                    }
                    calender += '</tbody></table>' + (isMultiMonth ? '</div>' +
                        ((numMonths[0] > 0 && col == numMonths[1] - 1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
                    group += calender;
                }
                html += group;
            }
            html += buttonPanel + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !inst.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
            inst._keyEvent = false;
            return html;
        },
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
            var changeMonth = this._get(inst, 'changeMonth');
            var changeYear = this._get(inst, 'changeYear');
            var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
            var html = '<div class="ui-datepicker-title">';
            var monthHtml = '';
            if (secondary || !changeMonth)
                monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
            else {
                var inMinYear = (minDate && minDate.getFullYear() == drawYear);
                var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
                monthHtml += '<select class="ui-datepicker-month" ' + 'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'M\');" ' + 'onclick="DP_jQuery_' + dpuuid + '.datepicker._clickMonthYear(\'#' + inst.id + '\');"' + '>';
                for (var month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth()))
                        monthHtml += '<option value="' + month + '"' +
                        (month == drawMonth ? ' selected="selected"' : '') + '>' + monthNamesShort[month] + '</option>';
                }
                monthHtml += '</select>';
            }
            if (!showMonthAfterYear)
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
            if (!inst.yearshtml) {
                inst.yearshtml = '';
                if (secondary || !changeYear)
                    html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
                else {
                    var years = this._get(inst, 'yearRange').split(':');
                    var thisYear = new Date().getFullYear();
                    var determineYear = function(value) {
                        var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10)));
                        return (isNaN(year) ? thisYear : year);
                    };
                    var year = determineYear(years[0]);
                    var endYear = Math.max(year, determineYear(years[1] || ''));
                    year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
                    endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
                    inst.yearshtml += '<select class="ui-datepicker-year" ' + 'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'Y\');" ' + 'onclick="DP_jQuery_' + dpuuid + '.datepicker._clickMonthYear(\'#' + inst.id + '\');"' + '>';
                    for (; year <= endYear; year++) {
                        inst.yearshtml += '<option value="' + year + '"' +
                            (year == drawYear ? ' selected="selected"' : '') + '>' + year + '</option>';
                    }
                    inst.yearshtml += '</select>';
                    html += inst.yearshtml;
                    inst.yearshtml = null;
                }
            }
            html += this._get(inst, 'yearSuffix');
            if (showMonthAfterYear)
                html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
            html += '</div>';
            return html;
        },
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.drawYear + (period == 'Y' ? offset : 0);
            var month = inst.drawMonth + (period == 'M' ? offset : 0);
            var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
                (period == 'D' ? offset : 0);
            var date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period == 'M' || period == 'Y')
                this._notifyChange(inst);
        },
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, 'min');
            var maxDate = this._getMinMaxDate(inst, 'max');
            var newDate = (minDate && date < minDate ? minDate : date);
            newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
            return newDate;
        },
        _notifyChange: function(inst) {
            var onChange = this._get(inst, 'onChangeMonthYear');
            if (onChange)
                onChange.apply((inst.input ? inst.input[0] : null), [inst.selectedYear, inst.selectedMonth + 1, inst]);
        },
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, 'numberOfMonths');
            return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
        },
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
        },
        _getDaysInMonth: function(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },
        _getFirstDayOfMonth: function(year, month) {
            return new Date(year, month, 1).getDay();
        },
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst);
            var date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
            if (offset < 0)
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
            return this._isInRange(inst, date);
        },
        _isInRange: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, 'min');
            var maxDate = this._getMinMaxDate(inst, 'max');
            return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()));
        },
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, 'shortYearCutoff');
            shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            return {
                shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, 'dayNamesShort'),
                dayNames: this._get(inst, 'dayNames'),
                monthNamesShort: this._get(inst, 'monthNamesShort'),
                monthNames: this._get(inst, 'monthNames')
            };
        },
        _formatDate: function(inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear;
            }
            var date = (day ? (typeof day == 'object' ? day : this._daylightSavingAdjust(new Date(year, month, day))) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
        }
    });

    function bindHover(dpDiv) {
        var selector = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
        return dpDiv.bind('mouseout', function(event) {
            var elem = $(event.target).closest(selector);
            if (!elem.length) {
                return;
            }
            elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");
        }).bind('mouseover', function(event) {
            var elem = $(event.target).closest(selector);
            if ($.datepicker._isDisabledDatepicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0]) || !elem.length) {
                return;
            }
            elem.parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
            elem.addClass('ui-state-hover');
            if (elem.hasClass('ui-datepicker-prev')) elem.addClass('ui-datepicker-prev-hover');
            if (elem.hasClass('ui-datepicker-next')) elem.addClass('ui-datepicker-next-hover');
        });
    }

    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props)
            if (props[name] == null || props[name] == undefined)
                target[name] = props[name];
        return target;
    };

    function isArray(a) {
        return (a && (($.browser.safari && typeof a == 'object' && a.length) || (a.constructor && a.constructor.toString().match(/\Array\(\)/))));
    };
    $.fn.datepicker = function(options) {
        if (!this.length) {
            return this;
        }
        if (!$.datepicker.initialized) {
            $(document).mousedown($.datepicker._checkExternalClick).find('body').append($.datepicker.dpDiv);
            $.datepicker.initialized = true;
        }
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
            return $.datepicker['_' + options + 'Datepicker'].apply($.datepicker, [this[0]].concat(otherArgs));
        if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
            return $.datepicker['_' + options + 'Datepicker'].apply($.datepicker, [this[0]].concat(otherArgs));
        return this.each(function() {
            typeof options == 'string' ? $.datepicker['_' + options + 'Datepicker'].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options);
        });
    };
    $.datepicker = new Datepicker();
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.8.14";
    window['DP_jQuery_' + dpuuid] = $;
    $('.date-pick').datepicker({
        autoFocusNextInput: true
    });
})(jQuery);
var content_slider_counter = 0;
(function(e) {
    function t(e, t) {
        this._constructor(e, t, 0)
    }

    function n(n, i) {
        var s = this;
        this.$element = e(n);
        this.$base = this.$element;
        this.$element.wrap('<div class="main_content_slider_wrapper">');
        this.$parent_wrapper = this.$element.parent();
        this.parent_wrapper_width = 0;
        this.id = this.$element.attr("id");
        if (typeof this.id == "undefined") {
            content_slider_counter++;
            this.id = "all_around_slider_" + content_slider_counter
        }
        this.options = e.extend({}, e.fn.content_slider.defaults, i);
        if (this.options.main_circle_position == 1) {
            var o = this.options.circle_left_offset;
            this.options.circle_left_offset = 0
        }
        if (this.options.main_circle_position == 2) {
            var u = this.options.minus_width;
            this.options.minus_width = 0
        }
        if (this.options.main_circle_position > 0) {
            this.options.max_shown_items += this.options.max_shown_items - 1
        }
        if (this.options.border_on_off == 0) {
            this.options.arrow_width = this.options.small_arrow_width;
            this.options.arrow_height = this.options.small_arrow_height;
            this.options.activate_border_div = 0;
            this.options.use_thin_arrows = 0;
            this.options.small_border = 0;
            this.options.big_border = 0
        }
        if (this.options.use_thin_arrows == 1) {
            this.options.arrow_width = this.options.small_arrow_width;
            this.options.arrow_height = this.options.small_arrow_height
        }
        if (this.options.activate_border_div == 1) {
            this.options.small_pic_width += this.options.small_border * 2;
            this.options.small_pic_height += this.options.small_border * 2;
            this.options.big_pic_width += this.options.big_border * 2;
            this.options.big_pic_height += this.options.big_border * 2;
            this.options.small_border += 1;
            this.options.big_border += 1
        }
        if (this.options.keep_on_top_middle_circle) this.options.dinamically_set_class_id = 1;
        if (this.options.hide_content == 1) this.options.wrapper_text_max_height = 0;
        if (this.options.content_margin_left != 0) e(this.options.text_object, this.$element).css("margin-left", this.options.content_margin_left + "px");
        this.have_text_label = 0;
        this.have_text_label_up = 0;
        this.have_text_label_down = 0;
        this.lock = 0;
        this.lock2 = 0;
        this.click = 0;
        this.keep_going = 0;
        this.going_counter = 0;
        this.sum_movement = 0;
        this.is_auto_play = 0;
        this.dismiss_auto_play = 0;
        if (this.options.hv_switch) this.last_mouse_x = this.options.y_offset;
        else this.last_mouse_x = 0;
        this.show_mouse_move = 0;
        this.max_show = this.options.max_shown_items + 2;
        this.anim_counter = 0;
        this.func = this.go_right;
        this.arrow_hidden_counter = 0;
        this.clicked = 0;
        this.speed = this.options.moving_speed;
        this.mid_elem = Math.floor(this.options.max_shown_items / 2);
        this.max_pos = 3;
        this.opration = 0;
        this.offset = 0;
        this.was_gone = 0;
        this.number_of_items = 0;
        this.slider_state = 0;
        this.prettyPhoto_status = 0;
        this.mouse_in_animation = 0;
        this.hover_status = 0;
        this.mouse_out_animation = 0;
        this.minus = 0;
        this.real_width = 0;
        this.last_resolution_mode = 0;
        this.last_resolution = 0;
        this.under_600 = 0;
        this.mouse_state = 0;
        this.mouse_moved = 0;
        this.ignore_click_up = 0;
        this.ignore_click_up2 = 0;
        this.ignore_click_down = 0;
        var a = this.$element.offset();
        this.x_offset = a.left;
        this.y_offset = a.top;
        a = this.$parent_wrapper.offset();
        this.parent_x_offset = a.left;
        this.last_c = {
            pos: 0,
            master_click: 1
        };
        this.first_touch_x = 0;
        this.first_touch_y = 0;
        this.first_scroll_y = 0;
        this.is_touch_device = "ontouchstart" in document.documentElement;
        this.last_height = this.options.wrapper_text_max_height;
        this.prettyPhoto_open_status = 0;
        if (!this.options.top_offset) this.options.top_offset = Math.floor(this.options.big_pic_height / 2) + this.options.big_border + 1;
        if (this.options.hv_switch == 1 && this.options.max_shown_items == 1) {
            this.options.left_offset += 4
        }
        this.math = new r(this.options.map.length, this.options.max_shown_items, this.mid_elem, this.options.active_item - this.mid_elem - 1, 0, this.options.child_div_width, this.options.big_pic_width, this.options.small_pic_width, this.options.small_pic_height, this.options.big_pic_width, this.options.big_pic_height, this.options.top_offset, this.options.small_border, this.options.big_border, this.options.arrow_width, this.options.arrow_height, this.options.container_class_padding, this.options.mode, this, this.options.left_offset);
        if (this.options.main_circle_position == 1) {
            var f = this.math._calculate_child_coordinates_by_n(this.mid_elem + 1, 0);
            var l = f.new_pos + this.options.left_offset;
            if (this.options.hv_switch == 0) {
                var c = this.options.arrow_width;
                if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) c = this.options.small_arrow_width
            } else {
                var c = this.options.arrow_height;
                if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) c = this.options.small_arrow_height;
                o += 4
            }
            this.options.circle_left_offset = 0 - (l - c);
            this.options.circle_left_offset += o
        }
        var h;
        if (this.options.main_circle_position == 2) {
            h = this.math._calculate_child_coordinates_by_n(this.max_show - 1, 0);
            var p = h.new_pos + this.options.left_offset;
            var f = this.math._calculate_child_coordinates_by_n(this.mid_elem + 2, 0);
            var d = f.new_pos + this.options.left_offset;
            this.options.minus_width = p - d;
            this.options.minus_width += u
        }
        if (this.options.hv_switch == 0) {
            h = this.math._calculate_child_coordinates_by_n(this.max_show - 1, 0);
            this.max_width = h.new_pos + this.options.left_offset;
            if (this.options.minus_width > 0) this.max_width -= this.options.minus_width
        } else {
            this.max_width = this.options.wrapper_text_max_height
        }
        this.$parent_wrapper.css({
            "max-width": this.max_width + "px"
        });
        this.ret_values = {
            height: 0,
            width: 0
        };
        this.ret_values.height = 2 * this.options.top_offset + this.options.shadow_offset;
        this.create_html();
        this.$prettyPhoto_div = e("div.image_more_info", this.$base);
        this.$prettyPhoto_a = e("a", this.$prettyPhoto_div);
        this.$prettyPhoto_img = e("img", this.$prettyPhoto_div);
        if (this.options.hide_prettyPhoto == 0) {
            this.$prettyPhoto_img.css({
                padding: "0px",
                "background-color": this.options.prettyPhoto_color
            });
            if (this.options.prettyPhoto_img != "") this.$prettyPhoto_img.attr("src", this.options.prettyPhoto_img);
            if (this.options.allow_shadow == 0) {
                this.$prettyPhoto_div.css("box-shadow", "0px 0px 0px #fff")
            }
            if (this.options.keep_on_top_middle_circle) {
                this.$prettyPhoto_div.css("z-index", this.max_show + 1)
            }
        } else {
            this.$prettyPhoto_div.hide()
        }
        this.$items = e("div." + this.options.picture_class, this.$base);
        if (this.options.allow_shadow == 0) {
            this.$items.css({
                "-moz-box-shadow": "0px 0px 0px #fff",
                "-webkit-box-shadow": "0px 0px 0px #fff",
                "box-shadow": "0px 0px 0px #fff"
            })
        }
        this.$left_arrow_class = e(this.options.left_arrow_class, this.$element);
        this.$right_arrow_class = e(this.options.right_arrow_class, this.$element);
        this.$left_arrow = e(this.options.left_arrow_class + " img", this.$element);
        this.$right_arrow = e(this.options.right_arrow_class + " img", this.$element);
        if (this.options.hide_arrows == 0) {
            if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) {
                this.$left_arrow_class.addClass("circle_slider_no_border");
                this.$right_arrow_class.addClass("circle_slider_no_border")
            }
            if (this.options.use_thin_arrows == 1) {
                this.$left_arrow_class.addClass("circle_slider_no_border2_left")
            }
            if (this.options.border_on_off == 1) {
                this.$left_arrow.css("background", this.options.arrow_color);
                this.$right_arrow.css("background", this.options.arrow_color)
            }
            if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) {
                if (this.options.hv_switch == 0) {
                    this.$left_arrow.css({
                        "z-index": "1000",
                        "margin-top": "15px"
                    });
                    this.$right_arrow.css({
                        "z-index": "1000",
                        "margin-top": "15px"
                    })
                } else {
                    this.$left_arrow.css({
                        "z-index": "1000",
                        "margin-left": "15px"
                    });
                    this.$right_arrow.css({
                        "z-index": "1000",
                        "margin-left": "15px"
                    })
                }
            }
            this._set_arrows_events()
        } else {
            this.$left_arrow_class.hide();
            this.$right_arrow_class.hide()
        }
        var v = 0;
        this.items = new Array;
        e.each(this.$items, function(n, r) {
            s.items[v] = new t(r, e.extend(s.options, {
                $parent: s.$element,
                parent_this: s,
                n: v
            }));
            v++
        });
        this.number_of_items = v;
        this._preset_all_children_parameters(0);
        this._align_arrows();
        this.last_middle = this.math._convert_position_to_image_array(0, this.mid_elem);
        if (this.options.max_shown_items == 1 && this.options.hv_switch == 0) {
            this.$container.css("left", "13px")
        }
        if (this.options.max_shown_items > 1 && this.options.hv_switch == 0 && this.options.border_on_off == 0) {
            this.$container.css("left", "2px")
        }
        this._set_parent_window_size();
        this.mid = this._return_middle_position_of_content();
        this.slider_text = e("." + this.options.left_text_class, this.$element);
        this.max_size = Math.floor((this.options.wrapper_text_max_height - this.ret_values.height - 45) / 2);
        this.orig_max_size = this.max_size;
        if (this.options.max_shown_items > 1 && this.options.hv_switch == 0) {
            if (this.options.border_on_off == 1) e(this.options.text_object, this.$element).css("width", this.max_width - 16 - this.options.minus_content_width + "px");
            else e(this.options.text_object, this.$element).css("width", this.max_width - 22 - this.options.minus_content_width + "px")
        }
        e(window).resize(e.proxy(this._resize, this));
        this._resize();
        var m = this.$container.offset();
        if (this.options.hv_switch) this.offset = m.top;
        else this.offset = m.left + this.minus;
        if (this.options.hv_switch) this._set_text_div_width_ver();
        else this._set_text_div_width_hor();
        this.show_text(this.math._convert_position_to_image_array(0, this.mid_elem));
        this._set_prettyPhoto_div_position();
        if (this.options.enable_mousewheel == 1) {
            this.$container.bind("mousewheel", function(e, t, n, r) {
                e.preventDefault();
                if (t == -1) s.public_go_left();
                else s.public_go_right()
            })
        }
        if (this.options.auto_play) this.start_auto_play();
        if (this.is_touch_device) this._start_main_hover();
        e(window).on("keydown", e.proxy(this.keypress, this));
        e(window).on("hashchange", e.proxy(this.hashchange, this));
        if (this.options.hv_switch == 0 && this.options.border_on_off == 1 && this.options.use_thin_arrows == 1) {
            this.$left_arrow.css("margin-left", "0px")
        }
    }

    function r(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b) {
        var w = this;
        this.parent_this = y;
        this.image_array_lenght = e;
        this.visible_window_lenght = t;
        this.div_window_lenght = this.visible_window_lenght + 2;
        this.beginning_position_number = -1;
        this.n_img_offset = r;
        this.begining_n_img_offset2 = r;
        this.position_n_offset = i;
        this.element_width = s;
        this.master_element_width = o;
        this.master_element_height = l;
        this.current_mid_after_ratio = 1;
        this.max_show = this.visible_window_lenght;
        this.sum_movement = 0;
        this.mid_elem = n;
        this.left_offset = b;
        this.small_pic_width = u;
        this.small_pic_height = a;
        this.big_pic_width = f;
        this.big_pic_height = l;
        this.top_offset = c;
        this.small_border = h;
        this.big_border = p;
        this.arrow_width = d;
        this.arrow_height = v;
        this.container_padding = m;
        this.mode = g
    }
    t.prototype = {
        $: function(e) {
            return this.$element.find(e)
        },
        _constructor: function(t, n, r) {
            var i = this;
            this.$element = e(t);
            this.$base = this.$element;
            this.$parent = n.$parent;
            this.options = n;
            this.n = n.n;
            this.parent_this = n.parent_this;
            this.have_element = 1;
            this.$image = e("img", this.$element);
            this.$border_div = e("div." + this.options.border_class, this.$element);
            this.image_src = this.$image.attr("src");
            this.real_i = this.$image.attr("class");
            var s = this.real_i.substring(15);
            this.real_i = parseInt(s, 10);
            if (this.parent_this.have_text_label_up) {
                this.upper_text_label_show = this.options.map[this.real_i].upper_text_label_show;
                this.upper_text_label = this.options.map[this.real_i].upper_text_label;
                this.upper_text_label_style = this.options.map[this.real_i].upper_text_label_style;
                this.$upper_text = this.$element.next("div.all_around_text_up");
                if (this.$upper_text.length) {
                    this.$upper_text_span = e("span", this.$upper_text)
                }
            }
            if (this.parent_this.have_text_label_down) {
                this.lower_text_label_show = this.options.map[this.real_i].lower_text_label_show;
                this.lower_text_label = this.options.map[this.real_i].lower_text_label;
                this.lower_text_label_style = this.options.map[this.real_i].lower_text_label_style;
                this.$lower_text = this.$element.nextAll("div.all_around_text_down:first");
                if (this.$lower_text.length) {
                    this.$lower_text_span = e("span", this.$lower_text)
                }
            }
            this.turn_counter = 0;
            this.last_mouse_x = 0;
            this.show_mouse_move = 0;
            this.sum_movement = 0;
            this.mouse_in_animation = 0;
            this.hover_status = 0;
            this.mouse_out_animation = 0;
            this.positions = 0;
            this.max = this.parent_this.max_show;
            this.position_in_slider = this.n;
            this.marg_left = Math.floor((this.options.big_pic_width - this.options.small_pic_width) / 2);
            this.marg_top = Math.floor((this.options.big_pic_height - this.options.small_pic_height) / 2);
            this.$element.mousedown(e.proxy(this._mouse_down, this));
            this.$element.mouseup(e.proxy(this._mouse_up, this));
            this.$element.mouseleave(e.proxy(this._mouse_leave, this));
            this.$element.mousemove(e.proxy(this._mouse_move, this));
            this.$image.mousedown(e.proxy(this._mouse_down, this));
            this.$image.mouseup(e.proxy(this._mouse_up, this));
            if (this.options.dinamically_set_position_class) {
                this.$element.addClass("all_around_position_" + this.position_in_slider)
            }
        },
        _set_img: function(e, t) {
            var n = 0;
            var r = 0;
            var i = "";
            if (this.options.activate_border_div == 0 && this.options.border_on_off == 1) {
                n = 10;
                r = 10
            }
            if (this.parent_this.options.hv_switch == 0) i = "width: " + (this.options.small_pic_width + r) + "px; ";
            if (this.parent_this.have_text_label_up) {
                this.upper_text_label_show = this.options.map[t].upper_text_label_show;
                this.upper_text_label = this.options.map[t].upper_text_label;
                this.upper_text_label_style = this.options.map[t].upper_text_label_style;
                this.$upper_text_span.html(this.upper_text_label);
                this.$upper_text_span.attr("style", i + this.upper_text_label_style)
            }
            if (this.parent_this.have_text_label_down) {
                this.lower_text_label_show = this.options.map[t].lower_text_label_show;
                this.lower_text_label = this.options.map[t].lower_text_label;
                this.lower_text_label_style = this.options.map[t].lower_text_label_style;
                this.$lower_text_span.html(this.lower_text_label);
                if (this.parent_this.options.hv_switch == 0) this.$lower_text_span.attr("style", i + this.lower_text_label_style)
            }
            this.image_src = e;
            this.$image.attr("src", e);
            if (this.options.dinamically_set_class_id) {
                if (typeof t != "undefined") {
                    if (t != this.real_i) {
                        this.$element.removeClass("all_around_circle_" + this.real_i);
                        this.real_i = t;
                        this.$image.attr("class", "all_around_img_" + t);
                        this.$element.addClass("all_around_circle_" + this.real_i)
                    }
                }
            }
        },
        _set_pos_size: function(e, t, n, r, i, s, o, u) {
            var a, f;
            var l = this.options.border_color;
            var c = 5;
            var h = 0;
            if (this.options.activate_border_div == 0 && this.options.border_on_off == 1) h = 12;
            if (this.options.border_on_off == 0) s = 0;
            this.current_border = s;
            if (!o) {
                if (this.options.border_radius == -1) a = r;
                else {
                    if (this.options.radius_proportion) {
                        var p = this.options.big_pic_width / this.options.border_radius;
                        var d = r / p;
                        a = d
                    } else {
                        a = this.options.border_radius
                    }
                }
                if (this.parent_this.options.hv_switch) {
                    if (this.options.activate_border_div) {
                        this.$element.css({
                            left: n,
                            top: e,
                            width: r,
                            height: i,
                            "border-radius": a,
                            border: l + " solid 0px"
                        });
                        this.$border_div.css({
                            width: r + 2,
                            height: i + 2,
                            "border-radius": a,
                            border: l + " solid " + s + "px"
                        })
                    } else {
                        this.$element.css({
                            left: n,
                            top: e,
                            width: r,
                            height: i,
                            "border-radius": a,
                            border: l + " solid " + s + "px"
                        })
                    }
                    if (typeof this.parent_this.default_circle_top == "undefined") this.parent_this.default_circle_top = n - c;
                    if (this.parent_this.have_text_label_up) {
                        this.$upper_text.css({
                            top: e,
                            left: n - c - this.parent_this.default_circle_top,
                            width: this.parent_this.default_circle_top
                        })
                    }
                    if (this.parent_this.have_text_label_down) {
                        if (r == this.options.big_pic_width) {
                            h += 10;
                            if (this.options.activate_border_div == 1) h += 15
                        }
                        this.$lower_text.css({
                            top: e,
                            left: n + i + c + h,
                            width: this.parent_this.default_circle_top
                        })
                    }
                    if (this.parent_this.have_text_label) {
                        var v = 0;
                        var m = 0;
                        var g = 0;
                        if (this.parent_this.have_text_label_up) {
                            this.$upper_text_span.css("width", this.parent_this.default_circle_top);
                            v = this.$upper_text.height();
                            m = this.$upper_text_span.height()
                        }
                        if (m > 0) g = v / 2 - m / 2;
                        var y = 0;
                        var b = 0;
                        var w = 0;
                        if (this.parent_this.have_text_label_down) {
                            this.$lower_text_span.css("width", this.parent_this.default_circle_top);
                            y = this.$lower_text.height();
                            b = this.$lower_text_span.height()
                        }
                        if (b > 0) w = y / 2 - b / 2;
                        if (this.parent_this.have_text_label_up) this.$upper_text_span.css("top", g + "px");
                        if (this.parent_this.have_text_label_down) this.$lower_text_span.css("top", w + "px")
                    }
                } else {
                    if (this.options.activate_border_div) {
                        this.$element.css({
                            left: e,
                            top: n,
                            width: r,
                            height: i,
                            "border-radius": a,
                            border: l + " solid 0px"
                        });
                        this.$border_div.css({
                            width: r + 2,
                            height: i + 2,
                            "border-radius": a,
                            border: l + " solid " + s + "px"
                        })
                    } else {
                        this.$element.css({
                            left: e,
                            top: n,
                            width: r,
                            height: i,
                            "border-radius": a,
                            border: l + " solid " + s + "px"
                        })
                    }
                    if (typeof this.parent_this.default_circle_top == "undefined") this.parent_this.default_circle_top = n - c;
                    if (this.parent_this.have_text_label) f = r - (r - this.options.small_pic_width) / 2 - this.options.small_pic_width;
                    if (this.parent_this.have_text_label_up) {
                        this.$upper_text.css({
                            left: e + f,
                            top: n - c - this.parent_this.default_circle_top,
                            height: this.parent_this.default_circle_top
                        })
                    }
                    if (this.parent_this.have_text_label_down) {
                        if (r == this.options.big_pic_width) {
                            h += 10;
                            if (this.options.activate_border_div == 1) h += 15
                        }
                        this.$lower_text.css({
                            left: e + f,
                            top: n + i + c + h,
                            height: this.parent_this.default_circle_top
                        })
                    }
                }
                this.$image.css({
                    width: r,
                    height: i,
                    "border-radius": a
                })
            } else {
                if (this.options.border_radius == -1) a = this.parent_this.options.big_pic_width;
                else {
                    if (this.options.radius_proportion) {
                        var p = this.options.big_pic_width / this.options.border_radius;
                        var d = r / p;
                        a = d
                    } else {
                        a = this.options.border_radius
                    }
                }
                if (this.options.activate_border_div) {
                    this.$element.css({
                        "border-radius": a + "px"
                    });
                    this.$border_div.css({
                        "border-radius": a + "px"
                    })
                } else {
                    this.$element.css({
                        "border-radius": a + "px"
                    })
                }
                this.$image.css({
                    "border-radius": a + "px"
                });
                if (this.parent_this.options.hv_switch) {
                    if (this.options.activate_border_div) {
                        this.$element.animate({
                            left: n,
                            top: e,
                            width: r,
                            height: i,
                            "border-width": "0px"
                        }, t, this.options.moving_easing, u);
                        this.$border_div.animate({
                            width: r + 2,
                            height: i + 2,
                            "border-width": s + "px"
                        }, t, this.options.moving_easing)
                    } else {
                        this.$element.animate({
                            left: n,
                            top: e,
                            width: r,
                            height: i,
                            "border-width": s + "px"
                        }, t, this.options.moving_easing, u)
                    }
                    this.$image.animate({
                        width: i,
                        height: r
                    }, t, this.options.arrow_easing, u);
                    if (typeof this.parent_this.default_circle_top == "undefined") this.parent_this.default_circle_top = n - c;
                    if (this.parent_this.have_text_label_up) {
                        this.$upper_text.animate({
                            top: e,
                            left: n - c - this.parent_this.default_circle_top,
                            width: this.parent_this.default_circle_top
                        }, t, this.options.moving_easing)
                    }
                    if (this.parent_this.have_text_label_down) {
                        if (r == this.options.big_pic_width) {
                            h += 10;
                            if (this.options.activate_border_div == 1) h += 15
                        }
                        this.$lower_text.animate({
                            top: e,
                            left: n + i + c + h,
                            width: this.parent_this.default_circle_top
                        }, t, this.options.moving_easing)
                    }
                    if (this.parent_this.have_text_label) {
                        var v = 0;
                        var m = 0;
                        var g = 0;
                        if (this.parent_this.have_text_label_up) {
                            this.$upper_text_span.css("width", this.parent_this.default_circle_top);
                            v = this.$upper_text.height();
                            m = this.$upper_text_span.height()
                        }
                        if (m > 0) g = v / 2 - m / 2;
                        var y = 0;
                        var b = 0;
                        var w = 0;
                        if (this.parent_this.have_text_label_down) {
                            this.$lower_text_span.css("width", this.parent_this.default_circle_top);
                            y = this.$lower_text.height();
                            b = this.$lower_text_span.height()
                        }
                        if (b > 0) w = y / 2 - b / 2;
                        if (this.parent_this.have_text_label_up) this.$upper_text_span.animate({
                            top: g + "px"
                        }, t, this.options.moving_easing);
                        if (this.parent_this.have_text_label_down) this.$lower_text_span.css({
                            top: w + "px"
                        })
                    }
                } else {
                    if (this.options.activate_border_div) {
                        this.$element.animate({
                            left: e,
                            top: n,
                            width: r,
                            height: i,
                            "border-width": "0px"
                        }, t, this.options.moving_easing, u);
                        this.$border_div.animate({
                            width: r + 2,
                            height: i + 2,
                            "border-width": s + "px"
                        }, t, this.options.moving_easing)
                    } else {
                        this.$element.animate({
                            left: e,
                            top: n,
                            width: r,
                            height: i,
                            "border-width": s + "px"
                        }, t, this.options.moving_easing, u)
                    }
                    this.$image.animate({
                        width: r,
                        height: i
                    }, t, this.options.arrow_easing, u);
                    if (this.parent_this.have_text_label) f = r - (r - this.options.small_pic_width) / 2 - this.options.small_pic_width;
                    if (this.parent_this.have_text_label_up) {
                        this.$upper_text.animate({
                            left: e + f,
                            top: n - c - this.parent_this.default_circle_top,
                            height: this.parent_this.default_circle_top
                        }, t, this.options.moving_easing)
                    }
                    if (this.parent_this.have_text_label_down) {
                        if (r == this.options.big_pic_width) {
                            h += 10;
                            if (this.options.activate_border_div == 1) h += 15
                        }
                        this.$lower_text.animate({
                            left: e + f,
                            top: n + i + c + h,
                            height: this.parent_this.default_circle_top
                        }, t, this.options.moving_easing)
                    }
                }
            }
        },
        _mouse_down: function(e) {
            e.preventDefault();
            if (this.options.hv_switch) var t = e.pageY - this.parent_this.y_offset - this.options.circle_left_offset;
            else var t = e.pageX - this.parent_this.x_offset + this.parent_this.minus - this.options.circle_left_offset;
            var n = this.parent_this.math._convert_x_position_to_n(t);
            if (n.master_click == 1) return;
            this._mouse_leave(e)
        },
        _mouse_leave: function(e) {
            e.preventDefault();
            if (this.options.hover_movement == 0 || this.parent_this.show_mouse_move == 1 || this.parent_this.slider_state == 1) return;
            if (this.mouse_out_animation == 1 || this.hover_status == 0) return;
            if (this.mouse_in_animation == 1) {
                this.$element.stop();
                this.$image.stop();
                if (this.options.activate_border_div) this.$border_div.stop();
                this.mouse_in_animation = 0
            }
            if (this.element_top < 1) {
                this.hover_status = 0;
                this.mouse_in_animation = 0;
                this.mouse_out_animation = 0;
                return
            }
            this.hover_status = 1;
            this.mouse_out_animation = 1;
            this._end_hover2()
        },
        _end_hover2: function() {
            this.$element.animate({
                left: this.element_left + "px",
                top: this.element_top + "px",
                width: this.element_width + "px",
                height: this.element_height + "px"
            }, this.options.hover_speed, this.options.hover_easing, e.proxy(this._hover_ended2, this));
            if (this.options.activate_border_div) {
                this.$border_div.animate({
                    width: this.element_width + 2 + "px",
                    height: this.element_height + 2 + "px"
                }, this.options.hover_speed, this.options.hover_easing)
            }
            this.$image.animate({
                width: this.image_width + "px",
                height: this.image_height + "px"
            }, this.options.hover_speed, this.options.hover_easing)
        },
        _hover_ended2: function() {
            this.hover_status = 0;
            this.mouse_out_animation = 0
        },
        _mouse_move: function(e) {
            e.preventDefault();
            if (this.options.hover_movement == 0 || this.parent_this.show_mouse_move == 1 || this.parent_this.slider_state == 1) return;
            if (this.mouse_in_animation == 1 || this.hover_status == 2) return;
            if (this.mouse_out_animation == 1) {
                this.$element.stop();
                this.$image.stop();
                if (this.options.activate_border_div) this.$border_div.stop();
                this.mouse_out_animation = 0
            }
            if (this.options.hv_switch) var t = e.pageY - this.parent_this.y_offset - this.options.circle_left_offset;
            else var t = e.pageX - this.parent_this.x_offset + this.parent_this.minus - this.options.circle_left_offset;
            var n = this.parent_this.math._convert_x_position_to_n(t);
            if (n.master_click == 1) return;
            this.hover_status = 1;
            this.mouse_in_animation = 1;
            this._start_hover()
        },
        _calculate_hovers: function() {
            this.positions = 1;
            hover_movement_middle = Math.floor(this.options.hover_movement / 2);
            hover_movement = this.options.hover_movement;
            hover_movement2 = hover_movement * 2;
            var e = this.$element.position();
            pos2 = this.$image.position();
            this.element_top = e.top;
            this.element_left = e.left;
            this.element_width = this.$element.width();
            this.element_height = this.$element.height();
            this.image_top = pos2.top;
            this.image_left = pos2.left;
            this.image_height = this.$image.height();
            this.image_width = this.$image.width();
            this.element_top_middle = this.element_top - hover_movement_middle;
            this.element_left_middle = this.element_left - hover_movement_middle;
            this.element_width_middle = this.element_width + hover_movement;
            this.element_height_middle = this.element_height + hover_movement;
            this.image_width_middle = this.image_width + hover_movement;
            this.image_height_middle = this.image_height + hover_movement;
            this.element_top_end = this.element_top - hover_movement;
            this.element_left_end = this.element_left - hover_movement;
            this.element_width_end = this.element_width + hover_movement2;
            this.element_height_end = this.element_height + hover_movement2;
            this.image_width_end = this.image_width + hover_movement2;
            this.image_height_end = this.image_height + hover_movement2
        },
        _start_hover: function() {
            if (this.positions == 0) {
                this._calculate_hovers()
            }
            if (this.element_top < 3) {
                this.hover_status = 0;
                this.mouse_in_animation = 0;
                this.mouse_out_animation = 0;
                return
            }
            this.$element.animate({
                left: this.element_left_end + "px",
                top: this.element_top_end + "px",
                width: this.element_width_end + "px",
                height: this.element_height_end + "px"
            }, this.options.hover_speed, this.options.hover_easing, e.proxy(this._end_hover, this));
            if (this.options.activate_border_div) {
                this.$border_div.animate({
                    width: this.element_width_end + 2 + "px",
                    height: this.element_height_end + 2 + "px"
                }, this.options.hover_speed, this.options.hover_easing)
            }
            this.$image.animate({
                width: this.image_width_end + "px",
                height: this.image_height_end + "px"
            }, this.options.hover_speed, this.options.hover_easing)
        },
        _end_hover: function() {
            this.$element.animate({
                left: this.element_left_middle + "px",
                top: this.element_top_middle + "px",
                width: this.element_width_middle + "px",
                height: this.element_height_middle + "px"
            }, this.options.hover_speed, this.options.hover_easing, e.proxy(this._hover_ended, this));
            if (this.options.activate_border_div) {
                this.$border_div.animate({
                    width: this.element_width_middle + 2 + "px",
                    height: this.element_height_middle + 2 + "px"
                }, this.options.hover_speed, this.options.hover_easing)
            }
            this.$image.animate({
                width: this.image_width_middle + "px",
                height: this.image_height_middle + "px"
            }, this.options.hover_speed, this.options.hover_easing)
        },
        _hover_ended: function() {
            this.hover_status = 2;
            this.mouse_in_animation = 0
        },
        reset_positions: function() {
            if (this.positions == 0) return;
            if (this.mouse_in_animation == 1 || this.mouse_out_animation == 1) {
                this.$element.stop();
                this.$image.stop();
                if (this.options.activate_border_div) this.$border_div.stop()
            }
            if (this.parent_this.mouse_moved == 0) {
                this.$element.css({
                    left: this.element_left + "px",
                    top: this.element_top + "px",
                    width: this.element_width + "px",
                    height: this.element_height + "px"
                });
                if (this.options.activate_border_div) {
                    this.$border_div.css({
                        width: this.element_width + 2 + "px",
                        height: this.element_height + 2 + "px"
                    })
                }
                this.$image.css({
                    width: this.image_width + "px",
                    height: this.image_height + "px"
                })
            }
            this.positions = 0;
            this.mouse_in_animation = 0;
            this.hover_status = 0;
            this.mouse_out_animation = 0
        },
        value_reset: function() {
            this.positions = 0;
            this.mouse_in_animation = 0;
            this.hover_status = 0;
            this.mouse_out_animation = 0
        }
    };
    n.prototype = {
        $: function(e) {
            return this.$element.find(e)
        },
        hashchange: function() {
            var t = window.location.hash;
            var n = t.length;
            var r = this.id.length;
            var i = -1;
            var s = 0;
            var o = "";
            if (t.substr(0, 1) == "#") t = t.substr(1);
            if (t.substr(0, r) == this.id) {
                var u = t.substr(r);
                if (u.substr(0, 1) == "_") u = u.substr(1);
                var a = u;
                i = parseInt(a, 10);
                var f;
                var l = 0;
                if (isNaN(i)) {
                    i = -1;
                    if (a.length > 0) {
                        l = 1;
                        f = -1
                    } else {
                        l = 0;
                        f = -1
                    }
                } else {
                    f = a.indexOf("_")
                }
                if (f != -1 || l == 1) {
                    o = a.substr(f + 1);
                    if (o == "scroll") s = 1
                }
                if (s) {
                    e("html, body").animate({
                        scrollTop: this.$element.offset().top - 40
                    }, 1e3)
                }
                if (i > -1) {
                    this.public_go_to_slide(i)
                }
            }
        },
        keypress: function(e) {
            if (this.options.bind_arrow_keys) {
                if (e.keyCode == 39) this.public_go_left();
                if (e.keyCode == 37) this.public_go_right()
            }
        },
        public_go_left: function(e, t) {
            if (typeof e == "undefined") e = 0;
            if (typeof t == "undefined") t = 1;
            if (e == 1 && this.is_auto_play == 1 && this.dismiss_auto_play == 1) return;
            if (this.slider_state == 0) {
                this._stop_children();
                this.slider_state = 1;
                this._arrow_mouse_down();
                this._arrow_mouse_up();
                this.left_clicked_n(t)
            }
        },
        public_go_right: function(e, t) {
            if (typeof e == "undefined") e = 0;
            if (typeof t == "undefined") t = 1;
            if (e == 1 && this.is_auto_play == 1 && this.dismiss_auto_play == 1) return;
            if (this.slider_state == 0) {
                this._stop_children();
                this.slider_state = 1;
                this._arrow_mouse_down();
                this._arrow_mouse_up();
                this.right_clicked_n(t)
            }
        },
        public_go_one_slide_left: function(e) {
            this.public_go_right(0, 1)
        },
        public_go_one_slide_right: function(e) {
            this.public_go_left(0, 1)
        },
        public_go_n_slides_left: function(e) {
            this.public_go_right(0, e)
        },
        public_go_n_slides_right: function(e) {
            this.public_go_left(0, e)
        },
        public_go_to_slide: function(e) {
            var t = this.last_middle;
            var n = this.items_counts;
            var r = 0;
            while (1) {
                if (t == n) t = 0;
                if (t == e) break;
                if (r > n * 2) {
                    r = 0;
                    break
                }
                r++;
                t++
            }
            t = this.last_middle;
            n = this.items_counts;
            var i = 0;
            while (1) {
                if (t == -1) t = n - 1;
                if (t == e) break;
                if (i > n * 2) {
                    i = 0;
                    break
                }
                i++;
                t--
            }
            var s = 0;
            var o = "";
            if (r == 0 && i == 0) return;
            if (r < i) {
                s = r;
                o = "f"
            }
            if (r > i) {
                s = i;
                o = "b"
            }
            if (r == i) {
                s = r;
                o = "f"
            }
            if (s == 0) return;
            if (o == "f") this.public_go_left(0, s);
            if (o == "b") this.public_go_right(0, s)
        },
        check_under_600: function(t) {
            if (this.under_600 == 0 && t < 600) {
                this.under_600 = 1;
                this.height_backup = this.$element.height();
                this.$element.css({
                    height: ""
                });
                e(this.options.text_object, this.$element).css({
                    "float": "",
                    top: "0px",
                    left: "0px",
                    clear: "both"
                });
                if (this.options.small_resolution_max_height) this.$parent_wrapper.css({
                    height: this.options.small_resolution_max_height
                })
            }
            if (this.under_600 == 1 && t >= 600) {
                this.under_600 = 0;
                this.$element.css({
                    height: this.height_backup
                });
                e(this.options.text_object, this.$element).css({
                    "float": "left",
                    clear: ""
                });
                if (this.options.small_resolution_max_height) this.$parent_wrapper.css({
                    height: ""
                })
            }
        },
        get_window_width: function() {
            if (this.options.responsive_by_available_space == 1) {
                var t = this.$parent_wrapper.parent().width();
                return t
            } else {
                return e(window).width()
            }
        },
        _resize: function() {
            var t = this.get_window_width();
            if (this.last_resolution == t) return;
            var n = e(this.$element).offset();
            this.x_offset = n.left;
            this.y_offset = n.top;
            n = this.$parent_wrapper.offset();
            this.parent_x_offset = n.left;
            var r = this.$container.offset();
            if (this.options.hv_switch) {
                this.offset = r.top
            } else {
                this.offset = r.left + this.minus
            }
            if (t < this.options.big_pic_width + 59) {
                var i = t;
                x_ww = this.options.big_pic_width + 59;
                var s = x_ww - i;
                var o = i / (x_ww / 100);
                o -= 4;
                o = o / 100;
                this.$container.css("transform", "scale(" + o + ", " + o + ")");
                if (this.options.hv_switch == 1) this.$container.css("left", "-" + s / 3 + "px");
                e(".circle_slider_text_wrapper", this.$element).css("top", "-" + s / 2 + "px")
            } else {
                this.$container.css("transform", "scale(1,1)");
                if (this.options.hv_switch == 1) this.$container.css("left", "0px");
                e(".circle_slider_text_wrapper", this.$element).css("top", "0px")
            }
            this.last_resolution = t;
            if (this.options.hv_switch) {
                this.check_under_600(t);
                if (this.options.wrapper_text_max_height + 13 >= t) {
                    this.max_size = Math.floor((t - this.ret_values.height - 45) / 2) - 5;
                    if (this.under_600 == 1) {
                        if (this.options.vert_text_mode == 1) this.max_size = Math.floor(this.options.big_pic_width / 2);
                        else this.max_size = this.options.child_div_width
                    }
                    this._set_parent_window_size(1, t);
                    this._set_text_div_width_ver();
                    this.show_text(this.last_middle, 1);
                    this.last_resolution_mode = 2
                } else {
                    if (this.last_resolution_mode == 2) {
                        this.max_size = this.orig_max_size;
                        this._set_parent_window_size(1, this.options.wrapper_text_max_height);
                        this._set_text_div_width_ver();
                        this.show_text(this.last_middle, 1, 1)
                    }
                    this.last_resolution_mode = 1
                }
                return
            } else {
                var u = this.real_width;
                var a = e(this.options.text_object, this.$element);
                if (u + 13 >= t) {
                    if (this.options.small_resolution_max_height) this.$parent_wrapper.css({
                        height: this.options.small_resolution_max_height
                    });
                    if (this.options.main_circle_position == 0) {
                        var f = u + 13 - t;
                        var l = f;
                        f = Math.floor(f / 2) - 8;
                        this.minus = f;
                        this.$element.css({
                            left: "-" + f + "px"
                        })
                    }
                    if (this.options.main_circle_position == 2) {
                        var f = u + 13 - t;
                        var l = f;
                        f -= 8;
                        this.minus = f;
                        this.$element.css({
                            left: "-" + f + "px"
                        })
                    }
                    $block = e("div.content_slider_text_block_wrap", a);
                    if ($block.length) {
                        if (typeof this.last_text_width == "undefined") this.last_text_width = a.width();
                        a.css("width", t - 10 - this.options.minus_content_width + "px")
                    }
                    this._set_text_div_width_hor();
                    this._set_parent_window_size(1, t - 10);
                    this.last_resolution_mode = 2
                } else {
                    if (this.last_resolution_mode == 2) {
                        if (this.options.small_resolution_max_height) this.$parent_wrapper.css({
                            height: ""
                        });
                        this.minus = 0;
                        this.$element.css({
                            left: "0px"
                        });
                        this._set_text_div_width_hor();
                        this._set_parent_window_size(1, this.real_width);
                        if (typeof this.last_text_width == "undefined") this.last_text_width = this.real_width - 5;
                        a.css("width", this.last_text_width - this.options.minus_content_width + "px")
                    }
                    this.last_resolution_mode = 1
                }
            }
        },
        _set_text_div_width_hor: function() {
            $text_element = e(this.options.text_object, this.$element);
            var t = 0;
            var n = this.mid;
            var r = this.get_window_width();
            if (this.minus > 0) n = Math.floor(r / 2) - 5;
            if (this.options.activate_border_div == 1) t = Math.floor(this.options.big_border / 2);
            var i = 0;
            if (this.options.max_shown_items > 1 && this.options.hv_switch == 0) {
                if (this.options.border_on_off == 1) i = 8;
                else i = 11
            }
            this.slider_text.css({
                width: n - this.options.left_text_class_padding - t - i - this.options.minus_content_width + "px"
            });
            if (this.minus > 0) {
                $text_element.css({
                    left: this.minus + "px"
                })
            } else {
                $text_element.css({
                    left: "0px"
                })
            }
        },
        _set_text_div_width_ver: function() {
            if (!this.options.vert_text_mode) {
                this.slider_text.css({
                    width: this.max_size - this.options.minus_content_width + "px"
                })
            } else {
                if (this.under_600 == 0) this.slider_text.css({
                    left: this.ret_values.height + "px"
                })
            }
        },
        create_html: function() {
            this.items_counts = this.options.map.length;
            var t, n, r;
            var i = '<div class="' + this.options.container_class + '"><div class="image_more_info"><a href="#"><img alt="" src="' + this.options.plugin_url + 'images/more.png"></a></div>';
            this._start = -1;
            this._end = this.max_show - 1;
            var s, r;
            var o, u, a, f, l, c;
            for (t = 0; t < this.items_counts; t++) {
                if (this.options.map[t].upper_text_label_show == 1) this.have_text_label_up = 1;
                if (this.options.map[t].lower_text_label_show == 1) this.have_text_label_down = 1
            }
            if (this.have_text_label_up || this.have_text_label_down) this.have_text_label = 1;
            for (t = this._start; t < this._end; t++) {
                r = this.math._convert_position_to_image_array(0, t);
                n = this.options.map[r].image;
                o = 0;
                u = "";
                a = "";
                if (typeof this.options.map[r].upper_text_label_show != "undefined") o = this.options.map[r].upper_text_label_show;
                if (typeof this.options.map[r].upper_text_label != "undefined") u = this.options.map[r].upper_text_label;
                if (typeof this.options.map[r].upper_text_label_style != "undefined") a = this.options.map[r].upper_text_label_style;
                f = 0;
                l = "";
                c = "";
                if (typeof this.options.map[r].lower_text_label_show != "undefined") f = this.options.map[r].lower_text_label_show;
                if (typeof this.options.map[r].lower_text_label != "undefined") l = this.options.map[r].lower_text_label;
                if (typeof this.options.map[r].lower_text_label_style != "undefined") c = this.options.map[r].lower_text_label_style;
                s = this.math._calculate_child_coordinates_by_n(t);
                i += this._create_a_html_for_a_child(n, s.new_pos, r, o, u, a, f, l, c)
            }
            var h = this.options.max_shown_items * this.options.child_div_width;
            if (this.options.preload_all_images) {
                for (t = 0; t < this.items_counts; t++) {
                    e("<img/>")[0].src = this.options.map[t].image
                }
            }
            i += this._create_arrows();
            if (this.options.hv_switch) i += '<div class="clear"></div></div>';
            else i += "</div>";
            this.$element.prepend(i);
            this.$container = e("div." + this.options.container_class, this.$element);
            this.$container.mousedown(e.proxy(this._mouse_down, this));
            this.$container.mouseup(e.proxy(this._mouse_up, this));
            this.$element.mouseenter(e.proxy(this._mouse_enter_widget, this));
            this.$element.mouseleave(e.proxy(this._mouse_leave_widget, this));
            this.$container.mouseleave(e.proxy(this._mouse_leave, this));
            this.$container.mousemove(e.proxy(this._mouse_move, this));
            this.$container.on("touchstart", e.proxy(function(t) {
                t.preventDefault();
                var n = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                var r = 0;
                if (typeof n == "undefined" || typeof n.clientY == "undefined") r = 1;
                if (r == 0) {
                    this.first_touch_x = n.clientX;
                    this.first_touch_y = n.clientY;
                    this.first_scroll_y = e("body").scrollTop();
                    this.ignore_click_up2 = 0
                }
                this._mouse_down(n, 1)
            }, this));
            this.$container.on("touchend", e.proxy(function(e) {
                e.preventDefault();
                var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                this._mouse_up(t)
            }, this));
            this.$container.on("touchmove", e.proxy(function(t) {
                t.preventDefault();
                var n = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                n.touched = 1;
                var r = e(this.$container).offset();
                var i = n.pageX - r.left + this.minus - this.options.circle_left_offset;
                var s = n.pageY - r.top;
                while (1) {
                    if (this.options.hv_switch == 0 && this.options.enable_scroll_with_touchmove_on_horizontal_version == 0) break;
                    if (this.options.hv_switch == 1 && this.options.enable_scroll_with_touchmove_on_vertical_version == 0) break;
                    if (typeof n == "undefined" || typeof n.clientY == "undefined") break;
                    var o = 0;
                    if (n.clientX > 0 && n.clientY > 0) o = 1;
                    else break;
                    var u = Math.abs(n.clientX - this.first_touch_x);
                    var a = Math.abs(n.clientY - this.first_touch_y);
                    if (u > a) break;
                    if (a > 10) this.ignore_click_up2 = 1;
                    a = n.clientY - this.first_touch_y;
                    var f = this.first_scroll_y - a;
                    e("body").scrollTop(f);
                    return
                }
                if (i < e(this.$container).width() && i > 0 && s < e(this.$container).height() && s > 0) this._mouse_move(n);
                else this._mouse_leave(n)
            }, this))
        },
        _set_prettyPhoto_div_position: function() {
            this.prettyPhoto_left = this._return_middle_position_of_content() - Math.floor(this.options.big_pic_width / 2) + Math.floor(this.options.big_pic_width * this.options.prettyPhoto_start);
            var e = 0;
            if (this.options.top_offset > 0) e = this.options.top_offset - Math.floor(this.options.big_pic_height / 2);
            this.prettyPhoto_top = e + Math.floor(this.options.big_pic_height * this.options.prettyPhoto_start);
            if (this.options.hv_switch) {
                this.$prettyPhoto_div.css({
                    top: this.prettyPhoto_left + "px",
                    left: this.prettyPhoto_top + "px"
                })
            } else {
                this.$prettyPhoto_div.css({
                    left: this.prettyPhoto_left + "px",
                    top: this.prettyPhoto_top + "px"
                })
            }
        },
        _set_parent_window_size: function(t, n) {
            if (typeof t == "undefined") t = 0;
            if (typeof n == "undefined") n = 0;
            this.ret_values.height = 2 * this.options.top_offset + this.options.shadow_offset;
            var r = this.math._calculate_child_coordinates_by_n(this.max_show - 1, 0);
            if (this.options.minus_width > 0) r.new_pos -= this.options.minus_width;
            r.new_pos2 = r.new_pos + this.options.left_offset;
            wrapper_text_max_height = this.options.wrapper_text_max_height;
            var i = e(this.options.text_field_id_prefix + this.last_middle, this.$element);
            if (this.minus > 0 && this.last_middle > -1) {
                $block = e("div.content_slider_text_block_wrap", i);
                if ($block.length) {
                    if (typeof this.last_text_width == "undefined") this.last_text_width = i.width();
                    var s = this.get_window_width();
                    i.css("width", s - 10 - this.options.minus_content_width + "px")
                }
            }
            var o;
            if (this.options.hide_content == 0) o = i.height();
            else o = 0;
            var u = this.$parent_wrapper.height();
            var a = this.ret_values.height + o + 10;
            if (a > wrapper_text_max_height) wrapper_text_max_height = a;
            if (t) {
                if (!this.options.hv_switch) {
                    if (n != 0) {
                        this.$parent_wrapper.css({
                            width: n + "px"
                        });
                        this.parent_wrapper_width = n;
                        if (this.options.main_circle_position != 0) e(this.options.text_object, this.$element).css("width", n - this.options.minus_content_width + "px");
                        if (this.options.max_shown_items == 1 && this.options.hv_switch == 0) {
                            this.$container.css("left", "3px")
                        }
                    }
                    this.$element.css({
                        height: wrapper_text_max_height + "px"
                    });
                    return
                } else {
                    this.$element.css({
                        width: n - this.options.minus_content_width + "px"
                    });
                    return
                }
            }
            if (r.new_pos <= 0) return;
            this.container_height = this.ret_values.height;
            if (this.options.hv_switch) {
                this.$container.css({
                    height: r.new_pos + "px",
                    width: this.ret_values.height + "px"
                });
                this.$element.css({
                    height: r.new_pos2 + "px",
                    width: this.options.wrapper_text_max_height + "px"
                })
            } else {
                this.$container.css({
                    width: r.new_pos + "px",
                    height: this.ret_values.height + "px"
                });
                this.$element.css({
                    width: r.new_pos2 + "px",
                    height: wrapper_text_max_height + "px"
                });
                if (this.real_width == 0) this.real_width = r.new_pos2
            }
            this.ret_values.width = r.new_pos
        },
        _return_container_width_height: function() {
            return this.ret_values
        },
        _return_middle_position_of_content: function() {
            var e = this.math._calculate_child_coordinates_by_n(this.mid_elem + 1, 0);
            e.new_pos += Math.floor(this.options.big_pic_width / 2) + this.options.big_border;
            return e.new_pos
        },
        _create_arrows: function() {
            var e;
            if (this.options.hv_switch) {
                if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) {
                    e = '<div class="circle_slider_nav_left"><img src="' + this.options.plugin_url + 'images/left_vertical2.png" alt="left" /></div>';
                    e += '<div class="circle_slider_nav_right"><img src="' + this.options.plugin_url + 'images/right_vertical2.png" alt="right" /></div>'
                } else {
                    e = '<div class="circle_slider_nav_left"><img src="' + this.options.plugin_url + 'images/left_vertical.png" alt="left" /></div>';
                    e += '<div class="circle_slider_nav_right"><img src="' + this.options.plugin_url + 'images/right_vertical.png" alt="right" /></div>'
                }
            } else {
                if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) {
                    e = '<div class="circle_slider_nav_left"><img src="' + this.options.plugin_url + 'images/left2.png" alt="left" /></div>';
                    e += '<div class="circle_slider_nav_right"><img src="' + this.options.plugin_url + 'images/right2.png" alt="right" /></div>'
                } else {
                    e = '<div class="circle_slider_nav_left"><img src="' + this.options.plugin_url + 'images/left.png" alt="left" /></div>';
                    e += '<div class="circle_slider_nav_right"><img src="' + this.options.plugin_url + 'images/right.png" alt="right" /></div>'
                }
            }
            return e
        },
        _hide_arrows: function(t) {
            if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) move_more = 4;
            else move_more = 0;
            if (t) {
                this.hide_text(this.math._convert_position_to_image_array(0, this.mid_elem), 1);
                this.arrow_hidden_counter = 0;
                if (this.options.hv_switch) {
                    this.$left_arrow.animate({
                        top: this.options.arrow_width + move_more
                    }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_hidden, this));
                    this.$right_arrow.animate({
                        top: -this.options.arrow_width
                    }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_hidden, this))
                } else {
                    this.$left_arrow.animate({
                        left: this.options.arrow_width + move_more
                    }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_hidden, this));
                    this.$right_arrow.animate({
                        left: -this.options.arrow_width
                    }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_hidden, this))
                }
            } else {
                this.hide_text(this.math._convert_position_to_n(this.mid_elem - 2), 0);
                if (this.options.hv_switch) {
                    this.$left_arrow.css({
                        top: this.options.arrow_width + move_more
                    });
                    this.$right_arrow.css({
                        top: -this.options.arrow_width
                    })
                } else {
                    this.$left_arrow.css({
                        left: this.options.arrow_width + move_more
                    });
                    this.$right_arrow.css({
                        left: -this.options.arrow_width
                    })
                }
            }
        },
        _arrows_hidden: function() {
            if (this.arrow_hidden_counter >= 1) {
                this.func();
                this.arrow_hidden_counter = 0
            } else this.arrow_hidden_counter++
        },
        _arrows_shown: function() {
            this.clicked = 0
        },
        _show_arrows: function() {
            this.slider_state = 0;
            var t = 0;
            if (this.options.hv_switch) {
                if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) t = 34;
                this.$left_arrow.animate({
                    top: 0
                }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_shown, this));
                this.$right_arrow.animate({
                    top: t + "px"
                }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_shown, this))
            } else {
                if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) t = 4;
                this.$left_arrow.animate({
                    left: 0
                }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_shown, this));
                this.$right_arrow.animate({
                    left: t + "px"
                }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_shown, this))
            }
            this.show_text(this.math._convert_position_to_image_array(0, this.mid_elem));
            if (this.last_c.master_click == 1 || this.is_touch_device) this._start_main_hover();
            this.$element.trigger("open", [this.last_middle])
        },
        _align_arrows: function() {
            var e = this.math._calculate_arrows_positions();
            if (this.options.hv_switch) {
                this.$left_arrow_class.css({
                    top: e.first_arrow_x,
                    left: e.arrow_y
                });
                this.$right_arrow_class.css({
                    top: e.second_arrow_x,
                    left: e.arrow_y
                })
            } else {
                this.$left_arrow_class.css({
                    left: e.first_arrow_x,
                    top: e.arrow_y
                });
                this.$right_arrow_class.css({
                    left: e.second_arrow_x,
                    top: e.arrow_y
                })
            }
        },
        _set_arrows_events: function() {
            var t = this;
            this.$prettyPhoto_img.on("touchstart", function(t) {
                t.preventDefault();
                t.stopPropagation();
                e(this).click()
            });
            this.$prettyPhoto_img.on("touchend", function(e) {
                e.preventDefault();
                e.stopPropagation()
            });
            this.$prettyPhoto_img.mouseup(function(e) {
                e.preventDefault();
                e.stopPropagation()
            });
            this.$prettyPhoto_img.mousedown(function(e) {
                e.preventDefault();
                e.stopPropagation()
            });
            this.$prettyPhoto_img.click(function(n) {
                var r = t.$prettyPhoto_a.attr("rel");
                if (r == "prettyPhoto") {
                    var i = t.$prettyPhoto_a.attr("href");
                    n.preventDefault();
                    n.stopPropagation();
                    if (t.is_auto_play == 1) {
                        t.dismiss_auto_play = 1;
                        t.prettyPhoto_open_status = 1
                    }
                    e.fn.prettyPhoto({
                        callback: function() {
                            t.prettyPhoto_open_status = 0
                        }
                    });
                    e.prettyPhoto.open(i)
                }
            });
            this.$left_arrow_class.click(e.proxy(function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.public_go_right()
            }, this));
            this.$right_arrow_class.click(e.proxy(function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.public_go_left()
            }, this));
            this.$left_arrow_class.on("touchstart", e.proxy(function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.public_go_right()
            }, this));
            this.$left_arrow_class.on("touchend", e.proxy(function(e) {
                e.preventDefault();
                e.stopPropagation()
            }, this));
            this.$right_arrow_class.on("touchstart", e.proxy(function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.public_go_left()
            }, this));
            this.$right_arrow_class.on("touchend", e.proxy(function(e) {
                e.preventDefault();
                e.stopPropagation()
            }, this));
            this.$left_arrow_class.mouseup(e.proxy(function(e) {
                e.preventDefault();
                e.stopPropagation()
            }, this));
            this.$right_arrow_class.mousedown(e.proxy(function(e) {
                e.preventDefault();
                e.stopPropagation()
            }, this));
            this.$left_arrow_class.mousedown(e.proxy(function(e) {
                e.preventDefault();
                e.stopPropagation()
            }, this));
            this.$right_arrow_class.mousedown(e.proxy(function(e) {
                e.preventDefault();
                e.stopPropagation()
            }, this))
        },
        hide_text: function(t, n) {
            $text_element = e(this.options.text_object, this.$element);
            this.last_parent_height = this.$parent_wrapper.height();
            if (this.options.small_resolution_max_height == 0 && this.options.hv_switch && this.under_600) this.$parent_wrapper.css("height", this.last_parent_height + "px");
            if (n) $text_element.fadeOut();
            else $text_element.hide()
        },
        show_text: function(t, n, r) {
            if (typeof n == "undefined") n = 0;
            if (typeof r == "undefined") r = 0;
            this.last_middle = t;
            if (this.options.keep_on_top_middle_circle) {
                var i = this.math._convert_position_to_n(this.mid_elem);
                this.items[i].$element.css("z-index", this.max_show)
            }
            if (typeof this.options.map[t].link_url != "undefined") {
                this.$prettyPhoto_a.attr("href", this.options.map[t].link_url)
            } else {
                this.$prettyPhoto_a.attr("href", "")
            }
            if (typeof this.options.map[t].link_rel != "undefined") {
                this.$prettyPhoto_a.attr("rel", this.options.map[t].link_rel)
            } else {
                this.$prettyPhoto_a.attr("rel", "")
            }
            if (typeof this.options.map[t].link_target != "undefined") {
                if (this.options.map[t].link_target == "") this.options.map[t].link_target = "_self";
                this.$prettyPhoto_a.attr("target", this.options.map[t].link_target)
            } else {
                this.$prettyPhoto_a.attr("target", "_self")
            }
            if (this.options.hide_content == 1) {
                if (typeof this.started == "undefined") {
                    this.started = 1;
                    this.hashchange()
                }
                return
            }
            var s = e(this.options.text_field_id_prefix + t, this.$element);
            var o = e("div.circle_slider_text_wrapper_v2", s);
            if (o.length) this.options.vert_text_mode = 1;
            else this.options.vert_text_mode = 0;
            var u = e("." + this.options.left_text_class, s);
            if (this.options.small_resolution_max_height == 0) this.$parent_wrapper.css("height", "");
            if (n == 0) s.fadeIn();
            if (this.options.hv_switch == 0) {
                if (this.minus > 0) this._set_parent_window_size(1);
                else {
                    if (this.options.automatic_height_resize) {
                        this.ret_values = {
                            height: 0,
                            width: 0
                        };
                        this.ret_values.height = 2 * this.options.top_offset + this.options.shadow_offset;
                        var a;
                        if (this.options.hide_content == 0) a = s.height();
                        else a = 0;
                        var f = this.$parent_wrapper.height();
                        var l = this.ret_values.height + a + 10;
                        if (l != this.last_height) {
                            if (l < this.options.wrapper_text_max_height) l = this.options.wrapper_text_max_height;
                            this.last_height = l;
                            this.$element.animate({
                                height: l + "px"
                            }, 300, "linear")
                        }
                    }
                }
            }
            if (this.options.hv_switch) {
                if (this.options.vert_text_mode) {
                    var c = s.width();
                    if (c >= this.max_size || r) {
                        u.css({
                            width: this.max_size * 2 - this.options.minus_content_width + "px"
                        })
                    }
                    var h = u.height();
                    if (this.under_600 == 0) s.css({
                        top: this.mid - h - this.options.left_text_class_padding + "px"
                    })
                } else {
                    $block = e("div.content_slider_text_block_wrap", s);
                    if ($block.length) {
                        var p;
                        if (this.under_600 == 0) {
                            var d = this.get_window_width();
                            if (d > this.options.wrapper_text_max_height) p = this.options.wrapper_text_max_height - this.container_height - 2;
                            else p = d - this.container_height - 20
                        } else p = this.options.big_pic_width;
                        s.css({
                            width: p - this.options.minus_content_width + "px"
                        })
                    } else s.css({
                        width: ""
                    });
                    var h = s.height();
                    var v = this.mid - Math.floor(h / 2);
                    if (v < 0) v = 0;
                    if (this.under_600 == 0) s.css({
                        top: v + "px"
                    })
                }
            } else {
                if (this.minus > 0) {
                    var d = this.last_resolution;
                    $block = e("div.content_slider_text_block_wrap", s);
                    if ($block.length) {
                        if (typeof this.last_text_width == "undefined") this.last_text_width = s.width();
                        s.css("width", d - 10 - this.options.minus_content_width + "px")
                    }
                }
            }
            if (typeof this.started == "undefined") {
                this.started = 1;
                this.hashchange()
            }
        },
        _preset_all_children_parameters: function(t, n) {
            var r;
            var i;
            this.do_animate = t;
            var s;
            var o = new Array;
            for (s = 0; s < this.max_show; s++) {
                r = this.math._calculate_child_coordinates_by_n(s, this.operation);
                if (t) i = this.math._calculate_method_for_child_by_n(s, n);
                else i = 0;
                if (this.options.keep_on_top_middle_circle || this.options.dinamically_set_position_class) o[s] = {
                    i: s,
                    pos: r.new_pos
                };
                this.items[s]._set_pos_size(r.new_pos, this.speed, r.new_y_pos, r.new_siz.width, r.new_siz.height, r.new_border, i, e.proxy(this._animation_done, this))
            }
            if (this.options.keep_on_top_middle_circle || this.options.dinamically_set_position_class) {
                o.sort(function(e, t) {
                    return e.pos - t.pos
                });
                var u = o.length;
                var a, f = this.mid_elem + 1,
                    l;
                for (s = 0; s < u; s++) {
                    a = o[s].i;
                    if (this.options.dinamically_set_position_class) {
                        this.items[a].$element.removeClass("all_around_position_" + this.items[a].position_in_slider);
                        this.items[a].$element.addClass("all_around_position_" + s)
                    }
                    this.items[a].position_in_slider = s;
                    if (this.options.keep_on_top_middle_circle) {
                        if (s < f) l = s;
                        if (s == f) l = u;
                        if (s > f) l = u - s - 1;
                        this.items[a].$element.css("z-index", l)
                    }
                }
            }
        },
        _stop_children: function() {
            for (i = 0; i < this.number_of_items; i++) {
                this.items[i].reset_positions()
            }
            if (this.prettyPhoto_status) {
                if (this.prettyPhoto_status == 1) {
                    this.$prettyPhoto_div.stop();
                    this.$prettyPhoto_img.stop()
                }
                this._end_main_hover2();
                this.prettyPhoto_status = 0;
                this.hover_status = 0;
                this.mouse_in_animation = 0;
                this.mouse_out_animation = 0
            }
        },
        _mouse_down: function(e, t) {
            if (this.ignore_click_down) {
                this.ignore_click_down = 0;
                return
            }
            if (typeof t == "undefined") t = 0;
            if (t == 0)
                if (typeof e != "undefined") e.preventDefault();
            this.mouse_moved = 0;
            if (this.hover_status != 0) this._end_main_hover2();
            if (typeof e != "undefined")
                if (typeof e.pageX != "undefined") {
                    if (this.options.hv_switch) var n = e.pageY - this.offset - this.options.circle_left_offset;
                    else var n = e.pageX - this.offset + this.minus - this.options.circle_left_offset
                }
            var r = n - this.last_mouse_x;
            this.last_mouse_x = n;
            this.slider_state = 1;
            this.mouse_state = 1;
            if (!this.clicked) {
                this.show_mouse_move = 1;
                this.clicked = 1
            }
            var i = this.$container.offset();
            if (this.options.hv_switch) {
                this.offset = i.top
            } else {
                this.offset = i.left + this.minus
            }
            this.was_gone = 0
        },
        _mouse_up: function(e) {
            if (this.ignore_click_up) {
                this.ignore_click_up = 0;
                return
            }
            this.mouse_state = 0;
            this._stop_children();
            if (this.show_mouse_move) {
                var t = 1;
                this.show_mouse_move = 0;
                var n = 0;
                if (this.ignore_click_up2) {
                    this.ignore_click_up2 = 0;
                    this.slider_state = 0;
                    this.clicked = 0;
                    n = 1
                }
                if (Math.abs(this.math.sum_movement) == 0 && !this.was_gone && n == 0) {
                    this.func = 0;
                    t = 0;
                    if (this.options.hv_switch) var r = this.math._change_master_position_by_x(e.pageY - this.offset - this.options.circle_left_offset);
                    else var r = this.math._change_master_position_by_x(e.pageX - this.offset + this.minus - this.options.circle_left_offset);
                    this.last_c = r;
                    if (r.master_click && n == 0) {
                        var i = 38;
                        var s = 20;
                        if (this.options.border_on_off == 1 && this.options.use_thin_arrows == 0) {
                            i = 48;
                            s = 30
                        }
                        if (r.dist_right > i && r.dist_left > s) {
                            if (this.options.middle_click == 1) {
                                t = 1;
                                this.going_counter = -1;
                                r.pos = 1
                            }
                            if (this.options.middle_click == 2) {
                                t = 1;
                                this.going_counter = 1;
                                r.pos = -1
                            }
                            if (this.options.middle_click == 0 || this.options.middle_click == 3) {
                                this.slider_state = 0;
                                this.clicked = 0;
                                if (this.options.middle_click == 3) {
                                    var o = "";
                                    var u = 0;
                                    if (typeof this.options.map[this.last_middle].main_link != "undefined") o = this.options.map[this.last_middle].main_link;
                                    if (typeof this.options.map[this.last_middle].main_link_target != "undefined") u = this.options.map[this.last_middle].main_link_target;
                                    if (o != "") {
                                        if (u == 0) window.location = o;
                                        if (u == 1) window.open(o)
                                    }
                                }
                            }
                        } else {
                            this.slider_state = 0;
                            this.clicked = 0
                        }
                    }
                    this.speed = (this.mid_elem - Math.abs(r.pos) + 1) * this.options.moving_speed + this.options.moving_speed_offset;
                    if (!t) this.going_counter = -r.pos;
                    this.keep_going = 1;
                    if (r.pos < 0) {
                        this.click = 2;
                        if (r.pos < -1) this.operation = 1;
                        else this.operation = 0;
                        this.func = this.go_right;
                        this._hide_arrows(1)
                    }
                    if (r.pos > 0) {
                        this.click = 1;
                        if (r.pos > 1) this.operation = 1;
                        else this.operation = 0;
                        this.func = this.go_left;
                        this._hide_arrows(1)
                    }
                    if (r.pos == 0) {
                        this.keep_going = 0
                    }
                    this._before_moving(this.going_counter);
                    return
                } else {
                    this._reorder();
                    this.click = 0
                }
            }
        },
        _before_moving: function(e) {
            if (this.options.keep_on_top_middle_circle) {
                e = e * -1;
                var t = this.math._convert_position_to_n(this.mid_elem + e);
                this.items[t].$element.css("z-index", 100)
            }
        },
        _arrow_mouse_up: function() {
            this.keep_going = 1;
            this.click = 0;
            this.armd = 0
        },
        _arrow_mouse_down: function() {
            this.armd = 1;
            this.clicked = 1
        },
        _arrow_mouse_leave: function() {
            if (this.armd) {
                this.clicked = 0;
                this.armd = 0
            }
        },
        _mouse_move: function(t) {
            this.mouse_moved = 1;
            if (typeof t.touched == "undefined") t.preventDefault();
            var n = this.$container.offset();
            if (this.options.hv_switch) {
                this.offset = n.top
            } else {
                this.offset = n.left + this.minus
            }
            var r = e(this.$element).offset();
            this.y_offset = r.top;
            var i, s;
            if (typeof t != "undefined")
                if (typeof t.pageX != "undefined") {
                    if (this.options.hv_switch) i = t.pageY - this.offset - this.options.circle_left_offset;
                    else i = t.pageX - this.offset + this.minus - this.options.circle_left_offset;
                    s = i - this.last_mouse_x
                }
            if (this.show_mouse_move && this.clicked) {
                this._move_all(s * this.options.movement_coefficient);
                if (Math.abs(this.sum_movement) >= 1 && !this.was_gone) {
                    this.was_gone = 1;
                    this._hide_arrows(0)
                }
            }
            this.last_mouse_x = i;
            if (this.show_mouse_move == 1 || this.slider_state == 1) return;
            var o = {
                pos: 0,
                master_click: 0
            };
            if (typeof t != "undefined")
                if (typeof t.pageX != "undefined") {
                    if (this.options.hv_switch) {
                        i = t.pageY - this.y_offset - this.options.circle_left_offset
                    } else {
                        if (this.minus == 0) {
                            i = t.pageX - this.x_offset - this.options.circle_left_offset
                        } else {
                            i = t.pageX - this.parent_x_offset + this.minus - this.options.circle_left_offset
                        }
                    }
                    o = this.math._convert_x_position_to_n(i)
                }
            if (o.master_click == 1) {
                if (this.hover_status == 2 || this.mouse_in_animation == 1) return;
                if (this.mouse_out_animation == 1) {
                    this.$prettyPhoto_div.stop();
                    this.$prettyPhoto_img.stop();
                    this.mouse_out_animation = 0
                }
                this.hover_status = 1;
                this.mouse_in_animation = 1;
                this._start_main_hover()
            } else {
                if (this.hover_status == 2 || this.hover_status == 1 && this.mouse_out_animation == 0) this._fake_mouse_leave()
            }
        },
        _start_main_hover: function() {
            if (this.$prettyPhoto_a.attr("href") == "") return;
            var t = this.prettyPhoto_left - this.options.prettyPhoto_movement - 10;
            var n = this.prettyPhoto_top - this.options.prettyPhoto_movement - 10;
            var r = this.options.prettyPhoto_width + 3;
            this.prettyPhoto_status = 1;
            if (this.options.hv_switch == 0) {
                this.$prettyPhoto_div.animate({
                    left: t + "px",
                    top: n + "px"
                }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._ending_main_hover, this))
            } else {
                this.$prettyPhoto_div.animate({
                    left: n + "px",
                    top: t + "px"
                }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._ending_main_hover, this))
            }
            this.$prettyPhoto_img.animate({
                width: r + "px",
                padding: "11px"
            }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing)
        },
        _ending_main_hover: function() {
            var t = this.prettyPhoto_left - this.options.prettyPhoto_movement;
            var n = this.prettyPhoto_top - this.options.prettyPhoto_movement;
            var r = this.options.prettyPhoto_width;
            if (this.options.hv_switch == 0) {
                this.$prettyPhoto_div.animate({
                    left: t + "px",
                    top: n + "px"
                }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._end_main_hover, this))
            } else {
                this.$prettyPhoto_div.animate({
                    left: n + "px",
                    top: t + "px"
                }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._end_main_hover, this))
            }
            this.$prettyPhoto_img.animate({
                width: r + "px",
                padding: "10px"
            }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing)
        },
        _end_main_hover: function() {
            this.prettyPhoto_status = 2;
            this.hover_status = 2;
            this.mouse_in_animation = 0
        },
        _fake_mouse_leave: function() {
            if (this.$prettyPhoto_a.attr("href") == "") return;
            if (this.mouse_in_animation == 1) {
                this.$prettyPhoto_div.stop();
                this.$prettyPhoto_img.stop();
                this.mouse_in_animation = 0
            }
            this.hover_status = 1;
            this.mouse_out_animation = 1;
            this._end_main_hover2()
        },
        _end_main_hover2: function() {
            var t = this.prettyPhoto_left;
            var n = this.prettyPhoto_top;
            this.prettyPhoto_status = 1;
            if (this.options.hv_switch == 0) {
                this.$prettyPhoto_div.animate({
                    left: t + "px",
                    top: n + "px"
                }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._main_hover_ended, this))
            } else {
                this.$prettyPhoto_div.animate({
                    left: n + "px",
                    top: t + "px"
                }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._main_hover_ended, this))
            }
            this.$prettyPhoto_img.animate({
                width: "0px",
                padding: "0px"
            }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing)
        },
        _main_hover_ended: function() {
            this.prettyPhoto_status = 0;
            this.hover_status = 0;
            this.mouse_out_animation = 0
        },
        _mouse_enter_widget: function(e) {
            if (this.is_auto_play == 1) {
                this.dismiss_auto_play = 1
            }
        },
        _mouse_leave_widget: function(e) {
            if (this.prettyPhoto_open_status == 0) this.dismiss_auto_play = 0
        },
        _mouse_leave: function(e) {
            if (this.show_mouse_move && !this.click) {
                this.show_mouse_move = 0;
                this._reorder();
                this.click = 0;
                this.show_mouse_move = 0;
                this.mouse_state = 0;
                for (i = 0; i < this.number_of_items; i++) {
                    this.items[i].value_reset()
                }
            }
            if (this.hover_status == 2 || this.hover_status == 1 && this.mouse_out_animation == 0) this._fake_mouse_leave()
        },
        _reorder: function() {
            var e = this.math.sum_movement;
            this.speed = (this.mid_elem + 1) * this.options.moving_speed + this.options.moving_speed_offset;
            if (Math.abs(this.math.sum_movement) < this.options.child_div_width / 2) {
                this.math._clear_movement();
                this._preset_all_children_parameters(1, 0, 1)
            } else {
                this.math._clear_movement();
                if (e < 0) {
                    this.math._rotate_right(1);
                    this._preset_all_children_parameters(1, 0, 1)
                }
                if (e > 0) {
                    this.math._rotate_left(1);
                    this._preset_all_children_parameters(1, 1, 1)
                }
            }
            this.sum_movement = 0
        },
        _create_a_html_for_a_child: function(e, t, n, r, i, s, o, u, a) {
            var f = "";
            var l = "",
                c = "";
            if (a != "") a += " ";
            if (s != "") s += " ";
            var h = 0;
            var p = 0;
            if (this.options.activate_border_div == 0 && this.options.border_on_off == 1) {
                h = 10;
                p = 10
            }
            if (this.options.activate_border_div) f = '<div class="' + this.options.border_class + '"></div>';
            if (this.options.hv_switch == 0) {
                if (this.have_text_label_up) {
                    l = '<div style="left: ' + t + "px; width: " + (this.options.small_pic_width + p) + 'px;" class="all_around_text_up"><span style=\'' + s + "width: " + (this.options.small_pic_width + p) + 'px;\' class="all_around_text_span_up">' + i + "</span></div>"
                }
                if (this.have_text_label_down) {
                    c = '<div style="left: ' + t + "px; width: " + (this.options.small_pic_width + p) + 'px;" class="all_around_text_down"><span style=\'' + a + "width: " + (this.options.small_pic_width + p) + 'px;\' class="all_around_text_span_down">' + u + "</span></div>"
                }
            } else {
                if (this.have_text_label_up) {
                    l = '<div style="left: 0px; top: ' + t + "px; height: " + (this.options.small_pic_height + h) + 'px;" class="all_around_text_up"><span style=\'' + s + '\' class="all_around_text_span_up">' + i + "</span></div>"
                }
                if (this.have_text_label_down) {
                    c = '<div style="left: 0px; top: ' + t + "px; height: " + (this.options.small_pic_height + h) + 'px;" class="all_around_text_down"><span style=\'' + a + '\' class="all_around_text_span_down">' + u + "</span></div>"
                }
            }
            var d;
            if (this.options.hv_switch == 0) {
                d = '<div class="' + this.options.picture_class + " all_around_circle_" + n + '" style="left: ' + t + 'px;">' + f + '<img src="' + e + '" class="all_around_img_' + n + '" /></div>' + l + c
            } else {
                d = '<div class="' + this.options.picture_class + " all_around_circle_" + n + '" style="top: ' + t + 'px;">' + f + '<img src="' + e + '" class="all_around_img_' + n + '" /></div>' + l + c
            }
            return d
        },
        left_clicked: function(e) {
            this.speed = (this.mid_elem + 1) * this.options.moving_speed + this.options.moving_speed_offset;
            if (typeof e != "undefined") e.preventDefault();
            this.func = this.go_left;
            this.click = 1;
            this.going_counter = -1;
            this.$element.trigger("next");
            this._animation_begin()
        },
        right_clicked: function(e) {
            this.speed = (this.mid_elem + 1) * this.options.moving_speed + this.options.moving_speed_offset;
            if (typeof e != "undefined") e.preventDefault();
            this.func = this.go_right;
            this.click = 2;
            this.going_counter = 1;
            this.$element.trigger("prev");
            this._animation_begin()
        },
        left_clicked_n: function(e, t) {
            this.speed = (this.mid_elem + 1) * this.options.moving_speed + this.options.moving_speed_offset;
            if (typeof t != "undefined") t.preventDefault();
            this.func = this.go_left;
            this.click = 1;
            this.going_counter = 0 - e;
            this.$element.trigger("next");
            this._animation_begin()
        },
        right_clicked_n: function(e, t) {
            this.speed = (this.mid_elem + 1) * this.options.moving_speed + this.options.moving_speed_offset;
            if (typeof t != "undefined") t.preventDefault();
            this.func = this.go_right;
            this.click = 2;
            this.going_counter = e;
            this.$element.trigger("prev");
            this._animation_begin()
        },
        go_right: function() {
            if (this.lock == 1) return;
            this.lock = 1;
            this.math.sum_movement = this.sum_movement = 0;
            if (this.keep_going == 1 && this.going_counter > 0) this.going_counter--;
            this.anim_counter = 0;
            this._set_first_left();
            this.math._rotate_left(1);
            this._preset_all_children_parameters(1, 1)
        },
        go_left: function() {
            if (this.lock == 1) return;
            this.lock = 1;
            this.math.sum_movement = this.sum_movement = 0;
            if (this.keep_going == 1 && this.going_counter < 0) this.going_counter++;
            this.anim_counter = 0;
            this._set_first_right();
            this.math._rotate_right(1);
            this._preset_all_children_parameters(1, 0)
        },
        _animation_begin: function() {
            this.show_mouse_move = 0;
            this.anim_counter = 0;
            this.keep_going = 1;
            this.do_animate = 1;
            this._before_moving(this.going_counter);
            this._hide_arrows(1)
        },
        _animation_done: function() {
            var e;
            if (this.do_animate) e = this.max_show + (this.max_show - 3);
            else e = this.max_show + (this.max_show - 2);
            if (this.anim_counter >= e) {
                this.anim_counter = 0;
                this.lock = 0;
                if (this.click == 1) {
                    if (this.keep_going != 0) {
                        if (this.going_counter != 0) {
                            this.operation = 0;
                            if (this.going_counter < -1) this.operation = 1;
                            this.go_left()
                        } else {
                            this.keep_going = 0;
                            this.click = 0
                        }
                    } else {
                        this.go_left()
                    }
                }
                if (this.click == 2) {
                    if (this.keep_going != 0) {
                        if (this.going_counter != 0) {
                            this.operation = 0;
                            if (this.going_counter > 1) this.operation = 1;
                            this.go_right()
                        } else {
                            this.keep_going = 0;
                            this.click = 0
                        }
                    } else {
                        this.go_right()
                    }
                }
                if (this.click == 0) {
                    this._show_arrows();
                    this.operation = 0
                }
                return
            }
            this.anim_counter++
        },
        _move_all: function(e) {
            var t = 0;
            this._set_first_left();
            this._set_first_right();
            while (Math.abs(e) >= this.options.child_div_width) {
                if (e > 0) {
                    this.math._add_movement(this.options.child_div_width);
                    this._set_first_left();
                    e -= this.options.child_div_width
                } else {
                    this.math._add_movement(-this.options.child_div_width);
                    this._set_first_right();
                    e += this.options.child_div_width
                }
            }
            this.math._add_movement(e);
            if (e > 0) {
                this._set_first_left();
                t = 1
            } else {
                this._set_first_right();
                t = 0
            }
            this._preset_all_children_parameters(0, t);
            this.sum_movement = this.math.sum_movement
        },
        _set_first_right: function() {
            var e = this.math._next_right_image();
            this.items[this.math._next_right_n()]._set_img(this.options.map[e].image, e)
        },
        _set_first_left: function() {
            var e = this.math._next_left_image();
            this.items[this.math._next_left_n()]._set_img(this.options.map[e].image, e)
        },
        start_auto_play: function() {
            var e = this;
            this.dismiss_auto_play = 0;
            this.is_auto_play = 1;
            if (this.options.auto_play_direction == 1) this.timeout_autoplay_handler = setInterval(function() {
                e.public_go_left(1)
            }, e.options.auto_play_pause_time);
            else this.timeout_autoplay_handler = setInterval(function() {
                e.public_go_right(1)
            }, e.options.auto_play_pause_time)
        },
        stop_auto_play: function() {
            this.dismiss_auto_play = 1;
            if (this.is_auto_play == 1) {
                clearInterval(this.timeout_autoplay_handler)
            }
            this.is_auto_play = 0
        },
        get_auto_play_status: function() {
            return this.is_auto_play
        },
        get_number_of_current_slide: function() {
            return this.last_middle
        }
    };
    r.prototype = {
        _convert_n_to_position: function(e) {
            return this._windowing(this.div_window_lenght, e - this.position_n_offset) + this.beginning_position_number
        },
        _convert_position_to_n: function(e) {
            return this._windowing(this.div_window_lenght, e - this.beginning_position_number + this.position_n_offset)
        },
        _convert_position_to_image_array: function(e, t) {
            return this._windowing(this.image_array_lenght, t - this.beginning_position_number + this.n_img_offset + this.position_n_offset + e * this.div_window_lenght)
        },
        _next_left_image: function() {
            return this._convert_position_to_image_array(0, this.beginning_position_number)
        },
        _next_right_image: function() {
            return this._convert_position_to_image_array(0, this.visible_window_lenght)
        },
        _next_left_n: function() {
            return this._convert_position_to_n(this.beginning_position_number)
        },
        _next_right_n: function() {
            return this._convert_position_to_n(this.visible_window_lenght)
        },
        _rotate_left: function(e) {
            var t = this.position_n_offset;
            this.position_n_offset = this._windowing(this.div_window_lenght, this.position_n_offset - e);
            if (t < this.position_n_offset) {
                this.n_img_offset = this._windowing(this.image_array_lenght, this.n_img_offset - Math.floor((Math.abs(e) + this.div_window_lenght) / this.div_window_lenght) * this.div_window_lenght)
            }
        },
        _rotate_right: function(e) {
            var t = this.position_n_offset;
            this.position_n_offset = this._windowing(this.div_window_lenght, this.position_n_offset + e);
            if (t > this.position_n_offset) {
                this.n_img_offset = this._windowing(this.image_array_lenght, this.n_img_offset + Math.floor((Math.abs(e) + this.div_window_lenght) / this.div_window_lenght) * this.div_window_lenght)
            }
        },
        _change_master_position_by_x: function(e) {
            this.sum_movement = 0;
            var t = this.mid_elem * this.element_width;
            var n = t + this.master_element_width + 2 * this.big_border + 2 * this.arrow_width;
            var r;
            if (e <= t) {
                r = Math.floor(e / this.element_width);
                r = this.mid_elem - r;
                return {
                    pos: -r,
                    master_click: 0
                }
            }
            if (e < n) {
                return {
                    pos: 0,
                    master_click: 1,
                    dist_left: e - t,
                    dist_right: n - e
                }
            }
            e = e - n + this.element_width;
            r = Math.floor(e / this.element_width);
            return {
                pos: r,
                master_click: 0
            }
        },
        _convert_x_position_to_n: function(e) {
            var t = this.mid_elem * this.element_width;
            var n = t + this.master_element_width + 2 * this.big_border + 2 * this.arrow_width;
            var r;
            if (e <= t) {
                r = Math.floor(e / this.element_width);
                r = this.mid_elem - r;
                return {
                    pos: -r,
                    master_click: 0
                }
            }
            if (e < n) {
                return {
                    pos: 0,
                    master_click: 1
                }
            }
            e = e - n + this.element_width;
            r = Math.floor(e / this.element_width);
            return {
                pos: r,
                master_click: 0
            }
        },
        _calculate_child_size_by_ratio: function(e) {
            var t = this.big_pic_width - this.small_pic_width;
            var n = this.big_pic_height - this.small_pic_height;
            var r;
            var i;
            t = t * e;
            t += this.small_pic_width;
            n = n * e;
            n += this.small_pic_height;
            r = Math.floor((this.big_pic_width - this.small_pic_width) / 2) - Math.floor(t / 2);
            i = Math.floor((this.big_pic_height - this.small_pic_height) / 2) - Math.floor(n / 2);
            return {
                width: t,
                height: n,
                margin_left: r,
                margin_top: i
            }
        },
        _calculate_arrows_positions: function() {
            var e = this.big_border;
            if (this.parent_this.options.activate_border_div) e = 0;
            var t = this.mid_elem * this.element_width + Math.ceil(e) + this.left_offset + this.parent_this.options.circle_left_offset - 1;
            var n = 0;
            if (this.parent_this.options.border_on_off == 0 || this.parent_this.options.use_thin_arrows == 1) n = 15;
            var r = this.top_offset - Math.ceil(this.arrow_height / 2) - n;
            if (this.parent_this.options.activate_border_div) {
                t += this.big_border;
                r -= this.big_border
            }
            if (this.parent_this.options.border_on_off == 0 || this.parent_this.options.use_thin_arrows == 1) {
                t -= e + 7;
                r -= Math.ceil(e / 2) + 1
            }
            var i = this.mid_elem * this.element_width + this.master_element_width + this.arrow_width + e + this.left_offset + this.parent_this.options.circle_left_offset + 1;
            if (this.parent_this.options.border_on_off == 0 && this.parent_this.options.use_thin_arrows == 0) {
                i -= Math.ceil(e) + 2
            }
            if (this.parent_this.options.use_thin_arrows == 1) {
                i -= Math.ceil(e) - 1
            }
            if (this.parent_this.options.border_on_off == 0 || this.parent_this.options.use_thin_arrows == 1) {
                i += 1
            }
            if (this.parent_this.options.activate_border_div) i -= this.big_border;
            return {
                first_arrow_x: t,
                second_arrow_x: i,
                arrow_y: r
            }
        },
        _calculate_child_coordinates_by_n: function(e, t) {
            var n = this._convert_n_to_position(e);
            if (typeof t == "undefined") t = 0;
            var r = Math.abs(this.sum_movement);
            var i = r / this.element_width;
            var s = 1 - i;
            var o = 0;
            var u = this.top_offset;
            var a;
            var f;
            var l = this.small_border;
            var c = this.element_width;
            var h = this.master_element_width;
            var p = this.master_element_width - this.element_width;
            var d = n * c + this.sum_movement;
            var v = i * p;
            var m = s * p;
            var g = this.element_width - this.small_pic_width;
            var y = this.master_element_width + 2 * this.arrow_width;
            var b = y - this.element_width;
            var w = this.element_width + i * b;
            var E = this.element_width + s * b;
            var S = i * this.arrow_width;
            var x = m + s * (this.arrow_width + g + 2 * this.big_border);
            var T = p + 2 * this.arrow_width;
            var N = s * this.arrow_width;
            var C = i * g;
            if (this.sum_movement <= 0) {
                if (n < this.mid_elem) {
                    o = d;
                    a = 0;
                    u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                }
                if (n == this.mid_elem) {
                    l = this.small_border + (this.big_border - this.small_border) * s;
                    o = d + N;
                    if (!t || this.mode == 2) {
                        a = s;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - (this.master_element_height - this.small_pic_height) / 2 * s - this.small_border - (this.big_border - this.small_border) * s
                    } else {
                        a = 0;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                    }
                }
                if (n == this.mid_elem + 1) {
                    l = this.small_border + (this.big_border - this.small_border) * i;
                    o = d + E - this.element_width + (g + this.small_border) * s + this.arrow_width * i;
                    if (!t || this.mode == 2) {
                        a = i;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - (this.master_element_height - this.small_pic_height) / 2 * i - this.small_border
                    } else {
                        a = 0;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                    }
                }
                if (n > this.mid_elem + 1) {
                    o = d + T + g + this.small_border;
                    a = 0;
                    u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                }
            } else {
                if (n < this.mid_elem) {
                    o = d;
                    a = 0;
                    u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                }
                if (n == this.mid_elem) {
                    l = this.small_border + (this.big_border - this.small_border) * s;
                    o = d + (2 * this.arrow_width + this.master_element_width + g + this.small_border - this.element_width) - s * (1 * this.arrow_width + this.master_element_width + g + this.big_border - this.small_border - this.element_width);
                    if (!t || this.mode == 2) {
                        a = s;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - (this.master_element_height - this.small_pic_height) / 2 * s - this.small_border - (this.big_border - this.small_border) * s
                    } else {
                        a = 0;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                    }
                }
                if (n == this.mid_elem - 1) {
                    l = this.small_border + (this.big_border - this.small_border) * i;
                    o = d + S;
                    if (!t || this.mode == 2) {
                        a = i;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - (this.master_element_height - this.small_pic_height) / 2 * i - this.small_border
                    } else {
                        a = 0;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                    }
                }
                if (n > this.mid_elem) {
                    o = d + T + g + this.small_border;
                    a = 0;
                    u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                }
            }
            f = this._calculate_child_size_by_ratio(a);
            return {
                new_pos: o + this.left_offset + this.parent_this.options.circle_left_offset,
                new_y_pos: u,
                new_border: l,
                new_siz: f
            }
        },
        _calculate_method_for_child_by_n: function(e, t) {
            var n = this._convert_n_to_position(e);
            if (n == -1 && t == 1) return 0;
            if (n == this.visible_window_lenght && t == 0) return 0;
            return 1
        },
        _add_movement: function(e) {
            this.sum_movement += e;
            if (Math.abs(this.sum_movement) >= this.element_width) {
                if (this.sum_movement >= 0) {
                    this._rotate_left(Math.floor(Math.abs(this.sum_movement) / this.element_width));
                    this.sum_movement = this.sum_movement % this.element_width
                } else {
                    this._rotate_right(Math.floor(Math.abs(this.sum_movement) / this.element_width));
                    this.sum_movement = this.sum_movement % this.element_width
                }
            }
        },
        _clear_movement: function() {
            this.sum_movement = 0
        },
        _windowing: function(e, t) {
            return (e + t % e) % e
        }
    };
    e.fn.content_slider = function(t, r) {
        var i = e(this),
            s = i.data("tooltip"),
            o = typeof t == "object" && t;
        s || i.data("tooltip", s = new n(this, o));
        if (typeof r !== "undefined") return s[t](r);
        else {
            if (typeof t == "string") {
                return s[t]()
            }
        }
    };
    e.fn.content_slider.Constructor = n;
    e.fn.content_slider.defaults = {
        map: false,
        max_shown_items: 3,
        active_item: 0,
        top_offset: 0,
        left_offset: 0,
        child_div_width: 104,
        child_div_height: 104,
        small_pic_width: 84,
        small_pic_height: 84,
        big_pic_width: 231,
        big_pic_height: 231,
        small_border: 5,
        big_border: 8,
        arrow_width: 28,
        arrow_height: 57,
        small_arrow_width: 20,
        small_arrow_height: 20,
        moving_speed: 70,
        moving_speed_offset: 100,
        moving_easing: "linear",
        arrow_speed: 300,
        arrow_easing: "linear",
        mode: 2,
        left_arrow_class: ".circle_slider_nav_left",
        right_arrow_class: ".circle_slider_nav_right",
        container_class: "circle_slider",
        container_class_padding: 24,
        picture_class: "circle_slider_thumb",
        border_class: "circle_item_border",
        child_final_z_index: 100,
        text_field_id_prefix: "#sw",
        text_object: ".circle_slider_text_wrapper",
        hv_switch: 0,
        shadow_offset: 10,
        wrapper_text_max_height: 810,
        left_text_class: "circle_slider_text",
        right_text_class_sufix: "right",
        left_text_class_padding: 20,
        vert_text_mode: 0,
        middle_click: 2,
        border_on_off: 1,
        activate_border_div: 1,
        hover_movement: 6,
        hover_speed: 100,
        hover_easing: "linear",
        prettyPhoto_speed: 200,
        prettyPhoto_easing: "linear",
        prettyPhoto_width: 21,
        prettyPhoto_start: .93,
        prettyPhoto_movement: 45,
        auto_play: 0,
        auto_play_direction: 1,
        auto_play_pause_time: 3e3,
        allow_shadow: 1,
        small_resolution_max_height: 0,
        preload_all_images: 0,
        border_radius: -1,
        border_color: "#282828",
        arrow_color: "#282828",
        automatic_height_resize: 1,
        bind_arrow_keys: 1,
        use_thin_arrows: 0,
        enable_mousewheel: 1,
        radius_proportion: 1,
        plugin_url: "",
        responsive_by_available_space: 0,
        prettyPhoto_color: "#1AB99B",
        prettyPhoto_img: "",
        keep_on_top_middle_circle: 0,
        dinamically_set_class_id: 0,
        dinamically_set_position_class: 0,
        hide_arrows: 0,
        hide_prettyPhoto: 0,
        hide_content: 0,
        content_margin_left: 0,
        circle_left_offset: 0,
        minus_width: 0,
        main_circle_position: 0,
        enable_scroll_with_touchmove_on_horizontal_version: 1,
        enable_scroll_with_touchmove_on_vertical_version: 0,
        movement_coefficient: 1,
        minus_content_width: 0
    }
})(jQuery);
/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        factory(jQuery);
    }
}(function($) {
    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }
    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            absDeltaXY = 0,
            fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta;
        }
        if (orgEvent.detail) {
            delta = orgEvent.detail * -1;
        }
        if (orgEvent.deltaY) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if (orgEvent.deltaX) {
            deltaX = orgEvent.deltaX;
            delta = deltaX * -1;
        }
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }
        absDelta = Math.abs(delta);
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;
        }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
            lowestDeltaXY = absDeltaXY;
        }
        fn = delta > 0 ? 'floor' : 'ceil';
        delta = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
}));
(function(e) {
    function t() {
        var e = location.href;
        hashtag = e.indexOf("#prettyPhoto") !== -1 ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : false;
        return hashtag
    }

    function n() {
        if (typeof theRel == "undefined") return;
        location.hash = theRel + "/" + rel_index + "/"
    }

    function r() {
        if (location.href.indexOf("#prettyPhoto") !== -1) location.hash = "prettyPhoto"
    }

    function i(e, t) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var n = "[\\?&]" + e + "=([^&#]*)";
        var r = new RegExp(n);
        var i = r.exec(t);
        return i == null ? "" : i[1]
    }
    e.prettyPhoto = {
        version: "3.1.5"
    };
    e.fn.prettyPhoto = function(s) {
        function g() {
            e(".pp_loaderIcon").hide();
            projectedTop = scroll_pos["scrollTop"] + (d / 2 - a["containerHeight"] / 2);
            if (projectedTop < 0) projectedTop = 0;
            $ppt.fadeTo(settings.animation_speed, 1);
            $pp_pic_holder.find(".pp_content").animate({
                height: a["contentHeight"],
                width: a["contentWidth"]
            }, settings.animation_speed);
            $pp_pic_holder.animate({
                top: projectedTop,
                left: v / 2 - a["containerWidth"] / 2 < 0 ? 0 : v / 2 - a["containerWidth"] / 2,
                width: a["containerWidth"]
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a["height"]).width(a["width"]);
                $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);
                if (isSet && S(pp_images[set_position]) == "image") {
                    $pp_pic_holder.find(".pp_hoverContainer").show()
                } else {
                    $pp_pic_holder.find(".pp_hoverContainer").hide()
                }
                if (settings.allow_expand) {
                    if (a["resized"]) {
                        e("a.pp_expand,a.pp_contract").show()
                    } else {
                        e("a.pp_expand").hide()
                    }
                }
                if (settings.autoplay_slideshow && !m && !f) e.prettyPhoto.startSlideshow();
                settings.changepicturecallback();
                f = true
            });
            C();
            s.ajaxcallback()
        }

        function y(t) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden");
            $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                e(".pp_loaderIcon").show();
                t()
            })
        }

        function b(t) {
            t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
        }

        function w(e, t) {
            resized = false;
            E(e, t);
            imageWidth = e, imageHeight = t;
            if ((p > v || h > d) && doresize && settings.allow_resize && !u) {
                resized = true, fitting = false;
                while (!fitting) {
                    if (p > v) {
                        imageWidth = v - 200;
                        imageHeight = t / e * imageWidth
                    } else if (h > d) {
                        imageHeight = d - 200;
                        imageWidth = e / t * imageHeight
                    } else {
                        fitting = true
                    }
                    h = imageHeight, p = imageWidth
                }
                if (p > v || h > d) {
                    w(p, h)
                }
                E(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(h),
                containerWidth: Math.floor(p) + settings.horizontal_padding * 2,
                contentHeight: Math.floor(l),
                contentWidth: Math.floor(c),
                resized: resized
            }
        }

        function E(t, n) {
            t = parseFloat(t);
            n = parseFloat(n);
            $pp_details = $pp_pic_holder.find(".pp_details");
            $pp_details.width(t);
            detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom"));
            $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            });
            detailsHeight += $pp_details.height();
            detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight;
            $pp_details.remove();
            $pp_title = $pp_pic_holder.find(".ppt");
            $pp_title.width(t);
            titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom"));
            $pp_title = $pp_title.clone().appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            });
            titleHeight += $pp_title.height();
            $pp_title.remove();
            l = n + detailsHeight;
            c = t;
            h = l + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height();
            p = t
        }

        function S(e) {
            if (e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i)) {
                return "youtube"
            } else if (e.match(/vimeo\.com/i)) {
                return "vimeo"
            } else if (e.match(/\b.mov\b/i)) {
                return "quicktime"
            } else if (e.match(/\b.swf\b/i)) {
                return "flash"
            } else if (e.match(/\biframe=true\b/i)) {
                return "iframe"
            } else if (e.match(/\bajax=true\b/i)) {
                return "ajax"
            } else if (e.match(/\bcustom=true\b/i)) {
                return "custom"
            } else if (e.substr(0, 1) == "#") {
                return "inline"
            } else {
                return "image"
            }
        }

        function x() {
            if (doresize && typeof $pp_pic_holder != "undefined") {
                scroll_pos = T();
                contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();
                projectedTop = d / 2 + scroll_pos["scrollTop"] - contentHeight / 2;
                if (projectedTop < 0) projectedTop = 0;
                if (contentHeight > d) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: v / 2 + scroll_pos["scrollLeft"] - contentwidth / 2
                })
            }
        }

        function T() {
            if (self.pageYOffset) {
                return {
                    scrollTop: self.pageYOffset,
                    scrollLeft: self.pageXOffset
                }
            } else if (document.documentElement && document.documentElement.scrollTop) {
                return {
                    scrollTop: document.documentElement.scrollTop,
                    scrollLeft: document.documentElement.scrollLeft
                }
            } else if (document.body) {
                return {
                    scrollTop: document.body.scrollTop,
                    scrollLeft: document.body.scrollLeft
                }
            }
        }

        function N() {
            d = e(window).height(), v = e(window).width();
            if (typeof $pp_overlay != "undefined") $pp_overlay.height(e(document).height()).width(v)
        }

        function C() {
            if (isSet && settings.overlay_gallery && S(pp_images[set_position]) == "image") {
                itemWidth = 52 + 5;
                navWidth = settings.theme == "facebook" || settings.theme == "pp_default" ? 50 : 30;
                itemsPerPage = Math.floor((a["containerWidth"] - 100 - navWidth) / itemWidth);
                itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length;
                totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;
                if (totalPage == 0) {
                    navWidth = 0;
                    $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()
                } else {
                    $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()
                }
                galleryWidth = itemsPerPage * itemWidth;
                fullGalleryWidth = pp_images.length * itemWidth;
                $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");
                goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage;
                e.prettyPhoto.changeGalleryPage(goToPage);
                $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")
            } else {
                $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
            }
        }

        function k(t) {
            if (settings.social_tools) facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
            settings.markup = settings.markup.replace("{pp_social}", "");
            e("body").append(settings.markup);
            $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay");
            if (isSet && settings.overlay_gallery) {
                currentGalleryPage = 0;
                toInject = "";
                for (var n = 0; n < pp_images.length; n++) {
                    if (!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)) {
                        classname = "default";
                        img_src = ""
                    } else {
                        classname = "";
                        img_src = pp_images[n]
                    }
                    toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>"
                }
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
                $pp_pic_holder.find("#pp_full_res").after(toInject);
                $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li");
                $pp_gallery.find(".pp_arrow_next").click(function() {
                    e.prettyPhoto.changeGalleryPage("next");
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                $pp_gallery.find(".pp_arrow_previous").click(function() {
                    e.prettyPhoto.changeGalleryPage("previous");
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                });
                itemWidth = 52 + 5;
                $pp_gallery_li.each(function(t) {
                    e(this).find("a").click(function() {
                        e.prettyPhoto.changePage(t);
                        e.prettyPhoto.stopSlideshow();
                        return false
                    })
                })
            }
            if (settings.slideshow) {
                $pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');
                $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                    e.prettyPhoto.startSlideshow();
                    return false
                })
            }
            $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
            $pp_overlay.css({
                opacity: 0,
                height: e(document).height(),
                width: e(window).width()
            }).bind("click", function() {
                if (!settings.modal) e.prettyPhoto.close()
            });
            e("a.pp_close").bind("click", function() {
                e.prettyPhoto.close();
                return false
            });
            if (settings.allow_expand) {
                e("a.pp_expand").bind("click", function(t) {
                    if (e(this).hasClass("pp_expand")) {
                        e(this).removeClass("pp_expand").addClass("pp_contract");
                        doresize = false
                    } else {
                        e(this).removeClass("pp_contract").addClass("pp_expand");
                        doresize = true
                    }
                    y(function() {
                        e.prettyPhoto.open()
                    });
                    return false
                })
            }
            $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                e.prettyPhoto.changePage("previous");
                e.prettyPhoto.stopSlideshow();
                return false
            });
            $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                e.prettyPhoto.changePage("next");
                e.prettyPhoto.stopSlideshow();
                return false
            });
            x()
        }
        s = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: false,
            opacity: .8,
            show_title: true,
            allow_resize: true,
            allow_expand: true,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: false,
            wmode: "opaque",
            autoplay: true,
            modal: false,
            deeplinking: true,
            overlay_gallery: true,
            overlay_gallery_max: 30,
            keyboard_shortcuts: true,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: true,
            markup: '<div class="pp_pic_holder">       <div class="ppt"> </div>       <div class="pp_top">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>       <div class="pp_content_container">        <div class="pp_left">        <div class="pp_right">         <div class="pp_content">          <div class="pp_loaderIcon"></div>          <div class="pp_fade">           <a href="#" class="pp_expand" title="Expand the image">Expand</a>           <div class="pp_hoverContainer">            <a class="pp_next" href="#">next</a>            <a class="pp_previous" href="#">previous</a>           </div>           <div id="pp_full_res"></div>           <div class="pp_details">            <div class="pp_nav">             <a href="#" class="pp_arrow_previous">Previous</a>             <p class="currentTextHolder">0/0</p>             <a href="#" class="pp_arrow_next">Next</a>            </div>            <p class="pp_description"></p>            <div class="pp_social">{pp_social}</div>            <a class="pp_close" href="#">Close</a>           </div>          </div>         </div>        </div>        </div>       </div>       <div class="pp_bottom">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>      </div>      <div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery">         <a href="#" class="pp_arrow_previous">Previous</a>         <div>          <ul>           {gallery}          </ul>         </div>         <a href="#" class="pp_arrow_next">Next</a>        </div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, s);
        var o = this,
            u = false,
            a, f, l, c, h, p, d = e(window).height(),
            v = e(window).width(),
            m;
        doresize = true, scroll_pos = T();
        e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            x();
            N()
        });
        if (s.keyboard_shortcuts) {
            e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
                if (typeof $pp_pic_holder != "undefined") {
                    if ($pp_pic_holder.is(":visible")) {
                        switch (t.keyCode) {
                            case 37:
                                e.prettyPhoto.changePage("previous");
                                t.preventDefault();
                                break;
                            case 39:
                                e.prettyPhoto.changePage("next");
                                t.preventDefault();
                                break;
                            case 27:
                                if (!settings.modal) e.prettyPhoto.close();
                                t.preventDefault();
                                break
                        }
                    }
                }
            })
        }
        e.prettyPhoto.initialize = function() {
            settings = s;
            if (settings.theme == "pp_default") settings.horizontal_padding = 16;
            theRel = e(this).attr(settings.hook);
            galleryRegExp = /\[(?:.*)\]/;
            isSet = galleryRegExp.exec(theRel) ? true : false;
            pp_images = isSet ? jQuery.map(o, function(t, n) {
                if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("href")
            }) : e.makeArray(e(this).attr("href"));
            pp_titles = isSet ? jQuery.map(o, function(t, n) {
                if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : ""
            }) : e.makeArray(e(this).find("img").attr("alt"));
            pp_descriptions = isSet ? jQuery.map(o, function(t, n) {
                if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("title") ? e(t).attr("title") : ""
            }) : e.makeArray(e(this).attr("title"));
            if (pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
            set_position = jQuery.inArray(e(this).attr("href"), pp_images);
            rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this));
            k(this);
            if (settings.allow_resize) e(window).bind("scroll.prettyphoto", function() {
                x()
            });
            e.prettyPhoto.open();
            return false
        };
        e.prettyPhoto.open = function(t) {
            if (typeof settings == "undefined" || typeof all_around_demo != 'undefined') {
                settings = s;
                pp_images = e.makeArray(arguments[0]);
                pp_titles = arguments[1] ? e.makeArray(arguments[1]) : e.makeArray("");
                pp_descriptions = arguments[2] ? e.makeArray(arguments[2]) : e.makeArray("");
                isSet = pp_images.length > 1 ? true : false;
                set_position = arguments[3] ? arguments[3] : 0;
                k(t.target)
            }
            if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden");
            b(e(pp_images).size());
            e(".pp_loaderIcon").show();
            if (settings.deeplinking) n();
            if (settings.social_tools) {
                facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
                $pp_pic_holder.find(".pp_social").html(facebook_like_link)
            }
            if ($ppt.is(":hidden")) $ppt.css("opacity", 0).show();
            $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity);
            $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size());
            if (typeof pp_descriptions[set_position] != "undefined" && pp_descriptions[set_position] != "") {
                $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))
            } else {
                $pp_pic_holder.find(".pp_description").hide()
            }
            movie_width = parseFloat(i("width", pp_images[set_position])) ? i("width", pp_images[set_position]) : settings.default_width.toString();
            movie_height = parseFloat(i("height", pp_images[set_position])) ? i("height", pp_images[set_position]) : settings.default_height.toString();
            u = false;
            if (movie_height.indexOf("%") != -1) {
                movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150);
                u = true
            }
            if (movie_width.indexOf("%") != -1) {
                movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150);
                u = true
            }
            $pp_pic_holder.fadeIn(function() {
                settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined" ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html(" ");
                imgPreloader = "";
                skipInjection = false;
                switch (S(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image;
                        nextImage = new Image;
                        if (isSet && set_position < e(pp_images).size() - 1) nextImage.src = pp_images[set_position + 1];
                        prevImage = new Image;
                        if (isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];
                        $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]);
                        imgPreloader.onload = function() {
                            a = w(imgPreloader.width, imgPreloader.height);
                            g()
                        };
                        imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist.");
                            e.prettyPhoto.close()
                        };
                        imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        a = w(movie_width, movie_height);
                        movie_id = i("v", pp_images[set_position]);
                        if (movie_id == "") {
                            movie_id = pp_images[set_position].split("youtu.be/");
                            movie_id = movie_id[1];
                            if (movie_id.indexOf("?") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("?"));
                            if (movie_id.indexOf("&") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("&"))
                        }
                        movie = "http://www.youtube.com/embed/" + movie_id;
                        i("rel", pp_images[set_position]) ? movie += "?rel=" + i("rel", pp_images[set_position]) : movie += "?rel=1";
                        if (settings.autoplay) movie += "&autoplay=1";
                        toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        a = w(movie_width, movie_height);
                        movie_id = pp_images[set_position];
                        var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
                        var n = movie_id.match(t);
                        movie = "http://player.vimeo.com/video/" + n[3] + "?title=0&byline=0&portrait=0";
                        if (settings.autoplay) movie += "&autoplay=1;";
                        vimeo_width = a["width"] + "/embed/?moog_width=" + a["width"];
                        toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, a["height"]).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        a = w(movie_width, movie_height);
                        a["height"] += 15;
                        a["contentHeight"] += 15;
                        a["containerHeight"] += 15;
                        toInject = settings.quicktime_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        a = w(movie_width, movie_height);
                        flash_vars = pp_images[set_position];
                        flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length);
                        filename = pp_images[set_position];
                        filename = filename.substring(0, filename.indexOf("?"));
                        toInject = settings.flash_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        a = w(movie_width, movie_height);
                        frame_url = pp_images[set_position];
                        frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1);
                        toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = false;
                        a = w(movie_width, movie_height);
                        doresize = true;
                        skipInjection = true;
                        e.get(pp_images[set_position], function(e) {
                            toInject = settings.inline_markup.replace(/{content}/g, e);
                            $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                            g()
                        });
                        break;
                    case "custom":
                        a = w(movie_width, movie_height);
                        toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();
                        doresize = false;
                        a = w(e(myClone).width(), e(myClone).height());
                        doresize = true;
                        e(myClone).remove();
                        toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html());
                        break
                }
                if (!imgPreloader && !skipInjection) {
                    $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                    g()
                }
            });
            return false
        };
        e.prettyPhoto.changePage = function(t) {
            currentGalleryPage = 0;
            if (t == "previous") {
                set_position--;
                if (set_position < 0) set_position = e(pp_images).size() - 1
            } else if (t == "next") {
                set_position++;
                if (set_position > e(pp_images).size() - 1) set_position = 0
            } else {
                set_position = t
            }
            rel_index = set_position;
            if (!doresize) doresize = true;
            if (settings.allow_expand) {
                e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")
            }
            y(function() {
                e.prettyPhoto.open()
            })
        };
        e.prettyPhoto.changeGalleryPage = function(e) {
            if (e == "next") {
                currentGalleryPage++;
                if (currentGalleryPage > totalPage) currentGalleryPage = 0
            } else if (e == "previous") {
                currentGalleryPage--;
                if (currentGalleryPage < 0) currentGalleryPage = totalPage
            } else {
                currentGalleryPage = e
            }
            slide_speed = e == "next" || e == "previous" ? settings.animation_speed : 0;
            slide_to = currentGalleryPage * itemsPerPage * itemWidth;
            $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        };
        e.prettyPhoto.startSlideshow = function() {
            if (typeof m == "undefined") {
                $pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                m = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)
            } else {
                e.prettyPhoto.changePage("next")
            }
        };
        e.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                e.prettyPhoto.startSlideshow();
                return false
            });
            clearInterval(m);
            m = undefined
        };
        e.prettyPhoto.close = function() {
            if ($pp_overlay.is(":animated")) return;
            e.prettyPhoto.stopSlideshow();
            $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden");
            e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                e(this).remove()
            });
            $pp_overlay.fadeOut(settings.animation_speed, function() {
                if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible");
                e(this).remove();
                e(window).unbind("scroll.prettyphoto");
                r();
                settings.callback();
                doresize = true;
                f = false;
                delete settings
            })
        };
        if (!pp_alreadyInitialized && t()) {
            pp_alreadyInitialized = true;
            hashIndex = t();
            hashRel = hashIndex;
            hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1);
            hashRel = hashRel.substring(0, hashRel.indexOf("/"));
            setTimeout(function() {
                e("a[" + s.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
            }, 50)
        }
        return this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
    };
})(jQuery);
var pp_alreadyInitialized = false;
(function($) {
    $(document).ready(function() {
        $('.content_slider_text_block_wrap').find('.button_hover_effect').hover(function() {
            var hoverClr = $(this).attr('data-hovercolor');
            $(this).stop(true).animate({
                'background-color': hoverClr
            }, 300);
        }, function() {
            var bgClr = $(this).attr('data-hoveroutcolor');
            $(this).stop(true).animate({
                'background-color': bgClr
            }, 300);
        });
        $('.content_slider_text_block_wrap').find('.content_img_wrap').hover(function() {
            $(this).find('.hover_link').show().stop(true).animate({
                'width': 21,
                'height': 21,
                'margin-top': -10.5,
                'margin-left': -10.5,
                opacity: 1
            }, 150);
        }, function() {
            $(this).find('.hover_link').show().stop(true).animate({
                'width': 0,
                'height': 0,
                'margin-top': 0,
                'margin-left': 0,
                opacity: 0
            }, 150, function() {
                $(this).hide();
            });
        });
    });
})(jQuery);
/*!
 * jQuery Color Animations v@VERSION
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: @DATE
 */
(function(jQuery, undefined) {
    var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
        stringParsers = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [execResult[1], execResult[2], execResult[3], execResult[4]];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [execResult[1] * 2.55, execResult[2] * 2.55, execResult[3] * 2.55, execResult[4]];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(execResult) {
                return [parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16)];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(execResult) {
                return [parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16)];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(execResult) {
                return [execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4]];
            }
        }],
        color = jQuery.Color = function(color, green, blue, alpha) {
            return new jQuery.Color.fn.parse(color, green, blue, alpha);
        },
        spaces = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        propTypes = {
            "byte": {
                floor: true,
                max: 255
            },
            "percent": {
                max: 1
            },
            "degrees": {
                mod: 360,
                floor: true
            }
        },
        support = color.support = {},
        supportElem = jQuery("<p>")[0],
        colors, each = jQuery.each;
    supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
    support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;
    each(spaces, function(spaceName, space) {
        space.cache = "_" + spaceName;
        space.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        };
    });

    function clamp(value, prop, allowEmpty) {
        var type = propTypes[prop.type] || {};
        if (value == null) {
            return (allowEmpty || !prop.def) ? null : prop.def;
        }
        value = type.floor ? ~~value : parseFloat(value);
        if (isNaN(value)) {
            return prop.def;
        }
        if (type.mod) {
            return (value + type.mod) % type.mod;
        }
        return 0 > value ? 0 : type.max < value ? type.max : value;
    }

    function stringParse(string) {
        var inst = color(),
            rgba = inst._rgba = [];
        string = string.toLowerCase();
        each(stringParsers, function(i, parser) {
            var parsed, match = parser.re.exec(string),
                values = match && parser.parse(match),
                spaceName = parser.space || "rgba";
            if (values) {
                parsed = inst[spaceName](values);
                inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
                rgba = inst._rgba = parsed._rgba;
                return false;
            }
        });
        if (rgba.length) {
            if (rgba.join() === "0,0,0,0") {
                jQuery.extend(rgba, colors.transparent);
            }
            return inst;
        }
        return colors[string];
    }
    color.fn = jQuery.extend(color.prototype, {
        parse: function(red, green, blue, alpha) {
            if (red === undefined) {
                this._rgba = [null, null, null, null];
                return this;
            }
            if (red.jquery || red.nodeType) {
                red = jQuery(red).css(green);
                green = undefined;
            }
            var inst = this,
                type = jQuery.type(red),
                rgba = this._rgba = [];
            if (green !== undefined) {
                red = [red, green, blue, alpha];
                type = "array";
            }
            if (type === "string") {
                return this.parse(stringParse(red) || colors._default);
            }
            if (type === "array") {
                each(spaces.rgba.props, function(key, prop) {
                    rgba[prop.idx] = clamp(red[prop.idx], prop);
                });
                return this;
            }
            if (type === "object") {
                if (red instanceof color) {
                    each(spaces, function(spaceName, space) {
                        if (red[space.cache]) {
                            inst[space.cache] = red[space.cache].slice();
                        }
                    });
                } else {
                    each(spaces, function(spaceName, space) {
                        var cache = space.cache;
                        each(space.props, function(key, prop) {
                            if (!inst[cache] && space.to) {
                                if (key === "alpha" || red[key] == null) {
                                    return;
                                }
                                inst[cache] = space.to(inst._rgba);
                            }
                            inst[cache][prop.idx] = clamp(red[key], prop, true);
                        });
                        if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) {
                            inst[cache][3] = 1;
                            if (space.from) {
                                inst._rgba = space.from(inst[cache]);
                            }
                        }
                    });
                }
                return this;
            }
        },
        is: function(compare) {
            var is = color(compare),
                same = true,
                inst = this;
            each(spaces, function(_, space) {
                var localCache, isCache = is[space.cache];
                if (isCache) {
                    localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
                    each(space.props, function(_, prop) {
                        if (isCache[prop.idx] != null) {
                            same = (isCache[prop.idx] === localCache[prop.idx]);
                            return same;
                        }
                    });
                }
                return same;
            });
            return same;
        },
        _space: function() {
            var used = [],
                inst = this;
            each(spaces, function(spaceName, space) {
                if (inst[space.cache]) {
                    used.push(spaceName);
                }
            });
            return used.pop();
        },
        transition: function(other, distance) {
            var end = color(other),
                spaceName = end._space(),
                space = spaces[spaceName],
                startColor = this.alpha() === 0 ? color("transparent") : this,
                start = startColor[space.cache] || space.to(startColor._rgba),
                result = start.slice();
            end = end[space.cache];
            each(space.props, function(key, prop) {
                var index = prop.idx,
                    startValue = start[index],
                    endValue = end[index],
                    type = propTypes[prop.type] || {};
                if (endValue === null) {
                    return;
                }
                if (startValue === null) {
                    result[index] = endValue;
                } else {
                    if (type.mod) {
                        if (endValue - startValue > type.mod / 2) {
                            startValue += type.mod;
                        } else if (startValue - endValue > type.mod / 2) {
                            startValue -= type.mod;
                        }
                    }
                    result[index] = clamp((endValue - startValue) * distance + startValue, prop);
                }
            });
            return this[spaceName](result);
        },
        blend: function(opaque) {
            if (this._rgba[3] === 1) {
                return this;
            }
            var rgb = this._rgba.slice(),
                a = rgb.pop(),
                blend = color(opaque)._rgba;
            return color(jQuery.map(rgb, function(v, i) {
                return (1 - a) * blend[i] + a * v;
            }));
        },
        toRgbaString: function() {
            var prefix = "rgba(",
                rgba = jQuery.map(this._rgba, function(v, i) {
                    return v == null ? (i > 2 ? 1 : 0) : v;
                });
            if (rgba[3] === 1) {
                rgba.pop();
                prefix = "rgb(";
            }
            return prefix + rgba.join() + ")";
        },
        toHslaString: function() {
            var prefix = "hsla(",
                hsla = jQuery.map(this.hsla(), function(v, i) {
                    if (v == null) {
                        v = i > 2 ? 1 : 0;
                    }
                    if (i && i < 3) {
                        v = Math.round(v * 100) + "%";
                    }
                    return v;
                });
            if (hsla[3] === 1) {
                hsla.pop();
                prefix = "hsl(";
            }
            return prefix + hsla.join() + ")";
        },
        toHexString: function(includeAlpha) {
            var rgba = this._rgba.slice(),
                alpha = rgba.pop();
            if (includeAlpha) {
                rgba.push(~~(alpha * 255));
            }
            return "#" + jQuery.map(rgba, function(v) {
                v = (v || 0).toString(16);
                return v.length === 1 ? "0" + v : v;
            }).join("");
        },
        toString: function() {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
        }
    });
    color.fn.parse.prototype = color.fn;

    function hue2rgb(p, q, h) {
        h = (h + 1) % 1;
        if (h * 6 < 1) {
            return p + (q - p) * h * 6;
        }
        if (h * 2 < 1) {
            return q;
        }
        if (h * 3 < 2) {
            return p + (q - p) * ((2 / 3) - h) * 6;
        }
        return p;
    }
    spaces.hsla.to = function(rgba) {
        if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
            return [null, null, null, rgba[3]];
        }
        var r = rgba[0] / 255,
            g = rgba[1] / 255,
            b = rgba[2] / 255,
            a = rgba[3],
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            diff = max - min,
            add = max + min,
            l = add * 0.5,
            h, s;
        if (min === max) {
            h = 0;
        } else if (r === max) {
            h = (60 * (g - b) / diff) + 360;
        } else if (g === max) {
            h = (60 * (b - r) / diff) + 120;
        } else {
            h = (60 * (r - g) / diff) + 240;
        }
        if (diff === 0) {
            s = 0;
        } else if (l <= 0.5) {
            s = diff / add;
        } else {
            s = diff / (2 - add);
        }
        return [Math.round(h) % 360, s, l, a == null ? 1 : a];
    };
    spaces.hsla.from = function(hsla) {
        if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
            return [null, null, null, hsla[3]];
        }
        var h = hsla[0] / 360,
            s = hsla[1],
            l = hsla[2],
            a = hsla[3],
            q = l <= 0.5 ? l * (1 + s) : l + s - l * s,
            p = 2 * l - q;
        return [Math.round(hue2rgb(p, q, h + (1 / 3)) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - (1 / 3)) * 255), a];
    };
    each(spaces, function(spaceName, space) {
        var props = space.props,
            cache = space.cache,
            to = space.to,
            from = space.from;
        color.fn[spaceName] = function(value) {
            if (to && !this[cache]) {
                this[cache] = to(this._rgba);
            }
            if (value === undefined) {
                return this[cache].slice();
            }
            var ret, type = jQuery.type(value),
                arr = (type === "array" || type === "object") ? value : arguments,
                local = this[cache].slice();
            each(props, function(key, prop) {
                var val = arr[type === "object" ? key : prop.idx];
                if (val == null) {
                    val = local[prop.idx];
                }
                local[prop.idx] = clamp(val, prop);
            });
            if (from) {
                ret = color(from(local));
                ret[cache] = local;
                return ret;
            } else {
                return color(local);
            }
        };
        each(props, function(key, prop) {
            if (color.fn[key]) {
                return;
            }
            color.fn[key] = function(value) {
                var vtype = jQuery.type(value),
                    fn = (key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName),
                    local = this[fn](),
                    cur = local[prop.idx],
                    match;
                if (vtype === "undefined") {
                    return cur;
                }
                if (vtype === "function") {
                    value = value.call(this, cur);
                    vtype = jQuery.type(value);
                }
                if (value == null && prop.empty) {
                    return this;
                }
                if (vtype === "string") {
                    match = rplusequals.exec(value);
                    if (match) {
                        value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1);
                    }
                }
                local[prop.idx] = value;
                return this[fn](local);
            };
        });
    });
    color.hook = function(hook) {
        var hooks = hook.split(" ");
        each(hooks, function(i, hook) {
            jQuery.cssHooks[hook] = {
                set: function(elem, value) {
                    var parsed, curElem, backgroundColor = "";
                    if (value !== "transparent" && (jQuery.type(value) !== "string" || (parsed = stringParse(value)))) {
                        value = color(parsed || value);
                        if (!support.rgba && value._rgba[3] !== 1) {
                            curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                            while ((backgroundColor === "" || backgroundColor === "transparent") && curElem && curElem.style) {
                                try {
                                    backgroundColor = jQuery.css(curElem, "backgroundColor");
                                    curElem = curElem.parentNode;
                                } catch (e) {}
                            }
                            value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default");
                        }
                        value = value.toRgbaString();
                    }
                    try {
                        elem.style[hook] = value;
                    } catch (e) {}
                }
            };
            jQuery.fx.step[hook] = function(fx) {
                if (!fx.colorInit) {
                    fx.start = color(fx.elem, hook);
                    fx.end = color(fx.end);
                    fx.colorInit = true;
                }
                jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
            };
        });
    };
    color.hook(stepHooks);
    jQuery.cssHooks.borderColor = {
        expand: function(value) {
            var expanded = {};
            each(["Top", "Right", "Bottom", "Left"], function(i, part) {
                expanded["border" + part + "Color"] = value;
            });
            return expanded;
        }
    };
    colors = jQuery.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    };
}(jQuery));
/*!
 * VERSION: 1.11.8
 * DATE: 2014-05-13
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * LayerSlider is using TweenLite, TimeLineLite, EasePack & CSSPlugin
 */
;
eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('(17(e){"4V 4U";19 t=e.5Z||e;1a(!t.5f){19 n,r,i,s,o,u=17(e){19 n,r=e.1t("."),i=t;1b(n=0;r.1c>n;n++)i[r[n]]=i=i[r[n]]||{};18 i},a=u("4Q.4R"),f=1e-10,l=[].6K,c=17(){},h=17(){19 e=9V.1y.9W,t=e.1W([]);18 17(n){18 1d!=n&&(n 2b 3N||"3U"==1j n&&!!n.2d&&e.1W(n)===t)}}(),p={},d=17(n,r,i,s){15.4C=p[n]?p[n].4C:[],p[n]=15,15.54=1d,15.7A=i;19 o=[];15.64=17(a){1b(19 f,l,c,h,v=r.1c,m=v;--v>-1;)(f=p[r[v]]||1h d(r[v],[])).54?(o[v]=f.54,m--):a&&f.4C.2d(15);1a(0===m&&i)1b(l=("4Q.4R."+n).1t("."),c=l.4q(),h=u(l.1J("."))[c]=15.54=i.35(i,o),s&&(t[c]=h,"17"==1j 63&&63.9X?63((e.8j?e.8j+"/":"")+n.1t(".").1J("/"),[],17(){18 h}):"9U"!=1j 62&&62.8f&&(62.8f=h)),v=0;15.4C.1c>v;v++)15.4C[v].64()},15.64(!0)},v=e.3u=17(e,t,n,r){18 1h d(e,t,n,r)},m=a.8k=17(e,t,n){18 t=t||17(){},v(e,[],17(){18 t},n),t};v.77=t;19 g=[0,0,1,1],y=[],b=m("2o.8h",17(e,t,n,r){15.5L=e,15.6v=n||0,15.6t=r||0,15.5H=t?g.43(t):g},!0),w=b.7C={},E=b.8l=17(e,t,n,r){1b(19 i,s,o,u,f=t.1t(","),l=f.1c,c=(n||"5k,6c,5m").1t(",");--l>-1;)1b(s=f[l],i=r?m("2o."+s,1d,!0):a.2o[s]||{},o=c.1c;--o>-1;)u=c[o],w[s+"."+u]=w[u+s]=i[u]=e.2w?e:e[u]||1h e};1b(i=b.1y,i.3s=!1,i.2w=17(e){1a(15.5L)18 15.5H[0]=e,15.5L.35(1d,15.5H);19 t=15.6v,n=15.6t,r=1===t?1-e:2===t?e:.5>e?2*e:2*(1-e);18 1===n?r*=r:2===n?r*=r*r:3===n?r*=r*r*r:4===n&&(r*=r*r*r*r),1===t?1-r:2===t?r:.5>e?r/2:1-r/2},n=["7X","7Z","9T","9Q","9R,9S"],r=n.1c;--r>-1;)i=n[r]+",9Y"+r,E(1h b(1d,1d,1,r),i,"6c",!0),E(1h b(1d,1d,2,r),i,"5k"+(0===r?",9Z":"")),E(1h b(1d,1d,3,r),i,"5m");w.a5=a.2o.7X.5k,w.a6=a.2o.7Z.5m;19 S=m("8V.8W",17(e){15.4d={},15.85=e||15});i=S.1y,i.79=17(e,t,n,r,i){i=i||0;19 u,a,f=15.4d[e],l=0;1b(1d==f&&(15.4d[e]=f=[]),a=f.1c;--a>-1;)u=f[a],u.c===t&&u.s===n?f.2Q(a,1):0===l&&i>u.2s&&(l=a+1);f.2Q(l,0,{c:t,s:n,8a:r,2s:i}),15!==s||o||s.31()},i.a7=17(e,t){19 n,r=15.4d[e];1a(r)1b(n=r.1c;--n>-1;)1a(r[n].c===t)18 r.2Q(n,1),2h 0},i.8Q=17(e){19 t,n,r,i=15.4d[e];1a(i)1b(t=i.1c,n=15.85;--t>-1;)r=i[t],r.8a?r.c.1W(r.s||n,{2p:e,2x:n}):r.c.1W(r.s||n)};19 x=e.a4,T=e.a3,N=88.a0||17(){18(1h 88).a1()},C=N();1b(n=["5t","a2","9P","o"],r=n.1c;--r>-1&&!x;)x=e[n[r]+"9O"],T=e[n[r]+"9B"]||e[n[r]+"9C"];m("4Y",17(e,t){19 n,r,i,u,a,f=15,l=N(),h=t!==!1&&x,p=17(e){C=N(),f.34=(C-l)/8L;19 t,s=f.34-a;(!n||s>0||e===!0)&&(f.3F++,a+=s+(s>=u?.9D:u-s),t=!0),e!==!0&&(i=r(p)),t&&f.8Q("4W")};S.1W(f),f.34=f.3F=0,f.4W=17(){p(!0)},f.5c=17(){1d!=i&&(h&&T?T(i):9A(i),r=c,i=1d,f===s&&(o=!1))},f.31=17(){1d!==i&&f.5c(),r=0===n?c:h&&x?x:17(e){18 5M(e,0|8L*(a-f.34)+1)},f===s&&(o=!0),p(2)},f.5G=17(e){18 2m.1c?(n=e,u=1/(n||60),a=15.34+u,f.31(),2h 0):n},f.8S=17(e){18 2m.1c?(f.5c(),h=e,f.5G(n),2h 0):h},f.5G(e),5M(17(){h&&(!i||5>f.3F)&&f.8S(!1)},9z)}),i=a.4Y.1y=1h a.8V.8W,i.2K=a.4Y;19 k=m("5C.8H",17(e,t){1a(15.1p=t=t||{},15.1C=15.2i=e||0,15.2L=1D(t.4x)||0,15.1x=1,15.2a=t.1Y===!0,15.1A=t.1A,15.2M=t.48===!0,q){o||s.31();19 n=15.1p.5K?I:q;n.1U(15,n.1n),15.1p.3e&&15.3e(!0)}});s=k.6f=1h a.4Y,i=k.1y,i.2r=i.1O=i.2z=i.1B=!1,i.1H=i.1n=0,i.1z=-1,i.1f=i.3l=i.33=i.1o=i.21=1d,i.1B=!1;19 L=17(){o&&N()-C>8J&&s.31(),5M(L,8J)};L(),i.73=17(e,t){18 1d!=e&&15.4b(e,t),15.48(!1).3e(!1)},i.5N=17(e,t){18 1d!=e&&15.4b(e,t),15.3e(!0)},i.9v=17(e,t){18 1d!=e&&15.4b(e,t),15.3e(!1)},i.4b=17(e,t){18 15.2Z(1D(e),t!==!1)},i.9w=17(e,t){18 15.48(!1).3e(!1).2Z(e?-15.2L:0,t!==!1,!0)},i.9x=17(e,t){18 1d!=e&&15.4b(e||15.23(),t),15.48(!0).3e(!1)},i.1E=17(){},i.5u=17(){18 15},i.4n=17(){19 e,t=15.1o,n=15.1i;18!t||!15.1O&&!15.1B&&t.4n()&&(e=t.3H())>=n&&n+15.23()/15.1x>e},i.1N=17(e,t){18 o||s.31(),15.1O=!e,15.2a=15.4n(),t!==!0&&(e&&!15.21?15.1o.1U(15,15.1i-15.2L):!e&&15.21&&15.1o.3K(15,!0)),!1},i.2n=17(){18 15.1N(!1,!1)},i.4f=17(e,t){18 15.2n(e,t),15},i.3c=17(e){1b(19 t=e?15:15.21;t;)t.2r=!0,t=t.21;18 15},i.5l=17(e){1b(19 t=e.1c,n=e.43();--t>-1;)"{4B}"===e[t]&&(n[t]=15);18 n},i.9y=17(e,t,n,r){1a("9E"===(e||"").1q(0,2)){19 i=15.1p;1a(1===2m.1c)18 i[e];1d==t?3E i[e]:(i[e]=t,i[e+"5Y"]=h(n)&&-1!==n.1J("").1k("{4B}")?15.5l(n):n,i[e+"5J"]=r),"5A"===e&&(15.33=t)}18 15},i.4x=17(e){18 2m.1c?(15.1o.2j&&15.8C(15.1i+e-15.2L),15.2L=e,15):15.2L},i.2C=17(e){18 2m.1c?(15.1C=15.2i=e,15.3c(!0),15.1o.2j&&15.1n>0&&15.1n<15.1C&&0!==e&&15.2Z(15.1H*(e/15.1C),!0),15):(15.2r=!1,15.1C)},i.23=17(e){18 15.2r=!1,2m.1c?15.2C(e):15.2i},i.34=17(e,t){18 2m.1c?(15.2r&&15.23(),15.2Z(e>15.1C?15.1C:e,t)):15.1n},i.2Z=17(e,t,n){1a(o||s.31(),!2m.1c)18 15.1H;1a(15.1o){1a(0>e&&!n&&(e+=15.23()),15.1o.2j){15.2r&&15.23();19 r=15.2i,i=15.1o;1a(e>r&&!n&&(e=r),15.1i=(15.1B?15.4O:i.1n)-(15.2M?r-e:e)/15.1x,i.2r||15.3c(!1),i.1o)1b(;i.1o;)i.1o.1n!==(i.1i+i.1H)/i.1x&&i.2Z(i.1H,!0),i=i.1o}15.1O&&15.1N(!0,!1),(15.1H!==e||0===15.1C)&&15.1E(e,t,!1)}18 15},i.9F=i.9L=17(e,t){18 2m.1c?15.2Z(15.2C()*e,t):15.1n/15.2C()},i.8C=17(e){18 2m.1c?(e!==15.1i&&(15.1i=e,15.21&&15.21.4K&&15.21.1U(15,e-15.2L)),15):15.1i},i.6q=17(e){1a(!2m.1c)18 15.1x;1a(e=e||f,15.1o&&15.1o.2j){19 t=15.4O,n=t||0===t?t:15.1o.2Z();15.1i=n-(n-15.1i)*15.1x/e}18 15.1x=e,15.3c(!1)},i.48=17(e){18 2m.1c?(e!=15.2M&&(15.2M=e,15.2Z(15.1o&&!15.1o.2j?15.23()-15.1H:15.1H,!0)),15):15.2M},i.3e=17(e){1a(!2m.1c)18 15.1B;1a(e!=15.1B&&15.1o){o||e||s.31();19 t=15.1o,n=t.3H(),r=n-15.4O;!e&&t.2j&&(15.1i+=r,15.3c(!1)),15.4O=e?n:1d,15.1B=e,15.2a=15.4n(),!e&&0!==r&&15.2z&&15.2C()&&15.1E(t.2j?15.1H:(n-15.1i)/15.1x,!0,!0)}18 15.1O&&!e&&15.1N(!0,!1),15};19 A=m("5C.7y",17(e){k.1W(15,0,e),15.4H=15.2j=!0});i=A.1y=1h k,i.2K=A,i.4f().1O=!1,i.26=i.3l=1d,i.4K=!1,i.1U=i.7w=17(e,t){19 n,r;1a(e.1i=1D(t||0)+e.2L,e.1B&&15!==e.1o&&(e.4O=e.1i+(15.3H()-e.1i)/e.1x),e.21&&e.21.3K(e,!0),e.21=e.1o=15,e.1O&&e.1N(!0,!0),n=15.3l,15.4K)1b(r=e.1i;n&&n.1i>r;)n=n.1l;18 n?(e.1f=n.1f,n.1f=e):(e.1f=15.26,15.26=e),e.1f?e.1f.1l=e:15.3l=e,e.1l=n,15.1o&&15.3c(!0),15},i.3K=17(e,t){18 e.21===15&&(t||e.1N(!1,!0),e.21=1d,e.1l?e.1l.1f=e.1f:15.26===e&&(15.26=e.1f),e.1f?e.1f.1l=e.1l:15.3l===e&&(15.3l=e.1l),15.1o&&15.3c(!0)),15},i.1E=17(e,t,n){19 r,i=15.26;1b(15.1H=15.1n=15.1z=e;i;)r=i.1f,(i.2a||e>=i.1i&&!i.1B)&&(i.2M?i.1E((i.2r?i.23():i.2i)-(e-i.1i)*i.1x,t,n):i.1E((e-i.1i)*i.1x,t,n)),i=r},i.3H=17(){18 o||s.31(),15.1H};19 O=m("5f",17(t,n,r){1a(k.1W(15,n,r),15.1E=O.1y.1E,1d==t)6l"7e 6R a 1d 2x.";15.2x=t="1L"!=1j t?t:O.3I(t)||t;19 i,s,o,u=t.9M||t.1c&&t!==e&&t[0]&&(t[0]===e||t[0].3n&&t[0].1w&&!t.3n),a=15.1p.4I;1a(15.6j=a=1d==a?F[O.8G]:"2y"==1j a?a>>0:F[a],(u||t 2b 3N||t.2d&&h(t))&&"2y"!=1j t[0])1b(15.2F=o=l.1W(t,0),15.3A=[],15.2T=[],i=0;o.1c>i;i++)s=o[i],s?"1L"!=1j s?s.1c&&s!==e&&s[0]&&(s[0]===e||s[0].3n&&s[0].1w&&!s.3n)?(o.2Q(i--,1),15.2F=o=o.43(l.1W(s,0))):(15.2T[i]=R(s,15,!1),1===a&&15.2T[i].1c>1&&U(s,15,1d,1,15.2T[i])):(s=o[i--]=O.3I(s),"1L"==1j s&&o.2Q(i+1,1)):o.2Q(i--,1);1m 15.3A={},15.2T=R(t,15,!1),1===a&&15.2T.1c>1&&U(t,15,1d,1,15.2T);(15.1p.1Y||0===n&&0===15.2L&&15.1p.1Y!==!1)&&15.1E(-15.2L,!1,!0)},!0),M=17(t){18 t.1c&&t!==e&&t[0]&&(t[0]===e||t[0].3n&&t[0].1w&&!t.3n)},2f=17(e,t){19 n,r={};1b(n 1u e)j[n]||n 1u t&&"x"!==n&&"y"!==n&&"3k"!==n&&"3y"!==n&&"3a"!==n&&"3X"!==n||!(!P[n]||P[n]&&P[n].9N)||(r[n]=e[n],3E e[n]);e.4P=r};i=O.1y=1h k,i.2K=O,i.4f().1O=!1,i.3j=0,i.1s=i.2F=i.3m=i.29=1d,i.4u=!1,O.3V="1.11.8",O.6r=i.2H=1h b(1d,1d,1,1),O.8G="2t",O.6f=s,O.7j=!0,O.3I=e.$||e.9K||17(t){18 e.$?(O.3I=e.$,e.$(t)):e.6h?e.6h.9J("#"===t.1v(0)?t.1q(1):t):t};19 D=O.4s={7E:h,7p:M},P=O.9G={},H=O.9H={},B=0,j=D.7k={3z:1,4x:1,4I:1,49:1,6a:1,6s:1,5K:1,4w:1,30:1,5A:1,5U:1,5T:1,4E:1,61:1,5P:1,4i:1,7J:1,7M:1,9I:1,a8:1,a9:1,5d:1,aA:1,1Y:1,5j:1,aB:1,1A:1,3e:1,48:1,6k:1},F={3t:0,41:1,2t:2,aC:3,az:4,ay:5,"av":1,"5X":0},I=k.7P=1h A,q=k.aw=1h A;q.1i=s.34,I.1i=s.3F,q.2a=I.2a=!0,k.7h=17(){1a(q.1E((s.34-q.1i)*q.1x,!1,!1),I.1E((s.3F-I.1i)*I.1x,!1,!1),!(s.3F%ax)){19 e,t,n;1b(n 1u H){1b(t=H[n].3J,e=t.1c;--e>-1;)t[e].1O&&t.2Q(e,1);0===t.1c&&3E H[n]}1a(n=q.26,(!n||n.1B)&&O.7j&&!I.26&&1===s.4d.4W.1c){1b(;n&&n.1B;)n=n.1f;n||s.5c()}}},s.79("4W",k.7h);19 R=17(e,t,n){19 r,i,s=e.7g;1a(H[s||(e.7g=s="t"+B++)]||(H[s]={2x:e,3J:[]}),t&&(r=H[s].3J,r[i=r.1c]=t,n))1b(;--i>-1;)r[i]===t&&r.2Q(i,1);18 H[s].3J},U=17(e,t,n,r,i){19 s,o,u,a;1a(1===r||r>=4){1b(a=i.1c,s=0;a>s;s++)1a((u=i[s])!==t)u.1O||u.1N(!1,!1)&&(o=!0);1m 1a(5===r)76;18 o}19 l,c=t.1i+f,h=[],p=0,d=0===t.1C;1b(s=i.1c;--s>-1;)(u=i[s])===t||u.1O||u.1B||(u.1o!==t.1o?(l=l||z(t,0,d),0===z(u,l,d)&&(h[p++]=u)):c>=u.1i&&u.1i+u.23()/u.1x>c&&((d||!u.2z)&&2e-10>=c-u.1i||(h[p++]=u)));1b(s=p;--s>-1;)u=h[s],2===r&&u.2n(n,e)&&(o=!0),(2!==r||!u.1s&&u.2z)&&u.1N(!1,!1)&&(o=!0);18 o},z=17(e,t,n){1b(19 r=e.1o,i=r.1x,s=e.1i;r.1o;){1a(s+=r.1i,i*=r.1x,r.1B)18-22;r=r.1o}18 s/=i,s>t?s-t:n&&s===t||!e.2z&&2*f>s-t?f:(s+=e.23()/e.1x/i)>t+f?0:s-t-f};i.78=17(){19 e,t,n,r,i=15.1p,s=15.3m,o=15.1C,u=i.1Y,a=i.3z;1a(i.30){1a(15.29&&15.29.1E(-1,!0),i.30.4I=0,i.30.1Y=!0,15.29=O.3Q(15.2x,0,i.30),u)1a(15.1n>0)15.29=1d;1m 1a(0!==o)18}1m 1a(i.4w&&0!==o)1a(15.29)15.29.1E(-1,!0),15.29=1d;1m{n={};1b(r 1u i)j[r]&&"6k"!==r||(n[r]=i[r]);1a(n.4I=0,n.1A="8D",15.29=O.3Q(15.2x,0,n),i.1Y){1a(0===15.1n)18}1m 15.29.1E(-1,!0)}1a(15.2H=a?a 2b b?i.5d 2b 3N?a.3o.35(a,i.5d):a:"17"==1j a?1h b(a,i.5d):w[a]||O.6r:O.6r,15.67=15.2H.6v,15.72=15.2H.6t,15.1s=1d,15.2F)1b(e=15.2F.1c;--e>-1;)15.4p(15.2F[e],15.3A[e]={},15.2T[e],s?s[e]:1d)&&(t=!0);1m t=15.4p(15.2x,15.3A,15.2T,s);1a(t&&O.5z("5D",15),s&&(15.1s||"17"!=1j 15.2x&&15.1N(!1,!1)),i.4w)1b(n=15.1s;n;)n.s+=n.c,n.c=-n.c,n=n.1f;15.33=i.5A,15.2z=!0},i.4p=17(t,n,r,i){19 s,o,u,a,f,l;1a(1d==t)18!1;15.1p.4P||t.1w&&t!==e&&t.3n&&P.4P&&15.1p.6k!==!1&&2f(15.1p,t);1b(s 1u 15.1p){1a(l=15.1p[s],j[s])l&&(l 2b 3N||l.2d&&h(l))&&-1!==l.1J("").1k("{4B}")&&(15.1p[s]=l=15.5l(l,15));1m 1a(P[s]&&(a=1h P[s]).6V(t,15.1p[s],15)){1b(15.1s=f={1f:15.1s,t:a,p:"1S",s:0,c:1,f:!0,n:s,4J:!0,2s:a.5W},o=a.2B.1c;--o>-1;)n[a.2B[o]]=15.1s;(a.5W||a.5D)&&(u=!0),(a.65||a.7L)&&(15.4u=!0)}1m 15.1s=n[s]=f={1f:15.1s,t:t,p:s,f:"17"==1j t[s],n:s,4J:!1,2s:0},f.s=f.f?t[s.1k("4h")||"17"!=1j t["71"+s.1q(3)]?s:"71"+s.1q(3)]():1r(t[s]),f.c="1L"==1j l&&"="===l.1v(1)?3v(l.1v(0)+"1",10)*1D(l.1q(2)):1D(l)-f.s||0;f&&f.1f&&(f.1f.1l=f)}18 i&&15.2n(i,t)?15.4p(t,n,r,i):15.6j>1&&15.1s&&r.1c>1&&U(t,15,n,15.6j,r)?(15.2n(n,t),15.4p(t,n,r,i)):u},i.1E=17(e,t,n){19 r,i,s,o,u=15.1n,a=15.1C;1a(e>=a)15.1H=15.1n=a,15.3j=15.2H.3s?15.2H.2w(1):1,15.2M||(r=!0,i="49"),0===a&&(o=15.1z,15.1i===15.1o.1C&&(e=0),(0===e||0>o||o===f)&&o!==e&&(n=!0,o>f&&(i="4i")),15.1z=o=!t||e||15.1z===e?e:f);1m 1a(1e-7>e)15.1H=15.1n=0,15.3j=15.2H.3s?15.2H.2w(0):0,(0!==u||0===a&&15.1z>0&&15.1z!==f)&&(i="4i",r=15.2M),0>e?(15.2a=!1,0===a&&(15.1z>=0&&(n=!0),15.1z=o=!t||e||15.1z===e?e:f)):15.2z||(n=!0);1m 1a(15.1H=15.1n=e,15.67){19 l=e/a,c=15.67,h=15.72;(1===c||3===c&&l>=.5)&&(l=1-l),3===c&&(l*=2),1===h?l*=l:2===h?l*=l*l:3===h?l*=l*l*l:4===h&&(l*=l*l*l*l),15.3j=1===c?1-l:2===c?l:.5>e/a?l/2:1-l/2}1m 15.3j=15.2H.2w(e/a);1a(15.1n!==u||n){1a(!15.2z){1a(15.78(),!15.2z||15.1O)18;15.1n&&!r?15.3j=15.2H.2w(15.1n/a):r&&15.2H.3s&&(15.3j=15.2H.2w(0===15.1n?0:1))}1b(15.2a||!15.1B&&15.1n!==u&&e>=0&&(15.2a=!0),0===u&&(15.29&&(e>=0?15.29.1E(e,t,n):i||(i="aE")),15.1p.4E&&(0!==15.1n||0===a)&&(t||15.1p.4E.35(15.1p.5P||15,15.1p.61||y))),s=15.1s;s;)s.f?s.t[s.p](s.c*15.3j+s.s):s.t[s.p]=s.c*15.3j+s.s,s=s.1f;15.33&&(0>e&&15.29&&15.1i&&15.29.1E(e,t,n),t||(15.1n!==u||r)&&15.33.35(15.1p.5T||15,15.1p.5U||y)),i&&(15.1O||(0>e&&15.29&&!15.33&&15.1i&&15.29.1E(e,t,n),r&&(15.1o.4H&&15.1N(!1,!1),15.2a=!1),!t&&15.1p[i]&&15.1p[i].35(15.1p[i+"5J"]||15,15.1p[i+"5Y"]||y),0===a&&15.1z===f&&o!==f&&(15.1z=0)))}},i.2n=17(e,t){1a("41"===e&&(e=1d),1d==e&&(1d==t||t===15.2x))18 15.1N(!1,!1);t="1L"!=1j t?t||15.2F||15.2x:O.3I(t)||t;19 n,r,i,s,o,u,a,f;1a((h(t)||M(t))&&"2y"!=1j t[0])1b(n=t.1c;--n>-1;)15.2n(e,t[n])&&(u=!0);1m{1a(15.2F){1b(n=15.2F.1c;--n>-1;)1a(t===15.2F[n]){o=15.3A[n]||{},15.3m=15.3m||[],r=15.3m[n]=e?15.3m[n]||{}:"41";76}}1m{1a(t!==15.2x)18!1;o=15.3A,r=15.3m=e?15.3m||{}:"41"}1a(o){a=e||o,f=e!==r&&"41"!==r&&e!==o&&("3U"!=1j e||!e.aK);1b(i 1u a)(s=o[i])&&(s.4J&&s.t.2n(a)&&(u=!0),s.4J&&0!==s.t.2B.1c||(s.1l?s.1l.1f=s.1f:s===15.1s&&(15.1s=s.1f),s.1f&&(s.1f.1l=s.1l),s.1f=s.1l=1d),3E o[i]),f&&(r[i]=1);!15.1s&&15.2z&&15.1N(!1,!1)}}18 u},i.5u=17(){18 15.4u&&O.5z("65",15),15.1s=1d,15.3m=1d,15.33=1d,15.29=1d,15.2z=15.2a=15.4u=!1,15.3A=15.2F?{}:[],15},i.1N=17(e,t){1a(o||s.31(),e&&15.1O){19 n,r=15.2F;1a(r)1b(n=r.1c;--n>-1;)15.2T[n]=R(r[n],15,!0);1m 15.2T=R(15.2x,15,!0)}18 k.1y.1N.1W(15,e,t),15.4u&&15.1s?O.5z(e?"7L":"65",15):!1},O.3Q=17(e,t,n){18 1h O(e,t,n)},O.66=17(e,t,n){18 n.4w=!0,n.1Y=0!=n.1Y,1h O(e,t,n)},O.6b=17(e,t,n,r){18 r.30=n,r.1Y=0!=r.1Y&&0!=n.1Y,1h O(e,t,r)},O.6o=17(e,t,n,r,i){18 1h O(t,0,{4x:e,49:t,6a:n,6s:r,4i:t,7J:n,7M:r,1Y:!1,5K:i,4I:0})},O.4h=17(e,t){18 1h O(e,0,t)},O.40=17(e,t){1a(1d==e)18[];e="1L"!=1j e?e:O.3I(e)||e;19 n,r,i,s;1a((h(e)||M(e))&&"2y"!=1j e[0]){1b(n=e.1c,r=[];--n>-1;)r=r.43(O.40(e[n],t));1b(n=r.1c;--n>-1;)1b(s=r[n],i=n;--i>-1;)s===r[i]&&r.2Q(n,1)}1m 1b(r=R(e).43(),n=r.1c;--n>-1;)(r[n].1O||t&&!r[n].4n())&&r.2Q(n,1);18 r},O.9u=O.aI=17(e,t,n){"3U"==1j t&&(n=t,t=!1);1b(19 r=O.40(e,t),i=r.1c;--i>-1;)r[i].2n(n,e)};19 W=m("4S.80",17(e,t){15.2B=(e||"").1t(","),15.4D=15.2B[0],15.5W=t||0,15.aF=W.1y},!0);1a(i=W.1y,W.3V="1.10.1",W.3w=2,i.1s=1d,i.aG=17(e,t,n,r,i,s){19 o,u;18 1d!=r&&(o="2y"==1j r||"="!==r.1v(1)?1D(r)-n:3v(r.1v(0)+"1",10)*1D(r.1q(2)))?(15.1s=u={1f:15.1s,t:e,p:t,s:n,c:o,f:"17"==1j e[t],n:i||t,r:s},u.1f&&(u.1f.1l=u),u):2h 0},i.1S=17(e){1b(19 t,n=15.1s,r=1e-6;n;)t=n.c*e+n.s,n.r?t=1g.3G(t):r>t&&t>-r&&(t=0),n.f?n.t[n.p](t):n.t[n.p]=t,n=n.1f},i.2n=17(e){19 t,n=15.2B,r=15.1s;1a(1d!=e[15.4D])15.2B=[];1m 1b(t=n.1c;--t>-1;)1d!=e[n[t]]&&n.2Q(t,1);1b(;r;)1d!=e[r.n]&&(r.1f&&(r.1f.1l=r.1l),r.1l?(r.1l.1f=r.1f,r.1l=1d):15.1s===r&&(15.1s=r.1f)),r=r.1f;18!1},i.7u=17(e,t){1b(19 n=15.1s;n;)(e[15.4D]||1d!=n.n&&e[n.n.1t(15.4D+"2f").1J("")])&&(n.r=t),n=n.1f},O.5z=17(e,t){19 n,r,i,s,o,u=t.1s;1a("5D"===e){1b(;u;){1b(o=u.1f,r=i;r&&r.2s>u.2s;)r=r.1f;(u.1l=r?r.1l:s)?u.1l.1f=u:i=u,(u.1f=r)?r.1l=u:s=u,u=o}u=t.1s=i}1b(;u;)u.4J&&"17"==1j u.t[e]&&u.t[e]()&&(n=!0),u=u.1f;18 n},W.6Q=17(e){1b(19 t=e.1c;--t>-1;)e[t].3w===W.3w&&(P[(1h e[t]).4D]=e[t]);18!0},v.2D=17(e){1a(!(e&&e.7m&&e.7o&&e.3w))6l"aH 2D au.";19 t,n=e.7m,r=e.5E||0,i=e.as,s={7o:"6V",4h:"1S",4f:"2n",3G:"7u",af:"5D"},o=m("4S."+n.1v(0).4Z()+n.1q(1)+"8u",17(){W.1W(15,n,r),15.2B=i||[]},e.ag===!0),u=o.1y=1h W(n);u.2K=o,o.3w=e.3w;1b(t 1u s)"17"==1j e[t]&&(u[s[t]]=e[t]);18 o.3V=e.3V,W.6Q([o]),o},n=e.37){1b(r=0;n.1c>r;r++)n[r]();1b(i 1u p)p[i].7A||e.6x.7z("ah ae ad aa: 4Q.4R."+i)}o=!1}})(1Q);(1Q.37||(1Q.37=[])).2d(17(){"4V 4U";1Q.3u("ab",["5C.8H","5C.7y","5f"],17(e,t,n){19 r=17(e){t.1W(15,e),15.2J={},15.4H=15.1p.4H===!0,15.2j=15.1p.2j===!0,15.4K=!0,15.33=15.1p.5A;19 n,r,i=15.1p;1b(r 1u i)n=i[r],o(n)&&-1!==n.1J("").1k("{4B}")&&(i[r]=15.5l(n));o(i.3J)&&15.1U(i.3J,0,i.ac,i.ai)},i=1e-10,s=n.4s.7p,o=n.4s.7E,u=[],a=1Q.3u.77,f=17(e){19 t,n={};1b(t 1u e)n[t]=e[t];18 n},l=17(e,t,n,r){e.1o.5N(e.1i),t&&t.35(r||e.1o,n||u)},c=u.6K,h=r.1y=1h t;18 r.3V="1.11.8",h.2K=r,h.4f().1O=!1,h.3Q=17(e,t,r,i){19 s=r.5j&&a.69||n;18 t?15.1U(1h s(e,t,r),i):15.4h(e,r,i)},h.66=17(e,t,r,i){18 15.1U((r.5j&&a.69||n).66(e,t,r),i)},h.6b=17(e,t,r,i,s){19 o=i.5j&&a.69||n;18 t?15.1U(o.6b(e,t,r,i),s):15.4h(e,i,s)},h.6u=17(e,t,i,o,u,a,l,h){19 p,d=1h r({49:a,6a:l,6s:h,2j:15.2j});1b("1L"==1j e&&(e=n.3I(e)||e),s(e)&&(e=c.1W(e,0)),o=o||0,p=0;e.1c>p;p++)i.30&&(i.30=f(i.30)),d.3Q(e[p],t,f(i),p*o);18 15.1U(d,u)},h.ao=17(e,t,n,r,i,s,o,u){18 n.1Y=0!=n.1Y,n.4w=!0,15.6u(e,t,n,r,i,s,o,u)},h.an=17(e,t,n,r,i,s,o,u,a){18 r.30=n,r.1Y=0!=r.1Y&&0!=n.1Y,15.6u(e,t,r,i,s,o,u,a)},h.1W=17(e,t,r,i){18 15.1U(n.6o(0,e,t,r),i)},h.4h=17(e,t,r){18 r=15.3h(r,0,!0),1d==t.1Y&&(t.1Y=r===15.1n&&!15.1B),15.1U(1h n(e,0,t),r)},r.ak=17(e,t){e=e||{},1d==e.2j&&(e.2j=!0);19 i,s,o=1h r(e),u=o.1o;1b(1d==t&&(t=!0),u.3K(o,!0),o.1i=0,o.1z=o.1n=o.1H=u.1n,i=u.26;i;)s=i.1f,t&&i 2b n&&i.2x===i.1p.49||o.1U(i,i.1i-i.2L),i=s;18 u.1U(o,0),o},h.1U=17(i,s,u,a){19 f,l,c,h,p,d;1a("2y"!=1j s&&(s=15.3h(s,0,!0,i)),!(i 2b e)){1a(i 2b 3N||i&&i.2d&&o(i)){1b(u=u||"al",a=a||0,f=s,l=i.1c,c=0;l>c;c++)o(h=i[c])&&(h=1h r({3J:h})),15.1U(h,f),"1L"!=1j h&&"17"!=1j h&&("am"===u?f=h.1i+h.23()/h.1x:"aN"===u&&(h.1i-=h.4x())),f+=a;18 15.3c(!0)}1a("1L"==1j i)18 15.7x(i,s);1a("17"!=1j i)6l"7e 1U "+i+" 93 8Y 21; 3D 94 8K a 6R, 21, 17, 8X 1L.";i=n.6o(0,i)}1a(t.1y.1U.1W(15,i,s),(15.1O||15.1n===15.1C)&&!15.1B&&15.1C<15.2C())1b(p=15,d=p.3H()>i.1i;p.1o;)d&&p.1o.2j?p.2Z(p.1H,!0):p.1O&&p.1N(!0,!1),p=p.1o;18 15},h.5n=17(t){1a(t 2b e)18 15.3K(t,!1);1a(t 2b 3N||t&&t.2d&&o(t)){1b(19 n=t.1c;--n>-1;)15.5n(t[n]);18 15}18"1L"==1j t?15.7n(t):15.4f(1d,t)},h.3K=17(e,n){t.1y.3K.1W(15,e,n);19 r=15.3l;18 r?15.1n>r.1i+r.2i/r.1x&&(15.1n=15.2C(),15.1H=15.2i):15.1n=15.1H=15.1C=15.2i=0,15},h.92=17(e,t){18 15.1U(e,15.3h(1d,t,!0,e))},h.7w=h.9t=17(e,t,n,r){18 15.1U(e,t||0,n,r)},h.9m=17(e,t,n,r){18 15.1U(e,15.3h(1d,t,!0,e),n,r)},h.7x=17(e,t){18 15.2J[e]=15.3h(t),15},h.9l=17(e,t,n,r){18 15.1W(l,["{4B}",t,n,r],15,e)},h.7n=17(e){18 3E 15.2J[e],15},h.9j=17(e){18 1d!=15.2J[e]?15.2J[e]:-1},h.3h=17(t,n,r,i){19 s;1a(i 2b e&&i.21===15)15.5n(i);1m 1a(i&&(i 2b 3N||i.2d&&o(i)))1b(s=i.1c;--s>-1;)i[s]2b e&&i[s].21===15&&15.5n(i[s]);1a("1L"==1j n)18 15.3h(n,r&&"2y"==1j t&&1d==15.2J[n]?t-15.2C():0,r);1a(n=n||0,"1L"!=1j t||!6d(t)&&1d==15.2J[t])1d==t&&(t=15.2C());1m{1a(s=t.1k("="),-1===s)18 1d==15.2J[t]?r?15.2J[t]=15.2C()+n:n:15.2J[t]+n;n=3v(t.1v(s-1)+"1",10)*1D(t.1q(s+1)),t=s>1?15.3h(t.1q(0,s-1),0,r):15.2C()}18 1D(t)+n},h.4b=17(e,t){18 15.2Z("2y"==1j e?e:15.3h(e),t!==!1)},h.9n=17(){18 15.3e(!0)},h.9o=17(e,t){18 15.73(e,t)},h.9s=17(e,t){18 15.5N(e,t)},h.1E=17(e,t,n){15.1O&&15.1N(!0,!1);19 r,s,o,a,f,l=15.2r?15.23():15.2i,c=15.1n,h=15.1i,p=15.1x,d=15.1B;1a(e>=l?(15.1H=15.1n=l,15.2M||15.5I()||(s=!0,a="49",0===15.1C&&(0===e||0>15.1z||15.1z===i)&&15.1z!==e&&15.26&&(f=!0,15.1z>i&&(a="4i"))),15.1z=15.1C||!t||e||15.1z===e?e:i,e=l+1e-4):1e-7>e?(15.1H=15.1n=0,(0!==c||0===15.1C&&15.1z!==i&&(15.1z>0||0>e&&15.1z>=0))&&(a="4i",s=15.2M),0>e?(15.2a=!1,0===15.1C&&15.1z>=0&&15.26&&(f=!0),15.1z=e):(15.1z=15.1C||!t||e||15.1z===e?e:i,e=0,15.2z||(f=!0))):15.1H=15.1n=15.1z=e,15.1n!==c&&15.26||n||f){1a(15.2z||(15.2z=!0),15.2a||!15.1B&&15.1n!==c&&e>0&&(15.2a=!0),0===c&&15.1p.4E&&0!==15.1n&&(t||15.1p.4E.35(15.1p.5P||15,15.1p.61||u)),15.1n>=c)1b(r=15.26;r&&(o=r.1f,!15.1B||d);)(r.2a||r.1i<=15.1n&&!r.1B&&!r.1O)&&(r.2M?r.1E((r.2r?r.23():r.2i)-(e-r.1i)*r.1x,t,n):r.1E((e-r.1i)*r.1x,t,n)),r=o;1m 1b(r=15.3l;r&&(o=r.1l,!15.1B||d);)(r.2a||c>=r.1i&&!r.1B&&!r.1O)&&(r.2M?r.1E((r.2r?r.23():r.2i)-(e-r.1i)*r.1x,t,n):r.1E((e-r.1i)*r.1x,t,n)),r=o;15.33&&(t||15.33.35(15.1p.5T||15,15.1p.5U||u)),a&&(15.1O||(h===15.1i||p!==15.1x)&&(0===15.1n||l>=15.23())&&(s&&(15.1o.4H&&15.1N(!1,!1),15.2a=!1),!t&&15.1p[a]&&15.1p[a].35(15.1p[a+"5J"]||15,15.1p[a+"5Y"]||u)))}},h.5I=17(){1b(19 e=15.26;e;){1a(e.1B||e 2b r&&e.5I())18!0;e=e.1f}18!1},h.5s=17(e,t,r,i){i=i||-59;1b(19 s=[],o=15.26,u=0;o;)i>o.1i||(o 2b n?t!==!1&&(s[u++]=o):(r!==!1&&(s[u++]=o),e!==!1&&(s=s.43(o.5s(!0,t,r)),u=s.1c))),o=o.1f;18 s},h.40=17(e,t){1b(19 r=n.40(e),i=r.1c,s=[],o=0;--i>-1;)(r[i].21===15||t&&15.8B(r[i]))&&(s[o++]=r[i]);18 s},h.8B=17(e){1b(19 t=e.21;t;){1a(t===15)18!0;t=t.21}18!1},h.8p=17(e,t,n){n=n||0;1b(19 r,i=15.26,s=15.2J;i;)i.1i>=n&&(i.1i+=e),i=i.1f;1a(t)1b(r 1u s)s[r]>=n&&(s[r]+=e);18 15.3c(!0)},h.2n=17(e,t){1a(!e&&!t)18 15.1N(!1,!1);1b(19 n=t?15.40(t):15.5s(!0,!0,!1),r=n.1c,i=!1;--r>-1;)n[r].2n(e,t)&&(i=!0);18 i},h.9a=17(e){19 t=15.5s(!1,!0,!0),n=t.1c;1b(15.1n=15.1H=0;--n>-1;)t[n].1N(!1,!1);18 e!==!1&&(15.2J={}),15.3c(!0)},h.5u=17(){1b(19 e=15.26;e;)e.5u(),e=e.1f;18 15},h.1N=17(e,n){1a(e===15.1O)1b(19 r=15.26;r;)r.1N(e,!0),r=r.1f;18 t.1y.1N.1W(15,e,n)},h.2C=17(e){18 2m.1c?(0!==15.2C()&&0!==e&&15.6q(15.1C/e),15):(15.2r&&15.23(),15.1C)},h.23=17(e){1a(!2m.1c){1a(15.2r){1b(19 t,n,r=0,i=15.3l,s=9b;i;)t=i.1l,i.2r&&i.23(),i.1i>s&&15.4K&&!i.1B?15.1U(i,i.1i-i.2L):s=i.1i,0>i.1i&&!i.1B&&(r-=i.1i,15.1o.2j&&(15.1i+=i.1i/15.1x),15.8p(-i.1i,!1,-59),s=0),n=i.1i+i.2i/i.1x,n>r&&(r=n),i=t;15.1C=15.2i=r,15.2r=!1}18 15.2i}18 0!==15.23()&&0!==e&&15.6q(15.2i/e),15},h.9d=17(){1b(19 t=15.1o;t.1o;)t=t.1o;18 t===e.7P},h.3H=17(){18 15.1B?15.1H:(15.1o.3H()-15.1i)*15.1x},r},!0)}),1Q.3u&&1Q.37.4q()();(1Q.37||(1Q.37=[])).2d(17(){"4V 4U";1Q.3u("2o.7Y",["2o.8h"],17(e){19 t,n,r,i=1Q.5Z||1Q,s=i.4Q.4R,o=2*1g.4o,u=1g.4o/2,a=s.8k,f=17(t,n){19 r=a("2o."+t,17(){},!0),i=r.1y=1h e;18 i.2K=r,i.2w=n,r},l=e.8l||17(){},c=17(e,t,n,r){19 i=a("2o."+e,{6c:1h t,5k:1h n,5m:1h r},!0);18 l(i,e),i},h=17(e,t,n){15.t=e,15.v=t,n&&(15.5w=n,n.5y=15,15.c=n.v-t,15.8v=n.t-e)},p=17(t,n){19 r=a("2o."+t,17(e){15.1T=e||0===e?e:1.aO,15.2q=1.cW*15.1T},!0),i=r.1y=1h e;18 i.2K=r,i.2w=n,i.3o=17(e){18 1h r(e)},r},d=c("7Y",p("cv",17(e){18(e-=1)*e*((15.1T+1)*e+15.1T)+1}),p("cr",17(e){18 e*e*((15.1T+1)*e-15.1T)}),p("co",17(e){18 1>(e*=2)?.5*e*e*((15.2q+1)*e-15.2q):.5*((e-=2)*e*((15.2q+1)*e+15.2q)+2)})),v=a("2o.6w",17(e,t,n){t=t||0===t?t:.7,1d==e?e=.7:e>1&&(e=1),15.89=1!==e?t:0,15.1T=(1-e)/2,15.2q=e,15.3f=15.1T+15.2q,15.3s=n===!0},!0),m=v.1y=1h e;18 m.2K=v,m.2w=17(e){19 t=e+(.5-e)*15.89;18 15.1T>e?15.3s?1-(e=1-e/15.1T)*e:t-(e=1-e/15.1T)*e*e*e*t:e>15.3f?15.3s?1-(e=(e-15.3f)/15.1T)*e:t+(e-t)*(e=(e-15.3f)/15.1T)*e*e*e:15.3s?1:t},v.3z=1h v(.7,.7),m.3o=v.3o=17(e,t,n){18 1h v(e,t,n)},t=a("2o.87",17(e){e=e||1,15.1T=1/e,15.2q=e+1},!0),m=t.1y=1h e,m.2K=t,m.2w=17(e){18 0>e?e=0:e>=1&&(e=.cG),(15.2q*e>>0)*15.1T},m.3o=t.3o=17(e){18 1h t(e)},n=a("2o.7f",17(t){t=t||{};1b(19 n,r,i,s,o,u,a=t.cE||"3t",f=[],l=0,c=0|(t.cI||20),p=c,d=t.cA!==!1,v=t.cJ===!0,m=t.8N 2b e?t.8N:1d,g="2y"==1j t.8R?.4*t.8R:.4;--p>-1;)n=d?1g.8A():1/c*p,r=m?m.2w(n):n,"3t"===a?i=g:"cK"===a?(s=1-n,i=s*s*g):"1u"===a?i=n*n*g:.5>n?(s=2*n,i=.5*s*s*g):(s=2*(1-n),i=.5*s*s*g),d?r+=1g.8A()*i-.5*i:p%2?r+=.5*i:r-=.5*i,v&&(r>1?r=1:0>r&&(r=0)),f[l++]={x:n,y:r};1b(f.cL(17(e,t){18 e.x-t.x}),u=1h h(1,1,1d),p=c;--p>-1;)o=f[p],u=1h h(o.x,o.y,u);15.1l=1h h(0,0,0!==u.t?u:u.5w)},!0),m=n.1y=1h e,m.2K=n,m.2w=17(e){19 t=15.1l;1a(e>t.t){1b(;t.5w&&e>=t.t;)t=t.5w;t=t.5y}1m 1b(;t.5y&&t.t>=e;)t=t.5y;18 15.1l=t,t.v+(e-t.t)/t.8v*t.c},m.3o=17(e){18 1h n(e)},n.3z=1h n,c("cH",f("cF",17(e){18 1/2.75>e?7.2I*e*e:2/2.75>e?7.2I*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.2I*(e-=2.25/2.75)*e+.6m:7.2I*(e-=2.6n/2.75)*e+.6p}),f("cM",17(e){18 1/2.75>(e=1-e)?1-7.2I*e*e:2/2.75>e?1-(7.2I*(e-=1.5/2.75)*e+.75):2.5/2.75>e?1-(7.2I*(e-=2.25/2.75)*e+.6m):1-(7.2I*(e-=2.6n/2.75)*e+.6p)}),f("cN",17(e){19 t=.5>e;18 e=t?1-2*e:2*e-1,e=1/2.75>e?7.2I*e*e:2/2.75>e?7.2I*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.2I*(e-=2.25/2.75)*e+.6m:7.2I*(e-=2.6n/2.75)*e+.6p,t?.5*(1-e):.5*e+.5})),c("cO",f("cP",17(e){18 1g.38(1-(e-=1)*e)}),f("cQ",17(e){18-(1g.38(1-e*e)-1)}),f("cD",17(e){18 1>(e*=2)?-.5*(1g.38(1-e*e)-1):.5*(1g.38(1-(e-=2)*e)+1)})),r=17(t,n,r){19 i=a("2o."+t,17(e,t){15.1T=e||1,15.2q=t||r,15.3f=15.2q/o*(1g.cp(1/15.1T)||0)},!0),s=i.1y=1h e;18 s.2K=i,s.2w=n,s.3o=17(e,t){18 1h i(e,t)},i},c("cn",r("cm",17(e){18 15.1T*1g.3p(2,-10*e)*1g.2k((e-15.3f)*o/15.2q)+1},.3),r("cj",17(e){18-(15.1T*1g.3p(2,10*(e-=1))*1g.2k((e-15.3f)*o/15.2q))},.3),r("ck",17(e){18 1>(e*=2)?-.5*15.1T*1g.3p(2,10*(e-=1))*1g.2k((e-15.3f)*o/15.2q):.5*15.1T*1g.3p(2,-10*(e-=1))*1g.2k((e-15.3f)*o/15.2q)+1},.45)),c("cl",f("cs",17(e){18 1-1g.3p(2,-10*e)}),f("cz",17(e){18 1g.3p(2,10*(e-1))-.cX}),f("cB",17(e){18 1>(e*=2)?.5*1g.3p(2,10*(e-1)):.5*(2-1g.3p(2,-10*(e-1)))})),c("cy",f("cx",17(e){18 1g.2k(e*u)}),f("cu",17(e){18-1g.2E(e*u)+1}),f("cw",17(e){18-.5*(1g.2E(1g.4o*e)-1)})),a("2o.dg",{df:17(t){18 e.7C[t]}},!0),l(i.6w,"6w","3z,"),l(n,"7f","3z,"),l(t,"87","3z,"),d},!0)}),1Q.3u&&1Q.37.4q()();(1Q.37||(1Q.37=[])).2d(17(){"4V 4U";1Q.3u("4S.dl",["4S.80","5f"],17(e,t){19 n,r,i,s,o=17(){e.1W(15,"4P"),15.2B.1c=0,15.1S=o.1y.1S},u={},a=o.1y=1h e("4P");a.2K=o,o.3V="1.11.8",o.3w=2,o.81=0,o.8w="cY",a="2c",o.6E={4z:a,7G:a,7F:a,4A:a,3k:a,3y:a,dk:a,6B:a,6U:a,3b:a,dd:""};19 f,l,c,h,p,d,v=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d)+/g,m=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d|\\+=\\d|\\-=\\d|\\+=.\\d|\\-=\\.\\d)+/g,g=/(?:\\+=|\\-=|\\-|\\b)[\\d\\-\\.]+[a-d7-dn-9]*(?:%|\\b)/3M,y=/[^\\d\\-\\.]/g,b=/(?:\\d|\\-|\\+|=|#|\\.)*/g,w=/1Z *= *([^)]*)/,E=/1Z:([^;]*)/,S=/3B\\(1Z *=.+?\\)/i,x=/^(5h|6y)/,T=/([A-Z])/g,N=/-([a-z])/3M,C=/(^(?:8t\\(\\"|8t\\())|(?:(\\"\\))$|\\)$)/3M,k=17(e,t){18 t.4Z()},L=/(?:6i|7T|7H)/i,A=/(8c|8d|8n|8m)=[\\d\\-\\.e]+/3M,O=/82\\:5Q\\.5S\\.5V\\(.+?\\)/i,M=/,(?=[^\\)]*(?:\\(|$))/3M,2f=1g.4o/36,D=36/1g.4o,P={},H=6h,B=H.6e("74"),j=H.6e("d2"),F=o.4s={dm:u},I=dc.cC,q=17(){19 e,t=I.1k("ch"),n=H.6e("74");18 c=-1!==I.1k("bj")&&-1===I.1k("bk")&&(-1===t||1D(I.1q(t+8,1))>3),p=c&&6>1D(I.1q(I.1k("bl/")+8,1)),h=-1!==I.1k("bh"),/bg ([0-9]{1,}[\\.0-9]{0,})/.bc(I)&&(d=1r(46.$1)),n.bd="<a 1w=\'4z:be;1Z:.55;\'>a</a>",e=n.bf("a")[0],e?/^0.55/.2P(e.1w.1Z):!1}(),R=17(e){18 w.2P("1L"==1j e?e:(e.2X?e.2X.2l:e.1w.2l)||"")?1r(46.$1)/22:1},U=17(e){1Q.6x&&6x.7z(e)},z="",W="",X=17(e,t){t=t||B;19 n,r,i=t.1w;1a(2h 0!==i[e])18 e;1b(e=e.1v(0).4Z()+e.1q(1),n=["O","bn","5t","bv","bw"],r=5;--r>-1&&2h 0===i[n[r]+e];);18 r>=0?(W=3===r?"5t":n[r],z="-"+W.6P()+"-",W+e):1d},V=H.7v?H.7v.bx:17(){},$=o.bu=17(e,t,n,r,i){19 s;18 q||"1Z"!==t?(!r&&e.1w[t]?s=e.1w[t]:(n=n||V(e,1d))?s=n[t]||n.42(t)||n.42(t.1I(T,"-$1").6P()):e.2X&&(s=e.2X[t]),1d==i||s&&"3t"!==s&&"2t"!==s&&"2t 2t"!==s?s:i):R(e)},J=F.bs=17(e,n,r,i,s){1a("2c"===i||!i)18 r;1a("2t"===i||!r)18 0;19 u,a,f,l=L.2P(n),c=e,h=B.1w,p=0>r;1a(p&&(r=-r),"%"===i&&-1!==n.1k("3X"))u=r/22*(l?e.bo:e.bp);1m{1a(h.3d="3X:0 5x 7i;4m:"+$(e,"4m")+";bq-3y:0;","%"!==i&&c.7r)h[l?"84":"6X"]=r+i;1m{1a(c=e.ci||H.br,a=c.6g,f=t.6f.3F,a&&l&&a.34===f)18 a.3k*r/22;h[l?"3k":"3y"]=r+i}c.7r(B),u=1r(B[l?"4N":"4M"]),c.aV(B),l&&"%"===i&&o.aW!==!1&&(a=c.6g=c.6g||{},a.34=f,a.3k=22*(u/r)),0!==u||s||(u=J(e,n,r,i,!0))}18 p?-u:u},K=F.aX=17(e,t,n){1a("83"!==$(e,"4m",n))18 0;19 r="4A"===t?"6i":"7N",i=$(e,"6U"+r,n);18 e["aY"+r]-(J(e,t,1r(i),i.1I(b,""))||0)},Q=17(e,t){19 n,r,i={};1a(t=t||V(e,1d))1a(n=t.1c)1b(;--n>-1;)i[t[n].1I(N,k)]=t.42(t[n]);1m 1b(n 1u t)i[n]=t[n];1m 1a(t=e.2X||e.1w)1b(n 1u t)"1L"==1j n&&2h 0===i[n]&&(i[n.1I(N,k)]=t[n]);18 q||(i.1Z=R(e)),r=4l(e,t,!1),i.1K=r.1K,i.1R=r.1R,i.28=r.28,i.2g=r.2g,i.x=r.x,i.y=r.y,39&&(i.z=r.z,i.1P=r.1P,i.1V=r.1V,i.2W=r.2W),i.7R&&3E i.7R,i},G=17(e,t,n,r,i){19 s,o,u,a={},f=e.1w;1b(o 1u n)"3d"!==o&&"1c"!==o&&6d(o)&&(t[o]!==(s=n[o])||i&&i[o])&&-1===o.1k("aU")&&("2y"==1j s||"1L"==1j s)&&(a[o]="2t"!==s||"4A"!==o&&"4z"!==o?""!==s&&"2t"!==s&&"3t"!==s||"1L"!=1j t[o]||""===t[o].1I(y,"")?s:0:K(e,o),2h 0!==f[o]&&(u=1h ct(f,o,f[o],u)));1a(r)1b(o 1u r)"3a"!==o&&(a[o]=r[o]);18{57:a,4e:u}},Y={3k:["6i","7T"],3y:["7N","aP"]},Z=["7K","7S","7B","7U"],3L=17(e,t,n){19 r=1r("3k"===t?e.4N:e.4M),i=Y[t],s=i.1c;1b(n=n||V(e,1d);--s>-1;)r-=1r($(e,"6B"+i[s],n,!0))||0,r-=1r($(e,"3X"+i[s]+"7H",n,!0))||0;18 r},3g=17(e,t){(1d==e||""===e||"2t"===e||"2t 2t"===e)&&(e="0 0");19 n=e.1t(" "),r=-1!==e.1k("4A")?"0%":-1!==e.1k("7G")?"22%":n[0],i=-1!==e.1k("4z")?"0%":-1!==e.1k("7F")?"22%":n[1];18 1d==i?i="0":"7l"===i&&(i="50%"),("7l"===r||6d(1r(r))&&-1===(r+"").1k("="))&&(r="50%"),t&&(t.8o=-1!==r.1k("%"),t.8r=-1!==i.1k("%"),t.aQ="="===r.1v(1),t.aR="="===i.1v(1),t.52=1r(r.1I(y,"")),t.5R=1r(i.1I(y,""))),r+" "+i+(n.1c>2?" "+n[2]:"")},3q=17(e,t){18"1L"==1j e&&"="===e.1v(1)?3v(e.1v(0)+"1",10)*1r(e.1q(2)):1r(e)-1r(t)},2A=17(e,t){18 1d==e?t:"1L"==1j e&&"="===e.1v(1)?3v(e.1v(0)+"1",10)*1D(e.1q(2))+t:1r(e)},3D=17(e,t,n,r){19 i,s,o,u,a=1e-6;18 1d==e?u=t:"2y"==1j e?u=e:(i=68,s=e.1t("2f"),o=1D(s[0].1I(y,""))*(-1===e.1k("aS")?1:D)-("="===e.1v(1)?0:t),s.1c&&(r&&(r[n]=t+o),-1!==e.1k("aZ")&&(o%=i,o!==o%(i/2)&&(o=0>o?o+i:o-i)),-1!==e.1k("b0")&&0>o?o=(o+59*i)%i-(0|o/i)*i:-1!==e.1k("b7")&&o>0&&(o=(o-59*i)%i-(0|o/i)*i)),u=t+o),a>u&&u>-a&&(u=0),u},3x={b9:[0,1F,1F],b6:[0,1F,0],b5:[58,58,58],7I:[0,0,0],b1:[2N,0,0],b2:[0,2N,2N],b3:[0,0,1F],b4:[0,0,2N],by:[1F,1F,1F],bz:[1F,0,1F],c3:[2N,2N,0],c4:[1F,1F,0],c5:[1F,c2,0],c1:[2N,2N,2N],bX:[2N,0,2N],bY:[0,2N,0],7i:[1F,0,0],c0:[1F,58,c7],ce:[0,1F,1F],4g:[1F,1F,1F,0]},5a=17(e,t,n){18 e=0>e?e+1:e>1?e-1:e,0|1F*(1>6*e?t+6*(n-t)*e:.5>e?n:2>3*e?t+6*(n-t)*(2/3-e):t)+.5},5i=17(e){19 t,n,r,i,s,o;18 e&&""!==e?"2y"==1j e?[e>>16,1F&e>>8,1F&e]:(","===e.1v(e.1c-1)&&(e=e.1q(0,e.1c-1)),3x[e]?3x[e]:"#"===e.1v(0)?(4===e.1c&&(t=e.1v(1),n=e.1v(2),r=e.1v(3),e="#"+t+t+n+n+r+r),e=3v(e.1q(1),16),[e>>16,1F&e>>8,1F&e]):"6y"===e.1q(0,3)?(e=e.2G(v),i=1D(e[0])%68/68,s=1D(e[1])/22,o=1D(e[2])/22,n=.5>=o?o*(s+1):o+s-o*s,t=2*o-n,e.1c>3&&(e[3]=1D(e[3])),e[0]=5a(i+1/3,t,n),e[1]=5a(i,t,n),e[2]=5a(i-1/3,t,n),e):(e=e.2G(v)||3x.4g,e[0]=1D(e[0]),e[1]=1D(e[1]),e[2]=1D(e[2]),e.1c>3&&(e[3]=1D(e[3])),e)):3x.7I},at="(?:\\\\b(?:(?:5h|6Z|6y|cc)\\\\(.+?\\\\))|\\\\B#.+?\\\\b";1b(a 1u 3x)at+="|"+a+"\\\\b";at=46(at+")","3M");19 6H=17(e,t,n,r){1a(1d==e)18 17(e){18 e};19 i,s=t?(e.2G(at)||[""])[0]:"",o=e.1t(s).1J("").2G(g)||[],u=e.1q(0,e.1k(o[0])),a=")"===e.1v(e.1c-1)?")":"",f=-1!==e.1k(" ")?" ":",",l=o.1c,c=l>0?o[0].1I(v,""):"";18 l?i=t?17(e){19 t,h,p,d;1a("2y"==1j e)e+=c;1m 1a(r&&M.2P(e)){1b(d=e.1I(M,"|").1t("|"),p=0;d.1c>p;p++)d[p]=i(d[p]);18 d.1J(",")}1a(t=(e.2G(at)||[s])[0],h=e.1t(t).1J("").2G(g)||[],p=h.1c,l>p--)1b(;l>++p;)h[p]=n?h[0|(p-1)/2]:o[p];18 u+h.1J(f)+f+t+a+(-1!==e.1k("6Y")?" 6Y":"")}:17(e){19 t,s,h;1a("2y"==1j e)e+=c;1m 1a(r&&M.2P(e)){1b(s=e.1I(M,"|").1t("|"),h=0;s.1c>h;h++)s[h]=i(s[h]);18 s.1J(",")}1a(t=e.2G(g)||[],h=t.1c,l>h--)1b(;l>++h;)t[h]=n?t[0|(h-1)/2]:o[h];18 u+t.1J(f)+a}:17(e){18 e}},5g=17(e){18 e=e.1t(","),17(t,n,r,i,s,o,u){19 a,f=(n+"").1t(" ");1b(u={},a=0;4>a;a++)u[e[a]]=f[a]=f[a]||f[(a-1)/2>>0];18 i.2O(t,u,s,o)}},ct=(F.c8=17(e){15.2D.1S(e);1b(19 t,n,r,i,s=15.1A,o=s.7W,u=s.4e,a=1e-6;u;)t=o[u.v],u.r?t=1g.3G(t):a>t&&t>-a&&(t=0),u.t[u.p]=t,u=u.1f;1a(s.8F&&(s.8F.1K=o.1K),1===e)1b(u=s.4e;u;){1a(n=u.t,n.2p){1a(1===n.2p){1b(i=n.1X+n.s+n.4a,r=1;n.l>r;r++)i+=n["3i"+r]+n["2R"+(r+1)];n.e=i}}1m n.e=n.s+n.1X;u=u.1f}},17(e,t,n,r,i){15.t=e,15.p=t,15.v=n,15.r=i,r&&(r.1l=15,15.1f=r)}),27=(F.c9=17(e,t,n,r,i,s){19 o,u,a,f,l,c=r,h={},p={},d=n.3r,v=P;1b(n.3r=1d,P=t,r=l=n.2O(e,t,r,i),P=v,s&&(n.3r=d,c&&(c.1l=1d,c.1l&&(c.1l.1f=1d)));r&&r!==c;){1a(1>=r.2p&&(u=r.p,p[u]=r.s+r.c,h[u]=r.s,s||(f=1h ct(r,"s",u,f,r.r),r.c=0),1===r.2p))1b(o=r.l;--o>0;)a="3i"+o,u=r.p+"2f"+a,p[u]=r.1A[a],h[u]=r[a],s||(f=1h ct(r,a,u,f,r.56[a]));r=r.1f}18{7W:h,ca:p,4e:f,4j:l}},F.cb=17(e,t,r,i,o,u,a,f,l,c,h){15.t=e,15.p=t,15.s=r,15.c=i,15.n=a||t,e 2b 27||s.2d(15.n),15.r=f,15.2p=u||0,l&&(15.2s=l,n=!0),15.b=2h 0===c?r:c,15.e=2h 0===h?r+i:h,o&&(15.1f=o,o.1l=15)}),4j=o.3Y=17(e,t,n,r,i,s,o,u,a,l){n=n||s||"",o=1h 27(e,t,0,0,o,l?2:1,1d,!1,u,n,r),r+="";19 c,h,p,d,g,y,b,w,E,S,T,N,C=n.1t(", ").1J(",").1t(" "),k=r.1t(", ").1J(",").1t(" "),L=C.1c,A=f!==!1;1b((-1!==r.1k(",")||-1!==n.1k(","))&&(C=C.1J(" ").1I(M,", ").1t(" "),k=k.1J(" ").1I(M,", ").1t(" "),L=C.1c),L!==k.1c&&(C=(s||"").1t(" "),L=C.1c),o.2D=a,o.1S=l,c=0;L>c;c++)1a(d=C[c],g=k[c],w=1r(d),w||0===w)o.3S("",w,3q(g,w),g.1I(m,""),A&&-1!==g.1k("2c"),!0);1m 1a(i&&("#"===d.1v(0)||3x[d]||x.2P(d)))N=","===g.1v(g.1c-1)?"),":")",d=5i(d),g=5i(g),E=d.1c+g.1c>6,E&&!q&&0===g[3]?(o["2R"+o.l]+=o.l?" 4g":"4g",o.e=o.e.1t(k[c]).1J("4g")):(q||(E=!1),o.3S(E?"6Z(":"5h(",d[0],g[0]-d[0],",",!0,!0).3S("",d[1],g[1]-d[1],",",!0).3S("",d[2],g[2]-d[2],E?",":N,!0),E&&(d=4>d.1c?1:d[3],o.3S("",d,(4>g.1c?1:g[3])-d,N,!1)));1m 1a(y=d.2G(v)){1a(b=g.2G(m),!b||b.1c!==y.1c)18 o;1b(p=0,h=0;y.1c>h;h++)T=y[h],S=d.1k(T,p),o.3S(d.1q(p,S-p),1D(T),3q(b[h],T),"",A&&"2c"===d.1q(S+T.1c,2),0===h),p=S+T.1c;o["2R"+o.l]+=d.1q(p)}1m o["2R"+o.l]+=o.l?" "+d:d;1a(-1!==r.1k("=")&&o.1A){1b(N=o.1X+o.1A.s,c=1;o.l>c;c++)N+=o["2R"+c]+o.1A["3i"+c];o.e=N+o["2R"+c]}18 o.l||(o.2p=-1,o.1X=o.e),o.3C||o},2u=9;1b(a=27.1y,a.l=a.2s=0;--2u>0;)a["3i"+2u]=0,a["2R"+2u]="";a.1X="",a.1f=a.1l=a.3C=a.1A=a.2D=a.1S=a.56=1d,a.3S=17(e,t,n,r,i,s){19 o=15,u=o.l;18 o["2R"+u]+=s&&u?" "+e:e||"",n||0===u||o.2D?(o.l++,o.2p=o.1S?2:1,o["2R"+o.l]=r||"",u>0?(o.1A["3i"+u]=t+n,o.56["3i"+u]=i,o["3i"+u]=t,o.2D||(o.3C=1h 27(o,"3i"+u,t,n,o.3C||o,0,o.n,i,o.2s),o.3C.1X=0),o):(o.1A={s:t+n},o.56={},o.s=t,o.c=n,o.r=i,o)):(o["2R"+u]+=t+(r||""),o)};19 5O=17(e,t){t=t||{},15.p=t.2V?X(e)||e:e,u[e]=u[15.p]=15,15.2U=t.4v||6H(t.2v,t.4c,t.bW,t.3W),t.24&&(15.2O=t.24),15.8T=t.4c,15.3W=t.3W,15.5b=t.5b,15.3Z=t.2v,15.2s=t.5E||0},1G=F.bV=17(e,t,n){"3U"!=1j t&&(t={24:n});19 r,i,s=e.1t(","),o=t.2v;1b(n=n||[o],r=0;s.1c>r;r++)t.2V=0===r&&t.2V,t.2v=n[r]||o,i=1h 5O(s[r],t)},7a=17(e){1a(!u[e]){19 t=e.1v(0).4Z()+e.1q(1)+"8u";1G(e,{24:17(e,n,r,i,s,o,a){19 f=(1Q.5Z||1Q).4Q.4R.4S[t];18 f?(f.bG(),u[r].2O(e,n,r,i,s,o,a)):(U("bH: "+t+" bI bJ 8K bF."),s)}})}};a=5O.1y,a.3Y=17(e,t,n,r,i,s){19 o,u,a,f,l,c,h=15.5b;1a(15.3W&&(M.2P(n)||M.2P(t)?(u=t.1I(M,"|").1t("|"),a=n.1I(M,"|").1t("|")):h&&(u=[t],a=[n])),a){1b(f=a.1c>u.1c?a.1c:u.1c,o=0;f>o;o++)t=u[o]=u[o]||15.3Z,n=a[o]=a[o]||15.3Z,h&&(l=t.1k(h),c=n.1k(h),l!==c&&(n=-1===c?a:u,n[o]+=" "+h));t=u.1J(", "),n=a.1J(", ")}18 4j(e,15.p,t,n,15.8T,15.3Z,r,15.2s,i,s)},a.2O=17(e,t,n,r,s,o){18 15.3Y(e.1w,15.2U($(e,15.p,i,!1,15.3Z)),15.2U(t),s,o)},o.bE=17(e,t,n){1G(e,{24:17(e,r,i,s,o,u){19 a=1h 27(e,i,0,0,o,2,i,!1,n);18 a.2D=u,a.1S=t(e,r,s.2Y,i),a},5E:n})};19 6O="28,2g,2W,x,y,z,1R,32,1K,1P,1V,3b".1t(","),bt=X("3R"),8O=z+"3R",5q=X("4G"),39=1d!==X("3b"),5F=F.bB=17(){15.32=0},4l=F.bC=17(e,t,n,r){1a(e.3T&&n&&!r)18 e.3T;19 i,s,u,a,f,l,c,h,p,d,v,m,g,y=n?e.3T||1h 5F:1h 5F,b=0>y.28,w=2e-5,E=4X,S=bD.99,x=S*2f,T=39?1r($(e,5q,t,!1,"0 0 0").1t(" ")[2])||y.2S||0:0;1b(bt?i=$(e,8O,t,!0):e.2X&&(i=e.2X.2l.2G(A),i=i&&4===i.1c?[i[0].1q(4),1D(i[2].1q(4)),1D(i[1].1q(4)),i[3].1q(4),y.x||0,y.y||0].1J(","):""),s=(i||"").2G(/(?:\\-|\\b)[\\d\\-\\.e]+\\b/3M)||[],u=s.1c;--u>-1;)a=1D(s[u]),s[u]=(f=a-(a|=0))?(0|f*E+(0>f?-.5:.5))/E+a:a;1a(16===s.1c){19 N=s[8],C=s[9],k=s[10],L=s[12],O=s[13],M=s[14];1a(y.2S&&(M=-y.2S,L=N*M-s[12],O=C*M-s[13],M=k*M+y.2S-s[14]),!n||r||1d==y.1P){19 P,H,B,j,F,I,q,R=s[0],U=s[1],z=s[2],W=s[3],X=s[4],V=s[5],J=s[6],K=s[7],Q=s[11],G=1g.4F(J,k),Y=-x>G||G>x;y.1P=G*D,G&&(j=1g.2E(-G),F=1g.2k(-G),P=X*j+N*F,H=V*j+C*F,B=J*j+k*F,N=X*-F+N*j,C=V*-F+C*j,k=J*-F+k*j,Q=K*-F+Q*j,X=P,V=H,J=B),G=1g.4F(N,R),y.1V=G*D,G&&(I=-x>G||G>x,j=1g.2E(-G),F=1g.2k(-G),P=R*j-N*F,H=U*j-C*F,B=z*j-k*F,C=U*F+C*j,k=z*F+k*j,Q=W*F+Q*j,R=P,U=H,z=B),G=1g.4F(U,V),y.1K=G*D,G&&(q=-x>G||G>x,j=1g.2E(-G),F=1g.2k(-G),R=R*j+X*F,H=U*j+V*F,V=U*-F+V*j,J=z*-F+J*j,U=H),q&&Y?y.1K=y.1P=0:q&&I?y.1K=y.1V=0:I&&Y&&(y.1V=y.1P=0),y.28=(0|1g.38(R*R+U*U)*E+.5)/E,y.2g=(0|1g.38(V*V+C*C)*E+.5)/E,y.2W=(0|1g.38(J*J+k*k)*E+.5)/E,y.1R=0,y.3b=Q?1/(0>Q?-Q:Q):0,y.x=L,y.y=O,y.z=M}}1m 1a(!(39&&!r&&s.1c&&y.x===s[4]&&y.y===s[5]&&(y.1P||y.1V)||2h 0!==y.x&&"3t"===$(e,"6S",t))){19 Z=s.1c>=6,3L=Z?s[0]:1,3g=s[1]||0,3q=s[2]||0,2A=Z?s[3]:1;y.x=s[4]||0,y.y=s[5]||0,l=1g.38(3L*3L+3g*3g),c=1g.38(2A*2A+3q*3q),h=3L||3g?1g.4F(3g,3L)*D:y.1K||0,p=3q||2A?1g.4F(3q,2A)*D+h:y.1R||0,d=l-1g.51(y.28||0),v=c-1g.51(y.2g||0),1g.51(p)>90&&bS>1g.51(p)&&(b?(l*=-1,p+=0>=h?36:-36,h+=0>=h?36:-36):(c*=-1,p+=0>=p?36:-36)),m=(h-y.1K)%36,g=(p-y.1R)%36,(2h 0===y.1R||d>w||-w>d||v>w||-w>v||m>-S&&S>m&&5X|m*E||g>-S&&S>g&&5X|g*E)&&(y.28=l,y.2g=c,y.1K=h,y.1R=p),39&&(y.1P=y.1V=y.z=0,y.3b=1r(o.81)||0,y.2W=1)}y.2S=T;1b(u 1u y)w>y[u]&&y[u]>-w&&(y[u]=0);18 n&&(e.3T=y),y},7q=17(e){19 t,n,r=15.1A,i=-r.1K*2f,s=i+r.1R*2f,o=4X,u=(0|1g.2E(i)*r.28*o)/o,a=(0|1g.2k(i)*r.28*o)/o,f=(0|1g.2k(s)*-r.2g*o)/o,l=(0|1g.2E(s)*r.2g*o)/o,c=15.t.1w,h=15.t.2X;1a(h){n=a,a=-f,f=-n,t=h.2l,c.2l="";19 p,v,m=15.t.4N,g=15.t.4M,y="83"!==h.4m,E="82:5Q.5S.5V(8c="+u+", 8d="+a+", 8n="+f+", 8m="+l,S=r.x,x=r.y;1a(1d!=r.52&&(p=(r.8o?.8q*m*r.52:r.52)-m/2,v=(r.8r?.8q*g*r.5R:r.5R)-g/2,S+=p-(p*u+v*a),x+=v-(p*f+v*l)),y?(p=m/2,v=g/2,E+=", 8e="+(p-(p*u+v*a)+S)+", 8g="+(v-(p*f+v*l)+x)+")"):E+=", bU=\'2t bR\')",c.2l=-1!==t.1k("5Q.5S.5V(")?t.1I(O,E):E+" "+t,(0===e||1===e)&&1===u&&0===a&&0===f&&1===l&&(y&&-1===E.1k("8e=0, 8g=0")||w.2P(t)&&22!==1r(46.$1)||-1===t.1k("bN("&&t.1k("bO"))&&c.6W("2l")),!y){19 T,N,C,k=8>d?1:-1;1b(p=r.53||0,v=r.5p||0,r.53=1g.3G((m-((0>u?-u:u)*m+(0>a?-a:a)*g))/2+S),r.5p=1g.3G((g-((0>l?-l:l)*g+(0>f?-f:f)*m))/2+x),2u=0;4>2u;2u++)N=Z[2u],T=h[N],n=-1!==T.1k("2c")?1r(T):J(15.t,N,1r(T),T.1I(b,""))||0,C=n!==r[N]?2>2u?-r.53:-r.5p:2>2u?p-r.53:v-r.5p,c[N]=(r[N]=1g.3G(n-C*(0===2u||2===2u?1:k)))+"2c"}}},5o=F.d3=17(){19 e,t,n,r,i,s,o,u,a,f,l,c,p,d,v,m,g,y,b,w,E,S,x,T=15.1A,N=15.t.1w,C=T.1K*2f,k=T.28,L=T.2g,A=T.2W,O=T.3b;1a(h){19 M=1e-4;M>k&&k>-M&&(k=A=2e-5),M>L&&L>-M&&(L=A=2e-5),!O||T.z||T.1P||T.1V||(O=0)}1a(C||T.1R)y=1g.2E(C),b=1g.2k(C),e=y,i=b,T.1R&&(C-=T.1R*2f,y=1g.2E(C),b=1g.2k(C),"bP"===T.4r&&(w=1g.bM(T.1R*2f),w=1g.38(1+w*w),y*=w,b*=w)),t=-b,s=y;1m{1a(!(T.1V||T.1P||1!==A||O))18 N[bt]="bQ("+T.x+"2c,"+T.y+"2c,"+T.z+"2c)"+(1!==k||1!==L?" 4y("+k+","+L+")":""),2h 0;e=s=1,t=i=0}l=1,n=r=o=u=a=f=c=p=d=0,v=O?-1/O:0,m=T.2S,g=4X,C=T.1V*2f,C&&(y=1g.2E(C),b=1g.2k(C),a=l*-b,p=v*-b,n=e*b,o=i*b,l*=y,v*=y,e*=y,i*=y),C=T.1P*2f,C&&(y=1g.2E(C),b=1g.2k(C),w=t*y+n*b,E=s*y+o*b,S=f*y+l*b,x=d*y+v*b,n=t*-b+n*y,o=s*-b+o*y,l=f*-b+l*y,v=d*-b+v*y,t=w,s=E,f=S,d=x),1!==A&&(n*=A,o*=A,l*=A,v*=A),1!==L&&(t*=L,s*=L,f*=L,d*=L),1!==k&&(e*=k,i*=k,a*=k,p*=k),m&&(c-=m,r=n*c,u=o*c,c=l*c+m),r=(w=(r+=T.x)-(r|=0))?(0|w*g+(0>w?-.5:.5))/g+r:r,u=(w=(u+=T.y)-(u|=0))?(0|w*g+(0>w?-.5:.5))/g+u:u,c=(w=(c+=T.z)-(c|=0))?(0|w*g+(0>w?-.5:.5))/g+c:c,N[bt]="bT("+[(0|e*g)/g,(0|i*g)/g,(0|a*g)/g,(0|p*g)/g,(0|t*g)/g,(0|s*g)/g,(0|f*g)/g,(0|d*g)/g,(0|n*g)/g,(0|o*g)/g,(0|l*g)/g,(0|v*g)/g,r,u,c,O?1+ -c/O:1].1J(",")+")"},7t=F.bL=17(e){19 t,n,r,i,s,o=15.1A,u=15.t,a=u.1w;18 o.1P||o.1V||o.z||o.44?(15.1S=5o,5o.1W(15,e),2h 0):(o.1K||o.1R?(t=o.1K*2f,n=t-o.1R*2f,r=4X,i=o.28*r,s=o.2g*r,a[bt]="8P("+(0|1g.2E(t)*i)/r+","+(0|1g.2k(t)*i)/r+","+(0|1g.2k(n)*-s)/r+","+(0|1g.2E(n)*s)/r+","+o.x+","+o.y+")"):a[bt]="8P("+o.28+",0,0,"+o.2g+","+o.x+","+o.y+")",2h 0)};1G("3R,4y,28,2g,2W,x,y,z,1K,1P,1V,6M,1R,32,6N,6G,6A,bK,4G,8U,8x,8M,44,4r",{24:17(e,t,n,r,s,u,a){1a(r.3r)18 s;19 f,l,c,h,p,d,v,m=r.3r=4l(e,i,!0,a.8M),g=e.1w,y=1e-6,b=6O.1c,w=a,E={};1a("1L"==1j w.3R&&bt)c=g.3d,g[bt]=w.3R,g.6S="bA",f=4l(e,1d,!1),g.3d=c;1m 1a("3U"==1j w){1a(f={28:2A(1d!=w.28?w.28:w.4y,m.28),2g:2A(1d!=w.2g?w.2g:w.4y,m.2g),2W:2A(w.2W,m.2W),x:2A(w.x,m.x),y:2A(w.y,m.y),z:2A(w.z,m.z),3b:2A(w.8U,m.3b)},v=w.8x,1d!=v)1a("3U"==1j v)1b(c 1u v)w[c]=v[c];1m w.1K=v;f.1K=3D("1K"1u w?w.1K:"6N"1u w?w.6N+"6F":"6M"1u w?w.6M:m.1K,m.1K,"1K",E),39&&(f.1P=3D("1P"1u w?w.1P:"6G"1u w?w.6G+"6F":m.1P||0,m.1P,"1P",E),f.1V=3D("1V"1u w?w.1V:"6A"1u w?w.6A+"6F":m.1V||0,m.1V,"1V",E)),f.1R=1d==w.1R?m.1R:3D(w.1R,m.1R),f.32=1d==w.32?m.32:3D(w.32,m.32),(l=f.32-m.32)&&(f.1R+=l,f.1K+=l)}1b(39&&1d!=w.44&&(m.44=w.44,d=!0),m.4r=w.4r||m.4r||o.8w,p=m.44||m.z||m.1P||m.1V||f.z||f.1P||f.1V||f.3b,p||1d==w.4y||(f.2W=1);--b>-1;)n=6O[b],h=f[n]-m[n],(h>y||-y>h||1d!=P[n])&&(d=!0,s=1h 27(m,n,m[n],h,s),n 1u E&&(s.e=E[n]),s.1X=0,s.2D=u,r.2B.2d(s.n));18 h=w.4G,(h||39&&p&&m.2S)&&(bt?(d=!0,n=5q,h=(h||$(e,n,i,!1,"50% 50%"))+"",s=1h 27(g,n,0,0,s,-1,"4G"),s.b=g[n],s.2D=u,39?(c=m.2S,h=h.1t(" "),m.2S=(h.1c>2&&(0===c||"1M"!==h[2])?1r(h[2]):c)||0,s.1X=s.e=g[n]=h[0]+" "+(h[1]||"50%")+" 1M",s=1h 27(m,"2S",0,0,s,-1,s.n),s.b=c,s.1X=s.e=m.2S):s.1X=s.e=g[n]=h):3g(h+"",m)),d&&(r.47=p||3===15.47?3:2),s},2V:!0}),1G("cd",{2v:"1M 1M 1M 1M #8i",2V:!0,4c:!0,3W:!0,5b:"6Y"}),1G("cg",{2v:"1M",24:17(e,t,n,s,o){t=15.2U(t);19 u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x=["cf","c6","bZ","b8"],T=e.1w;1b(v=1r(e.4N),m=1r(e.4M),u=t.1t(" "),a=0;x.1c>a;a++)15.p.1k("3X")&&(x[a]=X(x[a])),c=l=$(e,x[a],i,!1,"1M"),-1!==c.1k(" ")&&(l=c.1t(" "),c=l[0],l=l[1]),h=f=u[a],p=1r(c),y=c.1q((p+"").1c),b="="===h.1v(1),b?(d=3v(h.1v(0)+"1",10),h=h.1q(2),d*=1r(h),g=h.1q((d+"").1c-(0>d?1:0))||""):(d=1r(h),g=h.1q((d+"").1c)),""===g&&(g=r[n]||y),g!==y&&(w=J(e,"7Q",p,y),E=J(e,"aT",p,y),"%"===g?(c=22*(w/v)+"%",l=22*(E/m)+"%"):"4k"===g?(S=J(e,"7Q",1,"4k"),c=w/S+"4k",l=E/S+"4k"):(c=w+"2c",l=E+"2c"),b&&(h=1r(c)+d+g,f=1r(l)+d+g)),o=4j(T,x[a],c+" "+l,h+" "+f,!1,"1M",o);18 o},2V:!0,4v:6H("1M 1M 1M 1M",!1,!0)}),1G("ba",{2v:"0 0",24:17(e,t,n,r,s,o){19 u,a,f,l,c,h,p="bb-4m",v=i||V(e,1d),m=15.2U((v?d?v.42(p+"-x")+" "+v.42(p+"-y"):v.42(p):e.2X.bm+" "+e.2X.bi)||"0 0"),g=15.2U(t);1a(-1!==m.1k("%")!=(-1!==g.1k("%"))&&(h=$(e,"d1").1I(C,""),h&&"3t"!==h)){1b(u=m.1t(" "),a=g.1t(" "),j.d9("d5",h),f=2;--f>-1;)m=u[f],l=-1!==m.1k("%"),l!==(-1!==a[f].1k("%"))&&(c=0===f?e.4N-j.3k:e.4M-j.3y,u[f]=l?1r(m)/22*c+"2c":22*(1r(m)/c)+"%");m=u.1J(" ")}18 15.3Y(e.1w,m,g,s,o)},4v:3g}),1G("db",{2v:"0 0",4v:3g}),1G("3b",{2v:"1M",2V:!0}),1G("dj",{2v:"50% 50%",2V:!0}),1G("di",{2V:!0}),1G("dh",{2V:!0}),1G("de",{2V:!0}),1G("6U",{24:5g("7B,7S,7U,7K")}),1G("6B",{24:5g("cq,cR,cV,cU")}),1G("cT",{2v:"8y(1M,1M,1M,1M)",24:17(e,t,n,r,s,o){19 u,a,f;18 9>d?(a=e.2X,f=8>d?" ":",",u="8y("+a.cS+f+a.d4+f+a.da+f+a.cZ+")",t=15.2U(t).1t(",").1J(f)):(u=15.2U($(e,15.p,i,!1,15.3Z)),t=15.2U(t)),15.3Y(e.1w,u,t,s,o)}}),1G("d6",{2v:"1M 1M 1M #8i",4c:!0,3W:!0}),1G("7c,8b",{24:17(e,t,n,r,i){18 i}}),1G("3X",{2v:"1M 5x #6T",24:17(e,t,n,r,s,o){18 15.3Y(e.1w,15.2U($(e,"6X",i,!1,"1M")+" "+$(e,"d8",i,!1,"5x")+" "+$(e,"d0",i,!1,"#6T")),15.2U(t),s,o)},4c:!0,4v:17(e){19 t=e.1t(" ");18 t[0]+" "+(t[1]||"5x")+" "+(e.2G(at)||["#6T"])[0]}}),1G("9e",{24:5g("6X,9f,9g,84")}),1G("9c,6L,86",{24:17(e,t,n,r,i){19 s=e.1w,o="6L"1u s?"6L":"86";18 1h 27(s,o,0,0,i,-1,n,!1,0,s[o],t)}});19 8s=17(e){19 t,n=15.t,r=n.2l||$(15.1A,"2l"),i=0|15.s+15.c*e;22===i&&(-1===r.1k("96(")&&-1===r.1k("97(")&&-1===r.1k("98(")?(n.6W("2l"),t=!$(15.1A,"2l")):(n.2l=r.1I(S,""),t=!0)),t||(15.3P&&(n.2l=r=r||"3B(1Z="+i+")"),-1===r.1k("1Z")?0===i&&15.3P||(n.2l=r+" 3B(1Z="+i+")"):n.2l=r.1I(w,"1Z="+i))};1G("1Z,3B,4T",{2v:"1",24:17(e,t,n,r,s,o){19 u=1r($(e,"1Z",i,!1,"1")),a=e.1w,f="4T"===n;18"1L"==1j t&&"="===t.1v(1)&&(t=("-"===t.1v(0)?-1:1)*1r(t.1q(2))+u),f&&1===u&&"5v"===$(e,"6z",i)&&0!==t&&(u=0),q?s=1h 27(a,"1Z",u,t-u,s):(s=1h 27(a,"1Z",22*u,22*(t-u),s),s.3P=f?1:0,a.7s=1,s.2p=2,s.b="3B(1Z="+s.s+")",s.e="3B(1Z="+(s.s+s.c)+")",s.1A=e,s.2D=o,s.1S=8s),f&&(s=1h 27(a,"6z",0,0,s,-1,1d,!1,0,0!==u?"6I":"5v",0===t?"5v":"6I"),s.1X="6I",r.2B.2d(s.n),r.2B.2d(n)),s}});19 5r=17(e,t){t&&(e.8z?("5t"===t.1q(0,2)&&(t="M"+t.1q(1)),e.8z(t.1I(T,"-$1").6P())):e.6W(t))},8I=17(e){1a(15.t.4L=15,1===e||0===e){15.t.3a=0===e?15.b:15.e;1b(19 t=15.1A,n=15.t.1w;t;)t.v?n[t.p]=t.v:5r(n,t.p),t=t.1f;1===e&&15.t.4L===15&&(15.t.4L=1d)}1m 15.t.3a!==15.e&&(15.t.3a=15.e)};1G("3a",{24:17(e,t,r,s,o,u,a){19 f,l,c,h,p,d=e.3a,v=e.1w.3d;1a(o=s.6J=1h 27(e,r,0,0,o,2),o.1S=8I,o.2s=-11,n=!0,o.b=d,l=Q(e,i),c=e.4L){1b(h={},p=c.1A;p;)h[p.p]=1,p=p.1f;c.1S(1)}18 e.4L=o,o.e="="!==t.1v(1)?t:d.1I(46("\\\\s*\\\\b"+t.1q(2)+"\\\\b"),"")+("+"===t.1v(0)?" "+t.1q(2):""),s.2Y.1C&&(e.3a=o.e,f=G(e,l,Q(e),a,h),e.3a=d,o.1A=f.4e,e.1w.3d=v,o=o.3C=s.2O(e,f.57,o,u)),o}});19 8E=17(e){1a((1===e||0===e)&&15.1A.1H===15.1A.2i&&"8D"!==15.1A.1A){19 t,n,r,i,s=15.t.1w,o=u.3R.2O;1a("41"===15.e)s.3d="",i=!0;1m 1b(t=15.e.1t(","),r=t.1c;--r>-1;)n=t[r],u[n]&&(u[n].2O===o?i=!0:n="4G"===n?5q:u[n].p),5r(s,n);i&&(5r(s,bt),15.t.3T&&3E 15.t.3T)}};1b(1G("9h",{24:17(e,t,r,i,s){18 s=1h 27(e,r,0,0,s,2),s.1S=8E,s.e=t,s.2s=-10,s.1A=i.2Y,n=!0,s}}),a="9i,9p,9q,95".1t(","),2u=a.1c;2u--;)7a(a[2u]);a=o.1y,a.1s=1d,a.6V=17(e,t,u){1a(!e.3n)18!1;15.7V=e,15.2Y=u,15.7d=t,f=t.7c,n=!1,r=t.6E||o.6E,i=V(e,""),s=15.2B;19 a,h,d,v,m,g,y,b,w,S=e.1w;1a(l&&""===S.3O&&(a=$(e,"3O",i),("2t"===a||""===a)&&(S.3O=0)),"1L"==1j t&&(v=S.3d,a=Q(e,i),S.3d=v+";"+t,a=G(e,a,Q(e)).57,!q&&E.2P(t)&&(a.1Z=1r(46.$1)),t=a,S.3d=v),15.1s=h=15.2O(e,t,1d),15.47){1b(w=3===15.47,bt?c&&(l=!0,""===S.3O&&(y=$(e,"3O",i),("2t"===y||""===y)&&(S.3O=0)),p&&(S.7b=15.7d.7b||(w?"9r":"5v"))):S.7s=1,d=h;d&&d.1f;)d=d.1f;b=1h 27(e,"3R",0,0,1d,2),15.5e(b,1d,d),b.1S=w&&39?5o:bt?7t:7q,b.1A=15.3r||4l(e,i,!0),s.4q()}1a(n){1b(;h;){1b(g=h.1f,d=v;d&&d.2s>h.2s;)d=d.1f;(h.1l=d?d.1l:m)?h.1l.1f=h:v=h,(h.1f=d)?d.1l=h:m=h,h=g}15.1s=v}18!0},a.2O=17(e,t,n,s){19 o,a,l,c,h,p,d,v,m,g,y=e.1w;1b(o 1u t)p=t[o],a=u[o],a?n=a.2O(e,p,o,15,n,s,t):(h=$(e,o,i)+"",m="1L"==1j p,"4c"===o||"9k"===o||"91"===o||-1!==o.1k("8Z")||m&&x.2P(p)?(m||(p=5i(p),p=(p.1c>3?"6Z(":"5h(")+p.1J(",")+")"),n=4j(y,o,h,p,!0,"4g",n,0,s)):!m||-1===p.1k(" ")&&-1===p.1k(",")?(l=1r(h),d=l||0===l?h.1q((l+"").1c):"",(""===h||"2t"===h)&&("3k"===o||"3y"===o?(l=3L(e,o,i),d="2c"):"4A"===o||"4z"===o?(l=K(e,o,i),d="2c"):(l="1Z"!==o?0:1,d="")),g=m&&"="===p.1v(1),g?(c=3v(p.1v(0)+"1",10),p=p.1q(2),c*=1r(p),v=p.1I(b,"")):(c=1r(p),v=m?p.1q((c+"").1c)||"":""),""===v&&(v=o 1u r?r[o]:d),p=c||0===c?(g?c+l:c)+v:t[o],d!==v&&""!==v&&(c||0===c)&&l&&(l=J(e,o,l,d),"%"===v?(l/=J(e,o,22,"%")/22,t.8b!==!0&&(h=l+"%")):"4k"===v?l/=J(e,o,1,"4k"):"2c"!==v&&(c=J(e,o,c,v),v="2c"),g&&(c||0===c)&&(p=c+l+v)),g&&(c+=l),!l&&0!==l||!c&&0!==c?2h 0!==y[o]&&(p||"ar"!=p+""&&1d!=p)?(n=1h 27(y,o,c||l||0,0,n,-1,o,!1,0,h,p),n.1X="3t"!==p||"6S"!==o&&-1===o.1k("aq")?p:h):U("ap "+o+" 6R aj: "+t[o]):(n=1h 27(y,o,l,c-l,n,0,o,f!==!1&&("2c"===v||"3O"===o),0,h,p),n.1X=v)):n=4j(y,o,h,p,!0,1d,n,0,s)),s&&n&&!n.2D&&(n.2D=s);18 n},a.1S=17(e){19 t,n,r,i=15.1s,s=1e-6;1a(1!==e||15.2Y.1n!==15.2Y.1C&&0!==15.2Y.1n)1a(e||15.2Y.1n!==15.2Y.1C&&0!==15.2Y.1n||15.2Y.1z===-1e-6)1b(;i;){1a(t=i.c*e+i.s,i.r?t=1g.3G(t):s>t&&t>-s&&(t=0),i.2p)1a(1===i.2p)1a(r=i.l,2===r)i.t[i.p]=i.1X+t+i.4a+i.3P+i.5B;1m 1a(3===r)i.t[i.p]=i.1X+t+i.4a+i.3P+i.5B+i.6D+i.6C;1m 1a(4===r)i.t[i.p]=i.1X+t+i.4a+i.3P+i.5B+i.6D+i.6C+i.7D+i.7O;1m 1a(5===r)i.t[i.p]=i.1X+t+i.4a+i.3P+i.5B+i.6D+i.6C+i.7D+i.7O+i.aJ+i.aM;1m{1b(n=i.1X+t+i.4a,r=1;i.l>r;r++)n+=i["3i"+r]+i["2R"+(r+1)];i.t[i.p]=n}1m-1===i.2p?i.t[i.p]=i.1X:i.1S&&i.1S(e);1m i.t[i.p]=t+i.1X;i=i.1f}1m 1b(;i;)2!==i.2p?i.t[i.p]=i.b:i.1S(e),i=i.1f;1m 1b(;i;)2!==i.2p?i.t[i.p]=i.e:i.1S(e),i=i.1f},a.aL=17(e){15.47=e||3===15.47?3:2,15.3r=15.3r||4l(15.7V,i,!0)},a.5e=17(e,t,n,r){18 e&&(t&&(t.1l=e),e.1f&&(e.1f.1l=e.1l),e.1l?e.1l.1f=e.1f:15.1s===e&&(15.1s=e.1f,r=!0),n?n.1f=e:r||1d!==15.1s||(15.1s=e),e.1f=t,e.1l=n),e},a.2n=17(t){19 n,r,i,s=t;1a(t.4T||t.3B){s={};1b(r 1u t)s[r]=t[r];s.1Z=1,s.4T&&(s.6z=1)}18 t.3a&&(n=15.6J)&&(i=n.3C,i&&i.1l?15.5e(i.1l,n.1f,i.1l.1l):i===15.1s&&(15.1s=n.1f),n.1f&&15.5e(n.1f,n.1f.1f,i.1l),15.6J=1d),e.1y.2n.1W(15,s)};19 4t=17(e,t,n){19 r,i,s,o;1a(e.6K)1b(i=e.1c;--i>-1;)4t(e[i],t,n);1m 1b(r=e.70,i=r.1c;--i>-1;)s=r[i],o=s.2p,s.1w&&(t.2d(Q(s)),n&&n.2d(s)),1!==o&&9!==o&&11!==o||!s.70.1c||4t(s,t,n)};18 o.aD=17(e,n,r){19 i,s,o,u=t.3Q(e,n,r),a=[u],f=[],l=[],c=[],h=t.4s.7k;1b(e=u.2F||u.2x,4t(e,f,c),u.1E(n,!0),4t(e,l),u.1E(0,!0),u.1N(!0),i=c.1c;--i>-1;)1a(s=G(c[i],f[i],l[i]),s.4e){s=s.57;1b(o 1u r)h[o]&&(s[o]=r[o]);a.2d(t.3Q(c[i],n,s))}18 a},e.6Q([o]),o},!0)}),1Q.3u&&1Q.37.4q()()', 62, 830, '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this||function|return|var|if|for|length|null||_next|Math|new|_startTime|typeof|indexOf|_prev|else|_time|_timeline|vars|substr|parseFloat|_firstPT|split|in|charAt|style|_timeScale|prototype|_rawPrevTime|data|_paused|_duration|Number|render|255|mt|_totalTime|replace|join|rotation|string|0px|_enabled|_gc|rotationX|window|skewX|setRatio|_p1|add|rotationY|call|xs0|immediateRender|opacity||timeline|100|totalDuration|parser||_first|ht|scaleX|_startAt|_active|instanceof|px|push||_|scaleY|void|_totalDuration|smoothChildTiming|sin|filter|arguments|_kill|easing|type|_p2|_dirty|pr|auto|dt|defaultValue|getRatio|target|number|_initted|rt|_overwriteProps|duration|plugin|cos|_targets|match|_ease|5625|_labels|constructor|_delay|_reversed|128|parse|test|splice|xs|zOrigin|_siblings|format|prefix|scaleZ|currentStyle|_tween|totalTime|startAt|wake|skewY|_onUpdate|time|apply|180|_gsQueue|sqrt|St|className|perspective|_uncache|cssText|paused|_p3|tt|_parseTimeOrLabel|xn|ratio|width|_last|_overwrittenProps|nodeType|config|pow|nt|_transform|_calcEnd|none|_gsDefine|parseInt|API|st|height|ease|_propLookup|alpha|xfirst|it|delete|frame|round|rawTime|selector|tweens|_remove|et|gi|Array|zIndex|xn1|to|transform|appendXtra|_gsTransform|object|version|multi|border|parseComplex|dflt|getTweensOf|all|getPropertyValue|concat|force3D||RegExp|_transformType|reversed|onComplete|xs1|seek|color|_listeners|firstMPT|kill|transparent|set|onReverseComplete|pt|em|Tt|position|isActive|PI|_initProps|pop|skewType|_internals|_t|_notifyPluginsOfEnabled|formatter|runBackwards|delay|scale|top|left|self|sc|_propName|onStart|atan2|transformOrigin|autoRemoveChildren|overwrite|pg|_sortChildren|_gsClassPT|offsetHeight|offsetWidth|_pauseTime|css|com|greensock|plugins|autoAlpha|strict|use|tick|1e5|Ticker|toUpperCase||abs|ox|ieOffsetX|gsClass||rxp|difs|192|9999999999|ot|keyword|sleep|easeParams|_linkCSSP|TweenLite|lt|rgb|ut|repeat|easeIn|_swapSelfInParams|easeInOut|remove|Ct|ieOffsetY|Et|At|getChildren|ms|invalidate|hidden|next|solid|prev|_onPluginEvent|onUpdate|xs2|core|_onInitAllProps|priority|xt|fps|_params|_hasPausedChild|Scope|useFrames|_func|setTimeout|pause|vt|onStartScope|DXImageTransform|oy|Microsoft|onUpdateScope|onUpdateParams|Matrix|_priority|false|Params|GreenSockGlobals||onStartParams|module|define|check|_onDisable|from|_easeType|360|TweenMax|onCompleteParams|fromTo|easeOut|isNaN|createElement|ticker|_gsCache|document|Left|_overwrite|autoCSS|throw|9375|625|delayedCall|984375|timeScale|defaultEase|onCompleteScope|_power|staggerTo|_type|SlowMo|console|hsl|visibility|shortRotationY|padding|xs3|xn2|suffixMap|_short|shortRotationX|ft|inherit|_classNamePT|slice|cssFloat|rotationZ|shortRotation|yt|toLowerCase|activate|tween|display|000|margin|_onInitTween|removeAttribute|borderTopWidth|inset|rgba|childNodes|get|_easePower|play|div||break|globals|_init|addEventListener|gt|WebkitBackfaceVisibility|autoRound|_vars|Cannot|RoughEase|_gsTweenID|_updateRoot|red|autoSleep|reservedProps|center|propName|removeLabel|init|isSelector|Nt|appendChild|zoom|kt|_roundProps|defaultView|insert|addLabel|SimpleTimeline|log|func|marginTop|map|xn3|isArray|bottom|right|Width|black|onReverseCompleteParams|marginLeft|_onEnable|onReverseCompleteScope|Top|xs4|_rootFramesTimeline|borderLeft|filters|marginRight|Right|marginBottom|_target|proxy|Linear|Back|Quad|TweenPlugin|defaultTransformPerspective|progid|absolute|borderLeftWidth|_eventTarget|styleFloat|SteppedEase|Date|_p|up|strictUnits|M11|M12|Dx|exports|Dy|Ease|999|GreenSockAMDPath|_class|register|M22|M21|oxp|shiftChildren|01|oyp|Lt|url|Plugin|gap|defaultSkewType|directionalRotation|rect|removeProperty|random|_contains|startTime|isFromStart|Mt|autoRotate|defaultOverwrite|Animation|Ot|2e3|not|1e3|parseTransform|template|wt|matrix|dispatchEvent|strength|useRAF|clrs|transformPerspective|events|EventDispatcher|or|the|Color||stroke|append|into|is|physics2D|atrix|radient|oader||clear|999999999999|float|usesFrames|borderWidth|borderRightWidth|borderBottomWidth|clearProps|bezier|getLabelTime|fill|addPause|appendMultiple|stop|gotoAndPlay|throwProps|physicsProps|visible|gotoAndStop|insertMultiple|killTweensOf|resume|restart|reverse|eventCallback|1500|clearTimeout|CancelAnimationFrame|CancelRequestAnimationFrame|004|on|progress|_plugins|_tweenLookup|onRepeat|getElementById|jQuery|totalProgress|jquery|_autoCSS|RequestAnimationFrame|webkit|Quart|Quint|Strong|Cubic|undefined|Object|toString|amd|Power|easeNone|now|getTime|moz|cancelAnimationFrame|requestAnimationFrame|linear|swing|removeEventListener|onRepeatParams|onRepeatScope|dependency|TimelineLite|align|missing|encountered|initAll|global|GSAP|stagger|value|exportRoot|normal|sequence|staggerFromTo|staggerFrom|invalid|Style|NaN|overwriteProps||definition|true|_rootTimeline|120|preexisting|allOnStart|yoyo|repeatDelay|concurrent|cascadeTo|_dummyGS|_super|_addTween|illegal|killDelayedCallsTo|xn4|_tempKill|_enableTransforms|xs5|start|70158|Bottom|oxr|oyr|rad|borderTop|Origin|removeChild|cacheWidths|calculateOffset|offset|short|_cw|maroon|teal|blue|navy|silver|lime|ccw|borderBottomLeftRadius|aqua|backgroundPosition|background|exec|innerHTML|1px|getElementsByTagName|MSIE|Firefox|backgroundPositionY|Safari|Chrome|Version|backgroundPositionX|Moz|clientWidth|clientHeight|line|body|convertToPixels||getStyle|Ms|Webkit|getComputedStyle|white|fuchsia|block|Transform|getTransform|179|registerSpecialProp|loaded|_cssRegister|Error|js|file|shortRotationZ|set2DTransformRatio|tan|gradient|Alpha|simple|translate3d|expand|270|matrix3d|sizingMethod|_registerComplexSpecialProp|collapsible|purple|green|borderBottomRightRadius|pink|gray|165|olive|yellow|orange|borderTopRightRadius|203|_setPluginRatio|_parseToProxy|end|CSSPropTween|hsla|boxShadow|cyan|borderTopLeftRadius|borderRadius|Android|parentNode|ElasticIn|ElasticInOut|Expo|ElasticOut|Elastic|BackInOut|asin|paddingTop|BackIn|ExpoOut||SineIn|BackOut|SineInOut|SineOut|Sine|ExpoIn|randomize|ExpoInOut|userAgent|CircInOut|taper|BounceOut|999999999|Bounce|points|clamp|out|sort|BounceIn|BounceInOut|Circ|CircOut|CircIn|paddingRight|clipTop|clip|paddingLeft|paddingBottom|525|001|compensated|clipLeft|borderTopColor|backgroundImage|img|set3DTransformRatio|clipRight|src|textShadow|zA|borderTopStyle|setAttribute|clipBottom|backgroundSize|navigator|lineHeight|userSelect|find|EaseLookup|backfaceVisibility|transformStyle|perspectiveOrigin|fontSize|CSSPlugin|_specialProps|Z0'.split('|'), 0, {}));
eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('14 bl(t,e,i){17 a;"5F"==1O t?a=3K("#"+t):"aW"==1O t&&(a=t);17 s,o;2t(e){1g"aT":s="bz 3K ab",o=\'a7 a6 4J bA cK ac 4I 4P cq c9 an cJ cN 2X 1X 3K a1 c5 bW 1Z 2O 2i af 4P bV. <aa>4M bU 3P 4P 5A bY bP 2i 1X bO cM 2X 2O 4V em 1X "ek dX dY 2i 5h" eK eL 1X eQ & eN eD 3D.</aa>\';1p;1g"9b":s="5T 3K ab",o="a7 a6 4J dS dR de an 5T 3Y ("+i+\') 2X 1X 3K a1. 2O dd at da 3Y 1.7.0 4I db. 4M am 3K 2i 1.10.x 4I dg. dh: 4M do 2G dm 1X 3K dl ac 3P 5A 4V do 2G am 2i 2.x 3Y 2X 3K dj 5n 3x 2G aD d9 d8 cZ 4J cX 7 & 8. <a 2M="6z://cV.cW.3R/d1/4/5z-1Z-d2/#9P-13&9s-60">d6 d5 d4 dp dJ dH 3K by dQ dP.</a>\'}a.1k("11-3U"),a.42(\'<p 1q="11-dM">!</p>\'),a.42(\'<p 1q="11-3U-dN">2O: \'+s+"</p>"),a.42(\'<p 1q="11-3U-9x">\'+o+"</p>")}!14(t){1c("3a"!=1O 7M)1Z(17 e 3I 7M)12[e]=7M[e];t.bn.3i=14(e){17 a="1.7.0",s=t.bn.aT,o=t(12),r=14(t,e){1Z(17 i=t.1H("."),a=e.1H("."),s=0;s<i.1h;++s){1c(a.1h==s)21!1;1c(1a(i[s])!=1a(a[s]))21 1a(i[s])>1a(a[s])?!1:!0}21 i.1h!=a.1h?!0:!0};1c(r("1.8.0",s)||o.1k("11-8X"),r(a,s)){1c((1O e).3A("aW|3a"))21 12.1M(14(){1E i(12,e)});1c("6"===e){17 n=t(12).6("2O").g;1c(n)21 n}1v 1c("dv"===e){17 d=t(12).6("2O").o;1c(d)21 d}1v{1c("dt"!==e)21 12.1M(14(){17 i=t(12).6("2O");1c(i){1c(!i.g.2P&&!i.g.4h)1c("3N"==1O e)e>0&&e<i.g.2z+1&&e!=i.g.22&&i.4T(e);1v 2t(e){1g"1S":i.o.6A(i.g),i.1S("7f");1p;1g"1U":i.o.6a(i.g),i.1U("7f");1p;1g"23":i.g.2v||(i.o.b9(i.g),i.g.2w=!0,i.23())}"ds"===e&&i.2f(),(i.g.2v||!i.g.2v&&i.g.2w)&&"1u"==e&&(i.o.aZ(i.g),i.g.2w=!1,i.g.1J.16(\'1V[1e*="4G.3R"], 1V[1e*="63.be"], 1V[1e*="5X.57"]\').1M(14(){2o(t(12).6("6r"))}),i.1u()),"dx"==e&&i.9S()}});17 d=t(12).6("2O").8S;1c(d)21 d}}1v bl(o,"9b",s)};17 i=14(e,d){17 l=12;l.$el=t(e).1k("11-2a"),l.$el.6("2O",l),l.40=14(){1c(l.8S=i.a4,l.o=t.4K({},l.8S,d),l.g=t.4K({},i.6K),l.1t=t.4K({},i.az),l.9I=t.4K({},i.a3),l.g.ea=t(e).2m("11-8X")?!1:!0,l.g.c2=t(e).4a(),l.g.2s&&(l.o.4u=!1),"d3"===l.o.2x&&(l.o.2x=!0),"9D"===l.o.2x&&(l.o.2x=!1),"3a"!=1O 91&&(l.t=t.4K({},91)),"3a"!=1O 9e&&(l.ct=t.4K({},9e)),!l.g.94)1c(l.g.94=!0,t("4a").16(\'9Q[7X*="5A"]\').1h&&(l.g.bD=t("4a").16(\'9Q[7X*="5A"]\').1d("7X").1H("5A")[1]),t("4a").16(\'7m[1e*="5z"]\').1h&&-1!=t("4a").16(\'7m[1e*="5z"]\').1d("1e").1f("?")&&(l.g.cz=t("4a").16(\'7m[1e*="5z"]\').1d("1e").1H("?")[1].1H("=")[1]),l.o.3w&&""!=l.o.3w&&l.o.3L&&""!=l.o.3L){t(e).1k("11-"+l.o.3w);17 a=l.o.3L+l.o.3w+"/3w.18",s=t("9B");1c(t("9B").1h||(s=t("5h")),t(\'6v[2M="\'+a+\'"]\').1h)o=t(\'6v[2M="\'+a+\'"]\'),l.g.2Y||(l.g.2Y=!0,l.g.9T=2c(14(){l.4Z()},7Y));1v 1c(5C.9A){5C.9A(a);17 o=t(\'6v[2M="\'+a+\'"]\')}1v 17 o=t(\'<6v 5a="cP" 2M="\'+a+\'" 4A="9x/18" />\').1A(s);o.40(14(){l.g.2Y||(l.g.2Y=!0,l.g.9G=2c(14(){l.4Z()},7Y))}),t(1W).40(14(){l.g.2Y||(l.g.2Y=!0,l.g.9u=2c(14(){l.4Z()},7Y))}),l.g.9m=2c(14(){l.g.2Y||(l.g.2Y=!0,l.4Z())},1N)}1v l.4Z()},l.4Z=14(){t(e).5S(t(l.o.1A)),t("4a").1d("65")?t("5h").1d("65")||t("5h").1d("65","11-6K"):t("4a").1d("65","11-6K"),l.g.6m()===!0&&l.o.8I===!0&&(t(e).1k("11-44"),t(e).3u(".11-30-31-2a").1k("11-44"));17 i=14(){l.o.8I===!0&&l.g.6m()===!0?(t(e).1k("11-44"),t(e).3u(".11-30-31-2a").1k("11-44"),l.o.4f=!1):t(1W).19()<l.o.bb||t(1W).19()>l.o.b8?(t(e).1k("11-44"),t(e).3u(".11-30-31-2a").1k("11-44")):(t(e).2j("11-44"),t(e).3u(".11-30-31-2a").2j("11-44"))};1c(t(1W).2f(14(){i()}),i(),l.g.1x=14(){21 t(e).19()},l.g.1D=14(){21 t(e).1b()},t(e).16(".11-3z").2j("11-3z").1k("11-1o"),t(e).16(\'.11-1o > *[1q*="11-s"]\').1M(14(){17 e=t(12).1d("1q").1H("11-s")[1].1H(" ")[0];t(12).2j("11-s"+e).1k("11-l"+e)}),l.o.9E&&(l.o.2L=l.o.9E),l.o.ce===!1&&(l.o.4z=!1),1==t(e).16(".11-1o").1h&&(l.o.4f=!1,l.o.85=!1,l.o.7e=!1,l.o.7g=!1,l.o.4l=0,l.o.79=!1,l.o.2x=!0,l.o.2L=1,l.o.3k="9D"),t(e).1Y().2m("11-30-31-6D")&&0!==l.o.3O&&(t(e)[0].1K.19="1C%"),l.g.9X=l.g.2l=l.o.19?""+l.o.19:t(e)[0].1K.19,l.g.3C=l.o.1b?""+l.o.1b:t(e)[0].1K.1b,-1==l.g.2l.1f("%")&&-1==l.g.2l.1f("1B")&&(l.g.2l+="1B"),-1==l.g.3C.1f("%")&&-1==l.g.3C.1f("1B")&&(l.g.3C+="1B"),l.g.4q=l.o.a5&&-1!=l.g.2l.1f("1B")&&-1!=l.g.3C.1f("1B")?!0:!1,l.o.8i===!0&&(l.o.3O=0,l.g.4q=!0,-1!=l.g.2l.1f("%")&&(l.g.2l=1a(l.g.2l)+"1B"),-1!=l.g.3C.1f("%")&&(l.g.3C=1a(l.g.3C)+"1B")),t(e).16(\'*[1q*="11-l"], *[1q*="11-bg"]\').1M(14(){t(12).1Y().2m("11-1o")||t(12).c6(t(12).1Y())}),t(e).16(".11-1o").1M(14(){t(12).2Z(\':2G([1q*="11-"])\').1M(14(){t(12).aN()});17 e=t("<1j>").1k("11-cr");t(12).16(".11-bg").1h?e.cl(t(12).16(".11-bg").eq("0")):e.5S(t(12))}),t(e).16(\'.11-1o, *[1q*="11-l"]\').1M(14(){1c(t(12).6("11")||t(12).1d("5a")||t(12).1d("1K")){1c(t(12).6("11"))17 e=t(12).6("11").24().1H(";");1v 1c(t(12).1d("5a")&&-1!=t(12).1d("5a").1f(":")&&-1!=t(12).1d("5a").1f(";"))17 e=t(12).1d("5a").24().1H(";");1v 17 e=t(12).1d("1K").24().1H(";");1Z(x=0;x<e.1h;x++){3H=e[x].1H(":"),-1!=3H[0].1f("4F")&&(3H[1]=l.9p(3H[1]));17 i="";3H[2]&&(i=":"+t.5V(3H[2]))," "!=3H[0]&&""!=3H[0]&&t(12).6(t.5V(3H[0]),t.5V(3H[1])+i)}}l.o.8q===!0&&l.o.4f===!0&&(l.o.4f=!1,l.g.7y=!0);17 a=t(12);a.6("47",a[0].1K.1i),a.6("43",a[0].1K.1m),t(12).3x("a")&&t(12).2Z().1h>0&&(a=t(12).2Z());17 s=a.19(),o=a.1b();a[0].1K.19&&-1!=a[0].1K.19.1f("%")&&(s=a[0].1K.19),a[0].1K.1b&&-1!=a[0].1K.1b.1f("%")&&(o=a[0].1K.1b),a.6("2Q",s),a.6("2K",o),a.6("7Z",a.18("2b-1i")),a.6("8s",a.18("2b-1G")),a.6("8t",a.18("2b-1m")),a.6("8v",a.18("2b-1l"));17 r="3N"==1O 3f(a.18("3j"))?1z.cm(1C*3f(a.18("3j")))/1C:1;t(12).6("7a",r),-1==a.18("4i-1i-19").1f("1B")?a.6("6l",a[0].1K.9k):a.6("6l",a.18("4i-1i-19")),-1==a.18("4i-1G-19").1f("1B")?a.6("6k",a[0].1K.9g):a.6("6k",a.18("4i-1G-19")),-1==a.18("4i-1m-19").1f("1B")?a.6("6B",a[0].1K.9h):a.6("6B",a.18("4i-1m-19")),-1==a.18("4i-1l-19").1f("1B")?a.6("76",a[0].1K.9j):a.6("76",a.18("4i-1l-19")),a.6("95",a.18("96-9d")),a.6("97",a.18("92-1b"))}),5C.4H.9r)1Z(17 a=0;a<t(e).16(".11-1o").1h;a++)t(e).16(".11-1o").eq(a).6("ck")==5C.4H.9r.1H("#")[1]&&(l.o.2L=a+1);t(e).16(\'*[1q*="11-8K-"]\').1M(14(){1Z(17 i=t(12).1d("1q").1H(" "),a=0;a<i.1h;a++)1c(-1!=i[a].1f("11-8K-")){17 s=1a(i[a].1H("11-8K-")[1]);t(12).18({co:"cs"}).2r(14(i){i.3r(),t(e).3i(s)})}}),l.g.2z=t(e).16(".11-1o").1h,l.o.75&&l.g.2z>2?("2e"==l.o.2L,l.o.8D=!1):l.o.75=!1,"2e"==l.o.2L&&(l.o.2L=1z.27(1z.2e()*l.g.2z+1)),l.o.5i=l.o.5i<l.g.2z+1?l.o.5i:1,l.o.5i=l.o.5i<1?1:l.o.5i,l.g.4d=1,l.o.4z&&(l.g.4d=0);17 s=-1===5C.4H.2M.1f("cp:")?"":"6z:";1c(t(e).16(\'1V[1e*="4G.3R"], 1V[1e*="63.be"]\').1M(14(){1c(t(12).1Y().1k("11-2q-3z"),t(12).1Y(\'[1q*="11-l"]\')){17 e=t(12),i=s;t.9L(i+"//ci.4G.3R/ch/9N/ca/"+t(12).1d("1e").1H("9J/")[1].1H("?")[0]+"?v=2&8H=9M&98=?",14(t){e.6("6t",1N*1a(t.9s.c8$9P.c7$2p.cb))});17 a=t("<1j>").1k("11-66").1A(t(12).1Y());t("<28>").1A(a).1k("11-2V").1d("8H","9f 2q").1d("1e",i+"//28.4G.3R/cc/"+t(12).1d("1e").1H("9J/")[1].1H("?")[0]+"/"+l.o.ai),t("<1j>").1A(a).1k("11-9t"),t(12).1Y().18({19:t(12).19(),1b:t(12).1b()}).2r(14(){t(12).6("4C")>0&&t(12).6("4p")&&2o(t(12).6("4p")),l.g.2P=!0,l.g.2S?(0!=l.o.2x&&(l.g.2S=!1),l.g.2w=!0):l.g.2w=l.g.2v,0!=l.o.2x&&l.1u(),l.g.4Q=!0,i=-1===t(12).16("1V").6("3W").1f("6z")?s:"",t(12).16("1V").1d("1e",i+t(12).16("1V").6("3W")),t(12).16(".11-66").1L(l.g.v.d).3J(l.g.v.7u,14(){1c("1T"==l.o.2x&&1==l.g.2w){17 t=2c(14(){l.23()},e.6("6t")-l.g.v.d);e.6("6r",t)}l.g.2P=!1,1==l.g.2f&&l.3s(l.g.1J,14(){l.g.2f=!1})})});17 o="&";-1==t(12).1d("1e").1f("?")&&(o="?");17 r="&9q=9n&cf=1";-1==t(12).1d("1e").1f("48")?t(12).6("3W",t(12).1d("1e")+o+"48=1"+r):t(12).6("3W",t(12).1d("1e").2h("48=0","48=1")+r),t(12).6("2Q",t(12).1d("19")),t(12).6("2K",t(12).1d("1b")),t(12).1d("1e","")}}),t(e).16(\'1V[1e*="5X.57"]\').1M(14(){1c(t(12).1Y().1k("11-2q-3z"),t(12).1Y(\'[1q*="11-l"]\')){17 e=t(12),i=s,a=t("<1j>").1k("11-66").1A(t(12).1Y());t.9L(i+"//57.3R/9N/cd/2q/"+t(12).1d("1e").1H("2q/")[1].1H("?")[0]+".9M?98=?",14(i){t("<28>").1A(a).1k("11-2V").1d("8H","9f 2q").1d("1e",i[0].cL),e.6("6t",1N*1a(i[0].2p)),t("<1j>").1A(a).1k("11-9t")}),t(12).1Y().18({19:t(12).19(),1b:t(12).1b()}).2r(14(){t(12).6("4C")>0&&t(12).6("4p")&&2o(t(12).6("4p")),l.g.2P=!0,l.g.2S?(0!=l.o.2x&&(l.g.2S=!1),l.g.2w=!0):l.g.2w=l.g.2v,0!=l.o.2x&&l.1u(),l.g.4Q=!0,i=-1===t(12).16("1V").6("3W").1f("6z")?s:"",t(12).16("1V").1d("1e",i+t(12).16("1V").6("3W")),t(12).16(".11-66").1L(l.g.v.d).3J(l.g.v.7u,14(){1c("1T"==l.o.2x&&1==l.g.2w){17 t=2c(14(){l.23()},e.6("6t")-l.g.v.d);e.6("6r",t)}l.g.2P=!1,1==l.g.2f&&l.3s(l.g.1J,14(){l.g.2f=!1})})});17 o="&";-1==t(12).1d("1e").1f("?")&&(o="?");17 r="&9q=9n";-1==t(12).1d("1e").1f("48")?t(12).6("3W",t(12).1d("1e")+o+"48=1"+r):t(12).6("3W",t(12).1d("1e").2h("48=0","48=1")+r),t(12).6("2Q",t(12).1d("19")),t(12).6("2K",t(12).1d("1b")),t(12).1d("1e","")}}),t(e).16("2q, 74").1M(14(){17 e="3a"!=1O t(12).1d("19")?t(12).1d("19"):"cR",i="3a"!=1O t(12).1d("1b")?t(12).1d("1b"):""+t(12).1b();-1===e.1f("%")&&(e=1a(e)),-1===i.1f("%")&&(i=1a(i)),"1C%"!==e||0!==i&&"0"!==i&&"1C%"!==i||(t(12).1d("1b","1C%"),i="1T"),t(12).1Y().1k("11-2q-3z").18({19:e,1b:i}).6({2Q:e,2K:i});t(12);t(12).3P("cQ",14(){"1T"===l.o.2x&&l.g.2w===!0&&l.23()}),t(12).62("19").62("1b").18({19:"1C%",1b:"1C%"}).2r(14(t){l.g.4Q||(12.2S&&t.3r(),12.cI(),l.g.2P=!0,l.g.2S?(l.o.2x!==!1&&(l.g.2S=!1),l.g.2w=!0):l.g.2w=l.g.2v,l.o.2x!==!1&&l.1u(),l.g.4Q=!0,l.g.2P=!1,l.g.2f===!0&&l.3s(l.g.1J,14(){l.g.2f=!1}))})}),l.o.4z&&(l.o.2L=l.o.2L-1===0?l.g.2z:l.o.2L-1),l.g.22=l.o.2L,l.g.1J=t(e).16(".11-1o:eq("+(l.g.22-1)+")"),t(e).16(".11-1o").cH(\'<1j 1q="11-2k"></1j>\'),l.o.ak&&(l.g.3q=t("<1j>").1k("11-cy-5s").1A(t(e).16(".11-2k"))),l.o.ah&&!l.g.2s&&(l.g.3b=t("<1j>").1k("11-cw-5s").1A(t(e).16(".11-2k")),l.g.3b.42(t(\'<1j 1q="11-ct-1i"><1j 1q="11-ct-3n"><1j 1q="11-ct-9z"><1j 1q="11-ct-9o"></1j></1j></1j></1j><1j 1q="11-ct-1G"><1j 1q="11-ct-3n"><1j 1q="11-ct-9z"><1j 1q="11-ct-9o"></1j></1j></1j></1j><1j 1q="11-ct-cx"></1j>\'))),l.g.64=t("<1j>").18({cB:-1,1I:"1P"}).1k("11-9F-2a").1A(t(e)),t("<1j>").1k("11-9F-cC").1A(l.g.64),"cG"==t(e).18("3E")&&t(e).18("3E","9i"),t(e).16(".11-2k").18(l.o.6Q?{cF:"5W("+l.o.6Q+")"}:{cE:l.o.8R}),"84"==l.o.8R&&0==l.o.6Q&&t(e).16(".11-2k").18({3v:"1P 84 !cD"}),t(e).16(".11-1o 28").1M(14(){1c(t(12).62("19").62("1b"),l.o.3S===!0&&l.o.4u===!0){1c("5F"!=1O t(12).6("1e")){t(12).6("1e",t(12).1d("1e"));17 e=l.o.3L+"../18/cT.bT";t(12).1d("1e",e)}}1v"5F"==1O t(12).6("1e")&&(t(12).1d("1e",t(12).6("1e")),t(12).62("6-1e"))}),t(e).16(".11-1o").3P("bx",14(e){l.g.9H=e.7N-t(12).1Y().4e().1i,l.g.9K=e.8Y-t(12).1Y().4e().1m}),t(e).16(".11-1o").3P("99",14(e){17 i=t(12).1Y().4e().1i+l.g.9H,a=t(12).1Y().4e().1m+l.g.9K,s=e.7N-i,o=e.8Y-a;t(12).16("> *:2G(.11-bg)").1M(14(){"3a"!=1O t(12).6("5d")&&0!==1a(t(12).6("5d"))&&t(12).18({3G:-s/1C*1a(t(12).6("5d")),46:-o/1C*1a(t(12).6("5d"))})})}),t(e).16(".11-1o").3P("bB",14(){t(12).16("> *:2G(.11-bg)").1M(14(){"3a"!=1O t(12).6("5d")&&0!==1a(t(12).6("5d"))&&38.2i(12,.4,{18:{3G:0,46:0}})})}),l.o.85&&(t(\'<a 1q="11-1n-1S" 2M="#" />\').2r(14(i){i.3r(),t(e).3i("1S")}).1A(t(e)),t(\'<a 1q="11-1n-1U" 2M="#" />\').2r(14(i){i.3r(),t(e).3i("1U")}).1A(t(e)),l.o.al&&(t(e).16(".11-1n-1S, .11-1n-1U").18({1I:"1P"}),t(e).1Q(14(){l.g.7C||(l.g.2s?t(e).16(".11-1n-1S, .11-1n-1U").18("1I","2n"):t(e).16(".11-1n-1S, .11-1n-1U").1u(!0,!0).2F(2u))},14(){l.g.2s?t(e).16(".11-1n-1S, .11-1n-1U").18("1I","1P"):t(e).16(".11-1n-1S, .11-1n-1U").1u(!0,!0).3J(2u)}))),l.o.7e||l.o.7g){17 o=t(\'<1j 1q="11-1l-1n-2H" />\').1A(t(e));1c(l.g.2W=o,"4R"==l.o.3k&&o.1k("11-9a-59"),l.o.7g&&"4R"!=l.o.3k){1c(t(\'<61 1q="11-1l-4N" />\').1A(t(e).16(".11-1l-1n-2H")),"1Q"==l.o.3k)17 r=t(\'<1j 1q="11-1F-1Q"><1j 1q="11-1F-1Q-2k"><1j 1q="11-1F-1Q-bg"></1j><1j 1q="11-1F-1Q-28"><28></1j><61></61></1j></1j>\').1A(t(e).16(".11-1l-4N"));1Z(x=1;x<l.g.2z+1;x++){17 n=t(\'<a 2M="#" />\').1A(t(e).16(".11-1l-4N")).2r(14(i){i.3r(),t(e).3i(t(12).7O()+1)});1c("1Q"==l.o.3k){t(e).16(".11-1F-1Q, .11-1F-1Q-28").18({19:l.o.88,1b:l.o.5E});17 d=t(e).16(".11-1F-1Q"),g=d.16("28").18({1b:l.o.5E}),h=t(e).16(".11-1F-1Q-2k").18({26:"2B",1I:"2n"});n.1Q(14(){17 i,a=t(e).16(".11-1o").eq(t(12).7O());i=l.o.3S===!0&&l.o.4u===!0?a.16(".11-4m").1h?a.16(".11-4m").6("1e"):a.16(".11-2V").1h?a.16(".11-2V").6("1e"):a.16(".11-bg").1h?a.16(".11-bg").6("1e"):l.o.3L+l.o.3w+"/78.4B":a.16(".11-4m").1h?a.16(".11-4m").1d("1e"):a.16(".11-2V").1h?a.16(".11-2V").1d("1e"):a.16(".11-bg").1h?a.16(".11-bg").1d("1e"):l.o.3L+l.o.3w+"/78.4B",t(e).16(".11-1F-1Q-28").18({1i:1a(d.18("2b-1i")),1m:1a(d.18("2b-1m"))}),g.40(14(){g.18(0==t(12).19()?{3E:"9i",4c:"0 1T",1i:"1T"}:{3E:"bw",3G:-t(12).19()/2,1i:"50%"})}).1d("1e",i),d.18({1I:"2n"}).1u().4k({1i:t(12).3E().1i+(t(12).19()-d.3m())/2},7D),h.18({1I:"1P",26:"2R"}).1u().2F(7D)},14(){h.1u().3J(7D,14(){d.18({26:"2B",1I:"2n"})})})}}"1Q"==l.o.3k&&r.1A(t(e).16(".11-1l-4N")),t(e).16(".11-1l-4N a:eq("+(l.o.2L-1)+")").1k("11-1n-1R")}1c(l.o.7e)17 c=t(\'<a 1q="11-1n-23" 2M="#" />\').2r(14(i){i.3r(),t(e).3i("23")}).5S(t(e).16(".11-1l-1n-2H")),u=t(\'<a 1q="11-1n-1u" 2M="#" />\').2r(14(i){i.3r(),t(e).3i("1u")}).1A(t(e).16(".11-1l-1n-2H"));1v"4R"!=l.o.3k&&(t(\'<61 1q="11-1n-9c 11-1n-bC" />\').5S(t(e).16(".11-1l-1n-2H")),t(\'<61 1q="11-1n-9c 11-1n-c4" />\').1A(t(e).16(".11-1l-1n-2H")));l.o.6g&&"4R"!=l.o.3k&&(o.18({1I:"1P"}),t(e).1Q(14(){l.g.7C||(l.g.2s?o.18("1I","2n"):o.1u(!0,!0).2F(2u))},14(){l.g.2s?o.18("1I","1P"):o.1u(!0,!0).3J(2u)}))}1c("4R"==l.o.3k){l.g.3M=t(\'<1j 1q="11-1F-2H"></1j>\').1A(t(e));17 r=t(\'<1j 1q="11-1F"><1j 1q="11-1F-2k"><1j 1q="11-1F-1o-2a"><1j 1q="11-1F-1o"></1j></1j></1j></1j>\').1A(l.g.3M);1c(l.g.59=t(e).16(".11-1F-1o-2a"),"6s"3I 1W?l.g.59.1k("11-bX"):l.g.59.1Q(14(){t(12).1k("11-1F-1o-1Q")},14(){t(12).2j("11-1F-1o-1Q"),l.7S()}).99(14(e){17 i=1a(e.7N-t(12).4e().1i)/t(12).19()*(t(12).19()-t(12).16(".11-1F-1o").19());t(12).16(".11-1F-1o").1u().18({3G:i})}),t(e).16(".11-1o").1M(14(){17 i,a=t(12).7O()+1;i=l.o.3S===!0&&l.o.4u===!0?t(12).16(".11-4m").1h?t(12).16(".11-4m").6("1e"):t(12).16(".11-2V").1h?t(12).16(".11-2V").1d("1e"):t(12).16(".11-bg").1h?t(12).16(".11-bg").6("1e"):l.o.3L+l.o.3w+"/78.4B":t(12).16(".11-4m").1h?t(12).16(".11-4m").1d("1e"):t(12).16(".11-2V").1h?t(12).16(".11-2V").1d("1e"):t(12).16(".11-bg").1h?t(12).16(".11-bg").1d("1e"):l.o.3L+l.o.3w+"/78.4B";17 s=t(\'<a 2M="#" 1q="11-49-\'+a+\'"><28 1e="\'+i+\'"></a>\');s.1A(t(e).16(".11-1F-1o")),"6s"3I 1W||s.1Q(14(){t(12).2Z().1u().6u(2u,l.o.8y/1C)},14(){t(12).2Z().2m("11-49-1R")||t(12).2Z().1u().6u(2u,l.o.8a/1C)}),s.2r(14(i){i.3r(),t(e).3i(a)})}),c&&u){17 f=l.g.2W=t(\'<1j 1q="11-1l-1n-2H 11-bE-59"></1j>\').1A(t(e));c.7r().2r(14(i){i.3r(),t(e).3i("23")}).1A(f),u.7r().2r(14(i){i.3r(),t(e).3i("1u")}).1A(f)}l.o.6g&&(l.g.3M.18("1I","1P"),f&&(l.g.2W="2n"==f.18("1I")?f:t(e).16(".11-9a-59"),l.g.2W.18("1I","1P")),t(e).1Q(14(){t(e).1k("11-1Q"),l.g.7C||(l.g.2s?(l.g.3M.18("1I","2n"),l.g.2W&&l.g.2W.18("1I","2n")):(l.g.3M.1u(!0,!0).2F(2u),l.g.2W&&l.g.2W.1u(!0,!0).2F(2u)))},14(){t(e).2j("11-1Q"),l.g.2s?(l.g.3M.18("1I","1P"),l.g.2W&&l.g.2W.18("1I","1P")):(l.g.3M.1u(!0,!0).3J(2u),l.g.2W&&l.g.2W.1u(!0,!0).3J(2u))}))}l.g.4g=t(\'<1j 1q="11-4g"></1j>\').1A(t(e)),"2n"!=l.g.4g.18("1I")||l.g.4g.16("28").1h||(l.g.6q=14(){l.g.4g.18({1I:"1P",26:"2R"}).2F(4s,14(){l.g.6q=!1})},l.g.4U=t("<28>").1d("1e",l.o.3L+l.o.3w+"/4g.4B").1A(l.g.4g),l.g.9O="3N"==1O 1a(t(e).18("2b-1l"))?1a(t(e).18("2b-1l")):0),l.8o(),l.o.ao&&t(e).16(".11-1o").1h>1&&t("5h").6c("c3",14(t){l.g.2P||l.g.4h||(37==t.8Z?(l.o.6A(l.g),l.1S("7f")):39==t.8Z&&(l.o.6a(l.g),l.1U("7f")))}),"6s"3I 1W&&t(e).16(".11-1o").1h>1&&l.o.ap&&(t(e).16(".11-2k").6c("bR",14(t){17 e=t.51?t.51:t.93.51;1==e.1h&&(l.g.6i=l.g.5Y=e[0].9Z)}),t(e).16(".11-2k").6c("bJ",14(t){17 e=t.51?t.51:t.93.51;1==e.1h&&(l.g.5Y=e[0].9Z),1z.4o(l.g.6i-l.g.5Y)>45&&t.3r()}),t(e).16(".11-2k").6c("bL",14(){1z.4o(l.g.6i-l.g.5Y)>45&&(l.g.6i-l.g.5Y>0?(l.o.6a(l.g),t(e).3i("1U")):(l.o.6A(l.g),t(e).3i("1S")))})),1==l.o.aS&&t(e).16(".11-1o").1h>1&&t(e).16(".11-2k").1Q(14(){l.o.bd(l.g),l.g.2v&&(l.g.2S=!0,l.1u(),l.g.3q&&l.g.3q.1u(),l.g.3b&&l.g.2D&&l.g.2D.67(),l.g.3Z=(1E 5f).5j())},14(){1==l.g.2S&&(l.23(),l.g.2S=!1)}),l.8u(),l.o.1s&&(l.g.1s=t("<28>").1k("11-bM").1A(t(e)).1d("1K",l.o.aj).18({26:"2B",1I:"bN"}).40(14(){17 i=0;l.g.1s||(i=1N),2c(14(){l.g.1s.6("2Q",l.g.1s.19()),l.g.1s.6("2K",l.g.1s.1b()),"1T"!=l.g.1s.18("1i")&&l.g.1s.6("47",l.g.1s[0].1K.1i),"1T"!=l.g.1s.18("1G")&&l.g.1s.6("5B",l.g.1s[0].1K.1G),"1T"!=l.g.1s.18("1m")&&l.g.1s.6("43",l.g.1s[0].1K.1m),"1T"!=l.g.1s.18("1l")&&l.g.1s.6("5v",l.g.1s[0].1K.1l),0!=l.o.8M&&t("<a>").1A(t(e)).1d("2M",l.o.8M).1d("df",l.o.bu).18({ec:"1P",ed:"1P"}).42(l.g.1s),l.g.1s.18({1I:"1P",26:"2R"}),l.8O()},i)}).1d("1e",l.o.1s)),t(1W).2f(14(){l.2f()}),t(1W).3P("eb",14(){t(1W).2f()}),l.g.9C=!0,1==l.o.4z?(l.o.4f?(l.g.2v=!0,t(e).16(".11-1n-23").1k("11-1n-23-1R")):t(e).16(".11-1n-1u").1k("11-1n-1u-1R"),l.1U()):"3a"!=1O l.g.1J[0]&&l.3S(l.g.1J,14(){l.g.1J.2F(l.o.8z,14(){l.g.4h=!1,t(12).1k("11-1R"),l.o.5D&&t(12).1L(t(12).6("4W")+25).e8(14(){t(12).16(".11-2V").2r(),t(12).16("2q, 74").1M(14(){0!==1O t(12)[0].7h&&(t(12)[0].7h=0),t(12).2r()}),t(12).8d()}),l.g.1J.16(\' > *[1q*="11-l"]\').1M(14(){17 e=t(12);(!e.2m("11-2q-3z")||e.2m("11-2q-3z")&&l.o.5D===!1)&&e.6("4C")>0&&e.6("4p",2c(14(){l.8p(e)},e.6("4C")))})}),l.7Q(l.g.22),l.o.4f?(l.g.4h=!1,l.23()):t(e).16(".11-1n-1u").1k("11-1n-1u-1R")}),l.o.ba(t(e))},l.2f=14(){l.g.2f=!0,l.g.2P||(l.3s(l.g.1J,14(){l.g.2y&&l.g.2y.5K(),l.g.2f=!1}),l.g.1s&&l.8O())},l.23=14(){l.g.2v?"1S"==l.g.2g&&l.o.8D?l.1S():l.1U():(l.g.2v=!0,l.g.2P||l.g.4h||l.5s()),t(e).16(".11-1n-23").1k("11-1n-23-1R"),t(e).16(".11-1n-1u").2j("11-1n-1u-1R")},l.5s=14(){1c(t(e).16(".11-1R").6("11"))17 i=l.9I.6b;1v 17 i=l.o.6b;17 a=t(e).16(".11-1R").6("5P")?1a(t(e).16(".11-1R").6("5P")):i;1c(!l.o.4z&&!t(e).16(".11-1R").6("5P")){17 s=t(e).16(".11-1o:eq("+(l.o.2L-1)+")").6("5P");a=s?s:i}1c(2o(l.g.4n),l.g.3Z?(l.g.4b||(l.g.4b=(1E 5f).5j()),l.g.4b>l.g.3Z&&(l.g.3Z=(1E 5f).5j()),l.g.3y||(l.g.3y=a),l.g.3y-=l.g.3Z-l.g.4b,l.g.3Z=!1,l.g.4b=(1E 5f).5j()):(l.g.3y=a,l.g.4b=(1E 5f).5j()),l.g.3y=1a(l.g.3y),l.g.4n=2c(14(){l.g.4b=l.g.3Z=l.g.3y=!1,l.23()},l.g.3y),l.g.3q&&l.g.3q.4k({19:l.g.1x()},l.g.3y,"8h",14(){t(12).18({19:0})}),l.g.3b){17 o=l.g.3b.16(".11-ct-1G .11-ct-3n"),r=l.g.3b.16(".11-ct-1i .11-ct-3n");"1P"==l.g.3b.18("1I")&&(o.18({3n:0}),r.18({3n:0}),l.g.3b.2F(8T)),l.g.2D?l.g.2D.ef():(l.g.2D=1E bp,l.g.2D.9W(38.6y(o[0],a/9l,{3g:0},{3T:8g.86,3g:6E,eg:14(){l.g.2D=!1}})),l.g.2D.9W(38.6y(r[0],a/9l,{3g:0},{3T:8g.86,3g:6E})))}},l.1u=14(){l.g.3Z=(1E 5f).5j(),l.g.3q&&l.g.3q.1u(),l.g.3b&&l.g.2D&&l.g.2D.67(),l.g.2S||l.g.2w||(t(e).16(".11-1n-1u").1k("11-1n-1u-1R"),t(e).16(".11-1n-23").2j("11-1n-23-1R")),2o(l.g.4n),l.g.2v=!1},l.9S=14(){2o(l.g.4n),l.g.2v=!1,2o(l.g.9T),2o(l.g.9G),2o(l.g.9u),2o(l.g.9m),2o(l.g.aq),l.g.3q&&l.g.3q.1u(),l.g.3b&&l.g.2D&&l.g.2D.67(),t(e).16("*").1u(!0,!1).8d(),t(e).16(".11-1o >").1M(14(){t(12).6("3B")&&t(12).6("3B").67()}),l.g.2S||l.g.2w||(t(e).16(".11-1n-1u").1k("11-1n-1u-1R"),t(e).16(".11-1n-23").2j("11-1n-23-1R"))},l.e6=14(){t(e).16("*").1u(),2o(l.g.4n),l.4T(l.g.22,l.g.2g)},l.9p=14(e){21"a9"==t.5V(e.24())||"8h"==t.5V(e.24())?e.24():e.2h("83","a8").2h("8f","as").2h("87","ar").2h("dW","dV").2h("dT","dU").2h("cU","dZ").2h("e0","e5").2h("e4","e3").2h("e1","e2").2h("en","eo").2h("eJ","eI").2h("5J","eH").2h("eF","eG")},l.1S=14(t){1c(l.g.22<2&&(l.g.4d+=1),l.g.4d>l.o.4l&&l.o.4l>0&&!t)l.g.4d=0,l.1u(),0==l.o.79&&(l.o.4l=0);1v{17 e=l.g.22<2?l.g.2z:l.g.22-1;l.g.2g="1S",l.4T(e,l.g.2g)}},l.1U=14(t){1c(l.o.75)1c(t){1c(t){17 e=l.g.22<l.g.2z?l.g.22+1:1;l.g.2g="1U",l.4T(e,l.g.2g)}}1v{17 e=l.g.22,i=14(){e=1z.27(1z.2e()*l.g.2z)+1,e==l.g.22?i():(l.g.2g="1U",l.4T(e,l.g.2g))};i()}1v 1c(l.g.22<l.g.2z||(l.g.4d+=1),l.g.4d>l.o.4l&&l.o.4l>0&&!t)l.g.4d=0,l.1u(),0==l.o.79&&(l.o.4l=0);1v{17 e=l.g.22<l.g.2z?l.g.22+1:1;l.g.2g="1U",l.4T(e,l.g.2g)}},l.4T=14(i,a){l.g.4b=l.g.3Z=l.g.3y=!1,l.g.3q&&l.g.3q.1u().1L(2u).4k({19:0},eM),l.g.3b&&(l.g.3b.3J(4s),l.g.2D&&l.g.2D.5O().2p(.35)),1==l.g.4Q&&(l.g.4Q=!1,l.g.2v=l.g.2w,l.g.1J.16(\'1V[1e*="4G.3R"], 1V[1e*="63.be"], 1V[1e*="5X.57"]\').1M(14(){t(12).1Y().16(".11-66").2F(l.g.v.7t,14(){t(12).1Y().16("1V").1d("1e","")})}),l.g.1J.16("2q, 74").1M(14(){12.67()})),t(e).16(\'1V[1e*="4G.3R"], 1V[1e*="63.be"], 1V[1e*="5X.57"]\').1M(14(){2o(t(12).6("6r"))}),2o(l.g.4n),l.g.5l=i,l.g.1r=t(e).16(".11-1o:eq("+(l.g.5l-1)+")"),a||(l.g.2g=l.g.22<l.g.5l?"1U":"1S");17 s=0;t(e).16(\'1V[1e*="4G.3R"], 1V[1e*="63.be"], 1V[1e*="5X.57"]\').1h>0&&(s=l.g.v.7t),"3a"!=1O l.g.1r[0]&&l.3S(l.g.1r,14(){l.4k()})},l.3S=14(i,a){1c(l.g.4h=!0,l.g.9C&&t(e).18({26:"2R"}),l.o.3S){17 s=[],o=0;1c("1P"!=i.18("3v-2J")&&-1!=i.18("3v-2J").1f("5W")&&!i.2m("11-3t")&&!i.2m("11-2G-3t")){17 r=i.18("3v-2J");r=r.3A(/5W\\((.*)\\)/)[1].2h(/"/9w,""),s[s.1h]=[r,i]}1c(i.16("28:2G(.11-3t, .11-2G-3t)").1M(14(){l.o.4u===!0&&t(12).1d("1e",t(12).6("1e")),s[s.1h]=[t(12).1d("1e"),t(12)]}),i.16("*").1M(14(){1c("1P"!=t(12).18("3v-2J")&&-1!=t(12).18("3v-2J").1f("5W")&&!t(12).2m("11-3t")&&!t(12).2m("11-2G-3t")){17 e=t(12).18("3v-2J");e=e.3A(/5W\\((.*)\\)/)[1].2h(/"/9w,""),s[s.1h]=[e,t(12)]}}),0==s.1h)t(".11-1F-2H, .11-1n-1U, .11-1n-1S, .11-1l-1n-2H").18({26:"2R"}),l.3s(i,a);1v{l.g.2s?l.g.64.18("1I","2n"):l.g.64.1L(aK).2F(2u);17 n=14(){l.g.64.1u(!0,!0).18({1I:"1P"}),t(".11-1F-2H, .11-1n-1U, .11-1n-1S, .11-1l-1n-2H").18({26:"2R"}),-1!==41.3V.1f("eA/7")||l.g.2s?2c(14(){l.3s(i,a)},50):l.3s(i,a)};1Z(x=0;x<s.1h;x++)t("<28>").6("el",s[x]).40(14(){t(12).6("el")[1].1k("11-3t"),++o==s.1h&&n()}).3U(14(){17 e=t(12).6("el")[0].9U(t(12).6("el")[0].9V("/")+1,t(12).6("el")[0].1h);1W.6h?6h.ez(\'2O 3U:\\r\\n\\r\\68 6f 4J 1X 6o 2X 1X 2J 4I 3v 2J "\'+e+\'" 3x 6e 2i a 6Z 4H 4V 5n 6N be 2Y. 4M 6Y 1X 6W 2X 4S 4P 6R 7b 3I 1X 77.\'):9Y(\'2O 3U:\\r\\n\\r\\68 6f 4J 1X 6o 2X 1X 2J 4I 3v 2J "\'+e+\'" 3x 6e 2i a 6Z 4H 4V 5n 6N be 2Y. 4M 6Y 1X 6W 2X 4S 4P 6R 7b 3I 1X 77.\'),t(12).1k("11-2G-3t"),++o==s.1h&&n()}).1d("1e",s[x][0])}}1v t(".11-1F-2H, .11-1n-1U, .11-1n-1S, .11-1l-1n-2H").18({26:"2R"}),l.3s(i,a)},l.3s=14(i,a){i.18({26:"2B",1I:"2n"}),l.g.6q&&l.g.6q(),l.8u(),"4R"==l.o.3k&&l.9y(),i.2Z().1M(14(){17 i=t(12),a=i.6("47")?i.6("47"):"0",s=i.6("43")?i.6("43"):"0";i.3x("a")&&i.2Z().1h>0&&(i.18({1I:"2n"}),i=i.2Z());17 o="1T",r="1T";i.6("2Q")&&("3N"==1O i.6("2Q")?o=1a(i.6("2Q"))*l.g.1w:-1!=i.6("2Q").1f("%")&&(o=i.6("2Q"))),i.6("2K")&&("3N"==1O i.6("2K")?r=1a(i.6("2K"))*l.g.1w:-1!=i.6("2K").1f("%")&&(r=i.6("2K")));17 n=i.6("7Z")?1a(i.6("7Z"))*l.g.1w:0,d=i.6("8s")?1a(i.6("8s"))*l.g.1w:0,g=i.6("8t")?1a(i.6("8t"))*l.g.1w:0,h=i.6("8v")?1a(i.6("8v"))*l.g.1w:0,c=i.6("6l")?1a(i.6("6l"))*l.g.1w:0,u=i.6("6k")?1a(i.6("6k"))*l.g.1w:0,f=i.6("6B")?1a(i.6("6B"))*l.g.1w:0,p=i.6("76")?1a(i.6("76"))*l.g.1w:0,m=i.6("95"),v=i.6("97");1c(l.g.4q||l.o.3O>0){1c(i.3x("28")&&!i.2m("11-bg")&&i.1d("1e")&&(i.18({19:"1T",1b:"1T"}),0!=o&&"1T"!=o||"3N"!=1O r||0==r||(o=r/i.1b()*i.19()),0!=r&&"1T"!=r||"3N"!=1O o||0==o||(r=o/i.19()*i.1b()),"1T"==o&&(o=i.19()*l.g.1w),"1T"==r&&(r=i.1b()*l.g.1w),i.18({19:o,1b:r})),i.3x("28")||i.18({19:o,1b:r,"96-9d":1a(m)*l.g.1w+"1B","92-1b":1a(v)*l.g.1w+"1B"}),i.3x("1j")&&i.16("1V").6("3W")){17 y=i.16("1V");y.1d("19",1a(y.6("2Q"))*l.g.1w).1d("1b",1a(y.6("2K"))*l.g.1w),i.18({19:1a(y.6("2Q"))*l.g.1w,1b:1a(y.6("2K"))*l.g.1w})}i.18({2b:g+"1B "+d+"1B "+h+"1B "+n+"1B ",9k:c+"1B",9g:u+"1B",9h:f+"1B",9j:p+"1B"})}1c(i.2m("11-bg")){17 b=t(e).16(".11-2k");i.18({19:"1T",1b:"1T"}),o=i.19(),r=i.1b();17 w=l.g.1w;-1!=l.g.2l.1f("%")&&(l.g.1x()>o?(w=l.g.1x()/o,l.g.1D()>r*w&&(w=l.g.1D()/r)):l.g.1D()>r&&(w=l.g.1D()/r,l.g.1x()>o*w&&(w=l.g.1x()/o))),i.18({19:o*w,1b:r*w,3G:b.19()/2-o*w/2,46:b.1b()/2-r*w/2})}1v{17 x=i;i.1Y().3x("a")&&(i=i.1Y());17 S=0;l.o.6j?S=l.o.6j>0?(l.g.1x()-l.o.6j)/2:0:l.o.8Q&&(S=l.o.8Q>0?(l.g.1x()-l.o.8Q)/2:0),S=0>S?0:S,-1!=a.1f("%")?i.18({1i:l.g.1x()/1C*1a(a)-x.19()/2-n-c}):(S>0||l.g.4q||l.o.3O>0)&&i.18({1i:S+1a(a)*l.g.1w}),-1!=s.1f("%")?i.18({1m:l.g.1D()/1C*1a(s)-x.1b()/2-g-f}):(l.g.4q||l.o.3O>0)&&i.18({1m:1a(s)*l.g.1w})}}),i.18({1I:"1P",26:"2R"}),l.8o(),a(),t(12).8d()},l.8o=14(){1c(l.g.4U){17 t=14(){l.g.4U.1b()>0?l.g.4g.18(l.g.9O>0?{1b:l.g.4U.1b()/2}:{1b:l.g.4U.1b(),46:-l.g.4U.1b()/2}):2c(14(){t()},50)};t()}},l.8u=14(){1c(l.o.3O>0&&(t(1W).19()<l.o.3O?(l.g.4q=!0,l.g.2l=l.o.3O+"1B"):(l.g.4q=!1,l.g.2l=l.g.9X,l.g.1w=1)),t(e).3u(".11-30-31-2a").1h&&t(e).3u(".11-30-31-6D").18({19:t(1W).19()}),l.g.4q){17 i=t(e).1Y();l.o.8i===!0?t(e).18({19:"1C%",1b:t(1W).1b()}):(t(e).18({19:i.19()-1a(t(e).18("2b-1i"))-1a(t(e).18("2b-1G"))}),l.g.1w=t(e).19()/1a(l.g.2l),t(e).18({1b:l.g.1w*1a(l.g.3C)}))}1v l.g.1w=1,t(e).18({19:l.g.2l,1b:l.g.3C});1c(t(e).3u(".11-30-31-2a").1h&&(t(e).3u(".11-30-31-6D").18({1b:t(e).3l(!0)}),t(e).3u(".11-30-31-2a").18({1b:t(e).3l(!0)}),t(e).3u(".11-30-31-6D").18({19:t(1W).19(),1i:-t(e).3u(".11-30-31-2a").4e().1i}),-1!=l.g.2l.1f("%"))){17 a=1a(l.g.2l),s=t("5h").19()/1C*a-(t(e).3m()-t(e).19());t(e).19(s)}t(e).16(".11-2k, .11-1t-2a").18({19:l.g.1x(),1b:l.g.1D()}),l.g.1J&&l.g.1r?(l.g.1J.18({19:l.g.1x(),1b:l.g.1D()}),l.g.1r.18({19:l.g.1x(),1b:l.g.1D()})):t(e).16(".11-1o").18({19:l.g.1x(),1b:l.g.1D()})},l.8O=14(){l.g.1s.18({19:l.g.1s.6("2Q")*l.g.1w,1b:l.g.1s.6("2K")*l.g.1w}),l.g.2s?l.g.1s.18("1I","2n"):l.g.1s.2F(2u);17 i=8N=8r=7n="1T";i=l.g.1s.6("47")&&-1!=l.g.1s.6("47").1f("%")?l.g.1x()/1C*1a(l.g.1s.6("47"))-l.g.1s.19()/2+1a(t(e).18("2b-1i")):1a(l.g.1s.6("47"))*l.g.1w,8N=l.g.1s.6("5B")&&-1!=l.g.1s.6("5B").1f("%")?l.g.1x()/1C*1a(l.g.1s.6("5B"))-l.g.1s.19()/2+1a(t(e).18("2b-1G")):1a(l.g.1s.6("5B"))*l.g.1w,8r=l.g.1s.6("43")&&-1!=l.g.1s.6("43").1f("%")?l.g.1D()/1C*1a(l.g.1s.6("43"))-l.g.1s.1b()/2+1a(t(e).18("2b-1m")):1a(l.g.1s.6("43"))*l.g.1w,7n=l.g.1s.6("5v")&&-1!=l.g.1s.6("5v").1f("%")?l.g.1D()/1C*1a(l.g.1s.6("5v"))-l.g.1s.1b()/2+1a(t(e).18("2b-1l")):1a(l.g.1s.6("5v"))*l.g.1w,l.g.1s.18({1i:i,1G:8N,1m:8r,1l:7n})},l.9y=14(){l.7w("3P");17 i=-1==l.g.2l.1f("%")?1a(l.g.2l):l.g.1x();t(e).16(".11-1F-1o a").18({19:1a(l.o.88*l.g.1w),1b:1a(l.o.5E*l.g.1w)}),t(e).16(".11-1F-1o a:7H").18({4c:0}),t(e).16(".11-1F-1o").18({1b:1a(l.o.5E*l.g.1w)});17 a=t(e).16(".11-1F"),s=1a(-1==l.o.6d.1f("%")?l.o.6d:i/1C*1a(l.o.6d));a.18({19:s*1z.27(1C*l.g.1w)/1C}),a.19()>t(e).16(".11-1F-1o").19()&&a.18({19:t(e).16(".11-1F-1o").19()}),l.7w("9v")},l.7Q=14(i){17 a=i?i:l.g.5l;t(e).16(".11-1F-1o a:2G(.11-49-"+a+")").2Z().1M(14(){t(12).2j("11-49-1R").1u().6u(7l,l.o.8a/1C)}),t(e).16(".11-1F-1o a.11-49-"+a).2Z().1k("11-49-1R").1u().6u(7l,l.o.8y/1C)},l.7S=14(){1c(!t(e).16(".11-1F-1o-2a").2m("11-1F-1o-1Q")){17 i=t(e).16(".11-49-1R").1h?t(e).16(".11-49-1R").1Y():!1;1c(i){17 a=i.3E().1i+i.19()/2,s=t(e).16(".11-1F-1o-2a").19()/2-a;s=s<t(e).16(".11-1F-1o-2a").19()-t(e).16(".11-1F-1o").19()?t(e).16(".11-1F-1o-2a").19()-t(e).16(".11-1F-1o").19():s,s=s>0?0:s,t(e).16(".11-1F-1o").4k({3G:s},dG)}}},l.7w=14(i){1c(l.o.6g&&!t(e).2m("11-1Q"))2t(i){1g"3P":l.g.3M.18({26:"2B",1I:"2n"});1p;1g"9v":l.g.3M.18({26:"2R",1I:"1P"})}},l.4k=14(){t(e).16(".11-1o").1h>1&&(l.g.2P=!0),l.g.4h=!1,2o(l.g.4n),2o(l.g.dO),l.g.9R=l.g.1J,l.o.bh(l.g),"4R"==l.o.3k&&(l.7Q(),"6s"3I 1W||l.7S()),l.g.1r.1k("11-aA");17 i=7W=6I=7V=6F=7L=6C=7K=6G=dE=6H=dD="1T",d=7U=l.g.1x(),g=7T=l.g.1D(),h="1S"==l.g.2g?l.g.1J:l.g.1r,c=h.6("3o")?h.6("3o"):l.o.7I,u=l.g.7s[l.g.2g][c];2t(("1i"==u||"1G"==u)&&(d=6I=7U=6C=0,6H=0),("1m"==u||"1l"==u)&&(g=i=7T=6F=0,6G=0),u){1g"1i":7W=6F=0,6G=-l.g.1x();1p;1g"1G":i=7L=0,6G=l.g.1x();1p;1g"1m":7V=6C=0,6H=-l.g.1D();1p;1g"1l":6I=7K=0,6H=l.g.1D()}l.g.1J.18({1i:i,1G:7W,1m:6I,1l:7V}),l.g.1r.18({19:7U,1b:7T,1i:6F,1G:7L,1m:6C,1l:7K});17 f=l.g.1J.6("5L")?1a(l.g.1J.6("5L")):l.o.7d,p=l.g.1J.6("4y")?1a(l.g.1J.6("4y")):l.o.4L,m=l.g.1J.6("4v")?l.g.1J.6("4v"):l.o.4O,v=l.g.1r.6("4W")?1a(l.g.1r.6("4W")):l.o.5t,y=l.g.1r.6("5M")?1a(l.g.1r.6("5M")):l.o.5R;0===y&&(y=1);17 b=l.g.1r.6("5U")?l.g.1r.6("5U"):l.o.5p,w=14(){l.g.1J.1L(f+p/15).4k({19:d,1b:g},p,m,14(){x()})},x=14(){1c(l.g.9R.16(\' > *[1q*="11-l"]\').1M(14(){t(12).6("3B")&&t(12).6("3B").7G(),t(12).18({dC:"1P"})}),l.g.1J=l.g.1r,l.g.dB=l.g.22,l.g.22=l.g.5l,l.o.7P(l.g),l.o.3S&&l.o.4u){17 i=l.g.22==l.g.2z?1:l.g.22+1;t(e).16(".11-1o").eq(i-1).16("28:2G(.11-3t)").1M(14(){t(12).40(14(){t(12).1k("11-3t")}).3U(14(){17 e=t(12).6("1e").9U(t(12).6("1e").9V("/")+1,t(12).6("1e").1h);1W.6h?6h(\'2O 3U:\\r\\n\\r\\68 6f 4J 1X 6o 2X 1X 2J 4I 3v 2J "\'+e+\'" 3x 6e 2i a 6Z 4H 4V 5n 6N be 2Y. 4M 6Y 1X 6W 2X 4S 4P 6R 7b 3I 1X 77.\'):9Y(\'2O 3U:\\r\\n\\r\\68 6f 4J 1X 6o 2X 1X 2J 4I 3v 2J "\'+e+\'" 3x 6e 2i a 6Z 4H 4V 5n 6N be 2Y. 4M 6Y 1X 6W 2X 4S 4P 6R 7b 3I 1X 77.\'),t(12).1k("11-2G-3t")}).1d("1e",t(12).6("1e"))})}t(e).16(".11-1o").2j("11-1R"),t(e).16(".11-1o:eq("+(l.g.22-1)+")").1k("11-1R").2j("11-aA"),t(e).16(".11-1l-4N a").2j("11-1n-1R"),t(e).16(".11-1l-4N a:eq("+(l.g.22-1)+")").1k("11-1n-1R"),l.g.2v&&l.5s(),l.g.2P=!1,1==l.g.2f&&l.3s(l.g.1J,14(){l.g.2f=!1})},S=14(e){l.g.1J.16(\' > *[1q*="11-l"]\').1M(14(){t(12).6("2A")||l.5x(t(12)),t(12).2j("11-8w");17 i,s,o=t(12).6("3o")?t(12).6("3o"):u;2t(o){1g"1i":i=-l.g.1x(),s=0;1p;1g"1G":i=l.g.1x(),s=0;1p;1g"1m":s=-l.g.1D(),i=0;1p;1g"1l":s=l.g.1D(),i=0;1p;1g"3p":s=0,i=0}1c("1E"===t(12).6("2A"))17 r="1E";1v 17 r=t(12).6("5o")?t(12).6("5o"):!1;2t(r){1g"1i":i=l.g.1x(),s=0;1p;1g"1G":i=-l.g.1x(),s=0;1p;1g"1m":s=l.g.1D(),i=0;1p;1g"1l":s=-l.g.1D(),i=0;1p;1g"3p":s=0,i=0;1p;1g"1E":i=t(12).6("34")?"1i"===t(12).6("34")?l.g.1x():"1G"===t(12).6("34")?-l.g.1x():-1a(t(12).6("34")):-l.1t.7R,s=t(12).6("3e")?"1m"===t(12).6("3e")?l.g.1D():"1l"===t(12).6("3e")?-l.g.1D():-1a(t(12).6("3e")):-l.1t.7o}17 n=56=55=4j=54=58=36=33="1P";n=t(12).6("5m")?t(12).6("5m"):l.1t.8W,56=t(12).6("6S")?t(12).6("6S"):l.1t.8A,55=t(12).6("6P")?t(12).6("6P"):l.1t.8F,4j=t(12).6("5q")?t(12).6("5q"):l.1t.8J,54=t(12).6("73")?t(12).6("73"):l.1t.8B,58=t(12).6("6O")?t(12).6("6O"):l.1t.8C,1===4j?(36=t(12).6("6L")?t(12).6("6L"):l.1t.8G,33=t(12).6("6M")?t(12).6("6M"):l.1t.8E):36=33=4j;1Z(17 d=t(12).6("6T")?t(12).6("6T").1H(" "):l.1t.8L,g=0;g<d.1h;g++)-1===d[g].1f("%")&&-1!==d[g].1f("1i")&&-1!==d[g].1f("1G")&&-1!==d[g].1f("1m")&&-1!==d[g].1f("1l")&&(d[g]=""+1a(d[g])*l.g.1w+"1B");17 h=d.8P(" "),c=t(12).6("6X")?t(12).6("6X"):l.1t.8U,f=1a(t(12).18("1i")),p=1a(t(12).18("1m")),m=1a(t(12).1d("1q").1H("11-l")[1]),v=t(12).3m()>t(12).3l()?t(12).3m():t(12).3l(),y=0===1a(n)?t(12).3m():v,b=0===1a(n)?t(12).3l():v;1c(-1===m&&"1E"!==r||"1i"===t(12).6("34")||"1G"===t(12).6("34")?0>i?i=-(l.g.1x()-f+(36/2-.5)*y+1C):i>0&&(i=f+(36/2+.5)*y+1C):i*=l.g.1w,-1===m&&"1E"!==r||"1m"===t(12).6("3e")||"1l"===t(12).6("3e")?0>s?s=-(l.g.1D()-p+(33/2-.5)*b+1C):s>0&&(s=p+(33/2+.5)*b+1C):s*=l.g.1w,-1===m||"1E"===r)17 w=1;1v 17 x=l.g.1J.6("7c")?1a(l.g.1J.6("7c")):l.o.7z,w=m*x;1c("1E"===t(12).6("2A"))17 S=l.1t.7d,L=l.1t.4L,T=l.1t.4O;1v 17 S=l.o.7d,L=l.o.4L,T=l.o.4O;17 I=t(12).6("5L")?1a(t(12).6("5L")):S,k=t(12).6("4y")?1a(t(12).6("4y")):L;0===k&&(k=1);17 O=t(12).6("4v")?t(12).6("4v"):T;e&&(I=0,k=e),t(12).6("4p")&&2o(t(12).6("4p"));17 C={26:"2B"},W=t(12),X={3g:n,4w:56,4E:55,72:54,70:58,5e:36,5g:33,x:-i*w,y:-s*w,1L:I/1N,3T:a(O),82:14(){W.18(C)}};("3p"==r||!r&&"3p"===o||"81"!==t(12).6("a2")&&"1E"===t(12).6("2A"))&&(X.3j=0,C.3j=t(12).6("7a")),t(12).6("3B")&&t(12).6("3B").7G(),38.8c(t(12)[0],{8l:h,8n:c}),t(12).6("3B",38.2i(t(12)[0],k/1N,X))})},L=14(){l.g.1r.1L(f+v).4k({19:l.g.1x(),1b:l.g.1D()},y,b)},T=14(){l.g.32&&(f=0),"14"==1O l.o.bi&&l.o.bi(l.g,f+v),l.g.1r.16(\' > *[1q*="11-l"]\').1M(14(){1c(t(12).6("2A")||l.5x(t(12)),"1E"===t(12).6("2A"))17 e="1E";1v 17 e=t(12).6("3o")?t(12).6("3o"):u;17 i,s;2t(e){1g"1i":i=-l.g.1x(),s=0;1p;1g"1G":i=l.g.1x(),s=0;1p;1g"1m":s=-l.g.1D(),i=0;1p;1g"1l":s=l.g.1D(),i=0;1p;1g"3p":s=0,i=0;1p;1g"1E":i=t(12).6("53")?"1i"===t(12).6("53")?-l.g.1x():"1G"===t(12).6("53")?l.g.1x():1a(t(12).6("53")):l.1t.av,s=t(12).6("52")?"1m"===t(12).6("52")?-l.g.1D():"1l"===t(12).6("52")?l.g.1D():1a(t(12).6("52")):l.1t.au}17 o=7F=7J=71=7A=7E=4X=4Y="1P";o=t(12).6("8k")?t(12).6("8k"):l.1t.aw,7F=t(12).6("bo")?t(12).6("bo"):l.1t.ax,7J=t(12).6("bt")?t(12).6("bt"):l.1t.ay,71=t(12).6("8j")?t(12).6("8j"):l.1t.aF,7A=t(12).6("aV")?t(12).6("aV"):l.1t.aP,7E=t(12).6("b2")?t(12).6("b2"):l.1t.aQ,1===71?(4X=t(12).6("b7")?t(12).6("b7"):l.1t.aG,4Y=t(12).6("b4")?t(12).6("b4"):l.1t.aO):4X=4Y=71;1Z(17 r=t(12).6("b5")?t(12).6("b5").1H(" "):l.1t.aM,n=0;n<r.1h;n++)-1===r[n].1f("%")&&-1!==r[n].1f("1i")&&-1!==r[n].1f("1G")&&-1!==r[n].1f("1m")&&-1!==r[n].1f("1l")&&(r[n]=""+1a(r[n])*l.g.1w+"1B");17 d=r.8P(" "),g=t(12).6("bc")?t(12).6("bc"):l.1t.aI,h=1a(t(12).18("1i")),c=1a(t(12).18("1m")),f=1a(t(12).1d("1q").1H("11-l")[1]);-1!==t(12)[0].1K.19.1f("%")&&t(12).18({19:l.g.1x()/1C*1a(t(12)[0].1K.19)});17 p=t(12).3m()>t(12).3l()?t(12).3m():t(12).3l(),m=0===1a(o)?t(12).3m():p,v=0===1a(o)?t(12).3l():p;1c(-1===f&&"1E"!==e||"1i"===t(12).6("53")||"1G"===t(12).6("53")?0>i?i=-(h+(4X/2+.5)*m+1C):i>0&&(i=l.g.1x()-h+(4X/2-.5)*m+1C):i*=l.g.1w,-1===f&&"1E"!==e||"1m"===t(12).6("52")||"1l"===t(12).6("52")?0>s?s=-(c+(4Y/2+.5)*v+1C):s>0&&(s=l.g.1D()-c+(4Y/2-.5)*v+1C):s*=l.g.1w,-1===f||"1E"===e)17 y=1;1v 17 b=l.g.1r.6("b6")?1a(l.g.1r.6("b6")):l.o.bj,y=f*b;1c("1E"===t(12).6("2A"))17 w=l.1t.5t,x=l.1t.5R,S=l.1t.5p;1v 17 w=l.o.5t,x=l.o.5R,S=l.o.5p;17 L=t(12).6("4W")?1a(t(12).6("4W")):w,T=t(12).6("5M")?1a(t(12).6("5M")):x,I=t(12).6("5U")?t(12).6("5U"):S,k=t(12),O=14(){k.2m("11-2q-3z")&&k.1k("11-8w"),1==l.o.5D&&(k.16(".11-2V").2r(),k.16("2q, 74").1M(14(){0!==1O t(12)[0].7h&&(t(12)[0].7h=0),t(12).2r()})),(!k.2m("11-2q-3z")||k.2m("11-2q-3z")&&l.o.5D===!1)&&k.6("4C")>0&&k.6("4p",2c(14(){l.8p(k)},k.6("4C")))};t(12).18({3G:0,46:0});17 C={5e:4X,5g:4Y,72:7A,70:7E,3g:o,4w:7F,4E:7J,26:"2R",x:i*y,y:s*y},W={3g:0,4w:0,4E:0,72:0,70:0,5e:1,5g:1,3T:a(I),1L:L/1N,x:0,y:0,82:14(){O()}};(-1!=e.1f("3p")||"81"!==t(12).6("dc")&&"1E"===t(12).6("2A"))&&(C.3j=0,W.3j=t(12).6("7a")),t(12).6("3B")&&t(12).6("3B").7G(),38.8c(t(12)[0],{8n:g,8l:d}),t(12).6("3B",38.6y(t(12)[0],T/1N,C,W))})},I=14(){1c(o(t(e))&&(l.g.1r.6("5c")||l.g.1r.6("5H")))1c(l.g.1r.6("5c")&&l.g.1r.6("5H")){17 i=1z.27(2*1z.2e()),a=[["3d",l.g.1r.6("5c")],["br",l.g.1r.6("5H")]];O(a[i][0],a[i][1])}1v l.g.1r.6("5c")?O("3d",l.g.1r.6("5c")):O("br",l.g.1r.6("5H"));1v 1c(l.g.1r.6("5G")&&l.g.1r.6("5I")){17 i=1z.27(2*1z.2e()),a=[["2d",l.g.1r.6("5G")],["bq",l.g.1r.6("5I")]];O(a[i][0],a[i][1])}1v l.g.1r.6("5G")?O("2d",l.g.1r.6("5G")):l.g.1r.6("5I")?O("bq",l.g.1r.6("5I")):O("2d","1")},k=14(){o(t(e))&&-1!=5Q.1f("3d")?O("3d",5Q.1H(":")[1]):-1!=5Q.1f("3d")?O("2d","4S"):O("2d",5Q.1H(":")[1])},O=14(t,e){17 i,a,s=-1==t.1f("di")?l.t:l.ct,o="3d";1c(-1!=t.1f("2d")&&(o="2d"),-1!=e.1f("7H"))a=s["t"+o].1h-1,i="7H";1v 1c(-1!=e.1f("4S"))a=1z.27(1z.2e()*n(s["t"+o])),i="2e bf 4S";1v{17 r=e.1H(","),d=r.1h;a=1a(r[1z.27(1z.2e()*d)])-1,i="2e bf d7"}C(o,s["t"+o][a])},C=14(i,o){17 n=t(e).16(".11-2k"),d=l.g.1J.16(\'*[1q*="11-l"]\').1h>0?1N:0,g=-1==o.6n.24().1f("dL")?!1:!0,h=-1==o.6n.24().1f("du")?!1:!0,c=1O o.4t,u=1O o.4r;2t(c){1g"3N":c=o.4t;1p;1g"5F":c=1z.27(1z.2e()*(1a(o.4t.1H(",")[1])-1a(o.4t.1H(",")[0])+1))+1a(o.4t.1H(",")[0]);1p;bm:c=1z.27(1z.2e()*(o.4t[1]-o.4t[0]+1))+o.4t[0]}2t(u){1g"3N":u=o.4r;1p;1g"5F":u=1z.27(1z.2e()*(1a(o.4r.1H(",")[1])-1a(o.4r.1H(",")[0])+1))+1a(o.4r.1H(",")[0]);1p;bm:u=1z.27(1z.2e()*(o.4r[1]-o.4r[0]+1))+o.4r[0]}(1==l.g.6m()&&1==l.o.aU||l.g.2s&&1==l.o.b3)&&(c>=15?c=7:c>=5?c=4:c>=4?c=3:c>2&&(c=2),u>=15?u=7:u>=5?u=4:u>=4?u=3:u>2&&(u=2),u>2&&c>2&&(u=2,c>4&&(c=4)));17 f=t(e).16(".11-2k").19()/c,p=t(e).16(".11-2k").1b()/u;l.g.2y?l.g.2y.1u(!0,!0).5K().18({1I:"2n",19:n.19(),1b:n.1b()}):l.g.2y=t("<1j>").1k("11-1t-2a").1k("11-4D-2B").18({19:n.19(),1b:n.1b()}).5S(n);17 m=n.19()-1z.27(f)*c,v=n.1b()-1z.27(p)*u,y=[];y.bs=14(){17 t,e,i,a=12.1h;1c(0==a)21!1;1Z(;--a;)t=1z.27(1z.2e()*(a+1)),e=12[a],i=12[t],12[a]=i,12[t]=e;21 12};1Z(17 b=0;c*u>b;b++)y.7k(b);2t(o.3Q.eR){1g"5O":y.5O();1p;1g"bv-7p":y=r(u,c,"7p");1p;1g"bv-5O":y=r(u,c,"5O");1p;1g"2e":y.bs()}17 w=l.g.1J.16(".11-bg"),L=l.g.1r.16(".11-bg");1c(0==w.1h&&0==L.1h&&(i="2d",o=t.4K(!0,{},l.t.dz[0]),o.1y.2p=1,o.3Q.1L=0),"3d"==i){l.g.32=(c*u-1)*o.3Q.1L;17 I=0;o.2E&&o.2E.2p&&(I+=o.2E.2p),o.29&&o.29.2p&&(I+=o.29.2p),o.2C&&o.2C.2p&&(I+=o.2C.2p),l.g.32+=I;17 k=0;o.2E&&o.2E.1L&&(k+=o.2E.1L),o.29&&o.29.1L&&(k+=o.29.1L),o.2C&&o.2C.1L&&(k+=o.2C.1L),l.g.32+=k}1v l.g.32=(c*u-1)*o.3Q.1L+o.1y.2p,l.g.5u=t("<1j>").1k("11-dy").1A(l.g.2y),l.g.7x=t("<1j>").1k("11-dA").1A(l.g.2y);1Z(17 O=l.g.2g,C=0;c*u>C;C++){17 W,X,H=C%c==0?m:0,Y=C>(u-1)*c-1?v:0,P=t("<1j>").1k("11-1t-3Q").18({19:1z.27(f)+H,1b:1z.27(p)+Y}).1A(l.g.2y);1c("3d"==i){P.1k("11-3d-2a");17 M,N=1z.27(f)+H,B=1z.27(p)+Y;M="b1"==o.29.5N?1z.4o(o.29.1y.3h)>90&&"b0"!=o.3Q.aX?1z.27(N/7)+H:N:1z.4o(o.29.1y.2N)>90&&"b0"!=o.3Q.aX?1z.27(B/7)+Y:B;17 A=N/2,R=B/2,z=M/2,D=14(e,i,a,s,o,r,n,d,l){t("<1j>").1k(e).18({19:a,1b:s,"-o-3X":"5r("+o+"1B, "+r+"1B, "+n+"1B) 2N("+d+"3F) 3h("+l+"3F) 5y(5w) 4x(1, 1, 1)","-dw-3X":"5r("+o+"1B, "+r+"1B, "+n+"1B) 2N("+d+"3F) 3h("+l+"3F) 5y(5w) 4x(1, 1, 1)","-dr-3X":"5r("+o+"1B, "+r+"1B, "+n+"1B) 2N("+d+"3F) 3h("+l+"3F) 5y(5w) 4x(1, 1, 1)","-6p-3X":"5r("+o+"1B, "+r+"1B, "+n+"1B) 2N("+d+"3F) 3h("+l+"3F) 5y(5w) 4x(1, 1, 1)",3X:"5r("+o+"1B, "+r+"1B, "+n+"1B) 2N("+d+"3F) 3h("+l+"3F) 5y(5w) 4x(1, 1, 1)"}).1A(i)};D("11-3d-3D",P,0,0,0,0,-z,0,0);"dq"==o.29.5N&&1z.4o(o.29.1y.2N)>90?D("11-3d-5J",P.16(".11-3d-3D"),N,B,-A,-R,-z,6E,0):D("11-3d-5J",P.16(".11-3d-3D"),N,B,-A,-R,-z,0,6E),D("11-3d-1l",P.16(".11-3d-3D"),N,M,-A,R-z,0,-90,0),D("11-3d-1m",P.16(".11-3d-3D"),N,M,-A,-R-z,0,90,0),D("11-3d-aY",P.16(".11-3d-3D"),N,B,-A,-R,z,0,0),D("11-3d-1i",P.16(".11-3d-3D"),M,B,-A-z,-R,0,0,-90),D("11-3d-1G",P.16(".11-3d-3D"),M,B,A-z,-R,0,0,90),W=P.16(".11-3d-aY"),X=P.16("b1"==o.29.5N?1z.4o(o.29.1y.3h)>90?".11-3d-5J":".11-3d-1i, .11-3d-1G":1z.4o(o.29.1y.2N)>90?".11-3d-5J":".11-3d-1m, .11-3d-1l");17 U=y[C]*o.3Q.1L,F=l.g.2y.16(".11-3d-2a:eq("+C+") .11-3d-3D"),q=1E bp;o.2E&&o.2E.1y?(o.2E.1y.1L=o.2E.1y.1L?(o.2E.1y.1L+U)/1N:U/1N,q.2i(F[0],o.2E.2p/1N,s(o.2E.1y,o.2E.4F))):o.29.1y.1L=o.29.1y.1L?(o.29.1y.1L+U)/1N:U/1N,q.2i(F[0],o.29.2p/1N,s(o.29.1y,o.29.4F)),o.2C&&(o.2C.1y||(o.2C.1y={}),q.2i(F[0],o.2C.2p/1N,s(o.2C.1y,o.2C.4F,"2C")))}1v{17 j=3c=2T=2U="1T",Q=6w=1;1c("2e"==o.1y.5N)17 V=["1m","1l","1G","1i"],E=V[1z.27(1z.2e()*V.1h)];1v 17 E=o.1y.5N;1c(-1!=o.6n.24().1f("a0")&&C%2==0&&(O="1S"==O?"1U":"1S"),"1S"==O)2t(E){1g"1m":E="1l";1p;1g"1l":E="1m";1p;1g"1i":E="1G";1p;1g"1G":E="1i";1p;1g"7i":E="7q";1p;1g"7j":E="7v";1p;1g"7v":E="7j";1p;1g"7q":E="7i"}2t(E){1g"1m":j=2T=-P.1b(),3c=2U=0;1p;1g"1l":j=2T=P.1b(),3c=2U=0;1p;1g"1i":j=2T=0,3c=2U=-P.19();1p;1g"1G":j=2T=0,3c=2U=P.19();1p;1g"7i":j=P.1b(),2T=0,3c=P.19(),2U=0;1p;1g"7j":j=P.1b(),2T=0,3c=-P.19(),2U=0;1p;1g"7v":j=-P.1b(),2T=0,3c=P.19(),2U=0;1p;1g"7q":j=-P.1b(),2T=0,3c=-P.19(),2U=0}2t(l.g.5b=o.1y.5k?o.1y.5k:1,1==g&&1!=l.g.5b&&(j/=2,2T/=2,3c/=2,2U/=2),o.1y.4A){1g"3p":j=2T=3c=2U=0,Q=0,6w=1;1p;1g"dK":Q=0,6w=1,1==l.g.5b&&(2T=2U=0)}1c(P.18((o.1y.3n||o.1y.2N||o.1y.3h||1!=l.g.5b)&&!l.g.2s&&"1o"!=o.1y.4A?{4D:"2R"}:{4D:"2B"}),l.g.5u.18(1==g?{4D:"2R"}:{4D:"2B"}),1==h||"1o"==o.1y.4A||1==g){17 G=P.1A(l.g.5u),Z=P.7r().1A(l.g.7x);W=t("<1j>").1k("11-dF").1A(G)}1v 17 Z=P.1A(l.g.7x);X=t("<1j>").1k("11-dI").1A(Z).18({1m:-j,1i:-3c,dn:"2n",3j:Q});17 $=y[C]*o.3Q.1L,J=o.1y.3n?o.1y.3n:0,6x=o.1y.2N?o.1y.2N:0,K=o.1y.3h?o.1y.3h:0;1c("1S"==O&&(J=-J,6x=-6x,K=-K),38.6y(X[0],o.1y.2p/1N,{3g:J,4w:6x,4E:K,5k:l.g.5b},{1L:$/1N,1m:0,1i:0,3j:6w,3g:0,4w:0,4E:0,5k:1,3T:a(o.1y.4F)}),1==h&&(L.1h<1||L.1h>0&&(-1!=L.1d("1e").24().1f("4B")||L.19()<l.g.1x()||L.1b()<l.g.1D()))&&38.2i(W[0],o.1y.2p/1N,{1L:$/1N,3j:0,3T:a(o.1y.4F)}),("1o"==o.1y.4A||1==g)&&-1==o.6n.24().1f("a0")){17 8V=0;0!=J&&(8V=-J),38.2i(W[0],o.1y.2p/1N,{1L:$/1N,1m:2T,1i:2U,3g:8V,5k:l.g.5b,3j:Q,3T:a(o.1y.4F)})}}w.1h&&("3d"==i||"2d"==i&&(1==h||"1o"==o.1y.4A||1==g)?W.42(t("<28>").1d("1e",w.1d("1e")).18({19:w[0].1K.19,1b:w[0].1K.1b,3G:3f(w.18("4c-1i"))-3f(P.3E().1i),46:3f(w.18("4c-1m"))-3f(P.3E().1m)})):0==l.g.5u.2Z().1h&&l.g.5u.42(t("<28>").1d("1e",w.1d("1e")).18({19:w[0].1K.19,1b:w[0].1K.1b,3G:3f(w.18("4c-1i")),46:3f(w.18("4c-1m"))}))),L.1h&&X.42(t("<28>").1d("1e",L.1d("1e")).18({19:L[0].1K.19,1b:L[0].1K.1b,3G:3f(L.18("4c-1i"))-3f(P.3E().1i),46:3f(L.18("4c-1m"))-3f(P.3E().1m)}))}17 ee=l.g.1J,2I=l.g.1r;2c(14(){ee.16(".11-bg").18({26:"2B"})},50),2I.16(".11-bg").18({26:"2B"}),l.g.2y.2j("11-4D-2B"),S(d),0===d&&(d=10),2c(14(){ee.18({19:0})},d);17 ae=1a(2I.6("6J"))?1a(2I.6("6J")):0,ag=l.g.32+ae>0?l.g.32+ae:0;2c(14(){1==l.g.2f&&(l.g.2y.5K(),ee.2j("11-1R"),l.3s(2I,14(){l.g.2f=!1})),T(),(2I.16(".11-bg").1h<1||2I.16(".11-bg").1h>0&&-1!=2I.16(".11-bg").1d("1e").24().1f("4B"))&&l.g.2y.1L(8T).3J(2u,14(){t(12).5K().af()}),2I.18({19:l.g.1x(),1b:l.g.1D()})},ag),l.g.32<2u&&(l.g.32=1N),2c(14(){l.g.2y.1k("11-4D-2B"),2I.1k("11-1R"),2I.16(".11-bg").1h?(2I.16(".11-bg").18({1I:"1P",26:"2R"}),l.g.2s?(2I.16(".11-bg").18("1I","2n"),2c(14(){x()},4s)):2I.16(".11-bg").2F(4s,14(){x()})):x()},l.g.32)},W=14(){l.g.1r.16(\' > *[1q*="11-l"]\').1M(14(){t(12).18({26:"2B"})}),l.g.8e=t(e).4e().1m,t(1W).40(14(){2c(14(){l.g.8e=t(e).4e().1m},20)});17 i=14(){t(1W).cY()+t(1W).1b()-l.g.1D()/2>l.g.8e&&(l.g.69=!0,l.g.7y===!0&&(l.o.4f=!0,l.23()),T())};t(1W).d0(14(){l.g.69||i()}),i()},X=(l.g.1r.6("5c")||l.g.1r.6("5G"))&&l.t||(l.g.1r.6("5H")||l.g.1r.6("5I"))&&l.ct?"1E":"5T";1c(l.g.1r.6("2A")||l.5x(l.g.1r),"1E"===l.g.1r.6("2A")&&(X="1E"),l.o.8m&&(X="ad"),l.o.4z&&!l.g.69){1c(1==l.g.2z){17 f=0;l.o.7P(l.g)}1v{17 H=1a(l.g.1r.6("6J"))?1a(l.g.1r.6("6J")):0,Y="1E"==X?0:p;l.g.aq=2c(14(){x()},Y+1z.4o(H))}l.g.32=!0,l.o.8q===!0?W():(l.g.69=!0,T()),l.g.1r.18({19:l.g.1x(),1b:l.g.1D()}),l.g.2s||l.g.1r.16(".11-bg").18({1I:"1P"}).2F(l.o.8z),l.g.4h=!1}1v 2t(X){1g"5T":l.g.32=!1,l.g.2y&&l.g.2y.5K(),w(),S(),L(),T();1p;1g"1E":"3a"!=1O 5Q?k():I();1p;1g"ad":C(l.o.8m.4A,l.o.8m.dk)}},l.5x=14(t){17 e=!t.6("11")&&(t.6("11")||t.6("5P")||t.6("3o")||t.6("5o")||t.6("4W")||t.6("5L")||t.6("5M")||t.6("4y")||t.6("4C")||t.6("5U")||t.6("4v")||t.6("8j")||t.6("5q")||t.6("8k")||t.6("5m"))?"5T":"1E";t.6("2A",e)},l.8p=14(t){t.6("2A")||l.5x(t),t.2j("11-8w");17 e=l.g.1J;"1S"!=l.g.2g&&l.g.1r&&(e=l.g.1r);17 i,s,o=e.6("3o")?e.6("3o"):l.o.7I,r=l.g.7s[l.g.2g][o],n=t.6("3o")?t.6("3o"):r;2t(n){1g"1i":i=-l.g.1x(),s=0;1p;1g"1G":i=l.g.1x(),s=0;1p;1g"1m":s=-l.g.1D(),i=0;1p;1g"1l":s=l.g.1D(),i=0;1p;1g"3p":s=0,i=0}1c("1E"===t.6("2A"))17 d="1E";1v 17 d=t.6("5o")?t.6("5o"):!1;2t(d){1g"1i":i=l.g.1x(),s=0;1p;1g"1G":i=-l.g.1x(),s=0;1p;1g"1m":s=l.g.1D(),i=0;1p;1g"1l":s=-l.g.1D(),i=0;1p;1g"3p":s=0,i=0;1p;1g"1E":i=t.6("34")?"1i"===t.6("34")?l.g.1x():"1G"===t.6("34")?-l.g.1x():-1a(t.6("34")):-l.1t.7R,s=t.6("3e")?"1m"===t.6("3e")?l.g.1D():"1l"===t.6("3e")?-l.g.1D():-1a(t.6("3e")):-l.1t.7o}17 g=56=55=4j=54=58=36=33="1P";g=t.6("5m")?t.6("5m"):l.1t.8W,56=t.6("6S")?t.6("6S"):l.1t.8A,55=t.6("6P")?t.6("6P"):l.1t.8F,4j=t.6("5q")?t.6("5q"):l.1t.8J,54=t.6("73")?t.6("73"):l.1t.8B,58=t.6("6O")?t.6("6O"):l.1t.8C,1===4j?(36=t.6("6L")?t.6("6L"):l.1t.8G,33=t.6("6M")?t.6("6M"):l.1t.8E):36=33=4j;1Z(17 h=t.6("6T")?t.6("6T").1H(" "):l.1t.8L,c=0;c<h.1h;c++)-1===h[c].1f("%")&&-1!==h[c].1f("1i")&&-1!==h[c].1f("1G")&&-1!==h[c].1f("1m")&&-1!==h[c].1f("1l")&&(h[c]=""+1a(h[c])*l.g.1w+"1B");17 u=h.8P(" "),f=t.6("6X")?t.6("6X"):l.1t.8U,p=1a(t.18("1i")),m=1a(t.18("1m")),v=1a(t.1d("1q").1H("11-l")[1]),y=t.3m()>t.3l()?t.3m():t.3l(),b=0===1a(g)?t.3m():y,w=0===1a(g)?t.3l():y;1c(-1===v&&"1E"!==d||"1i"===t.6("34")||"1G"===t.6("34")?0>i?i=-(l.g.1x()-p+(36/2-.5)*b+1C):i>0&&(i=p+(36/2+.5)*b+1C):i*=l.g.1w,-1===v&&"1E"!==d||"1m"===t.6("3e")||"1l"===t.6("3e")?0>s?s=-(l.g.1D()-m+(33/2-.5)*w+1C):s>0&&(s=m+(33/2+.5)*w+1C):s*=l.g.1w,-1===v||"1E"===d)17 x=1;1v 17 S=l.g.1J.6("7c")?1a(l.g.1J.6("7c")):l.o.7z,x=v*S;1c("1E"===t.6("2A"))17 L=l.1t.4L,T=l.1t.4O;1v 17 L=l.o.4L,T=l.o.4O;17 I=t.6("4y")?1a(t.6("4y")):L;0===I&&(I=1);17 k=t.6("4v")?t.6("4v"):T,O={26:"2B"},C={3g:g,4w:56,4E:55,72:54,70:58,5e:36,5g:33,x:-i*x,y:-s*x,3T:a(k),82:14(){t.18(O)}};("3p"==d||!d&&"3p"==n||"81"!==t.6("a2")&&"1E"===t.6("2A"))&&(C.3j=0,O.3j=t.6("7a")),38.8c(t[0],{8n:f,8l:u}),38.2i(t[0],I/1N,C)},l.40()},a=14(t){17 e;1c(-1!==t.24().1f("a9")||-1!==t.24().1f("8h"))e=8g.86;1v 1c(-1!==t.24().1f("83")){17 i=t.24().1H("83")[1];e=1W[i.89(0).8b()+i.8x(1)].a8}1v 1c(-1!==t.24().1f("87")){17 i=t.24().1H("87")[1];e=1W[i.89(0).8b()+i.8x(1)].ar}1v 1c(-1!==t.24().1f("8f")){17 i=t.24().1H("8f")[1];e=1W[i.89(0).8b()+i.8x(1)].as}21 e},s=14(t,e,i,s){1c("3a"==1O e)17 e="ey";17 o={};21 t.3n!==s&&(o.3g=t.3n),t.3h!==s&&(o.4E=t.3h),t.2N!==s&&(o.4w=t.2N),"2C"===i?o.5e=o.5g=o.aJ=1:t.4x!==s&&(o.5e=o.5g=o.aJ=t.4x),t.1L&&(o.1L="2C"===i?t.1L/1N:t.1L),o.3T=a(e),o},o=14(e){17 i=t("<1j>"),a=!1,s=!1,o=["eB","eC","ex","ew","er"];3X=["ep","es","et","ev","eu"];1Z(17 r=o.1h-1;r>=0;r--)a=a?a:aL 0!=i[0].1K[o[r]];1Z(17 r=3X.1h-1;r>=0;r--)i.18("3X-1K","aH-3d"),s=s?s:"aH-3d"==i[0].1K[3X[r]];21 a&&aL 0!=i[0].1K[o[4]]&&(i.1d("65","11-eE").1A(e),a=3===i[0].eO&&9===i[0].eP,i.aN()),a&&s},r=14(t,e,i){17 a=[];1c("7p"==i)1Z(17 s=0;t>s;s++)1Z(17 o=0;e>o;o++)a.7k(s+o*t);1v 1Z(17 s=t-1;s>-1;s--)1Z(17 o=e-1;o>-1;o--)a.7k(s+o*t);21 a},n=14(t){17 e=0;1Z(17 i 3I t)t.e7(i)&&++e;21 e},d=14(){aC=14(t){t=t.24();17 e=/(aB)[ \\/]([\\w.]+)/.5Z(t)||/(6p)[ \\/]([\\w.]+)/.5Z(t)||/(ei)(?:.*3Y|)[ \\/]([\\w.]+)/.5Z(t)||/(aE) ([\\w.]+)/.5Z(t)||t.1f("aD")<0&&/(eh)(?:.*? ej:([\\w.]+)|)/.5Z(t)||[];21{7B:e[1]||"",3Y:e[2]||"0"}};17 t=aC(41.3V),e={};21 t.7B&&(e[t.7B]=!0,e.3Y=t.3Y),e.aB?e.6p=!0:e.6p&&(e.e9=!0),e};i.6K={3Y:"5.4.0",6m:14(){21 41.3V.3A(/bQ/i)||41.3V.3A(/bK/i)||41.3V.3A(/bG/i)||41.3V.3A(/bF/i)||41.3V.3A(/bH/i)||41.3V.3A(/bI/i)||41.3V.3A(/bS c0/i)?!0:!1},c1:14(t){21"1T"==t.18("2b-1l")||"1P"==t.18("2b-1l")||0==t.18("2b-1l")||"bZ"==t.18("2b-1l")?!0:!1},2s:d().aE&&d().3Y<9?!0:!1,7y:!1,2S:!1,4Q:!1,2v:!1,2P:!1,2z:6U,2g:"1U",4n:6U,1x:6U,1D:6U,7s:{1S:{1i:"1G",1G:"1i",1m:"1l",1l:"1m"},1U:{1i:"1i",1G:"1G",1m:"1m",1l:"1l"}},v:{d:4s,7u:7l,7t:4s}},i.az={av:80,au:0,5R:1N,5t:0,5p:"6V",2F:!0,aw:0,ax:0,ay:0,aF:1,aG:1,aO:1,aP:0,aQ:0,aM:["50%","50%","0"],aI:4s,7R:-80,7o:0,4L:aK,cO:0,4O:"6V",3J:!0,8W:0,8A:0,8F:0,8J:1,8G:1,8E:1,8B:0,8C:0,8L:["50%","50%","0"],8U:4s},i.a3={6b:bk},i.a4={a5:!0,3O:0,6j:0,8i:!1,1A:"",4f:!0,8q:!0,aS:!0,2L:1,4z:!0,8z:8T,4l:0,79:!0,8D:!1,75:!1,3w:"cv",3L:"/5z/cu/",8R:"84",6Q:!1,85:!0,7e:!0,7g:!0,ao:!0,ap:!0,al:!0,6g:!1,ak:!1,ah:!0,3k:"1Q",6d:"60%",88:1C,5E:60,8y:35,8a:1C,5D:!0,2x:"1T",ai:"cn.cj",3S:!0,4u:!0,1s:!1,aj:"1i: -aR; 1m: -aR;",8M:!1,bu:"cg",aU:!0,b3:!0,8I:!1,bb:0,b8:cS,cA:"",ba:14(){},b9:14(){},aZ:14(){},bd:14(){},bh:14(){},7P:14(){},6A:14(){},6a:14(){},6b:bk,7I:"1G",bj:.45,7z:.45,5R:1N,4L:1N,5p:"6V",4O:"6V",5t:0,7d:0}}(3K);', 62, 922, '||||||data|||||||||||||||||||||||||||||||||||||||||||||||||||||||||ls|this||function||find|var|css|width|parseInt|height|if|attr|src|indexOf|case|length|left|div|addClass|bottom|top|nav|slide|break|class|nextLayer|yourLogo|lt|stop|else|ratio|sliderWidth|transition|Math|appendTo|px|100|sliderHeight|new|thumbnail|right|split|display|curLayer|style|delay|each|1e3|typeof|none|hover|active|prev|auto|next|iframe|window|the|parent|for||return|curLayerIndex|start|toLowerCase||visibility|floor|img|animation|container|padding|setTimeout||random|resize|prevNext|replace|to|removeClass|inner|sliderOriginalWidth|hasClass|block|clearTimeout|duration|video|click|ie78|switch|300|autoSlideshow|originalAutoSlideshow|autoPauseSlideshow|ltContainer|layersNum|transitiontype|hidden|after|cttl|before|fadeIn|not|wrapper|ie|image|originalHeight|firstSlide|href|rotateX|LayerSlider|isAnimating|originalWidth|visible|paused|T2|L2|videopreview|bottomWrapper|of|loaded|children|wp|fullwidth|totalDuration|curSubScaleY|offsetxout||curSubScaleX||TweenLite||undefined|circleTimer|L1||offsetyout|parseFloat|rotation|rotateY|layerSlider|opacity|thumbnailNavigation|outerHeight|outerWidth|rotate|slidedirection|fade|barTimer|preventDefault|makeResponsive|preloaded|closest|background|skin|is|curSlideTime|layer|match|tr|sliderOriginalHeight|box|position|deg|marginLeft|param|in|fadeOut|jQuery|skinsPath|thumbsWrapper|number|responsiveUnder|on|tile|com|imgPreload|ease|error|userAgent|videoSrc|transform|version|pausedSlideTime|load|navigator|append|originalTop|forcehide||marginTop|originalLeft|autoplay|thumb|html|startSlideTime|margin|nextLoop|offset|autoStart|shadow|isLoading|border|curSubScale|animate|loops|tn|slideTimer|abs|showUntilTimer|responsiveMode|rows|500|cols|lazyLoad|easingout|rotationX|scale3d|durationout|animateFirstSlide|type|png|showuntil|overflow|rotationY|easing|youtube|location|or|like|extend|durationOut|Please|slidebuttons|easingOut|your|pausedByVideo|always|all|change|shadowImg|and|delayin|nextSubScaleX|nextSubScaleY|init||touches|offsetyin|offsetxin|curSubSkewX|curSubRotateY|curSubRotateX|vimeo|curSubSkewY|thumbnails|rel|scale2D|transition3d|parallaxlevel|scaleX|Date|scaleY|body|fisrtSlide|getTime|scale|nextLayerIndex|rotateout|it|slideoutdirection|easingIn|scaleout|translate3d|timer|delayIn|curTiles|originalBottom|0deg|transitionType|rotateZ|layerslider|WordPress|originalRight|document|autoPlayVideos|tnHeight|string|transition2d|customtransition3d|customtransition2d|back|empty|delayout|durationin|direction|reverse|slidedelay|LSCustomTransition|durationIn|prependTo|old|easingin|trim|url|player|touchEndX|exec||span|removeAttr|youtu|li|id|vpcontainer|pause|nIt|firstSlideAnimated|cbNext|slideDelay|bind|tnContainerWidth|pointing|seems|hoverBottomNav|console|touchStartX|layersContainer|originalBorderRight|originalBorderLeft|isMobile|name|URL|webkit|showShadow|videoTimer|ontouchstart|videoDuration|fadeTo|link|O2|_|fromTo|http|cbPrev|originalBorderTop|nextLayerTop|helper|180|nextLayerLeft|layerMarginLeft|layerMarginTop|curLayerTop|timeshift|global|scalexout|scaleyout|cannot|skewyout|rotateyout|globalBGImage|images|rotatexout|transformoriginout|null|easeInOutQuint|URLs|perspectiveout|check|wrong|skewY|nextSubScale|skewX|skewxout|audio|randomSlideshow|originalBorderBottom|slider|nothumb|forceLoopNum|originalOpacity|used|parallaxout|delayOut|navStartStop|clicked|navButtons|currentTime|topleft|topright|push|750|script|oB|offsetYOut|forward|bottomright|clone|slideDirections|fi|fo|bottomleft|bottomNavSizeHelper|nextTiles|originalAutoStart|parallaxOut|nextSubSkewX|browser|forceHideControls|250|nextSubSkewY|nextSubRotateX|kill|last|slideDirection|nextSubRotateY|nextLayerBottom|nextLayerRight|kmGS|pageX|index|cbAnimStop|changeThumb|offsetXOut|scrollThumb|nextLayerHeight|nextLayerWidth|curLayerBottom|curLayerRight|content|150|originalPaddingLeft||false|onComplete|easeinout|transparent|navPrevNext|easeNone|easeout|tnWidth|charAt|tnInactiveOpacity|toUpperCase|set|dequeue|sliderTop|easein|Linear|linear|fullScreen|scalein|rotatein|transformOrigin|slideTransition|transformPerspective|resizeShadow|sublayerShowUntil|startInViewport|oT|originalPaddingRight|originalPaddingTop|resizeSlider|originalPaddingBottom|videohack|slice|tnActiveOpacity|sliderFadeInDuration|rotateXOut|skewXOut|skewYOut|twoWaySlideshow|scaleYOut|rotateYOut|scaleXOut|alt|hideOnMobile|scaleOut|linkto|transformOriginOut|yourLogoLink|oR|resizeYourLogo|join|sublayerContainer|globalBGColor|defaults|350|perspectiveOut|te|rotateOut|norotate|pageY|which||layerSliderTransitions|line|originalEvent|initialized|originalFontSize|font|originalLineHeight|callback|mousemove|above|oldjquery|sides|size|layerSliderCustomTransitions|Play|borderRightWidth|borderTopWidth|relative|borderBottomWidth|borderLeftWidth|2e3|t4|opaque|half|ieEasing|wmode|hash|entry|playvideo|t3|off|gi|text|resizeThumb|hider|createStyleSheet|head|showSlider|disabled|firstLayer|loading|t2|parallaxStartX|st|embed|parallaxStartY|getJSON|json|api|shadowBtmMod|group|meta|stopLayer|forcestop|t1|substring|lastIndexOf|add|sliderOriginalWidthRU|alert|clientX|mirror|library|fadeout|slideTransitions|options|responsive|looks|It|easeInOut|swing|strong|issue|plugin|forced||show|se|showCircleTimer|youtubePreview|yourLogoStyle|showBarTimer|hoverPrevNext|update||keybNav|touchNav|t5|easeOut|easeIn||offsetYIn|offsetXIn|rotateIn|rotateXIn|rotateYIn|layerTransitions|animating|chrome|uaMatch|compatible|msie|scaleIn|scaleXIn|preserve|perspectiveIn|scaleZ|400|void|transformOriginIn|remove|scaleYIn|skewXIn|skewYIn|10px|pauseOnHover|jquery|optimizeForMobile|skewxin|object|depth|front|cbStop|large|horizontal|skewyin|optimizeForIE78|scaleyin|transformoriginin|parallaxin|scalexin|hideOver|cbStart|cbInit|hideUnder|perspectivein|cbPause||from||cbAnimStart|cbTimeLineStart|parallaxIn|4e3|lsShowNotice|default|fn|rotatexin|TimelineLite|custom2d|custom3d|randomize|rotateyin|yourLogoTarget|col|absolute|mouseenter||multiple|that|mouseleave|sideleft|wpVersion|below|iPad|iPhone|iPod|BlackBerry|touchmove|webOS|touchend|yourlogo|bock|main|area|Android|touchstart|Windows|gif|navigate|sliders|problems|touchscroll|admin|0px|Phone|isHideOn3D|originalMarkup|keydown|sideright|causing|insertBefore|yt|media|loads|videos|seconds|vi|v2|animateFirstLayer|html5|_self|feeds|gdata|jpg|deeplink|insertAfter|round|maxresdefault|cursor|file|theme|gpuhack|pointer||skins|v5|circle|center|bar|lswpVersion|staticImage|zIndex|indicator|important|backgroundColor|backgroundImage|static|wrapAll|play|extra|another|thumbnail_large|page|copy|showUntil|stylesheet|ended|640|1e6|blank|cubic|support|kreaturamedia|IE|scrollTop|browsers|scroll|faq|wordpress|enabled|read|can|You|specified|older|with|least|newer|fadein|requires|using|target|higher|Important|custom|because|obj|Updater|use|dispay||more|vertical|moz|redraw|defaultInitData|crossfad|userInitData|ms|forceStop|curtiles|t2d|nexttiles|prevLayerIndex|filter|layerMarginBottom|layerMarginRight|curtile|600|updating|nexttile|about|mixed|carousel|exclam|title|changeTimer|here|clicking|are|you|quart|Quart|Quad|quad|JS|includes|Cubic|quint|expo|Expo|Sine|sine|Quint|restart|hasOwnProperty|queue|safari|enableCSS3|orientationchange|textDecoration|outline||resume|onReverseComplete|mozilla|opera|rv|Put||enable|circ|Circ|transformStyle||WebkitPerspective|OTransformStyle|msTransformStyle|WebkitTransformStyle|MozTransformStyle|MozPerspective|msPerspective|easeInOutQuart|log|Trident|perspective|OPerspective|Settings|test3d|bounce|Bounce|Back|Elastic|elastic|option|within|450|Advanced|offsetHeight|offsetLeft|Troubleshooting|sequence'.split('|'), 0, {}));
eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('20 1Z={27:[{j:"13 N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"r"}},{j:"13 N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"E"}},{j:"13 N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"J"}},{j:"13 N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"L"}},{j:"26",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"1e",a:G,h:"r"}},{j:"Z R o",d:[2,4],g:[4,7],f:{e:1k,i:"o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R D",d:[2,4],g:[4,7],f:{e:1k,i:"D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-o",d:[2,4],g:[4,7],f:{e:1k,i:"1j-o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-D",d:[2,4],g:[4,7],f:{e:1k,i:"1j-D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R (k)",d:[2,4],g:[4,7],f:{e:1k,i:"k"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"1y 1H N E",d:1,g:1s,f:{e:25,i:"D"},c:{n:"14",b:"1X",a:V,h:"r"}},{j:"1y 1H N r",d:1,g:1s,f:{e:25,i:"o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N L",d:1s,g:1,f:{e:25,i:"1j-D"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N J",d:1s,g:1,f:{e:25,i:"1j-o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y Y N E",d:1,g:25,f:{e:1k,i:"D"},c:{n:"W",b:"w",a:1g,h:"r"}},{j:"1y Y N r",d:1,g:25,f:{e:1k,i:"o"},c:{n:"W",b:"w",a:1g,h:"E"}},{j:"1y 1W N L",d:25,g:1,f:{e:1k,i:"1j-D"},c:{n:"W",b:"w",a:1g,h:"J"}},{j:"1y Y N J",d:25,g:1,f:{e:1k,i:"1j-o"},c:{n:"W",b:"w",a:1g,h:"L"}},{j:"13 R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"E"}},{j:"13 R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"r"}},{j:"13 R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"L"}},{j:"13 R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"J"}},{j:"13 k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"k"}},{j:"13 d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"Z v Y R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"E"}},{j:"Z v Y R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"r"}},{j:"Z v Y R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"L"}},{j:"Z v Y R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"J"}},{j:"Z v Y k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"k"}},{j:"Z v Y R N J-r (o)",d:[2,4],g:[4,7],f:{e:1f,i:"o"},c:{n:"Q",b:"z",a:1m,h:"1V"}},{j:"Z v Y R N L-E (D)",d:[2,4],g:[4,7],f:{e:1f,i:"D"},c:{n:"Q",b:"z",a:1m,h:"21"}},{j:"Z v Y R N J-E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1T"}},{j:"Z v Y R N L-r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1U"}},{j:"Z v Y d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"1u",d:1,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u R A",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u R F",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u-1I R A",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u-1I R F",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u 1I d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"E",1h:.5}},{j:"1u 1I g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1c f N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"E",y:x}},{j:"1c f N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"r",y:-x}},{j:"1c f N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"L",u:-x}},{j:"1c f N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"J",u:x}},{j:"1c R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1c R N E",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c R N J",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c R N L",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N J",d:[6,12],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N L",d:[6,12],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c g N r",d:1,g:[6,12],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c g N E",d:1,g:[6,12],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N r",d:[3,10],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N E",d:[3,10],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1v g N J",d:1,g:[3,10],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1v g N L",d:1,g:[3,10],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1v v 1z f N r",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1h:.1,1r:-x,y:x}},{j:"1v v 1z f N E",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1h:.1,1r:x,y:-x}},{j:"1v v 1z R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1r:-1w}},{j:"1v v 1z R N E",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1r:-1w}},{j:"1v v 1z R N k",d:[3,4],g:[3,4],f:{e:19,i:"k"},c:{n:"Q",b:"z",a:V,h:"k",1r:-1w}},{j:"B f 1O",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"z",a:1a,h:"r",1h:.8}},{j:"B f N 1L",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"w",a:1a,h:"r",1h:1.2}},{j:"B R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1}},{j:"B R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2}},{j:"B 1O v 1z R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1,1r:x}},{j:"B v 1z R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2,1r:-x}},{j:"1D-Y R 24",d:3,g:4,f:{e:15,i:"o"},c:{n:"W",b:"w",a:1Y,h:"1T"}},{j:"1D-Y d A",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y d F",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}},{j:"1D-Y g A",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y g F",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}}],23:[{j:"1b f m E (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:1E},b:"1F",a:G,h:"A"},C:{c:{y:l},b:"z",a:G,h:"A"}},{j:"1b f m r (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-1E},b:"1F",a:G,h:"A"},C:{c:{y:-l},b:"z",a:G,h:"A"}},{j:"1b f m L (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-1E},b:"1F",a:1x,h:"F"},C:{c:{u:-l},b:"z",a:1x,h:"F"}},{j:"1b f m J (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:1E},b:"1F",a:1x,h:"F"},C:{c:{u:l},b:"z",a:1x,h:"F"}},{j:"1b R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:G,h:"A"}},{j:"1b R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},s:{c:{y:-l},b:"w",a:G,h:"A"}},{j:"1b R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1G,h:"A"}},{j:"1C S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{u:l},b:"w",a:1G,h:"F"}},{j:"B v S R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,u:1k},a:1l,b:"18"},s:{c:{y:l,u:-1k},b:"H",a:1G,h:"A"},C:{c:{u:0},a:1g,b:"H"}},{j:"B v F S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,y:-15},a:1l,b:"18"},s:{c:{u:l,y:15},b:"H",a:1G,h:"F"},C:{c:{y:0},a:1g,b:"H"}},{j:"1b d m E (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b d m r (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b d m L (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b d m J (l&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1C S d k (1J&#t;)",d:[3,7],g:1,f:{e:1Q,i:"k"},s:{c:{u:-1J},b:"w",a:1R,h:"F"}},{j:"B v S d m E (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m r (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m L (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m J (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1b P m E (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b P m r (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b P m L (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b P m J (l&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1B S P k (1J&#t;)",d:1,g:[4,9],f:{e:1Q,i:"k"},s:{c:{y:1J},b:"w",a:1R,h:"A"}},{j:"B v S P m E (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m r (l&#t;)",d:1,g:[7,11],f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m L (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m J (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1N 1P 1M v S m E (l&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:-1k,y:l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1N 1P 1M v S m r (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:1k,y:-l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1c 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1c 1t m L (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:1a,h:"F"}},{j:"1c 1t m J (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:x},b:"w",a:1a,h:"F"}},{j:"B v 17 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:7,u:10,y:1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:x},a:1x,b:"1e"}},{j:"B v 17 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:-7,u:10,y:-1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:-x},a:1x,b:"1e"}},{j:"B v 17 1n m E (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m r (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m L (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v 17 1n m J (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,u:-15},a:1o,b:"18"},s:{c:{y:q,u:15},b:"H",a:1o,h:"A"},C:{c:{y:x,u:0},a:1o,b:"H"}},{j:"B v F 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,y:15},a:1o,b:"18"},s:{c:{u:q,y:-15},b:"H",a:1o,h:"F"},C:{c:{u:x,y:0},a:1o,b:"H"}},{j:"1c d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1B 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"B v 17 d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:22,u:0},b:"H",a:G,h:"A"},C:{c:{e:X,y:x},b:"K",a:p}},{j:"B v 17 d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m L (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m J (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 1K d m E (x&#t;)",d:[7,11],g:1,f:{e:q,i:"o"},s:{c:{I:.O,u:5,y:1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:x},b:"18",a:G}},{j:"B v A 17 1K d m r (x&#t;)",d:[7,11],g:1,f:{e:q,i:"D"},s:{c:{I:.O,u:5,y:-1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:-x},b:"18",a:G}},{j:"1c P m L (x&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"1c P m J (x&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:x},b:"w",a:G,h:"F"}},{j:"1C 17 P k (x&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"B v 17 P m L (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m J (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 1K P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},s:{c:{I:.O,u:1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:x,y:0},b:"18",a:G}},{j:"B v F 17 1K P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},s:{c:{I:.O,u:-1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:-x,y:0},b:"18",a:G}},{j:"1b 1t m E (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b 1t m r (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b 1t m L (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1b 1t m J (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:l},b:"w",a:1a,h:"F"}},{j:"B v S 1n m E (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m r (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m L (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S 1n m J (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{y:l},b:"H",a:1o,h:"A"},C:{a:1o,b:"H"}},{j:"B v F S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{u:l},b:"H",a:1o,h:"F"},C:{a:1o,b:"H"}},{j:"B v S d m E (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m r (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m L (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S d m J (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v F S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m L (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m J (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m E (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m r (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v F S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}}]}', 62, 132, '||||||||||duration|easing|transition|rows|delay|tile|cols|direction|sequence|name|random|180|to|type|forward|600|75|left|animation|176|rotateX|and|easeInOutQuart|90|rotateY|easeOutQuart|horizontal|Scaling|after|reverse|right|vertical|1e3|easeInOutBack|scale3d|top|easeOutBack|bottom|before|from|85|columns|mixed|tiles|spinning|large|depth|750|slide|200|sliding|Fading||||Sliding|fade|||turning|easeInOutQuint|55|1500|Spinning|Turning|100|easeInOutQuad|50|350|scale|65|col|30|450|500|cuboids|700|1200|400|rotate|35|cuboid|Carousel|Flying|45|800|Smooth|rotating|95|Horizontal|Vertical|Mirror|91|easeInQuart|1300|fading|mirror|540|drunk|out|scaling|Drunk|in|colums|150|2e3|directions|topright|bottomleft|topleft|sliging|linear|850|layerSliderTransitions|var|bottomright|87|t3d|diagonal||Crossfading|t2d'.split('|')));
jQuery(function($) {
    $('.date-pick').each(function() {
        var format = $(this).data('format') || 'mm/dd/yyyy';
        format = format.replace(/yyyy/i, 'yy');
        $(this).datepicker({
            autoFocusNextInput: true,
            constrainInput: false,
            changeMonth: true,
            changeYear: true,
            beforeShow: function(input, inst) {
                $('#ui-datepicker-div').addClass('show');
            },
            dateFormat: format.toLowerCase(),
        });
    });
    d = new Date();
    $('.birthdate-pick').each(function() {
        var format = $(this).data('format') || 'mm/dd';
        format = format.replace(/yyyy/i, 'yy');
        $(this).datepicker({
            autoFocusNextInput: true,
            constrainInput: false,
            changeMonth: true,
            changeYear: false,
            minDate: new Date(d.getFullYear(), 1 - 1, 1),
            maxDate: new Date(d.getFullYear(), 12 - 1, 31),
            beforeShow: function(input, inst) {
                $('#ui-datepicker-div').removeClass('show');
            },
            dateFormat: format.toLowerCase(),
        });
    });
});
var lsjQuery = jQuery;
lsjQuery(document).ready(function() {
    if (typeof lsjQuery.fn.layerSlider == "undefined") {
        lsShowNotice('layerslider_1_1', 'jquery');
    } else {
        lsjQuery("#layerslider_1_1").layerSlider({
            responsive: false,
            startInViewport: false,
            animateFirstSlide: false,
            twoWaySlideshow: true,
            skin: 'noskin',
            lazyLoad: false,
            yourLogoStyle: 'left: 10px; top: 10px;',
            cbInit: function(element) {},
            cbStart: function(data) {},
            cbStop: function(data) {},
            cbPause: function(data) {},
            cbAnimStart: function(data) {},
            cbAnimStop: function(data) {},
            cbPrev: function(data) {},
            cbNext: function(data) {},
            skinsPath: 'http://demo.curlythemes.com/equestrian/wp-content/plugins/LayerSlider/static/skins/'
        })
    }
});;
//$zopim(function() {});
var data = {
    "sticky_menu": "",
    "animations": "",
    "footer_pre": "1",
    "footer": "3"
};
! function($) {
    "use strict";
    $(function() {
        var n = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i)
            },
            any: function() {
                return n.Android() || n.BlackBerry() || n.iOS() || n.Opera() || n.Windows()
            }
        };
        if ($(window).width() > 758 && $("#navigation > div > ul").dropdown_menu({
                init: function() {
                    window.menuCheck = !0
                }
            }), $(function() {
                $(window).scroll(function() {
                    $(this).scrollTop() > 100 ? $("#back-top").fadeIn() : $("#back-top").fadeOut()
                }), $("#back-top a").click(function() {
                    return $("body,html").animate({
                        scrollTop: 0
                    }, 800), !1
                })
            }), "1" !== data.sticky_menu && !n.any()) var t = new Waypoint.Sticky({
            element: $("#navigation")
        });
        $(".animated").length > 0 && !n.any() && "1" !== data.animations ? $(".animated").each(function(n) {
            var t = $(this),
                a = new Waypoint({
                    element: $(this),
                    handler: function() {
                        var n = this;
                        $(t).hasClass("animated_off") || ($(t).delay(150).velocity("transition.fadeIn"), $(t).addClass("animated_off"))
                    },
                    offset: "100%"
                })
        }) : $(".animated").css("opacity", 1);
        var a = $("#footer .footer").masonry({
                itemSelector: ".sidebar-widget"
            }),
            i = $(".pre-footer .row").masonry({
                itemSelector: ".sidebar-widget"
            });
        $(function() {
            if ($(".gallery").length > 0) {
                var n = $(".gallery");
                n.imagesLoaded(function() {
                    n.masonry({
                        itemSelector: ".gallery-item"
                    })
                })
            }
        }), $(function() {
            $("#contact-info").length > 0 && $.stellar({
                horizontalScrolling: !1,
                parallaxBackgrounds: !0,
                hideDistantElements: !1
            })
        })
    })
}(jQuery);
jQuery(document).ready(function() {
    "use strict";
    if (jQuery('.video-container').length > 0) {
        jQuery(".video-container").fitVids();
    }
    if (jQuery('.panel-group').length > 0) {
        jQuery('.panel-group').each(function() {
            if (jQuery(this).find('.in').length == 0) {
                jQuery('.panel:first-child .panel-collapse', jQuery(this)).addClass('in');
                jQuery('.panel:first-child .accordion-toggle', jQuery(this)).removeClass('collapsed');
            }
        });
    }
    if (jQuery('.zoom-picture').length > 0) {
        jQuery('.zoom-picture').zoom();
    }
});
(function($) {
    "use strict";
    $(function() {
        if ($('.recent-posts .recent-post').length > 0) {
            var $recent = $('.recent-posts');
            $recent.imagesLoaded(function() {
                $recent.masonry({
                    itemSelector: '.recent-post'
                });
            });
        }
    });
})(jQuery);
if (jQuery('.fullwidth-row').length > 0) {
    jQuery('.fullwidth-row').each(function() {
        if (jQuery.trim(jQuery(this).prev().not('div.fullwidth-row').children('.row').children('.col-lg-12').html()).length == 0) {
            jQuery(this).prev().not('div.fullwidth-row').remove();
        }
        if (jQuery.trim(jQuery(this).next().not('div.fullwidth-row').children('.row').children('.col-lg-12').html()).length == 0) {
            jQuery(this).next().not('div.fullwidth-row').remove();
        }
    });
};
(function() {
    var b, d, c;
    b = jQuery;
    c = (function() {
        function b() {
            this.fadeDuration = 0;
            this.fitImagesInViewport = true;
            this.resizeDuration = 700;
            this.showImageNumberLabel = true;
            this.wrapAround = false
        }
        b.prototype.albumLabel = function(b, c) {
            return "Image " + b + " of " + c
        };
        return b
    })();
    d = (function() {
        function c(b) {
            this.options = b;
            this.album = [];
            this.currentImageIndex = void 0;
            this.init()
        }
        c.prototype.init = function() {
            this.enable();
            return this.build()
        };
        c.prototype.enable = function() {
            var c = this;
            return b('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(d) {
                c.start(b(d.currentTarget));
                return false
            })
        };
        c.prototype.build = function() {
            var c = this;
            b("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' style='max-width:auto;' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><i class=\"fa fa-refresh fa-spin fa-2x\"></i></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(b('body'));
            this.$lightbox = b('#lightbox');
            this.$overlay = b('#lightboxOverlay');
            this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
            this.$container = this.$lightbox.find('.lb-container');
            this.containerTopPadding = parseInt(this.$container.css('padding-top'), 10);
            this.containerRightPadding = parseInt(this.$container.css('padding-right'), 10);
            this.containerBottomPadding = parseInt(this.$container.css('padding-bottom'), 10);
            this.containerLeftPadding = parseInt(this.$container.css('padding-left'), 10);
            this.$overlay.hide().on('click', function() {
                c.end();
                return false
            });
            this.$lightbox.hide().on('click', function(d) {
                if (b(d.target).attr('id') === 'lightbox') {
                    c.end()
                }
                return false
            });
            this.$outerContainer.on('click', function(d) {
                if (b(d.target).attr('id') === 'lightbox') {
                    c.end()
                }
                return false
            });
            this.$lightbox.find('.lb-prev').on('click', function() {
                if (c.currentImageIndex === 0) {
                    c.changeImage(c.album.length - 1)
                } else {
                    c.changeImage(c.currentImageIndex - 1)
                }
                return false
            });
            this.$lightbox.find('.lb-next').on('click', function() {
                if (c.currentImageIndex === c.album.length - 1) {
                    c.changeImage(0)
                } else {
                    c.changeImage(c.currentImageIndex + 1)
                }
                return false
            });
            return this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
                c.end();
                return false
            })
        };
        c.prototype.start = function(c) {
            var f, e, j, d, g, n, o, k, l, m, p, h, i;
            b(window).on("resize", this.sizeOverlay);
            b('select, object, embed').css({
                visibility: "hidden"
            });
            this.$overlay.width(b(document).width()).height(b(document).height()).fadeIn(this.options.fadeDuration);
            this.album = [];
            g = 0;
            j = c.attr('data-lightbox');
            if (j) {
                h = b(c.prop("tagName") + '[data-lightbox="' + j + '"]');
                for (d = k = 0, m = h.length; k < m; d = ++k) {
                    e = h[d];
                    this.album.push({
                        link: b(e).attr('href'),
                        title: b(e).attr('title')
                    });
                    if (b(e).attr('href') === c.attr('href')) {
                        g = d
                    }
                }
            } else {
                if (c.attr('rel') === 'lightbox') {
                    this.album.push({
                        link: c.attr('href'),
                        title: c.attr('title')
                    })
                } else {
                    i = b(c.prop("tagName") + '[rel="' + c.attr('rel') + '"]');
                    for (d = l = 0, p = i.length; l < p; d = ++l) {
                        e = i[d];
                        this.album.push({
                            link: b(e).attr('href'),
                            title: b(e).attr('title')
                        });
                        if (b(e).attr('href') === c.attr('href')) {
                            g = d
                        }
                    }
                }
            }
            f = b(window);
            o = f.scrollTop() + f.height() / 10;
            n = f.scrollLeft();
            this.$lightbox.css({
                top: o + 'px',
                left: n + 'px'
            }).fadeIn(this.options.fadeDuration);
            this.changeImage(g)
        };
        c.prototype.changeImage = function(f) {
            var d, c, e = this;
            this.disableKeyboardNav();
            d = this.$lightbox.find('.lb-image');
            this.sizeOverlay();
            this.$overlay.fadeIn(this.options.fadeDuration);
            b('.lb-loader').fadeIn('slow');
            this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
            this.$outerContainer.addClass('animating');
            c = new Image();
            c.onload = function() {
                var m, g, h, i, j, k, l;
                d.attr('src', e.album[f].link);
                m = b(c);
                d.width(c.width);
                d.height(c.height);
                if (e.options.fitImagesInViewport) {
                    l = b(window).width();
                    k = b(window).height();
                    j = l - e.containerLeftPadding - e.containerRightPadding - 20;
                    i = k - e.containerTopPadding - e.containerBottomPadding - 110;
                    if ((c.width > j) || (c.height > i)) {
                        if ((c.width / j) > (c.height / i)) {
                            h = j;
                            g = parseInt(c.height / (c.width / h), 10);
                            d.width(h);
                            d.height(g)
                        } else {
                            g = i;
                            h = parseInt(c.width / (c.height / g), 10);
                            d.width(h);
                            d.height(g)
                        }
                    }
                }
                return e.sizeContainer(d.width(), d.height())
            };
            c.src = this.album[f].link;
            this.currentImageIndex = f
        };
        c.prototype.sizeOverlay = function() {
            return b('#lightboxOverlay').width(b(document).width()).height(b(document).height())
        };
        c.prototype.sizeContainer = function(f, g) {
            var b, d, e, h, c = this;
            h = this.$outerContainer.outerWidth();
            e = this.$outerContainer.outerHeight();
            d = f + this.containerLeftPadding + this.containerRightPadding;
            b = g + this.containerTopPadding + this.containerBottomPadding;
            this.$outerContainer.animate({
                width: d,
                height: b
            }, this.options.resizeDuration, 'swing');
            setTimeout(function() {
                c.$lightbox.find('.lb-dataContainer').width(d);
                c.$lightbox.find('.lb-prevLink').height(b);
                c.$lightbox.find('.lb-nextLink').height(b);
                c.showImage()
            }, this.options.resizeDuration)
        };
        c.prototype.showImage = function() {
            this.$lightbox.find('.lb-loader').hide();
            this.$lightbox.find('.lb-image').fadeIn('slow');
            this.updateNav();
            this.updateDetails();
            this.preloadNeighboringImages();
            this.enableKeyboardNav()
        };
        c.prototype.updateNav = function() {
            this.$lightbox.find('.lb-nav').show();
            if (this.album.length > 1) {
                if (this.options.wrapAround) {
                    this.$lightbox.find('.lb-prev, .lb-next').show()
                } else {
                    if (this.currentImageIndex > 0) {
                        this.$lightbox.find('.lb-prev').show()
                    }
                    if (this.currentImageIndex < this.album.length - 1) {
                        this.$lightbox.find('.lb-next').show()
                    }
                }
            }
        };
        c.prototype.updateDetails = function() {
            var b = this;
            if (typeof this.album[this.currentImageIndex].title !== 'undefined' && this.album[this.currentImageIndex].title !== "") {
                this.$lightbox.find('.lb-caption').html(this.album[this.currentImageIndex].title).fadeIn('fast')
            }
            if (this.album.length > 1 && this.options.showImageNumberLabel) {
                this.$lightbox.find('.lb-number').text(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn('fast')
            } else {
                this.$lightbox.find('.lb-number').hide()
            }
            this.$outerContainer.removeClass('animating');
            this.$lightbox.find('.lb-dataContainer').fadeIn(this.resizeDuration, function() {
                return b.sizeOverlay()
            })
        };
        c.prototype.preloadNeighboringImages = function() {
            var c, b;
            if (this.album.length > this.currentImageIndex + 1) {
                c = new Image();
                c.src = this.album[this.currentImageIndex + 1].link
            }
            if (this.currentImageIndex > 0) {
                b = new Image();
                b.src = this.album[this.currentImageIndex - 1].link
            }
        };
        c.prototype.enableKeyboardNav = function() {
            b(document).on('keyup.keyboard', b.proxy(this.keyboardAction, this))
        };
        c.prototype.disableKeyboardNav = function() {
            b(document).off('.keyboard')
        };
        c.prototype.keyboardAction = function(g) {
            var d, e, f, c, b;
            d = 27;
            e = 37;
            f = 39;
            b = g.keyCode;
            c = String.fromCharCode(b).toLowerCase();
            if (b === d || c.match(/x|o|c/)) {
                this.end()
            } else if (c === 'p' || b === e) {
                if (this.currentImageIndex !== 0) {
                    this.changeImage(this.currentImageIndex - 1)
                }
            } else if (c === 'n' || b === f) {
                if (this.currentImageIndex !== this.album.length - 1) {
                    this.changeImage(this.currentImageIndex + 1)
                }
            }
        };
        c.prototype.end = function() {
            this.disableKeyboardNav();
            b(window).off("resize", this.sizeOverlay);
            this.$lightbox.fadeOut(this.options.fadeDuration);
            this.$overlay.fadeOut(this.options.fadeDuration);
            return b('select, object, embed').css({
                visibility: "visible"
            })
        };
        return c
    })();
    b(function() {
        var e, b;
        b = new c();
        return e = new d(b)
    })
}).call(this);
(function(e, t, n, r) {
    e.fn.extend({
        dropdown_menu: function(r) {
            var i = {
                sub_indicator_class: "dropdown-menu-sub-indicator",
                vertical_class: "dropdown-menu-vertical",
                shadow_class: "dropdown-menu-shadow",
                hover_class: "dropdown-menu-hover",
                open_delay: 150,
                close_delay: 300,
                animation_open: {
                    opacity: "show"
                },
                speed_open: "fast",
                animation_close: {
                    opacity: "hide"
                },
                speed_close: "fast",
                sub_indicators: false,
                drop_shadows: false,
                vertical: false,
                viewport_overflow: "auto",
                init: function() {}
            };
            version = parseFloat(navigator.appVersion.split("MSIE")[1]);
            var s = version < 8 && n.body.filters;
            return this.each(function() {
                var n = e(this);
                var o = n.data("options");
                var u = e.extend({}, i, r, o);
                var a = e('<span class="' + u.sub_indicator_class + '">&#187;</span>');
                if (u.vertical) {
                    n.addClass(u.vertical_class)
                }
                e(">li", n).css({
                    "font-size": n.css("font-size")
                });
                n.css({
                    "font-size": "0"
                });
                n.find("li:has(ul)").each(function() {
                    e(this).addClass(u.sub_indicator_class);
                    if (u.sub_indicators) {
                        e(">a:first-child", this).append(a.clone())
                    }
                    var n = e(">ul", this).css({
                        visibility: "hidden",
                        display: "block"
                    });
                    if (u.drop_shadows) {
                        n.addClass(u.shadow_class)
                    }
                    if (s) {
                        setTimeout(function() {
                            n.css({
                                width: n.width()
                            })
                        }, 0)
                    }
                    e(this).on({
                        mouseenter: function(r) {
                            clearTimeout(e(this).data("close_timer"));
                            clearTimeout(e(this).data("open_timer"));
                            if (e(this).hasClass(u.hover_class)) {
                                return
                            }
                            e(this).data("open_timer", setTimeout(e.proxy(function() {
                                e(this).addClass(u.hover_class);
                                if (u.vertical) {
                                    n.css({
                                        top: 0,
                                        left: e(this).width()
                                    })
                                } else {
                                    n.css({
                                        top: "",
                                        left: ""
                                    })
                                }
                                n.css({
                                    visibility: "hidden",
                                    display: "block"
                                });
                                overflow_x = n.offset().left + n.width() > e(t).scrollLeft() + e(t).width();
                                overflow_y = n.offset().top + n.height() > e(t).scrollTop() + e(t).height();
                                overflow = overflow_x || overflow_y;
                                if (overflow && u.viewport_overflow) {
                                    var r = 10;
                                    if (u.viewport_overflow === "auto") u.viewport_overflow = s ? "scroll" : "move";
                                    switch (u.viewport_overflow) {
                                        case "move":
                                            var i = overflow_x ? e(t).scrollLeft() + e(t).width() - n.width() - r : n.offset().left;
                                            var o = overflow_y ? e(t).scrollTop() + e(t).height() - n.height() - r : n.offset().top;
                                            n.offset({
                                                left: i,
                                                top: o
                                            });
                                            break;
                                        case "scroll":
                                            if (overflow_x) {
                                                var a = n.offset().left - e(t).width() + n.width() + r;
                                                e("html").animate({
                                                    scrollLeft: a
                                                }, "fast")
                                            }
                                            if (overflow_y) {
                                                var f = n.offset().top - e(t).height() + n.height() + r;
                                                e("html").animate({
                                                    scrollTop: f
                                                }, "fast")
                                            }
                                            break
                                    }
                                }
                                n.hide().css({
                                    visibility: "visible"
                                });
                                if (u.animation_open) {
                                    n.animate(u.animation_open, u.speed_open)
                                } else {
                                    n.show()
                                }
                            }, this), u.open_delay))
                        },
                        mouseleave: function(t) {
                            clearTimeout(e(this).data("close_timer"));
                            clearTimeout(e(this).data("open_timer"));
                            e(this).data("close_timer", setTimeout(e.proxy(function() {
                                e(this).removeClass(u.hover_class);
                                if (u.animation_close) {
                                    n.animate(u.animation_close, u.speed_close, function() {
                                        n.css({
                                            visibility: "hidden"
                                        })
                                    })
                                } else {
                                    n.hide().css({
                                        visibility: "hidden"
                                    })
                                }
                            }, this), u.close_delay))
                        },
                        touchstart: function(t) {
                            e(">a:first-child", this).one("click", e.proxy(function(t) {
                                if (!e(this).hasClass(u.hover_class)) {
                                    t.preventDefault()
                                } else {
                                    return true
                                }
                            }, this))
                        }
                    })
                });
                setTimeout(function() {
                    e("ul", n).hide(1).promise().done(function() {
                        u.init.call(n[0])
                    })
                }, 0)
            })
        }
    })
})(jQuery, window, document);
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d) return {
            x: a.touches[0].pageX,
            y: a.touches[0].pageY
        };
        if (a.touches === d) {
            if (a.pageX !== d) return {
                x: a.pageX,
                y: a.pageY
            };
            if (a.pageX === d) return {
                x: a.clientX,
                y: a.clientY
            }
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"),
            f = a;
        for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(e), e = {
                    width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                    return a > 1
                }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function() {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function(c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function(b) {
        var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function(b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function(a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = 0,
            f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
            } else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) {
            e = a(h), f = new Image, f.onload = function() {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            f = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function() {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    }, c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function() {
        var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
                start: a - e,
                end: a - e + g - 1
            }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function() {
        var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    }, c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);
/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s],
                    l = o.oldScroll < a.triggerPoint,
                    h = o.newScroll >= a.triggerPoint,
                    p = l && h,
                    u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var n in t) {
            var r = t[n];
            for (var s in this.waypoints[n]) {
                var a, l, h, p, u, c = this.waypoints[n][s],
                    d = c.options.offset,
                    f = c.triggerPoint,
                    w = 0,
                    y = null == f;
                c.element !== c.element.window && (w = c.adapter.offset()[r.offsetProp]), "function" == typeof d ? d = d.apply(c) : "string" == typeof d && (d = parseFloat(d), c.options.offset.indexOf("%") > -1 && (d = Math.ceil(r.contextDimension * d / 100))), a = r.contextScroll - r.contextOffset, c.triggerPoint = w + a - d, l = f < r.oldScroll, h = c.triggerPoint >= r.oldScroll, p = l && h, u = !l && !h, !y && p ? (c.queueTrigger(r.backward), o[c.group.id] = c.group) : !y && u ? (c.queueTrigger(r.forward), o[c.group.id] = c.group) : y && r.oldScroll >= c.triggerPoint && (c.queueTrigger(r.forward), o[c.group.id] = c.group)
            }
        }
        for (var g in o) o[g].flushTriggers();
        return this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
/*!
Waypoints Sticky Element Shortcut - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
! function() {
    "use strict";

    function t(s) {
        this.options = e.extend({}, i.defaults, t.defaults, s), this.element = this.options.element, this.$element = e(this.element), this.createWrapper(), this.createWaypoint()
    }
    var e = window.jQuery,
        i = window.Waypoint;
    t.prototype.createWaypoint = function() {
        var t = this.options.handler;
        this.waypoint = new i(e.extend({}, this.options, {
            element: this.wrapper,
            handler: e.proxy(function(e) {
                var i = this.options.direction.indexOf(e) > -1,
                    s = i ? this.$element.outerHeight(!0) : "";
                this.$wrapper.height(s), this.$element.toggleClass(this.options.stuckClass, i), t && t.call(this, e)
            }, this)
        }))
    }, t.prototype.createWrapper = function() {
        this.$element.wrap(this.options.wrapper), this.$wrapper = this.$element.parent(), this.wrapper = this.$wrapper[0]
    }, t.prototype.destroy = function() {
        this.$element.parent()[0] === this.wrapper && (this.waypoint.destroy(), this.$element.removeClass(this.options.stuckClass).unwrap())
    }, t.defaults = {
        wrapper: '<div class="sticky-wrapper" />',
        stuckClass: "stuck",
        direction: "down right"
    }, i.Sticky = t
}();
/*! VelocityJS.org (1.0.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.0-rc1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(e) {
    function t(e) {
        var t = e.length,
            r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var $ = function(e, t) {
            return new $.fn.init(e, t)
        };
        $.isWindow = function(e) {
            return null != e && e == e.window
        }, $.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }, $.isArray = Array.isArray || function(e) {
            return "array" === $.type(e)
        }, $.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            for (t in e);
            return void 0 === t || n.call(e, t)
        }, $.each = function(e, r, a) {
            var n, o = 0,
                i = e.length,
                s = t(e);
            if (a) {
                if (s)
                    for (; i > o && (n = r.apply(e[o], a), n !== !1); o++);
                else
                    for (o in e)
                        if (n = r.apply(e[o], a), n === !1) break
            } else if (s)
                for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++);
            else
                for (o in e)
                    if (n = r.call(e[o], o, e[o]), n === !1) break; return e
        }, $.data = function(e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando],
                    o = n && r[n];
                if (void 0 === t) return o;
                if (o && t in o) return o[t]
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a
            }
        }, $.removeData = function(e, t) {
            var a = e[$.expando],
                n = a && r[a];
            n && $.each(t, function(e, t) {
                delete n[t]
            })
        }, $.extend = function() {
            var e, t, r, a, n, o, i = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && (i = this, s--); l > s; s++)
                if (null != (n = arguments[s]))
                    for (a in n) e = i[a], r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i
        }, $.queue = function(e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? ! function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a;) e[n++] = t[a++];
                    if (r !== r)
                        for (; void 0 !== t[a];) e[n++] = t[a++];
                    return e.length = n, e
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || []
            }
        }, $.dequeue = function(e, t) {
            $.each(e.nodeType ? [e] : e, function(e, r) {
                t = t || "fx";
                var a = $.queue(r, t),
                    n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), n.call(r, function() {
                    $.dequeue(r, t)
                }))
            })
        }, $.fn = $.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect();
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    r = this.offset(),
                    a = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: r.top - a.top,
                    left: r.left - a.left
                }
            }
        };
        var r = {};
        $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {
            Utilities: $
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }

        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
        }

        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t
        }

        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function i(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
            }

            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
            }

            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o) return r;
                    var i = l(r, e, a) - t;
                    r -= i / o
                }
                return r
            }

            function p() {
                for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a)
            }

            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i
            }

            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]),
                    s = r + i * x,
                    l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
            }

            function g() {
                V = !0, (e != r || a != n) && p()
            }
            var m = 4,
                y = .001,
                h = 1e-7,
                v = 10,
                b = 11,
                x = 1 / (b - 1),
                S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; 4 > P; ++P)
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b),
                V = !1,
                C = function(t) {
                    return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
                };
            C.getControlPoints = function() {
                return [{
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                }]
            };
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return C.toString = function() {
                return T
            }, C
        }

        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r
        }

        function c(e) {
            if (e)
                for (var t = (new Date).getTime(), r = 0, n = v.State.calls.length; n > r; r++)
                    if (v.State.calls[r]) {
                        var o = v.State.calls[r],
                            s = o[0],
                            l = o[2],
                            u = o[3];
                        u || (u = v.State.calls[r][3] = t - 16);
                        for (var f = Math.min((t - u) / l.duration, 1), d = 0, m = s.length; m > d; d++) {
                            var y = s[d],
                                h = y.element;
                            if (i(h)) {
                                var b = !1;
                                if (l.display !== a && null !== l.display && "none" !== l.display) {
                                    if ("flex" === l.display) {
                                        var S = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        $.each(S, function(e, t) {
                                            x.setPropertyValue(h, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(h, "display", l.display)
                                }
                                l.visibility && "hidden" !== l.visibility && x.setPropertyValue(h, "visibility", l.visibility);
                                for (var w in y)
                                    if ("element" !== w) {
                                        var V = y[w],
                                            C, T = g.isString(V.easing) ? v.Easings[V.easing] : V.easing;
                                        if (C = 1 === f ? V.endValue : V.startValue + (V.endValue - V.startValue) * T(f), V.currentValue = C, x.Hooks.registered[w]) {
                                            var k = x.Hooks.getRoot(w),
                                                A = i(h).rootPropertyValueCache[k];
                                            A && (V.rootPropertyValue = A)
                                        }
                                        var F = x.setPropertyValue(h, w, V.currentValue + (0 === parseFloat(C) ? "" : V.unitType), V.rootPropertyValue, V.scrollData);
                                        x.Hooks.registered[w] && (i(h).rootPropertyValueCache[k] = x.Normalizations.registered[k] ? x.Normalizations.registered[k]("extract", null, F[1]) : F[1]), "transform" === F[0] && (b = !0)
                                    }
                                l.mobileHA && i(h).transformCache.translate3d === a && (i(h).transformCache.translate3d = "(0px, 0px, 0px)", b = !0), b && x.flushTransformCache(h)
                            }
                        }
                        l.display !== a && "none" !== l.display && (v.State.calls[r][2].display = !1), l.visibility && "hidden" !== l.visibility && (v.State.calls[r][2].visibility = !1), l.progress && l.progress.call(o[1], o[1], f, Math.max(0, u + l.duration - t), u), 1 === f && p(r)
                    }
            v.State.isTicking && P(c)
        }

        function p(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                            n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, delete i(p).transformCache[t])
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n)
                } catch (d) {
                    setTimeout(function() {
                        throw d
                    }, 1)
                }
                s && o.loop !== !0 && s(n), o.loop !== !0 || t || ($.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360)
                }), v(p, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && $.dequeue(p, o.queue)
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++)
                if (v.State.calls[g] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
        }
        var f = function() {
                if (r.documentMode) return r.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = r.createElement("div");
                    if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                }
                return a
            }(),
            d = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var r = (new Date).getTime(),
                        a;
                    return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
                        t(r + a)
                    }, a)
                }
            }(),
            g = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof SVGElement
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }
            },
            $, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400,
            h = "swing",
            v = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: r.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: $,
                Sequences: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: y,
                    easing: h,
                    begin: null,
                    complete: null,
                    progress: null,
                    display: a,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(e) {
                    $.data(e, "velocity", {
                        isSVG: g.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                animate: null,
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 0,
                    patch: 0
                },
                debug: !1
            };
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                }
            }

            function r(r, a) {
                var n = {
                        dx: r.v,
                        dv: e(r)
                    },
                    o = t(r, .5 * a, n),
                    i = t(r, .5 * a, o),
                    s = t(r, a, i),
                    l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
                    u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r
            }
            return function a(e, t, n) {
                var o = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    i = [0],
                    s = 0,
                    l = 1e-4,
                    u = .016,
                    c, p, f;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u;;)
                    if (f = r(f || o, p), i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l)) break;
                return c ? function(e) {
                    return i[e * (i.length - 1) | 0]
                } : s
            }
        }();
        v.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, $.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(e, t) {
            v.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = v.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", "255 255 255 1"];
                    var t, r, a;
                    if (f)
                        for (t in x.Hooks.templates) {
                            r = x.Hooks.templates[t], a = r[0].split(" ");
                            var n = r[1].match(x.RegEx.valueSplit);
                            "Color" === a[0] && (a.push(a.shift()), n.push(n.shift()), x.Hooks.templates[t] = [a.join(" "), n.join(" ")])
                        }
                    for (t in x.Hooks.templates) {
                        r = x.Hooks.templates[t], a = r[0].split(" ");
                        for (var e in a) {
                            var o = t + a[e],
                                i = e;
                            x.Hooks.registered[o] = [t, i]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.Hooks.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                },
                extractValue: function(e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0],
                            n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n]
                    }
                    return t
                },
                injectValue: function(e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var n = a[0],
                            o = a[1],
                            i, s;
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), i[o] = t, s = i.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var a;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                            case "inject":
                                return "rect(" + r + ")"
                        }
                    },
                    opacity: function(e, t, r) {
                        if (8 >= f) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r = a ? a[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                        } else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return r;
                            case "inject":
                                return r
                        }
                    }
                },
                register: function() {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                            break;
                                        case "scal":
                                        case "scale":
                                            v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                            break;
                                        case "skew":
                                            o = !/(deg|\d)$/i.test(n);
                                            break;
                                        case "rotate":
                                            o = !/(deg|\d)$/i.test(n)
                                    }
                                    return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var o;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                                    else {
                                        var i, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                                case "inject":
                                    return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function(e) {
                    if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, [n, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                        a;
                    return e = e.replace(t, function(e, t, r, a) {
                        return t + t + r + r + a + a
                    }), a = r.exec(e), a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= f) l = $.css(e, r);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), (f || v.State.isFirefox) && "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r,
                        c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(u, n)
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), l = x.Normalizations.registered[r]("extract", e, d)
                }
                return /^[\d-]/.test(l) || (l = i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? /^(height|width)$/i.test(r) ? e.getBBox()[r] : e.getAttribute(r) : s(e, x.Names.prefixCheck(r)[0])), x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), l
            },
            setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
                else {
                    if (x.Hooks.registered[r]) {
                        var l = r,
                            u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
                        e.style[s] = a
                    } catch (c) {
                        v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                    } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return [s, a]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    $.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
                    })
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
                    }), o && (r = "perspective" + o + " " + r)
                }
                x.setPropertyValue(e, "transform", r)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function(e, o) {
                if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t));
                else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s
                }
            }), n
        };
        var S = function() {
            function e() {
                return f ? k.promise || null : d
            }

            function s() {
                function e(e) {
                    function f(e, t) {
                        var r = a,
                            n = a,
                            i = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? i = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), g.isFunction(r) && (r = r.call(o, V, w)), g.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i]
                    }

                    function d(e, t) {
                        var r, a;
                        return a = (t || 0).toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e, ""
                        }), r || (r = x.Values.getUnitType(e)), [a, r]
                    }

                    function m() {
                        var e = {
                                myParent: o.parentNode || r.body,
                                position: x.getPropertyValue(o, "position"),
                                fontSize: x.getPropertyValue(o, "fontSize")
                            },
                            a = e.position === L.lastPosition && e.myParent === L.lastParent,
                            n = e.fontSize === L.lastFontSize;
                        L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                        var s = 100,
                            l = {};
                        if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                        else {
                            var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden")
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%")
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                    }
                    if (s.begin && 0 === V) try {
                        s.begin.call(h, h)
                    } catch (y) {
                        setTimeout(function() {
                            throw y
                        }, 1)
                    }
                    if ("scroll" === A) {
                        var S = /^x$/i.test(s.axis) ? "Left" : "Top",
                            C = parseFloat(s.offset) || 0,
                            T, F, E;
                        s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, T = s.container["scroll" + S], E = T + $(o).position()[S.toLowerCase()] + C) : s.container = null : (T = v.State.scrollAnchor[v.State["scrollProperty" + S]], F = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], E = $(o).offset()[S.toLowerCase()] + C), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: T,
                                currentValue: T,
                                endValue: E,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {
                                    container: s.container,
                                    direction: S,
                                    alternateValue: F
                                }
                            },
                            element: o
                        }, v.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                    } else if ("reverse" === A) {
                        if (!i(o).tweensContainer) return void $.dequeue(o, s.queue);
                        "none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, P.easing || delete s.easing, P.duration || delete s.duration, s = $.extend({}, i(o).opts, s);
                        var j = $.extend(!0, {}, i(o).tweensContainer);
                        for (var H in j)
                            if ("element" !== H) {
                                var N = j[H].startValue;
                                j[H].startValue = j[H].currentValue = j[H].endValue, j[H].endValue = N, g.isEmptyObject(P) || (j[H].easing = s.easing), v.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(j[H]), o)
                            }
                        l = j
                    } else if ("start" === A) {
                        var j;
                        i(o).tweensContainer && i(o).isAnimating === !0 && (j = i(o).tweensContainer), $.each(b, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = f(t, !0),
                                    n = r[0],
                                    o = r[1],
                                    i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) b[e + s[c]] = [l[c], o, u ? u[c] : u];
                                    delete b[e]
                                }
                            }
                        });
                        for (var z in b) {
                            var q = f(b[z]),
                                R = q[0],
                                M = q[1],
                                I = q[2];
                            z = x.Names.camelCase(z);
                            var W = x.Hooks.getRoot(z),
                                B = !1;
                            if (i(o).isSVG || x.Names.prefixCheck(W)[1] !== !1 || x.Normalizations.registered[W] !== a) {
                                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility && "hidden" !== s.visibility) && /opacity|filter/.test(z) && !I && 0 !== R && (I = 0), s._cacheValues && j && j[z] ? (I === a && (I = j[z].endValue + j[z].unitType), B = i(o).rootPropertyValueCache[W]) : x.Hooks.registered[z] ? I === a ? (B = x.getPropertyValue(o, W), I = x.getPropertyValue(o, z, B)) : B = x.Hooks.templates[W][1] : I === a && (I = x.getPropertyValue(o, z));
                                var G, D, X, Y = !1;
                                if (G = d(z, I), I = G[0], X = G[1], G = d(z, R), R = G[0].replace(/^([+-\/*])=/, function(e, t) {
                                        return Y = t, ""
                                    }), D = G[1], I = parseFloat(I) || 0, R = parseFloat(R) || 0, "%" === D && (/^(fontSize|lineHeight)$/.test(z) ? (R /= 100, D = "em") : /^scale/.test(z) ? (R /= 100, D = "") : /(Red|Green|Blue)$/i.test(z) && (R = R / 100 * 255, D = "")), /[\/*]/.test(Y)) D = X;
                                else if (X !== D && 0 !== I)
                                    if (0 === R) D = X;
                                    else {
                                        p = p || m();
                                        var Q = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";
                                        switch (X) {
                                            case "%":
                                                I *= "x" === Q ? p.percentToPxWidth : p.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                I *= p[X + "ToPx"]
                                        }
                                        switch (D) {
                                            case "%":
                                                I *= 1 / ("x" === Q ? p.percentToPxWidth : p.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                I *= 1 / p[D + "ToPx"]
                                        }
                                    }
                                switch (Y) {
                                    case "+":
                                        R = I + R;
                                        break;
                                    case "-":
                                        R = I - R;
                                        break;
                                    case "*":
                                        R = I * R;
                                        break;
                                    case "/":
                                        R = I / R
                                }
                                l[z] = {
                                    rootPropertyValue: B,
                                    startValue: I,
                                    currentValue: I,
                                    endValue: R,
                                    unitType: D,
                                    easing: M
                                }, v.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), o)
                            } else v.debug && console.log("Skipping [" + W + "] due to a lack of browser support.")
                        }
                        l.element = o
                    }
                    l.element && (x.Values.addClass(o, "velocity-animating"), O.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (v.State.calls.length > 1e4 && (v.State.calls = n(v.State.calls)), v.State.calls.push([O, h, s, null, k.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : V++)
                }
                var o = this,
                    s = $.extend({}, v.defaults, P),
                    l = {},
                    p;
                if (i(o) === a && v.init(o), parseFloat(s.delay) && s.queue !== !1 && $.queue(o, s.queue, function(e) {
                        v.velocityQueueEntryFlag = !0, i(o).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(s.delay)),
                            next: e
                        }
                    }), v.mock === !0) s.duration = 1;
                else switch (s.duration.toString().toLowerCase()) {
                    case "fast":
                        s.duration = 200;
                        break;
                    case "normal":
                        s.duration = y;
                        break;
                    case "slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                }
                s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = v.CSS.Values.getDisplayType(o))), s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && v.State.isMobile && !v.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : $.queue(o, s.queue, function(t, r) {
                    return r === !0 ? (k.promise && k.resolver(h), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === $.queue(o)[0] || $.dequeue(o)
            }
            var l = arguments[0] && ($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)),
                f, d, m, h, b, P;
            if (g.isWrapped(this) ? (f = !1, m = 0, h = this, d = this) : (f = !0, m = 1, h = l ? arguments[0].elements : arguments[0]), h = o(h)) {
                l ? (b = arguments[0].properties, P = arguments[0].options) : (b = arguments[m], P = arguments[m + 1]);
                var w = h.length,
                    V = 0;
                if ("stop" !== b && !$.isPlainObject(P)) {
                    var C = m + 1;
                    P = {};
                    for (var T = C; T < arguments.length; T++) g.isArray(arguments[T]) || !/fast|normal|slow/i.test(arguments[T].toString()) && !/^\d/.test(arguments[T]) ? g.isString(arguments[T]) || g.isArray(arguments[T]) ? P.easing = arguments[T] : g.isFunction(arguments[T]) && (P.complete = arguments[T]) : P.duration = arguments[T]
                }
                var k = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                f && v.Promise && (k.promise = new v.Promise(function(e, t) {
                    k.resolver = e, k.rejecter = t
                }));
                var A;
                switch (b) {
                    case "scroll":
                        A = "scroll";
                        break;
                    case "reverse":
                        A = "reverse";
                        break;
                    case "stop":
                        $.each(h, function(e, t) {
                            i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
                        });
                        var F = [];
                        return $.each(v.State.calls, function(e, t) {
                            t && $.each(t[1], function(r, n) {
                                var o = g.isString(P) ? P : "";
                                return P !== a && t[2].queue !== o ? !0 : void $.each(h, function(t, r) {
                                    r === n && (P !== a && ($.each($.queue(r, o), function(e, t) {
                                        g.isFunction(t) && t(null, !0)
                                    }), $.queue(r, o, [])), i(r) && "" === o && $.each(i(r).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue
                                    }), F.push(e))
                                })
                            })
                        }), $.each(F, function(e, t) {
                            p(t, !0)
                        }), k.promise && k.resolver(h), e();
                    default:
                        if (!$.isPlainObject(b) || g.isEmptyObject(b)) {
                            if (g.isString(b) && v.Sequences[b]) {
                                var E = $.extend({}, P),
                                    j = E.duration,
                                    H = E.delay || 0;
                                return E.backwards === !0 && (h = h.reverse()), $.each(h, function(e, t) {
                                    parseFloat(E.stagger) ? E.delay = H + parseFloat(E.stagger) * e : g.isFunction(E.stagger) && (E.delay = H + E.stagger.call(t, e, w)), E.drag && (E.duration = parseFloat(j) || (/^(callout|transition)/.test(b) ? 1e3 : y), E.duration = Math.max(E.duration * (E.backwards ? 1 - e / w : (e + 1) / w), .75 * E.duration, 200)), v.Sequences[b].call(t, t, E || {}, e, w, h, k.promise ? k : a)
                                }), e()
                            }
                            var N = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered sequence. Aborting.";
                            return k.promise ? k.rejecter(new Error(N)) : console.log(N), e()
                        }
                        A = "start"
                }
                var L = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    O = [];
                $.each(h, function(e, t) {
                    g.isNode(t) && s.call(t)
                });
                var E = $.extend({}, v.defaults, P),
                    z;
                if (E.loop = parseInt(E.loop), z = 2 * E.loop - 1, E.loop)
                    for (var q = 0; z > q; q++) {
                        var R = {
                            delay: E.delay
                        };
                        q === z - 1 && (R.display = E.display, R.visibility = E.visibility, R.complete = E.complete), S(h, "reverse", R)
                    }
                return e()
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (P = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }, c()) : P = t.requestAnimationFrame || d
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function(e, t) {
            v.Sequences["slide" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = l.begin,
                    c = l.complete,
                    p = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(i, i), f.overflow = e.style.overflow, e.style.overflow = "hidden";
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                }, l.complete = function() {
                    for (var t in f) e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i)
                }, v(e, p, l)
            }
        }), $.each(["In", "Out"], function(e, t) {
            v.Sequences["fade" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = {
                        opacity: "In" === t ? 1 : 0
                    },
                    c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i), s && s.resolver(i)
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
            }
        }), v
    }(window.jQuery || window.Zepto || window, window, document)
});
! function(t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["velocity"], t) : t()
}(function() {
    return function(t, a, e, r) {
        if (!t.Velocity || !t.Velocity.Utilities) return void(a.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        if (!t.Velocity.version || t.Velocity.version.major <= 0 && t.Velocity.version.minor <= 11 && t.Velocity.version.patch < 8) {
            var i = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw alert(i), new Error(i)
        }
        t.Velocity.RegisterUI = function(a, e) {
            function i(a, e, r, i) {
                var n = 0,
                    s;
                t.Velocity.Utilities.each(a.nodeType ? [a] : a, function(a, e) {
                    i && (r += a * i), s = e.parentNode, t.Velocity.Utilities.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(a, r) {
                        n += parseFloat(t.Velocity.CSS.getPropertyValue(e, r))
                    })
                }), t.Velocity.animate(s, {
                    height: ("In" === e ? "+" : "-") + "=" + n
                }, {
                    queue: !1,
                    easing: "ease-in-out",
                    duration: r * ("In" === e ? .6 : 1)
                })
            }
            return t.Velocity.Sequences[a] = function(n, s, l, o, c, u) {
                function f() {
                    s.display !== r && "none" !== s.display || !/Out$/.test(a) || t.Velocity.Utilities.each(c.nodeType ? [c] : c, function(a, e) {
                        t.Velocity.CSS.setPropertyValue(e, "display", "none")
                    }), s.complete && s.complete.call(c, c), u && u.resolver(c || n)
                }
                for (var p = l === o - 1, d = 0; d < e.calls.length; d++) {
                    var y = e.calls[d],
                        m = y[0],
                        X = s.duration || e.defaultDuration || 1e3,
                        g = y[1],
                        Y = y[2] || {},
                        O = {};
                    if (O.duration = X * (g || 1), O.queue = s.queue || "", O.easing = Y.easing || "ease", O.delay = Y.delay || 0, O._cacheValues = Y._cacheValues || !0, 0 === d) {
                        if (O.delay += s.delay || 0, 0 === l && (O.begin = function() {
                                s.begin && s.begin.call(c, c);
                                var t = a.match(/(In|Out)$/);
                                s.animateParentHeight && t && i(c, t[0], X + O.delay, s.stagger)
                            }), null !== s.display)
                            if (s.display !== r && "none" !== s.display) O.display = s.display;
                            else if (/In$/.test(a)) {
                            var v = t.Velocity.CSS.Values.getDisplayType(n);
                            O.display = "inline" === v ? "inline-block" : v
                        }
                        s.visibility && "hidden" !== s.visibility && (O.visibility = s.visibility)
                    }
                    d === e.calls.length - 1 && (O.complete = function() {
                        if (e.reset) {
                            for (var a in e.reset) {
                                var r = e.reset[a];
                                ("string" == typeof r || "number" == typeof r) && (e.reset[a] = [e.reset[a], e.reset[a]])
                            }
                            var i = {
                                duration: 0,
                                queue: !1
                            };
                            p && (i.complete = f), t.Velocity.animate(n, e.reset, i)
                        } else p && f()
                    }, "hidden" === s.visibility && (O.visibility = s.visibility)), t.Velocity.animate(n, m, O)
                }
            }, t.Velocity
        }, t.Velocity.RegisterUI.packagedEffects = {
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [{
                        translateY: -30
                    }, .25],
                    [{
                        translateY: 0
                    }, .125],
                    [{
                        translateY: -15
                    }, .125],
                    [{
                        translateY: 0
                    }, .25]
                ]
            },
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 0
                    }, .125]
                ]
            },
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [{
                        opacity: [0, "easeInOutQuad", 1]
                    }, .25],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }, .25],
                    [{
                        opacity: [0, "easeInOutQuad"]
                    }, .25],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }, .25]
                ]
            },
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, .5],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .5]
                ]
            },
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [{
                        rotateZ: 15
                    }, .2],
                    [{
                        rotateZ: -10
                    }, .2],
                    [{
                        rotateZ: 5
                    }, .2],
                    [{
                        rotateZ: -5
                    }, .2],
                    [{
                        rotateZ: 0
                    }, .2]
                ]
            },
            "callout.tada": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        rotateZ: -3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: 3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: -3
                    }, .1],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    [{
                        scaleX: 1,
                        scaleY: 1,
                        rotateZ: 0
                    }, .2]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 500,
                calls: [
                    [{
                        opacity: [1, 0]
                    }]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [{
                        opacity: [0, 1]
                    }]
                ]
            },
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateY: [0, -55]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateY: 55
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateY: 0
                }
            },
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateX: [0, -45]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateX: 25
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateX: 0
                }
            },
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateY: [-10, 90]
                    }, .5],
                    [{
                        opacity: .8,
                        rotateY: 10
                    }, .25],
                    [{
                        opacity: 1,
                        rotateY: 0
                    }, .25]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [.9, 1],
                        transformPerspective: [400, 400],
                        rotateY: -10
                    }, .5],
                    [{
                        opacity: 0,
                        rotateY: 90
                    }, .5]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateY: 0
                }
            },
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateX: [-10, 90]
                    }, .5],
                    [{
                        opacity: .8,
                        rotateX: 10
                    }, .25],
                    [{
                        opacity: 1,
                        rotateX: 0
                    }, .25]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [.9, 1],
                        transformPerspective: [400, 400],
                        rotateX: -15
                    }, .5],
                    [{
                        opacity: 0,
                        rotateX: 90
                    }, .5]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateX: 0
                }
            },
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["100%", "50%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        translateX: [0, -700],
                        translateZ: 0
                    }]
                ],
                reset: {
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "100%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: 0,
                        scaleY: 0,
                        translateX: -700,
                        translateZ: 0
                    }]
                ],
                reset: {
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 0
                }
            },
            "transition.whirlIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        rotateY: [0, 160]
                    }]
                ]
            },
            "transition.whirlOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 0,
                        scaleY: 0,
                        rotateY: 160
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1,
                    rotateY: 0
                }
            },
            "transition.shrinkIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 1.5],
                        scaleY: [1, 1.5],
                        translateZ: 0
                    }]
                ]
            },
            "transition.shrinkOut": {
                defaultDuration: 650,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 1.3,
                        scaleY: 1.3,
                        translateZ: 0
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, .625],
                        scaleY: [1, .625],
                        translateZ: 0
                    }]
                ]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: .5,
                        scaleY: .5,
                        translateZ: 0
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        scaleX: [1.05, .3],
                        scaleY: [1.05, .3]
                    }, .4],
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        translateZ: 0
                    }, .2],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .5]
                ]
            },
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        scaleX: .95,
                        scaleY: .95
                    }, .4],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        translateZ: 0
                    }, .4],
                    [{
                        opacity: [0, 1],
                        scaleX: .3,
                        scaleY: .3
                    }, .2]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [-30, 1e3]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateY: 10
                    }, .2],
                    [{
                        translateY: 0
                    }, .2]
                ]
            },
            "transition.bounceUpOut": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        translateY: 20
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: -1e3
                    }, .8]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [30, -1e3]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateY: -10
                    }, .2],
                    [{
                        translateY: 0
                    }, .2]
                ]
            },
            "transition.bounceDownOut": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        translateY: -20
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: 1e3
                    }, .8]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [30, -1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateX: -10
                    }, .2],
                    [{
                        translateX: 0
                    }, .2]
                ]
            },
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        translateX: 30
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: -1250
                    }, .8]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [-30, 1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateX: 10
                    }, .2],
                    [{
                        translateX: 0
                    }, .2]
                ]
            },
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        translateX: -30
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: 1250
                    }, .8]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: -20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: 20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideLeftIn": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: -20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideRightIn": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: 20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: -75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: 75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: -75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: 75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: [0, -180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: -180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateX: 0
                }
            },
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: [0, 180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: 180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateX: 0
                }
            },
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: [0, -180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: -180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateY: 0
                }
            },
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: [0, 180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: 180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateY: 0
                }
            }
        };
        for (var n in t.Velocity.RegisterUI.packagedEffects) t.Velocity.RegisterUI(n, t.Velocity.RegisterUI.packagedEffects[n])
    }(window.jQuery || window.Zepto || window, window, document)
});
/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
! function(a, b, c, d) {
    function e(b, c) {
        this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
    }
    var f = "stellar",
        g = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(a) {
                a.hide()
            },
            showElement: function(a) {
                a.show()
            }
        },
        h = {
            scroll: {
                getLeft: function(a) {
                    return a.scrollLeft()
                },
                setLeft: function(a, b) {
                    a.scrollLeft(b)
                },
                getTop: function(a) {
                    return a.scrollTop()
                },
                setTop: function(a, b) {
                    a.scrollTop(b)
                }
            },
            position: {
                getLeft: function(a) {
                    return -1 * parseInt(a.css("left"), 10)
                },
                getTop: function(a) {
                    return -1 * parseInt(a.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(a) {
                    return -1 * parseInt(a.css("margin-left"), 10)
                },
                getTop: function(a) {
                    return -1 * parseInt(a.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        i = {
            position: {
                setLeft: function(a, b) {
                    a.css("left", b)
                },
                setTop: function(a, b) {
                    a.css("top", b)
                }
            },
            transform: {
                setPosition: function(a, b, c, d, e) {
                    a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
                }
            }
        },
        j = function() {
            var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                d = a("script")[0].style,
                e = "";
            for (b in d)
                if (c.test(b)) {
                    e = b.match(c)[0];
                    break
                }
            return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
                function(a) {
                    return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
                }
        }(),
        k = j("transform"),
        l = a("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== d,
        m = l ? function(a, b, c) {
            a.css({
                "background-position-x": b,
                "background-position-y": c
            })
        } : function(a, b, c) {
            a.css("background-position", b + " " + c)
        },
        n = l ? function(a) {
            return [a.css("background-position-x"), a.css("background-position-y")]
        } : function(a) {
            return a.css("background-position").split(" ")
        },
        o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) {
            setTimeout(a, 1e3 / 60)
        };
    e.prototype = {
        init: function() {
            this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var a = this,
                b = h[a.options.scrollProperty];
            this._getScrollLeft = function() {
                return b.getLeft(a.$scrollElement)
            }, this._getScrollTop = function() {
                return b.getTop(a.$scrollElement)
            }
        },
        _defineSetters: function() {
            var b = this,
                c = h[b.options.scrollProperty],
                d = i[b.options.positionProperty],
                e = c.setLeft,
                f = c.setTop;
            this._setScrollLeft = "function" == typeof e ? function(a) {
                e(b.$scrollElement, a)
            } : a.noop, this._setScrollTop = "function" == typeof f ? function(a) {
                f(b.$scrollElement, a)
            } : a.noop, this._setPosition = d.setPosition || function(a, c, e, f, g) {
                b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
            }
        },
        _handleWindowLoadAndResize: function() {
            var c = this,
                d = a(b);
            c.options.responsive && d.bind("load." + this.name, function() {
                c.refresh()
            }), d.bind("resize." + this.name, function() {
                c._detectViewport(), c.options.responsive && c.refresh()
            })
        },
        refresh: function(c) {
            var d = this,
                e = d._getScrollLeft(),
                f = d._getScrollTop();
            c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function() {
                var a = d._getScrollLeft(),
                    b = d._getScrollTop();
                d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
            }), this._setScrollLeft(e), this._setScrollTop(f)
        },
        _detectViewport: function() {
            var a = this.$viewportElement.offset(),
                b = null !== a && a !== d;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
        },
        _findParticles: function() {
            {
                var b = this;
                this._getScrollLeft(), this._getScrollTop()
            }
            if (this.particles !== d)
                for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var c, e, f, g, h, i, j, k, l, m = a(this),
                    n = 0,
                    o = 0,
                    p = 0,
                    q = 0;
                if (m.data("stellar-elementIsActive")) {
                    if (m.data("stellar-elementIsActive") !== this) return
                } else m.data("stellar-elementIsActive", this);
                b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function() {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
                }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
                    $element: m,
                    $offsetParent: j,
                    isFixed: "fixed" === m.css("position"),
                    horizontalOffset: c,
                    verticalOffset: e,
                    startingPositionLeft: f,
                    startingPositionTop: g,
                    startingOffsetLeft: k,
                    startingOffsetTop: l,
                    parentOffsetLeft: n,
                    parentOffsetTop: o,
                    stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                    width: m.outerWidth(!0),
                    height: m.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var b, c = this,
                e = this._getScrollLeft(),
                f = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function() {
                var b, g, h, i, j, k, l, o = a(this),
                    p = n(o),
                    q = 0,
                    r = 0,
                    s = 0,
                    t = 0;
                if (o.data("stellar-backgroundIsActive")) {
                    if (o.data("stellar-backgroundIsActive") !== this) return
                } else o.data("stellar-backgroundIsActive", this);
                o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function() {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
                }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
                    $element: o,
                    $offsetParent: l,
                    isFixed: "fixed" === o.css("background-attachment"),
                    horizontalOffset: b,
                    verticalOffset: g,
                    startingValueLeft: p[0],
                    startingValueTop: p[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
                    startingPositionLeft: o.position().left,
                    startingPositionTop: o.position().top,
                    startingOffsetLeft: j,
                    startingOffsetTop: k,
                    parentOffsetLeft: q,
                    parentOffsetTop: r,
                    stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var a, b, c, d, e;
            for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var c = this,
                d = a(b);
            d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function() {
                c.horizontalOffset = c.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function() {
                c.verticalOffset = c.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
                l = this._getScrollTop(),
                n = !0,
                o = !0;
            if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
                for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
            }
        },
        _handleScrollEvent: function() {
            var a = this,
                b = !1,
                c = function() {
                    a._repositionElements(), b = !1
                },
                d = function() {
                    b || (o(c), b = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, d), d()
        },
        _startAnimationLoop: function() {
            var a = this;
            this._animationLoop = function() {
                o(a._animationLoop), a._repositionElements()
            }, this._animationLoop()
        }
    }, a.fn[f] = function(b) {
        var c = arguments;
        return b === d || "object" == typeof b ? this.each(function() {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function() {
            var d = a.data(this, "plugin_" + f);
            d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
        }) : void 0
    }, a[f] = function() {
        var c = a(b);
        return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
    }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });
/*!
 * Masonry PACKAGED v3.3.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
! function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function c() {}

        function d() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0
            }
            return a
        }

        function e(c) {
            function e() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function() {
                            var a = d ? function(a) {
                                return d(a, null)
                            } : function(a) {
                                return a.currentStyle
                            };
                            return function(b) {
                                var c = a(b);
                                return c || f("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = c("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var g = document.body || document.documentElement;
                        g.appendChild(e);
                        var h = j(e);
                        l = 200 === b(h.width), g.removeChild(e)
                    }
                }
            }

            function h(a) {
                if (e(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var c = j(a);
                    if ("none" === c.display) return d();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var h = f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k]), m = 0, n = g.length; n > m; m++) {
                        var o = g[m],
                            p = c[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = h && l,
                        y = b(c.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = b(c.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return h
        }
        var f = "undefined" == typeof console ? c : function(a) {
                console.error(a)
            },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property")) : a.getSize = e(a.getStyleProperty)
    }(window),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function(a) {
        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function() {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function(a, b) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function(a, b, c) {
        var d = {};
        d.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function(a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function(a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function(a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function(a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
            return a instanceof HTMLElement
        } : function(a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function() {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function(a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function(a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function(c, e) {
            b(function() {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function(a, b, c, d, e) {
        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function(a) {
                return i(a, null)
            } : function(a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function() {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function() {
            this.size = c(this.element)
        }, g.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function() {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = parseInt(e, 10),
                h = parseInt(f, 10),
                i = this.layout.size;
            g = -1 != e.indexOf("%") ? g / 100 * i.width : g, h = -1 != f.indexOf("%") ? h / 100 * i.height : h, g = isNaN(g) ? 0 : g, h = isNaN(h) ? 0 : h, g -= c ? i.paddingLeft : i.paddingRight, h -= d ? i.paddingTop : i.paddingBottom, this.position.x = g, this.position.y = h
        }, g.prototype.layoutPosition = function() {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function(a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, a = this.getXValue(a), b = this.getYValue(b), n ? "translate3d(" + a + ", " + b + ", 0)" : "translate(" + a + ", " + b + ")"
        }, g.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function() {
            this.css(t)
        }, g.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function() {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function() {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e, f) {
        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function() {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
            e.extend(this.options, a)
        }, g.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function(a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
            this.getSize()
        }, g.prototype.getSize = function() {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function(a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function(a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function() {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function(a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function(a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function() {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function() {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function() {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function() {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function(a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function(a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function(a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function(a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function(a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function(a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function(a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function(a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function(a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    });
! function($, t, n, o) {
    $.fn.doubleTapToGo = function(o) {
        return "ontouchstart" in t || navigator.msMaxTouchPoints || navigator.userAgent.toLowerCase().match(/windows phone os 7/i) ? (this.each(function() {
            var t = !1;
            $(this).on("click", function(n) {
                var o = $(this);
                o[0] != t[0] && (n.preventDefault(), t = o)
            }), $(n).on("click touchstart MSPointerDown", function(n) {
                for (var o = !0, i = $(n.target).parents(), a = 0; a < i.length; a++) i[a] == t[0] && (o = !1);
                o && (t = !1)
            })
        }), this) : !1
    }
}(jQuery, window, document);
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=2583c0c6bf56f0cc4b51)
 * Config saved to config.json and https://gist.github.com/2583c0c6bf56f0cc4b51
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.tab");
            i || n.data("bs.tab", i = new a(this)), "string" == typeof e && i[e]()
        })
    }
    var a = function(e) {
        this.element = t(e)
    };
    a.VERSION = "3.3.5", a.TRANSITION_DURATION = 150, a.prototype.show = function() {
        var e = this.element,
            a = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = a.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if (i.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var o = t(n);
                this.activate(e.closest("li"), a), this.activate(o, o.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, a.prototype.activate = function(e, n, i) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var r = n.find("> .active"),
            o = i && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && o ? r.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = a, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var i = function(a) {
        a.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var a, n = e.attr("data-target") || (a = e.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function a(e) {
        return this.each(function() {
            var a = t(this),
                i = a.data("bs.collapse"),
                s = t.extend({}, n.DEFAULTS, a.data(), "object" == typeof e && e);
            !i && s.toggle && /show|hide/.test(e) && (s.toggle = !1), i || a.data("bs.collapse", i = new n(this, s)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e, a) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, a), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    i && i.length && (a.call(i, "hide"), e || i.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return o.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var a = this.dimension();
                this.$element[a](this.$element[a]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[a](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(a, n) {
            var i = t(n);
            this.addAriaAndCollapsedClass(e(i), i)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var a = t.hasClass("in");
        t.attr("aria-expanded", a), e.toggleClass("collapsed", !a).attr("aria-expanded", a)
    };
    var i = t.fn.collapse;
    t.fn.collapse = a, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var i = t(this);
        i.attr("data-target") || n.preventDefault();
        var s = e(i),
            r = s.data("bs.collapse"),
            o = r ? "toggle" : i.data();
        a.call(s, o)
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var a in e)
            if (void 0 !== t.style[a]) return {
                end: e[a]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var a = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            a = !0
        });
        var i = function() {
            a || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(i, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);
! function(e) {
    function t(t, i) {
        this.element = e(t), this.settings = e.extend({}, r, i), this._defaults = r, this._name = n, this.init()
    }
    var n = "Morphext",
        r = {
            animation: "bounceIn",
            separator: ",",
            speed: 2e3
        };
    t.prototype = {
        init: function() {
            var t = this;
            this.phrases = [], this.element.addClass("morphext"), e.each(this.element.text().split(this.settings.separator), function(e, n) {
                t.phrases.push(n)
            }), this.element.html("<span>" + this.phrases.join("</span><span>") + "</span>"), this.index = -1, this.animate(), setInterval(function() {
                t.animate()
            }, this.settings.speed)
        },
        animate: function() {
            this.index + 1 === this.phrases.length && (this.index = -1), ++this.index, this.element.find("span").removeClass().eq(this.index).addClass("animated " + this.settings.animation)
        }
    }, e.fn[n] = function(r) {
        return this.each(function() {
            e.data(this, "plugin_" + n) || e.data(this, "plugin_" + n, new t(this, r))
        })
    }
}(jQuery, window, document);
(function(e) {
    "use strict";
    jQuery(document).ready(function() {
        jQuery(".str-rotate").each(function() {
            jQuery(this).Morphext({
                animation: jQuery(this).data("str-animation"),
                separator: jQuery(this).data("str-separator"),
                speed: jQuery(this).data("str-speed")
            })
        })
    })
})(jQuery);
! function(e) {
    function t(t, i) {
        this.element = e(t), this.settings = e.extend({}, r, i), this._defaults = r, this._name = n, this.init()
    }
    var n = "Morphist",
        r = {
            animateIn: "bounceIn",
            animateOut: "rollOut",
            speed: 2e3
        };
    t.prototype = {
        init: function() {
            this.children = this.element.children(), this.element.addClass("morphist"), this.index = -1, this.cycle()
        },
        animate: function() {
            var e = this;
            ++this.index, this.prev = this.index, this.children.eq(this.index).addClass("animated " + this.settings.animateIn), setTimeout(function() {
                e.cycle()
            }, this.settings.speed)
        },
        cycle: function() {
            var t = this;
            return this.index + 1 === this.children.length && (this.index = -1), "undefined" != typeof this.prev && null !== this.prev ? void this.children.eq(this.prev).addClass(this.settings.animateOut).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                e(this).removeClass(), t.animate()
            }) : void this.animate()
        }
    }, e.fn[n] = function(r) {
        return this.each(function() {
            e.data(this, "plugin_" + n) || e.data(this, "plugin_" + n, new t(this, r))
        })
    }
}(jQuery, window, document);
(function(e) {
    "use strict";
    jQuery(document).ready(function() {
        jQuery(".scr-rotate").each(function() {
            e(this).children(":empty").remove();
            jQuery(this).Morphist({
                animateIn: jQuery(this).data("scr-animation"),
                animateOut: jQuery(this).data("scr-animation-out"),
                speed: jQuery(this).data("scr-speed")
            })
        })
    })
})(jQuery);
document.documentElement.className += ' js_active ';
document.documentElement.className += 'ontouchstart' in document.documentElement ? ' vc_mobile ' : ' vc_desktop ';
(function() {
    var prefix = ['-webkit-', '-moz-', '-ms-', '-o-', ''];
    for (var i = 0; i < prefix.length; i++) {
        if (prefix[i] + 'transform' in document.documentElement.style) {
            document.documentElement.className += " vc_transform ";
        }
    }
})();
jQuery(window).load(function() {});

function vc_js() {
    vc_twitterBehaviour();
    vc_toggleBehaviour();
    vc_tabsBehaviour();
    vc_accordionBehaviour();
    vc_teaserGrid();
    vc_carouselBehaviour();
    vc_slidersBehaviour();
    vc_prettyPhoto();
    vc_googleplus();
    vc_pinterest();
    vc_progress_bar();
    vc_plugin_flexslider();
    vc_google_fonts();
    vc_gridBehaviour();
    vc_rowBehaviour();
    vc_ttaActivation();
    jQuery(document).trigger('vc_js');
    window.setTimeout(vc_waypoints, 500);
}
jQuery(document).ready(function($) {
    window.vc_js();
});
if ('function' !== typeof(window['vc_plugin_flexslider'])) {
    window.vc_plugin_flexslider = function($parent) {
        var $slider = $parent ? $parent.find('.wpb_flexslider') : jQuery('.wpb_flexslider');
        $slider.each(function() {
            var this_element = jQuery(this);
            var sliderSpeed = 800,
                sliderTimeout = parseInt(this_element.attr('data-interval')) * 1000,
                sliderFx = this_element.attr('data-flex_fx'),
                slideshow = true;
            if (0 === sliderTimeout) {
                slideshow = false;
            }
            this_element.is(':visible') && this_element.flexslider({
                animation: sliderFx,
                slideshow: slideshow,
                slideshowSpeed: sliderTimeout,
                sliderSpeed: sliderSpeed,
                smoothHeight: true
            });
        });
    };
}
if ('function' !== typeof(window['vc_twitterBehaviour'])) {
    window.vc_twitterBehaviour = function() {
        jQuery('.wpb_twitter_widget .tweets').each(function(index) {
            var this_element = jQuery(this),
                tw_name = this_element.attr('data-tw_name'),
                tw_count = this_element.attr('data-tw_count');
            this_element.tweet({
                username: tw_name,
                join_text: "auto",
                avatar_size: 0,
                count: tw_count,
                template: "{avatar}{join}{text}{time}",
                auto_join_text_default: "",
                auto_join_text_ed: "",
                auto_join_text_ing: "",
                auto_join_text_reply: "",
                auto_join_text_url: "",
                loading_text: '<span class="loading_tweets">loading tweets...</span>'
            });
        });
    };
}
if ('function' !== typeof(window['vc_googleplus'])) {
    window.vc_googleplus = function() {
        if (0 < jQuery('.wpb_googleplus').length) {
            (function() {
                var po = document.createElement('script');
                po.type = 'text/javascript';
                po.async = true;
                po.src = 'https://apis.google.com/js/plusone.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(po, s);
            })();
        }
    }
}
if ('function' !== typeof(window['vc_pinterest'])) {
    window.vc_pinterest = function() {
        if (0 < jQuery('.wpb_pinterest').length) {
            (function() {
                var po = document.createElement('script');
                po.type = 'text/javascript';
                po.async = true;
                po.src = 'http://assets.pinterest.com/js/pinit.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(po, s);
            })();
        }
    }
}
if ('function' !== typeof(window['vc_progress_bar'])) {
    window.vc_progress_bar = function() {
        if ('undefined' !== typeof(jQuery.fn.waypoint)) {
            jQuery('.vc_progress_bar').waypoint(function() {
                jQuery(this).find('.vc_single_bar').each(function(index) {
                    var $this = jQuery(this),
                        bar = $this.find('.vc_bar'),
                        val = bar.data('percentage-value');
                    setTimeout(function() {
                        bar.css({
                            "width": val + '%'
                        });
                    }, index * 200);
                });
            }, {
                offset: '85%'
            });
        }
    }
}
if ('function' !== typeof(window['vc_waypoints'])) {
    window.vc_waypoints = function() {
        if ('undefined' !== typeof(jQuery.fn.waypoint)) {
            jQuery('.wpb_animate_when_almost_visible:not(.wpb_start_animation)').waypoint(function() {
                jQuery(this).addClass('wpb_start_animation');
            }, {
                offset: '85%'
            });
        }
    }
}
if ('function' !== typeof(window['vc_toggleBehaviour'])) {
    window.vc_toggleBehaviour = function($el) {
        function event(e) {
            e && e.preventDefault && e.preventDefault();
            var title = jQuery(this);
            var element = title.closest('.vc_toggle');
            var content = element.find('.vc_toggle_content');
            if (element.hasClass('vc_toggle_active')) {
                content.slideUp({
                    duration: 300,
                    complete: function() {
                        element.removeClass('vc_toggle_active');
                    }
                });
            } else {
                content.slideDown({
                    duration: 300,
                    complete: function() {
                        element.addClass('vc_toggle_active');
                    }
                });
            }
        }
        if ($el) {
            if ($el.hasClass('vc_toggle_title')) {
                $el.unbind('click').click(event);
            } else {
                $el.find(".vc_toggle_title").unbind('click').click(event);
            }
        } else {
            jQuery(".vc_toggle_title").unbind('click').on('click', event);
        }
    }
}
if ('function' !== typeof(window['vc_tabsBehaviour'])) {
    window.vc_tabsBehaviour = function($tab) {
        if (jQuery.ui) {
            var $call = $tab || jQuery('.wpb_tabs, .wpb_tour'),
                ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split('.') : '1.10',
                old_version = 1 === parseInt(ver[0]) && 9 > parseInt(ver[1]);
            $call.each(function(index) {
                var $tabs, interval = jQuery(this).attr("data-interval"),
                    tabs_array = [];
                $tabs = jQuery(this).find('.wpb_tour_tabs_wrapper').tabs({
                    show: function(event, ui) {
                        wpb_prepare_tab_content(event, ui);
                    },
                    beforeActivate: function(event, ui) {
                        1 !== ui.newPanel.index() && ui.newPanel.find('.vc_pie_chart:not(.vc_ready)');
                    },
                    activate: function(event, ui) {
                        wpb_prepare_tab_content(event, ui);
                    }
                });
                if (interval && 0 < interval) {
                    try {
                        $tabs.tabs('rotate', interval * 1000);
                    } catch (e) {
                        window.console && window.console.log && console.log(e);
                    }
                }
                jQuery(this).find('.wpb_tab').each(function() {
                    tabs_array.push(this.id);
                });
                jQuery(this).find('.wpb_tabs_nav li').click(function(e) {
                    e.preventDefault();
                    if (old_version) {
                        $tabs.tabs("select", jQuery('a', this).attr('href'));
                    } else {
                        $tabs.tabs("option", "active", jQuery(this).index());
                    }
                    return false;
                });
                jQuery(this).find('.wpb_prev_slide a, .wpb_next_slide a').click(function(e) {
                    e.preventDefault();
                    if (old_version) {
                        var index = $tabs.tabs('option', 'selected');
                        if (jQuery(this).parent().hasClass('wpb_next_slide')) {
                            index++;
                        } else {
                            index--;
                        }
                        if (0 > index) {
                            index = $tabs.tabs("length") - 1;
                        } else if (index >= $tabs.tabs("length")) {
                            index = 0;
                        }
                        $tabs.tabs("select", index);
                    } else {
                        var index = $tabs.tabs("option", "active"),
                            length = $tabs.find('.wpb_tab').length;
                        if (jQuery(this).parent().hasClass('wpb_next_slide')) {
                            index = (index + 1) >= length ? 0 : index + 1;
                        } else {
                            index = 0 > index - 1 ? length - 1 : index - 1;
                        }
                        $tabs.tabs("option", "active", index);
                    }
                });
            });
        }
    }
}
if ('function' !== typeof(window['vc_accordionBehaviour'])) {
    window.vc_accordionBehaviour = function() {
        jQuery('.wpb_accordion').each(function(index) {
            var $this = jQuery(this);
            var $tabs, interval = $this.attr("data-interval"),
                active_tab = !isNaN(jQuery(this).data('active-tab')) && 0 < parseInt($this.data('active-tab')) ? parseInt($this.data('active-tab')) - 1 : false,
                collapsible = false === active_tab || 'yes' === $this.data('collapsible');
            $tabs = $this.find('.wpb_accordion_wrapper').accordion({
                header: "> div > h3",
                autoHeight: false,
                heightStyle: "content",
                active: active_tab,
                collapsible: collapsible,
                navigation: true,
                activate: vc_accordionActivate,
                change: function(event, ui) {
                    if ('undefined' !== typeof(jQuery.fn.isotope)) {
                        ui.newContent.find('.isotope').isotope("layout");
                    }
                    vc_carouselBehaviour(ui.newPanel);
                }
            });
            if (true === $this.data('vcDisableKeydown')) {
                $tabs.data('uiAccordion')._keydown = function() {};
            }
        });
    }
}
if ('function' !== typeof(window['vc_teaserGrid'])) {
    window.vc_teaserGrid = function() {
        var layout_modes = {
            fitrows: 'fitRows',
            masonry: 'masonry'
        };
        jQuery('.wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)').each(function() {
            var $container = jQuery(this);
            var $thumbs = $container.find('.wpb_thumbnails');
            var layout_mode = $thumbs.attr('data-layout-mode');
            $thumbs.isotope({
                itemSelector: '.isotope-item',
                layoutMode: ('undefined' === typeof(layout_modes[layout_mode]) ? 'fitRows' : layout_modes[layout_mode])
            });
            $container.find('.categories_filter a').data('isotope', $thumbs).click(function(e) {
                e.preventDefault();
                var $thumbs = jQuery(this).data('isotope');
                jQuery(this).parent().parent().find('.active').removeClass('active');
                jQuery(this).parent().addClass('active');
                $thumbs.isotope({
                    filter: jQuery(this).attr('data-filter')
                });
            });
            jQuery(window).bind('load resize', function() {
                $thumbs.isotope("layout");
            });
        });
    }
}
if ('function' !== typeof(window['vc_carouselBehaviour'])) {
    window.vc_carouselBehaviour = function($parent) {
        var $carousel = $parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel");
        $carousel.each(function() {
            var $this = jQuery(this);
            if (true !== $this.data('carousel_enabled') && $this.is(':visible')) {
                $this.data('carousel_enabled', true);
                var visible_count = getColumnsCount(jQuery(this)),
                    carousel_speed = 500;
                if (jQuery(this).hasClass('columns_count_1')) {
                    carousel_speed = 900;
                }
                var carousele_li = jQuery(this).find('.wpb_thumbnails-fluid li');
                carousele_li.css({
                    "margin-right": carousele_li.css("margin-left"),
                    "margin-left": 0
                });
                jQuery(this).find('.wpb_wrapper:eq(0)').jCarouselLite({
                    btnNext: jQuery(this).find('.next'),
                    btnPrev: jQuery(this).find('.prev'),
                    visible: visible_count,
                    speed: carousel_speed
                }).width('100%');
                var fluid_ul = jQuery(this).find('ul.wpb_thumbnails-fluid');
                fluid_ul.width(fluid_ul.width() + 300);
                jQuery(window).resize(function() {
                    var before_resize = screen_size;
                    screen_size = getSizeName();
                    if (before_resize != screen_size) {
                        window.setTimeout('location.reload()', 20);
                    }
                });
            }
        });
    }
}
if ('function' !== typeof(window['vc_slidersBehaviour'])) {
    window.vc_slidersBehaviour = function() {
        jQuery('.wpb_gallery_slides').each(function(index) {
            var this_element = jQuery(this);
            var $imagesGrid;
            if (this_element.hasClass('wpb_slider_nivo')) {
                var sliderSpeed = 800,
                    sliderTimeout = this_element.attr('data-interval') * 1000;
                if (0 === sliderTimeout) {
                    sliderTimeout = 9999999999;
                }
                this_element.find('.nivoSlider').nivoSlider({
                    effect: 'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse',
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: sliderSpeed,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: true,
                    directionNavHide: true,
                    controlNav: true,
                    keyboardNav: false,
                    pauseOnHover: true,
                    manualAdvance: false,
                    prevText: 'Prev',
                    nextText: 'Next'
                });
            } else if (this_element.hasClass('wpb_image_grid')) {
                if (jQuery.fn.imagesLoaded) {
                    $imagesGrid = this_element.find('.wpb_image_grid_ul').imagesLoaded(function() {
                        $imagesGrid.isotope({
                            itemSelector: '.isotope-item',
                            layoutMode: 'fitRows'
                        });
                    });
                } else {
                    this_element.find('.wpb_image_grid_ul').isotope({
                        itemSelector: '.isotope-item',
                        layoutMode: 'fitRows'
                    });
                }
            }
        });
    }
}
if ('function' !== typeof(window['vc_prettyPhoto'])) {
    window.vc_prettyPhoto = function() {
        try {
            if (jQuery && jQuery.fn && jQuery.fn.prettyPhoto) {
                jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: 'normal',
                    padding: 15,
                    opacity: 0.7,
                    showTitle: true,
                    allowresize: true,
                    counter_separator_label: '/',
                    hideflash: false,
                    deeplinking: false,
                    modal: false,
                    callback: function() {
                        var url = location.href;
                        var hashtag = (url.indexOf('#!prettyPhoto')) ? true : false;
                        if (hashtag) {
                            location.hash = "!";
                        }
                    },
                    social_tools: ''
                });
            }
        } catch (err) {
            window.console && window.console.log && console.log(err);
        }
    }
}
if ('function' !== typeof(window['vc_google_fonts'])) {
    window.vc_google_fonts = function() {
        return false;
    }
}
window.vcParallaxSkroll = false;
if ('function' !== typeof(window['vc_rowBehaviour'])) {
    window.vc_rowBehaviour = function() {
        var $ = window.jQuery;

        function localFunction() {
            var $elements = $('[data-vc-full-width="true"]');
            $.each($elements, function(key, item) {
                var $el = $(this);
                $el.addClass('vc_hidden');
                var $el_full = $el.next('.vc_row-full-width');
                var el_margin_left = parseInt($el.css('margin-left'), 10);
                var el_margin_right = parseInt($el.css('margin-right'), 10);
                var offset = 0 - $el_full.offset().left - el_margin_left;
                var width = $(window).width();
                $el.css({
                    'position': 'relative',
                    'left': offset,
                    'box-sizing': 'border-box',
                    'width': $(window).width()
                });
                if (!$el.data('vcStretchContent')) {
                    var padding = (-1 * offset);
                    if (0 > padding) {
                        padding = 0;
                    }
                    var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
                    if (0 > paddingRight) {
                        paddingRight = 0;
                    }
                    $el.css({
                        'padding-left': padding + 'px',
                        'padding-right': paddingRight + 'px'
                    });
                }
                $el.attr("data-vc-full-width-init", "true");
                $el.removeClass('vc_hidden');
            });
        }

        function parallaxRow() {
            var vcSkrollrOptions, vcParallaxSkroll, callSkrollInit = false;
            if (vcParallaxSkroll) {
                vcParallaxSkroll.destroy();
            }
            $('.vc_parallax-inner').remove();
            $('[data-5p-top-bottom]').removeAttr('data-5p-top-bottom data-30p-top-bottom');
            $('[data-vc-parallax]').each(function() {
                var skrollrSpeed, skrollrSize, skrollrStart, skrollrEnd, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = true;
                if ('on' === $(this).data('vcParallaxOFade')) {
                    $(this).children().attr('data-5p-top-bottom', 'opacity:0;').attr('data-30p-top-bottom', 'opacity:1;');
                }
                skrollrSize = $(this).data('vcParallax') * 100;
                $parallaxElement = $('<div />').addClass('vc_parallax-inner').appendTo($(this));
                $parallaxElement.height(skrollrSize + '%');
                parallaxImage = $(this).data('vcParallaxImage');
                youtubeId = vcExtractYoutubeId(parallaxImage);
                if (youtubeId) {
                    insertYoutubeVideoAsBackground($parallaxElement, youtubeId);
                } else if ('undefined' !== typeof(parallaxImage)) {
                    $parallaxElement.css('background-image', 'url(' + parallaxImage + ')');
                }
                skrollrSpeed = skrollrSize - 100;
                skrollrStart = -skrollrSpeed;
                skrollrEnd = 0;
                $parallaxElement.attr('data-bottom-top', 'top: ' + skrollrStart + '%;').attr('data-top-bottom', 'top: ' + skrollrEnd + '%;');
            });
            if (callSkrollInit && window.skrollr) {
                vcSkrollrOptions = {
                    forceHeight: false,
                    smoothScrolling: false,
                    mobileCheck: function() {
                        return false;
                    }
                };
                vcParallaxSkroll = skrollr.init(vcSkrollrOptions);
                return vcParallaxSkroll;
            }
            return false;
        }

        function fullHeightRow() {
            $('.vc_row-o-full-height:first').each(function() {
                var $window, windowHeight, offsetTop, fullHeight;
                $window = $(window);
                windowHeight = $window.height();
                offsetTop = $(this).offset().top;
                if (offsetTop < windowHeight) {
                    fullHeight = 100 - offsetTop / (windowHeight / 100);
                    $(this).css('min-height', fullHeight + 'vh');
                }
            });
            $('.vc_row-o-full-height.vc_row-o-content-middle').each(function() {
                var elHeight = $(this).height();
                $('<div><!-- IE flexbox min height vertical align fixer --></div>').addClass('vc_row-full-height-fixer').height(elHeight).prependTo($(this));
            });
        }
        $(window).unbind('resize.vcRowBehaviour').bind('resize.vcRowBehaviour', localFunction);
        $(window).bind('resize.vcRowBehaviour', fullHeightRow);
        localFunction();
        fullHeightRow();
        initVideoBackgrounds();
        parallaxRow();
    }
}
if ('function' !== typeof(window['vc_gridBehaviour'])) {
    window.vc_gridBehaviour = function() {
        jQuery.fn.vcGrid && jQuery('[data-vc-grid]').vcGrid();
    }
}
if ('function' !== typeof(window['getColumnsCount'])) {
    window.getColumnsCount = function(el) {
        var find = false,
            i = 1;
        while (false === find) {
            if (el.hasClass('columns_count_' + i)) {
                find = true;
                return i;
            }
            i++;
        }
    }
}
var screen_size = getSizeName();

function getSizeName() {
    var screen_w = jQuery(window).width();
    if (1170 < screen_w) {
        return 'desktop_wide';
    }
    if (960 < screen_w && 1169 > screen_w) {
        return 'desktop';
    }
    if (768 < screen_w && 959 > screen_w) {
        return 'tablet';
    }
    if (300 < screen_w && 767 > screen_w) {
        return 'mobile';
    }
    if (300 > screen_w) {
        return 'mobile_portrait';
    }
    return '';
}

function loadScript(url, $obj, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function() {
            if ("loaded" === script.readyState || "complete" === script.readyState) {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {}
    script.src = url;
    $obj.get(0).appendChild(script);
}
if ('function' !== typeof(window['wpb_prepare_tab_content'])) {
    window.wpb_prepare_tab_content = function(event, ui) {
        var panel = ui.panel || ui.newPanel,
            $pie_charts = panel.find('.vc_pie_chart:not(.vc_ready)'),
            $round_charts = panel.find('.vc_round-chart'),
            $line_charts = panel.find('.vc_line-chart'),
            $carousel = panel.find('[data-ride="vc_carousel"]'),
            $ui_panel, $google_maps;
        vc_carouselBehaviour();
        vc_plugin_flexslider(panel);
        if (ui.newPanel.find('.vc_masonry_media_grid, .vc_masonry_grid').length) {
            ui.newPanel.find('.vc_masonry_media_grid, .vc_masonry_grid').each(function() {
                var grid = jQuery(this).data('vcGrid');
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
            });
        }
        if (panel.find('.vc_masonry_media_grid, .vc_masonry_grid').length) {
            panel.find('.vc_masonry_media_grid, .vc_masonry_grid').each(function() {
                var grid = jQuery(this).data('vcGrid');
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
            });
        }
        $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat();
        $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
            reload: false
        });
        $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
            reload: false
        });
        $carousel.length && jQuery.fn.carousel && $carousel.carousel('resizeAction');
        $ui_panel = panel.find('.isotope, .wpb_image_grid_ul');
        $google_maps = panel.find('.wpb_gmaps_widget');
        if (0 < $ui_panel.length) {
            $ui_panel.isotope("layout");
        }
        if ($google_maps.length && !$google_maps.is('.map_ready')) {
            var $frame = $google_maps.find('iframe');
            $frame.attr('src', $frame.attr('src'));
            $google_maps.addClass('map_ready');
        }
        if (panel.parents('.isotope').length) {
            panel.parents('.isotope').each(function() {
                jQuery(this).isotope("layout");
            });
        }
    }
}

function vc_ttaActivation() {
    jQuery('[data-vc-accordion]').on('show.vc.accordion', function(e) {
        var $ = window.jQuery,
            ui = {};
        ui.newPanel = $(this).data('vc.accordion').getTarget();
        window.wpb_prepare_tab_content(e, ui);
    });
}

function vc_accordionActivate(event, ui) {
    if (ui.newPanel.length && ui.newHeader.length) {
        var $pie_charts = ui.newPanel.find('.vc_pie_chart:not(.vc_ready)'),
            $round_charts = ui.newPanel.find('.vc_round-chart'),
            $line_charts = ui.newPanel.find('.vc_line-chart'),
            $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
        if ('undefined' !== typeof(jQuery.fn.isotope)) {
            ui.newPanel.find('.isotope, .wpb_image_grid_ul').isotope("layout");
        }
        if (ui.newPanel.find('.vc_masonry_media_grid, .vc_masonry_grid').length) {
            ui.newPanel.find('.vc_masonry_media_grid, .vc_masonry_grid').each(function() {
                var grid = jQuery(this).data('vcGrid');
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
            });
        }
        vc_carouselBehaviour(ui.newPanel);
        vc_plugin_flexslider(ui.newPanel);
        $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat();
        $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
            reload: false
        });
        $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
            reload: false
        });
        $carousel.length && jQuery.fn.carousel && $carousel.carousel('resizeAction');
        if (ui.newPanel.parents('.isotope').length) {
            ui.newPanel.parents('.isotope').each(function() {
                jQuery(this).isotope("layout");
            });
        }
    }
}

function initVideoBackgrounds() {
    jQuery('.vc_row').each(function() {
        var $row = jQuery(this),
            youtubeUrl, youtubeId;
        if ($row.data('vcVideoBg')) {
            youtubeUrl = $row.data('vcVideoBg');
            youtubeId = vcExtractYoutubeId(youtubeUrl);
            if (youtubeId) {
                $row.find('.vc_video-bg').remove();
                insertYoutubeVideoAsBackground($row, youtubeId);
            }
            jQuery(window).on('grid:items:added', function(event, $grid) {
                if (!$row.has($grid).length) {
                    return;
                }
                vcResizeVideoBackground($row);
            });
        } else {
            $row.find('.vc_video-bg').remove();
        }
    });
}

function insertYoutubeVideoAsBackground($element, youtubeId, counter) {
    if ('undefined' === typeof(YT.Player)) {
        counter = 'undefined' === typeof(counter) ? 0 : counter;
        if (100 < counter) {
            console.warn('Too many attempts to load YouTube api');
            return;
        }
        setTimeout(function() {
            insertYoutubeVideoAsBackground($element, youtubeId, counter++);
        }, 100);
        return;
    }
    var $container = $element.prepend('<div class="vc_video-bg"><div class="inner"></div></div>').find('.inner');
    new YT.Player($container[0], {
        width: '100%',
        height: '100%',
        videoId: youtubeId,
        playerVars: {
            playlist: youtubeId,
            iv_load_policy: 3,
            enablejsapi: 1,
            disablekb: 1,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1
        },
        events: {
            onReady: function(event) {
                event.target.mute().setLoop(true);
            }
        }
    });
    vcResizeVideoBackground($element);
    jQuery(window).bind('resize', function() {
        vcResizeVideoBackground($element);
    });
}

function vcResizeVideoBackground($element) {
    var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
        containerH = $element.innerHeight(),
        ratio1 = 16,
        ratio2 = 9;
    if ((containerW / containerH) < (ratio1 / ratio2)) {
        iframeW = containerH * (ratio1 / ratio2);
        iframeH = containerH;
        marginLeft = -Math.round((iframeW - containerW) / 2) + 'px';
        marginTop = -Math.round((iframeH - containerH) / 2) + 'px';
        iframeW += 'px';
        iframeH += 'px';
    } else {
        iframeW = containerW;
        iframeH = containerW * (ratio2 / ratio1);
        marginTop = -Math.round((iframeH - containerH) / 2) + 'px';
        marginLeft = -Math.round((iframeW - containerW) / 2) + 'px';
        iframeW += 'px';
        iframeH += 'px';
    }
    $element.find('.vc_video-bg iframe').css({
        maxWidth: '1000%',
        marginLeft: marginLeft,
        marginTop: marginTop,
        width: iframeW,
        height: iframeH
    });
}

function vcExtractYoutubeId(url) {
    if ('undefined' === typeof(url)) {
        return false;
    }
    var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    if (null !== id) {
        return id[1];
    }
    return false;
};