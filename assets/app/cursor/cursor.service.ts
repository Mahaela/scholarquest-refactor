import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class CursorService {

    public selectedCursor = new BehaviorSubject(1);

    private cursor0 = {img: require('../assets/clip-art/None.png'), index: 1};
    private cursor1 = {img: require('../assets/cursors/BlueCursorHalo.png'), index: 2};
    private cursor2 = {img: require('../assets/cursors/GreenCursorHalo.png'), index: 3};
    private cursor3 = {img: require('../assets/cursors/RedCursorHalo.png'), index: 4};
    private cursor4 = {img: require('../assets/cursors/YellowCursorHalo.png'), index: 5};

    private cursors = [this.cursor0, this.cursor1, this.cursor2, this.cursor3, this.cursor4];

  getCursors(): {img: string, index: number}[]{
      return this.cursors;
  }
}
