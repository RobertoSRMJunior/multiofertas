import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostosPage } from './postos';

@NgModule({
  declarations: [
    PostosPage,
  ],
  imports: [
    IonicPageModule.forChild(PostosPage),
  ],
})
export class PostosPageModule {}
