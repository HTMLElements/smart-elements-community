
/* Smart HTML Elements v1.1.0 (2018-June) 
Copyright (c) 2011-2018 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-switch-button",class extends Smart.ToggleButton{static get properties(){return{inverted:{value:!1,type:"boolean"},orientation:{value:"horizontal",allowedValues:["horizontal","vertical"],type:"string"},switchMode:{value:"default",allowedValues:["default","click","drag"],type:"string"},clickMode:{value:"release",allowedValues:["press","release","pressAndRelease"],type:"string"}}}static get listeners(){return{"container.down":"_mouseDownHandler","innerContainer.down":"_switchThumbDragStartHandler","container.move":"_dragOnMobile","document.move":"_drag","document.up":"_switchThumbDropHandler","container.click":"_clickHandler",mouseenter:"_switchButtonOnMouseEnter",mouseleave:"_switchButtonOnMouseLeave",resize:"_resizeHandler","container.resize":"_resizeHandler","document.selectstart":"_selectStartHandler"}}template(){return`<div  id='container' class='smart-container'>
                    <div  id='innerContainer' class ='smart-inner-container'>
                           <span id='falseContentContainer' inner-h-t-m-l='[[falseContent]]' class ='smart-false-content-container'></span>
                           <span id='switchThumb' class ='smart-thumb'></span>
                           <span id='trueContentContainer' inner-h-t-m-l='[[trueContent]]' class ='smart-true-content-container'></span>
                    </div>
                    <input id='hiddenInput' class ='smart-hidden-input' type='hidden'>
               </div>`}ready(){const a=this;a._supportCSSVariables=!!window.getComputedStyle(a.$.container).getPropertyValue("--smart-switch-button-default-width")&&Smart.Utilities.Core.CSSVariablesSupport(),a._updateAnimationsCSSvariables("0","0"),super.ready(),a._htmlBindOnInitialization(),a._resizeHandler(),a._initializePrivateVariables(),a._getContainersSizeAndBreakPoint(),a.indeterminate&&(a._valueCashe=a.checked,a.checked=null),a._handleTemplate(!0),a._handleTemplate(!1),a._handleTemplate(),a._updateHidenInputNameAndValue()}_clickHandler(){const a=this;a._resizeHandler();a.disabled||a.readonly||a._checkStateChanged&&"default"===a.switchMode||a._isInactiveOn("click")||("release"!==a.clickMode&&"pressAndRelease"!==a.clickMode?(event.preventDefault(),event.stopPropagation()):a._updateStateOnClick(),a.indeterminate=!1,a._updateHidenInputNameAndValue())}_mouseDownHandler(){const a=this;a._updateContentProperties();a.disabled||a.readonly||"release"!==a.clickMode&&"click"===a.switchMode&&(a._updateStateOnClick(),a.$.fireEvent("click"),a.indeterminate=!1,a._updateHidenInputNameAndValue())}_updateStateOnClick(){const a=this,b=null===a.checked?a._switchTrackLength/2:a._switchTrackLength;a._updateAnimationsCSSvariables(b,-b),a._changeCheckState(),a.focus()}_drag(a){const b=this;Smart.Utilities.Core.isMobile||b._switchThumbDragHandler(a)}_dragOnMobile(a){const b=this;Smart.Utilities.Core.isMobile&&(a.originalEvent.preventDefault(),b._switchThumbDragHandler(a))}_switchThumbDragStartHandler(a){const b=this;b.disabled||(b._checkStateChanged=!1,"click"===b.switchMode&&"release"!==b.clickMode&&(a.preventDefault(),a.stopPropagation()),b._isInactiveOn("drag")||(b._mouseDown=!0,b._getContainersSizeAndBreakPoint(),b._dragStartOffset=b._pointerPosition="vertical"===b.orientation?a.pageY:a.pageX,a.preventDefault()))}_selectStartHandler(a){const b=this;b._mouseDown&&a.preventDefault()}_switchThumbDragHandler(a){const b=this;if(!b._isInactiveOn("drag")){if(!1===b._mouseDown)return void b._removeDragStyles();let c=b.$.innerContainer,d=b.$.container.getBoundingClientRect(),e="vertical"===b.orientation?document.body.scrollTop||document.documentElement.scrollTop:document.body.scrollLeft||document.documentElement.scrollLeft,f="vertical"===b.orientation?d.top+e:d.left+e,g="vertical"===b.orientation?b._pointerPosition-c.offsetTop:b._pointerPosition-c.offsetLeft,h=b._pointerPosition>=f&&b._pointerPosition<=f+b._switchContainerSize;if(b.$switchThumb.addClass("dragged"),b._pointerPosition="vertical"===b.orientation?a.pageY:a.pageX,h){let a=b._pointerPosition-g;a<-b._switchTrackLength&&(a=-b._switchTrackLength),0<a&&(a=0),"vertical"===b.orientation?b.$.innerContainer.style.top=a+"px":b.$.innerContainer.style.left=a+"px"}}}_switchThumbDropHandler(){const a=this;if(a.indeterminate=!1,a._updateHidenInputNameAndValue(),!a._isInactiveOn("drag")&&a._mouseDown){let b="vertical"===a.orientation?a.$.innerContainer.offsetTop+a.$.switchThumb.offsetTop+a.$.switchThumb.clientHeight/2:a.$.innerContainer.offsetLeft+a.$.switchThumb.offsetLeft+a.$.switchThumb.clientWidth/2,c="vertical"===a.orientation?a.$.innerContainer.offsetTop+a._switchTrackLength:a.$.innerContainer.offsetLeft+a._switchTrackLength,d=a._switchTrackLength-c;a.inverted?a._updateAnimationsCSSvariables(d,-c):a._updateAnimationsCSSvariables(c,-d);let e=b>a._switchBreakPoint;null===a.checked?e?a.inverted?a._changeCheckState(!0):a._changeCheckState(!1):a.inverted?a._changeCheckState(!1):a._changeCheckState(!0):!a.inverted==(e===a.checked)&&(a._changeCheckState(!a.checked),a._checkStateChanged=!0),a._removeDragStyles()}}_switchButtonOnMouseEnter(){const a=this;a.disabled||a.readonly||a.$.addClass("hovered")}_switchButtonOnMouseLeave(){const a=this;a.disabled||a.readonly||a.$.removeClass("hovered")}_isInactiveOn(a){const b=this,c=b.disabled||b.readonly||b.switchMode!==a;return"default"!==b.switchMode&&c}_keyUpHandler(a){const b=this;if(!(b.disabled||b.readonly||32!==a.keyCode)){const a=null===b.checked?b._switchTrackLength/2:b._switchTrackLength;b._getContainersSizeAndBreakPoint(),b._updateAnimationsCSSvariables(a,-a),b._changeCheckState()}}_initializePrivateVariables(){const a=this;a._dragStartOffset=a._switchContainerSize=a._switchTrackLength=a._switchBreakPoint=a._pointerPosition=0,a._dragged=a._mouseDown=!1}_changeCheckState(a){const b=this;let c=b.checked;return null===c&&void 0!==a?(b.$.fireEvent("change",{value:a,oldValue:null}),void(b.checked=a)):void(b.checked=!(null!==b.checked)||!b.checked,b.$.fireEvent("change",{value:b.checked,oldValue:c}),b._updateHidenInputNameAndValue())}_getContainersSizeAndBreakPoint(){const a=this;a._switchContainerSize="vertical"===a.orientation?a.$.container.clientHeight:a.$.container.clientWidth,a._switchTrackLength="vertical"===a.orientation?a._switchContainerSize-a.$.switchThumb.clientHeight:a._switchContainerSize-a.$.switchThumb.clientWidth,a._switchBreakPoint=a._switchContainerSize/2}_updateAnimationsCSSvariables(a,b){const c=this;c._supportCSSVariables&&(c.$.container.style.setProperty("--smart-switch-button-label-animation-offset-normal",a+"px"),c.$.container.style.setProperty("--smart-switch-button-label-animation-offset-inverse",b+"px"))}_removeDragStyles(){const a=this;a.$switchThumb.removeClass("dragged"),a._supportCSSVariables?a.$.innerContainer.removeAttribute("style"):a.$.innerContainer.style.left="",a._supportCSSVariables?a.$.innerContainer.removeAttribute("style"):a.$.innerContainer.style.top="",a._mouseDown=!1,a._dragStartOffset=0}propertyChangedHandler(a,b,c){const d=this;let e=d._switchTrackLength/2;null===c?!0===b?(e=!0===d.inverted?e:-e,d._updateAnimationsCSSvariables(e,0)):(e=!0===d.inverted?-e:e,d._updateAnimationsCSSvariables(e,0)):null===b?d._updateAnimationsCSSvariables(e,-e):d._updateAnimationsCSSvariables(d._switchTrackLength,-d._switchTrackLength),super.propertyChangedHandler(a,b,c),d._updateContentProperties();"indeterminate"===a?c?(d._valueCashe=d.checked,d.checked=null):d.checked=d._valueCashe:"trueContent"===a?d.trueContent=c:"falseContent"===a?d.falseContent=c:"orientation"===a?d._resizeHandler():void 0;d._getContainersSizeAndBreakPoint(),d._removeDragStyles(),d._resizeHandler()}_resizeHandler(){function a(a){return parseInt(c.getPropertyValue(a).replace("px",""))}const b=this,c=window.getComputedStyle(b,null),d=a("border-top-width"),e=a("border-right-width"),f=a("border-bottom-width"),g=a("border-left-width"),h="vertical"===b.orientation?b.offsetHeight-(d+f):b.offsetWidth-(g+e);b._getContainersSizeAndBreakPoint(),b._supportCSSVariables?b.$.container.style.setProperty("--smart-switch-button-default-width",h+"px"):"horizontal"===b.orientation?(b.$.innerContainer.style.setProperty("width",2*h-b.$.switchThumb.clientWidth+"px"),b.$.trueContentContainer.style.setProperty("width",b._switchTrackLength+"px"),b.$.falseContentContainer.style.setProperty("width",b._switchTrackLength+"px"),b.$.innerContainer.style.setProperty("height","100%"),b.$.trueContentContainer.style.setProperty("height","100%"),b.$.falseContentContainer.style.setProperty("height","100%")):(b.$.innerContainer.style.setProperty("height",2*h-b.$.switchThumb.clientHeight+"px"),b.$.trueContentContainer.style.setProperty("height",b._switchTrackLength+"px"),b.$.falseContentContainer.style.setProperty("height",b._switchTrackLength+"px"),b.$.innerContainer.style.setProperty("width","100%"),b.$.trueContentContainer.style.setProperty("width","100%"),b.$.falseContentContainer.style.setProperty("width","100%"))}});