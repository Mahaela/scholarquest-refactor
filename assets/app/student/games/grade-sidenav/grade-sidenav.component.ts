import { Component, Output, EventEmitter } from '@angular/core';
import { MdGridList } from '@angular/material';

@Component({
  selector: 'sq-grade-sidenav',
  templateUrl: './grade-sidenav.component.html',
  styleUrls: ['./grade-sidenav.component.css']
})

export class GradeSidenavComponent {

  @Output() buttonClicked = new EventEmitter<string>();

  private options = [
    {img: require('../../../assets/clip-art/grades/first-grade.jpg'), index: 1},
    {img: require('../../../assets/clip-art/grades/second-grade.jpg'), index: 2},
    {img: require('../../../assets/clip-art/grades/third-grade.jpg'), index: 3},
    {img: require('../../../assets/clip-art/grades/fourth-grade.jpg'), index: 4},
    {img: require('../../../assets/clip-art/grades/fifth-grade.jpg'), index: 5},
    {img: require('../../../assets/clip-art/grades/sixth-grade.jpg'), index: 6}
  ]

  clicked(index){
    this.buttonClicked.emit(index);
  }
}
