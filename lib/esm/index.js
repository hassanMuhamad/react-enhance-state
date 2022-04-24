var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export function useUpdateStateByKey(state, setState) {
    return function (key, value) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[key] = value, _a)));
    };
}
export function useUpdateState(state, setState) {
    return function (updates) {
        setState(__assign(__assign({}, state), updates));
    };
}
export function useStrictUpdateState(state, setState) {
    return function (updates) {
        setState(__assign(__assign({}, state), updates));
    };
}
