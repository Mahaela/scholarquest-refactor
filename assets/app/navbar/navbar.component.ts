import { Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

//import { StudentService } from '../student/student.service';
import{ AuthService } from '../auth/auth.service';


@Component({
  selector: 'sq-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  OnDestroy{
    private bronzeCoins = "00";
    private silverCoins = "00";
    private goldCoins = "00";
    private loggedIn = false;
    private loggedInSub: Subscription;
    private coinsSub: Subscription;
    
    //constructor(private studentService: StudentService, private router: Router, private authService: AuthService) {
    //   this.loggedInSub = authService.isLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn);
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
   // }

    getLoggedIn(): boolean {
        return this.loggedIn;
    }

//     logout() {
//       this.authService.logout();
//       this.studentService.logout();
//       this.router.navigate(['']);
//   }

  ngOnDestroy(){
      this.loggedInSub.unsubscribe();
      this.coinsSub.unsubscribe();
  }
}
