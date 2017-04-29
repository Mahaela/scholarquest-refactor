import { Injectable } from '@angular/core';

@Injectable()
export class EditAvatarService {

    private faceDiamondCl1 = require('../../../assets/avatars/face-shape/diamond/face-diamond-cl1.png');
    private faceDiamondCl2 = require('../../../assets/avatars/face-shape/diamond/face-diamond-cl2.png');
    private faceDiamondCl3 = require('../../../assets/avatars/face-shape/diamond/face-diamond-cl3.png');
    private faceDiamondCl4 = require('../../../assets/avatars/face-shape/diamond/face-diamond-cl4.png');
    private faceDiamondCl5 = require('../../../assets/avatars/face-shape/diamond/face-diamond-cl5.png');
    private faceDiamondCl6 = require('../../../assets/avatars/face-shape/diamond/face-diamond-cl6.png');

    private faceHeartCl1 = require('../../../assets/avatars/face-shape/diamond/face-heart-cl1.png');
    private faceHeartCl2 = require('../../../assets/avatars/face-shape/diamond/face-heart-cl2.png');
    private faceHeartCl3 = require('../../../assets/avatars/face-shape/diamond/face-heart-cl3.png');
    private faceHeartCl4 = require('../../../assets/avatars/face-shape/diamond/face-heart-cl4.png');
    private faceHeartCl5 = require('../../../assets/avatars/face-shape/diamond/face-heart-cl5.png');
    private faceHeartCl6 = require('../../../assets/avatars/face-shape/diamond/face-heart-cl6.png');
    
    private faceLongCl1 = require('../../../assets/avatars/face-shape/diamond/face-long-cl1.png');
    private faceLongCl2 = require('../../../assets/avatars/face-shape/diamond/face-long-cl2.png');
    private faceLongCl3 = require('../../../assets/avatars/face-shape/diamond/face-long-cl3.png');
    private faceLongCl4 = require('../../../assets/avatars/face-shape/diamond/face-long-cl4.png');
    private faceLongCl5 = require('../../../assets/avatars/face-shape/diamond/face-long-cl5.png');
    private faceLongCl6 = require('../../../assets/avatars/face-shape/diamond/face-long-cl6.png');

    private faceOvalCl1 = require('../../../assets/avatars/face-shape/diamond/face-oval-cl1.png');
    private faceOvalCl2 = require('../../../assets/avatars/face-shape/diamond/face-oval-cl2.png');
    private faceOvalCl3 = require('../../../assets/avatars/face-shape/diamond/face-oval-cl3.png');
    private faceOvalCl4 = require('../../../assets/avatars/face-shape/diamond/face-oval-cl4.png');
    private faceOvalCl5 = require('../../../assets/avatars/face-shape/diamond/face-oval-cl5.png');
    private faceOvalCl6 = require('../../../assets/avatars/face-shape/diamond/face-oval-cl6.png');

    private faceRoundCl1 = require('../../../assets/avatars/face-shape/diamond/face-round-cl1.png');
    private faceRoundCl2 = require('../../../assets/avatars/face-shape/diamond/face-round-cl2.png');
    private faceRoundCl3 = require('../../../assets/avatars/face-shape/diamond/face-round-cl3.png');
    private faceRoundCl4 = require('../../../assets/avatars/face-shape/diamond/face-round-cl4.png');
    private faceRoundCl5 = require('../../../assets/avatars/face-shape/diamond/face-round-cl5.png');
    private faceRoundCl6 = require('../../../assets/avatars/face-shape/diamond/face-round-cl6.png');

    private faceSquareCl1 = require('../../../assets/avatars/face-shape/diamond/face-square-cl1.png');
    private faceSquareCl2 = require('../../../assets/avatars/face-shape/diamond/face-square-cl2.png');
    private faceSquareCl3 = require('../../../assets/avatars/face-shape/diamond/face-square-cl3.png');
    private faceSquareCl4 = require('../../../assets/avatars/face-shape/diamond/face-square-cl4.png');
    private faceSquareCl5 = require('../../../assets/avatars/face-shape/diamond/face-square-cl5.png');
    private faceSquareCl6 = require('../../../assets/avatars/face-shape/diamond/face-square-cl6.png');

    private eyes1Cl1 = require('../../../assets/avatars/eyes/eyes1/eyes1-amber.png');
    private eyes1Cl2 = require('../../../assets/avatars/eyes/eyes1/eyes1-blue.png');
    private eyes1Cl3 = require('../../../assets/avatars/eyes/eyes1/eyes1-brown.png');
    private eyes1Cl4 = require('../../../assets/avatars/eyes/eyes1/eyes1-blue.png');
    private eyes1Cl5 = require('../../../assets/avatars/eyes/eyes1/eyes1-grey.png');
    private eyes1Cl6 = require('../../../assets/avatars/eyes/eyes1/eyes1-hazel.png');

    private eyes2Cl1 = require('../../../assets/avatars/eyes/eyes2/eyes2-amber.png');
    private eyes2Cl2 = require('../../../assets/avatars/eyes/eyes2/eyes2-blue.png');
    private eyes2Cl3 = require('../../../assets/avatars/eyes/eyes2/eyes2-brown.png');
    private eyes2Cl4 = require('../../../assets/avatars/eyes/eyes2/eyes2-blue.png');
    private eyes2Cl5 = require('../../../assets/avatars/eyes/eyes2/eyes2-grey.png');
    private eyes2Cl6 = require('../../../assets/avatars/eyes/eyes2/eyes2-hazel.png');
    
    private eyes3Cl1 = require('../../../assets/avatars/eyes/eyes3/eyes3-amber.png');
    private eyes3Cl2 = require('../../../assets/avatars/eyes/eyes3/eyes3-blue.png');
    private eyes3Cl3 = require('../../../assets/avatars/eyes/eyes3/eyes3-brown.png');
    private eyes3Cl4 = require('../../../assets/avatars/eyes/eyes3/eyes3-blue');
    private eyes3Cl5 = require('../../../assets/avatars/eyes/eyes3/eyes3-grey.png');
    private eyes3Cl6 = require('../../../assets/avatars/eyes/eyes3/eyes3-hazel.png');

    private eyes4Cl1 = require('../../../assets/avatars/eyes/eyes4/eyes4-amber.png');
    private eyes4Cl2 = require('../../../assets/avatars/eyes/eyes4/eyes4-blue.png');
    private eyes4Cl3 = require('../../../assets/avatars/eyes/eyes4/eyes4-brown.png');
    private eyes4Cl4 = require('../../../assets/avatars/eyes/eyes4/eyes4-blue.png');
    private eyes4Cl5 = require('../../../assets/avatars/eyes/eyes4/eyes4-grey.png');
    private eyes4Cl6 = require('../../../assets/avatars/eyes/eyes4/eyes4-hazel.png');

    private eyes5Cl1 = require('../../../assets/avatars/eyes/eyes5/eyes5-amber.png');
    private eyes5Cl2 = require('../../../assets/avatars/eyes/eyes5/eyes5-blue.png');
    private eyes5Cl3 = require('../../../assets/avatars/eyes/eyes5/eyes5-brown.png');
    private eyes5Cl4 = require('../../../assets/avatars/eyes/eyes5/eyes5-blue.png');
    private eyes5Cl5 = require('../../../assets/avatars/eyes/eyes5/eyes5-grey.png');
    private eyes5Cl6 = require('../../../assets/avatars/eyes/eyes5/eyes5-hazel.png');

    private eyes6Cl1 = require('../../../assets/avatars/eyes/eyes5/eyes6-amber.png');
    private eyes6Cl2 = require('../../../assets/avatars/eyes/eyes5/eyes6-blue.png');
    private eyes6Cl3 = require('../../../assets/avatars/eyes/eyes5/eyes6-brown.png');
    private eyes6Cl4 = require('../../../assets/avatars/eyes/eyes5/eyes6-blue.png');
    private eyes6Cl5 = require('../../../assets/avatars/eyes/eyes5/eyes6-grey.png');
    private eyes6Cl6 = require('../../../assets/avatars/eyes/eyes5/eyes6-hazel.png');

    private nose1 = require('../../../assets/avatars/nose/nose1.png');
    private nose2 = require('../../../assets/avatars/nose/nose2.png');
    private nose3 = require('../../../assets/avatars/nose/nose3.png');
    private nose4 = require('../../../assets/avatars/nose/nose4.png');
    private nose5 = require('../../../assets/avatars/nose/nose5.png');
    private nose6 = require('../../../assets/avatars/nose/nose6.png');

    private mouth1 = require('../../../assets/avatars/mouth/mouth1.png');
    private mouth2 = require('../../../assets/avatars/mouth/mouth2.png');

    getFacesColor1(): string[]{
        return [ this.faceDiamondCl1, this.faceHeartCl1, this.faceLongCl1, this.faceOvalCl1,
                        this.faceRoundCl1, this.faceSquareCl1 ]
    }

    getFacesColor2(): string[]{
        return [ this.faceDiamondCl2, this.faceHeartCl2, this.faceLongCl2, this.faceOvalCl2,
                        this.faceRoundCl2, this.faceSquareCl2 ]
    }

    getFacesColor3(): string[]{
        return [ this.faceDiamondCl3, this.faceHeartCl3, this.faceLongCl3, this.faceOvalCl3,
                        this.faceRoundCl3, this.faceSquareCl3 ]
    }

    getFacesColor4(): string[]{
        return [ this.faceDiamondCl4, this.faceHeartCl4, this.faceLongCl4, this.faceOvalCl4,
                        this.faceRoundCl4, this.faceSquareCl4 ]
    }

    getFacesColor5(): string[]{
        return [ this.faceDiamondCl5, this.faceHeartCl5, this.faceLongCl5, this.faceOvalCl4,
                        this.faceRoundCl5, this.faceSquareCl5 ]
    }

    getFacesColor6(): string[]{
        return [ this.faceDiamondCl6, this.faceHeartCl6, this.faceLongCl6, this.faceOvalCl6,
                        this.faceRoundCl6, this.faceSquareCl6 ]
    }

    getEyesColor1(): string[]{
        return [ this.eyes1Cl1, this.eyes2Cl1, this.eyes3Cl1, this.eyes4Cl1,
                        this.eyes5Cl1, this.eyes6Cl1 ]
    }

    getEyesColor2(): string[]{
        return [ this.eyes1Cl2, this.eyes2Cl2, this.eyes3Cl2, this.eyes4Cl2,
                        this.eyes5Cl2, this.eyes6Cl2 ]
    }
    
    getEyesColor3(): string[]{
        return [ this.eyes1Cl3, this.eyes2Cl3, this.eyes3Cl3, this.eyes4Cl3,
                        this.eyes5Cl3, this.eyes6Cl3 ]
    }
    
    getEyesColor4(): string[]{
        return [ this.eyes1Cl4, this.eyes2Cl4, this.eyes3Cl4, this.eyes4Cl4,
                        this.eyes5Cl4, this.eyes6Cl4 ]
    }
    
    getEyesColor5(): string[]{
        return [ this.eyes1Cl5, this.eyes2Cl5, this.eyes3Cl5, this.eyes4Cl5,
                        this.eyes5Cl5, this.eyes6Cl5 ]
    }

    getEyesColor6(): string[]{
        return [ this.eyes1Cl6, this.eyes2Cl6, this.eyes3Cl6, this.eyes4Cl6,
                        this.eyes5Cl6, this.eyes6Cl6 ]
    }

    getNoses(): string[]{
        return[ this.nose1, this.nose2, this. nose3, this.nose4, this.nose5, this.nose6 ]
    }

    getMouths(): string[]{
        return[ this.mouth1. this.mouth2 ]
    }
}
