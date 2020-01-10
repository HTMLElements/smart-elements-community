
/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-carousel",class extends Smart.ContentElement{static get properties(){return{autoPlay:{value:!1,type:"any"},dataSource:{value:[],type:"array",reflectToAttribute:!1},delay:{value:200,type:"number"},displayMode:{allowedValues:["default","multiple","3d"],value:"default",type:"string"},disableItemClick:{value:!1,type:"boolean"},hideArrows:{value:!1,type:"boolean"},hideIndicators:{value:!1,type:"boolean"},indicatorTemplate:{value:null,type:"any"},interval:{value:5e3,type:"number"},itemTemplate:{value:null,type:"any"},keyboard:{value:!1,type:"boolean"},loop:{value:!1,type:"boolean"},messages:{value:{en:{htmlTemplateNotSuported:"{{elementType}}:  Browser doesn't support HTMLTemplate elements."}},type:"object",extend:!0},slideShow:{value:!1,type:"boolean"},swipe:{value:!1,type:"boolean"},wheel:{value:!1,type:"boolean"}}}static get listeners(){return{"arrowLeft.click":"_handleArrowClick","arrowRight.click":"_handleArrowClick","indicatorsContainer.click":"_handleIndicatorsContainerClick",keydown:"_handleKeyDown",swipeleft:"_handleSwipe",swiperight:"_handleSwipe",wheel:"_handleMouseWheel","itemsContainer.click":"_handleItemClick","itemsContainer.transitionend":"_handleTransitionEnd"}}static get requires(){return{"Smart.RepeatButton":"smart.button.js"}}static get styleUrls(){return["smart.button.css","smart.carousel.css"]}get enableShadowDOM(){const a=this,b=Smart.EnableShadowDOM;return a._isInShadowDOM?!a._isInShadowDOM:a.isCompleted?null!==a.shadowRoot:b}template(){return`<div id="container" role="presentation">
                    <div id="itemsContainer" inner-h-t-m-l="[[innerHTML]]" class="smart-items-container" role="presentation"><content></content></div>
                    <smart-repeat-button initial-delay="0" right-to-left="[[rightToLeft]]" delay="[[delay]]" id="arrowLeft" animation="[[animation]]" unfocusable class="smart-arrow smart-arrow-left" aria-label="Previous slide"></smart-repeat-button>
                    <smart-repeat-button initial-delay="0" right-to-left="[[rightToLeft]]" delay="[[delay]]" id="arrowRight" animation="[[animation]]" unfocusable class="smart-arrow smart-arrow-right" aria-label="Next slide"></smart-repeat-button>
                    <div id="indicatorsContainer" class="smart-indicators-container" role="tablist"></div>
                </div>`}propertyChangedHandler(a,b,c){const d=this;switch(super.propertyChangedHandler(a,b,c),a){case"disabled":d._setFocusable();break;case"dataSource":if(d._currentIndex=0,d._generateIndicators(),d._generateItems(),d._handleIndicatorsState(0,0),d._handleItemsState(0,0),d._handle3dMode(0),!1!==d.autoPlay){const a=parseInt(d.autoPlay);a?setTimeout(function(){d.play()},a):d.play()}d._animationTrigger(d._currentIndex);break;case"itemTemplate":d._generateItems(),d._handleItemsState(d._currentIndex,d._currentIndex+1);break;case"indicatorTemplate":d._generateIndicators(),d._handleIndicatorsState(d._currentIndex,d._currentIndex+1);break;case"interval":d.pause(),d.play();break;case"loop":d._handleArrowsActiveState(d._currentIndex,d._currentIndex);break;case"hideArrows":c||d._handleArrowsActiveState(d._currentIndex,d._currentIndex);break;case"displayMode":"multiple"===b&&d.$.itemsContainer.removeAttribute("style");}}render(){const a=this;if(a.setAttribute("role","region"),a.setAttribute("aria-roledescription","carousel"),a._setInitialState(),a._generateIndicators(),a._generateItems(),a._handleIndicatorsState(0,0),a._handleItemsState(0,0),a._handle3dMode(0),!1!==a.autoPlay){const b=parseInt(a.autoPlay);b?setTimeout(function(){a.play()},b):a.play()}a._setFocusable(),a._animationTrigger(a._currentIndex),a._handleArrowsActiveState(0,a._currentIndex),super.render()}next(){const a=this,b=a.dataSource.length;if(a.disabled||0===b)return;let c=a._currentIndex;c=a.loop?c>=b-1?0:c+1:c>=b-1?c:c+1,a._goToItem(c)}pause(){const a=this;a._handleRotation(),a._rotate=!1}slideTo(a){const b=this;a=a?parseInt(a):0;b.disabled||0>a||a>b._items.length||b._goToItem(a)}prev(){const a=this,b=a.dataSource.length;if(a.disabled||0===b)return;let c=a._currentIndex;c=a.loop?0>=c?b-1:c-1:0>=c?0:c-1,a._goToItem(c)}play(){const a=this;a.disabled||!a.slideShow||(a._rotationInterval&&clearInterval(a._rotationInterval),a._handleRotation(!0),a._rotate=!0)}_animationTrigger(a){const b=this;for(let c=0;c<b._items.length;c++)c!==a&&b._items[c].classList.add("smart-animate-trigger")}_handle3dMode(a){const b=this,c=b.dataSource.length;if(!b.disabled&&c&&"3d"===b.displayMode){a=a||0;for(let d=0;d<c;d++){const c=(d-a)*(b.rightToLeft?-1:1);c?b._items[d].setAttribute("position",c):b._items[d].removeAttribute("position")}}}_handleArrowsActiveState(a){const b=this,c=b.dataSource.length;return b.loop?void(b.$.arrowLeft.disabled=b.$.arrowRight.disabled=!1):void(b.rightToLeft?(b.$.arrowRight.disabled=0===a,b.$.arrowLeft.disabled=a===c-1):(b.$.arrowLeft.disabled=0===a,b.$.arrowRight.disabled=a===c-1))}_handleArrowClick(a){const b=this,c=b._currentIndex;b.disabled||(b.rightToLeft?b.$.arrowLeft.contains(a.target)?b.next():b.prev():b.$.arrowLeft.contains(a.target)?b.prev():b.next(),b._changeEvent(c,b._currentIndex))}_handleDefaultInnerHTML(){const a=this;if(!(a.dataSource&&0<a.dataSource.length)&&0<=a.$.itemsContainer.innerHTML.indexOf("<ul")){const b=a.$.itemsContainer.getElementsByTagName("ul")[0],c=b.getElementsByTagName("li");for(let b=0;b<c.length;b++){const d={HTMLcontent:c[b].innerHTML};a.dataSource.push(d)}}}_handleIndicatorsState(a,b){const c=this;!c.disabled&&0!==c._indicators.length&&(a||0===a)&&(b||0===b)&&(a!==b&&(c._indicators[a].classList.remove("smart-active"),c._indicators[a].setAttribute("aria-selected",!1)),c._indicators[b].classList.add("smart-active"),c._indicators[b].setAttribute("aria-selected",!0))}_handleItemClick(a){const b=this,c=a.target.closest(".smart-carousel-item");if(!(b.disabled||!c||"3d"!==b.displayMode||b.disableItemClick)){const a=parseInt(c.getAttribute("item-id")),d=parseInt(c.getAttribute("position"));3<Math.abs(d)||b._goToItem(a)}}_handleItemsState(a,b){const c=this;!c.disabled&&0!==c._items.length&&(a||0===a)&&(b||0===b)&&(a!==b&&(c._items[a].classList.remove("smart-active"),c._items[a].classList.add("smart-out")),c._items[b].classList.add("smart-active"))}_handleIndicatorsContainerClick(a){const b=this,c=a.target.closest(".smart-indicator"),d=b._currentIndex;if(!b.disabled&&c){const a=parseInt(c.getAttribute("indicator-id"));d===a||(b._goToItem(a),b._changeEvent(d,b._currentIndex))}}_handleMultipleMode(a){const b=this;if("multiple"!==b.displayMode)return;const c=b._items[a],d=c.offsetWidth,e=b.$.container.offsetWidth,f=b.$.itemsContainer.offsetWidth;let g=0;if(0===a)return void(b.$.itemsContainer.style.marginLeft="0px");if(a===b._items.length-1)return void(b.$.itemsContainer.style.marginLeft="-"+(f-e)+"px");for(let c=0;c<a;c++)g+=b._items[a].offsetWidth;g+d/2>=e/2&&g+d<f&&(b.$.itemsContainer.style.marginLeft="-"+(g+d/2-e/2)+"px")}_changeEvent(a,b){if(a!==b){const c=this;return c.onIndexChange?void c.onIndexChange(b):void(c.$.fireEvent("changing",{index:b,previousIndex:a}),(!c.hasAnimation||"default"===c.displayMode)&&c.$.fireEvent("change",{index:b,previousIndex:a}))}}_handleKeyDown(a){const b=this,c=a.key,d=b._currentIndex;!b.disabled&&b.keyboard&&-1!==["ArrowLeft","ArrowDown","ArrowRight","ArrowUp","Home","End"," ","Enter"].indexOf(c)&&("ArrowLeft"===c||"ArrowDown"===c?b.rightToLeft?b.next():b.prev():"ArrowUp"===c||"ArrowRight"===c?b.rightToLeft?b.prev():b.next():"Home"===c?b._goToItem(0):"End"===c?b._goToItem(b.dataSource.length-1):" "===c?b._rotate?b.pause():b.play():"Enter"===c?b.play():void 0,b._changeEvent(d,b._currentIndex))}_handleMouseWheel(a){const b=this,c=b._currentIndex;b.disabled||!b.wheel||document.activeElement!==b||(a.stopPropagation(),a.preventDefault(),0<a.deltaY?b.next():b.prev(),b._changeEvent(c,b._currentIndex))}_handleRotation(a){const b=this;a?b._rotationInterval=setInterval(function(){b.slideShow&&b.next()},b.interval):clearInterval(b._rotationInterval)}_handleSwipe(a){const b=this;b.disabled||!b.swipe||(a.stopPropagation(),a.preventDefault(),"swipeleft"===a.type?b.prev():b.next())}_generateIndicator(a){const b=this,c=document.createElement("span"),d=a?a:0;if(b.indicatorTemplate){const a=b._validateTemplate(b.indicatorTemplate);c.innerHTML=b._processItemTemplate(a.content,b.dataSource[d])}return c.setAttribute("role","tab"),c.setAttribute("aria-selected",!1),c.classList.add("smart-indicator"),c.setAttribute("indicator-id",d),c}_generateIndicators(){const a=this,b=a.dataSource.length;let c=[],d=document.createDocumentFragment();for(let e=0;e<b;e++){const b=a._generateIndicator(e);c.push(b),d.appendChild(b)}a._indicators=c;const e=a.$.indicatorsContainer;for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(d)}_generateItem(a){const b=this,c=a?a:0,d=b.dataSource[c],e=document.createElement("div");if(e.id=b.id+"Slide"+a,b.itemTemplate){const a=b._validateTemplate(b.itemTemplate);e.innerHTML=b._processItemTemplate(a.content,b.dataSource[c])}else"string"==typeof d?e.style.backgroundImage="url(\""+d+"\")":e.innerHTML=`<div class="smart-carousel-item-container" style="background-image:url('${d.image||""}')" role="presentation">
                        <h2 id="${e.id+"Label"}" class="smart-carousel-item-label">${d.label||""}</h2 >
                        <p class="smart-carousel-item-content">${d.content||""}</p>
                    </div>
                    <div class="smart-carousel-html-content">${d.HTMLcontent||""}</div>
                </div>`;return d.label?(e.setAttribute("aria-labelledby",e.id+"Label"),b._indicators[a].setAttribute("aria-labelledby",e.id+"Label")):(e.setAttribute("aria-label","Slide "+a),b._indicators[a].setAttribute("aria-label","Slide "+a)),b._indicators[a].setAttribute("aria-controls",e.id),e.setAttribute("role","tabpanel"),e.classList.add("smart-carousel-item"),e.setAttribute("item-id",c),e}_processItemTemplate(a,b){const c=/{{\w+}}/g,d=a.match(c);let e=a;return d&&0!==d.length?(d.forEach(function(a){const c=a.replace("{{","").replace("}}","");e=e.replace(a,b[c]||"")}),e):e}_generateItems(){const a=this,b=a.dataSource.length;let c=[],d=document.createDocumentFragment();for(let e=0;e<b;e++){const b=a._generateItem(e);c.push(b),d.appendChild(b)}a._items=c;const e=a.$.itemsContainer;for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(d)}_goToItem(a,b){const c=this,d=c.dataSource.length,e=c._currentIndex;let f=a;0>a?f=0:a>d-1&&(f=d-1),c._removeFadeOut(),c._animationTrigger(),c._handleIndicatorsState(e,f),c._handleItemsState(e,f),c._currentIndex=f,b&&c._changeEvent(e,f),c._handle3dMode(f),c._handleMultipleMode(f),c._handleArrowsActiveState(f,e)}_setFocusable(){const a=this;if(a.disabled||a.unfocusable)return a.removeAttribute("tabindex"),void(a.tabIndex=-1);let b=0<a.tabIndex?a.tabIndex:0;a.setAttribute("tabindex",b),a.tabIndex=b}_setInitialState(){const a=this;a._currentIndex=0,a._indicators=[],a._items=[],a._rotate=!1,a._handleDefaultInnerHTML()}_validateTemplate(a){const b=this;let c="",d=!1,e=/{{\w+}}/g;return("function"==typeof a&&(c=a()),!("content"in document.createElement("template")))?(b.error(b.localize("htmlTemplateNotSuported",{elementType:b.nodeName.toLowerCase()})),void(b.itemTemplate=null)):(a instanceof HTMLElement?c=a.innerHTML:(a=document.getElementById(a),c=a?a.innerHTML:""),e.exec(c)&&(d=!0),{content:c,hasBindings:d})}_handleTransitionEnd(a){if(a.target.classList.contains("smart-carousel-item")&&!a.target.getAttribute("position")){const b=this,c=a.target.getAttribute("item-id");b._lastTransitionEndId===c||(b._removeFadeOut(),this.$.fireEvent("change",{index:c,previousIndex:b._lastTransitionEndId}),b._lastTransitionEndId=c)}}_removeFadeOut(){const a=this,b=a.$.itemsContainer.getElementsByClassName("smart-out");if(b.length)for(let a=0;a<b.length;a++)b[a].classList.remove("smart-out")}});