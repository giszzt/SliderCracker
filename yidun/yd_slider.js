// 删除关键 js, 请自行补全


function uuid(e, t) {
    var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
        , a = []
        , i = void 0;
    if (t = t || n.length,
        e)
        for (i = 0; i < e; i++)
            a[i] = n[0 | Math.random() * t];
    else {
        var r = void 0;
        for (a[8] = a[13] = a[18] = a[23] = "-",
                 a[14] = "4",
                 i = 0; i < 36; i++)
            a[i] || (r = 0 | 16 * Math.random(),
                a[i] = n[19 === i ? 3 & r | 8 : r])
    }
    return a.join("")
}

function get_cb() {
    var e = uuid(32);
    return t.eypt(e)
}

function b_sample(e, t) {
    var n = e.length;
    if (n <= t)
        return e;
    for (var i = [], r = 0, o = 0; o < n; o++)
        o >= r * (n - 1) / (t - 1) && (i.push(e[o]),
            r += 1);
    return i
}

function process_trace(token, trace) {
    var new_trace = new Array();
    for (var i_index = 0 ;i_index < trace.length; i_index++) {
        var xx = t.xor_encode(token, trace[i_index] + "");
        new_trace.push(xx)
    }
    return new_trace
}

function encrypt(token, trace) {
    var new_trace = process_trace(token, trace),
      n_ = b_sample(new_trace, 50),
      r_ = t.eypt(t.xor_encode(token, parseInt(trace[trace.length - 1][0] - trace[0][0] + "px", 10) / 306 * 100 + ""));
    return {
        d: t.eypt(n_.join(":")),
        m: "",
        p: r_,
        ext: t.eypt(t.xor_encode(token, 1 + "," + new_trace.length))
    }
}


console.log(process_trace("8df1e4d682d94d14a4b62a6dda9be30f", [[1, 0, 36], [5, 0, 53], [12, 0, 64], [21, 0, 81], [33, 0, 95], [45, 0, 106], [61, 0, 117], [79, 0, 135], [104, 1, 148], [118, 0, 162], [138, 0, 176], [169, 1, 190], [201, 0, 206], [202, 0, 221], [203, 0, 235], [204, 0, 249], [205, 0, 264], [206, 0, 282], [207, 2, 297], [208, 0, 309], [209, 0, 326], [210, 0, 344], [211, 0, 355], [212, 0, 369], [213, 0, 384], [214, 0, 402], [215, 2, 417], [216, 0, 435], [217, 0, 447], [218, 0, 462], [219, 0, 479], [220, 0, 495], [221, 0, 512], [222, 0, 530], [223, 0, 546], [224, 0, 559], [225, 0, 572], [226, 0, 586], [227, 0, 603], [228, 0, 616], [229, 0, 634], [230, 0, 650], [231, 0, 665], [232, 0, 680]],));
console.log(encrypt(
    "8df1e4d682d94d14a4b62a6dda9be30f",
    [[1, 0, 36], [5, 0, 53], [12, 0, 64], [21, 0, 81], [33, 0, 95], [45, 0, 106], [61, 0, 117], [79, 0, 135], [104, 1, 148], [118, 0, 162], [138, 0, 176], [169, 1, 190], [201, 0, 206], [202, 0, 221], [203, 0, 235], [204, 0, 249], [205, 0, 264], [206, 0, 282], [207, 2, 297], [208, 0, 309], [209, 0, 326], [210, 0, 344], [211, 0, 355], [212, 0, 369], [213, 0, 384], [214, 0, 402], [215, 2, 417], [216, 0, 435], [217, 0, 447], [218, 0, 462], [219, 0, 479], [220, 0, 495], [221, 0, 512], [222, 0, 530], [223, 0, 546], [224, 0, 559], [225, 0, 572], [226, 0, 586], [227, 0, 603], [228, 0, 616], [229, 0, 634], [230, 0, 650], [231, 0, 665], [232, 0, 680]],
));
console.log(get_cb());
