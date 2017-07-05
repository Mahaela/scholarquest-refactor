/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './user-profile-page.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/flex-layout/flexbox/api/layout';
import * as import3 from '@angular/flex-layout/media-query/media-monitor';
import * as import4 from '@angular/flex-layout/flexbox/api/layout-gap';
import * as import5 from '@angular/flex-layout/flexbox/api/layout-align';
import * as import6 from '@angular/flex-layout/flexbox/api/flex';
import * as import7 from '@angular/flex-layout/flexbox/api/layout-wrap';
import * as import8 from '@angular/flex-layout/flexbox/api/class';
import * as import9 from '../../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as import10 from '@angular/material';
import * as import11 from '../avatar/avatar.component.ngfactory';
import * as import12 from '../avatar/avatar.component';
import * as import13 from '../avatar-service/avatar.service';
import * as import14 from '../../../shared/utils/api.service';
import * as import15 from '@angular/router';
import * as import16 from './user-profile-page.component';
import * as import17 from '../../../shared/card/button-grid-card/button-grid-card.component.ngfactory';
import * as import18 from '../../../shared/card/button-grid-card/button-grid-card.component';
import * as import19 from '../../../cursor/cursor.service';
import * as import20 from '../../../cursor-follower/cursor-follower.service';
const styles_UserProfilePageComponent:any[] = [import0.styles];
export const RenderType_UserProfilePageComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_UserProfilePageComponent,
  data: {}
}
);
export function View_UserProfilePageComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),41,'div',[
      [
        'class',
        'container'
      ]
      ,
      [
        'fxFlex',
        '100'
      ]
      ,
      [
        'fxLayout',
        'row'
      ]
      ,
      [
        'fxLayout.xs',
        'column'
      ]
      ,
      [
        'fxLayoutAlign',
        'center'
      ]
      ,
      [
        'fxLayoutGap',
        '25px'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(368640,(null as any),0,import2.LayoutDirective,[
      import3.MediaMonitor,
      import1.ElementRef,
      import1.Renderer2
    ]
    ,{
      layout: [
        0,
        'layout'
      ]
      ,
      layoutXs: [
        1,
        'layoutXs'
      ]

    }
    ,(null as any)),
    import1.ɵdid(860160,(null as any),0,import4.LayoutGapDirective,[
      import3.MediaMonitor,
      import1.ElementRef,
      import1.Renderer2,
      [
        2,
        import2.LayoutDirective
      ]

    ]
      ,{gap: [
        0,
        'gap'
      ]
    },(null as any)),
    import1.ɵdid(368640,(null as any),0,import5.LayoutAlignDirective,[
      import3.MediaMonitor,
      import1.ElementRef,
      import1.Renderer2,
      [
        2,
        import2.LayoutDirective
      ]

    ]
      ,{align: [
        0,
        'align'
      ]
    },(null as any)),
    import1.ɵdid(368640,(null as any),0,import6.FlexDirective,[
      import3.MediaMonitor,
      import1.ElementRef,
      import1.Renderer2,
      [
        3,
        import2.LayoutDirective
      ]
      ,
      [
        3,
        import7.LayoutWrapDirective
      ]

    ]
      ,{flex: [
        0,
        'flex'
      ]
    },(null as any)),
    import1.ɵdid(466944,(null as any),0,import8.ClassDirective,[
      import3.MediaMonitor,
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer,
      import1.Renderer2
    ]
      ,{classBase: [
        0,
        'classBase'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),21,'div',[[
        'fxFlex',
        '50'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(368640,(null as any),0,import6.FlexDirective,[
      import3.MediaMonitor,
      import1.ElementRef,
      import1.Renderer2,
      [
        3,
        import2.LayoutDirective
      ]
      ,
      [
        3,
        import7.LayoutWrapDirective
      ]

    ]
      ,{flex: [
        0,
        'flex'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n      '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),17,'md-card',([] as any[]),[[
        2,
        'mat-card',
        (null as any)
      ]
    ],(null as any),(null as any),import9.View_MdCard_0,import9.RenderType_MdCard)),
      import1.ɵdid(8192,(null as any),0,import10.MdPrefixRejector,[[
        2,
        import10.MATERIAL_COMPATIBILITY_MODE
      ]
    ],(null as any),(null as any)),
    import1.ɵdid(24576,(null as any),0,import10.MdCard,([] as any[]),(null as any),(null as any)),
    (l()(),import1.ɵted(0,['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),0,1,'sq-avatar',([] as any[]),(null as any),(null as any),(null as any),import11.View_AvatarComponent_0,import11.RenderType_AvatarComponent)),
    import1.ɵdid(2121728,(null as any),0,import12.AvatarComponent,[
      import13.AvatarService,
      import14.ApiService
    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted(0,['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),0,9,'button',[[
        'md-icon-button',
        ''
      ]
    ],[
      [
        8,
        'disabled',
        0
      ]
      ,
      [
        2,
        'mat-icon-button',
        (null as any)
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,21).onClick()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import9.View_MdButton_0,import9.RenderType_MdButton)),
      import1.ɵdid(8192,(null as any),0,import10.MdPrefixRejector,[[
        2,
        import10.MATERIAL_COMPATIBILITY_MODE
      ]
    ],(null as any),(null as any)),
    import1.ɵdid(90112,(null as any),0,import10.MdButton,[
      import1.ElementRef,
      import1.Renderer,
      import10.FocusOriginMonitor
    ]
    ,(null as any),(null as any)),
    import1.ɵdid(8192,(null as any),0,import10.MdIconButtonCssMatStyler,([] as any[]),(null as any),(null as any)),
    import1.ɵdid(8192,(null as any),0,import15.RouterLink,[
      import15.Router,
      import15.ActivatedRoute,
      [
        8,
        (null as any)
      ]
      ,
      import1.Renderer,
      import1.ElementRef
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import1.ɵpad(1),
    (l()(),import1.ɵted(0,['\n          '])),
    (l()(),import1.ɵeld(0,(null as any),0,1,'img',[
      [
        'class',
        'icon'
      ]
      ,
      [
        'src',
        '../../../assets/icons/ShirtIcon.png'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(466944,(null as any),0,import8.ClassDirective,[
      import3.MediaMonitor,
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer,
      import1.Renderer2
    ]
      ,{classBase: [
        0,
        'classBase'
      ]
    },(null as any)),
    (l()(),import1.ɵted(0,['\n        '])),
    (l()(),import1.ɵted(0,['\n      '])),
    (l()(),import1.ɵted((null as any),['\n\n  '])),
    (l()(),import1.ɵted((null as any),['\n  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),10,'div',[[
        'fxFlex',
        '50'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(368640,(null as any),0,import6.FlexDirective,[
      import3.MediaMonitor,
      import1.ElementRef,
      import1.Renderer2,
      [
        3,
        import2.LayoutDirective
      ]
      ,
      [
        3,
        import7.LayoutWrapDirective
      ]

    ]
      ,{flex: [
        0,
        'flex'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'sq-button-grid-card',[
      [
        'patchValue',
        'cursor'
      ]
      ,
      [
        'title',
        'Cursor'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'buttonClicked'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import16.UserProfilePageComponent = v.component;
      if (('buttonClicked' === en)) {
        const pd_0:any = ((<any>co.changeCursor($event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import17.View_ButtonGridCardComponent_0,import17.RenderType_ButtonGridCardComponent)),
      import1.ɵdid(2121728,[[
        'cursorList',
        4
      ]
    ],0,import18.ButtonGridCardComponent,[
      import14.ApiService,
      import1.Renderer
    ]
    ,{
      title: [
        0,
        'title'
      ]
      ,
      options: [
        1,
        'options'
      ]
      ,
      patchValue: [
        2,
        'patchValue'
      ]
      ,
      selectedNorm: [
        3,
        'selectedNorm'
      ]

    }
    ,{buttonClicked: 'buttonClicked'}),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵted((null as any),['\n\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'sq-button-grid-card',[
      [
        'patchValue',
        'cursorFollower'
      ]
      ,
      [
        'title',
        'Cursor Follower'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'buttonClicked'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import16.UserProfilePageComponent = v.component;
      if (('buttonClicked' === en)) {
        const pd_0:any = ((<any>co.changeCursorFollower($event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import17.View_ButtonGridCardComponent_0,import17.RenderType_ButtonGridCardComponent)),
      import1.ɵdid(2121728,[[
        'cursorFollowerList',
        4
      ]
    ],0,import18.ButtonGridCardComponent,[
      import14.ApiService,
      import1.Renderer
    ]
    ,{
      title: [
        0,
        'title'
      ]
      ,
      options: [
        1,
        'options'
      ]
      ,
      patchValue: [
        2,
        'patchValue'
      ]
      ,
      selectedNorm: [
        3,
        'selectedNorm'
      ]

    }
    ,{buttonClicked: 'buttonClicked'}),
    (l()(),import1.ɵted((null as any),['\n     '])),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n\n']))
  ]
  ,(ck,v) => {
    var co:import16.UserProfilePageComponent = v.component;
    const currVal_0:any = 'row';
    const currVal_1:any = 'column';
    ck(v,1,0,currVal_0,currVal_1);
    const currVal_2:any = '25px';
    ck(v,2,0,currVal_2);
    const currVal_3:any = 'center';
    ck(v,3,0,currVal_3);
    const currVal_4:any = '100';
    ck(v,4,0,currVal_4);
    const currVal_5:any = 'container';
    ck(v,5,0,currVal_5);
    const currVal_6:any = '50';
    ck(v,8,0,currVal_6);
    const currVal_10:any = ck(v,22,0,'edit-avatar');
    ck(v,21,0,currVal_10);
    const currVal_11:any = 'icon';
    ck(v,25,0,currVal_11);
    const currVal_12:any = '50';
    ck(v,31,0,currVal_12);
    const currVal_13:any = 'Cursor';
    const currVal_14:any = co.cursorService.getCursors();
    const currVal_15:any = 'cursor';
    const currVal_16:any = co.studentData.cursor;
    ck(v,34,0,currVal_13,currVal_14,currVal_15,currVal_16);
    const currVal_17:any = 'Cursor Follower';
    const currVal_18:any = co.cursorFollowerService.getCursorFollowers();
    const currVal_19:any = 'cursorFollower';
    const currVal_20:any = co.studentData.cursorFollower;
    ck(v,38,0,currVal_17,currVal_18,currVal_19,currVal_20);
  },(ck,v) => {
    const currVal_7:any = true;
    ck(v,10,0,currVal_7);
    const currVal_8:any = import1.ɵnov(v,19).disabled;
    const currVal_9:any = true;
    ck(v,17,0,currVal_8,currVal_9);
  });
}
function View_UserProfilePageComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'ng-component',([] as any[]),(null as any),(null as any),(null as any),View_UserProfilePageComponent_0,RenderType_UserProfilePageComponent)),
    import1.ɵdid(2121728,(null as any),0,import16.UserProfilePageComponent,[
      import19.CursorService,
      import20.CursorFollowerService,
      import14.ApiService
    ]
    ,(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const UserProfilePageComponentNgFactory:import1.ComponentFactory<import16.UserProfilePageComponent> = import1.ɵccf('ng-component',import16.UserProfilePageComponent,View_UserProfilePageComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvTWFoYWVsYS9EZXNrdG9wL3NjaG9sYXJxdWVzdC1yZWZhY3Rvci9hc3NldHMvYXBwL3N0dWRlbnQvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS1wYWdlL3VzZXItcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9NYWhhZWxhL0Rlc2t0b3Avc2Nob2xhcnF1ZXN0LXJlZmFjdG9yL2Fzc2V0cy9hcHAvc3R1ZGVudC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLXBhZ2UvdXNlci1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvTWFoYWVsYS9EZXNrdG9wL3NjaG9sYXJxdWVzdC1yZWZhY3Rvci9hc3NldHMvYXBwL3N0dWRlbnQvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS1wYWdlL3VzZXItcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvTWFoYWVsYS9EZXNrdG9wL3NjaG9sYXJxdWVzdC1yZWZhY3Rvci9hc3NldHMvYXBwL3N0dWRlbnQvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS1wYWdlL3VzZXItcHJvZmlsZS1wYWdlLmNvbXBvbmVudC50cy5Vc2VyUHJvZmlsZVBhZ2VDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dC54cz1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIj5cclxuICA8ZGl2IGZ4RmxleD1cIjUwXCI+XHJcbiAgICAgIDxtZC1jYXJkPlxyXG4gICAgICAgIDxzcS1hdmF0YXI+PC9zcS1hdmF0YXI+XHJcbiAgICAgICAgPGJ1dHRvbiAgbWQtaWNvbi1idXR0b24gW3JvdXRlckxpbmtdPVwiWydlZGl0LWF2YXRhciddXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9pY29ucy9TaGlydEljb24ucG5nXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9tZC1jYXJkPlxyXG5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4RmxleD1cIjUwXCI+XHJcbiAgICA8c3EtYnV0dG9uLWdyaWQtY2FyZFxyXG4gICAgICBbc2VsZWN0ZWROb3JtXT1cInN0dWRlbnREYXRhLmN1cnNvclwiXHJcbiAgICAgIHRpdGxlPVwiQ3Vyc29yXCJcclxuICAgICAgcGF0Y2hWYWx1ZT1cImN1cnNvclwiXHJcbiAgICAgIFtvcHRpb25zXT1cImN1cnNvclNlcnZpY2UuZ2V0Q3Vyc29ycygpXCIgXHJcbiAgICAgIChidXR0b25DbGlja2VkKT1cImNoYW5nZUN1cnNvcigkZXZlbnQpXCIgXHJcbiAgICAgICNjdXJzb3JMaXN0PlxyXG4gICAgICA8L3NxLWJ1dHRvbi1ncmlkLWNhcmQ+XHJcblxyXG4gICAgPHNxLWJ1dHRvbi1ncmlkLWNhcmRcclxuICAgIFtzZWxlY3RlZE5vcm1dPVwic3R1ZGVudERhdGEuY3Vyc29yRm9sbG93ZXJcIlxyXG4gICAgIHRpdGxlPVwiQ3Vyc29yIEZvbGxvd2VyXCJcclxuICAgICBwYXRjaFZhbHVlPVwiY3Vyc29yRm9sbG93ZXJcIiBcclxuICAgICBbb3B0aW9uc109XCJjdXJzb3JGb2xsb3dlclNlcnZpY2UuZ2V0Q3Vyc29yRm9sbG93ZXJzKClcIiBcclxuICAgICAoYnV0dG9uQ2xpY2tlZCk9XCJjaGFuZ2VDdXJzb3JGb2xsb3dlcigkZXZlbnQpXCIgXHJcbiAgICAgI2N1cnNvckZvbGxvd2VyTGlzdD5cclxuICAgICA8L3NxLWJ1dHRvbi1ncmlkLWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIiwiPG5nLWNvbXBvbmVudD48L25nLWNvbXBvbmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBQTs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUFBOzs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7TUFBQTtRQUFBOztNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7OztNQUFBO1FBQUE7O01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBa0g7TUFDaEg7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7OztNQUFBO1FBQUE7O01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUI7TUFDYjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTs7TUFBQTtJQUFBO2dCQUFBO0lBQVM7SUFDUDtnQkFBQTs7O0lBQUE7S0FBQTtJQUF1QjtNQUN2QjtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7O01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO0tBQUE7Z0JBQUE7Z0JBQUE7OztNQUFBO1FBQUE7UUFBQTtNQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUF3QjtJQUErQjtJQUNyRDtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQUE7Ozs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBOEQ7SUFDdkQ7SUFDRDtJQUVSO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7OztNQUFBO1FBQUE7O01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUI7SUFDZjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFLRTtRQUFBO1FBQUE7TUFBQTtNQUxGO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFNYztJQUNVO0lBRXhCO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUtDO1FBQUE7UUFBQTtNQUFBO01BTEQ7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQU1xQjtJQUNFO0lBQ25CO0lBQ0Y7Ozs7SUE3QmlCO0lBQTRCO0lBQW5ELFNBQXVCLFVBQTRCLFNBQW5EO0lBQXdFO0lBQXhFLFNBQXdFLFNBQXhFO0lBQTJGO0lBQTNGLFNBQTJGLFNBQTNGO0lBQXNDO0lBQXRDLFNBQXNDLFNBQXRDO0lBQUs7SUFBTCxTQUFLLFNBQUw7SUFDTztJQUFMLFNBQUssU0FBTDtJQUc4QjtJQUF4QixVQUF3QixVQUF4QjtJQUNPO0lBQUwsVUFBSyxVQUFMO0lBS0g7SUFBTCxVQUFLLFVBQUw7SUFHSTtJQUVBO0lBREE7SUFGQTtJQURGLFVBRUUsV0FFQSxXQURBLFdBRkEsVUFERjtJQVdDO0lBRUE7SUFEQTtJQUZEO0lBREEsVUFFQyxXQUVBLFdBREEsV0FGRCxVQURBOztJQWxCRTtJQUFBLFVBQUEsU0FBQTtJQUVFO0lBQUE7SUFBQSxVQUFBLFVBQUEsU0FBQTs7Ozs7SUNKUjtnQkFBQTs7OztJQUFBO0tBQUE7Ozs7In0=
