import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MdGridList } from '@angular/material';

@Component({
  selector: 'sq-grade-sidenav',
  templateUrl: './grade-sidenav.component.html',
  styleUrls: ['./grade-sidenav.component.css']
})

export class GradeSidenavComponent implements AfterViewInit {

  @ViewChild('sidenav') sidenav;

  @Output() buttonClicked = new EventEmitter<string>();
  @Output() openedSidenav = new EventEmitter<boolean>();
  @Output() closedSidenav = new EventEmitter<boolean>();

  private options = [
    {img: require('../../../../assets/clip-art/grades/first-grade.jpg'), index: 1},
    {img: require('../../../../assets/clip-art/grades/second-grade.jpg'), index: 2},
    {img: require('../../../../assets/clip-art/grades/third-grade.jpg'), index: 3},
    {img: require('../../../../assets/clip-art/grades/fourth-grade.jpg'), index: 4},
    {img: require('../../../../assets/clip-art/grades/fifth-grade.jpg'), index: 5},
    {img: require('../../../../assets/clip-art/grades/sixth-grade.jpg'), index: 6}
  ]

  ngAfterViewInit(){
  }

  clicked(index){
    // tell the parent element what grade was selected
    this.buttonClicked.emit(index);
    // close the sidenav
    this.sidenav.close();
  }

  openSidenav(){
    this.openedSidenav.emit(true);
  }

  closeSidenav(){
    this.closedSidenav.emit(true);
  }
}
