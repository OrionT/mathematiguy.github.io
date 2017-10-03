getElementsByTagNamevar addComment = {
    moveForm: function(e, t, n, r) {
        var o, i, a, s, l = this, u = l.I(e), c = l.I(n), f = l.I("cancel-comment-reply-link"), d = l.I("comment-replying-to"), p = l.I("comment-post-slug"), h = c.getElementsByTagName("form")[0];
        if (u && c && f && d && h) {
            l.respondId = n,
            r = r || !1,
            l.I("sm-temp-form-div") || (o = document.createElement("div"),
            o.id = "sm-temp-form-div",
            o.style.display = "none",
            c.parentNode.insertBefore(o, c)),
            u.parentNode.insertBefore(c, u.nextSibling),
            p && r && (p.value = r),
            d.value = t,
            f.style.display = "",
            f.onclick = function() {
                var e = addComment
                  , t = e.I("sm-temp-form-div")
                  , n = e.I(e.respondId);
                if (t && n)
                    return e.I("comment-replying-to").value = null,
                    t.parentNode.insertBefore(n, t),
                    t.parentNode.removeChild(t),
                    this.style.display = "none",
                    this.onclick = null,
                    !1
            }
            ;
            try {
                for (var g = 0; g < h.elements.length; g++)
                    if (i = h.elements[g],
                    s = !1,
                    "getComputedStyle"in window ? a = window.getComputedStyle(i) : document.documentElement.currentStyle && (a = i.currentStyle),
                    (i.offsetWidth <= 0 && i.offsetHeight <= 0 || "hidden" === a.visibility) && (s = !0),
                    "hidden" !== i.type && !i.disabled && !s) {
                        i.focus();
                        break
                    }
            } catch (m) {}
            return !1
        }
    },
    I: function(e) {
        return document.getElementById(e)
    }
};
