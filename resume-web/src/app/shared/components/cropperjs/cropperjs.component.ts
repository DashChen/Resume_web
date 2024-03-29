import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import Cropper from 'cropperjs';

export interface ImageCropperSetting {
    width: number;
    height: number;
}

export interface ImageCropperResult {
    imageData: Cropper.ImageData;
    cropData: Cropper.CropBoxData;
    blob?: Blob;
    dataUrl?: string;
}

@Component({
  selector: 'app-shared-cropperjs',
  templateUrl: './cropperjs.component.html',
  styleUrls: ['./cropperjs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CropperjsComponent implements OnInit {

  @ViewChild('image') image!: ElementRef;

  @Input() imageUrl: any;
  @Input() settings!: ImageCropperSetting;
  @Input() cropbox!: Cropper.CropBoxData;
  @Input() loadImageErrorText!: string;
  @Input() cropperOptions: any = {};

  @Output() export = new EventEmitter<ImageCropperResult>();
  @Output() ready = new EventEmitter();

  public isLoading: boolean = true;
  public cropper?: Cropper;
  public imageElement!: HTMLImageElement;
  public loadError: any;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Image loaded
   * @param ev
   */
  imageLoaded(ev: Event) {

      //
      // Unset load error state
      this.loadError = false;

      //
      // Setup image element
      const image = ev.target as HTMLImageElement;
      this.imageElement = image;

      //
      // Add crossOrigin?
      if (this.cropperOptions?.checkCrossOrigin) image.crossOrigin = 'anonymous';

      //
      // Image on ready event
      image.addEventListener('ready', () => {
          //
          // Emit ready
          this.ready.emit(true);

          //
          // Unset loading state
          this.isLoading = false;

          //
          // Validate cropbox existance
          if (this.cropbox && this.cropper) {

              //
              // Set cropbox data
              this.cropper.setCropBoxData(this.cropbox);
          }
      });

      //
      // Setup aspect ratio according to settings
      let aspectRatio = NaN;
      if (this.settings) {
          const { width, height } = this.settings;
          aspectRatio = width / height;
      }

      //
      // Set crop options
      // extend default with custom config
      this.cropperOptions = Object.assign({
          aspectRatio,
          movable: false,
          scalable: false,
          zoomable: false,
          viewMode: 1,
          checkCrossOrigin: true
      }, this.cropperOptions);

      //
      // Set cropperjs
      if (this.cropper) {
          this.cropper.destroy();
          this.cropper = undefined;
      }
      this.cropper = new Cropper(image, this.cropperOptions);
  }

  /**
   * Image load error
   * @param event
   */
  imageLoadError(event: any) {

      //
      // Set load error state
      this.loadError = true;

      //
      // Unset loading state
      this.isLoading = false;
  }

  /**
   * Export canvas
   * @param base64
   */
  exportCanvas(base64?: any) {

      //
      // Get and set image, crop and canvas data
      const imageData = this.cropper?.getImageData() || {} as Cropper.ImageData;
      const cropData = this.cropper?.getCropBoxData() || {} as Cropper.CropBoxData;
      const canvas = this.cropper?.getCroppedCanvas();
      const data = { imageData, cropData };

      //
      // Create promise to resolve canvas data
      const promise = new Promise(resolve => {

          //
          // Validate base64
          if (base64 && canvas) {

              //
              // Resolve promise with dataUrl
              return resolve({
                  dataUrl: canvas.toDataURL('image/png')
              });
          }
          if (canvas) {
            canvas.toBlob(blob => resolve({ blob }));
          }
      });

      //
      // Emit export data when promise is ready
      promise.then(res => {
          this.export.emit(Object.assign(data, res));
      });
  }

}
