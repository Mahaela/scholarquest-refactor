import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CookieService } from '../shared/utils/cookie.service';

@Component({
  selector: 'sq-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    private bronzeCoins = "00";
    private silverCoins = "00";
    private goldCoins = "00";
    private loggedIn = false;
    private loggedInSub: Subscription;
    private coinsSub: Subscription;
    
    constructor( private router: Router, private cookieService: CookieService ) {
      
    //   this.coinsSub  =  studentService.coinsObs.subscribe(coins => {
    //     let goldCoinNum = Math.trunc(coins / 10000);
    //     if (goldCoinNum < 10) {
    //         this.goldCoins = "0" + goldCoinNum;
    //     }
    //     else {
    //         this.goldCoins = String(goldCoinNum);
    //     }
    //     let silverCoinNum = Math.trunc((coins % 10000)/ 100);
    //     if (silverCoinNum < 10) {
    //         this.silverCoins = "0" + silverCoinNum;
    //     }
    //     else {
    //         this.silverCoins = String(silverCoinNum);
    //     }
    //     let bronzeCoinNum = Math.trunc(coins % 100);
    //     if (bronzeCoinNum < 10) {
    //         this.bronzeCoins = "0" + bronzeCoinNum;
    //     }
    //     else {
    //         this.bronzeCoins = String(bronzeCoinNum);
    //     }
    //   });
   }
   /**
    * returns true if the user is logged in
    */
    getLoggedIn(): boolean {
        return this.cookieService.getCookie('loggedIn') == 'true';
    }

    logout() {
        document.cookie = 'loggedIn=false; path=/;'
        document.cookie = 'token=; path=/;'
        this.router.navigate(['']);
  }
}
