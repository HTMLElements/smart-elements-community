
/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Column",class{constructor(a){const b=this;"string"==typeof a?(b.label=a,b.dataField=a):Object.assign(b,a),b.dataType||(b.dataType="string"),b.columnGroup||(b.columnGroup=""),b.canNotify=!0;let c="left";switch(b.dataType){case"string":case"date":c="left";break;case"number":c="right";break;case"boolean":c="center";}b.index===void 0&&(b.index=-1),b.visibleIndex===void 0&&(b.visibleIndex=-1),b.selected===void 0&&(b.selected=!1),b.label||(b.label=""),b.menuItems||(b.menuItems=null),b.icon||(b.icon="smart-icon-user"),b.displayField||(b.displayField=b.dataField),b.template||(b.template=""),b.editor||(b.editor="input"),"string"==typeof b.editor?b.editor={template:b.editor,autoFocus:!0}:void 0===b.editor.autoFocus&&(b.editor.autoFocus=!0),b.menu=null,b.allowActionButtonAnimation===void 0&&(b.grid?b.allowActionButtonAnimation=b.grid.appearance.allowColumnActionButtonAnimation:b.allowActionButtonAnimation=!1),b.allowSortButtonAnimation===void 0&&(b.grid?b.allowSortButtonAnimation=b.grid.appearance.allowColumnSortButtonAnimation:b.allowSortButtonAnimation=!1),b.autoShowActionButton===void 0&&(b.grid?b.autoShowActionButton=b.grid.appearance.autoShowColumnActionButton:b.autoShowActionButton=!1),b.autoShowSortButton===void 0&&(b.grid?b.autoShowSortButton=b.grid.appearance.autoShowColumnSortButton:b.autoShowSortButton=!0),b.showSortButton===void 0&&(b.grid?b.showSortButton=b.grid.appearance.showColumnSortButton:b.showSortButton=!1),b.showIcon===void 0&&(b.grid?b.showIcon=b.grid.appearance.showColumnIcon:b.showIcon=!1),b.showDescriptionButton===void 0&&(b.grid?b.showDescriptionButton=b.grid.appearance.showColumnDescriptionButton:b.showDescriptionButton=!1),b.showCustomButton===void 0&&(b.grid?b.showCustomButton=b.grid.appearance.showColumnCustomButton:b.showCustomButton=!1),b.showActionButton===void 0&&(b.grid?b.showActionButton=b.grid.appearance.showColumnActionButton:b.showActionButton=!1),b.allowLabelAnimation===void 0&&(b.grid?b.allowLabelAnimation=b.grid.appearance.allowColumnLabelAnimation:b.allowLabelAnimation=!1),b.autoShowFilterButton===void 0&&(b.grid?b.autoShowFilterButton=b.grid.appearance.autoShowColumnFilterButton:b.autoShowFilterButton=!1),b.showFilterButton===void 0&&(b.grid?b.showFilterButton=b.grid.appearance.showColumnFilterButton:b.showFilterButton=!1),b.autoCloseMenu===void 0&&(b.grid?b.autoCloseMenu=b.grid.columnMenu.autoClose:b.autoCloseMenu=!0),b.formatFunction||(b.formatFunction=null),b.sortOrder||(b.sortOrder=null),b.sortIndex||(b.sortIndex=null),b.filter||(b.filter=null),b.filterMenuMode||(b.filterMenuMode="default"),b.align||(b.align=c),b.cellsAlign||(b.cellsAlign=c),b.cellsWrap||(b.cellsWrap=!1,b.grid&&b.grid.layout.allowCellsWrap&&(b.cellsWrap=b.grid.layout.allowCellsWrap)),b.minWidth||(b.minWidth=30),b.width||(b.width=null),b.grid&&b.grid.columnWidth&&(b.width=b.grid.columnWidth),b.visible===void 0&&(b.visible=!0),b.allowResize===void 0&&(b.allowResize=!0),b.allowReorder===void 0&&(b.allowReorder=!0),b.allowHide===void 0&&(b.allowHide=!0),b.allowSort===void 0&&(b.allowSort=!0),b.allowSelect===void 0&&(b.allowSelect=!0),b.allowSortToggleOnClick===void 0&&(b.allowSortToggleOnClick=!0),b.allowGroup===void 0&&(b.allowGroup=!0),b.allowFilter===void 0&&(b.allowFilter=!0),b.allowEdit===void 0&&(b.allowEdit=!0),b.allowHeaderEdit===void 0&&(b.allowHeaderEdit=!0),b.allowExport===void 0&&(b.allowExport=!0),b.description===void 0&&(b.description=""),void 0===b.group&&(b.group=!1),b.summary||(b.summary=[]),b.formatSettings||(b.formatSettings={decimalPlaces:null,decimalSeparator:null,negativeWithBrackets:null,prefix:null,sufix:null,thousandsSeparator:null,dateFormat:"d"}),b.selected=!1,b.sorted=!1,b.filtered=!1,b.parent=null,b.children=[]}refresh(){const a=this;a.element&&a.element._refresh()}render(){const a=this;a.element.column=a,a.element&&a.element._render()}setProperty(a,b){const c=this,d=c.getProperty(a);d!==b&&(c.canNotify=!1,c[a]=b,c.propertyChanged(a,d,b),c.canNotify=!0)}getProperty(a){const b=this;if("selected"===a){let c=!1;return b.grid._selection.cells["column"+b.dataField]&&(c=null),b.grid&&b.grid._selection.columns[b.dataField]&&(c=!0),b.grid.columns.canNotify=!1,b[a]=c,b.grid.columns.canNotify=!0,c}return"group"===a?!!(b.dataSource&&b.dataSource.groupBy)&&0<=b.dataSource.groupBy.indexOf(b.dataField):b[a]}get properties(){return["allowExport","allowGroup","allowSelect","verticalAlign","columnGroup","cellsVerticalAlign","autoCloseMenu","autoShowActionButton","autoShowSortButton","autoShowFilterButton","allowLabelAnimation","allowActionButtonAnimation","allowSortButtonAnimation","allowHide","allowEdit","allowHeaderEdit","allowFilter","allowSort","allowSortToggleOnClick","allowResize","allowReorder","canNotify","description","grid","icon","menuItems","menu","summary","cellsFormat","formatSettings","formatFunction","index","sortIndex","sortOrder","sorted","groups","element","level","group","filtered","filter","filterMenuMode","dataField","displayField","label","dataType","align","cellsWrap","cellsAlign","minWidth","width","visible","freeze","showActionButton","selected","showIcon","showDescriptionButton","treeColumn","computedWidth","computedHeight","overflowWidth","parent","children","onAction","left","top","showCustomButton","showFilterButton","showSortButton","editor","template","visibleIndex"]}propertyChanged(a,b,c){const d=this;if("allowSort"===a||"allowFilter"===a)return void d.refresh();if("showIcon"===a)return void d.refresh();if("visible"===a)return void d.grid.refresh(d.grid.grouping.enabled);if("showCustomButton"===a&&(c?d.element._showCustomButton():d.element._hideCustomButton()),"showDescriptionButton"===a&&(c?d.element._showDescriptionButton():d.element._hideDescriptionButton()),"filter"===a&&(d.filter?(d.grid.addFilter(d.dataField,d.filter),d.filtered=!0):(d.grid.removeFilter(d.dataField),d.filtered=!1),(d.autoShowFilterButton||d.showFilterButton)&&(c?d.element._showFilterButton():d.element._hideFilterButton())),"sortIndex"===a)return void("many"===d.grid.sorting.mode&&d.grid.context===document&&d.grid.sortBy(d.dataField,d.sortOrder));if("selected"===a&&(d.selectionColumn&&d.refresh(),c?!d.grid._selection.columns[d.dataField]&&(d.grid._selection.columns[d.dataField]=!0):!1===c&&d.grid._selection.columns[d.dataField]&&delete d.grid._selection.columns[d.dataField],d.grid._recycle(!1)),"formatSettings"===a&&d.grid._recycle(!1),"sortOrder"===a)return d.sorted=!1,null===c?d.element._hideSortButton():(d.element._showSortButton(),d.sorted=!0),d.grid.context===document&&d.grid.sortBy(d.dataField,d.sortOrder),void(d.sorted?d.element.setAttribute("aria-sort","asc"===d.sortOrder?"ascending":"descenting"):d.element.removeAttribute("aria-sort"));if("group"===a)return void(d.grid.context===document&&(c?d.grid.addGroup(d.dataField):d.grid.removeGroup(d.dataField)));if("showActionButton"===a&&(d.element.allowAnimations=!1,c?d.element._showActionButton():d.element._hideActionButton(),d.element.allowAnimations=!0),"autoShowActionButton"===a&&(d.element.allowAnimations=!1,c?d.element._hideActionButton():d.element._showActionButton(),d.element.allowAnimations=!0),"showFilterButton"===a&&(d.element.allowAnimations=!1,void 0===d._autoShowFilterButton&&(d._autoShowFilterButton=d.autoShowFilterButton),c?(d.autoShowFilterButton=!1,d.element._showFilterButton()):(d.element._hideFilterButton(),d.autoShowFilterButton=d._autoShowFilterButton),d.element.allowAnimations=!0),"showSortButton"===a&&(d.element.allowAnimations=!1,void 0===d._autoShowSortButton&&(d._autoShowSortButton=d.autoShowSortButton),c?(d.autoShowSortButton=!1,d.element._showSortButton()):(d.element._hideSortButton(),d.autoShowSortButton=d._autoShowSortButton),d.element.allowAnimations=!0),"autoShowSortButton"===a&&(d.element.allowAnimations=!1,d._autoShowSortButton=d.autoShowSortButton,c?d.element._hideSortButton():d.element._showSortButton(),d.element.allowAnimations=!0),"menu"===a&&(c?d.element.setAttribute("aria-controls",d.menu.id):(d.element.removeAttribute("aria-controls"),d.autoShowActionButton&&d.element._hideActionButton())),("label"===a||"width"===a||"minWidth"===a)&&d.grid.refresh(),"freeze"===a){if(!!c)d.element.setAttribute("freeze",""),d.freeze&&(!0===d.freeze||"near"===d.freeze?d.grid._frozenNearColumns.push(d):d.grid._frozenFarColumns.push(d));else if(!0===d.freeze||"near"===d.freeze){d.element.removeAttribute("freeze");const a=d.grid._frozenNearColumns.indexOf(d);0<=a&&d.grid._frozenNearColumns.splice(a,0,0)}else if("far"===d.freeze){const a=d.grid._frozenFarColumns.indexOf(d);0<=a&&d.grid._frozenFarColumns.splice(a,0,0)}d.grid._createColumnHeaderCellElements(),d.grid.refresh()}}_measureSize(a){const b=this,c=b.grid,d=function(){const b=[],d=document.createElement("div"),e=document.createElement("div"),f=Array.isArray(a)?a:[a];e.classList.add("smart-label"),d.appendChild(e),d.style.width="auto",d.style.position="static",c.$.columnHeader.appendChild(d);for(let a=0;a<f.length;a++){e.innerHTML="<span>"+f[a]+"</span>";const c=20+e.firstChild.offsetWidth,d=Math.max(30,c);b.push(d)}return c.$.columnHeader.removeChild(d),b}();return 1===d.length?d[0]:d}_autoSize(a){const b=this,c=b.grid;let d=b.label.toString();if(!a){const a=c.isInitialized?c._recyclingRows:[];for(let c=0;c<a.length;c++){const e=a[c],f=""+e.data[b.dataField];f&&f.length>d.length&&(d=f)}}const e=b._measureSize(d);return e}autoSize(a){const b=this,c=b._autoSize(a);b.width=c}createElement(){const a=this,b=document.createElement("smart-grid-column");return b._initialize(a),b.setAttribute("role","columnheader"),b.setAttribute("aria-haspopup",""),a.element=b,a.grid.notify(function(b,c,d){"appearance_allowColumnLabelAnimation"===b?a.setProperty("allowLabelAnimation",d):"appearance_allowColumnSortAnimation"===b?a.setProperty("allowSortAnimation",d):"appearance_allowColumnSortButtonAnimation"===b?a.setProperty("allowSortButtonAnimation",d):"appearance_allowColumnActionButtonAnimation"===b?a.setProperty("allowActionButtonAnimation",d):"appearance_allowColumnFilterButtonAnimation"===b?a.setProperty("allowFilterButtonAnimation",d):"appearance_autoShowColumnActionButton"===b?a.setProperty("autoShowActionButton",d):"appearance_autoShowColumnSortButton"===b?a.setProperty("autoShowSortButton",d):"appearance_autoShowColumnFilterButton"===b?a.setProperty("autoShowFilterButton",d):"appearance_showColumnActionButton"===b?a.setProperty("showActionButton",d):"appearance_showColumnFilterButton"===b?a.setProperty("showFilterButton",d):"appearance_showColumnCustomButton"===b?a.setProperty("showCustomButton",d):"appearance_showColumnDescriptionButton"===b?a.setProperty("showDescriptionButton",d):"appearance_showColumnSortButton"===b?a.setProperty("showSortButton",d):"appearance_showFrozenColumnBackground"===b||"appearance_showSortColumnBackground"===b||"appearance_showFilterColumnBackground"===b?a.grid._recycle(!1):void 0}),b}}),Smart("smart-grid-column",class extends Smart.BaseElement{_showSortButton(a){const b=this;!b.column||b.column.autoGenerated||(b.sortButton.classList.remove("asc"),b.sortButton.classList.remove("desc"),!b.column.autoShowSortButton&&b.column.allowSort&&b.sortButton.classList.add("smart-icon-sort","smart-grid-icon"),"asc"===b.column.sortOrder?b.sortButton.classList.add("asc"):"desc"===b.column.sortOrder&&b.sortButton.classList.add("desc"),b.column.showSortButton&&(b.sortButton.classList.add("show"),!1!==a&&b._refresh()))}_hideSortButton(a){const b=this;b.column&&(b.sortButton.classList.remove("asc"),b.sortButton.classList.remove("desc"),(!b.column.showSortButton||b.column.autoShowSortButton)&&(b.sortButton.classList.remove("show"),b.sortButton.classList.remove("smart-icon-sort"),!1!==a&&b._refresh()))}_showFilterButton(){const a=this;!a.column||a.column.autoGenerated||(a.filterButton.classList.add("show"),a._refresh())}_hideFilterButton(){const a=this;a.column&&(a.filterButton.classList.remove("show"),a._refresh())}_showDescriptionButton(){const a=this;!a.column||a.column.autoGenerated||(a.descriptionButton.setAttribute("title",a.column.description),a.descriptionButton.classList.add("show"),a._refresh())}_hideDescriptionButton(){const a=this;a.column&&(a.descriptionButton.classList.remove("show"),a._refresh())}_showIcon(){const a=this;!a.column||a.column.autoGenerated||(a.icon.classList.add("show"),a._refresh())}_hideIcon(){const a=this;a.icon.classList.remove("show"),a._refresh()}_showCustomButton(){const a=this;!a.column||a.column.autoGenerated||(a.customButton.classList.add("show"),a._refresh())}_hideCustomButton(){const a=this;a.column&&(a.customButton.classList.remove("show"),a._refresh())}_showActionButton(){const a=this;!a.column||a.column.showActionButton&&a.column.grid.hasColumnMenu(a.column)&&!a.column.autoGenerated&&a.actionButton&&(a.actionButton.classList.add("show"),a._refresh())}_hideActionButton(){const a=this;!a.column||a.column.showActionButton&&a.actionButton&&!a.hasAttribute("aria-controls")&&(a.actionButton.classList.remove("show"),a._refresh())}_rotate(){const a=this,b=document.createElement("span");return a.label.innerHTML="",b.innerHTML=a.column.label,a.label.appendChild(b),b.className="rotate",b.style.transform="rotate("+a.column.rotationAngle+"deg)",a.column.grid._recycleRotate(a.label,b,a.column.align,a.column.verticalAlign,a.column.label)}_align(){const a=this;let b=a.column.align;switch(a.column.grid.rightToLeft&&("left"===b?b="right":"right"==b&&(b="left")),"left"===b?a.label.classList.add("align-left"):"center"===b?a.label.classList.add("align-center"):"right"===b?a.label.classList.add("align-right"):void 0,a.column.verticalAlign){case"top":a.label.classList.add("align-top");break;case"middle":a.label.classList.add("align-middle");break;case"bottom":a.label.classList.add("align-bottom");}}_refresh(){const a=this;if(a.sortButton.classList.remove("filter"),a.sortButton.classList.remove("action"),a.label.className="smart-label",a.column.visible&&"_checkBoxColumn"===a.column.dataField){const b=a.column.grid;let c=b.getVisibleRows();b.paging.enabled&&"page"===b.selection.checkBoxes.selectAllMode&&(c=c.slice(b.paging.pageIndex*b.paging.pageSize,(b.paging.pageIndex+1)*b.paging.pageSize));const d=b.paging.enabled&&"page"===b.selection.checkBoxes.selectAllMode?b._getSelectedRows(!0,!0):b._getSelectedRows(!0,!1);return b.selection.checkBoxes.autoShow?a.setAttribute("auto-show",""):a.removeAttribute("auto-show"),d.length===c.length?a.setAttribute("selected",""):0<d.length&&d.length<c.length?a.setAttribute("selected","indeterminate"):(0===d.length||0===c.length)&&a.removeAttribute("selected"),a.removeAttribute("checkbox"),a.label.classList.remove("smart-input"),void("none"!==b.selection.checkBoxes.selectAllMode&&(a.setAttribute("checkbox",""),a.label.classList.add("smart-input")))}if("_commandColumn"===a.column.dataField){const b=a.column.grid,c="icon"!==b.editing.commandColumn.displayMode,d="label"!==b.editing.commandColumn.displayMode,e=b.editing.commandColumn.dataSource.commandColumnMenu;let f="<div class=\"smart-grid-command-item\">";const g="{{messages}}"===e.label?b.localize("commandColumnMenu"):e.label,h=e.icon;d&&c?(f+="<span class=\"smart-grid-icon "+h+"\"></span>",f+="<span class=\"smart-grid-label\">"+g+"</span>"):d&&!c?f+="<span class=\"smart-grid-icon "+h+"\"></span>":c&&!d&&(f+="<span class=\"smart-grid-label\">"+g+"</span>"),f+="</div>",e.visible&&(a.label.innerHTML=f)}const b=a.column.getProperty("selected");!1===b&&a.hasAttribute("selected")?a.removeAttribute("selected"):!0===b?a.setAttribute("selected",""):null===b&&a.setAttribute("selected","indeterminate"),a.column.allowSortButtonAnimation?a.sortButton.classList.add("smart-animate"):a.sortButton.classList.remove("smart-animate"),a.column.sorted?a._showSortButton(!1):a._hideSortButton(!1),a.column.allowFilterButtonAnimation?a.filterButton.classList.add("smart-animate"):a.filterButton.classList.remove("smart-animate"),a.column.allowActionButtonAnimation&&!1!==a.allowAnimations?a.buttonsGroup.classList.add("smart-animate"):a.buttonsGroup.classList.remove("smart-animate"),a.column.allowLabelAnimation&&!1!==a.allowAnimations?a.label.classList.add("smart-animate"):a.label.classList.remove("smart-animate"),a.buttonsGroup.classList.remove("action"),a.actionButton.classList.contains("show")&&a.buttonsGroup.classList.add("action"),a.column.showIcon?a.icon.classList.add("show"):a.icon.classList.remove("show"),a.icon.classList.contains("show")&&a.icon.classList.add(a.column.icon);let c=a.column.showIcon?1:0;for(let b=0;b<a.buttonsGroup.children.length;b++)a.buttonsGroup.children[b].classList.contains("show")&&c++;if(1==c?a.label.classList.add("one"):2==c?a.label.classList.add("two"):3==c?a.label.classList.add("three"):4==c?a.label.classList.add("four"):5==c?a.label.classList.add("five"):6==c?a.label.classList.add("six"):void 0,a.classList.remove("smart-visibility-hidden"),0<a.column.grid._columnGap?a.classList.add("smart-grid-column-border"):a.classList.remove("smart-grid-column-border"),a.column.grid.appearance.showColumnHeaderLines?a.classList.remove("smart-grid-vertical-border-collapse"):a.classList.add("smart-grid-vertical-border-collapse"),a.column.rotationAngle){const b=a._rotate();if(!b)return}a._align()}_render(){const a=this,b=a.column.dataField?a.column.dataField:"",c=a.column===a.column.grid._lastVisibleColumn;a.label.firstChild?a.label.firstChild.textContent!==a.column.label&&(a.label.firstChild.textContent=a.column.label):a.label.innerHTML="<span>"+a.column.label+"</span>",a._refresh(),a.style.width=a.column.autoGenerated||c?a.column.computedWidth+"px":a.column.computedWidth-a.column.grid._columnGap+"px",a.style.height!==a.column.computedHeight+"px"&&(a.style.height=a.column.computedHeight+"px"),a.style.lineHeight!==a.column.computedHeight+"px"&&(a.style.lineHeight=a.column.computedHeight+"px"),a.column.grid.rightToLeft?a.style.right!==a.column.left+"px"&&(a.style.right=a.column.left+"px"):a.style.left!==a.column.left+"px"&&(a.style.left=a.column.left+"px"),a.style.top!==a.column.top+"px"&&(a.style.top=a.column.top+"px"),a.getAttribute("data-field")!==b&&a.setAttribute("data-field",b),a.setAttribute("header",""),a.column.freeze&&a.setAttribute("freeze",""),0<a.column.level&&(a.style.top=a.column.top+"px")}get hasStyleObserver(){return!1}get enableShadowDOM(){return!1}addThemeClass(){}addDefaultClass(){}get isUtilityElement(){return!0}_initialize(a){const b=this,c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("div"),f=document.createElement("div"),g=document.createElement("div"),h=document.createElement("div"),i=document.createElement("div"),j=document.createElement("div");b.column=a,b.classList.add("smart-visibility-hidden"),i.classList.add("smart-icon","smart-grid-icon"),c.classList.add("smart-label"),d.classList.add("smart-sort-button","smart-grid-icon"),e.classList.add("smart-filter-button","smart-icon-filter","smart-grid-icon"),f.classList.add("smart-action-button","smart-grid-icon"),f.setAttribute("aria-haspopup",""),g.classList.add("smart-description-button","smart-icon-info-circled","smart-grid-icon"),h.classList.add("smart-custom-button",a.customButtonIcon?a.customButtonIcon:"smart-icon-tools","smart-grid-icon"),j.classList.add("smart-buttons-group"),f.innerHTML="<div></div>",b.style.width=b.column.computedWidth+"px",b.appendChild(i),b.appendChild(c),b.appendChild(j),j.appendChild(d),j.appendChild(e),j.appendChild(g),j.appendChild(h),j.appendChild(f),b.icon=i,b.label=c,b.sortButton=d,b.filterButton=e,b.actionButton=f,b.descriptionButton=g,b.customButton=h,b.buttonsGroup=j;const k=window.PointerEvent?"pointerdown":"mousedown",l=window.PointerEvent?"pointerup":"mouseup";b._filterDownEvent=function(a){a.preventDefault(),a.stopPropagation(),b.column.onAction&&b.column.onAction(a)}.bind(b),b._filterUpEvent=function(a){a.preventDefault(),a.stopPropagation()},b._actionUpEvent=function(a){a.preventDefault(),a.stopPropagation()},b._actionDownEvent=function(a){a.preventDefault(),a.stopPropagation(),b.column.onAction&&b.column.onAction(a)}.bind(b),b.filterButton.addEventListener(k,b._filterDownEvent),b.filterButton.addEventListener(l,b._filterUpEvent),b.actionButton.addEventListener(l,b._actionUpEvent),b.actionButton.addEventListener(k,b._actionDownEvent),!b.column.autoShowActionButton&&b.column.showActionButton&&b._showActionButton(),!b.column.autoShowSortButton&&b.column.showSortButton&&b._showSortButton(),!b.column.autoShowFilterButton&&b.column.showFilterButton&&b._showFilterButton(),b.column.showDescriptionButton&&b._showDescriptionButton(),b.column.showCustomButton&&b._showCustomButton(),b.column.showIcon&&b._showIcon(),"_rowHeaderColumn"===b.column.dataField&&b.classList.add("top-near-corner"),b.customButton.onclick=function(a){b.column.onCustomButtonClick&&b.column.onCustomButtonClick(a)}.bind(b)}template(){return""}_detach(){const a=this,b=window.PointerEvent?"pointerdown":"mousedown",c=window.PointerEvent?"pointerup":"mouseup";a.filterButton.removeEventListener(b,a._filterDownEven),a.filterButton.removeEventListener(c,a._filterUpEvent),a.actionButton.removeEventListener(c,a._actionUpEvent),a.actionButton.removeEventListener(b,a._actionDownEvent),a.element=null,a.column&&(a.column.grid=null,a.column.element=null),a.icon=null,a.label=null,a.sortButton=null,a.filterButton=null,a.actionButton=null,a.descriptionButton=null,a.customButton=null,a.buttonsGroup=null,a.column=null,delete a.grid,delete a.column,delete a.icon,delete a.label,delete a.sortButton,delete a.filterButton,delete a.actionButton,delete a.descriptionButton,delete a.customButton,delete a.buttonsGroup}onDetached(){const a=this;a._detach()}});