/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 28, 2022
 */

!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define(t)
		: ((e = 'undefined' != typeof globalThis ? globalThis : e || self).Swiper =
				t());
})(this, function () {
	'use strict';
	function e(e) {
		return (
			null !== e &&
			'object' == typeof e &&
			'constructor' in e &&
			e.constructor === Object
		);
	}
	function t(s = {}, i = {}) {
		Object.keys(i).forEach(a => {
			void 0 === s[a]
				? (s[a] = i[a])
				: e(i[a]) && e(s[a]) && Object.keys(i[a]).length > 0 && t(s[a], i[a]);
		});
	}
	const s = {
		body: {},
		addEventListener() {},
		removeEventListener() {},
		activeElement: { blur() {}, nodeName: '' },
		querySelector: () => null,
		querySelectorAll: () => [],
		getElementById: () => null,
		createEvent: () => ({ initEvent() {} }),
		createElement: () => ({
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName: () => [],
		}),
		createElementNS: () => ({}),
		importNode: () => null,
		location: {
			hash: '',
			host: '',
			hostname: '',
			href: '',
			origin: '',
			pathname: '',
			protocol: '',
			search: '',
		},
	};
	function i() {
		const e = 'undefined' != typeof document ? document : {};
		return t(e, s), e;
	}
	const a = {
		document: s,
		navigator: { userAgent: '' },
		location: {
			hash: '',
			host: '',
			hostname: '',
			href: '',
			origin: '',
			pathname: '',
			protocol: '',
			search: '',
		},
		history: { replaceState() {}, pushState() {}, go() {}, back() {} },
		CustomEvent: function () {
			return this;
		},
		addEventListener() {},
		removeEventListener() {},
		getComputedStyle: () => ({ getPropertyValue: () => '' }),
		Image() {},
		Date() {},
		screen: {},
		setTimeout() {},
		clearTimeout() {},
		matchMedia: () => ({}),
		requestAnimationFrame: e =>
			'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
		cancelAnimationFrame(e) {
			'undefined' != typeof setTimeout && clearTimeout(e);
		},
	};
	function n() {
		const e = 'undefined' != typeof window ? window : {};
		return t(e, a), e;
	}
	class r extends Array {
		constructor(e) {
			super(...(e || [])),
				(function (e) {
					const t = e.__proto__;
					Object.defineProperty(e, '__proto__', {
						get: () => t,
						set(e) {
							t.__proto__ = e;
						},
					});
				})(this);
		}
	}
	function l(e = []) {
		const t = [];
		return (
			e.forEach(e => {
				Array.isArray(e) ? t.push(...l(e)) : t.push(e);
			}),
			t
		);
	}
	function o(e, t) {
		return Array.prototype.filter.call(e, t);
	}
	function d(e, t) {
		const s = n(),
			a = i();
		let l = [];
		if (!t && e instanceof r) return e;
		if (!e) return new r(l);
		if ('string' == typeof e) {
			const s = e.trim();
			if (s.indexOf('<') >= 0 && s.indexOf('>') >= 0) {
				let e = 'div';
				0 === s.indexOf('<li') && (e = 'ul'),
					0 === s.indexOf('<tr') && (e = 'tbody'),
					(0 !== s.indexOf('<td') && 0 !== s.indexOf('<th')) || (e = 'tr'),
					0 === s.indexOf('<tbody') && (e = 'table'),
					0 === s.indexOf('<option') && (e = 'select');
				const t = a.createElement(e);
				t.innerHTML = s;
				for (let e = 0; e < t.childNodes.length; e += 1)
					l.push(t.childNodes[e]);
			} else
				l = (function (e, t) {
					if ('string' != typeof e) return [e];
					const s = [],
						i = t.querySelectorAll(e);
					for (let e = 0; e < i.length; e += 1) s.push(i[e]);
					return s;
				})(e.trim(), t || a);
		} else if (e.nodeType || e === s || e === a) l.push(e);
		else if (Array.isArray(e)) {
			if (e instanceof r) return e;
			l = e;
		}
		return new r(
			(function (e) {
				const t = [];
				for (let s = 0; s < e.length; s += 1)
					-1 === t.indexOf(e[s]) && t.push(e[s]);
				return t;
			})(l)
		);
	}
	d.fn = r.prototype;
	const c = {
		addClass: function (...e) {
			const t = l(e.map(e => e.split(' ')));
			return (
				this.forEach(e => {
					e.classList.add(...t);
				}),
				this
			);
		},
		removeClass: function (...e) {
			const t = l(e.map(e => e.split(' ')));
			return (
				this.forEach(e => {
					e.classList.remove(...t);
				}),
				this
			);
		},
		hasClass: function (...e) {
			const t = l(e.map(e => e.split(' ')));
			return (
				o(this, e => t.filter(t => e.classList.contains(t)).length > 0).length >
				0
			);
		},
		toggleClass: function (...e) {
			const t = l(e.map(e => e.split(' ')));
			this.forEach(e => {
				t.forEach(t => {
					e.classList.toggle(t);
				});
			});
		},
		attr: function (e, t) {
			if (1 === arguments.length && 'string' == typeof e)
				return this[0] ? this[0].getAttribute(e) : void 0;
			for (let s = 0; s < this.length; s += 1)
				if (2 === arguments.length) this[s].setAttribute(e, t);
				else
					for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
			return this;
		},
		removeAttr: function (e) {
			for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this;
		},
		transform: function (e) {
			for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
			return this;
		},
		transition: function (e) {
			for (let t = 0; t < this.length; t += 1)
				this[t].style.transitionDuration = 'string' != typeof e ? `${e}ms` : e;
			return this;
		},
		on: function (...e) {
			let [t, s, i, a] = e;
			function n(e) {
				const t = e.target;
				if (!t) return;
				const a = e.target.dom7EventData || [];
				if ((a.indexOf(e) < 0 && a.unshift(e), d(t).is(s))) i.apply(t, a);
				else {
					const e = d(t).parents();
					for (let t = 0; t < e.length; t += 1)
						d(e[t]).is(s) && i.apply(e[t], a);
				}
			}
			function r(e) {
				const t = (e && e.target && e.target.dom7EventData) || [];
				t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
			}
			'function' == typeof e[1] && (([t, i, a] = e), (s = void 0)),
				a || (a = !1);
			const l = t.split(' ');
			let o;
			for (let e = 0; e < this.length; e += 1) {
				const t = this[e];
				if (s)
					for (o = 0; o < l.length; o += 1) {
						const e = l[o];
						t.dom7LiveListeners || (t.dom7LiveListeners = {}),
							t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
							t.dom7LiveListeners[e].push({ listener: i, proxyListener: n }),
							t.addEventListener(e, n, a);
					}
				else
					for (o = 0; o < l.length; o += 1) {
						const e = l[o];
						t.dom7Listeners || (t.dom7Listeners = {}),
							t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
							t.dom7Listeners[e].push({ listener: i, proxyListener: r }),
							t.addEventListener(e, r, a);
					}
			}
			return this;
		},
		off: function (...e) {
			let [t, s, i, a] = e;
			'function' == typeof e[1] && (([t, i, a] = e), (s = void 0)),
				a || (a = !1);
			const n = t.split(' ');
			for (let e = 0; e < n.length; e += 1) {
				const t = n[e];
				for (let e = 0; e < this.length; e += 1) {
					const n = this[e];
					let r;
					if (
						(!s && n.dom7Listeners
							? (r = n.dom7Listeners[t])
							: s && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]),
						r && r.length)
					)
						for (let e = r.length - 1; e >= 0; e -= 1) {
							const s = r[e];
							(i && s.listener === i) ||
							(i &&
								s.listener &&
								s.listener.dom7proxy &&
								s.listener.dom7proxy === i)
								? (n.removeEventListener(t, s.proxyListener, a), r.splice(e, 1))
								: i ||
								  (n.removeEventListener(t, s.proxyListener, a),
								  r.splice(e, 1));
						}
				}
			}
			return this;
		},
		trigger: function (...e) {
			const t = n(),
				s = e[0].split(' '),
				i = e[1];
			for (let a = 0; a < s.length; a += 1) {
				const n = s[a];
				for (let s = 0; s < this.length; s += 1) {
					const a = this[s];
					if (t.CustomEvent) {
						const s = new t.CustomEvent(n, {
							detail: i,
							bubbles: !0,
							cancelable: !0,
						});
						(a.dom7EventData = e.filter((e, t) => t > 0)),
							a.dispatchEvent(s),
							(a.dom7EventData = []),
							delete a.dom7EventData;
					}
				}
			}
			return this;
		},
		transitionEnd: function (e) {
			const t = this;
			return (
				e &&
					t.on('transitionend', function s(i) {
						i.target === this && (e.call(this, i), t.off('transitionend', s));
					}),
				this
			);
		},
		outerWidth: function (e) {
			if (this.length > 0) {
				if (e) {
					const e = this.styles();
					return (
						this[0].offsetWidth +
						parseFloat(e.getPropertyValue('margin-right')) +
						parseFloat(e.getPropertyValue('margin-left'))
					);
				}
				return this[0].offsetWidth;
			}
			return null;
		},
		outerHeight: function (e) {
			if (this.length > 0) {
				if (e) {
					const e = this.styles();
					return (
						this[0].offsetHeight +
						parseFloat(e.getPropertyValue('margin-top')) +
						parseFloat(e.getPropertyValue('margin-bottom'))
					);
				}
				return this[0].offsetHeight;
			}
			return null;
		},
		styles: function () {
			const e = n();
			return this[0] ? e.getComputedStyle(this[0], null) : {};
		},
		offset: function () {
			if (this.length > 0) {
				const e = n(),
					t = i(),
					s = this[0],
					a = s.getBoundingClientRect(),
					r = t.body,
					l = s.clientTop || r.clientTop || 0,
					o = s.clientLeft || r.clientLeft || 0,
					d = s === e ? e.scrollY : s.scrollTop,
					c = s === e ? e.scrollX : s.scrollLeft;
				return { top: a.top + d - l, left: a.left + c - o };
			}
			return null;
		},
		css: function (e, t) {
			const s = n();
			let i;
			if (1 === arguments.length) {
				if ('string' != typeof e) {
					for (i = 0; i < this.length; i += 1)
						for (const t in e) this[i].style[t] = e[t];
					return this;
				}
				if (this[0])
					return s.getComputedStyle(this[0], null).getPropertyValue(e);
			}
			if (2 === arguments.length && 'string' == typeof e) {
				for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
				return this;
			}
			return this;
		},
		each: function (e) {
			return e
				? (this.forEach((t, s) => {
						e.apply(t, [t, s]);
				  }),
				  this)
				: this;
		},
		html: function (e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : null;
			for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this;
		},
		text: function (e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this;
		},
		is: function (e) {
			const t = n(),
				s = i(),
				a = this[0];
			let l, o;
			if (!a || void 0 === e) return !1;
			if ('string' == typeof e) {
				if (a.matches) return a.matches(e);
				if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
				if (a.msMatchesSelector) return a.msMatchesSelector(e);
				for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === a) return !0;
				return !1;
			}
			if (e === s) return a === s;
			if (e === t) return a === t;
			if (e.nodeType || e instanceof r) {
				for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
					if (l[o] === a) return !0;
				return !1;
			}
			return !1;
		},
		index: function () {
			let e,
				t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling); )
					1 === t.nodeType && (e += 1);
				return e;
			}
		},
		eq: function (e) {
			if (void 0 === e) return this;
			const t = this.length;
			if (e > t - 1) return d([]);
			if (e < 0) {
				const s = t + e;
				return d(s < 0 ? [] : [this[s]]);
			}
			return d([this[e]]);
		},
		append: function (...e) {
			let t;
			const s = i();
			for (let i = 0; i < e.length; i += 1) {
				t = e[i];
				for (let e = 0; e < this.length; e += 1)
					if ('string' == typeof t) {
						const i = s.createElement('div');
						for (i.innerHTML = t; i.firstChild; )
							this[e].appendChild(i.firstChild);
					} else if (t instanceof r)
						for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
					else this[e].appendChild(t);
			}
			return this;
		},
		prepend: function (e) {
			const t = i();
			let s, a;
			for (s = 0; s < this.length; s += 1)
				if ('string' == typeof e) {
					const i = t.createElement('div');
					for (i.innerHTML = e, a = i.childNodes.length - 1; a >= 0; a -= 1)
						this[s].insertBefore(i.childNodes[a], this[s].childNodes[0]);
				} else if (e instanceof r)
					for (a = 0; a < e.length; a += 1)
						this[s].insertBefore(e[a], this[s].childNodes[0]);
				else this[s].insertBefore(e, this[s].childNodes[0]);
			return this;
		},
		next: function (e) {
			return this.length > 0
				? e
					? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
						? d([this[0].nextElementSibling])
						: d([])
					: this[0].nextElementSibling
					? d([this[0].nextElementSibling])
					: d([])
				: d([]);
		},
		nextAll: function (e) {
			const t = [];
			let s = this[0];
			if (!s) return d([]);
			for (; s.nextElementSibling; ) {
				const i = s.nextElementSibling;
				e ? d(i).is(e) && t.push(i) : t.push(i), (s = i);
			}
			return d(t);
		},
		prev: function (e) {
			if (this.length > 0) {
				const t = this[0];
				return e
					? t.previousElementSibling && d(t.previousElementSibling).is(e)
						? d([t.previousElementSibling])
						: d([])
					: t.previousElementSibling
					? d([t.previousElementSibling])
					: d([]);
			}
			return d([]);
		},
		prevAll: function (e) {
			const t = [];
			let s = this[0];
			if (!s) return d([]);
			for (; s.previousElementSibling; ) {
				const i = s.previousElementSibling;
				e ? d(i).is(e) && t.push(i) : t.push(i), (s = i);
			}
			return d(t);
		},
		parent: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1)
				null !== this[s].parentNode &&
					(e
						? d(this[s].parentNode).is(e) && t.push(this[s].parentNode)
						: t.push(this[s].parentNode));
			return d(t);
		},
		parents: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1) {
				let i = this[s].parentNode;
				for (; i; ) e ? d(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
			}
			return d(t);
		},
		closest: function (e) {
			let t = this;
			return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
		},
		find: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1) {
				const i = this[s].querySelectorAll(e);
				for (let e = 0; e < i.length; e += 1) t.push(i[e]);
			}
			return d(t);
		},
		children: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1) {
				const i = this[s].children;
				for (let s = 0; s < i.length; s += 1)
					(e && !d(i[s]).is(e)) || t.push(i[s]);
			}
			return d(t);
		},
		filter: function (e) {
			return d(o(this, e));
		},
		remove: function () {
			for (let e = 0; e < this.length; e += 1)
				this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this;
		},
	};
	function p(e, t = 0) {
		return setTimeout(e, t);
	}
	function u() {
		return Date.now();
	}
	function h(e, t = 'x') {
		const s = n();
		let i, a, r;
		const l = (function (e) {
			const t = n();
			let s;
			return (
				t.getComputedStyle && (s = t.getComputedStyle(e, null)),
				!s && e.currentStyle && (s = e.currentStyle),
				s || (s = e.style),
				s
			);
		})(e);
		return (
			s.WebKitCSSMatrix
				? ((a = l.transform || l.webkitTransform),
				  a.split(',').length > 6 &&
						(a = a
							.split(', ')
							.map(e => e.replace(',', '.'))
							.join(', ')),
				  (r = new s.WebKitCSSMatrix('none' === a ? '' : a)))
				: ((r =
						l.MozTransform ||
						l.OTransform ||
						l.MsTransform ||
						l.msTransform ||
						l.transform ||
						l
							.getPropertyValue('transform')
							.replace('translate(', 'matrix(1, 0, 0, 1,')),
				  (i = r.toString().split(','))),
			'x' === t &&
				(a = s.WebKitCSSMatrix
					? r.m41
					: 16 === i.length
					? parseFloat(i[12])
					: parseFloat(i[4])),
			'y' === t &&
				(a = s.WebKitCSSMatrix
					? r.m42
					: 16 === i.length
					? parseFloat(i[13])
					: parseFloat(i[5])),
			a || 0
		);
	}
	function f(e) {
		return (
			'object' == typeof e &&
			null !== e &&
			e.constructor &&
			'Object' === Object.prototype.toString.call(e).slice(8, -1)
		);
	}
	function m(...e) {
		const t = Object(e[0]),
			s = ['__proto__', 'constructor', 'prototype'];
		for (let a = 1; a < e.length; a += 1) {
			const n = e[a];
			if (
				null != n &&
				((i = n),
				!('undefined' != typeof window && void 0 !== window.HTMLElement
					? i instanceof HTMLElement
					: i && (1 === i.nodeType || 11 === i.nodeType)))
			) {
				const e = Object.keys(Object(n)).filter(e => s.indexOf(e) < 0);
				for (let s = 0, i = e.length; s < i; s += 1) {
					const i = e[s],
						a = Object.getOwnPropertyDescriptor(n, i);
					void 0 !== a &&
						a.enumerable &&
						(f(t[i]) && f(n[i])
							? n[i].__swiper__
								? (t[i] = n[i])
								: m(t[i], n[i])
							: !f(t[i]) && f(n[i])
							? ((t[i] = {}), n[i].__swiper__ ? (t[i] = n[i]) : m(t[i], n[i]))
							: (t[i] = n[i]));
				}
			}
		}
		var i;
		return t;
	}
	function g(e, t, s) {
		e.style.setProperty(t, s);
	}
	function v({ swiper: e, targetPosition: t, side: s }) {
		const i = n(),
			a = -e.translate;
		let r,
			l = null;
		const o = e.params.speed;
		(e.wrapperEl.style.scrollSnapType = 'none'),
			i.cancelAnimationFrame(e.cssModeFrameID);
		const d = t > a ? 'next' : 'prev',
			c = (e, t) => ('next' === d && e >= t) || ('prev' === d && e <= t),
			p = () => {
				(r = new Date().getTime()), null === l && (l = r);
				const n = Math.max(Math.min((r - l) / o, 1), 0),
					d = 0.5 - Math.cos(n * Math.PI) / 2;
				let u = a + d * (t - a);
				if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), c(u, t)))
					return (
						(e.wrapperEl.style.overflow = 'hidden'),
						(e.wrapperEl.style.scrollSnapType = ''),
						setTimeout(() => {
							(e.wrapperEl.style.overflow = ''),
								e.wrapperEl.scrollTo({ [s]: u });
						}),
						void i.cancelAnimationFrame(e.cssModeFrameID)
					);
				e.cssModeFrameID = i.requestAnimationFrame(p);
			};
		p();
	}
	let b, w, C;
	function y() {
		return (
			b ||
				(b = (function () {
					const e = n(),
						t = i();
					return {
						smoothScroll:
							t.documentElement && 'scrollBehavior' in t.documentElement.style,
						touch: !!(
							'ontouchstart' in e ||
							(e.DocumentTouch && t instanceof e.DocumentTouch)
						),
						passiveListener: (function () {
							let t = !1;
							try {
								const s = Object.defineProperty({}, 'passive', {
									get() {
										t = !0;
									},
								});
								e.addEventListener('testPassiveListener', null, s);
							} catch (e) {}
							return t;
						})(),
						gestures: 'ongesturestart' in e,
					};
				})()),
			b
		);
	}
	function T(e = {}) {
		return (
			w ||
				(w = (function ({ userAgent: e } = {}) {
					const t = y(),
						s = n(),
						i = s.navigator.platform,
						a = e || s.navigator.userAgent,
						r = { ios: !1, android: !1 },
						l = s.screen.width,
						o = s.screen.height,
						d = a.match(/(Android);?[\s\/]+([\d.]+)?/);
					let c = a.match(/(iPad).*OS\s([\d_]+)/);
					const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
						u = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
						h = 'Win32' === i;
					let f = 'MacIntel' === i;
					return (
						!c &&
							f &&
							t.touch &&
							[
								'1024x1366',
								'1366x1024',
								'834x1194',
								'1194x834',
								'834x1112',
								'1112x834',
								'768x1024',
								'1024x768',
								'820x1180',
								'1180x820',
								'810x1080',
								'1080x810',
							].indexOf(`${l}x${o}`) >= 0 &&
							((c = a.match(/(Version)\/([\d.]+)/)),
							c || (c = [0, 1, '13_0_0']),
							(f = !1)),
						d && !h && ((r.os = 'android'), (r.android = !0)),
						(c || u || p) && ((r.os = 'ios'), (r.ios = !0)),
						r
					);
				})(e)),
			w
		);
	}
	function S() {
		return (
			C ||
				(C = (function () {
					const e = n();
					return {
						isSafari: (function () {
							const t = e.navigator.userAgent.toLowerCase();
							return (
								t.indexOf('safari') >= 0 &&
								t.indexOf('chrome') < 0 &&
								t.indexOf('android') < 0
							);
						})(),
						isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
							e.navigator.userAgent
						),
					};
				})()),
			C
		);
	}
	Object.keys(c).forEach(e => {
		Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
	});
	var x = {
		on(e, t, s) {
			const i = this;
			if ('function' != typeof t) return i;
			const a = s ? 'unshift' : 'push';
			return (
				e.split(' ').forEach(e => {
					i.eventsListeners[e] || (i.eventsListeners[e] = []),
						i.eventsListeners[e][a](t);
				}),
				i
			);
		},
		once(e, t, s) {
			const i = this;
			if ('function' != typeof t) return i;
			function a(...s) {
				i.off(e, a), a.__emitterProxy && delete a.__emitterProxy, t.apply(i, s);
			}
			return (a.__emitterProxy = t), i.on(e, a, s);
		},
		onAny(e, t) {
			const s = this;
			if ('function' != typeof e) return s;
			const i = t ? 'unshift' : 'push';
			return (
				s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
			);
		},
		offAny(e) {
			const t = this;
			if (!t.eventsAnyListeners) return t;
			const s = t.eventsAnyListeners.indexOf(e);
			return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
		},
		off(e, t) {
			const s = this;
			return s.eventsListeners
				? (e.split(' ').forEach(e => {
						void 0 === t
							? (s.eventsListeners[e] = [])
							: s.eventsListeners[e] &&
							  s.eventsListeners[e].forEach((i, a) => {
									(i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
										s.eventsListeners[e].splice(a, 1);
							  });
				  }),
				  s)
				: s;
		},
		emit(...e) {
			const t = this;
			if (!t.eventsListeners) return t;
			let s, i, a;
			'string' == typeof e[0] || Array.isArray(e[0])
				? ((s = e[0]), (i = e.slice(1, e.length)), (a = t))
				: ((s = e[0].events), (i = e[0].data), (a = e[0].context || t)),
				i.unshift(a);
			return (
				(Array.isArray(s) ? s : s.split(' ')).forEach(e => {
					t.eventsAnyListeners &&
						t.eventsAnyListeners.length &&
						t.eventsAnyListeners.forEach(t => {
							t.apply(a, [e, ...i]);
						}),
						t.eventsListeners &&
							t.eventsListeners[e] &&
							t.eventsListeners[e].forEach(e => {
								e.apply(a, i);
							});
				}),
				t
			);
		},
	};
	function E({ swiper: e, runCallbacks: t, direction: s, step: i }) {
		const { activeIndex: a, previousIndex: n } = e;
		let r = s;
		if (
			(r || (r = a > n ? 'next' : a < n ? 'prev' : 'reset'),
			e.emit(`transition${i}`),
			t && a !== n)
		) {
			if ('reset' === r) return void e.emit(`slideResetTransition${i}`);
			e.emit(`slideChangeTransition${i}`),
				'next' === r
					? e.emit(`slideNextTransition${i}`)
					: e.emit(`slidePrevTransition${i}`);
		}
	}
	function $(e) {
		const t = this,
			s = i(),
			a = n(),
			r = t.touchEventsData,
			{ params: l, touches: o, enabled: c } = t;
		if (!c) return;
		if (t.animating && l.preventInteractionOnTransition) return;
		!t.animating && l.cssMode && l.loop && t.loopFix();
		let p = e;
		p.originalEvent && (p = p.originalEvent);
		let h = d(p.target);
		if ('wrapper' === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
			return;
		if (
			((r.isTouchEvent = 'touchstart' === p.type),
			!r.isTouchEvent && 'which' in p && 3 === p.which)
		)
			return;
		if (!r.isTouchEvent && 'button' in p && p.button > 0) return;
		if (r.isTouched && r.isMoved) return;
		!!l.noSwipingClass &&
			'' !== l.noSwipingClass &&
			p.target &&
			p.target.shadowRoot &&
			e.path &&
			e.path[0] &&
			(h = d(e.path[0]));
		const f = l.noSwipingSelector
				? l.noSwipingSelector
				: `.${l.noSwipingClass}`,
			m = !(!p.target || !p.target.shadowRoot);
		if (
			l.noSwiping &&
			(m
				? (function (e, t = this) {
						return (function t(s) {
							return s && s !== i() && s !== n()
								? (s.assignedSlot && (s = s.assignedSlot),
								  s.closest(e) || t(s.getRootNode().host))
								: null;
						})(t);
				  })(f, p.target)
				: h.closest(f)[0])
		)
			return void (t.allowClick = !0);
		if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
		(o.currentX = 'touchstart' === p.type ? p.targetTouches[0].pageX : p.pageX),
			(o.currentY =
				'touchstart' === p.type ? p.targetTouches[0].pageY : p.pageY);
		const g = o.currentX,
			v = o.currentY,
			b = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
			w = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
		if (b && (g <= w || g >= a.innerWidth - w)) {
			if ('prevent' !== b) return;
			e.preventDefault();
		}
		if (
			(Object.assign(r, {
				isTouched: !0,
				isMoved: !1,
				allowTouchCallbacks: !0,
				isScrolling: void 0,
				startMoving: void 0,
			}),
			(o.startX = g),
			(o.startY = v),
			(r.touchStartTime = u()),
			(t.allowClick = !0),
			t.updateSize(),
			(t.swipeDirection = void 0),
			l.threshold > 0 && (r.allowThresholdMove = !1),
			'touchstart' !== p.type)
		) {
			let e = !0;
			h.is(r.focusableElements) && (e = !1),
				s.activeElement &&
					d(s.activeElement).is(r.focusableElements) &&
					s.activeElement !== h[0] &&
					s.activeElement.blur();
			const i = e && t.allowTouchMove && l.touchStartPreventDefault;
			(!l.touchStartForcePreventDefault && !i) ||
				h[0].isContentEditable ||
				p.preventDefault();
		}
		t.emit('touchStart', p);
	}
	function M(e) {
		const t = i(),
			s = this,
			a = s.touchEventsData,
			{ params: n, touches: r, rtlTranslate: l, enabled: o } = s;
		if (!o) return;
		let c = e;
		if ((c.originalEvent && (c = c.originalEvent), !a.isTouched))
			return void (
				a.startMoving &&
				a.isScrolling &&
				s.emit('touchMoveOpposite', c)
			);
		if (a.isTouchEvent && 'touchmove' !== c.type) return;
		const p =
				'touchmove' === c.type &&
				c.targetTouches &&
				(c.targetTouches[0] || c.changedTouches[0]),
			h = 'touchmove' === c.type ? p.pageX : c.pageX,
			f = 'touchmove' === c.type ? p.pageY : c.pageY;
		if (c.preventedByNestedSwiper) return (r.startX = h), void (r.startY = f);
		if (!s.allowTouchMove)
			return (
				(s.allowClick = !1),
				void (
					a.isTouched &&
					(Object.assign(r, { startX: h, startY: f, currentX: h, currentY: f }),
					(a.touchStartTime = u()))
				)
			);
		if (a.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
			if (s.isVertical()) {
				if (
					(f < r.startY && s.translate <= s.maxTranslate()) ||
					(f > r.startY && s.translate >= s.minTranslate())
				)
					return (a.isTouched = !1), void (a.isMoved = !1);
			} else if (
				(h < r.startX && s.translate <= s.maxTranslate()) ||
				(h > r.startX && s.translate >= s.minTranslate())
			)
				return;
		if (
			a.isTouchEvent &&
			t.activeElement &&
			c.target === t.activeElement &&
			d(c.target).is(a.focusableElements)
		)
			return (a.isMoved = !0), void (s.allowClick = !1);
		if (
			(a.allowTouchCallbacks && s.emit('touchMove', c),
			c.targetTouches && c.targetTouches.length > 1)
		)
			return;
		(r.currentX = h), (r.currentY = f);
		const m = r.currentX - r.startX,
			g = r.currentY - r.startY;
		if (s.params.threshold && Math.sqrt(m ** 2 + g ** 2) < s.params.threshold)
			return;
		if (void 0 === a.isScrolling) {
			let e;
			(s.isHorizontal() && r.currentY === r.startY) ||
			(s.isVertical() && r.currentX === r.startX)
				? (a.isScrolling = !1)
				: m * m + g * g >= 25 &&
				  ((e = (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
				  (a.isScrolling = s.isHorizontal()
						? e > n.touchAngle
						: 90 - e > n.touchAngle));
		}
		if (
			(a.isScrolling && s.emit('touchMoveOpposite', c),
			void 0 === a.startMoving &&
				((r.currentX === r.startX && r.currentY === r.startY) ||
					(a.startMoving = !0)),
			a.isScrolling)
		)
			return void (a.isTouched = !1);
		if (!a.startMoving) return;
		(s.allowClick = !1),
			!n.cssMode && c.cancelable && c.preventDefault(),
			n.touchMoveStopPropagation && !n.nested && c.stopPropagation(),
			a.isMoved ||
				(n.loop && !n.cssMode && s.loopFix(),
				(a.startTranslate = s.getTranslate()),
				s.setTransition(0),
				s.animating &&
					s.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
				(a.allowMomentumBounce = !1),
				!n.grabCursor ||
					(!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
					s.setGrabCursor(!0),
				s.emit('sliderFirstMove', c)),
			s.emit('sliderMove', c),
			(a.isMoved = !0);
		let v = s.isHorizontal() ? m : g;
		(r.diff = v),
			(v *= n.touchRatio),
			l && (v = -v),
			(s.swipeDirection = v > 0 ? 'prev' : 'next'),
			(a.currentTranslate = v + a.startTranslate);
		let b = !0,
			w = n.resistanceRatio;
		if (
			(n.touchReleaseOnEdges && (w = 0),
			v > 0 && a.currentTranslate > s.minTranslate()
				? ((b = !1),
				  n.resistance &&
						(a.currentTranslate =
							s.minTranslate() -
							1 +
							(-s.minTranslate() + a.startTranslate + v) ** w))
				: v < 0 &&
				  a.currentTranslate < s.maxTranslate() &&
				  ((b = !1),
				  n.resistance &&
						(a.currentTranslate =
							s.maxTranslate() +
							1 -
							(s.maxTranslate() - a.startTranslate - v) ** w)),
			b && (c.preventedByNestedSwiper = !0),
			!s.allowSlideNext &&
				'next' === s.swipeDirection &&
				a.currentTranslate < a.startTranslate &&
				(a.currentTranslate = a.startTranslate),
			!s.allowSlidePrev &&
				'prev' === s.swipeDirection &&
				a.currentTranslate > a.startTranslate &&
				(a.currentTranslate = a.startTranslate),
			s.allowSlidePrev ||
				s.allowSlideNext ||
				(a.currentTranslate = a.startTranslate),
			n.threshold > 0)
		) {
			if (!(Math.abs(v) > n.threshold || a.allowThresholdMove))
				return void (a.currentTranslate = a.startTranslate);
			if (!a.allowThresholdMove)
				return (
					(a.allowThresholdMove = !0),
					(r.startX = r.currentX),
					(r.startY = r.currentY),
					(a.currentTranslate = a.startTranslate),
					void (r.diff = s.isHorizontal()
						? r.currentX - r.startX
						: r.currentY - r.startY)
				);
		}
		n.followFinger &&
			!n.cssMode &&
			(((n.freeMode && n.freeMode.enabled && s.freeMode) ||
				n.watchSlidesProgress) &&
				(s.updateActiveIndex(), s.updateSlidesClasses()),
			s.params.freeMode &&
				n.freeMode.enabled &&
				s.freeMode &&
				s.freeMode.onTouchMove(),
			s.updateProgress(a.currentTranslate),
			s.setTranslate(a.currentTranslate));
	}
	function k(e) {
		const t = this,
			s = t.touchEventsData,
			{ params: i, touches: a, rtlTranslate: n, slidesGrid: r, enabled: l } = t;
		if (!l) return;
		let o = e;
		if (
			(o.originalEvent && (o = o.originalEvent),
			s.allowTouchCallbacks && t.emit('touchEnd', o),
			(s.allowTouchCallbacks = !1),
			!s.isTouched)
		)
			return (
				s.isMoved && i.grabCursor && t.setGrabCursor(!1),
				(s.isMoved = !1),
				void (s.startMoving = !1)
			);
		i.grabCursor &&
			s.isMoved &&
			s.isTouched &&
			(!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
			t.setGrabCursor(!1);
		const d = u(),
			c = d - s.touchStartTime;
		if (t.allowClick) {
			const e = o.path || (o.composedPath && o.composedPath());
			t.updateClickedSlide((e && e[0]) || o.target),
				t.emit('tap click', o),
				c < 300 &&
					d - s.lastClickTime < 300 &&
					t.emit('doubleTap doubleClick', o);
		}
		if (
			((s.lastClickTime = u()),
			p(() => {
				t.destroyed || (t.allowClick = !0);
			}),
			!s.isTouched ||
				!s.isMoved ||
				!t.swipeDirection ||
				0 === a.diff ||
				s.currentTranslate === s.startTranslate)
		)
			return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
		let h;
		if (
			((s.isTouched = !1),
			(s.isMoved = !1),
			(s.startMoving = !1),
			(h = i.followFinger
				? n
					? t.translate
					: -t.translate
				: -s.currentTranslate),
			i.cssMode)
		)
			return;
		if (t.params.freeMode && i.freeMode.enabled)
			return void t.freeMode.onTouchEnd({ currentPos: h });
		let f = 0,
			m = t.slidesSizesGrid[0];
		for (
			let e = 0;
			e < r.length;
			e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
		) {
			const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
			void 0 !== r[e + t]
				? h >= r[e] && h < r[e + t] && ((f = e), (m = r[e + t] - r[e]))
				: h >= r[e] && ((f = e), (m = r[r.length - 1] - r[r.length - 2]));
		}
		const g = (h - r[f]) / m,
			v = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
		if (c > i.longSwipesMs) {
			if (!i.longSwipes) return void t.slideTo(t.activeIndex);
			'next' === t.swipeDirection &&
				(g >= i.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f)),
				'prev' === t.swipeDirection &&
					(g > 1 - i.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f));
		} else {
			if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
			t.navigation &&
			(o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
				? o.target === t.navigation.nextEl
					? t.slideTo(f + v)
					: t.slideTo(f)
				: ('next' === t.swipeDirection && t.slideTo(f + v),
				  'prev' === t.swipeDirection && t.slideTo(f));
		}
	}
	function P() {
		const e = this,
			{ params: t, el: s } = e;
		if (s && 0 === s.offsetWidth) return;
		t.breakpoints && e.setBreakpoint();
		const { allowSlideNext: i, allowSlidePrev: a, snapGrid: n } = e;
		(e.allowSlideNext = !0),
			(e.allowSlidePrev = !0),
			e.updateSize(),
			e.updateSlides(),
			e.updateSlidesClasses(),
			('auto' === t.slidesPerView || t.slidesPerView > 1) &&
			e.isEnd &&
			!e.isBeginning &&
			!e.params.centeredSlides
				? e.slideTo(e.slides.length - 1, 0, !1, !0)
				: e.slideTo(e.activeIndex, 0, !1, !0),
			e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
			(e.allowSlidePrev = a),
			(e.allowSlideNext = i),
			e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
	}
	function O(e) {
		const t = this;
		t.enabled &&
			(t.allowClick ||
				(t.params.preventClicks && e.preventDefault(),
				t.params.preventClicksPropagation &&
					t.animating &&
					(e.stopPropagation(), e.stopImmediatePropagation())));
	}
	function L() {
		const e = this,
			{ wrapperEl: t, rtlTranslate: s, enabled: i } = e;
		if (!i) return;
		let a;
		(e.previousTranslate = e.translate),
			e.isHorizontal()
				? (e.translate = -t.scrollLeft)
				: (e.translate = -t.scrollTop),
			-0 === e.translate && (e.translate = 0),
			e.updateActiveIndex(),
			e.updateSlidesClasses();
		const n = e.maxTranslate() - e.minTranslate();
		(a = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
			a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
			e.emit('setTranslate', e.translate, !1);
	}
	let I = !1;
	function z() {}
	const A = (e, t) => {
		const s = i(),
			{
				params: a,
				touchEvents: n,
				el: r,
				wrapperEl: l,
				device: o,
				support: d,
			} = e,
			c = !!a.nested,
			p = 'on' === t ? 'addEventListener' : 'removeEventListener',
			u = t;
		if (d.touch) {
			const t = !(
				'touchstart' !== n.start ||
				!d.passiveListener ||
				!a.passiveListeners
			) && { passive: !0, capture: !1 };
			r[p](n.start, e.onTouchStart, t),
				r[p](
					n.move,
					e.onTouchMove,
					d.passiveListener ? { passive: !1, capture: c } : c
				),
				r[p](n.end, e.onTouchEnd, t),
				n.cancel && r[p](n.cancel, e.onTouchEnd, t);
		} else
			r[p](n.start, e.onTouchStart, !1),
				s[p](n.move, e.onTouchMove, c),
				s[p](n.end, e.onTouchEnd, !1);
		(a.preventClicks || a.preventClicksPropagation) &&
			r[p]('click', e.onClick, !0),
			a.cssMode && l[p]('scroll', e.onScroll),
			a.updateOnWindowResize
				? e[u](
						o.ios || o.android
							? 'resize orientationchange observerUpdate'
							: 'resize observerUpdate',
						P,
						!0
				  )
				: e[u]('observerUpdate', P, !0);
	};
	const D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
	var G = {
		init: !0,
		direction: 'horizontal',
		touchEventsTarget: 'wrapper',
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		enabled: !0,
		focusableElements: 'input, select, option, textarea, button, video, label',
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: 'slide',
		breakpoints: void 0,
		breakpointsBase: 'window',
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 0,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		preloadImages: !0,
		updateOnImagesReady: !0,
		loop: !1,
		loopAdditionalSlides: 0,
		loopedSlides: null,
		loopFillGroupWithBlank: !1,
		loopPreventsSlide: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: 'swiper-no-swiping',
		noSwipingSelector: null,
		passiveListeners: !0,
		containerModifierClass: 'swiper-',
		slideClass: 'swiper-slide',
		slideBlankClass: 'swiper-slide-invisible-blank',
		slideActiveClass: 'swiper-slide-active',
		slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
		slideVisibleClass: 'swiper-slide-visible',
		slideDuplicateClass: 'swiper-slide-duplicate',
		slideNextClass: 'swiper-slide-next',
		slideDuplicateNextClass: 'swiper-slide-duplicate-next',
		slidePrevClass: 'swiper-slide-prev',
		slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
		wrapperClass: 'swiper-wrapper',
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	};
	function B(e, t) {
		return function (s = {}) {
			const i = Object.keys(s)[0],
				a = s[i];
			'object' == typeof a && null !== a
				? (['navigation', 'pagination', 'scrollbar'].indexOf(i) >= 0 &&
						!0 === e[i] &&
						(e[i] = { auto: !0 }),
				  i in e && 'enabled' in a
						? (!0 === e[i] && (e[i] = { enabled: !0 }),
						  'object' != typeof e[i] ||
								'enabled' in e[i] ||
								(e[i].enabled = !0),
						  e[i] || (e[i] = { enabled: !1 }),
						  m(t, s))
						: m(t, s))
				: m(t, s);
		};
	}
	const N = {
			eventsEmitter: x,
			update: {
				updateSize: function () {
					const e = this;
					let t, s;
					const i = e.$el;
					(t =
						void 0 !== e.params.width && null !== e.params.width
							? e.params.width
							: i[0].clientWidth),
						(s =
							void 0 !== e.params.height && null !== e.params.height
								? e.params.height
								: i[0].clientHeight),
						(0 === t && e.isHorizontal()) ||
							(0 === s && e.isVertical()) ||
							((t =
								t -
								parseInt(i.css('padding-left') || 0, 10) -
								parseInt(i.css('padding-right') || 0, 10)),
							(s =
								s -
								parseInt(i.css('padding-top') || 0, 10) -
								parseInt(i.css('padding-bottom') || 0, 10)),
							Number.isNaN(t) && (t = 0),
							Number.isNaN(s) && (s = 0),
							Object.assign(e, {
								width: t,
								height: s,
								size: e.isHorizontal() ? t : s,
							}));
				},
				updateSlides: function () {
					const e = this;
					function t(t) {
						return e.isHorizontal()
							? t
							: {
									width: 'height',
									'margin-top': 'margin-left',
									'margin-bottom ': 'margin-right',
									'margin-left': 'margin-top',
									'margin-right': 'margin-bottom',
									'padding-left': 'padding-top',
									'padding-right': 'padding-bottom',
									marginRight: 'marginBottom',
							  }[t];
					}
					function s(e, s) {
						return parseFloat(e.getPropertyValue(t(s)) || 0);
					}
					const i = e.params,
						{ $wrapperEl: a, size: n, rtlTranslate: r, wrongRTL: l } = e,
						o = e.virtual && i.virtual.enabled,
						d = o ? e.virtual.slides.length : e.slides.length,
						c = a.children(`.${e.params.slideClass}`),
						p = o ? e.virtual.slides.length : c.length;
					let u = [];
					const h = [],
						f = [];
					let m = i.slidesOffsetBefore;
					'function' == typeof m && (m = i.slidesOffsetBefore.call(e));
					let v = i.slidesOffsetAfter;
					'function' == typeof v && (v = i.slidesOffsetAfter.call(e));
					const b = e.snapGrid.length,
						w = e.slidesGrid.length;
					let C = i.spaceBetween,
						y = -m,
						T = 0,
						S = 0;
					if (void 0 === n) return;
					'string' == typeof C &&
						C.indexOf('%') >= 0 &&
						(C = (parseFloat(C.replace('%', '')) / 100) * n),
						(e.virtualSize = -C),
						r
							? c.css({ marginLeft: '', marginBottom: '', marginTop: '' })
							: c.css({ marginRight: '', marginBottom: '', marginTop: '' }),
						i.centeredSlides &&
							i.cssMode &&
							(g(e.wrapperEl, '--swiper-centered-offset-before', ''),
							g(e.wrapperEl, '--swiper-centered-offset-after', ''));
					const x = i.grid && i.grid.rows > 1 && e.grid;
					let E;
					x && e.grid.initSlides(p);
					const $ =
						'auto' === i.slidesPerView &&
						i.breakpoints &&
						Object.keys(i.breakpoints).filter(
							e => void 0 !== i.breakpoints[e].slidesPerView
						).length > 0;
					for (let a = 0; a < p; a += 1) {
						E = 0;
						const r = c.eq(a);
						if (
							(x && e.grid.updateSlide(a, r, p, t), 'none' !== r.css('display'))
						) {
							if ('auto' === i.slidesPerView) {
								$ && (c[a].style[t('width')] = '');
								const n = getComputedStyle(r[0]),
									l = r[0].style.transform,
									o = r[0].style.webkitTransform;
								if (
									(l && (r[0].style.transform = 'none'),
									o && (r[0].style.webkitTransform = 'none'),
									i.roundLengths)
								)
									E = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
								else {
									const e = s(n, 'width'),
										t = s(n, 'padding-left'),
										i = s(n, 'padding-right'),
										a = s(n, 'margin-left'),
										l = s(n, 'margin-right'),
										o = n.getPropertyValue('box-sizing');
									if (o && 'border-box' === o) E = e + a + l;
									else {
										const { clientWidth: s, offsetWidth: n } = r[0];
										E = e + t + i + a + l + (n - s);
									}
								}
								l && (r[0].style.transform = l),
									o && (r[0].style.webkitTransform = o),
									i.roundLengths && (E = Math.floor(E));
							} else
								(E = (n - (i.slidesPerView - 1) * C) / i.slidesPerView),
									i.roundLengths && (E = Math.floor(E)),
									c[a] && (c[a].style[t('width')] = `${E}px`);
							c[a] && (c[a].swiperSlideSize = E),
								f.push(E),
								i.centeredSlides
									? ((y = y + E / 2 + T / 2 + C),
									  0 === T && 0 !== a && (y = y - n / 2 - C),
									  0 === a && (y = y - n / 2 - C),
									  Math.abs(y) < 0.001 && (y = 0),
									  i.roundLengths && (y = Math.floor(y)),
									  S % i.slidesPerGroup == 0 && u.push(y),
									  h.push(y))
									: (i.roundLengths && (y = Math.floor(y)),
									  (S - Math.min(e.params.slidesPerGroupSkip, S)) %
											e.params.slidesPerGroup ==
											0 && u.push(y),
									  h.push(y),
									  (y = y + E + C)),
								(e.virtualSize += E + C),
								(T = E),
								(S += 1);
						}
					}
					if (
						((e.virtualSize = Math.max(e.virtualSize, n) + v),
						r &&
							l &&
							('slide' === i.effect || 'coverflow' === i.effect) &&
							a.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
						i.setWrapperSize &&
							a.css({ [t('width')]: `${e.virtualSize + i.spaceBetween}px` }),
						x && e.grid.updateWrapperSize(E, u, t),
						!i.centeredSlides)
					) {
						const t = [];
						for (let s = 0; s < u.length; s += 1) {
							let a = u[s];
							i.roundLengths && (a = Math.floor(a)),
								u[s] <= e.virtualSize - n && t.push(a);
						}
						(u = t),
							Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 &&
								u.push(e.virtualSize - n);
					}
					if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
						const s = e.isHorizontal() && r ? 'marginLeft' : t('marginRight');
						c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
							[s]: `${C}px`,
						});
					}
					if (i.centeredSlides && i.centeredSlidesBounds) {
						let e = 0;
						f.forEach(t => {
							e += t + (i.spaceBetween ? i.spaceBetween : 0);
						}),
							(e -= i.spaceBetween);
						const t = e - n;
						u = u.map(e => (e < 0 ? -m : e > t ? t + v : e));
					}
					if (i.centerInsufficientSlides) {
						let e = 0;
						if (
							(f.forEach(t => {
								e += t + (i.spaceBetween ? i.spaceBetween : 0);
							}),
							(e -= i.spaceBetween),
							e < n)
						) {
							const t = (n - e) / 2;
							u.forEach((e, s) => {
								u[s] = e - t;
							}),
								h.forEach((e, s) => {
									h[s] = e + t;
								});
						}
					}
					if (
						(Object.assign(e, {
							slides: c,
							snapGrid: u,
							slidesGrid: h,
							slidesSizesGrid: f,
						}),
						i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
					) {
						g(e.wrapperEl, '--swiper-centered-offset-before', -u[0] + 'px'),
							g(
								e.wrapperEl,
								'--swiper-centered-offset-after',
								e.size / 2 - f[f.length - 1] / 2 + 'px'
							);
						const t = -e.snapGrid[0],
							s = -e.slidesGrid[0];
						(e.snapGrid = e.snapGrid.map(e => e + t)),
							(e.slidesGrid = e.slidesGrid.map(e => e + s));
					}
					p !== d && e.emit('slidesLengthChange'),
						u.length !== b &&
							(e.params.watchOverflow && e.checkOverflow(),
							e.emit('snapGridLengthChange')),
						h.length !== w && e.emit('slidesGridLengthChange'),
						i.watchSlidesProgress && e.updateSlidesOffset();
				},
				updateAutoHeight: function (e) {
					const t = this,
						s = [],
						i = t.virtual && t.params.virtual.enabled;
					let a,
						n = 0;
					'number' == typeof e
						? t.setTransition(e)
						: !0 === e && t.setTransition(t.params.speed);
					const r = e =>
						i
							? t.slides.filter(
									t =>
										parseInt(t.getAttribute('data-swiper-slide-index'), 10) ===
										e
							  )[0]
							: t.slides.eq(e)[0];
					if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
						if (t.params.centeredSlides)
							t.visibleSlides.each(e => {
								s.push(e);
							});
						else
							for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
								const e = t.activeIndex + a;
								if (e > t.slides.length && !i) break;
								s.push(r(e));
							}
					else s.push(r(t.activeIndex));
					for (a = 0; a < s.length; a += 1)
						if (void 0 !== s[a]) {
							const e = s[a].offsetHeight;
							n = e > n ? e : n;
						}
					(n || 0 === n) && t.$wrapperEl.css('height', `${n}px`);
				},
				updateSlidesOffset: function () {
					const e = this,
						t = e.slides;
					for (let s = 0; s < t.length; s += 1)
						t[s].swiperSlideOffset = e.isHorizontal()
							? t[s].offsetLeft
							: t[s].offsetTop;
				},
				updateSlidesProgress: function (e = (this && this.translate) || 0) {
					const t = this,
						s = t.params,
						{ slides: i, rtlTranslate: a, snapGrid: n } = t;
					if (0 === i.length) return;
					void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
					let r = -e;
					a && (r = e),
						i.removeClass(s.slideVisibleClass),
						(t.visibleSlidesIndexes = []),
						(t.visibleSlides = []);
					for (let e = 0; e < i.length; e += 1) {
						const l = i[e];
						let o = l.swiperSlideOffset;
						s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
						const d =
								(r + (s.centeredSlides ? t.minTranslate() : 0) - o) /
								(l.swiperSlideSize + s.spaceBetween),
							c =
								(r - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
								(l.swiperSlideSize + s.spaceBetween),
							p = -(r - o),
							u = p + t.slidesSizesGrid[e];
						((p >= 0 && p < t.size - 1) ||
							(u > 1 && u <= t.size) ||
							(p <= 0 && u >= t.size)) &&
							(t.visibleSlides.push(l),
							t.visibleSlidesIndexes.push(e),
							i.eq(e).addClass(s.slideVisibleClass)),
							(l.progress = a ? -d : d),
							(l.originalProgress = a ? -c : c);
					}
					t.visibleSlides = d(t.visibleSlides);
				},
				updateProgress: function (e) {
					const t = this;
					if (void 0 === e) {
						const s = t.rtlTranslate ? -1 : 1;
						e = (t && t.translate && t.translate * s) || 0;
					}
					const s = t.params,
						i = t.maxTranslate() - t.minTranslate();
					let { progress: a, isBeginning: n, isEnd: r } = t;
					const l = n,
						o = r;
					0 === i
						? ((a = 0), (n = !0), (r = !0))
						: ((a = (e - t.minTranslate()) / i), (n = a <= 0), (r = a >= 1)),
						Object.assign(t, { progress: a, isBeginning: n, isEnd: r }),
						(s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
							t.updateSlidesProgress(e),
						n && !l && t.emit('reachBeginning toEdge'),
						r && !o && t.emit('reachEnd toEdge'),
						((l && !n) || (o && !r)) && t.emit('fromEdge'),
						t.emit('progress', a);
				},
				updateSlidesClasses: function () {
					const e = this,
						{
							slides: t,
							params: s,
							$wrapperEl: i,
							activeIndex: a,
							realIndex: n,
						} = e,
						r = e.virtual && s.virtual.enabled;
					let l;
					t.removeClass(
						`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
					),
						(l = r
							? e.$wrapperEl.find(
									`.${s.slideClass}[data-swiper-slide-index="${a}"]`
							  )
							: t.eq(a)),
						l.addClass(s.slideActiveClass),
						s.loop &&
							(l.hasClass(s.slideDuplicateClass)
								? i
										.children(
											`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`
										)
										.addClass(s.slideDuplicateActiveClass)
								: i
										.children(
											`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`
										)
										.addClass(s.slideDuplicateActiveClass));
					let o = l
						.nextAll(`.${s.slideClass}`)
						.eq(0)
						.addClass(s.slideNextClass);
					s.loop &&
						0 === o.length &&
						((o = t.eq(0)), o.addClass(s.slideNextClass));
					let d = l
						.prevAll(`.${s.slideClass}`)
						.eq(0)
						.addClass(s.slidePrevClass);
					s.loop &&
						0 === d.length &&
						((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
						s.loop &&
							(o.hasClass(s.slideDuplicateClass)
								? i
										.children(
											`.${s.slideClass}:not(.${
												s.slideDuplicateClass
											})[data-swiper-slide-index="${o.attr(
												'data-swiper-slide-index'
											)}"]`
										)
										.addClass(s.slideDuplicateNextClass)
								: i
										.children(
											`.${s.slideClass}.${
												s.slideDuplicateClass
											}[data-swiper-slide-index="${o.attr(
												'data-swiper-slide-index'
											)}"]`
										)
										.addClass(s.slideDuplicateNextClass),
							d.hasClass(s.slideDuplicateClass)
								? i
										.children(
											`.${s.slideClass}:not(.${
												s.slideDuplicateClass
											})[data-swiper-slide-index="${d.attr(
												'data-swiper-slide-index'
											)}"]`
										)
										.addClass(s.slideDuplicatePrevClass)
								: i
										.children(
											`.${s.slideClass}.${
												s.slideDuplicateClass
											}[data-swiper-slide-index="${d.attr(
												'data-swiper-slide-index'
											)}"]`
										)
										.addClass(s.slideDuplicatePrevClass)),
						e.emitSlidesClasses();
				},
				updateActiveIndex: function (e) {
					const t = this,
						s = t.rtlTranslate ? t.translate : -t.translate,
						{
							slidesGrid: i,
							snapGrid: a,
							params: n,
							activeIndex: r,
							realIndex: l,
							snapIndex: o,
						} = t;
					let d,
						c = e;
					if (void 0 === c) {
						for (let e = 0; e < i.length; e += 1)
							void 0 !== i[e + 1]
								? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
									? (c = e)
									: s >= i[e] && s < i[e + 1] && (c = e + 1)
								: s >= i[e] && (c = e);
						n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
					}
					if (a.indexOf(s) >= 0) d = a.indexOf(s);
					else {
						const e = Math.min(n.slidesPerGroupSkip, c);
						d = e + Math.floor((c - e) / n.slidesPerGroup);
					}
					if ((d >= a.length && (d = a.length - 1), c === r))
						return void (
							d !== o && ((t.snapIndex = d), t.emit('snapIndexChange'))
						);
					const p = parseInt(
						t.slides.eq(c).attr('data-swiper-slide-index') || c,
						10
					);
					Object.assign(t, {
						snapIndex: d,
						realIndex: p,
						previousIndex: r,
						activeIndex: c,
					}),
						t.emit('activeIndexChange'),
						t.emit('snapIndexChange'),
						l !== p && t.emit('realIndexChange'),
						(t.initialized || t.params.runCallbacksOnInit) &&
							t.emit('slideChange');
				},
				updateClickedSlide: function (e) {
					const t = this,
						s = t.params,
						i = d(e).closest(`.${s.slideClass}`)[0];
					let a,
						n = !1;
					if (i)
						for (let e = 0; e < t.slides.length; e += 1)
							if (t.slides[e] === i) {
								(n = !0), (a = e);
								break;
							}
					if (!i || !n)
						return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
					(t.clickedSlide = i),
						t.virtual && t.params.virtual.enabled
							? (t.clickedIndex = parseInt(
									d(i).attr('data-swiper-slide-index'),
									10
							  ))
							: (t.clickedIndex = a),
						s.slideToClickedSlide &&
							void 0 !== t.clickedIndex &&
							t.clickedIndex !== t.activeIndex &&
							t.slideToClickedSlide();
				},
			},
			translate: {
				getTranslate: function (e = this.isHorizontal() ? 'x' : 'y') {
					const {
						params: t,
						rtlTranslate: s,
						translate: i,
						$wrapperEl: a,
					} = this;
					if (t.virtualTranslate) return s ? -i : i;
					if (t.cssMode) return i;
					let n = h(a[0], e);
					return s && (n = -n), n || 0;
				},
				setTranslate: function (e, t) {
					const s = this,
						{
							rtlTranslate: i,
							params: a,
							$wrapperEl: n,
							wrapperEl: r,
							progress: l,
						} = s;
					let o,
						d = 0,
						c = 0;
					s.isHorizontal() ? (d = i ? -e : e) : (c = e),
						a.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
						a.cssMode
							? (r[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
									s.isHorizontal() ? -d : -c)
							: a.virtualTranslate ||
							  n.transform(`translate3d(${d}px, ${c}px, 0px)`),
						(s.previousTranslate = s.translate),
						(s.translate = s.isHorizontal() ? d : c);
					const p = s.maxTranslate() - s.minTranslate();
					(o = 0 === p ? 0 : (e - s.minTranslate()) / p),
						o !== l && s.updateProgress(e),
						s.emit('setTranslate', s.translate, t);
				},
				minTranslate: function () {
					return -this.snapGrid[0];
				},
				maxTranslate: function () {
					return -this.snapGrid[this.snapGrid.length - 1];
				},
				translateTo: function (
					e = 0,
					t = this.params.speed,
					s = !0,
					i = !0,
					a
				) {
					const n = this,
						{ params: r, wrapperEl: l } = n;
					if (n.animating && r.preventInteractionOnTransition) return !1;
					const o = n.minTranslate(),
						d = n.maxTranslate();
					let c;
					if (
						((c = i && e > o ? o : i && e < d ? d : e),
						n.updateProgress(c),
						r.cssMode)
					) {
						const e = n.isHorizontal();
						if (0 === t) l[e ? 'scrollLeft' : 'scrollTop'] = -c;
						else {
							if (!n.support.smoothScroll)
								return (
									v({
										swiper: n,
										targetPosition: -c,
										side: e ? 'left' : 'top',
									}),
									!0
								);
							l.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' });
						}
						return !0;
					}
					return (
						0 === t
							? (n.setTransition(0),
							  n.setTranslate(c),
							  s &&
									(n.emit('beforeTransitionStart', t, a),
									n.emit('transitionEnd')))
							: (n.setTransition(t),
							  n.setTranslate(c),
							  s &&
									(n.emit('beforeTransitionStart', t, a),
									n.emit('transitionStart')),
							  n.animating ||
									((n.animating = !0),
									n.onTranslateToWrapperTransitionEnd ||
										(n.onTranslateToWrapperTransitionEnd = function (e) {
											n &&
												!n.destroyed &&
												e.target === this &&
												(n.$wrapperEl[0].removeEventListener(
													'transitionend',
													n.onTranslateToWrapperTransitionEnd
												),
												n.$wrapperEl[0].removeEventListener(
													'webkitTransitionEnd',
													n.onTranslateToWrapperTransitionEnd
												),
												(n.onTranslateToWrapperTransitionEnd = null),
												delete n.onTranslateToWrapperTransitionEnd,
												s && n.emit('transitionEnd'));
										}),
									n.$wrapperEl[0].addEventListener(
										'transitionend',
										n.onTranslateToWrapperTransitionEnd
									),
									n.$wrapperEl[0].addEventListener(
										'webkitTransitionEnd',
										n.onTranslateToWrapperTransitionEnd
									))),
						!0
					);
				},
			},
			transition: {
				setTransition: function (e, t) {
					const s = this;
					s.params.cssMode || s.$wrapperEl.transition(e),
						s.emit('setTransition', e, t);
				},
				transitionStart: function (e = !0, t) {
					const s = this,
						{ params: i } = s;
					i.cssMode ||
						(i.autoHeight && s.updateAutoHeight(),
						E({ swiper: s, runCallbacks: e, direction: t, step: 'Start' }));
				},
				transitionEnd: function (e = !0, t) {
					const s = this,
						{ params: i } = s;
					(s.animating = !1),
						i.cssMode ||
							(s.setTransition(0),
							E({ swiper: s, runCallbacks: e, direction: t, step: 'End' }));
				},
			},
			slide: {
				slideTo: function (e = 0, t = this.params.speed, s = !0, i, a) {
					if ('number' != typeof e && 'string' != typeof e)
						throw new Error(
							`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
						);
					if ('string' == typeof e) {
						const t = parseInt(e, 10);
						if (!isFinite(t))
							throw new Error(
								`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
							);
						e = t;
					}
					const n = this;
					let r = e;
					r < 0 && (r = 0);
					const {
						params: l,
						snapGrid: o,
						slidesGrid: d,
						previousIndex: c,
						activeIndex: p,
						rtlTranslate: u,
						wrapperEl: h,
						enabled: f,
					} = n;
					if (
						(n.animating && l.preventInteractionOnTransition) ||
						(!f && !i && !a)
					)
						return !1;
					const m = Math.min(n.params.slidesPerGroupSkip, r);
					let g = m + Math.floor((r - m) / n.params.slidesPerGroup);
					g >= o.length && (g = o.length - 1),
						(p || l.initialSlide || 0) === (c || 0) &&
							s &&
							n.emit('beforeSlideChangeStart');
					const b = -o[g];
					if ((n.updateProgress(b), l.normalizeSlideIndex))
						for (let e = 0; e < d.length; e += 1) {
							const t = -Math.floor(100 * b),
								s = Math.floor(100 * d[e]),
								i = Math.floor(100 * d[e + 1]);
							void 0 !== d[e + 1]
								? t >= s && t < i - (i - s) / 2
									? (r = e)
									: t >= s && t < i && (r = e + 1)
								: t >= s && (r = e);
						}
					if (n.initialized && r !== p) {
						if (!n.allowSlideNext && b < n.translate && b < n.minTranslate())
							return !1;
						if (
							!n.allowSlidePrev &&
							b > n.translate &&
							b > n.maxTranslate() &&
							(p || 0) !== r
						)
							return !1;
					}
					let w;
					if (
						((w = r > p ? 'next' : r < p ? 'prev' : 'reset'),
						(u && -b === n.translate) || (!u && b === n.translate))
					)
						return (
							n.updateActiveIndex(r),
							l.autoHeight && n.updateAutoHeight(),
							n.updateSlidesClasses(),
							'slide' !== l.effect && n.setTranslate(b),
							'reset' !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)),
							!1
						);
					if (l.cssMode) {
						const e = n.isHorizontal(),
							s = u ? b : -b;
						if (0 === t) {
							const t = n.virtual && n.params.virtual.enabled;
							t &&
								((n.wrapperEl.style.scrollSnapType = 'none'),
								(n._immediateVirtual = !0)),
								(h[e ? 'scrollLeft' : 'scrollTop'] = s),
								t &&
									requestAnimationFrame(() => {
										(n.wrapperEl.style.scrollSnapType = ''),
											(n._swiperImmediateVirtual = !1);
									});
						} else {
							if (!n.support.smoothScroll)
								return (
									v({ swiper: n, targetPosition: s, side: e ? 'left' : 'top' }),
									!0
								);
							h.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' });
						}
						return !0;
					}
					return (
						n.setTransition(t),
						n.setTranslate(b),
						n.updateActiveIndex(r),
						n.updateSlidesClasses(),
						n.emit('beforeTransitionStart', t, i),
						n.transitionStart(s, w),
						0 === t
							? n.transitionEnd(s, w)
							: n.animating ||
							  ((n.animating = !0),
							  n.onSlideToWrapperTransitionEnd ||
									(n.onSlideToWrapperTransitionEnd = function (e) {
										n &&
											!n.destroyed &&
											e.target === this &&
											(n.$wrapperEl[0].removeEventListener(
												'transitionend',
												n.onSlideToWrapperTransitionEnd
											),
											n.$wrapperEl[0].removeEventListener(
												'webkitTransitionEnd',
												n.onSlideToWrapperTransitionEnd
											),
											(n.onSlideToWrapperTransitionEnd = null),
											delete n.onSlideToWrapperTransitionEnd,
											n.transitionEnd(s, w));
									}),
							  n.$wrapperEl[0].addEventListener(
									'transitionend',
									n.onSlideToWrapperTransitionEnd
							  ),
							  n.$wrapperEl[0].addEventListener(
									'webkitTransitionEnd',
									n.onSlideToWrapperTransitionEnd
							  )),
						!0
					);
				},
				slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
					const a = this;
					let n = e;
					return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, s, i);
				},
				slideNext: function (e = this.params.speed, t = !0, s) {
					const i = this,
						{ animating: a, enabled: n, params: r } = i;
					if (!n) return i;
					let l = r.slidesPerGroup;
					'auto' === r.slidesPerView &&
						1 === r.slidesPerGroup &&
						r.slidesPerGroupAuto &&
						(l = Math.max(i.slidesPerViewDynamic('current', !0), 1));
					const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l;
					if (r.loop) {
						if (a && r.loopPreventsSlide) return !1;
						i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
					}
					return r.rewind && i.isEnd
						? i.slideTo(0, e, t, s)
						: i.slideTo(i.activeIndex + o, e, t, s);
				},
				slidePrev: function (e = this.params.speed, t = !0, s) {
					const i = this,
						{
							params: a,
							animating: n,
							snapGrid: r,
							slidesGrid: l,
							rtlTranslate: o,
							enabled: d,
						} = i;
					if (!d) return i;
					if (a.loop) {
						if (n && a.loopPreventsSlide) return !1;
						i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
					}
					function c(e) {
						return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
					}
					const p = c(o ? i.translate : -i.translate),
						u = r.map(e => c(e));
					let h = r[u.indexOf(p) - 1];
					if (void 0 === h && a.cssMode) {
						let e;
						r.forEach((t, s) => {
							p >= t && (e = s);
						}),
							void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
					}
					let f = 0;
					return (
						void 0 !== h &&
							((f = l.indexOf(h)),
							f < 0 && (f = i.activeIndex - 1),
							'auto' === a.slidesPerView &&
								1 === a.slidesPerGroup &&
								a.slidesPerGroupAuto &&
								((f = f - i.slidesPerViewDynamic('previous', !0) + 1),
								(f = Math.max(f, 0)))),
						a.rewind && i.isBeginning
							? i.slideTo(i.slides.length - 1, e, t, s)
							: i.slideTo(f, e, t, s)
					);
				},
				slideReset: function (e = this.params.speed, t = !0, s) {
					return this.slideTo(this.activeIndex, e, t, s);
				},
				slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
					const a = this;
					let n = a.activeIndex;
					const r = Math.min(a.params.slidesPerGroupSkip, n),
						l = r + Math.floor((n - r) / a.params.slidesPerGroup),
						o = a.rtlTranslate ? a.translate : -a.translate;
					if (o >= a.snapGrid[l]) {
						const e = a.snapGrid[l];
						o - e > (a.snapGrid[l + 1] - e) * i &&
							(n += a.params.slidesPerGroup);
					} else {
						const e = a.snapGrid[l - 1];
						o - e <= (a.snapGrid[l] - e) * i && (n -= a.params.slidesPerGroup);
					}
					return (
						(n = Math.max(n, 0)),
						(n = Math.min(n, a.slidesGrid.length - 1)),
						a.slideTo(n, e, t, s)
					);
				},
				slideToClickedSlide: function () {
					const e = this,
						{ params: t, $wrapperEl: s } = e,
						i =
							'auto' === t.slidesPerView
								? e.slidesPerViewDynamic()
								: t.slidesPerView;
					let a,
						n = e.clickedIndex;
					if (t.loop) {
						if (e.animating) return;
						(a = parseInt(
							d(e.clickedSlide).attr('data-swiper-slide-index'),
							10
						)),
							t.centeredSlides
								? n < e.loopedSlides - i / 2 ||
								  n > e.slides.length - e.loopedSlides + i / 2
									? (e.loopFix(),
									  (n = s
											.children(
												`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
											)
											.eq(0)
											.index()),
									  p(() => {
											e.slideTo(n);
									  }))
									: e.slideTo(n)
								: n > e.slides.length - i
								? (e.loopFix(),
								  (n = s
										.children(
											`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
										)
										.eq(0)
										.index()),
								  p(() => {
										e.slideTo(n);
								  }))
								: e.slideTo(n);
					} else e.slideTo(n);
				},
			},
			loop: {
				loopCreate: function () {
					const e = this,
						t = i(),
						{ params: s, $wrapperEl: a } = e,
						n = a.children().length > 0 ? d(a.children()[0].parentNode) : a;
					n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
					let r = n.children(`.${s.slideClass}`);
					if (s.loopFillGroupWithBlank) {
						const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
						if (e !== s.slidesPerGroup) {
							for (let i = 0; i < e; i += 1) {
								const e = d(t.createElement('div')).addClass(
									`${s.slideClass} ${s.slideBlankClass}`
								);
								n.append(e);
							}
							r = n.children(`.${s.slideClass}`);
						}
					}
					'auto' !== s.slidesPerView ||
						s.loopedSlides ||
						(s.loopedSlides = r.length),
						(e.loopedSlides = Math.ceil(
							parseFloat(s.loopedSlides || s.slidesPerView, 10)
						)),
						(e.loopedSlides += s.loopAdditionalSlides),
						e.loopedSlides > r.length && (e.loopedSlides = r.length);
					const l = [],
						o = [];
					r.each((t, s) => {
						const i = d(t);
						s < e.loopedSlides && o.push(t),
							s < r.length && s >= r.length - e.loopedSlides && l.push(t),
							i.attr('data-swiper-slide-index', s);
					});
					for (let e = 0; e < o.length; e += 1)
						n.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
					for (let e = l.length - 1; e >= 0; e -= 1)
						n.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
				},
				loopFix: function () {
					const e = this;
					e.emit('beforeLoopFix');
					const {
						activeIndex: t,
						slides: s,
						loopedSlides: i,
						allowSlidePrev: a,
						allowSlideNext: n,
						snapGrid: r,
						rtlTranslate: l,
					} = e;
					let o;
					(e.allowSlidePrev = !0), (e.allowSlideNext = !0);
					const d = -r[t] - e.getTranslate();
					if (t < i) {
						(o = s.length - 3 * i + t), (o += i);
						e.slideTo(o, 0, !1, !0) &&
							0 !== d &&
							e.setTranslate((l ? -e.translate : e.translate) - d);
					} else if (t >= s.length - i) {
						(o = -s.length + t + i), (o += i);
						e.slideTo(o, 0, !1, !0) &&
							0 !== d &&
							e.setTranslate((l ? -e.translate : e.translate) - d);
					}
					(e.allowSlidePrev = a), (e.allowSlideNext = n), e.emit('loopFix');
				},
				loopDestroy: function () {
					const { $wrapperEl: e, params: t, slides: s } = this;
					e
						.children(
							`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
						)
						.remove(),
						s.removeAttr('data-swiper-slide-index');
				},
			},
			grabCursor: {
				setGrabCursor: function (e) {
					const t = this;
					if (
						t.support.touch ||
						!t.params.simulateTouch ||
						(t.params.watchOverflow && t.isLocked) ||
						t.params.cssMode
					)
						return;
					const s =
						'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
					(s.style.cursor = 'move'),
						(s.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
						(s.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
						(s.style.cursor = e ? 'grabbing' : 'grab');
				},
				unsetGrabCursor: function () {
					const e = this;
					e.support.touch ||
						(e.params.watchOverflow && e.isLocked) ||
						e.params.cssMode ||
						(e[
							'container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'
						].style.cursor = '');
				},
			},
			events: {
				attachEvents: function () {
					const e = this,
						t = i(),
						{ params: s, support: a } = e;
					(e.onTouchStart = $.bind(e)),
						(e.onTouchMove = M.bind(e)),
						(e.onTouchEnd = k.bind(e)),
						s.cssMode && (e.onScroll = L.bind(e)),
						(e.onClick = O.bind(e)),
						a.touch && !I && (t.addEventListener('touchstart', z), (I = !0)),
						A(e, 'on');
				},
				detachEvents: function () {
					A(this, 'off');
				},
			},
			breakpoints: {
				setBreakpoint: function () {
					const e = this,
						{
							activeIndex: t,
							initialized: s,
							loopedSlides: i = 0,
							params: a,
							$el: n,
						} = e,
						r = a.breakpoints;
					if (!r || (r && 0 === Object.keys(r).length)) return;
					const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
					if (!l || e.currentBreakpoint === l) return;
					const o = (l in r ? r[l] : void 0) || e.originalParams,
						d = D(e, a),
						c = D(e, o),
						p = a.enabled;
					d && !c
						? (n.removeClass(
								`${a.containerModifierClass}grid ${a.containerModifierClass}grid-column`
						  ),
						  e.emitContainerClasses())
						: !d &&
						  c &&
						  (n.addClass(`${a.containerModifierClass}grid`),
						  ((o.grid.fill && 'column' === o.grid.fill) ||
								(!o.grid.fill && 'column' === a.grid.fill)) &&
								n.addClass(`${a.containerModifierClass}grid-column`),
						  e.emitContainerClasses());
					const u = o.direction && o.direction !== a.direction,
						h = a.loop && (o.slidesPerView !== a.slidesPerView || u);
					u && s && e.changeDirection(), m(e.params, o);
					const f = e.params.enabled;
					Object.assign(e, {
						allowTouchMove: e.params.allowTouchMove,
						allowSlideNext: e.params.allowSlideNext,
						allowSlidePrev: e.params.allowSlidePrev,
					}),
						p && !f ? e.disable() : !p && f && e.enable(),
						(e.currentBreakpoint = l),
						e.emit('_beforeBreakpoint', o),
						h &&
							s &&
							(e.loopDestroy(),
							e.loopCreate(),
							e.updateSlides(),
							e.slideTo(t - i + e.loopedSlides, 0, !1)),
						e.emit('breakpoint', o);
				},
				getBreakpoint: function (e, t = 'window', s) {
					if (!e || ('container' === t && !s)) return;
					let i = !1;
					const a = n(),
						r = 'window' === t ? a.innerHeight : s.clientHeight,
						l = Object.keys(e).map(e => {
							if ('string' == typeof e && 0 === e.indexOf('@')) {
								const t = parseFloat(e.substr(1));
								return { value: r * t, point: e };
							}
							return { value: e, point: e };
						});
					l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
					for (let e = 0; e < l.length; e += 1) {
						const { point: n, value: r } = l[e];
						'window' === t
							? a.matchMedia(`(min-width: ${r}px)`).matches && (i = n)
							: r <= s.clientWidth && (i = n);
					}
					return i || 'max';
				},
			},
			checkOverflow: {
				checkOverflow: function () {
					const e = this,
						{ isLocked: t, params: s } = e,
						{ slidesOffsetBefore: i } = s;
					if (i) {
						const t = e.slides.length - 1,
							s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
						e.isLocked = e.size > s;
					} else e.isLocked = 1 === e.snapGrid.length;
					!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
						!0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
						t && t !== e.isLocked && (e.isEnd = !1),
						t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
				},
			},
			classes: {
				addClasses: function () {
					const e = this,
						{
							classNames: t,
							params: s,
							rtl: i,
							$el: a,
							device: n,
							support: r,
						} = e,
						l = (function (e, t) {
							const s = [];
							return (
								e.forEach(e => {
									'object' == typeof e
										? Object.keys(e).forEach(i => {
												e[i] && s.push(t + i);
										  })
										: 'string' == typeof e && s.push(t + e);
								}),
								s
							);
						})(
							[
								'initialized',
								s.direction,
								{ 'pointer-events': !r.touch },
								{ 'free-mode': e.params.freeMode && s.freeMode.enabled },
								{ autoheight: s.autoHeight },
								{ rtl: i },
								{ grid: s.grid && s.grid.rows > 1 },
								{
									'grid-column':
										s.grid && s.grid.rows > 1 && 'column' === s.grid.fill,
								},
								{ android: n.android },
								{ ios: n.ios },
								{ 'css-mode': s.cssMode },
								{ centered: s.cssMode && s.centeredSlides },
							],
							s.containerModifierClass
						);
					t.push(...l), a.addClass([...t].join(' ')), e.emitContainerClasses();
				},
				removeClasses: function () {
					const { $el: e, classNames: t } = this;
					e.removeClass(t.join(' ')), this.emitContainerClasses();
				},
			},
			images: {
				loadImage: function (e, t, s, i, a, r) {
					const l = n();
					let o;
					function c() {
						r && r();
					}
					d(e).parent('picture')[0] || (e.complete && a)
						? c()
						: t
						? ((o = new l.Image()),
						  (o.onload = c),
						  (o.onerror = c),
						  i && (o.sizes = i),
						  s && (o.srcset = s),
						  t && (o.src = t))
						: c();
				},
				preloadImages: function () {
					const e = this;
					function t() {
						null != e &&
							e &&
							!e.destroyed &&
							(void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
							e.imagesLoaded === e.imagesToLoad.length &&
								(e.params.updateOnImagesReady && e.update(),
								e.emit('imagesReady')));
					}
					e.imagesToLoad = e.$el.find('img');
					for (let s = 0; s < e.imagesToLoad.length; s += 1) {
						const i = e.imagesToLoad[s];
						e.loadImage(
							i,
							i.currentSrc || i.getAttribute('src'),
							i.srcset || i.getAttribute('srcset'),
							i.sizes || i.getAttribute('sizes'),
							!0,
							t
						);
					}
				},
			},
		},
		_ = {};
	class H {
		constructor(...e) {
			let t, s;
			if (
				(1 === e.length &&
				e[0].constructor &&
				'Object' === Object.prototype.toString.call(e[0]).slice(8, -1)
					? (s = e[0])
					: ([t, s] = e),
				s || (s = {}),
				(s = m({}, s)),
				t && !s.el && (s.el = t),
				s.el && d(s.el).length > 1)
			) {
				const e = [];
				return (
					d(s.el).each(t => {
						const i = m({}, s, { el: t });
						e.push(new H(i));
					}),
					e
				);
			}
			const i = this;
			(i.__swiper__ = !0),
				(i.support = y()),
				(i.device = T({ userAgent: s.userAgent })),
				(i.browser = S()),
				(i.eventsListeners = {}),
				(i.eventsAnyListeners = []),
				(i.modules = [...i.__modules__]),
				s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
			const a = {};
			i.modules.forEach(e => {
				e({
					swiper: i,
					extendParams: B(s, a),
					on: i.on.bind(i),
					once: i.once.bind(i),
					off: i.off.bind(i),
					emit: i.emit.bind(i),
				});
			});
			const n = m({}, G, a);
			return (
				(i.params = m({}, n, _, s)),
				(i.originalParams = m({}, i.params)),
				(i.passedParams = m({}, s)),
				i.params &&
					i.params.on &&
					Object.keys(i.params.on).forEach(e => {
						i.on(e, i.params.on[e]);
					}),
				i.params && i.params.onAny && i.onAny(i.params.onAny),
				(i.$ = d),
				Object.assign(i, {
					enabled: i.params.enabled,
					el: t,
					classNames: [],
					slides: d(),
					slidesGrid: [],
					snapGrid: [],
					slidesSizesGrid: [],
					isHorizontal: () => 'horizontal' === i.params.direction,
					isVertical: () => 'vertical' === i.params.direction,
					activeIndex: 0,
					realIndex: 0,
					isBeginning: !0,
					isEnd: !1,
					translate: 0,
					previousTranslate: 0,
					progress: 0,
					velocity: 0,
					animating: !1,
					allowSlideNext: i.params.allowSlideNext,
					allowSlidePrev: i.params.allowSlidePrev,
					touchEvents: (function () {
						const e = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
							t = ['pointerdown', 'pointermove', 'pointerup'];
						return (
							(i.touchEventsTouch = {
								start: e[0],
								move: e[1],
								end: e[2],
								cancel: e[3],
							}),
							(i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
							i.support.touch || !i.params.simulateTouch
								? i.touchEventsTouch
								: i.touchEventsDesktop
						);
					})(),
					touchEventsData: {
						isTouched: void 0,
						isMoved: void 0,
						allowTouchCallbacks: void 0,
						touchStartTime: void 0,
						isScrolling: void 0,
						currentTranslate: void 0,
						startTranslate: void 0,
						allowThresholdMove: void 0,
						focusableElements: i.params.focusableElements,
						lastClickTime: u(),
						clickTimeout: void 0,
						velocities: [],
						allowMomentumBounce: void 0,
						isTouchEvent: void 0,
						startMoving: void 0,
					},
					allowClick: !0,
					allowTouchMove: i.params.allowTouchMove,
					touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
					imagesToLoad: [],
					imagesLoaded: 0,
				}),
				i.emit('_swiper'),
				i.params.init && i.init(),
				i
			);
		}
		enable() {
			const e = this;
			e.enabled ||
				((e.enabled = !0),
				e.params.grabCursor && e.setGrabCursor(),
				e.emit('enable'));
		}
		disable() {
			const e = this;
			e.enabled &&
				((e.enabled = !1),
				e.params.grabCursor && e.unsetGrabCursor(),
				e.emit('disable'));
		}
		setProgress(e, t) {
			const s = this;
			e = Math.min(Math.max(e, 0), 1);
			const i = s.minTranslate(),
				a = (s.maxTranslate() - i) * e + i;
			s.translateTo(a, void 0 === t ? 0 : t),
				s.updateActiveIndex(),
				s.updateSlidesClasses();
		}
		emitContainerClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = e.el.className
				.split(' ')
				.filter(
					t =>
						0 === t.indexOf('swiper') ||
						0 === t.indexOf(e.params.containerModifierClass)
				);
			e.emit('_containerClasses', t.join(' '));
		}
		getSlideClasses(e) {
			const t = this;
			return e.className
				.split(' ')
				.filter(
					e =>
						0 === e.indexOf('swiper-slide') ||
						0 === e.indexOf(t.params.slideClass)
				)
				.join(' ');
		}
		emitSlidesClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = [];
			e.slides.each(s => {
				const i = e.getSlideClasses(s);
				t.push({ slideEl: s, classNames: i }), e.emit('_slideClass', s, i);
			}),
				e.emit('_slideClasses', t);
		}
		slidesPerViewDynamic(e = 'current', t = !1) {
			const {
				params: s,
				slides: i,
				slidesGrid: a,
				slidesSizesGrid: n,
				size: r,
				activeIndex: l,
			} = this;
			let o = 1;
			if (s.centeredSlides) {
				let e,
					t = i[l].swiperSlideSize;
				for (let s = l + 1; s < i.length; s += 1)
					i[s] &&
						!e &&
						((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
				for (let s = l - 1; s >= 0; s -= 1)
					i[s] &&
						!e &&
						((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
			} else if ('current' === e)
				for (let e = l + 1; e < i.length; e += 1) {
					(t ? a[e] + n[e] - a[l] < r : a[e] - a[l] < r) && (o += 1);
				}
			else
				for (let e = l - 1; e >= 0; e -= 1) {
					a[l] - a[e] < r && (o += 1);
				}
			return o;
		}
		update() {
			const e = this;
			if (!e || e.destroyed) return;
			const { snapGrid: t, params: s } = e;
			function i() {
				const t = e.rtlTranslate ? -1 * e.translate : e.translate,
					s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
				e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
			}
			let a;
			s.breakpoints && e.setBreakpoint(),
				e.updateSize(),
				e.updateSlides(),
				e.updateProgress(),
				e.updateSlidesClasses(),
				e.params.freeMode && e.params.freeMode.enabled
					? (i(), e.params.autoHeight && e.updateAutoHeight())
					: ((a =
							('auto' === e.params.slidesPerView ||
								e.params.slidesPerView > 1) &&
							e.isEnd &&
							!e.params.centeredSlides
								? e.slideTo(e.slides.length - 1, 0, !1, !0)
								: e.slideTo(e.activeIndex, 0, !1, !0)),
					  a || i()),
				s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
				e.emit('update');
		}
		changeDirection(e, t = !0) {
			const s = this,
				i = s.params.direction;
			return (
				e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
				e === i ||
					('horizontal' !== e && 'vertical' !== e) ||
					(s.$el
						.removeClass(`${s.params.containerModifierClass}${i}`)
						.addClass(`${s.params.containerModifierClass}${e}`),
					s.emitContainerClasses(),
					(s.params.direction = e),
					s.slides.each(t => {
						'vertical' === e ? (t.style.width = '') : (t.style.height = '');
					}),
					s.emit('changeDirection'),
					t && s.update()),
				s
			);
		}
		mount(e) {
			const t = this;
			if (t.mounted) return !0;
			const s = d(e || t.params.el);
			if (!(e = s[0])) return !1;
			e.swiper = t;
			const a = () =>
				`.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
			let n = (() => {
				if (e && e.shadowRoot && e.shadowRoot.querySelector) {
					const t = d(e.shadowRoot.querySelector(a()));
					return (t.children = e => s.children(e)), t;
				}
				return s.children(a());
			})();
			if (0 === n.length && t.params.createElements) {
				const e = i().createElement('div');
				(n = d(e)),
					(e.className = t.params.wrapperClass),
					s.append(e),
					s.children(`.${t.params.slideClass}`).each(e => {
						n.append(e);
					});
			}
			return (
				Object.assign(t, {
					$el: s,
					el: e,
					$wrapperEl: n,
					wrapperEl: n[0],
					mounted: !0,
					rtl: 'rtl' === e.dir.toLowerCase() || 'rtl' === s.css('direction'),
					rtlTranslate:
						'horizontal' === t.params.direction &&
						('rtl' === e.dir.toLowerCase() || 'rtl' === s.css('direction')),
					wrongRTL: '-webkit-box' === n.css('display'),
				}),
				!0
			);
		}
		init(e) {
			const t = this;
			if (t.initialized) return t;
			return (
				!1 === t.mount(e) ||
					(t.emit('beforeInit'),
					t.params.breakpoints && t.setBreakpoint(),
					t.addClasses(),
					t.params.loop && t.loopCreate(),
					t.updateSize(),
					t.updateSlides(),
					t.params.watchOverflow && t.checkOverflow(),
					t.params.grabCursor && t.enabled && t.setGrabCursor(),
					t.params.preloadImages && t.preloadImages(),
					t.params.loop
						? t.slideTo(
								t.params.initialSlide + t.loopedSlides,
								0,
								t.params.runCallbacksOnInit,
								!1,
								!0
						  )
						: t.slideTo(
								t.params.initialSlide,
								0,
								t.params.runCallbacksOnInit,
								!1,
								!0
						  ),
					t.attachEvents(),
					(t.initialized = !0),
					t.emit('init'),
					t.emit('afterInit')),
				t
			);
		}
		destroy(e = !0, t = !0) {
			const s = this,
				{ params: i, $el: a, $wrapperEl: n, slides: r } = s;
			return (
				void 0 === s.params ||
					s.destroyed ||
					(s.emit('beforeDestroy'),
					(s.initialized = !1),
					s.detachEvents(),
					i.loop && s.loopDestroy(),
					t &&
						(s.removeClasses(),
						a.removeAttr('style'),
						n.removeAttr('style'),
						r &&
							r.length &&
							r
								.removeClass(
									[
										i.slideVisibleClass,
										i.slideActiveClass,
										i.slideNextClass,
										i.slidePrevClass,
									].join(' ')
								)
								.removeAttr('style')
								.removeAttr('data-swiper-slide-index')),
					s.emit('destroy'),
					Object.keys(s.eventsListeners).forEach(e => {
						s.off(e);
					}),
					!1 !== e &&
						((s.$el[0].swiper = null),
						(function (e) {
							const t = e;
							Object.keys(t).forEach(e => {
								try {
									t[e] = null;
								} catch (e) {}
								try {
									delete t[e];
								} catch (e) {}
							});
						})(s)),
					(s.destroyed = !0)),
				null
			);
		}
		static extendDefaults(e) {
			m(_, e);
		}
		static get extendedDefaults() {
			return _;
		}
		static get defaults() {
			return G;
		}
		static installModule(e) {
			H.prototype.__modules__ || (H.prototype.__modules__ = []);
			const t = H.prototype.__modules__;
			'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
		}
		static use(e) {
			return Array.isArray(e)
				? (e.forEach(e => H.installModule(e)), H)
				: (H.installModule(e), H);
		}
	}
	function j(e, t, s, a) {
		const n = i();
		return (
			e.params.createElements &&
				Object.keys(a).forEach(i => {
					if (!s[i] && !0 === s.auto) {
						let r = e.$el.children(`.${a[i]}`)[0];
						r ||
							((r = n.createElement('div')),
							(r.className = a[i]),
							e.$el.append(r)),
							(s[i] = r),
							(t[i] = r);
					}
				}),
			s
		);
	}
	function F(e = '') {
		return `.${e
			.trim()
			.replace(/([\.:!\/])/g, '\\$1')
			.replace(/ /g, '.')}`;
	}
	function V(e, t, s) {
		const i = 'swiper-slide-shadow' + (s ? `-${s}` : ''),
			a = e.transformEl ? t.find(e.transformEl) : t;
		let n = a.children(`.${i}`);
		return (
			n.length ||
				((n = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ''}"></div>`)),
				a.append(n)),
			n
		);
	}
	function q(e) {
		const {
			effect: t,
			swiper: s,
			on: i,
			setTranslate: a,
			setTransition: n,
			overwriteParams: r,
			perspective: l,
		} = e;
		i('beforeInit', () => {
			if (s.params.effect !== t) return;
			s.classNames.push(`${s.params.containerModifierClass}${t}`),
				l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
			const e = r ? r() : {};
			Object.assign(s.params, e), Object.assign(s.originalParams, e);
		}),
			i('setTranslate', () => {
				s.params.effect === t && a();
			}),
			i('setTransition', (e, i) => {
				s.params.effect === t && n(i);
			});
	}
	function W(e, t) {
		return e.transformEl
			? t
					.find(e.transformEl)
					.css({
						'backface-visibility': 'hidden',
						'-webkit-backface-visibility': 'hidden',
					})
			: t;
	}
	Object.keys(N).forEach(e => {
		Object.keys(N[e]).forEach(t => {
			H.prototype[t] = N[e][t];
		});
	}),
		H.use([
			function ({ swiper: e, on: t, emit: s }) {
				const i = n();
				let a = null;
				const r = () => {
						e &&
							!e.destroyed &&
							e.initialized &&
							(s('beforeResize'), s('resize'));
					},
					l = () => {
						e && !e.destroyed && e.initialized && s('orientationchange');
					};
				t('init', () => {
					e.params.resizeObserver && void 0 !== i.ResizeObserver
						? e &&
						  !e.destroyed &&
						  e.initialized &&
						  ((a = new ResizeObserver(t => {
								const { width: s, height: i } = e;
								let a = s,
									n = i;
								t.forEach(
									({ contentBoxSize: t, contentRect: s, target: i }) => {
										(i && i !== e.el) ||
											((a = s ? s.width : (t[0] || t).inlineSize),
											(n = s ? s.height : (t[0] || t).blockSize));
									}
								),
									(a === s && n === i) || r();
						  })),
						  a.observe(e.el))
						: (i.addEventListener('resize', r),
						  i.addEventListener('orientationchange', l));
				}),
					t('destroy', () => {
						a && a.unobserve && e.el && (a.unobserve(e.el), (a = null)),
							i.removeEventListener('resize', r),
							i.removeEventListener('orientationchange', l);
					});
			},
			function ({ swiper: e, extendParams: t, on: s, emit: i }) {
				const a = [],
					r = n(),
					l = (e, t = {}) => {
						const s = new (r.MutationObserver || r.WebkitMutationObserver)(
							e => {
								if (1 === e.length) return void i('observerUpdate', e[0]);
								const t = function () {
									i('observerUpdate', e[0]);
								};
								r.requestAnimationFrame
									? r.requestAnimationFrame(t)
									: r.setTimeout(t, 0);
							}
						);
						s.observe(e, {
							attributes: void 0 === t.attributes || t.attributes,
							childList: void 0 === t.childList || t.childList,
							characterData: void 0 === t.characterData || t.characterData,
						}),
							a.push(s);
					};
				t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
					s('init', () => {
						if (e.params.observer) {
							if (e.params.observeParents) {
								const t = e.$el.parents();
								for (let e = 0; e < t.length; e += 1) l(t[e]);
							}
							l(e.$el[0], { childList: e.params.observeSlideChildren }),
								l(e.$wrapperEl[0], { attributes: !1 });
						}
					}),
					s('destroy', () => {
						a.forEach(e => {
							e.disconnect();
						}),
							a.splice(0, a.length);
					});
			},
		]);
	const R = [
		function ({ swiper: e, extendParams: t, on: s, emit: a }) {
			const r = i(),
				l = n();
			function o(t) {
				if (!e.enabled) return;
				const { rtlTranslate: s } = e;
				let i = t;
				i.originalEvent && (i = i.originalEvent);
				const n = i.keyCode || i.charCode,
					o = e.params.keyboard.pageUpDown,
					d = o && 33 === n,
					c = o && 34 === n,
					p = 37 === n,
					u = 39 === n,
					h = 38 === n,
					f = 40 === n;
				if (
					!e.allowSlideNext &&
					((e.isHorizontal() && u) || (e.isVertical() && f) || c)
				)
					return !1;
				if (
					!e.allowSlidePrev &&
					((e.isHorizontal() && p) || (e.isVertical() && h) || d)
				)
					return !1;
				if (
					!(
						i.shiftKey ||
						i.altKey ||
						i.ctrlKey ||
						i.metaKey ||
						(r.activeElement &&
							r.activeElement.nodeName &&
							('input' === r.activeElement.nodeName.toLowerCase() ||
								'textarea' === r.activeElement.nodeName.toLowerCase()))
					)
				) {
					if (
						e.params.keyboard.onlyInViewport &&
						(d || c || p || u || h || f)
					) {
						let t = !1;
						if (
							e.$el.parents(`.${e.params.slideClass}`).length > 0 &&
							0 === e.$el.parents(`.${e.params.slideActiveClass}`).length
						)
							return;
						const i = e.$el,
							a = i[0].clientWidth,
							n = i[0].clientHeight,
							r = l.innerWidth,
							o = l.innerHeight,
							d = e.$el.offset();
						s && (d.left -= e.$el[0].scrollLeft);
						const c = [
							[d.left, d.top],
							[d.left + a, d.top],
							[d.left, d.top + n],
							[d.left + a, d.top + n],
						];
						for (let e = 0; e < c.length; e += 1) {
							const s = c[e];
							if (s[0] >= 0 && s[0] <= r && s[1] >= 0 && s[1] <= o) {
								if (0 === s[0] && 0 === s[1]) continue;
								t = !0;
							}
						}
						if (!t) return;
					}
					e.isHorizontal()
						? ((d || c || p || u) &&
								(i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
						  (((c || u) && !s) || ((d || p) && s)) && e.slideNext(),
						  (((d || p) && !s) || ((c || u) && s)) && e.slidePrev())
						: ((d || c || h || f) &&
								(i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
						  (c || f) && e.slideNext(),
						  (d || h) && e.slidePrev()),
						a('keyPress', n);
				}
			}
			function c() {
				e.keyboard.enabled ||
					(d(r).on('keydown', o), (e.keyboard.enabled = !0));
			}
			function p() {
				e.keyboard.enabled &&
					(d(r).off('keydown', o), (e.keyboard.enabled = !1));
			}
			(e.keyboard = { enabled: !1 }),
				t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
				s('init', () => {
					e.params.keyboard.enabled && c();
				}),
				s('destroy', () => {
					e.keyboard.enabled && p();
				}),
				Object.assign(e.keyboard, { enable: c, disable: p });
		},
		function ({ swiper: e, extendParams: t, on: s, emit: i }) {
			function a(t) {
				let s;
				return (
					t &&
						((s = d(t)),
						e.params.uniqueNavElements &&
							'string' == typeof t &&
							s.length > 1 &&
							1 === e.$el.find(t).length &&
							(s = e.$el.find(t))),
					s
				);
			}
			function n(t, s) {
				const i = e.params.navigation;
				t &&
					t.length > 0 &&
					(t[s ? 'addClass' : 'removeClass'](i.disabledClass),
					t[0] && 'BUTTON' === t[0].tagName && (t[0].disabled = s),
					e.params.watchOverflow &&
						e.enabled &&
						t[e.isLocked ? 'addClass' : 'removeClass'](i.lockClass));
			}
			function r() {
				if (e.params.loop) return;
				const { $nextEl: t, $prevEl: s } = e.navigation;
				n(s, e.isBeginning && !e.params.rewind),
					n(t, e.isEnd && !e.params.rewind);
			}
			function l(t) {
				t.preventDefault(),
					(!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
			}
			function o(t) {
				t.preventDefault(),
					(!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
			}
			function c() {
				const t = e.params.navigation;
				if (
					((e.params.navigation = j(
						e,
						e.originalParams.navigation,
						e.params.navigation,
						{ nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
					)),
					!t.nextEl && !t.prevEl)
				)
					return;
				const s = a(t.nextEl),
					i = a(t.prevEl);
				s && s.length > 0 && s.on('click', o),
					i && i.length > 0 && i.on('click', l),
					Object.assign(e.navigation, {
						$nextEl: s,
						nextEl: s && s[0],
						$prevEl: i,
						prevEl: i && i[0],
					}),
					e.enabled ||
						(s && s.addClass(t.lockClass), i && i.addClass(t.lockClass));
			}
			function p() {
				const { $nextEl: t, $prevEl: s } = e.navigation;
				t &&
					t.length &&
					(t.off('click', o), t.removeClass(e.params.navigation.disabledClass)),
					s &&
						s.length &&
						(s.off('click', l),
						s.removeClass(e.params.navigation.disabledClass));
			}
			t({
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: 'swiper-button-disabled',
					hiddenClass: 'swiper-button-hidden',
					lockClass: 'swiper-button-lock',
				},
			}),
				(e.navigation = {
					nextEl: null,
					$nextEl: null,
					prevEl: null,
					$prevEl: null,
				}),
				s('init', () => {
					c(), r();
				}),
				s('toEdge fromEdge lock unlock', () => {
					r();
				}),
				s('destroy', () => {
					p();
				}),
				s('enable disable', () => {
					const { $nextEl: t, $prevEl: s } = e.navigation;
					t &&
						t[e.enabled ? 'removeClass' : 'addClass'](
							e.params.navigation.lockClass
						),
						s &&
							s[e.enabled ? 'removeClass' : 'addClass'](
								e.params.navigation.lockClass
							);
				}),
				s('click', (t, s) => {
					const { $nextEl: a, $prevEl: n } = e.navigation,
						r = s.target;
					if (e.params.navigation.hideOnClick && !d(r).is(n) && !d(r).is(a)) {
						if (
							e.pagination &&
							e.params.pagination &&
							e.params.pagination.clickable &&
							(e.pagination.el === r || e.pagination.el.contains(r))
						)
							return;
						let t;
						a
							? (t = a.hasClass(e.params.navigation.hiddenClass))
							: n && (t = n.hasClass(e.params.navigation.hiddenClass)),
							i(!0 === t ? 'navigationShow' : 'navigationHide'),
							a && a.toggleClass(e.params.navigation.hiddenClass),
							n && n.toggleClass(e.params.navigation.hiddenClass);
					}
				}),
				Object.assign(e.navigation, { update: r, init: c, destroy: p });
		},
		function ({ swiper: e, extendParams: t, on: s, emit: i }) {
			const a = 'swiper-pagination';
			let n;
			t({
				pagination: {
					el: null,
					bulletElement: 'span',
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: 'bullets',
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: e => e,
					formatFractionTotal: e => e,
					bulletClass: `${a}-bullet`,
					bulletActiveClass: `${a}-bullet-active`,
					modifierClass: `${a}-`,
					currentClass: `${a}-current`,
					totalClass: `${a}-total`,
					hiddenClass: `${a}-hidden`,
					progressbarFillClass: `${a}-progressbar-fill`,
					progressbarOppositeClass: `${a}-progressbar-opposite`,
					clickableClass: `${a}-clickable`,
					lockClass: `${a}-lock`,
					horizontalClass: `${a}-horizontal`,
					verticalClass: `${a}-vertical`,
				},
			}),
				(e.pagination = { el: null, $el: null, bullets: [] });
			let r = 0;
			function l() {
				return (
					!e.params.pagination.el ||
					!e.pagination.el ||
					!e.pagination.$el ||
					0 === e.pagination.$el.length
				);
			}
			function o(t, s) {
				const { bulletActiveClass: i } = e.params.pagination;
				t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
			}
			function c() {
				const t = e.rtl,
					s = e.params.pagination;
				if (l()) return;
				const a =
						e.virtual && e.params.virtual.enabled
							? e.virtual.slides.length
							: e.slides.length,
					c = e.pagination.$el;
				let p;
				const u = e.params.loop
					? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
					: e.snapGrid.length;
				if (
					(e.params.loop
						? ((p = Math.ceil(
								(e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
						  )),
						  p > a - 1 - 2 * e.loopedSlides && (p -= a - 2 * e.loopedSlides),
						  p > u - 1 && (p -= u),
						  p < 0 && 'bullets' !== e.params.paginationType && (p = u + p))
						: (p = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
					'bullets' === s.type &&
						e.pagination.bullets &&
						e.pagination.bullets.length > 0)
				) {
					const i = e.pagination.bullets;
					let a, l, u;
					if (
						(s.dynamicBullets &&
							((n = i
								.eq(0)
								[e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
							c.css(
								e.isHorizontal() ? 'width' : 'height',
								n * (s.dynamicMainBullets + 4) + 'px'
							),
							s.dynamicMainBullets > 1 &&
								void 0 !== e.previousIndex &&
								((r += p - (e.previousIndex - e.loopedSlides || 0)),
								r > s.dynamicMainBullets - 1
									? (r = s.dynamicMainBullets - 1)
									: r < 0 && (r = 0)),
							(a = Math.max(p - r, 0)),
							(l = a + (Math.min(i.length, s.dynamicMainBullets) - 1)),
							(u = (l + a) / 2)),
						i.removeClass(
							['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
								.map(e => `${s.bulletActiveClass}${e}`)
								.join(' ')
						),
						c.length > 1)
					)
						i.each(e => {
							const t = d(e),
								i = t.index();
							i === p && t.addClass(s.bulletActiveClass),
								s.dynamicBullets &&
									(i >= a &&
										i <= l &&
										t.addClass(`${s.bulletActiveClass}-main`),
									i === a && o(t, 'prev'),
									i === l && o(t, 'next'));
						});
					else {
						const t = i.eq(p),
							n = t.index();
						if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
							const t = i.eq(a),
								r = i.eq(l);
							for (let e = a; e <= l; e += 1)
								i.eq(e).addClass(`${s.bulletActiveClass}-main`);
							if (e.params.loop)
								if (n >= i.length) {
									for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
										i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
									i.eq(i.length - s.dynamicMainBullets - 1).addClass(
										`${s.bulletActiveClass}-prev`
									);
								} else o(t, 'prev'), o(r, 'next');
							else o(t, 'prev'), o(r, 'next');
						}
					}
					if (s.dynamicBullets) {
						const a = Math.min(i.length, s.dynamicMainBullets + 4),
							r = (n * a - n) / 2 - u * n,
							l = t ? 'right' : 'left';
						i.css(e.isHorizontal() ? l : 'top', `${r}px`);
					}
				}
				if (
					('fraction' === s.type &&
						(c.find(F(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
						c.find(F(s.totalClass)).text(s.formatFractionTotal(u))),
					'progressbar' === s.type)
				) {
					let t;
					t = s.progressbarOpposite
						? e.isHorizontal()
							? 'vertical'
							: 'horizontal'
						: e.isHorizontal()
						? 'horizontal'
						: 'vertical';
					const i = (p + 1) / u;
					let a = 1,
						n = 1;
					'horizontal' === t ? (a = i) : (n = i),
						c
							.find(F(s.progressbarFillClass))
							.transform(`translate3d(0,0,0) scaleX(${a}) scaleY(${n})`)
							.transition(e.params.speed);
				}
				'custom' === s.type && s.renderCustom
					? (c.html(s.renderCustom(e, p + 1, u)), i('paginationRender', c[0]))
					: i('paginationUpdate', c[0]),
					e.params.watchOverflow &&
						e.enabled &&
						c[e.isLocked ? 'addClass' : 'removeClass'](s.lockClass);
			}
			function p() {
				const t = e.params.pagination;
				if (l()) return;
				const s =
						e.virtual && e.params.virtual.enabled
							? e.virtual.slides.length
							: e.slides.length,
					a = e.pagination.$el;
				let n = '';
				if ('bullets' === t.type) {
					let i = e.params.loop
						? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
						: e.snapGrid.length;
					e.params.freeMode &&
						e.params.freeMode.enabled &&
						!e.params.loop &&
						i > s &&
						(i = s);
					for (let s = 0; s < i; s += 1)
						t.renderBullet
							? (n += t.renderBullet.call(e, s, t.bulletClass))
							: (n += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
					a.html(n), (e.pagination.bullets = a.find(F(t.bulletClass)));
				}
				'fraction' === t.type &&
					((n = t.renderFraction
						? t.renderFraction.call(e, t.currentClass, t.totalClass)
						: `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
					a.html(n)),
					'progressbar' === t.type &&
						((n = t.renderProgressbar
							? t.renderProgressbar.call(e, t.progressbarFillClass)
							: `<span class="${t.progressbarFillClass}"></span>`),
						a.html(n)),
					'custom' !== t.type && i('paginationRender', e.pagination.$el[0]);
			}
			function u() {
				e.params.pagination = j(
					e,
					e.originalParams.pagination,
					e.params.pagination,
					{ el: 'swiper-pagination' }
				);
				const t = e.params.pagination;
				if (!t.el) return;
				let s = d(t.el);
				0 !== s.length &&
					(e.params.uniqueNavElements &&
						'string' == typeof t.el &&
						s.length > 1 &&
						((s = e.$el.find(t.el)),
						s.length > 1 &&
							(s = s.filter(t => d(t).parents('.swiper')[0] === e.el))),
					'bullets' === t.type && t.clickable && s.addClass(t.clickableClass),
					s.addClass(t.modifierClass + t.type),
					s.addClass(t.modifierClass + e.params.direction),
					'bullets' === t.type &&
						t.dynamicBullets &&
						(s.addClass(`${t.modifierClass}${t.type}-dynamic`),
						(r = 0),
						t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
					'progressbar' === t.type &&
						t.progressbarOpposite &&
						s.addClass(t.progressbarOppositeClass),
					t.clickable &&
						s.on('click', F(t.bulletClass), function (t) {
							t.preventDefault();
							let s = d(this).index() * e.params.slidesPerGroup;
							e.params.loop && (s += e.loopedSlides), e.slideTo(s);
						}),
					Object.assign(e.pagination, { $el: s, el: s[0] }),
					e.enabled || s.addClass(t.lockClass));
			}
			function h() {
				const t = e.params.pagination;
				if (l()) return;
				const s = e.pagination.$el;
				s.removeClass(t.hiddenClass),
					s.removeClass(t.modifierClass + t.type),
					s.removeClass(t.modifierClass + e.params.direction),
					e.pagination.bullets &&
						e.pagination.bullets.removeClass &&
						e.pagination.bullets.removeClass(t.bulletActiveClass),
					t.clickable && s.off('click', F(t.bulletClass));
			}
			s('init', () => {
				u(), p(), c();
			}),
				s('activeIndexChange', () => {
					(e.params.loop || void 0 === e.snapIndex) && c();
				}),
				s('snapIndexChange', () => {
					e.params.loop || c();
				}),
				s('slidesLengthChange', () => {
					e.params.loop && (p(), c());
				}),
				s('snapGridLengthChange', () => {
					e.params.loop || (p(), c());
				}),
				s('destroy', () => {
					h();
				}),
				s('enable disable', () => {
					const { $el: t } = e.pagination;
					t &&
						t[e.enabled ? 'removeClass' : 'addClass'](
							e.params.pagination.lockClass
						);
				}),
				s('lock unlock', () => {
					c();
				}),
				s('click', (t, s) => {
					const a = s.target,
						{ $el: n } = e.pagination;
					if (
						e.params.pagination.el &&
						e.params.pagination.hideOnClick &&
						n.length > 0 &&
						!d(a).hasClass(e.params.pagination.bulletClass)
					) {
						if (
							e.navigation &&
							((e.navigation.nextEl && a === e.navigation.nextEl) ||
								(e.navigation.prevEl && a === e.navigation.prevEl))
						)
							return;
						const t = n.hasClass(e.params.pagination.hiddenClass);
						i(!0 === t ? 'paginationShow' : 'paginationHide'),
							n.toggleClass(e.params.pagination.hiddenClass);
					}
				}),
				Object.assign(e.pagination, {
					render: p,
					update: c,
					init: u,
					destroy: h,
				});
		},
		function ({ swiper: e, extendParams: t, on: s, emit: a }) {
			const n = i();
			let r,
				l,
				o,
				c,
				u = !1,
				h = null,
				f = null;
			function m() {
				if (!e.params.scrollbar.el || !e.scrollbar.el) return;
				const { scrollbar: t, rtlTranslate: s, progress: i } = e,
					{ $dragEl: a, $el: n } = t,
					r = e.params.scrollbar;
				let d = l,
					c = (o - l) * i;
				s
					? ((c = -c),
					  c > 0 ? ((d = l - c), (c = 0)) : -c + l > o && (d = o + c))
					: c < 0
					? ((d = l + c), (c = 0))
					: c + l > o && (d = o - c),
					e.isHorizontal()
						? (a.transform(`translate3d(${c}px, 0, 0)`),
						  (a[0].style.width = `${d}px`))
						: (a.transform(`translate3d(0px, ${c}px, 0)`),
						  (a[0].style.height = `${d}px`)),
					r.hide &&
						(clearTimeout(h),
						(n[0].style.opacity = 1),
						(h = setTimeout(() => {
							(n[0].style.opacity = 0), n.transition(400);
						}, 1e3)));
			}
			function g() {
				if (!e.params.scrollbar.el || !e.scrollbar.el) return;
				const { scrollbar: t } = e,
					{ $dragEl: s, $el: i } = t;
				(s[0].style.width = ''),
					(s[0].style.height = ''),
					(o = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
					(c =
						e.size /
						(e.virtualSize +
							e.params.slidesOffsetBefore -
							(e.params.centeredSlides ? e.snapGrid[0] : 0))),
					(l =
						'auto' === e.params.scrollbar.dragSize
							? o * c
							: parseInt(e.params.scrollbar.dragSize, 10)),
					e.isHorizontal()
						? (s[0].style.width = `${l}px`)
						: (s[0].style.height = `${l}px`),
					(i[0].style.display = c >= 1 ? 'none' : ''),
					e.params.scrollbar.hide && (i[0].style.opacity = 0),
					e.params.watchOverflow &&
						e.enabled &&
						t.$el[e.isLocked ? 'addClass' : 'removeClass'](
							e.params.scrollbar.lockClass
						);
			}
			function v(t) {
				return e.isHorizontal()
					? 'touchstart' === t.type || 'touchmove' === t.type
						? t.targetTouches[0].clientX
						: t.clientX
					: 'touchstart' === t.type || 'touchmove' === t.type
					? t.targetTouches[0].clientY
					: t.clientY;
			}
			function b(t) {
				const { scrollbar: s, rtlTranslate: i } = e,
					{ $el: a } = s;
				let n;
				(n =
					(v(t) -
						a.offset()[e.isHorizontal() ? 'left' : 'top'] -
						(null !== r ? r : l / 2)) /
					(o - l)),
					(n = Math.max(Math.min(n, 1), 0)),
					i && (n = 1 - n);
				const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * n;
				e.updateProgress(d),
					e.setTranslate(d),
					e.updateActiveIndex(),
					e.updateSlidesClasses();
			}
			function w(t) {
				const s = e.params.scrollbar,
					{ scrollbar: i, $wrapperEl: n } = e,
					{ $el: l, $dragEl: o } = i;
				(u = !0),
					(r =
						t.target === o[0] || t.target === o
							? v(t) -
							  t.target.getBoundingClientRect()[
									e.isHorizontal() ? 'left' : 'top'
							  ]
							: null),
					t.preventDefault(),
					t.stopPropagation(),
					n.transition(100),
					o.transition(100),
					b(t),
					clearTimeout(f),
					l.transition(0),
					s.hide && l.css('opacity', 1),
					e.params.cssMode && e.$wrapperEl.css('scroll-snap-type', 'none'),
					a('scrollbarDragStart', t);
			}
			function C(t) {
				const { scrollbar: s, $wrapperEl: i } = e,
					{ $el: n, $dragEl: r } = s;
				u &&
					(t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
					b(t),
					i.transition(0),
					n.transition(0),
					r.transition(0),
					a('scrollbarDragMove', t));
			}
			function y(t) {
				const s = e.params.scrollbar,
					{ scrollbar: i, $wrapperEl: n } = e,
					{ $el: r } = i;
				u &&
					((u = !1),
					e.params.cssMode &&
						(e.$wrapperEl.css('scroll-snap-type', ''), n.transition('')),
					s.hide &&
						(clearTimeout(f),
						(f = p(() => {
							r.css('opacity', 0), r.transition(400);
						}, 1e3))),
					a('scrollbarDragEnd', t),
					s.snapOnRelease && e.slideToClosest());
			}
			function T(t) {
				const {
						scrollbar: s,
						touchEventsTouch: i,
						touchEventsDesktop: a,
						params: r,
						support: l,
					} = e,
					o = s.$el[0],
					d = !(!l.passiveListener || !r.passiveListeners) && {
						passive: !1,
						capture: !1,
					},
					c = !(!l.passiveListener || !r.passiveListeners) && {
						passive: !0,
						capture: !1,
					};
				if (!o) return;
				const p = 'on' === t ? 'addEventListener' : 'removeEventListener';
				l.touch
					? (o[p](i.start, w, d), o[p](i.move, C, d), o[p](i.end, y, c))
					: (o[p](a.start, w, d), n[p](a.move, C, d), n[p](a.end, y, c));
			}
			function S() {
				const { scrollbar: t, $el: s } = e;
				e.params.scrollbar = j(
					e,
					e.originalParams.scrollbar,
					e.params.scrollbar,
					{ el: 'swiper-scrollbar' }
				);
				const i = e.params.scrollbar;
				if (!i.el) return;
				let a = d(i.el);
				e.params.uniqueNavElements &&
					'string' == typeof i.el &&
					a.length > 1 &&
					1 === s.find(i.el).length &&
					(a = s.find(i.el));
				let n = a.find(`.${e.params.scrollbar.dragClass}`);
				0 === n.length &&
					((n = d(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
					a.append(n)),
					Object.assign(t, { $el: a, el: a[0], $dragEl: n, dragEl: n[0] }),
					i.draggable && e.params.scrollbar.el && T('on'),
					a &&
						a[e.enabled ? 'removeClass' : 'addClass'](
							e.params.scrollbar.lockClass
						);
			}
			function x() {
				e.params.scrollbar.el && T('off');
			}
			t({
				scrollbar: {
					el: null,
					dragSize: 'auto',
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: 'swiper-scrollbar-lock',
					dragClass: 'swiper-scrollbar-drag',
				},
			}),
				(e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
				s('init', () => {
					S(), g(), m();
				}),
				s('update resize observerUpdate lock unlock', () => {
					g();
				}),
				s('setTranslate', () => {
					m();
				}),
				s('setTransition', (t, s) => {
					!(function (t) {
						e.params.scrollbar.el &&
							e.scrollbar.el &&
							e.scrollbar.$dragEl.transition(t);
					})(s);
				}),
				s('enable disable', () => {
					const { $el: t } = e.scrollbar;
					t &&
						t[e.enabled ? 'removeClass' : 'addClass'](
							e.params.scrollbar.lockClass
						);
				}),
				s('destroy', () => {
					x();
				}),
				Object.assign(e.scrollbar, {
					updateSize: g,
					setTranslate: m,
					init: S,
					destroy: x,
				});
		},
		function ({ swiper: e, extendParams: t, on: s, emit: a }) {
			let n;
			function r() {
				const t = e.slides.eq(e.activeIndex);
				let s = e.params.autoplay.delay;
				t.attr('data-swiper-autoplay') &&
					(s = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
					clearTimeout(n),
					(n = p(() => {
						let t;
						e.params.autoplay.reverseDirection
							? e.params.loop
								? (e.loopFix(),
								  (t = e.slidePrev(e.params.speed, !0, !0)),
								  a('autoplay'))
								: e.isBeginning
								? e.params.autoplay.stopOnLastSlide
									? o()
									: ((t = e.slideTo(
											e.slides.length - 1,
											e.params.speed,
											!0,
											!0
									  )),
									  a('autoplay'))
								: ((t = e.slidePrev(e.params.speed, !0, !0)), a('autoplay'))
							: e.params.loop
							? (e.loopFix(),
							  (t = e.slideNext(e.params.speed, !0, !0)),
							  a('autoplay'))
							: e.isEnd
							? e.params.autoplay.stopOnLastSlide
								? o()
								: ((t = e.slideTo(0, e.params.speed, !0, !0)), a('autoplay'))
							: ((t = e.slideNext(e.params.speed, !0, !0)), a('autoplay')),
							((e.params.cssMode && e.autoplay.running) || !1 === t) && r();
					}, s));
			}
			function l() {
				return (
					void 0 === n &&
					!e.autoplay.running &&
					((e.autoplay.running = !0), a('autoplayStart'), r(), !0)
				);
			}
			function o() {
				return (
					!!e.autoplay.running &&
					void 0 !== n &&
					(n && (clearTimeout(n), (n = void 0)),
					(e.autoplay.running = !1),
					a('autoplayStop'),
					!0)
				);
			}
			function d(t) {
				e.autoplay.running &&
					(e.autoplay.paused ||
						(n && clearTimeout(n),
						(e.autoplay.paused = !0),
						0 !== t && e.params.autoplay.waitForTransition
							? ['transitionend', 'webkitTransitionEnd'].forEach(t => {
									e.$wrapperEl[0].addEventListener(t, u);
							  })
							: ((e.autoplay.paused = !1), r())));
			}
			function c() {
				const t = i();
				'hidden' === t.visibilityState && e.autoplay.running && d(),
					'visible' === t.visibilityState &&
						e.autoplay.paused &&
						(r(), (e.autoplay.paused = !1));
			}
			function u(t) {
				e &&
					!e.destroyed &&
					e.$wrapperEl &&
					t.target === e.$wrapperEl[0] &&
					(['transitionend', 'webkitTransitionEnd'].forEach(t => {
						e.$wrapperEl[0].removeEventListener(t, u);
					}),
					(e.autoplay.paused = !1),
					e.autoplay.running ? r() : o());
			}
			function h() {
				e.params.autoplay.disableOnInteraction ? o() : d(),
					['transitionend', 'webkitTransitionEnd'].forEach(t => {
						e.$wrapperEl[0].removeEventListener(t, u);
					});
			}
			function f() {
				e.params.autoplay.disableOnInteraction ||
					((e.autoplay.paused = !1), r());
			}
			(e.autoplay = { running: !1, paused: !1 }),
				t({
					autoplay: {
						enabled: !1,
						delay: 3e3,
						waitForTransition: !0,
						disableOnInteraction: !0,
						stopOnLastSlide: !1,
						reverseDirection: !1,
						pauseOnMouseEnter: !1,
					},
				}),
				s('init', () => {
					if (e.params.autoplay.enabled) {
						l();
						i().addEventListener('visibilitychange', c),
							e.params.autoplay.pauseOnMouseEnter &&
								(e.$el.on('mouseenter', h), e.$el.on('mouseleave', f));
					}
				}),
				s('beforeTransitionStart', (t, s, i) => {
					e.autoplay.running &&
						(i || !e.params.autoplay.disableOnInteraction
							? e.autoplay.pause(s)
							: o());
				}),
				s('sliderFirstMove', () => {
					e.autoplay.running &&
						(e.params.autoplay.disableOnInteraction ? o() : d());
				}),
				s('touchEnd', () => {
					e.params.cssMode &&
						e.autoplay.paused &&
						!e.params.autoplay.disableOnInteraction &&
						r();
				}),
				s('destroy', () => {
					e.$el.off('mouseenter', h),
						e.$el.off('mouseleave', f),
						e.autoplay.running && o();
					i().removeEventListener('visibilitychange', c);
				}),
				Object.assign(e.autoplay, { pause: d, run: r, start: l, stop: o });
		},
		function ({ swiper: e, extendParams: t, on: s }) {
			t({
				thumbs: {
					swiper: null,
					multipleActiveThumbs: !0,
					autoScrollOffset: 0,
					slideThumbActiveClass: 'swiper-slide-thumb-active',
					thumbsContainerClass: 'swiper-thumbs',
				},
			});
			let i = !1,
				a = !1;
			function n() {
				const t = e.thumbs.swiper;
				if (!t) return;
				const s = t.clickedIndex,
					i = t.clickedSlide;
				if (i && d(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
				if (null == s) return;
				let a;
				if (
					((a = t.params.loop
						? parseInt(d(t.clickedSlide).attr('data-swiper-slide-index'), 10)
						: s),
					e.params.loop)
				) {
					let t = e.activeIndex;
					e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
						(e.loopFix(),
						(e._clientLeft = e.$wrapperEl[0].clientLeft),
						(t = e.activeIndex));
					const s = e.slides
							.eq(t)
							.prevAll(`[data-swiper-slide-index="${a}"]`)
							.eq(0)
							.index(),
						i = e.slides
							.eq(t)
							.nextAll(`[data-swiper-slide-index="${a}"]`)
							.eq(0)
							.index();
					a = void 0 === s ? i : void 0 === i ? s : i - t < t - s ? i : s;
				}
				e.slideTo(a);
			}
			function r() {
				const { thumbs: t } = e.params;
				if (i) return !1;
				i = !0;
				const s = e.constructor;
				if (t.swiper instanceof s)
					(e.thumbs.swiper = t.swiper),
						Object.assign(e.thumbs.swiper.originalParams, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
						}),
						Object.assign(e.thumbs.swiper.params, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
						});
				else if (f(t.swiper)) {
					const i = Object.assign({}, t.swiper);
					Object.assign(i, {
						watchSlidesProgress: !0,
						slideToClickedSlide: !1,
					}),
						(e.thumbs.swiper = new s(i)),
						(a = !0);
				}
				return (
					e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
					e.thumbs.swiper.on('tap', n),
					!0
				);
			}
			function l(t) {
				const s = e.thumbs.swiper;
				if (!s) return;
				const i =
						'auto' === s.params.slidesPerView
							? s.slidesPerViewDynamic()
							: s.params.slidesPerView,
					a = e.params.thumbs.autoScrollOffset,
					n = a && !s.params.loop;
				if (e.realIndex !== s.realIndex || n) {
					let r,
						l,
						o = s.activeIndex;
					if (s.params.loop) {
						s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
							(s.loopFix(),
							(s._clientLeft = s.$wrapperEl[0].clientLeft),
							(o = s.activeIndex));
						const t = s.slides
								.eq(o)
								.prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
								.eq(0)
								.index(),
							i = s.slides
								.eq(o)
								.nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
								.eq(0)
								.index();
						(r =
							void 0 === t
								? i
								: void 0 === i
								? t
								: i - o == o - t
								? s.params.slidesPerGroup > 1
									? i
									: o
								: i - o < o - t
								? i
								: t),
							(l = e.activeIndex > e.previousIndex ? 'next' : 'prev');
					} else (r = e.realIndex), (l = r > e.previousIndex ? 'next' : 'prev');
					n && (r += 'next' === l ? a : -1 * a),
						s.visibleSlidesIndexes &&
							s.visibleSlidesIndexes.indexOf(r) < 0 &&
							(s.params.centeredSlides
								? (r =
										r > o
											? r - Math.floor(i / 2) + 1
											: r + Math.floor(i / 2) - 1)
								: r > o && s.params.slidesPerGroup,
							s.slideTo(r, t ? 0 : void 0));
				}
				let r = 1;
				const l = e.params.thumbs.slideThumbActiveClass;
				if (
					(e.params.slidesPerView > 1 &&
						!e.params.centeredSlides &&
						(r = e.params.slidesPerView),
					e.params.thumbs.multipleActiveThumbs || (r = 1),
					(r = Math.floor(r)),
					s.slides.removeClass(l),
					s.params.loop || (s.params.virtual && s.params.virtual.enabled))
				)
					for (let t = 0; t < r; t += 1)
						s.$wrapperEl
							.children(`[data-swiper-slide-index="${e.realIndex + t}"]`)
							.addClass(l);
				else
					for (let t = 0; t < r; t += 1)
						s.slides.eq(e.realIndex + t).addClass(l);
			}
			(e.thumbs = { swiper: null }),
				s('beforeInit', () => {
					const { thumbs: t } = e.params;
					t && t.swiper && (r(), l(!0));
				}),
				s('slideChange update resize observerUpdate', () => {
					e.thumbs.swiper && l();
				}),
				s('setTransition', (t, s) => {
					const i = e.thumbs.swiper;
					i && i.setTransition(s);
				}),
				s('beforeDestroy', () => {
					const t = e.thumbs.swiper;
					t && a && t && t.destroy();
				}),
				Object.assign(e.thumbs, { init: r, update: l });
		},
		function ({ swiper: e, extendParams: t, on: s }) {
			t({
				creativeEffect: {
					transformEl: null,
					limitProgress: 1,
					shadowPerProgress: !1,
					progressMultiplier: 1,
					perspective: !0,
					prev: {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						opacity: 1,
						scale: 1,
					},
					next: {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						opacity: 1,
						scale: 1,
					},
				},
			});
			const i = e => ('string' == typeof e ? e : `${e}px`);
			q({
				effect: 'creative',
				swiper: e,
				on: s,
				setTranslate: () => {
					const { slides: t, $wrapperEl: s, slidesSizesGrid: a } = e,
						n = e.params.creativeEffect,
						{ progressMultiplier: r } = n,
						l = e.params.centeredSlides;
					if (l) {
						const t = a[0] / 2 - e.params.slidesOffsetBefore || 0;
						s.transform(`translateX(calc(50% - ${t}px))`);
					}
					for (let s = 0; s < t.length; s += 1) {
						const a = t.eq(s),
							o = a[0].progress,
							d = Math.min(
								Math.max(a[0].progress, -n.limitProgress),
								n.limitProgress
							);
						let c = d;
						l ||
							(c = Math.min(
								Math.max(a[0].originalProgress, -n.limitProgress),
								n.limitProgress
							));
						const p = a[0].swiperSlideOffset,
							u = [e.params.cssMode ? -p - e.translate : -p, 0, 0],
							h = [0, 0, 0];
						let f = !1;
						e.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
						let m = {
							translate: [0, 0, 0],
							rotate: [0, 0, 0],
							scale: 1,
							opacity: 1,
						};
						d < 0
							? ((m = n.next), (f = !0))
							: d > 0 && ((m = n.prev), (f = !0)),
							u.forEach((e, t) => {
								u[t] = `calc(${e}px + (${i(m.translate[t])} * ${Math.abs(
									d * r
								)}))`;
							}),
							h.forEach((e, t) => {
								h[t] = m.rotate[t] * Math.abs(d * r);
							}),
							(a[0].style.zIndex = -Math.abs(Math.round(o)) + t.length);
						const g = u.join(', '),
							v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
							b =
								c < 0
									? `scale(${1 + (1 - m.scale) * c * r})`
									: `scale(${1 - (1 - m.scale) * c * r})`,
							w =
								c < 0
									? 1 + (1 - m.opacity) * c * r
									: 1 - (1 - m.opacity) * c * r,
							C = `translate3d(${g}) ${v} ${b}`;
						if ((f && m.shadow) || !f) {
							let e = a.children('.swiper-slide-shadow');
							if ((0 === e.length && m.shadow && (e = V(n, a)), e.length)) {
								const t = n.shadowPerProgress ? d * (1 / n.limitProgress) : d;
								e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
							}
						}
						const y = W(n, a);
						y.transform(C).css({ opacity: w }),
							m.origin && y.css('transform-origin', m.origin);
					}
				},
				setTransition: t => {
					const { transformEl: s } = e.params.creativeEffect;
					(s ? e.slides.find(s) : e.slides)
						.transition(t)
						.find('.swiper-slide-shadow')
						.transition(t),
						(function ({
							swiper: e,
							duration: t,
							transformEl: s,
							allSlides: i,
						}) {
							const { slides: a, activeIndex: n, $wrapperEl: r } = e;
							if (e.params.virtualTranslate && 0 !== t) {
								let t,
									l = !1;
								(t = i ? (s ? a.find(s) : a) : s ? a.eq(n).find(s) : a.eq(n)),
									t.transitionEnd(() => {
										if (l) return;
										if (!e || e.destroyed) return;
										(l = !0), (e.animating = !1);
										const t = ['webkitTransitionEnd', 'transitionend'];
										for (let e = 0; e < t.length; e += 1) r.trigger(t[e]);
									});
							}
						})({ swiper: e, duration: t, transformEl: s, allSlides: !0 });
				},
				perspective: () => e.params.creativeEffect.perspective,
				overwriteParams: () => ({
					watchSlidesProgress: !0,
					virtualTranslate: !e.params.cssMode,
				}),
			});
		},
		function ({ swiper: e, extendParams: t, on: s }) {
			t({
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					scale: 1,
					modifier: 1,
					slideShadows: !0,
					transformEl: null,
				},
			}),
				q({
					effect: 'coverflow',
					swiper: e,
					on: s,
					setTranslate: () => {
						const { width: t, height: s, slides: i, slidesSizesGrid: a } = e,
							n = e.params.coverflowEffect,
							r = e.isHorizontal(),
							l = e.translate,
							o = r ? t / 2 - l : s / 2 - l,
							d = r ? n.rotate : -n.rotate,
							c = n.depth;
						for (let e = 0, t = i.length; e < t; e += 1) {
							const t = i.eq(e),
								s = a[e],
								l = ((o - t[0].swiperSlideOffset - s / 2) / s) * n.modifier;
							let p = r ? d * l : 0,
								u = r ? 0 : d * l,
								h = -c * Math.abs(l),
								f = n.stretch;
							'string' == typeof f &&
								-1 !== f.indexOf('%') &&
								(f = (parseFloat(n.stretch) / 100) * s);
							let m = r ? 0 : f * l,
								g = r ? f * l : 0,
								v = 1 - (1 - n.scale) * Math.abs(l);
							Math.abs(g) < 0.001 && (g = 0),
								Math.abs(m) < 0.001 && (m = 0),
								Math.abs(h) < 0.001 && (h = 0),
								Math.abs(p) < 0.001 && (p = 0),
								Math.abs(u) < 0.001 && (u = 0),
								Math.abs(v) < 0.001 && (v = 0);
							const b = `translate3d(${g}px,${m}px,${h}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${v})`;
							if (
								(W(n, t).transform(b),
								(t[0].style.zIndex = 1 - Math.abs(Math.round(l))),
								n.slideShadows)
							) {
								let e = r
										? t.find('.swiper-slide-shadow-left')
										: t.find('.swiper-slide-shadow-top'),
									s = r
										? t.find('.swiper-slide-shadow-right')
										: t.find('.swiper-slide-shadow-bottom');
								0 === e.length && (e = V(n, t, r ? 'left' : 'top')),
									0 === s.length && (s = V(n, t, r ? 'right' : 'bottom')),
									e.length && (e[0].style.opacity = l > 0 ? l : 0),
									s.length && (s[0].style.opacity = -l > 0 ? -l : 0);
							}
						}
					},
					setTransition: t => {
						const { transformEl: s } = e.params.coverflowEffect;
						(s ? e.slides.find(s) : e.slides)
							.transition(t)
							.find(
								'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
							)
							.transition(t);
					},
					perspective: () => !0,
					overwriteParams: () => ({ watchSlidesProgress: !0 }),
				});
		},
		function ({ swiper: e, extendParams: t }) {
			let s, i, a;
			t({ grid: { rows: 1, fill: 'column' } }),
				(e.grid = {
					initSlides: t => {
						const { slidesPerView: n } = e.params,
							{ rows: r, fill: l } = e.params.grid;
						(i = s / r),
							(a = Math.floor(t / r)),
							(s = Math.floor(t / r) === t / r ? t : Math.ceil(t / r) * r),
							'auto' !== n && 'row' === l && (s = Math.max(s, n * r));
					},
					updateSlide: (t, n, r, l) => {
						const { slidesPerGroup: o, spaceBetween: d } = e.params,
							{ rows: c, fill: p } = e.params.grid;
						let u, h, f;
						if ('row' === p && o > 1) {
							const e = Math.floor(t / (o * c)),
								i = t - c * o * e,
								a = 0 === e ? o : Math.min(Math.ceil((r - e * c * o) / c), o);
							(f = Math.floor(i / a)),
								(h = i - f * a + e * o),
								(u = h + (f * s) / c),
								n.css({ '-webkit-order': u, order: u });
						} else
							'column' === p
								? ((h = Math.floor(t / c)),
								  (f = t - h * c),
								  (h > a || (h === a && f === c - 1)) &&
										((f += 1), f >= c && ((f = 0), (h += 1))))
								: ((f = Math.floor(t / i)), (h = t - f * i));
						n.css(l('margin-top'), 0 !== f ? d && `${d}px` : '');
					},
					updateWrapperSize: (t, i, a) => {
						const {
								spaceBetween: n,
								centeredSlides: r,
								roundLengths: l,
							} = e.params,
							{ rows: o } = e.params.grid;
						if (
							((e.virtualSize = (t + n) * s),
							(e.virtualSize = Math.ceil(e.virtualSize / o) - n),
							e.$wrapperEl.css({ [a('width')]: `${e.virtualSize + n}px` }),
							r)
						) {
							i.splice(0, i.length);
							const t = [];
							for (let s = 0; s < i.length; s += 1) {
								let a = i[s];
								l && (a = Math.floor(a)),
									i[s] < e.virtualSize + i[0] && t.push(a);
							}
							i.push(...t);
						}
					},
				});
		},
	];
	return H.use(R), H;
});
//# sourceMappingURL=swiper-bundle.min.js.map
