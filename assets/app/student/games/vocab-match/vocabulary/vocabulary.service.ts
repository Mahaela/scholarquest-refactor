import { Injectable } from '@angular/core';

@Injectable()
export class VocabularyService {
    private vocab1 = { word: 'add', definition: 'Join together to find the total or sum'};
    private vocab2 = { word: 'addend', definition: 'Any numbers being added together, like 2+3+6'};
    private vocab3 = { word: 'air', definition: 'Invisible, odorless and tasteless gases that surround the earth'};
    private vocab4 = { word: 'cause', definition: 'Why something happens'};
    private vocab5 = { word: 'American', definition: 'A citizen of the United States of America'};
    private vocab6 = { word: 'audience', definition: 'A group that listens or watches'};
    private vocab7 = { word: 'authority', definition: 'A person in charge'};
    private vocab8 = { word: 'building', definition: 'A permanent structure, like a house, a church, or a store'};
    private vocab9 = { word: 'celebration', definition: 'Activities for a special occasion'};
    private vocab10 = { word: 'effect', definition: 'what happened'};
    private vocab11 = { word: 'citizen', definition: 'A person who has rights and privileges'};
    private vocab12 = { word: 'city', definition: 'A place where people live, larger than a town'};
    private vocab13 = { word: 'cloud', definition: 'tiny bits of water that are visible above the earth'};
    private vocab14 = { word: 'coach', definition: 'A person who helps you or your team'};
    private vocab15 = { word: 'composer', definition: 'A person who writes music'};
    private vocab16 = { word: 'Conductor', definition: 'A person who leads the band or chorus'};
    private vocab17 = { word: 'consonant', definition: 'A letter other than a vowel'};
    private vocab18 = { word: 'country', definition: 'A place where people live with the same government'};
    private vocab19 = { word: 'desert', definition: 'A dry sandy place'};
    private vocab20 = { word: 'dictionary', definition: 'A book giving the meanings of words in alphabetical order'};
    private vocab21 = { word: 'difference', definition: 'The answer to a subtraction problem'};
    private vocab22 = { word: 'doubles', definition: 'Two addends that are the same number, like 3+3, 6+6'};
    private vocab23 = { word: 'earth', definition: 'The planet we live on'};
    private vocab24 = { word: 'emergency', definition: 'Something unexpected calling for quick action'};
    private vocab25 = { word: 'fact families', definition: 'Addition and subtraction sentences that use the same numbers'};
    private vocab26 = { word: 'forest', definition: 'A growth of trees'};
    private vocab27 = { word: 'globe', definition: 'A round model of the earth'};
    private vocab28 = { word: 'GO', definition: 'A chart used to organize information'};
    private vocab29 = { word: 'habitat', definition: 'A place where animals or plants live and grow'};
    private vocab30 = { word: 'healthy', definition: 'Being free of illness or disease'};

    private vocabulary = [this.vocab1, this.vocab2, this.vocab3, this.vocab4, this.vocab5,
    this.vocab6, this.vocab7, this.vocab8, this.vocab9, this.vocab10,
    this.vocab11, this.vocab12, this.vocab13, this.vocab14, this.vocab15,
    this.vocab16, this.vocab17, this.vocab18, this.vocab19, this.vocab20,
    this.vocab21, this.vocab22, this.vocab23, this.vocab24, this.vocab25,
    this.vocab26, this.vocab27, this.vocab28, this.vocab29, this.vocab30];

    constructor() { }

    getVocabulary(): any[] {
        return this.vocabulary;
    }
}
