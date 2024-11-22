var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// deno:https://esm.sh/stable/react@18.3.1/denonext/react.mjs
var react_exports = {};
__export(react_exports, {
  Children: () => ae,
  Component: () => pe,
  Fragment: () => ye,
  Profiler: () => de,
  PureComponent: () => _e,
  StrictMode: () => me,
  Suspense: () => he,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ve,
  act: () => Se,
  cloneElement: () => Ee,
  createContext: () => Re,
  createElement: () => Ce,
  createFactory: () => ke,
  createRef: () => we,
  default: () => Ge,
  forwardRef: () => be,
  isValidElement: () => $e,
  lazy: () => xe,
  memo: () => Oe,
  startTransition: () => je,
  unstable_act: () => Ie,
  useCallback: () => ge,
  useContext: () => Pe,
  useDebugValue: () => Te,
  useDeferredValue: () => De,
  useEffect: () => Ve,
  useId: () => Le,
  useImperativeHandle: () => Ne,
  useInsertionEffect: () => Fe,
  useLayoutEffect: () => Ue,
  useMemo: () => qe,
  useReducer: () => Ae,
  useRef: () => Me,
  useState: () => ze,
  useSyncExternalStore: () => Be,
  useTransition: () => He,
  version: () => We
});
var B = Object.create;
var E = Object.defineProperty;
var H = Object.getOwnPropertyDescriptor;
var W = Object.getOwnPropertyNames;
var Y = Object.getPrototypeOf;
var G = Object.prototype.hasOwnProperty;
var x = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var J = (e, t) => {
  for (var r4 in t)
    E(e, r4, { get: t[r4], enumerable: true });
};
var S = (e, t, r4, u2) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o3 of W(t))
      !G.call(e, o3) && o3 !== r4 && E(e, o3, { get: () => t[o3], enumerable: !(u2 = H(t, o3)) || u2.enumerable });
  return e;
};
var y = (e, t, r4) => (S(e, t, "default"), r4 && S(r4, t, "default"));
var O = (e, t, r4) => (r4 = e != null ? B(Y(e)) : {}, S(t || !e || !e.__esModule ? E(r4, "default", { value: e, enumerable: true }) : r4, e));
var q = x((n2) => {
  "use strict";
  var _2 = Symbol.for("react.element"), K2 = Symbol.for("react.portal"), Q2 = Symbol.for("react.fragment"), X2 = Symbol.for("react.strict_mode"), Z3 = Symbol.for("react.profiler"), ee3 = Symbol.for("react.provider"), te3 = Symbol.for("react.context"), re3 = Symbol.for("react.forward_ref"), ne3 = Symbol.for("react.suspense"), oe3 = Symbol.for("react.memo"), ue2 = Symbol.for("react.lazy"), j2 = Symbol.iterator;
  function se2(e) {
    return e === null || typeof e != "object" ? null : (e = j2 && e[j2] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var P2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T3 = Object.assign, D2 = {};
  function d5(e, t, r4) {
    this.props = e, this.context = t, this.refs = D2, this.updater = r4 || P2;
  }
  d5.prototype.isReactComponent = {};
  d5.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  d5.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function V2() {
  }
  V2.prototype = d5.prototype;
  function C4(e, t, r4) {
    this.props = e, this.context = t, this.refs = D2, this.updater = r4 || P2;
  }
  var k2 = C4.prototype = new V2();
  k2.constructor = C4;
  T3(k2, d5.prototype);
  k2.isPureReactComponent = true;
  var I2 = Array.isArray, L = Object.prototype.hasOwnProperty, w3 = { current: null }, N3 = { key: true, ref: true, __self: true, __source: true };
  function F3(e, t, r4) {
    var u2, o3 = {}, c2 = null, f4 = null;
    if (t != null)
      for (u2 in t.ref !== void 0 && (f4 = t.ref), t.key !== void 0 && (c2 = "" + t.key), t)
        L.call(t, u2) && !N3.hasOwnProperty(u2) && (o3[u2] = t[u2]);
    var i = arguments.length - 2;
    if (i === 1)
      o3.children = r4;
    else if (1 < i) {
      for (var s3 = Array(i), a4 = 0; a4 < i; a4++)
        s3[a4] = arguments[a4 + 2];
      o3.children = s3;
    }
    if (e && e.defaultProps)
      for (u2 in i = e.defaultProps, i)
        o3[u2] === void 0 && (o3[u2] = i[u2]);
    return { $$typeof: _2, type: e, key: c2, ref: f4, props: o3, _owner: w3.current };
  }
  function ce2(e, t) {
    return { $$typeof: _2, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function b3(e) {
    return typeof e == "object" && e !== null && e.$$typeof === _2;
  }
  function ie3(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(r4) {
      return t[r4];
    });
  }
  var g4 = /\/+/g;
  function R2(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ie3("" + e.key) : t.toString(36);
  }
  function h3(e, t, r4, u2, o3) {
    var c2 = typeof e;
    (c2 === "undefined" || c2 === "boolean") && (e = null);
    var f4 = false;
    if (e === null)
      f4 = true;
    else
      switch (c2) {
        case "string":
        case "number":
          f4 = true;
          break;
        case "object":
          switch (e.$$typeof) {
            case _2:
            case K2:
              f4 = true;
          }
      }
    if (f4)
      return f4 = e, o3 = o3(f4), e = u2 === "" ? "." + R2(f4, 0) : u2, I2(o3) ? (r4 = "", e != null && (r4 = e.replace(g4, "$&/") + "/"), h3(o3, t, r4, "", function(a4) {
        return a4;
      })) : o3 != null && (b3(o3) && (o3 = ce2(o3, r4 + (!o3.key || f4 && f4.key === o3.key ? "" : ("" + o3.key).replace(g4, "$&/") + "/") + e)), t.push(o3)), 1;
    if (f4 = 0, u2 = u2 === "" ? "." : u2 + ":", I2(e))
      for (var i = 0; i < e.length; i++) {
        c2 = e[i];
        var s3 = u2 + R2(c2, i);
        f4 += h3(c2, t, r4, s3, o3);
      }
    else if (s3 = se2(e), typeof s3 == "function")
      for (e = s3.call(e), i = 0; !(c2 = e.next()).done; )
        c2 = c2.value, s3 = u2 + R2(c2, i++), f4 += h3(c2, t, r4, s3, o3);
    else if (c2 === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return f4;
  }
  function m2(e, t, r4) {
    if (e == null)
      return e;
    var u2 = [], o3 = 0;
    return h3(e, u2, "", "", function(c2) {
      return t.call(r4, c2, o3++);
    }), u2;
  }
  function fe3(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(r4) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r4);
      }, function(r4) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r4);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1)
      return e._result.default;
    throw e._result;
  }
  var l3 = { current: null }, v3 = { transition: null }, le3 = { ReactCurrentDispatcher: l3, ReactCurrentBatchConfig: v3, ReactCurrentOwner: w3 };
  function U4() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  n2.Children = { map: m2, forEach: function(e, t, r4) {
    m2(e, function() {
      t.apply(this, arguments);
    }, r4);
  }, count: function(e) {
    var t = 0;
    return m2(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return m2(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!b3(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  n2.Component = d5;
  n2.Fragment = Q2;
  n2.Profiler = Z3;
  n2.PureComponent = C4;
  n2.StrictMode = X2;
  n2.Suspense = ne3;
  n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le3;
  n2.act = U4;
  n2.cloneElement = function(e, t, r4) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var u2 = T3({}, e.props), o3 = e.key, c2 = e.ref, f4 = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (c2 = t.ref, f4 = w3.current), t.key !== void 0 && (o3 = "" + t.key), e.type && e.type.defaultProps)
        var i = e.type.defaultProps;
      for (s3 in t)
        L.call(t, s3) && !N3.hasOwnProperty(s3) && (u2[s3] = t[s3] === void 0 && i !== void 0 ? i[s3] : t[s3]);
    }
    var s3 = arguments.length - 2;
    if (s3 === 1)
      u2.children = r4;
    else if (1 < s3) {
      i = Array(s3);
      for (var a4 = 0; a4 < s3; a4++)
        i[a4] = arguments[a4 + 2];
      u2.children = i;
    }
    return { $$typeof: _2, type: e.type, key: o3, ref: c2, props: u2, _owner: f4 };
  };
  n2.createContext = function(e) {
    return e = { $$typeof: te3, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ee3, _context: e }, e.Consumer = e;
  };
  n2.createElement = F3;
  n2.createFactory = function(e) {
    var t = F3.bind(null, e);
    return t.type = e, t;
  };
  n2.createRef = function() {
    return { current: null };
  };
  n2.forwardRef = function(e) {
    return { $$typeof: re3, render: e };
  };
  n2.isValidElement = b3;
  n2.lazy = function(e) {
    return { $$typeof: ue2, _payload: { _status: -1, _result: e }, _init: fe3 };
  };
  n2.memo = function(e, t) {
    return { $$typeof: oe3, type: e, compare: t === void 0 ? null : t };
  };
  n2.startTransition = function(e) {
    var t = v3.transition;
    v3.transition = {};
    try {
      e();
    } finally {
      v3.transition = t;
    }
  };
  n2.unstable_act = U4;
  n2.useCallback = function(e, t) {
    return l3.current.useCallback(e, t);
  };
  n2.useContext = function(e) {
    return l3.current.useContext(e);
  };
  n2.useDebugValue = function() {
  };
  n2.useDeferredValue = function(e) {
    return l3.current.useDeferredValue(e);
  };
  n2.useEffect = function(e, t) {
    return l3.current.useEffect(e, t);
  };
  n2.useId = function() {
    return l3.current.useId();
  };
  n2.useImperativeHandle = function(e, t, r4) {
    return l3.current.useImperativeHandle(e, t, r4);
  };
  n2.useInsertionEffect = function(e, t) {
    return l3.current.useInsertionEffect(e, t);
  };
  n2.useLayoutEffect = function(e, t) {
    return l3.current.useLayoutEffect(e, t);
  };
  n2.useMemo = function(e, t) {
    return l3.current.useMemo(e, t);
  };
  n2.useReducer = function(e, t, r4) {
    return l3.current.useReducer(e, t, r4);
  };
  n2.useRef = function(e) {
    return l3.current.useRef(e);
  };
  n2.useState = function(e) {
    return l3.current.useState(e);
  };
  n2.useSyncExternalStore = function(e, t, r4) {
    return l3.current.useSyncExternalStore(e, t, r4);
  };
  n2.useTransition = function() {
    return l3.current.useTransition();
  };
  n2.version = "18.3.1";
});
var $ = x((Qe, A3) => {
  "use strict";
  A3.exports = q();
});
var p = {};
J(p, { Children: () => ae, Component: () => pe, Fragment: () => ye, Profiler: () => de, PureComponent: () => _e, StrictMode: () => me, Suspense: () => he, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ve, act: () => Se, cloneElement: () => Ee, createContext: () => Re, createElement: () => Ce, createFactory: () => ke, createRef: () => we, default: () => Ge, forwardRef: () => be, isValidElement: () => $e, lazy: () => xe, memo: () => Oe, startTransition: () => je, unstable_act: () => Ie, useCallback: () => ge, useContext: () => Pe, useDebugValue: () => Te, useDeferredValue: () => De, useEffect: () => Ve, useId: () => Le, useImperativeHandle: () => Ne, useInsertionEffect: () => Fe, useLayoutEffect: () => Ue, useMemo: () => qe, useReducer: () => Ae, useRef: () => Me, useState: () => ze, useSyncExternalStore: () => Be, useTransition: () => He, version: () => We });
var z = O($());
y(p, O($()));
var { Children: ae, Component: pe, Fragment: ye, Profiler: de, PureComponent: _e, StrictMode: me, Suspense: he, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ve, act: Se, cloneElement: Ee, createContext: Re, createElement: Ce, createFactory: ke, createRef: we, forwardRef: be, isValidElement: $e, lazy: xe, memo: Oe, startTransition: je, unstable_act: Ie, useCallback: ge, useContext: Pe, useDebugValue: Te, useDeferredValue: De, useEffect: Ve, useId: Le, useImperativeHandle: Ne, useInsertionEffect: Fe, useLayoutEffect: Ue, useMemo: qe, useReducer: Ae, useRef: Me, useState: ze, useSyncExternalStore: Be, useTransition: He, version: We } = z;
var { default: M, ...Ye } = z;
var Ge = M !== void 0 ? M : Ye;

// deno:https://esm.sh/v135/react-dom@18.3.1/denonext/react-dom.mjs
var react_dom_exports = {};
__export(react_dom_exports, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Lf,
  createPortal: () => Tf,
  createRoot: () => Mf,
  default: () => Hf,
  findDOMNode: () => Df,
  flushSync: () => Of,
  hydrate: () => Rf,
  hydrateRoot: () => Ff,
  render: () => If,
  unmountComponentAtNode: () => Uf,
  unstable_batchedUpdates: () => jf,
  unstable_renderSubtreeIntoContainer: () => Vf,
  version: () => Af
});

// deno:https://esm.sh/v135/scheduler@0.23.2/denonext/scheduler.mjs
var scheduler_exports = {};
__export(scheduler_exports, {
  default: () => Ee2,
  unstable_IdlePriority: () => oe,
  unstable_ImmediatePriority: () => se,
  unstable_LowPriority: () => ce,
  unstable_NormalPriority: () => fe,
  unstable_Profiling: () => be2,
  unstable_UserBlockingPriority: () => _e2,
  unstable_cancelCallback: () => de2,
  unstable_continueExecution: () => pe2,
  unstable_forceFrameRate: () => ve2,
  unstable_getCurrentPriorityLevel: () => ye2,
  unstable_getFirstCallbackNode: () => me2,
  unstable_next: () => ge2,
  unstable_now: () => ae2,
  unstable_pauseExecution: () => he2,
  unstable_requestPaint: () => ke2,
  unstable_runWithPriority: () => Pe2,
  unstable_scheduleCallback: () => we2,
  unstable_shouldYield: () => xe2,
  unstable_wrapCallback: () => Ie2
});
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);
var ee = Object.create;
var T = Object.defineProperty;
var ne = Object.getOwnPropertyDescriptor;
var te = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf;
var le = Object.prototype.hasOwnProperty;
var W2 = (e, n2) => () => (n2 || e((n2 = { exports: {} }).exports, n2), n2.exports);
var ie = (e, n2) => {
  for (var t in n2)
    T(e, t, { get: n2[t], enumerable: true });
};
var E2 = (e, n2, t, l3) => {
  if (n2 && typeof n2 == "object" || typeof n2 == "function")
    for (let i of te(n2))
      !le.call(e, i) && i !== t && T(e, i, { get: () => n2[i], enumerable: !(l3 = ne(n2, i)) || l3.enumerable });
  return e;
};
var d = (e, n2, t) => (E2(e, n2, "default"), t && E2(t, n2, "default"));
var Y2 = (e, n2, t) => (t = e != null ? ee(re(e)) : {}, E2(n2 || !e || !e.__esModule ? T(t, "default", { value: e, enumerable: true }) : t, e));
var U = W2((r4) => {
  "use strict";
  function M3(e, n2) {
    var t = e.length;
    e.push(n2);
    e:
      for (; 0 < t; ) {
        var l3 = t - 1 >>> 1, i = e[l3];
        if (0 < k2(i, n2))
          e[l3] = n2, e[t] = i, t = l3;
        else
          break e;
      }
  }
  function o3(e) {
    return e.length === 0 ? null : e[0];
  }
  function w3(e) {
    if (e.length === 0)
      return null;
    var n2 = e[0], t = e.pop();
    if (t !== n2) {
      e[0] = t;
      e:
        for (var l3 = 0, i = e.length, g4 = i >>> 1; l3 < g4; ) {
          var b3 = 2 * (l3 + 1) - 1, C4 = e[b3], _2 = b3 + 1, h3 = e[_2];
          if (0 > k2(C4, t))
            _2 < i && 0 > k2(h3, C4) ? (e[l3] = h3, e[_2] = t, l3 = _2) : (e[l3] = C4, e[b3] = t, l3 = b3);
          else if (_2 < i && 0 > k2(h3, t))
            e[l3] = h3, e[_2] = t, l3 = _2;
          else
            break e;
        }
    }
    return n2;
  }
  function k2(e, n2) {
    var t = e.sortIndex - n2.sortIndex;
    return t !== 0 ? t : e.id - n2.id;
  }
  typeof performance == "object" && typeof performance.now == "function" ? (z3 = performance, r4.unstable_now = function() {
    return z3.now();
  }) : (L = Date, A3 = L.now(), r4.unstable_now = function() {
    return L.now() - A3;
  });
  var z3, L, A3, s3 = [], c2 = [], ue2 = 1, a4 = null, u2 = 3, x5 = false, p4 = false, y3 = false, J3 = typeof setTimeout == "function" ? setTimeout : null, K2 = typeof clearTimeout == "function" ? clearTimeout : null, G3 = typeof __setImmediate$ < "u" ? __setImmediate$ : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function j2(e) {
    for (var n2 = o3(c2); n2 !== null; ) {
      if (n2.callback === null)
        w3(c2);
      else if (n2.startTime <= e)
        w3(c2), n2.sortIndex = n2.expirationTime, M3(s3, n2);
      else
        break;
      n2 = o3(c2);
    }
  }
  function R2(e) {
    if (y3 = false, j2(e), !p4)
      if (o3(s3) !== null)
        p4 = true, D2(B4);
      else {
        var n2 = o3(c2);
        n2 !== null && q3(R2, n2.startTime - e);
      }
  }
  function B4(e, n2) {
    p4 = false, y3 && (y3 = false, K2(m2), m2 = -1), x5 = true;
    var t = u2;
    try {
      for (j2(n2), a4 = o3(s3); a4 !== null && (!(a4.expirationTime > n2) || e && !V2()); ) {
        var l3 = a4.callback;
        if (typeof l3 == "function") {
          a4.callback = null, u2 = a4.priorityLevel;
          var i = l3(a4.expirationTime <= n2);
          n2 = r4.unstable_now(), typeof i == "function" ? a4.callback = i : a4 === o3(s3) && w3(s3), j2(n2);
        } else
          w3(s3);
        a4 = o3(s3);
      }
      if (a4 !== null)
        var g4 = true;
      else {
        var b3 = o3(c2);
        b3 !== null && q3(R2, b3.startTime - n2), g4 = false;
      }
      return g4;
    } finally {
      a4 = null, u2 = t, x5 = false;
    }
  }
  var I2 = false, P2 = null, m2 = -1, Q2 = 5, S3 = -1;
  function V2() {
    return !(r4.unstable_now() - S3 < Q2);
  }
  function N3() {
    if (P2 !== null) {
      var e = r4.unstable_now();
      S3 = e;
      var n2 = true;
      try {
        n2 = P2(true, e);
      } finally {
        n2 ? v3() : (I2 = false, P2 = null);
      }
    } else
      I2 = false;
  }
  var v3;
  typeof G3 == "function" ? v3 = function() {
    G3(N3);
  } : typeof MessageChannel < "u" ? (F3 = new MessageChannel(), H4 = F3.port2, F3.port1.onmessage = N3, v3 = function() {
    H4.postMessage(null);
  }) : v3 = function() {
    J3(N3, 0);
  };
  var F3, H4;
  function D2(e) {
    P2 = e, I2 || (I2 = true, v3());
  }
  function q3(e, n2) {
    m2 = J3(function() {
      e(r4.unstable_now());
    }, n2);
  }
  r4.unstable_IdlePriority = 5;
  r4.unstable_ImmediatePriority = 1;
  r4.unstable_LowPriority = 4;
  r4.unstable_NormalPriority = 3;
  r4.unstable_Profiling = null;
  r4.unstable_UserBlockingPriority = 2;
  r4.unstable_cancelCallback = function(e) {
    e.callback = null;
  };
  r4.unstable_continueExecution = function() {
    p4 || x5 || (p4 = true, D2(B4));
  };
  r4.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q2 = 0 < e ? Math.floor(1e3 / e) : 5;
  };
  r4.unstable_getCurrentPriorityLevel = function() {
    return u2;
  };
  r4.unstable_getFirstCallbackNode = function() {
    return o3(s3);
  };
  r4.unstable_next = function(e) {
    switch (u2) {
      case 1:
      case 2:
      case 3:
        var n2 = 3;
        break;
      default:
        n2 = u2;
    }
    var t = u2;
    u2 = n2;
    try {
      return e();
    } finally {
      u2 = t;
    }
  };
  r4.unstable_pauseExecution = function() {
  };
  r4.unstable_requestPaint = function() {
  };
  r4.unstable_runWithPriority = function(e, n2) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var t = u2;
    u2 = e;
    try {
      return n2();
    } finally {
      u2 = t;
    }
  };
  r4.unstable_scheduleCallback = function(e, n2, t) {
    var l3 = r4.unstable_now();
    switch (typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l3 + t : l3) : t = l3, e) {
      case 1:
        var i = -1;
        break;
      case 2:
        i = 250;
        break;
      case 5:
        i = 1073741823;
        break;
      case 4:
        i = 1e4;
        break;
      default:
        i = 5e3;
    }
    return i = t + i, e = { id: ue2++, callback: n2, priorityLevel: e, startTime: t, expirationTime: i, sortIndex: -1 }, t > l3 ? (e.sortIndex = t, M3(c2, e), o3(s3) === null && e === o3(c2) && (y3 ? (K2(m2), m2 = -1) : y3 = true, q3(R2, t - l3))) : (e.sortIndex = i, M3(s3, e), p4 || x5 || (p4 = true, D2(B4))), e;
  };
  r4.unstable_shouldYield = V2;
  r4.unstable_wrapCallback = function(e) {
    var n2 = u2;
    return function() {
      var t = u2;
      u2 = n2;
      try {
        return e.apply(this, arguments);
      } finally {
        u2 = t;
      }
    };
  };
});
var O2 = W2((Ne2, X2) => {
  "use strict";
  X2.exports = U();
});
var f = {};
ie(f, { default: () => Ee2, unstable_IdlePriority: () => oe, unstable_ImmediatePriority: () => se, unstable_LowPriority: () => ce, unstable_NormalPriority: () => fe, unstable_Profiling: () => be2, unstable_UserBlockingPriority: () => _e2, unstable_cancelCallback: () => de2, unstable_continueExecution: () => pe2, unstable_forceFrameRate: () => ve2, unstable_getCurrentPriorityLevel: () => ye2, unstable_getFirstCallbackNode: () => me2, unstable_next: () => ge2, unstable_now: () => ae2, unstable_pauseExecution: () => he2, unstable_requestPaint: () => ke2, unstable_runWithPriority: () => Pe2, unstable_scheduleCallback: () => we2, unstable_shouldYield: () => xe2, unstable_wrapCallback: () => Ie2 });
var $2 = Y2(O2());
d(f, Y2(O2()));
var { unstable_now: ae2, unstable_IdlePriority: oe, unstable_ImmediatePriority: se, unstable_LowPriority: ce, unstable_NormalPriority: fe, unstable_Profiling: be2, unstable_UserBlockingPriority: _e2, unstable_cancelCallback: de2, unstable_continueExecution: pe2, unstable_forceFrameRate: ve2, unstable_getCurrentPriorityLevel: ye2, unstable_getFirstCallbackNode: me2, unstable_next: ge2, unstable_pauseExecution: he2, unstable_requestPaint: ke2, unstable_runWithPriority: Pe2, unstable_scheduleCallback: we2, unstable_shouldYield: xe2, unstable_wrapCallback: Ie2 } = $2;
var { default: Z, ...Ce2 } = $2;
var Ee2 = Z !== void 0 ? Z : Ce2;

// deno:https://esm.sh/v135/react-dom@18.3.1/denonext/react-dom.mjs
var require2 = (n2) => {
  const e = (m2) => typeof m2.default < "u" ? m2.default : m2, c2 = (m2) => Object.assign({ __esModule: true }, m2);
  switch (n2) {
    case "react":
      return e(react_exports);
    case "scheduler":
      return e(scheduler_exports);
    default:
      throw new Error('module "' + n2 + '" not found');
  }
};
var ka = Object.create;
var tl = Object.defineProperty;
var Ea = Object.getOwnPropertyDescriptor;
var Ca = Object.getOwnPropertyNames;
var xa = Object.getPrototypeOf;
var Na = Object.prototype.hasOwnProperty;
var su = ((e) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e, { get: (n2, t) => (typeof require2 < "u" ? require2 : n2)[t] }) : e)(function(e) {
  if (typeof require2 < "u")
    return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var au = (e, n2) => () => (n2 || e((n2 = { exports: {} }).exports, n2), n2.exports);
var _a = (e, n2) => {
  for (var t in n2)
    tl(e, t, { get: n2[t], enumerable: true });
};
var nl = (e, n2, t, r4) => {
  if (n2 && typeof n2 == "object" || typeof n2 == "function")
    for (let l3 of Ca(n2))
      !Na.call(e, l3) && l3 !== t && tl(e, l3, { get: () => n2[l3], enumerable: !(r4 = Ea(n2, l3)) || r4.enumerable });
  return e;
};
var an = (e, n2, t) => (nl(e, n2, "default"), t && nl(t, n2, "default"));
var cu = (e, n2, t) => (t = e != null ? ka(xa(e)) : {}, nl(n2 || !e || !e.__esModule ? tl(t, "default", { value: e, enumerable: true }) : t, e));
var ha = au((fe3) => {
  "use strict";
  var za = su("react"), ae4 = su("scheduler");
  function v3(e) {
    for (var n2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n2 += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var go = /* @__PURE__ */ new Set(), St = {};
  function En(e, n2) {
    Qn(e, n2), Qn(e + "Capture", n2);
  }
  function Qn(e, n2) {
    for (St[e] = n2, e = 0; e < n2.length; e++)
      go.add(n2[e]);
  }
  var Fe2 = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nl = Object.prototype.hasOwnProperty, Pa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fu = {}, du = {};
  function La(e) {
    return Nl.call(du, e) ? true : Nl.call(fu, e) ? false : Pa.test(e) ? du[e] = true : (fu[e] = true, false);
  }
  function Ta(e, n2, t, r4) {
    if (t !== null && t.type === 0)
      return false;
    switch (typeof n2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r4 ? false : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function Ma(e, n2, t, r4) {
    if (n2 === null || typeof n2 > "u" || Ta(e, n2, t, r4))
      return true;
    if (r4)
      return false;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n2;
        case 4:
          return n2 === false;
        case 5:
          return isNaN(n2);
        case 6:
          return isNaN(n2) || 1 > n2;
      }
    return false;
  }
  function ee3(e, n2, t, r4, l3, i, u2) {
    this.acceptsBooleans = n2 === 2 || n2 === 3 || n2 === 4, this.attributeName = r4, this.attributeNamespace = l3, this.mustUseProperty = t, this.propertyName = e, this.type = n2, this.sanitizeURL = i, this.removeEmptyString = u2;
  }
  var Y4 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Y4[e] = new ee3(e, 0, false, e, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n2 = e[0];
    Y4[n2] = new ee3(n2, 1, false, e[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Y4[e] = new ee3(e, 2, false, e.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Y4[e] = new ee3(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Y4[e] = new ee3(e, 3, false, e.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Y4[e] = new ee3(e, 3, true, e, null, false, false);
  });
  ["capture", "download"].forEach(function(e) {
    Y4[e] = new ee3(e, 4, false, e, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    Y4[e] = new ee3(e, 6, false, e, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(e) {
    Y4[e] = new ee3(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var yi = /[\-:]([a-z])/g;
  function gi(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n2 = e.replace(yi, gi);
    Y4[n2] = new ee3(n2, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n2 = e.replace(yi, gi);
    Y4[n2] = new ee3(n2, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n2 = e.replace(yi, gi);
    Y4[n2] = new ee3(n2, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    Y4[e] = new ee3(e, 1, false, e.toLowerCase(), null, false, false);
  });
  Y4.xlinkHref = new ee3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    Y4[e] = new ee3(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function wi(e, n2, t, r4) {
    var l3 = Y4.hasOwnProperty(n2) ? Y4[n2] : null;
    (l3 !== null ? l3.type !== 0 : r4 || !(2 < n2.length) || n2[0] !== "o" && n2[0] !== "O" || n2[1] !== "n" && n2[1] !== "N") && (Ma(n2, t, l3, r4) && (t = null), r4 || l3 === null ? La(n2) && (t === null ? e.removeAttribute(n2) : e.setAttribute(n2, "" + t)) : l3.mustUseProperty ? e[l3.propertyName] = t === null ? l3.type === 3 ? false : "" : t : (n2 = l3.attributeName, r4 = l3.attributeNamespace, t === null ? e.removeAttribute(n2) : (l3 = l3.type, t = l3 === 3 || l3 === 4 && t === true ? "" : "" + t, r4 ? e.setAttributeNS(r4, n2, t) : e.setAttribute(n2, t))));
  }
  var Ve2 = za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Bt = Symbol.for("react.element"), _n = Symbol.for("react.portal"), zn = Symbol.for("react.fragment"), Si = Symbol.for("react.strict_mode"), _l = Symbol.for("react.profiler"), wo = Symbol.for("react.provider"), So = Symbol.for("react.context"), ki = Symbol.for("react.forward_ref"), zl = Symbol.for("react.suspense"), Pl = Symbol.for("react.suspense_list"), Ei = Symbol.for("react.memo"), He2 = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  Symbol.for("react.debug_trace_mode");
  var ko = Symbol.for("react.offscreen");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.cache");
  Symbol.for("react.tracing_marker");
  var pu = Symbol.iterator;
  function bn(e) {
    return e === null || typeof e != "object" ? null : (e = pu && e[pu] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F3 = Object.assign, rl;
  function ot(e) {
    if (rl === void 0)
      try {
        throw Error();
      } catch (t) {
        var n2 = t.stack.trim().match(/\n( *(at )?)/);
        rl = n2 && n2[1] || "";
      }
    return `
` + rl + e;
  }
  var ll = false;
  function il(e, n2) {
    if (!e || ll)
      return "";
    ll = true;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n2)
        if (n2 = function() {
          throw Error();
        }, Object.defineProperty(n2.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n2, []);
          } catch (d5) {
            var r4 = d5;
          }
          Reflect.construct(e, [], n2);
        } else {
          try {
            n2.call();
          } catch (d5) {
            r4 = d5;
          }
          e.call(n2.prototype);
        }
      else {
        try {
          throw Error();
        } catch (d5) {
          r4 = d5;
        }
        e();
      }
    } catch (d5) {
      if (d5 && r4 && typeof d5.stack == "string") {
        for (var l3 = d5.stack.split(`
`), i = r4.stack.split(`
`), u2 = l3.length - 1, o3 = i.length - 1; 1 <= u2 && 0 <= o3 && l3[u2] !== i[o3]; )
          o3--;
        for (; 1 <= u2 && 0 <= o3; u2--, o3--)
          if (l3[u2] !== i[o3]) {
            if (u2 !== 1 || o3 !== 1)
              do
                if (u2--, o3--, 0 > o3 || l3[u2] !== i[o3]) {
                  var s3 = `
` + l3[u2].replace(" at new ", " at ");
                  return e.displayName && s3.includes("<anonymous>") && (s3 = s3.replace("<anonymous>", e.displayName)), s3;
                }
              while (1 <= u2 && 0 <= o3);
            break;
          }
      }
    } finally {
      ll = false, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? ot(e) : "";
  }
  function Da(e) {
    switch (e.tag) {
      case 5:
        return ot(e.type);
      case 16:
        return ot("Lazy");
      case 13:
        return ot("Suspense");
      case 19:
        return ot("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = il(e.type, false), e;
      case 11:
        return e = il(e.type.render, false), e;
      case 1:
        return e = il(e.type, true), e;
      default:
        return "";
    }
  }
  function Ll(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case zn:
        return "Fragment";
      case _n:
        return "Portal";
      case _l:
        return "Profiler";
      case Si:
        return "StrictMode";
      case zl:
        return "Suspense";
      case Pl:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case So:
          return (e.displayName || "Context") + ".Consumer";
        case wo:
          return (e._context.displayName || "Context") + ".Provider";
        case ki:
          var n2 = e.render;
          return e = e.displayName, e || (e = n2.displayName || n2.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ei:
          return n2 = e.displayName || null, n2 !== null ? n2 : Ll(e.type) || "Memo";
        case He2:
          n2 = e._payload, e = e._init;
          try {
            return Ll(e(n2));
          } catch {
          }
      }
    return null;
  }
  function Oa(e) {
    var n2 = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n2.displayName || "Context") + ".Consumer";
      case 10:
        return (n2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n2.render, e = e.displayName || e.name || "", n2.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ll(n2);
      case 8:
        return n2 === Si ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n2 == "function")
          return n2.displayName || n2.name || null;
        if (typeof n2 == "string")
          return n2;
    }
    return null;
  }
  function tn(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Eo(e) {
    var n2 = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n2 === "checkbox" || n2 === "radio");
  }
  function Ra(e) {
    var n2 = Eo(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n2), r4 = "" + e[n2];
    if (!e.hasOwnProperty(n2) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l3 = t.get, i = t.set;
      return Object.defineProperty(e, n2, { configurable: true, get: function() {
        return l3.call(this);
      }, set: function(u2) {
        r4 = "" + u2, i.call(this, u2);
      } }), Object.defineProperty(e, n2, { enumerable: t.enumerable }), { getValue: function() {
        return r4;
      }, setValue: function(u2) {
        r4 = "" + u2;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n2];
      } };
    }
  }
  function Ht(e) {
    e._valueTracker || (e._valueTracker = Ra(e));
  }
  function Co(e) {
    if (!e)
      return false;
    var n2 = e._valueTracker;
    if (!n2)
      return true;
    var t = n2.getValue(), r4 = "";
    return e && (r4 = Eo(e) ? e.checked ? "true" : "false" : e.value), e = r4, e !== t ? (n2.setValue(e), true) : false;
  }
  function vr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, n2) {
    var t = n2.checked;
    return F3({}, n2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function mu(e, n2) {
    var t = n2.defaultValue == null ? "" : n2.defaultValue, r4 = n2.checked != null ? n2.checked : n2.defaultChecked;
    t = tn(n2.value != null ? n2.value : t), e._wrapperState = { initialChecked: r4, initialValue: t, controlled: n2.type === "checkbox" || n2.type === "radio" ? n2.checked != null : n2.value != null };
  }
  function xo(e, n2) {
    n2 = n2.checked, n2 != null && wi(e, "checked", n2, false);
  }
  function Ml(e, n2) {
    xo(e, n2);
    var t = tn(n2.value), r4 = n2.type;
    if (t != null)
      r4 === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r4 === "submit" || r4 === "reset") {
      e.removeAttribute("value");
      return;
    }
    n2.hasOwnProperty("value") ? Dl(e, n2.type, t) : n2.hasOwnProperty("defaultValue") && Dl(e, n2.type, tn(n2.defaultValue)), n2.checked == null && n2.defaultChecked != null && (e.defaultChecked = !!n2.defaultChecked);
  }
  function hu(e, n2, t) {
    if (n2.hasOwnProperty("value") || n2.hasOwnProperty("defaultValue")) {
      var r4 = n2.type;
      if (!(r4 !== "submit" && r4 !== "reset" || n2.value !== void 0 && n2.value !== null))
        return;
      n2 = "" + e._wrapperState.initialValue, t || n2 === e.value || (e.value = n2), e.defaultValue = n2;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Dl(e, n2, t) {
    (n2 !== "number" || vr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var st = Array.isArray;
  function jn(e, n2, t, r4) {
    if (e = e.options, n2) {
      n2 = {};
      for (var l3 = 0; l3 < t.length; l3++)
        n2["$" + t[l3]] = true;
      for (t = 0; t < e.length; t++)
        l3 = n2.hasOwnProperty("$" + e[t].value), e[t].selected !== l3 && (e[t].selected = l3), l3 && r4 && (e[t].defaultSelected = true);
    } else {
      for (t = "" + tn(t), n2 = null, l3 = 0; l3 < e.length; l3++) {
        if (e[l3].value === t) {
          e[l3].selected = true, r4 && (e[l3].defaultSelected = true);
          return;
        }
        n2 !== null || e[l3].disabled || (n2 = e[l3]);
      }
      n2 !== null && (n2.selected = true);
    }
  }
  function Ol(e, n2) {
    if (n2.dangerouslySetInnerHTML != null)
      throw Error(v3(91));
    return F3({}, n2, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function vu(e, n2) {
    var t = n2.value;
    if (t == null) {
      if (t = n2.children, n2 = n2.defaultValue, t != null) {
        if (n2 != null)
          throw Error(v3(92));
        if (st(t)) {
          if (1 < t.length)
            throw Error(v3(93));
          t = t[0];
        }
        n2 = t;
      }
      n2 == null && (n2 = ""), t = n2;
    }
    e._wrapperState = { initialValue: tn(t) };
  }
  function No(e, n2) {
    var t = tn(n2.value), r4 = tn(n2.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n2.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r4 != null && (e.defaultValue = "" + r4);
  }
  function yu(e) {
    var n2 = e.textContent;
    n2 === e._wrapperState.initialValue && n2 !== "" && n2 !== null && (e.value = n2);
  }
  function _o(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rl(e, n2) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? _o(n2) : e === "http://www.w3.org/2000/svg" && n2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Wt, zo = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n2, t, r4, l3) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n2, t, r4, l3);
      });
    } : e;
  }(function(e, n2) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n2;
    else {
      for (Wt = Wt || document.createElement("div"), Wt.innerHTML = "<svg>" + n2.valueOf().toString() + "</svg>", n2 = Wt.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n2.firstChild; )
        e.appendChild(n2.firstChild);
    }
  });
  function kt(e, n2) {
    if (n2) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n2;
        return;
      }
    }
    e.textContent = n2;
  }
  var ft = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Fa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ft).forEach(function(e) {
    Fa.forEach(function(n2) {
      n2 = n2 + e.charAt(0).toUpperCase() + e.substring(1), ft[n2] = ft[e];
    });
  });
  function Po(e, n2, t) {
    return n2 == null || typeof n2 == "boolean" || n2 === "" ? "" : t || typeof n2 != "number" || n2 === 0 || ft.hasOwnProperty(e) && ft[e] ? ("" + n2).trim() : n2 + "px";
  }
  function Lo(e, n2) {
    e = e.style;
    for (var t in n2)
      if (n2.hasOwnProperty(t)) {
        var r4 = t.indexOf("--") === 0, l3 = Po(t, n2[t], r4);
        t === "float" && (t = "cssFloat"), r4 ? e.setProperty(t, l3) : e[t] = l3;
      }
  }
  var Ia = F3({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function Fl(e, n2) {
    if (n2) {
      if (Ia[e] && (n2.children != null || n2.dangerouslySetInnerHTML != null))
        throw Error(v3(137, e));
      if (n2.dangerouslySetInnerHTML != null) {
        if (n2.children != null)
          throw Error(v3(60));
        if (typeof n2.dangerouslySetInnerHTML != "object" || !("__html" in n2.dangerouslySetInnerHTML))
          throw Error(v3(61));
      }
      if (n2.style != null && typeof n2.style != "object")
        throw Error(v3(62));
    }
  }
  function Il(e, n2) {
    if (e.indexOf("-") === -1)
      return typeof n2.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Ul = null;
  function Ci(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var jl = null, Vn = null, An = null;
  function gu(e) {
    if (e = Vt(e)) {
      if (typeof jl != "function")
        throw Error(v3(280));
      var n2 = e.stateNode;
      n2 && (n2 = Qr(n2), jl(e.stateNode, e.type, n2));
    }
  }
  function To(e) {
    Vn ? An ? An.push(e) : An = [e] : Vn = e;
  }
  function Mo() {
    if (Vn) {
      var e = Vn, n2 = An;
      if (An = Vn = null, gu(e), n2)
        for (e = 0; e < n2.length; e++)
          gu(n2[e]);
    }
  }
  function Do(e, n2) {
    return e(n2);
  }
  function Oo() {
  }
  var ul = false;
  function Ro(e, n2, t) {
    if (ul)
      return e(n2, t);
    ul = true;
    try {
      return Do(e, n2, t);
    } finally {
      ul = false, (Vn !== null || An !== null) && (Oo(), Mo());
    }
  }
  function Et(e, n2) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r4 = Qr(t);
    if (r4 === null)
      return null;
    t = r4[n2];
    e:
      switch (n2) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r4 = !r4.disabled) || (e = e.type, r4 = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r4;
          break e;
        default:
          e = false;
      }
    if (e)
      return null;
    if (t && typeof t != "function")
      throw Error(v3(231, n2, typeof t));
    return t;
  }
  var Vl = false;
  if (Fe2)
    try {
      xn = {}, Object.defineProperty(xn, "passive", { get: function() {
        Vl = true;
      } }), window.addEventListener("test", xn, xn), window.removeEventListener("test", xn, xn);
    } catch {
      Vl = false;
    }
  var xn;
  function Ua(e, n2, t, r4, l3, i, u2, o3, s3) {
    var d5 = Array.prototype.slice.call(arguments, 3);
    try {
      n2.apply(t, d5);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var dt = false, yr = null, gr = false, Al = null, ja = { onError: function(e) {
    dt = true, yr = e;
  } };
  function Va(e, n2, t, r4, l3, i, u2, o3, s3) {
    dt = false, yr = null, Ua.apply(ja, arguments);
  }
  function Aa(e, n2, t, r4, l3, i, u2, o3, s3) {
    if (Va.apply(this, arguments), dt) {
      if (dt) {
        var d5 = yr;
        dt = false, yr = null;
      } else
        throw Error(v3(198));
      gr || (gr = true, Al = d5);
    }
  }
  function Cn(e) {
    var n2 = e, t = e;
    if (e.alternate)
      for (; n2.return; )
        n2 = n2.return;
    else {
      e = n2;
      do
        n2 = e, n2.flags & 4098 && (t = n2.return), e = n2.return;
      while (e);
    }
    return n2.tag === 3 ? t : null;
  }
  function Fo(e) {
    if (e.tag === 13) {
      var n2 = e.memoizedState;
      if (n2 === null && (e = e.alternate, e !== null && (n2 = e.memoizedState)), n2 !== null)
        return n2.dehydrated;
    }
    return null;
  }
  function wu(e) {
    if (Cn(e) !== e)
      throw Error(v3(188));
  }
  function Ba(e) {
    var n2 = e.alternate;
    if (!n2) {
      if (n2 = Cn(e), n2 === null)
        throw Error(v3(188));
      return n2 !== e ? null : e;
    }
    for (var t = e, r4 = n2; ; ) {
      var l3 = t.return;
      if (l3 === null)
        break;
      var i = l3.alternate;
      if (i === null) {
        if (r4 = l3.return, r4 !== null) {
          t = r4;
          continue;
        }
        break;
      }
      if (l3.child === i.child) {
        for (i = l3.child; i; ) {
          if (i === t)
            return wu(l3), e;
          if (i === r4)
            return wu(l3), n2;
          i = i.sibling;
        }
        throw Error(v3(188));
      }
      if (t.return !== r4.return)
        t = l3, r4 = i;
      else {
        for (var u2 = false, o3 = l3.child; o3; ) {
          if (o3 === t) {
            u2 = true, t = l3, r4 = i;
            break;
          }
          if (o3 === r4) {
            u2 = true, r4 = l3, t = i;
            break;
          }
          o3 = o3.sibling;
        }
        if (!u2) {
          for (o3 = i.child; o3; ) {
            if (o3 === t) {
              u2 = true, t = i, r4 = l3;
              break;
            }
            if (o3 === r4) {
              u2 = true, r4 = i, t = l3;
              break;
            }
            o3 = o3.sibling;
          }
          if (!u2)
            throw Error(v3(189));
        }
      }
      if (t.alternate !== r4)
        throw Error(v3(190));
    }
    if (t.tag !== 3)
      throw Error(v3(188));
    return t.stateNode.current === t ? e : n2;
  }
  function Io(e) {
    return e = Ba(e), e !== null ? Uo(e) : null;
  }
  function Uo(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n2 = Uo(e);
      if (n2 !== null)
        return n2;
      e = e.sibling;
    }
    return null;
  }
  var jo = ae4.unstable_scheduleCallback, Su = ae4.unstable_cancelCallback, Ha = ae4.unstable_shouldYield, Wa = ae4.unstable_requestPaint, j2 = ae4.unstable_now, Qa = ae4.unstable_getCurrentPriorityLevel, xi = ae4.unstable_ImmediatePriority, Vo = ae4.unstable_UserBlockingPriority, wr = ae4.unstable_NormalPriority, $a = ae4.unstable_LowPriority, Ao = ae4.unstable_IdlePriority, Ar = null, Pe3 = null;
  function Ka(e) {
    if (Pe3 && typeof Pe3.onCommitFiberRoot == "function")
      try {
        Pe3.onCommitFiberRoot(Ar, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var Ee3 = Math.clz32 ? Math.clz32 : Ga, Ya = Math.log, Xa = Math.LN2;
  function Ga(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ya(e) / Xa | 0) | 0;
  }
  var Qt = 64, $t = 4194304;
  function at(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Sr(e, n2) {
    var t = e.pendingLanes;
    if (t === 0)
      return 0;
    var r4 = 0, l3 = e.suspendedLanes, i = e.pingedLanes, u2 = t & 268435455;
    if (u2 !== 0) {
      var o3 = u2 & ~l3;
      o3 !== 0 ? r4 = at(o3) : (i &= u2, i !== 0 && (r4 = at(i)));
    } else
      u2 = t & ~l3, u2 !== 0 ? r4 = at(u2) : i !== 0 && (r4 = at(i));
    if (r4 === 0)
      return 0;
    if (n2 !== 0 && n2 !== r4 && !(n2 & l3) && (l3 = r4 & -r4, i = n2 & -n2, l3 >= i || l3 === 16 && (i & 4194240) !== 0))
      return n2;
    if (r4 & 4 && (r4 |= t & 16), n2 = e.entangledLanes, n2 !== 0)
      for (e = e.entanglements, n2 &= r4; 0 < n2; )
        t = 31 - Ee3(n2), l3 = 1 << t, r4 |= e[t], n2 &= ~l3;
    return r4;
  }
  function Za(e, n2) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ja(e, n2) {
    for (var t = e.suspendedLanes, r4 = e.pingedLanes, l3 = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var u2 = 31 - Ee3(i), o3 = 1 << u2, s3 = l3[u2];
      s3 === -1 ? (!(o3 & t) || o3 & r4) && (l3[u2] = Za(o3, n2)) : s3 <= n2 && (e.expiredLanes |= o3), i &= ~o3;
    }
  }
  function Bl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Bo() {
    var e = Qt;
    return Qt <<= 1, !(Qt & 4194240) && (Qt = 64), e;
  }
  function ol(e) {
    for (var n2 = [], t = 0; 31 > t; t++)
      n2.push(e);
    return n2;
  }
  function Ut(e, n2, t) {
    e.pendingLanes |= n2, n2 !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n2 = 31 - Ee3(n2), e[n2] = t;
  }
  function qa(e, n2) {
    var t = e.pendingLanes & ~n2;
    e.pendingLanes = n2, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n2, e.mutableReadLanes &= n2, e.entangledLanes &= n2, n2 = e.entanglements;
    var r4 = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l3 = 31 - Ee3(t), i = 1 << l3;
      n2[l3] = 0, r4[l3] = -1, e[l3] = -1, t &= ~i;
    }
  }
  function Ni(e, n2) {
    var t = e.entangledLanes |= n2;
    for (e = e.entanglements; t; ) {
      var r4 = 31 - Ee3(t), l3 = 1 << r4;
      l3 & n2 | e[r4] & n2 && (e[r4] |= n2), t &= ~l3;
    }
  }
  var P2 = 0;
  function Ho(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Wo, _i, Qo, $o, Ko, Hl = false, Kt = [], Xe = null, Ge2 = null, Ze = null, Ct = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), Qe = [], ba = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ku(e, n2) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xe = null;
        break;
      case "dragenter":
      case "dragleave":
        Ge2 = null;
        break;
      case "mouseover":
      case "mouseout":
        Ze = null;
        break;
      case "pointerover":
      case "pointerout":
        Ct.delete(n2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xt.delete(n2.pointerId);
    }
  }
  function et(e, n2, t, r4, l3, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: n2, domEventName: t, eventSystemFlags: r4, nativeEvent: i, targetContainers: [l3] }, n2 !== null && (n2 = Vt(n2), n2 !== null && _i(n2)), e) : (e.eventSystemFlags |= r4, n2 = e.targetContainers, l3 !== null && n2.indexOf(l3) === -1 && n2.push(l3), e);
  }
  function ec(e, n2, t, r4, l3) {
    switch (n2) {
      case "focusin":
        return Xe = et(Xe, e, n2, t, r4, l3), true;
      case "dragenter":
        return Ge2 = et(Ge2, e, n2, t, r4, l3), true;
      case "mouseover":
        return Ze = et(Ze, e, n2, t, r4, l3), true;
      case "pointerover":
        var i = l3.pointerId;
        return Ct.set(i, et(Ct.get(i) || null, e, n2, t, r4, l3)), true;
      case "gotpointercapture":
        return i = l3.pointerId, xt.set(i, et(xt.get(i) || null, e, n2, t, r4, l3)), true;
    }
    return false;
  }
  function Yo(e) {
    var n2 = dn(e.target);
    if (n2 !== null) {
      var t = Cn(n2);
      if (t !== null) {
        if (n2 = t.tag, n2 === 13) {
          if (n2 = Fo(t), n2 !== null) {
            e.blockedOn = n2, Ko(e.priority, function() {
              Qo(t);
            });
            return;
          }
        } else if (n2 === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ur(e) {
    if (e.blockedOn !== null)
      return false;
    for (var n2 = e.targetContainers; 0 < n2.length; ) {
      var t = Wl(e.domEventName, e.eventSystemFlags, n2[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r4 = new t.constructor(t.type, t);
        Ul = r4, t.target.dispatchEvent(r4), Ul = null;
      } else
        return n2 = Vt(t), n2 !== null && _i(n2), e.blockedOn = t, false;
      n2.shift();
    }
    return true;
  }
  function Eu(e, n2, t) {
    ur(e) && t.delete(n2);
  }
  function nc() {
    Hl = false, Xe !== null && ur(Xe) && (Xe = null), Ge2 !== null && ur(Ge2) && (Ge2 = null), Ze !== null && ur(Ze) && (Ze = null), Ct.forEach(Eu), xt.forEach(Eu);
  }
  function nt(e, n2) {
    e.blockedOn === n2 && (e.blockedOn = null, Hl || (Hl = true, ae4.unstable_scheduleCallback(ae4.unstable_NormalPriority, nc)));
  }
  function Nt(e) {
    function n2(l3) {
      return nt(l3, e);
    }
    if (0 < Kt.length) {
      nt(Kt[0], e);
      for (var t = 1; t < Kt.length; t++) {
        var r4 = Kt[t];
        r4.blockedOn === e && (r4.blockedOn = null);
      }
    }
    for (Xe !== null && nt(Xe, e), Ge2 !== null && nt(Ge2, e), Ze !== null && nt(Ze, e), Ct.forEach(n2), xt.forEach(n2), t = 0; t < Qe.length; t++)
      r4 = Qe[t], r4.blockedOn === e && (r4.blockedOn = null);
    for (; 0 < Qe.length && (t = Qe[0], t.blockedOn === null); )
      Yo(t), t.blockedOn === null && Qe.shift();
  }
  var Bn = Ve2.ReactCurrentBatchConfig, kr = true;
  function tc(e, n2, t, r4) {
    var l3 = P2, i = Bn.transition;
    Bn.transition = null;
    try {
      P2 = 1, zi(e, n2, t, r4);
    } finally {
      P2 = l3, Bn.transition = i;
    }
  }
  function rc(e, n2, t, r4) {
    var l3 = P2, i = Bn.transition;
    Bn.transition = null;
    try {
      P2 = 4, zi(e, n2, t, r4);
    } finally {
      P2 = l3, Bn.transition = i;
    }
  }
  function zi(e, n2, t, r4) {
    if (kr) {
      var l3 = Wl(e, n2, t, r4);
      if (l3 === null)
        ml(e, n2, r4, Er, t), ku(e, r4);
      else if (ec(l3, e, n2, t, r4))
        r4.stopPropagation();
      else if (ku(e, r4), n2 & 4 && -1 < ba.indexOf(e)) {
        for (; l3 !== null; ) {
          var i = Vt(l3);
          if (i !== null && Wo(i), i = Wl(e, n2, t, r4), i === null && ml(e, n2, r4, Er, t), i === l3)
            break;
          l3 = i;
        }
        l3 !== null && r4.stopPropagation();
      } else
        ml(e, n2, r4, null, t);
    }
  }
  var Er = null;
  function Wl(e, n2, t, r4) {
    if (Er = null, e = Ci(r4), e = dn(e), e !== null)
      if (n2 = Cn(e), n2 === null)
        e = null;
      else if (t = n2.tag, t === 13) {
        if (e = Fo(n2), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n2.stateNode.current.memoizedState.isDehydrated)
          return n2.tag === 3 ? n2.stateNode.containerInfo : null;
        e = null;
      } else
        n2 !== e && (e = null);
    return Er = e, null;
  }
  function Xo(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Qa()) {
          case xi:
            return 1;
          case Vo:
            return 4;
          case wr:
          case $a:
            return 16;
          case Ao:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ke = null, Pi = null, or = null;
  function Go() {
    if (or)
      return or;
    var e, n2 = Pi, t = n2.length, r4, l3 = "value" in Ke ? Ke.value : Ke.textContent, i = l3.length;
    for (e = 0; e < t && n2[e] === l3[e]; e++)
      ;
    var u2 = t - e;
    for (r4 = 1; r4 <= u2 && n2[t - r4] === l3[i - r4]; r4++)
      ;
    return or = l3.slice(e, 1 < r4 ? 1 - r4 : void 0);
  }
  function sr(e) {
    var n2 = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n2 === 13 && (e = 13)) : e = n2, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Yt() {
    return true;
  }
  function Cu() {
    return false;
  }
  function ce2(e) {
    function n2(t, r4, l3, i, u2) {
      this._reactName = t, this._targetInst = l3, this.type = r4, this.nativeEvent = i, this.target = u2, this.currentTarget = null;
      for (var o3 in e)
        e.hasOwnProperty(o3) && (t = e[o3], this[o3] = t ? t(i) : i[o3]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Yt : Cu, this.isPropagationStopped = Cu, this;
    }
    return F3(n2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = false), this.isDefaultPrevented = Yt);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = true), this.isPropagationStopped = Yt);
    }, persist: function() {
    }, isPersistent: Yt }), n2;
  }
  var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Li = ce2(Jn), jt = F3({}, Jn, { view: 0, detail: 0 }), lc = ce2(jt), sl, al, tt, Br = F3({}, jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ti, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== tt && (tt && e.type === "mousemove" ? (sl = e.screenX - tt.screenX, al = e.screenY - tt.screenY) : al = sl = 0, tt = e), sl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : al;
  } }), xu = ce2(Br), ic = F3({}, Br, { dataTransfer: 0 }), uc = ce2(ic), oc = F3({}, jt, { relatedTarget: 0 }), cl = ce2(oc), sc = F3({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ac = ce2(sc), cc = F3({}, Jn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), fc = ce2(cc), dc = F3({}, Jn, { data: 0 }), Nu = ce2(dc), pc = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, mc = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, hc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function vc(e) {
    var n2 = this.nativeEvent;
    return n2.getModifierState ? n2.getModifierState(e) : (e = hc[e]) ? !!n2[e] : false;
  }
  function Ti() {
    return vc;
  }
  var yc = F3({}, jt, { key: function(e) {
    if (e.key) {
      var n2 = pc[e.key] || e.key;
      if (n2 !== "Unidentified")
        return n2;
    }
    return e.type === "keypress" ? (e = sr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ti, charCode: function(e) {
    return e.type === "keypress" ? sr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? sr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), gc = ce2(yc), wc = F3({}, Br, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _u = ce2(wc), Sc = F3({}, jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ti }), kc = ce2(Sc), Ec = F3({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = ce2(Ec), xc = F3({}, Br, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Nc = ce2(xc), _c = [9, 13, 27, 32], Mi = Fe2 && "CompositionEvent" in window, pt = null;
  Fe2 && "documentMode" in document && (pt = document.documentMode);
  var zc = Fe2 && "TextEvent" in window && !pt, Zo = Fe2 && (!Mi || pt && 8 < pt && 11 >= pt), zu = " ", Pu = false;
  function Jo(e, n2) {
    switch (e) {
      case "keyup":
        return _c.indexOf(n2.keyCode) !== -1;
      case "keydown":
        return n2.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function qo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pn = false;
  function Pc(e, n2) {
    switch (e) {
      case "compositionend":
        return qo(n2);
      case "keypress":
        return n2.which !== 32 ? null : (Pu = true, zu);
      case "textInput":
        return e = n2.data, e === zu && Pu ? null : e;
      default:
        return null;
    }
  }
  function Lc(e, n2) {
    if (Pn)
      return e === "compositionend" || !Mi && Jo(e, n2) ? (e = Go(), or = Pi = Ke = null, Pn = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n2.ctrlKey || n2.altKey || n2.metaKey) || n2.ctrlKey && n2.altKey) {
          if (n2.char && 1 < n2.char.length)
            return n2.char;
          if (n2.which)
            return String.fromCharCode(n2.which);
        }
        return null;
      case "compositionend":
        return Zo && n2.locale !== "ko" ? null : n2.data;
      default:
        return null;
    }
  }
  var Tc = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Lu(e) {
    var n2 = e && e.nodeName && e.nodeName.toLowerCase();
    return n2 === "input" ? !!Tc[e.type] : n2 === "textarea";
  }
  function bo(e, n2, t, r4) {
    To(r4), n2 = Cr(n2, "onChange"), 0 < n2.length && (t = new Li("onChange", "change", null, t, r4), e.push({ event: t, listeners: n2 }));
  }
  var mt = null, _t = null;
  function Mc(e) {
    cs(e, 0);
  }
  function Hr(e) {
    var n2 = Mn(e);
    if (Co(n2))
      return e;
  }
  function Dc(e, n2) {
    if (e === "change")
      return n2;
  }
  var es = false;
  Fe2 && (Fe2 ? (Gt = "oninput" in document, Gt || (fl = document.createElement("div"), fl.setAttribute("oninput", "return;"), Gt = typeof fl.oninput == "function"), Xt = Gt) : Xt = false, es = Xt && (!document.documentMode || 9 < document.documentMode));
  var Xt, Gt, fl;
  function Tu() {
    mt && (mt.detachEvent("onpropertychange", ns), _t = mt = null);
  }
  function ns(e) {
    if (e.propertyName === "value" && Hr(_t)) {
      var n2 = [];
      bo(n2, _t, e, Ci(e)), Ro(Mc, n2);
    }
  }
  function Oc(e, n2, t) {
    e === "focusin" ? (Tu(), mt = n2, _t = t, mt.attachEvent("onpropertychange", ns)) : e === "focusout" && Tu();
  }
  function Rc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Hr(_t);
  }
  function Fc(e, n2) {
    if (e === "click")
      return Hr(n2);
  }
  function Ic(e, n2) {
    if (e === "input" || e === "change")
      return Hr(n2);
  }
  function Uc(e, n2) {
    return e === n2 && (e !== 0 || 1 / e === 1 / n2) || e !== e && n2 !== n2;
  }
  var xe3 = typeof Object.is == "function" ? Object.is : Uc;
  function zt(e, n2) {
    if (xe3(e, n2))
      return true;
    if (typeof e != "object" || e === null || typeof n2 != "object" || n2 === null)
      return false;
    var t = Object.keys(e), r4 = Object.keys(n2);
    if (t.length !== r4.length)
      return false;
    for (r4 = 0; r4 < t.length; r4++) {
      var l3 = t[r4];
      if (!Nl.call(n2, l3) || !xe3(e[l3], n2[l3]))
        return false;
    }
    return true;
  }
  function Mu(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Du(e, n2) {
    var t = Mu(e);
    e = 0;
    for (var r4; t; ) {
      if (t.nodeType === 3) {
        if (r4 = e + t.textContent.length, e <= n2 && r4 >= n2)
          return { node: t, offset: n2 - e };
        e = r4;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Mu(t);
    }
  }
  function ts(e, n2) {
    return e && n2 ? e === n2 ? true : e && e.nodeType === 3 ? false : n2 && n2.nodeType === 3 ? ts(e, n2.parentNode) : "contains" in e ? e.contains(n2) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n2) & 16) : false : false;
  }
  function rs() {
    for (var e = window, n2 = vr(); n2 instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n2.contentWindow.location.href == "string";
      } catch {
        t = false;
      }
      if (t)
        e = n2.contentWindow;
      else
        break;
      n2 = vr(e.document);
    }
    return n2;
  }
  function Di(e) {
    var n2 = e && e.nodeName && e.nodeName.toLowerCase();
    return n2 && (n2 === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n2 === "textarea" || e.contentEditable === "true");
  }
  function jc(e) {
    var n2 = rs(), t = e.focusedElem, r4 = e.selectionRange;
    if (n2 !== t && t && t.ownerDocument && ts(t.ownerDocument.documentElement, t)) {
      if (r4 !== null && Di(t)) {
        if (n2 = r4.start, e = r4.end, e === void 0 && (e = n2), "selectionStart" in t)
          t.selectionStart = n2, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n2 = t.ownerDocument || document) && n2.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l3 = t.textContent.length, i = Math.min(r4.start, l3);
          r4 = r4.end === void 0 ? i : Math.min(r4.end, l3), !e.extend && i > r4 && (l3 = r4, r4 = i, i = l3), l3 = Du(t, i);
          var u2 = Du(t, r4);
          l3 && u2 && (e.rangeCount !== 1 || e.anchorNode !== l3.node || e.anchorOffset !== l3.offset || e.focusNode !== u2.node || e.focusOffset !== u2.offset) && (n2 = n2.createRange(), n2.setStart(l3.node, l3.offset), e.removeAllRanges(), i > r4 ? (e.addRange(n2), e.extend(u2.node, u2.offset)) : (n2.setEnd(u2.node, u2.offset), e.addRange(n2)));
        }
      }
      for (n2 = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n2.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n2.length; t++)
        e = n2[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Vc = Fe2 && "documentMode" in document && 11 >= document.documentMode, Ln = null, Ql = null, ht = null, $l = false;
  function Ou(e, n2, t) {
    var r4 = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    $l || Ln == null || Ln !== vr(r4) || (r4 = Ln, "selectionStart" in r4 && Di(r4) ? r4 = { start: r4.selectionStart, end: r4.selectionEnd } : (r4 = (r4.ownerDocument && r4.ownerDocument.defaultView || window).getSelection(), r4 = { anchorNode: r4.anchorNode, anchorOffset: r4.anchorOffset, focusNode: r4.focusNode, focusOffset: r4.focusOffset }), ht && zt(ht, r4) || (ht = r4, r4 = Cr(Ql, "onSelect"), 0 < r4.length && (n2 = new Li("onSelect", "select", null, n2, t), e.push({ event: n2, listeners: r4 }), n2.target = Ln)));
  }
  function Zt(e, n2) {
    var t = {};
    return t[e.toLowerCase()] = n2.toLowerCase(), t["Webkit" + e] = "webkit" + n2, t["Moz" + e] = "moz" + n2, t;
  }
  var Tn = { animationend: Zt("Animation", "AnimationEnd"), animationiteration: Zt("Animation", "AnimationIteration"), animationstart: Zt("Animation", "AnimationStart"), transitionend: Zt("Transition", "TransitionEnd") }, dl = {}, ls = {};
  Fe2 && (ls = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
  function Wr(e) {
    if (dl[e])
      return dl[e];
    if (!Tn[e])
      return e;
    var n2 = Tn[e], t;
    for (t in n2)
      if (n2.hasOwnProperty(t) && t in ls)
        return dl[e] = n2[t];
    return e;
  }
  var is = Wr("animationend"), us = Wr("animationiteration"), os = Wr("animationstart"), ss = Wr("transitionend"), as = /* @__PURE__ */ new Map(), Ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ln(e, n2) {
    as.set(e, n2), En(n2, [e]);
  }
  for (Jt = 0; Jt < Ru.length; Jt++)
    qt = Ru[Jt], Fu = qt.toLowerCase(), Iu = qt[0].toUpperCase() + qt.slice(1), ln(Fu, "on" + Iu);
  var qt, Fu, Iu, Jt;
  ln(is, "onAnimationEnd");
  ln(us, "onAnimationIteration");
  ln(os, "onAnimationStart");
  ln("dblclick", "onDoubleClick");
  ln("focusin", "onFocus");
  ln("focusout", "onBlur");
  ln(ss, "onTransitionEnd");
  Qn("onMouseEnter", ["mouseout", "mouseover"]);
  Qn("onMouseLeave", ["mouseout", "mouseover"]);
  Qn("onPointerEnter", ["pointerout", "pointerover"]);
  Qn("onPointerLeave", ["pointerout", "pointerover"]);
  En("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  En("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  En("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  En("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  En("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ct = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ac = new Set("cancel close invalid load scroll toggle".split(" ").concat(ct));
  function Uu(e, n2, t) {
    var r4 = e.type || "unknown-event";
    e.currentTarget = t, Aa(r4, n2, void 0, e), e.currentTarget = null;
  }
  function cs(e, n2) {
    n2 = (n2 & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r4 = e[t], l3 = r4.event;
      r4 = r4.listeners;
      e: {
        var i = void 0;
        if (n2)
          for (var u2 = r4.length - 1; 0 <= u2; u2--) {
            var o3 = r4[u2], s3 = o3.instance, d5 = o3.currentTarget;
            if (o3 = o3.listener, s3 !== i && l3.isPropagationStopped())
              break e;
            Uu(l3, o3, d5), i = s3;
          }
        else
          for (u2 = 0; u2 < r4.length; u2++) {
            if (o3 = r4[u2], s3 = o3.instance, d5 = o3.currentTarget, o3 = o3.listener, s3 !== i && l3.isPropagationStopped())
              break e;
            Uu(l3, o3, d5), i = s3;
          }
      }
    }
    if (gr)
      throw e = Al, gr = false, Al = null, e;
  }
  function T3(e, n2) {
    var t = n2[Zl];
    t === void 0 && (t = n2[Zl] = /* @__PURE__ */ new Set());
    var r4 = e + "__bubble";
    t.has(r4) || (fs(n2, e, 2, false), t.add(r4));
  }
  function pl(e, n2, t) {
    var r4 = 0;
    n2 && (r4 |= 4), fs(t, e, r4, n2);
  }
  var bt = "_reactListening" + Math.random().toString(36).slice(2);
  function Pt(e) {
    if (!e[bt]) {
      e[bt] = true, go.forEach(function(t) {
        t !== "selectionchange" && (Ac.has(t) || pl(t, false, e), pl(t, true, e));
      });
      var n2 = e.nodeType === 9 ? e : e.ownerDocument;
      n2 === null || n2[bt] || (n2[bt] = true, pl("selectionchange", false, n2));
    }
  }
  function fs(e, n2, t, r4) {
    switch (Xo(n2)) {
      case 1:
        var l3 = tc;
        break;
      case 4:
        l3 = rc;
        break;
      default:
        l3 = zi;
    }
    t = l3.bind(null, n2, t, e), l3 = void 0, !Vl || n2 !== "touchstart" && n2 !== "touchmove" && n2 !== "wheel" || (l3 = true), r4 ? l3 !== void 0 ? e.addEventListener(n2, t, { capture: true, passive: l3 }) : e.addEventListener(n2, t, true) : l3 !== void 0 ? e.addEventListener(n2, t, { passive: l3 }) : e.addEventListener(n2, t, false);
  }
  function ml(e, n2, t, r4, l3) {
    var i = r4;
    if (!(n2 & 1) && !(n2 & 2) && r4 !== null)
      e:
        for (; ; ) {
          if (r4 === null)
            return;
          var u2 = r4.tag;
          if (u2 === 3 || u2 === 4) {
            var o3 = r4.stateNode.containerInfo;
            if (o3 === l3 || o3.nodeType === 8 && o3.parentNode === l3)
              break;
            if (u2 === 4)
              for (u2 = r4.return; u2 !== null; ) {
                var s3 = u2.tag;
                if ((s3 === 3 || s3 === 4) && (s3 = u2.stateNode.containerInfo, s3 === l3 || s3.nodeType === 8 && s3.parentNode === l3))
                  return;
                u2 = u2.return;
              }
            for (; o3 !== null; ) {
              if (u2 = dn(o3), u2 === null)
                return;
              if (s3 = u2.tag, s3 === 5 || s3 === 6) {
                r4 = i = u2;
                continue e;
              }
              o3 = o3.parentNode;
            }
          }
          r4 = r4.return;
        }
    Ro(function() {
      var d5 = i, m2 = Ci(t), h3 = [];
      e: {
        var p4 = as.get(e);
        if (p4 !== void 0) {
          var g4 = Li, S3 = e;
          switch (e) {
            case "keypress":
              if (sr(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              g4 = gc;
              break;
            case "focusin":
              S3 = "focus", g4 = cl;
              break;
            case "focusout":
              S3 = "blur", g4 = cl;
              break;
            case "beforeblur":
            case "afterblur":
              g4 = cl;
              break;
            case "click":
              if (t.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g4 = xu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g4 = uc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g4 = kc;
              break;
            case is:
            case us:
            case os:
              g4 = ac;
              break;
            case ss:
              g4 = Cc;
              break;
            case "scroll":
              g4 = lc;
              break;
            case "wheel":
              g4 = Nc;
              break;
            case "copy":
            case "cut":
            case "paste":
              g4 = fc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g4 = _u;
          }
          var k2 = (n2 & 4) !== 0, U4 = !k2 && e === "scroll", c2 = k2 ? p4 !== null ? p4 + "Capture" : null : p4;
          k2 = [];
          for (var a4 = d5, f4; a4 !== null; ) {
            f4 = a4;
            var y3 = f4.stateNode;
            if (f4.tag === 5 && y3 !== null && (f4 = y3, c2 !== null && (y3 = Et(a4, c2), y3 != null && k2.push(Lt(a4, y3, f4)))), U4)
              break;
            a4 = a4.return;
          }
          0 < k2.length && (p4 = new g4(p4, S3, null, t, m2), h3.push({ event: p4, listeners: k2 }));
        }
      }
      if (!(n2 & 7)) {
        e: {
          if (p4 = e === "mouseover" || e === "pointerover", g4 = e === "mouseout" || e === "pointerout", p4 && t !== Ul && (S3 = t.relatedTarget || t.fromElement) && (dn(S3) || S3[Ie3]))
            break e;
          if ((g4 || p4) && (p4 = m2.window === m2 ? m2 : (p4 = m2.ownerDocument) ? p4.defaultView || p4.parentWindow : window, g4 ? (S3 = t.relatedTarget || t.toElement, g4 = d5, S3 = S3 ? dn(S3) : null, S3 !== null && (U4 = Cn(S3), S3 !== U4 || S3.tag !== 5 && S3.tag !== 6) && (S3 = null)) : (g4 = null, S3 = d5), g4 !== S3)) {
            if (k2 = xu, y3 = "onMouseLeave", c2 = "onMouseEnter", a4 = "mouse", (e === "pointerout" || e === "pointerover") && (k2 = _u, y3 = "onPointerLeave", c2 = "onPointerEnter", a4 = "pointer"), U4 = g4 == null ? p4 : Mn(g4), f4 = S3 == null ? p4 : Mn(S3), p4 = new k2(y3, a4 + "leave", g4, t, m2), p4.target = U4, p4.relatedTarget = f4, y3 = null, dn(m2) === d5 && (k2 = new k2(c2, a4 + "enter", S3, t, m2), k2.target = f4, k2.relatedTarget = U4, y3 = k2), U4 = y3, g4 && S3)
              n: {
                for (k2 = g4, c2 = S3, a4 = 0, f4 = k2; f4; f4 = Nn(f4))
                  a4++;
                for (f4 = 0, y3 = c2; y3; y3 = Nn(y3))
                  f4++;
                for (; 0 < a4 - f4; )
                  k2 = Nn(k2), a4--;
                for (; 0 < f4 - a4; )
                  c2 = Nn(c2), f4--;
                for (; a4--; ) {
                  if (k2 === c2 || c2 !== null && k2 === c2.alternate)
                    break n;
                  k2 = Nn(k2), c2 = Nn(c2);
                }
                k2 = null;
              }
            else
              k2 = null;
            g4 !== null && ju(h3, p4, g4, k2, false), S3 !== null && U4 !== null && ju(h3, U4, S3, k2, true);
          }
        }
        e: {
          if (p4 = d5 ? Mn(d5) : window, g4 = p4.nodeName && p4.nodeName.toLowerCase(), g4 === "select" || g4 === "input" && p4.type === "file")
            var E5 = Dc;
          else if (Lu(p4))
            if (es)
              E5 = Ic;
            else {
              E5 = Rc;
              var C4 = Oc;
            }
          else
            (g4 = p4.nodeName) && g4.toLowerCase() === "input" && (p4.type === "checkbox" || p4.type === "radio") && (E5 = Fc);
          if (E5 && (E5 = E5(e, d5))) {
            bo(h3, E5, t, m2);
            break e;
          }
          C4 && C4(e, p4, d5), e === "focusout" && (C4 = p4._wrapperState) && C4.controlled && p4.type === "number" && Dl(p4, "number", p4.value);
        }
        switch (C4 = d5 ? Mn(d5) : window, e) {
          case "focusin":
            (Lu(C4) || C4.contentEditable === "true") && (Ln = C4, Ql = d5, ht = null);
            break;
          case "focusout":
            ht = Ql = Ln = null;
            break;
          case "mousedown":
            $l = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            $l = false, Ou(h3, t, m2);
            break;
          case "selectionchange":
            if (Vc)
              break;
          case "keydown":
          case "keyup":
            Ou(h3, t, m2);
        }
        var x5;
        if (Mi)
          e: {
            switch (e) {
              case "compositionstart":
                var N3 = "onCompositionStart";
                break e;
              case "compositionend":
                N3 = "onCompositionEnd";
                break e;
              case "compositionupdate":
                N3 = "onCompositionUpdate";
                break e;
            }
            N3 = void 0;
          }
        else
          Pn ? Jo(e, t) && (N3 = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (N3 = "onCompositionStart");
        N3 && (Zo && t.locale !== "ko" && (Pn || N3 !== "onCompositionStart" ? N3 === "onCompositionEnd" && Pn && (x5 = Go()) : (Ke = m2, Pi = "value" in Ke ? Ke.value : Ke.textContent, Pn = true)), C4 = Cr(d5, N3), 0 < C4.length && (N3 = new Nu(N3, e, null, t, m2), h3.push({ event: N3, listeners: C4 }), x5 ? N3.data = x5 : (x5 = qo(t), x5 !== null && (N3.data = x5)))), (x5 = zc ? Pc(e, t) : Lc(e, t)) && (d5 = Cr(d5, "onBeforeInput"), 0 < d5.length && (m2 = new Nu("onBeforeInput", "beforeinput", null, t, m2), h3.push({ event: m2, listeners: d5 }), m2.data = x5));
      }
      cs(h3, n2);
    });
  }
  function Lt(e, n2, t) {
    return { instance: e, listener: n2, currentTarget: t };
  }
  function Cr(e, n2) {
    for (var t = n2 + "Capture", r4 = []; e !== null; ) {
      var l3 = e, i = l3.stateNode;
      l3.tag === 5 && i !== null && (l3 = i, i = Et(e, t), i != null && r4.unshift(Lt(e, i, l3)), i = Et(e, n2), i != null && r4.push(Lt(e, i, l3))), e = e.return;
    }
    return r4;
  }
  function Nn(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ju(e, n2, t, r4, l3) {
    for (var i = n2._reactName, u2 = []; t !== null && t !== r4; ) {
      var o3 = t, s3 = o3.alternate, d5 = o3.stateNode;
      if (s3 !== null && s3 === r4)
        break;
      o3.tag === 5 && d5 !== null && (o3 = d5, l3 ? (s3 = Et(t, i), s3 != null && u2.unshift(Lt(t, s3, o3))) : l3 || (s3 = Et(t, i), s3 != null && u2.push(Lt(t, s3, o3)))), t = t.return;
    }
    u2.length !== 0 && e.push({ event: n2, listeners: u2 });
  }
  var Bc = /\r\n?/g, Hc = /\u0000|\uFFFD/g;
  function Vu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Bc, `
`).replace(Hc, "");
  }
  function er(e, n2, t) {
    if (n2 = Vu(n2), Vu(e) !== n2 && t)
      throw Error(v3(425));
  }
  function xr() {
  }
  var Kl = null, Yl = null;
  function Xl(e, n2) {
    return e === "textarea" || e === "noscript" || typeof n2.children == "string" || typeof n2.children == "number" || typeof n2.dangerouslySetInnerHTML == "object" && n2.dangerouslySetInnerHTML !== null && n2.dangerouslySetInnerHTML.__html != null;
  }
  var Gl = typeof setTimeout == "function" ? setTimeout : void 0, Wc = typeof clearTimeout == "function" ? clearTimeout : void 0, Au = typeof Promise == "function" ? Promise : void 0, Qc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Au < "u" ? function(e) {
    return Au.resolve(null).then(e).catch($c);
  } : Gl;
  function $c(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function hl(e, n2) {
    var t = n2, r4 = 0;
    do {
      var l3 = t.nextSibling;
      if (e.removeChild(t), l3 && l3.nodeType === 8)
        if (t = l3.data, t === "/$") {
          if (r4 === 0) {
            e.removeChild(l3), Nt(n2);
            return;
          }
          r4--;
        } else
          t !== "$" && t !== "$?" && t !== "$!" || r4++;
      t = l3;
    } while (t);
    Nt(n2);
  }
  function Je(e) {
    for (; e != null; e = e.nextSibling) {
      var n2 = e.nodeType;
      if (n2 === 1 || n2 === 3)
        break;
      if (n2 === 8) {
        if (n2 = e.data, n2 === "$" || n2 === "$!" || n2 === "$?")
          break;
        if (n2 === "/$")
          return null;
      }
    }
    return e;
  }
  function Bu(e) {
    e = e.previousSibling;
    for (var n2 = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n2 === 0)
            return e;
          n2--;
        } else
          t === "/$" && n2++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var qn = Math.random().toString(36).slice(2), ze2 = "__reactFiber$" + qn, Tt = "__reactProps$" + qn, Ie3 = "__reactContainer$" + qn, Zl = "__reactEvents$" + qn, Kc = "__reactListeners$" + qn, Yc = "__reactHandles$" + qn;
  function dn(e) {
    var n2 = e[ze2];
    if (n2)
      return n2;
    for (var t = e.parentNode; t; ) {
      if (n2 = t[Ie3] || t[ze2]) {
        if (t = n2.alternate, n2.child !== null || t !== null && t.child !== null)
          for (e = Bu(e); e !== null; ) {
            if (t = e[ze2])
              return t;
            e = Bu(e);
          }
        return n2;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Vt(e) {
    return e = e[ze2] || e[Ie3], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Mn(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(v3(33));
  }
  function Qr(e) {
    return e[Tt] || null;
  }
  var Jl = [], Dn = -1;
  function un(e) {
    return { current: e };
  }
  function M3(e) {
    0 > Dn || (e.current = Jl[Dn], Jl[Dn] = null, Dn--);
  }
  function L(e, n2) {
    Dn++, Jl[Dn] = e.current, e.current = n2;
  }
  var rn = {}, J3 = un(rn), re3 = un(false), yn = rn;
  function $n(e, n2) {
    var t = e.type.contextTypes;
    if (!t)
      return rn;
    var r4 = e.stateNode;
    if (r4 && r4.__reactInternalMemoizedUnmaskedChildContext === n2)
      return r4.__reactInternalMemoizedMaskedChildContext;
    var l3 = {}, i;
    for (i in t)
      l3[i] = n2[i];
    return r4 && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n2, e.__reactInternalMemoizedMaskedChildContext = l3), l3;
  }
  function le3(e) {
    return e = e.childContextTypes, e != null;
  }
  function Nr() {
    M3(re3), M3(J3);
  }
  function Hu(e, n2, t) {
    if (J3.current !== rn)
      throw Error(v3(168));
    L(J3, n2), L(re3, t);
  }
  function ds(e, n2, t) {
    var r4 = e.stateNode;
    if (n2 = n2.childContextTypes, typeof r4.getChildContext != "function")
      return t;
    r4 = r4.getChildContext();
    for (var l3 in r4)
      if (!(l3 in n2))
        throw Error(v3(108, Oa(e) || "Unknown", l3));
    return F3({}, t, r4);
  }
  function _r(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rn, yn = J3.current, L(J3, e), L(re3, re3.current), true;
  }
  function Wu(e, n2, t) {
    var r4 = e.stateNode;
    if (!r4)
      throw Error(v3(169));
    t ? (e = ds(e, n2, yn), r4.__reactInternalMemoizedMergedChildContext = e, M3(re3), M3(J3), L(J3, e)) : M3(re3), L(re3, t);
  }
  var Me2 = null, $r = false, vl = false;
  function ps(e) {
    Me2 === null ? Me2 = [e] : Me2.push(e);
  }
  function Xc(e) {
    $r = true, ps(e);
  }
  function on() {
    if (!vl && Me2 !== null) {
      vl = true;
      var e = 0, n2 = P2;
      try {
        var t = Me2;
        for (P2 = 1; e < t.length; e++) {
          var r4 = t[e];
          do
            r4 = r4(true);
          while (r4 !== null);
        }
        Me2 = null, $r = false;
      } catch (l3) {
        throw Me2 !== null && (Me2 = Me2.slice(e + 1)), jo(xi, on), l3;
      } finally {
        P2 = n2, vl = false;
      }
    }
    return null;
  }
  var On = [], Rn = 0, zr = null, Pr = 0, de3 = [], pe4 = 0, gn = null, De2 = 1, Oe2 = "";
  function cn(e, n2) {
    On[Rn++] = Pr, On[Rn++] = zr, zr = e, Pr = n2;
  }
  function ms(e, n2, t) {
    de3[pe4++] = De2, de3[pe4++] = Oe2, de3[pe4++] = gn, gn = e;
    var r4 = De2;
    e = Oe2;
    var l3 = 32 - Ee3(r4) - 1;
    r4 &= ~(1 << l3), t += 1;
    var i = 32 - Ee3(n2) + l3;
    if (30 < i) {
      var u2 = l3 - l3 % 5;
      i = (r4 & (1 << u2) - 1).toString(32), r4 >>= u2, l3 -= u2, De2 = 1 << 32 - Ee3(n2) + l3 | t << l3 | r4, Oe2 = i + e;
    } else
      De2 = 1 << i | t << l3 | r4, Oe2 = e;
  }
  function Oi(e) {
    e.return !== null && (cn(e, 1), ms(e, 1, 0));
  }
  function Ri(e) {
    for (; e === zr; )
      zr = On[--Rn], On[Rn] = null, Pr = On[--Rn], On[Rn] = null;
    for (; e === gn; )
      gn = de3[--pe4], de3[pe4] = null, Oe2 = de3[--pe4], de3[pe4] = null, De2 = de3[--pe4], de3[pe4] = null;
  }
  var se2 = null, oe3 = null, D2 = false, ke3 = null;
  function hs(e, n2) {
    var t = me3(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n2, t.return = e, n2 = e.deletions, n2 === null ? (e.deletions = [t], e.flags |= 16) : n2.push(t);
  }
  function Qu(e, n2) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n2 = n2.nodeType !== 1 || t.toLowerCase() !== n2.nodeName.toLowerCase() ? null : n2, n2 !== null ? (e.stateNode = n2, se2 = e, oe3 = Je(n2.firstChild), true) : false;
      case 6:
        return n2 = e.pendingProps === "" || n2.nodeType !== 3 ? null : n2, n2 !== null ? (e.stateNode = n2, se2 = e, oe3 = null, true) : false;
      case 13:
        return n2 = n2.nodeType !== 8 ? null : n2, n2 !== null ? (t = gn !== null ? { id: De2, overflow: Oe2 } : null, e.memoizedState = { dehydrated: n2, treeContext: t, retryLane: 1073741824 }, t = me3(18, null, null, 0), t.stateNode = n2, t.return = e, e.child = t, se2 = e, oe3 = null, true) : false;
      default:
        return false;
    }
  }
  function ql(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function bl(e) {
    if (D2) {
      var n2 = oe3;
      if (n2) {
        var t = n2;
        if (!Qu(e, n2)) {
          if (ql(e))
            throw Error(v3(418));
          n2 = Je(t.nextSibling);
          var r4 = se2;
          n2 && Qu(e, n2) ? hs(r4, t) : (e.flags = e.flags & -4097 | 2, D2 = false, se2 = e);
        }
      } else {
        if (ql(e))
          throw Error(v3(418));
        e.flags = e.flags & -4097 | 2, D2 = false, se2 = e;
      }
    }
  }
  function $u(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    se2 = e;
  }
  function nr(e) {
    if (e !== se2)
      return false;
    if (!D2)
      return $u(e), D2 = true, false;
    var n2;
    if ((n2 = e.tag !== 3) && !(n2 = e.tag !== 5) && (n2 = e.type, n2 = n2 !== "head" && n2 !== "body" && !Xl(e.type, e.memoizedProps)), n2 && (n2 = oe3)) {
      if (ql(e))
        throw vs(), Error(v3(418));
      for (; n2; )
        hs(e, n2), n2 = Je(n2.nextSibling);
    }
    if ($u(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(v3(317));
      e: {
        for (e = e.nextSibling, n2 = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n2 === 0) {
                oe3 = Je(e.nextSibling);
                break e;
              }
              n2--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || n2++;
          }
          e = e.nextSibling;
        }
        oe3 = null;
      }
    } else
      oe3 = se2 ? Je(e.stateNode.nextSibling) : null;
    return true;
  }
  function vs() {
    for (var e = oe3; e; )
      e = Je(e.nextSibling);
  }
  function Kn() {
    oe3 = se2 = null, D2 = false;
  }
  function Fi(e) {
    ke3 === null ? ke3 = [e] : ke3.push(e);
  }
  var Gc = Ve2.ReactCurrentBatchConfig;
  function rt(e, n2, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(v3(309));
          var r4 = t.stateNode;
        }
        if (!r4)
          throw Error(v3(147, e));
        var l3 = r4, i = "" + e;
        return n2 !== null && n2.ref !== null && typeof n2.ref == "function" && n2.ref._stringRef === i ? n2.ref : (n2 = function(u2) {
          var o3 = l3.refs;
          u2 === null ? delete o3[i] : o3[i] = u2;
        }, n2._stringRef = i, n2);
      }
      if (typeof e != "string")
        throw Error(v3(284));
      if (!t._owner)
        throw Error(v3(290, e));
    }
    return e;
  }
  function tr(e, n2) {
    throw e = Object.prototype.toString.call(n2), Error(v3(31, e === "[object Object]" ? "object with keys {" + Object.keys(n2).join(", ") + "}" : e));
  }
  function Ku(e) {
    var n2 = e._init;
    return n2(e._payload);
  }
  function ys(e) {
    function n2(c2, a4) {
      if (e) {
        var f4 = c2.deletions;
        f4 === null ? (c2.deletions = [a4], c2.flags |= 16) : f4.push(a4);
      }
    }
    function t(c2, a4) {
      if (!e)
        return null;
      for (; a4 !== null; )
        n2(c2, a4), a4 = a4.sibling;
      return null;
    }
    function r4(c2, a4) {
      for (c2 = /* @__PURE__ */ new Map(); a4 !== null; )
        a4.key !== null ? c2.set(a4.key, a4) : c2.set(a4.index, a4), a4 = a4.sibling;
      return c2;
    }
    function l3(c2, a4) {
      return c2 = nn(c2, a4), c2.index = 0, c2.sibling = null, c2;
    }
    function i(c2, a4, f4) {
      return c2.index = f4, e ? (f4 = c2.alternate, f4 !== null ? (f4 = f4.index, f4 < a4 ? (c2.flags |= 2, a4) : f4) : (c2.flags |= 2, a4)) : (c2.flags |= 1048576, a4);
    }
    function u2(c2) {
      return e && c2.alternate === null && (c2.flags |= 2), c2;
    }
    function o3(c2, a4, f4, y3) {
      return a4 === null || a4.tag !== 6 ? (a4 = Cl(f4, c2.mode, y3), a4.return = c2, a4) : (a4 = l3(a4, f4), a4.return = c2, a4);
    }
    function s3(c2, a4, f4, y3) {
      var E5 = f4.type;
      return E5 === zn ? m2(c2, a4, f4.props.children, y3, f4.key) : a4 !== null && (a4.elementType === E5 || typeof E5 == "object" && E5 !== null && E5.$$typeof === He2 && Ku(E5) === a4.type) ? (y3 = l3(a4, f4.props), y3.ref = rt(c2, a4, f4), y3.return = c2, y3) : (y3 = hr(f4.type, f4.key, f4.props, null, c2.mode, y3), y3.ref = rt(c2, a4, f4), y3.return = c2, y3);
    }
    function d5(c2, a4, f4, y3) {
      return a4 === null || a4.tag !== 4 || a4.stateNode.containerInfo !== f4.containerInfo || a4.stateNode.implementation !== f4.implementation ? (a4 = xl(f4, c2.mode, y3), a4.return = c2, a4) : (a4 = l3(a4, f4.children || []), a4.return = c2, a4);
    }
    function m2(c2, a4, f4, y3, E5) {
      return a4 === null || a4.tag !== 7 ? (a4 = vn(f4, c2.mode, y3, E5), a4.return = c2, a4) : (a4 = l3(a4, f4), a4.return = c2, a4);
    }
    function h3(c2, a4, f4) {
      if (typeof a4 == "string" && a4 !== "" || typeof a4 == "number")
        return a4 = Cl("" + a4, c2.mode, f4), a4.return = c2, a4;
      if (typeof a4 == "object" && a4 !== null) {
        switch (a4.$$typeof) {
          case Bt:
            return f4 = hr(a4.type, a4.key, a4.props, null, c2.mode, f4), f4.ref = rt(c2, null, a4), f4.return = c2, f4;
          case _n:
            return a4 = xl(a4, c2.mode, f4), a4.return = c2, a4;
          case He2:
            var y3 = a4._init;
            return h3(c2, y3(a4._payload), f4);
        }
        if (st(a4) || bn(a4))
          return a4 = vn(a4, c2.mode, f4, null), a4.return = c2, a4;
        tr(c2, a4);
      }
      return null;
    }
    function p4(c2, a4, f4, y3) {
      var E5 = a4 !== null ? a4.key : null;
      if (typeof f4 == "string" && f4 !== "" || typeof f4 == "number")
        return E5 !== null ? null : o3(c2, a4, "" + f4, y3);
      if (typeof f4 == "object" && f4 !== null) {
        switch (f4.$$typeof) {
          case Bt:
            return f4.key === E5 ? s3(c2, a4, f4, y3) : null;
          case _n:
            return f4.key === E5 ? d5(c2, a4, f4, y3) : null;
          case He2:
            return E5 = f4._init, p4(c2, a4, E5(f4._payload), y3);
        }
        if (st(f4) || bn(f4))
          return E5 !== null ? null : m2(c2, a4, f4, y3, null);
        tr(c2, f4);
      }
      return null;
    }
    function g4(c2, a4, f4, y3, E5) {
      if (typeof y3 == "string" && y3 !== "" || typeof y3 == "number")
        return c2 = c2.get(f4) || null, o3(a4, c2, "" + y3, E5);
      if (typeof y3 == "object" && y3 !== null) {
        switch (y3.$$typeof) {
          case Bt:
            return c2 = c2.get(y3.key === null ? f4 : y3.key) || null, s3(a4, c2, y3, E5);
          case _n:
            return c2 = c2.get(y3.key === null ? f4 : y3.key) || null, d5(a4, c2, y3, E5);
          case He2:
            var C4 = y3._init;
            return g4(c2, a4, f4, C4(y3._payload), E5);
        }
        if (st(y3) || bn(y3))
          return c2 = c2.get(f4) || null, m2(a4, c2, y3, E5, null);
        tr(a4, y3);
      }
      return null;
    }
    function S3(c2, a4, f4, y3) {
      for (var E5 = null, C4 = null, x5 = a4, N3 = a4 = 0, H4 = null; x5 !== null && N3 < f4.length; N3++) {
        x5.index > N3 ? (H4 = x5, x5 = null) : H4 = x5.sibling;
        var z3 = p4(c2, x5, f4[N3], y3);
        if (z3 === null) {
          x5 === null && (x5 = H4);
          break;
        }
        e && x5 && z3.alternate === null && n2(c2, x5), a4 = i(z3, a4, N3), C4 === null ? E5 = z3 : C4.sibling = z3, C4 = z3, x5 = H4;
      }
      if (N3 === f4.length)
        return t(c2, x5), D2 && cn(c2, N3), E5;
      if (x5 === null) {
        for (; N3 < f4.length; N3++)
          x5 = h3(c2, f4[N3], y3), x5 !== null && (a4 = i(x5, a4, N3), C4 === null ? E5 = x5 : C4.sibling = x5, C4 = x5);
        return D2 && cn(c2, N3), E5;
      }
      for (x5 = r4(c2, x5); N3 < f4.length; N3++)
        H4 = g4(x5, c2, N3, f4[N3], y3), H4 !== null && (e && H4.alternate !== null && x5.delete(H4.key === null ? N3 : H4.key), a4 = i(H4, a4, N3), C4 === null ? E5 = H4 : C4.sibling = H4, C4 = H4);
      return e && x5.forEach(function(Ae2) {
        return n2(c2, Ae2);
      }), D2 && cn(c2, N3), E5;
    }
    function k2(c2, a4, f4, y3) {
      var E5 = bn(f4);
      if (typeof E5 != "function")
        throw Error(v3(150));
      if (f4 = E5.call(f4), f4 == null)
        throw Error(v3(151));
      for (var C4 = E5 = null, x5 = a4, N3 = a4 = 0, H4 = null, z3 = f4.next(); x5 !== null && !z3.done; N3++, z3 = f4.next()) {
        x5.index > N3 ? (H4 = x5, x5 = null) : H4 = x5.sibling;
        var Ae2 = p4(c2, x5, z3.value, y3);
        if (Ae2 === null) {
          x5 === null && (x5 = H4);
          break;
        }
        e && x5 && Ae2.alternate === null && n2(c2, x5), a4 = i(Ae2, a4, N3), C4 === null ? E5 = Ae2 : C4.sibling = Ae2, C4 = Ae2, x5 = H4;
      }
      if (z3.done)
        return t(c2, x5), D2 && cn(c2, N3), E5;
      if (x5 === null) {
        for (; !z3.done; N3++, z3 = f4.next())
          z3 = h3(c2, z3.value, y3), z3 !== null && (a4 = i(z3, a4, N3), C4 === null ? E5 = z3 : C4.sibling = z3, C4 = z3);
        return D2 && cn(c2, N3), E5;
      }
      for (x5 = r4(c2, x5); !z3.done; N3++, z3 = f4.next())
        z3 = g4(x5, c2, N3, z3.value, y3), z3 !== null && (e && z3.alternate !== null && x5.delete(z3.key === null ? N3 : z3.key), a4 = i(z3, a4, N3), C4 === null ? E5 = z3 : C4.sibling = z3, C4 = z3);
      return e && x5.forEach(function(Sa) {
        return n2(c2, Sa);
      }), D2 && cn(c2, N3), E5;
    }
    function U4(c2, a4, f4, y3) {
      if (typeof f4 == "object" && f4 !== null && f4.type === zn && f4.key === null && (f4 = f4.props.children), typeof f4 == "object" && f4 !== null) {
        switch (f4.$$typeof) {
          case Bt:
            e: {
              for (var E5 = f4.key, C4 = a4; C4 !== null; ) {
                if (C4.key === E5) {
                  if (E5 = f4.type, E5 === zn) {
                    if (C4.tag === 7) {
                      t(c2, C4.sibling), a4 = l3(C4, f4.props.children), a4.return = c2, c2 = a4;
                      break e;
                    }
                  } else if (C4.elementType === E5 || typeof E5 == "object" && E5 !== null && E5.$$typeof === He2 && Ku(E5) === C4.type) {
                    t(c2, C4.sibling), a4 = l3(C4, f4.props), a4.ref = rt(c2, C4, f4), a4.return = c2, c2 = a4;
                    break e;
                  }
                  t(c2, C4);
                  break;
                } else
                  n2(c2, C4);
                C4 = C4.sibling;
              }
              f4.type === zn ? (a4 = vn(f4.props.children, c2.mode, y3, f4.key), a4.return = c2, c2 = a4) : (y3 = hr(f4.type, f4.key, f4.props, null, c2.mode, y3), y3.ref = rt(c2, a4, f4), y3.return = c2, c2 = y3);
            }
            return u2(c2);
          case _n:
            e: {
              for (C4 = f4.key; a4 !== null; ) {
                if (a4.key === C4)
                  if (a4.tag === 4 && a4.stateNode.containerInfo === f4.containerInfo && a4.stateNode.implementation === f4.implementation) {
                    t(c2, a4.sibling), a4 = l3(a4, f4.children || []), a4.return = c2, c2 = a4;
                    break e;
                  } else {
                    t(c2, a4);
                    break;
                  }
                else
                  n2(c2, a4);
                a4 = a4.sibling;
              }
              a4 = xl(f4, c2.mode, y3), a4.return = c2, c2 = a4;
            }
            return u2(c2);
          case He2:
            return C4 = f4._init, U4(c2, a4, C4(f4._payload), y3);
        }
        if (st(f4))
          return S3(c2, a4, f4, y3);
        if (bn(f4))
          return k2(c2, a4, f4, y3);
        tr(c2, f4);
      }
      return typeof f4 == "string" && f4 !== "" || typeof f4 == "number" ? (f4 = "" + f4, a4 !== null && a4.tag === 6 ? (t(c2, a4.sibling), a4 = l3(a4, f4), a4.return = c2, c2 = a4) : (t(c2, a4), a4 = Cl(f4, c2.mode, y3), a4.return = c2, c2 = a4), u2(c2)) : t(c2, a4);
    }
    return U4;
  }
  var Yn = ys(true), gs = ys(false), Lr = un(null), Tr = null, Fn = null, Ii = null;
  function Ui() {
    Ii = Fn = Tr = null;
  }
  function ji(e) {
    var n2 = Lr.current;
    M3(Lr), e._currentValue = n2;
  }
  function ei(e, n2, t) {
    for (; e !== null; ) {
      var r4 = e.alternate;
      if ((e.childLanes & n2) !== n2 ? (e.childLanes |= n2, r4 !== null && (r4.childLanes |= n2)) : r4 !== null && (r4.childLanes & n2) !== n2 && (r4.childLanes |= n2), e === t)
        break;
      e = e.return;
    }
  }
  function Hn(e, n2) {
    Tr = e, Ii = Fn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n2 && (te3 = true), e.firstContext = null);
  }
  function ve3(e) {
    var n2 = e._currentValue;
    if (Ii !== e)
      if (e = { context: e, memoizedValue: n2, next: null }, Fn === null) {
        if (Tr === null)
          throw Error(v3(308));
        Fn = e, Tr.dependencies = { lanes: 0, firstContext: e };
      } else
        Fn = Fn.next = e;
    return n2;
  }
  var pn = null;
  function Vi(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  function ws(e, n2, t, r4) {
    var l3 = n2.interleaved;
    return l3 === null ? (t.next = t, Vi(n2)) : (t.next = l3.next, l3.next = t), n2.interleaved = t, Ue2(e, r4);
  }
  function Ue2(e, n2) {
    e.lanes |= n2;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n2), t = e, e = e.return; e !== null; )
      e.childLanes |= n2, t = e.alternate, t !== null && (t.childLanes |= n2), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var We2 = false;
  function Ai(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ss(e, n2) {
    e = e.updateQueue, n2.updateQueue === e && (n2.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Re2(e, n2) {
    return { eventTime: e, lane: n2, tag: 0, payload: null, callback: null, next: null };
  }
  function qe2(e, n2, t) {
    var r4 = e.updateQueue;
    if (r4 === null)
      return null;
    if (r4 = r4.shared, _2 & 2) {
      var l3 = r4.pending;
      return l3 === null ? n2.next = n2 : (n2.next = l3.next, l3.next = n2), r4.pending = n2, Ue2(e, t);
    }
    return l3 = r4.interleaved, l3 === null ? (n2.next = n2, Vi(r4)) : (n2.next = l3.next, l3.next = n2), r4.interleaved = n2, Ue2(e, t);
  }
  function ar(e, n2, t) {
    if (n2 = n2.updateQueue, n2 !== null && (n2 = n2.shared, (t & 4194240) !== 0)) {
      var r4 = n2.lanes;
      r4 &= e.pendingLanes, t |= r4, n2.lanes = t, Ni(e, t);
    }
  }
  function Yu(e, n2) {
    var t = e.updateQueue, r4 = e.alternate;
    if (r4 !== null && (r4 = r4.updateQueue, t === r4)) {
      var l3 = null, i = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var u2 = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          i === null ? l3 = i = u2 : i = i.next = u2, t = t.next;
        } while (t !== null);
        i === null ? l3 = i = n2 : i = i.next = n2;
      } else
        l3 = i = n2;
      t = { baseState: r4.baseState, firstBaseUpdate: l3, lastBaseUpdate: i, shared: r4.shared, effects: r4.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n2 : e.next = n2, t.lastBaseUpdate = n2;
  }
  function Mr(e, n2, t, r4) {
    var l3 = e.updateQueue;
    We2 = false;
    var i = l3.firstBaseUpdate, u2 = l3.lastBaseUpdate, o3 = l3.shared.pending;
    if (o3 !== null) {
      l3.shared.pending = null;
      var s3 = o3, d5 = s3.next;
      s3.next = null, u2 === null ? i = d5 : u2.next = d5, u2 = s3;
      var m2 = e.alternate;
      m2 !== null && (m2 = m2.updateQueue, o3 = m2.lastBaseUpdate, o3 !== u2 && (o3 === null ? m2.firstBaseUpdate = d5 : o3.next = d5, m2.lastBaseUpdate = s3));
    }
    if (i !== null) {
      var h3 = l3.baseState;
      u2 = 0, m2 = d5 = s3 = null, o3 = i;
      do {
        var p4 = o3.lane, g4 = o3.eventTime;
        if ((r4 & p4) === p4) {
          m2 !== null && (m2 = m2.next = { eventTime: g4, lane: 0, tag: o3.tag, payload: o3.payload, callback: o3.callback, next: null });
          e: {
            var S3 = e, k2 = o3;
            switch (p4 = n2, g4 = t, k2.tag) {
              case 1:
                if (S3 = k2.payload, typeof S3 == "function") {
                  h3 = S3.call(g4, h3, p4);
                  break e;
                }
                h3 = S3;
                break e;
              case 3:
                S3.flags = S3.flags & -65537 | 128;
              case 0:
                if (S3 = k2.payload, p4 = typeof S3 == "function" ? S3.call(g4, h3, p4) : S3, p4 == null)
                  break e;
                h3 = F3({}, h3, p4);
                break e;
              case 2:
                We2 = true;
            }
          }
          o3.callback !== null && o3.lane !== 0 && (e.flags |= 64, p4 = l3.effects, p4 === null ? l3.effects = [o3] : p4.push(o3));
        } else
          g4 = { eventTime: g4, lane: p4, tag: o3.tag, payload: o3.payload, callback: o3.callback, next: null }, m2 === null ? (d5 = m2 = g4, s3 = h3) : m2 = m2.next = g4, u2 |= p4;
        if (o3 = o3.next, o3 === null) {
          if (o3 = l3.shared.pending, o3 === null)
            break;
          p4 = o3, o3 = p4.next, p4.next = null, l3.lastBaseUpdate = p4, l3.shared.pending = null;
        }
      } while (true);
      if (m2 === null && (s3 = h3), l3.baseState = s3, l3.firstBaseUpdate = d5, l3.lastBaseUpdate = m2, n2 = l3.shared.interleaved, n2 !== null) {
        l3 = n2;
        do
          u2 |= l3.lane, l3 = l3.next;
        while (l3 !== n2);
      } else
        i === null && (l3.shared.lanes = 0);
      Sn |= u2, e.lanes = u2, e.memoizedState = h3;
    }
  }
  function Xu(e, n2, t) {
    if (e = n2.effects, n2.effects = null, e !== null)
      for (n2 = 0; n2 < e.length; n2++) {
        var r4 = e[n2], l3 = r4.callback;
        if (l3 !== null) {
          if (r4.callback = null, r4 = t, typeof l3 != "function")
            throw Error(v3(191, l3));
          l3.call(r4);
        }
      }
  }
  var At = {}, Le2 = un(At), Mt = un(At), Dt = un(At);
  function mn(e) {
    if (e === At)
      throw Error(v3(174));
    return e;
  }
  function Bi(e, n2) {
    switch (L(Dt, n2), L(Mt, e), L(Le2, At), e = n2.nodeType, e) {
      case 9:
      case 11:
        n2 = (n2 = n2.documentElement) ? n2.namespaceURI : Rl(null, "");
        break;
      default:
        e = e === 8 ? n2.parentNode : n2, n2 = e.namespaceURI || null, e = e.tagName, n2 = Rl(n2, e);
    }
    M3(Le2), L(Le2, n2);
  }
  function Xn() {
    M3(Le2), M3(Mt), M3(Dt);
  }
  function ks(e) {
    mn(Dt.current);
    var n2 = mn(Le2.current), t = Rl(n2, e.type);
    n2 !== t && (L(Mt, e), L(Le2, t));
  }
  function Hi(e) {
    Mt.current === e && (M3(Le2), M3(Mt));
  }
  var O5 = un(0);
  function Dr(e) {
    for (var n2 = e; n2 !== null; ) {
      if (n2.tag === 13) {
        var t = n2.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
          return n2;
      } else if (n2.tag === 19 && n2.memoizedProps.revealOrder !== void 0) {
        if (n2.flags & 128)
          return n2;
      } else if (n2.child !== null) {
        n2.child.return = n2, n2 = n2.child;
        continue;
      }
      if (n2 === e)
        break;
      for (; n2.sibling === null; ) {
        if (n2.return === null || n2.return === e)
          return null;
        n2 = n2.return;
      }
      n2.sibling.return = n2.return, n2 = n2.sibling;
    }
    return null;
  }
  var yl = [];
  function Wi() {
    for (var e = 0; e < yl.length; e++)
      yl[e]._workInProgressVersionPrimary = null;
    yl.length = 0;
  }
  var cr = Ve2.ReactCurrentDispatcher, gl = Ve2.ReactCurrentBatchConfig, wn = 0, R2 = null, A3 = null, W5 = null, Or = false, vt = false, Ot = 0, Zc = 0;
  function X2() {
    throw Error(v3(321));
  }
  function Qi(e, n2) {
    if (n2 === null)
      return false;
    for (var t = 0; t < n2.length && t < e.length; t++)
      if (!xe3(e[t], n2[t]))
        return false;
    return true;
  }
  function $i(e, n2, t, r4, l3, i) {
    if (wn = i, R2 = n2, n2.memoizedState = null, n2.updateQueue = null, n2.lanes = 0, cr.current = e === null || e.memoizedState === null ? ef : nf, e = t(r4, l3), vt) {
      i = 0;
      do {
        if (vt = false, Ot = 0, 25 <= i)
          throw Error(v3(301));
        i += 1, W5 = A3 = null, n2.updateQueue = null, cr.current = tf, e = t(r4, l3);
      } while (vt);
    }
    if (cr.current = Rr, n2 = A3 !== null && A3.next !== null, wn = 0, W5 = A3 = R2 = null, Or = false, n2)
      throw Error(v3(300));
    return e;
  }
  function Ki() {
    var e = Ot !== 0;
    return Ot = 0, e;
  }
  function _e4() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return W5 === null ? R2.memoizedState = W5 = e : W5 = W5.next = e, W5;
  }
  function ye3() {
    if (A3 === null) {
      var e = R2.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = A3.next;
    var n2 = W5 === null ? R2.memoizedState : W5.next;
    if (n2 !== null)
      W5 = n2, A3 = e;
    else {
      if (e === null)
        throw Error(v3(310));
      A3 = e, e = { memoizedState: A3.memoizedState, baseState: A3.baseState, baseQueue: A3.baseQueue, queue: A3.queue, next: null }, W5 === null ? R2.memoizedState = W5 = e : W5 = W5.next = e;
    }
    return W5;
  }
  function Rt(e, n2) {
    return typeof n2 == "function" ? n2(e) : n2;
  }
  function wl(e) {
    var n2 = ye3(), t = n2.queue;
    if (t === null)
      throw Error(v3(311));
    t.lastRenderedReducer = e;
    var r4 = A3, l3 = r4.baseQueue, i = t.pending;
    if (i !== null) {
      if (l3 !== null) {
        var u2 = l3.next;
        l3.next = i.next, i.next = u2;
      }
      r4.baseQueue = l3 = i, t.pending = null;
    }
    if (l3 !== null) {
      i = l3.next, r4 = r4.baseState;
      var o3 = u2 = null, s3 = null, d5 = i;
      do {
        var m2 = d5.lane;
        if ((wn & m2) === m2)
          s3 !== null && (s3 = s3.next = { lane: 0, action: d5.action, hasEagerState: d5.hasEagerState, eagerState: d5.eagerState, next: null }), r4 = d5.hasEagerState ? d5.eagerState : e(r4, d5.action);
        else {
          var h3 = { lane: m2, action: d5.action, hasEagerState: d5.hasEagerState, eagerState: d5.eagerState, next: null };
          s3 === null ? (o3 = s3 = h3, u2 = r4) : s3 = s3.next = h3, R2.lanes |= m2, Sn |= m2;
        }
        d5 = d5.next;
      } while (d5 !== null && d5 !== i);
      s3 === null ? u2 = r4 : s3.next = o3, xe3(r4, n2.memoizedState) || (te3 = true), n2.memoizedState = r4, n2.baseState = u2, n2.baseQueue = s3, t.lastRenderedState = r4;
    }
    if (e = t.interleaved, e !== null) {
      l3 = e;
      do
        i = l3.lane, R2.lanes |= i, Sn |= i, l3 = l3.next;
      while (l3 !== e);
    } else
      l3 === null && (t.lanes = 0);
    return [n2.memoizedState, t.dispatch];
  }
  function Sl(e) {
    var n2 = ye3(), t = n2.queue;
    if (t === null)
      throw Error(v3(311));
    t.lastRenderedReducer = e;
    var r4 = t.dispatch, l3 = t.pending, i = n2.memoizedState;
    if (l3 !== null) {
      t.pending = null;
      var u2 = l3 = l3.next;
      do
        i = e(i, u2.action), u2 = u2.next;
      while (u2 !== l3);
      xe3(i, n2.memoizedState) || (te3 = true), n2.memoizedState = i, n2.baseQueue === null && (n2.baseState = i), t.lastRenderedState = i;
    }
    return [i, r4];
  }
  function Es() {
  }
  function Cs(e, n2) {
    var t = R2, r4 = ye3(), l3 = n2(), i = !xe3(r4.memoizedState, l3);
    if (i && (r4.memoizedState = l3, te3 = true), r4 = r4.queue, Yi(_s.bind(null, t, r4, e), [e]), r4.getSnapshot !== n2 || i || W5 !== null && W5.memoizedState.tag & 1) {
      if (t.flags |= 2048, Ft(9, Ns.bind(null, t, r4, l3, n2), void 0, null), Q2 === null)
        throw Error(v3(349));
      wn & 30 || xs(t, n2, l3);
    }
    return l3;
  }
  function xs(e, n2, t) {
    e.flags |= 16384, e = { getSnapshot: n2, value: t }, n2 = R2.updateQueue, n2 === null ? (n2 = { lastEffect: null, stores: null }, R2.updateQueue = n2, n2.stores = [e]) : (t = n2.stores, t === null ? n2.stores = [e] : t.push(e));
  }
  function Ns(e, n2, t, r4) {
    n2.value = t, n2.getSnapshot = r4, zs(n2) && Ps(e);
  }
  function _s(e, n2, t) {
    return t(function() {
      zs(n2) && Ps(e);
    });
  }
  function zs(e) {
    var n2 = e.getSnapshot;
    e = e.value;
    try {
      var t = n2();
      return !xe3(e, t);
    } catch {
      return true;
    }
  }
  function Ps(e) {
    var n2 = Ue2(e, 1);
    n2 !== null && Ce3(n2, e, 1, -1);
  }
  function Gu(e) {
    var n2 = _e4();
    return typeof e == "function" && (e = e()), n2.memoizedState = n2.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Rt, lastRenderedState: e }, n2.queue = e, e = e.dispatch = bc.bind(null, R2, e), [n2.memoizedState, e];
  }
  function Ft(e, n2, t, r4) {
    return e = { tag: e, create: n2, destroy: t, deps: r4, next: null }, n2 = R2.updateQueue, n2 === null ? (n2 = { lastEffect: null, stores: null }, R2.updateQueue = n2, n2.lastEffect = e.next = e) : (t = n2.lastEffect, t === null ? n2.lastEffect = e.next = e : (r4 = t.next, t.next = e, e.next = r4, n2.lastEffect = e)), e;
  }
  function Ls() {
    return ye3().memoizedState;
  }
  function fr(e, n2, t, r4) {
    var l3 = _e4();
    R2.flags |= e, l3.memoizedState = Ft(1 | n2, t, void 0, r4 === void 0 ? null : r4);
  }
  function Kr(e, n2, t, r4) {
    var l3 = ye3();
    r4 = r4 === void 0 ? null : r4;
    var i = void 0;
    if (A3 !== null) {
      var u2 = A3.memoizedState;
      if (i = u2.destroy, r4 !== null && Qi(r4, u2.deps)) {
        l3.memoizedState = Ft(n2, t, i, r4);
        return;
      }
    }
    R2.flags |= e, l3.memoizedState = Ft(1 | n2, t, i, r4);
  }
  function Zu(e, n2) {
    return fr(8390656, 8, e, n2);
  }
  function Yi(e, n2) {
    return Kr(2048, 8, e, n2);
  }
  function Ts(e, n2) {
    return Kr(4, 2, e, n2);
  }
  function Ms(e, n2) {
    return Kr(4, 4, e, n2);
  }
  function Ds(e, n2) {
    if (typeof n2 == "function")
      return e = e(), n2(e), function() {
        n2(null);
      };
    if (n2 != null)
      return e = e(), n2.current = e, function() {
        n2.current = null;
      };
  }
  function Os(e, n2, t) {
    return t = t != null ? t.concat([e]) : null, Kr(4, 4, Ds.bind(null, n2, e), t);
  }
  function Xi() {
  }
  function Rs(e, n2) {
    var t = ye3();
    n2 = n2 === void 0 ? null : n2;
    var r4 = t.memoizedState;
    return r4 !== null && n2 !== null && Qi(n2, r4[1]) ? r4[0] : (t.memoizedState = [e, n2], e);
  }
  function Fs(e, n2) {
    var t = ye3();
    n2 = n2 === void 0 ? null : n2;
    var r4 = t.memoizedState;
    return r4 !== null && n2 !== null && Qi(n2, r4[1]) ? r4[0] : (e = e(), t.memoizedState = [e, n2], e);
  }
  function Is(e, n2, t) {
    return wn & 21 ? (xe3(t, n2) || (t = Bo(), R2.lanes |= t, Sn |= t, e.baseState = true), n2) : (e.baseState && (e.baseState = false, te3 = true), e.memoizedState = t);
  }
  function Jc(e, n2) {
    var t = P2;
    P2 = t !== 0 && 4 > t ? t : 4, e(true);
    var r4 = gl.transition;
    gl.transition = {};
    try {
      e(false), n2();
    } finally {
      P2 = t, gl.transition = r4;
    }
  }
  function Us() {
    return ye3().memoizedState;
  }
  function qc(e, n2, t) {
    var r4 = en(e);
    if (t = { lane: r4, action: t, hasEagerState: false, eagerState: null, next: null }, js(e))
      Vs(n2, t);
    else if (t = ws(e, n2, t, r4), t !== null) {
      var l3 = b3();
      Ce3(t, e, r4, l3), As(t, n2, r4);
    }
  }
  function bc(e, n2, t) {
    var r4 = en(e), l3 = { lane: r4, action: t, hasEagerState: false, eagerState: null, next: null };
    if (js(e))
      Vs(n2, l3);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = n2.lastRenderedReducer, i !== null))
        try {
          var u2 = n2.lastRenderedState, o3 = i(u2, t);
          if (l3.hasEagerState = true, l3.eagerState = o3, xe3(o3, u2)) {
            var s3 = n2.interleaved;
            s3 === null ? (l3.next = l3, Vi(n2)) : (l3.next = s3.next, s3.next = l3), n2.interleaved = l3;
            return;
          }
        } catch {
        } finally {
        }
      t = ws(e, n2, l3, r4), t !== null && (l3 = b3(), Ce3(t, e, r4, l3), As(t, n2, r4));
    }
  }
  function js(e) {
    var n2 = e.alternate;
    return e === R2 || n2 !== null && n2 === R2;
  }
  function Vs(e, n2) {
    vt = Or = true;
    var t = e.pending;
    t === null ? n2.next = n2 : (n2.next = t.next, t.next = n2), e.pending = n2;
  }
  function As(e, n2, t) {
    if (t & 4194240) {
      var r4 = n2.lanes;
      r4 &= e.pendingLanes, t |= r4, n2.lanes = t, Ni(e, t);
    }
  }
  var Rr = { readContext: ve3, useCallback: X2, useContext: X2, useEffect: X2, useImperativeHandle: X2, useInsertionEffect: X2, useLayoutEffect: X2, useMemo: X2, useReducer: X2, useRef: X2, useState: X2, useDebugValue: X2, useDeferredValue: X2, useTransition: X2, useMutableSource: X2, useSyncExternalStore: X2, useId: X2, unstable_isNewReconciler: false }, ef = { readContext: ve3, useCallback: function(e, n2) {
    return _e4().memoizedState = [e, n2 === void 0 ? null : n2], e;
  }, useContext: ve3, useEffect: Zu, useImperativeHandle: function(e, n2, t) {
    return t = t != null ? t.concat([e]) : null, fr(4194308, 4, Ds.bind(null, n2, e), t);
  }, useLayoutEffect: function(e, n2) {
    return fr(4194308, 4, e, n2);
  }, useInsertionEffect: function(e, n2) {
    return fr(4, 2, e, n2);
  }, useMemo: function(e, n2) {
    var t = _e4();
    return n2 = n2 === void 0 ? null : n2, e = e(), t.memoizedState = [e, n2], e;
  }, useReducer: function(e, n2, t) {
    var r4 = _e4();
    return n2 = t !== void 0 ? t(n2) : n2, r4.memoizedState = r4.baseState = n2, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n2 }, r4.queue = e, e = e.dispatch = qc.bind(null, R2, e), [r4.memoizedState, e];
  }, useRef: function(e) {
    var n2 = _e4();
    return e = { current: e }, n2.memoizedState = e;
  }, useState: Gu, useDebugValue: Xi, useDeferredValue: function(e) {
    return _e4().memoizedState = e;
  }, useTransition: function() {
    var e = Gu(false), n2 = e[0];
    return e = Jc.bind(null, e[1]), _e4().memoizedState = e, [n2, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n2, t) {
    var r4 = R2, l3 = _e4();
    if (D2) {
      if (t === void 0)
        throw Error(v3(407));
      t = t();
    } else {
      if (t = n2(), Q2 === null)
        throw Error(v3(349));
      wn & 30 || xs(r4, n2, t);
    }
    l3.memoizedState = t;
    var i = { value: t, getSnapshot: n2 };
    return l3.queue = i, Zu(_s.bind(null, r4, i, e), [e]), r4.flags |= 2048, Ft(9, Ns.bind(null, r4, i, t, n2), void 0, null), t;
  }, useId: function() {
    var e = _e4(), n2 = Q2.identifierPrefix;
    if (D2) {
      var t = Oe2, r4 = De2;
      t = (r4 & ~(1 << 32 - Ee3(r4) - 1)).toString(32) + t, n2 = ":" + n2 + "R" + t, t = Ot++, 0 < t && (n2 += "H" + t.toString(32)), n2 += ":";
    } else
      t = Zc++, n2 = ":" + n2 + "r" + t.toString(32) + ":";
    return e.memoizedState = n2;
  }, unstable_isNewReconciler: false }, nf = { readContext: ve3, useCallback: Rs, useContext: ve3, useEffect: Yi, useImperativeHandle: Os, useInsertionEffect: Ts, useLayoutEffect: Ms, useMemo: Fs, useReducer: wl, useRef: Ls, useState: function() {
    return wl(Rt);
  }, useDebugValue: Xi, useDeferredValue: function(e) {
    var n2 = ye3();
    return Is(n2, A3.memoizedState, e);
  }, useTransition: function() {
    var e = wl(Rt)[0], n2 = ye3().memoizedState;
    return [e, n2];
  }, useMutableSource: Es, useSyncExternalStore: Cs, useId: Us, unstable_isNewReconciler: false }, tf = { readContext: ve3, useCallback: Rs, useContext: ve3, useEffect: Yi, useImperativeHandle: Os, useInsertionEffect: Ts, useLayoutEffect: Ms, useMemo: Fs, useReducer: Sl, useRef: Ls, useState: function() {
    return Sl(Rt);
  }, useDebugValue: Xi, useDeferredValue: function(e) {
    var n2 = ye3();
    return A3 === null ? n2.memoizedState = e : Is(n2, A3.memoizedState, e);
  }, useTransition: function() {
    var e = Sl(Rt)[0], n2 = ye3().memoizedState;
    return [e, n2];
  }, useMutableSource: Es, useSyncExternalStore: Cs, useId: Us, unstable_isNewReconciler: false };
  function we3(e, n2) {
    if (e && e.defaultProps) {
      n2 = F3({}, n2), e = e.defaultProps;
      for (var t in e)
        n2[t] === void 0 && (n2[t] = e[t]);
      return n2;
    }
    return n2;
  }
  function ni(e, n2, t, r4) {
    n2 = e.memoizedState, t = t(r4, n2), t = t == null ? n2 : F3({}, n2, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Yr = { isMounted: function(e) {
    return (e = e._reactInternals) ? Cn(e) === e : false;
  }, enqueueSetState: function(e, n2, t) {
    e = e._reactInternals;
    var r4 = b3(), l3 = en(e), i = Re2(r4, l3);
    i.payload = n2, t != null && (i.callback = t), n2 = qe2(e, i, l3), n2 !== null && (Ce3(n2, e, l3, r4), ar(n2, e, l3));
  }, enqueueReplaceState: function(e, n2, t) {
    e = e._reactInternals;
    var r4 = b3(), l3 = en(e), i = Re2(r4, l3);
    i.tag = 1, i.payload = n2, t != null && (i.callback = t), n2 = qe2(e, i, l3), n2 !== null && (Ce3(n2, e, l3, r4), ar(n2, e, l3));
  }, enqueueForceUpdate: function(e, n2) {
    e = e._reactInternals;
    var t = b3(), r4 = en(e), l3 = Re2(t, r4);
    l3.tag = 2, n2 != null && (l3.callback = n2), n2 = qe2(e, l3, r4), n2 !== null && (Ce3(n2, e, r4, t), ar(n2, e, r4));
  } };
  function Ju(e, n2, t, r4, l3, i, u2) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r4, i, u2) : n2.prototype && n2.prototype.isPureReactComponent ? !zt(t, r4) || !zt(l3, i) : true;
  }
  function Bs(e, n2, t) {
    var r4 = false, l3 = rn, i = n2.contextType;
    return typeof i == "object" && i !== null ? i = ve3(i) : (l3 = le3(n2) ? yn : J3.current, r4 = n2.contextTypes, i = (r4 = r4 != null) ? $n(e, l3) : rn), n2 = new n2(t, i), e.memoizedState = n2.state !== null && n2.state !== void 0 ? n2.state : null, n2.updater = Yr, e.stateNode = n2, n2._reactInternals = e, r4 && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l3, e.__reactInternalMemoizedMaskedChildContext = i), n2;
  }
  function qu(e, n2, t, r4) {
    e = n2.state, typeof n2.componentWillReceiveProps == "function" && n2.componentWillReceiveProps(t, r4), typeof n2.UNSAFE_componentWillReceiveProps == "function" && n2.UNSAFE_componentWillReceiveProps(t, r4), n2.state !== e && Yr.enqueueReplaceState(n2, n2.state, null);
  }
  function ti(e, n2, t, r4) {
    var l3 = e.stateNode;
    l3.props = t, l3.state = e.memoizedState, l3.refs = {}, Ai(e);
    var i = n2.contextType;
    typeof i == "object" && i !== null ? l3.context = ve3(i) : (i = le3(n2) ? yn : J3.current, l3.context = $n(e, i)), l3.state = e.memoizedState, i = n2.getDerivedStateFromProps, typeof i == "function" && (ni(e, n2, i, t), l3.state = e.memoizedState), typeof n2.getDerivedStateFromProps == "function" || typeof l3.getSnapshotBeforeUpdate == "function" || typeof l3.UNSAFE_componentWillMount != "function" && typeof l3.componentWillMount != "function" || (n2 = l3.state, typeof l3.componentWillMount == "function" && l3.componentWillMount(), typeof l3.UNSAFE_componentWillMount == "function" && l3.UNSAFE_componentWillMount(), n2 !== l3.state && Yr.enqueueReplaceState(l3, l3.state, null), Mr(e, t, l3, r4), l3.state = e.memoizedState), typeof l3.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Gn(e, n2) {
    try {
      var t = "", r4 = n2;
      do
        t += Da(r4), r4 = r4.return;
      while (r4);
      var l3 = t;
    } catch (i) {
      l3 = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: n2, stack: l3, digest: null };
  }
  function kl(e, n2, t) {
    return { value: e, source: null, stack: t ?? null, digest: n2 ?? null };
  }
  function ri(e, n2) {
    try {
      console.error(n2.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var rf = typeof WeakMap == "function" ? WeakMap : Map;
  function Hs(e, n2, t) {
    t = Re2(-1, t), t.tag = 3, t.payload = { element: null };
    var r4 = n2.value;
    return t.callback = function() {
      Ir || (Ir = true, pi = r4), ri(e, n2);
    }, t;
  }
  function Ws(e, n2, t) {
    t = Re2(-1, t), t.tag = 3;
    var r4 = e.type.getDerivedStateFromError;
    if (typeof r4 == "function") {
      var l3 = n2.value;
      t.payload = function() {
        return r4(l3);
      }, t.callback = function() {
        ri(e, n2);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      ri(e, n2), typeof r4 != "function" && (be3 === null ? be3 = /* @__PURE__ */ new Set([this]) : be3.add(this));
      var u2 = n2.stack;
      this.componentDidCatch(n2.value, { componentStack: u2 !== null ? u2 : "" });
    }), t;
  }
  function bu(e, n2, t) {
    var r4 = e.pingCache;
    if (r4 === null) {
      r4 = e.pingCache = new rf();
      var l3 = /* @__PURE__ */ new Set();
      r4.set(n2, l3);
    } else
      l3 = r4.get(n2), l3 === void 0 && (l3 = /* @__PURE__ */ new Set(), r4.set(n2, l3));
    l3.has(t) || (l3.add(t), e = gf.bind(null, e, n2, t), n2.then(e, e));
  }
  function eo(e) {
    do {
      var n2;
      if ((n2 = e.tag === 13) && (n2 = e.memoizedState, n2 = n2 !== null ? n2.dehydrated !== null : true), n2)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function no(e, n2, t, r4, l3) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l3, e) : (e === n2 ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n2 = Re2(-1, 1), n2.tag = 2, qe2(t, n2, 1))), t.lanes |= 1), e);
  }
  var lf = Ve2.ReactCurrentOwner, te3 = false;
  function q3(e, n2, t, r4) {
    n2.child = e === null ? gs(n2, null, t, r4) : Yn(n2, e.child, t, r4);
  }
  function to(e, n2, t, r4, l3) {
    t = t.render;
    var i = n2.ref;
    return Hn(n2, l3), r4 = $i(e, n2, t, r4, i, l3), t = Ki(), e !== null && !te3 ? (n2.updateQueue = e.updateQueue, n2.flags &= -2053, e.lanes &= ~l3, je2(e, n2, l3)) : (D2 && t && Oi(n2), n2.flags |= 1, q3(e, n2, r4, l3), n2.child);
  }
  function ro(e, n2, t, r4, l3) {
    if (e === null) {
      var i = t.type;
      return typeof i == "function" && !tu(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n2.tag = 15, n2.type = i, Qs(e, n2, i, r4, l3)) : (e = hr(t.type, null, r4, n2, n2.mode, l3), e.ref = n2.ref, e.return = n2, n2.child = e);
    }
    if (i = e.child, !(e.lanes & l3)) {
      var u2 = i.memoizedProps;
      if (t = t.compare, t = t !== null ? t : zt, t(u2, r4) && e.ref === n2.ref)
        return je2(e, n2, l3);
    }
    return n2.flags |= 1, e = nn(i, r4), e.ref = n2.ref, e.return = n2, n2.child = e;
  }
  function Qs(e, n2, t, r4, l3) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (zt(i, r4) && e.ref === n2.ref)
        if (te3 = false, n2.pendingProps = r4 = i, (e.lanes & l3) !== 0)
          e.flags & 131072 && (te3 = true);
        else
          return n2.lanes = e.lanes, je2(e, n2, l3);
    }
    return li(e, n2, t, r4, l3);
  }
  function $s(e, n2, t) {
    var r4 = n2.pendingProps, l3 = r4.children, i = e !== null ? e.memoizedState : null;
    if (r4.mode === "hidden")
      if (!(n2.mode & 1))
        n2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, L(Un, ue2), ue2 |= t;
      else {
        if (!(t & 1073741824))
          return e = i !== null ? i.baseLanes | t : t, n2.lanes = n2.childLanes = 1073741824, n2.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n2.updateQueue = null, L(Un, ue2), ue2 |= e, null;
        n2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r4 = i !== null ? i.baseLanes : t, L(Un, ue2), ue2 |= r4;
      }
    else
      i !== null ? (r4 = i.baseLanes | t, n2.memoizedState = null) : r4 = t, L(Un, ue2), ue2 |= r4;
    return q3(e, n2, l3, t), n2.child;
  }
  function Ks(e, n2) {
    var t = n2.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n2.flags |= 512, n2.flags |= 2097152);
  }
  function li(e, n2, t, r4, l3) {
    var i = le3(t) ? yn : J3.current;
    return i = $n(n2, i), Hn(n2, l3), t = $i(e, n2, t, r4, i, l3), r4 = Ki(), e !== null && !te3 ? (n2.updateQueue = e.updateQueue, n2.flags &= -2053, e.lanes &= ~l3, je2(e, n2, l3)) : (D2 && r4 && Oi(n2), n2.flags |= 1, q3(e, n2, t, l3), n2.child);
  }
  function lo(e, n2, t, r4, l3) {
    if (le3(t)) {
      var i = true;
      _r(n2);
    } else
      i = false;
    if (Hn(n2, l3), n2.stateNode === null)
      dr(e, n2), Bs(n2, t, r4), ti(n2, t, r4, l3), r4 = true;
    else if (e === null) {
      var u2 = n2.stateNode, o3 = n2.memoizedProps;
      u2.props = o3;
      var s3 = u2.context, d5 = t.contextType;
      typeof d5 == "object" && d5 !== null ? d5 = ve3(d5) : (d5 = le3(t) ? yn : J3.current, d5 = $n(n2, d5));
      var m2 = t.getDerivedStateFromProps, h3 = typeof m2 == "function" || typeof u2.getSnapshotBeforeUpdate == "function";
      h3 || typeof u2.UNSAFE_componentWillReceiveProps != "function" && typeof u2.componentWillReceiveProps != "function" || (o3 !== r4 || s3 !== d5) && qu(n2, u2, r4, d5), We2 = false;
      var p4 = n2.memoizedState;
      u2.state = p4, Mr(n2, r4, u2, l3), s3 = n2.memoizedState, o3 !== r4 || p4 !== s3 || re3.current || We2 ? (typeof m2 == "function" && (ni(n2, t, m2, r4), s3 = n2.memoizedState), (o3 = We2 || Ju(n2, t, o3, r4, p4, s3, d5)) ? (h3 || typeof u2.UNSAFE_componentWillMount != "function" && typeof u2.componentWillMount != "function" || (typeof u2.componentWillMount == "function" && u2.componentWillMount(), typeof u2.UNSAFE_componentWillMount == "function" && u2.UNSAFE_componentWillMount()), typeof u2.componentDidMount == "function" && (n2.flags |= 4194308)) : (typeof u2.componentDidMount == "function" && (n2.flags |= 4194308), n2.memoizedProps = r4, n2.memoizedState = s3), u2.props = r4, u2.state = s3, u2.context = d5, r4 = o3) : (typeof u2.componentDidMount == "function" && (n2.flags |= 4194308), r4 = false);
    } else {
      u2 = n2.stateNode, Ss(e, n2), o3 = n2.memoizedProps, d5 = n2.type === n2.elementType ? o3 : we3(n2.type, o3), u2.props = d5, h3 = n2.pendingProps, p4 = u2.context, s3 = t.contextType, typeof s3 == "object" && s3 !== null ? s3 = ve3(s3) : (s3 = le3(t) ? yn : J3.current, s3 = $n(n2, s3));
      var g4 = t.getDerivedStateFromProps;
      (m2 = typeof g4 == "function" || typeof u2.getSnapshotBeforeUpdate == "function") || typeof u2.UNSAFE_componentWillReceiveProps != "function" && typeof u2.componentWillReceiveProps != "function" || (o3 !== h3 || p4 !== s3) && qu(n2, u2, r4, s3), We2 = false, p4 = n2.memoizedState, u2.state = p4, Mr(n2, r4, u2, l3);
      var S3 = n2.memoizedState;
      o3 !== h3 || p4 !== S3 || re3.current || We2 ? (typeof g4 == "function" && (ni(n2, t, g4, r4), S3 = n2.memoizedState), (d5 = We2 || Ju(n2, t, d5, r4, p4, S3, s3) || false) ? (m2 || typeof u2.UNSAFE_componentWillUpdate != "function" && typeof u2.componentWillUpdate != "function" || (typeof u2.componentWillUpdate == "function" && u2.componentWillUpdate(r4, S3, s3), typeof u2.UNSAFE_componentWillUpdate == "function" && u2.UNSAFE_componentWillUpdate(r4, S3, s3)), typeof u2.componentDidUpdate == "function" && (n2.flags |= 4), typeof u2.getSnapshotBeforeUpdate == "function" && (n2.flags |= 1024)) : (typeof u2.componentDidUpdate != "function" || o3 === e.memoizedProps && p4 === e.memoizedState || (n2.flags |= 4), typeof u2.getSnapshotBeforeUpdate != "function" || o3 === e.memoizedProps && p4 === e.memoizedState || (n2.flags |= 1024), n2.memoizedProps = r4, n2.memoizedState = S3), u2.props = r4, u2.state = S3, u2.context = s3, r4 = d5) : (typeof u2.componentDidUpdate != "function" || o3 === e.memoizedProps && p4 === e.memoizedState || (n2.flags |= 4), typeof u2.getSnapshotBeforeUpdate != "function" || o3 === e.memoizedProps && p4 === e.memoizedState || (n2.flags |= 1024), r4 = false);
    }
    return ii(e, n2, t, r4, i, l3);
  }
  function ii(e, n2, t, r4, l3, i) {
    Ks(e, n2);
    var u2 = (n2.flags & 128) !== 0;
    if (!r4 && !u2)
      return l3 && Wu(n2, t, false), je2(e, n2, i);
    r4 = n2.stateNode, lf.current = n2;
    var o3 = u2 && typeof t.getDerivedStateFromError != "function" ? null : r4.render();
    return n2.flags |= 1, e !== null && u2 ? (n2.child = Yn(n2, e.child, null, i), n2.child = Yn(n2, null, o3, i)) : q3(e, n2, o3, i), n2.memoizedState = r4.state, l3 && Wu(n2, t, true), n2.child;
  }
  function Ys(e) {
    var n2 = e.stateNode;
    n2.pendingContext ? Hu(e, n2.pendingContext, n2.pendingContext !== n2.context) : n2.context && Hu(e, n2.context, false), Bi(e, n2.containerInfo);
  }
  function io(e, n2, t, r4, l3) {
    return Kn(), Fi(l3), n2.flags |= 256, q3(e, n2, t, r4), n2.child;
  }
  var ui = { dehydrated: null, treeContext: null, retryLane: 0 };
  function oi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xs(e, n2, t) {
    var r4 = n2.pendingProps, l3 = O5.current, i = false, u2 = (n2.flags & 128) !== 0, o3;
    if ((o3 = u2) || (o3 = e !== null && e.memoizedState === null ? false : (l3 & 2) !== 0), o3 ? (i = true, n2.flags &= -129) : (e === null || e.memoizedState !== null) && (l3 |= 1), L(O5, l3 & 1), e === null)
      return bl(n2), e = n2.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n2.mode & 1 ? e.data === "$!" ? n2.lanes = 8 : n2.lanes = 1073741824 : n2.lanes = 1, null) : (u2 = r4.children, e = r4.fallback, i ? (r4 = n2.mode, i = n2.child, u2 = { mode: "hidden", children: u2 }, !(r4 & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = u2) : i = Zr(u2, r4, 0, null), e = vn(e, r4, t, null), i.return = n2, e.return = n2, i.sibling = e, n2.child = i, n2.child.memoizedState = oi(t), n2.memoizedState = ui, e) : Gi(n2, u2));
    if (l3 = e.memoizedState, l3 !== null && (o3 = l3.dehydrated, o3 !== null))
      return uf(e, n2, u2, r4, o3, l3, t);
    if (i) {
      i = r4.fallback, u2 = n2.mode, l3 = e.child, o3 = l3.sibling;
      var s3 = { mode: "hidden", children: r4.children };
      return !(u2 & 1) && n2.child !== l3 ? (r4 = n2.child, r4.childLanes = 0, r4.pendingProps = s3, n2.deletions = null) : (r4 = nn(l3, s3), r4.subtreeFlags = l3.subtreeFlags & 14680064), o3 !== null ? i = nn(o3, i) : (i = vn(i, u2, t, null), i.flags |= 2), i.return = n2, r4.return = n2, r4.sibling = i, n2.child = r4, r4 = i, i = n2.child, u2 = e.child.memoizedState, u2 = u2 === null ? oi(t) : { baseLanes: u2.baseLanes | t, cachePool: null, transitions: u2.transitions }, i.memoizedState = u2, i.childLanes = e.childLanes & ~t, n2.memoizedState = ui, r4;
    }
    return i = e.child, e = i.sibling, r4 = nn(i, { mode: "visible", children: r4.children }), !(n2.mode & 1) && (r4.lanes = t), r4.return = n2, r4.sibling = null, e !== null && (t = n2.deletions, t === null ? (n2.deletions = [e], n2.flags |= 16) : t.push(e)), n2.child = r4, n2.memoizedState = null, r4;
  }
  function Gi(e, n2) {
    return n2 = Zr({ mode: "visible", children: n2 }, e.mode, 0, null), n2.return = e, e.child = n2;
  }
  function rr(e, n2, t, r4) {
    return r4 !== null && Fi(r4), Yn(n2, e.child, null, t), e = Gi(n2, n2.pendingProps.children), e.flags |= 2, n2.memoizedState = null, e;
  }
  function uf(e, n2, t, r4, l3, i, u2) {
    if (t)
      return n2.flags & 256 ? (n2.flags &= -257, r4 = kl(Error(v3(422))), rr(e, n2, u2, r4)) : n2.memoizedState !== null ? (n2.child = e.child, n2.flags |= 128, null) : (i = r4.fallback, l3 = n2.mode, r4 = Zr({ mode: "visible", children: r4.children }, l3, 0, null), i = vn(i, l3, u2, null), i.flags |= 2, r4.return = n2, i.return = n2, r4.sibling = i, n2.child = r4, n2.mode & 1 && Yn(n2, e.child, null, u2), n2.child.memoizedState = oi(u2), n2.memoizedState = ui, i);
    if (!(n2.mode & 1))
      return rr(e, n2, u2, null);
    if (l3.data === "$!") {
      if (r4 = l3.nextSibling && l3.nextSibling.dataset, r4)
        var o3 = r4.dgst;
      return r4 = o3, i = Error(v3(419)), r4 = kl(i, r4, void 0), rr(e, n2, u2, r4);
    }
    if (o3 = (u2 & e.childLanes) !== 0, te3 || o3) {
      if (r4 = Q2, r4 !== null) {
        switch (u2 & -u2) {
          case 4:
            l3 = 2;
            break;
          case 16:
            l3 = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l3 = 32;
            break;
          case 536870912:
            l3 = 268435456;
            break;
          default:
            l3 = 0;
        }
        l3 = l3 & (r4.suspendedLanes | u2) ? 0 : l3, l3 !== 0 && l3 !== i.retryLane && (i.retryLane = l3, Ue2(e, l3), Ce3(r4, e, l3, -1));
      }
      return nu(), r4 = kl(Error(v3(421))), rr(e, n2, u2, r4);
    }
    return l3.data === "$?" ? (n2.flags |= 128, n2.child = e.child, n2 = wf.bind(null, e), l3._reactRetry = n2, null) : (e = i.treeContext, oe3 = Je(l3.nextSibling), se2 = n2, D2 = true, ke3 = null, e !== null && (de3[pe4++] = De2, de3[pe4++] = Oe2, de3[pe4++] = gn, De2 = e.id, Oe2 = e.overflow, gn = n2), n2 = Gi(n2, r4.children), n2.flags |= 4096, n2);
  }
  function uo(e, n2, t) {
    e.lanes |= n2;
    var r4 = e.alternate;
    r4 !== null && (r4.lanes |= n2), ei(e.return, n2, t);
  }
  function El(e, n2, t, r4, l3) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: n2, rendering: null, renderingStartTime: 0, last: r4, tail: t, tailMode: l3 } : (i.isBackwards = n2, i.rendering = null, i.renderingStartTime = 0, i.last = r4, i.tail = t, i.tailMode = l3);
  }
  function Gs(e, n2, t) {
    var r4 = n2.pendingProps, l3 = r4.revealOrder, i = r4.tail;
    if (q3(e, n2, r4.children, t), r4 = O5.current, r4 & 2)
      r4 = r4 & 1 | 2, n2.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n2.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && uo(e, t, n2);
            else if (e.tag === 19)
              uo(e, t, n2);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === n2)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === n2)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r4 &= 1;
    }
    if (L(O5, r4), !(n2.mode & 1))
      n2.memoizedState = null;
    else
      switch (l3) {
        case "forwards":
          for (t = n2.child, l3 = null; t !== null; )
            e = t.alternate, e !== null && Dr(e) === null && (l3 = t), t = t.sibling;
          t = l3, t === null ? (l3 = n2.child, n2.child = null) : (l3 = t.sibling, t.sibling = null), El(n2, false, l3, t, i);
          break;
        case "backwards":
          for (t = null, l3 = n2.child, n2.child = null; l3 !== null; ) {
            if (e = l3.alternate, e !== null && Dr(e) === null) {
              n2.child = l3;
              break;
            }
            e = l3.sibling, l3.sibling = t, t = l3, l3 = e;
          }
          El(n2, true, t, null, i);
          break;
        case "together":
          El(n2, false, null, null, void 0);
          break;
        default:
          n2.memoizedState = null;
      }
    return n2.child;
  }
  function dr(e, n2) {
    !(n2.mode & 1) && e !== null && (e.alternate = null, n2.alternate = null, n2.flags |= 2);
  }
  function je2(e, n2, t) {
    if (e !== null && (n2.dependencies = e.dependencies), Sn |= n2.lanes, !(t & n2.childLanes))
      return null;
    if (e !== null && n2.child !== e.child)
      throw Error(v3(153));
    if (n2.child !== null) {
      for (e = n2.child, t = nn(e, e.pendingProps), n2.child = t, t.return = n2; e.sibling !== null; )
        e = e.sibling, t = t.sibling = nn(e, e.pendingProps), t.return = n2;
      t.sibling = null;
    }
    return n2.child;
  }
  function of(e, n2, t) {
    switch (n2.tag) {
      case 3:
        Ys(n2), Kn();
        break;
      case 5:
        ks(n2);
        break;
      case 1:
        le3(n2.type) && _r(n2);
        break;
      case 4:
        Bi(n2, n2.stateNode.containerInfo);
        break;
      case 10:
        var r4 = n2.type._context, l3 = n2.memoizedProps.value;
        L(Lr, r4._currentValue), r4._currentValue = l3;
        break;
      case 13:
        if (r4 = n2.memoizedState, r4 !== null)
          return r4.dehydrated !== null ? (L(O5, O5.current & 1), n2.flags |= 128, null) : t & n2.child.childLanes ? Xs(e, n2, t) : (L(O5, O5.current & 1), e = je2(e, n2, t), e !== null ? e.sibling : null);
        L(O5, O5.current & 1);
        break;
      case 19:
        if (r4 = (t & n2.childLanes) !== 0, e.flags & 128) {
          if (r4)
            return Gs(e, n2, t);
          n2.flags |= 128;
        }
        if (l3 = n2.memoizedState, l3 !== null && (l3.rendering = null, l3.tail = null, l3.lastEffect = null), L(O5, O5.current), r4)
          break;
        return null;
      case 22:
      case 23:
        return n2.lanes = 0, $s(e, n2, t);
    }
    return je2(e, n2, t);
  }
  var Zs, si, Js, qs;
  Zs = function(e, n2) {
    for (var t = n2.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6)
        e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n2)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n2)
          return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  };
  si = function() {
  };
  Js = function(e, n2, t, r4) {
    var l3 = e.memoizedProps;
    if (l3 !== r4) {
      e = n2.stateNode, mn(Le2.current);
      var i = null;
      switch (t) {
        case "input":
          l3 = Tl(e, l3), r4 = Tl(e, r4), i = [];
          break;
        case "select":
          l3 = F3({}, l3, { value: void 0 }), r4 = F3({}, r4, { value: void 0 }), i = [];
          break;
        case "textarea":
          l3 = Ol(e, l3), r4 = Ol(e, r4), i = [];
          break;
        default:
          typeof l3.onClick != "function" && typeof r4.onClick == "function" && (e.onclick = xr);
      }
      Fl(t, r4);
      var u2;
      t = null;
      for (d5 in l3)
        if (!r4.hasOwnProperty(d5) && l3.hasOwnProperty(d5) && l3[d5] != null)
          if (d5 === "style") {
            var o3 = l3[d5];
            for (u2 in o3)
              o3.hasOwnProperty(u2) && (t || (t = {}), t[u2] = "");
          } else
            d5 !== "dangerouslySetInnerHTML" && d5 !== "children" && d5 !== "suppressContentEditableWarning" && d5 !== "suppressHydrationWarning" && d5 !== "autoFocus" && (St.hasOwnProperty(d5) ? i || (i = []) : (i = i || []).push(d5, null));
      for (d5 in r4) {
        var s3 = r4[d5];
        if (o3 = l3?.[d5], r4.hasOwnProperty(d5) && s3 !== o3 && (s3 != null || o3 != null))
          if (d5 === "style")
            if (o3) {
              for (u2 in o3)
                !o3.hasOwnProperty(u2) || s3 && s3.hasOwnProperty(u2) || (t || (t = {}), t[u2] = "");
              for (u2 in s3)
                s3.hasOwnProperty(u2) && o3[u2] !== s3[u2] && (t || (t = {}), t[u2] = s3[u2]);
            } else
              t || (i || (i = []), i.push(d5, t)), t = s3;
          else
            d5 === "dangerouslySetInnerHTML" ? (s3 = s3 ? s3.__html : void 0, o3 = o3 ? o3.__html : void 0, s3 != null && o3 !== s3 && (i = i || []).push(d5, s3)) : d5 === "children" ? typeof s3 != "string" && typeof s3 != "number" || (i = i || []).push(d5, "" + s3) : d5 !== "suppressContentEditableWarning" && d5 !== "suppressHydrationWarning" && (St.hasOwnProperty(d5) ? (s3 != null && d5 === "onScroll" && T3("scroll", e), i || o3 === s3 || (i = [])) : (i = i || []).push(d5, s3));
      }
      t && (i = i || []).push("style", t);
      var d5 = i;
      (n2.updateQueue = d5) && (n2.flags |= 4);
    }
  };
  qs = function(e, n2, t, r4) {
    t !== r4 && (n2.flags |= 4);
  };
  function lt(e, n2) {
    if (!D2)
      switch (e.tailMode) {
        case "hidden":
          n2 = e.tail;
          for (var t = null; n2 !== null; )
            n2.alternate !== null && (t = n2), n2 = n2.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var r4 = null; t !== null; )
            t.alternate !== null && (r4 = t), t = t.sibling;
          r4 === null ? n2 || e.tail === null ? e.tail = null : e.tail.sibling = null : r4.sibling = null;
      }
  }
  function G3(e) {
    var n2 = e.alternate !== null && e.alternate.child === e.child, t = 0, r4 = 0;
    if (n2)
      for (var l3 = e.child; l3 !== null; )
        t |= l3.lanes | l3.childLanes, r4 |= l3.subtreeFlags & 14680064, r4 |= l3.flags & 14680064, l3.return = e, l3 = l3.sibling;
    else
      for (l3 = e.child; l3 !== null; )
        t |= l3.lanes | l3.childLanes, r4 |= l3.subtreeFlags, r4 |= l3.flags, l3.return = e, l3 = l3.sibling;
    return e.subtreeFlags |= r4, e.childLanes = t, n2;
  }
  function sf(e, n2, t) {
    var r4 = n2.pendingProps;
    switch (Ri(n2), n2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return G3(n2), null;
      case 1:
        return le3(n2.type) && Nr(), G3(n2), null;
      case 3:
        return r4 = n2.stateNode, Xn(), M3(re3), M3(J3), Wi(), r4.pendingContext && (r4.context = r4.pendingContext, r4.pendingContext = null), (e === null || e.child === null) && (nr(n2) ? n2.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n2.flags & 256) || (n2.flags |= 1024, ke3 !== null && (vi(ke3), ke3 = null))), si(e, n2), G3(n2), null;
      case 5:
        Hi(n2);
        var l3 = mn(Dt.current);
        if (t = n2.type, e !== null && n2.stateNode != null)
          Js(e, n2, t, r4, l3), e.ref !== n2.ref && (n2.flags |= 512, n2.flags |= 2097152);
        else {
          if (!r4) {
            if (n2.stateNode === null)
              throw Error(v3(166));
            return G3(n2), null;
          }
          if (e = mn(Le2.current), nr(n2)) {
            r4 = n2.stateNode, t = n2.type;
            var i = n2.memoizedProps;
            switch (r4[ze2] = n2, r4[Tt] = i, e = (n2.mode & 1) !== 0, t) {
              case "dialog":
                T3("cancel", r4), T3("close", r4);
                break;
              case "iframe":
              case "object":
              case "embed":
                T3("load", r4);
                break;
              case "video":
              case "audio":
                for (l3 = 0; l3 < ct.length; l3++)
                  T3(ct[l3], r4);
                break;
              case "source":
                T3("error", r4);
                break;
              case "img":
              case "image":
              case "link":
                T3("error", r4), T3("load", r4);
                break;
              case "details":
                T3("toggle", r4);
                break;
              case "input":
                mu(r4, i), T3("invalid", r4);
                break;
              case "select":
                r4._wrapperState = { wasMultiple: !!i.multiple }, T3("invalid", r4);
                break;
              case "textarea":
                vu(r4, i), T3("invalid", r4);
            }
            Fl(t, i), l3 = null;
            for (var u2 in i)
              if (i.hasOwnProperty(u2)) {
                var o3 = i[u2];
                u2 === "children" ? typeof o3 == "string" ? r4.textContent !== o3 && (i.suppressHydrationWarning !== true && er(r4.textContent, o3, e), l3 = ["children", o3]) : typeof o3 == "number" && r4.textContent !== "" + o3 && (i.suppressHydrationWarning !== true && er(r4.textContent, o3, e), l3 = ["children", "" + o3]) : St.hasOwnProperty(u2) && o3 != null && u2 === "onScroll" && T3("scroll", r4);
              }
            switch (t) {
              case "input":
                Ht(r4), hu(r4, i, true);
                break;
              case "textarea":
                Ht(r4), yu(r4);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r4.onclick = xr);
            }
            r4 = l3, n2.updateQueue = r4, r4 !== null && (n2.flags |= 4);
          } else {
            u2 = l3.nodeType === 9 ? l3 : l3.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _o(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u2.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r4.is == "string" ? e = u2.createElement(t, { is: r4.is }) : (e = u2.createElement(t), t === "select" && (u2 = e, r4.multiple ? u2.multiple = true : r4.size && (u2.size = r4.size))) : e = u2.createElementNS(e, t), e[ze2] = n2, e[Tt] = r4, Zs(e, n2, false, false), n2.stateNode = e;
            e: {
              switch (u2 = Il(t, r4), t) {
                case "dialog":
                  T3("cancel", e), T3("close", e), l3 = r4;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  T3("load", e), l3 = r4;
                  break;
                case "video":
                case "audio":
                  for (l3 = 0; l3 < ct.length; l3++)
                    T3(ct[l3], e);
                  l3 = r4;
                  break;
                case "source":
                  T3("error", e), l3 = r4;
                  break;
                case "img":
                case "image":
                case "link":
                  T3("error", e), T3("load", e), l3 = r4;
                  break;
                case "details":
                  T3("toggle", e), l3 = r4;
                  break;
                case "input":
                  mu(e, r4), l3 = Tl(e, r4), T3("invalid", e);
                  break;
                case "option":
                  l3 = r4;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r4.multiple }, l3 = F3({}, r4, { value: void 0 }), T3("invalid", e);
                  break;
                case "textarea":
                  vu(e, r4), l3 = Ol(e, r4), T3("invalid", e);
                  break;
                default:
                  l3 = r4;
              }
              Fl(t, l3), o3 = l3;
              for (i in o3)
                if (o3.hasOwnProperty(i)) {
                  var s3 = o3[i];
                  i === "style" ? Lo(e, s3) : i === "dangerouslySetInnerHTML" ? (s3 = s3 ? s3.__html : void 0, s3 != null && zo(e, s3)) : i === "children" ? typeof s3 == "string" ? (t !== "textarea" || s3 !== "") && kt(e, s3) : typeof s3 == "number" && kt(e, "" + s3) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (St.hasOwnProperty(i) ? s3 != null && i === "onScroll" && T3("scroll", e) : s3 != null && wi(e, i, s3, u2));
                }
              switch (t) {
                case "input":
                  Ht(e), hu(e, r4, false);
                  break;
                case "textarea":
                  Ht(e), yu(e);
                  break;
                case "option":
                  r4.value != null && e.setAttribute("value", "" + tn(r4.value));
                  break;
                case "select":
                  e.multiple = !!r4.multiple, i = r4.value, i != null ? jn(e, !!r4.multiple, i, false) : r4.defaultValue != null && jn(e, !!r4.multiple, r4.defaultValue, true);
                  break;
                default:
                  typeof l3.onClick == "function" && (e.onclick = xr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r4 = !!r4.autoFocus;
                  break e;
                case "img":
                  r4 = true;
                  break e;
                default:
                  r4 = false;
              }
            }
            r4 && (n2.flags |= 4);
          }
          n2.ref !== null && (n2.flags |= 512, n2.flags |= 2097152);
        }
        return G3(n2), null;
      case 6:
        if (e && n2.stateNode != null)
          qs(e, n2, e.memoizedProps, r4);
        else {
          if (typeof r4 != "string" && n2.stateNode === null)
            throw Error(v3(166));
          if (t = mn(Dt.current), mn(Le2.current), nr(n2)) {
            if (r4 = n2.stateNode, t = n2.memoizedProps, r4[ze2] = n2, (i = r4.nodeValue !== t) && (e = se2, e !== null))
              switch (e.tag) {
                case 3:
                  er(r4.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== true && er(r4.nodeValue, t, (e.mode & 1) !== 0);
              }
            i && (n2.flags |= 4);
          } else
            r4 = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r4), r4[ze2] = n2, n2.stateNode = r4;
        }
        return G3(n2), null;
      case 13:
        if (M3(O5), r4 = n2.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (D2 && oe3 !== null && n2.mode & 1 && !(n2.flags & 128))
            vs(), Kn(), n2.flags |= 98560, i = false;
          else if (i = nr(n2), r4 !== null && r4.dehydrated !== null) {
            if (e === null) {
              if (!i)
                throw Error(v3(318));
              if (i = n2.memoizedState, i = i !== null ? i.dehydrated : null, !i)
                throw Error(v3(317));
              i[ze2] = n2;
            } else
              Kn(), !(n2.flags & 128) && (n2.memoizedState = null), n2.flags |= 4;
            G3(n2), i = false;
          } else
            ke3 !== null && (vi(ke3), ke3 = null), i = true;
          if (!i)
            return n2.flags & 65536 ? n2 : null;
        }
        return n2.flags & 128 ? (n2.lanes = t, n2) : (r4 = r4 !== null, r4 !== (e !== null && e.memoizedState !== null) && r4 && (n2.child.flags |= 8192, n2.mode & 1 && (e === null || O5.current & 1 ? B4 === 0 && (B4 = 3) : nu())), n2.updateQueue !== null && (n2.flags |= 4), G3(n2), null);
      case 4:
        return Xn(), si(e, n2), e === null && Pt(n2.stateNode.containerInfo), G3(n2), null;
      case 10:
        return ji(n2.type._context), G3(n2), null;
      case 17:
        return le3(n2.type) && Nr(), G3(n2), null;
      case 19:
        if (M3(O5), i = n2.memoizedState, i === null)
          return G3(n2), null;
        if (r4 = (n2.flags & 128) !== 0, u2 = i.rendering, u2 === null)
          if (r4)
            lt(i, false);
          else {
            if (B4 !== 0 || e !== null && e.flags & 128)
              for (e = n2.child; e !== null; ) {
                if (u2 = Dr(e), u2 !== null) {
                  for (n2.flags |= 128, lt(i, false), r4 = u2.updateQueue, r4 !== null && (n2.updateQueue = r4, n2.flags |= 4), n2.subtreeFlags = 0, r4 = t, t = n2.child; t !== null; )
                    i = t, e = r4, i.flags &= 14680066, u2 = i.alternate, u2 === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u2.childLanes, i.lanes = u2.lanes, i.child = u2.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u2.memoizedProps, i.memoizedState = u2.memoizedState, i.updateQueue = u2.updateQueue, i.type = u2.type, e = u2.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return L(O5, O5.current & 1 | 2), n2.child;
                }
                e = e.sibling;
              }
            i.tail !== null && j2() > Zn && (n2.flags |= 128, r4 = true, lt(i, false), n2.lanes = 4194304);
          }
        else {
          if (!r4)
            if (e = Dr(u2), e !== null) {
              if (n2.flags |= 128, r4 = true, t = e.updateQueue, t !== null && (n2.updateQueue = t, n2.flags |= 4), lt(i, true), i.tail === null && i.tailMode === "hidden" && !u2.alternate && !D2)
                return G3(n2), null;
            } else
              2 * j2() - i.renderingStartTime > Zn && t !== 1073741824 && (n2.flags |= 128, r4 = true, lt(i, false), n2.lanes = 4194304);
          i.isBackwards ? (u2.sibling = n2.child, n2.child = u2) : (t = i.last, t !== null ? t.sibling = u2 : n2.child = u2, i.last = u2);
        }
        return i.tail !== null ? (n2 = i.tail, i.rendering = n2, i.tail = n2.sibling, i.renderingStartTime = j2(), n2.sibling = null, t = O5.current, L(O5, r4 ? t & 1 | 2 : t & 1), n2) : (G3(n2), null);
      case 22:
      case 23:
        return eu(), r4 = n2.memoizedState !== null, e !== null && e.memoizedState !== null !== r4 && (n2.flags |= 8192), r4 && n2.mode & 1 ? ue2 & 1073741824 && (G3(n2), n2.subtreeFlags & 6 && (n2.flags |= 8192)) : G3(n2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(v3(156, n2.tag));
  }
  function af(e, n2) {
    switch (Ri(n2), n2.tag) {
      case 1:
        return le3(n2.type) && Nr(), e = n2.flags, e & 65536 ? (n2.flags = e & -65537 | 128, n2) : null;
      case 3:
        return Xn(), M3(re3), M3(J3), Wi(), e = n2.flags, e & 65536 && !(e & 128) ? (n2.flags = e & -65537 | 128, n2) : null;
      case 5:
        return Hi(n2), null;
      case 13:
        if (M3(O5), e = n2.memoizedState, e !== null && e.dehydrated !== null) {
          if (n2.alternate === null)
            throw Error(v3(340));
          Kn();
        }
        return e = n2.flags, e & 65536 ? (n2.flags = e & -65537 | 128, n2) : null;
      case 19:
        return M3(O5), null;
      case 4:
        return Xn(), null;
      case 10:
        return ji(n2.type._context), null;
      case 22:
      case 23:
        return eu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var lr = false, Z3 = false, cf = typeof WeakSet == "function" ? WeakSet : Set, w3 = null;
  function In(e, n2) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r4) {
          I2(e, n2, r4);
        }
      else
        t.current = null;
  }
  function ai(e, n2, t) {
    try {
      t();
    } catch (r4) {
      I2(e, n2, r4);
    }
  }
  var oo = false;
  function ff(e, n2) {
    if (Kl = kr, e = rs(), Di(e)) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var r4 = t.getSelection && t.getSelection();
          if (r4 && r4.rangeCount !== 0) {
            t = r4.anchorNode;
            var l3 = r4.anchorOffset, i = r4.focusNode;
            r4 = r4.focusOffset;
            try {
              t.nodeType, i.nodeType;
            } catch {
              t = null;
              break e;
            }
            var u2 = 0, o3 = -1, s3 = -1, d5 = 0, m2 = 0, h3 = e, p4 = null;
            n:
              for (; ; ) {
                for (var g4; h3 !== t || l3 !== 0 && h3.nodeType !== 3 || (o3 = u2 + l3), h3 !== i || r4 !== 0 && h3.nodeType !== 3 || (s3 = u2 + r4), h3.nodeType === 3 && (u2 += h3.nodeValue.length), (g4 = h3.firstChild) !== null; )
                  p4 = h3, h3 = g4;
                for (; ; ) {
                  if (h3 === e)
                    break n;
                  if (p4 === t && ++d5 === l3 && (o3 = u2), p4 === i && ++m2 === r4 && (s3 = u2), (g4 = h3.nextSibling) !== null)
                    break;
                  h3 = p4, p4 = h3.parentNode;
                }
                h3 = g4;
              }
            t = o3 === -1 || s3 === -1 ? null : { start: o3, end: s3 };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (Yl = { focusedElem: e, selectionRange: t }, kr = false, w3 = n2; w3 !== null; )
      if (n2 = w3, e = n2.child, (n2.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n2, w3 = e;
      else
        for (; w3 !== null; ) {
          n2 = w3;
          try {
            var S3 = n2.alternate;
            if (n2.flags & 1024)
              switch (n2.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (S3 !== null) {
                    var k2 = S3.memoizedProps, U4 = S3.memoizedState, c2 = n2.stateNode, a4 = c2.getSnapshotBeforeUpdate(n2.elementType === n2.type ? k2 : we3(n2.type, k2), U4);
                    c2.__reactInternalSnapshotBeforeUpdate = a4;
                  }
                  break;
                case 3:
                  var f4 = n2.stateNode.containerInfo;
                  f4.nodeType === 1 ? f4.textContent = "" : f4.nodeType === 9 && f4.documentElement && f4.removeChild(f4.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(v3(163));
              }
          } catch (y3) {
            I2(n2, n2.return, y3);
          }
          if (e = n2.sibling, e !== null) {
            e.return = n2.return, w3 = e;
            break;
          }
          w3 = n2.return;
        }
    return S3 = oo, oo = false, S3;
  }
  function yt(e, n2, t) {
    var r4 = n2.updateQueue;
    if (r4 = r4 !== null ? r4.lastEffect : null, r4 !== null) {
      var l3 = r4 = r4.next;
      do {
        if ((l3.tag & e) === e) {
          var i = l3.destroy;
          l3.destroy = void 0, i !== void 0 && ai(n2, t, i);
        }
        l3 = l3.next;
      } while (l3 !== r4);
    }
  }
  function Xr(e, n2) {
    if (n2 = n2.updateQueue, n2 = n2 !== null ? n2.lastEffect : null, n2 !== null) {
      var t = n2 = n2.next;
      do {
        if ((t.tag & e) === e) {
          var r4 = t.create;
          t.destroy = r4();
        }
        t = t.next;
      } while (t !== n2);
    }
  }
  function ci(e) {
    var n2 = e.ref;
    if (n2 !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n2 == "function" ? n2(e) : n2.current = e;
    }
  }
  function bs(e) {
    var n2 = e.alternate;
    n2 !== null && (e.alternate = null, bs(n2)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n2 = e.stateNode, n2 !== null && (delete n2[ze2], delete n2[Tt], delete n2[Zl], delete n2[Kc], delete n2[Yc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ea(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function so(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || ea(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function fi(e, n2, t) {
    var r4 = e.tag;
    if (r4 === 5 || r4 === 6)
      e = e.stateNode, n2 ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n2) : t.insertBefore(e, n2) : (t.nodeType === 8 ? (n2 = t.parentNode, n2.insertBefore(e, t)) : (n2 = t, n2.appendChild(e)), t = t._reactRootContainer, t != null || n2.onclick !== null || (n2.onclick = xr));
    else if (r4 !== 4 && (e = e.child, e !== null))
      for (fi(e, n2, t), e = e.sibling; e !== null; )
        fi(e, n2, t), e = e.sibling;
  }
  function di(e, n2, t) {
    var r4 = e.tag;
    if (r4 === 5 || r4 === 6)
      e = e.stateNode, n2 ? t.insertBefore(e, n2) : t.appendChild(e);
    else if (r4 !== 4 && (e = e.child, e !== null))
      for (di(e, n2, t), e = e.sibling; e !== null; )
        di(e, n2, t), e = e.sibling;
  }
  var $4 = null, Se2 = false;
  function Be2(e, n2, t) {
    for (t = t.child; t !== null; )
      na(e, n2, t), t = t.sibling;
  }
  function na(e, n2, t) {
    if (Pe3 && typeof Pe3.onCommitFiberUnmount == "function")
      try {
        Pe3.onCommitFiberUnmount(Ar, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        Z3 || In(t, n2);
      case 6:
        var r4 = $4, l3 = Se2;
        $4 = null, Be2(e, n2, t), $4 = r4, Se2 = l3, $4 !== null && (Se2 ? (e = $4, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : $4.removeChild(t.stateNode));
        break;
      case 18:
        $4 !== null && (Se2 ? (e = $4, t = t.stateNode, e.nodeType === 8 ? hl(e.parentNode, t) : e.nodeType === 1 && hl(e, t), Nt(e)) : hl($4, t.stateNode));
        break;
      case 4:
        r4 = $4, l3 = Se2, $4 = t.stateNode.containerInfo, Se2 = true, Be2(e, n2, t), $4 = r4, Se2 = l3;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Z3 && (r4 = t.updateQueue, r4 !== null && (r4 = r4.lastEffect, r4 !== null))) {
          l3 = r4 = r4.next;
          do {
            var i = l3, u2 = i.destroy;
            i = i.tag, u2 !== void 0 && (i & 2 || i & 4) && ai(t, n2, u2), l3 = l3.next;
          } while (l3 !== r4);
        }
        Be2(e, n2, t);
        break;
      case 1:
        if (!Z3 && (In(t, n2), r4 = t.stateNode, typeof r4.componentWillUnmount == "function"))
          try {
            r4.props = t.memoizedProps, r4.state = t.memoizedState, r4.componentWillUnmount();
          } catch (o3) {
            I2(t, n2, o3);
          }
        Be2(e, n2, t);
        break;
      case 21:
        Be2(e, n2, t);
        break;
      case 22:
        t.mode & 1 ? (Z3 = (r4 = Z3) || t.memoizedState !== null, Be2(e, n2, t), Z3 = r4) : Be2(e, n2, t);
        break;
      default:
        Be2(e, n2, t);
    }
  }
  function ao(e) {
    var n2 = e.updateQueue;
    if (n2 !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new cf()), n2.forEach(function(r4) {
        var l3 = Sf.bind(null, e, r4);
        t.has(r4) || (t.add(r4), r4.then(l3, l3));
      });
    }
  }
  function ge3(e, n2) {
    var t = n2.deletions;
    if (t !== null)
      for (var r4 = 0; r4 < t.length; r4++) {
        var l3 = t[r4];
        try {
          var i = e, u2 = n2, o3 = u2;
          e:
            for (; o3 !== null; ) {
              switch (o3.tag) {
                case 5:
                  $4 = o3.stateNode, Se2 = false;
                  break e;
                case 3:
                  $4 = o3.stateNode.containerInfo, Se2 = true;
                  break e;
                case 4:
                  $4 = o3.stateNode.containerInfo, Se2 = true;
                  break e;
              }
              o3 = o3.return;
            }
          if ($4 === null)
            throw Error(v3(160));
          na(i, u2, l3), $4 = null, Se2 = false;
          var s3 = l3.alternate;
          s3 !== null && (s3.return = null), l3.return = null;
        } catch (d5) {
          I2(l3, n2, d5);
        }
      }
    if (n2.subtreeFlags & 12854)
      for (n2 = n2.child; n2 !== null; )
        ta(n2, e), n2 = n2.sibling;
  }
  function ta(e, n2) {
    var t = e.alternate, r4 = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ge3(n2, e), Ne2(e), r4 & 4) {
          try {
            yt(3, e, e.return), Xr(3, e);
          } catch (k2) {
            I2(e, e.return, k2);
          }
          try {
            yt(5, e, e.return);
          } catch (k2) {
            I2(e, e.return, k2);
          }
        }
        break;
      case 1:
        ge3(n2, e), Ne2(e), r4 & 512 && t !== null && In(t, t.return);
        break;
      case 5:
        if (ge3(n2, e), Ne2(e), r4 & 512 && t !== null && In(t, t.return), e.flags & 32) {
          var l3 = e.stateNode;
          try {
            kt(l3, "");
          } catch (k2) {
            I2(e, e.return, k2);
          }
        }
        if (r4 & 4 && (l3 = e.stateNode, l3 != null)) {
          var i = e.memoizedProps, u2 = t !== null ? t.memoizedProps : i, o3 = e.type, s3 = e.updateQueue;
          if (e.updateQueue = null, s3 !== null)
            try {
              o3 === "input" && i.type === "radio" && i.name != null && xo(l3, i), Il(o3, u2);
              var d5 = Il(o3, i);
              for (u2 = 0; u2 < s3.length; u2 += 2) {
                var m2 = s3[u2], h3 = s3[u2 + 1];
                m2 === "style" ? Lo(l3, h3) : m2 === "dangerouslySetInnerHTML" ? zo(l3, h3) : m2 === "children" ? kt(l3, h3) : wi(l3, m2, h3, d5);
              }
              switch (o3) {
                case "input":
                  Ml(l3, i);
                  break;
                case "textarea":
                  No(l3, i);
                  break;
                case "select":
                  var p4 = l3._wrapperState.wasMultiple;
                  l3._wrapperState.wasMultiple = !!i.multiple;
                  var g4 = i.value;
                  g4 != null ? jn(l3, !!i.multiple, g4, false) : p4 !== !!i.multiple && (i.defaultValue != null ? jn(l3, !!i.multiple, i.defaultValue, true) : jn(l3, !!i.multiple, i.multiple ? [] : "", false));
              }
              l3[Tt] = i;
            } catch (k2) {
              I2(e, e.return, k2);
            }
        }
        break;
      case 6:
        if (ge3(n2, e), Ne2(e), r4 & 4) {
          if (e.stateNode === null)
            throw Error(v3(162));
          l3 = e.stateNode, i = e.memoizedProps;
          try {
            l3.nodeValue = i;
          } catch (k2) {
            I2(e, e.return, k2);
          }
        }
        break;
      case 3:
        if (ge3(n2, e), Ne2(e), r4 & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Nt(n2.containerInfo);
          } catch (k2) {
            I2(e, e.return, k2);
          }
        break;
      case 4:
        ge3(n2, e), Ne2(e);
        break;
      case 13:
        ge3(n2, e), Ne2(e), l3 = e.child, l3.flags & 8192 && (i = l3.memoizedState !== null, l3.stateNode.isHidden = i, !i || l3.alternate !== null && l3.alternate.memoizedState !== null || (qi = j2())), r4 & 4 && ao(e);
        break;
      case 22:
        if (m2 = t !== null && t.memoizedState !== null, e.mode & 1 ? (Z3 = (d5 = Z3) || m2, ge3(n2, e), Z3 = d5) : ge3(n2, e), Ne2(e), r4 & 8192) {
          if (d5 = e.memoizedState !== null, (e.stateNode.isHidden = d5) && !m2 && e.mode & 1)
            for (w3 = e, m2 = e.child; m2 !== null; ) {
              for (h3 = w3 = m2; w3 !== null; ) {
                switch (p4 = w3, g4 = p4.child, p4.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    yt(4, p4, p4.return);
                    break;
                  case 1:
                    In(p4, p4.return);
                    var S3 = p4.stateNode;
                    if (typeof S3.componentWillUnmount == "function") {
                      r4 = p4, t = p4.return;
                      try {
                        n2 = r4, S3.props = n2.memoizedProps, S3.state = n2.memoizedState, S3.componentWillUnmount();
                      } catch (k2) {
                        I2(r4, t, k2);
                      }
                    }
                    break;
                  case 5:
                    In(p4, p4.return);
                    break;
                  case 22:
                    if (p4.memoizedState !== null) {
                      fo(h3);
                      continue;
                    }
                }
                g4 !== null ? (g4.return = p4, w3 = g4) : fo(h3);
              }
              m2 = m2.sibling;
            }
          e:
            for (m2 = null, h3 = e; ; ) {
              if (h3.tag === 5) {
                if (m2 === null) {
                  m2 = h3;
                  try {
                    l3 = h3.stateNode, d5 ? (i = l3.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o3 = h3.stateNode, s3 = h3.memoizedProps.style, u2 = s3 != null && s3.hasOwnProperty("display") ? s3.display : null, o3.style.display = Po("display", u2));
                  } catch (k2) {
                    I2(e, e.return, k2);
                  }
                }
              } else if (h3.tag === 6) {
                if (m2 === null)
                  try {
                    h3.stateNode.nodeValue = d5 ? "" : h3.memoizedProps;
                  } catch (k2) {
                    I2(e, e.return, k2);
                  }
              } else if ((h3.tag !== 22 && h3.tag !== 23 || h3.memoizedState === null || h3 === e) && h3.child !== null) {
                h3.child.return = h3, h3 = h3.child;
                continue;
              }
              if (h3 === e)
                break e;
              for (; h3.sibling === null; ) {
                if (h3.return === null || h3.return === e)
                  break e;
                m2 === h3 && (m2 = null), h3 = h3.return;
              }
              m2 === h3 && (m2 = null), h3.sibling.return = h3.return, h3 = h3.sibling;
            }
        }
        break;
      case 19:
        ge3(n2, e), Ne2(e), r4 & 4 && ao(e);
        break;
      case 21:
        break;
      default:
        ge3(n2, e), Ne2(e);
    }
  }
  function Ne2(e) {
    var n2 = e.flags;
    if (n2 & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ea(t)) {
              var r4 = t;
              break e;
            }
            t = t.return;
          }
          throw Error(v3(160));
        }
        switch (r4.tag) {
          case 5:
            var l3 = r4.stateNode;
            r4.flags & 32 && (kt(l3, ""), r4.flags &= -33);
            var i = so(e);
            di(e, i, l3);
            break;
          case 3:
          case 4:
            var u2 = r4.stateNode.containerInfo, o3 = so(e);
            fi(e, o3, u2);
            break;
          default:
            throw Error(v3(161));
        }
      } catch (s3) {
        I2(e, e.return, s3);
      }
      e.flags &= -3;
    }
    n2 & 4096 && (e.flags &= -4097);
  }
  function df(e, n2, t) {
    w3 = e, ra(e, n2, t);
  }
  function ra(e, n2, t) {
    for (var r4 = (e.mode & 1) !== 0; w3 !== null; ) {
      var l3 = w3, i = l3.child;
      if (l3.tag === 22 && r4) {
        var u2 = l3.memoizedState !== null || lr;
        if (!u2) {
          var o3 = l3.alternate, s3 = o3 !== null && o3.memoizedState !== null || Z3;
          o3 = lr;
          var d5 = Z3;
          if (lr = u2, (Z3 = s3) && !d5)
            for (w3 = l3; w3 !== null; )
              u2 = w3, s3 = u2.child, u2.tag === 22 && u2.memoizedState !== null ? po(l3) : s3 !== null ? (s3.return = u2, w3 = s3) : po(l3);
          for (; i !== null; )
            w3 = i, ra(i, n2, t), i = i.sibling;
          w3 = l3, lr = o3, Z3 = d5;
        }
        co(e, n2, t);
      } else
        l3.subtreeFlags & 8772 && i !== null ? (i.return = l3, w3 = i) : co(e, n2, t);
    }
  }
  function co(e) {
    for (; w3 !== null; ) {
      var n2 = w3;
      if (n2.flags & 8772) {
        var t = n2.alternate;
        try {
          if (n2.flags & 8772)
            switch (n2.tag) {
              case 0:
              case 11:
              case 15:
                Z3 || Xr(5, n2);
                break;
              case 1:
                var r4 = n2.stateNode;
                if (n2.flags & 4 && !Z3)
                  if (t === null)
                    r4.componentDidMount();
                  else {
                    var l3 = n2.elementType === n2.type ? t.memoizedProps : we3(n2.type, t.memoizedProps);
                    r4.componentDidUpdate(l3, t.memoizedState, r4.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = n2.updateQueue;
                i !== null && Xu(n2, i, r4);
                break;
              case 3:
                var u2 = n2.updateQueue;
                if (u2 !== null) {
                  if (t = null, n2.child !== null)
                    switch (n2.child.tag) {
                      case 5:
                        t = n2.child.stateNode;
                        break;
                      case 1:
                        t = n2.child.stateNode;
                    }
                  Xu(n2, u2, t);
                }
                break;
              case 5:
                var o3 = n2.stateNode;
                if (t === null && n2.flags & 4) {
                  t = o3;
                  var s3 = n2.memoizedProps;
                  switch (n2.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s3.autoFocus && t.focus();
                      break;
                    case "img":
                      s3.src && (t.src = s3.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n2.memoizedState === null) {
                  var d5 = n2.alternate;
                  if (d5 !== null) {
                    var m2 = d5.memoizedState;
                    if (m2 !== null) {
                      var h3 = m2.dehydrated;
                      h3 !== null && Nt(h3);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(v3(163));
            }
          Z3 || n2.flags & 512 && ci(n2);
        } catch (p4) {
          I2(n2, n2.return, p4);
        }
      }
      if (n2 === e) {
        w3 = null;
        break;
      }
      if (t = n2.sibling, t !== null) {
        t.return = n2.return, w3 = t;
        break;
      }
      w3 = n2.return;
    }
  }
  function fo(e) {
    for (; w3 !== null; ) {
      var n2 = w3;
      if (n2 === e) {
        w3 = null;
        break;
      }
      var t = n2.sibling;
      if (t !== null) {
        t.return = n2.return, w3 = t;
        break;
      }
      w3 = n2.return;
    }
  }
  function po(e) {
    for (; w3 !== null; ) {
      var n2 = w3;
      try {
        switch (n2.tag) {
          case 0:
          case 11:
          case 15:
            var t = n2.return;
            try {
              Xr(4, n2);
            } catch (s3) {
              I2(n2, t, s3);
            }
            break;
          case 1:
            var r4 = n2.stateNode;
            if (typeof r4.componentDidMount == "function") {
              var l3 = n2.return;
              try {
                r4.componentDidMount();
              } catch (s3) {
                I2(n2, l3, s3);
              }
            }
            var i = n2.return;
            try {
              ci(n2);
            } catch (s3) {
              I2(n2, i, s3);
            }
            break;
          case 5:
            var u2 = n2.return;
            try {
              ci(n2);
            } catch (s3) {
              I2(n2, u2, s3);
            }
        }
      } catch (s3) {
        I2(n2, n2.return, s3);
      }
      if (n2 === e) {
        w3 = null;
        break;
      }
      var o3 = n2.sibling;
      if (o3 !== null) {
        o3.return = n2.return, w3 = o3;
        break;
      }
      w3 = n2.return;
    }
  }
  var pf = Math.ceil, Fr = Ve2.ReactCurrentDispatcher, Zi = Ve2.ReactCurrentOwner, he3 = Ve2.ReactCurrentBatchConfig, _2 = 0, Q2 = null, V2 = null, K2 = 0, ue2 = 0, Un = un(0), B4 = 0, It = null, Sn = 0, Gr = 0, Ji = 0, gt = null, ne3 = null, qi = 0, Zn = 1 / 0, Te2 = null, Ir = false, pi = null, be3 = null, ir = false, Ye2 = null, Ur = 0, wt = 0, mi = null, pr = -1, mr = 0;
  function b3() {
    return _2 & 6 ? j2() : pr !== -1 ? pr : pr = j2();
  }
  function en(e) {
    return e.mode & 1 ? _2 & 2 && K2 !== 0 ? K2 & -K2 : Gc.transition !== null ? (mr === 0 && (mr = Bo()), mr) : (e = P2, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xo(e.type)), e) : 1;
  }
  function Ce3(e, n2, t, r4) {
    if (50 < wt)
      throw wt = 0, mi = null, Error(v3(185));
    Ut(e, t, r4), (!(_2 & 2) || e !== Q2) && (e === Q2 && (!(_2 & 2) && (Gr |= t), B4 === 4 && $e2(e, K2)), ie3(e, r4), t === 1 && _2 === 0 && !(n2.mode & 1) && (Zn = j2() + 500, $r && on()));
  }
  function ie3(e, n2) {
    var t = e.callbackNode;
    Ja(e, n2);
    var r4 = Sr(e, e === Q2 ? K2 : 0);
    if (r4 === 0)
      t !== null && Su(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n2 = r4 & -r4, e.callbackPriority !== n2) {
      if (t != null && Su(t), n2 === 1)
        e.tag === 0 ? Xc(mo.bind(null, e)) : ps(mo.bind(null, e)), Qc(function() {
          !(_2 & 6) && on();
        }), t = null;
      else {
        switch (Ho(r4)) {
          case 1:
            t = xi;
            break;
          case 4:
            t = Vo;
            break;
          case 16:
            t = wr;
            break;
          case 536870912:
            t = Ao;
            break;
          default:
            t = wr;
        }
        t = fa(t, la.bind(null, e));
      }
      e.callbackPriority = n2, e.callbackNode = t;
    }
  }
  function la(e, n2) {
    if (pr = -1, mr = 0, _2 & 6)
      throw Error(v3(327));
    var t = e.callbackNode;
    if (Wn() && e.callbackNode !== t)
      return null;
    var r4 = Sr(e, e === Q2 ? K2 : 0);
    if (r4 === 0)
      return null;
    if (r4 & 30 || r4 & e.expiredLanes || n2)
      n2 = jr(e, r4);
    else {
      n2 = r4;
      var l3 = _2;
      _2 |= 2;
      var i = ua();
      (Q2 !== e || K2 !== n2) && (Te2 = null, Zn = j2() + 500, hn(e, n2));
      do
        try {
          vf();
          break;
        } catch (o3) {
          ia(e, o3);
        }
      while (true);
      Ui(), Fr.current = i, _2 = l3, V2 !== null ? n2 = 0 : (Q2 = null, K2 = 0, n2 = B4);
    }
    if (n2 !== 0) {
      if (n2 === 2 && (l3 = Bl(e), l3 !== 0 && (r4 = l3, n2 = hi(e, l3))), n2 === 1)
        throw t = It, hn(e, 0), $e2(e, r4), ie3(e, j2()), t;
      if (n2 === 6)
        $e2(e, r4);
      else {
        if (l3 = e.current.alternate, !(r4 & 30) && !mf(l3) && (n2 = jr(e, r4), n2 === 2 && (i = Bl(e), i !== 0 && (r4 = i, n2 = hi(e, i))), n2 === 1))
          throw t = It, hn(e, 0), $e2(e, r4), ie3(e, j2()), t;
        switch (e.finishedWork = l3, e.finishedLanes = r4, n2) {
          case 0:
          case 1:
            throw Error(v3(345));
          case 2:
            fn(e, ne3, Te2);
            break;
          case 3:
            if ($e2(e, r4), (r4 & 130023424) === r4 && (n2 = qi + 500 - j2(), 10 < n2)) {
              if (Sr(e, 0) !== 0)
                break;
              if (l3 = e.suspendedLanes, (l3 & r4) !== r4) {
                b3(), e.pingedLanes |= e.suspendedLanes & l3;
                break;
              }
              e.timeoutHandle = Gl(fn.bind(null, e, ne3, Te2), n2);
              break;
            }
            fn(e, ne3, Te2);
            break;
          case 4:
            if ($e2(e, r4), (r4 & 4194240) === r4)
              break;
            for (n2 = e.eventTimes, l3 = -1; 0 < r4; ) {
              var u2 = 31 - Ee3(r4);
              i = 1 << u2, u2 = n2[u2], u2 > l3 && (l3 = u2), r4 &= ~i;
            }
            if (r4 = l3, r4 = j2() - r4, r4 = (120 > r4 ? 120 : 480 > r4 ? 480 : 1080 > r4 ? 1080 : 1920 > r4 ? 1920 : 3e3 > r4 ? 3e3 : 4320 > r4 ? 4320 : 1960 * pf(r4 / 1960)) - r4, 10 < r4) {
              e.timeoutHandle = Gl(fn.bind(null, e, ne3, Te2), r4);
              break;
            }
            fn(e, ne3, Te2);
            break;
          case 5:
            fn(e, ne3, Te2);
            break;
          default:
            throw Error(v3(329));
        }
      }
    }
    return ie3(e, j2()), e.callbackNode === t ? la.bind(null, e) : null;
  }
  function hi(e, n2) {
    var t = gt;
    return e.current.memoizedState.isDehydrated && (hn(e, n2).flags |= 256), e = jr(e, n2), e !== 2 && (n2 = ne3, ne3 = t, n2 !== null && vi(n2)), e;
  }
  function vi(e) {
    ne3 === null ? ne3 = e : ne3.push.apply(ne3, e);
  }
  function mf(e) {
    for (var n2 = e; ; ) {
      if (n2.flags & 16384) {
        var t = n2.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r4 = 0; r4 < t.length; r4++) {
            var l3 = t[r4], i = l3.getSnapshot;
            l3 = l3.value;
            try {
              if (!xe3(i(), l3))
                return false;
            } catch {
              return false;
            }
          }
      }
      if (t = n2.child, n2.subtreeFlags & 16384 && t !== null)
        t.return = n2, n2 = t;
      else {
        if (n2 === e)
          break;
        for (; n2.sibling === null; ) {
          if (n2.return === null || n2.return === e)
            return true;
          n2 = n2.return;
        }
        n2.sibling.return = n2.return, n2 = n2.sibling;
      }
    }
    return true;
  }
  function $e2(e, n2) {
    for (n2 &= ~Ji, n2 &= ~Gr, e.suspendedLanes |= n2, e.pingedLanes &= ~n2, e = e.expirationTimes; 0 < n2; ) {
      var t = 31 - Ee3(n2), r4 = 1 << t;
      e[t] = -1, n2 &= ~r4;
    }
  }
  function mo(e) {
    if (_2 & 6)
      throw Error(v3(327));
    Wn();
    var n2 = Sr(e, 0);
    if (!(n2 & 1))
      return ie3(e, j2()), null;
    var t = jr(e, n2);
    if (e.tag !== 0 && t === 2) {
      var r4 = Bl(e);
      r4 !== 0 && (n2 = r4, t = hi(e, r4));
    }
    if (t === 1)
      throw t = It, hn(e, 0), $e2(e, n2), ie3(e, j2()), t;
    if (t === 6)
      throw Error(v3(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n2, fn(e, ne3, Te2), ie3(e, j2()), null;
  }
  function bi(e, n2) {
    var t = _2;
    _2 |= 1;
    try {
      return e(n2);
    } finally {
      _2 = t, _2 === 0 && (Zn = j2() + 500, $r && on());
    }
  }
  function kn(e) {
    Ye2 !== null && Ye2.tag === 0 && !(_2 & 6) && Wn();
    var n2 = _2;
    _2 |= 1;
    var t = he3.transition, r4 = P2;
    try {
      if (he3.transition = null, P2 = 1, e)
        return e();
    } finally {
      P2 = r4, he3.transition = t, _2 = n2, !(_2 & 6) && on();
    }
  }
  function eu() {
    ue2 = Un.current, M3(Un);
  }
  function hn(e, n2) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Wc(t)), V2 !== null)
      for (t = V2.return; t !== null; ) {
        var r4 = t;
        switch (Ri(r4), r4.tag) {
          case 1:
            r4 = r4.type.childContextTypes, r4 != null && Nr();
            break;
          case 3:
            Xn(), M3(re3), M3(J3), Wi();
            break;
          case 5:
            Hi(r4);
            break;
          case 4:
            Xn();
            break;
          case 13:
            M3(O5);
            break;
          case 19:
            M3(O5);
            break;
          case 10:
            ji(r4.type._context);
            break;
          case 22:
          case 23:
            eu();
        }
        t = t.return;
      }
    if (Q2 = e, V2 = e = nn(e.current, null), K2 = ue2 = n2, B4 = 0, It = null, Ji = Gr = Sn = 0, ne3 = gt = null, pn !== null) {
      for (n2 = 0; n2 < pn.length; n2++)
        if (t = pn[n2], r4 = t.interleaved, r4 !== null) {
          t.interleaved = null;
          var l3 = r4.next, i = t.pending;
          if (i !== null) {
            var u2 = i.next;
            i.next = l3, r4.next = u2;
          }
          t.pending = r4;
        }
      pn = null;
    }
    return e;
  }
  function ia(e, n2) {
    do {
      var t = V2;
      try {
        if (Ui(), cr.current = Rr, Or) {
          for (var r4 = R2.memoizedState; r4 !== null; ) {
            var l3 = r4.queue;
            l3 !== null && (l3.pending = null), r4 = r4.next;
          }
          Or = false;
        }
        if (wn = 0, W5 = A3 = R2 = null, vt = false, Ot = 0, Zi.current = null, t === null || t.return === null) {
          B4 = 1, It = n2, V2 = null;
          break;
        }
        e: {
          var i = e, u2 = t.return, o3 = t, s3 = n2;
          if (n2 = K2, o3.flags |= 32768, s3 !== null && typeof s3 == "object" && typeof s3.then == "function") {
            var d5 = s3, m2 = o3, h3 = m2.tag;
            if (!(m2.mode & 1) && (h3 === 0 || h3 === 11 || h3 === 15)) {
              var p4 = m2.alternate;
              p4 ? (m2.updateQueue = p4.updateQueue, m2.memoizedState = p4.memoizedState, m2.lanes = p4.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var g4 = eo(u2);
            if (g4 !== null) {
              g4.flags &= -257, no(g4, u2, o3, i, n2), g4.mode & 1 && bu(i, d5, n2), n2 = g4, s3 = d5;
              var S3 = n2.updateQueue;
              if (S3 === null) {
                var k2 = /* @__PURE__ */ new Set();
                k2.add(s3), n2.updateQueue = k2;
              } else
                S3.add(s3);
              break e;
            } else {
              if (!(n2 & 1)) {
                bu(i, d5, n2), nu();
                break e;
              }
              s3 = Error(v3(426));
            }
          } else if (D2 && o3.mode & 1) {
            var U4 = eo(u2);
            if (U4 !== null) {
              !(U4.flags & 65536) && (U4.flags |= 256), no(U4, u2, o3, i, n2), Fi(Gn(s3, o3));
              break e;
            }
          }
          i = s3 = Gn(s3, o3), B4 !== 4 && (B4 = 2), gt === null ? gt = [i] : gt.push(i), i = u2;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, n2 &= -n2, i.lanes |= n2;
                var c2 = Hs(i, s3, n2);
                Yu(i, c2);
                break e;
              case 1:
                o3 = s3;
                var a4 = i.type, f4 = i.stateNode;
                if (!(i.flags & 128) && (typeof a4.getDerivedStateFromError == "function" || f4 !== null && typeof f4.componentDidCatch == "function" && (be3 === null || !be3.has(f4)))) {
                  i.flags |= 65536, n2 &= -n2, i.lanes |= n2;
                  var y3 = Ws(i, o3, n2);
                  Yu(i, y3);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        sa(t);
      } catch (E5) {
        n2 = E5, V2 === t && t !== null && (V2 = t = t.return);
        continue;
      }
      break;
    } while (true);
  }
  function ua() {
    var e = Fr.current;
    return Fr.current = Rr, e === null ? Rr : e;
  }
  function nu() {
    (B4 === 0 || B4 === 3 || B4 === 2) && (B4 = 4), Q2 === null || !(Sn & 268435455) && !(Gr & 268435455) || $e2(Q2, K2);
  }
  function jr(e, n2) {
    var t = _2;
    _2 |= 2;
    var r4 = ua();
    (Q2 !== e || K2 !== n2) && (Te2 = null, hn(e, n2));
    do
      try {
        hf();
        break;
      } catch (l3) {
        ia(e, l3);
      }
    while (true);
    if (Ui(), _2 = t, Fr.current = r4, V2 !== null)
      throw Error(v3(261));
    return Q2 = null, K2 = 0, B4;
  }
  function hf() {
    for (; V2 !== null; )
      oa(V2);
  }
  function vf() {
    for (; V2 !== null && !Ha(); )
      oa(V2);
  }
  function oa(e) {
    var n2 = ca(e.alternate, e, ue2);
    e.memoizedProps = e.pendingProps, n2 === null ? sa(e) : V2 = n2, Zi.current = null;
  }
  function sa(e) {
    var n2 = e;
    do {
      var t = n2.alternate;
      if (e = n2.return, n2.flags & 32768) {
        if (t = af(t, n2), t !== null) {
          t.flags &= 32767, V2 = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          B4 = 6, V2 = null;
          return;
        }
      } else if (t = sf(t, n2, ue2), t !== null) {
        V2 = t;
        return;
      }
      if (n2 = n2.sibling, n2 !== null) {
        V2 = n2;
        return;
      }
      V2 = n2 = e;
    } while (n2 !== null);
    B4 === 0 && (B4 = 5);
  }
  function fn(e, n2, t) {
    var r4 = P2, l3 = he3.transition;
    try {
      he3.transition = null, P2 = 1, yf(e, n2, t, r4);
    } finally {
      he3.transition = l3, P2 = r4;
    }
    return null;
  }
  function yf(e, n2, t, r4) {
    do
      Wn();
    while (Ye2 !== null);
    if (_2 & 6)
      throw Error(v3(327));
    t = e.finishedWork;
    var l3 = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(v3(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = t.lanes | t.childLanes;
    if (qa(e, i), e === Q2 && (V2 = Q2 = null, K2 = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || ir || (ir = true, fa(wr, function() {
      return Wn(), null;
    })), i = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || i) {
      i = he3.transition, he3.transition = null;
      var u2 = P2;
      P2 = 1;
      var o3 = _2;
      _2 |= 4, Zi.current = null, ff(e, t), ta(t, e), jc(Yl), kr = !!Kl, Yl = Kl = null, e.current = t, df(t, e, l3), Wa(), _2 = o3, P2 = u2, he3.transition = i;
    } else
      e.current = t;
    if (ir && (ir = false, Ye2 = e, Ur = l3), i = e.pendingLanes, i === 0 && (be3 = null), Ka(t.stateNode, r4), ie3(e, j2()), n2 !== null)
      for (r4 = e.onRecoverableError, t = 0; t < n2.length; t++)
        l3 = n2[t], r4(l3.value, { componentStack: l3.stack, digest: l3.digest });
    if (Ir)
      throw Ir = false, e = pi, pi = null, e;
    return Ur & 1 && e.tag !== 0 && Wn(), i = e.pendingLanes, i & 1 ? e === mi ? wt++ : (wt = 0, mi = e) : wt = 0, on(), null;
  }
  function Wn() {
    if (Ye2 !== null) {
      var e = Ho(Ur), n2 = he3.transition, t = P2;
      try {
        if (he3.transition = null, P2 = 16 > e ? 16 : e, Ye2 === null)
          var r4 = false;
        else {
          if (e = Ye2, Ye2 = null, Ur = 0, _2 & 6)
            throw Error(v3(331));
          var l3 = _2;
          for (_2 |= 4, w3 = e.current; w3 !== null; ) {
            var i = w3, u2 = i.child;
            if (w3.flags & 16) {
              var o3 = i.deletions;
              if (o3 !== null) {
                for (var s3 = 0; s3 < o3.length; s3++) {
                  var d5 = o3[s3];
                  for (w3 = d5; w3 !== null; ) {
                    var m2 = w3;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yt(8, m2, i);
                    }
                    var h3 = m2.child;
                    if (h3 !== null)
                      h3.return = m2, w3 = h3;
                    else
                      for (; w3 !== null; ) {
                        m2 = w3;
                        var p4 = m2.sibling, g4 = m2.return;
                        if (bs(m2), m2 === d5) {
                          w3 = null;
                          break;
                        }
                        if (p4 !== null) {
                          p4.return = g4, w3 = p4;
                          break;
                        }
                        w3 = g4;
                      }
                  }
                }
                var S3 = i.alternate;
                if (S3 !== null) {
                  var k2 = S3.child;
                  if (k2 !== null) {
                    S3.child = null;
                    do {
                      var U4 = k2.sibling;
                      k2.sibling = null, k2 = U4;
                    } while (k2 !== null);
                  }
                }
                w3 = i;
              }
            }
            if (i.subtreeFlags & 2064 && u2 !== null)
              u2.return = i, w3 = u2;
            else
              e:
                for (; w3 !== null; ) {
                  if (i = w3, i.flags & 2048)
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yt(9, i, i.return);
                    }
                  var c2 = i.sibling;
                  if (c2 !== null) {
                    c2.return = i.return, w3 = c2;
                    break e;
                  }
                  w3 = i.return;
                }
          }
          var a4 = e.current;
          for (w3 = a4; w3 !== null; ) {
            u2 = w3;
            var f4 = u2.child;
            if (u2.subtreeFlags & 2064 && f4 !== null)
              f4.return = u2, w3 = f4;
            else
              e:
                for (u2 = a4; w3 !== null; ) {
                  if (o3 = w3, o3.flags & 2048)
                    try {
                      switch (o3.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Xr(9, o3);
                      }
                    } catch (E5) {
                      I2(o3, o3.return, E5);
                    }
                  if (o3 === u2) {
                    w3 = null;
                    break e;
                  }
                  var y3 = o3.sibling;
                  if (y3 !== null) {
                    y3.return = o3.return, w3 = y3;
                    break e;
                  }
                  w3 = o3.return;
                }
          }
          if (_2 = l3, on(), Pe3 && typeof Pe3.onPostCommitFiberRoot == "function")
            try {
              Pe3.onPostCommitFiberRoot(Ar, e);
            } catch {
            }
          r4 = true;
        }
        return r4;
      } finally {
        P2 = t, he3.transition = n2;
      }
    }
    return false;
  }
  function ho(e, n2, t) {
    n2 = Gn(t, n2), n2 = Hs(e, n2, 1), e = qe2(e, n2, 1), n2 = b3(), e !== null && (Ut(e, 1, n2), ie3(e, n2));
  }
  function I2(e, n2, t) {
    if (e.tag === 3)
      ho(e, e, t);
    else
      for (; n2 !== null; ) {
        if (n2.tag === 3) {
          ho(n2, e, t);
          break;
        } else if (n2.tag === 1) {
          var r4 = n2.stateNode;
          if (typeof n2.type.getDerivedStateFromError == "function" || typeof r4.componentDidCatch == "function" && (be3 === null || !be3.has(r4))) {
            e = Gn(t, e), e = Ws(n2, e, 1), n2 = qe2(n2, e, 1), e = b3(), n2 !== null && (Ut(n2, 1, e), ie3(n2, e));
            break;
          }
        }
        n2 = n2.return;
      }
  }
  function gf(e, n2, t) {
    var r4 = e.pingCache;
    r4 !== null && r4.delete(n2), n2 = b3(), e.pingedLanes |= e.suspendedLanes & t, Q2 === e && (K2 & t) === t && (B4 === 4 || B4 === 3 && (K2 & 130023424) === K2 && 500 > j2() - qi ? hn(e, 0) : Ji |= t), ie3(e, n2);
  }
  function aa(e, n2) {
    n2 === 0 && (e.mode & 1 ? (n2 = $t, $t <<= 1, !($t & 130023424) && ($t = 4194304)) : n2 = 1);
    var t = b3();
    e = Ue2(e, n2), e !== null && (Ut(e, n2, t), ie3(e, t));
  }
  function wf(e) {
    var n2 = e.memoizedState, t = 0;
    n2 !== null && (t = n2.retryLane), aa(e, t);
  }
  function Sf(e, n2) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r4 = e.stateNode, l3 = e.memoizedState;
        l3 !== null && (t = l3.retryLane);
        break;
      case 19:
        r4 = e.stateNode;
        break;
      default:
        throw Error(v3(314));
    }
    r4 !== null && r4.delete(n2), aa(e, t);
  }
  var ca;
  ca = function(e, n2, t) {
    if (e !== null)
      if (e.memoizedProps !== n2.pendingProps || re3.current)
        te3 = true;
      else {
        if (!(e.lanes & t) && !(n2.flags & 128))
          return te3 = false, of(e, n2, t);
        te3 = !!(e.flags & 131072);
      }
    else
      te3 = false, D2 && n2.flags & 1048576 && ms(n2, Pr, n2.index);
    switch (n2.lanes = 0, n2.tag) {
      case 2:
        var r4 = n2.type;
        dr(e, n2), e = n2.pendingProps;
        var l3 = $n(n2, J3.current);
        Hn(n2, t), l3 = $i(null, n2, r4, e, l3, t);
        var i = Ki();
        return n2.flags |= 1, typeof l3 == "object" && l3 !== null && typeof l3.render == "function" && l3.$$typeof === void 0 ? (n2.tag = 1, n2.memoizedState = null, n2.updateQueue = null, le3(r4) ? (i = true, _r(n2)) : i = false, n2.memoizedState = l3.state !== null && l3.state !== void 0 ? l3.state : null, Ai(n2), l3.updater = Yr, n2.stateNode = l3, l3._reactInternals = n2, ti(n2, r4, e, t), n2 = ii(null, n2, r4, true, i, t)) : (n2.tag = 0, D2 && i && Oi(n2), q3(null, n2, l3, t), n2 = n2.child), n2;
      case 16:
        r4 = n2.elementType;
        e: {
          switch (dr(e, n2), e = n2.pendingProps, l3 = r4._init, r4 = l3(r4._payload), n2.type = r4, l3 = n2.tag = Ef(r4), e = we3(r4, e), l3) {
            case 0:
              n2 = li(null, n2, r4, e, t);
              break e;
            case 1:
              n2 = lo(null, n2, r4, e, t);
              break e;
            case 11:
              n2 = to(null, n2, r4, e, t);
              break e;
            case 14:
              n2 = ro(null, n2, r4, we3(r4.type, e), t);
              break e;
          }
          throw Error(v3(306, r4, ""));
        }
        return n2;
      case 0:
        return r4 = n2.type, l3 = n2.pendingProps, l3 = n2.elementType === r4 ? l3 : we3(r4, l3), li(e, n2, r4, l3, t);
      case 1:
        return r4 = n2.type, l3 = n2.pendingProps, l3 = n2.elementType === r4 ? l3 : we3(r4, l3), lo(e, n2, r4, l3, t);
      case 3:
        e: {
          if (Ys(n2), e === null)
            throw Error(v3(387));
          r4 = n2.pendingProps, i = n2.memoizedState, l3 = i.element, Ss(e, n2), Mr(n2, r4, null, t);
          var u2 = n2.memoizedState;
          if (r4 = u2.element, i.isDehydrated)
            if (i = { element: r4, isDehydrated: false, cache: u2.cache, pendingSuspenseBoundaries: u2.pendingSuspenseBoundaries, transitions: u2.transitions }, n2.updateQueue.baseState = i, n2.memoizedState = i, n2.flags & 256) {
              l3 = Gn(Error(v3(423)), n2), n2 = io(e, n2, r4, t, l3);
              break e;
            } else if (r4 !== l3) {
              l3 = Gn(Error(v3(424)), n2), n2 = io(e, n2, r4, t, l3);
              break e;
            } else
              for (oe3 = Je(n2.stateNode.containerInfo.firstChild), se2 = n2, D2 = true, ke3 = null, t = gs(n2, null, r4, t), n2.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Kn(), r4 === l3) {
              n2 = je2(e, n2, t);
              break e;
            }
            q3(e, n2, r4, t);
          }
          n2 = n2.child;
        }
        return n2;
      case 5:
        return ks(n2), e === null && bl(n2), r4 = n2.type, l3 = n2.pendingProps, i = e !== null ? e.memoizedProps : null, u2 = l3.children, Xl(r4, l3) ? u2 = null : i !== null && Xl(r4, i) && (n2.flags |= 32), Ks(e, n2), q3(e, n2, u2, t), n2.child;
      case 6:
        return e === null && bl(n2), null;
      case 13:
        return Xs(e, n2, t);
      case 4:
        return Bi(n2, n2.stateNode.containerInfo), r4 = n2.pendingProps, e === null ? n2.child = Yn(n2, null, r4, t) : q3(e, n2, r4, t), n2.child;
      case 11:
        return r4 = n2.type, l3 = n2.pendingProps, l3 = n2.elementType === r4 ? l3 : we3(r4, l3), to(e, n2, r4, l3, t);
      case 7:
        return q3(e, n2, n2.pendingProps, t), n2.child;
      case 8:
        return q3(e, n2, n2.pendingProps.children, t), n2.child;
      case 12:
        return q3(e, n2, n2.pendingProps.children, t), n2.child;
      case 10:
        e: {
          if (r4 = n2.type._context, l3 = n2.pendingProps, i = n2.memoizedProps, u2 = l3.value, L(Lr, r4._currentValue), r4._currentValue = u2, i !== null)
            if (xe3(i.value, u2)) {
              if (i.children === l3.children && !re3.current) {
                n2 = je2(e, n2, t);
                break e;
              }
            } else
              for (i = n2.child, i !== null && (i.return = n2); i !== null; ) {
                var o3 = i.dependencies;
                if (o3 !== null) {
                  u2 = i.child;
                  for (var s3 = o3.firstContext; s3 !== null; ) {
                    if (s3.context === r4) {
                      if (i.tag === 1) {
                        s3 = Re2(-1, t & -t), s3.tag = 2;
                        var d5 = i.updateQueue;
                        if (d5 !== null) {
                          d5 = d5.shared;
                          var m2 = d5.pending;
                          m2 === null ? s3.next = s3 : (s3.next = m2.next, m2.next = s3), d5.pending = s3;
                        }
                      }
                      i.lanes |= t, s3 = i.alternate, s3 !== null && (s3.lanes |= t), ei(i.return, t, n2), o3.lanes |= t;
                      break;
                    }
                    s3 = s3.next;
                  }
                } else if (i.tag === 10)
                  u2 = i.type === n2.type ? null : i.child;
                else if (i.tag === 18) {
                  if (u2 = i.return, u2 === null)
                    throw Error(v3(341));
                  u2.lanes |= t, o3 = u2.alternate, o3 !== null && (o3.lanes |= t), ei(u2, t, n2), u2 = i.sibling;
                } else
                  u2 = i.child;
                if (u2 !== null)
                  u2.return = i;
                else
                  for (u2 = i; u2 !== null; ) {
                    if (u2 === n2) {
                      u2 = null;
                      break;
                    }
                    if (i = u2.sibling, i !== null) {
                      i.return = u2.return, u2 = i;
                      break;
                    }
                    u2 = u2.return;
                  }
                i = u2;
              }
          q3(e, n2, l3.children, t), n2 = n2.child;
        }
        return n2;
      case 9:
        return l3 = n2.type, r4 = n2.pendingProps.children, Hn(n2, t), l3 = ve3(l3), r4 = r4(l3), n2.flags |= 1, q3(e, n2, r4, t), n2.child;
      case 14:
        return r4 = n2.type, l3 = we3(r4, n2.pendingProps), l3 = we3(r4.type, l3), ro(e, n2, r4, l3, t);
      case 15:
        return Qs(e, n2, n2.type, n2.pendingProps, t);
      case 17:
        return r4 = n2.type, l3 = n2.pendingProps, l3 = n2.elementType === r4 ? l3 : we3(r4, l3), dr(e, n2), n2.tag = 1, le3(r4) ? (e = true, _r(n2)) : e = false, Hn(n2, t), Bs(n2, r4, l3), ti(n2, r4, l3, t), ii(null, n2, r4, true, e, t);
      case 19:
        return Gs(e, n2, t);
      case 22:
        return $s(e, n2, t);
    }
    throw Error(v3(156, n2.tag));
  };
  function fa(e, n2) {
    return jo(e, n2);
  }
  function kf(e, n2, t, r4) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n2, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r4, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function me3(e, n2, t, r4) {
    return new kf(e, n2, t, r4);
  }
  function tu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ef(e) {
    if (typeof e == "function")
      return tu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ki)
        return 11;
      if (e === Ei)
        return 14;
    }
    return 2;
  }
  function nn(e, n2) {
    var t = e.alternate;
    return t === null ? (t = me3(e.tag, n2, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n2, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n2 = e.dependencies, t.dependencies = n2 === null ? null : { lanes: n2.lanes, firstContext: n2.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function hr(e, n2, t, r4, l3, i) {
    var u2 = 2;
    if (r4 = e, typeof e == "function")
      tu(e) && (u2 = 1);
    else if (typeof e == "string")
      u2 = 5;
    else
      e:
        switch (e) {
          case zn:
            return vn(t.children, l3, i, n2);
          case Si:
            u2 = 8, l3 |= 8;
            break;
          case _l:
            return e = me3(12, t, n2, l3 | 2), e.elementType = _l, e.lanes = i, e;
          case zl:
            return e = me3(13, t, n2, l3), e.elementType = zl, e.lanes = i, e;
          case Pl:
            return e = me3(19, t, n2, l3), e.elementType = Pl, e.lanes = i, e;
          case ko:
            return Zr(t, l3, i, n2);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case wo:
                  u2 = 10;
                  break e;
                case So:
                  u2 = 9;
                  break e;
                case ki:
                  u2 = 11;
                  break e;
                case Ei:
                  u2 = 14;
                  break e;
                case He2:
                  u2 = 16, r4 = null;
                  break e;
              }
            throw Error(v3(130, e == null ? e : typeof e, ""));
        }
    return n2 = me3(u2, t, n2, l3), n2.elementType = e, n2.type = r4, n2.lanes = i, n2;
  }
  function vn(e, n2, t, r4) {
    return e = me3(7, e, r4, n2), e.lanes = t, e;
  }
  function Zr(e, n2, t, r4) {
    return e = me3(22, e, r4, n2), e.elementType = ko, e.lanes = t, e.stateNode = { isHidden: false }, e;
  }
  function Cl(e, n2, t) {
    return e = me3(6, e, null, n2), e.lanes = t, e;
  }
  function xl(e, n2, t) {
    return n2 = me3(4, e.children !== null ? e.children : [], e.key, n2), n2.lanes = t, n2.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n2;
  }
  function Cf(e, n2, t, r4, l3) {
    this.tag = n2, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ol(0), this.expirationTimes = ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ol(0), this.identifierPrefix = r4, this.onRecoverableError = l3, this.mutableSourceEagerHydrationData = null;
  }
  function ru(e, n2, t, r4, l3, i, u2, o3, s3) {
    return e = new Cf(e, n2, t, o3, s3), n2 === 1 ? (n2 = 1, i === true && (n2 |= 8)) : n2 = 0, i = me3(3, null, null, n2), e.current = i, i.stateNode = e, i.memoizedState = { element: r4, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ai(i), e;
  }
  function xf(e, n2, t) {
    var r4 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _n, key: r4 == null ? null : "" + r4, children: e, containerInfo: n2, implementation: t };
  }
  function da(e) {
    if (!e)
      return rn;
    e = e._reactInternals;
    e: {
      if (Cn(e) !== e || e.tag !== 1)
        throw Error(v3(170));
      var n2 = e;
      do {
        switch (n2.tag) {
          case 3:
            n2 = n2.stateNode.context;
            break e;
          case 1:
            if (le3(n2.type)) {
              n2 = n2.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n2 = n2.return;
      } while (n2 !== null);
      throw Error(v3(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (le3(t))
        return ds(e, t, n2);
    }
    return n2;
  }
  function pa(e, n2, t, r4, l3, i, u2, o3, s3) {
    return e = ru(t, r4, true, e, l3, i, u2, o3, s3), e.context = da(null), t = e.current, r4 = b3(), l3 = en(t), i = Re2(r4, l3), i.callback = n2 ?? null, qe2(t, i, l3), e.current.lanes = l3, Ut(e, l3, r4), ie3(e, r4), e;
  }
  function Jr(e, n2, t, r4) {
    var l3 = n2.current, i = b3(), u2 = en(l3);
    return t = da(t), n2.context === null ? n2.context = t : n2.pendingContext = t, n2 = Re2(i, u2), n2.payload = { element: e }, r4 = r4 === void 0 ? null : r4, r4 !== null && (n2.callback = r4), e = qe2(l3, n2, u2), e !== null && (Ce3(e, l3, u2, i), ar(e, l3, u2)), u2;
  }
  function Vr(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function vo(e, n2) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n2 ? t : n2;
    }
  }
  function lu(e, n2) {
    vo(e, n2), (e = e.alternate) && vo(e, n2);
  }
  function Nf() {
    return null;
  }
  var ma = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function iu(e) {
    this._internalRoot = e;
  }
  qr.prototype.render = iu.prototype.render = function(e) {
    var n2 = this._internalRoot;
    if (n2 === null)
      throw Error(v3(409));
    Jr(e, n2, null, null);
  };
  qr.prototype.unmount = iu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n2 = e.containerInfo;
      kn(function() {
        Jr(null, e, null, null);
      }), n2[Ie3] = null;
    }
  };
  function qr(e) {
    this._internalRoot = e;
  }
  qr.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n2 = $o();
      e = { blockedOn: null, target: e, priority: n2 };
      for (var t = 0; t < Qe.length && n2 !== 0 && n2 < Qe[t].priority; t++)
        ;
      Qe.splice(t, 0, e), t === 0 && Yo(e);
    }
  };
  function uu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function br(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function yo() {
  }
  function _f(e, n2, t, r4, l3) {
    if (l3) {
      if (typeof r4 == "function") {
        var i = r4;
        r4 = function() {
          var d5 = Vr(u2);
          i.call(d5);
        };
      }
      var u2 = pa(n2, r4, e, 0, null, false, false, "", yo);
      return e._reactRootContainer = u2, e[Ie3] = u2.current, Pt(e.nodeType === 8 ? e.parentNode : e), kn(), u2;
    }
    for (; l3 = e.lastChild; )
      e.removeChild(l3);
    if (typeof r4 == "function") {
      var o3 = r4;
      r4 = function() {
        var d5 = Vr(s3);
        o3.call(d5);
      };
    }
    var s3 = ru(e, 0, false, null, null, false, false, "", yo);
    return e._reactRootContainer = s3, e[Ie3] = s3.current, Pt(e.nodeType === 8 ? e.parentNode : e), kn(function() {
      Jr(n2, s3, t, r4);
    }), s3;
  }
  function el(e, n2, t, r4, l3) {
    var i = t._reactRootContainer;
    if (i) {
      var u2 = i;
      if (typeof l3 == "function") {
        var o3 = l3;
        l3 = function() {
          var s3 = Vr(u2);
          o3.call(s3);
        };
      }
      Jr(n2, u2, e, l3);
    } else
      u2 = _f(t, n2, e, l3, r4);
    return Vr(u2);
  }
  Wo = function(e) {
    switch (e.tag) {
      case 3:
        var n2 = e.stateNode;
        if (n2.current.memoizedState.isDehydrated) {
          var t = at(n2.pendingLanes);
          t !== 0 && (Ni(n2, t | 1), ie3(n2, j2()), !(_2 & 6) && (Zn = j2() + 500, on()));
        }
        break;
      case 13:
        kn(function() {
          var r4 = Ue2(e, 1);
          if (r4 !== null) {
            var l3 = b3();
            Ce3(r4, e, 1, l3);
          }
        }), lu(e, 1);
    }
  };
  _i = function(e) {
    if (e.tag === 13) {
      var n2 = Ue2(e, 134217728);
      if (n2 !== null) {
        var t = b3();
        Ce3(n2, e, 134217728, t);
      }
      lu(e, 134217728);
    }
  };
  Qo = function(e) {
    if (e.tag === 13) {
      var n2 = en(e), t = Ue2(e, n2);
      if (t !== null) {
        var r4 = b3();
        Ce3(t, e, n2, r4);
      }
      lu(e, n2);
    }
  };
  $o = function() {
    return P2;
  };
  Ko = function(e, n2) {
    var t = P2;
    try {
      return P2 = e, n2();
    } finally {
      P2 = t;
    }
  };
  jl = function(e, n2, t) {
    switch (n2) {
      case "input":
        if (Ml(e, t), n2 = t.name, t.type === "radio" && n2 != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n2) + '][type="radio"]'), n2 = 0; n2 < t.length; n2++) {
            var r4 = t[n2];
            if (r4 !== e && r4.form === e.form) {
              var l3 = Qr(r4);
              if (!l3)
                throw Error(v3(90));
              Co(r4), Ml(r4, l3);
            }
          }
        }
        break;
      case "textarea":
        No(e, t);
        break;
      case "select":
        n2 = t.value, n2 != null && jn(e, !!t.multiple, n2, false);
    }
  };
  Do = bi;
  Oo = kn;
  var zf = { usingClientEntryPoint: false, Events: [Vt, Mn, Qr, To, Mo, bi] }, it = { findFiberByHostInstance: dn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Pf = { bundleType: it.bundleType, version: it.version, rendererPackageName: it.rendererPackageName, rendererConfig: it.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ve2.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Io(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: it.findFiberByHostInstance || Nf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (ut = __REACT_DEVTOOLS_GLOBAL_HOOK__, !ut.isDisabled && ut.supportsFiber))
    try {
      Ar = ut.inject(Pf), Pe3 = ut;
    } catch {
    }
  var ut;
  fe3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf;
  fe3.createPortal = function(e, n2) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!uu(n2))
      throw Error(v3(200));
    return xf(e, n2, null, t);
  };
  fe3.createRoot = function(e, n2) {
    if (!uu(e))
      throw Error(v3(299));
    var t = false, r4 = "", l3 = ma;
    return n2 != null && (n2.unstable_strictMode === true && (t = true), n2.identifierPrefix !== void 0 && (r4 = n2.identifierPrefix), n2.onRecoverableError !== void 0 && (l3 = n2.onRecoverableError)), n2 = ru(e, 1, false, null, null, t, false, r4, l3), e[Ie3] = n2.current, Pt(e.nodeType === 8 ? e.parentNode : e), new iu(n2);
  };
  fe3.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n2 = e._reactInternals;
    if (n2 === void 0)
      throw typeof e.render == "function" ? Error(v3(188)) : (e = Object.keys(e).join(","), Error(v3(268, e)));
    return e = Io(n2), e = e === null ? null : e.stateNode, e;
  };
  fe3.flushSync = function(e) {
    return kn(e);
  };
  fe3.hydrate = function(e, n2, t) {
    if (!br(n2))
      throw Error(v3(200));
    return el(null, e, n2, true, t);
  };
  fe3.hydrateRoot = function(e, n2, t) {
    if (!uu(e))
      throw Error(v3(405));
    var r4 = t != null && t.hydratedSources || null, l3 = false, i = "", u2 = ma;
    if (t != null && (t.unstable_strictMode === true && (l3 = true), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (u2 = t.onRecoverableError)), n2 = pa(n2, null, e, 1, t ?? null, l3, false, i, u2), e[Ie3] = n2.current, Pt(e), r4)
      for (e = 0; e < r4.length; e++)
        t = r4[e], l3 = t._getVersion, l3 = l3(t._source), n2.mutableSourceEagerHydrationData == null ? n2.mutableSourceEagerHydrationData = [t, l3] : n2.mutableSourceEagerHydrationData.push(t, l3);
    return new qr(n2);
  };
  fe3.render = function(e, n2, t) {
    if (!br(n2))
      throw Error(v3(200));
    return el(null, e, n2, false, t);
  };
  fe3.unmountComponentAtNode = function(e) {
    if (!br(e))
      throw Error(v3(40));
    return e._reactRootContainer ? (kn(function() {
      el(null, null, e, false, function() {
        e._reactRootContainer = null, e[Ie3] = null;
      });
    }), true) : false;
  };
  fe3.unstable_batchedUpdates = bi;
  fe3.unstable_renderSubtreeIntoContainer = function(e, n2, t, r4) {
    if (!br(t))
      throw Error(v3(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(v3(38));
    return el(e, n2, t, false, r4);
  };
  fe3.version = "18.3.1-next-f1338f8080-20240426";
});
var ou = au(($f, ya) => {
  "use strict";
  function va() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(va);
      } catch (e) {
        console.error(e);
      }
  }
  va(), ya.exports = ha();
});
var sn = {};
_a(sn, { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Lf, createPortal: () => Tf, createRoot: () => Mf, default: () => Hf, findDOMNode: () => Df, flushSync: () => Of, hydrate: () => Rf, hydrateRoot: () => Ff, render: () => If, unmountComponentAtNode: () => Uf, unstable_batchedUpdates: () => jf, unstable_renderSubtreeIntoContainer: () => Vf, version: () => Af });
var wa = cu(ou());
an(sn, cu(ou()));
var { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Lf, createPortal: Tf, createRoot: Mf, findDOMNode: Df, flushSync: Of, hydrate: Rf, hydrateRoot: Ff, render: If, unmountComponentAtNode: Uf, unstable_batchedUpdates: jf, unstable_renderSubtreeIntoContainer: Vf, version: Af } = wa;
var { default: ga, ...Bf } = wa;
var Hf = ga !== void 0 ? ga : Bf;

// deno:https://esm.sh/v135/react-dom@18.3.1/denonext/client.js
var require3 = (n2) => {
  const e = (m2) => typeof m2.default < "u" ? m2.default : m2, c2 = (m2) => Object.assign({ __esModule: true }, m2);
  switch (n2) {
    case "react-dom":
      return e(react_dom_exports);
    default:
      throw new Error('module "' + n2 + '" not found');
  }
};
var d2 = Object.create;
var u = Object.defineProperty;
var E3 = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var p2 = Object.getPrototypeOf;
var h = Object.prototype.hasOwnProperty;
var x2 = ((t) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(t, { get: (e, o3) => (typeof require3 < "u" ? require3 : e)[o3] }) : t)(function(t) {
  if (typeof require3 < "u")
    return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var C = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var N = (t, e) => {
  for (var o3 in e)
    u(t, o3, { get: e[o3], enumerable: true });
};
var a = (t, e, o3, c2) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of m(e))
      !h.call(t, i) && i !== o3 && u(t, i, { get: () => e[i], enumerable: !(c2 = E3(e, i)) || c2.enumerable });
  return t;
};
var n = (t, e, o3) => (a(t, e, "default"), o3 && a(o3, e, "default"));
var l = (t, e, o3) => (o3 = t != null ? d2(p2(t)) : {}, a(e || !t || !t.__esModule ? u(o3, "default", { value: t, enumerable: true }) : o3, t));
var s = C((_2) => {
  "use strict";
  var R2 = x2("react-dom");
  _2.createRoot = R2.createRoot, _2.hydrateRoot = R2.hydrateRoot;
  var I2;
});
var r = {};
N(r, { createRoot: () => O3, default: () => v, hydrateRoot: () => g });
var y2 = l(s());
n(r, l(s()));
var { createRoot: O3, hydrateRoot: g } = y2;
var { default: f2, ...P } = y2;
var v = f2 !== void 0 ? f2 : P;

// deno:https://esm.sh/stable/preact@10.24.3/denonext/preact.mjs
var M2;
var d3;
var Q;
var le2;
var C2;
var G2;
var X;
var R;
var V;
var $3;
var B2;
var Y3;
var T2 = {};
var Z2 = [];
var ie2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var A = Array.isArray;
function b(_2, e) {
  for (var t in e)
    _2[t] = e[t];
  return _2;
}
function ee2(_2) {
  _2 && _2.parentNode && _2.parentNode.removeChild(_2);
}
function U2(_2, e, t, r4, n2) {
  var l3 = { type: _2, props: e, key: t, ref: r4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n2 ?? ++Q, __i: -1, __u: 0 };
  return n2 == null && d3.vnode != null && d3.vnode(l3), l3;
}
function H2(_2) {
  return _2.children;
}
function F(_2, e) {
  this.props = _2, this.context = e;
}
function x3(_2, e) {
  if (e == null)
    return _2.__ ? x3(_2.__, _2.__i + 1) : null;
  for (var t; e < _2.__k.length; e++)
    if ((t = _2.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof _2.type == "function" ? x3(_2) : null;
}
function _e3(_2) {
  var e, t;
  if ((_2 = _2.__) != null && _2.__c != null) {
    for (_2.__e = _2.__c.base = null, e = 0; e < _2.__k.length; e++)
      if ((t = _2.__k[e]) != null && t.__e != null) {
        _2.__e = _2.__c.base = t.__e;
        break;
      }
    return _e3(_2);
  }
}
function O4(_2) {
  (!_2.__d && (_2.__d = true) && C2.push(_2) && !N2.__r++ || G2 !== d3.debounceRendering) && ((G2 = d3.debounceRendering) || X)(N2);
}
function N2() {
  var _2, e, t, r4, n2, l3, i, s3;
  for (C2.sort(R); _2 = C2.shift(); )
    _2.__d && (e = C2.length, r4 = void 0, l3 = (n2 = (t = _2).__v).__e, i = [], s3 = [], t.__P && ((r4 = b({}, n2)).__v = n2.__v + 1, d3.vnode && d3.vnode(r4), j(t.__P, r4, n2, t.__n, t.__P.namespaceURI, 32 & n2.__u ? [l3] : null, i, l3 ?? x3(n2), !!(32 & n2.__u), s3), r4.__v = n2.__v, r4.__.__k[r4.__i] = r4, oe2(i, r4, s3), r4.__e != l3 && _e3(r4)), C2.length > e && C2.sort(R));
  N2.__r = 0;
}
function te2(_2, e, t, r4, n2, l3, i, s3, p4, u2, f4) {
  var o3, m2, c2, v3, g4, y3 = r4 && r4.__k || Z2, a4 = e.length;
  for (t.__d = p4, ue(t, e, y3), p4 = t.__d, o3 = 0; o3 < a4; o3++)
    (c2 = t.__k[o3]) != null && (m2 = c2.__i === -1 ? T2 : y3[c2.__i] || T2, c2.__i = o3, j(_2, c2, m2, n2, l3, i, s3, p4, u2, f4), v3 = c2.__e, c2.ref && m2.ref != c2.ref && (m2.ref && z2(m2.ref, null, c2), f4.push(c2.ref, c2.__c || v3, c2)), g4 == null && v3 != null && (g4 = v3), 65536 & c2.__u || m2.__k === c2.__k ? p4 = ne2(c2, p4, _2) : typeof c2.type == "function" && c2.__d !== void 0 ? p4 = c2.__d : v3 && (p4 = v3.nextSibling), c2.__d = void 0, c2.__u &= -196609);
  t.__d = p4, t.__e = g4;
}
function ue(_2, e, t) {
  var r4, n2, l3, i, s3, p4 = e.length, u2 = t.length, f4 = u2, o3 = 0;
  for (_2.__k = [], r4 = 0; r4 < p4; r4++)
    (n2 = e[r4]) != null && typeof n2 != "boolean" && typeof n2 != "function" ? (i = r4 + o3, (n2 = _2.__k[r4] = typeof n2 == "string" || typeof n2 == "number" || typeof n2 == "bigint" || n2.constructor == String ? U2(null, n2, null, null, null) : A(n2) ? U2(H2, { children: n2 }, null, null, null) : n2.constructor === void 0 && n2.__b > 0 ? U2(n2.type, n2.props, n2.key, n2.ref ? n2.ref : null, n2.__v) : n2).__ = _2, n2.__b = _2.__b + 1, l3 = null, (s3 = n2.__i = pe3(n2, t, i, f4)) !== -1 && (f4--, (l3 = t[s3]) && (l3.__u |= 131072)), l3 == null || l3.__v === null ? (s3 == -1 && o3--, typeof n2.type != "function" && (n2.__u |= 65536)) : s3 !== i && (s3 == i - 1 ? o3-- : s3 == i + 1 ? o3++ : (s3 > i ? o3-- : o3++, n2.__u |= 65536))) : n2 = _2.__k[r4] = null;
  if (f4)
    for (r4 = 0; r4 < u2; r4++)
      (l3 = t[r4]) != null && !(131072 & l3.__u) && (l3.__e == _2.__d && (_2.__d = x3(l3)), re2(l3, l3));
}
function ne2(_2, e, t) {
  var r4, n2;
  if (typeof _2.type == "function") {
    for (r4 = _2.__k, n2 = 0; r4 && n2 < r4.length; n2++)
      r4[n2] && (r4[n2].__ = _2, e = ne2(r4[n2], e, t));
    return e;
  }
  _2.__e != e && (e && _2.type && !t.contains(e) && (e = x3(_2)), t.insertBefore(_2.__e, e || null), e = _2.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function pe3(_2, e, t, r4) {
  var n2 = _2.key, l3 = _2.type, i = t - 1, s3 = t + 1, p4 = e[t];
  if (p4 === null || p4 && n2 == p4.key && l3 === p4.type && !(131072 & p4.__u))
    return t;
  if (r4 > (p4 != null && !(131072 & p4.__u) ? 1 : 0))
    for (; i >= 0 || s3 < e.length; ) {
      if (i >= 0) {
        if ((p4 = e[i]) && !(131072 & p4.__u) && n2 == p4.key && l3 === p4.type)
          return i;
        i--;
      }
      if (s3 < e.length) {
        if ((p4 = e[s3]) && !(131072 & p4.__u) && n2 == p4.key && l3 === p4.type)
          return s3;
        s3++;
      }
    }
  return -1;
}
function J2(_2, e, t) {
  e[0] === "-" ? _2.setProperty(e, t ?? "") : _2[e] = t == null ? "" : typeof t != "number" || ie2.test(e) ? t : t + "px";
}
function W3(_2, e, t, r4, n2) {
  var l3;
  e:
    if (e === "style")
      if (typeof t == "string")
        _2.style.cssText = t;
      else {
        if (typeof r4 == "string" && (_2.style.cssText = r4 = ""), r4)
          for (e in r4)
            t && e in t || J2(_2.style, e, "");
        if (t)
          for (e in t)
            r4 && t[e] === r4[e] || J2(_2.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      l3 = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in _2 || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), _2.l || (_2.l = {}), _2.l[e + l3] = t, t ? r4 ? t.u = r4.u : (t.u = V, _2.addEventListener(e, l3 ? B2 : $3, l3)) : _2.removeEventListener(e, l3 ? B2 : $3, l3);
    else {
      if (n2 == "http://www.w3.org/2000/svg")
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in _2)
        try {
          _2[e] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === false && e[4] !== "-" ? _2.removeAttribute(e) : _2.setAttribute(e, e == "popover" && t == 1 ? "" : t));
    }
}
function K(_2) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + _2];
      if (e.t == null)
        e.t = V++;
      else if (e.t < t.u)
        return;
      return t(d3.event ? d3.event(e) : e);
    }
  };
}
function j(_2, e, t, r4, n2, l3, i, s3, p4, u2) {
  var f4, o3, m2, c2, v3, g4, y3, a4, h3, P2, w3, D2, S3, q3, E5, I2, k2 = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & t.__u && (p4 = !!(32 & t.__u), l3 = [s3 = e.__e = t.__e]), (f4 = d3.__b) && f4(e);
  e:
    if (typeof k2 == "function")
      try {
        if (a4 = e.props, h3 = "prototype" in k2 && k2.prototype.render, P2 = (f4 = k2.contextType) && r4[f4.__c], w3 = f4 ? P2 ? P2.props.value : f4.__ : r4, t.__c ? y3 = (o3 = e.__c = t.__c).__ = o3.__E : (h3 ? e.__c = o3 = new k2(a4, w3) : (e.__c = o3 = new F(a4, w3), o3.constructor = k2, o3.render = ae3), P2 && P2.sub(o3), o3.props = a4, o3.state || (o3.state = {}), o3.context = w3, o3.__n = r4, m2 = o3.__d = true, o3.__h = [], o3._sb = []), h3 && o3.__s == null && (o3.__s = o3.state), h3 && k2.getDerivedStateFromProps != null && (o3.__s == o3.state && (o3.__s = b({}, o3.__s)), b(o3.__s, k2.getDerivedStateFromProps(a4, o3.__s))), c2 = o3.props, v3 = o3.state, o3.__v = e, m2)
          h3 && k2.getDerivedStateFromProps == null && o3.componentWillMount != null && o3.componentWillMount(), h3 && o3.componentDidMount != null && o3.__h.push(o3.componentDidMount);
        else {
          if (h3 && k2.getDerivedStateFromProps == null && a4 !== c2 && o3.componentWillReceiveProps != null && o3.componentWillReceiveProps(a4, w3), !o3.__e && (o3.shouldComponentUpdate != null && o3.shouldComponentUpdate(a4, o3.__s, w3) === false || e.__v === t.__v)) {
            for (e.__v !== t.__v && (o3.props = a4, o3.state = o3.__s, o3.__d = false), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(L) {
              L && (L.__ = e);
            }), D2 = 0; D2 < o3._sb.length; D2++)
              o3.__h.push(o3._sb[D2]);
            o3._sb = [], o3.__h.length && i.push(o3);
            break e;
          }
          o3.componentWillUpdate != null && o3.componentWillUpdate(a4, o3.__s, w3), h3 && o3.componentDidUpdate != null && o3.__h.push(function() {
            o3.componentDidUpdate(c2, v3, g4);
          });
        }
        if (o3.context = w3, o3.props = a4, o3.__P = _2, o3.__e = false, S3 = d3.__r, q3 = 0, h3) {
          for (o3.state = o3.__s, o3.__d = false, S3 && S3(e), f4 = o3.render(o3.props, o3.state, o3.context), E5 = 0; E5 < o3._sb.length; E5++)
            o3.__h.push(o3._sb[E5]);
          o3._sb = [];
        } else
          do
            o3.__d = false, S3 && S3(e), f4 = o3.render(o3.props, o3.state, o3.context), o3.state = o3.__s;
          while (o3.__d && ++q3 < 25);
        o3.state = o3.__s, o3.getChildContext != null && (r4 = b(b({}, r4), o3.getChildContext())), h3 && !m2 && o3.getSnapshotBeforeUpdate != null && (g4 = o3.getSnapshotBeforeUpdate(c2, v3)), te2(_2, A(I2 = f4 != null && f4.type === H2 && f4.key == null ? f4.props.children : f4) ? I2 : [I2], e, t, r4, n2, l3, i, s3, p4, u2), o3.base = e.__e, e.__u &= -161, o3.__h.length && i.push(o3), y3 && (o3.__E = o3.__ = null);
      } catch (L) {
        if (e.__v = null, p4 || l3 != null) {
          for (e.__u |= p4 ? 160 : 128; s3 && s3.nodeType === 8 && s3.nextSibling; )
            s3 = s3.nextSibling;
          l3[l3.indexOf(s3)] = null, e.__e = s3;
        } else
          e.__e = t.__e, e.__k = t.__k;
        d3.__e(L, e, t);
      }
    else
      l3 == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = fe2(t.__e, e, t, r4, n2, l3, i, p4, u2);
  (f4 = d3.diffed) && f4(e);
}
function oe2(_2, e, t) {
  e.__d = void 0;
  for (var r4 = 0; r4 < t.length; r4++)
    z2(t[r4], t[++r4], t[++r4]);
  d3.__c && d3.__c(e, _2), _2.some(function(n2) {
    try {
      _2 = n2.__h, n2.__h = [], _2.some(function(l3) {
        l3.call(n2);
      });
    } catch (l3) {
      d3.__e(l3, n2.__v);
    }
  });
}
function fe2(_2, e, t, r4, n2, l3, i, s3, p4) {
  var u2, f4, o3, m2, c2, v3, g4, y3 = t.props, a4 = e.props, h3 = e.type;
  if (h3 === "svg" ? n2 = "http://www.w3.org/2000/svg" : h3 === "math" ? n2 = "http://www.w3.org/1998/Math/MathML" : n2 || (n2 = "http://www.w3.org/1999/xhtml"), l3 != null) {
    for (u2 = 0; u2 < l3.length; u2++)
      if ((c2 = l3[u2]) && "setAttribute" in c2 == !!h3 && (h3 ? c2.localName === h3 : c2.nodeType === 3)) {
        _2 = c2, l3[u2] = null;
        break;
      }
  }
  if (_2 == null) {
    if (h3 === null)
      return document.createTextNode(a4);
    _2 = document.createElementNS(n2, h3, a4.is && a4), s3 && (d3.__m && d3.__m(e, l3), s3 = false), l3 = null;
  }
  if (h3 === null)
    y3 === a4 || s3 && _2.data === a4 || (_2.data = a4);
  else {
    if (l3 = l3 && M2.call(_2.childNodes), y3 = t.props || T2, !s3 && l3 != null)
      for (y3 = {}, u2 = 0; u2 < _2.attributes.length; u2++)
        y3[(c2 = _2.attributes[u2]).name] = c2.value;
    for (u2 in y3)
      if (c2 = y3[u2], u2 != "children") {
        if (u2 == "dangerouslySetInnerHTML")
          o3 = c2;
        else if (!(u2 in a4)) {
          if (u2 == "value" && "defaultValue" in a4 || u2 == "checked" && "defaultChecked" in a4)
            continue;
          W3(_2, u2, null, c2, n2);
        }
      }
    for (u2 in a4)
      c2 = a4[u2], u2 == "children" ? m2 = c2 : u2 == "dangerouslySetInnerHTML" ? f4 = c2 : u2 == "value" ? v3 = c2 : u2 == "checked" ? g4 = c2 : s3 && typeof c2 != "function" || y3[u2] === c2 || W3(_2, u2, c2, y3[u2], n2);
    if (f4)
      s3 || o3 && (f4.__html === o3.__html || f4.__html === _2.innerHTML) || (_2.innerHTML = f4.__html), e.__k = [];
    else if (o3 && (_2.innerHTML = ""), te2(_2, A(m2) ? m2 : [m2], e, t, r4, h3 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n2, l3, i, l3 ? l3[0] : t.__k && x3(t, 0), s3, p4), l3 != null)
      for (u2 = l3.length; u2--; )
        ee2(l3[u2]);
    s3 || (u2 = "value", h3 === "progress" && v3 == null ? _2.removeAttribute("value") : v3 !== void 0 && (v3 !== _2[u2] || h3 === "progress" && !v3 || h3 === "option" && v3 !== y3[u2]) && W3(_2, u2, v3, y3[u2], n2), u2 = "checked", g4 !== void 0 && g4 !== _2[u2] && W3(_2, u2, g4, y3[u2], n2));
  }
  return _2;
}
function z2(_2, e, t) {
  try {
    if (typeof _2 == "function") {
      var r4 = typeof _2.__u == "function";
      r4 && _2.__u(), r4 && e == null || (_2.__u = _2(e));
    } else
      _2.current = e;
  } catch (n2) {
    d3.__e(n2, t);
  }
}
function re2(_2, e, t) {
  var r4, n2;
  if (d3.unmount && d3.unmount(_2), (r4 = _2.ref) && (r4.current && r4.current !== _2.__e || z2(r4, null, e)), (r4 = _2.__c) != null) {
    if (r4.componentWillUnmount)
      try {
        r4.componentWillUnmount();
      } catch (l3) {
        d3.__e(l3, e);
      }
    r4.base = r4.__P = null;
  }
  if (r4 = _2.__k)
    for (n2 = 0; n2 < r4.length; n2++)
      r4[n2] && re2(r4[n2], e, t || typeof _2.type != "function");
  t || ee2(_2.__e), _2.__c = _2.__ = _2.__e = _2.__d = void 0;
}
function ae3(_2, e, t) {
  return this.constructor(_2, t);
}
M2 = Z2.slice, d3 = { __e: function(_2, e, t, r4) {
  for (var n2, l3, i; e = e.__; )
    if ((n2 = e.__c) && !n2.__)
      try {
        if ((l3 = n2.constructor) && l3.getDerivedStateFromError != null && (n2.setState(l3.getDerivedStateFromError(_2)), i = n2.__d), n2.componentDidCatch != null && (n2.componentDidCatch(_2, r4 || {}), i = n2.__d), i)
          return n2.__E = n2;
      } catch (s3) {
        _2 = s3;
      }
  throw _2;
} }, Q = 0, le2 = function(_2) {
  return _2 != null && _2.constructor == null;
}, F.prototype.setState = function(_2, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof _2 == "function" && (_2 = _2(b({}, t), this.props)), _2 && b(t, _2), _2 != null && this.__v && (e && this._sb.push(e), O4(this));
}, F.prototype.forceUpdate = function(_2) {
  this.__v && (this.__e = true, _2 && this.__h.push(_2), O4(this));
}, F.prototype.render = H2, C2 = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, R = function(_2, e) {
  return _2.__v.__b - e.__v.__b;
}, N2.__r = 0, V = 0, $3 = K(false), B2 = K(true), Y3 = 0;

// deno:https://esm.sh/stable/preact@10.24.3/denonext/hooks.js
var c;
var r2;
var d4;
var b2;
var v2 = 0;
var x4 = [];
var o = d3;
var g2 = o.__b;
var C3 = o.__r;
var A2 = o.diffed;
var D = o.__c;
var F2 = o.unmount;
var k = o.__;
function l2(t, _2) {
  o.__h && o.__h(r2, t, v2 || _2), v2 = 0;
  var u2 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t >= u2.__.length && u2.__.push({}), u2.__[t];
}
function B3(t) {
  return v2 = 1, I(U3, t);
}
function I(t, _2, u2) {
  var n2 = l2(c++, 2);
  if (n2.t = t, !n2.__c && (n2.__ = [u2 ? u2(_2) : U3(void 0, _2), function(a4) {
    var f4 = n2.__N ? n2.__N[0] : n2.__[0], s3 = n2.t(f4, a4);
    f4 !== s3 && (n2.__N = [s3, n2.__[1]], n2.__c.setState({}));
  }], n2.__c = r2, !r2.u)) {
    var i = function(a4, f4, s3) {
      if (!n2.__c.__H)
        return true;
      var m2 = n2.__c.__H.__.filter(function(e) {
        return !!e.__c;
      });
      if (m2.every(function(e) {
        return !e.__N;
      }))
        return !h3 || h3.call(this, a4, f4, s3);
      var N3 = false;
      return m2.forEach(function(e) {
        if (e.__N) {
          var P2 = e.__[0];
          e.__ = e.__N, e.__N = void 0, P2 !== e.__[0] && (N3 = true);
        }
      }), !(!N3 && n2.__c.props === a4) && (!h3 || h3.call(this, a4, f4, s3));
    };
    r2.u = true;
    var h3 = r2.shouldComponentUpdate, y3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(a4, f4, s3) {
      if (this.__e) {
        var m2 = h3;
        h3 = void 0, i(a4, f4, s3), h3 = m2;
      }
      y3 && y3.call(this, a4, f4, s3);
    }, r2.shouldComponentUpdate = i;
  }
  return n2.__N || n2.__;
}
function w(t, _2) {
  var u2 = l2(c++, 3);
  !o.__s && E4(u2.__H, _2) && (u2.__ = t, u2.i = _2, r2.__H.__h.push(u2));
}
function S2() {
  for (var t; t = x4.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(p3), t.__H.__h.forEach(H3), t.__H.__h = [];
      } catch (_2) {
        t.__H.__h = [], o.__e(_2, t.__v);
      }
}
o.__b = function(t) {
  r2 = null, g2 && g2(t);
}, o.__ = function(t, _2) {
  t && _2.__k && _2.__k.__m && (t.__m = _2.__k.__m), k && k(t, _2);
}, o.__r = function(t) {
  C3 && C3(t), c = 0;
  var _2 = (r2 = t.__c).__H;
  _2 && (d4 === r2 ? (_2.__h = [], r2.__h = [], _2.__.forEach(function(u2) {
    u2.__N && (u2.__ = u2.__N), u2.i = u2.__N = void 0;
  })) : (_2.__h.forEach(p3), _2.__h.forEach(H3), _2.__h = [], c = 0)), d4 = r2;
}, o.diffed = function(t) {
  A2 && A2(t);
  var _2 = t.__c;
  _2 && _2.__H && (_2.__H.__h.length && (x4.push(_2) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || W4)(S2)), _2.__H.__.forEach(function(u2) {
    u2.i && (u2.__H = u2.i), u2.i = void 0;
  })), d4 = r2 = null;
}, o.__c = function(t, _2) {
  _2.some(function(u2) {
    try {
      u2.__h.forEach(p3), u2.__h = u2.__h.filter(function(n2) {
        return !n2.__ || H3(n2);
      });
    } catch (n2) {
      _2.some(function(i) {
        i.__h && (i.__h = []);
      }), _2 = [], o.__e(n2, u2.__v);
    }
  }), D && D(t, _2);
}, o.unmount = function(t) {
  F2 && F2(t);
  var _2, u2 = t.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      p3(n2);
    } catch (i) {
      _2 = i;
    }
  }), u2.__H = void 0, _2 && o.__e(_2, u2.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function W4(t) {
  var _2, u2 = function() {
    clearTimeout(n2), q2 && cancelAnimationFrame(_2), setTimeout(t);
  }, n2 = setTimeout(u2, 100);
  q2 && (_2 = requestAnimationFrame(u2));
}
function p3(t) {
  var _2 = r2, u2 = t.__c;
  typeof u2 == "function" && (t.__c = void 0, u2()), r2 = _2;
}
function H3(t) {
  var _2 = r2;
  t.__c = t.__(), r2 = _2;
}
function E4(t, _2) {
  return !t || t.length !== _2.length || _2.some(function(u2, n2) {
    return u2 !== t[n2];
  });
}
function U3(t, _2) {
  return typeof _2 == "function" ? _2(t) : _2;
}

// deno:https://esm.sh/v135/@tauri-apps/api@2.1.1/denonext/external/tslib/tslib.es6.js
function a2(e, o3, t, r4) {
  if (t === "a" && !r4)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof o3 == "function" ? e !== o3 || !r4 : !o3.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r4 : t === "a" ? r4.call(e) : r4 ? r4.value : o3.get(e);
}
function s2(e, o3, t, r4, n2) {
  if (r4 === "m")
    throw new TypeError("Private method is not writable");
  if (r4 === "a" && !n2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof o3 == "function" ? e !== o3 || !n2 : !o3.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r4 === "a" ? n2.call(e, t) : n2 ? n2.value = t : o3.set(e, t), t;
}

// deno:https://esm.sh/v135/@tauri-apps/api@2.1.1/denonext/core.js
var r3;
var o2;
var a3;
var h2;
var g3 = "__TAURI_TO_IPC_KEY__";
function w2(s3, e = false) {
  return window.__TAURI_INTERNALS__.transformCallback(s3, e);
}
var f3 = class {
  constructor() {
    this.__TAURI_CHANNEL_MARKER__ = true, r3.set(this, () => {
    }), o2.set(this, 0), a3.set(this, {}), this.id = w2(({ message: e, id: n2 }) => {
      if (n2 === a2(this, o2, "f")) {
        s2(this, o2, n2 + 1, "f"), a2(this, r3, "f").call(this, e);
        let i = Object.keys(a2(this, a3, "f"));
        if (i.length > 0) {
          let l3 = n2 + 1;
          for (let u2 of i.sort())
            if (parseInt(u2) === l3) {
              let p4 = a2(this, a3, "f")[u2];
              delete a2(this, a3, "f")[u2], a2(this, r3, "f").call(this, p4), l3 += 1;
            } else
              break;
          s2(this, o2, l3, "f");
        }
      } else
        a2(this, a3, "f")[n2.toString()] = e;
    });
  }
  set onmessage(e) {
    s2(this, r3, e, "f");
  }
  get onmessage() {
    return a2(this, r3, "f");
  }
  [(r3 = /* @__PURE__ */ new WeakMap(), o2 = /* @__PURE__ */ new WeakMap(), a3 = /* @__PURE__ */ new WeakMap(), g3)]() {
    return `__CHANNEL__:${this.id}`;
  }
  toJSON() {
    return this[g3]();
  }
};
async function _(s3, e = {}, n2) {
  return window.__TAURI_INTERNALS__.invoke(s3, e, n2);
}
h2 = /* @__PURE__ */ new WeakMap();

// deno:file:///C:/Users/gotcha/my_deno_tauri/www-src/App.tsx
function App() {
  const [cards, setCards] = B3([]);
  const [currentCard, setCurrentCard] = B3(null);
  w(() => {
    _("get_cards").then((result) => {
      setCards(JSON.parse(result));
    });
  }, []);
  const handleImport = async () => {
    const result = await _("import_cards");
    setCards(JSON.parse(result));
  };
  const handleNewTopic = async (topic) => {
    await _("create_topic", { topic });
  };
  return /* @__PURE__ */ React.createElement("div", { class: "container" }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("button", { onClick: handleImport }, "Import"), /* @__PURE__ */ React.createElement("button", { onClick: () => handleNewTopic("New Topic") }, "New Topic")), /* @__PURE__ */ React.createElement("main", null));
}

// deno:file:///C:/Users/gotcha/my_deno_tauri/www-src/index.tsx
var useLiveReload = true;
if (useLiveReload) {
  console.log("Using live reload");
  new EventSource("/esbuild").addEventListener(
    "change",
    () => location.reload()
  );
}
var root = O3(document.getElementById("root"));
root.render(/* @__PURE__ */ Ge.createElement(App, null));
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
