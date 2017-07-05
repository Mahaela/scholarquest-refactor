import { Injectable } from '@angular/core';

@Injectable()
export class AvatarService {

    private faceDiamondCl1 = { img: require('../../../assets/avatars/face-shape/diamond/face-diamond-cl1.png'), index: '0101' };
    private faceDiamondCl2 = { img: require('../../../assets/avatars/face-shape/diamond/face-diamond-cl2.png'), index: '0201' };
    private faceDiamondCl3 = { img: require('../../../assets/avatars/face-shape/diamond/face-diamond-cl3.png'), index: '0301' };
    private faceDiamondCl4 = { img: require('../../../assets/avatars/face-shape/diamond/face-diamond-cl4.png'), index: '0401' };
    private faceDiamondCl5 = { img: require('../../../assets/avatars/face-shape/diamond/face-diamond-cl5.png'), index: '0501' };
    private faceDiamondCl6 = { img: require('../../../assets/avatars/face-shape/diamond/face-diamond-cl6.png'), index: '0601' };

    private faceHeartCl1 = { img: require('../../../assets/avatars/face-shape/heart/face-heart-cl1.png'), index: '0102' };
    private faceHeartCl2 = { img: require('../../../assets/avatars/face-shape/heart/face-heart-cl2.png'), index: '0202' };
    private faceHeartCl3 = { img: require('../../../assets/avatars/face-shape/heart/face-heart-cl3.png'), index: '0302' };
    private faceHeartCl4 = { img: require('../../../assets/avatars/face-shape/heart/face-heart-cl4.png'), index: '0402' };
    private faceHeartCl5 = { img: require('../../../assets/avatars/face-shape/heart/face-heart-cl5.png'), index: '0502' };
    private faceHeartCl6 = { img: require('../../../assets/avatars/face-shape/heart/face-heart-cl6.png'), index: '0602' };
    
    private faceLongCl1 = { img: require('../../../assets/avatars/face-shape/long/face-long-cl1.png'), index: '0103' };
    private faceLongCl2 = { img: require('../../../assets/avatars/face-shape/long/face-long-cl2.png'), index: '0203' };
    private faceLongCl3 = { img: require('../../../assets/avatars/face-shape/long/face-long-cl3.png'), index: '0303' };
    private faceLongCl4 = { img: require('../../../assets/avatars/face-shape/long/face-long-cl4.png'), index: '0403' };
    private faceLongCl5 = { img: require('../../../assets/avatars/face-shape/long/face-long-cl5.png'), index: '0503' };
    private faceLongCl6 = { img: require('../../../assets/avatars/face-shape/long/face-long-cl6.png'), index: '0603' };

    private faceOvalCl1 = { img: require('../../../assets/avatars/face-shape/oval/face-oval-cl1.png'), index: '0104' };
    private faceOvalCl2 = { img: require('../../../assets/avatars/face-shape/oval/face-oval-cl2.png'), index: '0204' };
    private faceOvalCl3 = { img: require('../../../assets/avatars/face-shape/oval/face-oval-cl3.png'), index: '0304' };
    private faceOvalCl4 = { img: require('../../../assets/avatars/face-shape/oval/face-oval-cl4.png'), index: '0404' };
    private faceOvalCl5 = { img: require('../../../assets/avatars/face-shape/oval/face-oval-cl5.png'), index: '0504' };
    private faceOvalCl6 = { img: require('../../../assets/avatars/face-shape/oval/face-oval-cl6.png'), index: '0604' };

    private faceRoundCl1 = { img: require('../../../assets/avatars/face-shape/round/face-round-cl1.png'), index: '0105' };
    private faceRoundCl2 = { img: require('../../../assets/avatars/face-shape/round/face-round-cl2.png'), index: '0205' };
    private faceRoundCl3 = { img: require('../../../assets/avatars/face-shape/round/face-round-cl3.png'), index: '0305' };
    private faceRoundCl4 = { img: require('../../../assets/avatars/face-shape/round/face-round-cl4.png'), index: '0405' };
    private faceRoundCl5 = { img: require('../../../assets/avatars/face-shape/round/face-round-cl5.png'), index: '0505' };
    private faceRoundCl6 = { img: require('../../../assets/avatars/face-shape/round/face-round-cl6.png'), index: '0605' };

    private faceSquareCl1 = { img: require('../../../assets/avatars/face-shape/square/face-square-cl1.png'), index: '0106' };
    private faceSquareCl2 = { img: require('../../../assets/avatars/face-shape/square/face-square-cl2.png'), index: '0206' };
    private faceSquareCl3 = { img: require('../../../assets/avatars/face-shape/square/face-square-cl3.png'), index: '0306' };
    private faceSquareCl4 = { img: require('../../../assets/avatars/face-shape/square/face-square-cl4.png'), index: '0406' };
    private faceSquareCl5 = { img: require('../../../assets/avatars/face-shape/square/face-square-cl5.png'), index: '0506' };
    private faceSquareCl6 = { img: require('../../../assets/avatars/face-shape/square/face-square-cl6.png'), index: '0606' };

    private faceCl1 = { img: require('../../../assets/avatars/face-color/face-cl1.png'), index: '01' };
    private faceCl2 = { img: require('../../../assets/avatars/face-color/face-cl2.png'), index: '02' };
    private faceCl3 = { img: require('../../../assets/avatars/face-color/face-cl3.png'), index: '03' };
    private faceCl4 = { img: require('../../../assets/avatars/face-color/face-cl4.png'), index: '04' };
    private faceCl5 = { img: require('../../../assets/avatars/face-color/face-cl5.png'), index: '05' };
    private faceCl6 = { img: require('../../../assets/avatars/face-color/face-cl6.png'), index: '06' };

    private faces = [ this.faceDiamondCl1, this.faceDiamondCl2, this.faceDiamondCl3, this.faceDiamondCl4, this.faceDiamondCl5, this.faceDiamondCl6,
                    this.faceHeartCl1, this.faceHeartCl2, this.faceHeartCl3, this.faceHeartCl4, this.faceHeartCl5, this.faceHeartCl6, 
                    this.faceLongCl1, this.faceLongCl2, this.faceLongCl3, this.faceLongCl4, this.faceLongCl5, this.faceLongCl6,
                    this.faceOvalCl1, this.faceOvalCl2, this.faceOvalCl3, this.faceOvalCl4, this.faceOvalCl5, this.faceOvalCl6,
                    this.faceRoundCl1, this.faceRoundCl2, this.faceRoundCl3, this.faceRoundCl4, this.faceRoundCl5, this.faceRoundCl6,
                    this.faceSquareCl1, this.faceSquareCl2, this.faceSquareCl3, this.faceSquareCl4, this.faceSquareCl5, this.faceSquareCl6, 
    ]

    private eyes1Cl1 = { img: require('../../../assets/avatars/eyes/eyes1/eyes1-amber.png'), index: '0101' };
    private eyes1Cl2 = { img: require('../../../assets/avatars/eyes/eyes1/eyes1-blue.png'), index: '0201' };
    private eyes1Cl3 = { img: require('../../../assets/avatars/eyes/eyes1/eyes1-brown.png'), index: '0301' };
    private eyes1Cl4 = { img: require('../../../assets/avatars/eyes/eyes1/eyes1-green.png'), index: '0401' };
    private eyes1Cl5 = { img: require('../../../assets/avatars/eyes/eyes1/eyes1-grey.png'), index: '0501' };
    private eyes1Cl6 = { img: require('../../../assets/avatars/eyes/eyes1/eyes1-hazel.png'), index: '0601' };

    private eyes2Cl1 = { img: require('../../../assets/avatars/eyes/eyes2/eyes2-amber.png'), index: '0102' };
    private eyes2Cl2 = { img: require('../../../assets/avatars/eyes/eyes2/eyes2-blue.png'), index: '0202' };
    private eyes2Cl3 = { img: require('../../../assets/avatars/eyes/eyes2/eyes2-brown.png'), index: '0302' };
    private eyes2Cl4 = { img: require('../../../assets/avatars/eyes/eyes2/eyes2-green.png'), index: '0402' };
    private eyes2Cl5 = { img: require('../../../assets/avatars/eyes/eyes2/eyes2-grey.png'), index: '0502' };
    private eyes2Cl6 = { img: require('../../../assets/avatars/eyes/eyes2/eyes2-hazel.png'), index: '0602' };
    
    private eyes3Cl1 = { img: require('../../../assets/avatars/eyes/eyes3/eyes3-amber.png'), index: '0103' };
    private eyes3Cl2 = { img: require('../../../assets/avatars/eyes/eyes3/eyes3-blue.png'), index: '0203' };
    private eyes3Cl3 = { img: require('../../../assets/avatars/eyes/eyes3/eyes3-brown.png'), index: '0403' };
    private eyes3Cl4 = { img: require('../../../assets/avatars/eyes/eyes3/eyes3-green.png'), index: '0503' };
    private eyes3Cl5 = { img: require('../../../assets/avatars/eyes/eyes3/eyes3-grey.png'), index: '0603' };
    private eyes3Cl6 = { img: require('../../../assets/avatars/eyes/eyes3/eyes3-hazel.png'), index: '0703' };

    private eyes4Cl1 = { img: require('../../../assets/avatars/eyes/eyes4/eyes4-amber.png'), index: '0104' };
    private eyes4Cl2 = { img: require('../../../assets/avatars/eyes/eyes4/eyes4-blue.png'), index: '0204' };
    private eyes4Cl3 = { img: require('../../../assets/avatars/eyes/eyes4/eyes4-brown.png'), index: '0304' };
    private eyes4Cl4 = { img: require('../../../assets/avatars/eyes/eyes4/eyes4-green.png'), index: '0404' };
    private eyes4Cl5 = { img: require('../../../assets/avatars/eyes/eyes4/eyes4-grey.png'), index: '0504' };
    private eyes4Cl6 = { img: require('../../../assets/avatars/eyes/eyes4/eyes4-hazel.png'), index: '0604' };

    private eyes5Cl1 = { img: require('../../../assets/avatars/eyes/eyes5/eyes5-amber.png'), index: '0105' };
    private eyes5Cl2 = { img: require('../../../assets/avatars/eyes/eyes5/eyes5-blue.png'), index: '0205' };
    private eyes5Cl3 = { img: require('../../../assets/avatars/eyes/eyes5/eyes5-brown.png'), index: '0305' };
    private eyes5Cl4 = { img: require('../../../assets/avatars/eyes/eyes5/eyes5-green.png'), index: '0405' };
    private eyes5Cl5 = { img: require('../../../assets/avatars/eyes/eyes5/eyes5-grey.png'), index: '0505' };
    private eyes5Cl6 = { img: require('../../../assets/avatars/eyes/eyes5/eyes5-hazel.png'), index: '0605' };

    private eyes6 = { img: require('../../../assets/avatars/eyes/eyes6/eyes6.png'), index: '0006' };

    private eyesCl1 = { img: require('../../../assets/avatars/eyes-color/eyes-amber.png'), index: '01'}
    private eyesCl2 = { img: require('../../../assets/avatars/eyes-color/eyes-blue.png'), index: '02' }
    private eyesCl3 = { img: require('../../../assets/avatars/eyes-color/eyes-brown.png'), index: '03' }
    private eyesCl4 = { img: require('../../../assets/avatars/eyes-color/eyes-green.png'), index: '04' }
    private eyesCl5 = { img: require('../../../assets/avatars/eyes-color/eyes-grey.png'), index: '05' }
    private eyesCl6 = { img: require('../../../assets/avatars/eyes-color/eyes-hazel.png'), index: '06' }

    private eyes = [this.eyes1Cl1, this.eyes1Cl2, this.eyes1Cl3, this.eyes1Cl4, this.eyes1Cl5, this.eyes1Cl6,
                    this.eyes2Cl1, this.eyes2Cl2, this.eyes2Cl3, this.eyes2Cl4, this.eyes2Cl5, this.eyes2Cl6,
                    this.eyes3Cl1, this.eyes3Cl2, this.eyes3Cl3, this.eyes3Cl4, this.eyes3Cl5, this.eyes3Cl6,
                    this.eyes4Cl1, this.eyes4Cl2, this.eyes4Cl3, this.eyes4Cl4, this.eyes4Cl5, this.eyes4Cl6,
                    this.eyes5Cl1, this.eyes5Cl2, this.eyes5Cl3, this.eyes5Cl4, this.eyes5Cl5, this.eyes5Cl6,
                    this.eyes6]

    private nose1 = { img: require('../../../assets/avatars/nose/nose1.png'), index: '01' };
    private nose2 = { img: require('../../../assets/avatars/nose/nose2.png'), index: '02' };
    private nose3 = { img: require('../../../assets/avatars/nose/nose3.png'), index: '03' };
    private nose4 = { img: require('../../../assets/avatars/nose/nose4.png'), index: '04' };
    private nose5 = { img: require('../../../assets/avatars/nose/nose5.png'), index: '05' };
    private nose6 = { img: require('../../../assets/avatars/nose/nose6.png'), index: '06' };

    private noses = [ this.nose1, this.nose2, this.nose3, this.nose4, this.nose5, this.nose6];

    private lips1 = { img: require('../../../assets/avatars/lips/lips1.png'), index: '01' };
    private lips2 = { img: require('../../../assets/avatars/lips/lips2.png'), index: '02' };

    private lips = [ this.lips1, this.lips2 ];

    private hair1 = { img: require('../../../assets/avatars/hair/hair1-black.png'), index: '01' }
    private hair2 = { img: require('../../../assets/avatars/hair/hair1-blonde.png'), index: '02' }
    private hair3 = { img: require('../../../assets/avatars/hair/hair1-brown.png'), index: '03' }
    private hair4 = { img: require('../../../assets/avatars/hair/hair1-red.png'), index: '04' }

    private hair = [ this.hair1, this.hair2, this.hair3, this.hair4 ];

    private neckCl1 = { img: require('../../../assets/avatars/neck/neck-cl1.png'), index: '01' }
    private neckCl2 = { img: require('../../../assets/avatars/neck/neck-cl2.png'), index: '02' }
    private neckCl3 = { img: require('../../../assets/avatars/neck/neck-cl3.png'), index: '03' }
    private neckCl4 = { img: require('../../../assets/avatars/neck/neck-cl4.png'), index: '04' }
    private neckCl5 = { img: require('../../../assets/avatars/neck/neck-cl5.png'), index: '05' }
    private neckCl6 = { img: require('../../../assets/avatars/neck/neck-cl6.png'), index: '06' }

    private necks = [ this.neckCl1, this.neckCl2, this.neckCl3, this.neckCl4, this.neckCl5, this.neckCl6 ]

    private shirt1Yellow = { img: require('../../../assets/avatars/shirts/shirt-yellow.png'), index: '0101' }
    private shirt2Red = { img: require('../../../assets/avatars/shirts/shirt-red.png'), index: '0201' }
    private shirt2Blue = { img: require('../../../assets/avatars/shirts/shirt-blue.png'), index: '0301'}

    private shirts = [ this.shirt1Yellow, this.shirt2Red, this.shirt2Blue ];

    private armsCl1 = { img: require('../../../assets/avatars/arms/arms-cl1.png'), index: '01' }
    private armsCl2 = { img: require('../../../assets/avatars/arms/arms-cl2.png'), index: '02' }
    private armsCl3 = { img: require('../../../assets/avatars/arms/arms-cl3.png'), index: '03' }
    private armsCl4 = { img: require('../../../assets/avatars/arms/arms-cl4.png'), index: '04' }
    private armsCl5 = { img: require('../../../assets/avatars/arms/arms-cl5.png'), index: '05' }
    private armsCl6 = { img: require('../../../assets/avatars/arms/arms-cl6.png'), index: '06' }

    private arms = [ this.armsCl1, this.armsCl2, this.armsCl3, this.armsCl4, this.armsCl5, this.armsCl6 ]
    
    private pants1Blue = { img: require('../../../assets/avatars/pants/pants-blue.png'), index: '0101' }
    private pants1DarkBlue = { img: require('../../../assets/avatars/pants/pants-dark-blue.png'), index: '0201' }
    private pants1Brown = { img: require('../../../assets/avatars/pants/pants-brown.png'), index: '0301' }

    private pants = [ this.pants1Blue, this.pants1DarkBlue, this.pants1Brown ];

    private shoes1 = { img: require('../../../assets/avatars/shoes/shoes1.png'), index: '01' }

    private shoes = [ this.shoes1 ]

    getFacesByColor(index: string){
        var skinIndex = index.substring(0, 2);

        switch(skinIndex){
            case '01': {
                return [ this.faceDiamondCl1, this.faceHeartCl1, this.faceLongCl1, this.faceOvalCl1,
                        this.faceRoundCl1, this.faceSquareCl1 ];
            }
            case '02': {
                return [ this.faceDiamondCl2, this.faceHeartCl2, this.faceLongCl2, this.faceOvalCl2,
                        this.faceRoundCl2, this.faceSquareCl2 ];
            }
            case '03': {
                return [ this.faceDiamondCl3, this.faceHeartCl3, this.faceLongCl3, this.faceOvalCl3,
                        this.faceRoundCl3, this.faceSquareCl3 ];
            }
            case '04': {
                 return [ this.faceDiamondCl4, this.faceHeartCl4, this.faceLongCl4, this.faceOvalCl4,
                        this.faceRoundCl4, this.faceSquareCl4 ];
            }
            case '05': {
                return [ this.faceDiamondCl5, this.faceHeartCl5, this.faceLongCl5, this.faceOvalCl5,
                        this.faceRoundCl5, this.faceSquareCl5 ];
            }
            case '06': {
                return [ this.faceDiamondCl6, this.faceHeartCl6, this.faceLongCl6, this.faceOvalCl6,
                        this.faceRoundCl6, this.faceSquareCl6 ];
            }
        }
    }

        getEyesByColor(index: string){
            var eyesIndex = index.substring(0, 2);

            switch(eyesIndex){
                case '01': {
                   return [ this.eyes1Cl1, this.eyes2Cl1, this.eyes3Cl1, this.eyes4Cl1,
                        this.eyes5Cl1, this.eyes6 ];
                }
                case '02': {
                    return [ this.eyes1Cl2, this.eyes2Cl2, this.eyes3Cl2, this.eyes4Cl2,
                        this.eyes5Cl2, this.eyes6 ];
                }
                case '03': {
                    return [ this.eyes1Cl3, this.eyes2Cl3, this.eyes3Cl3, this.eyes4Cl3,
                        this.eyes5Cl3, this.eyes6 ];
                }
                case '04': {
                    return [ this.eyes1Cl4, this.eyes2Cl4, this.eyes3Cl4, this.eyes4Cl4,
                        this.eyes5Cl4, this.eyes6 ];
                }
                case '05': {
                    return [ this.eyes1Cl5, this.eyes2Cl5, this.eyes3Cl5, this.eyes4Cl5,
                        this.eyes5Cl5, this.eyes6 ];
                }
                case '06': {
                    return [ this.eyes1Cl6, this.eyes2Cl6, this.eyes3Cl6, this.eyes4Cl6,
                        this.eyes5Cl6, this.eyes6 ];
                }
            }
    }

    getFaceColors(): { img: string, index: string }[] {
        return [ this.faceCl1, this.faceCl2, this.faceCl3, this.faceCl4, this.faceCl5, this.faceCl6 ];
    }

    getEyesColors(): { img: string, index: string }[]{
        return [ this.eyesCl1, this.eyesCl2, this.eyesCl3, this.eyesCl4, this.eyesCl5, this.eyesCl6 ];
    }

    getNoses(): { img: string, index: string }[]{
        return this.noses;
    }

    getLips(): { img: string, index: string }[]{
        return this.lips;
    }

    getHair(){
        return this.hair;
    }

    getShirts(){
        return this.shirts;
    }

    getPants(){
        return this.pants;
    }

    getFaceByIndex(index: string): string{
        var faceImg = '';

        this.faces.forEach( face => {
            if(face.index == index){
                faceImg = face.img;
            }
        });
        return faceImg;
    }

    getEyesByIndex(index: string): string{
        var eyesImg = '';
        this.eyes.forEach( eyes => {
            if(eyes.index == index){
                eyesImg = eyes.img;
            }
        });
        return eyesImg;
    }
    
    getNoseByIndex(index: string): string{
        var noseImg = '';
        this.noses.forEach( nose => {
            if(nose.index == index){
                noseImg = nose.img;
            }
        });
        return noseImg;
    }

    getLipsByIndex(index: string): string{
        var lipsImg = '';
        this.lips.forEach( lips => {
            if(lips.index == index){
                lipsImg = lips.img;
            }
        });
        return lipsImg;
    }

    getHairByIndex(index: string) {
        for(var hair in this.hair){
            if(this.hair[hair].index == index) return this.hair[hair].img;
        }
    }

    getNeckByIndex(index: string) {
        for(var neck in this.necks){
            var colorIndex = index.substring(0, 2);
            if(this.necks[neck].index == colorIndex) return this.necks[neck].img;
        }
    }

    getShirtByIndex(index: string) {
        for(var shirt in this.shirts){
            if(this.shirts[shirt].index == index) return this.shirts[shirt].img;
        }
    }

    getArmsByIndex(index: string) {
        for(var arms in this.arms){
            var colorIndex = index.substring(0, 2);
            if(this.arms[arms].index == colorIndex) return this.arms[arms].img;
        }
    }

    getPantsByIndex(index: string) {
         for(var pants in this.pants){
            if(this.pants[pants].index == index) return this.pants[pants].img;
        }
    }

    getShoesByIndex(index: string) {
         for(var shoes in this.shoes){
            if(this.shoes[shoes].index == index) return this.shoes[shoes].img;
        }
    }
    
}
