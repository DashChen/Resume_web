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
}
