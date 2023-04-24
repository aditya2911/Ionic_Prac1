import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule, NavController } from '@ionic/angular';
import * as Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  worker!: Tesseract.Worker;
  workerReady  = false;
  image = "../../assets/images/test.jpg";
  ocrResult = '';
  captureProgress = 0;
  constructor(private navCtrl:NavController) {
    this.loadWorker();

  }

 

  async loadWorker(){
    this.worker = createWorker({

      // workerPath:"../../assets/libs/worker-min.js",
      // corePath:"../../assets/libs/tesseract-core.wasm.js",
      // langPath:"../../assets/libs/eng.traineddata.gz",
      logger:progress=>{
        console.log(progress);
        if(progress.status == 'recognizing text'){
          this.captureProgress = Math.floor(progress.progress*100);
        }
      }
    })
    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    // await this.worker.loadLanguage('hin');
    // await this.worker.initialize('hin');

    console.log("Finist");
    this.workerReady = true;
  }
  goToNextPage(){
      this.navCtrl.navigateForward(['profile']);
  }
async captureImage(){
  const image = await Camera.getPhoto({
    quality:100,
    allowEditing:true,
    resultType:CameraResultType.DataUrl,
    source:CameraSource.Camera
  })

  console.log('image',image);
  this.image = image.dataUrl || "";

}
  async recognizeImage(){
    const result = await this.worker.recognize(this.image,{
    
    });
    this.ocrResult = result.data.text
  // Extract name using regular expression
const nameRegex = /Name: ([a-zA-Z\s]+)+/;
const nameMatch = this.ocrResult.match(nameRegex);
const name = nameMatch ? nameMatch[1] : '';

// Extract date of birth using regular expression
const dobRegex = /DOB: (\d{4})-(\d{2})-(\d{2})/i;
const dobMatch = this.ocrResult.match(dobRegex);
const dob = dobMatch ? dobMatch[0].substr(5) : '';

// Extract phone number using regular expression
const phoneRegex = /([+]?[0-9]{0,2}[-\s]?)?([0-9]{10})/i;
const phoneMatch = this.ocrResult.match(phoneRegex);
const phone = phoneMatch ? phoneMatch[0] : '';

    console.log(name,dob,phone);
    console.log(result);
  }
  
}
