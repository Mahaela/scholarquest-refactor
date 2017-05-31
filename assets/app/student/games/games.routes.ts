import { Routes } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';
import { MathBingoComponent } from './math-bingo/math-bingo.component';
import { VocabMatchComponent } from './vocab-match/vocab-match.component';
import { TypingComponent } from './typing/typing.component';

export const GAMES_ROUTES: Routes = [
    { path: 'list', component: GamesListComponent },
    { path: 'mathBingo', component: MathBingoComponent },
    { path: 'vocabMatch', component: VocabMatchComponent },
    { path: 'typing', component: TypingComponent }
]