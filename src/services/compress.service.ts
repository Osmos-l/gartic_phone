import { Injectable } from '@angular/core';
import {NgxImageCompressService} from 'ngx-image-compress';
 
@Injectable({
  providedIn: 'root'
})
export class CompressService {

  constructor(private imageCompress: NgxImageCompressService) { }

  compressImg(image) {
    this.imageCompress.uploadFile().then(({image, orientation}) => {
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
        }
      );    
    });
  }
}
