//Sun Jun 30 2024 10:20:08 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x34b85e = _0x2c04a3("中国联通"),
  _0x2114ab = require("got"),
  _0x3a7350 = require("crypto-js"),
  {
    CookieJar: _0x4cc577
  } = require("tough-cookie"),
  _0x2fd4d5 = "chinaUnicom",
  _0x222279 = ["\n", "&", "@"],
  _0x24b919 = [_0x2fd4d5 + "Cookie"],
  _0x20c3e2 = 50000,
  _0x56c9bb = 3;
const _0x3571a1 = 1.1,
  _0x49bf4b = "chinaUnicom",
  _0x560207 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x46b71a = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x49bf4b + ".json",
  _0xc1e2df = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@10.0300}",
  _0x3b6d33 = 5,
  _0x27bbfc = 13,
  _0x35f500 = 1000,
  _0xb62bbf = 3600000,
  _0x2d9204 = 100,
  _0xc56515 = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x677dbe = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0xf39416 = "10000002",
  _0x305235 = "7k1HcDL8RKvc",
  _0x3f9c3 = "update!@#1234567",
  _0x2213b9 = "16-Bytes--String",
  _0x1a5f2f = "225",
  _0x81e870 = "225",
  _0x3648b3 = "party",
  _0x5cba80 = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x31235b = "0123456789",
  _0x2b9451 = "qwertyuiopasdfghjklzxcvbnm",
  _0x1846fe = process.env[_0x2fd4d5 + "Uuid"] || _0x34b85e.randomUuid(),
  _0x5407b8 = [9, 10, 11, 12, 13],
  _0x444178 = 1000,
  _0x2b03ec = 5000,
  _0x48a7ac = "1001000003",
  _0x1838ac = "100002",
  _0x3ad7fa = "";
let _0x55b933 = ["WzaR7KkUJSpR gDh7Fy6mA==", "6", "7"];
const _0x5ea031 = {
  read: 6641,
  moonbox: 8
};
const _0x57c388 = 7;
function _0x14c6ce(_0x13f851, _0x51bd78, _0x307d87, _0xc9d4d6, _0x258a4c, _0x5de2f6) {
  return _0x3a7350[_0x13f851].encrypt(_0x3a7350.enc.Utf8.parse(_0xc9d4d6), _0x3a7350.enc.Utf8.parse(_0x258a4c), {
    mode: _0x3a7350.mode[_0x51bd78],
    padding: _0x3a7350.pad[_0x307d87],
    iv: _0x3a7350.enc.Utf8.parse(_0x5de2f6)
  }).ciphertext.toString(_0x3a7350.enc.Hex);
}
function _0x14d9da(_0x391ebf, _0x3e8aa6, _0x284902, _0xf6074e, _0x36a582, _0xbaeda) {
  return _0x3a7350[_0x391ebf].decrypt({
    ciphertext: _0x3a7350.enc.Hex.parse(_0xf6074e)
  }, _0x3a7350.enc.Utf8.parse(_0x36a582), {
    mode: _0x3a7350.mode[_0x3e8aa6],
    padding: _0x3a7350.pad[_0x284902],
    iv: _0x3a7350.enc.Utf8.parse(_0xbaeda)
  }).toString(_0x3a7350.enc.Utf8);
}
class _0x2769ac {
  constructor() {
    this.index = _0x34b85e.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x4be4de = {
      limit: 0
    };
    const _0x407922 = {
      Connection: "keep-alive"
    };
    const _0x910212 = {
      retry: _0x4be4de,
      timeout: _0x20c3e2,
      followRedirect: false,
      headers: _0x407922
    };
    this.got = _0x2114ab.extend(_0x910212);
  }
  log(_0x5c305f, _0xaffb74 = {}) {
    var _0x289d40 = "",
      _0x4cf950 = _0x34b85e.userCount.toString().length;
    if (this.index) {
      _0x289d40 += "账号[" + _0x34b85e.padStr(this.index, _0x4cf950) + "]";
    }
    if (this.name) {
      _0x289d40 += "[" + this.name + "]";
    }
    _0x34b85e.log(_0x289d40 + _0x5c305f, _0xaffb74);
  }
  set_cookie(_0x38e63b, _0x55c9dc, _0x2753f2, _0x5814f3, _0x42248a = {}) {
    this.cookieJar.setCookieSync(_0x38e63b + "=" + _0x55c9dc + "; Domain=" + _0x2753f2 + ";", "" + _0x5814f3);
  }
  async request(_0x295f73) {
    const _0x1bbf1e = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x546206 = ["TimeoutError"];
    var _0x4820e2 = null,
      _0x3a87d5 = 0,
      _0x1376bb = _0x295f73.fn || _0x295f73.url;
    _0x295f73.method = _0x295f73?.["method"]?.["toUpperCase"]() || "GET";
    let _0x2a5c9b;
    while (_0x3a87d5 < _0x56c9bb) {
      try {
        _0x3a87d5++;
        _0x2a5c9b = null;
        let _0x531d3b = null,
          _0x154d85 = _0x295f73?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x20c3e2,
          _0x331227 = false;
        await new Promise(async _0x3857a3 => {
          setTimeout(() => {
            _0x331227 = true;
            _0x3857a3();
          }, _0x154d85);
          await this.got(_0x295f73).then(_0x872455 => {
            _0x4820e2 = _0x872455;
          }, _0x430d0c => {
            _0x531d3b = _0x430d0c;
            _0x4820e2 = _0x430d0c.response;
            _0x2a5c9b = _0x531d3b?.["code"];
          });
          _0x3857a3();
        });
        if (_0x331227) {
          this.log("[" + _0x1376bb + "]请求超时(" + _0x154d85 / 1000 + "秒)，重试第" + _0x3a87d5 + "次");
        } else {
          if (_0x546206.includes(_0x531d3b?.["name"])) {
            this.log("[" + _0x1376bb + "]请求超时(" + _0x531d3b.code + ")，重试第" + _0x3a87d5 + "次");
          } else {
            if (_0x1bbf1e.includes(_0x531d3b?.["code"])) {
              this.log("[" + _0x1376bb + "]请求错误(" + _0x531d3b.code + ")，重试第" + _0x3a87d5 + "次");
            } else {
              let _0x52276d = _0x4820e2?.["statusCode"] || 999,
                _0x147dac = _0x52276d / 100 | 0;
              if (_0x147dac > 3) {
                this.log("请求[" + _0x1376bb + "]返回[" + _0x52276d + "]");
              }
              if (_0x147dac <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x1329ac) {
        _0x1329ac.name == "TimeoutError" ? this.log("[" + _0x1376bb + "]请求超时，重试第" + _0x3a87d5 + "次") : this.log("[" + _0x1376bb + "]请求错误(" + _0x1329ac.message + ")，重试第" + _0x3a87d5 + "次");
      }
    }
    if (_0x4820e2 == null) {
      return Promise.resolve({
        statusCode: _0x2a5c9b || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x512df2,
      headers: _0xb9fde0,
      body: _0x2bf458
    } = _0x4820e2;
    if (_0x2bf458) {
      try {
        _0x2bf458 = JSON.parse(_0x2bf458);
      } catch {}
    }
    const _0x3a0d24 = {
      statusCode: _0x512df2,
      headers: _0xb9fde0,
      result: _0x2bf458
    };
    return Promise.resolve(_0x3a0d24);
  }
}
let _0x3b2faf = new _0x2769ac();
class _0x56760c extends _0x2769ac {
  constructor(_0x3b81b2) {
    super();
    this.cookieJar = new _0x4cc577();
    const _0xbe4edc = {
      "User-Agent": _0xc1e2df
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0xbe4edc
    });
    let _0x342d5c = _0x3b81b2.split("#");
    this.token_online = _0x342d5c[0];
    this.unicomTokenId = _0x34b85e.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x34b85e.randomString(32, _0x31235b + _0x2b9451).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.need_read_moonbox = false;
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x227d88, _0xe2dcd9, _0x28bdfb = {}) {
    let _0x111d95 = _0x28bdfb?.["domain"] || "10010.com",
      _0x581c1e = _0x28bdfb?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x227d88, _0xe2dcd9, _0x111d95, _0x581c1e, _0x28bdfb);
  }
  get_bizchannelinfo() {
    const _0x4894c5 = {
      bizChannelCode: _0x81e870,
      disriBiz: _0x3648b3,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x250388 = JSON.stringify(_0x4894c5);
    return _0x250388;
  }
  get_epay_authinfo() {
    const _0x2f6ea4 = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x2f6ea4);
  }
  get_flmf_data(_0x5f30b7 = "welfareCenter") {
    const _0x48ee2b = {
      sid: this.flmf_sid,
      actcode: _0x5f30b7
    };
    return _0x48ee2b;
  }
  encode_woread(_0x3a9fce) {
    let _0x17ac67 = _0x14c6ce("AES", "CBC", "Pkcs7", JSON.stringify(_0x3a9fce), _0x3f9c3, _0x2213b9);
    return Buffer.from(_0x17ac67, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x34b85e.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_ltyp_sign_header(_0x4decef) {
    let _0x3ac273 = Date.now(),
      _0x35d797 = Math.floor(89999 * Math.random()) + 100000,
      _0x34bc21 = _0x1838ac,
      _0x27db39 = _0x3ad7fa,
      _0x24132d = _0x3a7350.MD5(_0x4decef + _0x3ac273 + _0x35d797 + _0x34bc21 + _0x27db39).toString();
    const _0x1a1337 = {
      key: _0x4decef,
      resTime: _0x3ac273,
      reqSeq: _0x35d797,
      channel: _0x34bc21,
      version: _0x27db39,
      sign: _0x24132d
    };
    return _0x1a1337;
  }
  async onLine(_0x4710e9 = {}) {
    let _0x6e219f = false;
    try {
      let _0x312c10 = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x34b85e.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0xc56515,
            version: "iphone_c@10.0300",
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x2dd465,
          statusCode: _0x2de8e7
        } = await this.request(_0x312c10),
        _0x2842ce = _0x34b85e.get(_0x2dd465, "code", _0x2de8e7);
      if (_0x2842ce == 0) {
        _0x6e219f = true;
        this.valid = true;
        this.mobile = _0x2dd465?.["desmobile"];
        this.name = _0x2dd465?.["desmobile"];
        this.ecs_token = _0x2dd465?.["ecs_token"];
        this.city = _0x2dd465?.["list"];
        this.log("登录成功");
      } else {
        this.valid = false;
        this.log("登录失败[" + _0x2842ce + "]");
      }
    } catch (_0x42c134) {
      console.log(_0x42c134);
    } finally {
      return _0x6e219f;
    }
  }
  async openPlatLineNew(_0x20e89e, _0x1cd64d = {}) {
    const _0x322196 = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0x32e715 = _0x322196;
    try {
      const _0x2c9ee5 = {
        to_url: _0x20e89e
      };
      const _0x52efe1 = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x2c9ee5
      };
      let {
        headers: _0x424957,
        statusCode: _0x5e5bef
      } = await this.request(_0x52efe1);
      if (_0x424957?.["location"]) {
        let _0x581cf1 = new URL(_0x424957.location),
          _0x55d419 = _0x581cf1.searchParams.get("type") || "02",
          _0x53e739 = _0x581cf1.searchParams.get("ticket");
        !_0x53e739 && this.log("获取ticket失败");
        const _0x209eff = {
          loc: _0x424957.location,
          ticket: _0x53e739,
          type: _0x55d419
        };
        _0x32e715 = _0x209eff;
      } else {
        this.log("获取ticket失败[" + _0x5e5bef + "]");
      }
    } catch (_0x4b9129) {
      console.log(_0x4b9129);
    } finally {
      return _0x32e715;
    }
  }
  async gettaskip(_0x174e47 = {}) {
    let _0x2214cb = _0x34b85e.randomString(32).toUpperCase();
    try {
      const _0x344f13 = {
        mobile: this.mobile,
        orderId: _0x2214cb
      };
      const _0x5cfce8 = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x344f13
      };
      await this.request(_0x5cfce8);
    } catch (_0x56e3f9) {
      console.log(_0x56e3f9);
    } finally {
      return _0x2214cb;
    }
  }
  async draw_28_queryChance(_0x6dbfda = {}) {
    try {
      const _0x2a6f7e = {
        fn: "draw_28_queryChance",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x13c493,
          statusCode: _0x439fe0
        } = await this.request(_0x2a6f7e),
        _0x51b1e8 = _0x34b85e.get(_0x13c493, "status", _0x439fe0);
      if (_0x51b1e8 == "0000") {
        let _0x2a3ddf = parseInt(_0x13c493?.["data"]?.["allRemainTimes"] || 0);
        this.log("28日五折日可以抽奖" + _0x2a3ddf + "次");
        let _0x416f11 = false;
        while (_0x2a3ddf-- > 0) {
          if (_0x416f11) {
            await _0x34b85e.wait(8000);
          }
          _0x416f11 = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x53f4ab = _0x13c493?.["message"] || _0x13c493?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x51b1e8 + "]: " + _0x53f4ab);
      }
    } catch (_0x1607d0) {
      console.log(_0x1607d0);
    }
  }
  async draw_28_lottery(_0x6d9195 = {}) {
    try {
      const _0x2fdf0f = {
        fn: "draw_28_lottery",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x2f3553,
          statusCode: _0x5bd688
        } = await this.request(_0x2fdf0f),
        _0x1c33dd = _0x34b85e.get(_0x2f3553, "status", _0x5bd688);
      if (_0x1c33dd == "0000") {
        let _0x4caa97 = _0x34b85e.get(_0x2f3553?.["data"], "code", -1);
        if (_0x2f3553?.["data"]?.["uuid"]) {
          await _0x34b85e.wait(2000);
          await this.draw_28_winningRecord(_0x2f3553.data.uuid);
        } else {
          let _0x5e3b91 = _0x2f3553?.["data"]?.["message"] || _0x2f3553?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x4caa97 + "]: " + _0x5e3b91);
        }
      } else {
        let _0x5d4768 = _0x2f3553?.["message"] || _0x2f3553?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x1c33dd + "]: " + _0x5d4768);
      }
    } catch (_0x348d1a) {
      console.log(_0x348d1a);
    }
  }
  async draw_28_winningRecord(_0x40b428, _0x106649 = {}) {
    try {
      const _0x109992 = {
        requestId: _0x40b428
      };
      const _0x152278 = {
        fn: "draw_28_winningRecord",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x109992
      };
      let {
          result: _0x28c8de,
          statusCode: _0x39f357
        } = await this.request(_0x152278),
        _0x4bcd63 = _0x34b85e.get(_0x28c8de, "status", _0x39f357);
      if (_0x4bcd63 == "0000") {
        let _0x511773 = _0x34b85e.get(_0x28c8de?.["data"], "code", -1);
        if (_0x511773 == "0000") {
          const _0x4c0160 = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x28c8de?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x4c0160);
        } else {
          let _0x24af83 = _0x28c8de?.["data"]?.["message"] || _0x28c8de?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0x511773 + "]: " + _0x24af83);
        }
      } else {
        let _0x250b96 = _0x28c8de?.["message"] || _0x28c8de?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x4bcd63 + "]: " + _0x250b96);
      }
    } catch (_0x2d8a70) {
      console.log(_0x2d8a70);
    }
  }
  async ttlxj_authorize(_0x35181f, _0x2acc47, _0x267dab, _0x23110d = {}) {
    try {
      let _0x247975 = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: {
            Origin: "https://epay.10010.com",
            Referer: _0x267dab
          },
          json: {
            response_type: "rptid",
            client_id: _0x677dbe,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0x35181f,
              st_type: _0x2acc47,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x34b85e.randomString(13),
              trace_id: _0x34b85e.randomString(32)
            }
          }
        },
        {
          result: _0xc68651
        } = await this.request(_0x247975),
        _0x28e801 = _0x34b85e.get(_0xc68651, "status", -1);
      if (_0x28e801 == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x4fc859 = _0xc68651?.["message"] || _0xc68651?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x28e801 + "]: " + _0x4fc859);
      }
    } catch (_0x4124e6) {
      console.log(_0x4124e6);
    }
  }
  async ttlxj_authCheck(_0x4b7ae0 = {}) {
    try {
      let _0x54dc6d = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x28d872
        } = await this.request(_0x54dc6d),
        _0x323d17 = _0x34b85e.get(_0x28d872, "code", -1);
      if (_0x323d17 == "0000") {
        let {
          mobile: _0x59525e,
          sessionId: _0x20ded0,
          tokenId: _0x5a67ee,
          userId: _0x5c4802
        } = _0x28d872?.["data"]?.["authInfo"];
        const _0x3309d9 = {
          sessionId: _0x20ded0,
          tokenId: _0x5a67ee,
          userId: _0x5c4802
        };
        Object.assign(this, _0x3309d9);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x323d17 == "2101000100") {
          let _0x2f1a3a = _0x28d872?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x2f1a3a);
        } else {
          let _0x15d5b1 = _0x28d872?.["msgInside"] || _0x28d872?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x323d17 + "]: " + _0x15d5b1);
        }
      }
    } catch (_0x3d313a) {
      console.log(_0x3d313a);
    }
  }
  async ttlxj_login(_0x396e64, _0x33c8ef = {}) {
    try {
      _0x396e64 += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x1a5f2f + "&bizChannelCode=" + _0x81e870;
      const _0x1e2f37 = {
        fn: "ttlxj_login",
        method: "get",
        url: _0x396e64
      };
      let {
        headers: _0x4aa534,
        statusCode: _0x11fdd7
      } = await this.request(_0x1e2f37);
      if (_0x4aa534?.["location"]) {
        let _0x4d80d8 = new URL(_0x4aa534.location);
        this.rptId = _0x4d80d8.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x11fdd7 + "]");
      }
    } catch (_0x118e61) {
      console.log(_0x118e61);
    }
  }
  async ttlxj_userDrawInfo(_0x5ff0c7 = {}) {
    try {
      let _0x2b316a = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x1d8d22
        } = await this.request(_0x2b316a),
        _0x2a3caa = _0x34b85e.get(_0x1d8d22, "code", -1);
      if (_0x2a3caa == "0000") {
        let _0x15cef9 = _0x1d8d22?.["data"]?.["dayOfWeek"],
          _0x3eb357 = "day" + _0x15cef9,
          _0x9a4245 = _0x1d8d22?.["data"]?.[_0x3eb357] == "1";
        const _0x5b2813 = {
          notify: true
        };
        this.log("天天领现金今天" + (_0x9a4245 ? "未" : "已") + "打卡", _0x5b2813);
        if (_0x9a4245) {
          let _0x3fa595 = new Date().getDay();
          _0x3fa595 % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x187669 = _0x1d8d22?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x2a3caa + "]: " + _0x187669);
      }
    } catch (_0x1f66d9) {
      console.log(_0x1f66d9);
    }
  }
  async ttlxj_unifyDrawNew(_0x35ea61, _0xd91e3b = {}) {
    try {
      const _0x5c4c90 = {
        drawType: _0x35ea61,
        bizFrom: _0x1a5f2f,
        activityId: "TTLXJ20210330"
      };
      let _0x2d06b3 = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x5c4c90
        },
        {
          result: _0xe4ded5
        } = await this.request(_0x2d06b3),
        _0x5ef0af = _0x34b85e.get(_0xe4ded5, "code", -1);
      if (_0x5ef0af == "0000" && _0xe4ded5?.["data"]?.["returnCode"] == 0) {
        let _0x251c0c = _0xe4ded5?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0xe4ded5?.["data"]?.["amount"]);
        const _0x4ce0c7 = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0x251c0c, _0x4ce0c7);
      } else {
        let _0x3c7547 = _0xe4ded5?.["data"]?.["returnMsg"] || _0xe4ded5?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0xe4ded5?.["data"]?.["returnCode"] || _0x5ef0af) + "]: " + _0x3c7547);
      }
    } catch (_0x53e233) {
      console.log(_0x53e233);
    }
  }
  async ttlxj_h(_0x1a2c6c = {}) {
    try {
      let _0x2a0071 = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: {
          bizFrom: _0x1a5f2f,
          activityId: "TTLXJ20210330",
          uid: _0x5cba80
        }
      };
      await this.request(_0x2a0071);
    } catch (_0x2e0b99) {
      console.log(_0x2e0b99);
    }
  }
  async ttlxj_queryAvailable(_0x356a1c = {}) {
    try {
      let _0x2789d5 = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x55c19e
        } = await this.request(_0x2789d5),
        _0xc2318a = _0x34b85e.get(_0x55c19e, "code", -1);
      if (_0xc2318a == "0000" && _0x55c19e?.["data"]?.["returnCode"] == 0) {
        let _0x1b7216 = _0x55c19e?.["data"]?.["availableAmount"] || 0;
        const _0x1f07d2 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x1b7216 / 100).toFixed(2) + "元", _0x1f07d2);
        let _0x1fbb70 = [],
          _0x3daffa = Date.now();
        for (let _0x2837b1 of _0x55c19e?.["data"]?.["prizeList"]?.["filter"](_0x5f1357 => _0x5f1357.status == "A")) {
          let _0x389e45 = _0x2837b1.endTime,
            _0x10052f = new Date(_0x389e45.slice(0, 4) + "-" + _0x389e45.slice(4, 6) + "-" + _0x389e45.slice(6, 8) + " 00:00:00"),
            _0x323ae5 = _0x10052f.getTime();
          if (_0x323ae5 - _0x3daffa < _0x57c388 * 24 * 60 * 60 * 1000) {
            let _0x1ed5f5 = _0x34b85e.time("yyyy-MM-dd", _0x323ae5);
            const _0x42a34d = {
              timestamp: _0x323ae5,
              date: _0x1ed5f5,
              amount: _0x2837b1.amount
            };
            _0x1fbb70.push(_0x42a34d);
          }
        }
        if (_0x1fbb70.length) {
          const _0x44f568 = {
            timestamp: 0
          };
          let _0x592abe = _0x44f568,
            _0x3100a4 = _0x1fbb70.reduce(function (_0x354de5, _0x5ad42a) {
              (_0x592abe.timestamp == 0 || _0x5ad42a.timestamp < _0x592abe.timestamp) && (_0x592abe = _0x5ad42a);
              return _0x354de5 + parseFloat(_0x5ad42a.amount);
            }, 0);
          const _0x3b8e3f = {
            notify: true
          };
          this.log(_0x57c388 + "天内过期立减金: " + _0x3100a4.toFixed(2) + "元", _0x3b8e3f);
          const _0x14d527 = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x592abe.amount + "元 -- " + _0x592abe.date + "过期", _0x14d527);
        } else {
          const _0x21cf36 = {
            notify: true
          };
          this.log(_0x57c388 + "天内没有过期的立减金", _0x21cf36);
        }
      } else {
        let _0x3f699b = _0x55c19e?.["data"]?.["returnMsg"] || _0x55c19e?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x55c19e?.["data"]?.["returnCode"] || _0xc2318a) + "]: " + _0x3f699b);
      }
    } catch (_0x13464d) {
      console.log(_0x13464d);
    }
  }
  async epay_28_authCheck(_0x40cf8b = {}) {
    try {
      let _0x44a9d6 = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x3c5871
        } = await this.request(_0x44a9d6),
        _0x2a0268 = _0x34b85e.get(_0x3c5871, "code", -1);
      if (_0x2a0268 == "0000") {
        let {
          mobile: _0x19c3a1,
          sessionId: _0x4f5680,
          tokenId: _0x306907,
          userId: _0x376b84
        } = _0x3c5871?.["data"]?.["authInfo"];
        const _0x6d6f21 = {
          sessionId: _0x4f5680,
          tokenId: _0x306907,
          userId: _0x376b84
        };
        Object.assign(this, _0x6d6f21);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x2a0268 == "2101000100") {
          let _0x490ce8 = _0x3c5871?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x490ce8);
        } else {
          let _0x71719a = _0x3c5871?.["msgInside"] || _0x3c5871?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x2a0268 + "]: " + _0x71719a);
        }
      }
    } catch (_0x3857f1) {
      console.log(_0x3857f1);
    }
  }
  async epay_28_login(_0xa40da6, _0x8b12bc = {}) {
    try {
      let _0x5bd155 = _0x34b85e.time("yyyyMM") + "28ZFR";
      _0xa40da6 += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x5bd155 + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x24706d = {
        fn: "epay_28_login",
        method: "get",
        url: _0xa40da6
      };
      let {
        headers: _0x553873,
        statusCode: _0x3a46e1
      } = await this.request(_0x24706d);
      if (_0x553873?.["location"]) {
        let _0x4fe925 = new URL(_0x553873.location);
        this.rptId = _0x4fe925.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x3a46e1 + "]");
      }
    } catch (_0x5efbdb) {
      console.log(_0x5efbdb);
    }
  }
  async epay_28_queryUserPage(_0x1a86cc = {}) {
    try {
      let _0x16a1c5 = _0x34b85e.time("yyyyMM") + "28ZFR";
      const _0x246bda = {
        templateName: _0x16a1c5
      };
      let _0x34a5ab = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x246bda
        },
        {
          result: _0x4faa07
        } = await this.request(_0x34a5ab),
        _0x118289 = _0x34b85e.get(_0x4faa07, "code", -1);
      if (_0x118289 == "0000" && _0x4faa07?.["data"]?.["returnCode"] == 0) {
        for (let _0x4587c1 of _0x4faa07?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          if (_0x4587c1?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x16a1c5, _0x4587c1.mouldName);
            break;
          }
        }
      } else {
        let _0x1d3469 = _0x4faa07?.["message"] || _0x4faa07?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x118289 + "]: " + _0x1d3469);
      }
    } catch (_0x4cade9) {
      console.log(_0x4cade9);
    }
  }
  async epay_28_queryMiddleUnit(_0x2462c5, _0xd0b923, _0x276816 = {}) {
    try {
      const _0x11dbe5 = {
        activityId: _0x2462c5,
        mouldName: _0xd0b923
      };
      let _0x3b488e = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x11dbe5
        },
        {
          result: _0x1a86bd
        } = await this.request(_0x3b488e),
        _0x4be35a = _0x34b85e.get(_0x1a86bd, "code", -1);
      if (_0x4be35a == "0000") {
        let _0x43e7cf = _0x34b85e.time("dd");
        _0x1a86bd?.["data"]?.[_0x43e7cf] == "1" ? this.log("联通支付日今日(" + _0x43e7cf + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x2462c5, _0xd0b923);
      } else {
        let _0x408b7e = _0x1a86bd?.["message"] || _0x1a86bd?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x4be35a + "]: " + _0x408b7e);
      }
    } catch (_0x13d3b4) {
      console.log(_0x13d3b4);
    }
  }
  async epay_28_unifyDrawNew(_0x16c9e6, _0x26dcac, _0x230fa0 = {}) {
    try {
      const _0x2d5e73 = {
        bizFrom: _0x1a5f2f,
        activityId: _0x16c9e6,
        mouldName: _0x26dcac
      };
      let _0x25593c = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x2d5e73
        },
        {
          result: _0x46e780
        } = await this.request(_0x25593c),
        _0x5072b7 = _0x34b85e.get(_0x46e780, "code", -1);
      if (_0x5072b7 == "0000" && _0x46e780?.["data"]?.["returnCode"] == 0) {
        let _0x4975bd = _0x46e780?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x46e780?.["data"]?.["amount"]);
        const _0x1bb90e = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0x4975bd, _0x1bb90e);
      } else {
        let _0x5061e5 = _0x46e780?.["data"]?.["returnMsg"] || _0x46e780?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x46e780?.["data"]?.["returnCode"] || _0x5072b7) + "]: " + _0x5061e5);
      }
    } catch (_0x523b23) {
      console.log(_0x523b23);
    }
  }
  async sign_getContinuous(_0x1198f4 = {}) {
    try {
      const _0x3b1542 = {
        taskId: "",
        channel: ""
      };
      const _0x3ab5a1 = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: _0x3b1542
      };
      let {
          result: _0x2c37e1
        } = await this.request(_0x3ab5a1),
        _0x4fd8ac = _0x34b85e.get(_0x2c37e1, "status", -1);
      if (_0x4fd8ac == "0000") {
        let _0x5781b9 = _0x2c37e1?.["data"]?.["todaySigned"] || 0;
        const _0x3e927c = {
          notify: true
        };
        this.log("签到区今天" + (_0x5781b9 == "1" ? "未" : "已") + "签到", _0x3e927c);
        if (_0x5781b9 == "1") {
          await this.sign_daySign();
        }
      } else {
        let _0x2c6592 = _0x2c37e1?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x4fd8ac + "]: " + _0x2c6592);
      }
    } catch (_0x36f25c) {
      console.log(_0x36f25c);
    }
  }
  async sign_daySign(_0x7dc752 = {}) {
    try {
      const _0x4909a5 = {
        shareCl: "",
        shareCode: ""
      };
      const _0x5ec029 = {
        fn: "sign_daySign",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/daySign",
        form: _0x4909a5
      };
      let {
          result: _0x13df63
        } = await this.request(_0x5ec029),
        _0x17d802 = _0x34b85e.get(_0x13df63, "status", -1);
      if (_0x17d802 == "0000") {
        const _0x1979e2 = {
          notify: true
        };
        this.log("签到区签到成功: " + _0x13df63?.["data"]?.["signMessage"], _0x1979e2);
      } else {
        let _0x2b3828 = _0x13df63?.["msg"] || "";
        this.log("签到区签到失败[" + _0x17d802 + "]: " + _0x2b3828);
      }
    } catch (_0x38f0bc) {
      console.log(_0x38f0bc);
    }
  }
  async sign_queryBubbleTask(_0x17eb39 = {}) {
    try {
      const _0x88d086 = {
        fn: "sign_queryBubbleTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
      };
      let {
          result: _0x13e490
        } = await this.request(_0x88d086),
        _0x195f88 = _0x34b85e.get(_0x13e490, "status", -1);
      if (_0x195f88 == "0000") {
        for (let _0x9cc4f7 of _0x13e490?.["data"]?.["paramsList"]?.["filter"](_0x12dbd0 => _0x12dbd0.taskState == 1)) {
          let _0x3c8c91 = await this.gettaskip();
          await this.sign_doTask(_0x9cc4f7, _0x3c8c91);
        }
      } else {
        let _0x321bed = _0x13e490?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x195f88 + "]: " + _0x321bed);
      }
    } catch (_0x31d991) {
      console.log(_0x31d991);
    }
  }
  async sign_doTask(_0x586eb4, _0x2ac6a4, _0x450656 = {}) {
    try {
      const _0x1f17a8 = {
        fn: "sign_doTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/task/doTask",
        form: {}
      };
      _0x1f17a8.form.id = _0x586eb4.id;
      _0x1f17a8.form.orderId = _0x2ac6a4;
      _0x1f17a8.form.imei = "BB97982E-3F03-46D3-B904-819D626DF478";
      _0x1f17a8.form.prizeType = _0x586eb4.rewardType;
      _0x1f17a8.form.positionFlag = 0;
      let {
          result: _0x2d9e56
        } = await this.request(_0x1f17a8),
        _0x54e453 = _0x34b85e.get(_0x2d9e56, "status", -1);
      if (_0x54e453 == "0000") {
        this.log("完成任务[" + _0x586eb4.actName + "]获得: " + _0x2d9e56?.["data"]?.["prizeCount"] + _0x2d9e56?.["data"]?.["prizeName"]);
      } else {
        let _0x4fbe1a = _0x2d9e56?.["msg"] || "";
        this.log("完成任务[" + _0x586eb4.actName + "]失败[" + _0x54e453 + "]: " + _0x4fbe1a);
      }
    } catch (_0x28845f) {
      console.log(_0x28845f);
    }
  }
  async game_login(_0x2576a2, _0x4d0e1f = {}) {
    try {
      const _0x1b80bc = {
        identityType: "esToken",
        code: this.ecs_token,
        ticket: _0x2576a2,
        uuid: _0x1846fe
      };
      const _0x47d87a = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: {},
        json: _0x1b80bc
      };
      _0x47d87a.headers.channelid = "GAMELTAPP_90005";
      let {
          result: _0x3d4beb
        } = await this.request(_0x47d87a),
        _0x312f27 = _0x34b85e.get(_0x3d4beb, "code", -1);
      if (_0x312f27 == 200) {
        this.game_token = _0x3d4beb?.["data"]?.["access_token"];
        this.got = this.got.extend({
          headers: {
            Authorization: this.game_token
          }
        });
        await this.game_getMemberInfo();
        await this.game_signRecord();
        await this.game_lottery();
        await this.game_playSave();
        await this.game_taskList();
        await this.game_getMemberInfo();
        const _0x114e1f = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x114e1f);
      } else {
        let _0x598779 = _0x3d4beb?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0x312f27 + "]: " + _0x598779);
      }
    } catch (_0xf5615f) {
      console.log(_0xf5615f);
    }
  }
  async game_getMemberInfo(_0x48d543 = {}) {
    try {
      const _0x52ba9a = {
        fn: "game_getMemberInfo",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
      };
      let {
          result: _0x5037b2
        } = await this.request(_0x52ba9a),
        _0x59e6f9 = _0x34b85e.get(_0x5037b2, "code", -1);
      if (_0x59e6f9 == 200) {
        this.point = _0x5037b2?.["data"]?.["userIntegral"];
      } else {
        let _0x1ba7f9 = _0x5037b2?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x59e6f9 + "]: " + _0x1ba7f9);
      }
    } catch (_0x526521) {
      console.log(_0x526521);
    }
  }
  async game_signRecord(_0x3f8b11 = {}) {
    try {
      const _0x2419f7 = {
        fn: "game_signRecord",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signRecord"
      };
      let {
          result: _0x58b60a
        } = await this.request(_0x2419f7),
        _0x4a887d = _0x34b85e.get(_0x58b60a, "code", -1);
      if (_0x4a887d == 200) {
        for (let _0x511a79 of _0x58b60a?.["data"]) {
          if (_0x511a79.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0x511a79.signStatus == 2 ? "未" : "已") + "签到");
          if (_0x511a79.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x34f6be = _0x58b60a?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x4a887d + "]: " + _0x34f6be);
      }
    } catch (_0x38bfc0) {
      console.log(_0x38bfc0);
    }
  }
  async game_signIn(_0x149051 = {}) {
    try {
      const _0x27a740 = {
        fn: "game_signIn",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signIn"
      };
      let {
          result: _0x50f3a7
        } = await this.request(_0x27a740),
        _0x200782 = _0x34b85e.get(_0x50f3a7, "code", -1);
      if (_0x200782 == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x4868c1 = _0x50f3a7?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0x200782 + "]: " + _0x4868c1);
      }
    } catch (_0xc945dd) {
      console.log(_0xc945dd);
    }
  }
  async game_checkSlider(_0x5f5d98 = {}) {
    let _0x12215f = false;
    try {
      const _0x29bb30 = {
        xPos: 234
      };
      const _0x540cda = {
        fn: "game_checkSlider",
        method: "post",
        url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
        searchParams: _0x29bb30
      };
      let {
          result: _0x3b6840
        } = await this.request(_0x540cda),
        _0x45d049 = _0x34b85e.get(_0x3b6840, "code", -1);
      if (_0x45d049 == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x2dd0dc = _0x3b6840?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x45d049 + "]: " + _0x2dd0dc);
      }
    } catch (_0x1c6f43) {
      console.log(_0x1c6f43);
    } finally {
      return _0x12215f;
    }
  }
  async game_lottery(_0x36524a = {}) {
    try {
      let _0x575f88 = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x34b85e.get(_0x36524a, "id", 1)
          }
        },
        {
          result: _0x28a66d
        } = await this.request(_0x575f88),
        _0x278560 = _0x34b85e.get(_0x28a66d, "code", -1);
      if (_0x278560 == 200) {
        const _0x4a3018 = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x28a66d?.["data"]?.["productName"], _0x4a3018);
      } else {
        let _0x51ddd4 = _0x28a66d?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x278560 + "]: " + _0x51ddd4);
      }
    } catch (_0x464d62) {
      console.log(_0x464d62);
    }
  }
  async game_taskList(_0x497b1b = {}) {
    try {
      const _0x495e39 = {
        fn: "game_taskList",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/list"
      };
      let {
          result: _0x229e78
        } = await this.request(_0x495e39),
        _0x597a68 = _0x34b85e.get(_0x229e78, "code", -1);
      if (_0x597a68 == 200) {
        for (let _0x34bed5 of _0x229e78?.["data"]) {
          switch (_0x34bed5.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0x34bed5);
              break;
            case 2:
              break;
            default:
              _0x34b85e.log("任务[" + _0x34bed5.taskName + "]未知状态[" + _0x34bed5.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0x44a94f = _0x229e78?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x597a68 + "]: " + _0x44a94f);
      }
    } catch (_0x2839fd) {
      console.log(_0x2839fd);
    }
  }
  async game_taskReceive(_0x56dcb8, _0x43d4a8 = {}) {
    try {
      const _0x1c7c27 = {
        productId: _0x56dcb8.productId,
        taskId: _0x56dcb8.id
      };
      const _0x5070c5 = {
        fn: "game_taskReceive",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/receive",
        searchParams: _0x1c7c27
      };
      let {
          result: _0x2f0491
        } = await this.request(_0x5070c5),
        _0x5d425e = _0x34b85e.get(_0x2f0491, "code", -1);
      if (_0x5d425e == 200) {
        this.log("领取任务[" + _0x56dcb8.taskName + "]奖励成功");
      } else {
        let _0x3745f0 = _0x2f0491?.["msg"] || "";
        this.log("领取任务[" + _0x56dcb8.taskName + "]奖励失败[" + _0x5d425e + "]: " + _0x3745f0);
      }
    } catch (_0x5072d5) {
      console.log(_0x5072d5);
    }
  }
  async game_playSave(_0x25e20f = {}) {
    try {
      let _0x4db4f5 = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x34b85e.randomString(2, "0123456789")
          }
        },
        {
          result: _0x58e279
        } = await this.request(_0x4db4f5),
        _0x17f1e4 = _0x34b85e.get(_0x58e279, "code", -1);
      if (!(_0x17f1e4 == 200)) {
        let _0xa7644d = _0x58e279?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x17f1e4 + "]: " + _0xa7644d);
      }
    } catch (_0x3bb056) {
      console.log(_0x3bb056);
    }
  }
  async flmf_login(_0x5f1cb0, _0x4bc0a4 = {}) {
    try {
      const _0x483b7f = {
        fn: "flmf_login",
        method: "get",
        url: _0x5f1cb0
      };
      let {
        headers: _0x926b30,
        statusCode: _0x1cf2a0
      } = await this.request(_0x483b7f);
      if (_0x926b30?.["location"]) {
        let _0x2242a4 = new URL(_0x926b30.location);
        this.flmf_sid = _0x2242a4.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x1cf2a0 + "]");
      }
    } catch (_0x2b925a) {
      console.log(_0x2b925a);
    }
  }
  async flmf_signInInit(_0x3979d4 = {}) {
    try {
      let _0xa839a4 = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x47253b
        } = await this.request(_0xa839a4),
        _0x4b035d = _0x34b85e.get(_0x47253b, "resultCode", -1);
      if (_0x4b035d == "0000") {
        this.log("福利魔方今天" + (_0x47253b?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x47253b?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x47253b?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0x266bf5 = _0x47253b?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x4b035d + "]: " + _0x266bf5);
      }
    } catch (_0x36c7cb) {
      console.log(_0x36c7cb);
    }
  }
  async flmf_signIn(_0x316917 = {}) {
    try {
      let _0xab57d9 = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0xa4f9ae
        } = await this.request(_0xab57d9),
        _0x56e6d6 = _0x34b85e.get(_0xa4f9ae, "resultCode", -1);
      if (_0x56e6d6 == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x3bc0fb = _0xa4f9ae?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0x56e6d6 + "]: " + _0x3bc0fb);
      }
    } catch (_0x346a33) {
      console.log(_0x346a33);
    }
  }
  async flmf_taskList(_0xdb5975 = {}) {
    try {
      let _0x182fb4 = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x23d3d2
        } = await this.request(_0x182fb4),
        _0x488a84 = _0x34b85e.get(_0x23d3d2, "resultCode", -1);
      if (_0x488a84 == "0000") {
        for (let _0x2e1dde of _0x23d3d2?.["data"]?.["taskInfoList"]) {
          for (let _0x5a64d7 of _0x2e1dde.taskInfoList.filter(_0x337961 => !_0x337961.done)) {
            for (let _0x19f338 = _0x5a64d7.hascount; _0x19f338 < _0x5a64d7.count; _0x19f338++) {
              await this.flmf_gogLance(_0x5a64d7.id);
            }
          }
        }
      } else {
        let _0x55ee65 = _0x23d3d2?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x488a84 + "]: " + _0x55ee65);
      }
    } catch (_0x22107c) {
      console.log(_0x22107c);
    }
  }
  async flmf_scanTask() {
    for (let _0x248a32 of _0x5407b8) {
      await this.flmf_gogLance(_0x248a32);
    }
  }
  async flmf_gogLance(_0x1b8ab, _0xc90f5b = {}) {
    try {
      let _0x4eff82 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x1b8ab,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x469018
        } = await this.request(_0x4eff82);
      await _0x34b85e.wait_gap_interval(this.t_flmf_task, _0x444178);
      let _0x23a8de = _0x34b85e.get(_0x469018, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x23a8de == "0000") {
        this.log("完成任务[" + _0x1b8ab + "]成功");
      } else {
        let _0x4535e6 = _0x469018?.["resultMsg"] || "";
        this.log("完成任务[" + _0x1b8ab + "]失败[" + _0x23a8de + "]: " + _0x4535e6);
      }
    } catch (_0x539461) {
      console.log(_0x539461);
    }
  }
  async woread_api(_0xf0bf78) {
    let _0x131d8f = await this.request(_0x34b85e.copy(_0xf0bf78)),
      _0xa9260c = _0x131d8f?.["result"]?.["message"] || "";
    _0xa9260c?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x131d8f = await this.request(_0x34b85e.copy(_0xf0bf78)));
    return _0x131d8f;
  }
  async woread_auth(_0x46fe2f = {}) {
    let _0x42223e = false;
    try {
      let _0x1a9e3b = _0x34b85e.time("yyyyMMddhhmmss");
      const _0xb8f9c9 = {
        timestamp: _0x1a9e3b
      };
      let _0x1a2836 = this.encode_woread(_0xb8f9c9),
        _0xba0da2 = Date.now().toString(),
        _0x500da3 = _0x3a7350.MD5(_0xf39416 + _0x305235 + _0xba0da2).toString();
      const _0x2a1a8a = {
        sign: _0x1a2836
      };
      const _0x21bd18 = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0xf39416 + "/" + _0xba0da2 + "/" + _0x500da3,
        json: _0x2a1a8a
      };
      let {
          result: _0x2c5603
        } = await this.request(_0x21bd18),
        _0x43632e = _0x34b85e.get(_0x2c5603, "code", -1);
      if (_0x43632e == "0000") {
        _0x42223e = true;
        this.woread_accesstoken = _0x2c5603?.["data"]?.["accesstoken"];
        this.got = this.got.extend({
          headers: {
            accesstoken: this.woread_accesstoken
          }
        });
      } else {
        let _0x2ca269 = _0x2c5603?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x43632e + "]: " + _0x2ca269);
      }
    } catch (_0x20a2cd) {
      console.log(_0x20a2cd);
    } finally {
      return _0x42223e;
    }
  }
  async woread_login(_0x396eee = {}) {
    let _0x200b60 = false;
    try {
      let _0x5ab10f = {
          phone: this.mobile,
          timestamp: _0x34b85e.time("yyyyMMddhhmmss")
        },
        _0x5d253e = this.encode_woread(_0x5ab10f);
      const _0x1b5976 = {
        sign: _0x5d253e
      };
      const _0x23bfbf = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x1b5976
      };
      let {
          result: _0x162e87
        } = await this.request(_0x23bfbf),
        _0x158a69 = _0x34b85e.get(_0x162e87, "code", -1);
      if (_0x158a69 == "0000") {
        _0x200b60 = true;
        let {
          userid: _0x22f3d3,
          userindex: _0x5361f2,
          token: _0x5b7ad1,
          verifycode: _0x4e9d7a
        } = _0x162e87?.["data"];
        this.woread_token = _0x5b7ad1;
        this.woread_verifycode = _0x4e9d7a;
        const _0x1cce03 = {
          woread_userid: _0x22f3d3,
          woread_userindex: _0x5361f2,
          woread_token: _0x5b7ad1,
          woread_verifycode: _0x4e9d7a
        };
        Object.assign(this, _0x1cce03);
      } else {
        let _0x3f7a13 = _0x162e87?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x158a69 + "]: " + _0x3f7a13);
      }
    } catch (_0x3976b4) {
      console.log(_0x3976b4);
    } finally {
      return _0x200b60;
    }
  }
  async woread_getSeeVideoAddNumber(_0x1698c9 = {}) {
    try {
      let _0x2902e5 = {
          activityIndex: _0x5ea031.read,
          ...this.get_woread_param()
        },
        _0x2da2aa = this.encode_woread(_0x2902e5);
      const _0xa44ea1 = {
        sign: _0x2da2aa
      };
      const _0x31725d = {
        fn: "woread_getSeeVideoAddNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
        json: _0xa44ea1
      };
      let {
          result: _0x141e49
        } = await this.woread_api(_0x31725d),
        _0x362c4e = _0x34b85e.get(_0x141e49, "code", -1);
      if (_0x362c4e == "0000") {
        _0x141e49?.["data"] == -1 && (await this.woread_addUserSeeVideo());
      } else {
        let _0x51d52f = _0x141e49?.["message"] || "";
        this.log("阅读专区查询抽奖视频失败[" + _0x362c4e + "]: " + _0x51d52f);
      }
    } catch (_0x5de7fc) {
      console.log(_0x5de7fc);
    }
  }
  async woread_addUserSeeVideo(_0x2f88ce = {}) {
    try {
      let _0x482a74 = _0x2f88ce.num || 5,
        _0x23950d = {
          activityIndex: _0x5ea031.read,
          num: _0x482a74,
          ...this.get_woread_param()
        },
        _0x3e8f6f = this.encode_woread(_0x23950d);
      const _0x243fed = {
        sign: _0x3e8f6f
      };
      const _0x259065 = {
        fn: "woread_addUserSeeVideo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
        json: _0x243fed
      };
      let {
          result: _0xd4c7bb
        } = await this.woread_api(_0x259065),
        _0x437aa5 = _0x34b85e.get(_0xd4c7bb, "code", -1);
      if (_0x437aa5 == "0000") {
        this.log("阅读专区看视频增加抽奖次数成功");
      } else {
        let _0x5f6569 = _0xd4c7bb?.["message"] || "";
        this.log("阅读专区看视频增加抽奖次数失败[" + _0x437aa5 + "]: " + _0x5f6569);
      }
    } catch (_0x3390d8) {
      console.log(_0x3390d8);
    }
  }
  async woread_getActivityNumber(_0x221166 = {}) {
    try {
      let _0x5cfec7 = {
          activeIndex: _0x5ea031.read,
          ...this.get_woread_param()
        },
        _0x5bda01 = this.encode_woread(_0x5cfec7);
      const _0x5df28f = {
        sign: _0x5bda01
      };
      const _0x1d08e4 = {
        fn: "woread_getActivityNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
        json: _0x5df28f
      };
      let {
          result: _0x32bd7e
        } = await this.woread_api(_0x1d08e4),
        _0x42ee6c = _0x34b85e.get(_0x32bd7e, "code", -1);
      if (_0x42ee6c == "0000") {
        let _0x3bdf6c = _0x32bd7e?.["data"] || 0;
        this.log("阅读专区可以抽奖" + _0x3bdf6c + "次");
        while (_0x3bdf6c-- > 0) {
          await this.woread_doDraw();
        }
      } else {
        let _0x1429ab = _0x32bd7e?.["message"] || "";
        this.log("阅读专区查询抽奖次数失败[" + _0x42ee6c + "]: " + _0x1429ab);
      }
    } catch (_0x4299d1) {
      console.log(_0x4299d1);
    }
  }
  async woread_doDraw(_0xd03083 = {}) {
    try {
      let _0x1b8293 = {
          activeindex: _0x5ea031.read,
          ...this.get_woread_param()
        },
        _0xd5044 = this.encode_woread(_0x1b8293);
      const _0x2a87cf = {
        sign: _0xd5044
      };
      const _0x242a6b = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x2a87cf
      };
      await _0x34b85e.wait_gap_interval(this.t_woread_draw, _0x2b03ec);
      let {
        result: _0x46c139
      } = await this.woread_api(_0x242a6b);
      this.t_woread_draw = Date.now();
      let _0x3a607e = _0x34b85e.get(_0x46c139, "code", -1);
      if (_0x3a607e == "0000") {
        const _0x478158 = {
          notify: true
        };
        this.log("阅读专区抽奖: " + (_0x46c139?.["data"]?.["prizedesc"] || "空气"), _0x478158);
      } else {
        let _0x3bf0ca = _0x46c139?.["message"] || "";
        this.log("阅读专区抽奖失败[" + _0x3a607e + "]: " + _0x3bf0ca);
      }
    } catch (_0x4e2e15) {
      console.log(_0x4e2e15);
    }
  }
  async woread_queryTicketAccount(_0x4a1d8b = {}) {
    try {
      let _0x3bcc4d = this.get_woread_param(),
        _0x521d9d = this.encode_woread(_0x3bcc4d);
      const _0x3d19c2 = {
        sign: _0x521d9d
      };
      const _0x56c182 = {
        fn: "woread_queryTicketAccount",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
        json: _0x3d19c2
      };
      let {
          result: _0x1ef387
        } = await this.woread_api(_0x56c182),
        _0x43828b = _0x34b85e.get(_0x1ef387, "code", -1);
      if (_0x43828b == "0000") {
        let _0x23c0ea = (_0x1ef387?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x3df121 = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x23c0ea, _0x3df121);
      } else {
        let _0x528e56 = _0x1ef387?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x43828b + "]: " + _0x528e56);
      }
    } catch (_0x1513db) {
      console.log(_0x1513db);
    }
  }
  async woread_addReadTime(_0x1cb231 = {}) {
    try {
      let {
          readTime = 2,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = 1,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 1,
          channelid = "",
          chapterid = "-1",
          readtype = 1,
          isend = "0"
        } = _0x1cb231,
        _0x228d30 = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_param()
        },
        _0x538e1d = this.encode_woread(_0x228d30);
      const _0x4d34d7 = {
        sign: _0x538e1d
      };
      const _0x52ad78 = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x4d34d7
      };
      let {
          result: _0x1fa006
        } = await this.request(_0x52ad78),
        _0x91d248 = _0x34b85e.get(_0x1fa006, "code", -1);
      if (_0x91d248 == "0000") {
        this.log("刷新读小说时间: " + _0x1fa006?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x1fa006?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x3c9f81 = _0x1fa006?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x91d248 + "]: " + _0x3c9f81);
      }
    } catch (_0x422295) {
      console.log(_0x422295);
    }
  }
  async rabblit_queryActivityData(_0xc8a08d = {}) {
    try {
      let _0x3d707b = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x5b0c6d = this.encode_woread(_0x3d707b);
      const _0x5a7e6a = {
        sign: _0x5b0c6d
      };
      const _0x36c840 = {
        fn: "rabblit_queryActivityData",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
        json: _0x5a7e6a
      };
      let {
          result: _0x16e489
        } = await this.woread_api(_0x36c840),
        _0x2b72ed = _0x34b85e.get(_0x16e489, "code", -1);
      if (_0x2b72ed == "0000") {
        let {
          totalcharpternums: _0x400118,
          totalreadnums: _0x2dceb0,
          status: _0x154a2b,
          activitystatus: _0x49fd59
        } = _0x16e489?.["data"];
        if (_0x49fd59 == 1) {
          this.need_read_rabbit = false;
          const _0xea27c5 = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0xea27c5);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x2dceb0 + "/" + _0x400118 + "分钟");
        if (_0x154a2b == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x2dceb0 >= _0x400118) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x81c1e0 = _0x16e489?.["message"] || "";
        _0x81c1e0?.["includes"]("未参加") && !_0xc8a08d.join_retry && (await this.rabblit_joinRuning()) ? (_0xc8a08d.join_retry = true, await this.rabblit_queryActivityData(_0xc8a08d)) : this.log("龟兔赛跑查询状态失败[" + _0x2b72ed + "]: " + _0x81c1e0);
      }
    } catch (_0xb6deaf) {
      console.log(_0xb6deaf);
    }
  }
  async rabblit_joinRuning(_0x461657 = {}) {
    let _0x263e26 = false;
    try {
      let _0x1c90ac = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x3d9fbb = this.encode_woread(_0x1c90ac);
      const _0x2c88e2 = {
        sign: _0x3d9fbb
      };
      const _0x1e5813 = {
        fn: "rabblit_joinRuning",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
        json: _0x2c88e2
      };
      let {
          result: _0x385c02
        } = await this.woread_api(_0x1e5813),
        _0xbc3838 = _0x34b85e.get(_0x385c02, "code", -1);
      if (_0xbc3838 == "0000") {
        _0x263e26 = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0xe3b0dc = _0x385c02?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0xbc3838 + "]: " + _0xe3b0dc);
      }
    } catch (_0x3322c1) {
      console.log(_0x3322c1);
    } finally {
      return _0x263e26;
    }
  }
  async rabblit_wakeRabbit(_0x14731a = {}) {
    try {
      let _0x4cf350 = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x3de74c = this.encode_woread(_0x4cf350);
      const _0x3e96e2 = {
        sign: _0x3de74c
      };
      const _0xff6571 = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x3e96e2
      };
      await _0x34b85e.wait_gap_interval(this.t_woread_draw, _0x2b03ec);
      let {
        result: _0x4d6020
      } = await this.woread_api(_0xff6571);
      this.t_woread_draw = Date.now();
      let _0x546fec = _0x34b85e.get(_0x4d6020, "code", -1);
      if (_0x546fec == "0000") {
        const _0x4fda37 = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x4d6020?.["data"]?.["prizedesc"] || "空气"), _0x4fda37);
      } else {
        let _0x587cf6 = _0x4d6020?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x546fec + "]: " + _0x587cf6);
      }
    } catch (_0x4527d2) {
      console.log(_0x4527d2);
    }
  }
  async rabblit_finishActivity(_0x92ae2f = {}) {
    try {
      let _0x514140 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x3ca06f = this.encode_woread(_0x514140);
      const _0x3c1b5e = {
        sign: _0x3ca06f
      };
      const _0x4179d8 = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x3c1b5e
      };
      await _0x34b85e.wait_gap_interval(this.t_woread_draw, _0x2b03ec);
      let {
        result: _0x28c7b3
      } = await this.woread_api(_0x4179d8);
      this.t_woread_draw = Date.now();
      let _0x34afa3 = _0x34b85e.get(_0x28c7b3, "code", -1);
      if (_0x34afa3 == "0000") {
        this.need_read_rabbit = false;
        const _0x50dc03 = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x28c7b3?.["data"]?.["prizedesc"] || "空气"), _0x50dc03);
      } else {
        let _0x5aecd0 = _0x28c7b3?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x34afa3 + "]: " + _0x5aecd0);
      }
    } catch (_0x4310b2) {
      console.log(_0x4310b2);
    }
  }
  async moonbox_queryCurTaskStatus(_0x126766 = {}) {
    try {
      let _0x21064d = {
          activeIndex: _0x5ea031.moonbox,
          ...this.get_woread_param()
        },
        _0x1b8215 = this.encode_woread(_0x21064d);
      const _0x2549de = {
        sign: _0x1b8215
      };
      const _0x237067 = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0x2549de
      };
      let {
          result: _0x27ebe3
        } = await this.woread_api(_0x237067),
        _0x11dabc = _0x34b85e.get(_0x27ebe3, "code", -1);
      if (_0x11dabc == "0000") {
        for (let _0x390281 of _0x27ebe3?.["data"] || []) {
          let {
            taskName: _0x1d5db6,
            currentValue: _0x2ab0cb,
            taskValue: _0x29c86d
          } = _0x390281?.["taskDetail"];
          switch (_0x390281.taskStatus) {
            case 0:
              this.need_read_moonbox = true;
              this.log("阅光宝盒[" + _0x1d5db6 + "]进度: " + parseInt(_0x2ab0cb) + "/" + _0x29c86d + "分钟");
              break;
            case 2:
              await this.moonbox_completeActiveTask(_0x390281);
            case 1:
              this.need_read_moonbox = false;
              const _0x11f788 = {
                notify: true
              };
              this.log("阅光宝盒任务[" + _0x1d5db6 + "]已完成", _0x11f788);
              break;
          }
        }
      } else {
        let _0x2df411 = _0x27ebe3?.["message"] || "";
        _0x2df411?.["includes"]("未领取") && !_0x126766.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x126766.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x126766)) : this.log("阅光宝盒查询任务状态失败[" + _0x11dabc + "]: " + _0x2df411);
      }
    } catch (_0x4b25f8) {
      console.log(_0x4b25f8);
    }
  }
  async moonbox_completeActiveTask(_0x1c1f18, _0x281851 = {}) {
    try {
      let _0x217ff4 = {
          taskId: _0x1c1f18.id,
          ...this.get_woread_param()
        },
        _0x3b88ac = this.encode_woread(_0x217ff4);
      const _0x1396c1 = {
        sign: _0x3b88ac
      };
      const _0x41de46 = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x1396c1
      };
      let {
          result: _0x3a4d9e
        } = await this.woread_api(_0x41de46),
        _0x166e08 = _0x34b85e.get(_0x3a4d9e, "code", -1);
      if (_0x166e08 == "0000") {
        const _0x1ccfda = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x3a4d9e?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x3a4d9e?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x1ccfda);
      } else {
        let _0x47c9b7 = _0x3a4d9e?.["message"] || "";
        this.log("阅光宝盒[" + _0x1c1f18?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x166e08 + "]: " + _0x47c9b7);
      }
    } catch (_0x380aa9) {
      console.log(_0x380aa9);
    }
  }
  async moonbox_queryActiveTaskList(_0x159877 = {}) {
    try {
      let _0xf5c20c = {
          activeIndex: _0x5ea031.moonbox,
          ...this.get_woread_param()
        },
        _0x9b84a = this.encode_woread(_0xf5c20c);
      const _0x328fc6 = {
        sign: _0x9b84a
      };
      const _0x581e11 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
        json: _0x328fc6
      };
      let {
          result: _0x2c8f5f
        } = await this.woread_api(_0x581e11),
        _0x15d0dd = _0x34b85e.get(_0x2c8f5f, "code", -1);
      if (_0x15d0dd == "0000") {
        let _0x25b709 = _0x2c8f5f?.["data"]?.["sort"](function (_0x4d4651, _0x259e48) {
            let _0x46fac9 = parseInt(_0x259e48.taskDetail.taskValue),
              _0x2d6046 = parseInt(_0x4d4651.taskDetail.taskValue);
            return _0x46fac9 - _0x2d6046;
          }),
          _0x4f472b = _0x25b709.filter(_0x1a8dda => _0x1a8dda.maxNum - _0x1a8dda.receiveNum > 0 && _0x1a8dda.taskDetail.materialGroup.groupName.includes("红包"));
        _0x4f472b?.["length"] ? await this.moonbox_receiveActiveTask(_0x4f472b) : (this.log("没有可领取的阅光宝盒红包任务了"), this.need_read_moonbox = false);
      } else {
        let _0x39c583 = _0x2c8f5f?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x15d0dd + "]: " + _0x39c583);
      }
    } catch (_0x161984) {
      console.log(_0x161984);
    }
  }
  async moonbox_receiveActiveTask(_0x5d41ed, _0x1e5b68 = 0, _0xed64bd = {}) {
    try {
      let _0x482238 = {
          activeId: _0x5ea031.moonbox,
          taskId: _0x5d41ed[_0x1e5b68].secondTaskId,
          ...this.get_woread_param()
        },
        _0x2f92d1 = this.encode_woread(_0x482238);
      const _0xaadebd = {
        sign: _0x2f92d1
      };
      const _0x534a14 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0xaadebd
      };
      let {
          result: _0x24f794
        } = await this.woread_api(_0x534a14),
        _0x118120 = _0x34b85e.get(_0x24f794, "code", -1);
      if (_0x118120 == "0000") {
        this.need_read_moonbox = true;
        this.log("领取阅光宝盒任务[" + _0x5d41ed?.[_0x1e5b68]?.["taskDetail"]?.["taskName"] + "]成功");
      } else {
        let _0x5aeaf4 = _0x24f794?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x5d41ed?.[_0x1e5b68]?.["taskDetail"]?.["taskName"] + "]失败[" + _0x118120 + "]: " + _0x5aeaf4);
        _0x5aeaf4?.["includes"]("今天无法完成") && _0x5d41ed?.["length"] > _0x1e5b68 + 1 && (await this.moonbox_receiveActiveTask(_0x5d41ed, _0x1e5b68 + 1, _0xed64bd));
      }
    } catch (_0x57290d) {
      console.log(_0x57290d);
    }
  }
  async moonbox_queryReadStatus(_0x3fac38 = {}) {
    try {
      let _0x2ccfe3 = {
          activeIndex: _0x5ea031.moonbox,
          ...this.get_woread_param()
        },
        _0x478265 = this.encode_woread(_0x2ccfe3);
      const _0x34953d = {
        sign: _0x478265
      };
      const _0x46b9c6 = {
        fn: "moonbox_queryReadStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
        json: _0x34953d
      };
      let {
          result: _0x1e71b8
        } = await this.woread_api(_0x46b9c6),
        _0x251a78 = _0x34b85e.get(_0x1e71b8, "code", -1);
      if (_0x251a78 == "0000") {
        switch (_0x1e71b8?.["data"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0x1407f1 = {
                readTime: 2
              };
              await this.woread_addReadTime(_0x1407f1);
              await this.moonbox_drawReadActivePrize();
              break;
            }
          case "3":
            {
              this.log("阅光宝盒今天已抽奖");
              break;
            }
          case "4":
            {
              this.log("阅光宝盒今天可以抽奖");
              await this.moonbox_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0x1e71b8?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x2e8103 = _0x1e71b8?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x251a78 + "]: " + _0x2e8103);
      }
    } catch (_0x1014cc) {
      console.log(_0x1014cc);
    }
  }
  async moonbox_drawReadActivePrize(_0x36ff8b = {}) {
    try {
      let _0x26557b = {
          activeIndex: _0x5ea031.moonbox,
          ...this.get_woread_param()
        },
        _0x419cd3 = this.encode_woread(_0x26557b);
      const _0x31eb5d = {
        sign: _0x419cd3
      };
      const _0x200da8 = {
        fn: "moonbox_drawReadActivePrize",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
        json: _0x31eb5d
      };
      let {
          result: _0x1a3f6a
        } = await this.woread_api(_0x200da8),
        _0x128ba5 = _0x34b85e.get(_0x1a3f6a, "code", -1);
      if (_0x128ba5 == "0000") {
        const _0x4e50a0 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x1a3f6a?.["data"]?.["prizedesc"] || JSON.stringify(_0x1a3f6a)), _0x4e50a0);
      } else {
        let _0x28ee08 = _0x1a3f6a?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x128ba5 + "]: " + _0x28ee08);
      }
    } catch (_0x5bf8b0) {
      console.log(_0x5bf8b0);
    }
  }
  async ltyp_login(_0x49657d, _0x40dc10 = {}) {
    try {
      const _0x48133c = {
        "client-Id": _0x48a7ac,
        accessToken: ""
      };
      const _0x15bb13 = {
        clientId: _0x48a7ac,
        ticket: _0x49657d
      };
      let _0x112295 = {
          fn: "ltyp_login",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/dispatcher",
          headers: _0x48133c,
          json: {
            header: this.get_ltyp_sign_header("HandheldHallAutoLogin"),
            body: _0x15bb13
          }
        },
        {
          result: _0x478951
        } = await this.request(_0x112295),
        _0x1519e2 = _0x34b85e.get(_0x478951, "STATUS", -1);
      if (_0x1519e2 == 200) {
        this.ltyp_token = _0x478951?.["RSP"]?.["DATA"]?.["token"];
        for (let _0x5bf468 of _0x55b933) {
          await this.ltyp_incentiveTimes(_0x5bf468);
          await this.ltyp_lottery(_0x5bf468);
        }
      } else {
        let _0x2daa87 = _0x478951?.["msg"] || "";
        this.log("联通云盘登录失败[" + _0x1519e2 + "]: " + _0x2daa87);
      }
    } catch (_0x243072) {
      console.log(_0x243072);
    }
  }
  async ltyp_incentiveTimes(_0x579a34, _0x1b0f61 = {}) {
    try {
      const _0x3d14ee = {
        "client-Id": _0x48a7ac,
        "Access-Token": this.ltyp_token
      };
      const _0xacad08 = {
        bizKey: "incentiveTimesPipeline",
        activityId: _0x579a34
      };
      const _0x30feed = {
        fn: "ltyp_incentiveTimes",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTimes",
        headers: _0x3d14ee,
        searchParams: _0xacad08
      };
      let {
          result: _0x8450a3
        } = await this.request(_0x30feed),
        _0x5ab3f1 = _0x34b85e.get(_0x8450a3?.["meta"], "code", -1);
      if (_0x5ab3f1 == 0) {
        let {
          isIncentiveTask = 0,
          taskType = 0,
          incentiveTimeTotal = 0,
          incentiveTimeDone = 0
        } = _0x8450a3?.["result"];
        if (isIncentiveTask) {
          for (let _0x273fdc = incentiveTimeDone; _0x273fdc < incentiveTimeTotal; _0x273fdc++) {
            await this.ltyp_incentiveTask(_0x579a34);
          }
        }
      } else {
        let _0x3a9db0 = _0x8450a3?.["meta"]?.["message"] || "";
        this.log("联通云盘查询任务失败[" + _0x5ab3f1 + "]: " + _0x3a9db0);
      }
    } catch (_0x10b961) {
      console.log(_0x10b961);
    }
  }
  async ltyp_incentiveTask(_0x1d3f98, _0x1003fc = {}) {
    try {
      const _0x1f1414 = {
        "client-Id": _0x48a7ac,
        "Access-Token": this.ltyp_token
      };
      const _0x2cd145 = {
        activityId: _0x1d3f98
      };
      const _0x1016f9 = {
        fn: "ltyp_incentiveTask",
        method: "post",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTask",
        headers: _0x1f1414,
        json: {}
      };
      _0x1016f9.json.bizKey = "incentiveTaskPipeline";
      _0x1016f9.json.bizObject = _0x2cd145;
      let {
          result: _0x63a22f
        } = await this.request(_0x1016f9),
        _0x3f60a3 = _0x34b85e.get(_0x63a22f?.["meta"], "code", -1);
      if (_0x3f60a3 == 0) {
        let {
          incentiveStatus = 0,
          incentiveMessage = ""
        } = _0x63a22f?.["result"];
        incentiveStatus == 1 ? this.log("联通云盘完成任务成功") : this.log("联通云盘完成任务失败[" + incentiveStatus + "]: " + incentiveMessage);
      } else {
        let _0x28d6a9 = _0x63a22f?.["meta"]?.["message"] || "";
        this.log("联通云盘完成任务错误[" + _0x3f60a3 + "]: " + _0x28d6a9);
      }
    } catch (_0x26f201) {
      console.log(_0x26f201);
    }
  }
  async ltyp_lottery_times(_0x1fa0d1, _0x169efa = {}) {
    try {
      const _0x4ef497 = {
        "client-Id": _0x48a7ac,
        token: this.ltyp_token
      };
      const _0x1666b1 = {
        activityId: _0x1fa0d1
      };
      const _0x4ae152 = {
        fn: "ltyp_lottery_times",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/times",
        headers: _0x4ef497,
        searchParams: _0x1666b1
      };
      let {
          result: _0x5732b0
        } = await this.request(_0x4ae152),
        _0x26e11a = _0x34b85e.get(_0x5732b0, "RSP_CODE", -1);
      if (_0x26e11a == 0) {
        let {
          times = 0
        } = _0x5732b0?.["DATA"];
        this.log("联通云盘可以抽奖" + times + "次");
        while (times-- > 0) {
          await this.ltyp_lottery(_0x1fa0d1);
        }
      } else {
        let _0x90fbd9 = _0x5732b0?.["RSP_DESC"] || "";
        this.log("联通云盘查询抽奖次数失败[" + _0x26e11a + "]: " + _0x90fbd9);
      }
    } catch (_0x1aee64) {
      console.log(_0x1aee64);
    }
  }
  async ltyp_lottery(_0x2418a1, _0x4ae0a6 = {}) {
    try {
      const _0x36bc46 = {
        "client-Id": _0x48a7ac,
        "Access-Token": this.ltyp_token
      };
      const _0x294e13 = {
        activityId: _0x2418a1,
        type: 3
      };
      const _0x4adfe0 = {
        lottery: _0x294e13
      };
      const _0x571312 = {
        fn: "ltyp_lottery",
        method: "post",
        url: "https://panservice.mail.wo.cn/wohome/v1/lottery",
        headers: _0x36bc46,
        json: {}
      };
      _0x571312.json.bizKey = "newLottery";
      _0x571312.json.bizObject = _0x4adfe0;
      let {
          result: _0x852c10
        } = await this.request(_0x571312),
        _0x3e86b3 = _0x34b85e.get(_0x852c10?.["meta"], "code", -1);
      if (_0x3e86b3 == 0) {
        let {
          prizeName = ""
        } = _0x852c10?.["result"];
        if (prizeName) {
          const _0x54a321 = {
            notify: true
          };
          this.log("联通云盘抽奖: " + prizeName, _0x54a321);
          await this.ltyp_lottery(_0x2418a1, _0x4ae0a6);
        }
      } else {
        let _0x588244 = _0x852c10?.["meta"]?.["message"] || "";
        this.log("联通云盘抽奖错误[" + _0x3e86b3 + "]: " + _0x588244);
      }
    } catch (_0x3e9c09) {
      console.log(_0x3e9c09);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0x4b20b8 = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0xec2400
      } = await this.openPlatLineNew(_0x4b20b8);
    if (!_0xec2400) {
      return;
    }
    await this.game_login(_0xec2400);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0x18b0d7 = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0x5cae38,
        type: _0x3b1609,
        loc: _0xdca4e9
      } = await this.openPlatLineNew(_0x18b0d7);
    if (!_0x5cae38) {
      return;
    }
    await this.ttlxj_authorize(_0x5cae38, _0x3b1609, _0xdca4e9);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x97daf0 = new Date().getDate();
    _0x97daf0 >= 26 && _0x97daf0 <= 28 && (await this.epay_28_authCheck());
  }
  async draw_28_task() {
    let _0x1e1101 = new Date().getDate();
    _0x1e1101 == 28 && (await this.draw_28_queryChance());
  }
  async flmf_task() {
    if (this.city.filter(_0x3633e7 => _0x3633e7.proCode == "091").length == 0) {
      return;
    }
    let _0x3ddfaf = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x4d87bd
      } = await this.openPlatLineNew(_0x3ddfaf);
    if (!_0x4d87bd) {
      return;
    }
    await this.flmf_login(_0x4d87bd);
  }
  async ltyp_task() {
    let _0x409e2c = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x2bad6e
      } = await this.openPlatLineNew(_0x409e2c);
    if (!_0x2bad6e) {
      return;
    }
    await this.ltyp_login(_0x2bad6e);
  }
  async woread_task() {
    await this.woread_getSeeVideoAddNumber();
    await this.woread_getActivityNumber();
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    while (this.need_read_rabbit || this.need_read_moonbox) {
      let _0x574083 = 2;
      const _0x297ac6 = {
        readTime: _0x574083
      };
      await this.woread_addReadTime(_0x297ac6);
      if (this.need_read_moonbox) {
        await this.moonbox_queryCurTaskStatus();
      }
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      (this.need_read_rabbit || this.need_read_moonbox) && (this.log("等待2分钟..."), await _0x34b85e.wait(125000));
    }
  }
  async userLoginTask() {
    if (!(await this.onLine())) {
      return;
    }
    if (!(await this.woread_auth())) {
      return;
    }
    if (!(await this.woread_login())) {
      return;
    }
    await this.moonbox_queryCurTaskStatus();
  }
  async userTask() {
    _0x34b85e.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ttlxj_task();
    await this.ltyp_task();
    await this.epay_28_task();
    await this.draw_28_task();
    await this.flmf_task();
    await this.woread_task();
  }
  async userTestTask() {
    _0x34b85e.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ltyp_task();
  }
}
!(async () => {
  if (!(await _0x4434ae())) {
    return;
  }
  await _0x207abc();
  _0x34b85e.read_env(_0x56760c);
  for (let _0xfbd26e of _0x34b85e.userList) {
    await _0xfbd26e.userLoginTask();
  }
  for (let _0x1f849f of _0x34b85e.userList.filter(_0x5710af => _0x5710af.valid)) {
    await _0x1f849f.userTask();
  }
  let _0x11880c = _0x34b85e.userList.filter(_0x4e82b2 => _0x4e82b2.valid && _0x4e82b2.woread_verifycode && (_0x4e82b2.need_read_rabbit || _0x4e82b2.need_read_moonbox));
  if (_0x11880c.length) {
    let _0xf8403b = [];
    _0x34b85e.log("\n============ 开始刷阅读时长 ============");
    for (let _0x2ae78b of _0x11880c) {
      _0xf8403b.push(_0x2ae78b.woread_reading_task());
    }
    await Promise.all(_0xf8403b);
  }
})().catch(_0x42b0b8 => _0x34b85e.log(_0x42b0b8)).finally(() => _0x34b85e.exitNow());
async function _0x4434ae(_0x37473f = 0) {
  let _0x46cbd4 = false;
  try {
    const _0x227e18 = {
      fn: "auth",
      method: "get",
      url: _0x560207,
      timeout: 20000
    };
    let {
      statusCode: _0x5ea353,
      result: _0x200a1f
    } = await _0x3b2faf.request(_0x227e18);
    if (_0x5ea353 != 200) {
      _0x37473f++ < _0x3b6d33 && (_0x46cbd4 = await _0x4434ae(_0x37473f));
      return _0x46cbd4;
    }
    if (_0x200a1f?.["code"] == 0) {
      _0x200a1f = JSON.parse(_0x200a1f.data.file.data);
      if (_0x200a1f?.["commonNotify"] && _0x200a1f.commonNotify.length > 0) {
        const _0x16549f = {
          notify: true
        };
        _0x34b85e.log(_0x200a1f.commonNotify.join("\n") + "\n", _0x16549f);
      }
      _0x200a1f?.["commonMsg"] && _0x200a1f.commonMsg.length > 0 && _0x34b85e.log(_0x200a1f.commonMsg.join("\n") + "\n");
      if (_0x200a1f[_0x49bf4b]) {
        let _0x5c4b63 = _0x200a1f[_0x49bf4b];
        _0x5c4b63.status == 0 ? _0x3571a1 >= _0x5c4b63.version ? (_0x46cbd4 = true, _0x34b85e.log(_0x5c4b63.msg[_0x5c4b63.status]), _0x34b85e.log(_0x5c4b63.updateMsg), _0x34b85e.log("现在运行的脚本版本是：" + _0x3571a1 + "，最新脚本版本：" + _0x5c4b63.latestVersion)) : _0x34b85e.log(_0x5c4b63.versionMsg) : _0x34b85e.log(_0x5c4b63.msg[_0x5c4b63.status]);
      } else {
        _0x34b85e.log(_0x200a1f.errorMsg);
      }
    } else {
      _0x37473f++ < _0x3b6d33 && (_0x46cbd4 = await _0x4434ae(_0x37473f));
    }
  } catch (_0x525f17) {
    _0x34b85e.log(_0x525f17);
  } finally {
    return _0x46cbd4;
  }
}
async function _0x207abc() {
  let _0x39a47b = false;
  try {
    const _0x4dd946 = {
      fn: "getTaskUrl",
      method: "get",
      url: _0x46b71a
    };
    let {
      statusCode: _0x4b07e5,
      result: _0x4a3122
    } = await _0x3b2faf.request(_0x4dd946);
    if (_0x4b07e5 != 200) {
      return Promise.resolve();
    }
    if (_0x4a3122?.["code"] == 0) {
      _0x4a3122 = JSON.parse(_0x4a3122.data.file.data);
      if (_0x4a3122?.["moonbox"]) {
        _0x5ea031.moonbox = _0x4a3122?.["moonbox"];
      }
      if (_0x4a3122?.["ltyp_lottery"]) {
        _0x55b933 = _0x4a3122?.["ltyp_lottery"];
      }
    }
  } catch (_0x185430) {
    _0x34b85e.log(_0x185430);
  } finally {
    return _0x39a47b;
  }
}
function _0x2c04a3(_0x59a0c5) {
  return new class {
    constructor(_0x4fe5cb) {
      this.name = _0x4fe5cb;
      this.startTime = Date.now();
      const _0x52728c = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x52728c);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x20c013, _0x3069d1 = {}) {
      const _0x1f52b5 = {
        console: true
      };
      Object.assign(_0x1f52b5, _0x3069d1);
      if (_0x1f52b5.time) {
        let _0x5073d2 = _0x1f52b5.fmt || "hh:mm:ss";
        _0x20c013 = "[" + this.time(_0x5073d2) + "]" + _0x20c013;
      }
      if (_0x1f52b5.notify) {
        this.notifyStr.push(_0x20c013);
      }
      if (_0x1f52b5.console) {
        console.log(_0x20c013);
      }
    }
    get(_0x566a1a, _0x43f0f0, _0x483cc9 = "") {
      let _0x49bc46 = _0x483cc9;
      _0x566a1a?.["hasOwnProperty"](_0x43f0f0) && (_0x49bc46 = _0x566a1a[_0x43f0f0]);
      return _0x49bc46;
    }
    pop(_0xfabfbc, _0x3dc92f, _0x4b10e9 = "") {
      let _0x1e8e46 = _0x4b10e9;
      _0xfabfbc?.["hasOwnProperty"](_0x3dc92f) && (_0x1e8e46 = _0xfabfbc[_0x3dc92f], delete _0xfabfbc[_0x3dc92f]);
      return _0x1e8e46;
    }
    copy(_0x27c492) {
      return Object.assign({}, _0x27c492);
    }
    read_env(_0x13e0be) {
      let _0x573134 = _0x24b919.map(_0x57ecbb => process.env[_0x57ecbb]);
      for (let _0x547d9d of _0x573134.filter(_0x4ef5ad => !!_0x4ef5ad)) {
        let _0x260905 = _0x222279.filter(_0x2fe419 => _0x547d9d.includes(_0x2fe419)),
          _0x122944 = _0x260905.length > 0 ? _0x260905[0] : _0x222279[0];
        for (let _0x3966c1 of _0x547d9d.split(_0x122944).filter(_0x36f3bf => !!_0x36f3bf)) {
          this.userList.push(new _0x13e0be(_0x3966c1));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x535916 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x24b919.map(_0xf25710 => "[" + _0xf25710 + "]").join("或"), _0x535916);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x502a54, _0x4bb8a6, _0x2721f5 = {}) {
      while (_0x4bb8a6.idx < _0x34b85e.userList.length) {
        let _0x8217ae = _0x34b85e.userList[_0x4bb8a6.idx++];
        if (!_0x8217ae.valid) {
          continue;
        }
        await _0x8217ae[_0x502a54](_0x2721f5);
      }
    }
    async threadTask(_0x58b8fd, _0x3f9f36) {
      let _0x221477 = [];
      const _0x376a9d = {
        idx: 0
      };
      while (_0x3f9f36--) {
        _0x221477.push(this.threads(_0x58b8fd, _0x376a9d));
      }
      await Promise.all(_0x221477);
    }
    time(_0x4e6bc0, _0x420cca = null) {
      let _0x4fac2f = _0x420cca ? new Date(_0x420cca) : new Date(),
        _0xa71299 = {
          "M+": _0x4fac2f.getMonth() + 1,
          "d+": _0x4fac2f.getDate(),
          "h+": _0x4fac2f.getHours(),
          "m+": _0x4fac2f.getMinutes(),
          "s+": _0x4fac2f.getSeconds(),
          "q+": Math.floor((_0x4fac2f.getMonth() + 3) / 3),
          S: this.padStr(_0x4fac2f.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x4e6bc0) && (_0x4e6bc0 = _0x4e6bc0.replace(RegExp.$1, (_0x4fac2f.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x430bda in _0xa71299) new RegExp("(" + _0x430bda + ")").test(_0x4e6bc0) && (_0x4e6bc0 = _0x4e6bc0.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xa71299[_0x430bda] : ("00" + _0xa71299[_0x430bda]).substr(("" + _0xa71299[_0x430bda]).length)));
      return _0x4e6bc0;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x19f941 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x19f941.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x3141d3, _0x33234a, _0x406145 = {}) {
      let _0x5646ed = _0x406145.padding || "0",
        _0x578cd1 = _0x406145.mode || "l",
        _0x1b7b67 = String(_0x3141d3),
        _0x28e555 = _0x33234a > _0x1b7b67.length ? _0x33234a - _0x1b7b67.length : 0,
        _0x9010b8 = "";
      for (let _0x586933 = 0; _0x586933 < _0x28e555; _0x586933++) {
        _0x9010b8 += _0x5646ed;
      }
      _0x578cd1 == "r" ? _0x1b7b67 = _0x1b7b67 + _0x9010b8 : _0x1b7b67 = _0x9010b8 + _0x1b7b67;
      return _0x1b7b67;
    }
    json2str(_0x5f5486, _0x566985, _0x444268 = false) {
      let _0x24b54b = [];
      for (let _0x4db60c of Object.keys(_0x5f5486).sort()) {
        let _0x38b4e8 = _0x5f5486[_0x4db60c];
        if (_0x38b4e8 && _0x444268) {
          _0x38b4e8 = encodeURIComponent(_0x38b4e8);
        }
        _0x24b54b.push(_0x4db60c + "=" + _0x38b4e8);
      }
      return _0x24b54b.join(_0x566985);
    }
    str2json(_0x31046d, _0x4c4447 = false) {
      let _0x3834fe = {};
      for (let _0x118b6e of _0x31046d.split("&")) {
        if (!_0x118b6e) {
          continue;
        }
        let _0xe7dca7 = _0x118b6e.indexOf("=");
        if (_0xe7dca7 == -1) {
          continue;
        }
        let _0x7e1c95 = _0x118b6e.substr(0, _0xe7dca7),
          _0x428c18 = _0x118b6e.substr(_0xe7dca7 + 1);
        if (_0x4c4447) {
          _0x428c18 = decodeURIComponent(_0x428c18);
        }
        _0x3834fe[_0x7e1c95] = _0x428c18;
      }
      return _0x3834fe;
    }
    randomPattern(_0x376a80, _0x1d1714 = "abcdef0123456789") {
      let _0x190550 = "";
      for (let _0x41c1c6 of _0x376a80) {
        if (_0x41c1c6 == "x") {
          _0x190550 += _0x1d1714.charAt(Math.floor(Math.random() * _0x1d1714.length));
        } else {
          _0x41c1c6 == "X" ? _0x190550 += _0x1d1714.charAt(Math.floor(Math.random() * _0x1d1714.length)).toUpperCase() : _0x190550 += _0x41c1c6;
        }
      }
      return _0x190550;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x23c7fc, _0x1ab5cf = "abcdef0123456789") {
      let _0x163b1f = "";
      for (let _0x8e5a4 = 0; _0x8e5a4 < _0x23c7fc; _0x8e5a4++) {
        _0x163b1f += _0x1ab5cf.charAt(Math.floor(Math.random() * _0x1ab5cf.length));
      }
      return _0x163b1f;
    }
    randomList(_0x51bf63) {
      let _0x1aec56 = Math.floor(Math.random() * _0x51bf63.length);
      return _0x51bf63[_0x1aec56];
    }
    wait(_0x28127e) {
      return new Promise(_0x38bac6 => setTimeout(_0x38bac6, _0x28127e));
    }
    async exitNow() {
      await this.showmsg();
      let _0x209dff = Date.now(),
        _0x2d0607 = (_0x209dff - this.startTime) / 1000;
      this.log("");
      const _0x12d920 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x2d0607 + "秒", _0x12d920);
      process.exit(0);
    }
    normalize_time(_0x4db9a2, _0x4ebd4d = {}) {
      let _0x46a995 = _0x4ebd4d.len || _0x27bbfc;
      _0x4db9a2 = _0x4db9a2.toString();
      let _0x1f2f11 = _0x4db9a2.length;
      while (_0x1f2f11 < _0x46a995) {
        _0x4db9a2 += "0";
      }
      _0x1f2f11 > _0x46a995 && (_0x4db9a2 = _0x4db9a2.slice(0, 13));
      return parseInt(_0x4db9a2);
    }
    async wait_until(_0x532f0e, _0x2249a3 = {}) {
      let _0x296aa6 = _0x2249a3.logger || this,
        _0x301baa = _0x2249a3.interval || _0x35f500,
        _0x4677b6 = _0x2249a3.limit || _0xb62bbf,
        _0x5ce97d = _0x2249a3.ahead || _0x2d9204;
      if (typeof _0x532f0e == "string" && _0x532f0e.includes(":")) {
        if (_0x532f0e.includes("-")) {
          _0x532f0e = new Date(_0x532f0e).getTime();
        } else {
          let _0x4493ee = this.time("yyyy-MM-dd ");
          _0x532f0e = new Date(_0x4493ee + _0x532f0e).getTime();
        }
      }
      let _0xa5b364 = this.normalize_time(_0x532f0e) - _0x5ce97d,
        _0x3b00d3 = this.time("hh:mm:ss.S", _0xa5b364),
        _0x58975d = Date.now();
      _0x58975d > _0xa5b364 && (_0xa5b364 += 86400000);
      let _0xca66da = _0xa5b364 - _0x58975d;
      if (_0xca66da > _0x4677b6) {
        const _0x432136 = {
          time: true
        };
        _0x296aa6.log("离目标时间[" + _0x3b00d3 + "]大于" + _0x4677b6 / 1000 + "秒,不等待", _0x432136);
      } else {
        const _0x2e1854 = {
          time: true
        };
        _0x296aa6.log("离目标时间[" + _0x3b00d3 + "]还有" + _0xca66da / 1000 + "秒,开始等待", _0x2e1854);
        while (_0xca66da > 0) {
          let _0x122d3b = Math.min(_0xca66da, _0x301baa);
          await this.wait(_0x122d3b);
          _0x58975d = Date.now();
          _0xca66da = _0xa5b364 - _0x58975d;
        }
        const _0x2dc6f7 = {
          time: true
        };
        _0x296aa6.log("已完成等待", _0x2dc6f7);
      }
    }
    async wait_gap_interval(_0x5510e4, _0xb17c28) {
      let _0x467331 = Date.now() - _0x5510e4;
      _0x467331 < _0xb17c28 && (await this.wait(_0xb17c28 - _0x467331));
    }
  }(_0x59a0c5);
}