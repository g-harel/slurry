const s = (f, ...a) => (...b) => (b.length ? s(f, ...a, ...b) : f(...a));

module.exports = s;
