import { Injectable } from '@angular/core';

@Injectable()
export class VocabMatchSecondService {
    private vocab1 = ['add', 'Join together to find the total or sum'];
    private vocab2 = ['addend', 'Any numbers being added together, like 2+3+6'];
    private vocab3 = ['air', 'Invisible, odorless and tasteless gases that surround the earth'];
    private vocab4 = ['cause', 'Why something happens'];
    private vocab5 = ['American', 'A citizen of the United States of America'];
    private vocab6 = ['audience', 'A group that listens or watches'];
    private vocab7 = ['authority', 'A person in charge'];
    private vocab8 = ['building', 'A permanent structure, like a house, a church, or a store'];
    private vocab9 = ['celebration', 'Activities for a special occasion'];
    private vocab10 = ['effect', 'what happened'];
    private vocab11 = ['citizen', 'A person who has rights and privileges'];
    private vocab12 = ['city', 'A place where people live, larger than a town'];
    private vocab13 = ['cloud', 'tiny bits of water that are visible above the earth'];
    private vocab14 = ['coach', 'A person who helps you or your team'];
    private vocab15 = ['composer', 'A person who writes music'];
    private vocab16 = ['Conductor', 'A person who leads the band or chorus'];
    private vocab17 = ['consonant', 'A letter other than a vowel'];
    private vocab18 = ['country', 'A place where people live with the same government'];
    private vocab19 = ['desert', 'A dry sandy place'];
    private vocab20 = ['dictionary', 'A book giving the meanings of words in alphabetical order'];
    private vocab21 = ['difference', 'The answer to a subtraction problem'];
    private vocab22 = ['doubles', 'Two addends that are the same number, like 3+3, 6+6'];
    private vocab23 = ['earth', 'The planet we live on'];
    private vocab24 = ['emergency', 'Something unexpected calling for quick action'];
    private vocab25 = ['fact families', 'Addition and subtraction sentences that use the same numbers'];
    private vocab26 = ['forest', 'A growth of trees'];
    private vocab27 = ['globe', 'A round model of the earth'];
    private vocab28 = ['GO', 'A chart used to organize information'];
    private vocab29 = ['habitat', 'A place where animals or plants live and grow'];
    private vocab30 = ['healthy', 'Being free of illness or disease'];

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
