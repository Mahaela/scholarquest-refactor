import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { GameComponent } from './game/game.component';
import { GradeSidenavComponent } from './grade-sidenav/grade-sidenav.component';
import { EndGameDialogComponent, WinDialogInnerTextComponent, LoseDialogInnerTextComponent } from './end-game-dialog/end-game-dialog.component';
import { VocabularyService } from './vocabulary/vocabulary.service';
import { MathProblemsService } from './math-problems/math-problems.service';


@NgModule({
	imports: [
		MaterialModule,
		CommonModule,
		FlexLayoutModule
	],
	declarations: [
		EndGameDialogComponent,
		WinDialogInnerTextComponent,
		LoseDialogInnerTextComponent,
		GradeSidenavComponent,
		GameComponent
	],
	bootstrap: [ EndGameDialogComponent, WinDialogInnerTextComponent, LoseDialogInnerTextComponent ],
	exports: [ GameComponent ],
	providers: [ VocabularyService, MathProblemsService ]
})
export class GameModule {}
