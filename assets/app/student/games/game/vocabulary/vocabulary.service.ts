import { Injectable } from '@angular/core';

@Injectable()
export class VocabularyService {

    getVocabularyFirst(): any[] {
        return [ { word: 'add', definition: 'Join together to find the total or sum'},
            { word: 'addend', definition: 'Any numbers being added together, like 2+3+6'},
            { word: 'air', definition: 'Invisible, odorless and tasteless gases that surround the earth'},
            { word: 'cause', definition: 'Why something happens'},
            { word: 'American', definition: 'A citizen of the United States of America'},
            { word: 'audience', definition: 'A group that listens or watches'},
            { word: 'authority', definition: 'A person in charge'},
            { word: 'building', definition: 'A permanent structure, like a house, a church, or a store'},
            { word: 'celebration', definition: 'Activities for a special occasion'},
            { word: 'effect', definition: 'what happened'},
            { word: 'citizen', definition: 'A person who has rights and privileges'},
            { word: 'city', definition: 'A place where people live, larger than a town'},
            { word: 'cloud', definition: 'tiny bits of water that are visible above the earth'},
            { word: 'coach', definition: 'A person who helps you or your team'},
            { word: 'composer', definition: 'A person who writes music'},
            { word: 'Conductor', definition: 'A person who leads the band or chorus'},
            { word: 'consonant', definition: 'A letter other than a vowel'},
            { word: 'country', definition: 'A place where people live with the same government'},
            { word: 'desert', definition: 'A dry sandy place'},
            { word: 'dictionary', definition: 'A book giving the meanings of words in alphabetical order'},
            { word: 'difference', definition: 'The answer to a subtraction problem'},
            { word: 'doubles', definition: 'Two addends that are the same number, like 3+3, 6+6'},
            { word: 'earth', definition: 'The planet we live on'},
            { word: 'emergency', definition: 'Something unexpected calling for quick action'},
            { word: 'fact families', definition: 'Addition and subtraction sentences that use the same numbers'},
            { word: 'forest', definition: 'A growth of trees'},
            { word: 'globe', definition: 'A round model of the earth'},
            { word: 'GO', definition: 'A chart used to organize information'},
            { word: 'habitat', definition: 'A place where animals or plants live and grow'},
            { word: 'healthy', definition: 'Being free of illness or disease'}
        ]
    }

    getVocabularySecond(): any[] {
        return [ { word: 'annoy', definition: 'To make someone a little angry'},
            { word: 'compfortable', definition: 'providing physical ease and relaxation'},
            { word: 'directions', definition: 'the path along which something moves, lies, or points'},
            { word: 'ignore', definition: 'refuse to take notice of or acknowledge'},
            { word: 'mumble', definition: 'say something indistinctly and quietly'},
            { word: 'precious', definition: 'of great value; not to be wasted or treated carelessly'},
            { word: 'protect', definition: 'keep safe from harm or injury'},
            { word: 'searching', definition: 'thoroughly scrutinizing, especially in a disconcerting way'},
            { word: 'squirm', definition: 'wriggle or twist the body from side to side, especially as a result of nervousness or discomfort'},
            { word: 'wonder', definition: 'a feeling of surprise mingled with admiration'}
         ]
    }

    getVocabularyThird(): any[] {
        return [ { word: 'contain', definition: 'to hold something within iteslf'},
            { word: 'elegant', definition: 'showing good taste; graceful; beautiful'},
            { word: 'directions', definition: 'the path along which something moves, lies, or points'},
            { word: 'enable', definition: 'to make possible'},
            { word: 'grasp', definition: 'hold firmly'},
            { word: 'limit', definition: 'as far as something can go'},
            { word: 'observe', definition: 'to watch carefully'},
            { word: 'rely', definition: 'To count on'},
            { word: 'survey', definition: 'the collection of data by having people answer a series of questions'},
            { word: 'wit', definition: 'intelligence and the ability to think quickly'}
         ]
    }

    getVocabularyFourth(): any[] {
        return [ { word: 'blossom', definition: 'a flower or a mass of flowers on a tree or bush'},
            { word: 'demonstrate', definition: 'clearly show the existence or truth of (something) by giving proof or evidence'},
            { word: 'fragile', definition: 'flimsy or insubstantial; easily destroyed'},
            { word: 'generosity', definition: 'the quality of being kind and generous'},
            { word: 'jagged', definition: 'having rough, sharp points protruding'},
            { word: 'modest', definition: "unassuming or moderate in the estimation of one's abilities or achievements"},
            { word: 'queasy', definition: 'nauseated; feeling sick'},
            { word: 'routine', definition: 'a sequence of actions regularly followed'},
            { word: 'vacant', definition: 'not filled'},
            { word: 'weary', definition: 'feeling or showing tiredness, especially as a result of excessive exertion or lack of sleep'}
         ]
    }

    getVocabularyFifth(): any[] {
        return [ { word: 'blizzard', definition: 'a severe snowstorm with high winds and low visibility'},
            { word: 'challenge', definition: 'a call to take part in a contest or competition, especially a duel'},
            { word: 'gorge', definition: 'eat a large amount greedily; fill oneself with food'},
            { word: 'hearty', definition: 'wholesome and substantials'},
            { word: 'intercept', definition: 'obstruct (someone or something) so as to prevent them from continuing to a destination'},
            { word: 'minor', definition: "lesser in importance, seriousness, or significance"},
            { word: 'occasion', definition: 'a particular time or instance of an event'},
            { word: 'prefix', definition: 'a word, letter, or number placed before another'},
            { word: 'spurt', definition: 'a sudden gushing stream'},
            { word: 'vivid', definition: 'producing powerful feelings or strong, clear images in the mind'}
         ]
    }

    getVocabularySixth(): any[] {
        return [ { word: 'awe', definition: 'a feeling of reverential respect mixed with fear or wonder'},
            { word: 'blunder', definition: 'a stupid or careless mistake'},
            { word: 'economy', definition: 'the wealth and resources of a country or region'},
            { word: 'fuse', definition: 'join or blend to form a single entity'},
            { word: 'genre', definition: 'a category of artistic composition'},
            { word: 'ingenious', definition: "clever, original, and inventive"},
            { word: 'liberate', definition: 'set (someone) free from a situation'},
            { word: 'onset', definition: 'the beginning of something, especially something unpleasant'},
            { word: 'remorse', definition: 'deep regret or guilt for a wrong committed'},
            { word: 'terrain', definition: 'a stretch of land, especially with regard to its physical features'}
         ]
    }
}
