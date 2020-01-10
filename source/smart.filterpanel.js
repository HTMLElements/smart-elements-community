
/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-filter-panel",class extends Smart.BaseElement{static get properties(){return{buttons:{value:["clear","filter"],type:"array"},data:{value:null,type:"array?",reflectToAttribute:!1},dataField:{value:null,type:"string?"},dataSource:{value:null,type:"any",reflectToAttribute:!1},evaluateFilterExpression:{value:null,type:"function?",reflectToAttribute:!1},filterType:{value:"string",allowedValues:["numeric","string","date","boolean"],type:"string"},formatString:{value:"d",type:"string"},messages:{value:{en:{addCondition:"Add Condition",addGroup:"Add Group",and:"and",blanks:"(Blanks)",cancel:"Cancel",clear:"Clear",contains:"contains",containsCaseSensitive:"contains (case sensitive)",dateTabLabel:"DATE",doesNotContain:"does not contain",doesNotContainCaseSensitive:"does not contain (case sensitive)",empty:"empty",endsWith:"ends with",endsWithCaseSensitive:"ends with (case sensitive)",equal:"equal",equalCaseSensitive:"equal (case sensitive)",filter:"Filter",filterBuilderPlaceholder:"&lt;enter a value&gt;",greaterThan:"greater than",greaterThanOrEqual:"greater than or equal",lessThan:"less than",lessThanOrEqual:"less than or equal",mismatchedProperties:"smartFilterPanel: The \"filterType\" and the data type of the selected \"dataField\" are mismatched.",missingProperty:"smartFilterPanel: When mode is 'excel', either \"data\" and \"dataField\" or \"dataSource\" of type Array have to be set.",notEmpty:"not empty",notEqual:"not equal",notNull:"not null",null:"null ",or:"or",placeholderBoolean:"Select value",placeholderDate:"Enter date",placeholderNumber:"Enter number",placeholderTime:"Enter time",placeholderValue:"Enter value",selectAll:"(Select All)",showRows:"Show rows where:",startsWith:"starts with",startsWithCaseSensitive:"starts with (case sensitive)",timeTabLabel:"TIME"}},type:"object",extend:!0},mode:{value:"default",allowedValues:["default","excel"],type:"string"}}}static get listeners(){return{"cancelButton.click":"cancel","clearButton.click":"clear","filterButton.click":"filter"}}template(){return"<div id=\"container\" class=\"smart-container\" role=\"presentation\">\n                <div id=\"label\" class=\"smart-filter-panel-label\"></div>\n                <div id=\"mainContainer\" role=\"presentation\"></div>\n                <div id=\"buttonContainer\" class=\"smart-filter-panel-button-container\" role=\"presentation\">\n                    <smart-button id=\"filterButton\" class=\"primary\" animation=\"[[animation]]\" disabled=\"[[disabled]]\" unfocusable=\"[[unfocusable]]\"></smart-button>\n                    <smart-button id=\"clearButton\" animation=\"[[animation]]\" disabled=\"[[disabled]]\" unfocusable=\"[[unfocusable]]\"></smart-button>\n                    <smart-button id=\"cancelButton\" animation=\"[[animation]]\" disabled=\"[[disabled]]\" unfocusable=\"[[unfocusable]]\"></smart-button>\n                </div>\n            </div>"}static get styleUrls(){return["smart.grid.css","smart.dropdownlist.css","smart.menu.css","smart.filterpanel.css","smart.textbox.css"]}ready(){super.ready()}render(){const a=this,b=a.filterType;a.$.label.id||(a.$.label.id=a.id+"Label"),a.setAttribute("role","dialog"),a.setAttribute("aria-labelledby",a.$.label.id),a._localize(),a._setButtonsVisibility(),a._filterType=b+"Filter",a._filterHandler=new Smart.Utilities[b.slice(0,1).toUpperCase()+b.slice(1)+"FilterHandler"](a),super.render()}cancel(){const a=this;a._filterHandler[a.mode+"Cancel"](),a.$.fireEvent("cancel")}clear(){const a=this;a._filterHandler[a.mode+"Clear"](),a.$.fireEvent("clear")}reset(){const a=this;a.$.clearButton.removeAttribute("hover"),a.$.filterButton.removeAttribute("hover"),a.$.cancelButton.removeAttribute("hover"),a._filterHandler[a.mode+"Clear"](),a._filterHandler.filterObject=new Smart.Utilities.FilterGroup}getFilter(){if(this._filterHandler){const a=new Smart.Utilities.FilterGroup;for(let b in this._filterHandler.filterObject)a[b]=this._filterHandler.filterObject[b];return a}return null}evaluate(a){try{return this._filterHandler.evaluate(a)}catch(a){return!1}}filter(){const a=this;a._filterHandler[a.mode+"Filter"](),a.$.fireEvent("filter")}getState(){return this._filterHandler.cachedFilter}loadState(a){try{const b=this;b._filterHandler.cachedFilter=a,b._filterHandler[b.mode+"Cancel"]()}catch(a){}}propertyChangedHandler(a,b,c){function d(){const a=["cachedFilter","caseSensitive","customExcelFilterObjects","customItems","dataSource","defaultListSelection","defaultListSource","displayMode","filterBuilder","filterBuilderObject","filterBuilderOperations","filterObject","firstInput","firstList","operationsMapping","operatorList","secondInput","secondList","timeOnly","tree"];a.forEach(function(b){delete g[a[b]]}),delete f._filterHandler}function e(){f.$.mainContainer.innerHTML="",d(),f._filterHandler=new Smart.Utilities[f.filterType.slice(0,1).toUpperCase()+f.filterType.slice(1)+"FilterHandler"](f)}super.propertyChangedHandler(a,b,c);const f=this,g=f._filterHandler;switch(a){case"animation":case"disabled":case"unfocusable":switch(f.mode){case"default":[g.firstList,g.firstInput,g.logicalOperatorList,g.secondList,g.secondInput].forEach(function(b){b[a]=c});break;case"excel":g.tree[a]=c;break;case"filterBuilder":g.filterBuilder[a]=c,g.caseSensitive&&(g.caseSensitive[a]=c);}break;case"buttons":f._setButtonsVisibility();break;case"data":case"dataField":"excel"!==f.mode||Array.isArray(f.dataSource)||e();break;case"dataSource":"excel"===f.mode&&e();break;case"filterType":f._filterType=c+"Filter",e();break;case"mode":e();break;case"formatString":if("date"!==f.filterType)return;switch(f.mode){case"default":g.firstInput.formatString=c,g.secondInput.formatString=c;break;case"excel":e();break;case"filterBuilder":g.filterBuilder.formatStringDate=c,g.filterBuilder.formatStringDateTime=c;}break;case"locale":case"messages":{switch(f._localize(),f.mode){case"default":{const b=g.firstList.selectedIndexes,c=g.logicalOperatorList.selectedIndexes,d=g.secondList.selectedIndexes,e=[g.firstInput,g.secondInput];switch(g.setDefaults(),g.firstList.dataSource=g.defaultListSource,g.logicalOperatorList.dataSource=[{value:0,label:f.localize("and")},{value:1,label:f.localize("or")}],g.secondList.dataSource=g.defaultListSource,f.filterType){case"date":e.forEach(function(b){b.messages[f.locale]||(b.messages[f.locale]={}),b.messages[f.locale].dateTabLabel=f.localize("dateTabLabel"),b.messages[f.locale].timeTabLabel=f.localize("timeTabLabel"),"locale"===a?b.locale=f.locale:(b.$.selectDate.innerHTML=b.messages[f.locale].dateTabLabel,b.$.selectTime.innerHTML=b.messages[f.locale].timeTabLabel),"timePicker"===b._dropDownDisplayMode?(b.placeholder=f.localize("placeholderTime"),b.placeholder=f.localize("placeholderTime")):(b.placeholder=f.localize("placeholderDate"),b.placeholder=f.localize("placeholderDate"))});break;case"numeric":e[0].placeholder=f.localize("placeholderNumber"),e[1].placeholder=f.localize("placeholderNumber");break;case"string":e[0].placeholder=f.localize("placeholderValue"),e[1].placeholder=f.localize("placeholderValue");break;case"boolean":e[0].placeholder=f.localize("placeholderBoolean"),e[1].placeholder=f.localize("placeholderBoolean");}g.firstList.selectedIndexes=b,g.logicalOperatorList.selectedIndexes=c,g.secondList.selectedIndexes=d;break}case"excel":g.tree.selectAll.label=f.localize("selectAll"),g.tree.blanks&&(g.tree.blanks.label=f.localize("blanks"));break;case"filterBuilder":g.localizeFilterBuilder(),"messages"===a&&(g.filterBuilder._localizeInitialValues(),g.filterBuilder._refresh()),g.filterBuilder.$.scrollableContainer.refresh();}break}}}_localize(){const a=this;a.$.label.innerHTML=a.localize("showRows"),a.$.filterButton.innerHTML=a.localize("filter"),a.$.clearButton.innerHTML=a.localize("clear"),a.$.cancelButton.innerHTML=a.localize("cancel")}_setButtonsVisibility(){const a=this,b=a.buttons;["cancel","clear","filter"].forEach(function(c){-1===b.indexOf(c)?a["$"+c+"Button"].addClass("smart-hidden"):a["$"+c+"Button"].removeClass("smart-hidden")})}}),Smart.Utilities.Assign("BaseFilterHandler",class{constructor(a){const b=this;if(b.context=a,b.filterObject=new Smart.Utilities.FilterGroup,b.setDefaults(),"date"===a.filterType){const c=new Smart.Utilities.DateTime,d=a.formatString,e=c.getParseRegExp(c.calendar,d.replace(/y+/g,"yyyyy"));b.displayMode=Smart.Utilities.DateTime.detectDisplayMode(c,d,e),b.timeOnly="timePicker"===b.displayMode}return"default"===a.mode?void b.createDefaultHTMLStructure():void(b.operationsMapping={"=":"EQUAL","<>":"NOT_EQUAL","<":"LESS_THAN",">":"GREATER_THAN","<=":"LESS_THAN_OR_EQUAL",">=":"GREATER_THAN_OR_EQUAL",isblank:"EMPTY",isnotblank:"NOT_EMPTY",contains:"CONTAINS",notcontains:"DOES_NOT_CONTAIN",startswith:"STARTS_WITH",endswith:"ENDS_WITH",NULL:"NULL",NOT_NULL:"NOT_NULL"},"excel"===a.mode?b.createExcelHTMLStructure():"filterBuilder"===a.mode&&b.createBuilderHTMLStructure())}setDefaults(){const a=this,b=a.context;a.defaultListSource=[{value:"EQUAL",label:b.localize("equal")},{value:"NOT_EQUAL",label:b.localize("notEqual")},{value:"LESS_THAN",label:b.localize("lessThan")},{value:"LESS_THAN_OR_EQUAL",label:b.localize("lessThanOrEqual")},{value:"GREATER_THAN",label:b.localize("greaterThan")},{value:"GREATER_THAN_OR_EQUAL",label:b.localize("greaterThanOrEqual")},{value:"NULL",label:b.localize("null")},{value:"NOT_NULL",label:b.localize("notNull")}],a.filterBuilderOperations=["<","=","<>","<=",">",">=","NULL","NOT_NULL"],a.defaultListSelection=2}createDefaultHTMLStructure(){const a=this,b=a.context,c=document.createElement("smart-drop-down-list"),d=document.createElement("smart-drop-down-list"),e=document.createElement("smart-drop-down-list"),f=document.createDocumentFragment();c.classList.add("smart-filter-panel-list"),c.dataSource=a.defaultListSource,c.selectedIndexes=[a.defaultListSelection],d.classList.add("smart-filter-panel-operator-list"),d.dataSource=[{value:0,label:b.localize("and")},{value:1,label:b.localize("or")}],e.classList.add("smart-filter-panel-list"),e.dataSource=a.defaultListSource,e.selectedIndexes=[a.defaultListSelection],a.firstList=c,a.logicalOperatorList=d,a.secondList=e,a.appendInputs(),a.firstInput.classList.add("smart-filter-panel-input"),a.secondInput.classList.add("smart-filter-panel-input"),d.dropDownHeight="auto",d.selectedIndexes=[0],[c,a.firstInput,d,e,a.secondInput].forEach(function(a){a.animation=b.animation,a.disabled=b.disabled,a.unfocusable=b.unfocusable,a.dropDownPosition="bottom",a.dropDownAppendTo="body",a.dropDownMaxHeight=200,a.rightToLeft=b.rightToLeft,f.appendChild(a)}),a.context.$.mainContainer.appendChild(f),a.cacheFilter(a.defaultListSelection,0,a.defaultListSelection)}cacheFilter(a,b,c){const d=this;d.cachedFilter={firstFilterComparison:a,firstFilterValue:d.firstInput.value,logicalOperator:b,secondFilterComparison:c,secondFilterValue:d.secondInput.value}}defaultFilter(){const a=this,b=a.context,c=a.firstList.selectedValues[0],d=a.getFilterInputValue(a.firstInput),e=parseFloat(a.logicalOperatorList.selectedValues[0]),f=a.secondList.selectedValues[0],g=a.getFilterInputValue(a.secondInput),h=a.filterObject;if(h.clear(),""!==d||-1!==["NULL","NOT_NULL","EMPTY","NOT_EMPTY"].indexOf(c)){const f=h.createFilter(b._filterType,d,c,void 0,b.formatString,b.locale,"timePicker"===a.firstInput._dropDownDisplayMode);h.addFilter(e,f)}if(""!==g||-1!==["NULL","NOT_NULL","EMPTY","NOT_EMPTY"].indexOf(f)){const c=h.createFilter(b._filterType,g,f,void 0,b.formatString,b.locale,"timePicker"===a.secondInput._dropDownDisplayMode);h.addFilter(e,c)}a.cacheFilter(a.firstList.selectedIndexes[0],a.logicalOperatorList.selectedIndexes[0],a.secondList.selectedIndexes[0])}getFilterInputValue(a){return a.value}excelFilter(){const a=this,b=a.context;if(Array.isArray(b.dataSource))return void a.customExcelFilter();const c=a.tree,d=a.filterObject;if(d.clear(),a.customItems=[],!c._menuItems[0].selected){const e=c.selectedIndexes;e.forEach(function(e){const f=c._menuItems[e];if(f instanceof Smart.TreeItem){const c=f.value;if(f.hasAttribute("default-item")){const e=a.getExcelComparison(c),f=d.createFilter(b._filterType,c,e,void 0,b.formatString,b.locale,a.timeOnly);d.addFilter("or",f)}else a.customItems.push(f)}}),a.cachedFilter=e.slice(0)}}customExcelFilter(){const a=this,b=a.tree;if(delete a.customExcelFilterObjects,b._menuItems[0].selected)return;const c=a.context,d=[],e=b.selectedIndexes;e.forEach(function(e){const f=b._menuItems[e];if(f instanceof Smart.TreeItem){let b=f.value;if(!Array.isArray(b))return;Array.isArray(b[0])||(b=[b]);const e=new Smart.Utilities.FilterGroup;for(let d=0;d<b.length;d++){const f=b[d],g=a.operationsMapping[f[1]],h=e.createFilter(c._filterType,f[2],g,void 0,c.formatString,c.locale,a.timeOnly);e.addFilter("and",h)}d.push(e)}}),a.customExcelFilterObjects=d,a.cachedFilter=e.slice(0)}getExcelComparison(a){return""===a?"NULL":"EQUAL"}filterBuilderFilter(){function a(c,e){const f=new Smart.Utilities.FilterGroup,g=c[1];e.logicalOperator=g;for(let h=0;h<c.length;h++){if(1==h)continue;const i=c[h];if(Array.isArray(i))if(Array.isArray(i[0])){const b={filters:[]};e.filters.push(b),a(i,b)}else f.addFilter(g,b.createFilterBuilderFilter(f,i,d))}0<f.filters.length&&e.filters.push(f)}const b=this,c=b.filterBuilder.value,d=!("string"!==b.context.filterType)&&b.caseSensitive.checked,e={filters:[]};a(c,e),b.filterBuilderObject=e,b.cachedFilter={filterBuilder:JSON.parse(JSON.stringify(b.filterBuilder.value),function(a,b){return /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/.test(b)?new Date(b):b}),caseSensitive:d}}createFilterBuilderFilter(a,b,c){const d=this,e=d.context;let f=d.operationsMapping[b[1]];return c&&-1!==["CONTAINS","DOES_NOT_CONTAIN","STARTS_WITH","ENDS_WITH","EQUAL"].indexOf(f)&&(f+="_CASE_SENSITIVE"),a.createFilter(e._filterType,b[2],f,void 0,e.formatString,e.locale,!1)}defaultClear(){const a=this;a.firstList.selectedIndexes=[a.defaultListSelection],a.firstInput.value="",a.logicalOperatorList.selectedIndexes=[0],a.secondList.selectedIndexes=[a.defaultListSelection],a.secondInput.value="",a.filterObject.clear(),a.cacheFilter(a.defaultListSelection,0,a.defaultListSelection)}excelClear(){const a=this;a.tree.select("0"),a.filterObject.clear(),a.cachedFilter=a.tree.selectedIndexes.slice(0)}filterBuilderClear(){const a=this;a.filterBuilder.value=["and"],"string"===a.context.filterType&&(a.caseSensitive.checked=!1),a.cachedFilter={filterBuilder:["and"],caseSensitive:!1}}defaultCancel(){const a=this;a.firstList.selectedIndexes=[a.cachedFilter.firstFilterComparison],a.firstInput.value=a.cachedFilter.firstFilterValue,a.logicalOperatorList.selectedIndexes=[a.cachedFilter.logicalOperator],a.secondList.selectedIndexes=[a.cachedFilter.secondFilterComparison],a.secondInput.value=a.cachedFilter.secondFilterValue}excelCancel(){const a=this;a.tree.selectedIndexes=a.cachedFilter.slice(0)}filterBuilderCancel(){const a=this;a.filterBuilder.value=a.cachedFilter.filterBuilder,"string"===a.context.filterType&&(a.caseSensitive.checked=a.cachedFilter.caseSensitive)}createExcelHTMLStructure(){const a=this,b=a.context,c=document.createElement("smart-tree"),d={data:b.data,dataField:b.dataField,filterType:b._filterType};if(!b.dataSource||!Array.isArray(b.dataSource)){if(b.data&&b.dataField||b.error(b.localize("missingProperty")),"date"===b.filterType){d.formatString=b.formatString,d.displayMode=a.displayMode,a.dataSource=a.filterObject.getUniqueValues(d,b);try{a.getHierarchicalDataSource(a.displayMode)}catch(a){b.error(b.localize("mismatchedProperties"))}a.timeOnly?c.classList.add("standard-excel"):c.classList.add("date-excel")}else a.dataSource=a.filterObject.getUniqueValues(d,b),c.classList.add("standard-excel");"function"==typeof b.dataSource&&(a.dataSource=b.dataSource(a.dataSource)||a.dataSource)}else a.processCustomDataSource(c);c.animation=b.animation,c.disabled=b.disabled,c.unfocusable=b.unfocusable,c.dataSource=[{label:b.localize("selectAll"),value:"",items:a.dataSource,expanded:!0,selected:!0}],c.selectionMode="checkBox",c.hasThreeStates=!0,c.toggleMode="arrow",c.addEventListener("collapsing",function(a){1===a.detail.item.level&&a.preventDefault()}),c._onCompleted=function(){if(a.cachedFilter=c.selectedIndexes.slice(0),c.classList.contains("date-excel"))for(let a in c._menuItems){if("0"==a)continue;const b=c._menuItems[a];b.firstElementChild.style.paddingLeft=20*(b.level-1)-10+"px"}else c._menuItems[0].firstElementChild.style.paddingLeft=0;c.selectAll=c._menuItems[0],c.blanks=c.querySelector("[label=\""+b.localize("blanks")+"\"]")},a.tree=c,b.$.mainContainer.appendChild(c)}processCustomDataSource(a){const b=this,c=b.context,d=c.dataSource;a.classList.add("standard-excel"),b.dataSource=d}createBuilderHTMLStructure(){const a=this,b=a.context,c=document.createElement("smart-filter-builder"),d=b.dataField,e="numeric"===b.filterType?"number":b.filterType;if(a.filterBuilder=c,c.animation=b.animation,c.disabled=b.disabled,c.unfocusable=b.unfocusable,c.value=["and"],c.fields=[{label:d,dataField:d,dataType:e,filterOperations:a.filterBuilderOperations}],a.localizeFilterBuilder(),b.$.mainContainer.appendChild(c),"string"===e){const c=document.createElement("smart-check-box");c.classList.add("case-sensitive"),c.innerHTML="Case sensitive",c.animation=b.animation,c.disabled=b.disabled,c.unfocusable=b.unfocusable,c.checked=!1,a.caseSensitive=c,b.$.mainContainer.appendChild(c)}a.filterBuilderObject={filters:[]},a.cachedFilter={filterBuilder:["and"],caseSensitive:!1}}localizeFilterBuilder(){const a=this,b=a.context,c=a.filterBuilder;let d=c.messages[b.locale];d||(d={},c.messages[b.locale]=d),c.customOperations=[{name:"NULL",label:b.localize("null"),hideValue:!0},{name:"NOT_NULL",label:b.localize("notNull"),hideValue:!0}],d.addCondition=b.localize("addCondition"),d.addGroup=b.localize("addGroup"),d["<"]=b.localize("lessThan"),d["<="]=b.localize("lessThanOrEqual"),d["<>"]=b.localize("notEqual"),d["="]=b.localize("equal"),d[">"]=b.localize("greaterThan"),d[">="]=b.localize("greaterThanOrEqual"),d.and=b.localize("and"),d.contains=b.localize("contains"),d.endswith=b.localize("endsWith"),d.isblank=b.localize("empty"),d.isnotblank=b.localize("notEmpty"),d.notcontains=b.localize("doesNotContain"),d.or=b.localize("or"),d.startswith=b.localize("startsWith"),d.dateTabLabel=b.localize("dateTabLabel"),d.timeTabLabel=b.localize("timeTabLabel"),c.formatStringDate=b.formatString,c.formatStringDateTime=b.formatString,c.locale=b.locale,c.valuePlaceholder=b.localize("filterBuilderPlaceholder")}evaluate(a){function b(c){let d=!("and"!==c.logicalOperator);for(let e=0;e<c.filters.length;e++){let f;f=c.filters[e]instanceof Smart.Utilities.FilterGroup?c.filters[e].evaluate(a):b(c.filters[e]),d="and"===c.logicalOperator?d&&f:d||f}return d}const c=this,d=c.context;if("default"===d.mode)return c.filterObject.evaluate(a);if("excel"===d.mode){let b=!1;if(Array.isArray(d.dataSource)){if(!c.customExcelFilterObjects||0===c.customExcelFilterObjects.length)return!0;for(let d=0;d<c.customExcelFilterObjects.length;d++)b=b||c.customExcelFilterObjects[d].evaluate(a);return b}if(!(c.customItems&&0<c.customItems.length))b=c.filterObject.evaluate(a);else if(0<c.filterObject.filters.length&&(b=c.filterObject.evaluate(a)),c.customItems&&d.evaluateFilterExpression)for(let e=0;e<c.customItems.length;e++){const f=d.evaluateFilterExpression(a,c.customItems[e].value);void 0!==f&&(b=b||f)}return b}return!c.filterBuilderObject.logicalOperator||b(c.filterBuilderObject)}}),Smart.Utilities.Assign("NumericFilterHandler",class extends Smart.Utilities.BaseFilterHandler{appendInputs(){let a=this,b=document.createElement("smart-numeric-text-box"),c=document.createElement("smart-numeric-text-box");return b.placeholder=a.context.localize("placeholderNumber"),c.placeholder=a.context.localize("placeholderNumber"),Smart.NumericTextBox?void(b.inputFormat="floatingPoint",b.nullable=!0,b.spinButtons=!0,b.value=null,c.inputFormat="floatingPoint",c.nullable=!0,c.spinButtons=!0,c.value=null,a.firstInput=b,a.secondInput=c):(b=document.createElement("input"),c=document.createElement("input"),b.setAttribute("aria-label",b.placeholder),b.classList.add("smart-input"),c.setAttribute("aria-label",c.placeholder),c.classList.add("smart-input"),a.firstInput=b,void(a.secondInput=c))}getFilterInputValue(a){return null===a.value||""===a.value?"":parseFloat(a.value)}}),Smart.Utilities.Assign("StringFilterHandler",class extends Smart.Utilities.BaseFilterHandler{setDefaults(){const a=this,b=a.context;a.defaultListSource=[{value:"EMPTY",label:b.localize("empty")},{value:"NOT_EMPTY",label:b.localize("notEmpty")},{value:"CONTAINS",label:b.localize("contains")},{value:"CONTAINS_CASE_SENSITIVE",label:b.localize("containsCaseSensitive")},{value:"DOES_NOT_CONTAIN",label:b.localize("doesNotContain")},{value:"DOES_NOT_CONTAIN_CASE_SENSITIVE",label:b.localize("doesNotContainCaseSensitive")},{value:"STARTS_WITH",label:b.localize("startsWith")},{value:"STARTS_WITH_CASE_SENSITIVE",label:b.localize("startsWithCaseSensitive")},{value:"ENDS_WITH",label:b.localize("endsWith")},{value:"ENDS_WITH_CASE_SENSITIVE",label:b.localize("endsWithCaseSensitive")},{value:"EQUAL",label:b.localize("equal")},{value:"EQUAL_CASE_SENSITIVE",label:b.localize("equalCaseSensitive")},{value:"NULL",label:b.localize("null")},{value:"NOT_NULL",label:b.localize("notNull")}],a.filterBuilderOperations=["contains","isblank","isnotblank","notcontains","startswith","endswith","=","NULL","NOT_NULL"],a.defaultListSelection=2}appendInputs(){const a=this,b=document.createElement("input"),c=document.createElement("input");b.placeholder=a.context.localize("placeholderValue"),b.setAttribute("aria-label",b.placeholder),c.placeholder=a.context.localize("placeholderValue"),c.setAttribute("aria-label",c.placeholder),b.classList.add("smart-input"),c.classList.add("smart-input"),a.firstInput=b,a.secondInput=c}getExcelComparison(a){return""===a?"EMPTY":"EQUAL_CASE_SENSITIVE"}}),Smart.Utilities.Assign("DateFilterHandler",class extends Smart.Utilities.BaseFilterHandler{appendInputs(){let a=this,b=a.context,c=document.createElement("smart-date-time-picker"),d=document.createElement("smart-date-time-picker");return Smart.DateTimePicker?void(c.calendarButton=!0,c.editMode="partial",c.formatString=b.formatString,c.dropDownDisplayMode="auto",c.locale=b.locale,!c.messages[b.locale]&&(c.messages[b.locale]={}),c.messages[b.locale].dateTabLabel=b.localize("dateTabLabel"),c.messages[b.locale].timeTabLabel=b.localize("timeTabLabel"),c.nullable=!0,c.value=null,d.calendarButton=!0,d.editMode="partial",d.formatString=b.formatString,d.dropDownDisplayMode="auto",d.locale=b.locale,!d.messages[b.locale]&&(d.messages[b.locale]={}),d.messages[b.locale].dateTabLabel=b.localize("dateTabLabel"),d.messages[b.locale].timeTabLabel=b.localize("timeTabLabel"),d.nullable=!0,d.value=null,d._onCompleted=function(){"timePicker"===d._dropDownDisplayMode?(c.placeholder=b.localize("placeholderTime"),d.placeholder=b.localize("placeholderTime")):(c.placeholder=b.localize("placeholderDate"),d.placeholder=b.localize("placeholderDate"))},a.firstInput=c,a.secondInput=d):(c=document.createElement("input"),d=document.createElement("input"),c.placeholder=b.localize("placeholderDate"),c.setAttribute("aria-label",c.placeholder),c.classList.add("smart-input"),d.placeholder=b.localize("placeholderDate"),d.setAttribute("aria-label",d.placeholder),d.classList.add("smart-input"),a.firstInput=c,void(a.secondInput=d))}getFilterInputValue(a){if(null===a.value)return"";if(!Smart.DateTimePicker)return new Date(a.value);const b=a.value.toDate();return"calendar"===this.displayMode&&b.setHours(0,0,0),b}defaultClear(){const a=this;a.firstList.selectedIndexes=[a.defaultListSelection],a.firstInput.value=null,a.logicalOperatorList.selectedIndexes=[0],a.secondList.selectedIndexes=[a.defaultListSelection],a.secondInput.value=null,a.filterObject.clear(),a.cacheFilter(a.defaultListSelection,0,a.defaultListSelection)}getHierarchicalDataSource(a){const b=this,c=b.dataSource,d={},e=[];let f;if("timePicker"!==a){for(let g in""===c[c.length-1].value&&(f=c[c.length-1],c.pop()),c.forEach(function(c){const e=c.value,f=e.getFullYear(),g=new Intl.DateTimeFormat(b.context.locale,{month:"long"}).format(e),h=e.getDate();if(d[f]||(d[f]={}),d[f][g]||(d[f][g]={}),!d[f][g][h]){if("calendar"===a)return void(d[f][g][h]=e);d[f][g][h]={}}if("calendar"!==a){const a=e.getHours(),b=e.getMinutes(),c=e.getSeconds();d[f][g][h][a]||(d[f][g][h][a]={}),d[f][g][h][a][b]||(d[f][g][h][a][b]={}),d[f][g][h][a][b][c]||(d[f][g][h][a][b][c]=e)}}),d){const b={label:g,items:[],customAttribute:"default-item"};for(let c in e.push(b),d[g]){const e={label:c,items:[],customAttribute:"default-item"};for(let f in b.items.push(e),d[g][c]){const b={label:f,customAttribute:"default-item"};if(e.items.push(b),"calendar"===a){b.value=d[g][c][f];continue}for(let a in b.items=[],d[g][c][f]){const e={label:"0".repeat(2-a.length)+a,items:[],customAttribute:"default-item"};for(let h in b.items.push(e),d[g][c][f][a]){const b={label:":"+"0".repeat(2-h.length)+h,items:[],customAttribute:"default-item"};for(let i in e.items.push(b),d[g][c][f][a][h]){const e={label:":"+"0".repeat(2-i.length)+i,value:d[g][c][f][a][h][i],customAttribute:"default-item"};b.items.push(e)}}}}}}f&&e.push(f),b.dataSource=e}}}),Smart.Utilities.Assign("BooleanFilterHandler",class extends Smart.Utilities.BaseFilterHandler{cacheFilter(a,b,c){const d=this;d.cachedFilter={firstFilterComparison:a,firstFilterValue:d.firstInput.selectedIndexes.slice(0),logicalOperator:b,secondFilterComparison:c,secondFilterValue:d.secondInput.selectedIndexes.slice(0)}}setDefaults(){const a=this,b=a.context;a.defaultListSource=[{value:"EQUAL",label:b.localize("equal")},{value:"NOT_EQUAL",label:b.localize("notEqual")},{value:"NULL",label:b.localize("null")},{value:"NOT_NULL",label:b.localize("notNull")}],a.filterBuilderOperations=["=","<>","NULL","NOT_NULL"],a.defaultListSelection=0}appendInputs(){const a=this,b=document.createElement("smart-drop-down-list"),c=document.createElement("smart-drop-down-list");b.dataSource=[{value:!0,label:"true"},{value:!1,label:"false"}],b.placeholder=a.context.localize("placeholderBoolean"),b.selectedIndexes=[],b.selectionMode="zeroOrOne",c.dataSource=[{value:!0,label:"true"},{value:!1,label:"false"}],c.placeholder=a.context.localize("placeholderBoolean"),c.selectedIndexes=[],c.selectionMode="zeroOrOne",a.firstInput=b,a.secondInput=c}getFilterInputValue(a){return 0===a.selectedValues.length?"":"true"===a.selectedValues[0]}defaultClear(){const a=this;a.firstList.selectedIndexes=[a.defaultListSelection],a.firstInput.selectedIndexes=[],a.logicalOperatorList.selectedIndexes=[0],a.secondList.selectedIndexes=[a.defaultListSelection],a.secondInput.selectedIndexes=[],a.filterObject.clear(),a.cacheFilter(a.defaultListSelection,0,a.defaultListSelection)}defaultCancel(){const a=this;a.firstList.selectedIndexes=[a.cachedFilter.firstFilterComparison],a.firstInput.selectedIndexes=a.cachedFilter.firstFilterValue,a.logicalOperatorList.selectedIndexes=[a.cachedFilter.logicalOperator],a.secondList.selectedIndexes=[a.cachedFilter.secondFilterComparison],a.secondInput.selectedIndexes=a.cachedFilter.secondFilterValue}});