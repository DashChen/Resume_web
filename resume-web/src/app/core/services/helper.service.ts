import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  base64ToU8Array(dataurl: string) {
    const arr = dataurl.split(',');
    if (!arr[0]) {
      throw false;
    }
    const res = arr[0].match(/:(.*?);/);
    if (!res) {
      throw false;
    }
    const mime = res[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return {
      u8arr: u8arr,
      mime: mime,
    }
  }

  dataURLtoFile(dataurl: string, filename: string) {
    try {
      const { u8arr, mime } = this.base64ToU8Array(dataurl);
      return new File([u8arr], filename, {type:mime});
    } catch (err) {
      return false;
    }
  }

  dataURLtoBlob(dataurl: string) {
    try {
      const { u8arr, mime } = this.base64ToU8Array(dataurl);
      return new Blob([u8arr], {type:mime});
    } catch (err) {
      return false;
    }
  }

  blobToFile(blob: Blob, filename: string) {
    return new File([blob], filename, { type: blob.type });
  }

  download(dataURL: string, filename: string) {
    const blob = this.dataURLtoBlob(dataURL);
    if (blob) {
      this.downloadFromBlob(blob, filename);
    }
  }

  downloadFromBlob(_blob: Blob, filename: string) {
    if (_blob) {
      const url = window.URL.createObjectURL(_blob);
      this.downloadFromObjectURL(url, filename);
    }
  }

  downloadFromObjectURL(url: string, filename: string) {
    const a = document.createElement("a") as HTMLAnchorElement;
    a.href = url;
    a.download = filename;
    a.click();

    window.URL.revokeObjectURL(url);
  }

  getParamsAsObject(query: string) {
    query = query.substring(query.indexOf('?') + 1);

    var re = /([^&=]+)=?([^&]*)/g;
    var decodeRE = /\+/g;

    var decode = function (str: string) {
        return decodeURIComponent(str.replace(decodeRE, " "));
    };

    var params = {} as any, e;
    while (e = re.exec(query)) {
        var k = decode(e[1]), v = decode(e[2]);
        if (k.substring(k.length - 2) === '[]') {
            k = k.substring(0, k.length - 2);
            (params[k] || (params[k] = [])).push(v);
        }
        else params[k] = v;
    }

    var assign = function (obj: any, keyPath: string[], value: string) {
        var lastKeyIndex = keyPath.length - 1;
        for (var i = 0; i < lastKeyIndex; ++i) {
            var key = keyPath[i];
            if (!(key in obj))
                obj[key] = {}
            obj = obj[key];
        }
        obj[keyPath[lastKeyIndex]] = value;
    }

    for (var prop in params) {
        var structure = prop.split('[');
        if (structure.length > 1) {
            var levels: string[] = [];
            structure.forEach(function (item, i) {
                var key = item.replace(/[?[\]\\ ]/g, '');
                levels.push(key);
            });
            assign(params, levels, params[prop]);
            delete(params[prop]);
        }
    }
    return params;
  }

  makeid(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
