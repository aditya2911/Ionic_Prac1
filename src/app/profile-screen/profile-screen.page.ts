import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.page.html',
  styleUrls: ['./profile-screen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfileScreenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
