!(function t(e, i, r) {
  function n(s, a) {
    if (!i[s]) {
      if (!e[s]) {
        var l = "function" == typeof require && require;
        if (!a && l) return l(s, !0);
        if (o) return o(s, !0);
        var h = new Error("Cannot find module '" + s + "'");
        throw ((h.code = "MODULE_NOT_FOUND"), h);
      }
      var c = (i[s] = { exports: {} });
      e[s][0].call(
        c.exports,
        function (t) {
          return n(e[s][1][t] || t);
        },
        c,
        c.exports,
        t,
        e,
        i,
        r
      );
    }
    return i[s].exports;
  }
  for (
    var o = "function" == typeof require && require, s = 0;
    s < r.length;
    s++
  )
    n(r[s]);
  return n;
})(
  {
    1: [
      function (e, i, r) {
        "use strict";
        var n = e("dropzone"),
          o = e("fabric").fabric;
        function s() {
          var t = document.getElementsByClassName("canvas-container")[0];
          (t.style.width = "auto"),
            (t.style.height = "".concat(t.clientWidth, "px"));
        }
        function a(t, e) {
          t.setOverlayImage(
            e,
            function () {
              t.overlayImage.scaleToWidth(t.getWidth()), t.renderAll();
            },
            { originX: "left", originY: "top", crossOrigin: "anonymous" }
          );
        }
        (n.autoDiscover = !1),
          document.addEventListener("DOMContentLoaded", function () {
            var e = (this.__canvas = new o.Canvas("c", {
                width: 500,
                height: 500,
              })),
              i = new o.Image();
            s();
            var r = new n("#upload", {
              url: "UploadImages",
              autoProcessQueue: !1,
              createImageThumbnails: !1,
              maxFiles: 1,
              acceptedFiles: "image/*",
              addRemoveLinks: !0,
              clickable: "#upload, #upload-text",
            });
            !(function () {
              o.Object.prototype.transparentCorners = !1;
              var t = function (t) {
                  return document.getElementById(t);
                },
                r = t("angle-control");
              r.oninput = function () {
                i.set("angle", parseInt(this.value, 10)).setCoords(),
                  e.requestRenderAll();
              };
              var n = t("scale-control");
              function s() {
                (n.value = i.scaleX), (r.value = i.angle);
              }
              (n.oninput = function () {
                i.scale(parseFloat(this.value) / 200).setCoords(),
                  e.requestRenderAll();
              }),
                e.on({
                  "object:moving": s,
                  "object:scaling": s,
                  "object:resizing": s,
                  "object:rotating": s,
                }),
                e.setOverlayImage(
                  "./assets/images/frames/" + idAnh,
                  function () {
                    e.overlayImage.scaleToWidth(e.getWidth()), e.renderAll();
                  },
                  { originX: "left", originY: "top", crossOrigin: "anonymous" }
                );
            })();
            var l = new FileReader();
            (l.onload = function (t) {
              var r = new Image();
              (r.src = t.target.result),
                o.util.loadImage(r.src, function () {
                  (i = new o.Image(r)).set({
                    lockMovementX: !1,
                    lockMovementY: !1,
                    lockScalingX: !1,
                    lockScalingY: !1,
                    lockRotation: !1,
                    selectable: !0,
                    centeredRotation: !0,
                    centeredScaling: !0,
                    cornerColor: "#0d2240",
                    cornerSize: 30,
                    lockSkewingX: !0,
                    lockSkewingY: !0,
                    originX: "center",
                    originY: "center",
                    hasControls: !1,
                  }),
                    i.scaleToHeight(e.getHeight()),
                    i.scaleToWidth(e.getWidth()),
                    e.centerObject(i),
                    e.add(i),
                    e.renderAll(),
                    e.setActiveObject(i);
                });
            }),
              r.on("addedfile", function (t) {
                l.readAsDataURL(t),
                  (document.getElementById("download").disabled = !1),
                  (document.getElementById("angle-control").disabled = !1),
                  (document.getElementById("scale-control").disabled = !1),
                  (document.getElementById("upload-text").innerHTML = "");
              }),
              r.on("removedfile", function () {
                e.remove(i),
                  (document.getElementById("download").disabled = !0),
                  (document.getElementById("angle-control").disabled = !0),
                  (document.getElementById("scale-control").disabled = !0),
                  (document.getElementById("upload-text").innerHTML =
                    "Drop files here or click to upload.");
              }),
              document
                .getElementById("frame-1")
                .addEventListener("click", function () {
                  a(e, "./img/frames/frame-1.png");
                }),
              /*
              document
                .getElementById("frame-2")
                .addEventListener("click", function () {
                  a(e, "./img/frames/khung-2.png");
                }),
              document
                .getElementById("frame-3")
                .addEventListener("click", function () {
                  a(e, "./img/frames/frame-3.png");
                }),
                */
              document.getElementById("download").addEventListener(
                "click",
                function () {
                  var i = e.toDataURL({
                    format: "jpeg",
                    quality: 1,
                    multiplier: 4,
                  });
                  if (window.URL && i)
                    if (window.navigator.msSaveOrOpenBlob)
                      window.navigator.msSaveOrOpenBlob(t, "profile-pic.jpeg");
                    else {
                      var r = document.createElement("a");
                      (r.href = i),
                        (r.download = "profile-pic.jpeg"),
                        document.body.appendChild(r),
                        r.click(),
                        document.body.removeChild(r);
                    }
                },
                !1
              );
          }),
          window.addEventListener("resize", function () {
            s();
          });
      },
      { dropzone: 2, fabric: 3 },
    ],
    2: [
      function (t, e, i) {
        "use strict";
        function r(t) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function n(t, e) {
          return (n =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function o(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var i,
              r = l(t);
            if (e) {
              var n = l(this).constructor;
              i = Reflect.construct(r, arguments, n);
            } else i = r.apply(this, arguments);
            return s(this, i);
          };
        }
        function s(t, e) {
          return !e || ("object" !== r(e) && "function" != typeof e) ? a(t) : e;
        }
        function a(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function l(t) {
          return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function h(t, e) {
          var i;
          if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
            if (
              Array.isArray(t) ||
              (i = (function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return c(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === i && t.constructor && (i = t.constructor.name);
                if ("Map" === i || "Set" === i) return Array.from(t);
                if (
                  "Arguments" === i ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                )
                  return c(t, e);
              })(t)) ||
              (e && t && "number" == typeof t.length)
            ) {
              i && (t = i);
              var r = 0,
                n = function () {};
              return {
                s: n,
                n: function () {
                  return r >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[r++] };
                },
                e: function (t) {
                  throw t;
                },
                f: n,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var o,
            s = !0,
            a = !1;
          return {
            s: function () {
              i = t[Symbol.iterator]();
            },
            n: function () {
              var t = i.next();
              return (s = t.done), t;
            },
            e: function (t) {
              (a = !0), (o = t);
            },
            f: function () {
              try {
                s || null == i.return || i.return();
              } finally {
                if (a) throw o;
              }
            },
          };
        }
        function c(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
          return r;
        }
        function u(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function f(t, e) {
          for (var i = 0; i < e.length; i++) {
            var r = e[i];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function d(t, e, i) {
          return e && f(t.prototype, e), i && f(t, i), t;
        }
        var p = (function () {
            function t() {
              u(this, t);
            }
            return (
              d(t, [
                {
                  key: "on",
                  value: function (t, e) {
                    return (
                      (this._callbacks = this._callbacks || {}),
                      this._callbacks[t] || (this._callbacks[t] = []),
                      this._callbacks[t].push(e),
                      this
                    );
                  },
                },
                {
                  key: "emit",
                  value: function (t) {
                    this._callbacks = this._callbacks || {};
                    var e = this._callbacks[t];
                    if (e) {
                      for (
                        var i = arguments.length,
                          r = new Array(i > 1 ? i - 1 : 0),
                          n = 1;
                        n < i;
                        n++
                      )
                        r[n - 1] = arguments[n];
                      var o,
                        s = h(e);
                      try {
                        for (s.s(); !(o = s.n()).done; ) {
                          var a = o.value;
                          a.apply(this, r);
                        }
                      } catch (t) {
                        s.e(t);
                      } finally {
                        s.f();
                      }
                    }
                    return this;
                  },
                },
                {
                  key: "off",
                  value: function (t, e) {
                    if (!this._callbacks || 0 === arguments.length)
                      return (this._callbacks = {}), this;
                    var i = this._callbacks[t];
                    if (!i) return this;
                    if (1 === arguments.length)
                      return delete this._callbacks[t], this;
                    for (var r = 0; r < i.length; r++) {
                      var n = i[r];
                      if (n === e) {
                        i.splice(r, 1);
                        break;
                      }
                    }
                    return this;
                  },
                },
              ]),
              t
            );
          })(),
          g = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && n(t, e);
            })(i, t);
            var e = o(i);
            function i(t, r) {
              var n, o, l;
              if (
                (u(this, i),
                ((n = e.call(this)).element = t),
                (n.version = i.version),
                (n.defaultOptions.previewTemplate =
                  n.defaultOptions.previewTemplate.replace(/\n*/g, "")),
                (n.clickableElements = []),
                (n.listeners = []),
                (n.files = []),
                "string" == typeof n.element &&
                  (n.element = document.querySelector(n.element)),
                !n.element || null == n.element.nodeType)
              )
                throw new Error("Invalid dropzone element.");
              if (n.element.dropzone)
                throw new Error("Dropzone already attached.");
              i.instances.push(a(n)), (n.element.dropzone = a(n));
              var h = null != (l = i.optionsForElement(n.element)) ? l : {};
              if (
                ((n.options = i.extend(
                  {},
                  n.defaultOptions,
                  h,
                  null != r ? r : {}
                )),
                n.options.forceFallback || !i.isBrowserSupported())
              )
                return s(n, n.options.fallback.call(a(n)));
              if (
                (null == n.options.url &&
                  (n.options.url = n.element.getAttribute("action")),
                !n.options.url)
              )
                throw new Error("No URL provided.");
              if (n.options.acceptedFiles && n.options.acceptedMimeTypes)
                throw new Error(
                  "You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."
                );
              if (n.options.uploadMultiple && n.options.chunking)
                throw new Error(
                  "You cannot set both: uploadMultiple and chunking."
                );
              return (
                n.options.acceptedMimeTypes &&
                  ((n.options.acceptedFiles = n.options.acceptedMimeTypes),
                  delete n.options.acceptedMimeTypes),
                null != n.options.renameFilename &&
                  (n.options.renameFile = function (t) {
                    return n.options.renameFilename.call(a(n), t.name, t);
                  }),
                "string" == typeof n.options.method &&
                  (n.options.method = n.options.method.toUpperCase()),
                (o = n.getExistingFallback()) &&
                  o.parentNode &&
                  o.parentNode.removeChild(o),
                !1 !== n.options.previewsContainer &&
                  (n.options.previewsContainer
                    ? (n.previewsContainer = i.getElement(
                        n.options.previewsContainer,
                        "previewsContainer"
                      ))
                    : (n.previewsContainer = n.element)),
                n.options.clickable &&
                  (!0 === n.options.clickable
                    ? (n.clickableElements = [n.element])
                    : (n.clickableElements = i.getElements(
                        n.options.clickable,
                        "clickable"
                      ))),
                n.init(),
                n
              );
            }
            return (
              d(i, null, [
                {
                  key: "initClass",
                  value: function () {
                    (this.prototype.Emitter = p),
                      (this.prototype.events = [
                        "drop",
                        "dragstart",
                        "dragend",
                        "dragenter",
                        "dragover",
                        "dragleave",
                        "addedfile",
                        "addedfiles",
                        "removedfile",
                        "thumbnail",
                        "error",
                        "errormultiple",
                        "processing",
                        "processingmultiple",
                        "uploadprogress",
                        "totaluploadprogress",
                        "sending",
                        "sendingmultiple",
                        "success",
                        "successmultiple",
                        "canceled",
                        "canceledmultiple",
                        "complete",
                        "completemultiple",
                        "reset",
                        "maxfilesexceeded",
                        "maxfilesreached",
                        "queuecomplete",
                      ]),
                      (this.prototype.defaultOptions = {
                        url: null,
                        method: "post",
                        withCredentials: !1,
                        timeout: 3e4,
                        parallelUploads: 2,
                        uploadMultiple: !1,
                        chunking: !1,
                        forceChunking: !1,
                        chunkSize: 2e6,
                        parallelChunkUploads: !1,
                        retryChunks: !1,
                        retryChunksLimit: 3,
                        maxFilesize: 256,
                        paramName: "file",
                        createImageThumbnails: !0,
                        maxThumbnailFilesize: 10,
                        thumbnailWidth: 120,
                        thumbnailHeight: 120,
                        thumbnailMethod: "crop",
                        resizeWidth: null,
                        resizeHeight: null,
                        resizeMimeType: null,
                        resizeQuality: 0.8,
                        resizeMethod: "contain",
                        filesizeBase: 1e3,
                        maxFiles: null,
                        headers: null,
                        clickable: !0,
                        ignoreHiddenFiles: !0,
                        acceptedFiles: null,
                        acceptedMimeTypes: null,
                        autoProcessQueue: !0,
                        autoQueue: !0,
                        addRemoveLinks: !1,
                        previewsContainer: null,
                        hiddenInputContainer: "body",
                        capture: null,
                        renameFilename: null,
                        renameFile: null,
                        forceFallback: !1,
                        dictDefaultMessage: "Drop files here to upload",
                        dictFallbackMessage:
                          "Your browser does not support drag'n'drop file uploads.",
                        dictFallbackText:
                          "Please use the fallback form below to upload your files like in the olden days.",
                        dictFileTooBig:
                          "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                        dictInvalidFileType:
                          "You can't upload files of this type.",
                        dictResponseError:
                          "Server responded with {{statusCode}} code.",
                        dictCancelUpload: "Cancel upload",
                        dictUploadCanceled: "Upload canceled.",
                        dictCancelUploadConfirmation:
                          "Are you sure you want to cancel this upload?",
                        dictRemoveFile: "Remove file",
                        dictRemoveFileConfirmation: null,
                        dictMaxFilesExceeded:
                          "You can not upload any more files.",
                        dictFileSizeUnits: {
                          tb: "TB",
                          gb: "GB",
                          mb: "MB",
                          kb: "KB",
                          b: "b",
                        },
                        init: function () {},
                        params: function (t, e, i) {
                          if (i)
                            return {
                              dzuuid: i.file.upload.uuid,
                              dzchunkindex: i.index,
                              dztotalfilesize: i.file.size,
                              dzchunksize: this.options.chunkSize,
                              dztotalchunkcount: i.file.upload.totalChunkCount,
                              dzchunkbyteoffset:
                                i.index * this.options.chunkSize,
                            };
                        },
                        accept: function (t, e) {
                          return e();
                        },
                        chunksUploaded: function (t, e) {
                          e();
                        },
                        fallback: function () {
                          var t;
                          this.element.className = "".concat(
                            this.element.className,
                            " dz-browser-not-supported"
                          );
                          var e,
                            r = h(this.element.getElementsByTagName("div"));
                          try {
                            for (r.s(); !(e = r.n()).done; ) {
                              var n = e.value;
                              if (/(^| )dz-message($| )/.test(n.className)) {
                                (t = n), (n.className = "dz-message");
                                break;
                              }
                            }
                          } catch (t) {
                            r.e(t);
                          } finally {
                            r.f();
                          }
                          t ||
                            ((t = i.createElement(
                              '<div class="dz-message"><span></span></div>'
                            )),
                            this.element.appendChild(t));
                          var o = t.getElementsByTagName("span")[0];
                          return (
                            o &&
                              (null != o.textContent
                                ? (o.textContent =
                                    this.options.dictFallbackMessage)
                                : null != o.innerText &&
                                  (o.innerText =
                                    this.options.dictFallbackMessage)),
                            this.element.appendChild(this.getFallbackForm())
                          );
                        },
                        resize: function (t, e, i, r) {
                          var n = {
                              srcX: 0,
                              srcY: 0,
                              srcWidth: t.width,
                              srcHeight: t.height,
                            },
                            o = t.width / t.height;
                          null == e && null == i
                            ? ((e = n.srcWidth), (i = n.srcHeight))
                            : null == e
                            ? (e = i * o)
                            : null == i && (i = e / o);
                          var s =
                            (e = Math.min(e, n.srcWidth)) /
                            (i = Math.min(i, n.srcHeight));
                          if (n.srcWidth > e || n.srcHeight > i)
                            if ("crop" === r)
                              o > s
                                ? ((n.srcHeight = t.height),
                                  (n.srcWidth = n.srcHeight * s))
                                : ((n.srcWidth = t.width),
                                  (n.srcHeight = n.srcWidth / s));
                            else {
                              if ("contain" !== r)
                                throw new Error(
                                  "Unknown resizeMethod '".concat(r, "'")
                                );
                              o > s ? (i = e / o) : (e = i * o);
                            }
                          return (
                            (n.srcX = (t.width - n.srcWidth) / 2),
                            (n.srcY = (t.height - n.srcHeight) / 2),
                            (n.trgWidth = e),
                            (n.trgHeight = i),
                            n
                          );
                        },
                        transformFile: function (t, e) {
                          return (this.options.resizeWidth ||
                            this.options.resizeHeight) &&
                            t.type.match(/image.*/)
                            ? this.resizeImage(
                                t,
                                this.options.resizeWidth,
                                this.options.resizeHeight,
                                this.options.resizeMethod,
                                e
                              )
                            : e(t);
                        },
                        previewTemplate:
                          '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Check</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Error</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                        drop: function (t) {
                          return this.element.classList.remove("dz-drag-hover");
                        },
                        dragstart: function (t) {},
                        dragend: function (t) {
                          return this.element.classList.remove("dz-drag-hover");
                        },
                        dragenter: function (t) {
                          return this.element.classList.add("dz-drag-hover");
                        },
                        dragover: function (t) {
                          return this.element.classList.add("dz-drag-hover");
                        },
                        dragleave: function (t) {
                          return this.element.classList.remove("dz-drag-hover");
                        },
                        paste: function (t) {},
                        reset: function () {
                          return this.element.classList.remove("dz-started");
                        },
                        addedfile: function (t) {
                          var e = this;
                          if (
                            (this.element === this.previewsContainer &&
                              this.element.classList.add("dz-started"),
                            this.previewsContainer)
                          ) {
                            (t.previewElement = i.createElement(
                              this.options.previewTemplate.trim()
                            )),
                              (t.previewTemplate = t.previewElement),
                              this.previewsContainer.appendChild(
                                t.previewElement
                              );
                            var r,
                              n = h(
                                t.previewElement.querySelectorAll(
                                  "[data-dz-name]"
                                )
                              );
                            try {
                              for (n.s(); !(r = n.n()).done; ) {
                                var o = r.value;
                                o.textContent = t.name;
                              }
                            } catch (t) {
                              n.e(t);
                            } finally {
                              n.f();
                            }
                            var s,
                              a = h(
                                t.previewElement.querySelectorAll(
                                  "[data-dz-size]"
                                )
                              );
                            try {
                              for (a.s(); !(s = a.n()).done; )
                                (o = s.value).innerHTML = this.filesize(t.size);
                            } catch (t) {
                              a.e(t);
                            } finally {
                              a.f();
                            }
                            this.options.addRemoveLinks &&
                              ((t._removeLink = i.createElement(
                                '<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(
                                  this.options.dictRemoveFile,
                                  "</a>"
                                )
                              )),
                              t.previewElement.appendChild(t._removeLink));
                            var l,
                              c = function (r) {
                                return (
                                  r.preventDefault(),
                                  r.stopPropagation(),
                                  t.status === i.UPLOADING
                                    ? i.confirm(
                                        e.options.dictCancelUploadConfirmation,
                                        function () {
                                          return e.removeFile(t);
                                        }
                                      )
                                    : e.options.dictRemoveFileConfirmation
                                    ? i.confirm(
                                        e.options.dictRemoveFileConfirmation,
                                        function () {
                                          return e.removeFile(t);
                                        }
                                      )
                                    : e.removeFile(t)
                                );
                              },
                              u = h(
                                t.previewElement.querySelectorAll(
                                  "[data-dz-remove]"
                                )
                              );
                            try {
                              for (u.s(); !(l = u.n()).done; ) {
                                l.value.addEventListener("click", c);
                              }
                            } catch (t) {
                              u.e(t);
                            } finally {
                              u.f();
                            }
                          }
                        },
                        removedfile: function (t) {
                          return (
                            null != t.previewElement &&
                              null != t.previewElement.parentNode &&
                              t.previewElement.parentNode.removeChild(
                                t.previewElement
                              ),
                            this._updateMaxFilesReachedClass()
                          );
                        },
                        thumbnail: function (t, e) {
                          if (t.previewElement) {
                            t.previewElement.classList.remove(
                              "dz-file-preview"
                            );
                            var i,
                              r = h(
                                t.previewElement.querySelectorAll(
                                  "[data-dz-thumbnail]"
                                )
                              );
                            try {
                              for (r.s(); !(i = r.n()).done; ) {
                                var n = i.value;
                                (n.alt = t.name), (n.src = e);
                              }
                            } catch (t) {
                              r.e(t);
                            } finally {
                              r.f();
                            }
                            return setTimeout(function () {
                              return t.previewElement.classList.add(
                                "dz-image-preview"
                              );
                            }, 1);
                          }
                        },
                        error: function (t, e) {
                          if (t.previewElement) {
                            t.previewElement.classList.add("dz-error"),
                              "string" != typeof e && e.error && (e = e.error);
                            var i,
                              r = h(
                                t.previewElement.querySelectorAll(
                                  "[data-dz-errormessage]"
                                )
                              );
                            try {
                              for (r.s(); !(i = r.n()).done; ) {
                                i.value.textContent = e;
                              }
                            } catch (t) {
                              r.e(t);
                            } finally {
                              r.f();
                            }
                          }
                        },
                        errormultiple: function () {},
                        processing: function (t) {
                          if (
                            t.previewElement &&
                            (t.previewElement.classList.add("dz-processing"),
                            t._removeLink)
                          )
                            return (t._removeLink.innerHTML =
                              this.options.dictCancelUpload);
                        },
                        processingmultiple: function () {},
                        uploadprogress: function (t, e, i) {
                          if (t.previewElement) {
                            var r,
                              n = h(
                                t.previewElement.querySelectorAll(
                                  "[data-dz-uploadprogress]"
                                )
                              );
                            try {
                              for (n.s(); !(r = n.n()).done; ) {
                                var o = r.value;
                                "PROGRESS" === o.nodeName
                                  ? (o.value = e)
                                  : (o.style.width = "".concat(e, "%"));
                              }
                            } catch (t) {
                              n.e(t);
                            } finally {
                              n.f();
                            }
                          }
                        },
                        totaluploadprogress: function () {},
                        sending: function () {},
                        sendingmultiple: function () {},
                        success: function (t) {
                          if (t.previewElement)
                            return t.previewElement.classList.add("dz-success");
                        },
                        successmultiple: function () {},
                        canceled: function (t) {
                          return this.emit(
                            "error",
                            t,
                            this.options.dictUploadCanceled
                          );
                        },
                        canceledmultiple: function () {},
                        complete: function (t) {
                          if (
                            (t._removeLink &&
                              (t._removeLink.innerHTML =
                                this.options.dictRemoveFile),
                            t.previewElement)
                          )
                            return t.previewElement.classList.add(
                              "dz-complete"
                            );
                        },
                        completemultiple: function () {},
                        maxfilesexceeded: function () {},
                        maxfilesreached: function () {},
                        queuecomplete: function () {},
                        addedfiles: function () {},
                      }),
                      (this.prototype._thumbnailQueue = []),
                      (this.prototype._processingThumbnail = !1);
                  },
                },
                {
                  key: "extend",
                  value: function (t) {
                    for (
                      var e = arguments.length,
                        i = new Array(e > 1 ? e - 1 : 0),
                        r = 1;
                      r < e;
                      r++
                    )
                      i[r - 1] = arguments[r];
                    for (var n = 0, o = i; n < o.length; n++) {
                      var s = o[n];
                      for (var a in s) {
                        var l = s[a];
                        t[a] = l;
                      }
                    }
                    return t;
                  },
                },
              ]),
              d(
                i,
                [
                  {
                    key: "getAcceptedFiles",
                    value: function () {
                      return this.files
                        .filter(function (t) {
                          return t.accepted;
                        })
                        .map(function (t) {
                          return t;
                        });
                    },
                  },
                  {
                    key: "getRejectedFiles",
                    value: function () {
                      return this.files
                        .filter(function (t) {
                          return !t.accepted;
                        })
                        .map(function (t) {
                          return t;
                        });
                    },
                  },
                  {
                    key: "getFilesWithStatus",
                    value: function (t) {
                      return this.files
                        .filter(function (e) {
                          return e.status === t;
                        })
                        .map(function (t) {
                          return t;
                        });
                    },
                  },
                  {
                    key: "getQueuedFiles",
                    value: function () {
                      return this.getFilesWithStatus(i.QUEUED);
                    },
                  },
                  {
                    key: "getUploadingFiles",
                    value: function () {
                      return this.getFilesWithStatus(i.UPLOADING);
                    },
                  },
                  {
                    key: "getAddedFiles",
                    value: function () {
                      return this.getFilesWithStatus(i.ADDED);
                    },
                  },
                  {
                    key: "getActiveFiles",
                    value: function () {
                      return this.files
                        .filter(function (t) {
                          return (
                            t.status === i.UPLOADING || t.status === i.QUEUED
                          );
                        })
                        .map(function (t) {
                          return t;
                        });
                    },
                  },
                  {
                    key: "init",
                    value: function () {
                      var t = this;
                      if (
                        ("form" === this.element.tagName &&
                          this.element.setAttribute(
                            "enctype",
                            "multipart/form-data"
                          ),
                        this.element.classList.contains("dropzone") &&
                          !this.element.querySelector(".dz-message") &&
                          this.element.appendChild(
                            i.createElement(
                              '<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(
                                this.options.dictDefaultMessage,
                                "</button></div>"
                              )
                            )
                          ),
                        this.clickableElements.length)
                      ) {
                        !(function e() {
                          return (
                            t.hiddenFileInput &&
                              t.hiddenFileInput.parentNode.removeChild(
                                t.hiddenFileInput
                              ),
                            (t.hiddenFileInput =
                              document.createElement("input")),
                            t.hiddenFileInput.setAttribute("type", "file"),
                            (null === t.options.maxFiles ||
                              t.options.maxFiles > 1) &&
                              t.hiddenFileInput.setAttribute(
                                "multiple",
                                "multiple"
                              ),
                            (t.hiddenFileInput.className = "dz-hidden-input"),
                            null !== t.options.acceptedFiles &&
                              t.hiddenFileInput.setAttribute(
                                "accept",
                                t.options.acceptedFiles
                              ),
                            null !== t.options.capture &&
                              t.hiddenFileInput.setAttribute(
                                "capture",
                                t.options.capture
                              ),
                            (t.hiddenFileInput.style.visibility = "hidden"),
                            (t.hiddenFileInput.style.position = "absolute"),
                            (t.hiddenFileInput.style.top = "0"),
                            (t.hiddenFileInput.style.left = "0"),
                            (t.hiddenFileInput.style.height = "0"),
                            (t.hiddenFileInput.style.width = "0"),
                            i
                              .getElement(
                                t.options.hiddenInputContainer,
                                "hiddenInputContainer"
                              )
                              .appendChild(t.hiddenFileInput),
                            t.hiddenFileInput.addEventListener(
                              "change",
                              function () {
                                var i = t.hiddenFileInput.files;
                                if (i.length) {
                                  var r,
                                    n = h(i);
                                  try {
                                    for (n.s(); !(r = n.n()).done; ) {
                                      var o = r.value;
                                      t.addFile(o);
                                    }
                                  } catch (t) {
                                    n.e(t);
                                  } finally {
                                    n.f();
                                  }
                                }
                                return t.emit("addedfiles", i), e();
                              }
                            )
                          );
                        })();
                      }
                      this.URL =
                        null !== window.URL ? window.URL : window.webkitURL;
                      var e,
                        r = h(this.events);
                      try {
                        for (r.s(); !(e = r.n()).done; ) {
                          var n = e.value;
                          this.on(n, this.options[n]);
                        }
                      } catch (t) {
                        r.e(t);
                      } finally {
                        r.f();
                      }
                      this.on("uploadprogress", function () {
                        return t.updateTotalUploadProgress();
                      }),
                        this.on("removedfile", function () {
                          return t.updateTotalUploadProgress();
                        }),
                        this.on("canceled", function (e) {
                          return t.emit("complete", e);
                        }),
                        this.on("complete", function (e) {
                          if (
                            0 === t.getAddedFiles().length &&
                            0 === t.getUploadingFiles().length &&
                            0 === t.getQueuedFiles().length
                          )
                            return setTimeout(function () {
                              return t.emit("queuecomplete");
                            }, 0);
                        });
                      var o = function (t) {
                        if (
                          (function (t) {
                            if (t.dataTransfer.types)
                              for (
                                var e = 0;
                                e < t.dataTransfer.types.length;
                                e++
                              )
                                if ("Files" === t.dataTransfer.types[e])
                                  return !0;
                            return !1;
                          })(t)
                        )
                          return (
                            t.stopPropagation(),
                            t.preventDefault
                              ? t.preventDefault()
                              : (t.returnValue = !1)
                          );
                      };
                      return (
                        (this.listeners = [
                          {
                            element: this.element,
                            events: {
                              dragstart: function (e) {
                                return t.emit("dragstart", e);
                              },
                              dragenter: function (e) {
                                return o(e), t.emit("dragenter", e);
                              },
                              dragover: function (e) {
                                var i;
                                try {
                                  i = e.dataTransfer.effectAllowed;
                                } catch (t) {}
                                return (
                                  (e.dataTransfer.dropEffect =
                                    "move" === i || "linkMove" === i
                                      ? "move"
                                      : "copy"),
                                  o(e),
                                  t.emit("dragover", e)
                                );
                              },
                              dragleave: function (e) {
                                return t.emit("dragleave", e);
                              },
                              drop: function (e) {
                                return o(e), t.drop(e);
                              },
                              dragend: function (e) {
                                return t.emit("dragend", e);
                              },
                            },
                          },
                        ]),
                        this.clickableElements.forEach(function (e) {
                          return t.listeners.push({
                            element: e,
                            events: {
                              click: function (r) {
                                return (
                                  (e !== t.element ||
                                    r.target === t.element ||
                                    i.elementInside(
                                      r.target,
                                      t.element.querySelector(".dz-message")
                                    )) &&
                                    t.hiddenFileInput.click(),
                                  !0
                                );
                              },
                            },
                          });
                        }),
                        this.enable(),
                        this.options.init.call(this)
                      );
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      return (
                        this.disable(),
                        this.removeAllFiles(!0),
                        (null != this.hiddenFileInput
                          ? this.hiddenFileInput.parentNode
                          : void 0) &&
                          (this.hiddenFileInput.parentNode.removeChild(
                            this.hiddenFileInput
                          ),
                          (this.hiddenFileInput = null)),
                        delete this.element.dropzone,
                        i.instances.splice(i.instances.indexOf(this), 1)
                      );
                    },
                  },
                  {
                    key: "updateTotalUploadProgress",
                    value: function () {
                      var t,
                        e = 0,
                        i = 0;
                      if (this.getActiveFiles().length) {
                        var r,
                          n = h(this.getActiveFiles());
                        try {
                          for (n.s(); !(r = n.n()).done; ) {
                            var o = r.value;
                            (e += o.upload.bytesSent), (i += o.upload.total);
                          }
                        } catch (t) {
                          n.e(t);
                        } finally {
                          n.f();
                        }
                        t = (100 * e) / i;
                      } else t = 100;
                      return this.emit("totaluploadprogress", t, i, e);
                    },
                  },
                  {
                    key: "_getParamName",
                    value: function (t) {
                      return "function" == typeof this.options.paramName
                        ? this.options.paramName(t)
                        : ""
                            .concat(this.options.paramName)
                            .concat(
                              this.options.uploadMultiple
                                ? "[".concat(t, "]")
                                : ""
                            );
                    },
                  },
                  {
                    key: "_renameFile",
                    value: function (t) {
                      return "function" != typeof this.options.renameFile
                        ? t.name
                        : this.options.renameFile(t);
                    },
                  },
                  {
                    key: "getFallbackForm",
                    value: function () {
                      var t, e;
                      if ((t = this.getExistingFallback())) return t;
                      var r = '<div class="dz-fallback">';
                      this.options.dictFallbackText &&
                        (r += "<p>".concat(
                          this.options.dictFallbackText,
                          "</p>"
                        )),
                        (r += '<input type="file" name="'
                          .concat(this._getParamName(0), '" ')
                          .concat(
                            this.options.uploadMultiple
                              ? 'multiple="multiple"'
                              : void 0,
                            ' /><input type="submit" value="Upload!"></div>'
                          ));
                      var n = i.createElement(r);
                      return (
                        "FORM" !== this.element.tagName
                          ? (e = i.createElement(
                              '<form action="'
                                .concat(
                                  this.options.url,
                                  '" enctype="multipart/form-data" method="'
                                )
                                .concat(this.options.method, '"></form>')
                            )).appendChild(n)
                          : (this.element.setAttribute(
                              "enctype",
                              "multipart/form-data"
                            ),
                            this.element.setAttribute(
                              "method",
                              this.options.method
                            )),
                        null != e ? e : n
                      );
                    },
                  },
                  {
                    key: "getExistingFallback",
                    value: function () {
                      for (
                        var t = function (t) {
                            var e,
                              i = h(t);
                            try {
                              for (i.s(); !(e = i.n()).done; ) {
                                var r = e.value;
                                if (/(^| )fallback($| )/.test(r.className))
                                  return r;
                              }
                            } catch (t) {
                              i.e(t);
                            } finally {
                              i.f();
                            }
                          },
                          e = 0,
                          i = ["div", "form"];
                        e < i.length;
                        e++
                      ) {
                        var r,
                          n = i[e];
                        if ((r = t(this.element.getElementsByTagName(n))))
                          return r;
                      }
                    },
                  },
                  {
                    key: "setupEventListeners",
                    value: function () {
                      return this.listeners.map(function (t) {
                        return (function () {
                          var e = [];
                          for (var i in t.events) {
                            var r = t.events[i];
                            e.push(t.element.addEventListener(i, r, !1));
                          }
                          return e;
                        })();
                      });
                    },
                  },
                  {
                    key: "removeEventListeners",
                    value: function () {
                      return this.listeners.map(function (t) {
                        return (function () {
                          var e = [];
                          for (var i in t.events) {
                            var r = t.events[i];
                            e.push(t.element.removeEventListener(i, r, !1));
                          }
                          return e;
                        })();
                      });
                    },
                  },
                  {
                    key: "disable",
                    value: function () {
                      var t = this;
                      return (
                        this.clickableElements.forEach(function (t) {
                          return t.classList.remove("dz-clickable");
                        }),
                        this.removeEventListeners(),
                        (this.disabled = !0),
                        this.files.map(function (e) {
                          return t.cancelUpload(e);
                        })
                      );
                    },
                  },
                  {
                    key: "enable",
                    value: function () {
                      return (
                        delete this.disabled,
                        this.clickableElements.forEach(function (t) {
                          return t.classList.add("dz-clickable");
                        }),
                        this.setupEventListeners()
                      );
                    },
                  },
                  {
                    key: "filesize",
                    value: function (t) {
                      var e = 0,
                        i = "b";
                      if (t > 0) {
                        for (
                          var r = ["tb", "gb", "mb", "kb", "b"], n = 0;
                          n < r.length;
                          n++
                        ) {
                          var o = r[n];
                          if (
                            t >=
                            Math.pow(this.options.filesizeBase, 4 - n) / 10
                          ) {
                            (e =
                              t / Math.pow(this.options.filesizeBase, 4 - n)),
                              (i = o);
                            break;
                          }
                        }
                        e = Math.round(10 * e) / 10;
                      }
                      return "<strong>"
                        .concat(e, "</strong> ")
                        .concat(this.options.dictFileSizeUnits[i]);
                    },
                  },
                  {
                    key: "_updateMaxFilesReachedClass",
                    value: function () {
                      return null != this.options.maxFiles &&
                        this.getAcceptedFiles().length >= this.options.maxFiles
                        ? (this.getAcceptedFiles().length ===
                            this.options.maxFiles &&
                            this.emit("maxfilesreached", this.files),
                          this.element.classList.add("dz-max-files-reached"))
                        : this.element.classList.remove("dz-max-files-reached");
                    },
                  },
                  {
                    key: "drop",
                    value: function (t) {
                      if (t.dataTransfer) {
                        this.emit("drop", t);
                        for (
                          var e = [], i = 0;
                          i < t.dataTransfer.files.length;
                          i++
                        )
                          e[i] = t.dataTransfer.files[i];
                        if (e.length) {
                          var r = t.dataTransfer.items;
                          r && r.length && null != r[0].webkitGetAsEntry
                            ? this._addFilesFromItems(r)
                            : this.handleFiles(e);
                        }
                        this.emit("addedfiles", e);
                      }
                    },
                  },
                  {
                    key: "paste",
                    value: function (t) {
                      if (
                        null !=
                        ((e = null != t ? t.clipboardData : void 0),
                        (i = function (t) {
                          return t.items;
                        }),
                        null != e ? i(e) : void 0)
                      ) {
                        var e, i;
                        this.emit("paste", t);
                        var r = t.clipboardData.items;
                        return r.length ? this._addFilesFromItems(r) : void 0;
                      }
                    },
                  },
                  {
                    key: "handleFiles",
                    value: function (t) {
                      var e,
                        i = h(t);
                      try {
                        for (i.s(); !(e = i.n()).done; ) {
                          var r = e.value;
                          this.addFile(r);
                        }
                      } catch (t) {
                        i.e(t);
                      } finally {
                        i.f();
                      }
                    },
                  },
                  {
                    key: "_addFilesFromItems",
                    value: function (t) {
                      var e = this;
                      return (function () {
                        var i,
                          r = [],
                          n = h(t);
                        try {
                          for (n.s(); !(i = n.n()).done; ) {
                            var o,
                              s = i.value;
                            null != s.webkitGetAsEntry &&
                            (o = s.webkitGetAsEntry())
                              ? o.isFile
                                ? r.push(e.addFile(s.getAsFile()))
                                : o.isDirectory
                                ? r.push(e._addFilesFromDirectory(o, o.name))
                                : r.push(void 0)
                              : null != s.getAsFile &&
                                (null == s.kind || "file" === s.kind)
                              ? r.push(e.addFile(s.getAsFile()))
                              : r.push(void 0);
                          }
                        } catch (t) {
                          n.e(t);
                        } finally {
                          n.f();
                        }
                        return r;
                      })();
                    },
                  },
                  {
                    key: "_addFilesFromDirectory",
                    value: function (t, e) {
                      var i = this,
                        r = t.createReader(),
                        n = function (t) {
                          return (
                            (e = console),
                            (i = "log"),
                            (r = function (e) {
                              return e.log(t);
                            }),
                            null != e && "function" == typeof e[i]
                              ? r(e, i)
                              : void 0
                          );
                          var e, i, r;
                        };
                      return (function t() {
                        return r.readEntries(function (r) {
                          if (r.length > 0) {
                            var n,
                              o = h(r);
                            try {
                              for (o.s(); !(n = o.n()).done; ) {
                                var s = n.value;
                                s.isFile
                                  ? s.file(function (t) {
                                      if (
                                        !i.options.ignoreHiddenFiles ||
                                        "." !== t.name.substring(0, 1)
                                      )
                                        return (
                                          (t.fullPath = ""
                                            .concat(e, "/")
                                            .concat(t.name)),
                                          i.addFile(t)
                                        );
                                    })
                                  : s.isDirectory &&
                                    i._addFilesFromDirectory(
                                      s,
                                      "".concat(e, "/").concat(s.name)
                                    );
                              }
                            } catch (t) {
                              o.e(t);
                            } finally {
                              o.f();
                            }
                            t();
                          }
                          return null;
                        }, n);
                      })();
                    },
                  },
                  {
                    key: "accept",
                    value: function (t, e) {
                      this.options.maxFilesize &&
                      t.size > 1024 * this.options.maxFilesize * 1024
                        ? e(
                            this.options.dictFileTooBig
                              .replace(
                                "{{filesize}}",
                                Math.round(t.size / 1024 / 10.24) / 100
                              )
                              .replace(
                                "{{maxFilesize}}",
                                this.options.maxFilesize
                              )
                          )
                        : i.isValidFile(t, this.options.acceptedFiles)
                        ? null != this.options.maxFiles &&
                          this.getAcceptedFiles().length >=
                            this.options.maxFiles
                          ? (e(
                              this.options.dictMaxFilesExceeded.replace(
                                "{{maxFiles}}",
                                this.options.maxFiles
                              )
                            ),
                            this.emit("maxfilesexceeded", t))
                          : this.options.accept.call(this, t, e)
                        : e(this.options.dictInvalidFileType);
                    },
                  },
                  {
                    key: "addFile",
                    value: function (t) {
                      var e = this;
                      (t.upload = {
                        uuid: i.uuidv4(),
                        progress: 0,
                        total: t.size,
                        bytesSent: 0,
                        filename: this._renameFile(t),
                      }),
                        this.files.push(t),
                        (t.status = i.ADDED),
                        this.emit("addedfile", t),
                        this._enqueueThumbnail(t),
                        this.accept(t, function (i) {
                          i
                            ? ((t.accepted = !1), e._errorProcessing([t], i))
                            : ((t.accepted = !0),
                              e.options.autoQueue && e.enqueueFile(t)),
                            e._updateMaxFilesReachedClass();
                        });
                    },
                  },
                  {
                    key: "enqueueFiles",
                    value: function (t) {
                      var e,
                        i = h(t);
                      try {
                        for (i.s(); !(e = i.n()).done; ) {
                          var r = e.value;
                          this.enqueueFile(r);
                        }
                      } catch (t) {
                        i.e(t);
                      } finally {
                        i.f();
                      }
                      return null;
                    },
                  },
                  {
                    key: "enqueueFile",
                    value: function (t) {
                      var e = this;
                      if (t.status !== i.ADDED || !0 !== t.accepted)
                        throw new Error(
                          "This file can't be queued because it has already been processed or was rejected."
                        );
                      if (
                        ((t.status = i.QUEUED), this.options.autoProcessQueue)
                      )
                        return setTimeout(function () {
                          return e.processQueue();
                        }, 0);
                    },
                  },
                  {
                    key: "_enqueueThumbnail",
                    value: function (t) {
                      var e = this;
                      if (
                        this.options.createImageThumbnails &&
                        t.type.match(/image.*/) &&
                        t.size <=
                          1024 * this.options.maxThumbnailFilesize * 1024
                      )
                        return (
                          this._thumbnailQueue.push(t),
                          setTimeout(function () {
                            return e._processThumbnailQueue();
                          }, 0)
                        );
                    },
                  },
                  {
                    key: "_processThumbnailQueue",
                    value: function () {
                      var t = this;
                      if (
                        !this._processingThumbnail &&
                        0 !== this._thumbnailQueue.length
                      ) {
                        this._processingThumbnail = !0;
                        var e = this._thumbnailQueue.shift();
                        return this.createThumbnail(
                          e,
                          this.options.thumbnailWidth,
                          this.options.thumbnailHeight,
                          this.options.thumbnailMethod,
                          !0,
                          function (i) {
                            return (
                              t.emit("thumbnail", e, i),
                              (t._processingThumbnail = !1),
                              t._processThumbnailQueue()
                            );
                          }
                        );
                      }
                    },
                  },
                  {
                    key: "removeFile",
                    value: function (t) {
                      if (
                        (t.status === i.UPLOADING && this.cancelUpload(t),
                        (this.files = v(this.files, t)),
                        this.emit("removedfile", t),
                        0 === this.files.length)
                      )
                        return this.emit("reset");
                    },
                  },
                  {
                    key: "removeAllFiles",
                    value: function (t) {
                      null == t && (t = !1);
                      var e,
                        r = h(this.files.slice());
                      try {
                        for (r.s(); !(e = r.n()).done; ) {
                          var n = e.value;
                          (n.status !== i.UPLOADING || t) && this.removeFile(n);
                        }
                      } catch (t) {
                        r.e(t);
                      } finally {
                        r.f();
                      }
                      return null;
                    },
                  },
                  {
                    key: "resizeImage",
                    value: function (t, e, r, n, o) {
                      var s = this;
                      return this.createThumbnail(
                        t,
                        e,
                        r,
                        n,
                        !0,
                        function (e, r) {
                          if (null == r) return o(t);
                          var n = s.options.resizeMimeType;
                          null == n && (n = t.type);
                          var a = r.toDataURL(n, s.options.resizeQuality);
                          return (
                            ("image/jpeg" !== n && "image/jpg" !== n) ||
                              (a = _.restore(t.dataURL, a)),
                            o(i.dataURItoBlob(a))
                          );
                        }
                      );
                    },
                  },
                  {
                    key: "createThumbnail",
                    value: function (t, e, i, r, n, o) {
                      var s = this,
                        a = new FileReader();
                      (a.onload = function () {
                        (t.dataURL = a.result),
                          "image/svg+xml" !== t.type
                            ? s.createThumbnailFromUrl(t, e, i, r, n, o)
                            : null != o && o(a.result);
                      }),
                        a.readAsDataURL(t);
                    },
                  },
                  {
                    key: "displayExistingFile",
                    value: function (t, e, i, r) {
                      var n = this,
                        o =
                          !(arguments.length > 4 && void 0 !== arguments[4]) ||
                          arguments[4];
                      if (
                        (this.emit("addedfile", t), this.emit("complete", t), o)
                      ) {
                        var s = function (e) {
                          n.emit("thumbnail", t, e), i && i();
                        };
                        (t.dataURL = e),
                          this.createThumbnailFromUrl(
                            t,
                            this.options.thumbnailWidth,
                            this.options.thumbnailHeight,
                            this.options.resizeMethod,
                            this.options.fixOrientation,
                            s,
                            r
                          );
                      } else this.emit("thumbnail", t, e), i && i();
                    },
                  },
                  {
                    key: "createThumbnailFromUrl",
                    value: function (t, e, i, r, n, o, s) {
                      var a = this,
                        l = document.createElement("img");
                      return (
                        s && (l.crossOrigin = s),
                        (n =
                          "from-image" !=
                            getComputedStyle(document.body).imageOrientation &&
                          n),
                        (l.onload = function () {
                          var s = function (t) {
                            return t(1);
                          };
                          return (
                            "undefined" != typeof EXIF &&
                              null !== EXIF &&
                              n &&
                              (s = function (t) {
                                return EXIF.getData(l, function () {
                                  return t(EXIF.getTag(this, "Orientation"));
                                });
                              }),
                            s(function (n) {
                              (t.width = l.width), (t.height = l.height);
                              var s = a.options.resize.call(a, t, e, i, r),
                                h = document.createElement("canvas"),
                                c = h.getContext("2d");
                              switch (
                                ((h.width = s.trgWidth),
                                (h.height = s.trgHeight),
                                n > 4 &&
                                  ((h.width = s.trgHeight),
                                  (h.height = s.trgWidth)),
                                n)
                              ) {
                                case 2:
                                  c.translate(h.width, 0), c.scale(-1, 1);
                                  break;
                                case 3:
                                  c.translate(h.width, h.height),
                                    c.rotate(Math.PI);
                                  break;
                                case 4:
                                  c.translate(0, h.height), c.scale(1, -1);
                                  break;
                                case 5:
                                  c.rotate(0.5 * Math.PI), c.scale(1, -1);
                                  break;
                                case 6:
                                  c.rotate(0.5 * Math.PI),
                                    c.translate(0, -h.width);
                                  break;
                                case 7:
                                  c.rotate(0.5 * Math.PI),
                                    c.translate(h.height, -h.width),
                                    c.scale(-1, 1);
                                  break;
                                case 8:
                                  c.rotate(-0.5 * Math.PI),
                                    c.translate(-h.height, 0);
                              }
                              y(
                                c,
                                l,
                                null != s.srcX ? s.srcX : 0,
                                null != s.srcY ? s.srcY : 0,
                                s.srcWidth,
                                s.srcHeight,
                                null != s.trgX ? s.trgX : 0,
                                null != s.trgY ? s.trgY : 0,
                                s.trgWidth,
                                s.trgHeight
                              );
                              var u = h.toDataURL("image/png");
                              if (null != o) return o(u, h);
                            })
                          );
                        }),
                        null != o && (l.onerror = o),
                        (l.src = t.dataURL)
                      );
                    },
                  },
                  {
                    key: "processQueue",
                    value: function () {
                      var t = this.options.parallelUploads,
                        e = this.getUploadingFiles().length,
                        i = e;
                      if (!(e >= t)) {
                        var r = this.getQueuedFiles();
                        if (r.length > 0) {
                          if (this.options.uploadMultiple)
                            return this.processFiles(r.slice(0, t - e));
                          for (; i < t; ) {
                            if (!r.length) return;
                            this.processFile(r.shift()), i++;
                          }
                        }
                      }
                    },
                  },
                  {
                    key: "processFile",
                    value: function (t) {
                      return this.processFiles([t]);
                    },
                  },
                  {
                    key: "processFiles",
                    value: function (t) {
                      var e,
                        r = h(t);
                      try {
                        for (r.s(); !(e = r.n()).done; ) {
                          var n = e.value;
                          (n.processing = !0),
                            (n.status = i.UPLOADING),
                            this.emit("processing", n);
                        }
                      } catch (t) {
                        r.e(t);
                      } finally {
                        r.f();
                      }
                      return (
                        this.options.uploadMultiple &&
                          this.emit("processingmultiple", t),
                        this.uploadFiles(t)
                      );
                    },
                  },
                  {
                    key: "_getFilesWithXhr",
                    value: function (t) {
                      return this.files
                        .filter(function (e) {
                          return e.xhr === t;
                        })
                        .map(function (t) {
                          return t;
                        });
                    },
                  },
                  {
                    key: "cancelUpload",
                    value: function (t) {
                      if (t.status === i.UPLOADING) {
                        var e,
                          r = this._getFilesWithXhr(t.xhr),
                          n = h(r);
                        try {
                          for (n.s(); !(e = n.n()).done; ) {
                            e.value.status = i.CANCELED;
                          }
                        } catch (t) {
                          n.e(t);
                        } finally {
                          n.f();
                        }
                        void 0 !== t.xhr && t.xhr.abort();
                        var o,
                          s = h(r);
                        try {
                          for (s.s(); !(o = s.n()).done; ) {
                            var a = o.value;
                            this.emit("canceled", a);
                          }
                        } catch (t) {
                          s.e(t);
                        } finally {
                          s.f();
                        }
                        this.options.uploadMultiple &&
                          this.emit("canceledmultiple", r);
                      } else
                        (t.status !== i.ADDED && t.status !== i.QUEUED) ||
                          ((t.status = i.CANCELED),
                          this.emit("canceled", t),
                          this.options.uploadMultiple &&
                            this.emit("canceledmultiple", [t]));
                      if (this.options.autoProcessQueue)
                        return this.processQueue();
                    },
                  },
                  {
                    key: "resolveOption",
                    value: function (t) {
                      if ("function" == typeof t) {
                        for (
                          var e = arguments.length,
                            i = new Array(e > 1 ? e - 1 : 0),
                            r = 1;
                          r < e;
                          r++
                        )
                          i[r - 1] = arguments[r];
                        return t.apply(this, i);
                      }
                      return t;
                    },
                  },
                  {
                    key: "uploadFile",
                    value: function (t) {
                      return this.uploadFiles([t]);
                    },
                  },
                  {
                    key: "uploadFiles",
                    value: function (t) {
                      var e = this;
                      this._transformFiles(t, function (r) {
                        if (e.options.chunking) {
                          var n = r[0];
                          (t[0].upload.chunked =
                            e.options.chunking &&
                            (e.options.forceChunking ||
                              n.size > e.options.chunkSize)),
                            (t[0].upload.totalChunkCount = Math.ceil(
                              n.size / e.options.chunkSize
                            ));
                        }
                        if (t[0].upload.chunked) {
                          var o = t[0],
                            s = r[0];
                          o.upload.chunks = [];
                          var a = function () {
                            for (var r = 0; void 0 !== o.upload.chunks[r]; )
                              r++;
                            if (!(r >= o.upload.totalChunkCount)) {
                              0;
                              var n = r * e.options.chunkSize,
                                a = Math.min(n + e.options.chunkSize, s.size),
                                l = {
                                  name: e._getParamName(0),
                                  data: s.webkitSlice
                                    ? s.webkitSlice(n, a)
                                    : s.slice(n, a),
                                  filename: o.upload.filename,
                                  chunkIndex: r,
                                };
                              (o.upload.chunks[r] = {
                                file: o,
                                index: r,
                                dataBlock: l,
                                status: i.UPLOADING,
                                progress: 0,
                                retries: 0,
                              }),
                                e._uploadData(t, [l]);
                            }
                          };
                          if (
                            ((o.upload.finishedChunkUpload = function (r) {
                              var n = !0;
                              (r.status = i.SUCCESS),
                                (r.dataBlock = null),
                                (r.xhr = null);
                              for (
                                var s = 0;
                                s < o.upload.totalChunkCount;
                                s++
                              ) {
                                if (void 0 === o.upload.chunks[s]) return a();
                                o.upload.chunks[s].status !== i.SUCCESS &&
                                  (n = !1);
                              }
                              n &&
                                e.options.chunksUploaded(o, function () {
                                  e._finished(t, "", null);
                                });
                            }),
                            e.options.parallelChunkUploads)
                          )
                            for (var l = 0; l < o.upload.totalChunkCount; l++)
                              a();
                          else a();
                        } else {
                          for (var h = [], c = 0; c < t.length; c++)
                            h[c] = {
                              name: e._getParamName(c),
                              data: r[c],
                              filename: t[c].upload.filename,
                            };
                          e._uploadData(t, h);
                        }
                      });
                    },
                  },
                  {
                    key: "_getChunk",
                    value: function (t, e) {
                      for (var i = 0; i < t.upload.totalChunkCount; i++)
                        if (
                          void 0 !== t.upload.chunks[i] &&
                          t.upload.chunks[i].xhr === e
                        )
                          return t.upload.chunks[i];
                    },
                  },
                  {
                    key: "_uploadData",
                    value: function (t, e) {
                      var r,
                        n = this,
                        o = new XMLHttpRequest(),
                        s = h(t);
                      try {
                        for (s.s(); !(r = s.n()).done; ) {
                          r.value.xhr = o;
                        }
                      } catch (t) {
                        s.e(t);
                      } finally {
                        s.f();
                      }
                      t[0].upload.chunked &&
                        (t[0].upload.chunks[e[0].chunkIndex].xhr = o);
                      var a = this.resolveOption(this.options.method, t),
                        l = this.resolveOption(this.options.url, t);
                      o.open(a, l, !0),
                        (o.timeout = this.resolveOption(
                          this.options.timeout,
                          t
                        )),
                        (o.withCredentials = !!this.options.withCredentials),
                        (o.onload = function (e) {
                          n._finishedUploading(t, o, e);
                        }),
                        (o.ontimeout = function () {
                          n._handleUploadError(
                            t,
                            o,
                            "Request timedout after ".concat(
                              n.options.timeout / 1e3,
                              " seconds"
                            )
                          );
                        }),
                        (o.onerror = function () {
                          n._handleUploadError(t, o);
                        }),
                        ((null != o.upload ? o.upload : o).onprogress =
                          function (e) {
                            return n._updateFilesUploadProgress(t, o, e);
                          });
                      var c = {
                        Accept: "application/json",
                        "Cache-Control": "no-cache",
                        "X-Requested-With": "XMLHttpRequest",
                      };
                      for (var u in (this.options.headers &&
                        i.extend(c, this.options.headers),
                      c)) {
                        var f = c[u];
                        f && o.setRequestHeader(u, f);
                      }
                      var d = new FormData();
                      if (this.options.params) {
                        var p = this.options.params;
                        for (var g in ("function" == typeof p &&
                          (p = p.call(
                            this,
                            t,
                            o,
                            t[0].upload.chunked ? this._getChunk(t[0], o) : null
                          )),
                        p)) {
                          var v = p[g];
                          if (Array.isArray(v))
                            for (var m = 0; m < v.length; m++)
                              d.append(g, v[m]);
                          else d.append(g, v);
                        }
                      }
                      var y,
                        _ = h(t);
                      try {
                        for (_.s(); !(y = _.n()).done; ) {
                          var b = y.value;
                          this.emit("sending", b, o, d);
                        }
                      } catch (t) {
                        _.e(t);
                      } finally {
                        _.f();
                      }
                      this.options.uploadMultiple &&
                        this.emit("sendingmultiple", t, o, d),
                        this._addFormElementData(d);
                      for (var x = 0; x < e.length; x++) {
                        var C = e[x];
                        d.append(C.name, C.data, C.filename);
                      }
                      this.submitRequest(o, d, t);
                    },
                  },
                  {
                    key: "_transformFiles",
                    value: function (t, e) {
                      for (
                        var i = this,
                          r = [],
                          n = 0,
                          o = function (o) {
                            i.options.transformFile.call(i, t[o], function (i) {
                              (r[o] = i), ++n === t.length && e(r);
                            });
                          },
                          s = 0;
                        s < t.length;
                        s++
                      )
                        o(s);
                    },
                  },
                  {
                    key: "_addFormElementData",
                    value: function (t) {
                      if ("FORM" === this.element.tagName) {
                        var e,
                          i = h(
                            this.element.querySelectorAll(
                              "input, textarea, select, button"
                            )
                          );
                        try {
                          for (i.s(); !(e = i.n()).done; ) {
                            var r = e.value,
                              n = r.getAttribute("name"),
                              o = r.getAttribute("type");
                            if ((o && (o = o.toLowerCase()), null != n))
                              if (
                                "SELECT" === r.tagName &&
                                r.hasAttribute("multiple")
                              ) {
                                var s,
                                  a = h(r.options);
                                try {
                                  for (a.s(); !(s = a.n()).done; ) {
                                    var l = s.value;
                                    l.selected && t.append(n, l.value);
                                  }
                                } catch (t) {
                                  a.e(t);
                                } finally {
                                  a.f();
                                }
                              } else
                                (!o ||
                                  ("checkbox" !== o && "radio" !== o) ||
                                  r.checked) &&
                                  t.append(n, r.value);
                          }
                        } catch (t) {
                          i.e(t);
                        } finally {
                          i.f();
                        }
                      }
                    },
                  },
                  {
                    key: "_updateFilesUploadProgress",
                    value: function (t, e, i) {
                      var r;
                      if (void 0 !== i) {
                        if (
                          ((r = (100 * i.loaded) / i.total),
                          t[0].upload.chunked)
                        ) {
                          var n = t[0],
                            o = this._getChunk(n, e);
                          (o.progress = r),
                            (o.total = i.total),
                            (o.bytesSent = i.loaded);
                          (n.upload.progress = 0),
                            (n.upload.total = 0),
                            (n.upload.bytesSent = 0);
                          for (var s = 0; s < n.upload.totalChunkCount; s++)
                            void 0 !== n.upload.chunks[s] &&
                              void 0 !== n.upload.chunks[s].progress &&
                              ((n.upload.progress +=
                                n.upload.chunks[s].progress),
                              (n.upload.total += n.upload.chunks[s].total),
                              (n.upload.bytesSent +=
                                n.upload.chunks[s].bytesSent));
                          n.upload.progress =
                            n.upload.progress / n.upload.totalChunkCount;
                        } else {
                          var a,
                            l = h(t);
                          try {
                            for (l.s(); !(a = l.n()).done; ) {
                              var c = a.value;
                              (c.upload.progress = r),
                                (c.upload.total = i.total),
                                (c.upload.bytesSent = i.loaded);
                            }
                          } catch (t) {
                            l.e(t);
                          } finally {
                            l.f();
                          }
                        }
                        var u,
                          f = h(t);
                        try {
                          for (f.s(); !(u = f.n()).done; ) {
                            var d = u.value;
                            this.emit(
                              "uploadprogress",
                              d,
                              d.upload.progress,
                              d.upload.bytesSent
                            );
                          }
                        } catch (t) {
                          f.e(t);
                        } finally {
                          f.f();
                        }
                      } else {
                        var p = !0;
                        r = 100;
                        var g,
                          v = h(t);
                        try {
                          for (v.s(); !(g = v.n()).done; ) {
                            var m = g.value;
                            (100 === m.upload.progress &&
                              m.upload.bytesSent === m.upload.total) ||
                              (p = !1),
                              (m.upload.progress = r),
                              (m.upload.bytesSent = m.upload.total);
                          }
                        } catch (t) {
                          v.e(t);
                        } finally {
                          v.f();
                        }
                        if (p) return;
                        var y,
                          _ = h(t);
                        try {
                          for (_.s(); !(y = _.n()).done; ) {
                            var b = y.value;
                            this.emit(
                              "uploadprogress",
                              b,
                              r,
                              b.upload.bytesSent
                            );
                          }
                        } catch (t) {
                          _.e(t);
                        } finally {
                          _.f();
                        }
                      }
                    },
                  },
                  {
                    key: "_finishedUploading",
                    value: function (t, e, r) {
                      var n;
                      if (t[0].status !== i.CANCELED && 4 === e.readyState) {
                        if (
                          "arraybuffer" !== e.responseType &&
                          "blob" !== e.responseType &&
                          ((n = e.responseText),
                          e.getResponseHeader("content-type") &&
                            ~e
                              .getResponseHeader("content-type")
                              .indexOf("application/json"))
                        )
                          try {
                            n = JSON.parse(n);
                          } catch (t) {
                            (r = t), (n = "Invalid JSON response from server.");
                          }
                        this._updateFilesUploadProgress(t),
                          200 <= e.status && e.status < 300
                            ? t[0].upload.chunked
                              ? t[0].upload.finishedChunkUpload(
                                  this._getChunk(t[0], e)
                                )
                              : this._finished(t, n, r)
                            : this._handleUploadError(t, e, n);
                      }
                    },
                  },
                  {
                    key: "_handleUploadError",
                    value: function (t, e, r) {
                      if (t[0].status !== i.CANCELED) {
                        if (t[0].upload.chunked && this.options.retryChunks) {
                          var n = this._getChunk(t[0], e);
                          if (n.retries++ < this.options.retryChunksLimit)
                            return void this._uploadData(t, [n.dataBlock]);
                          console.warn(
                            "Retried this chunk too often. Giving up."
                          );
                        }
                        this._errorProcessing(
                          t,
                          r ||
                            this.options.dictResponseError.replace(
                              "{{statusCode}}",
                              e.status
                            ),
                          e
                        );
                      }
                    },
                  },
                  {
                    key: "submitRequest",
                    value: function (t, e, i) {
                      t.send(e);
                    },
                  },
                  {
                    key: "_finished",
                    value: function (t, e, r) {
                      var n,
                        o = h(t);
                      try {
                        for (o.s(); !(n = o.n()).done; ) {
                          var s = n.value;
                          (s.status = i.SUCCESS),
                            this.emit("success", s, e, r),
                            this.emit("complete", s);
                        }
                      } catch (t) {
                        o.e(t);
                      } finally {
                        o.f();
                      }
                      if (
                        (this.options.uploadMultiple &&
                          (this.emit("successmultiple", t, e, r),
                          this.emit("completemultiple", t)),
                        this.options.autoProcessQueue)
                      )
                        return this.processQueue();
                    },
                  },
                  {
                    key: "_errorProcessing",
                    value: function (t, e, r) {
                      var n,
                        o = h(t);
                      try {
                        for (o.s(); !(n = o.n()).done; ) {
                          var s = n.value;
                          (s.status = i.ERROR),
                            this.emit("error", s, e, r),
                            this.emit("complete", s);
                        }
                      } catch (t) {
                        o.e(t);
                      } finally {
                        o.f();
                      }
                      if (
                        (this.options.uploadMultiple &&
                          (this.emit("errormultiple", t, e, r),
                          this.emit("completemultiple", t)),
                        this.options.autoProcessQueue)
                      )
                        return this.processQueue();
                    },
                  },
                ],
                [
                  {
                    key: "uuidv4",
                    value: function () {
                      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                        /[xy]/g,
                        function (t) {
                          var e = (16 * Math.random()) | 0;
                          return ("x" === t ? e : (3 & e) | 8).toString(16);
                        }
                      );
                    },
                  },
                ]
              ),
              i
            );
          })(p);
        g.initClass(),
          (g.version = "5.7.2"),
          (g.options = {}),
          (g.optionsForElement = function (t) {
            return t.getAttribute("id")
              ? g.options[m(t.getAttribute("id"))]
              : void 0;
          }),
          (g.instances = []),
          (g.forElement = function (t) {
            if (
              ("string" == typeof t && (t = document.querySelector(t)),
              null == (null != t ? t.dropzone : void 0))
            )
              throw new Error(
                "No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."
              );
            return t.dropzone;
          }),
          (g.autoDiscover = !0),
          (g.discover = function () {
            var t;
            if (document.querySelectorAll)
              t = document.querySelectorAll(".dropzone");
            else {
              t = [];
              var e = function (e) {
                return (function () {
                  var i,
                    r = [],
                    n = h(e);
                  try {
                    for (n.s(); !(i = n.n()).done; ) {
                      var o = i.value;
                      /(^| )dropzone($| )/.test(o.className)
                        ? r.push(t.push(o))
                        : r.push(void 0);
                    }
                  } catch (t) {
                    n.e(t);
                  } finally {
                    n.f();
                  }
                  return r;
                })();
              };
              e(document.getElementsByTagName("div")),
                e(document.getElementsByTagName("form"));
            }
            return (function () {
              var e,
                i = [],
                r = h(t);
              try {
                for (r.s(); !(e = r.n()).done; ) {
                  var n = e.value;
                  !1 !== g.optionsForElement(n)
                    ? i.push(new g(n))
                    : i.push(void 0);
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
              return i;
            })();
          }),
          (g.blacklistedBrowsers = [
            /opera.*(Macintosh|Windows Phone).*version\/12/i,
          ]),
          (g.isBrowserSupported = function () {
            var t = !0;
            if (
              window.File &&
              window.FileReader &&
              window.FileList &&
              window.Blob &&
              window.FormData &&
              document.querySelector
            )
              if ("classList" in document.createElement("a")) {
                var e,
                  i = h(g.blacklistedBrowsers);
                try {
                  for (i.s(); !(e = i.n()).done; ) {
                    e.value.test(navigator.userAgent) && (t = !1);
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
              } else t = !1;
            else t = !1;
            return t;
          }),
          (g.dataURItoBlob = function (t) {
            for (
              var e = atob(t.split(",")[1]),
                i = t.split(",")[0].split(":")[1].split(";")[0],
                r = new ArrayBuffer(e.length),
                n = new Uint8Array(r),
                o = 0,
                s = e.length,
                a = 0 <= s;
              a ? o <= s : o >= s;
              a ? o++ : o--
            )
              n[o] = e.charCodeAt(o);
            return new Blob([r], { type: i });
          });
        var v = function (t, e) {
            return t
              .filter(function (t) {
                return t !== e;
              })
              .map(function (t) {
                return t;
              });
          },
          m = function (t) {
            return t.replace(/[\-_](\w)/g, function (t) {
              return t.charAt(1).toUpperCase();
            });
          };
        (g.createElement = function (t) {
          var e = document.createElement("div");
          return (e.innerHTML = t), e.childNodes[0];
        }),
          (g.elementInside = function (t, e) {
            if (t === e) return !0;
            for (; (t = t.parentNode); ) if (t === e) return !0;
            return !1;
          }),
          (g.getElement = function (t, e) {
            var i;
            if (
              ("string" == typeof t
                ? (i = document.querySelector(t))
                : null != t.nodeType && (i = t),
              null == i)
            )
              throw new Error(
                "Invalid `".concat(
                  e,
                  "` option provided. Please provide a CSS selector or a plain HTML element."
                )
              );
            return i;
          }),
          (g.getElements = function (t, e) {
            var i, r;
            if (t instanceof Array) {
              r = [];
              try {
                var n,
                  o = h(t);
                try {
                  for (o.s(); !(n = o.n()).done; )
                    (i = n.value), r.push(this.getElement(i, e));
                } catch (t) {
                  o.e(t);
                } finally {
                  o.f();
                }
              } catch (t) {
                r = null;
              }
            } else if ("string" == typeof t) {
              r = [];
              var s,
                a = h(document.querySelectorAll(t));
              try {
                for (a.s(); !(s = a.n()).done; ) (i = s.value), r.push(i);
              } catch (t) {
                a.e(t);
              } finally {
                a.f();
              }
            } else null != t.nodeType && (r = [t]);
            if (null == r || !r.length)
              throw new Error(
                "Invalid `".concat(
                  e,
                  "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."
                )
              );
            return r;
          }),
          (g.confirm = function (t, e, i) {
            return window.confirm(t) ? e() : null != i ? i() : void 0;
          }),
          (g.isValidFile = function (t, e) {
            if (!e) return !0;
            e = e.split(",");
            var i,
              r = t.type,
              n = r.replace(/\/.*$/, ""),
              o = h(e);
            try {
              for (o.s(); !(i = o.n()).done; ) {
                var s = i.value;
                if ("." === (s = s.trim()).charAt(0)) {
                  if (
                    -1 !==
                    t.name
                      .toLowerCase()
                      .indexOf(s.toLowerCase(), t.name.length - s.length)
                  )
                    return !0;
                } else if (/\/\*$/.test(s)) {
                  if (n === s.replace(/\/.*$/, "")) return !0;
                } else if (r === s) return !0;
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
            return !1;
          }),
          "undefined" != typeof jQuery &&
            null !== jQuery &&
            (jQuery.fn.dropzone = function (t) {
              return this.each(function () {
                return new g(this, t);
              });
            }),
          null != e ? (e.exports = g) : (window.Dropzone = g),
          (g.ADDED = "added"),
          (g.QUEUED = "queued"),
          (g.ACCEPTED = g.QUEUED),
          (g.UPLOADING = "uploading"),
          (g.PROCESSING = g.UPLOADING),
          (g.CANCELED = "canceled"),
          (g.ERROR = "error"),
          (g.SUCCESS = "success");
        var y = function (t, e, i, r, n, o, s, a, l, h) {
            var c = (function (t) {
              t.naturalWidth;
              var e = t.naturalHeight,
                i = document.createElement("canvas");
              (i.width = 1), (i.height = e);
              var r = i.getContext("2d");
              r.drawImage(t, 0, 0);
              for (
                var n = r.getImageData(1, 0, 1, e).data, o = 0, s = e, a = e;
                a > o;

              )
                0 === n[4 * (a - 1) + 3] ? (s = a) : (o = a),
                  (a = (s + o) >> 1);
              var l = a / e;
              return 0 === l ? 1 : l;
            })(e);
            return t.drawImage(e, i, r, n, o, s, a, l, h / c);
          },
          _ = (function () {
            function t() {
              u(this, t);
            }
            return (
              d(t, null, [
                {
                  key: "initClass",
                  value: function () {
                    this.KEY_STR =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                  },
                },
                {
                  key: "encode64",
                  value: function (t) {
                    for (
                      var e = "",
                        i = void 0,
                        r = void 0,
                        n = "",
                        o = void 0,
                        s = void 0,
                        a = void 0,
                        l = "",
                        h = 0;
                      (o = (i = t[h++]) >> 2),
                        (s = ((3 & i) << 4) | ((r = t[h++]) >> 4)),
                        (a = ((15 & r) << 2) | ((n = t[h++]) >> 6)),
                        (l = 63 & n),
                        isNaN(r) ? (a = l = 64) : isNaN(n) && (l = 64),
                        (e =
                          e +
                          this.KEY_STR.charAt(o) +
                          this.KEY_STR.charAt(s) +
                          this.KEY_STR.charAt(a) +
                          this.KEY_STR.charAt(l)),
                        (i = r = n = ""),
                        (o = s = a = l = ""),
                        h < t.length;

                    );
                    return e;
                  },
                },
                {
                  key: "restore",
                  value: function (t, e) {
                    if (!t.match("data:image/jpeg;base64,")) return e;
                    var i = this.decode64(
                        t.replace("data:image/jpeg;base64,", "")
                      ),
                      r = this.slice2Segments(i),
                      n = this.exifManipulation(e, r);
                    return "data:image/jpeg;base64,".concat(this.encode64(n));
                  },
                },
                {
                  key: "exifManipulation",
                  value: function (t, e) {
                    var i = this.getExifArray(e),
                      r = this.insertExif(t, i);
                    return new Uint8Array(r);
                  },
                },
                {
                  key: "getExifArray",
                  value: function (t) {
                    for (var e = void 0, i = 0; i < t.length; ) {
                      if ((255 === (e = t[i])[0]) & (225 === e[1])) return e;
                      i++;
                    }
                    return [];
                  },
                },
                {
                  key: "insertExif",
                  value: function (t, e) {
                    var i = t.replace("data:image/jpeg;base64,", ""),
                      r = this.decode64(i),
                      n = r.indexOf(255, 3),
                      o = r.slice(0, n),
                      s = r.slice(n),
                      a = o;
                    return (a = (a = a.concat(e)).concat(s));
                  },
                },
                {
                  key: "slice2Segments",
                  value: function (t) {
                    for (var e = 0, i = []; ; ) {
                      if ((255 === t[e]) & (218 === t[e + 1])) break;
                      if ((255 === t[e]) & (216 === t[e + 1])) e += 2;
                      else {
                        var r = e + (256 * t[e + 2] + t[e + 3]) + 2,
                          n = t.slice(e, r);
                        i.push(n), (e = r);
                      }
                      if (e > t.length) break;
                    }
                    return i;
                  },
                },
                {
                  key: "decode64",
                  value: function (t) {
                    var e = void 0,
                      i = void 0,
                      r = "",
                      n = void 0,
                      o = void 0,
                      s = "",
                      a = 0,
                      l = [];
                    for (
                      /[^A-Za-z0-9\+\/\=]/g.exec(t) &&
                        console.warn(
                          "There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."
                        ),
                        t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                      (e =
                        (this.KEY_STR.indexOf(t.charAt(a++)) << 2) |
                        ((n = this.KEY_STR.indexOf(t.charAt(a++))) >> 4)),
                        (i =
                          ((15 & n) << 4) |
                          ((o = this.KEY_STR.indexOf(t.charAt(a++))) >> 2)),
                        (r =
                          ((3 & o) << 6) |
                          (s = this.KEY_STR.indexOf(t.charAt(a++)))),
                        l.push(e),
                        64 !== o && l.push(i),
                        64 !== s && l.push(r),
                        (e = i = r = ""),
                        (n = o = s = ""),
                        a < t.length;

                    );
                    return l;
                  },
                },
              ]),
              t
            );
          })();
        _.initClass();
        (g._autoDiscoverFunction = function () {
          if (g.autoDiscover) return g.discover();
        }),
          (function (t, e) {
            var i = !1,
              r = !0,
              n = t.document,
              o = n.documentElement,
              s = n.addEventListener ? "addEventListener" : "attachEvent",
              a = n.addEventListener ? "removeEventListener" : "detachEvent",
              l = n.addEventListener ? "" : "on",
              h = function r(o) {
                if (
                  "readystatechange" !== o.type ||
                  "complete" === n.readyState
                )
                  return (
                    ("load" === o.type ? t : n)[a](l + o.type, r, !1),
                    !i && (i = !0) ? e.call(t, o.type || o) : void 0
                  );
              };
            if ("complete" !== n.readyState) {
              if (n.createEventObject && o.doScroll) {
                try {
                  r = !t.frameElement;
                } catch (t) {}
                r &&
                  (function t() {
                    try {
                      o.doScroll("left");
                    } catch (e) {
                      return void setTimeout(t, 50);
                    }
                    return h("poll");
                  })();
              }
              n[s](l + "DOMContentLoaded", h, !1),
                n[s](l + "readystatechange", h, !1),
                t[s](l + "load", h, !1);
            }
          })(window, g._autoDiscoverFunction);
      },
      {},
    ],
    3: [
      function (t, e, i) {
        (function (e) {
          /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
          var r,
            n,
            o,
            s,
            a,
            l,
            h,
            c,
            u,
            f,
            d,
            p,
            g,
            v,
            m,
            y,
            _,
            b,
            x,
            C,
            w,
            S,
            T = T || { version: "4.5.1" };
          if (
            (void 0 !== i
              ? (i.fabric = T)
              : "function" == typeof define &&
                define.amd &&
                define([], function () {
                  return T;
                }),
            "undefined" != typeof document && "undefined" != typeof window)
          )
            document instanceof
            ("undefined" != typeof HTMLDocument ? HTMLDocument : Document)
              ? (T.document = document)
              : (T.document = document.implementation.createHTMLDocument("")),
              (T.window = window);
          else {
            var O = new (t("jsdom").JSDOM)(
              decodeURIComponent(
                "%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"
              ),
              {
                features: { FetchExternalResources: ["img"] },
                resources: "usable",
              }
            ).window;
            (T.document = O.document),
              (T.jsdomImplForWrapper = t(
                "jsdom/lib/jsdom/living/generated/utils"
              ).implForWrapper),
              (T.nodeCanvas = t("jsdom/lib/jsdom/utils").Canvas),
              (T.window = O),
              (DOMParser = T.window.DOMParser);
          }
          function k(t, e) {
            var i = t.canvas,
              r = e.targetCanvas,
              n = r.getContext("2d");
            n.translate(0, r.height), n.scale(1, -1);
            var o = i.height - r.height;
            n.drawImage(i, 0, o, r.width, r.height, 0, 0, r.width, r.height);
          }
          function E(t, e) {
            var i = e.targetCanvas.getContext("2d"),
              r = e.destinationWidth,
              n = e.destinationHeight,
              o = r * n * 4,
              s = new Uint8Array(this.imageBuffer, 0, o),
              a = new Uint8ClampedArray(this.imageBuffer, 0, o);
            t.readPixels(0, 0, r, n, t.RGBA, t.UNSIGNED_BYTE, s);
            var l = new ImageData(a, r, n);
            i.putImageData(l, 0, 0);
          }
          (T.isTouchSupported =
            "ontouchstart" in T.window ||
            "ontouchstart" in T.document ||
            (T.window &&
              T.window.navigator &&
              T.window.navigator.maxTouchPoints > 0)),
            (T.isLikelyNode = void 0 !== e && "undefined" == typeof window),
            (T.SHARED_ATTRIBUTES = [
              "display",
              "transform",
              "fill",
              "fill-opacity",
              "fill-rule",
              "opacity",
              "stroke",
              "stroke-dasharray",
              "stroke-linecap",
              "stroke-dashoffset",
              "stroke-linejoin",
              "stroke-miterlimit",
              "stroke-opacity",
              "stroke-width",
              "id",
              "paint-order",
              "vector-effect",
              "instantiated_by_use",
              "clip-path",
            ]),
            (T.DPI = 96),
            (T.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)"),
            (T.commaWsp = "(?:\\s+,?\\s*|,\\s*)"),
            (T.rePathCommand =
              /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi),
            (T.reNonWord = /[ \n\.,;!\?\-]/),
            (T.fontPaths = {}),
            (T.iMatrix = [1, 0, 0, 1, 0, 0]),
            (T.svgNS = "http://www.w3.org/2000/svg"),
            (T.perfLimitSizeTotal = 2097152),
            (T.maxCacheSideLimit = 4096),
            (T.minCacheSideLimit = 256),
            (T.charWidthsCache = {}),
            (T.textureSize = 2048),
            (T.disableStyleCopyPaste = !1),
            (T.enableGLFiltering = !0),
            (T.devicePixelRatio =
              T.window.devicePixelRatio ||
              T.window.webkitDevicePixelRatio ||
              T.window.mozDevicePixelRatio ||
              1),
            (T.browserShadowBlurConstant = 1),
            (T.arcToSegmentsCache = {}),
            (T.boundsOfCurveCache = {}),
            (T.cachesBoundsOfCurve = !0),
            (T.forceGLPutImageData = !1),
            (T.initFilterBackend = function () {
              return T.enableGLFiltering &&
                T.isWebglSupported &&
                T.isWebglSupported(T.textureSize)
                ? (console.log("max texture size: " + T.maxTextureSize),
                  new T.WebglFilterBackend({ tileSize: T.textureSize }))
                : T.Canvas2dFilterBackend
                ? new T.Canvas2dFilterBackend()
                : void 0;
            }),
            "undefined" != typeof document &&
              "undefined" != typeof window &&
              (window.fabric = T),
            (function () {
              function t(t, e) {
                if (this.__eventListeners[t]) {
                  var i = this.__eventListeners[t];
                  e ? (i[i.indexOf(e)] = !1) : T.util.array.fill(i, !1);
                }
              }
              T.Observable = {
                fire: function (t, e) {
                  if (!this.__eventListeners) return this;
                  var i = this.__eventListeners[t];
                  if (!i) return this;
                  for (var r = 0, n = i.length; r < n; r++)
                    i[r] && i[r].call(this, e || {});
                  return (
                    (this.__eventListeners[t] = i.filter(function (t) {
                      return !1 !== t;
                    })),
                    this
                  );
                },
                on: function (t, e) {
                  if (
                    (this.__eventListeners || (this.__eventListeners = {}),
                    1 === arguments.length)
                  )
                    for (var i in t) this.on(i, t[i]);
                  else
                    this.__eventListeners[t] || (this.__eventListeners[t] = []),
                      this.__eventListeners[t].push(e);
                  return this;
                },
                off: function (e, i) {
                  if (!this.__eventListeners) return this;
                  if (0 === arguments.length)
                    for (e in this.__eventListeners) t.call(this, e);
                  else if (
                    1 === arguments.length &&
                    "object" == typeof arguments[0]
                  )
                    for (var r in e) t.call(this, r, e[r]);
                  else t.call(this, e, i);
                  return this;
                },
              };
            })(),
            (T.Collection = {
              _objects: [],
              add: function () {
                if (
                  (this._objects.push.apply(this._objects, arguments),
                  this._onObjectAdded)
                )
                  for (var t = 0, e = arguments.length; t < e; t++)
                    this._onObjectAdded(arguments[t]);
                return this.renderOnAddRemove && this.requestRenderAll(), this;
              },
              insertAt: function (t, e, i) {
                var r = this._objects;
                return (
                  i ? (r[e] = t) : r.splice(e, 0, t),
                  this._onObjectAdded && this._onObjectAdded(t),
                  this.renderOnAddRemove && this.requestRenderAll(),
                  this
                );
              },
              remove: function () {
                for (
                  var t, e = this._objects, i = !1, r = 0, n = arguments.length;
                  r < n;
                  r++
                )
                  -1 !== (t = e.indexOf(arguments[r])) &&
                    ((i = !0),
                    e.splice(t, 1),
                    this._onObjectRemoved &&
                      this._onObjectRemoved(arguments[r]));
                return (
                  this.renderOnAddRemove && i && this.requestRenderAll(), this
                );
              },
              forEachObject: function (t, e) {
                for (var i = this.getObjects(), r = 0, n = i.length; r < n; r++)
                  t.call(e, i[r], r, i);
                return this;
              },
              getObjects: function (t) {
                return void 0 === t
                  ? this._objects.concat()
                  : this._objects.filter(function (e) {
                      return e.type === t;
                    });
              },
              item: function (t) {
                return this._objects[t];
              },
              isEmpty: function () {
                return 0 === this._objects.length;
              },
              size: function () {
                return this._objects.length;
              },
              contains: function (t) {
                return this._objects.indexOf(t) > -1;
              },
              complexity: function () {
                return this._objects.reduce(function (t, e) {
                  return (t += e.complexity ? e.complexity() : 0);
                }, 0);
              },
            }),
            (T.CommonMethods = {
              _setOptions: function (t) {
                for (var e in t) this.set(e, t[e]);
              },
              _initGradient: function (t, e) {
                !t ||
                  !t.colorStops ||
                  t instanceof T.Gradient ||
                  this.set(e, new T.Gradient(t));
              },
              _initPattern: function (t, e, i) {
                !t || !t.source || t instanceof T.Pattern
                  ? i && i()
                  : this.set(e, new T.Pattern(t, i));
              },
              _setObject: function (t) {
                for (var e in t) this._set(e, t[e]);
              },
              set: function (t, e) {
                return (
                  "object" == typeof t ? this._setObject(t) : this._set(t, e),
                  this
                );
              },
              _set: function (t, e) {
                this[t] = e;
              },
              toggle: function (t) {
                var e = this.get(t);
                return "boolean" == typeof e && this.set(t, !e), this;
              },
              get: function (t) {
                return this[t];
              },
            }),
            (r = void 0 !== i ? i : this),
            (n = Math.sqrt),
            (o = Math.atan2),
            (s = Math.pow),
            (a = Math.PI / 180),
            (l = Math.PI / 2),
            (T.util = {
              cos: function (t) {
                if (0 === t) return 1;
                switch ((t < 0 && (t = -t), t / l)) {
                  case 1:
                  case 3:
                    return 0;
                  case 2:
                    return -1;
                }
                return Math.cos(t);
              },
              sin: function (t) {
                if (0 === t) return 0;
                var e = 1;
                switch ((t < 0 && (e = -1), t / l)) {
                  case 1:
                    return e;
                  case 2:
                    return 0;
                  case 3:
                    return -e;
                }
                return Math.sin(t);
              },
              removeFromArray: function (t, e) {
                var i = t.indexOf(e);
                return -1 !== i && t.splice(i, 1), t;
              },
              getRandomInt: function (t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t;
              },
              degreesToRadians: function (t) {
                return t * a;
              },
              radiansToDegrees: function (t) {
                return t / a;
              },
              rotatePoint: function (t, e, i) {
                var r = new T.Point(t.x - e.x, t.y - e.y),
                  n = T.util.rotateVector(r, i);
                return new T.Point(n.x, n.y).addEquals(e);
              },
              rotateVector: function (t, e) {
                var i = T.util.sin(e),
                  r = T.util.cos(e);
                return { x: t.x * r - t.y * i, y: t.x * i + t.y * r };
              },
              transformPoint: function (t, e, i) {
                return i
                  ? new T.Point(
                      e[0] * t.x + e[2] * t.y,
                      e[1] * t.x + e[3] * t.y
                    )
                  : new T.Point(
                      e[0] * t.x + e[2] * t.y + e[4],
                      e[1] * t.x + e[3] * t.y + e[5]
                    );
              },
              makeBoundingBoxFromPoints: function (t, e) {
                if (e)
                  for (var i = 0; i < t.length; i++)
                    t[i] = T.util.transformPoint(t[i], e);
                var r = [t[0].x, t[1].x, t[2].x, t[3].x],
                  n = T.util.array.min(r),
                  o = T.util.array.max(r) - n,
                  s = [t[0].y, t[1].y, t[2].y, t[3].y],
                  a = T.util.array.min(s);
                return {
                  left: n,
                  top: a,
                  width: o,
                  height: T.util.array.max(s) - a,
                };
              },
              invertTransform: function (t) {
                var e = 1 / (t[0] * t[3] - t[1] * t[2]),
                  i = [e * t[3], -e * t[1], -e * t[2], e * t[0]],
                  r = T.util.transformPoint({ x: t[4], y: t[5] }, i, !0);
                return (i[4] = -r.x), (i[5] = -r.y), i;
              },
              toFixed: function (t, e) {
                return parseFloat(Number(t).toFixed(e));
              },
              parseUnit: function (t, e) {
                var i = /\D{0,2}$/.exec(t),
                  r = parseFloat(t);
                switch ((e || (e = T.Text.DEFAULT_SVG_FONT_SIZE), i[0])) {
                  case "mm":
                    return (r * T.DPI) / 25.4;
                  case "cm":
                    return (r * T.DPI) / 2.54;
                  case "in":
                    return r * T.DPI;
                  case "pt":
                    return (r * T.DPI) / 72;
                  case "pc":
                    return ((r * T.DPI) / 72) * 12;
                  case "em":
                    return r * e;
                  default:
                    return r;
                }
              },
              falseFunction: function () {
                return !1;
              },
              getKlass: function (t, e) {
                return (
                  (t = T.util.string.camelize(
                    t.charAt(0).toUpperCase() + t.slice(1)
                  )),
                  T.util.resolveNamespace(e)[t]
                );
              },
              getSvgAttributes: function (t) {
                var e = ["instantiated_by_use", "style", "id", "class"];
                switch (t) {
                  case "linearGradient":
                    e = e.concat([
                      "x1",
                      "y1",
                      "x2",
                      "y2",
                      "gradientUnits",
                      "gradientTransform",
                    ]);
                    break;
                  case "radialGradient":
                    e = e.concat([
                      "gradientUnits",
                      "gradientTransform",
                      "cx",
                      "cy",
                      "r",
                      "fx",
                      "fy",
                      "fr",
                    ]);
                    break;
                  case "stop":
                    e = e.concat(["offset", "stop-color", "stop-opacity"]);
                }
                return e;
              },
              resolveNamespace: function (t) {
                if (!t) return T;
                var e,
                  i = t.split("."),
                  n = i.length,
                  o = r || T.window;
                for (e = 0; e < n; ++e) o = o[i[e]];
                return o;
              },
              loadImage: function (t, e, i, r) {
                if (t) {
                  var n = T.util.createImage(),
                    o = function () {
                      e && e.call(i, n, !1), (n = n.onload = n.onerror = null);
                    };
                  (n.onload = o),
                    (n.onerror = function () {
                      T.log("Error loading " + n.src),
                        e && e.call(i, null, !0),
                        (n = n.onload = n.onerror = null);
                    }),
                    0 !== t.indexOf("data") && null != r && (n.crossOrigin = r),
                    "data:image/svg" === t.substring(0, 14) &&
                      ((n.onload = null), T.util.loadImageInDom(n, o)),
                    (n.src = t);
                } else e && e.call(i, t);
              },
              loadImageInDom: function (t, e) {
                var i = T.document.createElement("div");
                (i.style.width = i.style.height = "1px"),
                  (i.style.left = i.style.top = "-100%"),
                  (i.style.position = "absolute"),
                  i.appendChild(t),
                  T.document.querySelector("body").appendChild(i),
                  (t.onload = function () {
                    e(), i.parentNode.removeChild(i), (i = null);
                  });
              },
              enlivenObjects: function (t, e, i, r) {
                var n = [],
                  o = 0,
                  s = (t = t || []).length;
                function a() {
                  ++o === s &&
                    e &&
                    e(
                      n.filter(function (t) {
                        return t;
                      })
                    );
                }
                s
                  ? t.forEach(function (t, e) {
                      t && t.type
                        ? T.util
                            .getKlass(t.type, i)
                            .fromObject(t, function (i, o) {
                              o || (n[e] = i), r && r(t, i, o), a();
                            })
                        : a();
                    })
                  : e && e(n);
              },
              enlivenPatterns: function (t, e) {
                function i() {
                  ++n === o && e && e(r);
                }
                var r = [],
                  n = 0,
                  o = (t = t || []).length;
                o
                  ? t.forEach(function (t, e) {
                      t && t.source
                        ? new T.Pattern(t, function (t) {
                            (r[e] = t), i();
                          })
                        : ((r[e] = t), i());
                    })
                  : e && e(r);
              },
              groupSVGElements: function (t, e, i) {
                var r;
                return t && 1 === t.length
                  ? t[0]
                  : (e &&
                      (e.width && e.height
                        ? (e.centerPoint = { x: e.width / 2, y: e.height / 2 })
                        : (delete e.width, delete e.height)),
                    (r = new T.Group(t, e)),
                    void 0 !== i && (r.sourcePath = i),
                    r);
              },
              populateWithProperties: function (t, e, i) {
                if (i && "[object Array]" === Object.prototype.toString.call(i))
                  for (var r = 0, n = i.length; r < n; r++)
                    i[r] in t && (e[i[r]] = t[i[r]]);
              },
              drawDashedLine: function (t, e, i, r, s, a) {
                var l = r - e,
                  h = s - i,
                  c = n(l * l + h * h),
                  u = o(h, l),
                  f = a.length,
                  d = 0,
                  p = !0;
                for (
                  t.save(),
                    t.translate(e, i),
                    t.moveTo(0, 0),
                    t.rotate(u),
                    e = 0;
                  c > e;

                )
                  (e += a[d++ % f]) > c && (e = c),
                    t[p ? "lineTo" : "moveTo"](e, 0),
                    (p = !p);
                t.restore();
              },
              createCanvasElement: function () {
                return T.document.createElement("canvas");
              },
              copyCanvasElement: function (t) {
                var e = T.util.createCanvasElement();
                return (
                  (e.width = t.width),
                  (e.height = t.height),
                  e.getContext("2d").drawImage(t, 0, 0),
                  e
                );
              },
              toDataURL: function (t, e, i) {
                return t.toDataURL("image/" + e, i);
              },
              createImage: function () {
                return T.document.createElement("img");
              },
              multiplyTransformMatrices: function (t, e, i) {
                return [
                  t[0] * e[0] + t[2] * e[1],
                  t[1] * e[0] + t[3] * e[1],
                  t[0] * e[2] + t[2] * e[3],
                  t[1] * e[2] + t[3] * e[3],
                  i ? 0 : t[0] * e[4] + t[2] * e[5] + t[4],
                  i ? 0 : t[1] * e[4] + t[3] * e[5] + t[5],
                ];
              },
              qrDecompose: function (t) {
                var e = o(t[1], t[0]),
                  i = s(t[0], 2) + s(t[1], 2),
                  r = n(i),
                  l = (t[0] * t[3] - t[2] * t[1]) / r,
                  h = o(t[0] * t[2] + t[1] * t[3], i);
                return {
                  angle: e / a,
                  scaleX: r,
                  scaleY: l,
                  skewX: h / a,
                  skewY: 0,
                  translateX: t[4],
                  translateY: t[5],
                };
              },
              calcRotateMatrix: function (t) {
                if (!t.angle) return T.iMatrix.concat();
                var e = T.util.degreesToRadians(t.angle),
                  i = T.util.cos(e),
                  r = T.util.sin(e);
                return [i, r, -r, i, 0, 0];
              },
              calcDimensionsMatrix: function (t) {
                var e = void 0 === t.scaleX ? 1 : t.scaleX,
                  i = void 0 === t.scaleY ? 1 : t.scaleY,
                  r = [t.flipX ? -e : e, 0, 0, t.flipY ? -i : i, 0, 0],
                  n = T.util.multiplyTransformMatrices,
                  o = T.util.degreesToRadians;
                return (
                  t.skewX && (r = n(r, [1, 0, Math.tan(o(t.skewX)), 1], !0)),
                  t.skewY && (r = n(r, [1, Math.tan(o(t.skewY)), 0, 1], !0)),
                  r
                );
              },
              composeMatrix: function (t) {
                var e = [1, 0, 0, 1, t.translateX || 0, t.translateY || 0],
                  i = T.util.multiplyTransformMatrices;
                return (
                  t.angle && (e = i(e, T.util.calcRotateMatrix(t))),
                  (1 !== t.scaleX ||
                    1 !== t.scaleY ||
                    t.skewX ||
                    t.skewY ||
                    t.flipX ||
                    t.flipY) &&
                    (e = i(e, T.util.calcDimensionsMatrix(t))),
                  e
                );
              },
              resetObjectTransform: function (t) {
                (t.scaleX = 1),
                  (t.scaleY = 1),
                  (t.skewX = 0),
                  (t.skewY = 0),
                  (t.flipX = !1),
                  (t.flipY = !1),
                  t.rotate(0);
              },
              saveObjectTransform: function (t) {
                return {
                  scaleX: t.scaleX,
                  scaleY: t.scaleY,
                  skewX: t.skewX,
                  skewY: t.skewY,
                  angle: t.angle,
                  left: t.left,
                  flipX: t.flipX,
                  flipY: t.flipY,
                  top: t.top,
                };
              },
              isTransparent: function (t, e, i, r) {
                r > 0 &&
                  (e > r ? (e -= r) : (e = 0), i > r ? (i -= r) : (i = 0));
                var n,
                  o = !0,
                  s = t.getImageData(e, i, 2 * r || 1, 2 * r || 1),
                  a = s.data.length;
                for (n = 3; n < a && !1 != (o = s.data[n] <= 0); n += 4);
                return (s = null), o;
              },
              parsePreserveAspectRatioAttribute: function (t) {
                var e,
                  i = "meet",
                  r = t.split(" ");
                return (
                  r &&
                    r.length &&
                    ("meet" !== (i = r.pop()) && "slice" !== i
                      ? ((e = i), (i = "meet"))
                      : r.length && (e = r.pop())),
                  {
                    meetOrSlice: i,
                    alignX: "none" !== e ? e.slice(1, 4) : "none",
                    alignY: "none" !== e ? e.slice(5, 8) : "none",
                  }
                );
              },
              clearFabricFontCache: function (t) {
                (t = (t || "").toLowerCase())
                  ? T.charWidthsCache[t] && delete T.charWidthsCache[t]
                  : (T.charWidthsCache = {});
              },
              limitDimsByArea: function (t, e) {
                var i = Math.sqrt(e * t),
                  r = Math.floor(e / i);
                return { x: Math.floor(i), y: r };
              },
              capValue: function (t, e, i) {
                return Math.max(t, Math.min(e, i));
              },
              findScaleToFit: function (t, e) {
                return Math.min(e.width / t.width, e.height / t.height);
              },
              findScaleToCover: function (t, e) {
                return Math.max(e.width / t.width, e.height / t.height);
              },
              matrixToSVG: function (t) {
                return (
                  "matrix(" +
                  t
                    .map(function (t) {
                      return T.util.toFixed(t, T.Object.NUM_FRACTION_DIGITS);
                    })
                    .join(" ") +
                  ")"
                );
              },
              removeTransformFromObject: function (t, e) {
                var i = T.util.invertTransform(e),
                  r = T.util.multiplyTransformMatrices(i, t.calcOwnMatrix());
                T.util.applyTransformToObject(t, r);
              },
              addTransformToObject: function (t, e) {
                T.util.applyTransformToObject(
                  t,
                  T.util.multiplyTransformMatrices(e, t.calcOwnMatrix())
                );
              },
              applyTransformToObject: function (t, e) {
                var i = T.util.qrDecompose(e),
                  r = new T.Point(i.translateX, i.translateY);
                (t.flipX = !1),
                  (t.flipY = !1),
                  t.set("scaleX", i.scaleX),
                  t.set("scaleY", i.scaleY),
                  (t.skewX = i.skewX),
                  (t.skewY = i.skewY),
                  (t.angle = i.angle),
                  t.setPositionByOrigin(r, "center", "center");
              },
              sizeAfterTransform: function (t, e, i) {
                var r = t / 2,
                  n = e / 2,
                  o = [
                    { x: -r, y: -n },
                    { x: r, y: -n },
                    { x: -r, y: n },
                    { x: r, y: n },
                  ],
                  s = T.util.calcDimensionsMatrix(i),
                  a = T.util.makeBoundingBoxFromPoints(o, s);
                return { x: a.width, y: a.height };
              },
            }),
            (function () {
              var t = Array.prototype.join,
                e = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 },
                i = { m: "l", M: "L" };
              function r(t, e, i, r, n, o, s, a, l, h, c) {
                var u = T.util.cos(t),
                  f = T.util.sin(t),
                  d = T.util.cos(e),
                  p = T.util.sin(e),
                  g = i * n * d - r * o * p + s,
                  v = r * n * d + i * o * p + a;
                return [
                  "C",
                  h + l * (-i * n * f - r * o * u),
                  c + l * (-r * n * f + i * o * u),
                  g + l * (i * n * p + r * o * d),
                  v + l * (r * n * p - i * o * d),
                  g,
                  v,
                ];
              }
              function n(t, e, i, n, s, a, l) {
                var h = Math.PI,
                  c = (l * h) / 180,
                  u = T.util.sin(c),
                  f = T.util.cos(c),
                  d = 0,
                  p = 0,
                  g = -f * t * 0.5 - u * e * 0.5,
                  v = -f * e * 0.5 + u * t * 0.5,
                  m = (i = Math.abs(i)) * i,
                  y = (n = Math.abs(n)) * n,
                  _ = v * v,
                  b = g * g,
                  x = m * y - m * _ - y * b,
                  C = 0;
                if (x < 0) {
                  var w = Math.sqrt(1 - x / (m * y));
                  (i *= w), (n *= w);
                } else C = (s === a ? -1 : 1) * Math.sqrt(x / (m * _ + y * b));
                var S = (C * i * v) / n,
                  O = (-C * n * g) / i,
                  k = f * S - u * O + 0.5 * t,
                  E = u * S + f * O + 0.5 * e,
                  A = o(1, 0, (g - S) / i, (v - O) / n),
                  F = o((g - S) / i, (v - O) / n, (-g - S) / i, (-v - O) / n);
                0 === a && F > 0
                  ? (F -= 2 * h)
                  : 1 === a && F < 0 && (F += 2 * h);
                for (
                  var D = Math.ceil(Math.abs((F / h) * 2)),
                    P = [],
                    M = F / D,
                    j =
                      ((8 / 3) * Math.sin(M / 4) * Math.sin(M / 4)) /
                      Math.sin(M / 2),
                    I = A + M,
                    L = 0;
                  L < D;
                  L++
                )
                  (P[L] = r(A, I, f, u, i, n, k, E, j, d, p)),
                    (d = P[L][5]),
                    (p = P[L][6]),
                    (A = I),
                    (I += M);
                return P;
              }
              function o(t, e, i, r) {
                var n = Math.atan2(e, t),
                  o = Math.atan2(r, i);
                return o >= n ? o - n : 2 * Math.PI - (n - o);
              }
              function s(e, i, r, n, o, s, a, l) {
                var h;
                if (
                  T.cachesBoundsOfCurve &&
                  ((h = t.call(arguments)), T.boundsOfCurveCache[h])
                )
                  return T.boundsOfCurveCache[h];
                var c,
                  u,
                  f,
                  d,
                  p,
                  g,
                  v,
                  m,
                  y = Math.sqrt,
                  _ = Math.min,
                  b = Math.max,
                  x = Math.abs,
                  C = [],
                  w = [[], []];
                (u = 6 * e - 12 * r + 6 * o),
                  (c = -3 * e + 9 * r - 9 * o + 3 * a),
                  (f = 3 * r - 3 * e);
                for (var S = 0; S < 2; ++S)
                  if (
                    (S > 0 &&
                      ((u = 6 * i - 12 * n + 6 * s),
                      (c = -3 * i + 9 * n - 9 * s + 3 * l),
                      (f = 3 * n - 3 * i)),
                    x(c) < 1e-12)
                  ) {
                    if (x(u) < 1e-12) continue;
                    0 < (d = -f / u) && d < 1 && C.push(d);
                  } else
                    (v = u * u - 4 * f * c) < 0 ||
                      (0 < (p = (-u + (m = y(v))) / (2 * c)) &&
                        p < 1 &&
                        C.push(p),
                      0 < (g = (-u - m) / (2 * c)) && g < 1 && C.push(g));
                for (var O, k, E, A = C.length, F = A; A--; )
                  (O =
                    (E = 1 - (d = C[A])) * E * E * e +
                    3 * E * E * d * r +
                    3 * E * d * d * o +
                    d * d * d * a),
                    (w[0][A] = O),
                    (k =
                      E * E * E * i +
                      3 * E * E * d * n +
                      3 * E * d * d * s +
                      d * d * d * l),
                    (w[1][A] = k);
                (w[0][F] = e),
                  (w[1][F] = i),
                  (w[0][F + 1] = a),
                  (w[1][F + 1] = l);
                var D = [
                  { x: _.apply(null, w[0]), y: _.apply(null, w[1]) },
                  { x: b.apply(null, w[0]), y: b.apply(null, w[1]) },
                ];
                return (
                  T.cachesBoundsOfCurve && (T.boundsOfCurveCache[h] = D), D
                );
              }
              function a(t, e, i) {
                for (
                  var r = i[1],
                    o = i[2],
                    s = i[3],
                    a = i[4],
                    l = i[5],
                    h = n(i[6] - t, i[7] - e, r, o, a, l, s),
                    c = 0,
                    u = h.length;
                  c < u;
                  c++
                )
                  (h[c][1] += t),
                    (h[c][2] += e),
                    (h[c][3] += t),
                    (h[c][4] += e),
                    (h[c][5] += t),
                    (h[c][6] += e);
                return h;
              }
              function l(t, e, i, r) {
                return Math.sqrt((i - t) * (i - t) + (r - e) * (r - e));
              }
              function h(t, e, i, r, n, o, s, a) {
                return function (l) {
                  var h = (function (t) {
                      return t * t * t;
                    })(l),
                    c = (function (t) {
                      return 3 * t * t * (1 - t);
                    })(l),
                    u = (function (t) {
                      return 3 * t * (1 - t) * (1 - t);
                    })(l),
                    f = (function (t) {
                      return (1 - t) * (1 - t) * (1 - t);
                    })(l);
                  return {
                    x: s * h + n * c + i * u + t * f,
                    y: a * h + o * c + r * u + e * f,
                  };
                };
              }
              function c(t, e, i, r, n, o, s, a) {
                return function (l) {
                  var h = 1 - l,
                    c =
                      3 * h * h * (i - t) +
                      6 * h * l * (n - i) +
                      3 * l * l * (s - n),
                    u =
                      3 * h * h * (r - e) +
                      6 * h * l * (o - r) +
                      3 * l * l * (a - o);
                  return Math.atan2(u, c);
                };
              }
              function u(t, e, i, r, n, o) {
                return function (s) {
                  var a = (function (t) {
                      return t * t;
                    })(s),
                    l = (function (t) {
                      return 2 * t * (1 - t);
                    })(s),
                    h = (function (t) {
                      return (1 - t) * (1 - t);
                    })(s);
                  return { x: n * a + i * l + t * h, y: o * a + r * l + e * h };
                };
              }
              function f(t, e, i, r, n, o) {
                return function (s) {
                  var a = 1 - s,
                    l = 2 * a * (i - t) + 2 * s * (n - i),
                    h = 2 * a * (r - e) + 2 * s * (o - r);
                  return Math.atan2(h, l);
                };
              }
              function d(t, e, i) {
                var r,
                  n,
                  o = { x: e, y: i },
                  s = 0;
                for (n = 0.01; n <= 1; n += 0.01)
                  (r = t(n)), (s += l(o.x, o.y, r.x, r.y)), (o = r);
                return s;
              }
              function p(t, e) {
                for (
                  var i,
                    r,
                    n,
                    o = 0,
                    s = 0,
                    a = t.iterator,
                    h = { x: t.x, y: t.y },
                    c = 0.01,
                    u = t.angleFinder;
                  s < e && o <= 1 && c > 1e-4;

                )
                  (i = a(o)),
                    (n = o),
                    (r = l(h.x, h.y, i.x, i.y)) + s > e
                      ? (o -= c /= 2)
                      : ((h = i), (o += c), (s += r));
                return (i.angle = u(n)), i;
              }
              function g(t) {
                for (
                  var e,
                    i,
                    r,
                    n,
                    o = 0,
                    s = t.length,
                    a = 0,
                    p = 0,
                    g = 0,
                    v = 0,
                    m = [],
                    y = 0;
                  y < s;
                  y++
                ) {
                  switch (
                    ((r = { x: a, y: p, command: (e = t[y])[0] }), e[0])
                  ) {
                    case "M":
                      (r.length = 0), (g = a = e[1]), (v = p = e[2]);
                      break;
                    case "L":
                      (r.length = l(a, p, e[1], e[2])), (a = e[1]), (p = e[2]);
                      break;
                    case "C":
                      (i = h(a, p, e[1], e[2], e[3], e[4], e[5], e[6])),
                        (n = c(a, p, e[1], e[2], e[3], e[4], e[5], e[6])),
                        (r.iterator = i),
                        (r.angleFinder = n),
                        (r.length = d(i, a, p)),
                        (a = e[5]),
                        (p = e[6]);
                      break;
                    case "Q":
                      (i = u(a, p, e[1], e[2], e[3], e[4])),
                        (n = f(a, p, e[1], e[2], e[3], e[4])),
                        (r.iterator = i),
                        (r.angleFinder = n),
                        (r.length = d(i, a, p)),
                        (a = e[3]),
                        (p = e[4]);
                      break;
                    case "Z":
                    case "z":
                      (r.destX = g),
                        (r.destY = v),
                        (r.length = l(a, p, g, v)),
                        (a = g),
                        (p = v);
                  }
                  (o += r.length), m.push(r);
                }
                return m.push({ length: o, x: a, y: p }), m;
              }
              (T.util.parsePath = function (t) {
                var r,
                  n,
                  o,
                  s,
                  a,
                  l = [],
                  h = [],
                  c = T.rePathCommand,
                  u = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*",
                  f = "(" + u + ")" + T.commaWsp,
                  d = "([01])" + T.commaWsp + "?",
                  p = new RegExp(
                    f + "?" + f + "?" + f + d + d + f + "?(" + u + ")",
                    "g"
                  );
                if (!t || !t.match) return l;
                for (
                  var g,
                    v = 0,
                    m = (a = t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length;
                  v < m;
                  v++
                ) {
                  (s = (r = a[v]).slice(1).trim()), (h.length = 0);
                  var y = r.charAt(0);
                  if (((g = [y]), "a" === y.toLowerCase()))
                    for (var _; (_ = p.exec(s)); )
                      for (var b = 1; b < _.length; b++) h.push(_[b]);
                  else for (; (o = c.exec(s)); ) h.push(o[0]);
                  b = 0;
                  for (var x = h.length; b < x; b++)
                    (n = parseFloat(h[b])), isNaN(n) || g.push(n);
                  var C = e[y.toLowerCase()],
                    w = i[y] || y;
                  if (g.length - 1 > C)
                    for (var S = 1, O = g.length; S < O; S += C)
                      l.push([y].concat(g.slice(S, S + C))), (y = w);
                  else l.push(g);
                }
                return l;
              }),
                (T.util.makePathSimpler = function (t) {
                  var e,
                    i,
                    r,
                    n,
                    o,
                    s,
                    l = 0,
                    h = 0,
                    c = t.length,
                    u = 0,
                    f = 0,
                    d = [];
                  for (i = 0; i < c; ++i) {
                    switch (((r = !1), (e = t[i].slice(0))[0])) {
                      case "l":
                        (e[0] = "L"), (e[1] += l), (e[2] += h);
                      case "L":
                        (l = e[1]), (h = e[2]);
                        break;
                      case "h":
                        e[1] += l;
                      case "H":
                        (e[0] = "L"), (e[2] = h), (l = e[1]);
                        break;
                      case "v":
                        e[1] += h;
                      case "V":
                        (e[0] = "L"), (h = e[1]), (e[1] = l), (e[2] = h);
                        break;
                      case "m":
                        (e[0] = "M"), (e[1] += l), (e[2] += h);
                      case "M":
                        (l = e[1]), (h = e[2]), (u = e[1]), (f = e[2]);
                        break;
                      case "c":
                        (e[0] = "C"),
                          (e[1] += l),
                          (e[2] += h),
                          (e[3] += l),
                          (e[4] += h),
                          (e[5] += l),
                          (e[6] += h);
                      case "C":
                        (o = e[3]), (s = e[4]), (l = e[5]), (h = e[6]);
                        break;
                      case "s":
                        (e[0] = "S"),
                          (e[1] += l),
                          (e[2] += h),
                          (e[3] += l),
                          (e[4] += h);
                      case "S":
                        "C" === n
                          ? ((o = 2 * l - o), (s = 2 * h - s))
                          : ((o = l), (s = h)),
                          (l = e[3]),
                          (h = e[4]),
                          (e[0] = "C"),
                          (e[5] = e[3]),
                          (e[6] = e[4]),
                          (e[3] = e[1]),
                          (e[4] = e[2]),
                          (e[1] = o),
                          (e[2] = s),
                          (o = e[3]),
                          (s = e[4]);
                        break;
                      case "q":
                        (e[0] = "Q"),
                          (e[1] += l),
                          (e[2] += h),
                          (e[3] += l),
                          (e[4] += h);
                      case "Q":
                        (o = e[1]), (s = e[2]), (l = e[3]), (h = e[4]);
                        break;
                      case "t":
                        (e[0] = "T"), (e[1] += l), (e[2] += h);
                      case "T":
                        "Q" === n
                          ? ((o = 2 * l - o), (s = 2 * h - s))
                          : ((o = l), (s = h)),
                          (e[0] = "Q"),
                          (l = e[1]),
                          (h = e[2]),
                          (e[1] = o),
                          (e[2] = s),
                          (e[3] = l),
                          (e[4] = h);
                        break;
                      case "a":
                        (e[0] = "A"), (e[6] += l), (e[7] += h);
                      case "A":
                        (r = !0),
                          (d = d.concat(a(l, h, e))),
                          (l = e[6]),
                          (h = e[7]);
                        break;
                      case "z":
                      case "Z":
                        (l = u), (h = f);
                    }
                    r || d.push(e), (n = e[0]);
                  }
                  return d;
                }),
                (T.util.getPathSegmentsInfo = g),
                (T.util.fromArcToBeziers = a),
                (T.util.fromArcToBeizers = a),
                (T.util.getBoundsOfCurve = s),
                (T.util.getPointOnPath = function (t, e, i) {
                  i || (i = g(t));
                  for (var r = 0; e - i[r].length > 0 && r < i.length - 2; )
                    (e -= i[r].length), r++;
                  var n,
                    o = i[r],
                    s = e / o.length,
                    a = o.command,
                    l = t[r];
                  switch (a) {
                    case "M":
                      return { x: o.x, y: o.y, angle: 0 };
                    case "Z":
                    case "z":
                      return (
                        ((n = new T.Point(o.x, o.y).lerp(
                          new T.Point(o.destX, o.destY),
                          s
                        )).angle = Math.atan2(o.destY - o.y, o.destX - o.x)),
                        n
                      );
                    case "L":
                      return (
                        ((n = new T.Point(o.x, o.y).lerp(
                          new T.Point(l[1], l[2]),
                          s
                        )).angle = Math.atan2(l[2] - o.y, l[1] - o.x)),
                        n
                      );
                    case "C":
                    case "Q":
                      return p(o, e);
                  }
                }),
                (T.util.getBoundsOfArc = function (t, e, i, r, o, a, l, h, c) {
                  for (
                    var u,
                      f = 0,
                      d = 0,
                      p = [],
                      g = n(h - t, c - e, i, r, a, l, o),
                      v = 0,
                      m = g.length;
                    v < m;
                    v++
                  )
                    (u = s(
                      f,
                      d,
                      g[v][1],
                      g[v][2],
                      g[v][3],
                      g[v][4],
                      g[v][5],
                      g[v][6]
                    )),
                      p.push({ x: u[0].x + t, y: u[0].y + e }),
                      p.push({ x: u[1].x + t, y: u[1].y + e }),
                      (f = g[v][5]),
                      (d = g[v][6]);
                  return p;
                }),
                (T.util.drawArc = function (t, e, i, r) {
                  a(e, i, (r = r.slice(0).unshift("X"))).forEach(function (e) {
                    t.bezierCurveTo.apply(t, e.slice(1));
                  });
                });
            })(),
            (function () {
              var t = Array.prototype.slice;
              function e(t, e, i) {
                if (t && 0 !== t.length) {
                  var r = t.length - 1,
                    n = e ? t[r][e] : t[r];
                  if (e) for (; r--; ) i(t[r][e], n) && (n = t[r][e]);
                  else for (; r--; ) i(t[r], n) && (n = t[r]);
                  return n;
                }
              }
              T.util.array = {
                fill: function (t, e) {
                  for (var i = t.length; i--; ) t[i] = e;
                  return t;
                },
                invoke: function (e, i) {
                  for (
                    var r = t.call(arguments, 2), n = [], o = 0, s = e.length;
                    o < s;
                    o++
                  )
                    n[o] = r.length
                      ? e[o][i].apply(e[o], r)
                      : e[o][i].call(e[o]);
                  return n;
                },
                min: function (t, i) {
                  return e(t, i, function (t, e) {
                    return t < e;
                  });
                },
                max: function (t, i) {
                  return e(t, i, function (t, e) {
                    return t >= e;
                  });
                },
              };
            })(),
            (function () {
              function t(e, i, r) {
                if (r)
                  if (!T.isLikelyNode && i instanceof Element) e = i;
                  else if (i instanceof Array) {
                    e = [];
                    for (var n = 0, o = i.length; n < o; n++)
                      e[n] = t({}, i[n], r);
                  } else if (i && "object" == typeof i)
                    for (var s in i)
                      "canvas" === s || "group" === s
                        ? (e[s] = null)
                        : i.hasOwnProperty(s) && (e[s] = t({}, i[s], r));
                  else e = i;
                else for (var s in i) e[s] = i[s];
                return e;
              }
              (T.util.object = {
                extend: t,
                clone: function (e, i) {
                  return t({}, e, i);
                },
              }),
                T.util.object.extend(T.util, T.Observable);
            })(),
            (function () {
              function t(t, e) {
                var i = t.charCodeAt(e);
                if (isNaN(i)) return "";
                if (i < 55296 || i > 57343) return t.charAt(e);
                if (55296 <= i && i <= 56319) {
                  if (t.length <= e + 1)
                    throw "High surrogate without following low surrogate";
                  var r = t.charCodeAt(e + 1);
                  if (56320 > r || r > 57343)
                    throw "High surrogate without following low surrogate";
                  return t.charAt(e) + t.charAt(e + 1);
                }
                if (0 === e)
                  throw "Low surrogate without preceding high surrogate";
                var n = t.charCodeAt(e - 1);
                if (55296 > n || n > 56319)
                  throw "Low surrogate without preceding high surrogate";
                return !1;
              }
              T.util.string = {
                camelize: function (t) {
                  return t.replace(/-+(.)?/g, function (t, e) {
                    return e ? e.toUpperCase() : "";
                  });
                },
                capitalize: function (t, e) {
                  return (
                    t.charAt(0).toUpperCase() +
                    (e ? t.slice(1) : t.slice(1).toLowerCase())
                  );
                },
                escapeXml: function (t) {
                  return t
                    .replace(/&/g, "&amp;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&apos;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
                },
                graphemeSplit: function (e) {
                  var i,
                    r = 0,
                    n = [];
                  for (r = 0; r < e.length; r++)
                    !1 !== (i = t(e, r)) && n.push(i);
                  return n;
                },
              };
            })(),
            (function () {
              var t = Array.prototype.slice,
                e = function () {},
                i = (function () {
                  for (var t in { toString: 1 })
                    if ("toString" === t) return !1;
                  return !0;
                })(),
                r = function (t, e, r) {
                  for (var n in e)
                    n in t.prototype &&
                    "function" == typeof t.prototype[n] &&
                    (e[n] + "").indexOf("callSuper") > -1
                      ? (t.prototype[n] = (function (t) {
                          return function () {
                            var i = this.constructor.superclass;
                            this.constructor.superclass = r;
                            var n = e[t].apply(this, arguments);
                            if (
                              ((this.constructor.superclass = i),
                              "initialize" !== t)
                            )
                              return n;
                          };
                        })(n))
                      : (t.prototype[n] = e[n]),
                      i &&
                        (e.toString !== Object.prototype.toString &&
                          (t.prototype.toString = e.toString),
                        e.valueOf !== Object.prototype.valueOf &&
                          (t.prototype.valueOf = e.valueOf));
                };
              function n() {}
              function o(e) {
                for (var i = null, r = this; r.constructor.superclass; ) {
                  var n = r.constructor.superclass.prototype[e];
                  if (r[e] !== n) {
                    i = n;
                    break;
                  }
                  r = r.constructor.superclass.prototype;
                }
                return i
                  ? arguments.length > 1
                    ? i.apply(this, t.call(arguments, 1))
                    : i.call(this)
                  : console.log(
                      "tried to callSuper " +
                        e +
                        ", method not found in prototype chain",
                      this
                    );
              }
              T.util.createClass = function () {
                var i = null,
                  s = t.call(arguments, 0);
                function a() {
                  this.initialize.apply(this, arguments);
                }
                "function" == typeof s[0] && (i = s.shift()),
                  (a.superclass = i),
                  (a.subclasses = []),
                  i &&
                    ((n.prototype = i.prototype),
                    (a.prototype = new n()),
                    i.subclasses.push(a));
                for (var l = 0, h = s.length; l < h; l++) r(a, s[l], i);
                return (
                  a.prototype.initialize || (a.prototype.initialize = e),
                  (a.prototype.constructor = a),
                  (a.prototype.callSuper = o),
                  a
                );
              };
            })(),
            (h = !!T.document.createElement("div").attachEvent),
            (c = ["touchstart", "touchmove", "touchend"]),
            (T.util.addListener = function (t, e, i, r) {
              t && t.addEventListener(e, i, !h && r);
            }),
            (T.util.removeListener = function (t, e, i, r) {
              t && t.removeEventListener(e, i, !h && r);
            }),
            (T.util.getPointer = function (t) {
              var e = t.target,
                i = T.util.getScrollLeftTop(e),
                r = (function (t) {
                  var e = t.changedTouches;
                  return e && e[0] ? e[0] : t;
                })(t);
              return { x: r.clientX + i.left, y: r.clientY + i.top };
            }),
            (T.util.isTouchEvent = function (t) {
              return c.indexOf(t.type) > -1 || "touch" === t.pointerType;
            }),
            (u = T.document.createElement("div")),
            (f = "string" == typeof u.style.opacity),
            (d = "string" == typeof u.style.filter),
            (p = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/),
            (g = function (t) {
              return t;
            }),
            f
              ? (g = function (t, e) {
                  return (t.style.opacity = e), t;
                })
              : d &&
                (g = function (t, e) {
                  var i = t.style;
                  return (
                    t.currentStyle && !t.currentStyle.hasLayout && (i.zoom = 1),
                    p.test(i.filter)
                      ? ((e =
                          e >= 0.9999 ? "" : "alpha(opacity=" + 100 * e + ")"),
                        (i.filter = i.filter.replace(p, e)))
                      : (i.filter += " alpha(opacity=" + 100 * e + ")"),
                    t
                  );
                }),
            (T.util.setStyle = function (t, e) {
              var i = t.style;
              if (!i) return t;
              if ("string" == typeof e)
                return (
                  (t.style.cssText += ";" + e),
                  e.indexOf("opacity") > -1
                    ? g(t, e.match(/opacity:\s*(\d?\.?\d*)/)[1])
                    : t
                );
              for (var r in e)
                "opacity" === r
                  ? g(t, e[r])
                  : (i[
                      "float" === r || "cssFloat" === r
                        ? void 0 === i.styleFloat
                          ? "cssFloat"
                          : "styleFloat"
                        : r
                    ] = e[r]);
              return t;
            }),
            (function () {
              var t = Array.prototype.slice;
              var e,
                i,
                r,
                n,
                o = function (e) {
                  return t.call(e, 0);
                };
              try {
                e = o(T.document.childNodes) instanceof Array;
              } catch (t) {}
              function s(t, e) {
                var i = T.document.createElement(t);
                for (var r in e)
                  "class" === r
                    ? (i.className = e[r])
                    : "for" === r
                    ? (i.htmlFor = e[r])
                    : i.setAttribute(r, e[r]);
                return i;
              }
              function a(t) {
                for (
                  var e = 0,
                    i = 0,
                    r = T.document.documentElement,
                    n = T.document.body || { scrollLeft: 0, scrollTop: 0 };
                  t &&
                  (t.parentNode || t.host) &&
                  ((t = t.parentNode || t.host) === T.document
                    ? ((e = n.scrollLeft || r.scrollLeft || 0),
                      (i = n.scrollTop || r.scrollTop || 0))
                    : ((e += t.scrollLeft || 0), (i += t.scrollTop || 0)),
                  1 !== t.nodeType || "fixed" !== t.style.position);

                );
                return { left: e, top: i };
              }
              e ||
                (o = function (t) {
                  for (var e = new Array(t.length), i = t.length; i--; )
                    e[i] = t[i];
                  return e;
                }),
                (i =
                  T.document.defaultView &&
                  T.document.defaultView.getComputedStyle
                    ? function (t, e) {
                        var i = T.document.defaultView.getComputedStyle(
                          t,
                          null
                        );
                        return i ? i[e] : void 0;
                      }
                    : function (t, e) {
                        var i = t.style[e];
                        return (
                          !i && t.currentStyle && (i = t.currentStyle[e]), i
                        );
                      }),
                (r = T.document.documentElement.style),
                (n =
                  "userSelect" in r
                    ? "userSelect"
                    : "MozUserSelect" in r
                    ? "MozUserSelect"
                    : "WebkitUserSelect" in r
                    ? "WebkitUserSelect"
                    : "KhtmlUserSelect" in r
                    ? "KhtmlUserSelect"
                    : ""),
                (T.util.makeElementUnselectable = function (t) {
                  return (
                    void 0 !== t.onselectstart &&
                      (t.onselectstart = T.util.falseFunction),
                    n
                      ? (t.style[n] = "none")
                      : "string" == typeof t.unselectable &&
                        (t.unselectable = "on"),
                    t
                  );
                }),
                (T.util.makeElementSelectable = function (t) {
                  return (
                    void 0 !== t.onselectstart && (t.onselectstart = null),
                    n
                      ? (t.style[n] = "")
                      : "string" == typeof t.unselectable &&
                        (t.unselectable = ""),
                    t
                  );
                }),
                (T.util.setImageSmoothing = function (t, e) {
                  (t.imageSmoothingEnabled =
                    t.imageSmoothingEnabled ||
                    t.webkitImageSmoothingEnabled ||
                    t.mozImageSmoothingEnabled ||
                    t.msImageSmoothingEnabled ||
                    t.oImageSmoothingEnabled),
                    (t.imageSmoothingEnabled = e);
                }),
                (T.util.getById = function (t) {
                  return "string" == typeof t
                    ? T.document.getElementById(t)
                    : t;
                }),
                (T.util.toArray = o),
                (T.util.addClass = function (t, e) {
                  t &&
                    -1 === (" " + t.className + " ").indexOf(" " + e + " ") &&
                    (t.className += (t.className ? " " : "") + e);
                }),
                (T.util.makeElement = s),
                (T.util.wrapElement = function (t, e, i) {
                  return (
                    "string" == typeof e && (e = s(e, i)),
                    t.parentNode && t.parentNode.replaceChild(e, t),
                    e.appendChild(t),
                    e
                  );
                }),
                (T.util.getScrollLeftTop = a),
                (T.util.getElementOffset = function (t) {
                  var e,
                    r,
                    n = t && t.ownerDocument,
                    o = { left: 0, top: 0 },
                    s = { left: 0, top: 0 },
                    l = {
                      borderLeftWidth: "left",
                      borderTopWidth: "top",
                      paddingLeft: "left",
                      paddingTop: "top",
                    };
                  if (!n) return s;
                  for (var h in l) s[l[h]] += parseInt(i(t, h), 10) || 0;
                  return (
                    (e = n.documentElement),
                    void 0 !== t.getBoundingClientRect &&
                      (o = t.getBoundingClientRect()),
                    (r = a(t)),
                    {
                      left: o.left + r.left - (e.clientLeft || 0) + s.left,
                      top: o.top + r.top - (e.clientTop || 0) + s.top,
                    }
                  );
                }),
                (T.util.getNodeCanvas = function (t) {
                  var e = T.jsdomImplForWrapper(t);
                  return e._canvas || e._image;
                }),
                (T.util.cleanUpJsdomNode = function (t) {
                  if (T.isLikelyNode) {
                    var e = T.jsdomImplForWrapper(t);
                    e &&
                      ((e._image = null),
                      (e._canvas = null),
                      (e._currentSrc = null),
                      (e._attributes = null),
                      (e._classList = null));
                  }
                });
            })(),
            (function () {
              function t() {}
              T.util.request = function (e, i) {
                i || (i = {});
                var r = i.method ? i.method.toUpperCase() : "GET",
                  n = i.onComplete || function () {},
                  o = new T.window.XMLHttpRequest(),
                  s = i.body || i.parameters;
                return (
                  (o.onreadystatechange = function () {
                    4 === o.readyState && (n(o), (o.onreadystatechange = t));
                  }),
                  "GET" === r &&
                    ((s = null),
                    "string" == typeof i.parameters &&
                      (e = (function (t, e) {
                        return t + (/\?/.test(t) ? "&" : "?") + e;
                      })(e, i.parameters))),
                  o.open(r, e, !0),
                  ("POST" !== r && "PUT" !== r) ||
                    o.setRequestHeader(
                      "Content-Type",
                      "application/x-www-form-urlencoded"
                    ),
                  o.send(s),
                  o
                );
              };
            })(),
            (T.log = console.log),
            (T.warn = console.warn),
            (function () {
              function t() {
                return !1;
              }
              function e(t, e, i, r) {
                return -i * Math.cos((t / r) * (Math.PI / 2)) + i + e;
              }
              var i =
                  T.window.requestAnimationFrame ||
                  T.window.webkitRequestAnimationFrame ||
                  T.window.mozRequestAnimationFrame ||
                  T.window.oRequestAnimationFrame ||
                  T.window.msRequestAnimationFrame ||
                  function (t) {
                    return T.window.setTimeout(t, 1e3 / 60);
                  },
                r = T.window.cancelAnimationFrame || T.window.clearTimeout;
              function n() {
                return i.apply(T.window, arguments);
              }
              (T.util.animate = function (i) {
                n(function (r) {
                  i || (i = {});
                  var o,
                    s = r || +new Date(),
                    a = i.duration || 500,
                    l = s + a,
                    h = i.onChange || t,
                    c = i.abort || t,
                    u = i.onComplete || t,
                    f = i.easing || e,
                    d = "startValue" in i ? i.startValue : 0,
                    p = "endValue" in i ? i.endValue : 100,
                    g = i.byValue || p - d;
                  i.onStart && i.onStart(),
                    (function t(e) {
                      var i = (o = e || +new Date()) > l ? a : o - s,
                        r = i / a,
                        v = f(i, d, g, a),
                        m = Math.abs((v - d) / g);
                      if (!c())
                        return o > l
                          ? (h(p, 1, 1), void u(p, 1, 1))
                          : (h(v, m, r), void n(t));
                      u(p, 1, 1);
                    })(s);
                });
              }),
                (T.util.requestAnimFrame = n),
                (T.util.cancelAnimFrame = function () {
                  return r.apply(T.window, arguments);
                });
            })(),
            (function () {
              function t(t, e, i) {
                var r =
                  "rgba(" +
                  parseInt(t[0] + i * (e[0] - t[0]), 10) +
                  "," +
                  parseInt(t[1] + i * (e[1] - t[1]), 10) +
                  "," +
                  parseInt(t[2] + i * (e[2] - t[2]), 10);
                return (
                  (r +=
                    "," + (t && e ? parseFloat(t[3] + i * (e[3] - t[3])) : 1)),
                  (r += ")")
                );
              }
              T.util.animateColor = function (e, i, r, n) {
                var o = new T.Color(e).getSource(),
                  s = new T.Color(i).getSource(),
                  a = n.onComplete,
                  l = n.onChange;
                (n = n || {}),
                  T.util.animate(
                    T.util.object.extend(n, {
                      duration: r || 500,
                      startValue: o,
                      endValue: s,
                      byValue: s,
                      easing: function (e, i, r, o) {
                        return t(
                          i,
                          r,
                          n.colorEasing
                            ? n.colorEasing(e, o)
                            : 1 - Math.cos((e / o) * (Math.PI / 2))
                        );
                      },
                      onComplete: function (e, i, r) {
                        if (a) return a(t(s, s, 0), i, r);
                      },
                      onChange: function (e, i, r) {
                        if (l) {
                          if (Array.isArray(e)) return l(t(e, e, 0), i, r);
                          l(e, i, r);
                        }
                      },
                    })
                  );
              };
            })(),
            (function () {
              function t(t, e, i, r) {
                return (
                  t < Math.abs(e)
                    ? ((t = e), (r = i / 4))
                    : (r =
                        0 === e && 0 === t
                          ? (i / (2 * Math.PI)) * Math.asin(1)
                          : (i / (2 * Math.PI)) * Math.asin(e / t)),
                  { a: t, c: e, p: i, s: r }
                );
              }
              function e(t, e, i) {
                return (
                  t.a *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin(((e * i - t.s) * (2 * Math.PI)) / t.p)
                );
              }
              function i(t, e, i, n) {
                return i - r(n - t, 0, i, n) + e;
              }
              function r(t, e, i, r) {
                return (t /= r) < 1 / 2.75
                  ? i * (7.5625 * t * t) + e
                  : t < 2 / 2.75
                  ? i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
                  : t < 2.5 / 2.75
                  ? i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
                  : i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e;
              }
              T.util.ease = {
                easeInQuad: function (t, e, i, r) {
                  return i * (t /= r) * t + e;
                },
                easeOutQuad: function (t, e, i, r) {
                  return -i * (t /= r) * (t - 2) + e;
                },
                easeInOutQuad: function (t, e, i, r) {
                  return (t /= r / 2) < 1
                    ? (i / 2) * t * t + e
                    : (-i / 2) * (--t * (t - 2) - 1) + e;
                },
                easeInCubic: function (t, e, i, r) {
                  return i * (t /= r) * t * t + e;
                },
                easeOutCubic: function (t, e, i, r) {
                  return i * ((t = t / r - 1) * t * t + 1) + e;
                },
                easeInOutCubic: function (t, e, i, r) {
                  return (t /= r / 2) < 1
                    ? (i / 2) * t * t * t + e
                    : (i / 2) * ((t -= 2) * t * t + 2) + e;
                },
                easeInQuart: function (t, e, i, r) {
                  return i * (t /= r) * t * t * t + e;
                },
                easeOutQuart: function (t, e, i, r) {
                  return -i * ((t = t / r - 1) * t * t * t - 1) + e;
                },
                easeInOutQuart: function (t, e, i, r) {
                  return (t /= r / 2) < 1
                    ? (i / 2) * t * t * t * t + e
                    : (-i / 2) * ((t -= 2) * t * t * t - 2) + e;
                },
                easeInQuint: function (t, e, i, r) {
                  return i * (t /= r) * t * t * t * t + e;
                },
                easeOutQuint: function (t, e, i, r) {
                  return i * ((t = t / r - 1) * t * t * t * t + 1) + e;
                },
                easeInOutQuint: function (t, e, i, r) {
                  return (t /= r / 2) < 1
                    ? (i / 2) * t * t * t * t * t + e
                    : (i / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                },
                easeInSine: function (t, e, i, r) {
                  return -i * Math.cos((t / r) * (Math.PI / 2)) + i + e;
                },
                easeOutSine: function (t, e, i, r) {
                  return i * Math.sin((t / r) * (Math.PI / 2)) + e;
                },
                easeInOutSine: function (t, e, i, r) {
                  return (-i / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
                },
                easeInExpo: function (t, e, i, r) {
                  return 0 === t ? e : i * Math.pow(2, 10 * (t / r - 1)) + e;
                },
                easeOutExpo: function (t, e, i, r) {
                  return t === r
                    ? e + i
                    : i * (1 - Math.pow(2, (-10 * t) / r)) + e;
                },
                easeInOutExpo: function (t, e, i, r) {
                  return 0 === t
                    ? e
                    : t === r
                    ? e + i
                    : (t /= r / 2) < 1
                    ? (i / 2) * Math.pow(2, 10 * (t - 1)) + e
                    : (i / 2) * (2 - Math.pow(2, -10 * --t)) + e;
                },
                easeInCirc: function (t, e, i, r) {
                  return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
                },
                easeOutCirc: function (t, e, i, r) {
                  return i * Math.sqrt(1 - (t = t / r - 1) * t) + e;
                },
                easeInOutCirc: function (t, e, i, r) {
                  return (t /= r / 2) < 1
                    ? (-i / 2) * (Math.sqrt(1 - t * t) - 1) + e
                    : (i / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                },
                easeInElastic: function (i, r, n, o) {
                  var s = 0;
                  return 0 === i
                    ? r
                    : 1 === (i /= o)
                    ? r + n
                    : (s || (s = 0.3 * o), -e(t(n, n, s, 1.70158), i, o) + r);
                },
                easeOutElastic: function (e, i, r, n) {
                  var o = 0;
                  if (0 === e) return i;
                  if (1 === (e /= n)) return i + r;
                  o || (o = 0.3 * n);
                  var s = t(r, r, o, 1.70158);
                  return (
                    s.a *
                      Math.pow(2, -10 * e) *
                      Math.sin(((e * n - s.s) * (2 * Math.PI)) / s.p) +
                    s.c +
                    i
                  );
                },
                easeInOutElastic: function (i, r, n, o) {
                  var s = 0;
                  if (0 === i) return r;
                  if (2 === (i /= o / 2)) return r + n;
                  s || (s = o * (0.3 * 1.5));
                  var a = t(n, n, s, 1.70158);
                  return i < 1
                    ? -0.5 * e(a, i, o) + r
                    : a.a *
                        Math.pow(2, -10 * (i -= 1)) *
                        Math.sin(((i * o - a.s) * (2 * Math.PI)) / a.p) *
                        0.5 +
                        a.c +
                        r;
                },
                easeInBack: function (t, e, i, r, n) {
                  return (
                    void 0 === n && (n = 1.70158),
                    i * (t /= r) * t * ((n + 1) * t - n) + e
                  );
                },
                easeOutBack: function (t, e, i, r, n) {
                  return (
                    void 0 === n && (n = 1.70158),
                    i * ((t = t / r - 1) * t * ((n + 1) * t + n) + 1) + e
                  );
                },
                easeInOutBack: function (t, e, i, r, n) {
                  return (
                    void 0 === n && (n = 1.70158),
                    (t /= r / 2) < 1
                      ? (i / 2) * (t * t * ((1 + (n *= 1.525)) * t - n)) + e
                      : (i / 2) *
                          ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) +
                        e
                  );
                },
                easeInBounce: i,
                easeOutBounce: r,
                easeInOutBounce: function (t, e, n, o) {
                  return t < o / 2
                    ? 0.5 * i(2 * t, 0, n, o) + e
                    : 0.5 * r(2 * t - o, 0, n, o) + 0.5 * n + e;
                },
              };
            })(),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.object.extend,
                r = e.util.object.clone,
                n = e.util.toFixed,
                o = e.util.parseUnit,
                s = e.util.multiplyTransformMatrices,
                a = {
                  cx: "left",
                  x: "left",
                  r: "radius",
                  cy: "top",
                  y: "top",
                  display: "visible",
                  visibility: "visible",
                  transform: "transformMatrix",
                  "fill-opacity": "fillOpacity",
                  "fill-rule": "fillRule",
                  "font-family": "fontFamily",
                  "font-size": "fontSize",
                  "font-style": "fontStyle",
                  "font-weight": "fontWeight",
                  "letter-spacing": "charSpacing",
                  "paint-order": "paintFirst",
                  "stroke-dasharray": "strokeDashArray",
                  "stroke-dashoffset": "strokeDashOffset",
                  "stroke-linecap": "strokeLineCap",
                  "stroke-linejoin": "strokeLineJoin",
                  "stroke-miterlimit": "strokeMiterLimit",
                  "stroke-opacity": "strokeOpacity",
                  "stroke-width": "strokeWidth",
                  "text-decoration": "textDecoration",
                  "text-anchor": "textAnchor",
                  opacity: "opacity",
                  "clip-path": "clipPath",
                  "clip-rule": "clipRule",
                  "vector-effect": "strokeUniform",
                  "image-rendering": "imageSmoothing",
                },
                l = { stroke: "strokeOpacity", fill: "fillOpacity" },
                h = "font-size",
                c = "clip-path";
              function u(t) {
                return t in a ? a[t] : t;
              }
              function f(t, i, r, n) {
                var a,
                  l = "[object Array]" === Object.prototype.toString.call(i);
                if (("fill" !== t && "stroke" !== t) || "none" !== i) {
                  if ("strokeUniform" === t) return "non-scaling-stroke" === i;
                  if ("strokeDashArray" === t)
                    i =
                      "none" === i
                        ? null
                        : i.replace(/,/g, " ").split(/\s+/).map(parseFloat);
                  else if ("transformMatrix" === t)
                    i =
                      r && r.transformMatrix
                        ? s(r.transformMatrix, e.parseTransformAttribute(i))
                        : e.parseTransformAttribute(i);
                  else if ("visible" === t)
                    (i = "none" !== i && "hidden" !== i),
                      r && !1 === r.visible && (i = !1);
                  else if ("opacity" === t)
                    (i = parseFloat(i)),
                      r && void 0 !== r.opacity && (i *= r.opacity);
                  else if ("textAnchor" === t)
                    i =
                      "start" === i ? "left" : "end" === i ? "right" : "center";
                  else if ("charSpacing" === t) a = (o(i, n) / n) * 1e3;
                  else if ("paintFirst" === t) {
                    var h = i.indexOf("fill"),
                      c = i.indexOf("stroke");
                    i = "fill";
                    ((h > -1 && c > -1 && c < h) || (-1 === h && c > -1)) &&
                      (i = "stroke");
                  } else {
                    if ("href" === t || "xlink:href" === t || "font" === t)
                      return i;
                    if ("imageSmoothing" === t) return "optimizeQuality" === i;
                    a = l ? i.map(o) : o(i, n);
                  }
                } else i = "";
                return !l && isNaN(a) ? i : a;
              }
              function d(t) {
                return new RegExp("^(" + t.join("|") + ")\\b", "i");
              }
              function p(t, e) {
                var i,
                  r,
                  n,
                  o,
                  s = [];
                for (n = 0, o = e.length; n < o; n++)
                  (i = e[n]),
                    (r = t.getElementsByTagName(i)),
                    (s = s.concat(Array.prototype.slice.call(r)));
                return s;
              }
              function g(t, e) {
                var i,
                  r = !0;
                return (
                  (i = v(t, e.pop())) &&
                    e.length &&
                    (r = (function (t, e) {
                      var i,
                        r = !0;
                      for (
                        ;
                        t.parentNode && 1 === t.parentNode.nodeType && e.length;

                      )
                        r && (i = e.pop()), (r = v((t = t.parentNode), i));
                      return 0 === e.length;
                    })(t, e)),
                  i && r && 0 === e.length
                );
              }
              function v(t, e) {
                var i,
                  r,
                  n = t.nodeName,
                  o = t.getAttribute("class"),
                  s = t.getAttribute("id");
                if (
                  ((i = new RegExp("^" + n, "i")),
                  (e = e.replace(i, "")),
                  s &&
                    e.length &&
                    ((i = new RegExp("#" + s + "(?![a-zA-Z\\-]+)", "i")),
                    (e = e.replace(i, ""))),
                  o && e.length)
                )
                  for (r = (o = o.split(" ")).length; r--; )
                    (i = new RegExp("\\." + o[r] + "(?![a-zA-Z\\-]+)", "i")),
                      (e = e.replace(i, ""));
                return 0 === e.length;
              }
              function m(t, e) {
                var i;
                if ((t.getElementById && (i = t.getElementById(e)), i))
                  return i;
                var r,
                  n,
                  o,
                  s = t.getElementsByTagName("*");
                for (n = 0, o = s.length; n < o; n++)
                  if (e === (r = s[n]).getAttribute("id")) return r;
              }
              (e.svgValidTagNamesRegEx = d([
                "path",
                "circle",
                "polygon",
                "polyline",
                "ellipse",
                "rect",
                "line",
                "image",
                "text",
              ])),
                (e.svgViewBoxElementsRegEx = d([
                  "symbol",
                  "image",
                  "marker",
                  "pattern",
                  "view",
                  "svg",
                ])),
                (e.svgInvalidAncestorsRegEx = d([
                  "pattern",
                  "defs",
                  "symbol",
                  "metadata",
                  "clipPath",
                  "mask",
                  "desc",
                ])),
                (e.svgValidParentsRegEx = d([
                  "symbol",
                  "g",
                  "a",
                  "svg",
                  "clipPath",
                  "defs",
                ])),
                (e.cssRules = {}),
                (e.gradientDefs = {}),
                (e.clipPaths = {}),
                (e.parseTransformAttribute = (function () {
                  function t(t, i, r) {
                    t[r] = Math.tan(e.util.degreesToRadians(i[0]));
                  }
                  var i = e.iMatrix,
                    r = e.reNum,
                    n = e.commaWsp,
                    o =
                      "(?:" +
                      ("(?:(matrix)\\s*\\(\\s*(" +
                        r +
                        ")" +
                        n +
                        "(" +
                        r +
                        ")" +
                        n +
                        "(" +
                        r +
                        ")" +
                        n +
                        "(" +
                        r +
                        ")" +
                        n +
                        "(" +
                        r +
                        ")" +
                        n +
                        "(" +
                        r +
                        ")\\s*\\))") +
                      "|" +
                      ("(?:(translate)\\s*\\(\\s*(" +
                        r +
                        ")(?:" +
                        n +
                        "(" +
                        r +
                        "))?\\s*\\))") +
                      "|" +
                      ("(?:(scale)\\s*\\(\\s*(" +
                        r +
                        ")(?:" +
                        n +
                        "(" +
                        r +
                        "))?\\s*\\))") +
                      "|" +
                      ("(?:(rotate)\\s*\\(\\s*(" +
                        r +
                        ")(?:" +
                        n +
                        "(" +
                        r +
                        ")" +
                        n +
                        "(" +
                        r +
                        "))?\\s*\\))") +
                      "|" +
                      ("(?:(skewX)\\s*\\(\\s*(" + r + ")\\s*\\))") +
                      "|" +
                      ("(?:(skewY)\\s*\\(\\s*(" + r + ")\\s*\\))") +
                      ")",
                    s = new RegExp(
                      "^\\s*(?:" +
                        ("(?:" + o + "(?:" + n + "*" + o + ")*)") +
                        "?)\\s*$"
                    ),
                    a = new RegExp(o, "g");
                  return function (r) {
                    var n = i.concat(),
                      l = [];
                    if (!r || (r && !s.test(r))) return n;
                    r.replace(a, function (r) {
                      var s = new RegExp(o).exec(r).filter(function (t) {
                          return !!t;
                        }),
                        a = s[1],
                        h = s.slice(2).map(parseFloat);
                      switch (a) {
                        case "translate":
                          !(function (t, e) {
                            (t[4] = e[0]), 2 === e.length && (t[5] = e[1]);
                          })(n, h);
                          break;
                        case "rotate":
                          (h[0] = e.util.degreesToRadians(h[0])),
                            (function (t, i) {
                              var r = e.util.cos(i[0]),
                                n = e.util.sin(i[0]),
                                o = 0,
                                s = 0;
                              3 === i.length && ((o = i[1]), (s = i[2])),
                                (t[0] = r),
                                (t[1] = n),
                                (t[2] = -n),
                                (t[3] = r),
                                (t[4] = o - (r * o - n * s)),
                                (t[5] = s - (n * o + r * s));
                            })(n, h);
                          break;
                        case "scale":
                          !(function (t, e) {
                            var i = e[0],
                              r = 2 === e.length ? e[1] : e[0];
                            (t[0] = i), (t[3] = r);
                          })(n, h);
                          break;
                        case "skewX":
                          t(n, h, 2);
                          break;
                        case "skewY":
                          t(n, h, 1);
                          break;
                        case "matrix":
                          n = h;
                      }
                      l.push(n.concat()), (n = i.concat());
                    });
                    for (var h = l[0]; l.length > 1; )
                      l.shift(),
                        (h = e.util.multiplyTransformMatrices(h, l[0]));
                    return h;
                  };
                })());
              var y = new RegExp(
                "^\\s*(" +
                  e.reNum +
                  "+)\\s*,?\\s*(" +
                  e.reNum +
                  "+)\\s*,?\\s*(" +
                  e.reNum +
                  "+)\\s*,?\\s*(" +
                  e.reNum +
                  "+)\\s*$"
              );
              function _(t) {
                if (!e.svgViewBoxElementsRegEx.test(t.nodeName)) return {};
                var i,
                  r,
                  n,
                  s,
                  a,
                  l,
                  h = t.getAttribute("viewBox"),
                  c = 1,
                  u = 1,
                  f = t.getAttribute("width"),
                  d = t.getAttribute("height"),
                  p = t.getAttribute("x") || 0,
                  g = t.getAttribute("y") || 0,
                  v = t.getAttribute("preserveAspectRatio") || "",
                  m = !h || !(h = h.match(y)),
                  _ = !f || !d || "100%" === f || "100%" === d,
                  b = m && _,
                  x = {},
                  C = "",
                  w = 0,
                  S = 0;
                if (
                  ((x.width = 0),
                  (x.height = 0),
                  (x.toBeParsed = b),
                  m &&
                    (p || g) &&
                    t.parentNode &&
                    "#document" !== t.parentNode.nodeName &&
                    ((C = " translate(" + o(p) + " " + o(g) + ") "),
                    (a = (t.getAttribute("transform") || "") + C),
                    t.setAttribute("transform", a),
                    t.removeAttribute("x"),
                    t.removeAttribute("y")),
                  b)
                )
                  return x;
                if (m) return (x.width = o(f)), (x.height = o(d)), x;
                if (
                  ((i = -parseFloat(h[1])),
                  (r = -parseFloat(h[2])),
                  (n = parseFloat(h[3])),
                  (s = parseFloat(h[4])),
                  (x.minX = i),
                  (x.minY = r),
                  (x.viewBoxWidth = n),
                  (x.viewBoxHeight = s),
                  _
                    ? ((x.width = n), (x.height = s))
                    : ((x.width = o(f)),
                      (x.height = o(d)),
                      (c = x.width / n),
                      (u = x.height / s)),
                  "none" !==
                    (v = e.util.parsePreserveAspectRatioAttribute(v)).alignX &&
                    ("meet" === v.meetOrSlice && (u = c = c > u ? u : c),
                    "slice" === v.meetOrSlice && (u = c = c > u ? c : u),
                    (w = x.width - n * c),
                    (S = x.height - s * c),
                    "Mid" === v.alignX && (w /= 2),
                    "Mid" === v.alignY && (S /= 2),
                    "Min" === v.alignX && (w = 0),
                    "Min" === v.alignY && (S = 0)),
                  1 === c &&
                    1 === u &&
                    0 === i &&
                    0 === r &&
                    0 === p &&
                    0 === g)
                )
                  return x;
                if (
                  ((p || g) &&
                    "#document" !== t.parentNode.nodeName &&
                    (C = " translate(" + o(p) + " " + o(g) + ") "),
                  (a =
                    C +
                    " matrix(" +
                    c +
                    " 0 0 " +
                    u +
                    " " +
                    (i * c + w) +
                    " " +
                    (r * u + S) +
                    ") "),
                  "svg" === t.nodeName)
                ) {
                  for (
                    l = t.ownerDocument.createElementNS(e.svgNS, "g");
                    t.firstChild;

                  )
                    l.appendChild(t.firstChild);
                  t.appendChild(l);
                } else
                  (l = t).removeAttribute("x"),
                    l.removeAttribute("y"),
                    (a = l.getAttribute("transform") + a);
                return l.setAttribute("transform", a), x;
              }
              function b(t, e) {
                var i = "xlink:href",
                  r = m(t, e.getAttribute(i).substr(1));
                if (
                  (r && r.getAttribute(i) && b(t, r),
                  [
                    "gradientTransform",
                    "x1",
                    "x2",
                    "y1",
                    "y2",
                    "gradientUnits",
                    "cx",
                    "cy",
                    "r",
                    "fx",
                    "fy",
                  ].forEach(function (t) {
                    r &&
                      !e.hasAttribute(t) &&
                      r.hasAttribute(t) &&
                      e.setAttribute(t, r.getAttribute(t));
                  }),
                  !e.children.length)
                )
                  for (var n = r.cloneNode(!0); n.firstChild; )
                    e.appendChild(n.firstChild);
                e.removeAttribute(i);
              }
              e.parseSVGDocument = function (t, i, n, o) {
                if (t) {
                  !(function (t) {
                    for (
                      var i = p(t, ["use", "svg:use"]), r = 0;
                      i.length && r < i.length;

                    ) {
                      var n = i[r],
                        o =
                          n.getAttribute("xlink:href") ||
                          n.getAttribute("href");
                      if (null === o) return;
                      var s,
                        a,
                        l,
                        h,
                        c = o.substr(1),
                        u = n.getAttribute("x") || 0,
                        f = n.getAttribute("y") || 0,
                        d = m(t, c).cloneNode(!0),
                        g =
                          (d.getAttribute("transform") || "") +
                          " translate(" +
                          u +
                          ", " +
                          f +
                          ")",
                        v = i.length,
                        y = e.svgNS;
                      if ((_(d), /^svg$/i.test(d.nodeName))) {
                        var b = d.ownerDocument.createElementNS(y, "g");
                        for (a = 0, h = (l = d.attributes).length; a < h; a++)
                          (s = l.item(a)),
                            b.setAttributeNS(y, s.nodeName, s.nodeValue);
                        for (; d.firstChild; ) b.appendChild(d.firstChild);
                        d = b;
                      }
                      for (a = 0, h = (l = n.attributes).length; a < h; a++)
                        "x" !== (s = l.item(a)).nodeName &&
                          "y" !== s.nodeName &&
                          "xlink:href" !== s.nodeName &&
                          "href" !== s.nodeName &&
                          ("transform" === s.nodeName
                            ? (g = s.nodeValue + " " + g)
                            : d.setAttribute(s.nodeName, s.nodeValue));
                      d.setAttribute("transform", g),
                        d.setAttribute("instantiated_by_use", "1"),
                        d.removeAttribute("id"),
                        n.parentNode.replaceChild(d, n),
                        i.length === v && r++;
                    }
                  })(t);
                  var s,
                    a,
                    l = e.Object.__uid++,
                    h = _(t),
                    c = e.util.toArray(t.getElementsByTagName("*"));
                  if (
                    ((h.crossOrigin = o && o.crossOrigin),
                    (h.svgUid = l),
                    0 === c.length && e.isLikelyNode)
                  ) {
                    var u = [];
                    for (
                      s = 0,
                        a = (c = t.selectNodes('//*[name(.)!="svg"]')).length;
                      s < a;
                      s++
                    )
                      u[s] = c[s];
                    c = u;
                  }
                  var f = c.filter(function (t) {
                    return (
                      _(t),
                      e.svgValidTagNamesRegEx.test(
                        t.nodeName.replace("svg:", "")
                      ) &&
                        !(function (t, e) {
                          for (; t && (t = t.parentNode); )
                            if (
                              t.nodeName &&
                              e.test(t.nodeName.replace("svg:", "")) &&
                              !t.getAttribute("instantiated_by_use")
                            )
                              return !0;
                          return !1;
                        })(t, e.svgInvalidAncestorsRegEx)
                    );
                  });
                  if (!f || (f && !f.length)) i && i([], {});
                  else {
                    var d = {};
                    c
                      .filter(function (t) {
                        return "clipPath" === t.nodeName.replace("svg:", "");
                      })
                      .forEach(function (t) {
                        var i = t.getAttribute("id");
                        d[i] = e.util
                          .toArray(t.getElementsByTagName("*"))
                          .filter(function (t) {
                            return e.svgValidTagNamesRegEx.test(
                              t.nodeName.replace("svg:", "")
                            );
                          });
                      }),
                      (e.gradientDefs[l] = e.getGradientDefs(t)),
                      (e.cssRules[l] = e.getCSSRules(t)),
                      (e.clipPaths[l] = d),
                      e.parseElements(
                        f,
                        function (t, r) {
                          i &&
                            (i(t, h, r, c),
                            delete e.gradientDefs[l],
                            delete e.cssRules[l],
                            delete e.clipPaths[l]);
                        },
                        r(h),
                        n,
                        o
                      );
                  }
                }
              };
              var x = new RegExp(
                "(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" +
                  e.reNum +
                  "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" +
                  e.reNum +
                  "))?\\s+(.*)"
              );
              i(e, {
                parseFontDeclaration: function (t, e) {
                  var i = t.match(x);
                  if (i) {
                    var r = i[1],
                      n = i[3],
                      s = i[4],
                      a = i[5],
                      l = i[6];
                    r && (e.fontStyle = r),
                      n &&
                        (e.fontWeight = isNaN(parseFloat(n))
                          ? n
                          : parseFloat(n)),
                      s && (e.fontSize = o(s)),
                      l && (e.fontFamily = l),
                      a && (e.lineHeight = "normal" === a ? 1 : a);
                  }
                },
                getGradientDefs: function (t) {
                  var e,
                    i = p(t, [
                      "linearGradient",
                      "radialGradient",
                      "svg:linearGradient",
                      "svg:radialGradient",
                    ]),
                    r = 0,
                    n = {};
                  for (r = i.length; r--; )
                    (e = i[r]).getAttribute("xlink:href") && b(t, e),
                      (n[e.getAttribute("id")] = e);
                  return n;
                },
                parseAttributes: function (t, r, s) {
                  if (t) {
                    var a,
                      d,
                      p,
                      v = {};
                    void 0 === s && (s = t.getAttribute("svgUid")),
                      t.parentNode &&
                        e.svgValidParentsRegEx.test(t.parentNode.nodeName) &&
                        (v = e.parseAttributes(t.parentNode, r, s));
                    var m = r.reduce(function (e, i) {
                        return (a = t.getAttribute(i)) && (e[i] = a), e;
                      }, {}),
                      y = i(
                        (function (t, i) {
                          var r = {};
                          for (var n in e.cssRules[i])
                            if (g(t, n.split(" ")))
                              for (var o in e.cssRules[i][n])
                                r[o] = e.cssRules[i][n][o];
                          return r;
                        })(t, s),
                        e.parseStyleAttribute(t)
                      );
                    (m = i(m, y)),
                      y[c] && t.setAttribute(c, y[c]),
                      (d = p = v.fontSize || e.Text.DEFAULT_SVG_FONT_SIZE),
                      m[h] && (m[h] = d = o(m[h], p));
                    var _,
                      b,
                      x = {};
                    for (var C in m)
                      (b = f((_ = u(C)), m[C], v, d)), (x[_] = b);
                    x && x.font && e.parseFontDeclaration(x.font, x);
                    var w = i(v, x);
                    return e.svgValidParentsRegEx.test(t.nodeName)
                      ? w
                      : (function (t) {
                          for (var i in l)
                            if (void 0 !== t[l[i]] && "" !== t[i]) {
                              if (void 0 === t[i]) {
                                if (!e.Object.prototype[i]) continue;
                                t[i] = e.Object.prototype[i];
                              }
                              if (0 !== t[i].indexOf("url(")) {
                                var r = new e.Color(t[i]);
                                t[i] = r
                                  .setAlpha(n(r.getAlpha() * t[l[i]], 2))
                                  .toRgba();
                              }
                            }
                          return t;
                        })(w);
                  }
                },
                parseElements: function (t, i, r, n, o) {
                  new e.ElementsParser(t, i, r, n, o).parse();
                },
                parseStyleAttribute: function (t) {
                  var e = {},
                    i = t.getAttribute("style");
                  return i
                    ? ("string" == typeof i
                        ? (function (t, e) {
                            var i, r;
                            t.replace(/;\s*$/, "")
                              .split(";")
                              .forEach(function (t) {
                                var n = t.split(":");
                                (i = n[0].trim().toLowerCase()),
                                  (r = n[1].trim()),
                                  (e[i] = r);
                              });
                          })(i, e)
                        : (function (t, e) {
                            var i, r;
                            for (var n in t)
                              void 0 !== t[n] &&
                                ((i = n.toLowerCase()), (r = t[n]), (e[i] = r));
                          })(i, e),
                      e)
                    : e;
                },
                parsePointsAttribute: function (t) {
                  if (!t) return null;
                  var e,
                    i,
                    r = [];
                  for (
                    e = 0,
                      i = (t = (t = t.replace(/,/g, " ").trim()).split(/\s+/))
                        .length;
                    e < i;
                    e += 2
                  )
                    r.push({ x: parseFloat(t[e]), y: parseFloat(t[e + 1]) });
                  return r;
                },
                getCSSRules: function (t) {
                  var i,
                    r,
                    n = t.getElementsByTagName("style"),
                    o = {};
                  for (i = 0, r = n.length; i < r; i++) {
                    var s = n[i].textContent;
                    "" !== (s = s.replace(/\/\*[\s\S]*?\*\//g, "")).trim() &&
                      s
                        .match(/[^{]*\{[\s\S]*?\}/g)
                        .map(function (t) {
                          return t.trim();
                        })
                        .forEach(function (t) {
                          var n = t.match(/([\s\S]*?)\s*\{([^}]*)\}/),
                            s = {},
                            a = n[2]
                              .trim()
                              .replace(/;$/, "")
                              .split(/\s*;\s*/);
                          for (i = 0, r = a.length; i < r; i++) {
                            var l = a[i].split(/\s*:\s*/),
                              h = l[0],
                              c = l[1];
                            s[h] = c;
                          }
                          (t = n[1]).split(",").forEach(function (t) {
                            "" !== (t = t.replace(/^svg/i, "").trim()) &&
                              (o[t]
                                ? e.util.object.extend(o[t], s)
                                : (o[t] = e.util.object.clone(s)));
                          });
                        });
                  }
                  return o;
                },
                loadSVGFromURL: function (t, i, r, n) {
                  (t = t.replace(/^\n\s*/, "").trim()),
                    new e.util.request(t, {
                      method: "get",
                      onComplete: function (t) {
                        var o = t.responseXML;
                        if (!o || !o.documentElement) return i && i(null), !1;
                        e.parseSVGDocument(
                          o.documentElement,
                          function (t, e, r, n) {
                            i && i(t, e, r, n);
                          },
                          r,
                          n
                        );
                      },
                    });
                },
                loadSVGFromString: function (t, i, r, n) {
                  var o = new e.window.DOMParser().parseFromString(
                    t.trim(),
                    "text/xml"
                  );
                  e.parseSVGDocument(
                    o.documentElement,
                    function (t, e, r, n) {
                      i(t, e, r, n);
                    },
                    r,
                    n
                  );
                },
              });
            })(void 0 !== i ? i : this),
            (T.ElementsParser = function (t, e, i, r, n, o) {
              (this.elements = t),
                (this.callback = e),
                (this.options = i),
                (this.reviver = r),
                (this.svgUid = (i && i.svgUid) || 0),
                (this.parsingOptions = n),
                (this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g),
                (this.doc = o);
            }),
            ((v = T.ElementsParser.prototype).parse = function () {
              (this.instances = new Array(this.elements.length)),
                (this.numElements = this.elements.length),
                this.createObjects();
            }),
            (v.createObjects = function () {
              var t = this;
              this.elements.forEach(function (e, i) {
                e.setAttribute("svgUid", t.svgUid), t.createObject(e, i);
              });
            }),
            (v.findTag = function (t) {
              return T[T.util.string.capitalize(t.tagName.replace("svg:", ""))];
            }),
            (v.createObject = function (t, e) {
              var i = this.findTag(t);
              if (i && i.fromElement)
                try {
                  i.fromElement(t, this.createCallback(e, t), this.options);
                } catch (t) {
                  T.log(t);
                }
              else this.checkIfDone();
            }),
            (v.createCallback = function (t, e) {
              var i = this;
              return function (r) {
                var n;
                i.resolveGradient(r, e, "fill"),
                  i.resolveGradient(r, e, "stroke"),
                  r instanceof T.Image &&
                    r._originalElement &&
                    (n = r.parsePreserveAspectRatioAttribute(e)),
                  r._removeTransformMatrix(n),
                  i.resolveClipPath(r, e),
                  i.reviver && i.reviver(e, r),
                  (i.instances[t] = r),
                  i.checkIfDone();
              };
            }),
            (v.extractPropertyDefinition = function (t, e, i) {
              var r = t[e],
                n = this.regexUrl;
              if (n.test(r)) {
                n.lastIndex = 0;
                var o = n.exec(r)[1];
                return (n.lastIndex = 0), T[i][this.svgUid][o];
              }
            }),
            (v.resolveGradient = function (t, e, i) {
              var r = this.extractPropertyDefinition(t, i, "gradientDefs");
              if (r) {
                var n = e.getAttribute(i + "-opacity"),
                  o = T.Gradient.fromElement(r, t, n, this.options);
                t.set(i, o);
              }
            }),
            (v.createClipPathCallback = function (t, e) {
              return function (t) {
                t._removeTransformMatrix(),
                  (t.fillRule = t.clipRule),
                  e.push(t);
              };
            }),
            (v.resolveClipPath = function (t, e) {
              var i,
                r,
                n,
                o,
                s = this.extractPropertyDefinition(t, "clipPath", "clipPaths");
              if (s) {
                (n = []), (r = T.util.invertTransform(t.calcTransformMatrix()));
                for (
                  var a = s[0].parentNode, l = e;
                  l.parentNode && l.getAttribute("clip-path") !== t.clipPath;

                )
                  l = l.parentNode;
                l.parentNode.appendChild(a);
                for (var h = 0; h < s.length; h++)
                  (i = s[h]),
                    this.findTag(i).fromElement(
                      i,
                      this.createClipPathCallback(t, n),
                      this.options
                    );
                (s = 1 === n.length ? n[0] : new T.Group(n)),
                  (o = T.util.multiplyTransformMatrices(
                    r,
                    s.calcTransformMatrix()
                  )),
                  s.clipPath && this.resolveClipPath(s, l);
                var c = T.util.qrDecompose(o);
                (s.flipX = !1),
                  (s.flipY = !1),
                  s.set("scaleX", c.scaleX),
                  s.set("scaleY", c.scaleY),
                  (s.angle = c.angle),
                  (s.skewX = c.skewX),
                  (s.skewY = 0),
                  s.setPositionByOrigin(
                    { x: c.translateX, y: c.translateY },
                    "center",
                    "center"
                  ),
                  (t.clipPath = s);
              } else delete t.clipPath;
            }),
            (v.checkIfDone = function () {
              0 == --this.numElements &&
                ((this.instances = this.instances.filter(function (t) {
                  return null != t;
                })),
                this.callback(this.instances, this.elements));
            }),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {});
              function i(t, e) {
                (this.x = t), (this.y = e);
              }
              e.Point
                ? e.warn("fabric.Point is already defined")
                : ((e.Point = i),
                  (i.prototype = {
                    type: "point",
                    constructor: i,
                    add: function (t) {
                      return new i(this.x + t.x, this.y + t.y);
                    },
                    addEquals: function (t) {
                      return (this.x += t.x), (this.y += t.y), this;
                    },
                    scalarAdd: function (t) {
                      return new i(this.x + t, this.y + t);
                    },
                    scalarAddEquals: function (t) {
                      return (this.x += t), (this.y += t), this;
                    },
                    subtract: function (t) {
                      return new i(this.x - t.x, this.y - t.y);
                    },
                    subtractEquals: function (t) {
                      return (this.x -= t.x), (this.y -= t.y), this;
                    },
                    scalarSubtract: function (t) {
                      return new i(this.x - t, this.y - t);
                    },
                    scalarSubtractEquals: function (t) {
                      return (this.x -= t), (this.y -= t), this;
                    },
                    multiply: function (t) {
                      return new i(this.x * t, this.y * t);
                    },
                    multiplyEquals: function (t) {
                      return (this.x *= t), (this.y *= t), this;
                    },
                    divide: function (t) {
                      return new i(this.x / t, this.y / t);
                    },
                    divideEquals: function (t) {
                      return (this.x /= t), (this.y /= t), this;
                    },
                    eq: function (t) {
                      return this.x === t.x && this.y === t.y;
                    },
                    lt: function (t) {
                      return this.x < t.x && this.y < t.y;
                    },
                    lte: function (t) {
                      return this.x <= t.x && this.y <= t.y;
                    },
                    gt: function (t) {
                      return this.x > t.x && this.y > t.y;
                    },
                    gte: function (t) {
                      return this.x >= t.x && this.y >= t.y;
                    },
                    lerp: function (t, e) {
                      return (
                        void 0 === e && (e = 0.5),
                        (e = Math.max(Math.min(1, e), 0)),
                        new i(
                          this.x + (t.x - this.x) * e,
                          this.y + (t.y - this.y) * e
                        )
                      );
                    },
                    distanceFrom: function (t) {
                      var e = this.x - t.x,
                        i = this.y - t.y;
                      return Math.sqrt(e * e + i * i);
                    },
                    midPointFrom: function (t) {
                      return this.lerp(t);
                    },
                    min: function (t) {
                      return new i(
                        Math.min(this.x, t.x),
                        Math.min(this.y, t.y)
                      );
                    },
                    max: function (t) {
                      return new i(
                        Math.max(this.x, t.x),
                        Math.max(this.y, t.y)
                      );
                    },
                    toString: function () {
                      return this.x + "," + this.y;
                    },
                    setXY: function (t, e) {
                      return (this.x = t), (this.y = e), this;
                    },
                    setX: function (t) {
                      return (this.x = t), this;
                    },
                    setY: function (t) {
                      return (this.y = t), this;
                    },
                    setFromPoint: function (t) {
                      return (this.x = t.x), (this.y = t.y), this;
                    },
                    swap: function (t) {
                      var e = this.x,
                        i = this.y;
                      (this.x = t.x), (this.y = t.y), (t.x = e), (t.y = i);
                    },
                    clone: function () {
                      return new i(this.x, this.y);
                    },
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {});
              function i(t) {
                (this.status = t), (this.points = []);
              }
              e.Intersection
                ? e.warn("fabric.Intersection is already defined")
                : ((e.Intersection = i),
                  (e.Intersection.prototype = {
                    constructor: i,
                    appendPoint: function (t) {
                      return this.points.push(t), this;
                    },
                    appendPoints: function (t) {
                      return (this.points = this.points.concat(t)), this;
                    },
                  }),
                  (e.Intersection.intersectLineLine = function (t, r, n, o) {
                    var s,
                      a = (o.x - n.x) * (t.y - n.y) - (o.y - n.y) * (t.x - n.x),
                      l = (r.x - t.x) * (t.y - n.y) - (r.y - t.y) * (t.x - n.x),
                      h = (o.y - n.y) * (r.x - t.x) - (o.x - n.x) * (r.y - t.y);
                    if (0 !== h) {
                      var c = a / h,
                        u = l / h;
                      0 <= c && c <= 1 && 0 <= u && u <= 1
                        ? (s = new i("Intersection")).appendPoint(
                            new e.Point(
                              t.x + c * (r.x - t.x),
                              t.y + c * (r.y - t.y)
                            )
                          )
                        : (s = new i());
                    } else
                      s = new i(0 === a || 0 === l ? "Coincident" : "Parallel");
                    return s;
                  }),
                  (e.Intersection.intersectLinePolygon = function (t, e, r) {
                    var n,
                      o,
                      s,
                      a,
                      l = new i(),
                      h = r.length;
                    for (a = 0; a < h; a++)
                      (n = r[a]),
                        (o = r[(a + 1) % h]),
                        (s = i.intersectLineLine(t, e, n, o)),
                        l.appendPoints(s.points);
                    return (
                      l.points.length > 0 && (l.status = "Intersection"), l
                    );
                  }),
                  (e.Intersection.intersectPolygonPolygon = function (t, e) {
                    var r,
                      n = new i(),
                      o = t.length;
                    for (r = 0; r < o; r++) {
                      var s = t[r],
                        a = t[(r + 1) % o],
                        l = i.intersectLinePolygon(s, a, e);
                      n.appendPoints(l.points);
                    }
                    return (
                      n.points.length > 0 && (n.status = "Intersection"), n
                    );
                  }),
                  (e.Intersection.intersectPolygonRectangle = function (
                    t,
                    r,
                    n
                  ) {
                    var o = r.min(n),
                      s = r.max(n),
                      a = new e.Point(s.x, o.y),
                      l = new e.Point(o.x, s.y),
                      h = i.intersectLinePolygon(o, a, t),
                      c = i.intersectLinePolygon(a, s, t),
                      u = i.intersectLinePolygon(s, l, t),
                      f = i.intersectLinePolygon(l, o, t),
                      d = new i();
                    return (
                      d.appendPoints(h.points),
                      d.appendPoints(c.points),
                      d.appendPoints(u.points),
                      d.appendPoints(f.points),
                      d.points.length > 0 && (d.status = "Intersection"),
                      d
                    );
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {});
              function i(t) {
                t ? this._tryParsingColor(t) : this.setSource([0, 0, 0, 1]);
              }
              function r(t, e, i) {
                return (
                  i < 0 && (i += 1),
                  i > 1 && (i -= 1),
                  i < 1 / 6
                    ? t + 6 * (e - t) * i
                    : i < 0.5
                    ? e
                    : i < 2 / 3
                    ? t + (e - t) * (2 / 3 - i) * 6
                    : t
                );
              }
              e.Color
                ? e.warn("fabric.Color is already defined.")
                : ((e.Color = i),
                  (e.Color.prototype = {
                    _tryParsingColor: function (t) {
                      var e;
                      t in i.colorNameMap && (t = i.colorNameMap[t]),
                        "transparent" === t && (e = [255, 255, 255, 0]),
                        e || (e = i.sourceFromHex(t)),
                        e || (e = i.sourceFromRgb(t)),
                        e || (e = i.sourceFromHsl(t)),
                        e || (e = [0, 0, 0, 1]),
                        e && this.setSource(e);
                    },
                    _rgbToHsl: function (t, i, r) {
                      (t /= 255), (i /= 255), (r /= 255);
                      var n,
                        o,
                        s,
                        a = e.util.array.max([t, i, r]),
                        l = e.util.array.min([t, i, r]);
                      if (((s = (a + l) / 2), a === l)) n = o = 0;
                      else {
                        var h = a - l;
                        switch (
                          ((o = s > 0.5 ? h / (2 - a - l) : h / (a + l)), a)
                        ) {
                          case t:
                            n = (i - r) / h + (i < r ? 6 : 0);
                            break;
                          case i:
                            n = (r - t) / h + 2;
                            break;
                          case r:
                            n = (t - i) / h + 4;
                        }
                        n /= 6;
                      }
                      return [
                        Math.round(360 * n),
                        Math.round(100 * o),
                        Math.round(100 * s),
                      ];
                    },
                    getSource: function () {
                      return this._source;
                    },
                    setSource: function (t) {
                      this._source = t;
                    },
                    toRgb: function () {
                      var t = this.getSource();
                      return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")";
                    },
                    toRgba: function () {
                      var t = this.getSource();
                      return (
                        "rgba(" +
                        t[0] +
                        "," +
                        t[1] +
                        "," +
                        t[2] +
                        "," +
                        t[3] +
                        ")"
                      );
                    },
                    toHsl: function () {
                      var t = this.getSource(),
                        e = this._rgbToHsl(t[0], t[1], t[2]);
                      return "hsl(" + e[0] + "," + e[1] + "%," + e[2] + "%)";
                    },
                    toHsla: function () {
                      var t = this.getSource(),
                        e = this._rgbToHsl(t[0], t[1], t[2]);
                      return (
                        "hsla(" +
                        e[0] +
                        "," +
                        e[1] +
                        "%," +
                        e[2] +
                        "%," +
                        t[3] +
                        ")"
                      );
                    },
                    toHex: function () {
                      var t,
                        e,
                        i,
                        r = this.getSource();
                      return (
                        (t =
                          1 === (t = r[0].toString(16)).length ? "0" + t : t),
                        (e =
                          1 === (e = r[1].toString(16)).length ? "0" + e : e),
                        (i =
                          1 === (i = r[2].toString(16)).length ? "0" + i : i),
                        t.toUpperCase() + e.toUpperCase() + i.toUpperCase()
                      );
                    },
                    toHexa: function () {
                      var t,
                        e = this.getSource();
                      return (
                        (t =
                          1 ===
                          (t = (t = Math.round(255 * e[3])).toString(16)).length
                            ? "0" + t
                            : t),
                        this.toHex() + t.toUpperCase()
                      );
                    },
                    getAlpha: function () {
                      return this.getSource()[3];
                    },
                    setAlpha: function (t) {
                      var e = this.getSource();
                      return (e[3] = t), this.setSource(e), this;
                    },
                    toGrayscale: function () {
                      var t = this.getSource(),
                        e = parseInt(
                          (0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2]).toFixed(0),
                          10
                        ),
                        i = t[3];
                      return this.setSource([e, e, e, i]), this;
                    },
                    toBlackWhite: function (t) {
                      var e = this.getSource(),
                        i = (0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2]).toFixed(0),
                        r = e[3];
                      return (
                        (t = t || 127),
                        (i = Number(i) < Number(t) ? 0 : 255),
                        this.setSource([i, i, i, r]),
                        this
                      );
                    },
                    overlayWith: function (t) {
                      t instanceof i || (t = new i(t));
                      var e,
                        r = [],
                        n = this.getAlpha(),
                        o = this.getSource(),
                        s = t.getSource();
                      for (e = 0; e < 3; e++)
                        r.push(Math.round(0.5 * o[e] + 0.5 * s[e]));
                      return (r[3] = n), this.setSource(r), this;
                    },
                  }),
                  (e.Color.reRGBa =
                    /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i),
                  (e.Color.reHSLa =
                    /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i),
                  (e.Color.reHex =
                    /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i),
                  (e.Color.colorNameMap = {
                    aliceblue: "#F0F8FF",
                    antiquewhite: "#FAEBD7",
                    aqua: "#00FFFF",
                    aquamarine: "#7FFFD4",
                    azure: "#F0FFFF",
                    beige: "#F5F5DC",
                    bisque: "#FFE4C4",
                    black: "#000000",
                    blanchedalmond: "#FFEBCD",
                    blue: "#0000FF",
                    blueviolet: "#8A2BE2",
                    brown: "#A52A2A",
                    burlywood: "#DEB887",
                    cadetblue: "#5F9EA0",
                    chartreuse: "#7FFF00",
                    chocolate: "#D2691E",
                    coral: "#FF7F50",
                    cornflowerblue: "#6495ED",
                    cornsilk: "#FFF8DC",
                    crimson: "#DC143C",
                    cyan: "#00FFFF",
                    darkblue: "#00008B",
                    darkcyan: "#008B8B",
                    darkgoldenrod: "#B8860B",
                    darkgray: "#A9A9A9",
                    darkgrey: "#A9A9A9",
                    darkgreen: "#006400",
                    darkkhaki: "#BDB76B",
                    darkmagenta: "#8B008B",
                    darkolivegreen: "#556B2F",
                    darkorange: "#FF8C00",
                    darkorchid: "#9932CC",
                    darkred: "#8B0000",
                    darksalmon: "#E9967A",
                    darkseagreen: "#8FBC8F",
                    darkslateblue: "#483D8B",
                    darkslategray: "#2F4F4F",
                    darkslategrey: "#2F4F4F",
                    darkturquoise: "#00CED1",
                    darkviolet: "#9400D3",
                    deeppink: "#FF1493",
                    deepskyblue: "#00BFFF",
                    dimgray: "#696969",
                    dimgrey: "#696969",
                    dodgerblue: "#1E90FF",
                    firebrick: "#B22222",
                    floralwhite: "#FFFAF0",
                    forestgreen: "#228B22",
                    fuchsia: "#FF00FF",
                    gainsboro: "#DCDCDC",
                    ghostwhite: "#F8F8FF",
                    gold: "#FFD700",
                    goldenrod: "#DAA520",
                    gray: "#808080",
                    grey: "#808080",
                    green: "#008000",
                    greenyellow: "#ADFF2F",
                    honeydew: "#F0FFF0",
                    hotpink: "#FF69B4",
                    indianred: "#CD5C5C",
                    indigo: "#4B0082",
                    ivory: "#FFFFF0",
                    khaki: "#F0E68C",
                    lavender: "#E6E6FA",
                    lavenderblush: "#FFF0F5",
                    lawngreen: "#7CFC00",
                    lemonchiffon: "#FFFACD",
                    lightblue: "#ADD8E6",
                    lightcoral: "#F08080",
                    lightcyan: "#E0FFFF",
                    lightgoldenrodyellow: "#FAFAD2",
                    lightgray: "#D3D3D3",
                    lightgrey: "#D3D3D3",
                    lightgreen: "#90EE90",
                    lightpink: "#FFB6C1",
                    lightsalmon: "#FFA07A",
                    lightseagreen: "#20B2AA",
                    lightskyblue: "#87CEFA",
                    lightslategray: "#778899",
                    lightslategrey: "#778899",
                    lightsteelblue: "#B0C4DE",
                    lightyellow: "#FFFFE0",
                    lime: "#00FF00",
                    limegreen: "#32CD32",
                    linen: "#FAF0E6",
                    magenta: "#FF00FF",
                    maroon: "#800000",
                    mediumaquamarine: "#66CDAA",
                    mediumblue: "#0000CD",
                    mediumorchid: "#BA55D3",
                    mediumpurple: "#9370DB",
                    mediumseagreen: "#3CB371",
                    mediumslateblue: "#7B68EE",
                    mediumspringgreen: "#00FA9A",
                    mediumturquoise: "#48D1CC",
                    mediumvioletred: "#C71585",
                    midnightblue: "#191970",
                    mintcream: "#F5FFFA",
                    mistyrose: "#FFE4E1",
                    moccasin: "#FFE4B5",
                    navajowhite: "#FFDEAD",
                    navy: "#000080",
                    oldlace: "#FDF5E6",
                    olive: "#808000",
                    olivedrab: "#6B8E23",
                    orange: "#FFA500",
                    orangered: "#FF4500",
                    orchid: "#DA70D6",
                    palegoldenrod: "#EEE8AA",
                    palegreen: "#98FB98",
                    paleturquoise: "#AFEEEE",
                    palevioletred: "#DB7093",
                    papayawhip: "#FFEFD5",
                    peachpuff: "#FFDAB9",
                    peru: "#CD853F",
                    pink: "#FFC0CB",
                    plum: "#DDA0DD",
                    powderblue: "#B0E0E6",
                    purple: "#800080",
                    rebeccapurple: "#663399",
                    red: "#FF0000",
                    rosybrown: "#BC8F8F",
                    royalblue: "#4169E1",
                    saddlebrown: "#8B4513",
                    salmon: "#FA8072",
                    sandybrown: "#F4A460",
                    seagreen: "#2E8B57",
                    seashell: "#FFF5EE",
                    sienna: "#A0522D",
                    silver: "#C0C0C0",
                    skyblue: "#87CEEB",
                    slateblue: "#6A5ACD",
                    slategray: "#708090",
                    slategrey: "#708090",
                    snow: "#FFFAFA",
                    springgreen: "#00FF7F",
                    steelblue: "#4682B4",
                    tan: "#D2B48C",
                    teal: "#008080",
                    thistle: "#D8BFD8",
                    tomato: "#FF6347",
                    turquoise: "#40E0D0",
                    violet: "#EE82EE",
                    wheat: "#F5DEB3",
                    white: "#FFFFFF",
                    whitesmoke: "#F5F5F5",
                    yellow: "#FFFF00",
                    yellowgreen: "#9ACD32",
                  }),
                  (e.Color.fromRgb = function (t) {
                    return i.fromSource(i.sourceFromRgb(t));
                  }),
                  (e.Color.sourceFromRgb = function (t) {
                    var e = t.match(i.reRGBa);
                    if (e) {
                      var r =
                          (parseInt(e[1], 10) / (/%$/.test(e[1]) ? 100 : 1)) *
                          (/%$/.test(e[1]) ? 255 : 1),
                        n =
                          (parseInt(e[2], 10) / (/%$/.test(e[2]) ? 100 : 1)) *
                          (/%$/.test(e[2]) ? 255 : 1),
                        o =
                          (parseInt(e[3], 10) / (/%$/.test(e[3]) ? 100 : 1)) *
                          (/%$/.test(e[3]) ? 255 : 1);
                      return [
                        parseInt(r, 10),
                        parseInt(n, 10),
                        parseInt(o, 10),
                        e[4] ? parseFloat(e[4]) : 1,
                      ];
                    }
                  }),
                  (e.Color.fromRgba = i.fromRgb),
                  (e.Color.fromHsl = function (t) {
                    return i.fromSource(i.sourceFromHsl(t));
                  }),
                  (e.Color.sourceFromHsl = function (t) {
                    var e = t.match(i.reHSLa);
                    if (e) {
                      var n,
                        o,
                        s,
                        a = (((parseFloat(e[1]) % 360) + 360) % 360) / 360,
                        l = parseFloat(e[2]) / (/%$/.test(e[2]) ? 100 : 1),
                        h = parseFloat(e[3]) / (/%$/.test(e[3]) ? 100 : 1);
                      if (0 === l) n = o = s = h;
                      else {
                        var c = h <= 0.5 ? h * (l + 1) : h + l - h * l,
                          u = 2 * h - c;
                        (n = r(u, c, a + 1 / 3)),
                          (o = r(u, c, a)),
                          (s = r(u, c, a - 1 / 3));
                      }
                      return [
                        Math.round(255 * n),
                        Math.round(255 * o),
                        Math.round(255 * s),
                        e[4] ? parseFloat(e[4]) : 1,
                      ];
                    }
                  }),
                  (e.Color.fromHsla = i.fromHsl),
                  (e.Color.fromHex = function (t) {
                    return i.fromSource(i.sourceFromHex(t));
                  }),
                  (e.Color.sourceFromHex = function (t) {
                    if (t.match(i.reHex)) {
                      var e = t.slice(t.indexOf("#") + 1),
                        r = 3 === e.length || 4 === e.length,
                        n = 8 === e.length || 4 === e.length,
                        o = r ? e.charAt(0) + e.charAt(0) : e.substring(0, 2),
                        s = r ? e.charAt(1) + e.charAt(1) : e.substring(2, 4),
                        a = r ? e.charAt(2) + e.charAt(2) : e.substring(4, 6),
                        l = n
                          ? r
                            ? e.charAt(3) + e.charAt(3)
                            : e.substring(6, 8)
                          : "FF";
                      return [
                        parseInt(o, 16),
                        parseInt(s, 16),
                        parseInt(a, 16),
                        parseFloat((parseInt(l, 16) / 255).toFixed(2)),
                      ];
                    }
                  }),
                  (e.Color.fromSource = function (t) {
                    var e = new i();
                    return e.setSource(t), e;
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"],
                r = ["ns", "nesw", "ew", "nwse"],
                n = {},
                o = "left",
                s = "top",
                a = "right",
                l = "bottom",
                h = "center",
                c = { top: l, bottom: s, left: a, right: o, center: h },
                u = e.util.radiansToDegrees,
                f =
                  Math.sign ||
                  function (t) {
                    return (t > 0) - (t < 0) || +t;
                  };
              function d(t, e) {
                var i = t.angle + u(Math.atan2(e.y, e.x)) + 360;
                return Math.round((i % 360) / 45);
              }
              function p(t, i) {
                var r = i.transform.target,
                  n = r.canvas,
                  o = e.util.object.clone(i);
                (o.target = r), n && n.fire("object:" + t, o), r.fire(t, i);
              }
              function g(t, e) {
                var i = e.canvas,
                  r = t[i.uniScaleKey];
                return (i.uniformScaling && !r) || (!i.uniformScaling && r);
              }
              function v(t) {
                return t.originX === h && t.originY === h;
              }
              function m(t, e, i) {
                var r = t.lockScalingX,
                  n = t.lockScalingY;
                return (
                  !(!r || !n) ||
                  !(e || (!r && !n) || !i) ||
                  !(!r || "x" !== e) ||
                  !(!n || "y" !== e)
                );
              }
              function y(t, e, i, r) {
                return { e: t, transform: e, pointer: { x: i, y: r } };
              }
              function _(t) {
                return function (e, i, r, n) {
                  var o = i.target,
                    s = o.getCenterPoint(),
                    a = o.translateToOriginPoint(s, i.originX, i.originY),
                    l = t(e, i, r, n);
                  return o.setPositionByOrigin(a, i.originX, i.originY), l;
                };
              }
              function b(t, e) {
                return function (i, r, n, o) {
                  var s = e(i, r, n, o);
                  return s && p(t, y(i, r, n, o)), s;
                };
              }
              function x(t, i, r, n, o) {
                var s = t.target,
                  a = s.controls[t.corner],
                  l = s.canvas.getZoom(),
                  h = s.padding / l,
                  c = s.toLocalPoint(new e.Point(n, o), i, r);
                return (
                  c.x >= h && (c.x -= h),
                  c.x <= -h && (c.x += h),
                  c.y >= h && (c.y -= h),
                  c.y <= h && (c.y += h),
                  (c.x -= a.offsetX),
                  (c.y -= a.offsetY),
                  c
                );
              }
              function C(t) {
                return t.flipX !== t.flipY;
              }
              function w(t, e, i, r, n) {
                if (0 !== t[e]) {
                  var o = (n / t._getTransformedDimensions()[r]) * t[i];
                  t.set(i, o);
                }
              }
              function S(t, e, i, r) {
                var n,
                  h = e.target,
                  c = h._getTransformedDimensions(0, h.skewY),
                  f = x(e, e.originX, e.originY, i, r),
                  d = Math.abs(2 * f.x) - c.x,
                  p = h.skewX;
                d < 2
                  ? (n = 0)
                  : ((n = u(Math.atan2(d / h.scaleX, c.y / h.scaleY))),
                    e.originX === o && e.originY === l && (n = -n),
                    e.originX === a && e.originY === s && (n = -n),
                    C(h) && (n = -n));
                var g = p !== n;
                if (g) {
                  var v = h._getTransformedDimensions().y;
                  h.set("skewX", n), w(h, "skewY", "scaleY", "y", v);
                }
                return g;
              }
              function T(t, e, i, r) {
                var n,
                  h = e.target,
                  c = h._getTransformedDimensions(h.skewX, 0),
                  f = x(e, e.originX, e.originY, i, r),
                  d = Math.abs(2 * f.y) - c.y,
                  p = h.skewY;
                d < 2
                  ? (n = 0)
                  : ((n = u(Math.atan2(d / h.scaleY, c.x / h.scaleX))),
                    e.originX === o && e.originY === l && (n = -n),
                    e.originX === a && e.originY === s && (n = -n),
                    C(h) && (n = -n));
                var g = p !== n;
                if (g) {
                  var v = h._getTransformedDimensions().x;
                  h.set("skewY", n), w(h, "skewX", "scaleX", "x", v);
                }
                return g;
              }
              function O(t, e, i, r, n) {
                n = n || {};
                var o,
                  s,
                  a,
                  l,
                  h,
                  u,
                  d = e.target,
                  p = d.lockScalingX,
                  y = d.lockScalingY,
                  _ = n.by,
                  b = g(t, d),
                  C = m(d, _, b),
                  w = e.gestureScale;
                if (C) return !1;
                if (w) (s = e.scaleX * w), (a = e.scaleY * w);
                else {
                  if (
                    ((o = x(e, e.originX, e.originY, i, r)),
                    (h = "y" !== _ ? f(o.x) : 1),
                    (u = "x" !== _ ? f(o.y) : 1),
                    e.signX || (e.signX = h),
                    e.signY || (e.signY = u),
                    d.lockScalingFlip && (e.signX !== h || e.signY !== u))
                  )
                    return !1;
                  if (((l = d._getTransformedDimensions()), b && !_)) {
                    var S = Math.abs(o.x) + Math.abs(o.y),
                      T = e.original,
                      O =
                        S /
                        (Math.abs((l.x * T.scaleX) / d.scaleX) +
                          Math.abs((l.y * T.scaleY) / d.scaleY));
                    (s = T.scaleX * O), (a = T.scaleY * O);
                  } else
                    (s = Math.abs((o.x * d.scaleX) / l.x)),
                      (a = Math.abs((o.y * d.scaleY) / l.y));
                  v(e) && ((s *= 2), (a *= 2)),
                    e.signX !== h &&
                      "y" !== _ &&
                      ((e.originX = c[e.originX]), (s *= -1), (e.signX = h)),
                    e.signY !== u &&
                      "x" !== _ &&
                      ((e.originY = c[e.originY]), (a *= -1), (e.signY = u));
                }
                var k = d.scaleX,
                  E = d.scaleY;
                return (
                  _
                    ? ("x" === _ && d.set("scaleX", s),
                      "y" === _ && d.set("scaleY", a))
                    : (!p && d.set("scaleX", s), !y && d.set("scaleY", a)),
                  k !== d.scaleX || E !== d.scaleY
                );
              }
              (n.scaleCursorStyleHandler = function (t, e, r) {
                var n = g(t, r),
                  o = "";
                if (
                  (0 !== e.x && 0 === e.y
                    ? (o = "x")
                    : 0 === e.x && 0 !== e.y && (o = "y"),
                  m(r, o, n))
                )
                  return "not-allowed";
                var s = d(r, e);
                return i[s] + "-resize";
              }),
                (n.skewCursorStyleHandler = function (t, e, i) {
                  var n = "not-allowed";
                  if (0 !== e.x && i.lockSkewingY) return n;
                  if (0 !== e.y && i.lockSkewingX) return n;
                  var o = d(i, e) % 4;
                  return r[o] + "-resize";
                }),
                (n.scaleSkewCursorStyleHandler = function (t, e, i) {
                  return t[i.canvas.altActionKey]
                    ? n.skewCursorStyleHandler(t, e, i)
                    : n.scaleCursorStyleHandler(t, e, i);
                }),
                (n.rotationWithSnapping = b(
                  "rotating",
                  _(function (t, e, i, r) {
                    var n = e,
                      o = n.target,
                      s = o.translateToOriginPoint(
                        o.getCenterPoint(),
                        n.originX,
                        n.originY
                      );
                    if (o.lockRotation) return !1;
                    var a,
                      l = Math.atan2(n.ey - s.y, n.ex - s.x),
                      h = Math.atan2(r - s.y, i - s.x),
                      c = u(h - l + n.theta);
                    if (o.snapAngle > 0) {
                      var f = o.snapAngle,
                        d = o.snapThreshold || f,
                        p = Math.ceil(c / f) * f,
                        g = Math.floor(c / f) * f;
                      Math.abs(c - g) < d
                        ? (c = g)
                        : Math.abs(c - p) < d && (c = p);
                    }
                    return (
                      c < 0 && (c = 360 + c),
                      (c %= 360),
                      (a = o.angle !== c),
                      (o.angle = c),
                      a
                    );
                  })
                )),
                (n.scalingEqually = b(
                  "scaling",
                  _(function (t, e, i, r) {
                    return O(t, e, i, r);
                  })
                )),
                (n.scalingX = b(
                  "scaling",
                  _(function (t, e, i, r) {
                    return O(t, e, i, r, { by: "x" });
                  })
                )),
                (n.scalingY = b(
                  "scaling",
                  _(function (t, e, i, r) {
                    return O(t, e, i, r, { by: "y" });
                  })
                )),
                (n.scalingYOrSkewingX = function (t, e, i, r) {
                  return t[e.target.canvas.altActionKey]
                    ? n.skewHandlerX(t, e, i, r)
                    : n.scalingY(t, e, i, r);
                }),
                (n.scalingXOrSkewingY = function (t, e, i, r) {
                  return t[e.target.canvas.altActionKey]
                    ? n.skewHandlerY(t, e, i, r)
                    : n.scalingX(t, e, i, r);
                }),
                (n.changeWidth = b(
                  "resizing",
                  _(function (t, e, i, r) {
                    var n = e.target,
                      o = x(e, e.originX, e.originY, i, r),
                      s = n.strokeWidth / (n.strokeUniform ? n.scaleX : 1),
                      a = v(e) ? 2 : 1,
                      l = n.width,
                      h = Math.abs((o.x * a) / n.scaleX) - s;
                    return n.set("width", Math.max(h, 0)), l !== h;
                  })
                )),
                (n.skewHandlerX = function (t, e, i, r) {
                  var n,
                    l = e.target,
                    c = l.skewX,
                    u = e.originY;
                  return (
                    !l.lockSkewingX &&
                    (0 === c
                      ? (n = x(e, h, h, i, r).x > 0 ? o : a)
                      : (c > 0 && (n = u === s ? o : a),
                        c < 0 && (n = u === s ? a : o),
                        C(l) && (n = n === o ? a : o)),
                    (e.originX = n),
                    b("skewing", _(S))(t, e, i, r))
                  );
                }),
                (n.skewHandlerY = function (t, e, i, r) {
                  var n,
                    a = e.target,
                    c = a.skewY,
                    u = e.originX;
                  return (
                    !a.lockSkewingY &&
                    (0 === c
                      ? (n = x(e, h, h, i, r).y > 0 ? s : l)
                      : (c > 0 && (n = u === o ? s : l),
                        c < 0 && (n = u === o ? l : s),
                        C(a) && (n = n === s ? l : s)),
                    (e.originY = n),
                    b("skewing", _(T))(t, e, i, r))
                  );
                }),
                (n.dragHandler = function (t, e, i, r) {
                  var n = e.target,
                    o = i - e.offsetX,
                    s = r - e.offsetY,
                    a = !n.get("lockMovementX") && n.left !== o,
                    l = !n.get("lockMovementY") && n.top !== s;
                  return (
                    a && n.set("left", o),
                    l && n.set("top", s),
                    (a || l) && p("moving", y(t, e, i, r)),
                    a || l
                  );
                }),
                (n.scaleOrSkewActionName = function (t, e, i) {
                  var r = t[i.canvas.altActionKey];
                  return 0 === e.x
                    ? r
                      ? "skewX"
                      : "scaleY"
                    : 0 === e.y
                    ? r
                      ? "skewY"
                      : "scaleX"
                    : void 0;
                }),
                (n.rotationStyleHandler = function (t, e, i) {
                  return i.lockRotation ? "not-allowed" : e.cursorStyle;
                }),
                (n.fireEvent = p),
                (n.wrapWithFixedAnchor = _),
                (n.wrapWithFireEvent = b),
                (n.getLocalPoint = x),
                (e.controlsUtils = n);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.degreesToRadians,
                r = e.controlsUtils;
              (r.renderCircleControl = function (t, e, i, r, n) {
                r = r || {};
                var o,
                  s = this.sizeX || r.cornerSize || n.cornerSize,
                  a = this.sizeY || r.cornerSize || n.cornerSize,
                  l =
                    void 0 !== r.transparentCorners
                      ? r.transparentCorners
                      : n.transparentCorners,
                  h = l ? "stroke" : "fill",
                  c = !l && (r.cornerStrokeColor || n.cornerStrokeColor),
                  u = e,
                  f = i;
                t.save(),
                  (t.fillStyle = r.cornerColor || n.cornerColor),
                  (t.strokeStyle = r.cornerStrokeColor || n.cornerStrokeColor),
                  s > a
                    ? ((o = s), t.scale(1, a / s), (f = (i * s) / a))
                    : a > s
                    ? ((o = a), t.scale(s / a, 1), (u = (e * a) / s))
                    : (o = s),
                  (t.lineWidth = 1),
                  t.beginPath(),
                  t.arc(u, f, o / 2, 0, 2 * Math.PI, !1),
                  t[h](),
                  c && t.stroke(),
                  t.restore();
              }),
                (r.renderSquareControl = function (t, e, r, n, o) {
                  n = n || {};
                  var s = this.sizeX || n.cornerSize || o.cornerSize,
                    a = this.sizeY || n.cornerSize || o.cornerSize,
                    l =
                      void 0 !== n.transparentCorners
                        ? n.transparentCorners
                        : o.transparentCorners,
                    h = l ? "stroke" : "fill",
                    c = !l && (n.cornerStrokeColor || o.cornerStrokeColor),
                    u = s / 2,
                    f = a / 2;
                  t.save(),
                    (t.fillStyle = n.cornerColor || o.cornerColor),
                    (t.strokeStyle =
                      n.cornerStrokeColor || o.cornerStrokeColor),
                    (t.lineWidth = 1),
                    t.translate(e, r),
                    t.rotate(i(o.angle)),
                    t[h + "Rect"](-u, -f, s, a),
                    c && t.strokeRect(-u, -f, s, a),
                    t.restore();
                });
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {});
              (e.Control = function (t) {
                for (var e in t) this[e] = t[e];
              }),
                (e.Control.prototype = {
                  visible: !0,
                  actionName: "scale",
                  angle: 0,
                  x: 0,
                  y: 0,
                  offsetX: 0,
                  offsetY: 0,
                  sizeX: null,
                  sizeY: null,
                  touchSizeX: null,
                  touchSizeY: null,
                  cursorStyle: "crosshair",
                  withConnection: !1,
                  actionHandler: function () {},
                  mouseDownHandler: function () {},
                  mouseUpHandler: function () {},
                  getActionHandler: function () {
                    return this.actionHandler;
                  },
                  getMouseDownHandler: function () {
                    return this.mouseDownHandler;
                  },
                  getMouseUpHandler: function () {
                    return this.mouseUpHandler;
                  },
                  cursorStyleHandler: function (t, e) {
                    return e.cursorStyle;
                  },
                  getActionName: function (t, e) {
                    return e.actionName;
                  },
                  getVisibility: function (t, e) {
                    var i = t._controlsVisibility;
                    return i && void 0 !== i[e] ? i[e] : this.visible;
                  },
                  setVisibility: function (t) {
                    this.visible = t;
                  },
                  positionHandler: function (t, i) {
                    return e.util.transformPoint(
                      {
                        x: this.x * t.x + this.offsetX,
                        y: this.y * t.y + this.offsetY,
                      },
                      i
                    );
                  },
                  calcCornerCoords: function (t, i, r, n, o) {
                    var s,
                      a,
                      l,
                      h,
                      c = o ? this.touchSizeX : this.sizeX,
                      u = o ? this.touchSizeY : this.sizeY;
                    if (c && u && c !== u) {
                      var f = Math.atan2(u, c),
                        d = Math.sqrt(c * c + u * u) / 2,
                        p = f - e.util.degreesToRadians(t),
                        g = Math.PI / 2 - f - e.util.degreesToRadians(t);
                      (s = d * e.util.cos(p)),
                        (a = d * e.util.sin(p)),
                        (l = d * e.util.cos(g)),
                        (h = d * e.util.sin(g));
                    } else {
                      d = 0.7071067812 * (c && u ? c : i);
                      p = e.util.degreesToRadians(45 - t);
                      (s = l = d * e.util.cos(p)), (a = h = d * e.util.sin(p));
                    }
                    return {
                      tl: { x: r - h, y: n - l },
                      tr: { x: r + s, y: n - a },
                      bl: { x: r - s, y: n + a },
                      br: { x: r + h, y: n + l },
                    };
                  },
                  render: function (t, i, r, n, o) {
                    switch ((n = n || {}).cornerStyle || o.cornerStyle) {
                      case "circle":
                        e.controlsUtils.renderCircleControl.call(
                          this,
                          t,
                          i,
                          r,
                          n,
                          o
                        );
                        break;
                      default:
                        e.controlsUtils.renderSquareControl.call(
                          this,
                          t,
                          i,
                          r,
                          n,
                          o
                        );
                    }
                  },
                });
            })(void 0 !== i ? i : this),
            (function () {
              function t(t, e) {
                var i,
                  r,
                  n,
                  o,
                  s = t.getAttribute("style"),
                  a = t.getAttribute("offset") || 0;
                if (
                  ((a =
                    (a = parseFloat(a) / (/%$/.test(a) ? 100 : 1)) < 0
                      ? 0
                      : a > 1
                      ? 1
                      : a),
                  s)
                ) {
                  var l = s.split(/\s*;\s*/);
                  for ("" === l[l.length - 1] && l.pop(), o = l.length; o--; ) {
                    var h = l[o].split(/\s*:\s*/),
                      c = h[0].trim(),
                      u = h[1].trim();
                    "stop-color" === c
                      ? (i = u)
                      : "stop-opacity" === c && (n = u);
                  }
                }
                return (
                  i || (i = t.getAttribute("stop-color") || "rgb(0,0,0)"),
                  n || (n = t.getAttribute("stop-opacity")),
                  (r = (i = new T.Color(i)).getAlpha()),
                  (n = isNaN(parseFloat(n)) ? 1 : parseFloat(n)),
                  (n *= r * e),
                  { offset: a, color: i.toRgb(), opacity: n }
                );
              }
              var e = T.util.object.clone;
              (T.Gradient = T.util.createClass({
                offsetX: 0,
                offsetY: 0,
                gradientTransform: null,
                gradientUnits: "pixels",
                type: "linear",
                initialize: function (t) {
                  t || (t = {}), t.coords || (t.coords = {});
                  var e,
                    i = this;
                  Object.keys(t).forEach(function (e) {
                    i[e] = t[e];
                  }),
                    this.id
                      ? (this.id += "_" + T.Object.__uid++)
                      : (this.id = T.Object.__uid++),
                    (e = {
                      x1: t.coords.x1 || 0,
                      y1: t.coords.y1 || 0,
                      x2: t.coords.x2 || 0,
                      y2: t.coords.y2 || 0,
                    }),
                    "radial" === this.type &&
                      ((e.r1 = t.coords.r1 || 0), (e.r2 = t.coords.r2 || 0)),
                    (this.coords = e),
                    (this.colorStops = t.colorStops.slice());
                },
                addColorStop: function (t) {
                  for (var e in t) {
                    var i = new T.Color(t[e]);
                    this.colorStops.push({
                      offset: parseFloat(e),
                      color: i.toRgb(),
                      opacity: i.getAlpha(),
                    });
                  }
                  return this;
                },
                toObject: function (t) {
                  var e = {
                    type: this.type,
                    coords: this.coords,
                    colorStops: this.colorStops,
                    offsetX: this.offsetX,
                    offsetY: this.offsetY,
                    gradientUnits: this.gradientUnits,
                    gradientTransform: this.gradientTransform
                      ? this.gradientTransform.concat()
                      : this.gradientTransform,
                  };
                  return T.util.populateWithProperties(this, e, t), e;
                },
                toSVG: function (t, i) {
                  var r,
                    n,
                    o,
                    s,
                    a = e(this.coords, !0),
                    l = ((i = i || {}), e(this.colorStops, !0)),
                    h = a.r1 > a.r2,
                    c = this.gradientTransform
                      ? this.gradientTransform.concat()
                      : T.iMatrix.concat(),
                    u = -this.offsetX,
                    f = -this.offsetY,
                    d = !!i.additionalTransform,
                    p =
                      "pixels" === this.gradientUnits
                        ? "userSpaceOnUse"
                        : "objectBoundingBox";
                  if (
                    (l.sort(function (t, e) {
                      return t.offset - e.offset;
                    }),
                    "objectBoundingBox" === p
                      ? ((u /= t.width), (f /= t.height))
                      : ((u += t.width / 2), (f += t.height / 2)),
                    "path" === t.type &&
                      "percentage" !== this.gradientUnits &&
                      ((u -= t.pathOffset.x), (f -= t.pathOffset.y)),
                    (c[4] -= u),
                    (c[5] -= f),
                    (s =
                      'id="SVGID_' + this.id + '" gradientUnits="' + p + '"'),
                    (s +=
                      ' gradientTransform="' +
                      (d ? i.additionalTransform + " " : "") +
                      T.util.matrixToSVG(c) +
                      '" '),
                    "linear" === this.type
                      ? (o = [
                          "<linearGradient ",
                          s,
                          ' x1="',
                          a.x1,
                          '" y1="',
                          a.y1,
                          '" x2="',
                          a.x2,
                          '" y2="',
                          a.y2,
                          '">\n',
                        ])
                      : "radial" === this.type &&
                        (o = [
                          "<radialGradient ",
                          s,
                          ' cx="',
                          h ? a.x1 : a.x2,
                          '" cy="',
                          h ? a.y1 : a.y2,
                          '" r="',
                          h ? a.r1 : a.r2,
                          '" fx="',
                          h ? a.x2 : a.x1,
                          '" fy="',
                          h ? a.y2 : a.y1,
                          '">\n',
                        ]),
                    "radial" === this.type)
                  ) {
                    if (h)
                      for (
                        (l = l.concat()).reverse(), r = 0, n = l.length;
                        r < n;
                        r++
                      )
                        l[r].offset = 1 - l[r].offset;
                    var g = Math.min(a.r1, a.r2);
                    if (g > 0) {
                      var v = g / Math.max(a.r1, a.r2);
                      for (r = 0, n = l.length; r < n; r++)
                        l[r].offset += v * (1 - l[r].offset);
                    }
                  }
                  for (r = 0, n = l.length; r < n; r++) {
                    var m = l[r];
                    o.push(
                      "<stop ",
                      'offset="',
                      100 * m.offset + "%",
                      '" style="stop-color:',
                      m.color,
                      void 0 !== m.opacity
                        ? ";stop-opacity: " + m.opacity
                        : ";",
                      '"/>\n'
                    );
                  }
                  return (
                    o.push(
                      "linear" === this.type
                        ? "</linearGradient>\n"
                        : "</radialGradient>\n"
                    ),
                    o.join("")
                  );
                },
                toLive: function (t) {
                  var e,
                    i,
                    r,
                    n = T.util.object.clone(this.coords);
                  if (this.type) {
                    for (
                      "linear" === this.type
                        ? (e = t.createLinearGradient(n.x1, n.y1, n.x2, n.y2))
                        : "radial" === this.type &&
                          (e = t.createRadialGradient(
                            n.x1,
                            n.y1,
                            n.r1,
                            n.x2,
                            n.y2,
                            n.r2
                          )),
                        i = 0,
                        r = this.colorStops.length;
                      i < r;
                      i++
                    ) {
                      var o = this.colorStops[i].color,
                        s = this.colorStops[i].opacity,
                        a = this.colorStops[i].offset;
                      void 0 !== s && (o = new T.Color(o).setAlpha(s).toRgba()),
                        e.addColorStop(a, o);
                    }
                    return e;
                  }
                },
              })),
                T.util.object.extend(T.Gradient, {
                  fromElement: function (e, i, r, n) {
                    var o = parseFloat(r) / (/%$/.test(r) ? 100 : 1);
                    (o = o < 0 ? 0 : o > 1 ? 1 : o), isNaN(o) && (o = 1);
                    var s,
                      a,
                      l,
                      h,
                      c = e.getElementsByTagName("stop"),
                      u =
                        "userSpaceOnUse" === e.getAttribute("gradientUnits")
                          ? "pixels"
                          : "percentage",
                      f = e.getAttribute("gradientTransform") || "",
                      d = [],
                      p = 0,
                      g = 0;
                    for (
                      "linearGradient" === e.nodeName ||
                      "LINEARGRADIENT" === e.nodeName
                        ? ((s = "linear"),
                          (a = (function (t) {
                            return {
                              x1: t.getAttribute("x1") || 0,
                              y1: t.getAttribute("y1") || 0,
                              x2: t.getAttribute("x2") || "100%",
                              y2: t.getAttribute("y2") || 0,
                            };
                          })(e)))
                        : ((s = "radial"),
                          (a = (function (t) {
                            return {
                              x1:
                                t.getAttribute("fx") ||
                                t.getAttribute("cx") ||
                                "50%",
                              y1:
                                t.getAttribute("fy") ||
                                t.getAttribute("cy") ||
                                "50%",
                              r1: 0,
                              x2: t.getAttribute("cx") || "50%",
                              y2: t.getAttribute("cy") || "50%",
                              r2: t.getAttribute("r") || "50%",
                            };
                          })(e))),
                        l = c.length;
                      l--;

                    )
                      d.push(t(c[l], o));
                    return (
                      (h = T.parseTransformAttribute(f)),
                      (function (t, e, i, r) {
                        var n, o;
                        Object.keys(e).forEach(function (t) {
                          "Infinity" === (n = e[t])
                            ? (o = 1)
                            : "-Infinity" === n
                            ? (o = 0)
                            : ((o = parseFloat(e[t], 10)),
                              "string" == typeof n &&
                                /^(\d+\.\d+)%|(\d+)%$/.test(n) &&
                                ((o *= 0.01),
                                "pixels" === r &&
                                  (("x1" !== t && "x2" !== t && "r2" !== t) ||
                                    (o *= i.viewBoxWidth || i.width),
                                  ("y1" !== t && "y2" !== t) ||
                                    (o *= i.viewBoxHeight || i.height)))),
                            (e[t] = o);
                        });
                      })(0, a, n, u),
                      "pixels" === u && ((p = -i.left), (g = -i.top)),
                      new T.Gradient({
                        id: e.getAttribute("id"),
                        type: s,
                        coords: a,
                        colorStops: d,
                        gradientUnits: u,
                        gradientTransform: h,
                        offsetX: p,
                        offsetY: g,
                      })
                    );
                  },
                });
            })(),
            (function () {
              "use strict";
              var t = T.util.toFixed;
              T.Pattern = T.util.createClass({
                repeat: "repeat",
                offsetX: 0,
                offsetY: 0,
                crossOrigin: "",
                patternTransform: null,
                initialize: function (t, e) {
                  if (
                    (t || (t = {}),
                    (this.id = T.Object.__uid++),
                    this.setOptions(t),
                    !t.source || (t.source && "string" != typeof t.source))
                  )
                    e && e(this);
                  else {
                    var i = this;
                    (this.source = T.util.createImage()),
                      T.util.loadImage(
                        t.source,
                        function (t, r) {
                          (i.source = t), e && e(i, r);
                        },
                        null,
                        this.crossOrigin
                      );
                  }
                },
                toObject: function (e) {
                  var i,
                    r,
                    n = T.Object.NUM_FRACTION_DIGITS;
                  return (
                    "string" == typeof this.source.src
                      ? (i = this.source.src)
                      : "object" == typeof this.source &&
                        this.source.toDataURL &&
                        (i = this.source.toDataURL()),
                    (r = {
                      type: "pattern",
                      source: i,
                      repeat: this.repeat,
                      crossOrigin: this.crossOrigin,
                      offsetX: t(this.offsetX, n),
                      offsetY: t(this.offsetY, n),
                      patternTransform: this.patternTransform
                        ? this.patternTransform.concat()
                        : null,
                    }),
                    T.util.populateWithProperties(this, r, e),
                    r
                  );
                },
                toSVG: function (t) {
                  var e =
                      "function" == typeof this.source
                        ? this.source()
                        : this.source,
                    i = e.width / t.width,
                    r = e.height / t.height,
                    n = this.offsetX / t.width,
                    o = this.offsetY / t.height,
                    s = "";
                  return (
                    ("repeat-x" !== this.repeat &&
                      "no-repeat" !== this.repeat) ||
                      ((r = 1), o && (r += Math.abs(o))),
                    ("repeat-y" !== this.repeat &&
                      "no-repeat" !== this.repeat) ||
                      ((i = 1), n && (i += Math.abs(n))),
                    e.src ? (s = e.src) : e.toDataURL && (s = e.toDataURL()),
                    '<pattern id="SVGID_' +
                      this.id +
                      '" x="' +
                      n +
                      '" y="' +
                      o +
                      '" width="' +
                      i +
                      '" height="' +
                      r +
                      '">\n<image x="0" y="0" width="' +
                      e.width +
                      '" height="' +
                      e.height +
                      '" xlink:href="' +
                      s +
                      '"></image>\n</pattern>\n'
                  );
                },
                setOptions: function (t) {
                  for (var e in t) this[e] = t[e];
                },
                toLive: function (t) {
                  var e = this.source;
                  if (!e) return "";
                  if (void 0 !== e.src) {
                    if (!e.complete) return "";
                    if (0 === e.naturalWidth || 0 === e.naturalHeight)
                      return "";
                  }
                  return t.createPattern(e, this.repeat);
                },
              });
            })(),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.toFixed;
              e.Shadow
                ? e.warn("fabric.Shadow is already defined.")
                : ((e.Shadow = e.util.createClass({
                    color: "rgb(0,0,0)",
                    blur: 0,
                    offsetX: 0,
                    offsetY: 0,
                    affectStroke: !1,
                    includeDefaultValues: !0,
                    nonScaling: !1,
                    initialize: function (t) {
                      for (var i in ("string" == typeof t &&
                        (t = this._parseShadow(t)),
                      t))
                        this[i] = t[i];
                      this.id = e.Object.__uid++;
                    },
                    _parseShadow: function (t) {
                      var i = t.trim(),
                        r = e.Shadow.reOffsetsAndBlur.exec(i) || [];
                      return {
                        color: (
                          i.replace(e.Shadow.reOffsetsAndBlur, "") ||
                          "rgb(0,0,0)"
                        ).trim(),
                        offsetX: parseFloat(r[1], 10) || 0,
                        offsetY: parseFloat(r[2], 10) || 0,
                        blur: parseFloat(r[3], 10) || 0,
                      };
                    },
                    toString: function () {
                      return [
                        this.offsetX,
                        this.offsetY,
                        this.blur,
                        this.color,
                      ].join("px ");
                    },
                    toSVG: function (t) {
                      var r = 40,
                        n = 40,
                        o = e.Object.NUM_FRACTION_DIGITS,
                        s = e.util.rotateVector(
                          { x: this.offsetX, y: this.offsetY },
                          e.util.degreesToRadians(-t.angle)
                        ),
                        a = new e.Color(this.color);
                      return (
                        t.width &&
                          t.height &&
                          ((r =
                            100 * i((Math.abs(s.x) + this.blur) / t.width, o) +
                            20),
                          (n =
                            100 * i((Math.abs(s.y) + this.blur) / t.height, o) +
                            20)),
                        t.flipX && (s.x *= -1),
                        t.flipY && (s.y *= -1),
                        '<filter id="SVGID_' +
                          this.id +
                          '" y="-' +
                          n +
                          '%" height="' +
                          (100 + 2 * n) +
                          '%" x="-' +
                          r +
                          '%" width="' +
                          (100 + 2 * r) +
                          '%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="' +
                          i(this.blur ? this.blur / 2 : 0, o) +
                          '"></feGaussianBlur>\n\t<feOffset dx="' +
                          i(s.x, o) +
                          '" dy="' +
                          i(s.y, o) +
                          '" result="oBlur" ></feOffset>\n\t<feFlood flood-color="' +
                          a.toRgb() +
                          '" flood-opacity="' +
                          a.getAlpha() +
                          '"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'
                      );
                    },
                    toObject: function () {
                      if (this.includeDefaultValues)
                        return {
                          color: this.color,
                          blur: this.blur,
                          offsetX: this.offsetX,
                          offsetY: this.offsetY,
                          affectStroke: this.affectStroke,
                          nonScaling: this.nonScaling,
                        };
                      var t = {},
                        i = e.Shadow.prototype;
                      return (
                        [
                          "color",
                          "blur",
                          "offsetX",
                          "offsetY",
                          "affectStroke",
                          "nonScaling",
                        ].forEach(function (e) {
                          this[e] !== i[e] && (t[e] = this[e]);
                        }, this),
                        t
                      );
                    },
                  })),
                  (e.Shadow.reOffsetsAndBlur =
                    /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/));
            })(void 0 !== i ? i : this),
            (function () {
              "use strict";
              if (T.StaticCanvas)
                T.warn("fabric.StaticCanvas is already defined.");
              else {
                var t = T.util.object.extend,
                  e = T.util.getElementOffset,
                  i = T.util.removeFromArray,
                  r = T.util.toFixed,
                  n = T.util.transformPoint,
                  o = T.util.invertTransform,
                  s = T.util.getNodeCanvas,
                  a = T.util.createCanvasElement,
                  l = new Error("Could not initialize `canvas` element");
                (T.StaticCanvas = T.util.createClass(T.CommonMethods, {
                  initialize: function (t, e) {
                    e || (e = {}),
                      (this.renderAndResetBound =
                        this.renderAndReset.bind(this)),
                      (this.requestRenderAllBound =
                        this.requestRenderAll.bind(this)),
                      this._initStatic(t, e);
                  },
                  backgroundColor: "",
                  backgroundImage: null,
                  overlayColor: "",
                  overlayImage: null,
                  includeDefaultValues: !0,
                  stateful: !1,
                  renderOnAddRemove: !0,
                  controlsAboveOverlay: !1,
                  allowTouchScrolling: !1,
                  imageSmoothingEnabled: !0,
                  viewportTransform: T.iMatrix.concat(),
                  backgroundVpt: !0,
                  overlayVpt: !0,
                  enableRetinaScaling: !0,
                  vptCoords: {},
                  skipOffscreen: !0,
                  clipPath: void 0,
                  _initStatic: function (t, e) {
                    var i = this.requestRenderAllBound;
                    (this._objects = []),
                      this._createLowerCanvas(t),
                      this._initOptions(e),
                      this.interactive || this._initRetinaScaling(),
                      e.overlayImage && this.setOverlayImage(e.overlayImage, i),
                      e.backgroundImage &&
                        this.setBackgroundImage(e.backgroundImage, i),
                      e.backgroundColor &&
                        this.setBackgroundColor(e.backgroundColor, i),
                      e.overlayColor && this.setOverlayColor(e.overlayColor, i),
                      this.calcOffset();
                  },
                  _isRetinaScaling: function () {
                    return 1 !== T.devicePixelRatio && this.enableRetinaScaling;
                  },
                  getRetinaScaling: function () {
                    return this._isRetinaScaling() ? T.devicePixelRatio : 1;
                  },
                  _initRetinaScaling: function () {
                    if (this._isRetinaScaling()) {
                      var t = T.devicePixelRatio;
                      this.__initRetinaScaling(
                        t,
                        this.lowerCanvasEl,
                        this.contextContainer
                      ),
                        this.upperCanvasEl &&
                          this.__initRetinaScaling(
                            t,
                            this.upperCanvasEl,
                            this.contextTop
                          );
                    }
                  },
                  __initRetinaScaling: function (t, e, i) {
                    e.setAttribute("width", this.width * t),
                      e.setAttribute("height", this.height * t),
                      i.scale(t, t);
                  },
                  calcOffset: function () {
                    return (this._offset = e(this.lowerCanvasEl)), this;
                  },
                  setOverlayImage: function (t, e, i) {
                    return this.__setBgOverlayImage("overlayImage", t, e, i);
                  },
                  setBackgroundImage: function (t, e, i) {
                    return this.__setBgOverlayImage("backgroundImage", t, e, i);
                  },
                  setOverlayColor: function (t, e) {
                    return this.__setBgOverlayColor("overlayColor", t, e);
                  },
                  setBackgroundColor: function (t, e) {
                    return this.__setBgOverlayColor("backgroundColor", t, e);
                  },
                  __setBgOverlayImage: function (t, e, i, r) {
                    return (
                      "string" == typeof e
                        ? T.util.loadImage(
                            e,
                            function (e, n) {
                              if (e) {
                                var o = new T.Image(e, r);
                                (this[t] = o), (o.canvas = this);
                              }
                              i && i(e, n);
                            },
                            this,
                            r && r.crossOrigin
                          )
                        : (r && e.setOptions(r),
                          (this[t] = e),
                          e && (e.canvas = this),
                          i && i(e, !1)),
                      this
                    );
                  },
                  __setBgOverlayColor: function (t, e, i) {
                    return (
                      (this[t] = e),
                      this._initGradient(e, t),
                      this._initPattern(e, t, i),
                      this
                    );
                  },
                  _createCanvasElement: function () {
                    var t = a();
                    if (!t) throw l;
                    if ((t.style || (t.style = {}), void 0 === t.getContext))
                      throw l;
                    return t;
                  },
                  _initOptions: function (t) {
                    var e = this.lowerCanvasEl;
                    this._setOptions(t),
                      (this.width = this.width || parseInt(e.width, 10) || 0),
                      (this.height =
                        this.height || parseInt(e.height, 10) || 0),
                      this.lowerCanvasEl.style &&
                        ((e.width = this.width),
                        (e.height = this.height),
                        (e.style.width = this.width + "px"),
                        (e.style.height = this.height + "px"),
                        (this.viewportTransform =
                          this.viewportTransform.slice()));
                  },
                  _createLowerCanvas: function (t) {
                    t && t.getContext
                      ? (this.lowerCanvasEl = t)
                      : (this.lowerCanvasEl =
                          T.util.getById(t) || this._createCanvasElement()),
                      T.util.addClass(this.lowerCanvasEl, "lower-canvas"),
                      this.interactive &&
                        this._applyCanvasStyle(this.lowerCanvasEl),
                      (this.contextContainer =
                        this.lowerCanvasEl.getContext("2d"));
                  },
                  getWidth: function () {
                    return this.width;
                  },
                  getHeight: function () {
                    return this.height;
                  },
                  setWidth: function (t, e) {
                    return this.setDimensions({ width: t }, e);
                  },
                  setHeight: function (t, e) {
                    return this.setDimensions({ height: t }, e);
                  },
                  setDimensions: function (t, e) {
                    var i;
                    for (var r in ((e = e || {}), t))
                      (i = t[r]),
                        e.cssOnly ||
                          (this._setBackstoreDimension(r, t[r]),
                          (i += "px"),
                          (this.hasLostContext = !0)),
                        e.backstoreOnly || this._setCssDimension(r, i);
                    return (
                      this._isCurrentlyDrawing &&
                        this.freeDrawingBrush &&
                        this.freeDrawingBrush._setBrushStyles(),
                      this._initRetinaScaling(),
                      this.calcOffset(),
                      e.cssOnly || this.requestRenderAll(),
                      this
                    );
                  },
                  _setBackstoreDimension: function (t, e) {
                    return (
                      (this.lowerCanvasEl[t] = e),
                      this.upperCanvasEl && (this.upperCanvasEl[t] = e),
                      this.cacheCanvasEl && (this.cacheCanvasEl[t] = e),
                      (this[t] = e),
                      this
                    );
                  },
                  _setCssDimension: function (t, e) {
                    return (
                      (this.lowerCanvasEl.style[t] = e),
                      this.upperCanvasEl && (this.upperCanvasEl.style[t] = e),
                      this.wrapperEl && (this.wrapperEl.style[t] = e),
                      this
                    );
                  },
                  getZoom: function () {
                    return this.viewportTransform[0];
                  },
                  setViewportTransform: function (t) {
                    var e,
                      i,
                      r,
                      n = this._activeObject,
                      o = this.backgroundImage,
                      s = this.overlayImage;
                    for (
                      this.viewportTransform = t,
                        i = 0,
                        r = this._objects.length;
                      i < r;
                      i++
                    )
                      (e = this._objects[i]).group || e.setCoords(!0);
                    return (
                      n && n.setCoords(),
                      o && o.setCoords(!0),
                      s && s.setCoords(!0),
                      this.calcViewportBoundaries(),
                      this.renderOnAddRemove && this.requestRenderAll(),
                      this
                    );
                  },
                  zoomToPoint: function (t, e) {
                    var i = t,
                      r = this.viewportTransform.slice(0);
                    (t = n(t, o(this.viewportTransform))),
                      (r[0] = e),
                      (r[3] = e);
                    var s = n(t, r);
                    return (
                      (r[4] += i.x - s.x),
                      (r[5] += i.y - s.y),
                      this.setViewportTransform(r)
                    );
                  },
                  setZoom: function (t) {
                    return this.zoomToPoint(new T.Point(0, 0), t), this;
                  },
                  absolutePan: function (t) {
                    var e = this.viewportTransform.slice(0);
                    return (
                      (e[4] = -t.x), (e[5] = -t.y), this.setViewportTransform(e)
                    );
                  },
                  relativePan: function (t) {
                    return this.absolutePan(
                      new T.Point(
                        -t.x - this.viewportTransform[4],
                        -t.y - this.viewportTransform[5]
                      )
                    );
                  },
                  getElement: function () {
                    return this.lowerCanvasEl;
                  },
                  _onObjectAdded: function (t) {
                    this.stateful && t.setupState(),
                      t._set("canvas", this),
                      t.setCoords(),
                      this.fire("object:added", { target: t }),
                      t.fire("added");
                  },
                  _onObjectRemoved: function (t) {
                    this.fire("object:removed", { target: t }),
                      t.fire("removed"),
                      delete t.canvas;
                  },
                  clearContext: function (t) {
                    return t.clearRect(0, 0, this.width, this.height), this;
                  },
                  getContext: function () {
                    return this.contextContainer;
                  },
                  clear: function () {
                    return (
                      (this._objects.length = 0),
                      (this.backgroundImage = null),
                      (this.overlayImage = null),
                      (this.backgroundColor = ""),
                      (this.overlayColor = ""),
                      this._hasITextHandlers &&
                        (this.off("mouse:up", this._mouseUpITextHandler),
                        (this._iTextInstances = null),
                        (this._hasITextHandlers = !1)),
                      this.clearContext(this.contextContainer),
                      this.fire("canvas:cleared"),
                      this.renderOnAddRemove && this.requestRenderAll(),
                      this
                    );
                  },
                  renderAll: function () {
                    var t = this.contextContainer;
                    return this.renderCanvas(t, this._objects), this;
                  },
                  renderAndReset: function () {
                    (this.isRendering = 0), this.renderAll();
                  },
                  requestRenderAll: function () {
                    return (
                      this.isRendering ||
                        (this.isRendering = T.util.requestAnimFrame(
                          this.renderAndResetBound
                        )),
                      this
                    );
                  },
                  calcViewportBoundaries: function () {
                    var t = {},
                      e = this.width,
                      i = this.height,
                      r = o(this.viewportTransform);
                    return (
                      (t.tl = n({ x: 0, y: 0 }, r)),
                      (t.br = n({ x: e, y: i }, r)),
                      (t.tr = new T.Point(t.br.x, t.tl.y)),
                      (t.bl = new T.Point(t.tl.x, t.br.y)),
                      (this.vptCoords = t),
                      t
                    );
                  },
                  cancelRequestedRender: function () {
                    this.isRendering &&
                      (T.util.cancelAnimFrame(this.isRendering),
                      (this.isRendering = 0));
                  },
                  renderCanvas: function (t, e) {
                    var i = this.viewportTransform,
                      r = this.clipPath;
                    this.cancelRequestedRender(),
                      this.calcViewportBoundaries(),
                      this.clearContext(t),
                      T.util.setImageSmoothing(t, this.imageSmoothingEnabled),
                      this.fire("before:render", { ctx: t }),
                      this._renderBackground(t),
                      t.save(),
                      t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                      this._renderObjects(t, e),
                      t.restore(),
                      !this.controlsAboveOverlay &&
                        this.interactive &&
                        this.drawControls(t),
                      r &&
                        ((r.canvas = this),
                        r.shouldCache(),
                        (r._transformDone = !0),
                        r.renderCache({ forClipping: !0 }),
                        this.drawClipPathOnCanvas(t)),
                      this._renderOverlay(t),
                      this.controlsAboveOverlay &&
                        this.interactive &&
                        this.drawControls(t),
                      this.fire("after:render", { ctx: t });
                  },
                  drawClipPathOnCanvas: function (t) {
                    var e = this.viewportTransform,
                      i = this.clipPath;
                    t.save(),
                      t.transform(e[0], e[1], e[2], e[3], e[4], e[5]),
                      (t.globalCompositeOperation = "destination-in"),
                      i.transform(t),
                      t.scale(1 / i.zoomX, 1 / i.zoomY),
                      t.drawImage(
                        i._cacheCanvas,
                        -i.cacheTranslationX,
                        -i.cacheTranslationY
                      ),
                      t.restore();
                  },
                  _renderObjects: function (t, e) {
                    var i, r;
                    for (i = 0, r = e.length; i < r; ++i)
                      e[i] && e[i].render(t);
                  },
                  _renderBackgroundOrOverlay: function (t, e) {
                    var i = this[e + "Color"],
                      r = this[e + "Image"],
                      n = this.viewportTransform,
                      o = this[e + "Vpt"];
                    if (i || r) {
                      if (i) {
                        t.save(),
                          t.beginPath(),
                          t.moveTo(0, 0),
                          t.lineTo(this.width, 0),
                          t.lineTo(this.width, this.height),
                          t.lineTo(0, this.height),
                          t.closePath(),
                          (t.fillStyle = i.toLive ? i.toLive(t, this) : i),
                          o && t.transform(n[0], n[1], n[2], n[3], n[4], n[5]),
                          t.transform(
                            1,
                            0,
                            0,
                            1,
                            i.offsetX || 0,
                            i.offsetY || 0
                          );
                        var s = i.gradientTransform || i.patternTransform;
                        s && t.transform(s[0], s[1], s[2], s[3], s[4], s[5]),
                          t.fill(),
                          t.restore();
                      }
                      r &&
                        (t.save(),
                        o && t.transform(n[0], n[1], n[2], n[3], n[4], n[5]),
                        r.render(t),
                        t.restore());
                    }
                  },
                  _renderBackground: function (t) {
                    this._renderBackgroundOrOverlay(t, "background");
                  },
                  _renderOverlay: function (t) {
                    this._renderBackgroundOrOverlay(t, "overlay");
                  },
                  getCenter: function () {
                    return { top: this.height / 2, left: this.width / 2 };
                  },
                  centerObjectH: function (t) {
                    return this._centerObject(
                      t,
                      new T.Point(this.getCenter().left, t.getCenterPoint().y)
                    );
                  },
                  centerObjectV: function (t) {
                    return this._centerObject(
                      t,
                      new T.Point(t.getCenterPoint().x, this.getCenter().top)
                    );
                  },
                  centerObject: function (t) {
                    var e = this.getCenter();
                    return this._centerObject(t, new T.Point(e.left, e.top));
                  },
                  viewportCenterObject: function (t) {
                    var e = this.getVpCenter();
                    return this._centerObject(t, e);
                  },
                  viewportCenterObjectH: function (t) {
                    var e = this.getVpCenter();
                    return (
                      this._centerObject(
                        t,
                        new T.Point(e.x, t.getCenterPoint().y)
                      ),
                      this
                    );
                  },
                  viewportCenterObjectV: function (t) {
                    var e = this.getVpCenter();
                    return this._centerObject(
                      t,
                      new T.Point(t.getCenterPoint().x, e.y)
                    );
                  },
                  getVpCenter: function () {
                    var t = this.getCenter(),
                      e = o(this.viewportTransform);
                    return n({ x: t.left, y: t.top }, e);
                  },
                  _centerObject: function (t, e) {
                    return (
                      t.setPositionByOrigin(e, "center", "center"),
                      t.setCoords(),
                      this.renderOnAddRemove && this.requestRenderAll(),
                      this
                    );
                  },
                  toDatalessJSON: function (t) {
                    return this.toDatalessObject(t);
                  },
                  toObject: function (t) {
                    return this._toObjectMethod("toObject", t);
                  },
                  toDatalessObject: function (t) {
                    return this._toObjectMethod("toDatalessObject", t);
                  },
                  _toObjectMethod: function (e, i) {
                    var r = this.clipPath,
                      n = {
                        version: T.version,
                        objects: this._toObjects(e, i),
                      };
                    return (
                      r && (n.clipPath = this._toObject(this.clipPath, e, i)),
                      t(n, this.__serializeBgOverlay(e, i)),
                      T.util.populateWithProperties(this, n, i),
                      n
                    );
                  },
                  _toObjects: function (t, e) {
                    return this._objects
                      .filter(function (t) {
                        return !t.excludeFromExport;
                      })
                      .map(function (i) {
                        return this._toObject(i, t, e);
                      }, this);
                  },
                  _toObject: function (t, e, i) {
                    var r;
                    this.includeDefaultValues ||
                      ((r = t.includeDefaultValues),
                      (t.includeDefaultValues = !1));
                    var n = t[e](i);
                    return (
                      this.includeDefaultValues || (t.includeDefaultValues = r),
                      n
                    );
                  },
                  __serializeBgOverlay: function (t, e) {
                    var i = {},
                      r = this.backgroundImage,
                      n = this.overlayImage;
                    return (
                      this.backgroundColor &&
                        (i.background = this.backgroundColor.toObject
                          ? this.backgroundColor.toObject(e)
                          : this.backgroundColor),
                      this.overlayColor &&
                        (i.overlay = this.overlayColor.toObject
                          ? this.overlayColor.toObject(e)
                          : this.overlayColor),
                      r &&
                        !r.excludeFromExport &&
                        (i.backgroundImage = this._toObject(r, t, e)),
                      n &&
                        !n.excludeFromExport &&
                        (i.overlayImage = this._toObject(n, t, e)),
                      i
                    );
                  },
                  svgViewportTransformation: !0,
                  toSVG: function (t, e) {
                    t || (t = {}), (t.reviver = e);
                    var i = [];
                    return (
                      this._setSVGPreamble(i, t),
                      this._setSVGHeader(i, t),
                      this.clipPath &&
                        i.push(
                          '<g clip-path="url(#' +
                            this.clipPath.clipPathId +
                            ')" >\n'
                        ),
                      this._setSVGBgOverlayColor(i, "background"),
                      this._setSVGBgOverlayImage(i, "backgroundImage", e),
                      this._setSVGObjects(i, e),
                      this.clipPath && i.push("</g>\n"),
                      this._setSVGBgOverlayColor(i, "overlay"),
                      this._setSVGBgOverlayImage(i, "overlayImage", e),
                      i.push("</svg>"),
                      i.join("")
                    );
                  },
                  _setSVGPreamble: function (t, e) {
                    e.suppressPreamble ||
                      t.push(
                        '<?xml version="1.0" encoding="',
                        e.encoding || "UTF-8",
                        '" standalone="no" ?>\n',
                        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
                        '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
                      );
                  },
                  _setSVGHeader: function (t, e) {
                    var i,
                      n = e.width || this.width,
                      o = e.height || this.height,
                      s =
                        'viewBox="0 0 ' + this.width + " " + this.height + '" ',
                      a = T.Object.NUM_FRACTION_DIGITS;
                    e.viewBox
                      ? (s =
                          'viewBox="' +
                          e.viewBox.x +
                          " " +
                          e.viewBox.y +
                          " " +
                          e.viewBox.width +
                          " " +
                          e.viewBox.height +
                          '" ')
                      : this.svgViewportTransformation &&
                        ((i = this.viewportTransform),
                        (s =
                          'viewBox="' +
                          r(-i[4] / i[0], a) +
                          " " +
                          r(-i[5] / i[3], a) +
                          " " +
                          r(this.width / i[0], a) +
                          " " +
                          r(this.height / i[3], a) +
                          '" ')),
                      t.push(
                        "<svg ",
                        'xmlns="http://www.w3.org/2000/svg" ',
                        'xmlns:xlink="http://www.w3.org/1999/xlink" ',
                        'version="1.1" ',
                        'width="',
                        n,
                        '" ',
                        'height="',
                        o,
                        '" ',
                        s,
                        'xml:space="preserve">\n',
                        "<desc>Created with Fabric.js ",
                        T.version,
                        "</desc>\n",
                        "<defs>\n",
                        this.createSVGFontFacesMarkup(),
                        this.createSVGRefElementsMarkup(),
                        this.createSVGClipPathMarkup(e),
                        "</defs>\n"
                      );
                  },
                  createSVGClipPathMarkup: function (t) {
                    var e = this.clipPath;
                    return e
                      ? ((e.clipPathId = "CLIPPATH_" + T.Object.__uid++),
                        '<clipPath id="' +
                          e.clipPathId +
                          '" >\n' +
                          this.clipPath.toClipPathSVG(t.reviver) +
                          "</clipPath>\n")
                      : "";
                  },
                  createSVGRefElementsMarkup: function () {
                    var t = this;
                    return ["background", "overlay"]
                      .map(function (e) {
                        var i = t[e + "Color"];
                        if (i && i.toLive) {
                          var r = t[e + "Vpt"],
                            n = t.viewportTransform,
                            o = {
                              width: t.width / (r ? n[0] : 1),
                              height: t.height / (r ? n[3] : 1),
                            };
                          return i.toSVG(o, {
                            additionalTransform: r ? T.util.matrixToSVG(n) : "",
                          });
                        }
                      })
                      .join("");
                  },
                  createSVGFontFacesMarkup: function () {
                    var t,
                      e,
                      i,
                      r,
                      n,
                      o,
                      s,
                      a,
                      l = "",
                      h = {},
                      c = T.fontPaths,
                      u = [];
                    for (
                      this._objects.forEach(function t(e) {
                        u.push(e), e._objects && e._objects.forEach(t);
                      }),
                        s = 0,
                        a = u.length;
                      s < a;
                      s++
                    )
                      if (
                        ((e = (t = u[s]).fontFamily),
                        -1 !== t.type.indexOf("text") &&
                          !h[e] &&
                          c[e] &&
                          ((h[e] = !0), t.styles))
                      )
                        for (n in (i = t.styles))
                          for (o in (r = i[n]))
                            !h[(e = r[o].fontFamily)] && c[e] && (h[e] = !0);
                    for (var f in h)
                      l += [
                        "\t\t@font-face {\n",
                        "\t\t\tfont-family: '",
                        f,
                        "';\n",
                        "\t\t\tsrc: url('",
                        c[f],
                        "');\n",
                        "\t\t}\n",
                      ].join("");
                    return (
                      l &&
                        (l = [
                          '\t<style type="text/css">',
                          "<![CDATA[\n",
                          l,
                          "]]>",
                          "</style>\n",
                        ].join("")),
                      l
                    );
                  },
                  _setSVGObjects: function (t, e) {
                    var i,
                      r,
                      n,
                      o = this._objects;
                    for (r = 0, n = o.length; r < n; r++)
                      (i = o[r]).excludeFromExport ||
                        this._setSVGObject(t, i, e);
                  },
                  _setSVGObject: function (t, e, i) {
                    t.push(e.toSVG(i));
                  },
                  _setSVGBgOverlayImage: function (t, e, i) {
                    this[e] &&
                      !this[e].excludeFromExport &&
                      this[e].toSVG &&
                      t.push(this[e].toSVG(i));
                  },
                  _setSVGBgOverlayColor: function (t, e) {
                    var i = this[e + "Color"],
                      r = this.viewportTransform,
                      n = this.width,
                      o = this.height;
                    if (i)
                      if (i.toLive) {
                        var s = i.repeat,
                          a = T.util.invertTransform(r),
                          l = this[e + "Vpt"] ? T.util.matrixToSVG(a) : "";
                        t.push(
                          '<rect transform="' + l + " translate(",
                          n / 2,
                          ",",
                          o / 2,
                          ')"',
                          ' x="',
                          i.offsetX - n / 2,
                          '" y="',
                          i.offsetY - o / 2,
                          '" ',
                          'width="',
                          "repeat-y" === s || "no-repeat" === s
                            ? i.source.width
                            : n,
                          '" height="',
                          "repeat-x" === s || "no-repeat" === s
                            ? i.source.height
                            : o,
                          '" fill="url(#SVGID_' + i.id + ')"',
                          "></rect>\n"
                        );
                      } else
                        t.push(
                          '<rect x="0" y="0" width="100%" height="100%" ',
                          'fill="',
                          i,
                          '"',
                          "></rect>\n"
                        );
                  },
                  sendToBack: function (t) {
                    if (!t) return this;
                    var e,
                      r,
                      n,
                      o = this._activeObject;
                    if (t === o && "activeSelection" === t.type)
                      for (e = (n = o._objects).length; e--; )
                        (r = n[e]),
                          i(this._objects, r),
                          this._objects.unshift(r);
                    else i(this._objects, t), this._objects.unshift(t);
                    return (
                      this.renderOnAddRemove && this.requestRenderAll(), this
                    );
                  },
                  bringToFront: function (t) {
                    if (!t) return this;
                    var e,
                      r,
                      n,
                      o = this._activeObject;
                    if (t === o && "activeSelection" === t.type)
                      for (n = o._objects, e = 0; e < n.length; e++)
                        (r = n[e]), i(this._objects, r), this._objects.push(r);
                    else i(this._objects, t), this._objects.push(t);
                    return (
                      this.renderOnAddRemove && this.requestRenderAll(), this
                    );
                  },
                  sendBackwards: function (t, e) {
                    if (!t) return this;
                    var r,
                      n,
                      o,
                      s,
                      a,
                      l = this._activeObject,
                      h = 0;
                    if (t === l && "activeSelection" === t.type)
                      for (a = l._objects, r = 0; r < a.length; r++)
                        (n = a[r]),
                          (o = this._objects.indexOf(n)) > 0 + h &&
                            ((s = o - 1),
                            i(this._objects, n),
                            this._objects.splice(s, 0, n)),
                          h++;
                    else
                      0 !== (o = this._objects.indexOf(t)) &&
                        ((s = this._findNewLowerIndex(t, o, e)),
                        i(this._objects, t),
                        this._objects.splice(s, 0, t));
                    return (
                      this.renderOnAddRemove && this.requestRenderAll(), this
                    );
                  },
                  _findNewLowerIndex: function (t, e, i) {
                    var r, n;
                    if (i)
                      for (r = e, n = e - 1; n >= 0; --n) {
                        if (
                          t.intersectsWithObject(this._objects[n]) ||
                          t.isContainedWithinObject(this._objects[n]) ||
                          this._objects[n].isContainedWithinObject(t)
                        ) {
                          r = n;
                          break;
                        }
                      }
                    else r = e - 1;
                    return r;
                  },
                  bringForward: function (t, e) {
                    if (!t) return this;
                    var r,
                      n,
                      o,
                      s,
                      a,
                      l = this._activeObject,
                      h = 0;
                    if (t === l && "activeSelection" === t.type)
                      for (r = (a = l._objects).length; r--; )
                        (n = a[r]),
                          (o = this._objects.indexOf(n)) <
                            this._objects.length - 1 - h &&
                            ((s = o + 1),
                            i(this._objects, n),
                            this._objects.splice(s, 0, n)),
                          h++;
                    else
                      (o = this._objects.indexOf(t)) !==
                        this._objects.length - 1 &&
                        ((s = this._findNewUpperIndex(t, o, e)),
                        i(this._objects, t),
                        this._objects.splice(s, 0, t));
                    return (
                      this.renderOnAddRemove && this.requestRenderAll(), this
                    );
                  },
                  _findNewUpperIndex: function (t, e, i) {
                    var r, n, o;
                    if (i)
                      for (
                        r = e, n = e + 1, o = this._objects.length;
                        n < o;
                        ++n
                      ) {
                        if (
                          t.intersectsWithObject(this._objects[n]) ||
                          t.isContainedWithinObject(this._objects[n]) ||
                          this._objects[n].isContainedWithinObject(t)
                        ) {
                          r = n;
                          break;
                        }
                      }
                    else r = e + 1;
                    return r;
                  },
                  moveTo: function (t, e) {
                    return (
                      i(this._objects, t),
                      this._objects.splice(e, 0, t),
                      this.renderOnAddRemove && this.requestRenderAll()
                    );
                  },
                  dispose: function () {
                    return (
                      this.isRendering &&
                        (T.util.cancelAnimFrame(this.isRendering),
                        (this.isRendering = 0)),
                      this.forEachObject(function (t) {
                        t.dispose && t.dispose();
                      }),
                      (this._objects = []),
                      this.backgroundImage &&
                        this.backgroundImage.dispose &&
                        this.backgroundImage.dispose(),
                      (this.backgroundImage = null),
                      this.overlayImage &&
                        this.overlayImage.dispose &&
                        this.overlayImage.dispose(),
                      (this.overlayImage = null),
                      (this._iTextInstances = null),
                      (this.contextContainer = null),
                      T.util.cleanUpJsdomNode(this.lowerCanvasEl),
                      (this.lowerCanvasEl = void 0),
                      this
                    );
                  },
                  toString: function () {
                    return (
                      "#<fabric.Canvas (" +
                      this.complexity() +
                      "): { objects: " +
                      this._objects.length +
                      " }>"
                    );
                  },
                })),
                  t(T.StaticCanvas.prototype, T.Observable),
                  t(T.StaticCanvas.prototype, T.Collection),
                  t(T.StaticCanvas.prototype, T.DataURLExporter),
                  t(T.StaticCanvas, {
                    EMPTY_JSON: '{"objects": [], "background": "white"}',
                    supports: function (t) {
                      var e = a();
                      if (!e || !e.getContext) return null;
                      var i = e.getContext("2d");
                      if (!i) return null;
                      switch (t) {
                        case "setLineDash":
                          return void 0 !== i.setLineDash;
                        default:
                          return null;
                      }
                    },
                  }),
                  (T.StaticCanvas.prototype.toJSON =
                    T.StaticCanvas.prototype.toObject),
                  T.isLikelyNode &&
                    ((T.StaticCanvas.prototype.createPNGStream = function () {
                      var t = s(this.lowerCanvasEl);
                      return t && t.createPNGStream();
                    }),
                    (T.StaticCanvas.prototype.createJPEGStream = function (t) {
                      var e = s(this.lowerCanvasEl);
                      return e && e.createJPEGStream(t);
                    }));
              }
            })(),
            (T.BaseBrush = T.util.createClass({
              color: "rgb(0, 0, 0)",
              width: 1,
              shadow: null,
              strokeLineCap: "round",
              strokeLineJoin: "round",
              strokeMiterLimit: 10,
              strokeDashArray: null,
              limitedToCanvasSize: !1,
              _setBrushStyles: function () {
                var t = this.canvas.contextTop;
                (t.strokeStyle = this.color),
                  (t.lineWidth = this.width),
                  (t.lineCap = this.strokeLineCap),
                  (t.miterLimit = this.strokeMiterLimit),
                  (t.lineJoin = this.strokeLineJoin),
                  T.StaticCanvas.supports("setLineDash") &&
                    t.setLineDash(this.strokeDashArray || []);
              },
              _saveAndTransform: function (t) {
                var e = this.canvas.viewportTransform;
                t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
              },
              _setShadow: function () {
                if (this.shadow) {
                  var t = this.canvas,
                    e = this.shadow,
                    i = t.contextTop,
                    r = t.getZoom();
                  t && t._isRetinaScaling() && (r *= T.devicePixelRatio),
                    (i.shadowColor = e.color),
                    (i.shadowBlur = e.blur * r),
                    (i.shadowOffsetX = e.offsetX * r),
                    (i.shadowOffsetY = e.offsetY * r);
                }
              },
              needsFullRender: function () {
                return new T.Color(this.color).getAlpha() < 1 || !!this.shadow;
              },
              _resetShadow: function () {
                var t = this.canvas.contextTop;
                (t.shadowColor = ""),
                  (t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0);
              },
              _isOutSideCanvas: function (t) {
                return (
                  t.x < 0 ||
                  t.x > this.canvas.getWidth() ||
                  t.y < 0 ||
                  t.y > this.canvas.getHeight()
                );
              },
            })),
            (T.PencilBrush = T.util.createClass(T.BaseBrush, {
              decimate: 0.4,
              initialize: function (t) {
                (this.canvas = t), (this._points = []);
              },
              _drawSegment: function (t, e, i) {
                var r = e.midPointFrom(i);
                return t.quadraticCurveTo(e.x, e.y, r.x, r.y), r;
              },
              onMouseDown: function (t, e) {
                this.canvas._isMainEvent(e.e) &&
                  (this._prepareForDrawing(t),
                  this._captureDrawingPath(t),
                  this._render());
              },
              onMouseMove: function (t, e) {
                if (
                  this.canvas._isMainEvent(e.e) &&
                  (!0 !== this.limitedToCanvasSize ||
                    !this._isOutSideCanvas(t)) &&
                  this._captureDrawingPath(t) &&
                  this._points.length > 1
                )
                  if (this.needsFullRender())
                    this.canvas.clearContext(this.canvas.contextTop),
                      this._render();
                  else {
                    var i = this._points,
                      r = i.length,
                      n = this.canvas.contextTop;
                    this._saveAndTransform(n),
                      this.oldEnd &&
                        (n.beginPath(), n.moveTo(this.oldEnd.x, this.oldEnd.y)),
                      (this.oldEnd = this._drawSegment(
                        n,
                        i[r - 2],
                        i[r - 1],
                        !0
                      )),
                      n.stroke(),
                      n.restore();
                  }
              },
              onMouseUp: function (t) {
                return (
                  !this.canvas._isMainEvent(t.e) ||
                  ((this.oldEnd = void 0), this._finalizeAndAddPath(), !1)
                );
              },
              _prepareForDrawing: function (t) {
                var e = new T.Point(t.x, t.y);
                this._reset(),
                  this._addPoint(e),
                  this.canvas.contextTop.moveTo(e.x, e.y);
              },
              _addPoint: function (t) {
                return !(
                  (this._points.length > 1 &&
                    t.eq(this._points[this._points.length - 1])) ||
                  (this._points.push(t), 0)
                );
              },
              _reset: function () {
                (this._points = []), this._setBrushStyles(), this._setShadow();
              },
              _captureDrawingPath: function (t) {
                var e = new T.Point(t.x, t.y);
                return this._addPoint(e);
              },
              _render: function () {
                var t,
                  e,
                  i = this.canvas.contextTop,
                  r = this._points[0],
                  n = this._points[1];
                if (
                  (this._saveAndTransform(i),
                  i.beginPath(),
                  2 === this._points.length && r.x === n.x && r.y === n.y)
                ) {
                  var o = this.width / 1e3;
                  (r = new T.Point(r.x, r.y)),
                    (n = new T.Point(n.x, n.y)),
                    (r.x -= o),
                    (n.x += o);
                }
                for (
                  i.moveTo(r.x, r.y), t = 1, e = this._points.length;
                  t < e;
                  t++
                )
                  this._drawSegment(i, r, n),
                    (r = this._points[t]),
                    (n = this._points[t + 1]);
                i.lineTo(r.x, r.y), i.stroke(), i.restore();
              },
              convertPointsToSVGPath: function (t) {
                var e,
                  i = [],
                  r = this.width / 1e3,
                  n = new T.Point(t[0].x, t[0].y),
                  o = new T.Point(t[1].x, t[1].y),
                  s = t.length,
                  a = 1,
                  l = 0,
                  h = s > 2;
                for (
                  h &&
                    ((a = t[2].x < o.x ? -1 : t[2].x === o.x ? 0 : 1),
                    (l = t[2].y < o.y ? -1 : t[2].y === o.y ? 0 : 1)),
                    i.push("M ", n.x - a * r, " ", n.y - l * r, " "),
                    e = 1;
                  e < s;
                  e++
                ) {
                  if (!n.eq(o)) {
                    var c = n.midPointFrom(o);
                    i.push("Q ", n.x, " ", n.y, " ", c.x, " ", c.y, " ");
                  }
                  (n = t[e]), e + 1 < t.length && (o = t[e + 1]);
                }
                return (
                  h &&
                    ((a = n.x > t[e - 2].x ? 1 : n.x === t[e - 2].x ? 0 : -1),
                    (l = n.y > t[e - 2].y ? 1 : n.y === t[e - 2].y ? 0 : -1)),
                  i.push("L ", n.x + a * r, " ", n.y + l * r),
                  i
                );
              },
              createPath: function (t) {
                var e = new T.Path(t, {
                  fill: null,
                  stroke: this.color,
                  strokeWidth: this.width,
                  strokeLineCap: this.strokeLineCap,
                  strokeMiterLimit: this.strokeMiterLimit,
                  strokeLineJoin: this.strokeLineJoin,
                  strokeDashArray: this.strokeDashArray,
                });
                return (
                  this.shadow &&
                    ((this.shadow.affectStroke = !0),
                    (e.shadow = new T.Shadow(this.shadow))),
                  e
                );
              },
              decimatePoints: function (t, e) {
                if (t.length <= 2) return t;
                var i,
                  r = this.canvas.getZoom(),
                  n = Math.pow(e / r, 2),
                  o = t.length - 1,
                  s = t[0],
                  a = [s];
                for (i = 1; i < o - 1; i++)
                  Math.pow(s.x - t[i].x, 2) + Math.pow(s.y - t[i].y, 2) >= n &&
                    ((s = t[i]), a.push(s));
                return a.push(t[o]), a;
              },
              _finalizeAndAddPath: function () {
                this.canvas.contextTop.closePath(),
                  this.decimate &&
                    (this._points = this.decimatePoints(
                      this._points,
                      this.decimate
                    ));
                var t = this.convertPointsToSVGPath(this._points).join("");
                if ("M 0 0 Q 0 0 0 0 L 0 0" !== t) {
                  var e = this.createPath(t);
                  this.canvas.clearContext(this.canvas.contextTop),
                    this.canvas.fire("before:path:created", { path: e }),
                    this.canvas.add(e),
                    this.canvas.requestRenderAll(),
                    e.setCoords(),
                    this._resetShadow(),
                    this.canvas.fire("path:created", { path: e });
                } else this.canvas.requestRenderAll();
              },
            })),
            (T.CircleBrush = T.util.createClass(T.BaseBrush, {
              width: 10,
              initialize: function (t) {
                (this.canvas = t), (this.points = []);
              },
              drawDot: function (t) {
                var e = this.addPoint(t),
                  i = this.canvas.contextTop;
                this._saveAndTransform(i), this.dot(i, e), i.restore();
              },
              dot: function (t, e) {
                (t.fillStyle = e.fill),
                  t.beginPath(),
                  t.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1),
                  t.closePath(),
                  t.fill();
              },
              onMouseDown: function (t) {
                (this.points.length = 0),
                  this.canvas.clearContext(this.canvas.contextTop),
                  this._setShadow(),
                  this.drawDot(t);
              },
              _render: function () {
                var t,
                  e,
                  i = this.canvas.contextTop,
                  r = this.points;
                for (this._saveAndTransform(i), t = 0, e = r.length; t < e; t++)
                  this.dot(i, r[t]);
                i.restore();
              },
              onMouseMove: function (t) {
                (!0 === this.limitedToCanvasSize && this._isOutSideCanvas(t)) ||
                  (this.needsFullRender()
                    ? (this.canvas.clearContext(this.canvas.contextTop),
                      this.addPoint(t),
                      this._render())
                    : this.drawDot(t));
              },
              onMouseUp: function () {
                var t,
                  e,
                  i = this.canvas.renderOnAddRemove;
                this.canvas.renderOnAddRemove = !1;
                var r = [];
                for (t = 0, e = this.points.length; t < e; t++) {
                  var n = this.points[t],
                    o = new T.Circle({
                      radius: n.radius,
                      left: n.x,
                      top: n.y,
                      originX: "center",
                      originY: "center",
                      fill: n.fill,
                    });
                  this.shadow && (o.shadow = new T.Shadow(this.shadow)),
                    r.push(o);
                }
                var s = new T.Group(r);
                (s.canvas = this.canvas),
                  this.canvas.fire("before:path:created", { path: s }),
                  this.canvas.add(s),
                  this.canvas.fire("path:created", { path: s }),
                  this.canvas.clearContext(this.canvas.contextTop),
                  this._resetShadow(),
                  (this.canvas.renderOnAddRemove = i),
                  this.canvas.requestRenderAll();
              },
              addPoint: function (t) {
                var e = new T.Point(t.x, t.y),
                  i =
                    T.util.getRandomInt(
                      Math.max(0, this.width - 20),
                      this.width + 20
                    ) / 2,
                  r = new T.Color(this.color)
                    .setAlpha(T.util.getRandomInt(0, 100) / 100)
                    .toRgba();
                return (e.radius = i), (e.fill = r), this.points.push(e), e;
              },
            })),
            (T.SprayBrush = T.util.createClass(T.BaseBrush, {
              width: 10,
              density: 20,
              dotWidth: 1,
              dotWidthVariance: 1,
              randomOpacity: !1,
              optimizeOverlapping: !0,
              initialize: function (t) {
                (this.canvas = t), (this.sprayChunks = []);
              },
              onMouseDown: function (t) {
                (this.sprayChunks.length = 0),
                  this.canvas.clearContext(this.canvas.contextTop),
                  this._setShadow(),
                  this.addSprayChunk(t),
                  this.render(this.sprayChunkPoints);
              },
              onMouseMove: function (t) {
                (!0 === this.limitedToCanvasSize && this._isOutSideCanvas(t)) ||
                  (this.addSprayChunk(t), this.render(this.sprayChunkPoints));
              },
              onMouseUp: function () {
                var t = this.canvas.renderOnAddRemove;
                this.canvas.renderOnAddRemove = !1;
                for (var e = [], i = 0, r = this.sprayChunks.length; i < r; i++)
                  for (
                    var n = this.sprayChunks[i], o = 0, s = n.length;
                    o < s;
                    o++
                  ) {
                    var a = new T.Rect({
                      width: n[o].width,
                      height: n[o].width,
                      left: n[o].x + 1,
                      top: n[o].y + 1,
                      originX: "center",
                      originY: "center",
                      fill: this.color,
                    });
                    e.push(a);
                  }
                this.optimizeOverlapping && (e = this._getOptimizedRects(e));
                var l = new T.Group(e);
                this.shadow && l.set("shadow", new T.Shadow(this.shadow)),
                  this.canvas.fire("before:path:created", { path: l }),
                  this.canvas.add(l),
                  this.canvas.fire("path:created", { path: l }),
                  this.canvas.clearContext(this.canvas.contextTop),
                  this._resetShadow(),
                  (this.canvas.renderOnAddRemove = t),
                  this.canvas.requestRenderAll();
              },
              _getOptimizedRects: function (t) {
                var e,
                  i,
                  r,
                  n = {};
                for (i = 0, r = t.length; i < r; i++)
                  n[(e = t[i].left + "" + t[i].top)] || (n[e] = t[i]);
                var o = [];
                for (e in n) o.push(n[e]);
                return o;
              },
              render: function (t) {
                var e,
                  i,
                  r = this.canvas.contextTop;
                for (
                  r.fillStyle = this.color,
                    this._saveAndTransform(r),
                    e = 0,
                    i = t.length;
                  e < i;
                  e++
                ) {
                  var n = t[e];
                  void 0 !== n.opacity && (r.globalAlpha = n.opacity),
                    r.fillRect(n.x, n.y, n.width, n.width);
                }
                r.restore();
              },
              _render: function () {
                var t,
                  e,
                  i = this.canvas.contextTop;
                for (
                  i.fillStyle = this.color,
                    this._saveAndTransform(i),
                    t = 0,
                    e = this.sprayChunks.length;
                  t < e;
                  t++
                )
                  this.render(this.sprayChunks[t]);
                i.restore();
              },
              addSprayChunk: function (t) {
                this.sprayChunkPoints = [];
                var e,
                  i,
                  r,
                  n,
                  o = this.width / 2;
                for (n = 0; n < this.density; n++) {
                  (e = T.util.getRandomInt(t.x - o, t.x + o)),
                    (i = T.util.getRandomInt(t.y - o, t.y + o)),
                    (r = this.dotWidthVariance
                      ? T.util.getRandomInt(
                          Math.max(1, this.dotWidth - this.dotWidthVariance),
                          this.dotWidth + this.dotWidthVariance
                        )
                      : this.dotWidth);
                  var s = new T.Point(e, i);
                  (s.width = r),
                    this.randomOpacity &&
                      (s.opacity = T.util.getRandomInt(0, 100) / 100),
                    this.sprayChunkPoints.push(s);
                }
                this.sprayChunks.push(this.sprayChunkPoints);
              },
            })),
            (T.PatternBrush = T.util.createClass(T.PencilBrush, {
              getPatternSrc: function () {
                var t = T.util.createCanvasElement(),
                  e = t.getContext("2d");
                return (
                  (t.width = t.height = 25),
                  (e.fillStyle = this.color),
                  e.beginPath(),
                  e.arc(10, 10, 10, 0, 2 * Math.PI, !1),
                  e.closePath(),
                  e.fill(),
                  t
                );
              },
              getPatternSrcFunction: function () {
                return String(this.getPatternSrc).replace(
                  "this.color",
                  '"' + this.color + '"'
                );
              },
              getPattern: function () {
                return this.canvas.contextTop.createPattern(
                  this.source || this.getPatternSrc(),
                  "repeat"
                );
              },
              _setBrushStyles: function () {
                this.callSuper("_setBrushStyles"),
                  (this.canvas.contextTop.strokeStyle = this.getPattern());
              },
              createPath: function (t) {
                var e = this.callSuper("createPath", t),
                  i = e._getLeftTopCoords().scalarAdd(e.strokeWidth / 2);
                return (
                  (e.stroke = new T.Pattern({
                    source: this.source || this.getPatternSrcFunction(),
                    offsetX: -i.x,
                    offsetY: -i.y,
                  })),
                  e
                );
              },
            })),
            (function () {
              var t = T.util.getPointer,
                e = T.util.degreesToRadians,
                i = Math.abs,
                r = T.StaticCanvas.supports("setLineDash"),
                n = T.util.isTouchEvent,
                o = 0.5;
              for (var s in ((T.Canvas = T.util.createClass(T.StaticCanvas, {
                initialize: function (t, e) {
                  e || (e = {}),
                    (this.renderAndResetBound = this.renderAndReset.bind(this)),
                    (this.requestRenderAllBound =
                      this.requestRenderAll.bind(this)),
                    this._initStatic(t, e),
                    this._initInteractive(),
                    this._createCacheCanvas();
                },
                uniformScaling: !0,
                uniScaleKey: "shiftKey",
                centeredScaling: !1,
                centeredRotation: !1,
                centeredKey: "altKey",
                altActionKey: "shiftKey",
                interactive: !0,
                selection: !0,
                selectionKey: "shiftKey",
                altSelectionKey: null,
                selectionColor: "rgba(100, 100, 255, 0.3)",
                selectionDashArray: [],
                selectionBorderColor: "rgba(255, 255, 255, 0.3)",
                selectionLineWidth: 1,
                selectionFullyContained: !1,
                hoverCursor: "move",
                moveCursor: "move",
                defaultCursor: "default",
                freeDrawingCursor: "crosshair",
                rotationCursor: "crosshair",
                notAllowedCursor: "not-allowed",
                containerClass: "canvas-container",
                perPixelTargetFind: !1,
                targetFindTolerance: 0,
                skipTargetFind: !1,
                isDrawingMode: !1,
                preserveObjectStacking: !1,
                snapAngle: 0,
                snapThreshold: null,
                stopContextMenu: !1,
                fireRightClick: !1,
                fireMiddleClick: !1,
                targets: [],
                _hoveredTarget: null,
                _hoveredTargets: [],
                _initInteractive: function () {
                  (this._currentTransform = null),
                    (this._groupSelector = null),
                    this._initWrapperElement(),
                    this._createUpperCanvas(),
                    this._initEventListeners(),
                    this._initRetinaScaling(),
                    (this.freeDrawingBrush =
                      T.PencilBrush && new T.PencilBrush(this)),
                    this.calcOffset();
                },
                _chooseObjectsToRender: function () {
                  var t,
                    e,
                    i,
                    r = this.getActiveObjects();
                  if (r.length > 0 && !this.preserveObjectStacking) {
                    (e = []), (i = []);
                    for (var n = 0, o = this._objects.length; n < o; n++)
                      (t = this._objects[n]),
                        -1 === r.indexOf(t) ? e.push(t) : i.push(t);
                    r.length > 1 && (this._activeObject._objects = i),
                      e.push.apply(e, i);
                  } else e = this._objects;
                  return e;
                },
                renderAll: function () {
                  !this.contextTopDirty ||
                    this._groupSelector ||
                    this.isDrawingMode ||
                    (this.clearContext(this.contextTop),
                    (this.contextTopDirty = !1)),
                    this.hasLostContext && this.renderTopLayer(this.contextTop);
                  var t = this.contextContainer;
                  return (
                    this.renderCanvas(t, this._chooseObjectsToRender()), this
                  );
                },
                renderTopLayer: function (t) {
                  t.save(),
                    this.isDrawingMode &&
                      this._isCurrentlyDrawing &&
                      (this.freeDrawingBrush && this.freeDrawingBrush._render(),
                      (this.contextTopDirty = !0)),
                    this.selection &&
                      this._groupSelector &&
                      (this._drawSelection(t), (this.contextTopDirty = !0)),
                    t.restore();
                },
                renderTop: function () {
                  var t = this.contextTop;
                  return (
                    this.clearContext(t),
                    this.renderTopLayer(t),
                    this.fire("after:render"),
                    this
                  );
                },
                _normalizePointer: function (t, e) {
                  var i = t.calcTransformMatrix(),
                    r = T.util.invertTransform(i),
                    n = this.restorePointerVpt(e);
                  return T.util.transformPoint(n, r);
                },
                isTargetTransparent: function (t, e, i) {
                  if (
                    t.shouldCache() &&
                    t._cacheCanvas &&
                    t !== this._activeObject
                  ) {
                    var r = this._normalizePointer(t, { x: e, y: i }),
                      n = Math.max(t.cacheTranslationX + r.x * t.zoomX, 0),
                      o = Math.max(t.cacheTranslationY + r.y * t.zoomY, 0);
                    return T.util.isTransparent(
                      t._cacheContext,
                      Math.round(n),
                      Math.round(o),
                      this.targetFindTolerance
                    );
                  }
                  var s = this.contextCache,
                    a = t.selectionBackgroundColor,
                    l = this.viewportTransform;
                  return (
                    (t.selectionBackgroundColor = ""),
                    this.clearContext(s),
                    s.save(),
                    s.transform(l[0], l[1], l[2], l[3], l[4], l[5]),
                    t.render(s),
                    s.restore(),
                    (t.selectionBackgroundColor = a),
                    T.util.isTransparent(s, e, i, this.targetFindTolerance)
                  );
                },
                _isSelectionKeyPressed: function (t) {
                  return "[object Array]" ===
                    Object.prototype.toString.call(this.selectionKey)
                    ? !!this.selectionKey.find(function (e) {
                        return !0 === t[e];
                      })
                    : t[this.selectionKey];
                },
                _shouldClearSelection: function (t, e) {
                  var i = this.getActiveObjects(),
                    r = this._activeObject;
                  return (
                    !e ||
                    (e &&
                      r &&
                      i.length > 1 &&
                      -1 === i.indexOf(e) &&
                      r !== e &&
                      !this._isSelectionKeyPressed(t)) ||
                    (e && !e.evented) ||
                    (e && !e.selectable && r && r !== e)
                  );
                },
                _shouldCenterTransform: function (t, e, i) {
                  var r;
                  if (t)
                    return (
                      "scale" === e ||
                      "scaleX" === e ||
                      "scaleY" === e ||
                      "resizing" === e
                        ? (r = this.centeredScaling || t.centeredScaling)
                        : "rotate" === e &&
                          (r = this.centeredRotation || t.centeredRotation),
                      r ? !i : i
                    );
                },
                _getOriginFromCorner: function (t, e) {
                  var i = { x: t.originX, y: t.originY };
                  return (
                    "ml" === e || "tl" === e || "bl" === e
                      ? (i.x = "right")
                      : ("mr" !== e && "tr" !== e && "br" !== e) ||
                        (i.x = "left"),
                    "tl" === e || "mt" === e || "tr" === e
                      ? (i.y = "bottom")
                      : ("bl" !== e && "mb" !== e && "br" !== e) ||
                        (i.y = "top"),
                    i
                  );
                },
                _getActionFromCorner: function (t, e, i, r) {
                  if (!e || !t) return "drag";
                  var n = r.controls[e];
                  return n.getActionName(i, n, r);
                },
                _setupCurrentTransform: function (t, i, r) {
                  if (i) {
                    var n = this.getPointer(t),
                      o = i.__corner,
                      s = i.controls[o],
                      a =
                        r && o
                          ? s.getActionHandler(t, i, s)
                          : T.controlsUtils.dragHandler,
                      l = this._getActionFromCorner(r, o, t, i),
                      h = this._getOriginFromCorner(i, o),
                      c = t[this.centeredKey],
                      u = {
                        target: i,
                        action: l,
                        actionHandler: a,
                        corner: o,
                        scaleX: i.scaleX,
                        scaleY: i.scaleY,
                        skewX: i.skewX,
                        skewY: i.skewY,
                        offsetX: n.x - i.left,
                        offsetY: n.y - i.top,
                        originX: h.x,
                        originY: h.y,
                        ex: n.x,
                        ey: n.y,
                        lastX: n.x,
                        lastY: n.y,
                        theta: e(i.angle),
                        width: i.width * i.scaleX,
                        shiftKey: t.shiftKey,
                        altKey: c,
                        original: T.util.saveObjectTransform(i),
                      };
                    this._shouldCenterTransform(i, l, c) &&
                      ((u.originX = "center"), (u.originY = "center")),
                      (u.original.originX = h.x),
                      (u.original.originY = h.y),
                      (this._currentTransform = u),
                      this._beforeTransform(t);
                  }
                },
                setCursor: function (t) {
                  this.upperCanvasEl.style.cursor = t;
                },
                _drawSelection: function (t) {
                  var e = this._groupSelector,
                    n = e.left,
                    s = e.top,
                    a = i(n),
                    l = i(s);
                  if (
                    (this.selectionColor &&
                      ((t.fillStyle = this.selectionColor),
                      t.fillRect(
                        e.ex - (n > 0 ? 0 : -n),
                        e.ey - (s > 0 ? 0 : -s),
                        a,
                        l
                      )),
                    this.selectionLineWidth && this.selectionBorderColor)
                  )
                    if (
                      ((t.lineWidth = this.selectionLineWidth),
                      (t.strokeStyle = this.selectionBorderColor),
                      this.selectionDashArray.length > 1 && !r)
                    ) {
                      var h = e.ex + o - (n > 0 ? 0 : a),
                        c = e.ey + o - (s > 0 ? 0 : l);
                      t.beginPath(),
                        T.util.drawDashedLine(
                          t,
                          h,
                          c,
                          h + a,
                          c,
                          this.selectionDashArray
                        ),
                        T.util.drawDashedLine(
                          t,
                          h,
                          c + l - 1,
                          h + a,
                          c + l - 1,
                          this.selectionDashArray
                        ),
                        T.util.drawDashedLine(
                          t,
                          h,
                          c,
                          h,
                          c + l,
                          this.selectionDashArray
                        ),
                        T.util.drawDashedLine(
                          t,
                          h + a - 1,
                          c,
                          h + a - 1,
                          c + l,
                          this.selectionDashArray
                        ),
                        t.closePath(),
                        t.stroke();
                    } else
                      T.Object.prototype._setLineDash.call(
                        this,
                        t,
                        this.selectionDashArray
                      ),
                        t.strokeRect(
                          e.ex + o - (n > 0 ? 0 : a),
                          e.ey + o - (s > 0 ? 0 : l),
                          a,
                          l
                        );
                },
                findTarget: function (t, e) {
                  if (!this.skipTargetFind) {
                    var i,
                      r,
                      o = this.getPointer(t, !0),
                      s = this._activeObject,
                      a = this.getActiveObjects(),
                      l = n(t),
                      h = (a.length > 1 && !e) || 1 === a.length;
                    if (((this.targets = []), h && s._findTargetCorner(o, l)))
                      return s;
                    if (
                      a.length > 1 &&
                      !e &&
                      s === this._searchPossibleTargets([s], o)
                    )
                      return s;
                    if (
                      1 === a.length &&
                      s === this._searchPossibleTargets([s], o)
                    ) {
                      if (!this.preserveObjectStacking) return s;
                      (i = s), (r = this.targets), (this.targets = []);
                    }
                    var c = this._searchPossibleTargets(this._objects, o);
                    return (
                      t[this.altSelectionKey] &&
                        c &&
                        i &&
                        c !== i &&
                        ((c = i), (this.targets = r)),
                      c
                    );
                  }
                },
                _checkTarget: function (t, e, i) {
                  if (e && e.visible && e.evented && e.containsPoint(t)) {
                    if (
                      (!this.perPixelTargetFind && !e.perPixelTargetFind) ||
                      e.isEditing
                    )
                      return !0;
                    if (!this.isTargetTransparent(e, i.x, i.y)) return !0;
                  }
                },
                _searchPossibleTargets: function (t, e) {
                  for (var i, r, n = t.length; n--; ) {
                    var o = t[n],
                      s = o.group ? this._normalizePointer(o.group, e) : e;
                    if (this._checkTarget(s, o, e)) {
                      (i = t[n]).subTargetCheck &&
                        i instanceof T.Group &&
                        (r = this._searchPossibleTargets(i._objects, e)) &&
                        this.targets.push(r);
                      break;
                    }
                  }
                  return i;
                },
                restorePointerVpt: function (t) {
                  return T.util.transformPoint(
                    t,
                    T.util.invertTransform(this.viewportTransform)
                  );
                },
                getPointer: function (e, i) {
                  if (this._absolutePointer && !i) return this._absolutePointer;
                  if (this._pointer && i) return this._pointer;
                  var r,
                    n = t(e),
                    o = this.upperCanvasEl,
                    s = o.getBoundingClientRect(),
                    a = s.width || 0,
                    l = s.height || 0;
                  (a && l) ||
                    ("top" in s &&
                      "bottom" in s &&
                      (l = Math.abs(s.top - s.bottom)),
                    "right" in s &&
                      "left" in s &&
                      (a = Math.abs(s.right - s.left))),
                    this.calcOffset(),
                    (n.x = n.x - this._offset.left),
                    (n.y = n.y - this._offset.top),
                    i || (n = this.restorePointerVpt(n));
                  var h = this.getRetinaScaling();
                  return (
                    1 !== h && ((n.x /= h), (n.y /= h)),
                    (r =
                      0 === a || 0 === l
                        ? { width: 1, height: 1 }
                        : { width: o.width / a, height: o.height / l }),
                    { x: n.x * r.width, y: n.y * r.height }
                  );
                },
                _createUpperCanvas: function () {
                  var t = this.lowerCanvasEl.className.replace(
                      /\s*lower-canvas\s*/,
                      ""
                    ),
                    e = this.lowerCanvasEl,
                    i = this.upperCanvasEl;
                  i
                    ? (i.className = "")
                    : ((i = this._createCanvasElement()),
                      (this.upperCanvasEl = i)),
                    T.util.addClass(i, "upper-canvas " + t),
                    this.wrapperEl.appendChild(i),
                    this._copyCanvasStyle(e, i),
                    this._applyCanvasStyle(i),
                    (this.contextTop = i.getContext("2d"));
                },
                _createCacheCanvas: function () {
                  (this.cacheCanvasEl = this._createCanvasElement()),
                    this.cacheCanvasEl.setAttribute("width", this.width),
                    this.cacheCanvasEl.setAttribute("height", this.height),
                    (this.contextCache = this.cacheCanvasEl.getContext("2d"));
                },
                _initWrapperElement: function () {
                  (this.wrapperEl = T.util.wrapElement(
                    this.lowerCanvasEl,
                    "div",
                    { class: this.containerClass }
                  )),
                    T.util.setStyle(this.wrapperEl, {
                      width: this.width + "px",
                      height: this.height + "px",
                      position: "relative",
                    }),
                    T.util.makeElementUnselectable(this.wrapperEl);
                },
                _applyCanvasStyle: function (t) {
                  var e = this.width || t.width,
                    i = this.height || t.height;
                  T.util.setStyle(t, {
                    position: "absolute",
                    width: e + "px",
                    height: i + "px",
                    left: 0,
                    top: 0,
                    "touch-action": this.allowTouchScrolling
                      ? "manipulation"
                      : "none",
                    "-ms-touch-action": this.allowTouchScrolling
                      ? "manipulation"
                      : "none",
                  }),
                    (t.width = e),
                    (t.height = i),
                    T.util.makeElementUnselectable(t);
                },
                _copyCanvasStyle: function (t, e) {
                  e.style.cssText = t.style.cssText;
                },
                getSelectionContext: function () {
                  return this.contextTop;
                },
                getSelectionElement: function () {
                  return this.upperCanvasEl;
                },
                getActiveObject: function () {
                  return this._activeObject;
                },
                getActiveObjects: function () {
                  var t = this._activeObject;
                  return t
                    ? "activeSelection" === t.type && t._objects
                      ? t._objects.slice(0)
                      : [t]
                    : [];
                },
                _onObjectRemoved: function (t) {
                  t === this._activeObject &&
                    (this.fire("before:selection:cleared", { target: t }),
                    this._discardActiveObject(),
                    this.fire("selection:cleared", { target: t }),
                    t.fire("deselected")),
                    t === this._hoveredTarget &&
                      ((this._hoveredTarget = null),
                      (this._hoveredTargets = [])),
                    this.callSuper("_onObjectRemoved", t);
                },
                _fireSelectionEvents: function (t, e) {
                  var i = !1,
                    r = this.getActiveObjects(),
                    n = [],
                    o = [];
                  t.forEach(function (t) {
                    -1 === r.indexOf(t) &&
                      ((i = !0),
                      t.fire("deselected", { e: e, target: t }),
                      o.push(t));
                  }),
                    r.forEach(function (r) {
                      -1 === t.indexOf(r) &&
                        ((i = !0),
                        r.fire("selected", { e: e, target: r }),
                        n.push(r));
                    }),
                    t.length > 0 && r.length > 0
                      ? i &&
                        this.fire("selection:updated", {
                          e: e,
                          selected: n,
                          deselected: o,
                          updated: n[0] || o[0],
                          target: this._activeObject,
                        })
                      : r.length > 0
                      ? this.fire("selection:created", {
                          e: e,
                          selected: n,
                          target: this._activeObject,
                        })
                      : t.length > 0 &&
                        this.fire("selection:cleared", { e: e, deselected: o });
                },
                setActiveObject: function (t, e) {
                  var i = this.getActiveObjects();
                  return (
                    this._setActiveObject(t, e),
                    this._fireSelectionEvents(i, e),
                    this
                  );
                },
                _setActiveObject: function (t, e) {
                  return (
                    this._activeObject !== t &&
                    !!this._discardActiveObject(e, t) &&
                    !t.onSelect({ e: e }) &&
                    ((this._activeObject = t), !0)
                  );
                },
                _discardActiveObject: function (t, e) {
                  var i = this._activeObject;
                  if (i) {
                    if (i.onDeselect({ e: t, object: e })) return !1;
                    this._activeObject = null;
                  }
                  return !0;
                },
                discardActiveObject: function (t) {
                  var e = this.getActiveObjects(),
                    i = this.getActiveObject();
                  return (
                    e.length &&
                      this.fire("before:selection:cleared", {
                        target: i,
                        e: t,
                      }),
                    this._discardActiveObject(t),
                    this._fireSelectionEvents(e, t),
                    this
                  );
                },
                dispose: function () {
                  var t = this.wrapperEl;
                  return (
                    this.removeListeners(),
                    t.removeChild(this.upperCanvasEl),
                    t.removeChild(this.lowerCanvasEl),
                    (this.contextCache = null),
                    (this.contextTop = null),
                    ["upperCanvasEl", "cacheCanvasEl"].forEach(
                      function (t) {
                        T.util.cleanUpJsdomNode(this[t]), (this[t] = void 0);
                      }.bind(this)
                    ),
                    t.parentNode &&
                      t.parentNode.replaceChild(
                        this.lowerCanvasEl,
                        this.wrapperEl
                      ),
                    delete this.wrapperEl,
                    T.StaticCanvas.prototype.dispose.call(this),
                    this
                  );
                },
                clear: function () {
                  return (
                    this.discardActiveObject(),
                    this.clearContext(this.contextTop),
                    this.callSuper("clear")
                  );
                },
                drawControls: function (t) {
                  var e = this._activeObject;
                  e && e._renderControls(t);
                },
                _toObject: function (t, e, i) {
                  var r = this._realizeGroupTransformOnObject(t),
                    n = this.callSuper("_toObject", t, e, i);
                  return this._unwindGroupTransformOnObject(t, r), n;
                },
                _realizeGroupTransformOnObject: function (t) {
                  if (
                    t.group &&
                    "activeSelection" === t.group.type &&
                    this._activeObject === t.group
                  ) {
                    var e = {};
                    return (
                      [
                        "angle",
                        "flipX",
                        "flipY",
                        "left",
                        "scaleX",
                        "scaleY",
                        "skewX",
                        "skewY",
                        "top",
                      ].forEach(function (i) {
                        e[i] = t[i];
                      }),
                      T.util.addTransformToObject(
                        t,
                        this._activeObject.calcOwnMatrix()
                      ),
                      e
                    );
                  }
                  return null;
                },
                _unwindGroupTransformOnObject: function (t, e) {
                  e && t.set(e);
                },
                _setSVGObject: function (t, e, i) {
                  var r = this._realizeGroupTransformOnObject(e);
                  this.callSuper("_setSVGObject", t, e, i),
                    this._unwindGroupTransformOnObject(e, r);
                },
                setViewportTransform: function (t) {
                  this.renderOnAddRemove &&
                    this._activeObject &&
                    this._activeObject.isEditing &&
                    this._activeObject.clearContextTop(),
                    T.StaticCanvas.prototype.setViewportTransform.call(this, t);
                },
              })),
              T.StaticCanvas))
                "prototype" !== s && (T.Canvas[s] = T.StaticCanvas[s]);
            })(),
            (function () {
              var t = T.util.addListener,
                e = T.util.removeListener,
                i = { passive: !1 };
              function r(t, e) {
                return t.button && t.button === e - 1;
              }
              T.util.object.extend(T.Canvas.prototype, {
                mainTouchId: null,
                _initEventListeners: function () {
                  this.removeListeners(),
                    this._bindEvents(),
                    this.addOrRemove(t, "add");
                },
                _getEventPrefix: function () {
                  return this.enablePointerEvents ? "pointer" : "mouse";
                },
                addOrRemove: function (t, e) {
                  var r = this.upperCanvasEl,
                    n = this._getEventPrefix();
                  t(T.window, "resize", this._onResize),
                    t(r, n + "down", this._onMouseDown),
                    t(r, n + "move", this._onMouseMove, i),
                    t(r, n + "out", this._onMouseOut),
                    t(r, n + "enter", this._onMouseEnter),
                    t(r, "wheel", this._onMouseWheel),
                    t(r, "contextmenu", this._onContextMenu),
                    t(r, "dblclick", this._onDoubleClick),
                    t(r, "dragover", this._onDragOver),
                    t(r, "dragenter", this._onDragEnter),
                    t(r, "dragleave", this._onDragLeave),
                    t(r, "drop", this._onDrop),
                    this.enablePointerEvents ||
                      t(r, "touchstart", this._onTouchStart, i),
                    "undefined" != typeof eventjs &&
                      e in eventjs &&
                      (eventjs[e](r, "gesture", this._onGesture),
                      eventjs[e](r, "drag", this._onDrag),
                      eventjs[e](r, "orientation", this._onOrientationChange),
                      eventjs[e](r, "shake", this._onShake),
                      eventjs[e](r, "longpress", this._onLongPress));
                },
                removeListeners: function () {
                  this.addOrRemove(e, "remove");
                  var t = this._getEventPrefix();
                  e(T.document, t + "up", this._onMouseUp),
                    e(T.document, "touchend", this._onTouchEnd, i),
                    e(T.document, t + "move", this._onMouseMove, i),
                    e(T.document, "touchmove", this._onMouseMove, i);
                },
                _bindEvents: function () {
                  this.eventsBound ||
                    ((this._onMouseDown = this._onMouseDown.bind(this)),
                    (this._onTouchStart = this._onTouchStart.bind(this)),
                    (this._onMouseMove = this._onMouseMove.bind(this)),
                    (this._onMouseUp = this._onMouseUp.bind(this)),
                    (this._onTouchEnd = this._onTouchEnd.bind(this)),
                    (this._onResize = this._onResize.bind(this)),
                    (this._onGesture = this._onGesture.bind(this)),
                    (this._onDrag = this._onDrag.bind(this)),
                    (this._onShake = this._onShake.bind(this)),
                    (this._onLongPress = this._onLongPress.bind(this)),
                    (this._onOrientationChange =
                      this._onOrientationChange.bind(this)),
                    (this._onMouseWheel = this._onMouseWheel.bind(this)),
                    (this._onMouseOut = this._onMouseOut.bind(this)),
                    (this._onMouseEnter = this._onMouseEnter.bind(this)),
                    (this._onContextMenu = this._onContextMenu.bind(this)),
                    (this._onDoubleClick = this._onDoubleClick.bind(this)),
                    (this._onDragOver = this._onDragOver.bind(this)),
                    (this._onDragEnter = this._simpleEventHandler.bind(
                      this,
                      "dragenter"
                    )),
                    (this._onDragLeave = this._simpleEventHandler.bind(
                      this,
                      "dragleave"
                    )),
                    (this._onDrop = this._simpleEventHandler.bind(
                      this,
                      "drop"
                    )),
                    (this.eventsBound = !0));
                },
                _onGesture: function (t, e) {
                  this.__onTransformGesture && this.__onTransformGesture(t, e);
                },
                _onDrag: function (t, e) {
                  this.__onDrag && this.__onDrag(t, e);
                },
                _onMouseWheel: function (t) {
                  this.__onMouseWheel(t);
                },
                _onMouseOut: function (t) {
                  var e = this._hoveredTarget;
                  this.fire("mouse:out", { target: e, e: t }),
                    (this._hoveredTarget = null),
                    e && e.fire("mouseout", { e: t });
                  var i = this;
                  this._hoveredTargets.forEach(function (r) {
                    i.fire("mouse:out", { target: e, e: t }),
                      r && e.fire("mouseout", { e: t });
                  }),
                    (this._hoveredTargets = []),
                    this._iTextInstances &&
                      this._iTextInstances.forEach(function (t) {
                        t.isEditing && t.hiddenTextarea.focus();
                      });
                },
                _onMouseEnter: function (t) {
                  this._currentTransform ||
                    this.findTarget(t) ||
                    (this.fire("mouse:over", { target: null, e: t }),
                    (this._hoveredTarget = null),
                    (this._hoveredTargets = []));
                },
                _onOrientationChange: function (t, e) {
                  this.__onOrientationChange &&
                    this.__onOrientationChange(t, e);
                },
                _onShake: function (t, e) {
                  this.__onShake && this.__onShake(t, e);
                },
                _onLongPress: function (t, e) {
                  this.__onLongPress && this.__onLongPress(t, e);
                },
                _onDragOver: function (t) {
                  t.preventDefault();
                  var e = this._simpleEventHandler("dragover", t);
                  this._fireEnterLeaveEvents(e, t);
                },
                _onContextMenu: function (t) {
                  return (
                    this.stopContextMenu &&
                      (t.stopPropagation(), t.preventDefault()),
                    !1
                  );
                },
                _onDoubleClick: function (t) {
                  this._cacheTransformEventData(t),
                    this._handleEvent(t, "dblclick"),
                    this._resetTransformEventData(t);
                },
                getPointerId: function (t) {
                  var e = t.changedTouches;
                  return e
                    ? e[0] && e[0].identifier
                    : this.enablePointerEvents
                    ? t.pointerId
                    : -1;
                },
                _isMainEvent: function (t) {
                  return (
                    !0 === t.isPrimary ||
                    (!1 !== t.isPrimary &&
                      (("touchend" === t.type && 0 === t.touches.length) ||
                        !t.changedTouches ||
                        t.changedTouches[0].identifier === this.mainTouchId))
                  );
                },
                _onTouchStart: function (r) {
                  r.preventDefault(),
                    null === this.mainTouchId &&
                      (this.mainTouchId = this.getPointerId(r)),
                    this.__onMouseDown(r),
                    this._resetTransformEventData();
                  var n = this.upperCanvasEl,
                    o = this._getEventPrefix();
                  t(T.document, "touchend", this._onTouchEnd, i),
                    t(T.document, "touchmove", this._onMouseMove, i),
                    e(n, o + "down", this._onMouseDown);
                },
                _onMouseDown: function (r) {
                  this.__onMouseDown(r), this._resetTransformEventData();
                  var n = this.upperCanvasEl,
                    o = this._getEventPrefix();
                  e(n, o + "move", this._onMouseMove, i),
                    t(T.document, o + "up", this._onMouseUp),
                    t(T.document, o + "move", this._onMouseMove, i);
                },
                _onTouchEnd: function (r) {
                  if (!(r.touches.length > 0)) {
                    this.__onMouseUp(r),
                      this._resetTransformEventData(),
                      (this.mainTouchId = null);
                    var n = this._getEventPrefix();
                    e(T.document, "touchend", this._onTouchEnd, i),
                      e(T.document, "touchmove", this._onMouseMove, i);
                    var o = this;
                    this._willAddMouseDown &&
                      clearTimeout(this._willAddMouseDown),
                      (this._willAddMouseDown = setTimeout(function () {
                        t(o.upperCanvasEl, n + "down", o._onMouseDown),
                          (o._willAddMouseDown = 0);
                      }, 400));
                  }
                },
                _onMouseUp: function (r) {
                  this.__onMouseUp(r), this._resetTransformEventData();
                  var n = this.upperCanvasEl,
                    o = this._getEventPrefix();
                  this._isMainEvent(r) &&
                    (e(T.document, o + "up", this._onMouseUp),
                    e(T.document, o + "move", this._onMouseMove, i),
                    t(n, o + "move", this._onMouseMove, i));
                },
                _onMouseMove: function (t) {
                  !this.allowTouchScrolling &&
                    t.preventDefault &&
                    t.preventDefault(),
                    this.__onMouseMove(t);
                },
                _onResize: function () {
                  this.calcOffset();
                },
                _shouldRender: function (t) {
                  var e = this._activeObject;
                  return (
                    !!(!!e != !!t || (e && t && e !== t)) ||
                    (e && e.isEditing, !1)
                  );
                },
                __onMouseUp: function (t) {
                  var e,
                    i = this._currentTransform,
                    n = this._groupSelector,
                    o = !1,
                    s = !n || (0 === n.left && 0 === n.top);
                  if (
                    (this._cacheTransformEventData(t),
                    (e = this._target),
                    this._handleEvent(t, "up:before"),
                    r(t, 3))
                  )
                    this.fireRightClick && this._handleEvent(t, "up", 3, s);
                  else {
                    if (r(t, 2))
                      return (
                        this.fireMiddleClick &&
                          this._handleEvent(t, "up", 2, s),
                        void this._resetTransformEventData()
                      );
                    if (this.isDrawingMode && this._isCurrentlyDrawing)
                      this._onMouseUpInDrawingMode(t);
                    else if (this._isMainEvent(t)) {
                      if (
                        (i &&
                          (this._finalizeCurrentTransform(t),
                          (o = i.actionPerformed)),
                        !s)
                      ) {
                        var a = e === this._activeObject;
                        this._maybeGroupObjects(t),
                          o ||
                            (o =
                              this._shouldRender(e) ||
                              (!a && e === this._activeObject));
                      }
                      if (e) {
                        if (
                          e.selectable &&
                          e !== this._activeObject &&
                          "up" === e.activeOn
                        )
                          this.setActiveObject(e, t), (o = !0);
                        else {
                          var l = e._findTargetCorner(
                              this.getPointer(t, !0),
                              T.util.isTouchEvent(t)
                            ),
                            h = e.controls[l],
                            c = h && h.getMouseUpHandler(t, e, h);
                          if (c) {
                            var u = this.getPointer(t);
                            c(t, i, u.x, u.y);
                          }
                        }
                        e.isMoving = !1;
                      }
                      this._setCursorFromEvent(t, e),
                        this._handleEvent(t, "up", 1, s),
                        (this._groupSelector = null),
                        (this._currentTransform = null),
                        e && (e.__corner = 0),
                        o ? this.requestRenderAll() : s || this.renderTop();
                    }
                  }
                },
                _simpleEventHandler: function (t, e) {
                  var i = this.findTarget(e),
                    r = this.targets,
                    n = { e: e, target: i, subTargets: r };
                  if ((this.fire(t, n), i && i.fire(t, n), !r)) return i;
                  for (var o = 0; o < r.length; o++) r[o].fire(t, n);
                  return i;
                },
                _handleEvent: function (t, e, i, r) {
                  var n = this._target,
                    o = this.targets || [],
                    s = {
                      e: t,
                      target: n,
                      subTargets: o,
                      button: i || 1,
                      isClick: r || !1,
                      pointer: this._pointer,
                      absolutePointer: this._absolutePointer,
                      transform: this._currentTransform,
                    };
                  "up" === e &&
                    ((s.currentTarget = this.findTarget(t)),
                    (s.currentSubTargets = this.targets)),
                    this.fire("mouse:" + e, s),
                    n && n.fire("mouse" + e, s);
                  for (var a = 0; a < o.length; a++) o[a].fire("mouse" + e, s);
                },
                _finalizeCurrentTransform: function (t) {
                  var e,
                    i = this._currentTransform,
                    r = i.target,
                    n = { e: t, target: r, transform: i, action: i.action };
                  r._scaling && (r._scaling = !1),
                    r.setCoords(),
                    (i.actionPerformed ||
                      (this.stateful && r.hasStateChanged())) &&
                      (i.actionPerformed &&
                        ((e = this._addEventOptions(n, i)), this._fire(e, n)),
                      this._fire("modified", n));
                },
                _addEventOptions: function (t, e) {
                  var i, r;
                  switch (e.action) {
                    case "scaleX":
                      (i = "scaled"), (r = "x");
                      break;
                    case "scaleY":
                      (i = "scaled"), (r = "y");
                      break;
                    case "skewX":
                      (i = "skewed"), (r = "x");
                      break;
                    case "skewY":
                      (i = "skewed"), (r = "y");
                      break;
                    case "scale":
                      (i = "scaled"), (r = "equally");
                      break;
                    case "rotate":
                      i = "rotated";
                      break;
                    case "drag":
                      i = "moved";
                  }
                  return (t.by = r), i;
                },
                _onMouseDownInDrawingMode: function (t) {
                  (this._isCurrentlyDrawing = !0),
                    this.getActiveObject() &&
                      this.discardActiveObject(t).requestRenderAll();
                  var e = this.getPointer(t);
                  this.freeDrawingBrush.onMouseDown(e, { e: t, pointer: e }),
                    this._handleEvent(t, "down");
                },
                _onMouseMoveInDrawingMode: function (t) {
                  if (this._isCurrentlyDrawing) {
                    var e = this.getPointer(t);
                    this.freeDrawingBrush.onMouseMove(e, { e: t, pointer: e });
                  }
                  this.setCursor(this.freeDrawingCursor),
                    this._handleEvent(t, "move");
                },
                _onMouseUpInDrawingMode: function (t) {
                  var e = this.getPointer(t);
                  (this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({
                    e: t,
                    pointer: e,
                  })),
                    this._handleEvent(t, "up");
                },
                __onMouseDown: function (t) {
                  this._cacheTransformEventData(t),
                    this._handleEvent(t, "down:before");
                  var e = this._target;
                  if (r(t, 3))
                    this.fireRightClick && this._handleEvent(t, "down", 3);
                  else if (r(t, 2))
                    this.fireMiddleClick && this._handleEvent(t, "down", 2);
                  else if (this.isDrawingMode)
                    this._onMouseDownInDrawingMode(t);
                  else if (this._isMainEvent(t) && !this._currentTransform) {
                    var i = this._pointer;
                    this._previousPointer = i;
                    var n = this._shouldRender(e),
                      o = this._shouldGroup(t, e);
                    if (
                      (this._shouldClearSelection(t, e)
                        ? this.discardActiveObject(t)
                        : o &&
                          (this._handleGrouping(t, e),
                          (e = this._activeObject)),
                      !this.selection ||
                        (e &&
                          (e.selectable ||
                            e.isEditing ||
                            e === this._activeObject)) ||
                        (this._groupSelector = {
                          ex: i.x,
                          ey: i.y,
                          top: 0,
                          left: 0,
                        }),
                      e)
                    ) {
                      var s = e === this._activeObject;
                      e.selectable &&
                        "down" === e.activeOn &&
                        this.setActiveObject(e, t);
                      var a = e._findTargetCorner(
                        this.getPointer(t, !0),
                        T.util.isTouchEvent(t)
                      );
                      if (
                        ((e.__corner = a),
                        e === this._activeObject && (a || !o))
                      ) {
                        this._setupCurrentTransform(t, e, s);
                        var l = e.controls[a],
                          h =
                            ((i = this.getPointer(t)),
                            l && l.getMouseDownHandler(t, e, l));
                        h && h(t, this._currentTransform, i.x, i.y);
                      }
                    }
                    this._handleEvent(t, "down"),
                      (n || o) && this.requestRenderAll();
                  }
                },
                _resetTransformEventData: function () {
                  (this._target = null),
                    (this._pointer = null),
                    (this._absolutePointer = null);
                },
                _cacheTransformEventData: function (t) {
                  this._resetTransformEventData(),
                    (this._pointer = this.getPointer(t, !0)),
                    (this._absolutePointer = this.restorePointerVpt(
                      this._pointer
                    )),
                    (this._target = this._currentTransform
                      ? this._currentTransform.target
                      : this.findTarget(t) || null);
                },
                _beforeTransform: function (t) {
                  var e = this._currentTransform;
                  this.stateful && e.target.saveState(),
                    this.fire("before:transform", { e: t, transform: e });
                },
                __onMouseMove: function (t) {
                  var e, i;
                  if (
                    (this._handleEvent(t, "move:before"),
                    this._cacheTransformEventData(t),
                    this.isDrawingMode)
                  )
                    this._onMouseMoveInDrawingMode(t);
                  else if (this._isMainEvent(t)) {
                    var r = this._groupSelector;
                    r
                      ? ((i = this._pointer),
                        (r.left = i.x - r.ex),
                        (r.top = i.y - r.ey),
                        this.renderTop())
                      : this._currentTransform
                      ? this._transformObject(t)
                      : ((e = this.findTarget(t) || null),
                        this._setCursorFromEvent(t, e),
                        this._fireOverOutEvents(e, t)),
                      this._handleEvent(t, "move"),
                      this._resetTransformEventData();
                  }
                },
                _fireOverOutEvents: function (t, e) {
                  var i = this._hoveredTarget,
                    r = this._hoveredTargets,
                    n = this.targets,
                    o = Math.max(r.length, n.length);
                  this.fireSyntheticInOutEvents(t, e, {
                    oldTarget: i,
                    evtOut: "mouseout",
                    canvasEvtOut: "mouse:out",
                    evtIn: "mouseover",
                    canvasEvtIn: "mouse:over",
                  });
                  for (var s = 0; s < o; s++)
                    this.fireSyntheticInOutEvents(n[s], e, {
                      oldTarget: r[s],
                      evtOut: "mouseout",
                      evtIn: "mouseover",
                    });
                  (this._hoveredTarget = t),
                    (this._hoveredTargets = this.targets.concat());
                },
                _fireEnterLeaveEvents: function (t, e) {
                  var i = this._draggedoverTarget,
                    r = this._hoveredTargets,
                    n = this.targets,
                    o = Math.max(r.length, n.length);
                  this.fireSyntheticInOutEvents(t, e, {
                    oldTarget: i,
                    evtOut: "dragleave",
                    evtIn: "dragenter",
                  });
                  for (var s = 0; s < o; s++)
                    this.fireSyntheticInOutEvents(n[s], e, {
                      oldTarget: r[s],
                      evtOut: "dragleave",
                      evtIn: "dragenter",
                    });
                  this._draggedoverTarget = t;
                },
                fireSyntheticInOutEvents: function (t, e, i) {
                  var r,
                    n,
                    o,
                    s = i.oldTarget,
                    a = s !== t,
                    l = i.canvasEvtIn,
                    h = i.canvasEvtOut;
                  a &&
                    ((r = { e: e, target: t, previousTarget: s }),
                    (n = { e: e, target: s, nextTarget: t })),
                    (o = t && a),
                    s && a && (h && this.fire(h, n), s.fire(i.evtOut, n)),
                    o && (l && this.fire(l, r), t.fire(i.evtIn, r));
                },
                __onMouseWheel: function (t) {
                  this._cacheTransformEventData(t),
                    this._handleEvent(t, "wheel"),
                    this._resetTransformEventData();
                },
                _transformObject: function (t) {
                  var e = this.getPointer(t),
                    i = this._currentTransform;
                  (i.reset = !1),
                    (i.shiftKey = t.shiftKey),
                    (i.altKey = t[this.centeredKey]),
                    this._performTransformAction(t, i, e),
                    i.actionPerformed && this.requestRenderAll();
                },
                _performTransformAction: function (t, e, i) {
                  var r = i.x,
                    n = i.y,
                    o = e.action,
                    s = !1,
                    a = e.actionHandler;
                  a && (s = a(t, e, r, n)),
                    "drag" === o &&
                      s &&
                      ((e.target.isMoving = !0),
                      this.setCursor(e.target.moveCursor || this.moveCursor)),
                    (e.actionPerformed = e.actionPerformed || s);
                },
                _fire: T.controlsUtils.fireEvent,
                _setCursorFromEvent: function (t, e) {
                  if (!e) return this.setCursor(this.defaultCursor), !1;
                  var i = e.hoverCursor || this.hoverCursor,
                    r =
                      this._activeObject &&
                      "activeSelection" === this._activeObject.type
                        ? this._activeObject
                        : null,
                    n =
                      (!r || !r.contains(e)) &&
                      e._findTargetCorner(this.getPointer(t, !0));
                  n
                    ? this.setCursor(this.getCornerCursor(n, e, t))
                    : (e.subTargetCheck &&
                        this.targets
                          .concat()
                          .reverse()
                          .map(function (t) {
                            i = t.hoverCursor || i;
                          }),
                      this.setCursor(i));
                },
                getCornerCursor: function (t, e, i) {
                  var r = e.controls[t];
                  return r.cursorStyleHandler(i, r, e);
                },
              });
            })(),
            (m = Math.min),
            (y = Math.max),
            T.util.object.extend(T.Canvas.prototype, {
              _shouldGroup: function (t, e) {
                var i = this._activeObject;
                return (
                  i &&
                  this._isSelectionKeyPressed(t) &&
                  e &&
                  e.selectable &&
                  this.selection &&
                  (i !== e || "activeSelection" === i.type) &&
                  !e.onSelect({ e: t })
                );
              },
              _handleGrouping: function (t, e) {
                var i = this._activeObject;
                i.__corner ||
                  ((e !== i ||
                    ((e = this.findTarget(t, !0)) && e.selectable)) &&
                    (i && "activeSelection" === i.type
                      ? this._updateActiveSelection(e, t)
                      : this._createActiveSelection(e, t)));
              },
              _updateActiveSelection: function (t, e) {
                var i = this._activeObject,
                  r = i._objects.slice(0);
                i.contains(t)
                  ? (i.removeWithUpdate(t),
                    (this._hoveredTarget = t),
                    (this._hoveredTargets = this.targets.concat()),
                    1 === i.size() && this._setActiveObject(i.item(0), e))
                  : (i.addWithUpdate(t),
                    (this._hoveredTarget = i),
                    (this._hoveredTargets = this.targets.concat())),
                  this._fireSelectionEvents(r, e);
              },
              _createActiveSelection: function (t, e) {
                var i = this.getActiveObjects(),
                  r = this._createGroup(t);
                (this._hoveredTarget = r),
                  this._setActiveObject(r, e),
                  this._fireSelectionEvents(i, e);
              },
              _createGroup: function (t) {
                var e = this._objects,
                  i =
                    e.indexOf(this._activeObject) < e.indexOf(t)
                      ? [this._activeObject, t]
                      : [t, this._activeObject];
                return (
                  this._activeObject.isEditing &&
                    this._activeObject.exitEditing(),
                  new T.ActiveSelection(i, { canvas: this })
                );
              },
              _groupSelectedObjects: function (t) {
                var e,
                  i = this._collectObjects(t);
                1 === i.length
                  ? this.setActiveObject(i[0], t)
                  : i.length > 1 &&
                    ((e = new T.ActiveSelection(i.reverse(), { canvas: this })),
                    this.setActiveObject(e, t));
              },
              _collectObjects: function (t) {
                for (
                  var e,
                    i = [],
                    r = this._groupSelector.ex,
                    n = this._groupSelector.ey,
                    o = r + this._groupSelector.left,
                    s = n + this._groupSelector.top,
                    a = new T.Point(m(r, o), m(n, s)),
                    l = new T.Point(y(r, o), y(n, s)),
                    h = !this.selectionFullyContained,
                    c = r === o && n === s,
                    u = this._objects.length;
                  u-- &&
                  !(
                    (e = this._objects[u]) &&
                    e.selectable &&
                    e.visible &&
                    ((h && e.intersectsWithRect(a, l)) ||
                      e.isContainedWithinRect(a, l) ||
                      (h && e.containsPoint(a)) ||
                      (h && e.containsPoint(l))) &&
                    (i.push(e), c)
                  );

                );
                return (
                  i.length > 1 &&
                    (i = i.filter(function (e) {
                      return !e.onSelect({ e: t });
                    })),
                  i
                );
              },
              _maybeGroupObjects: function (t) {
                this.selection &&
                  this._groupSelector &&
                  this._groupSelectedObjects(t),
                  this.setCursor(this.defaultCursor),
                  (this._groupSelector = null);
              },
            }),
            T.util.object.extend(T.StaticCanvas.prototype, {
              toDataURL: function (t) {
                t || (t = {});
                var e = t.format || "png",
                  i = t.quality || 1,
                  r =
                    (t.multiplier || 1) *
                    (t.enableRetinaScaling ? this.getRetinaScaling() : 1),
                  n = this.toCanvasElement(r, t);
                return T.util.toDataURL(n, e, i);
              },
              toCanvasElement: function (t, e) {
                t = t || 1;
                var i = ((e = e || {}).width || this.width) * t,
                  r = (e.height || this.height) * t,
                  n = this.getZoom(),
                  o = this.width,
                  s = this.height,
                  a = n * t,
                  l = this.viewportTransform,
                  h = (l[4] - (e.left || 0)) * t,
                  c = (l[5] - (e.top || 0)) * t,
                  u = this.interactive,
                  f = [a, 0, 0, a, h, c],
                  d = this.enableRetinaScaling,
                  p = T.util.createCanvasElement(),
                  g = this.contextTop;
                return (
                  (p.width = i),
                  (p.height = r),
                  (this.contextTop = null),
                  (this.enableRetinaScaling = !1),
                  (this.interactive = !1),
                  (this.viewportTransform = f),
                  (this.width = i),
                  (this.height = r),
                  this.calcViewportBoundaries(),
                  this.renderCanvas(p.getContext("2d"), this._objects),
                  (this.viewportTransform = l),
                  (this.width = o),
                  (this.height = s),
                  this.calcViewportBoundaries(),
                  (this.interactive = u),
                  (this.enableRetinaScaling = d),
                  (this.contextTop = g),
                  p
                );
              },
            }),
            T.util.object.extend(T.StaticCanvas.prototype, {
              loadFromJSON: function (t, e, i) {
                if (t) {
                  var r =
                      "string" == typeof t
                        ? JSON.parse(t)
                        : T.util.object.clone(t),
                    n = this,
                    o = r.clipPath,
                    s = this.renderOnAddRemove;
                  return (
                    (this.renderOnAddRemove = !1),
                    delete r.clipPath,
                    this._enlivenObjects(
                      r.objects,
                      function (t) {
                        n.clear(),
                          n._setBgOverlay(r, function () {
                            o
                              ? n._enlivenObjects([o], function (i) {
                                  (n.clipPath = i[0]),
                                    n.__setupCanvas.call(n, r, t, s, e);
                                })
                              : n.__setupCanvas.call(n, r, t, s, e);
                          });
                      },
                      i
                    ),
                    this
                  );
                }
              },
              __setupCanvas: function (t, e, i, r) {
                var n = this;
                e.forEach(function (t, e) {
                  n.insertAt(t, e);
                }),
                  (this.renderOnAddRemove = i),
                  delete t.objects,
                  delete t.backgroundImage,
                  delete t.overlayImage,
                  delete t.background,
                  delete t.overlay,
                  this._setOptions(t),
                  this.renderAll(),
                  r && r();
              },
              _setBgOverlay: function (t, e) {
                var i = {
                  backgroundColor: !1,
                  overlayColor: !1,
                  backgroundImage: !1,
                  overlayImage: !1,
                };
                if (
                  t.backgroundImage ||
                  t.overlayImage ||
                  t.background ||
                  t.overlay
                ) {
                  var r = function () {
                    i.backgroundImage &&
                      i.overlayImage &&
                      i.backgroundColor &&
                      i.overlayColor &&
                      e &&
                      e();
                  };
                  this.__setBgOverlay(
                    "backgroundImage",
                    t.backgroundImage,
                    i,
                    r
                  ),
                    this.__setBgOverlay("overlayImage", t.overlayImage, i, r),
                    this.__setBgOverlay("backgroundColor", t.background, i, r),
                    this.__setBgOverlay("overlayColor", t.overlay, i, r);
                } else e && e();
              },
              __setBgOverlay: function (t, e, i, r) {
                var n = this;
                if (!e) return (i[t] = !0), void (r && r());
                "backgroundImage" === t || "overlayImage" === t
                  ? T.util.enlivenObjects([e], function (e) {
                      (n[t] = e[0]), (i[t] = !0), r && r();
                    })
                  : this["set" + T.util.string.capitalize(t, !0)](
                      e,
                      function () {
                        (i[t] = !0), r && r();
                      }
                    );
              },
              _enlivenObjects: function (t, e, i) {
                t && 0 !== t.length
                  ? T.util.enlivenObjects(
                      t,
                      function (t) {
                        e && e(t);
                      },
                      null,
                      i
                    )
                  : e && e([]);
              },
              _toDataURL: function (t, e) {
                this.clone(function (i) {
                  e(i.toDataURL(t));
                });
              },
              _toDataURLWithMultiplier: function (t, e, i) {
                this.clone(function (r) {
                  i(r.toDataURLWithMultiplier(t, e));
                });
              },
              clone: function (t, e) {
                var i = JSON.stringify(this.toJSON(e));
                this.cloneWithoutData(function (e) {
                  e.loadFromJSON(i, function () {
                    t && t(e);
                  });
                });
              },
              cloneWithoutData: function (t) {
                var e = T.util.createCanvasElement();
                (e.width = this.width), (e.height = this.height);
                var i = new T.Canvas(e);
                this.backgroundImage
                  ? (i.setBackgroundImage(
                      this.backgroundImage.src,
                      function () {
                        i.renderAll(), t && t(i);
                      }
                    ),
                    (i.backgroundImageOpacity = this.backgroundImageOpacity),
                    (i.backgroundImageStretch = this.backgroundImageStretch))
                  : t && t(i);
              },
            }),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.object.extend,
                r = e.util.object.clone,
                n = e.util.toFixed,
                o = e.util.string.capitalize,
                s = e.util.degreesToRadians,
                a = e.StaticCanvas.supports("setLineDash"),
                l = !e.isLikelyNode;
              e.Object ||
                ((e.Object = e.util.createClass(e.CommonMethods, {
                  type: "object",
                  originX: "left",
                  originY: "top",
                  top: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                  scaleX: 1,
                  scaleY: 1,
                  flipX: !1,
                  flipY: !1,
                  opacity: 1,
                  angle: 0,
                  skewX: 0,
                  skewY: 0,
                  cornerSize: 13,
                  touchCornerSize: 24,
                  transparentCorners: !0,
                  hoverCursor: null,
                  moveCursor: null,
                  padding: 0,
                  borderColor: "rgb(178,204,255)",
                  borderDashArray: null,
                  cornerColor: "rgb(178,204,255)",
                  cornerStrokeColor: null,
                  cornerStyle: "rect",
                  cornerDashArray: null,
                  centeredScaling: !1,
                  centeredRotation: !0,
                  fill: "rgb(0,0,0)",
                  fillRule: "nonzero",
                  globalCompositeOperation: "source-over",
                  backgroundColor: "",
                  selectionBackgroundColor: "",
                  stroke: null,
                  strokeWidth: 1,
                  strokeDashArray: null,
                  strokeDashOffset: 0,
                  strokeLineCap: "butt",
                  strokeLineJoin: "miter",
                  strokeMiterLimit: 4,
                  shadow: null,
                  borderOpacityWhenMoving: 0.4,
                  borderScaleFactor: 1,
                  minScaleLimit: 0,
                  selectable: !0,
                  evented: !0,
                  visible: !0,
                  hasControls: !0,
                  hasBorders: !0,
                  perPixelTargetFind: !1,
                  includeDefaultValues: !0,
                  lockMovementX: !1,
                  lockMovementY: !1,
                  lockRotation: !1,
                  lockScalingX: !1,
                  lockScalingY: !1,
                  lockSkewingX: !1,
                  lockSkewingY: !1,
                  lockScalingFlip: !1,
                  excludeFromExport: !1,
                  objectCaching: l,
                  statefullCache: !1,
                  noScaleCache: !0,
                  strokeUniform: !1,
                  dirty: !0,
                  __corner: 0,
                  paintFirst: "fill",
                  activeOn: "down",
                  stateProperties:
                    "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(
                      " "
                    ),
                  cacheProperties:
                    "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(
                      " "
                    ),
                  colorProperties: "fill stroke backgroundColor".split(" "),
                  clipPath: void 0,
                  inverted: !1,
                  absolutePositioned: !1,
                  initialize: function (t) {
                    t && this.setOptions(t);
                  },
                  _createCacheCanvas: function () {
                    (this._cacheProperties = {}),
                      (this._cacheCanvas = e.util.createCanvasElement()),
                      (this._cacheContext = this._cacheCanvas.getContext("2d")),
                      this._updateCacheCanvas(),
                      (this.dirty = !0);
                  },
                  _limitCacheSize: function (t) {
                    var i = e.perfLimitSizeTotal,
                      r = t.width,
                      n = t.height,
                      o = e.maxCacheSideLimit,
                      s = e.minCacheSideLimit;
                    if (r <= o && n <= o && r * n <= i)
                      return r < s && (t.width = s), n < s && (t.height = s), t;
                    var a = r / n,
                      l = e.util.limitDimsByArea(a, i),
                      h = e.util.capValue,
                      c = h(s, l.x, o),
                      u = h(s, l.y, o);
                    return (
                      r > c &&
                        ((t.zoomX /= r / c), (t.width = c), (t.capped = !0)),
                      n > u &&
                        ((t.zoomY /= n / u), (t.height = u), (t.capped = !0)),
                      t
                    );
                  },
                  _getCacheCanvasDimensions: function () {
                    var t = this.getTotalObjectScaling(),
                      e = this._getTransformedDimensions(0, 0),
                      i = (e.x * t.scaleX) / this.scaleX,
                      r = (e.y * t.scaleY) / this.scaleY;
                    return {
                      width: i + 2,
                      height: r + 2,
                      zoomX: t.scaleX,
                      zoomY: t.scaleY,
                      x: i,
                      y: r,
                    };
                  },
                  _updateCacheCanvas: function () {
                    var t = this.canvas;
                    if (this.noScaleCache && t && t._currentTransform) {
                      var i = t._currentTransform.target,
                        r = t._currentTransform.action;
                      if (this === i && r.slice && "scale" === r.slice(0, 5))
                        return !1;
                    }
                    var n,
                      o,
                      s = this._cacheCanvas,
                      a = this._limitCacheSize(
                        this._getCacheCanvasDimensions()
                      ),
                      l = e.minCacheSideLimit,
                      h = a.width,
                      c = a.height,
                      u = a.zoomX,
                      f = a.zoomY,
                      d = h !== this.cacheWidth || c !== this.cacheHeight,
                      p = this.zoomX !== u || this.zoomY !== f,
                      g = d || p,
                      v = 0,
                      m = 0,
                      y = !1;
                    if (d) {
                      var _ = this._cacheCanvas.width,
                        b = this._cacheCanvas.height,
                        x = h > _ || c > b;
                      (y =
                        x || ((h < 0.9 * _ || c < 0.9 * b) && _ > l && b > l)),
                        x &&
                          !a.capped &&
                          (h > l || c > l) &&
                          ((v = 0.1 * h), (m = 0.1 * c));
                    }
                    return (
                      !!g &&
                      (y
                        ? ((s.width = Math.ceil(h + v)),
                          (s.height = Math.ceil(c + m)))
                        : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0),
                          this._cacheContext.clearRect(
                            0,
                            0,
                            s.width,
                            s.height
                          )),
                      (n = a.x / 2),
                      (o = a.y / 2),
                      (this.cacheTranslationX =
                        Math.round(s.width / 2 - n) + n),
                      (this.cacheTranslationY =
                        Math.round(s.height / 2 - o) + o),
                      (this.cacheWidth = h),
                      (this.cacheHeight = c),
                      this._cacheContext.translate(
                        this.cacheTranslationX,
                        this.cacheTranslationY
                      ),
                      this._cacheContext.scale(u, f),
                      (this.zoomX = u),
                      (this.zoomY = f),
                      !0)
                    );
                  },
                  setOptions: function (t) {
                    this._setOptions(t),
                      this._initGradient(t.fill, "fill"),
                      this._initGradient(t.stroke, "stroke"),
                      this._initPattern(t.fill, "fill"),
                      this._initPattern(t.stroke, "stroke");
                  },
                  transform: function (t) {
                    var e =
                        (this.group && !this.group._transformDone) ||
                        (this.group &&
                          this.canvas &&
                          t === this.canvas.contextTop),
                      i = this.calcTransformMatrix(!e);
                    t.transform(i[0], i[1], i[2], i[3], i[4], i[5]);
                  },
                  toObject: function (t) {
                    var i = e.Object.NUM_FRACTION_DIGITS,
                      r = {
                        type: this.type,
                        version: e.version,
                        originX: this.originX,
                        originY: this.originY,
                        left: n(this.left, i),
                        top: n(this.top, i),
                        width: n(this.width, i),
                        height: n(this.height, i),
                        fill:
                          this.fill && this.fill.toObject
                            ? this.fill.toObject()
                            : this.fill,
                        stroke:
                          this.stroke && this.stroke.toObject
                            ? this.stroke.toObject()
                            : this.stroke,
                        strokeWidth: n(this.strokeWidth, i),
                        strokeDashArray: this.strokeDashArray
                          ? this.strokeDashArray.concat()
                          : this.strokeDashArray,
                        strokeLineCap: this.strokeLineCap,
                        strokeDashOffset: this.strokeDashOffset,
                        strokeLineJoin: this.strokeLineJoin,
                        strokeUniform: this.strokeUniform,
                        strokeMiterLimit: n(this.strokeMiterLimit, i),
                        scaleX: n(this.scaleX, i),
                        scaleY: n(this.scaleY, i),
                        angle: n(this.angle, i),
                        flipX: this.flipX,
                        flipY: this.flipY,
                        opacity: n(this.opacity, i),
                        shadow:
                          this.shadow && this.shadow.toObject
                            ? this.shadow.toObject()
                            : this.shadow,
                        visible: this.visible,
                        backgroundColor: this.backgroundColor,
                        fillRule: this.fillRule,
                        paintFirst: this.paintFirst,
                        globalCompositeOperation: this.globalCompositeOperation,
                        skewX: n(this.skewX, i),
                        skewY: n(this.skewY, i),
                      };
                    return (
                      this.clipPath &&
                        ((r.clipPath = this.clipPath.toObject(t)),
                        (r.clipPath.inverted = this.clipPath.inverted),
                        (r.clipPath.absolutePositioned =
                          this.clipPath.absolutePositioned)),
                      e.util.populateWithProperties(this, r, t),
                      this.includeDefaultValues ||
                        (r = this._removeDefaultValues(r)),
                      r
                    );
                  },
                  toDatalessObject: function (t) {
                    return this.toObject(t);
                  },
                  _removeDefaultValues: function (t) {
                    var i = e.util.getKlass(t.type).prototype;
                    return (
                      i.stateProperties.forEach(function (e) {
                        "left" !== e &&
                          "top" !== e &&
                          (t[e] === i[e] && delete t[e],
                          "[object Array]" ===
                            Object.prototype.toString.call(t[e]) &&
                            "[object Array]" ===
                              Object.prototype.toString.call(i[e]) &&
                            0 === t[e].length &&
                            0 === i[e].length &&
                            delete t[e]);
                      }),
                      t
                    );
                  },
                  toString: function () {
                    return "#<fabric." + o(this.type) + ">";
                  },
                  getObjectScaling: function () {
                    var t = e.util.qrDecompose(this.calcTransformMatrix());
                    return {
                      scaleX: Math.abs(t.scaleX),
                      scaleY: Math.abs(t.scaleY),
                    };
                  },
                  getTotalObjectScaling: function () {
                    var t = this.getObjectScaling(),
                      e = t.scaleX,
                      i = t.scaleY;
                    if (this.canvas) {
                      var r = this.canvas.getZoom(),
                        n = this.canvas.getRetinaScaling();
                      (e *= r * n), (i *= r * n);
                    }
                    return { scaleX: e, scaleY: i };
                  },
                  getObjectOpacity: function () {
                    var t = this.opacity;
                    return (
                      this.group && (t *= this.group.getObjectOpacity()), t
                    );
                  },
                  _set: function (t, i) {
                    var r = "scaleX" === t || "scaleY" === t,
                      n = this[t] !== i,
                      o = !1;
                    return (
                      r && (i = this._constrainScale(i)),
                      "scaleX" === t && i < 0
                        ? ((this.flipX = !this.flipX), (i *= -1))
                        : "scaleY" === t && i < 0
                        ? ((this.flipY = !this.flipY), (i *= -1))
                        : "shadow" !== t || !i || i instanceof e.Shadow
                        ? "dirty" === t &&
                          this.group &&
                          this.group.set("dirty", i)
                        : (i = new e.Shadow(i)),
                      (this[t] = i),
                      n &&
                        ((o = this.group && this.group.isOnACache()),
                        this.cacheProperties.indexOf(t) > -1
                          ? ((this.dirty = !0),
                            o && this.group.set("dirty", !0))
                          : o &&
                            this.stateProperties.indexOf(t) > -1 &&
                            this.group.set("dirty", !0)),
                      this
                    );
                  },
                  setOnGroup: function () {},
                  getViewportTransform: function () {
                    return this.canvas && this.canvas.viewportTransform
                      ? this.canvas.viewportTransform
                      : e.iMatrix.concat();
                  },
                  isNotVisible: function () {
                    return (
                      0 === this.opacity ||
                      (!this.width && !this.height && 0 === this.strokeWidth) ||
                      !this.visible
                    );
                  },
                  render: function (t) {
                    this.isNotVisible() ||
                      (this.canvas &&
                        this.canvas.skipOffscreen &&
                        !this.group &&
                        !this.isOnScreen()) ||
                      (t.save(),
                      this._setupCompositeOperation(t),
                      this.drawSelectionBackground(t),
                      this.transform(t),
                      this._setOpacity(t),
                      this._setShadow(t, this),
                      this.shouldCache()
                        ? (this.renderCache(), this.drawCacheOnCanvas(t))
                        : (this._removeCacheCanvas(),
                          (this.dirty = !1),
                          this.drawObject(t),
                          this.objectCaching &&
                            this.statefullCache &&
                            this.saveState({ propertySet: "cacheProperties" })),
                      t.restore());
                  },
                  renderCache: function (t) {
                    (t = t || {}),
                      this._cacheCanvas || this._createCacheCanvas(),
                      this.isCacheDirty() &&
                        (this.statefullCache &&
                          this.saveState({ propertySet: "cacheProperties" }),
                        this.drawObject(this._cacheContext, t.forClipping),
                        (this.dirty = !1));
                  },
                  _removeCacheCanvas: function () {
                    (this._cacheCanvas = null),
                      (this.cacheWidth = 0),
                      (this.cacheHeight = 0);
                  },
                  hasStroke: function () {
                    return (
                      this.stroke &&
                      "transparent" !== this.stroke &&
                      0 !== this.strokeWidth
                    );
                  },
                  hasFill: function () {
                    return this.fill && "transparent" !== this.fill;
                  },
                  needsItsOwnCache: function () {
                    return (
                      !(
                        "stroke" !== this.paintFirst ||
                        !this.hasFill() ||
                        !this.hasStroke() ||
                        "object" != typeof this.shadow
                      ) || !!this.clipPath
                    );
                  },
                  shouldCache: function () {
                    return (
                      (this.ownCaching =
                        this.needsItsOwnCache() ||
                        (this.objectCaching &&
                          (!this.group || !this.group.isOnACache()))),
                      this.ownCaching
                    );
                  },
                  willDrawShadow: function () {
                    return (
                      !!this.shadow &&
                      (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY)
                    );
                  },
                  drawClipPathOnCache: function (t) {
                    var i = this.clipPath;
                    if (
                      (t.save(),
                      i.inverted
                        ? (t.globalCompositeOperation = "destination-out")
                        : (t.globalCompositeOperation = "destination-in"),
                      i.absolutePositioned)
                    ) {
                      var r = e.util.invertTransform(
                        this.calcTransformMatrix()
                      );
                      t.transform(r[0], r[1], r[2], r[3], r[4], r[5]);
                    }
                    i.transform(t),
                      t.scale(1 / i.zoomX, 1 / i.zoomY),
                      t.drawImage(
                        i._cacheCanvas,
                        -i.cacheTranslationX,
                        -i.cacheTranslationY
                      ),
                      t.restore();
                  },
                  drawObject: function (t, e) {
                    var i = this.fill,
                      r = this.stroke;
                    e
                      ? ((this.fill = "black"),
                        (this.stroke = ""),
                        this._setClippingProperties(t))
                      : this._renderBackground(t),
                      this._render(t),
                      this._drawClipPath(t),
                      (this.fill = i),
                      (this.stroke = r);
                  },
                  _drawClipPath: function (t) {
                    var e = this.clipPath;
                    e &&
                      ((e.canvas = this.canvas),
                      e.shouldCache(),
                      (e._transformDone = !0),
                      e.renderCache({ forClipping: !0 }),
                      this.drawClipPathOnCache(t));
                  },
                  drawCacheOnCanvas: function (t) {
                    t.scale(1 / this.zoomX, 1 / this.zoomY),
                      t.drawImage(
                        this._cacheCanvas,
                        -this.cacheTranslationX,
                        -this.cacheTranslationY
                      );
                  },
                  isCacheDirty: function (t) {
                    if (this.isNotVisible()) return !1;
                    if (this._cacheCanvas && !t && this._updateCacheCanvas())
                      return !0;
                    if (
                      this.dirty ||
                      (this.clipPath && this.clipPath.absolutePositioned) ||
                      (this.statefullCache &&
                        this.hasStateChanged("cacheProperties"))
                    ) {
                      if (this._cacheCanvas && !t) {
                        var e = this.cacheWidth / this.zoomX,
                          i = this.cacheHeight / this.zoomY;
                        this._cacheContext.clearRect(-e / 2, -i / 2, e, i);
                      }
                      return !0;
                    }
                    return !1;
                  },
                  _renderBackground: function (t) {
                    if (this.backgroundColor) {
                      var e = this._getNonTransformedDimensions();
                      (t.fillStyle = this.backgroundColor),
                        t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y),
                        this._removeShadow(t);
                    }
                  },
                  _setOpacity: function (t) {
                    this.group && !this.group._transformDone
                      ? (t.globalAlpha = this.getObjectOpacity())
                      : (t.globalAlpha *= this.opacity);
                  },
                  _setStrokeStyles: function (t, e) {
                    var i = e.stroke;
                    i &&
                      ((t.lineWidth = e.strokeWidth),
                      (t.lineCap = e.strokeLineCap),
                      (t.lineDashOffset = e.strokeDashOffset),
                      (t.lineJoin = e.strokeLineJoin),
                      (t.miterLimit = e.strokeMiterLimit),
                      i.toLive
                        ? "percentage" === i.gradientUnits ||
                          i.gradientTransform ||
                          i.patternTransform
                          ? this._applyPatternForTransformedGradient(t, i)
                          : ((t.strokeStyle = i.toLive(t, this)),
                            this._applyPatternGradientTransform(t, i))
                        : (t.strokeStyle = e.stroke));
                  },
                  _setFillStyles: function (t, e) {
                    var i = e.fill;
                    i &&
                      (i.toLive
                        ? ((t.fillStyle = i.toLive(t, this)),
                          this._applyPatternGradientTransform(t, e.fill))
                        : (t.fillStyle = i));
                  },
                  _setClippingProperties: function (t) {
                    (t.globalAlpha = 1),
                      (t.strokeStyle = "transparent"),
                      (t.fillStyle = "#000000");
                  },
                  _setLineDash: function (t, e, i) {
                    e &&
                      0 !== e.length &&
                      (1 & e.length && e.push.apply(e, e),
                      a ? t.setLineDash(e) : i && i(t));
                  },
                  _renderControls: function (t, i) {
                    var r,
                      n,
                      o,
                      a = this.getViewportTransform(),
                      l = this.calcTransformMatrix();
                    (n =
                      void 0 !== (i = i || {}).hasBorders
                        ? i.hasBorders
                        : this.hasBorders),
                      (o =
                        void 0 !== i.hasControls
                          ? i.hasControls
                          : this.hasControls),
                      (l = e.util.multiplyTransformMatrices(a, l)),
                      (r = e.util.qrDecompose(l)),
                      t.save(),
                      t.translate(r.translateX, r.translateY),
                      (t.lineWidth = 1 * this.borderScaleFactor),
                      this.group ||
                        (t.globalAlpha = this.isMoving
                          ? this.borderOpacityWhenMoving
                          : 1),
                      i.forActiveSelection
                        ? (t.rotate(s(r.angle)),
                          n && this.drawBordersInGroup(t, r, i))
                        : (t.rotate(s(this.angle)),
                          n && this.drawBorders(t, i)),
                      o && this.drawControls(t, i),
                      t.restore();
                  },
                  _setShadow: function (t) {
                    if (this.shadow) {
                      var i,
                        r = this.shadow,
                        n = this.canvas,
                        o = (n && n.viewportTransform[0]) || 1,
                        s = (n && n.viewportTransform[3]) || 1;
                      (i = r.nonScaling
                        ? { scaleX: 1, scaleY: 1 }
                        : this.getObjectScaling()),
                        n &&
                          n._isRetinaScaling() &&
                          ((o *= e.devicePixelRatio),
                          (s *= e.devicePixelRatio)),
                        (t.shadowColor = r.color),
                        (t.shadowBlur =
                          (r.blur *
                            e.browserShadowBlurConstant *
                            (o + s) *
                            (i.scaleX + i.scaleY)) /
                          4),
                        (t.shadowOffsetX = r.offsetX * o * i.scaleX),
                        (t.shadowOffsetY = r.offsetY * s * i.scaleY);
                    }
                  },
                  _removeShadow: function (t) {
                    this.shadow &&
                      ((t.shadowColor = ""),
                      (t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0));
                  },
                  _applyPatternGradientTransform: function (t, e) {
                    if (!e || !e.toLive) return { offsetX: 0, offsetY: 0 };
                    var i = e.gradientTransform || e.patternTransform,
                      r = -this.width / 2 + e.offsetX || 0,
                      n = -this.height / 2 + e.offsetY || 0;
                    return (
                      "percentage" === e.gradientUnits
                        ? t.transform(this.width, 0, 0, this.height, r, n)
                        : t.transform(1, 0, 0, 1, r, n),
                      i && t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                      { offsetX: r, offsetY: n }
                    );
                  },
                  _renderPaintInOrder: function (t) {
                    "stroke" === this.paintFirst
                      ? (this._renderStroke(t), this._renderFill(t))
                      : (this._renderFill(t), this._renderStroke(t));
                  },
                  _render: function () {},
                  _renderFill: function (t) {
                    this.fill &&
                      (t.save(),
                      this._setFillStyles(t, this),
                      "evenodd" === this.fillRule
                        ? t.fill("evenodd")
                        : t.fill(),
                      t.restore());
                  },
                  _renderStroke: function (t) {
                    if (this.stroke && 0 !== this.strokeWidth) {
                      if (
                        (this.shadow &&
                          !this.shadow.affectStroke &&
                          this._removeShadow(t),
                        t.save(),
                        this.strokeUniform && this.group)
                      ) {
                        var e = this.getObjectScaling();
                        t.scale(1 / e.scaleX, 1 / e.scaleY);
                      } else
                        this.strokeUniform &&
                          t.scale(1 / this.scaleX, 1 / this.scaleY);
                      this._setLineDash(
                        t,
                        this.strokeDashArray,
                        this._renderDashedStroke
                      ),
                        this._setStrokeStyles(t, this),
                        t.stroke(),
                        t.restore();
                    }
                  },
                  _applyPatternForTransformedGradient: function (t, i) {
                    var r,
                      n = this._limitCacheSize(
                        this._getCacheCanvasDimensions()
                      ),
                      o = e.util.createCanvasElement(),
                      s = this.canvas.getRetinaScaling(),
                      a = n.x / this.scaleX / s,
                      l = n.y / this.scaleY / s;
                    (o.width = a),
                      (o.height = l),
                      (r = o.getContext("2d")).beginPath(),
                      r.moveTo(0, 0),
                      r.lineTo(a, 0),
                      r.lineTo(a, l),
                      r.lineTo(0, l),
                      r.closePath(),
                      r.translate(a / 2, l / 2),
                      r.scale(
                        n.zoomX / this.scaleX / s,
                        n.zoomY / this.scaleY / s
                      ),
                      this._applyPatternGradientTransform(r, i),
                      (r.fillStyle = i.toLive(t)),
                      r.fill(),
                      t.translate(
                        -this.width / 2 - this.strokeWidth / 2,
                        -this.height / 2 - this.strokeWidth / 2
                      ),
                      t.scale(
                        (s * this.scaleX) / n.zoomX,
                        (s * this.scaleY) / n.zoomY
                      ),
                      (t.strokeStyle = r.createPattern(o, "no-repeat"));
                  },
                  _findCenterFromElement: function () {
                    return {
                      x: this.left + this.width / 2,
                      y: this.top + this.height / 2,
                    };
                  },
                  _assignTransformMatrixProps: function () {
                    if (this.transformMatrix) {
                      var t = e.util.qrDecompose(this.transformMatrix);
                      (this.flipX = !1),
                        (this.flipY = !1),
                        this.set("scaleX", t.scaleX),
                        this.set("scaleY", t.scaleY),
                        (this.angle = t.angle),
                        (this.skewX = t.skewX),
                        (this.skewY = 0);
                    }
                  },
                  _removeTransformMatrix: function (t) {
                    var i = this._findCenterFromElement();
                    this.transformMatrix &&
                      (this._assignTransformMatrixProps(),
                      (i = e.util.transformPoint(i, this.transformMatrix))),
                      (this.transformMatrix = null),
                      t &&
                        ((this.scaleX *= t.scaleX),
                        (this.scaleY *= t.scaleY),
                        (this.cropX = t.cropX),
                        (this.cropY = t.cropY),
                        (i.x += t.offsetLeft),
                        (i.y += t.offsetTop),
                        (this.width = t.width),
                        (this.height = t.height)),
                      this.setPositionByOrigin(i, "center", "center");
                  },
                  clone: function (t, i) {
                    var r = this.toObject(i);
                    this.constructor.fromObject
                      ? this.constructor.fromObject(r, t)
                      : e.Object._fromObject("Object", r, t);
                  },
                  cloneAsImage: function (t, i) {
                    var r = this.toCanvasElement(i);
                    return t && t(new e.Image(r)), this;
                  },
                  toCanvasElement: function (t) {
                    t || (t = {});
                    var i = e.util,
                      r = i.saveObjectTransform(this),
                      n = this.group,
                      o = this.shadow,
                      s = Math.abs,
                      a =
                        (t.multiplier || 1) *
                        (t.enableRetinaScaling ? e.devicePixelRatio : 1);
                    delete this.group,
                      t.withoutTransform && i.resetObjectTransform(this),
                      t.withoutShadow && (this.shadow = null);
                    var l,
                      h,
                      c,
                      u,
                      f = e.util.createCanvasElement(),
                      d = this.getBoundingRect(!0, !0),
                      p = this.shadow,
                      g = { x: 0, y: 0 };
                    p &&
                      ((h = p.blur),
                      (l = p.nonScaling
                        ? { scaleX: 1, scaleY: 1 }
                        : this.getObjectScaling()),
                      (g.x = 2 * Math.round(s(p.offsetX) + h) * s(l.scaleX)),
                      (g.y = 2 * Math.round(s(p.offsetY) + h) * s(l.scaleY))),
                      (c = d.width + g.x),
                      (u = d.height + g.y),
                      (f.width = Math.ceil(c)),
                      (f.height = Math.ceil(u));
                    var v = new e.StaticCanvas(f, {
                      enableRetinaScaling: !1,
                      renderOnAddRemove: !1,
                      skipOffscreen: !1,
                    });
                    "jpeg" === t.format && (v.backgroundColor = "#fff"),
                      this.setPositionByOrigin(
                        new e.Point(v.width / 2, v.height / 2),
                        "center",
                        "center"
                      );
                    var m = this.canvas;
                    v.add(this);
                    var y = v.toCanvasElement(a || 1, t);
                    return (
                      (this.shadow = o),
                      this.set("canvas", m),
                      n && (this.group = n),
                      this.set(r).setCoords(),
                      (v._objects = []),
                      v.dispose(),
                      (v = null),
                      y
                    );
                  },
                  toDataURL: function (t) {
                    return (
                      t || (t = {}),
                      e.util.toDataURL(
                        this.toCanvasElement(t),
                        t.format || "png",
                        t.quality || 1
                      )
                    );
                  },
                  isType: function (t) {
                    return this.type === t;
                  },
                  complexity: function () {
                    return 1;
                  },
                  toJSON: function (t) {
                    return this.toObject(t);
                  },
                  rotate: function (t) {
                    var e =
                      ("center" !== this.originX ||
                        "center" !== this.originY) &&
                      this.centeredRotation;
                    return (
                      e && this._setOriginToCenter(),
                      this.set("angle", t),
                      e && this._resetOrigin(),
                      this
                    );
                  },
                  centerH: function () {
                    return this.canvas && this.canvas.centerObjectH(this), this;
                  },
                  viewportCenterH: function () {
                    return (
                      this.canvas && this.canvas.viewportCenterObjectH(this),
                      this
                    );
                  },
                  centerV: function () {
                    return this.canvas && this.canvas.centerObjectV(this), this;
                  },
                  viewportCenterV: function () {
                    return (
                      this.canvas && this.canvas.viewportCenterObjectV(this),
                      this
                    );
                  },
                  center: function () {
                    return this.canvas && this.canvas.centerObject(this), this;
                  },
                  viewportCenter: function () {
                    return (
                      this.canvas && this.canvas.viewportCenterObject(this),
                      this
                    );
                  },
                  getLocalPointer: function (t, i) {
                    i = i || this.canvas.getPointer(t);
                    var r = new e.Point(i.x, i.y),
                      n = this._getLeftTopCoords();
                    return (
                      this.angle &&
                        (r = e.util.rotatePoint(r, n, s(-this.angle))),
                      { x: r.x - n.x, y: r.y - n.y }
                    );
                  },
                  _setupCompositeOperation: function (t) {
                    this.globalCompositeOperation &&
                      (t.globalCompositeOperation =
                        this.globalCompositeOperation);
                  },
                })),
                e.util.createAccessors && e.util.createAccessors(e.Object),
                i(e.Object.prototype, e.Observable),
                (e.Object.NUM_FRACTION_DIGITS = 2),
                (e.Object._fromObject = function (t, i, n, o) {
                  var s = e[t];
                  (i = r(i, !0)),
                    e.util.enlivenPatterns([i.fill, i.stroke], function (t) {
                      void 0 !== t[0] && (i.fill = t[0]),
                        void 0 !== t[1] && (i.stroke = t[1]),
                        e.util.enlivenObjects([i.clipPath], function (t) {
                          i.clipPath = t[0];
                          var e = o ? new s(i[o], i) : new s(i);
                          n && n(e);
                        });
                    });
                }),
                (e.Object.__uid = 0));
            })(void 0 !== i ? i : this),
            (_ = T.util.degreesToRadians),
            (b = { left: -0.5, center: 0, right: 0.5 }),
            (x = { top: -0.5, center: 0, bottom: 0.5 }),
            T.util.object.extend(T.Object.prototype, {
              translateToGivenOrigin: function (t, e, i, r, n) {
                var o,
                  s,
                  a,
                  l = t.x,
                  h = t.y;
                return (
                  "string" == typeof e ? (e = b[e]) : (e -= 0.5),
                  "string" == typeof r ? (r = b[r]) : (r -= 0.5),
                  "string" == typeof i ? (i = x[i]) : (i -= 0.5),
                  "string" == typeof n ? (n = x[n]) : (n -= 0.5),
                  (s = n - i),
                  ((o = r - e) || s) &&
                    ((a = this._getTransformedDimensions()),
                    (l = t.x + o * a.x),
                    (h = t.y + s * a.y)),
                  new T.Point(l, h)
                );
              },
              translateToCenterPoint: function (t, e, i) {
                var r = this.translateToGivenOrigin(
                  t,
                  e,
                  i,
                  "center",
                  "center"
                );
                return this.angle ? T.util.rotatePoint(r, t, _(this.angle)) : r;
              },
              translateToOriginPoint: function (t, e, i) {
                var r = this.translateToGivenOrigin(
                  t,
                  "center",
                  "center",
                  e,
                  i
                );
                return this.angle ? T.util.rotatePoint(r, t, _(this.angle)) : r;
              },
              getCenterPoint: function () {
                var t = new T.Point(this.left, this.top);
                return this.translateToCenterPoint(
                  t,
                  this.originX,
                  this.originY
                );
              },
              getPointByOrigin: function (t, e) {
                var i = this.getCenterPoint();
                return this.translateToOriginPoint(i, t, e);
              },
              toLocalPoint: function (t, e, i) {
                var r,
                  n,
                  o = this.getCenterPoint();
                return (
                  (r =
                    void 0 !== e && void 0 !== i
                      ? this.translateToGivenOrigin(o, "center", "center", e, i)
                      : new T.Point(this.left, this.top)),
                  (n = new T.Point(t.x, t.y)),
                  this.angle && (n = T.util.rotatePoint(n, o, -_(this.angle))),
                  n.subtractEquals(r)
                );
              },
              setPositionByOrigin: function (t, e, i) {
                var r = this.translateToCenterPoint(t, e, i),
                  n = this.translateToOriginPoint(
                    r,
                    this.originX,
                    this.originY
                  );
                this.set("left", n.x), this.set("top", n.y);
              },
              adjustPosition: function (t) {
                var e,
                  i,
                  r = _(this.angle),
                  n = this.getScaledWidth(),
                  o = T.util.cos(r) * n,
                  s = T.util.sin(r) * n;
                (e =
                  "string" == typeof this.originX
                    ? b[this.originX]
                    : this.originX - 0.5),
                  (i = "string" == typeof t ? b[t] : t - 0.5),
                  (this.left += o * (i - e)),
                  (this.top += s * (i - e)),
                  this.setCoords(),
                  (this.originX = t);
              },
              _setOriginToCenter: function () {
                (this._originalOriginX = this.originX),
                  (this._originalOriginY = this.originY);
                var t = this.getCenterPoint();
                (this.originX = "center"),
                  (this.originY = "center"),
                  (this.left = t.x),
                  (this.top = t.y);
              },
              _resetOrigin: function () {
                var t = this.translateToOriginPoint(
                  this.getCenterPoint(),
                  this._originalOriginX,
                  this._originalOriginY
                );
                (this.originX = this._originalOriginX),
                  (this.originY = this._originalOriginY),
                  (this.left = t.x),
                  (this.top = t.y),
                  (this._originalOriginX = null),
                  (this._originalOriginY = null);
              },
              _getLeftTopCoords: function () {
                return this.translateToOriginPoint(
                  this.getCenterPoint(),
                  "left",
                  "top"
                );
              },
            }),
            (function () {
              var t = T.util,
                e = t.degreesToRadians,
                i = t.multiplyTransformMatrices,
                r = t.transformPoint;
              t.object.extend(T.Object.prototype, {
                oCoords: null,
                aCoords: null,
                lineCoords: null,
                ownMatrixCache: null,
                matrixCache: null,
                controls: {},
                _getCoords: function (t, e) {
                  return e
                    ? t
                      ? this.calcACoords()
                      : this.calcLineCoords()
                    : ((this.aCoords && this.lineCoords) || this.setCoords(!0),
                      t ? this.aCoords : this.lineCoords);
                },
                getCoords: function (t, e) {
                  return (
                    (i = this._getCoords(t, e)),
                    [
                      new T.Point(i.tl.x, i.tl.y),
                      new T.Point(i.tr.x, i.tr.y),
                      new T.Point(i.br.x, i.br.y),
                      new T.Point(i.bl.x, i.bl.y),
                    ]
                  );
                  var i;
                },
                intersectsWithRect: function (t, e, i, r) {
                  var n = this.getCoords(i, r);
                  return (
                    "Intersection" ===
                    T.Intersection.intersectPolygonRectangle(n, t, e).status
                  );
                },
                intersectsWithObject: function (t, e, i) {
                  return (
                    "Intersection" ===
                      T.Intersection.intersectPolygonPolygon(
                        this.getCoords(e, i),
                        t.getCoords(e, i)
                      ).status ||
                    t.isContainedWithinObject(this, e, i) ||
                    this.isContainedWithinObject(t, e, i)
                  );
                },
                isContainedWithinObject: function (t, e, i) {
                  for (
                    var r = this.getCoords(e, i),
                      n = e ? t.aCoords : t.lineCoords,
                      o = 0,
                      s = t._getImageLines(n);
                    o < 4;
                    o++
                  )
                    if (!t.containsPoint(r[o], s)) return !1;
                  return !0;
                },
                isContainedWithinRect: function (t, e, i, r) {
                  var n = this.getBoundingRect(i, r);
                  return (
                    n.left >= t.x &&
                    n.left + n.width <= e.x &&
                    n.top >= t.y &&
                    n.top + n.height <= e.y
                  );
                },
                containsPoint: function (t, e, i, r) {
                  var n = this._getCoords(i, r),
                    o =
                      ((e = e || this._getImageLines(n)),
                      this._findCrossPoints(t, e));
                  return 0 !== o && o % 2 == 1;
                },
                isOnScreen: function (t) {
                  if (!this.canvas) return !1;
                  var e = this.canvas.vptCoords.tl,
                    i = this.canvas.vptCoords.br;
                  return (
                    !!this.getCoords(!0, t).some(function (t) {
                      return (
                        t.x <= i.x && t.x >= e.x && t.y <= i.y && t.y >= e.y
                      );
                    }) ||
                    !!this.intersectsWithRect(e, i, !0, t) ||
                    this._containsCenterOfCanvas(e, i, t)
                  );
                },
                _containsCenterOfCanvas: function (t, e, i) {
                  var r = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 };
                  return !!this.containsPoint(r, null, !0, i);
                },
                isPartiallyOnScreen: function (t) {
                  if (!this.canvas) return !1;
                  var e = this.canvas.vptCoords.tl,
                    i = this.canvas.vptCoords.br;
                  return (
                    !!this.intersectsWithRect(e, i, !0, t) ||
                    (this.getCoords(!0, t).every(function (t) {
                      return (
                        (t.x >= i.x || t.x <= e.x) && (t.y >= i.y || t.y <= e.y)
                      );
                    }) &&
                      this._containsCenterOfCanvas(e, i, t))
                  );
                },
                _getImageLines: function (t) {
                  return {
                    topline: { o: t.tl, d: t.tr },
                    rightline: { o: t.tr, d: t.br },
                    bottomline: { o: t.br, d: t.bl },
                    leftline: { o: t.bl, d: t.tl },
                  };
                },
                _findCrossPoints: function (t, e) {
                  var i,
                    r,
                    n,
                    o = 0;
                  for (var s in e)
                    if (
                      !(
                        ((n = e[s]).o.y < t.y && n.d.y < t.y) ||
                        (n.o.y >= t.y && n.d.y >= t.y) ||
                        (n.o.x === n.d.x && n.o.x >= t.x
                          ? (r = n.o.x)
                          : (0,
                            (i = (n.d.y - n.o.y) / (n.d.x - n.o.x)),
                            (r =
                              -(t.y - 0 * t.x - (n.o.y - i * n.o.x)) /
                              (0 - i))),
                        r >= t.x && (o += 1),
                        2 !== o)
                      )
                    )
                      break;
                  return o;
                },
                getBoundingRect: function (e, i) {
                  var r = this.getCoords(e, i);
                  return t.makeBoundingBoxFromPoints(r);
                },
                getScaledWidth: function () {
                  return this._getTransformedDimensions().x;
                },
                getScaledHeight: function () {
                  return this._getTransformedDimensions().y;
                },
                _constrainScale: function (t) {
                  return Math.abs(t) < this.minScaleLimit
                    ? t < 0
                      ? -this.minScaleLimit
                      : this.minScaleLimit
                    : 0 === t
                    ? 1e-4
                    : t;
                },
                scale: function (t) {
                  return (
                    this._set("scaleX", t),
                    this._set("scaleY", t),
                    this.setCoords()
                  );
                },
                scaleToWidth: function (t, e) {
                  var i = this.getBoundingRect(e).width / this.getScaledWidth();
                  return this.scale(t / this.width / i);
                },
                scaleToHeight: function (t, e) {
                  var i =
                    this.getBoundingRect(e).height / this.getScaledHeight();
                  return this.scale(t / this.height / i);
                },
                calcCoords: function (t) {
                  return t ? this.calcACoords() : this.calcOCoords();
                },
                calcLineCoords: function () {
                  var i = this.getViewportTransform(),
                    n = this.padding,
                    o = e(this.angle),
                    s = t.cos(o) * n,
                    a = t.sin(o) * n,
                    l = s + a,
                    h = s - a,
                    c = this.calcACoords(),
                    u = {
                      tl: r(c.tl, i),
                      tr: r(c.tr, i),
                      bl: r(c.bl, i),
                      br: r(c.br, i),
                    };
                  return (
                    n &&
                      ((u.tl.x -= h),
                      (u.tl.y -= l),
                      (u.tr.x += l),
                      (u.tr.y -= h),
                      (u.bl.x -= l),
                      (u.bl.y += h),
                      (u.br.x += h),
                      (u.br.y += l)),
                    u
                  );
                },
                calcOCoords: function () {
                  var t = this._calcRotateMatrix(),
                    e = this._calcTranslateMatrix(),
                    r = this.getViewportTransform(),
                    n = i(r, e),
                    o = i(n, t),
                    s =
                      ((o = i(o, [1 / r[0], 0, 0, 1 / r[3], 0, 0])),
                      this._calculateCurrentDimensions()),
                    a = {};
                  return (
                    this.forEachControl(function (t, e, i) {
                      a[e] = t.positionHandler(s, o, i);
                    }),
                    a
                  );
                },
                calcACoords: function () {
                  var t = this._calcRotateMatrix(),
                    e = this._calcTranslateMatrix(),
                    n = i(e, t),
                    o = this._getTransformedDimensions(),
                    s = o.x / 2,
                    a = o.y / 2;
                  return {
                    tl: r({ x: -s, y: -a }, n),
                    tr: r({ x: s, y: -a }, n),
                    bl: r({ x: -s, y: a }, n),
                    br: r({ x: s, y: a }, n),
                  };
                },
                setCoords: function (t) {
                  return (
                    (this.aCoords = this.calcACoords()),
                    (this.lineCoords = this.group
                      ? this.aCoords
                      : this.calcLineCoords()),
                    t ||
                      ((this.oCoords = this.calcOCoords()),
                      this._setCornerCoords && this._setCornerCoords()),
                    this
                  );
                },
                _calcRotateMatrix: function () {
                  return t.calcRotateMatrix(this);
                },
                _calcTranslateMatrix: function () {
                  var t = this.getCenterPoint();
                  return [1, 0, 0, 1, t.x, t.y];
                },
                transformMatrixKey: function (t) {
                  var e = "_",
                    i = "";
                  return (
                    !t &&
                      this.group &&
                      (i = this.group.transformMatrixKey(t) + e),
                    i +
                      this.top +
                      e +
                      this.left +
                      e +
                      this.scaleX +
                      e +
                      this.scaleY +
                      e +
                      this.skewX +
                      e +
                      this.skewY +
                      e +
                      this.angle +
                      e +
                      this.originX +
                      e +
                      this.originY +
                      e +
                      this.width +
                      e +
                      this.height +
                      e +
                      this.strokeWidth +
                      this.flipX +
                      this.flipY
                  );
                },
                calcTransformMatrix: function (t) {
                  var e = this.calcOwnMatrix();
                  if (t || !this.group) return e;
                  var r = this.transformMatrixKey(t),
                    n = this.matrixCache || (this.matrixCache = {});
                  return n.key === r
                    ? n.value
                    : (this.group &&
                        (e = i(this.group.calcTransformMatrix(!1), e)),
                      (n.key = r),
                      (n.value = e),
                      e);
                },
                calcOwnMatrix: function () {
                  var e = this.transformMatrixKey(!0),
                    i = this.ownMatrixCache || (this.ownMatrixCache = {});
                  if (i.key === e) return i.value;
                  var r = this._calcTranslateMatrix(),
                    n = {
                      angle: this.angle,
                      translateX: r[4],
                      translateY: r[5],
                      scaleX: this.scaleX,
                      scaleY: this.scaleY,
                      skewX: this.skewX,
                      skewY: this.skewY,
                      flipX: this.flipX,
                      flipY: this.flipY,
                    };
                  return (i.key = e), (i.value = t.composeMatrix(n)), i.value;
                },
                _calcDimensionsTransformMatrix: function (e, i, r) {
                  return t.calcDimensionsMatrix({
                    skewX: e,
                    skewY: i,
                    scaleX: this.scaleX * (r && this.flipX ? -1 : 1),
                    scaleY: this.scaleY * (r && this.flipY ? -1 : 1),
                  });
                },
                _getNonTransformedDimensions: function () {
                  var t = this.strokeWidth;
                  return { x: this.width + t, y: this.height + t };
                },
                _getTransformedDimensions: function (e, i) {
                  void 0 === e && (e = this.skewX),
                    void 0 === i && (i = this.skewY);
                  var r,
                    n,
                    o = this._getNonTransformedDimensions(),
                    s = 0 === e && 0 === i;
                  if (
                    (this.strokeUniform
                      ? ((r = this.width), (n = this.height))
                      : ((r = o.x), (n = o.y)),
                    s)
                  )
                    return this._finalizeDimensions(
                      r * this.scaleX,
                      n * this.scaleY
                    );
                  var a = t.sizeAfterTransform(r, n, {
                    scaleX: this.scaleX,
                    scaleY: this.scaleY,
                    skewX: e,
                    skewY: i,
                  });
                  return this._finalizeDimensions(a.x, a.y);
                },
                _finalizeDimensions: function (t, e) {
                  return this.strokeUniform
                    ? { x: t + this.strokeWidth, y: e + this.strokeWidth }
                    : { x: t, y: e };
                },
                _calculateCurrentDimensions: function () {
                  var t = this.getViewportTransform(),
                    e = this._getTransformedDimensions();
                  return r(e, t, !0).scalarAdd(2 * this.padding);
                },
              });
            })(),
            T.util.object.extend(T.Object.prototype, {
              sendToBack: function () {
                return (
                  this.group
                    ? T.StaticCanvas.prototype.sendToBack.call(this.group, this)
                    : this.canvas && this.canvas.sendToBack(this),
                  this
                );
              },
              bringToFront: function () {
                return (
                  this.group
                    ? T.StaticCanvas.prototype.bringToFront.call(
                        this.group,
                        this
                      )
                    : this.canvas && this.canvas.bringToFront(this),
                  this
                );
              },
              sendBackwards: function (t) {
                return (
                  this.group
                    ? T.StaticCanvas.prototype.sendBackwards.call(
                        this.group,
                        this,
                        t
                      )
                    : this.canvas && this.canvas.sendBackwards(this, t),
                  this
                );
              },
              bringForward: function (t) {
                return (
                  this.group
                    ? T.StaticCanvas.prototype.bringForward.call(
                        this.group,
                        this,
                        t
                      )
                    : this.canvas && this.canvas.bringForward(this, t),
                  this
                );
              },
              moveTo: function (t) {
                return (
                  this.group && "activeSelection" !== this.group.type
                    ? T.StaticCanvas.prototype.moveTo.call(this.group, this, t)
                    : this.canvas && this.canvas.moveTo(this, t),
                  this
                );
              },
            }),
            (function () {
              function t(t, e) {
                if (e) {
                  if (e.toLive) return t + ": url(#SVGID_" + e.id + "); ";
                  var i = new T.Color(e),
                    r = t + ": " + i.toRgb() + "; ",
                    n = i.getAlpha();
                  return (
                    1 !== n && (r += t + "-opacity: " + n.toString() + "; "), r
                  );
                }
                return t + ": none; ";
              }
              var e = T.util.toFixed;
              T.util.object.extend(T.Object.prototype, {
                getSvgStyles: function (e) {
                  var i = this.fillRule ? this.fillRule : "nonzero",
                    r = this.strokeWidth ? this.strokeWidth : "0",
                    n = this.strokeDashArray
                      ? this.strokeDashArray.join(" ")
                      : "none",
                    o = this.strokeDashOffset ? this.strokeDashOffset : "0",
                    s = this.strokeLineCap ? this.strokeLineCap : "butt",
                    a = this.strokeLineJoin ? this.strokeLineJoin : "miter",
                    l = this.strokeMiterLimit ? this.strokeMiterLimit : "4",
                    h = void 0 !== this.opacity ? this.opacity : "1",
                    c = this.visible ? "" : " visibility: hidden;",
                    u = e ? "" : this.getSvgFilter(),
                    f = t("fill", this.fill);
                  return [
                    t("stroke", this.stroke),
                    "stroke-width: ",
                    r,
                    "; ",
                    "stroke-dasharray: ",
                    n,
                    "; ",
                    "stroke-linecap: ",
                    s,
                    "; ",
                    "stroke-dashoffset: ",
                    o,
                    "; ",
                    "stroke-linejoin: ",
                    a,
                    "; ",
                    "stroke-miterlimit: ",
                    l,
                    "; ",
                    f,
                    "fill-rule: ",
                    i,
                    "; ",
                    "opacity: ",
                    h,
                    ";",
                    u,
                    c,
                  ].join("");
                },
                getSvgSpanStyles: function (e, i) {
                  var r = "; ",
                    n = e.fontFamily
                      ? "font-family: " +
                        (-1 === e.fontFamily.indexOf("'") &&
                        -1 === e.fontFamily.indexOf('"')
                          ? "'" + e.fontFamily + "'"
                          : e.fontFamily) +
                        r
                      : "",
                    o = e.strokeWidth
                      ? "stroke-width: " + e.strokeWidth + r
                      : "",
                    s =
                      ((n = n),
                      e.fontSize ? "font-size: " + e.fontSize + "px" + r : ""),
                    a = e.fontStyle ? "font-style: " + e.fontStyle + r : "",
                    l = e.fontWeight ? "font-weight: " + e.fontWeight + r : "",
                    h = e.fill ? t("fill", e.fill) : "",
                    c = e.stroke ? t("stroke", e.stroke) : "",
                    u = this.getSvgTextDecoration(e);
                  return (
                    u && (u = "text-decoration: " + u + r),
                    [
                      c,
                      o,
                      n,
                      s,
                      a,
                      l,
                      u,
                      h,
                      e.deltaY ? "baseline-shift: " + -e.deltaY + "; " : "",
                      i ? "white-space: pre; " : "",
                    ].join("")
                  );
                },
                getSvgTextDecoration: function (t) {
                  return ["overline", "underline", "line-through"]
                    .filter(function (e) {
                      return t[e.replace("-", "")];
                    })
                    .join(" ");
                },
                getSvgFilter: function () {
                  return this.shadow
                    ? "filter: url(#SVGID_" + this.shadow.id + ");"
                    : "";
                },
                getSvgCommons: function () {
                  return [
                    this.id ? 'id="' + this.id + '" ' : "",
                    this.clipPath
                      ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" '
                      : "",
                  ].join("");
                },
                getSvgTransform: function (t, e) {
                  var i = t ? this.calcTransformMatrix() : this.calcOwnMatrix();
                  return (
                    'transform="' + T.util.matrixToSVG(i) + (e || "") + '" '
                  );
                },
                _setSVGBg: function (t) {
                  if (this.backgroundColor) {
                    var i = T.Object.NUM_FRACTION_DIGITS;
                    t.push(
                      "\t\t<rect ",
                      this._getFillAttributes(this.backgroundColor),
                      ' x="',
                      e(-this.width / 2, i),
                      '" y="',
                      e(-this.height / 2, i),
                      '" width="',
                      e(this.width, i),
                      '" height="',
                      e(this.height, i),
                      '"></rect>\n'
                    );
                  }
                },
                toSVG: function (t) {
                  return this._createBaseSVGMarkup(this._toSVG(t), {
                    reviver: t,
                  });
                },
                toClipPathSVG: function (t) {
                  return (
                    "\t" +
                    this._createBaseClipPathSVGMarkup(this._toSVG(t), {
                      reviver: t,
                    })
                  );
                },
                _createBaseClipPathSVGMarkup: function (t, e) {
                  var i = (e = e || {}).reviver,
                    r = e.additionalTransform || "",
                    n = [
                      this.getSvgTransform(!0, r),
                      this.getSvgCommons(),
                    ].join(""),
                    o = t.indexOf("COMMON_PARTS");
                  return (t[o] = n), i ? i(t.join("")) : t.join("");
                },
                _createBaseSVGMarkup: function (t, e) {
                  var i,
                    r,
                    n = (e = e || {}).noStyle,
                    o = e.reviver,
                    s = n ? "" : 'style="' + this.getSvgStyles() + '" ',
                    a = e.withShadow
                      ? 'style="' + this.getSvgFilter() + '" '
                      : "",
                    l = this.clipPath,
                    h = this.strokeUniform
                      ? 'vector-effect="non-scaling-stroke" '
                      : "",
                    c = l && l.absolutePositioned,
                    u = this.stroke,
                    f = this.fill,
                    d = this.shadow,
                    p = [],
                    g = t.indexOf("COMMON_PARTS"),
                    v = e.additionalTransform;
                  return (
                    l &&
                      ((l.clipPathId = "CLIPPATH_" + T.Object.__uid++),
                      (r =
                        '<clipPath id="' +
                        l.clipPathId +
                        '" >\n' +
                        l.toClipPathSVG(o) +
                        "</clipPath>\n")),
                    c && p.push("<g ", a, this.getSvgCommons(), " >\n"),
                    p.push(
                      "<g ",
                      this.getSvgTransform(!1),
                      c ? "" : a + this.getSvgCommons(),
                      " >\n"
                    ),
                    (i = [
                      s,
                      h,
                      n ? "" : this.addPaintOrder(),
                      " ",
                      v ? 'transform="' + v + '" ' : "",
                    ].join("")),
                    (t[g] = i),
                    f && f.toLive && p.push(f.toSVG(this)),
                    u && u.toLive && p.push(u.toSVG(this)),
                    d && p.push(d.toSVG(this)),
                    l && p.push(r),
                    p.push(t.join("")),
                    p.push("</g>\n"),
                    c && p.push("</g>\n"),
                    o ? o(p.join("")) : p.join("")
                  );
                },
                addPaintOrder: function () {
                  return "fill" !== this.paintFirst
                    ? ' paint-order="' + this.paintFirst + '" '
                    : "";
                },
              });
            })(),
            (function () {
              var t = T.util.object.extend,
                e = "stateProperties";
              function i(e, i, r) {
                var n = {};
                r.forEach(function (t) {
                  n[t] = e[t];
                }),
                  t(e[i], n, !0);
              }
              function r(t, e, i) {
                if (t === e) return !0;
                if (Array.isArray(t)) {
                  if (!Array.isArray(e) || t.length !== e.length) return !1;
                  for (var n = 0, o = t.length; n < o; n++)
                    if (!r(t[n], e[n])) return !1;
                  return !0;
                }
                if (t && "object" == typeof t) {
                  var s,
                    a = Object.keys(t);
                  if (
                    !e ||
                    "object" != typeof e ||
                    (!i && a.length !== Object.keys(e).length)
                  )
                    return !1;
                  for (n = 0, o = a.length; n < o; n++)
                    if (
                      "canvas" !== (s = a[n]) &&
                      "group" !== s &&
                      !r(t[s], e[s])
                    )
                      return !1;
                  return !0;
                }
              }
              T.util.object.extend(T.Object.prototype, {
                hasStateChanged: function (t) {
                  var i = "_" + (t = t || e);
                  return (
                    Object.keys(this[i]).length < this[t].length ||
                    !r(this[i], this, !0)
                  );
                },
                saveState: function (t) {
                  var r = (t && t.propertySet) || e,
                    n = "_" + r;
                  return this[n]
                    ? (i(this, n, this[r]),
                      t && t.stateProperties && i(this, n, t.stateProperties),
                      this)
                    : this.setupState(t);
                },
                setupState: function (t) {
                  var i = (t = t || {}).propertySet || e;
                  return (
                    (t.propertySet = i),
                    (this["_" + i] = {}),
                    this.saveState(t),
                    this
                  );
                },
              });
            })(),
            (function () {
              var t = T.util.degreesToRadians;
              T.util.object.extend(T.Object.prototype, {
                _findTargetCorner: function (t, e) {
                  if (
                    !this.hasControls ||
                    this.group ||
                    !this.canvas ||
                    this.canvas._activeObject !== this
                  )
                    return !1;
                  var i,
                    r,
                    n,
                    o = t.x,
                    s = t.y,
                    a = Object.keys(this.oCoords),
                    l = a.length - 1;
                  for (this.__corner = 0; l >= 0; l--)
                    if (
                      ((n = a[l]),
                      this.isControlVisible(n) &&
                        ((r = this._getImageLines(
                          e
                            ? this.oCoords[n].touchCorner
                            : this.oCoords[n].corner
                        )),
                        0 !== (i = this._findCrossPoints({ x: o, y: s }, r)) &&
                          i % 2 == 1))
                    )
                      return (this.__corner = n), n;
                  return !1;
                },
                forEachControl: function (t) {
                  for (var e in this.controls) t(this.controls[e], e, this);
                },
                _setCornerCoords: function () {
                  var t = this.oCoords;
                  for (var e in t) {
                    var i = this.controls[e];
                    (t[e].corner = i.calcCornerCoords(
                      this.angle,
                      this.cornerSize,
                      t[e].x,
                      t[e].y,
                      !1
                    )),
                      (t[e].touchCorner = i.calcCornerCoords(
                        this.angle,
                        this.touchCornerSize,
                        t[e].x,
                        t[e].y,
                        !0
                      ));
                  }
                },
                drawSelectionBackground: function (e) {
                  if (
                    !this.selectionBackgroundColor ||
                    (this.canvas && !this.canvas.interactive) ||
                    (this.canvas && this.canvas._activeObject !== this)
                  )
                    return this;
                  e.save();
                  var i = this.getCenterPoint(),
                    r = this._calculateCurrentDimensions(),
                    n = this.canvas.viewportTransform;
                  return (
                    e.translate(i.x, i.y),
                    e.scale(1 / n[0], 1 / n[3]),
                    e.rotate(t(this.angle)),
                    (e.fillStyle = this.selectionBackgroundColor),
                    e.fillRect(-r.x / 2, -r.y / 2, r.x, r.y),
                    e.restore(),
                    this
                  );
                },
                drawBorders: function (t, e) {
                  e = e || {};
                  var i = this._calculateCurrentDimensions(),
                    r = this.borderScaleFactor,
                    n = i.x + r,
                    o = i.y + r,
                    s =
                      void 0 !== e.hasControls
                        ? e.hasControls
                        : this.hasControls,
                    a = !1;
                  return (
                    t.save(),
                    (t.strokeStyle = e.borderColor || this.borderColor),
                    this._setLineDash(
                      t,
                      e.borderDashArray || this.borderDashArray,
                      null
                    ),
                    t.strokeRect(-n / 2, -o / 2, n, o),
                    s &&
                      (t.beginPath(),
                      this.forEachControl(function (e, i, r) {
                        e.withConnection &&
                          e.getVisibility(r, i) &&
                          ((a = !0),
                          t.moveTo(e.x * n, e.y * o),
                          t.lineTo(e.x * n + e.offsetX, e.y * o + e.offsetY));
                      }),
                      a && t.stroke()),
                    t.restore(),
                    this
                  );
                },
                drawBordersInGroup: function (t, e, i) {
                  i = i || {};
                  var r = T.util.sizeAfterTransform(this.width, this.height, e),
                    n = this.strokeWidth,
                    o = this.strokeUniform,
                    s = this.borderScaleFactor,
                    a = r.x + n * (o ? this.canvas.getZoom() : e.scaleX) + s,
                    l = r.y + n * (o ? this.canvas.getZoom() : e.scaleY) + s;
                  return (
                    t.save(),
                    this._setLineDash(
                      t,
                      i.borderDashArray || this.borderDashArray,
                      null
                    ),
                    (t.strokeStyle = i.borderColor || this.borderColor),
                    t.strokeRect(-a / 2, -l / 2, a, l),
                    t.restore(),
                    this
                  );
                },
                drawControls: function (t, e) {
                  return (
                    (e = e || {}),
                    t.save(),
                    t.setTransform(
                      this.canvas.getRetinaScaling(),
                      0,
                      0,
                      this.canvas.getRetinaScaling(),
                      0,
                      0
                    ),
                    (t.strokeStyle = t.fillStyle =
                      e.cornerColor || this.cornerColor),
                    this.transparentCorners ||
                      (t.strokeStyle =
                        e.cornerStrokeColor || this.cornerStrokeColor),
                    this._setLineDash(
                      t,
                      e.cornerDashArray || this.cornerDashArray,
                      null
                    ),
                    this.setCoords(),
                    this.forEachControl(function (i, r, n) {
                      i.getVisibility(n, r) &&
                        i.render(t, n.oCoords[r].x, n.oCoords[r].y, e, n);
                    }),
                    t.restore(),
                    this
                  );
                },
                isControlVisible: function (t) {
                  return (
                    this.controls[t] && this.controls[t].getVisibility(this, t)
                  );
                },
                setControlVisible: function (t, e) {
                  return (
                    this._controlsVisibility || (this._controlsVisibility = {}),
                    (this._controlsVisibility[t] = e),
                    this
                  );
                },
                setControlsVisibility: function (t) {
                  for (var e in (t || (t = {}), t))
                    this.setControlVisible(e, t[e]);
                  return this;
                },
                onDeselect: function () {},
                onSelect: function () {},
              });
            })(),
            T.util.object.extend(T.StaticCanvas.prototype, {
              FX_DURATION: 500,
              fxCenterObjectH: function (t, e) {
                var i = function () {},
                  r = (e = e || {}).onComplete || i,
                  n = e.onChange || i,
                  o = this;
                return (
                  T.util.animate({
                    startValue: t.left,
                    endValue: this.getCenter().left,
                    duration: this.FX_DURATION,
                    onChange: function (e) {
                      t.set("left", e), o.requestRenderAll(), n();
                    },
                    onComplete: function () {
                      t.setCoords(), r();
                    },
                  }),
                  this
                );
              },
              fxCenterObjectV: function (t, e) {
                var i = function () {},
                  r = (e = e || {}).onComplete || i,
                  n = e.onChange || i,
                  o = this;
                return (
                  T.util.animate({
                    startValue: t.top,
                    endValue: this.getCenter().top,
                    duration: this.FX_DURATION,
                    onChange: function (e) {
                      t.set("top", e), o.requestRenderAll(), n();
                    },
                    onComplete: function () {
                      t.setCoords(), r();
                    },
                  }),
                  this
                );
              },
              fxRemove: function (t, e) {
                var i = function () {},
                  r = (e = e || {}).onComplete || i,
                  n = e.onChange || i,
                  o = this;
                return (
                  T.util.animate({
                    startValue: t.opacity,
                    endValue: 0,
                    duration: this.FX_DURATION,
                    onChange: function (e) {
                      t.set("opacity", e), o.requestRenderAll(), n();
                    },
                    onComplete: function () {
                      o.remove(t), r();
                    },
                  }),
                  this
                );
              },
            }),
            T.util.object.extend(T.Object.prototype, {
              animate: function () {
                if (arguments[0] && "object" == typeof arguments[0]) {
                  var t,
                    e,
                    i = [];
                  for (t in arguments[0]) i.push(t);
                  for (var r = 0, n = i.length; r < n; r++)
                    (t = i[r]),
                      (e = r !== n - 1),
                      this._animate(t, arguments[0][t], arguments[1], e);
                } else this._animate.apply(this, arguments);
                return this;
              },
              _animate: function (t, e, i, r) {
                var n,
                  o = this;
                (e = e.toString()),
                  (i = i ? T.util.object.clone(i) : {}),
                  ~t.indexOf(".") && (n = t.split("."));
                var s =
                    o.colorProperties.indexOf(t) > -1 ||
                    (n && o.colorProperties.indexOf(n[1]) > -1),
                  a = n ? this.get(n[0])[n[1]] : this.get(t);
                "from" in i || (i.from = a),
                  s ||
                    (e = ~e.indexOf("=")
                      ? a + parseFloat(e.replace("=", ""))
                      : parseFloat(e));
                var l = {
                  startValue: i.from,
                  endValue: e,
                  byValue: i.by,
                  easing: i.easing,
                  duration: i.duration,
                  abort:
                    i.abort &&
                    function () {
                      return i.abort.call(o);
                    },
                  onChange: function (e, s, a) {
                    n ? (o[n[0]][n[1]] = e) : o.set(t, e),
                      r || (i.onChange && i.onChange(e, s, a));
                  },
                  onComplete: function (t, e, n) {
                    r || (o.setCoords(), i.onComplete && i.onComplete(t, e, n));
                  },
                };
                s
                  ? T.util.animateColor(l.startValue, l.endValue, l.duration, l)
                  : T.util.animate(l);
              },
            }),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.object.extend,
                r = e.util.object.clone,
                n = { x1: 1, x2: 1, y1: 1, y2: 1 },
                o = e.StaticCanvas.supports("setLineDash");
              function s(t, e) {
                var i = t.origin,
                  r = t.axis1,
                  n = t.axis2,
                  o = t.dimension,
                  s = e.nearest,
                  a = e.center,
                  l = e.farthest;
                return function () {
                  switch (this.get(i)) {
                    case s:
                      return Math.min(this.get(r), this.get(n));
                    case a:
                      return (
                        Math.min(this.get(r), this.get(n)) + 0.5 * this.get(o)
                      );
                    case l:
                      return Math.max(this.get(r), this.get(n));
                  }
                };
              }
              e.Line
                ? e.warn("fabric.Line is already defined")
                : ((e.Line = e.util.createClass(e.Object, {
                    type: "line",
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    cacheProperties: e.Object.prototype.cacheProperties.concat(
                      "x1",
                      "x2",
                      "y1",
                      "y2"
                    ),
                    initialize: function (t, e) {
                      t || (t = [0, 0, 0, 0]),
                        this.callSuper("initialize", e),
                        this.set("x1", t[0]),
                        this.set("y1", t[1]),
                        this.set("x2", t[2]),
                        this.set("y2", t[3]),
                        this._setWidthHeight(e);
                    },
                    _setWidthHeight: function (t) {
                      t || (t = {}),
                        (this.width = Math.abs(this.x2 - this.x1)),
                        (this.height = Math.abs(this.y2 - this.y1)),
                        (this.left =
                          "left" in t ? t.left : this._getLeftToOriginX()),
                        (this.top =
                          "top" in t ? t.top : this._getTopToOriginY());
                    },
                    _set: function (t, e) {
                      return (
                        this.callSuper("_set", t, e),
                        void 0 !== n[t] && this._setWidthHeight(),
                        this
                      );
                    },
                    _getLeftToOriginX: s(
                      {
                        origin: "originX",
                        axis1: "x1",
                        axis2: "x2",
                        dimension: "width",
                      },
                      { nearest: "left", center: "center", farthest: "right" }
                    ),
                    _getTopToOriginY: s(
                      {
                        origin: "originY",
                        axis1: "y1",
                        axis2: "y2",
                        dimension: "height",
                      },
                      { nearest: "top", center: "center", farthest: "bottom" }
                    ),
                    _render: function (t) {
                      if (
                        (t.beginPath(),
                        !this.strokeDashArray || (this.strokeDashArray && o))
                      ) {
                        var e = this.calcLinePoints();
                        t.moveTo(e.x1, e.y1), t.lineTo(e.x2, e.y2);
                      }
                      t.lineWidth = this.strokeWidth;
                      var i = t.strokeStyle;
                      (t.strokeStyle = this.stroke || t.fillStyle),
                        this.stroke && this._renderStroke(t),
                        (t.strokeStyle = i);
                    },
                    _renderDashedStroke: function (t) {
                      var i = this.calcLinePoints();
                      t.beginPath(),
                        e.util.drawDashedLine(
                          t,
                          i.x1,
                          i.y1,
                          i.x2,
                          i.y2,
                          this.strokeDashArray
                        ),
                        t.closePath();
                    },
                    _findCenterFromElement: function () {
                      return {
                        x: (this.x1 + this.x2) / 2,
                        y: (this.y1 + this.y2) / 2,
                      };
                    },
                    toObject: function (t) {
                      return i(
                        this.callSuper("toObject", t),
                        this.calcLinePoints()
                      );
                    },
                    _getNonTransformedDimensions: function () {
                      var t = this.callSuper("_getNonTransformedDimensions");
                      return (
                        "butt" === this.strokeLineCap &&
                          (0 === this.width && (t.y -= this.strokeWidth),
                          0 === this.height && (t.x -= this.strokeWidth)),
                        t
                      );
                    },
                    calcLinePoints: function () {
                      var t = this.x1 <= this.x2 ? -1 : 1,
                        e = this.y1 <= this.y2 ? -1 : 1,
                        i = t * this.width * 0.5,
                        r = e * this.height * 0.5;
                      return {
                        x1: i,
                        x2: t * this.width * -0.5,
                        y1: r,
                        y2: e * this.height * -0.5,
                      };
                    },
                    _toSVG: function () {
                      var t = this.calcLinePoints();
                      return [
                        "<line ",
                        "COMMON_PARTS",
                        'x1="',
                        t.x1,
                        '" y1="',
                        t.y1,
                        '" x2="',
                        t.x2,
                        '" y2="',
                        t.y2,
                        '" />\n',
                      ];
                    },
                  })),
                  (e.Line.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
                    "x1 y1 x2 y2".split(" ")
                  )),
                  (e.Line.fromElement = function (t, r, n) {
                    n = n || {};
                    var o = e.parseAttributes(t, e.Line.ATTRIBUTE_NAMES),
                      s = [o.x1 || 0, o.y1 || 0, o.x2 || 0, o.y2 || 0];
                    r(new e.Line(s, i(o, n)));
                  }),
                  (e.Line.fromObject = function (t, i) {
                    var n = r(t, !0);
                    (n.points = [t.x1, t.y1, t.x2, t.y2]),
                      e.Object._fromObject(
                        "Line",
                        n,
                        function (t) {
                          delete t.points, i && i(t);
                        },
                        "points"
                      );
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = Math.PI;
              e.Circle
                ? e.warn("fabric.Circle is already defined.")
                : ((e.Circle = e.util.createClass(e.Object, {
                    type: "circle",
                    radius: 0,
                    startAngle: 0,
                    endAngle: 2 * i,
                    cacheProperties: e.Object.prototype.cacheProperties.concat(
                      "radius",
                      "startAngle",
                      "endAngle"
                    ),
                    _set: function (t, e) {
                      return (
                        this.callSuper("_set", t, e),
                        "radius" === t && this.setRadius(e),
                        this
                      );
                    },
                    toObject: function (t) {
                      return this.callSuper(
                        "toObject",
                        ["radius", "startAngle", "endAngle"].concat(t)
                      );
                    },
                    _toSVG: function () {
                      var t,
                        r = (this.endAngle - this.startAngle) % (2 * i);
                      if (0 === r)
                        t = [
                          "<circle ",
                          "COMMON_PARTS",
                          'cx="0" cy="0" ',
                          'r="',
                          this.radius,
                          '" />\n',
                        ];
                      else {
                        var n = e.util.cos(this.startAngle) * this.radius,
                          o = e.util.sin(this.startAngle) * this.radius,
                          s = e.util.cos(this.endAngle) * this.radius,
                          a = e.util.sin(this.endAngle) * this.radius,
                          l = r > i ? "1" : "0";
                        t = [
                          '<path d="M ' + n + " " + o,
                          " A " + this.radius + " " + this.radius,
                          " 0 ",
                          +l + " 1",
                          " " + s + " " + a,
                          '" ',
                          "COMMON_PARTS",
                          " />\n",
                        ];
                      }
                      return t;
                    },
                    _render: function (t) {
                      t.beginPath(),
                        t.arc(
                          0,
                          0,
                          this.radius,
                          this.startAngle,
                          this.endAngle,
                          !1
                        ),
                        this._renderPaintInOrder(t);
                    },
                    getRadiusX: function () {
                      return this.get("radius") * this.get("scaleX");
                    },
                    getRadiusY: function () {
                      return this.get("radius") * this.get("scaleY");
                    },
                    setRadius: function (t) {
                      return (
                        (this.radius = t),
                        this.set("width", 2 * t).set("height", 2 * t)
                      );
                    },
                  })),
                  (e.Circle.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
                    "cx cy r".split(" ")
                  )),
                  (e.Circle.fromElement = function (t, i) {
                    var r,
                      n = e.parseAttributes(t, e.Circle.ATTRIBUTE_NAMES);
                    if (!("radius" in (r = n) && r.radius >= 0))
                      throw new Error(
                        "value of `r` attribute is required and can not be negative"
                      );
                    (n.left = (n.left || 0) - n.radius),
                      (n.top = (n.top || 0) - n.radius),
                      i(new e.Circle(n));
                  }),
                  (e.Circle.fromObject = function (t, i) {
                    return e.Object._fromObject("Circle", t, i);
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {});
              e.Triangle
                ? e.warn("fabric.Triangle is already defined")
                : ((e.Triangle = e.util.createClass(e.Object, {
                    type: "triangle",
                    width: 100,
                    height: 100,
                    _render: function (t) {
                      var e = this.width / 2,
                        i = this.height / 2;
                      t.beginPath(),
                        t.moveTo(-e, i),
                        t.lineTo(0, -i),
                        t.lineTo(e, i),
                        t.closePath(),
                        this._renderPaintInOrder(t);
                    },
                    _renderDashedStroke: function (t) {
                      var i = this.width / 2,
                        r = this.height / 2;
                      t.beginPath(),
                        e.util.drawDashedLine(
                          t,
                          -i,
                          r,
                          0,
                          -r,
                          this.strokeDashArray
                        ),
                        e.util.drawDashedLine(
                          t,
                          0,
                          -r,
                          i,
                          r,
                          this.strokeDashArray
                        ),
                        e.util.drawDashedLine(
                          t,
                          i,
                          r,
                          -i,
                          r,
                          this.strokeDashArray
                        ),
                        t.closePath();
                    },
                    _toSVG: function () {
                      var t = this.width / 2,
                        e = this.height / 2;
                      return [
                        "<polygon ",
                        "COMMON_PARTS",
                        'points="',
                        [-t + " " + e, "0 " + -e, t + " " + e].join(","),
                        '" />',
                      ];
                    },
                  })),
                  (e.Triangle.fromObject = function (t, i) {
                    return e.Object._fromObject("Triangle", t, i);
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = 2 * Math.PI;
              e.Ellipse
                ? e.warn("fabric.Ellipse is already defined.")
                : ((e.Ellipse = e.util.createClass(e.Object, {
                    type: "ellipse",
                    rx: 0,
                    ry: 0,
                    cacheProperties: e.Object.prototype.cacheProperties.concat(
                      "rx",
                      "ry"
                    ),
                    initialize: function (t) {
                      this.callSuper("initialize", t),
                        this.set("rx", (t && t.rx) || 0),
                        this.set("ry", (t && t.ry) || 0);
                    },
                    _set: function (t, e) {
                      switch ((this.callSuper("_set", t, e), t)) {
                        case "rx":
                          (this.rx = e), this.set("width", 2 * e);
                          break;
                        case "ry":
                          (this.ry = e), this.set("height", 2 * e);
                      }
                      return this;
                    },
                    getRx: function () {
                      return this.get("rx") * this.get("scaleX");
                    },
                    getRy: function () {
                      return this.get("ry") * this.get("scaleY");
                    },
                    toObject: function (t) {
                      return this.callSuper("toObject", ["rx", "ry"].concat(t));
                    },
                    _toSVG: function () {
                      return [
                        "<ellipse ",
                        "COMMON_PARTS",
                        'cx="0" cy="0" ',
                        'rx="',
                        this.rx,
                        '" ry="',
                        this.ry,
                        '" />\n',
                      ];
                    },
                    _render: function (t) {
                      t.beginPath(),
                        t.save(),
                        t.transform(1, 0, 0, this.ry / this.rx, 0, 0),
                        t.arc(0, 0, this.rx, 0, i, !1),
                        t.restore(),
                        this._renderPaintInOrder(t);
                    },
                  })),
                  (e.Ellipse.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
                    "cx cy rx ry".split(" ")
                  )),
                  (e.Ellipse.fromElement = function (t, i) {
                    var r = e.parseAttributes(t, e.Ellipse.ATTRIBUTE_NAMES);
                    (r.left = (r.left || 0) - r.rx),
                      (r.top = (r.top || 0) - r.ry),
                      i(new e.Ellipse(r));
                  }),
                  (e.Ellipse.fromObject = function (t, i) {
                    return e.Object._fromObject("Ellipse", t, i);
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.object.extend;
              e.Rect
                ? e.warn("fabric.Rect is already defined")
                : ((e.Rect = e.util.createClass(e.Object, {
                    stateProperties: e.Object.prototype.stateProperties.concat(
                      "rx",
                      "ry"
                    ),
                    type: "rect",
                    rx: 0,
                    ry: 0,
                    cacheProperties: e.Object.prototype.cacheProperties.concat(
                      "rx",
                      "ry"
                    ),
                    initialize: function (t) {
                      this.callSuper("initialize", t), this._initRxRy();
                    },
                    _initRxRy: function () {
                      this.rx && !this.ry
                        ? (this.ry = this.rx)
                        : this.ry && !this.rx && (this.rx = this.ry);
                    },
                    _render: function (t) {
                      var e = this.rx ? Math.min(this.rx, this.width / 2) : 0,
                        i = this.ry ? Math.min(this.ry, this.height / 2) : 0,
                        r = this.width,
                        n = this.height,
                        o = -this.width / 2,
                        s = -this.height / 2,
                        a = 0 !== e || 0 !== i,
                        l = 0.4477152502;
                      t.beginPath(),
                        t.moveTo(o + e, s),
                        t.lineTo(o + r - e, s),
                        a &&
                          t.bezierCurveTo(
                            o + r - l * e,
                            s,
                            o + r,
                            s + l * i,
                            o + r,
                            s + i
                          ),
                        t.lineTo(o + r, s + n - i),
                        a &&
                          t.bezierCurveTo(
                            o + r,
                            s + n - l * i,
                            o + r - l * e,
                            s + n,
                            o + r - e,
                            s + n
                          ),
                        t.lineTo(o + e, s + n),
                        a &&
                          t.bezierCurveTo(
                            o + l * e,
                            s + n,
                            o,
                            s + n - l * i,
                            o,
                            s + n - i
                          ),
                        t.lineTo(o, s + i),
                        a &&
                          t.bezierCurveTo(o, s + l * i, o + l * e, s, o + e, s),
                        t.closePath(),
                        this._renderPaintInOrder(t);
                    },
                    _renderDashedStroke: function (t) {
                      var i = -this.width / 2,
                        r = -this.height / 2,
                        n = this.width,
                        o = this.height;
                      t.beginPath(),
                        e.util.drawDashedLine(
                          t,
                          i,
                          r,
                          i + n,
                          r,
                          this.strokeDashArray
                        ),
                        e.util.drawDashedLine(
                          t,
                          i + n,
                          r,
                          i + n,
                          r + o,
                          this.strokeDashArray
                        ),
                        e.util.drawDashedLine(
                          t,
                          i + n,
                          r + o,
                          i,
                          r + o,
                          this.strokeDashArray
                        ),
                        e.util.drawDashedLine(
                          t,
                          i,
                          r + o,
                          i,
                          r,
                          this.strokeDashArray
                        ),
                        t.closePath();
                    },
                    toObject: function (t) {
                      return this.callSuper("toObject", ["rx", "ry"].concat(t));
                    },
                    _toSVG: function () {
                      return [
                        "<rect ",
                        "COMMON_PARTS",
                        'x="',
                        -this.width / 2,
                        '" y="',
                        -this.height / 2,
                        '" rx="',
                        this.rx,
                        '" ry="',
                        this.ry,
                        '" width="',
                        this.width,
                        '" height="',
                        this.height,
                        '" />\n',
                      ];
                    },
                  })),
                  (e.Rect.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
                    "x y rx ry width height".split(" ")
                  )),
                  (e.Rect.fromElement = function (t, r, n) {
                    if (!t) return r(null);
                    n = n || {};
                    var o = e.parseAttributes(t, e.Rect.ATTRIBUTE_NAMES);
                    (o.left = o.left || 0),
                      (o.top = o.top || 0),
                      (o.height = o.height || 0),
                      (o.width = o.width || 0);
                    var s = new e.Rect(i(n ? e.util.object.clone(n) : {}, o));
                    (s.visible = s.visible && s.width > 0 && s.height > 0),
                      r(s);
                  }),
                  (e.Rect.fromObject = function (t, i) {
                    return e.Object._fromObject("Rect", t, i);
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.object.extend,
                r = e.util.array.min,
                n = e.util.array.max,
                o = e.util.toFixed;
              e.Polyline
                ? e.warn("fabric.Polyline is already defined")
                : ((e.Polyline = e.util.createClass(e.Object, {
                    type: "polyline",
                    points: null,
                    cacheProperties:
                      e.Object.prototype.cacheProperties.concat("points"),
                    initialize: function (t, e) {
                      (e = e || {}),
                        (this.points = t || []),
                        this.callSuper("initialize", e),
                        this._setPositionDimensions(e);
                    },
                    _setPositionDimensions: function (t) {
                      var e,
                        i = this._calcDimensions(t);
                      (this.width = i.width),
                        (this.height = i.height),
                        t.fromSVG ||
                          (e = this.translateToGivenOrigin(
                            {
                              x: i.left - this.strokeWidth / 2,
                              y: i.top - this.strokeWidth / 2,
                            },
                            "left",
                            "top",
                            this.originX,
                            this.originY
                          )),
                        void 0 === t.left &&
                          (this.left = t.fromSVG ? i.left : e.x),
                        void 0 === t.top &&
                          (this.top = t.fromSVG ? i.top : e.y),
                        (this.pathOffset = {
                          x: i.left + this.width / 2,
                          y: i.top + this.height / 2,
                        });
                    },
                    _calcDimensions: function () {
                      var t = this.points,
                        e = r(t, "x") || 0,
                        i = r(t, "y") || 0;
                      return {
                        left: e,
                        top: i,
                        width: (n(t, "x") || 0) - e,
                        height: (n(t, "y") || 0) - i,
                      };
                    },
                    toObject: function (t) {
                      return i(this.callSuper("toObject", t), {
                        points: this.points.concat(),
                      });
                    },
                    _toSVG: function () {
                      for (
                        var t = [],
                          i = this.pathOffset.x,
                          r = this.pathOffset.y,
                          n = e.Object.NUM_FRACTION_DIGITS,
                          s = 0,
                          a = this.points.length;
                        s < a;
                        s++
                      )
                        t.push(
                          o(this.points[s].x - i, n),
                          ",",
                          o(this.points[s].y - r, n),
                          " "
                        );
                      return [
                        "<" + this.type + " ",
                        "COMMON_PARTS",
                        'points="',
                        t.join(""),
                        '" />\n',
                      ];
                    },
                    commonRender: function (t) {
                      var e,
                        i = this.points.length,
                        r = this.pathOffset.x,
                        n = this.pathOffset.y;
                      if (!i || isNaN(this.points[i - 1].y)) return !1;
                      t.beginPath(),
                        t.moveTo(this.points[0].x - r, this.points[0].y - n);
                      for (var o = 0; o < i; o++)
                        (e = this.points[o]), t.lineTo(e.x - r, e.y - n);
                      return !0;
                    },
                    _render: function (t) {
                      this.commonRender(t) && this._renderPaintInOrder(t);
                    },
                    _renderDashedStroke: function (t) {
                      var i, r;
                      t.beginPath();
                      for (var n = 0, o = this.points.length; n < o; n++)
                        (i = this.points[n]),
                          (r = this.points[n + 1] || i),
                          e.util.drawDashedLine(
                            t,
                            i.x,
                            i.y,
                            r.x,
                            r.y,
                            this.strokeDashArray
                          );
                    },
                    complexity: function () {
                      return this.get("points").length;
                    },
                  })),
                  (e.Polyline.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat()),
                  (e.Polyline.fromElementGenerator = function (t) {
                    return function (r, n, o) {
                      if (!r) return n(null);
                      o || (o = {});
                      var s = e.parsePointsAttribute(r.getAttribute("points")),
                        a = e.parseAttributes(r, e[t].ATTRIBUTE_NAMES);
                      (a.fromSVG = !0), n(new e[t](s, i(a, o)));
                    };
                  }),
                  (e.Polyline.fromElement =
                    e.Polyline.fromElementGenerator("Polyline")),
                  (e.Polyline.fromObject = function (t, i) {
                    return e.Object._fromObject("Polyline", t, i, "points");
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {});
              e.Polygon
                ? e.warn("fabric.Polygon is already defined")
                : ((e.Polygon = e.util.createClass(e.Polyline, {
                    type: "polygon",
                    _render: function (t) {
                      this.commonRender(t) &&
                        (t.closePath(), this._renderPaintInOrder(t));
                    },
                    _renderDashedStroke: function (t) {
                      this.callSuper("_renderDashedStroke", t), t.closePath();
                    },
                  })),
                  (e.Polygon.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat()),
                  (e.Polygon.fromElement =
                    e.Polyline.fromElementGenerator("Polygon")),
                  (e.Polygon.fromObject = function (t, i) {
                    return e.Object._fromObject("Polygon", t, i, "points");
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.array.min,
                r = e.util.array.max,
                n = e.util.object.extend,
                o = Object.prototype.toString,
                s = e.util.toFixed;
              e.Path
                ? e.warn("fabric.Path is already defined")
                : ((e.Path = e.util.createClass(e.Object, {
                    type: "path",
                    path: null,
                    cacheProperties: e.Object.prototype.cacheProperties.concat(
                      "path",
                      "fillRule"
                    ),
                    stateProperties:
                      e.Object.prototype.stateProperties.concat("path"),
                    initialize: function (t, i) {
                      (i = i || {}),
                        this.callSuper("initialize", i),
                        t || (t = []);
                      var r = "[object Array]" === o.call(t);
                      (this.path = r
                        ? e.util.makePathSimpler(t)
                        : e.util.makePathSimpler(e.util.parsePath(t))),
                        this.path &&
                          e.Polyline.prototype._setPositionDimensions.call(
                            this,
                            i
                          );
                    },
                    _renderPathCommands: function (t) {
                      var e,
                        i = 0,
                        r = 0,
                        n = 0,
                        o = 0,
                        s = 0,
                        a = 0,
                        l = -this.pathOffset.x,
                        h = -this.pathOffset.y;
                      t.beginPath();
                      for (var c = 0, u = this.path.length; c < u; ++c)
                        switch ((e = this.path[c])[0]) {
                          case "L":
                            (n = e[1]), (o = e[2]), t.lineTo(n + l, o + h);
                            break;
                          case "M":
                            (i = n = e[1]),
                              (r = o = e[2]),
                              t.moveTo(n + l, o + h);
                            break;
                          case "C":
                            (n = e[5]),
                              (o = e[6]),
                              (s = e[3]),
                              (a = e[4]),
                              t.bezierCurveTo(
                                e[1] + l,
                                e[2] + h,
                                s + l,
                                a + h,
                                n + l,
                                o + h
                              );
                            break;
                          case "Q":
                            t.quadraticCurveTo(
                              e[1] + l,
                              e[2] + h,
                              e[3] + l,
                              e[4] + h
                            ),
                              (n = e[3]),
                              (o = e[4]),
                              (s = e[1]),
                              (a = e[2]);
                            break;
                          case "z":
                          case "Z":
                            (n = i), (o = r), t.closePath();
                        }
                    },
                    _render: function (t) {
                      this._renderPathCommands(t), this._renderPaintInOrder(t);
                    },
                    toString: function () {
                      return (
                        "#<fabric.Path (" +
                        this.complexity() +
                        '): { "top": ' +
                        this.top +
                        ', "left": ' +
                        this.left +
                        " }>"
                      );
                    },
                    toObject: function (t) {
                      return n(this.callSuper("toObject", t), {
                        path: this.path.map(function (t) {
                          return t.slice();
                        }),
                      });
                    },
                    toDatalessObject: function (t) {
                      var e = this.toObject(["sourcePath"].concat(t));
                      return e.sourcePath && delete e.path, e;
                    },
                    _toSVG: function () {
                      return [
                        "<path ",
                        "COMMON_PARTS",
                        'd="',
                        this.path
                          .map(function (t) {
                            return t.join(" ");
                          })
                          .join(" "),
                        '" stroke-linecap="round" ',
                        "/>\n",
                      ];
                    },
                    _getOffsetTransform: function () {
                      var t = e.Object.NUM_FRACTION_DIGITS;
                      return (
                        " translate(" +
                        s(-this.pathOffset.x, t) +
                        ", " +
                        s(-this.pathOffset.y, t) +
                        ")"
                      );
                    },
                    toClipPathSVG: function (t) {
                      var e = this._getOffsetTransform();
                      return (
                        "\t" +
                        this._createBaseClipPathSVGMarkup(this._toSVG(), {
                          reviver: t,
                          additionalTransform: e,
                        })
                      );
                    },
                    toSVG: function (t) {
                      var e = this._getOffsetTransform();
                      return this._createBaseSVGMarkup(this._toSVG(), {
                        reviver: t,
                        additionalTransform: e,
                      });
                    },
                    complexity: function () {
                      return this.path.length;
                    },
                    _calcDimensions: function () {
                      for (
                        var t,
                          n,
                          o = [],
                          s = [],
                          a = 0,
                          l = 0,
                          h = 0,
                          c = 0,
                          u = 0,
                          f = this.path.length;
                        u < f;
                        ++u
                      ) {
                        switch ((t = this.path[u])[0]) {
                          case "L":
                            (h = t[1]), (c = t[2]), (n = []);
                            break;
                          case "M":
                            (a = h = t[1]), (l = c = t[2]), (n = []);
                            break;
                          case "C":
                            (n = e.util.getBoundsOfCurve(
                              h,
                              c,
                              t[1],
                              t[2],
                              t[3],
                              t[4],
                              t[5],
                              t[6]
                            )),
                              (h = t[5]),
                              (c = t[6]);
                            break;
                          case "Q":
                            (n = e.util.getBoundsOfCurve(
                              h,
                              c,
                              t[1],
                              t[2],
                              t[1],
                              t[2],
                              t[3],
                              t[4]
                            )),
                              (h = t[3]),
                              (c = t[4]);
                            break;
                          case "z":
                          case "Z":
                            (h = a), (c = l);
                        }
                        n.forEach(function (t) {
                          o.push(t.x), s.push(t.y);
                        }),
                          o.push(h),
                          s.push(c);
                      }
                      var d = i(o) || 0,
                        p = i(s) || 0;
                      return {
                        left: d,
                        top: p,
                        width: (r(o) || 0) - d,
                        height: (r(s) || 0) - p,
                      };
                    },
                  })),
                  (e.Path.fromObject = function (t, i) {
                    if ("string" == typeof t.sourcePath) {
                      var r = t.sourcePath;
                      e.loadSVGFromURL(r, function (e) {
                        var r = e[0];
                        r.setOptions(t), i && i(r);
                      });
                    } else e.Object._fromObject("Path", t, i, "path");
                  }),
                  (e.Path.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(["d"])),
                  (e.Path.fromElement = function (t, i, r) {
                    var o = e.parseAttributes(t, e.Path.ATTRIBUTE_NAMES);
                    (o.fromSVG = !0), i(new e.Path(o.d, n(o, r)));
                  }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.array.min,
                r = e.util.array.max;
              e.Group ||
                ((e.Group = e.util.createClass(e.Object, e.Collection, {
                  type: "group",
                  strokeWidth: 0,
                  subTargetCheck: !1,
                  cacheProperties: [],
                  useSetOnGroup: !1,
                  initialize: function (t, e, i) {
                    (e = e || {}),
                      (this._objects = []),
                      i && this.callSuper("initialize", e),
                      (this._objects = t || []);
                    for (var r = this._objects.length; r--; )
                      this._objects[r].group = this;
                    if (i) this._updateObjectsACoords();
                    else {
                      var n = e && e.centerPoint;
                      void 0 !== e.originX && (this.originX = e.originX),
                        void 0 !== e.originY && (this.originY = e.originY),
                        n || this._calcBounds(),
                        this._updateObjectsCoords(n),
                        delete e.centerPoint,
                        this.callSuper("initialize", e);
                    }
                    this.setCoords();
                  },
                  _updateObjectsACoords: function () {
                    for (var t = this._objects.length; t--; )
                      this._objects[t].setCoords(true);
                  },
                  _updateObjectsCoords: function (t) {
                    t = t || this.getCenterPoint();
                    for (var e = this._objects.length; e--; )
                      this._updateObjectCoords(this._objects[e], t);
                  },
                  _updateObjectCoords: function (t, e) {
                    var i = t.left,
                      r = t.top;
                    t.set({ left: i - e.x, top: r - e.y }),
                      (t.group = this),
                      t.setCoords(!0);
                  },
                  toString: function () {
                    return "#<fabric.Group: (" + this.complexity() + ")>";
                  },
                  addWithUpdate: function (t) {
                    var i = !!this.group;
                    return (
                      this._restoreObjectsState(),
                      e.util.resetObjectTransform(this),
                      t &&
                        (i &&
                          e.util.removeTransformFromObject(
                            t,
                            this.group.calcTransformMatrix()
                          ),
                        this._objects.push(t),
                        (t.group = this),
                        t._set("canvas", this.canvas)),
                      this._calcBounds(),
                      this._updateObjectsCoords(),
                      (this.dirty = !0),
                      i ? this.group.addWithUpdate() : this.setCoords(),
                      this
                    );
                  },
                  removeWithUpdate: function (t) {
                    return (
                      this._restoreObjectsState(),
                      e.util.resetObjectTransform(this),
                      this.remove(t),
                      this._calcBounds(),
                      this._updateObjectsCoords(),
                      this.setCoords(),
                      (this.dirty = !0),
                      this
                    );
                  },
                  _onObjectAdded: function (t) {
                    (this.dirty = !0),
                      (t.group = this),
                      t._set("canvas", this.canvas);
                  },
                  _onObjectRemoved: function (t) {
                    (this.dirty = !0), delete t.group;
                  },
                  _set: function (t, i) {
                    var r = this._objects.length;
                    if (this.useSetOnGroup)
                      for (; r--; ) this._objects[r].setOnGroup(t, i);
                    if ("canvas" === t)
                      for (; r--; ) this._objects[r]._set(t, i);
                    e.Object.prototype._set.call(this, t, i);
                  },
                  toObject: function (t) {
                    var i = this.includeDefaultValues,
                      r = this._objects.map(function (e) {
                        var r = e.includeDefaultValues;
                        e.includeDefaultValues = i;
                        var n = e.toObject(t);
                        return (e.includeDefaultValues = r), n;
                      }),
                      n = e.Object.prototype.toObject.call(this, t);
                    return (n.objects = r), n;
                  },
                  toDatalessObject: function (t) {
                    var i,
                      r = this.sourcePath;
                    if (r) i = r;
                    else {
                      var n = this.includeDefaultValues;
                      i = this._objects.map(function (e) {
                        var i = e.includeDefaultValues;
                        e.includeDefaultValues = n;
                        var r = e.toDatalessObject(t);
                        return (e.includeDefaultValues = i), r;
                      });
                    }
                    var o = e.Object.prototype.toDatalessObject.call(this, t);
                    return (o.objects = i), o;
                  },
                  render: function (t) {
                    (this._transformDone = !0),
                      this.callSuper("render", t),
                      (this._transformDone = !1);
                  },
                  shouldCache: function () {
                    var t = e.Object.prototype.shouldCache.call(this);
                    if (t)
                      for (var i = 0, r = this._objects.length; i < r; i++)
                        if (this._objects[i].willDrawShadow())
                          return (this.ownCaching = !1), !1;
                    return t;
                  },
                  willDrawShadow: function () {
                    if (e.Object.prototype.willDrawShadow.call(this)) return !0;
                    for (var t = 0, i = this._objects.length; t < i; t++)
                      if (this._objects[t].willDrawShadow()) return !0;
                    return !1;
                  },
                  isOnACache: function () {
                    return (
                      this.ownCaching || (this.group && this.group.isOnACache())
                    );
                  },
                  drawObject: function (t) {
                    for (var e = 0, i = this._objects.length; e < i; e++)
                      this._objects[e].render(t);
                    this._drawClipPath(t);
                  },
                  isCacheDirty: function (t) {
                    if (this.callSuper("isCacheDirty", t)) return !0;
                    if (!this.statefullCache) return !1;
                    for (var e = 0, i = this._objects.length; e < i; e++)
                      if (this._objects[e].isCacheDirty(!0)) {
                        if (this._cacheCanvas) {
                          var r = this.cacheWidth / this.zoomX,
                            n = this.cacheHeight / this.zoomY;
                          this._cacheContext.clearRect(-r / 2, -n / 2, r, n);
                        }
                        return !0;
                      }
                    return !1;
                  },
                  _restoreObjectsState: function () {
                    var t = this.calcOwnMatrix();
                    return (
                      this._objects.forEach(function (i) {
                        e.util.addTransformToObject(i, t),
                          delete i.group,
                          i.setCoords();
                      }),
                      this
                    );
                  },
                  realizeTransform: function (t, i) {
                    return e.util.addTransformToObject(t, i), t;
                  },
                  destroy: function () {
                    return (
                      this._objects.forEach(function (t) {
                        t.set("dirty", !0);
                      }),
                      this._restoreObjectsState()
                    );
                  },
                  toActiveSelection: function () {
                    if (this.canvas) {
                      var t = this._objects,
                        i = this.canvas;
                      this._objects = [];
                      var r = this.toObject();
                      delete r.objects;
                      var n = new e.ActiveSelection([]);
                      return (
                        n.set(r),
                        (n.type = "activeSelection"),
                        i.remove(this),
                        t.forEach(function (t) {
                          (t.group = n), (t.dirty = !0), i.add(t);
                        }),
                        (n.canvas = i),
                        (n._objects = t),
                        (i._activeObject = n),
                        n.setCoords(),
                        n
                      );
                    }
                  },
                  ungroupOnCanvas: function () {
                    return this._restoreObjectsState();
                  },
                  setObjectsCoords: function () {
                    return (
                      this.forEachObject(function (t) {
                        t.setCoords(true);
                      }),
                      this
                    );
                  },
                  _calcBounds: function (t) {
                    for (
                      var e,
                        i,
                        r,
                        n,
                        o = [],
                        s = [],
                        a = ["tr", "br", "bl", "tl"],
                        l = 0,
                        h = this._objects.length,
                        c = a.length;
                      l < h;
                      ++l
                    ) {
                      for (
                        r = (e = this._objects[l]).calcACoords(), n = 0;
                        n < c;
                        n++
                      )
                        (i = a[n]), o.push(r[i].x), s.push(r[i].y);
                      e.aCoords = r;
                    }
                    this._getBounds(o, s, t);
                  },
                  _getBounds: function (t, n, o) {
                    var s = new e.Point(i(t), i(n)),
                      a = new e.Point(r(t), r(n)),
                      l = s.y || 0,
                      h = s.x || 0,
                      c = a.x - s.x || 0,
                      u = a.y - s.y || 0;
                    (this.width = c),
                      (this.height = u),
                      o ||
                        this.setPositionByOrigin({ x: h, y: l }, "left", "top");
                  },
                  _toSVG: function (t) {
                    for (
                      var e = ["<g ", "COMMON_PARTS", " >\n"],
                        i = 0,
                        r = this._objects.length;
                      i < r;
                      i++
                    )
                      e.push("\t\t", this._objects[i].toSVG(t));
                    return e.push("</g>\n"), e;
                  },
                  getSvgStyles: function () {
                    var t =
                        void 0 !== this.opacity && 1 !== this.opacity
                          ? "opacity: " + this.opacity + ";"
                          : "",
                      e = this.visible ? "" : " visibility: hidden;";
                    return [t, this.getSvgFilter(), e].join("");
                  },
                  toClipPathSVG: function (t) {
                    for (
                      var e = [], i = 0, r = this._objects.length;
                      i < r;
                      i++
                    )
                      e.push("\t", this._objects[i].toClipPathSVG(t));
                    return this._createBaseClipPathSVGMarkup(e, { reviver: t });
                  },
                })),
                (e.Group.fromObject = function (t, i) {
                  var r = t.objects,
                    n = e.util.object.clone(t, !0);
                  delete n.objects,
                    "string" != typeof r
                      ? e.util.enlivenObjects(r, function (r) {
                          e.util.enlivenObjects([t.clipPath], function (n) {
                            var o = e.util.object.clone(t, !0);
                            (o.clipPath = n[0]),
                              delete o.objects,
                              i && i(new e.Group(r, o, !0));
                          });
                        })
                      : e.loadSVGFromURL(r, function (o) {
                          var s = e.util.groupSVGElements(o, t, r);
                          s.set(n), i && i(s);
                        });
                }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {});
              e.ActiveSelection ||
                ((e.ActiveSelection = e.util.createClass(e.Group, {
                  type: "activeSelection",
                  initialize: function (t, i) {
                    (i = i || {}), (this._objects = t || []);
                    for (var r = this._objects.length; r--; )
                      this._objects[r].group = this;
                    i.originX && (this.originX = i.originX),
                      i.originY && (this.originY = i.originY),
                      this._calcBounds(),
                      this._updateObjectsCoords(),
                      e.Object.prototype.initialize.call(this, i),
                      this.setCoords();
                  },
                  toGroup: function () {
                    var t = this._objects.concat();
                    this._objects = [];
                    var i = e.Object.prototype.toObject.call(this),
                      r = new e.Group([]);
                    if (
                      (delete i.type,
                      r.set(i),
                      t.forEach(function (t) {
                        t.canvas.remove(t), (t.group = r);
                      }),
                      (r._objects = t),
                      !this.canvas)
                    )
                      return r;
                    var n = this.canvas;
                    return n.add(r), (n._activeObject = r), r.setCoords(), r;
                  },
                  onDeselect: function () {
                    return this.destroy(), !1;
                  },
                  toString: function () {
                    return (
                      "#<fabric.ActiveSelection: (" + this.complexity() + ")>"
                    );
                  },
                  shouldCache: function () {
                    return !1;
                  },
                  isOnACache: function () {
                    return !1;
                  },
                  _renderControls: function (t, e, i) {
                    t.save(),
                      (t.globalAlpha = this.isMoving
                        ? this.borderOpacityWhenMoving
                        : 1),
                      this.callSuper("_renderControls", t, e),
                      void 0 === (i = i || {}).hasControls &&
                        (i.hasControls = !1),
                      (i.forActiveSelection = !0);
                    for (var r = 0, n = this._objects.length; r < n; r++)
                      this._objects[r]._renderControls(t, i);
                    t.restore();
                  },
                })),
                (e.ActiveSelection.fromObject = function (t, i) {
                  e.util.enlivenObjects(t.objects, function (r) {
                    delete t.objects, i && i(new e.ActiveSelection(r, t, !0));
                  });
                }));
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = T.util.object.extend;
              t.fabric || (t.fabric = {}),
                t.fabric.Image
                  ? T.warn("fabric.Image is already defined.")
                  : ((T.Image = T.util.createClass(T.Object, {
                      type: "image",
                      strokeWidth: 0,
                      srcFromAttribute: !1,
                      _lastScaleX: 1,
                      _lastScaleY: 1,
                      _filterScalingX: 1,
                      _filterScalingY: 1,
                      minimumScaleTrigger: 0.5,
                      stateProperties:
                        T.Object.prototype.stateProperties.concat(
                          "cropX",
                          "cropY"
                        ),
                      cacheProperties:
                        T.Object.prototype.cacheProperties.concat(
                          "cropX",
                          "cropY"
                        ),
                      cacheKey: "",
                      cropX: 0,
                      cropY: 0,
                      imageSmoothing: !0,
                      initialize: function (t, e) {
                        e || (e = {}),
                          (this.filters = []),
                          (this.cacheKey = "texture" + T.Object.__uid++),
                          this.callSuper("initialize", e),
                          this._initElement(t, e);
                      },
                      getElement: function () {
                        return this._element || {};
                      },
                      setElement: function (t, e) {
                        return (
                          this.removeTexture(this.cacheKey),
                          this.removeTexture(this.cacheKey + "_filtered"),
                          (this._element = t),
                          (this._originalElement = t),
                          this._initConfig(e),
                          0 !== this.filters.length && this.applyFilters(),
                          this.resizeFilter && this.applyResizeFilters(),
                          this
                        );
                      },
                      removeTexture: function (t) {
                        var e = T.filterBackend;
                        e && e.evictCachesForKey && e.evictCachesForKey(t);
                      },
                      dispose: function () {
                        this.removeTexture(this.cacheKey),
                          this.removeTexture(this.cacheKey + "_filtered"),
                          (this._cacheContext = void 0),
                          [
                            "_originalElement",
                            "_element",
                            "_filteredEl",
                            "_cacheCanvas",
                          ].forEach(
                            function (t) {
                              T.util.cleanUpJsdomNode(this[t]),
                                (this[t] = void 0);
                            }.bind(this)
                          );
                      },
                      getCrossOrigin: function () {
                        return (
                          this._originalElement &&
                          (this._originalElement.crossOrigin || null)
                        );
                      },
                      getOriginalSize: function () {
                        var t = this.getElement();
                        return {
                          width: t.naturalWidth || t.width,
                          height: t.naturalHeight || t.height,
                        };
                      },
                      _stroke: function (t) {
                        if (this.stroke && 0 !== this.strokeWidth) {
                          var e = this.width / 2,
                            i = this.height / 2;
                          t.beginPath(),
                            t.moveTo(-e, -i),
                            t.lineTo(e, -i),
                            t.lineTo(e, i),
                            t.lineTo(-e, i),
                            t.lineTo(-e, -i),
                            t.closePath();
                        }
                      },
                      _renderDashedStroke: function (t) {
                        var e = -this.width / 2,
                          i = -this.height / 2,
                          r = this.width,
                          n = this.height;
                        t.save(),
                          this._setStrokeStyles(t, this),
                          t.beginPath(),
                          T.util.drawDashedLine(
                            t,
                            e,
                            i,
                            e + r,
                            i,
                            this.strokeDashArray
                          ),
                          T.util.drawDashedLine(
                            t,
                            e + r,
                            i,
                            e + r,
                            i + n,
                            this.strokeDashArray
                          ),
                          T.util.drawDashedLine(
                            t,
                            e + r,
                            i + n,
                            e,
                            i + n,
                            this.strokeDashArray
                          ),
                          T.util.drawDashedLine(
                            t,
                            e,
                            i + n,
                            e,
                            i,
                            this.strokeDashArray
                          ),
                          t.closePath(),
                          t.restore();
                      },
                      toObject: function (t) {
                        var i = [];
                        this.filters.forEach(function (t) {
                          t && i.push(t.toObject());
                        });
                        var r = e(
                          this.callSuper(
                            "toObject",
                            ["cropX", "cropY"].concat(t)
                          ),
                          {
                            src: this.getSrc(),
                            crossOrigin: this.getCrossOrigin(),
                            filters: i,
                          }
                        );
                        return (
                          this.resizeFilter &&
                            (r.resizeFilter = this.resizeFilter.toObject()),
                          r
                        );
                      },
                      hasCrop: function () {
                        return (
                          this.cropX ||
                          this.cropY ||
                          this.width < this._element.width ||
                          this.height < this._element.height
                        );
                      },
                      _toSVG: function () {
                        var t,
                          e = [],
                          i = [],
                          r = this._element,
                          n = -this.width / 2,
                          o = -this.height / 2,
                          s = "",
                          a = "";
                        if (!r) return [];
                        if (this.hasCrop()) {
                          var l = T.Object.__uid++;
                          e.push(
                            '<clipPath id="imageCrop_' + l + '">\n',
                            '\t<rect x="' +
                              n +
                              '" y="' +
                              o +
                              '" width="' +
                              this.width +
                              '" height="' +
                              this.height +
                              '" />\n',
                            "</clipPath>\n"
                          ),
                            (s = ' clip-path="url(#imageCrop_' + l + ')" ');
                        }
                        if (
                          (this.imageSmoothing ||
                            (a = '" image-rendering="optimizeSpeed'),
                          i.push(
                            "\t<image ",
                            "COMMON_PARTS",
                            'xlink:href="',
                            this.getSvgSrc(!0),
                            '" x="',
                            n - this.cropX,
                            '" y="',
                            o - this.cropY,
                            '" width="',
                            r.width || r.naturalWidth,
                            '" height="',
                            r.height || r.height,
                            a,
                            '"',
                            s,
                            "></image>\n"
                          ),
                          this.stroke || this.strokeDashArray)
                        ) {
                          var h = this.fill;
                          (this.fill = null),
                            (t = [
                              "\t<rect ",
                              'x="',
                              n,
                              '" y="',
                              o,
                              '" width="',
                              this.width,
                              '" height="',
                              this.height,
                              '" style="',
                              this.getSvgStyles(),
                              '"/>\n',
                            ]),
                            (this.fill = h);
                        }
                        return (e =
                          "fill" !== this.paintFirst
                            ? e.concat(t, i)
                            : e.concat(i, t));
                      },
                      getSrc: function (t) {
                        var e = t ? this._element : this._originalElement;
                        return e
                          ? e.toDataURL
                            ? e.toDataURL()
                            : this.srcFromAttribute
                            ? e.getAttribute("src")
                            : e.src
                          : this.src || "";
                      },
                      setSrc: function (t, e, i) {
                        return (
                          T.util.loadImage(
                            t,
                            function (t, r) {
                              this.setElement(t, i),
                                this._setWidthHeight(),
                                e && e(this, r);
                            },
                            this,
                            i && i.crossOrigin
                          ),
                          this
                        );
                      },
                      toString: function () {
                        return (
                          '#<fabric.Image: { src: "' + this.getSrc() + '" }>'
                        );
                      },
                      applyResizeFilters: function () {
                        var t = this.resizeFilter,
                          e = this.minimumScaleTrigger,
                          i = this.getTotalObjectScaling(),
                          r = i.scaleX,
                          n = i.scaleY,
                          o = this._filteredEl || this._originalElement;
                        if (
                          (this.group && this.set("dirty", !0),
                          !t || (r > e && n > e))
                        )
                          return (
                            (this._element = o),
                            (this._filterScalingX = 1),
                            (this._filterScalingY = 1),
                            (this._lastScaleX = r),
                            void (this._lastScaleY = n)
                          );
                        T.filterBackend ||
                          (T.filterBackend = T.initFilterBackend());
                        var s = T.util.createCanvasElement(),
                          a = this._filteredEl
                            ? this.cacheKey + "_filtered"
                            : this.cacheKey,
                          l = o.width,
                          h = o.height;
                        (s.width = l),
                          (s.height = h),
                          (this._element = s),
                          (this._lastScaleX = t.scaleX = r),
                          (this._lastScaleY = t.scaleY = n),
                          T.filterBackend.applyFilters(
                            [t],
                            o,
                            l,
                            h,
                            this._element,
                            a
                          ),
                          (this._filterScalingX =
                            s.width / this._originalElement.width),
                          (this._filterScalingY =
                            s.height / this._originalElement.height);
                      },
                      applyFilters: function (t) {
                        if (
                          ((t = (t = t || this.filters || []).filter(function (
                            t
                          ) {
                            return t && !t.isNeutralState();
                          })),
                          this.set("dirty", !0),
                          this.removeTexture(this.cacheKey + "_filtered"),
                          0 === t.length)
                        )
                          return (
                            (this._element = this._originalElement),
                            (this._filteredEl = null),
                            (this._filterScalingX = 1),
                            (this._filterScalingY = 1),
                            this
                          );
                        var e = this._originalElement,
                          i = e.naturalWidth || e.width,
                          r = e.naturalHeight || e.height;
                        if (this._element === this._originalElement) {
                          var n = T.util.createCanvasElement();
                          (n.width = i),
                            (n.height = r),
                            (this._element = n),
                            (this._filteredEl = n);
                        } else
                          (this._element = this._filteredEl),
                            this._filteredEl
                              .getContext("2d")
                              .clearRect(0, 0, i, r),
                            (this._lastScaleX = 1),
                            (this._lastScaleY = 1);
                        return (
                          T.filterBackend ||
                            (T.filterBackend = T.initFilterBackend()),
                          T.filterBackend.applyFilters(
                            t,
                            this._originalElement,
                            i,
                            r,
                            this._element,
                            this.cacheKey
                          ),
                          (this._originalElement.width ===
                            this._element.width &&
                            this._originalElement.height ===
                              this._element.height) ||
                            ((this._filterScalingX =
                              this._element.width /
                              this._originalElement.width),
                            (this._filterScalingY =
                              this._element.height /
                              this._originalElement.height)),
                          this
                        );
                      },
                      _render: function (t) {
                        T.util.setImageSmoothing(t, this.imageSmoothing),
                          !0 !== this.isMoving &&
                            this.resizeFilter &&
                            this._needsResize() &&
                            this.applyResizeFilters(),
                          this._stroke(t),
                          this._renderPaintInOrder(t);
                      },
                      drawCacheOnCanvas: function (t) {
                        T.util.setImageSmoothing(t, this.imageSmoothing),
                          T.Object.prototype.drawCacheOnCanvas.call(this, t);
                      },
                      shouldCache: function () {
                        return this.needsItsOwnCache();
                      },
                      _renderFill: function (t) {
                        var e = this._element;
                        if (e) {
                          var i = this._filterScalingX,
                            r = this._filterScalingY,
                            n = this.width,
                            o = this.height,
                            s = Math.min,
                            a = Math.max,
                            l = a(this.cropX, 0),
                            h = a(this.cropY, 0),
                            c = e.naturalWidth || e.width,
                            u = e.naturalHeight || e.height,
                            f = l * i,
                            d = h * r,
                            p = s(n * i, c - f),
                            g = s(o * r, u - d),
                            v = -n / 2,
                            m = -o / 2,
                            y = s(n, c / i - l),
                            _ = s(o, u / r - h);
                          e && t.drawImage(e, f, d, p, g, v, m, y, _);
                        }
                      },
                      _needsResize: function () {
                        var t = this.getTotalObjectScaling();
                        return (
                          t.scaleX !== this._lastScaleX ||
                          t.scaleY !== this._lastScaleY
                        );
                      },
                      _resetWidthHeight: function () {
                        this.set(this.getOriginalSize());
                      },
                      _initElement: function (t, e) {
                        this.setElement(T.util.getById(t), e),
                          T.util.addClass(
                            this.getElement(),
                            T.Image.CSS_CANVAS
                          );
                      },
                      _initConfig: function (t) {
                        t || (t = {}),
                          this.setOptions(t),
                          this._setWidthHeight(t);
                      },
                      _initFilters: function (t, e) {
                        t && t.length
                          ? T.util.enlivenObjects(
                              t,
                              function (t) {
                                e && e(t);
                              },
                              "fabric.Image.filters"
                            )
                          : e && e();
                      },
                      _setWidthHeight: function (t) {
                        t || (t = {});
                        var e = this.getElement();
                        (this.width =
                          t.width || e.naturalWidth || e.width || 0),
                          (this.height =
                            t.height || e.naturalHeight || e.height || 0);
                      },
                      parsePreserveAspectRatioAttribute: function () {
                        var t,
                          e = T.util.parsePreserveAspectRatioAttribute(
                            this.preserveAspectRatio || ""
                          ),
                          i = this._element.width,
                          r = this._element.height,
                          n = 1,
                          o = 1,
                          s = 0,
                          a = 0,
                          l = 0,
                          h = 0,
                          c = this.width,
                          u = this.height,
                          f = { width: c, height: u };
                        return (
                          !e || ("none" === e.alignX && "none" === e.alignY)
                            ? ((n = c / i), (o = u / r))
                            : ("meet" === e.meetOrSlice &&
                                ((t =
                                  (c -
                                    i *
                                      (n = o =
                                        T.util.findScaleToFit(
                                          this._element,
                                          f
                                        ))) /
                                  2),
                                "Min" === e.alignX && (s = -t),
                                "Max" === e.alignX && (s = t),
                                (t = (u - r * o) / 2),
                                "Min" === e.alignY && (a = -t),
                                "Max" === e.alignY && (a = t)),
                              "slice" === e.meetOrSlice &&
                                ((t =
                                  i -
                                  c /
                                    (n = o =
                                      T.util.findScaleToCover(
                                        this._element,
                                        f
                                      ))),
                                "Mid" === e.alignX && (l = t / 2),
                                "Max" === e.alignX && (l = t),
                                (t = r - u / o),
                                "Mid" === e.alignY && (h = t / 2),
                                "Max" === e.alignY && (h = t),
                                (i = c / n),
                                (r = u / o))),
                          {
                            width: i,
                            height: r,
                            scaleX: n,
                            scaleY: o,
                            offsetLeft: s,
                            offsetTop: a,
                            cropX: l,
                            cropY: h,
                          }
                        );
                      },
                    })),
                    (T.Image.CSS_CANVAS = "canvas-img"),
                    (T.Image.prototype.getSvgSrc = T.Image.prototype.getSrc),
                    (T.Image.fromObject = function (t, e) {
                      var i = T.util.object.clone(t);
                      T.util.loadImage(
                        i.src,
                        function (t, r) {
                          r
                            ? e && e(null, !0)
                            : T.Image.prototype._initFilters.call(
                                i,
                                i.filters,
                                function (r) {
                                  (i.filters = r || []),
                                    T.Image.prototype._initFilters.call(
                                      i,
                                      [i.resizeFilter],
                                      function (r) {
                                        (i.resizeFilter = r[0]),
                                          T.util.enlivenObjects(
                                            [i.clipPath],
                                            function (r) {
                                              i.clipPath = r[0];
                                              var n = new T.Image(t, i);
                                              e(n, !1);
                                            }
                                          );
                                      }
                                    );
                                }
                              );
                        },
                        null,
                        i.crossOrigin
                      );
                    }),
                    (T.Image.fromURL = function (t, e, i) {
                      T.util.loadImage(
                        t,
                        function (t, r) {
                          e && e(new T.Image(t, i), r);
                        },
                        null,
                        i && i.crossOrigin
                      );
                    }),
                    (T.Image.ATTRIBUTE_NAMES = T.SHARED_ATTRIBUTES.concat(
                      "x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(
                        " "
                      )
                    )),
                    (T.Image.fromElement = function (t, i, r) {
                      var n = T.parseAttributes(t, T.Image.ATTRIBUTE_NAMES);
                      T.Image.fromURL(
                        n["xlink:href"],
                        i,
                        e(r ? T.util.object.clone(r) : {}, n)
                      );
                    }));
            })(void 0 !== i ? i : this),
            T.util.object.extend(T.Object.prototype, {
              _getAngleValueForStraighten: function () {
                var t = this.angle % 360;
                return t > 0
                  ? 90 * Math.round((t - 1) / 90)
                  : 90 * Math.round(t / 90);
              },
              straighten: function () {
                return this.rotate(this._getAngleValueForStraighten()), this;
              },
              fxStraighten: function (t) {
                var e = function () {},
                  i = (t = t || {}).onComplete || e,
                  r = t.onChange || e,
                  n = this;
                return (
                  T.util.animate({
                    startValue: this.get("angle"),
                    endValue: this._getAngleValueForStraighten(),
                    duration: this.FX_DURATION,
                    onChange: function (t) {
                      n.rotate(t), r();
                    },
                    onComplete: function () {
                      n.setCoords(), i();
                    },
                  }),
                  this
                );
              },
            }),
            T.util.object.extend(T.StaticCanvas.prototype, {
              straightenObject: function (t) {
                return t.straighten(), this.requestRenderAll(), this;
              },
              fxStraightenObject: function (t) {
                return (
                  t.fxStraighten({ onChange: this.requestRenderAllBound }), this
                );
              },
            }),
            (function () {
              "use strict";
              function t(t, e) {
                var i = "precision " + e + " float;\nvoid main(){}",
                  r = t.createShader(t.FRAGMENT_SHADER);
                return (
                  t.shaderSource(r, i),
                  t.compileShader(r),
                  !!t.getShaderParameter(r, t.COMPILE_STATUS)
                );
              }
              function e(t) {
                t && t.tileSize && (this.tileSize = t.tileSize),
                  this.setupGLContext(this.tileSize, this.tileSize),
                  this.captureGPUInfo();
              }
              (T.isWebglSupported = function (e) {
                if (T.isLikelyNode) return !1;
                e = e || T.WebglFilterBackend.prototype.tileSize;
                var i = document.createElement("canvas"),
                  r =
                    i.getContext("webgl") || i.getContext("experimental-webgl"),
                  n = !1;
                if (r) {
                  (T.maxTextureSize = r.getParameter(r.MAX_TEXTURE_SIZE)),
                    (n = T.maxTextureSize >= e);
                  for (var o = ["highp", "mediump", "lowp"], s = 0; s < 3; s++)
                    if (t(r, o[s])) {
                      T.webGlPrecision = o[s];
                      break;
                    }
                }
                return (this.isSupported = n), n;
              }),
                (T.WebglFilterBackend = e),
                (e.prototype = {
                  tileSize: 2048,
                  resources: {},
                  setupGLContext: function (t, e) {
                    this.dispose(),
                      this.createWebGLCanvas(t, e),
                      (this.aPosition = new Float32Array([
                        0, 0, 0, 1, 1, 0, 1, 1,
                      ])),
                      this.chooseFastestCopyGLTo2DMethod(t, e);
                  },
                  chooseFastestCopyGLTo2DMethod: function (t, e) {
                    var i,
                      r = void 0 !== window.performance;
                    try {
                      new ImageData(1, 1), (i = !0);
                    } catch (t) {
                      i = !1;
                    }
                    var n = "undefined" != typeof ArrayBuffer,
                      o = "undefined" != typeof Uint8ClampedArray;
                    if (r && i && n && o) {
                      var s = T.util.createCanvasElement(),
                        a = new ArrayBuffer(t * e * 4);
                      if (T.forceGLPutImageData)
                        return (
                          (this.imageBuffer = a), void (this.copyGLTo2D = E)
                        );
                      var l,
                        h,
                        c = {
                          imageBuffer: a,
                          destinationWidth: t,
                          destinationHeight: e,
                          targetCanvas: s,
                        };
                      (s.width = t),
                        (s.height = e),
                        (l = window.performance.now()),
                        k.call(c, this.gl, c),
                        (h = window.performance.now() - l),
                        (l = window.performance.now()),
                        E.call(c, this.gl, c),
                        h > window.performance.now() - l
                          ? ((this.imageBuffer = a), (this.copyGLTo2D = E))
                          : (this.copyGLTo2D = k);
                    }
                  },
                  createWebGLCanvas: function (t, e) {
                    var i = T.util.createCanvasElement();
                    (i.width = t), (i.height = e);
                    var r = {
                        alpha: !0,
                        premultipliedAlpha: !1,
                        depth: !1,
                        stencil: !1,
                        antialias: !1,
                      },
                      n = i.getContext("webgl", r);
                    n || (n = i.getContext("experimental-webgl", r)),
                      n &&
                        (n.clearColor(0, 0, 0, 0),
                        (this.canvas = i),
                        (this.gl = n));
                  },
                  applyFilters: function (t, e, i, r, n, o) {
                    var s,
                      a = this.gl;
                    o && (s = this.getCachedTexture(o, e));
                    var l = {
                        originalWidth: e.width || e.originalWidth,
                        originalHeight: e.height || e.originalHeight,
                        sourceWidth: i,
                        sourceHeight: r,
                        destinationWidth: i,
                        destinationHeight: r,
                        context: a,
                        sourceTexture: this.createTexture(a, i, r, !s && e),
                        targetTexture: this.createTexture(a, i, r),
                        originalTexture:
                          s || this.createTexture(a, i, r, !s && e),
                        passes: t.length,
                        webgl: !0,
                        aPosition: this.aPosition,
                        programCache: this.programCache,
                        pass: 0,
                        filterBackend: this,
                        targetCanvas: n,
                      },
                      h = a.createFramebuffer();
                    return (
                      a.bindFramebuffer(a.FRAMEBUFFER, h),
                      t.forEach(function (t) {
                        t && t.applyTo(l);
                      }),
                      (function (t) {
                        var e = t.targetCanvas,
                          i = e.width,
                          r = e.height,
                          n = t.destinationWidth,
                          o = t.destinationHeight;
                        (i === n && r === o) || ((e.width = n), (e.height = o));
                      })(l),
                      this.copyGLTo2D(a, l),
                      a.bindTexture(a.TEXTURE_2D, null),
                      a.deleteTexture(l.sourceTexture),
                      a.deleteTexture(l.targetTexture),
                      a.deleteFramebuffer(h),
                      n.getContext("2d").setTransform(1, 0, 0, 1, 0, 0),
                      l
                    );
                  },
                  dispose: function () {
                    this.canvas && ((this.canvas = null), (this.gl = null)),
                      this.clearWebGLCaches();
                  },
                  clearWebGLCaches: function () {
                    (this.programCache = {}), (this.textureCache = {});
                  },
                  createTexture: function (t, e, i, r) {
                    var n = t.createTexture();
                    return (
                      t.bindTexture(t.TEXTURE_2D, n),
                      t.texParameteri(
                        t.TEXTURE_2D,
                        t.TEXTURE_MAG_FILTER,
                        t.NEAREST
                      ),
                      t.texParameteri(
                        t.TEXTURE_2D,
                        t.TEXTURE_MIN_FILTER,
                        t.NEAREST
                      ),
                      t.texParameteri(
                        t.TEXTURE_2D,
                        t.TEXTURE_WRAP_S,
                        t.CLAMP_TO_EDGE
                      ),
                      t.texParameteri(
                        t.TEXTURE_2D,
                        t.TEXTURE_WRAP_T,
                        t.CLAMP_TO_EDGE
                      ),
                      r
                        ? t.texImage2D(
                            t.TEXTURE_2D,
                            0,
                            t.RGBA,
                            t.RGBA,
                            t.UNSIGNED_BYTE,
                            r
                          )
                        : t.texImage2D(
                            t.TEXTURE_2D,
                            0,
                            t.RGBA,
                            e,
                            i,
                            0,
                            t.RGBA,
                            t.UNSIGNED_BYTE,
                            null
                          ),
                      n
                    );
                  },
                  getCachedTexture: function (t, e) {
                    if (this.textureCache[t]) return this.textureCache[t];
                    var i = this.createTexture(this.gl, e.width, e.height, e);
                    return (this.textureCache[t] = i), i;
                  },
                  evictCachesForKey: function (t) {
                    this.textureCache[t] &&
                      (this.gl.deleteTexture(this.textureCache[t]),
                      delete this.textureCache[t]);
                  },
                  copyGLTo2D: k,
                  captureGPUInfo: function () {
                    if (this.gpuInfo) return this.gpuInfo;
                    var t = this.gl,
                      e = { renderer: "", vendor: "" };
                    if (!t) return e;
                    var i = t.getExtension("WEBGL_debug_renderer_info");
                    if (i) {
                      var r = t.getParameter(i.UNMASKED_RENDERER_WEBGL),
                        n = t.getParameter(i.UNMASKED_VENDOR_WEBGL);
                      r && (e.renderer = r.toLowerCase()),
                        n && (e.vendor = n.toLowerCase());
                    }
                    return (this.gpuInfo = e), e;
                  },
                });
            })(),
            (function () {
              "use strict";
              var t = function () {};
              function e() {}
              (T.Canvas2dFilterBackend = e),
                (e.prototype = {
                  evictCachesForKey: t,
                  dispose: t,
                  clearWebGLCaches: t,
                  resources: {},
                  applyFilters: function (t, e, i, r, n) {
                    var o = n.getContext("2d");
                    o.drawImage(e, 0, 0, i, r);
                    var s = {
                      sourceWidth: i,
                      sourceHeight: r,
                      imageData: o.getImageData(0, 0, i, r),
                      originalEl: e,
                      originalImageData: o.getImageData(0, 0, i, r),
                      canvasEl: n,
                      ctx: o,
                      filterBackend: this,
                    };
                    return (
                      t.forEach(function (t) {
                        t.applyTo(s);
                      }),
                      (s.imageData.width === i && s.imageData.height === r) ||
                        ((n.width = s.imageData.width),
                        (n.height = s.imageData.height)),
                      o.putImageData(s.imageData, 0, 0),
                      s
                    );
                  },
                });
            })(),
            (T.Image = T.Image || {}),
            (T.Image.filters = T.Image.filters || {}),
            (T.Image.filters.BaseFilter = T.util.createClass({
              type: "BaseFilter",
              vertexSource:
                "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvoid main() {\nvTexCoord = aPosition;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
              fragmentSource:
                "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D uTexture;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\n}",
              initialize: function (t) {
                t && this.setOptions(t);
              },
              setOptions: function (t) {
                for (var e in t) this[e] = t[e];
              },
              createProgram: function (t, e, i) {
                (e = e || this.fragmentSource),
                  (i = i || this.vertexSource),
                  "highp" !== T.webGlPrecision &&
                    (e = e.replace(
                      /precision highp float/g,
                      "precision " + T.webGlPrecision + " float"
                    ));
                var r = t.createShader(t.VERTEX_SHADER);
                if (
                  (t.shaderSource(r, i),
                  t.compileShader(r),
                  !t.getShaderParameter(r, t.COMPILE_STATUS))
                )
                  throw new Error(
                    "Vertex shader compile error for " +
                      this.type +
                      ": " +
                      t.getShaderInfoLog(r)
                  );
                var n = t.createShader(t.FRAGMENT_SHADER);
                if (
                  (t.shaderSource(n, e),
                  t.compileShader(n),
                  !t.getShaderParameter(n, t.COMPILE_STATUS))
                )
                  throw new Error(
                    "Fragment shader compile error for " +
                      this.type +
                      ": " +
                      t.getShaderInfoLog(n)
                  );
                var o = t.createProgram();
                if (
                  (t.attachShader(o, r),
                  t.attachShader(o, n),
                  t.linkProgram(o),
                  !t.getProgramParameter(o, t.LINK_STATUS))
                )
                  throw new Error(
                    'Shader link error for "${this.type}" ' +
                      t.getProgramInfoLog(o)
                  );
                var s = this.getAttributeLocations(t, o),
                  a = this.getUniformLocations(t, o) || {};
                return (
                  (a.uStepW = t.getUniformLocation(o, "uStepW")),
                  (a.uStepH = t.getUniformLocation(o, "uStepH")),
                  { program: o, attributeLocations: s, uniformLocations: a }
                );
              },
              getAttributeLocations: function (t, e) {
                return { aPosition: t.getAttribLocation(e, "aPosition") };
              },
              getUniformLocations: function () {
                return {};
              },
              sendAttributeData: function (t, e, i) {
                var r = e.aPosition,
                  n = t.createBuffer();
                t.bindBuffer(t.ARRAY_BUFFER, n),
                  t.enableVertexAttribArray(r),
                  t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0),
                  t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW);
              },
              _setupFrameBuffer: function (t) {
                var e,
                  i,
                  r = t.context;
                t.passes > 1
                  ? ((e = t.destinationWidth),
                    (i = t.destinationHeight),
                    (t.sourceWidth === e && t.sourceHeight === i) ||
                      (r.deleteTexture(t.targetTexture),
                      (t.targetTexture = t.filterBackend.createTexture(
                        r,
                        e,
                        i
                      ))),
                    r.framebufferTexture2D(
                      r.FRAMEBUFFER,
                      r.COLOR_ATTACHMENT0,
                      r.TEXTURE_2D,
                      t.targetTexture,
                      0
                    ))
                  : (r.bindFramebuffer(r.FRAMEBUFFER, null), r.finish());
              },
              _swapTextures: function (t) {
                t.passes--, t.pass++;
                var e = t.targetTexture;
                (t.targetTexture = t.sourceTexture), (t.sourceTexture = e);
              },
              isNeutralState: function () {
                var t = this.mainParameter,
                  e = T.Image.filters[this.type].prototype;
                if (t) {
                  if (Array.isArray(e[t])) {
                    for (var i = e[t].length; i--; )
                      if (this[t][i] !== e[t][i]) return !1;
                    return !0;
                  }
                  return e[t] === this[t];
                }
                return !1;
              },
              applyTo: function (t) {
                t.webgl
                  ? (this._setupFrameBuffer(t),
                    this.applyToWebGL(t),
                    this._swapTextures(t))
                  : this.applyTo2d(t);
              },
              retrieveShader: function (t) {
                return (
                  t.programCache.hasOwnProperty(this.type) ||
                    (t.programCache[this.type] = this.createProgram(t.context)),
                  t.programCache[this.type]
                );
              },
              applyToWebGL: function (t) {
                var e = t.context,
                  i = this.retrieveShader(t);
                0 === t.pass && t.originalTexture
                  ? e.bindTexture(e.TEXTURE_2D, t.originalTexture)
                  : e.bindTexture(e.TEXTURE_2D, t.sourceTexture),
                  e.useProgram(i.program),
                  this.sendAttributeData(e, i.attributeLocations, t.aPosition),
                  e.uniform1f(i.uniformLocations.uStepW, 1 / t.sourceWidth),
                  e.uniform1f(i.uniformLocations.uStepH, 1 / t.sourceHeight),
                  this.sendUniformData(e, i.uniformLocations),
                  e.viewport(0, 0, t.destinationWidth, t.destinationHeight),
                  e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
              },
              bindAdditionalTexture: function (t, e, i) {
                t.activeTexture(i),
                  t.bindTexture(t.TEXTURE_2D, e),
                  t.activeTexture(t.TEXTURE0);
              },
              unbindAdditionalTexture: function (t, e) {
                t.activeTexture(e),
                  t.bindTexture(t.TEXTURE_2D, null),
                  t.activeTexture(t.TEXTURE0);
              },
              getMainParameter: function () {
                return this[this.mainParameter];
              },
              setMainParameter: function (t) {
                this[this.mainParameter] = t;
              },
              sendUniformData: function () {},
              createHelpLayer: function (t) {
                if (!t.helpLayer) {
                  var e = document.createElement("canvas");
                  (e.width = t.sourceWidth),
                    (e.height = t.sourceHeight),
                    (t.helpLayer = e);
                }
              },
              toObject: function () {
                var t = { type: this.type },
                  e = this.mainParameter;
                return e && (t[e] = this[e]), t;
              },
              toJSON: function () {
                return this.toObject();
              },
            })),
            (T.Image.filters.BaseFilter.fromObject = function (t, e) {
              var i = new T.Image.filters[t.type](t);
              return e && e(i), i;
            }),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.ColorMatrix = r(i.BaseFilter, {
                type: "ColorMatrix",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nuniform mat4 uColorMatrix;\nuniform vec4 uConstants;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor *= uColorMatrix;\ncolor += uConstants;\ngl_FragColor = color;\n}",
                matrix: [
                  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
                ],
                mainParameter: "matrix",
                colorsOnly: !0,
                initialize: function (t) {
                  this.callSuper("initialize", t),
                    (this.matrix = this.matrix.slice(0));
                },
                applyTo2d: function (t) {
                  var e,
                    i,
                    r,
                    n,
                    o,
                    s = t.imageData.data,
                    a = s.length,
                    l = this.matrix,
                    h = this.colorsOnly;
                  for (o = 0; o < a; o += 4)
                    (e = s[o]),
                      (i = s[o + 1]),
                      (r = s[o + 2]),
                      h
                        ? ((s[o] = e * l[0] + i * l[1] + r * l[2] + 255 * l[4]),
                          (s[o + 1] =
                            e * l[5] + i * l[6] + r * l[7] + 255 * l[9]),
                          (s[o + 2] =
                            e * l[10] + i * l[11] + r * l[12] + 255 * l[14]))
                        : ((n = s[o + 3]),
                          (s[o] =
                            e * l[0] +
                            i * l[1] +
                            r * l[2] +
                            n * l[3] +
                            255 * l[4]),
                          (s[o + 1] =
                            e * l[5] +
                            i * l[6] +
                            r * l[7] +
                            n * l[8] +
                            255 * l[9]),
                          (s[o + 2] =
                            e * l[10] +
                            i * l[11] +
                            r * l[12] +
                            n * l[13] +
                            255 * l[14]),
                          (s[o + 3] =
                            e * l[15] +
                            i * l[16] +
                            r * l[17] +
                            n * l[18] +
                            255 * l[19]));
                },
                getUniformLocations: function (t, e) {
                  return {
                    uColorMatrix: t.getUniformLocation(e, "uColorMatrix"),
                    uConstants: t.getUniformLocation(e, "uConstants"),
                  };
                },
                sendUniformData: function (t, e) {
                  var i = this.matrix,
                    r = [
                      i[0],
                      i[1],
                      i[2],
                      i[3],
                      i[5],
                      i[6],
                      i[7],
                      i[8],
                      i[10],
                      i[11],
                      i[12],
                      i[13],
                      i[15],
                      i[16],
                      i[17],
                      i[18],
                    ],
                    n = [i[4], i[9], i[14], i[19]];
                  t.uniformMatrix4fv(e.uColorMatrix, !1, r),
                    t.uniform4fv(e.uConstants, n);
                },
              })),
                (e.Image.filters.ColorMatrix.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.Brightness = r(i.BaseFilter, {
                type: "Brightness",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBrightness;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += uBrightness;\ngl_FragColor = color;\n}",
                brightness: 0,
                mainParameter: "brightness",
                applyTo2d: function (t) {
                  if (0 !== this.brightness) {
                    var e,
                      i = t.imageData.data,
                      r = i.length,
                      n = Math.round(255 * this.brightness);
                    for (e = 0; e < r; e += 4)
                      (i[e] = i[e] + n),
                        (i[e + 1] = i[e + 1] + n),
                        (i[e + 2] = i[e + 2] + n);
                  }
                },
                getUniformLocations: function (t, e) {
                  return {
                    uBrightness: t.getUniformLocation(e, "uBrightness"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uBrightness, this.brightness);
                },
              })),
                (e.Image.filters.Brightness.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.object.extend,
                r = e.Image.filters,
                n = e.util.createClass;
              (r.Convolute = n(r.BaseFilter, {
                type: "Convolute",
                opaque: !1,
                matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
                fragmentSource: {
                  Convolute_3_1:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                  Convolute_3_0:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                  Convolute_5_1:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                  Convolute_5_0:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                  Convolute_7_1:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                  Convolute_7_0:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                  Convolute_9_1:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                  Convolute_9_0:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                },
                retrieveShader: function (t) {
                  var e = Math.sqrt(this.matrix.length),
                    i = this.type + "_" + e + "_" + (this.opaque ? 1 : 0),
                    r = this.fragmentSource[i];
                  return (
                    t.programCache.hasOwnProperty(i) ||
                      (t.programCache[i] = this.createProgram(t.context, r)),
                    t.programCache[i]
                  );
                },
                applyTo2d: function (t) {
                  var e,
                    i,
                    r,
                    n,
                    o,
                    s,
                    a,
                    l,
                    h,
                    c,
                    u,
                    f,
                    d,
                    p = t.imageData,
                    g = p.data,
                    v = this.matrix,
                    m = Math.round(Math.sqrt(v.length)),
                    y = Math.floor(m / 2),
                    _ = p.width,
                    b = p.height,
                    x = t.ctx.createImageData(_, b),
                    C = x.data,
                    w = this.opaque ? 1 : 0;
                  for (u = 0; u < b; u++)
                    for (c = 0; c < _; c++) {
                      for (
                        o = 4 * (u * _ + c), e = 0, i = 0, r = 0, n = 0, d = 0;
                        d < m;
                        d++
                      )
                        for (f = 0; f < m; f++)
                          (s = c + f - y),
                            (a = u + d - y) < 0 ||
                              a >= b ||
                              s < 0 ||
                              s >= _ ||
                              ((l = 4 * (a * _ + s)),
                              (h = v[d * m + f]),
                              (e += g[l] * h),
                              (i += g[l + 1] * h),
                              (r += g[l + 2] * h),
                              w || (n += g[l + 3] * h));
                      (C[o] = e),
                        (C[o + 1] = i),
                        (C[o + 2] = r),
                        (C[o + 3] = w ? g[o + 3] : n);
                    }
                  t.imageData = x;
                },
                getUniformLocations: function (t, e) {
                  return {
                    uMatrix: t.getUniformLocation(e, "uMatrix"),
                    uOpaque: t.getUniformLocation(e, "uOpaque"),
                    uHalfSize: t.getUniformLocation(e, "uHalfSize"),
                    uSize: t.getUniformLocation(e, "uSize"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform1fv(e.uMatrix, this.matrix);
                },
                toObject: function () {
                  return i(this.callSuper("toObject"), {
                    opaque: this.opaque,
                    matrix: this.matrix,
                  });
                },
              })),
                (e.Image.filters.Convolute.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.Grayscale = r(i.BaseFilter, {
                type: "Grayscale",
                fragmentSource: {
                  average:
                    "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat average = (color.r + color.b + color.g) / 3.0;\ngl_FragColor = vec4(average, average, average, color.a);\n}",
                  lightness:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\ngl_FragColor = vec4(average, average, average, col.a);\n}",
                  luminosity:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\ngl_FragColor = vec4(average, average, average, col.a);\n}",
                },
                mode: "average",
                mainParameter: "mode",
                applyTo2d: function (t) {
                  var e,
                    i,
                    r = t.imageData.data,
                    n = r.length,
                    o = this.mode;
                  for (e = 0; e < n; e += 4)
                    "average" === o
                      ? (i = (r[e] + r[e + 1] + r[e + 2]) / 3)
                      : "lightness" === o
                      ? (i =
                          (Math.min(r[e], r[e + 1], r[e + 2]) +
                            Math.max(r[e], r[e + 1], r[e + 2])) /
                          2)
                      : "luminosity" === o &&
                        (i = 0.21 * r[e] + 0.72 * r[e + 1] + 0.07 * r[e + 2]),
                      (r[e] = i),
                      (r[e + 1] = i),
                      (r[e + 2] = i);
                },
                retrieveShader: function (t) {
                  var e = this.type + "_" + this.mode;
                  if (!t.programCache.hasOwnProperty(e)) {
                    var i = this.fragmentSource[this.mode];
                    t.programCache[e] = this.createProgram(t.context, i);
                  }
                  return t.programCache[e];
                },
                getUniformLocations: function (t, e) {
                  return { uMode: t.getUniformLocation(e, "uMode") };
                },
                sendUniformData: function (t, e) {
                  t.uniform1i(e.uMode, 1);
                },
                isNeutralState: function () {
                  return !1;
                },
              })),
                (e.Image.filters.Grayscale.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.Invert = r(i.BaseFilter, {
                type: "Invert",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform int uInvert;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nif (uInvert == 1) {\ngl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n} else {\ngl_FragColor = color;\n}\n}",
                invert: !0,
                mainParameter: "invert",
                applyTo2d: function (t) {
                  var e,
                    i = t.imageData.data,
                    r = i.length;
                  for (e = 0; e < r; e += 4)
                    (i[e] = 255 - i[e]),
                      (i[e + 1] = 255 - i[e + 1]),
                      (i[e + 2] = 255 - i[e + 2]);
                },
                isNeutralState: function () {
                  return !this.invert;
                },
                getUniformLocations: function (t, e) {
                  return { uInvert: t.getUniformLocation(e, "uInvert") };
                },
                sendUniformData: function (t, e) {
                  t.uniform1i(e.uInvert, this.invert);
                },
              })),
                (e.Image.filters.Invert.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.object.extend,
                r = e.Image.filters,
                n = e.util.createClass;
              (r.Noise = n(r.BaseFilter, {
                type: "Noise",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uStepH;\nuniform float uNoise;\nuniform float uSeed;\nvarying vec2 vTexCoord;\nfloat rand(vec2 co, float seed, float vScale) {\nreturn fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n}\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\ngl_FragColor = color;\n}",
                mainParameter: "noise",
                noise: 0,
                applyTo2d: function (t) {
                  if (0 !== this.noise) {
                    var e,
                      i,
                      r = t.imageData.data,
                      n = r.length,
                      o = this.noise;
                    for (e = 0, n = r.length; e < n; e += 4)
                      (i = (0.5 - Math.random()) * o),
                        (r[e] += i),
                        (r[e + 1] += i),
                        (r[e + 2] += i);
                  }
                },
                getUniformLocations: function (t, e) {
                  return {
                    uNoise: t.getUniformLocation(e, "uNoise"),
                    uSeed: t.getUniformLocation(e, "uSeed"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uNoise, this.noise / 255),
                    t.uniform1f(e.uSeed, Math.random());
                },
                toObject: function () {
                  return i(this.callSuper("toObject"), { noise: this.noise });
                },
              })),
                (e.Image.filters.Noise.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.Pixelate = r(i.BaseFilter, {
                type: "Pixelate",
                blocksize: 4,
                mainParameter: "blocksize",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBlocksize;\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nfloat blockW = uBlocksize * uStepW;\nfloat blockH = uBlocksize * uStepW;\nint posX = int(vTexCoord.x / blockW);\nint posY = int(vTexCoord.y / blockH);\nfloat fposX = float(posX);\nfloat fposY = float(posY);\nvec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\nvec4 color = texture2D(uTexture, squareCoords);\ngl_FragColor = color;\n}",
                applyTo2d: function (t) {
                  var e,
                    i,
                    r,
                    n,
                    o,
                    s,
                    a,
                    l,
                    h,
                    c,
                    u,
                    f = t.imageData,
                    d = f.data,
                    p = f.height,
                    g = f.width;
                  for (i = 0; i < p; i += this.blocksize)
                    for (r = 0; r < g; r += this.blocksize)
                      for (
                        n = d[(e = 4 * i * g + 4 * r)],
                          o = d[e + 1],
                          s = d[e + 2],
                          a = d[e + 3],
                          c = Math.min(i + this.blocksize, p),
                          u = Math.min(r + this.blocksize, g),
                          l = i;
                        l < c;
                        l++
                      )
                        for (h = r; h < u; h++)
                          (d[(e = 4 * l * g + 4 * h)] = n),
                            (d[e + 1] = o),
                            (d[e + 2] = s),
                            (d[e + 3] = a);
                },
                isNeutralState: function () {
                  return 1 === this.blocksize;
                },
                getUniformLocations: function (t, e) {
                  return {
                    uBlocksize: t.getUniformLocation(e, "uBlocksize"),
                    uStepW: t.getUniformLocation(e, "uStepW"),
                    uStepH: t.getUniformLocation(e, "uStepH"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uBlocksize, this.blocksize);
                },
              })),
                (e.Image.filters.Pixelate.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.object.extend,
                r = e.Image.filters,
                n = e.util.createClass;
              (r.RemoveColor = n(r.BaseFilter, {
                type: "RemoveColor",
                color: "#FFFFFF",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\nif(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\ngl_FragColor.a = 0.0;\n}\n}",
                distance: 0.02,
                useAlpha: !1,
                applyTo2d: function (t) {
                  var i,
                    r,
                    n,
                    o,
                    s = t.imageData.data,
                    a = 255 * this.distance,
                    l = new e.Color(this.color).getSource(),
                    h = [l[0] - a, l[1] - a, l[2] - a],
                    c = [l[0] + a, l[1] + a, l[2] + a];
                  for (i = 0; i < s.length; i += 4)
                    (r = s[i]),
                      (n = s[i + 1]),
                      (o = s[i + 2]),
                      r > h[0] &&
                        n > h[1] &&
                        o > h[2] &&
                        r < c[0] &&
                        n < c[1] &&
                        o < c[2] &&
                        (s[i + 3] = 0);
                },
                getUniformLocations: function (t, e) {
                  return {
                    uLow: t.getUniformLocation(e, "uLow"),
                    uHigh: t.getUniformLocation(e, "uHigh"),
                  };
                },
                sendUniformData: function (t, i) {
                  var r = new e.Color(this.color).getSource(),
                    n = parseFloat(this.distance),
                    o = [
                      0 + r[0] / 255 - n,
                      0 + r[1] / 255 - n,
                      0 + r[2] / 255 - n,
                      1,
                    ],
                    s = [r[0] / 255 + n, r[1] / 255 + n, r[2] / 255 + n, 1];
                  t.uniform4fv(i.uLow, o), t.uniform4fv(i.uHigh, s);
                },
                toObject: function () {
                  return i(this.callSuper("toObject"), {
                    color: this.color,
                    distance: this.distance,
                  });
                },
              })),
                (e.Image.filters.RemoveColor.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass,
                n = {
                  Brownie: [
                    0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377, 0.86095,
                    0.15059, 0, -0.1449, 0.24113, -0.07441, 0.44972, 0,
                    -0.02965, 0, 0, 0, 1, 0,
                  ],
                  Vintage: [
                    0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578, 0.64411,
                    0.03259, 0, 0.02926, 0.0466, -0.08512, 0.52416, 0, 0.02023,
                    0, 0, 0, 1, 0,
                  ],
                  Kodachrome: [
                    1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404, 1.08352,
                    -0.05498, 0, 0.09698, -0.16786, -0.56034, 1.60148, 0,
                    0.13972, 0, 0, 0, 1, 0,
                  ],
                  Technicolor: [
                    1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878, 1.76589,
                    -0.10601, 0, -0.27589, -0.2311, -0.75018, 1.84759, 0,
                    0.12137, 0, 0, 0, 1, 0,
                  ],
                  Polaroid: [
                    1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0,
                    -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
                  ],
                  Sepia: [
                    0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272,
                    0.534, 0.131, 0, 0, 0, 0, 0, 1, 0,
                  ],
                  BlackWhite: [
                    1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5,
                    0, -1, 0, 0, 0, 1, 0,
                  ],
                };
              for (var o in n)
                (i[o] = r(i.ColorMatrix, {
                  type: o,
                  matrix: n[o],
                  mainParameter: !1,
                  colorsOnly: !0,
                })),
                  (e.Image.filters[o].fromObject =
                    e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric,
                i = e.Image.filters,
                r = e.util.createClass;
              (i.BlendColor = r(i.BaseFilter, {
                type: "BlendColor",
                color: "#F95C63",
                mode: "multiply",
                alpha: 1,
                fragmentSource: {
                  multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
                  screen:
                    "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
                  add: "gl_FragColor.rgb += uColor.rgb;\n",
                  diff: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
                  subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
                  lighten:
                    "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
                  darken:
                    "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
                  exclusion:
                    "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
                  overlay:
                    "if (uColor.r < 0.5) {\ngl_FragColor.r *= 2.0 * uColor.r;\n} else {\ngl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n}\nif (uColor.g < 0.5) {\ngl_FragColor.g *= 2.0 * uColor.g;\n} else {\ngl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n}\nif (uColor.b < 0.5) {\ngl_FragColor.b *= 2.0 * uColor.b;\n} else {\ngl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n}\n",
                  tint: "gl_FragColor.rgb *= (1.0 - uColor.a);\ngl_FragColor.rgb += uColor.rgb;\n",
                },
                buildSource: function (t) {
                  return (
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ngl_FragColor = color;\nif (color.a > 0.0) {\n" +
                    this.fragmentSource[t] +
                    "}\n}"
                  );
                },
                retrieveShader: function (t) {
                  var e,
                    i = this.type + "_" + this.mode;
                  return (
                    t.programCache.hasOwnProperty(i) ||
                      ((e = this.buildSource(this.mode)),
                      (t.programCache[i] = this.createProgram(t.context, e))),
                    t.programCache[i]
                  );
                },
                applyTo2d: function (t) {
                  var i,
                    r,
                    n,
                    o,
                    s,
                    a,
                    l,
                    h = t.imageData.data,
                    c = h.length,
                    u = 1 - this.alpha;
                  (i =
                    (l = new e.Color(this.color).getSource())[0] * this.alpha),
                    (r = l[1] * this.alpha),
                    (n = l[2] * this.alpha);
                  for (var f = 0; f < c; f += 4)
                    switch (
                      ((o = h[f]), (s = h[f + 1]), (a = h[f + 2]), this.mode)
                    ) {
                      case "multiply":
                        (h[f] = (o * i) / 255),
                          (h[f + 1] = (s * r) / 255),
                          (h[f + 2] = (a * n) / 255);
                        break;
                      case "screen":
                        (h[f] = 255 - ((255 - o) * (255 - i)) / 255),
                          (h[f + 1] = 255 - ((255 - s) * (255 - r)) / 255),
                          (h[f + 2] = 255 - ((255 - a) * (255 - n)) / 255);
                        break;
                      case "add":
                        (h[f] = o + i), (h[f + 1] = s + r), (h[f + 2] = a + n);
                        break;
                      case "diff":
                      case "difference":
                        (h[f] = Math.abs(o - i)),
                          (h[f + 1] = Math.abs(s - r)),
                          (h[f + 2] = Math.abs(a - n));
                        break;
                      case "subtract":
                        (h[f] = o - i), (h[f + 1] = s - r), (h[f + 2] = a - n);
                        break;
                      case "darken":
                        (h[f] = Math.min(o, i)),
                          (h[f + 1] = Math.min(s, r)),
                          (h[f + 2] = Math.min(a, n));
                        break;
                      case "lighten":
                        (h[f] = Math.max(o, i)),
                          (h[f + 1] = Math.max(s, r)),
                          (h[f + 2] = Math.max(a, n));
                        break;
                      case "overlay":
                        (h[f] =
                          i < 128
                            ? (2 * o * i) / 255
                            : 255 - (2 * (255 - o) * (255 - i)) / 255),
                          (h[f + 1] =
                            r < 128
                              ? (2 * s * r) / 255
                              : 255 - (2 * (255 - s) * (255 - r)) / 255),
                          (h[f + 2] =
                            n < 128
                              ? (2 * a * n) / 255
                              : 255 - (2 * (255 - a) * (255 - n)) / 255);
                        break;
                      case "exclusion":
                        (h[f] = i + o - (2 * i * o) / 255),
                          (h[f + 1] = r + s - (2 * r * s) / 255),
                          (h[f + 2] = n + a - (2 * n * a) / 255);
                        break;
                      case "tint":
                        (h[f] = i + o * u),
                          (h[f + 1] = r + s * u),
                          (h[f + 2] = n + a * u);
                    }
                },
                getUniformLocations: function (t, e) {
                  return { uColor: t.getUniformLocation(e, "uColor") };
                },
                sendUniformData: function (t, i) {
                  var r = new e.Color(this.color).getSource();
                  (r[0] = (this.alpha * r[0]) / 255),
                    (r[1] = (this.alpha * r[1]) / 255),
                    (r[2] = (this.alpha * r[2]) / 255),
                    (r[3] = this.alpha),
                    t.uniform4fv(i.uColor, r);
                },
                toObject: function () {
                  return {
                    type: this.type,
                    color: this.color,
                    mode: this.mode,
                    alpha: this.alpha,
                  };
                },
              })),
                (e.Image.filters.BlendColor.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric,
                i = e.Image.filters,
                r = e.util.createClass;
              (i.BlendImage = r(i.BaseFilter, {
                type: "BlendImage",
                image: null,
                mode: "multiply",
                alpha: 1,
                vertexSource:
                  "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nuniform mat3 uTransformMatrix;\nvoid main() {\nvTexCoord = aPosition;\nvTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
                fragmentSource: {
                  multiply:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.rgba *= color2.rgba;\ngl_FragColor = color;\n}",
                  mask: "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.a = color2.a;\ngl_FragColor = color;\n}",
                },
                retrieveShader: function (t) {
                  var e = this.type + "_" + this.mode,
                    i = this.fragmentSource[this.mode];
                  return (
                    t.programCache.hasOwnProperty(e) ||
                      (t.programCache[e] = this.createProgram(t.context, i)),
                    t.programCache[e]
                  );
                },
                applyToWebGL: function (t) {
                  var e = t.context,
                    i = this.createTexture(t.filterBackend, this.image);
                  this.bindAdditionalTexture(e, i, e.TEXTURE1),
                    this.callSuper("applyToWebGL", t),
                    this.unbindAdditionalTexture(e, e.TEXTURE1);
                },
                createTexture: function (t, e) {
                  return t.getCachedTexture(e.cacheKey, e._element);
                },
                calculateMatrix: function () {
                  var t = this.image,
                    e = t._element.width,
                    i = t._element.height;
                  return [
                    1 / t.scaleX,
                    0,
                    0,
                    0,
                    1 / t.scaleY,
                    0,
                    -t.left / e,
                    -t.top / i,
                    1,
                  ];
                },
                applyTo2d: function (t) {
                  var i,
                    r,
                    n,
                    o,
                    s,
                    a,
                    l,
                    h,
                    c,
                    u,
                    f,
                    d = t.imageData,
                    p = t.filterBackend.resources,
                    g = d.data,
                    v = g.length,
                    m = d.width,
                    y = d.height,
                    _ = this.image;
                  p.blendImage || (p.blendImage = e.util.createCanvasElement()),
                    (u = (c = p.blendImage).getContext("2d")),
                    c.width !== m || c.height !== y
                      ? ((c.width = m), (c.height = y))
                      : u.clearRect(0, 0, m, y),
                    u.setTransform(_.scaleX, 0, 0, _.scaleY, _.left, _.top),
                    u.drawImage(_._element, 0, 0, m, y),
                    (f = u.getImageData(0, 0, m, y).data);
                  for (var b = 0; b < v; b += 4)
                    switch (
                      ((s = g[b]),
                      (a = g[b + 1]),
                      (l = g[b + 2]),
                      (h = g[b + 3]),
                      (i = f[b]),
                      (r = f[b + 1]),
                      (n = f[b + 2]),
                      (o = f[b + 3]),
                      this.mode)
                    ) {
                      case "multiply":
                        (g[b] = (s * i) / 255),
                          (g[b + 1] = (a * r) / 255),
                          (g[b + 2] = (l * n) / 255),
                          (g[b + 3] = (h * o) / 255);
                        break;
                      case "mask":
                        g[b + 3] = o;
                    }
                },
                getUniformLocations: function (t, e) {
                  return {
                    uTransformMatrix: t.getUniformLocation(
                      e,
                      "uTransformMatrix"
                    ),
                    uImage: t.getUniformLocation(e, "uImage"),
                  };
                },
                sendUniformData: function (t, e) {
                  var i = this.calculateMatrix();
                  t.uniform1i(e.uImage, 1),
                    t.uniformMatrix3fv(e.uTransformMatrix, !1, i);
                },
                toObject: function () {
                  return {
                    type: this.type,
                    image: this.image && this.image.toObject(),
                    mode: this.mode,
                    alpha: this.alpha,
                  };
                },
              })),
                (e.Image.filters.BlendImage.fromObject = function (t, i) {
                  e.Image.fromObject(t.image, function (r) {
                    var n = e.util.object.clone(t);
                    (n.image = r), i(new e.Image.filters.BlendImage(n));
                  });
                });
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = Math.pow,
                r = Math.floor,
                n = Math.sqrt,
                o = Math.abs,
                s = Math.round,
                a = Math.sin,
                l = Math.ceil,
                h = e.Image.filters,
                c = e.util.createClass;
              (h.Resize = c(h.BaseFilter, {
                type: "Resize",
                resizeType: "hermite",
                scaleX: 1,
                scaleY: 1,
                lanczosLobes: 3,
                getUniformLocations: function (t, e) {
                  return {
                    uDelta: t.getUniformLocation(e, "uDelta"),
                    uTaps: t.getUniformLocation(e, "uTaps"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform2fv(
                    e.uDelta,
                    this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]
                  ),
                    t.uniform1fv(e.uTaps, this.taps);
                },
                retrieveShader: function (t) {
                  var e = this.getFilterWindow(),
                    i = this.type + "_" + e;
                  if (!t.programCache.hasOwnProperty(i)) {
                    var r = this.generateShader(e);
                    t.programCache[i] = this.createProgram(t.context, r);
                  }
                  return t.programCache[i];
                },
                getFilterWindow: function () {
                  var t = this.tempScale;
                  return Math.ceil(this.lanczosLobes / t);
                },
                getTaps: function () {
                  for (
                    var t = this.lanczosCreate(this.lanczosLobes),
                      e = this.tempScale,
                      i = this.getFilterWindow(),
                      r = new Array(i),
                      n = 1;
                    n <= i;
                    n++
                  )
                    r[n - 1] = t(n * e);
                  return r;
                },
                generateShader: function (t) {
                  for (
                    var e = new Array(t), i = this.fragmentSourceTOP, r = 1;
                    r <= t;
                    r++
                  )
                    e[r - 1] = r + ".0 * uDelta";
                  return (
                    (i += "uniform float uTaps[" + t + "];\n"),
                    (i += "void main() {\n"),
                    (i += "  vec4 color = texture2D(uTexture, vTexCoord);\n"),
                    (i += "  float sum = 1.0;\n"),
                    e.forEach(function (t, e) {
                      (i +=
                        "  color += texture2D(uTexture, vTexCoord + " +
                        t +
                        ") * uTaps[" +
                        e +
                        "];\n"),
                        (i +=
                          "  color += texture2D(uTexture, vTexCoord - " +
                          t +
                          ") * uTaps[" +
                          e +
                          "];\n"),
                        (i += "  sum += 2.0 * uTaps[" + e + "];\n");
                    }),
                    (i += "  gl_FragColor = color / sum;\n"),
                    (i += "}")
                  );
                },
                fragmentSourceTOP:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\n",
                applyTo: function (t) {
                  t.webgl
                    ? (t.passes++,
                      (this.width = t.sourceWidth),
                      (this.horizontal = !0),
                      (this.dW = Math.round(this.width * this.scaleX)),
                      (this.dH = t.sourceHeight),
                      (this.tempScale = this.dW / this.width),
                      (this.taps = this.getTaps()),
                      (t.destinationWidth = this.dW),
                      this._setupFrameBuffer(t),
                      this.applyToWebGL(t),
                      this._swapTextures(t),
                      (t.sourceWidth = t.destinationWidth),
                      (this.height = t.sourceHeight),
                      (this.horizontal = !1),
                      (this.dH = Math.round(this.height * this.scaleY)),
                      (this.tempScale = this.dH / this.height),
                      (this.taps = this.getTaps()),
                      (t.destinationHeight = this.dH),
                      this._setupFrameBuffer(t),
                      this.applyToWebGL(t),
                      this._swapTextures(t),
                      (t.sourceHeight = t.destinationHeight))
                    : this.applyTo2d(t);
                },
                isNeutralState: function () {
                  return 1 === this.scaleX && 1 === this.scaleY;
                },
                lanczosCreate: function (t) {
                  return function (e) {
                    if (e >= t || e <= -t) return 0;
                    if (e < 1.1920929e-7 && e > -1.1920929e-7) return 1;
                    var i = (e *= Math.PI) / t;
                    return ((a(e) / e) * a(i)) / i;
                  };
                },
                applyTo2d: function (t) {
                  var e = t.imageData,
                    i = this.scaleX,
                    r = this.scaleY;
                  (this.rcpScaleX = 1 / i), (this.rcpScaleY = 1 / r);
                  var n,
                    o = e.width,
                    a = e.height,
                    l = s(o * i),
                    h = s(a * r);
                  "sliceHack" === this.resizeType
                    ? (n = this.sliceByTwo(t, o, a, l, h))
                    : "hermite" === this.resizeType
                    ? (n = this.hermiteFastResize(t, o, a, l, h))
                    : "bilinear" === this.resizeType
                    ? (n = this.bilinearFiltering(t, o, a, l, h))
                    : "lanczos" === this.resizeType &&
                      (n = this.lanczosResize(t, o, a, l, h)),
                    (t.imageData = n);
                },
                sliceByTwo: function (t, i, n, o, s) {
                  var a,
                    l,
                    h = t.imageData,
                    c = 0.5,
                    u = !1,
                    f = !1,
                    d = i * c,
                    p = n * c,
                    g = e.filterBackend.resources,
                    v = 0,
                    m = 0,
                    y = i,
                    _ = 0;
                  for (
                    g.sliceByTwo ||
                      (g.sliceByTwo = document.createElement("canvas")),
                      ((a = g.sliceByTwo).width < 1.5 * i || a.height < n) &&
                        ((a.width = 1.5 * i), (a.height = n)),
                      (l = a.getContext("2d")).clearRect(0, 0, 1.5 * i, n),
                      l.putImageData(h, 0, 0),
                      o = r(o),
                      s = r(s);
                    !u || !f;

                  )
                    (i = d),
                      (n = p),
                      o < r(d * c) ? (d = r(d * c)) : ((d = o), (u = !0)),
                      s < r(p * c) ? (p = r(p * c)) : ((p = s), (f = !0)),
                      l.drawImage(a, v, m, i, n, y, _, d, p),
                      (v = y),
                      (m = _),
                      (_ += p);
                  return l.getImageData(v, m, o, s);
                },
                lanczosResize: function (t, e, s, a, h) {
                  var c = t.imageData.data,
                    u = t.ctx.createImageData(a, h),
                    f = u.data,
                    d = this.lanczosCreate(this.lanczosLobes),
                    p = this.rcpScaleX,
                    g = this.rcpScaleY,
                    v = 2 / this.rcpScaleX,
                    m = 2 / this.rcpScaleY,
                    y = l((p * this.lanczosLobes) / 2),
                    _ = l((g * this.lanczosLobes) / 2),
                    b = {},
                    x = {},
                    C = {};
                  return (function t(l) {
                    var w, S, T, O, k, E, A, F, D, P, M;
                    for (x.x = (l + 0.5) * p, C.x = r(x.x), w = 0; w < h; w++) {
                      for (
                        x.y = (w + 0.5) * g,
                          C.y = r(x.y),
                          k = 0,
                          E = 0,
                          A = 0,
                          F = 0,
                          D = 0,
                          S = C.x - y;
                        S <= C.x + y;
                        S++
                      )
                        if (!(S < 0 || S >= e)) {
                          (P = r(1e3 * o(S - x.x))), b[P] || (b[P] = {});
                          for (var j = C.y - _; j <= C.y + _; j++)
                            j < 0 ||
                              j >= s ||
                              ((M = r(1e3 * o(j - x.y))),
                              b[P][M] ||
                                (b[P][M] = d(
                                  n(i(P * v, 2) + i(M * m, 2)) / 1e3
                                )),
                              (T = b[P][M]) > 0 &&
                                ((k += T),
                                (E += T * c[(O = 4 * (j * e + S))]),
                                (A += T * c[O + 1]),
                                (F += T * c[O + 2]),
                                (D += T * c[O + 3])));
                        }
                      (f[(O = 4 * (w * a + l))] = E / k),
                        (f[O + 1] = A / k),
                        (f[O + 2] = F / k),
                        (f[O + 3] = D / k);
                    }
                    return ++l < a ? t(l) : u;
                  })(0);
                },
                bilinearFiltering: function (t, e, i, n, o) {
                  var s,
                    a,
                    l,
                    h,
                    c,
                    u,
                    f,
                    d,
                    p,
                    g = 0,
                    v = this.rcpScaleX,
                    m = this.rcpScaleY,
                    y = 4 * (e - 1),
                    _ = t.imageData.data,
                    b = t.ctx.createImageData(n, o),
                    x = b.data;
                  for (l = 0; l < o; l++)
                    for (h = 0; h < n; h++)
                      for (
                        c = v * h - (s = r(v * h)),
                          u = m * l - (a = r(m * l)),
                          p = 4 * (a * e + s),
                          f = 0;
                        f < 4;
                        f++
                      )
                        (d =
                          _[p + f] * (1 - c) * (1 - u) +
                          _[p + 4 + f] * c * (1 - u) +
                          _[p + y + f] * u * (1 - c) +
                          _[p + y + 4 + f] * c * u),
                          (x[g++] = d);
                  return b;
                },
                hermiteFastResize: function (t, e, i, s, a) {
                  for (
                    var h = this.rcpScaleX,
                      c = this.rcpScaleY,
                      u = l(h / 2),
                      f = l(c / 2),
                      d = t.imageData.data,
                      p = t.ctx.createImageData(s, a),
                      g = p.data,
                      v = 0;
                    v < a;
                    v++
                  )
                    for (var m = 0; m < s; m++) {
                      for (
                        var y = 4 * (m + v * s),
                          _ = 0,
                          b = 0,
                          x = 0,
                          C = 0,
                          w = 0,
                          S = 0,
                          T = 0,
                          O = (v + 0.5) * c,
                          k = r(v * c);
                        k < (v + 1) * c;
                        k++
                      )
                        for (
                          var E = o(O - (k + 0.5)) / f,
                            A = (m + 0.5) * h,
                            F = E * E,
                            D = r(m * h);
                          D < (m + 1) * h;
                          D++
                        ) {
                          var P = o(A - (D + 0.5)) / u,
                            M = n(F + P * P);
                          (M > 1 && M < -1) ||
                            ((_ = 2 * M * M * M - 3 * M * M + 1) > 0 &&
                              ((T += _ * d[(P = 4 * (D + k * e)) + 3]),
                              (x += _),
                              d[P + 3] < 255 && (_ = (_ * d[P + 3]) / 250),
                              (C += _ * d[P]),
                              (w += _ * d[P + 1]),
                              (S += _ * d[P + 2]),
                              (b += _)));
                        }
                      (g[y] = C / b),
                        (g[y + 1] = w / b),
                        (g[y + 2] = S / b),
                        (g[y + 3] = T / x);
                    }
                  return p;
                },
                toObject: function () {
                  return {
                    type: this.type,
                    scaleX: this.scaleX,
                    scaleY: this.scaleY,
                    resizeType: this.resizeType,
                    lanczosLobes: this.lanczosLobes,
                  };
                },
              })),
                (e.Image.filters.Resize.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.Contrast = r(i.BaseFilter, {
                type: "Contrast",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uContrast;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\ncolor.rgb = contrastF * (color.rgb - 0.5) + 0.5;\ngl_FragColor = color;\n}",
                contrast: 0,
                mainParameter: "contrast",
                applyTo2d: function (t) {
                  if (0 !== this.contrast) {
                    var e,
                      i = t.imageData.data,
                      r = i.length,
                      n = Math.floor(255 * this.contrast),
                      o = (259 * (n + 255)) / (255 * (259 - n));
                    for (e = 0; e < r; e += 4)
                      (i[e] = o * (i[e] - 128) + 128),
                        (i[e + 1] = o * (i[e + 1] - 128) + 128),
                        (i[e + 2] = o * (i[e + 2] - 128) + 128);
                  }
                },
                getUniformLocations: function (t, e) {
                  return { uContrast: t.getUniformLocation(e, "uContrast") };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uContrast, this.contrast);
                },
              })),
                (e.Image.filters.Contrast.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.Saturation = r(i.BaseFilter, {
                type: "Saturation",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uSaturation;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat rgMax = max(color.r, color.g);\nfloat rgbMax = max(rgMax, color.b);\ncolor.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\ncolor.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\ncolor.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\ngl_FragColor = color;\n}",
                saturation: 0,
                mainParameter: "saturation",
                applyTo2d: function (t) {
                  if (0 !== this.saturation) {
                    var e,
                      i,
                      r = t.imageData.data,
                      n = r.length,
                      o = -this.saturation;
                    for (e = 0; e < n; e += 4)
                      (i = Math.max(r[e], r[e + 1], r[e + 2])),
                        (r[e] += i !== r[e] ? (i - r[e]) * o : 0),
                        (r[e + 1] += i !== r[e + 1] ? (i - r[e + 1]) * o : 0),
                        (r[e + 2] += i !== r[e + 2] ? (i - r[e + 2]) * o : 0);
                  }
                },
                getUniformLocations: function (t, e) {
                  return {
                    uSaturation: t.getUniformLocation(e, "uSaturation"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uSaturation, -this.saturation);
                },
              })),
                (e.Image.filters.Saturation.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.Blur = r(i.BaseFilter, {
                type: "Blur",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\nconst float nSamples = 15.0;\nvec3 v3offset = vec3(12.9898, 78.233, 151.7182);\nfloat random(vec3 scale) {\nreturn fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n}\nvoid main() {\nvec4 color = vec4(0.0);\nfloat total = 0.0;\nfloat offset = random(v3offset);\nfor (float t = -nSamples; t <= nSamples; t++) {\nfloat percent = (t + offset - 0.5) / nSamples;\nfloat weight = 1.0 - abs(percent);\ncolor += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\ntotal += weight;\n}\ngl_FragColor = color / total;\n}",
                blur: 0,
                mainParameter: "blur",
                applyTo: function (t) {
                  t.webgl
                    ? ((this.aspectRatio = t.sourceWidth / t.sourceHeight),
                      t.passes++,
                      this._setupFrameBuffer(t),
                      (this.horizontal = !0),
                      this.applyToWebGL(t),
                      this._swapTextures(t),
                      this._setupFrameBuffer(t),
                      (this.horizontal = !1),
                      this.applyToWebGL(t),
                      this._swapTextures(t))
                    : this.applyTo2d(t);
                },
                applyTo2d: function (t) {
                  t.imageData = this.simpleBlur(t);
                },
                simpleBlur: function (t) {
                  var i,
                    r,
                    n = t.filterBackend.resources,
                    o = t.imageData.width,
                    s = t.imageData.height;
                  n.blurLayer1 ||
                    ((n.blurLayer1 = e.util.createCanvasElement()),
                    (n.blurLayer2 = e.util.createCanvasElement())),
                    (i = n.blurLayer1),
                    (r = n.blurLayer2),
                    (i.width === o && i.height === s) ||
                      ((r.width = i.width = o), (r.height = i.height = s));
                  var a,
                    l,
                    h,
                    c,
                    u = i.getContext("2d"),
                    f = r.getContext("2d"),
                    d = 15,
                    p = 0.06 * this.blur * 0.5;
                  for (
                    u.putImageData(t.imageData, 0, 0),
                      f.clearRect(0, 0, o, s),
                      c = -15;
                    c <= d;
                    c++
                  )
                    (h = p * (l = c / d) * o + (a = (Math.random() - 0.5) / 4)),
                      (f.globalAlpha = 1 - Math.abs(l)),
                      f.drawImage(i, h, a),
                      u.drawImage(r, 0, 0),
                      (f.globalAlpha = 1),
                      f.clearRect(0, 0, r.width, r.height);
                  for (c = -15; c <= d; c++)
                    (h = p * (l = c / d) * s + (a = (Math.random() - 0.5) / 4)),
                      (f.globalAlpha = 1 - Math.abs(l)),
                      f.drawImage(i, a, h),
                      u.drawImage(r, 0, 0),
                      (f.globalAlpha = 1),
                      f.clearRect(0, 0, r.width, r.height);
                  t.ctx.drawImage(i, 0, 0);
                  var g = t.ctx.getImageData(0, 0, i.width, i.height);
                  return (
                    (u.globalAlpha = 1), u.clearRect(0, 0, i.width, i.height), g
                  );
                },
                getUniformLocations: function (t, e) {
                  return { delta: t.getUniformLocation(e, "uDelta") };
                },
                sendUniformData: function (t, e) {
                  var i = this.chooseRightDelta();
                  t.uniform2fv(e.delta, i);
                },
                chooseRightDelta: function () {
                  var t,
                    e = 1,
                    i = [0, 0];
                  return (
                    this.horizontal
                      ? this.aspectRatio > 1 && (e = 1 / this.aspectRatio)
                      : this.aspectRatio < 1 && (e = this.aspectRatio),
                    (t = e * this.blur * 0.12),
                    this.horizontal ? (i[0] = t) : (i[1] = t),
                    i
                  );
                },
              })),
                (i.Blur.fromObject = e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.Gamma = r(i.BaseFilter, {
                type: "Gamma",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform vec3 uGamma;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec3 correction = (1.0 / uGamma);\ncolor.r = pow(color.r, correction.r);\ncolor.g = pow(color.g, correction.g);\ncolor.b = pow(color.b, correction.b);\ngl_FragColor = color;\ngl_FragColor.rgb *= color.a;\n}",
                gamma: [1, 1, 1],
                mainParameter: "gamma",
                initialize: function (t) {
                  (this.gamma = [1, 1, 1]),
                    i.BaseFilter.prototype.initialize.call(this, t);
                },
                applyTo2d: function (t) {
                  var e,
                    i = t.imageData.data,
                    r = this.gamma,
                    n = i.length,
                    o = 1 / r[0],
                    s = 1 / r[1],
                    a = 1 / r[2];
                  for (
                    this.rVals ||
                      ((this.rVals = new Uint8Array(256)),
                      (this.gVals = new Uint8Array(256)),
                      (this.bVals = new Uint8Array(256))),
                      e = 0,
                      n = 256;
                    e < n;
                    e++
                  )
                    (this.rVals[e] = 255 * Math.pow(e / 255, o)),
                      (this.gVals[e] = 255 * Math.pow(e / 255, s)),
                      (this.bVals[e] = 255 * Math.pow(e / 255, a));
                  for (e = 0, n = i.length; e < n; e += 4)
                    (i[e] = this.rVals[i[e]]),
                      (i[e + 1] = this.gVals[i[e + 1]]),
                      (i[e + 2] = this.bVals[i[e + 2]]);
                },
                getUniformLocations: function (t, e) {
                  return { uGamma: t.getUniformLocation(e, "uGamma") };
                },
                sendUniformData: function (t, e) {
                  t.uniform3fv(e.uGamma, this.gamma);
                },
              })),
                (e.Image.filters.Gamma.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.Composed = r(i.BaseFilter, {
                type: "Composed",
                subFilters: [],
                initialize: function (t) {
                  this.callSuper("initialize", t),
                    (this.subFilters = this.subFilters.slice(0));
                },
                applyTo: function (t) {
                  (t.passes += this.subFilters.length - 1),
                    this.subFilters.forEach(function (e) {
                      e.applyTo(t);
                    });
                },
                toObject: function () {
                  return e.util.object.extend(this.callSuper("toObject"), {
                    subFilters: this.subFilters.map(function (t) {
                      return t.toObject();
                    }),
                  });
                },
                isNeutralState: function () {
                  return !this.subFilters.some(function (t) {
                    return !t.isNeutralState();
                  });
                },
              })),
                (e.Image.filters.Composed.fromObject = function (t, i) {
                  var r = (t.subFilters || []).map(function (t) {
                      return new e.Image.filters[t.type](t);
                    }),
                    n = new e.Image.filters.Composed({ subFilters: r });
                  return i && i(n), n;
                });
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.Image.filters,
                r = e.util.createClass;
              (i.HueRotation = r(i.ColorMatrix, {
                type: "HueRotation",
                rotation: 0,
                mainParameter: "rotation",
                calculateMatrix: function () {
                  var t = this.rotation * Math.PI,
                    i = e.util.cos(t),
                    r = e.util.sin(t),
                    n = 1 / 3,
                    o = Math.sqrt(n) * r,
                    s = 1 - i;
                  (this.matrix = [
                    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
                  ]),
                    (this.matrix[0] = i + s / 3),
                    (this.matrix[1] = n * s - o),
                    (this.matrix[2] = n * s + o),
                    (this.matrix[5] = n * s + o),
                    (this.matrix[6] = i + n * s),
                    (this.matrix[7] = n * s - o),
                    (this.matrix[10] = n * s - o),
                    (this.matrix[11] = n * s + o),
                    (this.matrix[12] = i + n * s);
                },
                isNeutralState: function (t) {
                  return (
                    this.calculateMatrix(),
                    i.BaseFilter.prototype.isNeutralState.call(this, t)
                  );
                },
                applyTo: function (t) {
                  this.calculateMatrix(),
                    i.BaseFilter.prototype.applyTo.call(this, t);
                },
              })),
                (e.Image.filters.HueRotation.fromObject =
                  e.Image.filters.BaseFilter.fromObject);
            })(void 0 !== i ? i : this),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {}),
                i = e.util.object.clone;
              if (e.Text) e.warn("fabric.Text is already defined");
              else {
                var r =
                  "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles path".split(
                    " "
                  );
                (e.Text = e.util.createClass(e.Object, {
                  _dimensionAffectingProps: [
                    "fontSize",
                    "fontWeight",
                    "fontFamily",
                    "fontStyle",
                    "lineHeight",
                    "text",
                    "charSpacing",
                    "textAlign",
                    "styles",
                    "path",
                  ],
                  _reNewline: /\r?\n/,
                  _reSpacesAndTabs: /[ \t\r]/g,
                  _reSpaceAndTab: /[ \t\r]/,
                  _reWords: /\S+/g,
                  type: "text",
                  fontSize: 40,
                  fontWeight: "normal",
                  fontFamily: "Times New Roman",
                  underline: !1,
                  overline: !1,
                  linethrough: !1,
                  textAlign: "left",
                  fontStyle: "normal",
                  lineHeight: 1.16,
                  superscript: { size: 0.6, baseline: -0.35 },
                  subscript: { size: 0.6, baseline: 0.11 },
                  textBackgroundColor: "",
                  stateProperties: e.Object.prototype.stateProperties.concat(r),
                  cacheProperties: e.Object.prototype.cacheProperties.concat(r),
                  stroke: null,
                  shadow: null,
                  path: null,
                  _fontSizeFraction: 0.222,
                  offsets: {
                    underline: 0.1,
                    linethrough: -0.315,
                    overline: -0.88,
                  },
                  _fontSizeMult: 1.13,
                  charSpacing: 0,
                  styles: null,
                  _measuringContext: null,
                  deltaY: 0,
                  direction: "ltr",
                  _styleProperties: [
                    "stroke",
                    "strokeWidth",
                    "fill",
                    "fontFamily",
                    "fontSize",
                    "fontWeight",
                    "fontStyle",
                    "underline",
                    "overline",
                    "linethrough",
                    "deltaY",
                    "textBackgroundColor",
                  ],
                  __charBounds: [],
                  CACHE_FONT_SIZE: 400,
                  MIN_TEXT_WIDTH: 2,
                  initialize: function (t, e) {
                    (this.styles = (e && e.styles) || {}),
                      (this.text = t),
                      (this.__skipDimension = !0),
                      this.callSuper("initialize", e),
                      this.path && this.setPathInfo(),
                      (this.__skipDimension = !1),
                      this.initDimensions(),
                      this.setCoords(),
                      this.setupState({
                        propertySet: "_dimensionAffectingProps",
                      });
                  },
                  setPathInfo: function () {
                    var t = this.path;
                    t && (t.segmentsInfo = e.util.getPathSegmentsInfo(t.path));
                  },
                  getMeasuringContext: function () {
                    return (
                      e._measuringContext ||
                        (e._measuringContext =
                          (this.canvas && this.canvas.contextCache) ||
                          e.util.createCanvasElement().getContext("2d")),
                      e._measuringContext
                    );
                  },
                  _splitText: function () {
                    var t = this._splitTextIntoLines(this.text);
                    return (
                      (this.textLines = t.lines),
                      (this._textLines = t.graphemeLines),
                      (this._unwrappedTextLines = t._unwrappedLines),
                      (this._text = t.graphemeText),
                      t
                    );
                  },
                  initDimensions: function () {
                    this.__skipDimension ||
                      (this._splitText(),
                      this._clearCache(),
                      this.path
                        ? ((this.width = this.path.width),
                          (this.height = this.path.height))
                        : ((this.width =
                            this.calcTextWidth() ||
                            this.cursorWidth ||
                            this.MIN_TEXT_WIDTH),
                          (this.height = this.calcTextHeight())),
                      -1 !== this.textAlign.indexOf("justify") &&
                        this.enlargeSpaces(),
                      this.saveState({
                        propertySet: "_dimensionAffectingProps",
                      }));
                  },
                  enlargeSpaces: function () {
                    for (
                      var t,
                        e,
                        i,
                        r,
                        n,
                        o,
                        s,
                        a = 0,
                        l = this._textLines.length;
                      a < l;
                      a++
                    )
                      if (
                        ("justify" === this.textAlign ||
                          (a !== l - 1 && !this.isEndOfWrapping(a))) &&
                        ((r = 0),
                        (n = this._textLines[a]),
                        (e = this.getLineWidth(a)) < this.width &&
                          (s = this.textLines[a].match(this._reSpacesAndTabs)))
                      ) {
                        (i = s.length), (t = (this.width - e) / i);
                        for (var h = 0, c = n.length; h <= c; h++)
                          (o = this.__charBounds[a][h]),
                            this._reSpaceAndTab.test(n[h])
                              ? ((o.width += t),
                                (o.kernedWidth += t),
                                (o.left += r),
                                (r += t))
                              : (o.left += r);
                      }
                  },
                  isEndOfWrapping: function (t) {
                    return t === this._textLines.length - 1;
                  },
                  missingNewlineOffset: function () {
                    return 1;
                  },
                  toString: function () {
                    return (
                      "#<fabric.Text (" +
                      this.complexity() +
                      '): { "text": "' +
                      this.text +
                      '", "fontFamily": "' +
                      this.fontFamily +
                      '" }>'
                    );
                  },
                  _getCacheCanvasDimensions: function () {
                    var t = this.callSuper("_getCacheCanvasDimensions"),
                      e = this.fontSize;
                    return (
                      (t.width += e * t.zoomX), (t.height += e * t.zoomY), t
                    );
                  },
                  _render: function (t) {
                    this._setTextStyles(t),
                      this._renderTextLinesBackground(t),
                      this._renderTextDecoration(t, "underline"),
                      this._renderText(t),
                      this._renderTextDecoration(t, "overline"),
                      this._renderTextDecoration(t, "linethrough");
                  },
                  _renderText: function (t) {
                    "stroke" === this.paintFirst
                      ? (this._renderTextStroke(t), this._renderTextFill(t))
                      : (this._renderTextFill(t), this._renderTextStroke(t));
                  },
                  _setTextStyles: function (t, e, i) {
                    (t.textBaseline = "alphabetic"),
                      (t.font = this._getFontDeclaration(e, i));
                  },
                  calcTextWidth: function () {
                    for (
                      var t = this.getLineWidth(0),
                        e = 1,
                        i = this._textLines.length;
                      e < i;
                      e++
                    ) {
                      var r = this.getLineWidth(e);
                      r > t && (t = r);
                    }
                    return t;
                  },
                  _renderTextLine: function (t, e, i, r, n, o) {
                    this._renderChars(t, e, i, r, n, o);
                  },
                  _renderTextLinesBackground: function (t) {
                    if (
                      this.textBackgroundColor ||
                      this.styleHas("textBackgroundColor")
                    ) {
                      for (
                        var e,
                          i,
                          r,
                          n,
                          o,
                          s,
                          a,
                          l = t.fillStyle,
                          h = this._getLeftOffset(),
                          c = this._getTopOffset(),
                          u = 0,
                          f = 0,
                          d = this.path,
                          p = 0,
                          g = this._textLines.length;
                        p < g;
                        p++
                      )
                        if (
                          ((e = this.getHeightOfLine(p)),
                          this.textBackgroundColor ||
                            this.styleHas("textBackgroundColor", p))
                        ) {
                          (r = this._textLines[p]),
                            (i = this._getLineLeftOffset(p)),
                            (f = 0),
                            (u = 0),
                            (n = this.getValueOfPropertyAt(
                              p,
                              0,
                              "textBackgroundColor"
                            ));
                          for (var v = 0, m = r.length; v < m; v++)
                            (o = this.__charBounds[p][v]),
                              (s = this.getValueOfPropertyAt(
                                p,
                                v,
                                "textBackgroundColor"
                              )),
                              d
                                ? (t.save(),
                                  t.translate(o.renderLeft, o.renderTop),
                                  t.rotate(o.angle),
                                  (t.fillStyle = s),
                                  s &&
                                    t.fillRect(
                                      -o.width / 2,
                                      (-e / this.lineHeight) *
                                        (1 - this._fontSizeFraction),
                                      o.width,
                                      e / this.lineHeight
                                    ),
                                  t.restore())
                                : s !== n
                                ? ((a = h + i + u),
                                  "rtl" === this.direction &&
                                    (a = this.width - a - f),
                                  (t.fillStyle = n),
                                  n && t.fillRect(a, c, f, e / this.lineHeight),
                                  (u = o.left),
                                  (f = o.width),
                                  (n = s))
                                : (f += o.kernedWidth);
                          s &&
                            !d &&
                            ((a = h + i + u),
                            "rtl" === this.direction &&
                              (a = this.width - a - f),
                            (t.fillStyle = s),
                            t.fillRect(a, c, f, e / this.lineHeight)),
                            (c += e);
                        } else c += e;
                      (t.fillStyle = l), this._removeShadow(t);
                    }
                  },
                  getFontCache: function (t) {
                    var i = t.fontFamily.toLowerCase();
                    e.charWidthsCache[i] || (e.charWidthsCache[i] = {});
                    var r = e.charWidthsCache[i],
                      n =
                        t.fontStyle.toLowerCase() +
                        "_" +
                        (t.fontWeight + "").toLowerCase();
                    return r[n] || (r[n] = {}), r[n];
                  },
                  _measureChar: function (t, e, i, r) {
                    var n,
                      o,
                      s,
                      a,
                      l = this.getFontCache(e),
                      h = i + t,
                      c =
                        this._getFontDeclaration(e) ===
                        this._getFontDeclaration(r),
                      u = e.fontSize / this.CACHE_FONT_SIZE;
                    if (
                      (i && void 0 !== l[i] && (s = l[i]),
                      void 0 !== l[t] && (a = n = l[t]),
                      c && void 0 !== l[h] && (a = (o = l[h]) - s),
                      void 0 === n || void 0 === s || void 0 === o)
                    ) {
                      var f = this.getMeasuringContext();
                      this._setTextStyles(f, e, !0);
                    }
                    return (
                      void 0 === n &&
                        ((a = n = f.measureText(t).width), (l[t] = n)),
                      void 0 === s &&
                        c &&
                        i &&
                        ((s = f.measureText(i).width), (l[i] = s)),
                      c &&
                        void 0 === o &&
                        ((o = f.measureText(h).width), (l[h] = o), (a = o - s)),
                      { width: n * u, kernedWidth: a * u }
                    );
                  },
                  getHeightOfChar: function (t, e) {
                    return this.getValueOfPropertyAt(t, e, "fontSize");
                  },
                  measureLine: function (t) {
                    var e = this._measureLine(t);
                    return (
                      0 !== this.charSpacing &&
                        (e.width -= this._getWidthOfCharSpacing()),
                      e.width < 0 && (e.width = 0),
                      e
                    );
                  },
                  _measureLine: function (t) {
                    var i,
                      r,
                      n,
                      o,
                      s,
                      a,
                      l = 0,
                      h = this._textLines[t],
                      c = new Array(h.length),
                      u = 0,
                      f = this.path;
                    for (
                      this.__charBounds[t] = c,
                        f &&
                          ((s = e.util.getPointOnPath(
                            f.path,
                            0,
                            f.segmentsInfo
                          )),
                          (a =
                            f.segmentsInfo[f.segmentsInfo.length - 1].length),
                          (s.x += f.pathOffset.x),
                          (s.y += f.pathOffset.y)),
                        i = 0;
                      i < h.length;
                      i++
                    )
                      (r = h[i]),
                        (o = this._getGraphemeBox(r, t, i, n)),
                        f &&
                          (u > a && (u %= a), this._setGraphemeOnPath(u, o, s)),
                        (c[i] = o),
                        (l += o.kernedWidth),
                        (u += o.kernedWidth),
                        (n = r);
                    return (
                      (c[i] = {
                        left: o ? o.left + o.width : 0,
                        width: 0,
                        kernedWidth: 0,
                        height: this.fontSize,
                      }),
                      { width: l, numOfSpaces: 0 }
                    );
                  },
                  _setGraphemeOnPath: function (t, i, r) {
                    var n = t + i.kernedWidth / 2,
                      o = this.path,
                      s = e.util.getPointOnPath(o.path, n, o.segmentsInfo);
                    (i.renderLeft = s.x - r.x),
                      (i.renderTop = s.y - r.y),
                      (i.angle = s.angle);
                  },
                  _getGraphemeBox: function (t, e, i, r, n) {
                    var o,
                      s = this.getCompleteStyleDeclaration(e, i),
                      a = r ? this.getCompleteStyleDeclaration(e, i - 1) : {},
                      l = this._measureChar(t, s, r, a),
                      h = l.kernedWidth,
                      c = l.width;
                    0 !== this.charSpacing &&
                      ((c += o = this._getWidthOfCharSpacing()), (h += o));
                    var u = {
                      width: c,
                      left: 0,
                      height: s.fontSize,
                      kernedWidth: h,
                      deltaY: s.deltaY,
                    };
                    if (i > 0 && !n) {
                      var f = this.__charBounds[e][i - 1];
                      u.left = f.left + f.width + l.kernedWidth - l.width;
                    }
                    return u;
                  },
                  getHeightOfLine: function (t) {
                    if (this.__lineHeights[t]) return this.__lineHeights[t];
                    for (
                      var e = this._textLines[t],
                        i = this.getHeightOfChar(t, 0),
                        r = 1,
                        n = e.length;
                      r < n;
                      r++
                    )
                      i = Math.max(this.getHeightOfChar(t, r), i);
                    return (this.__lineHeights[t] =
                      i * this.lineHeight * this._fontSizeMult);
                  },
                  calcTextHeight: function () {
                    for (
                      var t, e = 0, i = 0, r = this._textLines.length;
                      i < r;
                      i++
                    )
                      (t = this.getHeightOfLine(i)),
                        (e += i === r - 1 ? t / this.lineHeight : t);
                    return e;
                  },
                  _getLeftOffset: function () {
                    return "ltr" === this.direction
                      ? -this.width / 2
                      : this.width / 2;
                  },
                  _getTopOffset: function () {
                    return -this.height / 2;
                  },
                  _renderTextCommon: function (t, e) {
                    t.save();
                    for (
                      var i = 0,
                        r = this._getLeftOffset(),
                        n = this._getTopOffset(),
                        o = 0,
                        s = this._textLines.length;
                      o < s;
                      o++
                    ) {
                      var a = this.getHeightOfLine(o),
                        l = a / this.lineHeight,
                        h = this._getLineLeftOffset(o);
                      this._renderTextLine(
                        e,
                        t,
                        this._textLines[o],
                        r + h,
                        n + i + l,
                        o
                      ),
                        (i += a);
                    }
                    t.restore();
                  },
                  _renderTextFill: function (t) {
                    (this.fill || this.styleHas("fill")) &&
                      this._renderTextCommon(t, "fillText");
                  },
                  _renderTextStroke: function (t) {
                    ((this.stroke && 0 !== this.strokeWidth) ||
                      !this.isEmptyStyles()) &&
                      (this.shadow &&
                        !this.shadow.affectStroke &&
                        this._removeShadow(t),
                      t.save(),
                      this._setLineDash(t, this.strokeDashArray),
                      t.beginPath(),
                      this._renderTextCommon(t, "strokeText"),
                      t.closePath(),
                      t.restore());
                  },
                  _renderChars: function (t, e, i, r, n, o) {
                    var s,
                      a,
                      l,
                      h,
                      c,
                      u = this.getHeightOfLine(o),
                      f = -1 !== this.textAlign.indexOf("justify"),
                      d = "",
                      p = 0,
                      g = this.path,
                      v =
                        !f &&
                        0 === this.charSpacing &&
                        this.isEmptyStyles(o) &&
                        !g,
                      m = "ltr" === this.direction,
                      y = "ltr" === this.direction ? 1 : -1;
                    if (
                      (e.save(),
                      (n -= (u * this._fontSizeFraction) / this.lineHeight),
                      v)
                    )
                      return (
                        e.canvas.setAttribute("dir", m ? "ltr" : "rtl"),
                        (e.direction = m ? "ltr" : "rtl"),
                        (e.textAlign = m ? "left" : "right"),
                        this._renderChar(t, e, o, 0, i.join(""), r, n, u),
                        void e.restore()
                      );
                    for (var _ = 0, b = i.length - 1; _ <= b; _++)
                      (h = _ === b || this.charSpacing || g),
                        (d += i[_]),
                        (l = this.__charBounds[o][_]),
                        0 === p
                          ? ((r += y * (l.kernedWidth - l.width)),
                            (p += l.width))
                          : (p += l.kernedWidth),
                        f && !h && this._reSpaceAndTab.test(i[_]) && (h = !0),
                        h ||
                          ((s = s || this.getCompleteStyleDeclaration(o, _)),
                          (a = this.getCompleteStyleDeclaration(o, _ + 1)),
                          (h = this._hasStyleChanged(s, a))),
                        h &&
                          (g
                            ? (e.save(),
                              e.translate(l.renderLeft, l.renderTop),
                              e.rotate(l.angle),
                              this._renderChar(t, e, o, _, d, -p / 2, 0, u),
                              e.restore())
                            : ((c = r),
                              e.canvas.setAttribute("dir", m ? "ltr" : "rtl"),
                              (e.direction = m ? "ltr" : "rtl"),
                              (e.textAlign = m ? "left" : "right"),
                              this._renderChar(t, e, o, _, d, c, n, u)),
                          (d = ""),
                          (s = a),
                          (r += y * p),
                          (p = 0));
                    e.restore();
                  },
                  _applyPatternGradientTransformText: function (t) {
                    var i,
                      r = e.util.createCanvasElement(),
                      n = this.width + this.strokeWidth,
                      o = this.height + this.strokeWidth;
                    return (
                      (r.width = n),
                      (r.height = o),
                      (i = r.getContext("2d")).beginPath(),
                      i.moveTo(0, 0),
                      i.lineTo(n, 0),
                      i.lineTo(n, o),
                      i.lineTo(0, o),
                      i.closePath(),
                      i.translate(n / 2, o / 2),
                      (i.fillStyle = t.toLive(i)),
                      this._applyPatternGradientTransform(i, t),
                      i.fill(),
                      i.createPattern(r, "no-repeat")
                    );
                  },
                  handleFiller: function (t, e, i) {
                    var r, n;
                    return i.toLive
                      ? "percentage" === i.gradientUnits ||
                        i.gradientTransform ||
                        i.patternTransform
                        ? ((r = -this.width / 2),
                          (n = -this.height / 2),
                          t.translate(r, n),
                          (t[e] = this._applyPatternGradientTransformText(i)),
                          { offsetX: r, offsetY: n })
                        : ((t[e] = i.toLive(t, this)),
                          this._applyPatternGradientTransform(t, i))
                      : ((t[e] = i), { offsetX: 0, offsetY: 0 });
                  },
                  _setStrokeStyles: function (t, e) {
                    return (
                      (t.lineWidth = e.strokeWidth),
                      (t.lineCap = this.strokeLineCap),
                      (t.lineDashOffset = this.strokeDashOffset),
                      (t.lineJoin = this.strokeLineJoin),
                      (t.miterLimit = this.strokeMiterLimit),
                      this.handleFiller(t, "strokeStyle", e.stroke)
                    );
                  },
                  _setFillStyles: function (t, e) {
                    return this.handleFiller(t, "fillStyle", e.fill);
                  },
                  _renderChar: function (t, e, i, r, n, o, s) {
                    var a,
                      l,
                      h = this._getStyleDeclaration(i, r),
                      c = this.getCompleteStyleDeclaration(i, r),
                      u = "fillText" === t && c.fill,
                      f = "strokeText" === t && c.stroke && c.strokeWidth;
                    (f || u) &&
                      (e.save(),
                      u && (a = this._setFillStyles(e, c)),
                      f && (l = this._setStrokeStyles(e, c)),
                      (e.font = this._getFontDeclaration(c)),
                      h && h.textBackgroundColor && this._removeShadow(e),
                      h && h.deltaY && (s += h.deltaY),
                      u && e.fillText(n, o - a.offsetX, s - a.offsetY),
                      f && e.strokeText(n, o - l.offsetX, s - l.offsetY),
                      e.restore());
                  },
                  setSuperscript: function (t, e) {
                    return this._setScript(t, e, this.superscript);
                  },
                  setSubscript: function (t, e) {
                    return this._setScript(t, e, this.subscript);
                  },
                  _setScript: function (t, e, i) {
                    var r = this.get2DCursorLocation(t, !0),
                      n = this.getValueOfPropertyAt(
                        r.lineIndex,
                        r.charIndex,
                        "fontSize"
                      ),
                      o = this.getValueOfPropertyAt(
                        r.lineIndex,
                        r.charIndex,
                        "deltaY"
                      ),
                      s = { fontSize: n * i.size, deltaY: o + n * i.baseline };
                    return this.setSelectionStyles(s, t, e), this;
                  },
                  _hasStyleChanged: function (t, e) {
                    return (
                      t.fill !== e.fill ||
                      t.stroke !== e.stroke ||
                      t.strokeWidth !== e.strokeWidth ||
                      t.fontSize !== e.fontSize ||
                      t.fontFamily !== e.fontFamily ||
                      t.fontWeight !== e.fontWeight ||
                      t.fontStyle !== e.fontStyle ||
                      t.deltaY !== e.deltaY
                    );
                  },
                  _hasStyleChangedForSvg: function (t, e) {
                    return (
                      this._hasStyleChanged(t, e) ||
                      t.overline !== e.overline ||
                      t.underline !== e.underline ||
                      t.linethrough !== e.linethrough
                    );
                  },
                  _getLineLeftOffset: function (t) {
                    var e = this.getLineWidth(t),
                      i = this.width - e,
                      r = this.textAlign,
                      n = this.direction,
                      o = 0,
                      s = this.isEndOfWrapping(t);
                    return "justify" === r ||
                      ("justify-center" === r && !s) ||
                      ("justify-right" === r && !s) ||
                      ("justify-left" === r && !s)
                      ? 0
                      : ("center" === r && (o = i / 2),
                        "right" === r && (o = i),
                        "justify-center" === r && (o = i / 2),
                        "justify-right" === r && (o = i),
                        "rtl" === n && (o -= i),
                        o);
                  },
                  _clearCache: function () {
                    (this.__lineWidths = []),
                      (this.__lineHeights = []),
                      (this.__charBounds = []);
                  },
                  _shouldClearDimensionCache: function () {
                    var t = this._forceClearCache;
                    return (
                      t ||
                        (t = this.hasStateChanged("_dimensionAffectingProps")),
                      t && ((this.dirty = !0), (this._forceClearCache = !1)),
                      t
                    );
                  },
                  getLineWidth: function (t) {
                    return this.__lineWidths[t]
                      ? this.__lineWidths[t]
                      : ((e =
                          "" === this._textLines[t]
                            ? 0
                            : this.measureLine(t).width),
                        (this.__lineWidths[t] = e),
                        e);
                    var e;
                  },
                  _getWidthOfCharSpacing: function () {
                    return 0 !== this.charSpacing
                      ? (this.fontSize * this.charSpacing) / 1e3
                      : 0;
                  },
                  getValueOfPropertyAt: function (t, e, i) {
                    var r = this._getStyleDeclaration(t, e);
                    return r && void 0 !== r[i] ? r[i] : this[i];
                  },
                  _renderTextDecoration: function (t, e) {
                    if (this[e] || this.styleHas(e)) {
                      for (
                        var i,
                          r,
                          n,
                          o,
                          s,
                          a,
                          l,
                          h,
                          c,
                          u,
                          f,
                          d,
                          p,
                          g,
                          v,
                          m,
                          y = this._getLeftOffset(),
                          _ = this._getTopOffset(),
                          b = this.path,
                          x = this._getWidthOfCharSpacing(),
                          C = this.offsets[e],
                          w = 0,
                          S = this._textLines.length;
                        w < S;
                        w++
                      )
                        if (
                          ((i = this.getHeightOfLine(w)),
                          this[e] || this.styleHas(e, w))
                        ) {
                          (l = this._textLines[w]),
                            (g = i / this.lineHeight),
                            (o = this._getLineLeftOffset(w)),
                            (u = 0),
                            (f = 0),
                            (h = this.getValueOfPropertyAt(w, 0, e)),
                            (m = this.getValueOfPropertyAt(w, 0, "fill")),
                            (c = _ + g * (1 - this._fontSizeFraction)),
                            (r = this.getHeightOfChar(w, 0)),
                            (s = this.getValueOfPropertyAt(w, 0, "deltaY"));
                          for (var T = 0, O = l.length; T < O; T++)
                            if (
                              ((d = this.__charBounds[w][T]),
                              (p = this.getValueOfPropertyAt(w, T, e)),
                              (v = this.getValueOfPropertyAt(w, T, "fill")),
                              (n = this.getHeightOfChar(w, T)),
                              (a = this.getValueOfPropertyAt(w, T, "deltaY")),
                              b && p && v)
                            )
                              t.save(),
                                (t.fillStyle = m),
                                t.translate(d.renderLeft, d.renderTop),
                                t.rotate(d.angle),
                                t.fillRect(
                                  -d.kernedWidth / 2,
                                  C * n + a,
                                  d.kernedWidth,
                                  this.fontSize / 15
                                ),
                                t.restore();
                            else if (
                              (p !== h || v !== m || n !== r || a !== s) &&
                              f > 0
                            ) {
                              var k = y + o + u;
                              "rtl" === this.direction &&
                                (k = this.width - k - f),
                                h &&
                                  m &&
                                  ((t.fillStyle = m),
                                  t.fillRect(
                                    k,
                                    c + C * r + s,
                                    f,
                                    this.fontSize / 15
                                  )),
                                (u = d.left),
                                (f = d.width),
                                (h = p),
                                (m = v),
                                (r = n),
                                (s = a);
                            } else f += d.kernedWidth;
                          k = y + o + u;
                          "rtl" === this.direction && (k = this.width - k - f),
                            (t.fillStyle = v),
                            p &&
                              v &&
                              t.fillRect(
                                k,
                                c + C * r + s,
                                f - x,
                                this.fontSize / 15
                              ),
                            (_ += i);
                        } else _ += i;
                      this._removeShadow(t);
                    }
                  },
                  _getFontDeclaration: function (t, i) {
                    var r = t || this,
                      n = this.fontFamily,
                      o = e.Text.genericFonts.indexOf(n.toLowerCase()) > -1,
                      s =
                        void 0 === n ||
                        n.indexOf("'") > -1 ||
                        n.indexOf(",") > -1 ||
                        n.indexOf('"') > -1 ||
                        o
                          ? r.fontFamily
                          : '"' + r.fontFamily + '"';
                    return [
                      e.isLikelyNode ? r.fontWeight : r.fontStyle,
                      e.isLikelyNode ? r.fontStyle : r.fontWeight,
                      i ? this.CACHE_FONT_SIZE + "px" : r.fontSize + "px",
                      s,
                    ].join(" ");
                  },
                  render: function (t) {
                    this.visible &&
                      ((this.canvas &&
                        this.canvas.skipOffscreen &&
                        !this.group &&
                        !this.isOnScreen()) ||
                        (this._shouldClearDimensionCache() &&
                          this.initDimensions(),
                        this.callSuper("render", t)));
                  },
                  _splitTextIntoLines: function (t) {
                    for (
                      var i = t.split(this._reNewline),
                        r = new Array(i.length),
                        n = ["\n"],
                        o = [],
                        s = 0;
                      s < i.length;
                      s++
                    )
                      (r[s] = e.util.string.graphemeSplit(i[s])),
                        (o = o.concat(r[s], n));
                    return (
                      o.pop(),
                      {
                        _unwrappedLines: r,
                        lines: i,
                        graphemeText: o,
                        graphemeLines: r,
                      }
                    );
                  },
                  toObject: function (t) {
                    var e = [
                        "text",
                        "fontSize",
                        "fontWeight",
                        "fontFamily",
                        "fontStyle",
                        "lineHeight",
                        "underline",
                        "overline",
                        "linethrough",
                        "textAlign",
                        "textBackgroundColor",
                        "charSpacing",
                        "path",
                        "direction",
                      ].concat(t),
                      r = this.callSuper("toObject", e);
                    return (
                      (r.styles = i(this.styles, !0)),
                      (r.path = this.path && this.path.toObject()),
                      r
                    );
                  },
                  set: function (t, e) {
                    this.callSuper("set", t, e);
                    var i = !1,
                      r = !1;
                    if ("object" == typeof t)
                      for (var n in t)
                        "path" === n && this.setPathInfo(),
                          (i =
                            i ||
                            -1 !== this._dimensionAffectingProps.indexOf(n)),
                          (r = r || "path" === n);
                    else
                      (i = -1 !== this._dimensionAffectingProps.indexOf(t)),
                        (r = "path" === t);
                    return (
                      r && this.setPathInfo(),
                      i && (this.initDimensions(), this.setCoords()),
                      this
                    );
                  },
                  complexity: function () {
                    return 1;
                  },
                })),
                  (e.Text.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
                    "x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(
                      " "
                    )
                  )),
                  (e.Text.DEFAULT_SVG_FONT_SIZE = 16),
                  (e.Text.fromElement = function (t, r, n) {
                    if (!t) return r(null);
                    var o = e.parseAttributes(t, e.Text.ATTRIBUTE_NAMES),
                      s = o.textAnchor || "left";
                    if (
                      (((n = e.util.object.extend(n ? i(n) : {}, o)).top =
                        n.top || 0),
                      (n.left = n.left || 0),
                      o.textDecoration)
                    ) {
                      var a = o.textDecoration;
                      -1 !== a.indexOf("underline") && (n.underline = !0),
                        -1 !== a.indexOf("overline") && (n.overline = !0),
                        -1 !== a.indexOf("line-through") &&
                          (n.linethrough = !0),
                        delete n.textDecoration;
                    }
                    "dx" in o && (n.left += o.dx),
                      "dy" in o && (n.top += o.dy),
                      "fontSize" in n ||
                        (n.fontSize = e.Text.DEFAULT_SVG_FONT_SIZE);
                    var l = "";
                    "textContent" in t
                      ? (l = t.textContent)
                      : "firstChild" in t &&
                        null !== t.firstChild &&
                        "data" in t.firstChild &&
                        null !== t.firstChild.data &&
                        (l = t.firstChild.data),
                      (l = l
                        .replace(/^\s+|\s+$|\n+/g, "")
                        .replace(/\s+/g, " "));
                    var h = n.strokeWidth;
                    n.strokeWidth = 0;
                    var c = new e.Text(l, n),
                      u = c.getScaledHeight() / c.height,
                      f =
                        ((c.height + c.strokeWidth) * c.lineHeight - c.height) *
                        u,
                      d = c.getScaledHeight() + f,
                      p = 0;
                    "center" === s && (p = c.getScaledWidth() / 2),
                      "right" === s && (p = c.getScaledWidth()),
                      c.set({
                        left: c.left - p,
                        top:
                          c.top -
                          (d - c.fontSize * (0.07 + c._fontSizeFraction)) /
                            c.lineHeight,
                        strokeWidth: void 0 !== h ? h : 1,
                      }),
                      r(c);
                  }),
                  (e.Text.fromObject = function (t, r) {
                    var n = i(t),
                      o = t.path;
                    return (
                      delete n.path,
                      e.Object._fromObject(
                        "Text",
                        n,
                        function (t) {
                          o
                            ? e.Object._fromObject(
                                "Path",
                                o,
                                function (e) {
                                  t.set("path", e), r(t);
                                },
                                "path"
                              )
                            : r(t);
                        },
                        "text"
                      )
                    );
                  }),
                  (e.Text.genericFonts = [
                    "sans-serif",
                    "serif",
                    "cursive",
                    "fantasy",
                    "monospace",
                  ]),
                  e.util.createAccessors && e.util.createAccessors(e.Text);
              }
            })(void 0 !== i ? i : this),
            T.util.object.extend(T.Text.prototype, {
              isEmptyStyles: function (t) {
                if (!this.styles) return !0;
                if (void 0 !== t && !this.styles[t]) return !0;
                var e = void 0 === t ? this.styles : { line: this.styles[t] };
                for (var i in e)
                  for (var r in e[i]) for (var n in e[i][r]) return !1;
                return !0;
              },
              styleHas: function (t, e) {
                if (!this.styles || !t || "" === t) return !1;
                if (void 0 !== e && !this.styles[e]) return !1;
                var i = void 0 === e ? this.styles : { 0: this.styles[e] };
                for (var r in i)
                  for (var n in i[r]) if (void 0 !== i[r][n][t]) return !0;
                return !1;
              },
              cleanStyle: function (t) {
                if (!this.styles || !t || "" === t) return !1;
                var e,
                  i,
                  r = this.styles,
                  n = 0,
                  o = !0,
                  s = 0;
                for (var a in r) {
                  for (var l in ((e = 0), r[a])) {
                    var h;
                    n++,
                      (h = r[a][l]).hasOwnProperty(t)
                        ? (i ? h[t] !== i && (o = !1) : (i = h[t]),
                          h[t] === this[t] && delete h[t])
                        : (o = !1),
                      0 !== Object.keys(h).length ? e++ : delete r[a][l];
                  }
                  0 === e && delete r[a];
                }
                for (var c = 0; c < this._textLines.length; c++)
                  s += this._textLines[c].length;
                o && n === s && ((this[t] = i), this.removeStyle(t));
              },
              removeStyle: function (t) {
                if (this.styles && t && "" !== t) {
                  var e,
                    i,
                    r,
                    n = this.styles;
                  for (i in n) {
                    for (r in (e = n[i]))
                      delete e[r][t],
                        0 === Object.keys(e[r]).length && delete e[r];
                    0 === Object.keys(e).length && delete n[i];
                  }
                }
              },
              _extendStyles: function (t, e) {
                var i = this.get2DCursorLocation(t);
                this._getLineStyle(i.lineIndex) ||
                  this._setLineStyle(i.lineIndex),
                  this._getStyleDeclaration(i.lineIndex, i.charIndex) ||
                    this._setStyleDeclaration(i.lineIndex, i.charIndex, {}),
                  T.util.object.extend(
                    this._getStyleDeclaration(i.lineIndex, i.charIndex),
                    e
                  );
              },
              get2DCursorLocation: function (t, e) {
                void 0 === t && (t = this.selectionStart);
                for (
                  var i = e ? this._unwrappedTextLines : this._textLines,
                    r = i.length,
                    n = 0;
                  n < r;
                  n++
                ) {
                  if (t <= i[n].length) return { lineIndex: n, charIndex: t };
                  t -= i[n].length + this.missingNewlineOffset(n);
                }
                return {
                  lineIndex: n - 1,
                  charIndex: i[n - 1].length < t ? i[n - 1].length : t,
                };
              },
              getSelectionStyles: function (t, e, i) {
                void 0 === t && (t = this.selectionStart || 0),
                  void 0 === e && (e = this.selectionEnd || t);
                for (var r = [], n = t; n < e; n++)
                  r.push(this.getStyleAtPosition(n, i));
                return r;
              },
              getStyleAtPosition: function (t, e) {
                var i = this.get2DCursorLocation(t);
                return (
                  (e
                    ? this.getCompleteStyleDeclaration(i.lineIndex, i.charIndex)
                    : this._getStyleDeclaration(i.lineIndex, i.charIndex)) || {}
                );
              },
              setSelectionStyles: function (t, e, i) {
                void 0 === e && (e = this.selectionStart || 0),
                  void 0 === i && (i = this.selectionEnd || e);
                for (var r = e; r < i; r++) this._extendStyles(r, t);
                return (this._forceClearCache = !0), this;
              },
              _getStyleDeclaration: function (t, e) {
                var i = this.styles && this.styles[t];
                return i ? i[e] : null;
              },
              getCompleteStyleDeclaration: function (t, e) {
                for (
                  var i,
                    r = this._getStyleDeclaration(t, e) || {},
                    n = {},
                    o = 0;
                  o < this._styleProperties.length;
                  o++
                )
                  n[(i = this._styleProperties[o])] =
                    void 0 === r[i] ? this[i] : r[i];
                return n;
              },
              _setStyleDeclaration: function (t, e, i) {
                this.styles[t][e] = i;
              },
              _deleteStyleDeclaration: function (t, e) {
                delete this.styles[t][e];
              },
              _getLineStyle: function (t) {
                return !!this.styles[t];
              },
              _setLineStyle: function (t) {
                this.styles[t] = {};
              },
              _deleteLineStyle: function (t) {
                delete this.styles[t];
              },
            }),
            (function () {
              function t(t) {
                t.textDecoration &&
                  (t.textDecoration.indexOf("underline") > -1 &&
                    (t.underline = !0),
                  t.textDecoration.indexOf("line-through") > -1 &&
                    (t.linethrough = !0),
                  t.textDecoration.indexOf("overline") > -1 &&
                    (t.overline = !0),
                  delete t.textDecoration);
              }
              (T.IText = T.util.createClass(T.Text, T.Observable, {
                type: "i-text",
                selectionStart: 0,
                selectionEnd: 0,
                selectionColor: "rgba(17,119,255,0.3)",
                isEditing: !1,
                editable: !0,
                editingBorderColor: "rgba(102,153,255,0.25)",
                cursorWidth: 2,
                cursorColor: "",
                cursorDelay: 1e3,
                cursorDuration: 600,
                caching: !0,
                _reSpace: /\s|\n/,
                _currentCursorOpacity: 0,
                _selectionDirection: null,
                _abortCursorAnimation: !1,
                __widthOfSpace: [],
                inCompositionMode: !1,
                initialize: function (t, e) {
                  this.callSuper("initialize", t, e), this.initBehavior();
                },
                setSelectionStart: function (t) {
                  (t = Math.max(t, 0)),
                    this._updateAndFire("selectionStart", t);
                },
                setSelectionEnd: function (t) {
                  (t = Math.min(t, this.text.length)),
                    this._updateAndFire("selectionEnd", t);
                },
                _updateAndFire: function (t, e) {
                  this[t] !== e &&
                    (this._fireSelectionChanged(), (this[t] = e)),
                    this._updateTextarea();
                },
                _fireSelectionChanged: function () {
                  this.fire("selection:changed"),
                    this.canvas &&
                      this.canvas.fire("text:selection:changed", {
                        target: this,
                      });
                },
                initDimensions: function () {
                  this.isEditing && this.initDelayedCursor(),
                    this.clearContextTop(),
                    this.callSuper("initDimensions");
                },
                render: function (t) {
                  this.clearContextTop(),
                    this.callSuper("render", t),
                    (this.cursorOffsetCache = {}),
                    this.renderCursorOrSelection();
                },
                _render: function (t) {
                  this.callSuper("_render", t);
                },
                clearContextTop: function (t) {
                  if (this.isEditing && this.canvas && this.canvas.contextTop) {
                    var e = this.canvas.contextTop,
                      i = this.canvas.viewportTransform;
                    e.save(),
                      e.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                      this.transform(e),
                      this._clearTextArea(e),
                      t || e.restore();
                  }
                },
                renderCursorOrSelection: function () {
                  if (this.isEditing && this.canvas && this.canvas.contextTop) {
                    var t = this._getCursorBoundaries(),
                      e = this.canvas.contextTop;
                    this.clearContextTop(!0),
                      this.selectionStart === this.selectionEnd
                        ? this.renderCursor(t, e)
                        : this.renderSelection(t, e),
                      e.restore();
                  }
                },
                _clearTextArea: function (t) {
                  var e = this.width + 4,
                    i = this.height + 4;
                  t.clearRect(-e / 2, -i / 2, e, i);
                },
                _getCursorBoundaries: function (t) {
                  void 0 === t && (t = this.selectionStart);
                  var e = this._getLeftOffset(),
                    i = this._getTopOffset(),
                    r = this._getCursorBoundariesOffsets(t);
                  return {
                    left: e,
                    top: i,
                    leftOffset: r.left,
                    topOffset: r.top,
                  };
                },
                _getCursorBoundariesOffsets: function (t) {
                  if (this.cursorOffsetCache && "top" in this.cursorOffsetCache)
                    return this.cursorOffsetCache;
                  var e,
                    i,
                    r,
                    n,
                    o = 0,
                    s = 0,
                    a = this.get2DCursorLocation(t);
                  (r = a.charIndex), (i = a.lineIndex);
                  for (var l = 0; l < i; l++) o += this.getHeightOfLine(l);
                  e = this._getLineLeftOffset(i);
                  var h = this.__charBounds[i][r];
                  return (
                    h && (s = h.left),
                    0 !== this.charSpacing &&
                      r === this._textLines[i].length &&
                      (s -= this._getWidthOfCharSpacing()),
                    (n = { top: o, left: e + (s > 0 ? s : 0) }),
                    "rtl" === this.direction && (n.left *= -1),
                    (this.cursorOffsetCache = n),
                    this.cursorOffsetCache
                  );
                },
                renderCursor: function (t, e) {
                  var i = this.get2DCursorLocation(),
                    r = i.lineIndex,
                    n = i.charIndex > 0 ? i.charIndex - 1 : 0,
                    o = this.getValueOfPropertyAt(r, n, "fontSize"),
                    s = this.scaleX * this.canvas.getZoom(),
                    a = this.cursorWidth / s,
                    l = t.topOffset,
                    h = this.getValueOfPropertyAt(r, n, "deltaY");
                  (l +=
                    ((1 - this._fontSizeFraction) * this.getHeightOfLine(r)) /
                      this.lineHeight -
                    o * (1 - this._fontSizeFraction)),
                    this.inCompositionMode && this.renderSelection(t, e),
                    (e.fillStyle =
                      this.cursorColor ||
                      this.getValueOfPropertyAt(r, n, "fill")),
                    (e.globalAlpha = this.__isMousedown
                      ? 1
                      : this._currentCursorOpacity),
                    e.fillRect(
                      t.left + t.leftOffset - a / 2,
                      l + t.top + h,
                      a,
                      o
                    );
                },
                renderSelection: function (t, e) {
                  for (
                    var i = this.inCompositionMode
                        ? this.hiddenTextarea.selectionStart
                        : this.selectionStart,
                      r = this.inCompositionMode
                        ? this.hiddenTextarea.selectionEnd
                        : this.selectionEnd,
                      n = -1 !== this.textAlign.indexOf("justify"),
                      o = this.get2DCursorLocation(i),
                      s = this.get2DCursorLocation(r),
                      a = o.lineIndex,
                      l = s.lineIndex,
                      h = o.charIndex < 0 ? 0 : o.charIndex,
                      c = s.charIndex < 0 ? 0 : s.charIndex,
                      u = a;
                    u <= l;
                    u++
                  ) {
                    var f,
                      d = this._getLineLeftOffset(u) || 0,
                      p = this.getHeightOfLine(u),
                      g = 0,
                      v = 0;
                    if (
                      (u === a && (g = this.__charBounds[a][h].left),
                      u >= a && u < l)
                    )
                      v =
                        n && !this.isEndOfWrapping(u)
                          ? this.width
                          : this.getLineWidth(u) || 5;
                    else if (u === l)
                      if (0 === c) v = this.__charBounds[l][c].left;
                      else {
                        var m = this._getWidthOfCharSpacing();
                        v =
                          this.__charBounds[l][c - 1].left +
                          this.__charBounds[l][c - 1].width -
                          m;
                      }
                    (f = p),
                      (this.lineHeight < 1 ||
                        (u === l && this.lineHeight > 1)) &&
                        (p /= this.lineHeight);
                    var y = t.left + d + g,
                      _ = v - g,
                      b = p,
                      x = 0;
                    this.inCompositionMode
                      ? ((e.fillStyle = this.compositionColor || "black"),
                        (b = 1),
                        (x = p))
                      : (e.fillStyle = this.selectionColor),
                      "rtl" === this.direction && (y = this.width - y - _),
                      e.fillRect(y, t.top + t.topOffset + x, _, b),
                      (t.topOffset += f);
                  }
                },
                getCurrentCharFontSize: function () {
                  var t = this._getCurrentCharIndex();
                  return this.getValueOfPropertyAt(t.l, t.c, "fontSize");
                },
                getCurrentCharColor: function () {
                  var t = this._getCurrentCharIndex();
                  return this.getValueOfPropertyAt(t.l, t.c, "fill");
                },
                _getCurrentCharIndex: function () {
                  var t = this.get2DCursorLocation(this.selectionStart, !0),
                    e = t.charIndex > 0 ? t.charIndex - 1 : 0;
                  return { l: t.lineIndex, c: e };
                },
              })),
                (T.IText.fromObject = function (e, i) {
                  if ((t(e), e.styles))
                    for (var r in e.styles)
                      for (var n in e.styles[r]) t(e.styles[r][n]);
                  T.Object._fromObject("IText", e, i, "text");
                });
            })(),
            (C = T.util.object.clone),
            T.util.object.extend(T.IText.prototype, {
              initBehavior: function () {
                this.initAddedHandler(),
                  this.initRemovedHandler(),
                  this.initCursorSelectionHandlers(),
                  this.initDoubleClickSimulation(),
                  (this.mouseMoveHandler = this.mouseMoveHandler.bind(this));
              },
              onDeselect: function () {
                this.isEditing && this.exitEditing(), (this.selected = !1);
              },
              initAddedHandler: function () {
                var t = this;
                this.on("added", function () {
                  var e = t.canvas;
                  e &&
                    (e._hasITextHandlers ||
                      ((e._hasITextHandlers = !0), t._initCanvasHandlers(e)),
                    (e._iTextInstances = e._iTextInstances || []),
                    e._iTextInstances.push(t));
                });
              },
              initRemovedHandler: function () {
                var t = this;
                this.on("removed", function () {
                  var e = t.canvas;
                  e &&
                    ((e._iTextInstances = e._iTextInstances || []),
                    T.util.removeFromArray(e._iTextInstances, t),
                    0 === e._iTextInstances.length &&
                      ((e._hasITextHandlers = !1), t._removeCanvasHandlers(e)));
                });
              },
              _initCanvasHandlers: function (t) {
                (t._mouseUpITextHandler = function () {
                  t._iTextInstances &&
                    t._iTextInstances.forEach(function (t) {
                      t.__isMousedown = !1;
                    });
                }),
                  t.on("mouse:up", t._mouseUpITextHandler);
              },
              _removeCanvasHandlers: function (t) {
                t.off("mouse:up", t._mouseUpITextHandler);
              },
              _tick: function () {
                this._currentTickState = this._animateCursor(
                  this,
                  1,
                  this.cursorDuration,
                  "_onTickComplete"
                );
              },
              _animateCursor: function (t, e, i, r) {
                var n;
                return (
                  (n = {
                    isAborted: !1,
                    abort: function () {
                      this.isAborted = !0;
                    },
                  }),
                  t.animate("_currentCursorOpacity", e, {
                    duration: i,
                    onComplete: function () {
                      n.isAborted || t[r]();
                    },
                    onChange: function () {
                      t.canvas &&
                        t.selectionStart === t.selectionEnd &&
                        t.renderCursorOrSelection();
                    },
                    abort: function () {
                      return n.isAborted;
                    },
                  }),
                  n
                );
              },
              _onTickComplete: function () {
                var t = this;
                this._cursorTimeout1 && clearTimeout(this._cursorTimeout1),
                  (this._cursorTimeout1 = setTimeout(function () {
                    t._currentTickCompleteState = t._animateCursor(
                      t,
                      0,
                      this.cursorDuration / 2,
                      "_tick"
                    );
                  }, 100));
              },
              initDelayedCursor: function (t) {
                var e = this,
                  i = t ? 0 : this.cursorDelay;
                this.abortCursorAnimation(),
                  (this._currentCursorOpacity = 1),
                  (this._cursorTimeout2 = setTimeout(function () {
                    e._tick();
                  }, i));
              },
              abortCursorAnimation: function () {
                var t =
                    this._currentTickState || this._currentTickCompleteState,
                  e = this.canvas;
                this._currentTickState && this._currentTickState.abort(),
                  this._currentTickCompleteState &&
                    this._currentTickCompleteState.abort(),
                  clearTimeout(this._cursorTimeout1),
                  clearTimeout(this._cursorTimeout2),
                  (this._currentCursorOpacity = 0),
                  t && e && e.clearContext(e.contextTop || e.contextContainer);
              },
              selectAll: function () {
                return (
                  (this.selectionStart = 0),
                  (this.selectionEnd = this._text.length),
                  this._fireSelectionChanged(),
                  this._updateTextarea(),
                  this
                );
              },
              getSelectedText: function () {
                return this._text
                  .slice(this.selectionStart, this.selectionEnd)
                  .join("");
              },
              findWordBoundaryLeft: function (t) {
                var e = 0,
                  i = t - 1;
                if (this._reSpace.test(this._text[i]))
                  for (; this._reSpace.test(this._text[i]); ) e++, i--;
                for (; /\S/.test(this._text[i]) && i > -1; ) e++, i--;
                return t - e;
              },
              findWordBoundaryRight: function (t) {
                var e = 0,
                  i = t;
                if (this._reSpace.test(this._text[i]))
                  for (; this._reSpace.test(this._text[i]); ) e++, i++;
                for (; /\S/.test(this._text[i]) && i < this._text.length; )
                  e++, i++;
                return t + e;
              },
              findLineBoundaryLeft: function (t) {
                for (
                  var e = 0, i = t - 1;
                  !/\n/.test(this._text[i]) && i > -1;

                )
                  e++, i--;
                return t - e;
              },
              findLineBoundaryRight: function (t) {
                for (
                  var e = 0, i = t;
                  !/\n/.test(this._text[i]) && i < this._text.length;

                )
                  e++, i++;
                return t + e;
              },
              searchWordBoundary: function (t, e) {
                for (
                  var i = this._text,
                    r = this._reSpace.test(i[t]) ? t - 1 : t,
                    n = i[r],
                    o = T.reNonWord;
                  !o.test(n) && r > 0 && r < i.length;

                )
                  n = i[(r += e)];
                return o.test(n) && (r += 1 === e ? 0 : 1), r;
              },
              selectWord: function (t) {
                t = t || this.selectionStart;
                var e = this.searchWordBoundary(t, -1),
                  i = this.searchWordBoundary(t, 1);
                (this.selectionStart = e),
                  (this.selectionEnd = i),
                  this._fireSelectionChanged(),
                  this._updateTextarea(),
                  this.renderCursorOrSelection();
              },
              selectLine: function (t) {
                t = t || this.selectionStart;
                var e = this.findLineBoundaryLeft(t),
                  i = this.findLineBoundaryRight(t);
                return (
                  (this.selectionStart = e),
                  (this.selectionEnd = i),
                  this._fireSelectionChanged(),
                  this._updateTextarea(),
                  this
                );
              },
              enterEditing: function (t) {
                if (!this.isEditing && this.editable)
                  return (
                    this.canvas &&
                      (this.canvas.calcOffset(),
                      this.exitEditingOnOthers(this.canvas)),
                    (this.isEditing = !0),
                    this.initHiddenTextarea(t),
                    this.hiddenTextarea.focus(),
                    (this.hiddenTextarea.value = this.text),
                    this._updateTextarea(),
                    this._saveEditingProps(),
                    this._setEditingProps(),
                    (this._textBeforeEdit = this.text),
                    this._tick(),
                    this.fire("editing:entered"),
                    this._fireSelectionChanged(),
                    this.canvas
                      ? (this.canvas.fire("text:editing:entered", {
                          target: this,
                        }),
                        this.initMouseMoveHandler(),
                        this.canvas.requestRenderAll(),
                        this)
                      : this
                  );
              },
              exitEditingOnOthers: function (t) {
                t._iTextInstances &&
                  t._iTextInstances.forEach(function (t) {
                    (t.selected = !1), t.isEditing && t.exitEditing();
                  });
              },
              initMouseMoveHandler: function () {
                this.canvas.on("mouse:move", this.mouseMoveHandler);
              },
              mouseMoveHandler: function (t) {
                if (this.__isMousedown && this.isEditing) {
                  var e = this.getSelectionStartFromPointer(t.e),
                    i = this.selectionStart,
                    r = this.selectionEnd;
                  ((e === this.__selectionStartOnMouseDown && i !== r) ||
                    (i !== e && r !== e)) &&
                    (e > this.__selectionStartOnMouseDown
                      ? ((this.selectionStart =
                          this.__selectionStartOnMouseDown),
                        (this.selectionEnd = e))
                      : ((this.selectionStart = e),
                        (this.selectionEnd = this.__selectionStartOnMouseDown)),
                    (this.selectionStart === i && this.selectionEnd === r) ||
                      (this.restartCursorIfNeeded(),
                      this._fireSelectionChanged(),
                      this._updateTextarea(),
                      this.renderCursorOrSelection()));
                }
              },
              _setEditingProps: function () {
                (this.hoverCursor = "text"),
                  this.canvas &&
                    (this.canvas.defaultCursor = this.canvas.moveCursor =
                      "text"),
                  (this.borderColor = this.editingBorderColor),
                  (this.hasControls = this.selectable = !1),
                  (this.lockMovementX = this.lockMovementY = !0);
              },
              fromStringToGraphemeSelection: function (t, e, i) {
                var r = i.slice(0, t),
                  n = T.util.string.graphemeSplit(r).length;
                if (t === e) return { selectionStart: n, selectionEnd: n };
                var o = i.slice(t, e);
                return {
                  selectionStart: n,
                  selectionEnd: n + T.util.string.graphemeSplit(o).length,
                };
              },
              fromGraphemeToStringSelection: function (t, e, i) {
                var r = i.slice(0, t).join("").length;
                return t === e
                  ? { selectionStart: r, selectionEnd: r }
                  : {
                      selectionStart: r,
                      selectionEnd: r + i.slice(t, e).join("").length,
                    };
              },
              _updateTextarea: function () {
                if (((this.cursorOffsetCache = {}), this.hiddenTextarea)) {
                  if (!this.inCompositionMode) {
                    var t = this.fromGraphemeToStringSelection(
                      this.selectionStart,
                      this.selectionEnd,
                      this._text
                    );
                    (this.hiddenTextarea.selectionStart = t.selectionStart),
                      (this.hiddenTextarea.selectionEnd = t.selectionEnd);
                  }
                  this.updateTextareaPosition();
                }
              },
              updateFromTextArea: function () {
                if (this.hiddenTextarea) {
                  (this.cursorOffsetCache = {}),
                    (this.text = this.hiddenTextarea.value),
                    this._shouldClearDimensionCache() &&
                      (this.initDimensions(), this.setCoords());
                  var t = this.fromStringToGraphemeSelection(
                    this.hiddenTextarea.selectionStart,
                    this.hiddenTextarea.selectionEnd,
                    this.hiddenTextarea.value
                  );
                  (this.selectionEnd = this.selectionStart = t.selectionEnd),
                    this.inCompositionMode ||
                      (this.selectionStart = t.selectionStart),
                    this.updateTextareaPosition();
                }
              },
              updateTextareaPosition: function () {
                if (this.selectionStart === this.selectionEnd) {
                  var t = this._calcTextareaPosition();
                  (this.hiddenTextarea.style.left = t.left),
                    (this.hiddenTextarea.style.top = t.top);
                }
              },
              _calcTextareaPosition: function () {
                if (!this.canvas) return { x: 1, y: 1 };
                var t = this.inCompositionMode
                    ? this.compositionStart
                    : this.selectionStart,
                  e = this._getCursorBoundaries(t),
                  i = this.get2DCursorLocation(t),
                  r = i.lineIndex,
                  n = i.charIndex,
                  o =
                    this.getValueOfPropertyAt(r, n, "fontSize") *
                    this.lineHeight,
                  s = e.leftOffset,
                  a = this.calcTransformMatrix(),
                  l = { x: e.left + s, y: e.top + e.topOffset + o },
                  h = this.canvas.getRetinaScaling(),
                  c = this.canvas.upperCanvasEl,
                  u = c.width / h,
                  f = c.height / h,
                  d = u - o,
                  p = f - o,
                  g = c.clientWidth / u,
                  v = c.clientHeight / f;
                return (
                  (l = T.util.transformPoint(l, a)),
                  ((l = T.util.transformPoint(
                    l,
                    this.canvas.viewportTransform
                  )).x *= g),
                  (l.y *= v),
                  l.x < 0 && (l.x = 0),
                  l.x > d && (l.x = d),
                  l.y < 0 && (l.y = 0),
                  l.y > p && (l.y = p),
                  (l.x += this.canvas._offset.left),
                  (l.y += this.canvas._offset.top),
                  {
                    left: l.x + "px",
                    top: l.y + "px",
                    fontSize: o + "px",
                    charHeight: o,
                  }
                );
              },
              _saveEditingProps: function () {
                this._savedProps = {
                  hasControls: this.hasControls,
                  borderColor: this.borderColor,
                  lockMovementX: this.lockMovementX,
                  lockMovementY: this.lockMovementY,
                  hoverCursor: this.hoverCursor,
                  selectable: this.selectable,
                  defaultCursor: this.canvas && this.canvas.defaultCursor,
                  moveCursor: this.canvas && this.canvas.moveCursor,
                };
              },
              _restoreEditingProps: function () {
                this._savedProps &&
                  ((this.hoverCursor = this._savedProps.hoverCursor),
                  (this.hasControls = this._savedProps.hasControls),
                  (this.borderColor = this._savedProps.borderColor),
                  (this.selectable = this._savedProps.selectable),
                  (this.lockMovementX = this._savedProps.lockMovementX),
                  (this.lockMovementY = this._savedProps.lockMovementY),
                  this.canvas &&
                    ((this.canvas.defaultCursor =
                      this._savedProps.defaultCursor),
                    (this.canvas.moveCursor = this._savedProps.moveCursor)));
              },
              exitEditing: function () {
                var t = this._textBeforeEdit !== this.text,
                  e = this.hiddenTextarea;
                return (
                  (this.selected = !1),
                  (this.isEditing = !1),
                  (this.selectionEnd = this.selectionStart),
                  e &&
                    (e.blur && e.blur(),
                    e.parentNode && e.parentNode.removeChild(e)),
                  (this.hiddenTextarea = null),
                  this.abortCursorAnimation(),
                  this._restoreEditingProps(),
                  (this._currentCursorOpacity = 0),
                  this._shouldClearDimensionCache() &&
                    (this.initDimensions(), this.setCoords()),
                  this.fire("editing:exited"),
                  t && this.fire("modified"),
                  this.canvas &&
                    (this.canvas.off("mouse:move", this.mouseMoveHandler),
                    this.canvas.fire("text:editing:exited", { target: this }),
                    t && this.canvas.fire("object:modified", { target: this })),
                  this
                );
              },
              _removeExtraneousStyles: function () {
                for (var t in this.styles)
                  this._textLines[t] || delete this.styles[t];
              },
              removeStyleFromTo: function (t, e) {
                var i,
                  r,
                  n = this.get2DCursorLocation(t, !0),
                  o = this.get2DCursorLocation(e, !0),
                  s = n.lineIndex,
                  a = n.charIndex,
                  l = o.lineIndex,
                  h = o.charIndex;
                if (s !== l) {
                  if (this.styles[s])
                    for (i = a; i < this._unwrappedTextLines[s].length; i++)
                      delete this.styles[s][i];
                  if (this.styles[l])
                    for (i = h; i < this._unwrappedTextLines[l].length; i++)
                      (r = this.styles[l][i]) &&
                        (this.styles[s] || (this.styles[s] = {}),
                        (this.styles[s][a + i - h] = r));
                  for (i = s + 1; i <= l; i++) delete this.styles[i];
                  this.shiftLineStyles(l, s - l);
                } else if (this.styles[s]) {
                  r = this.styles[s];
                  var c,
                    u,
                    f = h - a;
                  for (i = a; i < h; i++) delete r[i];
                  for (u in this.styles[s])
                    (c = parseInt(u, 10)) >= h &&
                      ((r[c - f] = r[u]), delete r[u]);
                }
              },
              shiftLineStyles: function (t, e) {
                var i = C(this.styles);
                for (var r in this.styles) {
                  var n = parseInt(r, 10);
                  n > t &&
                    ((this.styles[n + e] = i[n]),
                    i[n - e] || delete this.styles[n]);
                }
              },
              restartCursorIfNeeded: function () {
                (this._currentTickState &&
                  !this._currentTickState.isAborted &&
                  this._currentTickCompleteState &&
                  !this._currentTickCompleteState.isAborted) ||
                  this.initDelayedCursor();
              },
              insertNewlineStyleObject: function (t, e, i, r) {
                var n,
                  o = {},
                  s = !1,
                  a = this._unwrappedTextLines[t].length === e;
                for (var l in (i || (i = 1),
                this.shiftLineStyles(t, i),
                this.styles[t] && (n = this.styles[t][0 === e ? e : e - 1]),
                this.styles[t])) {
                  var h = parseInt(l, 10);
                  h >= e &&
                    ((s = !0),
                    (o[h - e] = this.styles[t][l]),
                    (a && 0 === e) || delete this.styles[t][l]);
                }
                var c = !1;
                for (
                  s && !a && ((this.styles[t + i] = o), (c = !0)), c && i--;
                  i > 0;

                )
                  r && r[i - 1]
                    ? (this.styles[t + i] = { 0: C(r[i - 1]) })
                    : n
                    ? (this.styles[t + i] = { 0: C(n) })
                    : delete this.styles[t + i],
                    i--;
                this._forceClearCache = !0;
              },
              insertCharStyleObject: function (t, e, i, r) {
                this.styles || (this.styles = {});
                var n = this.styles[t],
                  o = n ? C(n) : {};
                for (var s in (i || (i = 1), o)) {
                  var a = parseInt(s, 10);
                  a >= e && ((n[a + i] = o[a]), o[a - i] || delete n[a]);
                }
                if (((this._forceClearCache = !0), r))
                  for (; i--; )
                    Object.keys(r[i]).length &&
                      (this.styles[t] || (this.styles[t] = {}),
                      (this.styles[t][e + i] = C(r[i])));
                else if (n)
                  for (var l = n[e ? e - 1 : 1]; l && i--; )
                    this.styles[t][e + i] = C(l);
              },
              insertNewStyleBlock: function (t, e, i) {
                for (
                  var r = this.get2DCursorLocation(e, !0),
                    n = [0],
                    o = 0,
                    s = 0;
                  s < t.length;
                  s++
                )
                  "\n" === t[s] ? (n[++o] = 0) : n[o]++;
                for (
                  n[0] > 0 &&
                    (this.insertCharStyleObject(
                      r.lineIndex,
                      r.charIndex,
                      n[0],
                      i
                    ),
                    (i = i && i.slice(n[0] + 1))),
                    o &&
                      this.insertNewlineStyleObject(
                        r.lineIndex,
                        r.charIndex + n[0],
                        o
                      ),
                    s = 1;
                  s < o;
                  s++
                )
                  n[s] > 0
                    ? this.insertCharStyleObject(r.lineIndex + s, 0, n[s], i)
                    : i && (this.styles[r.lineIndex + s][0] = i[0]),
                    (i = i && i.slice(n[s] + 1));
                n[s] > 0 &&
                  this.insertCharStyleObject(r.lineIndex + s, 0, n[s], i);
              },
              setSelectionStartEndWithShift: function (t, e, i) {
                i <= t
                  ? (e === t
                      ? (this._selectionDirection = "left")
                      : "right" === this._selectionDirection &&
                        ((this._selectionDirection = "left"),
                        (this.selectionEnd = t)),
                    (this.selectionStart = i))
                  : i > t && i < e
                  ? "right" === this._selectionDirection
                    ? (this.selectionEnd = i)
                    : (this.selectionStart = i)
                  : (e === t
                      ? (this._selectionDirection = "right")
                      : "left" === this._selectionDirection &&
                        ((this._selectionDirection = "right"),
                        (this.selectionStart = e)),
                    (this.selectionEnd = i));
              },
              setSelectionInBoundaries: function () {
                var t = this.text.length;
                this.selectionStart > t
                  ? (this.selectionStart = t)
                  : this.selectionStart < 0 && (this.selectionStart = 0),
                  this.selectionEnd > t
                    ? (this.selectionEnd = t)
                    : this.selectionEnd < 0 && (this.selectionEnd = 0);
              },
            }),
            T.util.object.extend(T.IText.prototype, {
              initDoubleClickSimulation: function () {
                (this.__lastClickTime = +new Date()),
                  (this.__lastLastClickTime = +new Date()),
                  (this.__lastPointer = {}),
                  this.on("mousedown", this.onMouseDown);
              },
              onMouseDown: function (t) {
                if (this.canvas) {
                  this.__newClickTime = +new Date();
                  var e = t.pointer;
                  this.isTripleClick(e) &&
                    (this.fire("tripleclick", t), this._stopEvent(t.e)),
                    (this.__lastLastClickTime = this.__lastClickTime),
                    (this.__lastClickTime = this.__newClickTime),
                    (this.__lastPointer = e),
                    (this.__lastIsEditing = this.isEditing),
                    (this.__lastSelected = this.selected);
                }
              },
              isTripleClick: function (t) {
                return (
                  this.__newClickTime - this.__lastClickTime < 500 &&
                  this.__lastClickTime - this.__lastLastClickTime < 500 &&
                  this.__lastPointer.x === t.x &&
                  this.__lastPointer.y === t.y
                );
              },
              _stopEvent: function (t) {
                t.preventDefault && t.preventDefault(),
                  t.stopPropagation && t.stopPropagation();
              },
              initCursorSelectionHandlers: function () {
                this.initMousedownHandler(),
                  this.initMouseupHandler(),
                  this.initClicks();
              },
              doubleClickHandler: function (t) {
                this.isEditing &&
                  this.selectWord(this.getSelectionStartFromPointer(t.e));
              },
              tripleClickHandler: function (t) {
                this.isEditing &&
                  this.selectLine(this.getSelectionStartFromPointer(t.e));
              },
              initClicks: function () {
                this.on("mousedblclick", this.doubleClickHandler),
                  this.on("tripleclick", this.tripleClickHandler);
              },
              _mouseDownHandler: function (t) {
                !this.canvas ||
                  !this.editable ||
                  (t.e.button && 1 !== t.e.button) ||
                  ((this.__isMousedown = !0),
                  this.selected &&
                    ((this.inCompositionMode = !1), this.setCursorByClick(t.e)),
                  this.isEditing &&
                    ((this.__selectionStartOnMouseDown = this.selectionStart),
                    this.selectionStart === this.selectionEnd &&
                      this.abortCursorAnimation(),
                    this.renderCursorOrSelection()));
              },
              _mouseDownHandlerBefore: function (t) {
                !this.canvas ||
                  !this.editable ||
                  (t.e.button && 1 !== t.e.button) ||
                  (this.selected = this === this.canvas._activeObject);
              },
              initMousedownHandler: function () {
                this.on("mousedown", this._mouseDownHandler),
                  this.on("mousedown:before", this._mouseDownHandlerBefore);
              },
              initMouseupHandler: function () {
                this.on("mouseup", this.mouseUpHandler);
              },
              mouseUpHandler: function (t) {
                if (
                  ((this.__isMousedown = !1),
                  !(
                    !this.editable ||
                    this.group ||
                    (t.transform && t.transform.actionPerformed) ||
                    (t.e.button && 1 !== t.e.button)
                  ))
                ) {
                  if (this.canvas) {
                    var e = this.canvas._activeObject;
                    if (e && e !== this) return;
                  }
                  this.__lastSelected && !this.__corner
                    ? ((this.selected = !1),
                      (this.__lastSelected = !1),
                      this.enterEditing(t.e),
                      this.selectionStart === this.selectionEnd
                        ? this.initDelayedCursor(!0)
                        : this.renderCursorOrSelection())
                    : (this.selected = !0);
                }
              },
              setCursorByClick: function (t) {
                var e = this.getSelectionStartFromPointer(t),
                  i = this.selectionStart,
                  r = this.selectionEnd;
                t.shiftKey
                  ? this.setSelectionStartEndWithShift(i, r, e)
                  : ((this.selectionStart = e), (this.selectionEnd = e)),
                  this.isEditing &&
                    (this._fireSelectionChanged(), this._updateTextarea());
              },
              getSelectionStartFromPointer: function (t) {
                for (
                  var e,
                    i = this.getLocalPointer(t),
                    r = 0,
                    n = 0,
                    o = 0,
                    s = 0,
                    a = 0,
                    l = 0,
                    h = this._textLines.length;
                  l < h && o <= i.y;
                  l++
                )
                  (o += this.getHeightOfLine(l) * this.scaleY),
                    (a = l),
                    l > 0 &&
                      (s +=
                        this._textLines[l - 1].length +
                        this.missingNewlineOffset(l - 1));
                (n = this._getLineLeftOffset(a) * this.scaleX),
                  (e = this._textLines[a]),
                  "rtl" === this.direction &&
                    (i.x = this.width * this.scaleX - i.x + n);
                for (
                  var c = 0, u = e.length;
                  c < u &&
                  ((r = n),
                  (n += this.__charBounds[a][c].kernedWidth * this.scaleX) <=
                    i.x);
                  c++
                )
                  s++;
                return this._getNewSelectionStartFromOffset(i, r, n, s, u);
              },
              _getNewSelectionStartFromOffset: function (t, e, i, r, n) {
                var o = t.x - e,
                  s = i - t.x,
                  a = r + (s > o || s < 0 ? 0 : 1);
                return (
                  this.flipX && (a = n - a),
                  a > this._text.length && (a = this._text.length),
                  a
                );
              },
            }),
            T.util.object.extend(T.IText.prototype, {
              initHiddenTextarea: function () {
                (this.hiddenTextarea = T.document.createElement("textarea")),
                  this.hiddenTextarea.setAttribute("autocapitalize", "off"),
                  this.hiddenTextarea.setAttribute("autocorrect", "off"),
                  this.hiddenTextarea.setAttribute("autocomplete", "off"),
                  this.hiddenTextarea.setAttribute("spellcheck", "false"),
                  this.hiddenTextarea.setAttribute(
                    "data-fabric-hiddentextarea",
                    ""
                  ),
                  this.hiddenTextarea.setAttribute("wrap", "off");
                var t = this._calcTextareaPosition();
                (this.hiddenTextarea.style.cssText =
                  "position: absolute; top: " +
                  t.top +
                  "; left: " +
                  t.left +
                  "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; paddingï½°top: " +
                  t.fontSize +
                  ";"),
                  T.document.body.appendChild(this.hiddenTextarea),
                  T.util.addListener(
                    this.hiddenTextarea,
                    "keydown",
                    this.onKeyDown.bind(this)
                  ),
                  T.util.addListener(
                    this.hiddenTextarea,
                    "keyup",
                    this.onKeyUp.bind(this)
                  ),
                  T.util.addListener(
                    this.hiddenTextarea,
                    "input",
                    this.onInput.bind(this)
                  ),
                  T.util.addListener(
                    this.hiddenTextarea,
                    "copy",
                    this.copy.bind(this)
                  ),
                  T.util.addListener(
                    this.hiddenTextarea,
                    "cut",
                    this.copy.bind(this)
                  ),
                  T.util.addListener(
                    this.hiddenTextarea,
                    "paste",
                    this.paste.bind(this)
                  ),
                  T.util.addListener(
                    this.hiddenTextarea,
                    "compositionstart",
                    this.onCompositionStart.bind(this)
                  ),
                  T.util.addListener(
                    this.hiddenTextarea,
                    "compositionupdate",
                    this.onCompositionUpdate.bind(this)
                  ),
                  T.util.addListener(
                    this.hiddenTextarea,
                    "compositionend",
                    this.onCompositionEnd.bind(this)
                  ),
                  !this._clickHandlerInitialized &&
                    this.canvas &&
                    (T.util.addListener(
                      this.canvas.upperCanvasEl,
                      "click",
                      this.onClick.bind(this)
                    ),
                    (this._clickHandlerInitialized = !0));
              },
              keysMap: {
                9: "exitEditing",
                27: "exitEditing",
                33: "moveCursorUp",
                34: "moveCursorDown",
                35: "moveCursorRight",
                36: "moveCursorLeft",
                37: "moveCursorLeft",
                38: "moveCursorUp",
                39: "moveCursorRight",
                40: "moveCursorDown",
              },
              keysMapRtl: {
                9: "exitEditing",
                27: "exitEditing",
                33: "moveCursorUp",
                34: "moveCursorDown",
                35: "moveCursorLeft",
                36: "moveCursorRight",
                37: "moveCursorRight",
                38: "moveCursorUp",
                39: "moveCursorLeft",
                40: "moveCursorDown",
              },
              ctrlKeysMapUp: { 67: "copy", 88: "cut" },
              ctrlKeysMapDown: { 65: "selectAll" },
              onClick: function () {
                this.hiddenTextarea && this.hiddenTextarea.focus();
              },
              onKeyDown: function (t) {
                if (this.isEditing) {
                  var e =
                    "rtl" === this.direction ? this.keysMapRtl : this.keysMap;
                  if (t.keyCode in e) this[e[t.keyCode]](t);
                  else {
                    if (
                      !(t.keyCode in this.ctrlKeysMapDown) ||
                      (!t.ctrlKey && !t.metaKey)
                    )
                      return;
                    this[this.ctrlKeysMapDown[t.keyCode]](t);
                  }
                  t.stopImmediatePropagation(),
                    t.preventDefault(),
                    t.keyCode >= 33 && t.keyCode <= 40
                      ? ((this.inCompositionMode = !1),
                        this.clearContextTop(),
                        this.renderCursorOrSelection())
                      : this.canvas && this.canvas.requestRenderAll();
                }
              },
              onKeyUp: function (t) {
                !this.isEditing || this._copyDone || this.inCompositionMode
                  ? (this._copyDone = !1)
                  : t.keyCode in this.ctrlKeysMapUp &&
                    (t.ctrlKey || t.metaKey) &&
                    (this[this.ctrlKeysMapUp[t.keyCode]](t),
                    t.stopImmediatePropagation(),
                    t.preventDefault(),
                    this.canvas && this.canvas.requestRenderAll());
              },
              onInput: function (t) {
                var e = this.fromPaste;
                if (
                  ((this.fromPaste = !1),
                  t && t.stopPropagation(),
                  this.isEditing)
                ) {
                  var i,
                    r,
                    n,
                    o,
                    s,
                    a = this._splitTextIntoLines(
                      this.hiddenTextarea.value
                    ).graphemeText,
                    l = this._text.length,
                    h = a.length,
                    c = h - l,
                    u = this.selectionStart,
                    f = this.selectionEnd,
                    d = u !== f;
                  if ("" === this.hiddenTextarea.value)
                    return (
                      (this.styles = {}),
                      this.updateFromTextArea(),
                      this.fire("changed"),
                      void (
                        this.canvas &&
                        (this.canvas.fire("text:changed", { target: this }),
                        this.canvas.requestRenderAll())
                      )
                    );
                  var p = this.fromStringToGraphemeSelection(
                      this.hiddenTextarea.selectionStart,
                      this.hiddenTextarea.selectionEnd,
                      this.hiddenTextarea.value
                    ),
                    g = u > p.selectionStart;
                  d
                    ? ((i = this._text.slice(u, f)), (c += f - u))
                    : h < l &&
                      (i = g
                        ? this._text.slice(f + c, f)
                        : this._text.slice(u, u - c)),
                    (r = a.slice(p.selectionEnd - c, p.selectionEnd)),
                    i &&
                      i.length &&
                      (r.length &&
                        ((n = this.getSelectionStyles(u, u + 1, !1)),
                        (n = r.map(function () {
                          return n[0];
                        }))),
                      d
                        ? ((o = u), (s = f))
                        : g
                        ? ((o = f - i.length), (s = f))
                        : ((o = f), (s = f + i.length)),
                      this.removeStyleFromTo(o, s)),
                    r.length &&
                      (e &&
                        r.join("") === T.copiedText &&
                        !T.disableStyleCopyPaste &&
                        (n = T.copiedTextStyle),
                      this.insertNewStyleBlock(r, u, n)),
                    this.updateFromTextArea(),
                    this.fire("changed"),
                    this.canvas &&
                      (this.canvas.fire("text:changed", { target: this }),
                      this.canvas.requestRenderAll());
                }
              },
              onCompositionStart: function () {
                this.inCompositionMode = !0;
              },
              onCompositionEnd: function () {
                this.inCompositionMode = !1;
              },
              onCompositionUpdate: function (t) {
                (this.compositionStart = t.target.selectionStart),
                  (this.compositionEnd = t.target.selectionEnd),
                  this.updateTextareaPosition();
              },
              copy: function () {
                this.selectionStart !== this.selectionEnd &&
                  ((T.copiedText = this.getSelectedText()),
                  T.disableStyleCopyPaste
                    ? (T.copiedTextStyle = null)
                    : (T.copiedTextStyle = this.getSelectionStyles(
                        this.selectionStart,
                        this.selectionEnd,
                        !0
                      )),
                  (this._copyDone = !0));
              },
              paste: function () {
                this.fromPaste = !0;
              },
              _getClipboardData: function (t) {
                return (t && t.clipboardData) || T.window.clipboardData;
              },
              _getWidthBeforeCursor: function (t, e) {
                var i,
                  r = this._getLineLeftOffset(t);
                return (
                  e > 0 &&
                    (r += (i = this.__charBounds[t][e - 1]).left + i.width),
                  r
                );
              },
              getDownCursorOffset: function (t, e) {
                var i = this._getSelectionForOffset(t, e),
                  r = this.get2DCursorLocation(i),
                  n = r.lineIndex;
                if (
                  n === this._textLines.length - 1 ||
                  t.metaKey ||
                  34 === t.keyCode
                )
                  return this._text.length - i;
                var o = r.charIndex,
                  s = this._getWidthBeforeCursor(n, o),
                  a = this._getIndexOnLine(n + 1, s);
                return (
                  this._textLines[n].slice(o).length +
                  a +
                  1 +
                  this.missingNewlineOffset(n)
                );
              },
              _getSelectionForOffset: function (t, e) {
                return t.shiftKey &&
                  this.selectionStart !== this.selectionEnd &&
                  e
                  ? this.selectionEnd
                  : this.selectionStart;
              },
              getUpCursorOffset: function (t, e) {
                var i = this._getSelectionForOffset(t, e),
                  r = this.get2DCursorLocation(i),
                  n = r.lineIndex;
                if (0 === n || t.metaKey || 33 === t.keyCode) return -i;
                var o = r.charIndex,
                  s = this._getWidthBeforeCursor(n, o),
                  a = this._getIndexOnLine(n - 1, s),
                  l = this._textLines[n].slice(0, o),
                  h = this.missingNewlineOffset(n - 1);
                return -this._textLines[n - 1].length + a - l.length + (1 - h);
              },
              _getIndexOnLine: function (t, e) {
                for (
                  var i,
                    r,
                    n = this._textLines[t],
                    o = this._getLineLeftOffset(t),
                    s = 0,
                    a = 0,
                    l = n.length;
                  a < l;
                  a++
                )
                  if ((o += i = this.__charBounds[t][a].width) > e) {
                    r = !0;
                    var h = o - i,
                      c = o,
                      u = Math.abs(h - e);
                    s = Math.abs(c - e) < u ? a : a - 1;
                    break;
                  }
                return r || (s = n.length - 1), s;
              },
              moveCursorDown: function (t) {
                (this.selectionStart >= this._text.length &&
                  this.selectionEnd >= this._text.length) ||
                  this._moveCursorUpOrDown("Down", t);
              },
              moveCursorUp: function (t) {
                (0 === this.selectionStart && 0 === this.selectionEnd) ||
                  this._moveCursorUpOrDown("Up", t);
              },
              _moveCursorUpOrDown: function (t, e) {
                var i = this["get" + t + "CursorOffset"](
                  e,
                  "right" === this._selectionDirection
                );
                e.shiftKey
                  ? this.moveCursorWithShift(i)
                  : this.moveCursorWithoutShift(i),
                  0 !== i &&
                    (this.setSelectionInBoundaries(),
                    this.abortCursorAnimation(),
                    (this._currentCursorOpacity = 1),
                    this.initDelayedCursor(),
                    this._fireSelectionChanged(),
                    this._updateTextarea());
              },
              moveCursorWithShift: function (t) {
                var e =
                  "left" === this._selectionDirection
                    ? this.selectionStart + t
                    : this.selectionEnd + t;
                return (
                  this.setSelectionStartEndWithShift(
                    this.selectionStart,
                    this.selectionEnd,
                    e
                  ),
                  0 !== t
                );
              },
              moveCursorWithoutShift: function (t) {
                return (
                  t < 0
                    ? ((this.selectionStart += t),
                      (this.selectionEnd = this.selectionStart))
                    : ((this.selectionEnd += t),
                      (this.selectionStart = this.selectionEnd)),
                  0 !== t
                );
              },
              moveCursorLeft: function (t) {
                (0 === this.selectionStart && 0 === this.selectionEnd) ||
                  this._moveCursorLeftOrRight("Left", t);
              },
              _move: function (t, e, i) {
                var r;
                if (t.altKey) r = this["findWordBoundary" + i](this[e]);
                else {
                  if (!t.metaKey && 35 !== t.keyCode && 36 !== t.keyCode)
                    return (this[e] += "Left" === i ? -1 : 1), !0;
                  r = this["findLineBoundary" + i](this[e]);
                }
                if (void 0 !== typeof r && this[e] !== r)
                  return (this[e] = r), !0;
              },
              _moveLeft: function (t, e) {
                return this._move(t, e, "Left");
              },
              _moveRight: function (t, e) {
                return this._move(t, e, "Right");
              },
              moveCursorLeftWithoutShift: function (t) {
                var e = !0;
                return (
                  (this._selectionDirection = "left"),
                  this.selectionEnd === this.selectionStart &&
                    0 !== this.selectionStart &&
                    (e = this._moveLeft(t, "selectionStart")),
                  (this.selectionEnd = this.selectionStart),
                  e
                );
              },
              moveCursorLeftWithShift: function (t) {
                return "right" === this._selectionDirection &&
                  this.selectionStart !== this.selectionEnd
                  ? this._moveLeft(t, "selectionEnd")
                  : 0 !== this.selectionStart
                  ? ((this._selectionDirection = "left"),
                    this._moveLeft(t, "selectionStart"))
                  : void 0;
              },
              moveCursorRight: function (t) {
                (this.selectionStart >= this._text.length &&
                  this.selectionEnd >= this._text.length) ||
                  this._moveCursorLeftOrRight("Right", t);
              },
              _moveCursorLeftOrRight: function (t, e) {
                var i = "moveCursor" + t + "With";
                (this._currentCursorOpacity = 1),
                  e.shiftKey ? (i += "Shift") : (i += "outShift"),
                  this[i](e) &&
                    (this.abortCursorAnimation(),
                    this.initDelayedCursor(),
                    this._fireSelectionChanged(),
                    this._updateTextarea());
              },
              moveCursorRightWithShift: function (t) {
                return "left" === this._selectionDirection &&
                  this.selectionStart !== this.selectionEnd
                  ? this._moveRight(t, "selectionStart")
                  : this.selectionEnd !== this._text.length
                  ? ((this._selectionDirection = "right"),
                    this._moveRight(t, "selectionEnd"))
                  : void 0;
              },
              moveCursorRightWithoutShift: function (t) {
                var e = !0;
                return (
                  (this._selectionDirection = "right"),
                  this.selectionStart === this.selectionEnd
                    ? ((e = this._moveRight(t, "selectionStart")),
                      (this.selectionEnd = this.selectionStart))
                    : (this.selectionStart = this.selectionEnd),
                  e
                );
              },
              removeChars: function (t, e) {
                void 0 === e && (e = t + 1),
                  this.removeStyleFromTo(t, e),
                  this._text.splice(t, e - t),
                  (this.text = this._text.join("")),
                  this.set("dirty", !0),
                  this._shouldClearDimensionCache() &&
                    (this.initDimensions(), this.setCoords()),
                  this._removeExtraneousStyles();
              },
              insertChars: function (t, e, i, r) {
                void 0 === r && (r = i), r > i && this.removeStyleFromTo(i, r);
                var n = T.util.string.graphemeSplit(t);
                this.insertNewStyleBlock(n, i, e),
                  (this._text = [].concat(
                    this._text.slice(0, i),
                    n,
                    this._text.slice(r)
                  )),
                  (this.text = this._text.join("")),
                  this.set("dirty", !0),
                  this._shouldClearDimensionCache() &&
                    (this.initDimensions(), this.setCoords()),
                  this._removeExtraneousStyles();
              },
            }),
            (w = T.util.toFixed),
            (S = /  +/g),
            T.util.object.extend(T.Text.prototype, {
              _toSVG: function () {
                var t = this._getSVGLeftTopOffsets(),
                  e = this._getSVGTextAndBg(t.textTop, t.textLeft);
                return this._wrapSVGTextAndBg(e);
              },
              toSVG: function (t) {
                return this._createBaseSVGMarkup(this._toSVG(), {
                  reviver: t,
                  noStyle: !0,
                  withShadow: !0,
                });
              },
              _getSVGLeftTopOffsets: function () {
                return {
                  textLeft: -this.width / 2,
                  textTop: -this.height / 2,
                  lineTop: this.getHeightOfLine(0),
                };
              },
              _wrapSVGTextAndBg: function (t) {
                var e = this.getSvgTextDecoration(this);
                return [
                  t.textBgRects.join(""),
                  '\t\t<text xml:space="preserve" ',
                  this.fontFamily
                    ? 'font-family="' +
                      this.fontFamily.replace(/"/g, "'") +
                      '" '
                    : "",
                  this.fontSize ? 'font-size="' + this.fontSize + '" ' : "",
                  this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "",
                  this.fontWeight
                    ? 'font-weight="' + this.fontWeight + '" '
                    : "",
                  e ? 'text-decoration="' + e + '" ' : "",
                  'style="',
                  this.getSvgStyles(!0),
                  '"',
                  this.addPaintOrder(),
                  " >",
                  t.textSpans.join(""),
                  "</text>\n",
                ];
              },
              _getSVGTextAndBg: function (t, e) {
                var i,
                  r = [],
                  n = [],
                  o = t;
                this._setSVGBg(n);
                for (var s = 0, a = this._textLines.length; s < a; s++)
                  (i = this._getLineLeftOffset(s)),
                    (this.textBackgroundColor ||
                      this.styleHas("textBackgroundColor", s)) &&
                      this._setSVGTextLineBg(n, s, e + i, o),
                    this._setSVGTextLineText(r, s, e + i, o),
                    (o += this.getHeightOfLine(s));
                return { textSpans: r, textBgRects: n };
              },
              _createTextCharSpan: function (t, e, i, r) {
                var n = t !== t.trim() || t.match(S),
                  o = this.getSvgSpanStyles(e, n),
                  s = o ? 'style="' + o + '"' : "",
                  a = e.deltaY,
                  l = "",
                  h = T.Object.NUM_FRACTION_DIGITS;
                return (
                  a && (l = ' dy="' + w(a, h) + '" '),
                  [
                    '<tspan x="',
                    w(i, h),
                    '" y="',
                    w(r, h),
                    '" ',
                    l,
                    s,
                    ">",
                    T.util.string.escapeXml(t),
                    "</tspan>",
                  ].join("")
                );
              },
              _setSVGTextLineText: function (t, e, i, r) {
                var n,
                  o,
                  s,
                  a,
                  l,
                  h = this.getHeightOfLine(e),
                  c = -1 !== this.textAlign.indexOf("justify"),
                  u = "",
                  f = 0,
                  d = this._textLines[e];
                r += (h * (1 - this._fontSizeFraction)) / this.lineHeight;
                for (var p = 0, g = d.length - 1; p <= g; p++)
                  (l = p === g || this.charSpacing),
                    (u += d[p]),
                    (s = this.__charBounds[e][p]),
                    0 === f
                      ? ((i += s.kernedWidth - s.width), (f += s.width))
                      : (f += s.kernedWidth),
                    c && !l && this._reSpaceAndTab.test(d[p]) && (l = !0),
                    l ||
                      ((n = n || this.getCompleteStyleDeclaration(e, p)),
                      (o = this.getCompleteStyleDeclaration(e, p + 1)),
                      (l = this._hasStyleChangedForSvg(n, o))),
                    l &&
                      ((a = this._getStyleDeclaration(e, p) || {}),
                      t.push(this._createTextCharSpan(u, a, i, r)),
                      (u = ""),
                      (n = o),
                      (i += f),
                      (f = 0));
              },
              _pushTextBgRect: function (t, e, i, r, n, o) {
                var s = T.Object.NUM_FRACTION_DIGITS;
                t.push(
                  "\t\t<rect ",
                  this._getFillAttributes(e),
                  ' x="',
                  w(i, s),
                  '" y="',
                  w(r, s),
                  '" width="',
                  w(n, s),
                  '" height="',
                  w(o, s),
                  '"></rect>\n'
                );
              },
              _setSVGTextLineBg: function (t, e, i, r) {
                for (
                  var n,
                    o,
                    s = this._textLines[e],
                    a = this.getHeightOfLine(e) / this.lineHeight,
                    l = 0,
                    h = 0,
                    c = this.getValueOfPropertyAt(e, 0, "textBackgroundColor"),
                    u = 0,
                    f = s.length;
                  u < f;
                  u++
                )
                  (n = this.__charBounds[e][u]),
                    (o = this.getValueOfPropertyAt(
                      e,
                      u,
                      "textBackgroundColor"
                    )) !== c
                      ? (c && this._pushTextBgRect(t, c, i + h, r, l, a),
                        (h = n.left),
                        (l = n.width),
                        (c = o))
                      : (l += n.kernedWidth);
                o && this._pushTextBgRect(t, o, i + h, r, l, a);
              },
              _getFillAttributes: function (t) {
                var e = t && "string" == typeof t ? new T.Color(t) : "";
                return e && e.getSource() && 1 !== e.getAlpha()
                  ? 'opacity="' +
                      e.getAlpha() +
                      '" fill="' +
                      e.setAlpha(1).toRgb() +
                      '"'
                  : 'fill="' + t + '"';
              },
              _getSVGLineTopOffset: function (t) {
                for (var e, i = 0, r = 0; r < t; r++)
                  i += this.getHeightOfLine(r);
                return (
                  (e = this.getHeightOfLine(r)),
                  {
                    lineTop: i,
                    offset:
                      ((this._fontSizeMult - this._fontSizeFraction) * e) /
                      (this.lineHeight * this._fontSizeMult),
                  }
                );
              },
              getSvgStyles: function (t) {
                return (
                  T.Object.prototype.getSvgStyles.call(this, t) +
                  " white-space: pre;"
                );
              },
            }),
            (function (t) {
              "use strict";
              var e = t.fabric || (t.fabric = {});
              (e.Textbox = e.util.createClass(e.IText, e.Observable, {
                type: "textbox",
                minWidth: 20,
                dynamicMinWidth: 2,
                __cachedLines: null,
                lockScalingFlip: !0,
                noScaleCache: !1,
                _dimensionAffectingProps:
                  e.Text.prototype._dimensionAffectingProps.concat("width"),
                _wordJoiners: /[ \t\r]/,
                splitByGrapheme: !1,
                initDimensions: function () {
                  this.__skipDimension ||
                    (this.isEditing && this.initDelayedCursor(),
                    this.clearContextTop(),
                    this._clearCache(),
                    (this.dynamicMinWidth = 0),
                    (this._styleMap = this._generateStyleMap(
                      this._splitText()
                    )),
                    this.dynamicMinWidth > this.width &&
                      this._set("width", this.dynamicMinWidth),
                    -1 !== this.textAlign.indexOf("justify") &&
                      this.enlargeSpaces(),
                    (this.height = this.calcTextHeight()),
                    this.saveState({
                      propertySet: "_dimensionAffectingProps",
                    }));
                },
                _generateStyleMap: function (t) {
                  for (
                    var e = 0, i = 0, r = 0, n = {}, o = 0;
                    o < t.graphemeLines.length;
                    o++
                  )
                    "\n" === t.graphemeText[r] && o > 0
                      ? ((i = 0), r++, e++)
                      : !this.splitByGrapheme &&
                        this._reSpaceAndTab.test(t.graphemeText[r]) &&
                        o > 0 &&
                        (i++, r++),
                      (n[o] = { line: e, offset: i }),
                      (r += t.graphemeLines[o].length),
                      (i += t.graphemeLines[o].length);
                  return n;
                },
                styleHas: function (t, i) {
                  if (this._styleMap && !this.isWrapping) {
                    var r = this._styleMap[i];
                    r && (i = r.line);
                  }
                  return e.Text.prototype.styleHas.call(this, t, i);
                },
                isEmptyStyles: function (t) {
                  if (!this.styles) return !0;
                  var e,
                    i,
                    r = 0,
                    n = !1,
                    o = this._styleMap[t],
                    s = this._styleMap[t + 1];
                  for (var a in (o && ((t = o.line), (r = o.offset)),
                  s && ((n = s.line === t), (e = s.offset)),
                  (i = void 0 === t ? this.styles : { line: this.styles[t] })))
                    for (var l in i[a])
                      if (l >= r && (!n || l < e))
                        for (var h in i[a][l]) return !1;
                  return !0;
                },
                _getStyleDeclaration: function (t, e) {
                  if (this._styleMap && !this.isWrapping) {
                    var i = this._styleMap[t];
                    if (!i) return null;
                    (t = i.line), (e = i.offset + e);
                  }
                  return this.callSuper("_getStyleDeclaration", t, e);
                },
                _setStyleDeclaration: function (t, e, i) {
                  var r = this._styleMap[t];
                  (t = r.line), (e = r.offset + e), (this.styles[t][e] = i);
                },
                _deleteStyleDeclaration: function (t, e) {
                  var i = this._styleMap[t];
                  (t = i.line), (e = i.offset + e), delete this.styles[t][e];
                },
                _getLineStyle: function (t) {
                  var e = this._styleMap[t];
                  return !!this.styles[e.line];
                },
                _setLineStyle: function (t) {
                  var e = this._styleMap[t];
                  this.styles[e.line] = {};
                },
                _wrapText: function (t, e) {
                  var i,
                    r = [];
                  for (this.isWrapping = !0, i = 0; i < t.length; i++)
                    r = r.concat(this._wrapLine(t[i], i, e));
                  return (this.isWrapping = !1), r;
                },
                _measureWord: function (t, e, i) {
                  var r,
                    n = 0;
                  i = i || 0;
                  for (var o = 0, s = t.length; o < s; o++) {
                    (n += this._getGraphemeBox(
                      t[o],
                      e,
                      o + i,
                      r,
                      true
                    ).kernedWidth),
                      (r = t[o]);
                  }
                  return n;
                },
                _wrapLine: function (t, i, r, n) {
                  var o = 0,
                    s = this.splitByGrapheme,
                    a = [],
                    l = [],
                    h = s
                      ? e.util.string.graphemeSplit(t)
                      : t.split(this._wordJoiners),
                    c = "",
                    u = 0,
                    f = s ? "" : " ",
                    d = 0,
                    p = 0,
                    g = 0,
                    v = !0,
                    m = this._getWidthOfCharSpacing();
                  n = n || 0;
                  0 === h.length && h.push([]), (r -= n);
                  for (var y = 0; y < h.length; y++)
                    (c = s ? h[y] : e.util.string.graphemeSplit(h[y])),
                      (d = this._measureWord(c, i, u)),
                      (u += c.length),
                      (o += p + d - m) > r && !v
                        ? (a.push(l), (l = []), (o = d), (v = !0))
                        : (o += m),
                      v || s || l.push(f),
                      (l = l.concat(c)),
                      (p = s ? 0 : this._measureWord([f], i, u)),
                      u++,
                      (v = !1),
                      d > g && (g = d);
                  return (
                    y && a.push(l),
                    g + n > this.dynamicMinWidth &&
                      (this.dynamicMinWidth = g - m + n),
                    a
                  );
                },
                isEndOfWrapping: function (t) {
                  return (
                    !this._styleMap[t + 1] ||
                    this._styleMap[t + 1].line !== this._styleMap[t].line
                  );
                },
                missingNewlineOffset: function (t) {
                  return this.splitByGrapheme
                    ? this.isEndOfWrapping(t)
                      ? 1
                      : 0
                    : 1;
                },
                _splitTextIntoLines: function (t) {
                  for (
                    var i = e.Text.prototype._splitTextIntoLines.call(this, t),
                      r = this._wrapText(i.lines, this.width),
                      n = new Array(r.length),
                      o = 0;
                    o < r.length;
                    o++
                  )
                    n[o] = r[o].join("");
                  return (i.lines = n), (i.graphemeLines = r), i;
                },
                getMinWidth: function () {
                  return Math.max(this.minWidth, this.dynamicMinWidth);
                },
                _removeExtraneousStyles: function () {
                  var t = {};
                  for (var e in this._styleMap)
                    this._textLines[e] && (t[this._styleMap[e].line] = 1);
                  for (var e in this.styles) t[e] || delete this.styles[e];
                },
                toObject: function (t) {
                  return this.callSuper(
                    "toObject",
                    ["minWidth", "splitByGrapheme"].concat(t)
                  );
                },
              })),
                (e.Textbox.fromObject = function (t, i) {
                  return e.Object._fromObject("Textbox", t, i, "text");
                });
            })(void 0 !== i ? i : this),
            (function () {
              var t = T.controlsUtils,
                e = t.scaleSkewCursorStyleHandler,
                i = t.scaleCursorStyleHandler,
                r = t.scalingEqually,
                n = t.scalingYOrSkewingX,
                o = t.scalingXOrSkewingY,
                s = t.scaleOrSkewActionName,
                a = T.Object.prototype.controls;
              if (
                ((a.ml = new T.Control({
                  x: -0.5,
                  y: 0,
                  cursorStyleHandler: e,
                  actionHandler: o,
                  getActionName: s,
                })),
                (a.mr = new T.Control({
                  x: 0.5,
                  y: 0,
                  cursorStyleHandler: e,
                  actionHandler: o,
                  getActionName: s,
                })),
                (a.mb = new T.Control({
                  x: 0,
                  y: 0.5,
                  cursorStyleHandler: e,
                  actionHandler: n,
                  getActionName: s,
                })),
                (a.mt = new T.Control({
                  x: 0,
                  y: -0.5,
                  cursorStyleHandler: e,
                  actionHandler: n,
                  getActionName: s,
                })),
                (a.tl = new T.Control({
                  x: -0.5,
                  y: -0.5,
                  cursorStyleHandler: i,
                  actionHandler: r,
                })),
                (a.tr = new T.Control({
                  x: 0.5,
                  y: -0.5,
                  cursorStyleHandler: i,
                  actionHandler: r,
                })),
                (a.bl = new T.Control({
                  x: -0.5,
                  y: 0.5,
                  cursorStyleHandler: i,
                  actionHandler: r,
                })),
                (a.br = new T.Control({
                  x: 0.5,
                  y: 0.5,
                  cursorStyleHandler: i,
                  actionHandler: r,
                })),
                (a.mtr = new T.Control({
                  x: 0,
                  y: -0.5,
                  actionHandler: t.rotationWithSnapping,
                  cursorStyleHandler: t.rotationStyleHandler,
                  offsetY: -40,
                  withConnection: !0,
                  actionName: "rotate",
                })),
                T.Textbox)
              ) {
                var l = (T.Textbox.prototype.controls = {});
                (l.mtr = a.mtr),
                  (l.tr = a.tr),
                  (l.br = a.br),
                  (l.tl = a.tl),
                  (l.bl = a.bl),
                  (l.mt = a.mt),
                  (l.mb = a.mb),
                  (l.mr = new T.Control({
                    x: 0.5,
                    y: 0,
                    actionHandler: t.changeWidth,
                    cursorStyleHandler: e,
                    actionName: "resizing",
                  })),
                  (l.ml = new T.Control({
                    x: -0.5,
                    y: 0,
                    actionHandler: t.changeWidth,
                    cursorStyleHandler: e,
                    actionName: "resizing",
                  }));
              }
            })();
        }.call(this, t("buffer").Buffer));
      },
      {
        buffer: 6,
        jsdom: 5,
        "jsdom/lib/jsdom/living/generated/utils": 5,
        "jsdom/lib/jsdom/utils": 5,
      },
    ],
    4: [
      function (t, e, i) {
        "use strict";
        (i.byteLength = function (t) {
          var e = h(t),
            i = e[0],
            r = e[1];
          return (3 * (i + r)) / 4 - r;
        }),
          (i.toByteArray = function (t) {
            var e,
              i,
              r = h(t),
              s = r[0],
              a = r[1],
              l = new o(
                (function (t, e, i) {
                  return (3 * (e + i)) / 4 - i;
                })(0, s, a)
              ),
              c = 0,
              u = a > 0 ? s - 4 : s;
            for (i = 0; i < u; i += 4)
              (e =
                (n[t.charCodeAt(i)] << 18) |
                (n[t.charCodeAt(i + 1)] << 12) |
                (n[t.charCodeAt(i + 2)] << 6) |
                n[t.charCodeAt(i + 3)]),
                (l[c++] = (e >> 16) & 255),
                (l[c++] = (e >> 8) & 255),
                (l[c++] = 255 & e);
            2 === a &&
              ((e = (n[t.charCodeAt(i)] << 2) | (n[t.charCodeAt(i + 1)] >> 4)),
              (l[c++] = 255 & e));
            1 === a &&
              ((e =
                (n[t.charCodeAt(i)] << 10) |
                (n[t.charCodeAt(i + 1)] << 4) |
                (n[t.charCodeAt(i + 2)] >> 2)),
              (l[c++] = (e >> 8) & 255),
              (l[c++] = 255 & e));
            return l;
          }),
          (i.fromByteArray = function (t) {
            for (
              var e,
                i = t.length,
                n = i % 3,
                o = [],
                s = 16383,
                a = 0,
                l = i - n;
              a < l;
              a += s
            )
              o.push(c(t, a, a + s > l ? l : a + s));
            1 === n
              ? ((e = t[i - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
              : 2 === n &&
                ((e = (t[i - 2] << 8) + t[i - 1]),
                o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
            return o.join("");
          });
        for (
          var r = [],
            n = [],
            o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            s =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            a = 0,
            l = s.length;
          a < l;
          ++a
        )
          (r[a] = s[a]), (n[s.charCodeAt(a)] = a);
        function h(t) {
          var e = t.length;
          if (e % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var i = t.indexOf("=");
          return -1 === i && (i = e), [i, i === e ? 0 : 4 - (i % 4)];
        }
        function c(t, e, i) {
          for (var n, o, s = [], a = e; a < i; a += 3)
            (n =
              ((t[a] << 16) & 16711680) +
              ((t[a + 1] << 8) & 65280) +
              (255 & t[a + 2])),
              s.push(
                r[((o = n) >> 18) & 63] +
                  r[(o >> 12) & 63] +
                  r[(o >> 6) & 63] +
                  r[63 & o]
              );
          return s.join("");
        }
        (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
      },
      {},
    ],
    5: [function (t, e, i) {}, {}],
    6: [
      function (t, e, i) {
        (function (e) {
          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <https://feross.org>
           * @license  MIT
           */
          "use strict";
          var r = t("base64-js"),
            n = t("ieee754");
          (i.Buffer = e),
            (i.SlowBuffer = function (t) {
              +t != t && (t = 0);
              return e.alloc(+t);
            }),
            (i.INSPECT_MAX_BYTES = 50);
          var o = 2147483647;
          function s(t) {
            if (t > o)
              throw new RangeError(
                'The value "' + t + '" is invalid for option "size"'
              );
            var i = new Uint8Array(t);
            return (i.__proto__ = e.prototype), i;
          }
          function e(t, e, i) {
            if ("number" == typeof t) {
              if ("string" == typeof e)
                throw new TypeError(
                  'The "string" argument must be of type string. Received type number'
                );
              return h(t);
            }
            return a(t, e, i);
          }
          function a(t, i, r) {
            if ("string" == typeof t)
              return (function (t, i) {
                ("string" == typeof i && "" !== i) || (i = "utf8");
                if (!e.isEncoding(i))
                  throw new TypeError("Unknown encoding: " + i);
                var r = 0 | f(t, i),
                  n = s(r),
                  o = n.write(t, i);
                o !== r && (n = n.slice(0, o));
                return n;
              })(t, i);
            if (ArrayBuffer.isView(t)) return c(t);
            if (null == t)
              throw TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof t
              );
            if (U(t, ArrayBuffer) || (t && U(t.buffer, ArrayBuffer)))
              return (function (t, i, r) {
                if (i < 0 || t.byteLength < i)
                  throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < i + (r || 0))
                  throw new RangeError('"length" is outside of buffer bounds');
                var n;
                n =
                  void 0 === i && void 0 === r
                    ? new Uint8Array(t)
                    : void 0 === r
                    ? new Uint8Array(t, i)
                    : new Uint8Array(t, i, r);
                return (n.__proto__ = e.prototype), n;
              })(t, i, r);
            if ("number" == typeof t)
              throw new TypeError(
                'The "value" argument must not be of type number. Received type number'
              );
            var n = t.valueOf && t.valueOf();
            if (null != n && n !== t) return e.from(n, i, r);
            var o = (function (t) {
              if (e.isBuffer(t)) {
                var i = 0 | u(t.length),
                  r = s(i);
                return 0 === r.length || t.copy(r, 0, 0, i), r;
              }
              if (void 0 !== t.length)
                return "number" != typeof t.length || X(t.length) ? s(0) : c(t);
              if ("Buffer" === t.type && Array.isArray(t.data))
                return c(t.data);
            })(t);
            if (o) return o;
            if (
              "undefined" != typeof Symbol &&
              null != Symbol.toPrimitive &&
              "function" == typeof t[Symbol.toPrimitive]
            )
              return e.from(t[Symbol.toPrimitive]("string"), i, r);
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof t
            );
          }
          function l(t) {
            if ("number" != typeof t)
              throw new TypeError('"size" argument must be of type number');
            if (t < 0)
              throw new RangeError(
                'The value "' + t + '" is invalid for option "size"'
              );
          }
          function h(t) {
            return l(t), s(t < 0 ? 0 : 0 | u(t));
          }
          function c(t) {
            for (
              var e = t.length < 0 ? 0 : 0 | u(t.length), i = s(e), r = 0;
              r < e;
              r += 1
            )
              i[r] = 255 & t[r];
            return i;
          }
          function u(t) {
            if (t >= o)
              throw new RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x" +
                  o.toString(16) +
                  " bytes"
              );
            return 0 | t;
          }
          function f(t, i) {
            if (e.isBuffer(t)) return t.length;
            if (ArrayBuffer.isView(t) || U(t, ArrayBuffer)) return t.byteLength;
            if ("string" != typeof t)
              throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof t
              );
            var r = t.length,
              n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            for (var o = !1; ; )
              switch (i) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r;
                case "utf8":
                case "utf-8":
                  return R(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r;
                case "hex":
                  return r >>> 1;
                case "base64":
                  return B(t).length;
                default:
                  if (o) return n ? -1 : R(t).length;
                  (i = ("" + i).toLowerCase()), (o = !0);
              }
          }
          function d(t, e, i) {
            var r = !1;
            if (((void 0 === e || e < 0) && (e = 0), e > this.length))
              return "";
            if (
              ((void 0 === i || i > this.length) && (i = this.length), i <= 0)
            )
              return "";
            if ((i >>>= 0) <= (e >>>= 0)) return "";
            for (t || (t = "utf8"); ; )
              switch (t) {
                case "hex":
                  return E(this, e, i);
                case "utf8":
                case "utf-8":
                  return S(this, e, i);
                case "ascii":
                  return O(this, e, i);
                case "latin1":
                case "binary":
                  return k(this, e, i);
                case "base64":
                  return w(this, e, i);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return A(this, e, i);
                default:
                  if (r) throw new TypeError("Unknown encoding: " + t);
                  (t = (t + "").toLowerCase()), (r = !0);
              }
          }
          function p(t, e, i) {
            var r = t[e];
            (t[e] = t[i]), (t[i] = r);
          }
          function g(t, i, r, n, o) {
            if (0 === t.length) return -1;
            if (
              ("string" == typeof r
                ? ((n = r), (r = 0))
                : r > 2147483647
                ? (r = 2147483647)
                : r < -2147483648 && (r = -2147483648),
              X((r = +r)) && (r = o ? 0 : t.length - 1),
              r < 0 && (r = t.length + r),
              r >= t.length)
            ) {
              if (o) return -1;
              r = t.length - 1;
            } else if (r < 0) {
              if (!o) return -1;
              r = 0;
            }
            if (("string" == typeof i && (i = e.from(i, n)), e.isBuffer(i)))
              return 0 === i.length ? -1 : v(t, i, r, n, o);
            if ("number" == typeof i)
              return (
                (i &= 255),
                "function" == typeof Uint8Array.prototype.indexOf
                  ? o
                    ? Uint8Array.prototype.indexOf.call(t, i, r)
                    : Uint8Array.prototype.lastIndexOf.call(t, i, r)
                  : v(t, [i], r, n, o)
              );
            throw new TypeError("val must be string, number or Buffer");
          }
          function v(t, e, i, r, n) {
            var o,
              s = 1,
              a = t.length,
              l = e.length;
            if (
              void 0 !== r &&
              ("ucs2" === (r = String(r).toLowerCase()) ||
                "ucs-2" === r ||
                "utf16le" === r ||
                "utf-16le" === r)
            ) {
              if (t.length < 2 || e.length < 2) return -1;
              (s = 2), (a /= 2), (l /= 2), (i /= 2);
            }
            function h(t, e) {
              return 1 === s ? t[e] : t.readUInt16BE(e * s);
            }
            if (n) {
              var c = -1;
              for (o = i; o < a; o++)
                if (h(t, o) === h(e, -1 === c ? 0 : o - c)) {
                  if ((-1 === c && (c = o), o - c + 1 === l)) return c * s;
                } else -1 !== c && (o -= o - c), (c = -1);
            } else
              for (i + l > a && (i = a - l), o = i; o >= 0; o--) {
                for (var u = !0, f = 0; f < l; f++)
                  if (h(t, o + f) !== h(e, f)) {
                    u = !1;
                    break;
                  }
                if (u) return o;
              }
            return -1;
          }
          function m(t, e, i, r) {
            i = Number(i) || 0;
            var n = t.length - i;
            r ? (r = Number(r)) > n && (r = n) : (r = n);
            var o = e.length;
            r > o / 2 && (r = o / 2);
            for (var s = 0; s < r; ++s) {
              var a = parseInt(e.substr(2 * s, 2), 16);
              if (X(a)) return s;
              t[i + s] = a;
            }
            return s;
          }
          function y(t, e, i, r) {
            return z(R(e, t.length - i), t, i, r);
          }
          function _(t, e, i, r) {
            return z(
              (function (t) {
                for (var e = [], i = 0; i < t.length; ++i)
                  e.push(255 & t.charCodeAt(i));
                return e;
              })(e),
              t,
              i,
              r
            );
          }
          function b(t, e, i, r) {
            return _(t, e, i, r);
          }
          function x(t, e, i, r) {
            return z(B(e), t, i, r);
          }
          function C(t, e, i, r) {
            return z(
              (function (t, e) {
                for (
                  var i, r, n, o = [], s = 0;
                  s < t.length && !((e -= 2) < 0);
                  ++s
                )
                  (r = (i = t.charCodeAt(s)) >> 8),
                    (n = i % 256),
                    o.push(n),
                    o.push(r);
                return o;
              })(e, t.length - i),
              t,
              i,
              r
            );
          }
          function w(t, e, i) {
            return 0 === e && i === t.length
              ? r.fromByteArray(t)
              : r.fromByteArray(t.slice(e, i));
          }
          function S(t, e, i) {
            i = Math.min(t.length, i);
            for (var r = [], n = e; n < i; ) {
              var o,
                s,
                a,
                l,
                h = t[n],
                c = null,
                u = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
              if (n + u <= i)
                switch (u) {
                  case 1:
                    h < 128 && (c = h);
                    break;
                  case 2:
                    128 == (192 & (o = t[n + 1])) &&
                      (l = ((31 & h) << 6) | (63 & o)) > 127 &&
                      (c = l);
                    break;
                  case 3:
                    (o = t[n + 1]),
                      (s = t[n + 2]),
                      128 == (192 & o) &&
                        128 == (192 & s) &&
                        (l = ((15 & h) << 12) | ((63 & o) << 6) | (63 & s)) >
                          2047 &&
                        (l < 55296 || l > 57343) &&
                        (c = l);
                    break;
                  case 4:
                    (o = t[n + 1]),
                      (s = t[n + 2]),
                      (a = t[n + 3]),
                      128 == (192 & o) &&
                        128 == (192 & s) &&
                        128 == (192 & a) &&
                        (l =
                          ((15 & h) << 18) |
                          ((63 & o) << 12) |
                          ((63 & s) << 6) |
                          (63 & a)) > 65535 &&
                        l < 1114112 &&
                        (c = l);
                }
              null === c
                ? ((c = 65533), (u = 1))
                : c > 65535 &&
                  ((c -= 65536),
                  r.push(((c >>> 10) & 1023) | 55296),
                  (c = 56320 | (1023 & c))),
                r.push(c),
                (n += u);
            }
            return (function (t) {
              var e = t.length;
              if (e <= T) return String.fromCharCode.apply(String, t);
              var i = "",
                r = 0;
              for (; r < e; )
                i += String.fromCharCode.apply(String, t.slice(r, (r += T)));
              return i;
            })(r);
          }
          (i.kMaxLength = o),
            (e.TYPED_ARRAY_SUPPORT = (function () {
              try {
                var t = new Uint8Array(1);
                return (
                  (t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function () {
                      return 42;
                    },
                  }),
                  42 === t.foo()
                );
              } catch (t) {
                return !1;
              }
            })()),
            e.TYPED_ARRAY_SUPPORT ||
              "undefined" == typeof console ||
              "function" != typeof console.error ||
              console.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
              ),
            Object.defineProperty(e.prototype, "parent", {
              enumerable: !0,
              get: function () {
                if (e.isBuffer(this)) return this.buffer;
              },
            }),
            Object.defineProperty(e.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (e.isBuffer(this)) return this.byteOffset;
              },
            }),
            "undefined" != typeof Symbol &&
              null != Symbol.species &&
              e[Symbol.species] === e &&
              Object.defineProperty(e, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1,
              }),
            (e.poolSize = 8192),
            (e.from = function (t, e, i) {
              return a(t, e, i);
            }),
            (e.prototype.__proto__ = Uint8Array.prototype),
            (e.__proto__ = Uint8Array),
            (e.alloc = function (t, e, i) {
              return (function (t, e, i) {
                return (
                  l(t),
                  t <= 0
                    ? s(t)
                    : void 0 !== e
                    ? "string" == typeof i
                      ? s(t).fill(e, i)
                      : s(t).fill(e)
                    : s(t)
                );
              })(t, e, i);
            }),
            (e.allocUnsafe = function (t) {
              return h(t);
            }),
            (e.allocUnsafeSlow = function (t) {
              return h(t);
            }),
            (e.isBuffer = function (t) {
              return null != t && !0 === t._isBuffer && t !== e.prototype;
            }),
            (e.compare = function (t, i) {
              if (
                (U(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                U(i, Uint8Array) && (i = e.from(i, i.offset, i.byteLength)),
                !e.isBuffer(t) || !e.isBuffer(i))
              )
                throw new TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                );
              if (t === i) return 0;
              for (
                var r = t.length, n = i.length, o = 0, s = Math.min(r, n);
                o < s;
                ++o
              )
                if (t[o] !== i[o]) {
                  (r = t[o]), (n = i[o]);
                  break;
                }
              return r < n ? -1 : n < r ? 1 : 0;
            }),
            (e.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (e.concat = function (t, i) {
              if (!Array.isArray(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              if (0 === t.length) return e.alloc(0);
              var r;
              if (void 0 === i)
                for (i = 0, r = 0; r < t.length; ++r) i += t[r].length;
              var n = e.allocUnsafe(i),
                o = 0;
              for (r = 0; r < t.length; ++r) {
                var s = t[r];
                if ((U(s, Uint8Array) && (s = e.from(s)), !e.isBuffer(s)))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                s.copy(n, o), (o += s.length);
              }
              return n;
            }),
            (e.byteLength = f),
            (e.prototype._isBuffer = !0),
            (e.prototype.swap16 = function () {
              var t = this.length;
              if (t % 2 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 16-bits"
                );
              for (var e = 0; e < t; e += 2) p(this, e, e + 1);
              return this;
            }),
            (e.prototype.swap32 = function () {
              var t = this.length;
              if (t % 4 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 32-bits"
                );
              for (var e = 0; e < t; e += 4)
                p(this, e, e + 3), p(this, e + 1, e + 2);
              return this;
            }),
            (e.prototype.swap64 = function () {
              var t = this.length;
              if (t % 8 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 64-bits"
                );
              for (var e = 0; e < t; e += 8)
                p(this, e, e + 7),
                  p(this, e + 1, e + 6),
                  p(this, e + 2, e + 5),
                  p(this, e + 3, e + 4);
              return this;
            }),
            (e.prototype.toString = function () {
              var t = this.length;
              return 0 === t
                ? ""
                : 0 === arguments.length
                ? S(this, 0, t)
                : d.apply(this, arguments);
            }),
            (e.prototype.toLocaleString = e.prototype.toString),
            (e.prototype.equals = function (t) {
              if (!e.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
              return this === t || 0 === e.compare(this, t);
            }),
            (e.prototype.inspect = function () {
              var t = "",
                e = i.INSPECT_MAX_BYTES;
              return (
                (t = this.toString("hex", 0, e)
                  .replace(/(.{2})/g, "$1 ")
                  .trim()),
                this.length > e && (t += " ... "),
                "<Buffer " + t + ">"
              );
            }),
            (e.prototype.compare = function (t, i, r, n, o) {
              if (
                (U(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                !e.isBuffer(t))
              )
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof t
                );
              if (
                (void 0 === i && (i = 0),
                void 0 === r && (r = t ? t.length : 0),
                void 0 === n && (n = 0),
                void 0 === o && (o = this.length),
                i < 0 || r > t.length || n < 0 || o > this.length)
              )
                throw new RangeError("out of range index");
              if (n >= o && i >= r) return 0;
              if (n >= o) return -1;
              if (i >= r) return 1;
              if (this === t) return 0;
              for (
                var s = (o >>>= 0) - (n >>>= 0),
                  a = (r >>>= 0) - (i >>>= 0),
                  l = Math.min(s, a),
                  h = this.slice(n, o),
                  c = t.slice(i, r),
                  u = 0;
                u < l;
                ++u
              )
                if (h[u] !== c[u]) {
                  (s = h[u]), (a = c[u]);
                  break;
                }
              return s < a ? -1 : a < s ? 1 : 0;
            }),
            (e.prototype.includes = function (t, e, i) {
              return -1 !== this.indexOf(t, e, i);
            }),
            (e.prototype.indexOf = function (t, e, i) {
              return g(this, t, e, i, !0);
            }),
            (e.prototype.lastIndexOf = function (t, e, i) {
              return g(this, t, e, i, !1);
            }),
            (e.prototype.write = function (t, e, i, r) {
              if (void 0 === e) (r = "utf8"), (i = this.length), (e = 0);
              else if (void 0 === i && "string" == typeof e)
                (r = e), (i = this.length), (e = 0);
              else {
                if (!isFinite(e))
                  throw new Error(
                    "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                  );
                (e >>>= 0),
                  isFinite(i)
                    ? ((i >>>= 0), void 0 === r && (r = "utf8"))
                    : ((r = i), (i = void 0));
              }
              var n = this.length - e;
              if (
                ((void 0 === i || i > n) && (i = n),
                (t.length > 0 && (i < 0 || e < 0)) || e > this.length)
              )
                throw new RangeError("Attempt to write outside buffer bounds");
              r || (r = "utf8");
              for (var o = !1; ; )
                switch (r) {
                  case "hex":
                    return m(this, t, e, i);
                  case "utf8":
                  case "utf-8":
                    return y(this, t, e, i);
                  case "ascii":
                    return _(this, t, e, i);
                  case "latin1":
                  case "binary":
                    return b(this, t, e, i);
                  case "base64":
                    return x(this, t, e, i);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return C(this, t, e, i);
                  default:
                    if (o) throw new TypeError("Unknown encoding: " + r);
                    (r = ("" + r).toLowerCase()), (o = !0);
                }
            }),
            (e.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            });
          var T = 4096;
          function O(t, e, i) {
            var r = "";
            i = Math.min(t.length, i);
            for (var n = e; n < i; ++n) r += String.fromCharCode(127 & t[n]);
            return r;
          }
          function k(t, e, i) {
            var r = "";
            i = Math.min(t.length, i);
            for (var n = e; n < i; ++n) r += String.fromCharCode(t[n]);
            return r;
          }
          function E(t, e, i) {
            var r = t.length;
            (!e || e < 0) && (e = 0), (!i || i < 0 || i > r) && (i = r);
            for (var n = "", o = e; o < i; ++o) n += L(t[o]);
            return n;
          }
          function A(t, e, i) {
            for (var r = t.slice(e, i), n = "", o = 0; o < r.length; o += 2)
              n += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return n;
          }
          function F(t, e, i) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > i)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function D(t, i, r, n, o, s) {
            if (!e.isBuffer(t))
              throw new TypeError(
                '"buffer" argument must be a Buffer instance'
              );
            if (i > o || i < s)
              throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw new RangeError("Index out of range");
          }
          function P(t, e, i, r, n, o) {
            if (i + r > t.length) throw new RangeError("Index out of range");
            if (i < 0) throw new RangeError("Index out of range");
          }
          function M(t, e, i, r, o) {
            return (
              (e = +e),
              (i >>>= 0),
              o || P(t, 0, i, 4),
              n.write(t, e, i, r, 23, 4),
              i + 4
            );
          }
          function j(t, e, i, r, o) {
            return (
              (e = +e),
              (i >>>= 0),
              o || P(t, 0, i, 8),
              n.write(t, e, i, r, 52, 8),
              i + 8
            );
          }
          (e.prototype.slice = function (t, i) {
            var r = this.length;
            (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
              (i = void 0 === i ? r : ~~i) < 0
                ? (i += r) < 0 && (i = 0)
                : i > r && (i = r),
              i < t && (i = t);
            var n = this.subarray(t, i);
            return (n.__proto__ = e.prototype), n;
          }),
            (e.prototype.readUIntLE = function (t, e, i) {
              (t >>>= 0), (e >>>= 0), i || F(t, e, this.length);
              for (var r = this[t], n = 1, o = 0; ++o < e && (n *= 256); )
                r += this[t + o] * n;
              return r;
            }),
            (e.prototype.readUIntBE = function (t, e, i) {
              (t >>>= 0), (e >>>= 0), i || F(t, e, this.length);
              for (var r = this[t + --e], n = 1; e > 0 && (n *= 256); )
                r += this[t + --e] * n;
              return r;
            }),
            (e.prototype.readUInt8 = function (t, e) {
              return (t >>>= 0), e || F(t, 1, this.length), this[t];
            }),
            (e.prototype.readUInt16LE = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 2, this.length),
                this[t] | (this[t + 1] << 8)
              );
            }),
            (e.prototype.readUInt16BE = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 2, this.length),
                (this[t] << 8) | this[t + 1]
              );
            }),
            (e.prototype.readUInt32LE = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 4, this.length),
                (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                  16777216 * this[t + 3]
              );
            }),
            (e.prototype.readUInt32BE = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 4, this.length),
                16777216 * this[t] +
                  ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
              );
            }),
            (e.prototype.readIntLE = function (t, e, i) {
              (t >>>= 0), (e >>>= 0), i || F(t, e, this.length);
              for (var r = this[t], n = 1, o = 0; ++o < e && (n *= 256); )
                r += this[t + o] * n;
              return r >= (n *= 128) && (r -= Math.pow(2, 8 * e)), r;
            }),
            (e.prototype.readIntBE = function (t, e, i) {
              (t >>>= 0), (e >>>= 0), i || F(t, e, this.length);
              for (var r = e, n = 1, o = this[t + --r]; r > 0 && (n *= 256); )
                o += this[t + --r] * n;
              return o >= (n *= 128) && (o -= Math.pow(2, 8 * e)), o;
            }),
            (e.prototype.readInt8 = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
              );
            }),
            (e.prototype.readInt16LE = function (t, e) {
              (t >>>= 0), e || F(t, 2, this.length);
              var i = this[t] | (this[t + 1] << 8);
              return 32768 & i ? 4294901760 | i : i;
            }),
            (e.prototype.readInt16BE = function (t, e) {
              (t >>>= 0), e || F(t, 2, this.length);
              var i = this[t + 1] | (this[t] << 8);
              return 32768 & i ? 4294901760 | i : i;
            }),
            (e.prototype.readInt32LE = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 4, this.length),
                this[t] |
                  (this[t + 1] << 8) |
                  (this[t + 2] << 16) |
                  (this[t + 3] << 24)
              );
            }),
            (e.prototype.readInt32BE = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 4, this.length),
                (this[t] << 24) |
                  (this[t + 1] << 16) |
                  (this[t + 2] << 8) |
                  this[t + 3]
              );
            }),
            (e.prototype.readFloatLE = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 4, this.length),
                n.read(this, t, !0, 23, 4)
              );
            }),
            (e.prototype.readFloatBE = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 4, this.length),
                n.read(this, t, !1, 23, 4)
              );
            }),
            (e.prototype.readDoubleLE = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 8, this.length),
                n.read(this, t, !0, 52, 8)
              );
            }),
            (e.prototype.readDoubleBE = function (t, e) {
              return (
                (t >>>= 0),
                e || F(t, 8, this.length),
                n.read(this, t, !1, 52, 8)
              );
            }),
            (e.prototype.writeUIntLE = function (t, e, i, r) {
              ((t = +t), (e >>>= 0), (i >>>= 0), r) ||
                D(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
              var n = 1,
                o = 0;
              for (this[e] = 255 & t; ++o < i && (n *= 256); )
                this[e + o] = (t / n) & 255;
              return e + i;
            }),
            (e.prototype.writeUIntBE = function (t, e, i, r) {
              ((t = +t), (e >>>= 0), (i >>>= 0), r) ||
                D(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
              var n = i - 1,
                o = 1;
              for (this[e + n] = 255 & t; --n >= 0 && (o *= 256); )
                this[e + n] = (t / o) & 255;
              return e + i;
            }),
            (e.prototype.writeUInt8 = function (t, e, i) {
              return (
                (t = +t),
                (e >>>= 0),
                i || D(this, t, e, 1, 255, 0),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (e.prototype.writeUInt16LE = function (t, e, i) {
              return (
                (t = +t),
                (e >>>= 0),
                i || D(this, t, e, 2, 65535, 0),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
            (e.prototype.writeUInt16BE = function (t, e, i) {
              return (
                (t = +t),
                (e >>>= 0),
                i || D(this, t, e, 2, 65535, 0),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
            (e.prototype.writeUInt32LE = function (t, e, i) {
              return (
                (t = +t),
                (e >>>= 0),
                i || D(this, t, e, 4, 4294967295, 0),
                (this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t),
                e + 4
              );
            }),
            (e.prototype.writeUInt32BE = function (t, e, i) {
              return (
                (t = +t),
                (e >>>= 0),
                i || D(this, t, e, 4, 4294967295, 0),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (e.prototype.writeIntLE = function (t, e, i, r) {
              if (((t = +t), (e >>>= 0), !r)) {
                var n = Math.pow(2, 8 * i - 1);
                D(this, t, e, i, n - 1, -n);
              }
              var o = 0,
                s = 1,
                a = 0;
              for (this[e] = 255 & t; ++o < i && (s *= 256); )
                t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                  (this[e + o] = (((t / s) >> 0) - a) & 255);
              return e + i;
            }),
            (e.prototype.writeIntBE = function (t, e, i, r) {
              if (((t = +t), (e >>>= 0), !r)) {
                var n = Math.pow(2, 8 * i - 1);
                D(this, t, e, i, n - 1, -n);
              }
              var o = i - 1,
                s = 1,
                a = 0;
              for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
                t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                  (this[e + o] = (((t / s) >> 0) - a) & 255);
              return e + i;
            }),
            (e.prototype.writeInt8 = function (t, e, i) {
              return (
                (t = +t),
                (e >>>= 0),
                i || D(this, t, e, 1, 127, -128),
                t < 0 && (t = 255 + t + 1),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (e.prototype.writeInt16LE = function (t, e, i) {
              return (
                (t = +t),
                (e >>>= 0),
                i || D(this, t, e, 2, 32767, -32768),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
            (e.prototype.writeInt16BE = function (t, e, i) {
              return (
                (t = +t),
                (e >>>= 0),
                i || D(this, t, e, 2, 32767, -32768),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
            (e.prototype.writeInt32LE = function (t, e, i) {
              return (
                (t = +t),
                (e >>>= 0),
                i || D(this, t, e, 4, 2147483647, -2147483648),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24),
                e + 4
              );
            }),
            (e.prototype.writeInt32BE = function (t, e, i) {
              return (
                (t = +t),
                (e >>>= 0),
                i || D(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (e.prototype.writeFloatLE = function (t, e, i) {
              return M(this, t, e, !0, i);
            }),
            (e.prototype.writeFloatBE = function (t, e, i) {
              return M(this, t, e, !1, i);
            }),
            (e.prototype.writeDoubleLE = function (t, e, i) {
              return j(this, t, e, !0, i);
            }),
            (e.prototype.writeDoubleBE = function (t, e, i) {
              return j(this, t, e, !1, i);
            }),
            (e.prototype.copy = function (t, i, r, n) {
              if (!e.isBuffer(t))
                throw new TypeError("argument should be a Buffer");
              if (
                (r || (r = 0),
                n || 0 === n || (n = this.length),
                i >= t.length && (i = t.length),
                i || (i = 0),
                n > 0 && n < r && (n = r),
                n === r)
              )
                return 0;
              if (0 === t.length || 0 === this.length) return 0;
              if (i < 0) throw new RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length)
                throw new RangeError("Index out of range");
              if (n < 0) throw new RangeError("sourceEnd out of bounds");
              n > this.length && (n = this.length),
                t.length - i < n - r && (n = t.length - i + r);
              var o = n - r;
              if (
                this === t &&
                "function" == typeof Uint8Array.prototype.copyWithin
              )
                this.copyWithin(i, r, n);
              else if (this === t && r < i && i < n)
                for (var s = o - 1; s >= 0; --s) t[s + i] = this[s + r];
              else Uint8Array.prototype.set.call(t, this.subarray(r, n), i);
              return o;
            }),
            (e.prototype.fill = function (t, i, r, n) {
              if ("string" == typeof t) {
                if (
                  ("string" == typeof i
                    ? ((n = i), (i = 0), (r = this.length))
                    : "string" == typeof r && ((n = r), (r = this.length)),
                  void 0 !== n && "string" != typeof n)
                )
                  throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !e.isEncoding(n))
                  throw new TypeError("Unknown encoding: " + n);
                if (1 === t.length) {
                  var o = t.charCodeAt(0);
                  (("utf8" === n && o < 128) || "latin1" === n) && (t = o);
                }
              } else "number" == typeof t && (t &= 255);
              if (i < 0 || this.length < i || this.length < r)
                throw new RangeError("Out of range index");
              if (r <= i) return this;
              var s;
              if (
                ((i >>>= 0),
                (r = void 0 === r ? this.length : r >>> 0),
                t || (t = 0),
                "number" == typeof t)
              )
                for (s = i; s < r; ++s) this[s] = t;
              else {
                var a = e.isBuffer(t) ? t : e.from(t, n),
                  l = a.length;
                if (0 === l)
                  throw new TypeError(
                    'The value "' + t + '" is invalid for argument "value"'
                  );
                for (s = 0; s < r - i; ++s) this[s + i] = a[s % l];
              }
              return this;
            });
          var I = /[^+/0-9A-Za-z-_]/g;
          function L(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16);
          }
          function R(t, e) {
            var i;
            e = e || 1 / 0;
            for (var r = t.length, n = null, o = [], s = 0; s < r; ++s) {
              if ((i = t.charCodeAt(s)) > 55295 && i < 57344) {
                if (!n) {
                  if (i > 56319) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (s + 1 === r) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  n = i;
                  continue;
                }
                if (i < 56320) {
                  (e -= 3) > -1 && o.push(239, 191, 189), (n = i);
                  continue;
                }
                i = 65536 + (((n - 55296) << 10) | (i - 56320));
              } else n && (e -= 3) > -1 && o.push(239, 191, 189);
              if (((n = null), i < 128)) {
                if ((e -= 1) < 0) break;
                o.push(i);
              } else if (i < 2048) {
                if ((e -= 2) < 0) break;
                o.push((i >> 6) | 192, (63 & i) | 128);
              } else if (i < 65536) {
                if ((e -= 3) < 0) break;
                o.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (63 & i) | 128);
              } else {
                if (!(i < 1114112)) throw new Error("Invalid code point");
                if ((e -= 4) < 0) break;
                o.push(
                  (i >> 18) | 240,
                  ((i >> 12) & 63) | 128,
                  ((i >> 6) & 63) | 128,
                  (63 & i) | 128
                );
              }
            }
            return o;
          }
          function B(t) {
            return r.toByteArray(
              (function (t) {
                if (
                  (t = (t = t.split("=")[0]).trim().replace(I, "")).length < 2
                )
                  return "";
                for (; t.length % 4 != 0; ) t += "=";
                return t;
              })(t)
            );
          }
          function z(t, e, i, r) {
            for (var n = 0; n < r && !(n + i >= e.length || n >= t.length); ++n)
              e[n + i] = t[n];
            return n;
          }
          function U(t, e) {
            return (
              t instanceof e ||
              (null != t &&
                null != t.constructor &&
                null != t.constructor.name &&
                t.constructor.name === e.name)
            );
          }
          function X(t) {
            return t != t;
          }
        }.call(this, t("buffer").Buffer));
      },
      { "base64-js": 4, buffer: 6, ieee754: 7 },
    ],
    7: [
      function (t, e, i) {
        (i.read = function (t, e, i, r, n) {
          var o,
            s,
            a = 8 * n - r - 1,
            l = (1 << a) - 1,
            h = l >> 1,
            c = -7,
            u = i ? n - 1 : 0,
            f = i ? -1 : 1,
            d = t[e + u];
          for (
            u += f, o = d & ((1 << -c) - 1), d >>= -c, c += a;
            c > 0;
            o = 256 * o + t[e + u], u += f, c -= 8
          );
          for (
            s = o & ((1 << -c) - 1), o >>= -c, c += r;
            c > 0;
            s = 256 * s + t[e + u], u += f, c -= 8
          );
          if (0 === o) o = 1 - h;
          else {
            if (o === l) return s ? NaN : (1 / 0) * (d ? -1 : 1);
            (s += Math.pow(2, r)), (o -= h);
          }
          return (d ? -1 : 1) * s * Math.pow(2, o - r);
        }),
          (i.write = function (t, e, i, r, n, o) {
            var s,
              a,
              l,
              h = 8 * o - n - 1,
              c = (1 << h) - 1,
              u = c >> 1,
              f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              d = r ? 0 : o - 1,
              p = r ? 1 : -1,
              g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
            for (
              e = Math.abs(e),
                isNaN(e) || e === 1 / 0
                  ? ((a = isNaN(e) ? 1 : 0), (s = c))
                  : ((s = Math.floor(Math.log(e) / Math.LN2)),
                    e * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                    (e += s + u >= 1 ? f / l : f * Math.pow(2, 1 - u)) * l >=
                      2 && (s++, (l /= 2)),
                    s + u >= c
                      ? ((a = 0), (s = c))
                      : s + u >= 1
                      ? ((a = (e * l - 1) * Math.pow(2, n)), (s += u))
                      : ((a = e * Math.pow(2, u - 1) * Math.pow(2, n)),
                        (s = 0)));
              n >= 8;
              t[i + d] = 255 & a, d += p, a /= 256, n -= 8
            );
            for (
              s = (s << n) | a, h += n;
              h > 0;
              t[i + d] = 255 & s, d += p, s /= 256, h -= 8
            );
            t[i + d - p] |= 128 * g;
          });
      },
      {},
    ],
  },
  {},
  [1]
);
