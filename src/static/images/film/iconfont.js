export const iconAli =  (e) =>{
    var t, n, o, i, c, d,
        l = '<svg><symbol id="icon-youxi" viewBox="0 0 1024 1024"><path d="M878.216 480.486c-80.717 0-145.786 63.39-145.786 142.026 0 78.634 65.07 142.026 145.786 142.026S1024 701.146 1024 622.512c-0.824-78.636-65.89-142.026-145.784-142.026z m68.361-85.86C890.57 189.212 704.426 51.197 482.044 51.197c-221.56 0-408.526 137.211-465.358 342.628C-40.146 599.241 51.279 807.064 244.01 911.38c192.733 105.112 425.825 73.017 580.668-78.638l-343.46-321.763 465.358-116.352zM406.27 261.428c0-48.948 40.357-89.067 88.951-89.067 49.42 0 88.955 40.12 88.955 89.067 0 48.949-40.36 89.068-88.955 89.068-48.594-0.801-88.951-40.12-88.951-89.068z" fill="#F46267" ></path></symbol></svg>',
        s = (s = document.getElementsByTagName("script"))[s.length - 1].getAttribute("data-injectcss");
    if (s && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }

    function a() {
        c || (c = !0, o())
    }

    t = function () {
        var e, t, n, o;
        (o = document.createElement("div")).innerHTML = l, l = null, (n = o.getElementsByTagName("svg")[0]) && (n.setAttribute("aria-hidden", "true"), n.style.position = "absolute", n.style.width = 0, n.style.height = 0, n.style.overflow = "hidden", e = n, (t = document.body).firstChild ? (o = e, (n = t.firstChild).parentNode.insertBefore(o, n)) : t.appendChild(e))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function () {
        document.removeEventListener("DOMContentLoaded", n, !1), t()
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t, i = e.document, c = !1, (d = function () {
        try {
            i.documentElement.doScroll("left")
        } catch (e) {
            return void setTimeout(d, 50)
        }
        a()
    })(), i.onreadystatechange = function () {
        "complete" == i.readyState && (i.onreadystatechange = null, a())
    })
};
