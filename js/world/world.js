function world(value) {
    var v = value;

    var _ = {};

    _.Value = function (value) {
        if (value)
            v = value;
        else
            return v;
    };

    return _;
};