(this.webpackJsonpburgerbuilder=this.webpackJsonpburgerbuilder||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},42:function(e,t,n){e.exports=n(71)},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),c=n.n(i),l=n(2),o=n(4),s=n(5),u=n(7),d=n(6),m=n(36),p=n.n(m),h=function(e){return r.a.createElement("div",{className:"Logo",style:{height:e.height}},r.a.createElement("img",{src:p.a,alt:"BurgerBuilder"}))},g=n(13),E=n(17),f=function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement(E.b,{to:e.link,exact:!0,activeClassName:"active"},e.children))},b=function(){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(f,{link:"/BurgerBuilder",exact:g.checkPropTypes.exact},"Burger Builder"),r.a.createElement(f,{link:"/orders"},"Orders"),r.a.createElement(f,{link:"/auth"},"Authenticate"))},v=function(e){return r.a.createElement("div",{className:"DrawerToggle",onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},y=function(e){return r.a.createElement("header",{className:"Toolbar"},r.a.createElement(v,{clicked:e.drawerToggleClicked}),r.a.createElement(h,{height:"80%"}),r.a.createElement("nav",{className:"DesktopOnly"},r.a.createElement(b,null)))},O=function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null},C=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(h,{height:"11%"}),r.a.createElement("nav",null,r.a.createElement(b,null))))},j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(C,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:"content"},this.props.children))}}]),n}(a.Component),N=n(1),k=n(10),T=function(){return r.a.createElement("div",{className:"Loader"},"Loading...")},S=n(41),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"salad":e=r.a.createElement("div",{className:"Salad"});break;case"bacon":e=r.a.createElement("div",{className:"Bacon"});break;default:e=null}return e}}]),n}(a.Component),w=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(S.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(I,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),r.a.createElement("div",{className:"Burger"},r.a.createElement(I,{type:"bread-top"}),t,r.a.createElement(I,{type:"bread-bottom"}))},R=function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:"More",onClick:e.added},"More"))},D=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],_=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),D.map((function(t){return r.a.createElement(R,{key:t.label,label:t.label,added:function(){return e.ingrinientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},H=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},A=function(e){return r.a.createElement("button",{onClick:e.clicked,disabled:e.disabled,className:[e.btnType,"Button"].join(" ")},e.children)},B=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following integridients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(A,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(A,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},F=n(39),L=n.n(F),P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={purchasing:!1},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}))>0}},{key:"render",value:function(){var e=Object(N.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.props.error?r.a.createElement("p",null,"Ingredients can't be loaded!"):r.a.createElement(T,null);return this.props.ings&&(a=r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{ingredients:this.props.ings}),r.a.createElement(_,{ingrinientAdded:this.props.onIngridientAdded,ingredientRemoved:this.props.onIngridientRemoved,disabled:e,price:this.props.price,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler})),n=r.a.createElement(B,{ingredients:this.props.ings,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.props.price})),r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),n}(a.Component),U=Object(k.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error}}),(function(e){return{onIngridientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngridientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){fetch("https://burgerbuilder-166a2.firebaseio.com/ingredients.json").then((function(e){return e.json()})).then((function(t){e({type:"SET_INGREDIENTS",ingredients:t})})).catch((function(t){e({type:"FETCH_INGRENIENTS_FAILED"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})}}}))(P,L.a),x=function(e){return r.a.createElement("div",{className:"CeckoutSummary"},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(w,{ingredients:e.ingredients})),r.a.createElement(A,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(A,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},z=function(e){var t=null,n=[t];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push("Invalid"),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"trxtarea":t=r.a.createElement("textarea",Object.assign({className:"InputElement"},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:"InputElement",value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:"InputElement"},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:"Input"},r.a.createElement("label",{className:"Label"},e.label),t)},V=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:n};e.props.onOrderBurger(r)},e.inputChangedHandler=function(t,n){var a=Object(N.a)({},e.state.orderForm),r=Object(N.a)({},a[n]);r.value=t.target.value,r.valid=e.checkValidity(r.value,r.validation),r.touched=!0,a[n]=r;var i=!0;for(var c in a)i=a[c].valid&&i;e.setState({orderForm:a,formIsValid:i})},e}return Object(s.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(z,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),r.a.createElement(A,{btnType:"Success",disabled:!this.state.formIsValid,clicked:this.orderHandler},"ORDER"));return this.props.loading&&(a=r.a.createElement(T,null)),r.a.createElement("div",{className:"ContactData"},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),n}(a.Component),G=Object(k.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading}}),(function(e){return{onOrderBurger:function(t){return e(function(e){var t=null;return function(n){n({type:"PURCHASE_BURGER_START"}),fetch("https://burgerbuilder-166a2.firebaseio.com/orders.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderData:e})}).then((function(e){return e.json()})).then((function(e){return t=e}),console.log(t),n(function(e,t){return{type:"PURCHASE_BURGER_SUCCES",orderId:e,orderData:t}}(t,e))).catch((function(e){return n(function(e){return{type:"PUTCHASE_BURGER_FAIL",error:e}}(e))}))}}(t))}}}))(V),M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=r.a.createElement(l.a,{to:"/BurgerBuilder"});if(this.props.ings){var t=this.props.purchased?r.a.createElement(l.a,{to:"/BurgerBuilder"}):null;e=r.a.createElement(r.a.Fragment,null,t,r.a.createElement(x,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(l.b,{path:this.props.match.path+"/contact-data",component:G}))}return e}}]),n}(a.Component),q=Object(k.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(M),$=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," ",e.amount)}));return r.a.createElement("div",{className:"Order"},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: PLN ",Number.parseFloat(e.price.toFixed(2))))},Y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders()}},{key:"render",value:function(){console.log(this.props.orders);var e=r.a.createElement(T,null);return this.props.loading||(e=this.props.orders.map((function(e){return r.a.createElement($,{key:e.id,ingredients:e.orderData.ingredients,price:+e.orderData.price})}))),r.a.createElement(r.a.Fragment,null,e)}}]),n}(a.Component),W=Object(k.b)((function(e){return{orders:e.order.orders,loading:e.order.loading}}),(function(e){return{onFetchOrders:function(){return e((function(e){e({type:"FETCH_ORDERS_START"}),fetch("https://burgerbuilder-166a2.firebaseio.com/orders.json").then((function(e){return e.json()})).then((function(t){console.log(t);var n=[];for(var a in t)n.push(Object(N.a)(Object(N.a)({},t[a]),{},{id:a}));e({type:"FETCH_ORDERS_SUCCESS",orders:n})})).catch((function(t){e({type:"FETCH_ORDERS_FAIL",error:t})}))}))}}}))(Y),J=n(14),Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isemail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLenght:6},valid:!1,touched:!1}}},e.inputChangedHandler=function(t,n){var a=Object(N.a)(Object(N.a)({},e.state.controls),{},Object(J.a)({},n,Object(N.a)(Object(N.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:a})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value)},e}return Object(s.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return r.a.createElement(z,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));return r.a.createElement("div",{className:"Auth"},r.a.createElement("form",{onSubmit:this.submitHandler},a,r.a.createElement(A,{btnType:"Success"},"SUBMIT")))}}]),n}(a.Component),X=Object(k.b)(null,(function(e){return{onAuth:function(t,n){return e(function(e,t){return function(n){n({type:"AUTH_START"}),fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAkSLdr2daVbnCHHhU1VFNQQpHRpd4dvbY",{email:e,password:t,returnSecureToken:!0}).then((function(e){return e.json()})).then((function(e){console.log(e),n(function(e){return{type:"AUTH_SUCCESS",authData:e}}(e))})).catch((function(e){console.log(e),n(function(e){return{type:"AUTH_FAIL",error:e}}(e))}))}}(t,n))}}}))(Q);var Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/checkout",component:q}),r.a.createElement(l.b,{path:"/orders",component:W}),r.a.createElement(l.b,{path:"/auth",component:X}),r.a.createElement(l.b,{path:"/BurgerBuilder",exact:!0,component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(70);var K=n(16),ee={ingredients:null,totalPrice:4,error:!1},te={salad:.4,cheese:.5,meat:1.3,bacon:.7},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Object(N.a)(Object(N.a)({},e),{},{ingredients:Object(N.a)(Object(N.a)({},e.ingredients),{},Object(J.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+te[t.ingredientName]});case"REMOVE_INGREDIENT":return Object(N.a)(Object(N.a)({},e),{},{ingredients:Object(N.a)(Object(N.a)({},e.ingredients),{},Object(J.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-te[t.ingredientName]});case"SET_INGREDIENTS":return Object(N.a)(Object(N.a)({},e),{},{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4});case"FETCH_INGRENIENTS_FAILED":return Object(N.a)(Object(N.a)({},e),{},{error:!0});default:return e}},ae={orders:[],loading:!1,purchased:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_BURGER_START":return Object(N.a)(Object(N.a)({},e),{},{loading:!0});case"PURCHASE_BURGER_SUCCES":var n=Object(N.a)(Object(N.a)({},t.orderData),{},{id:t.orderId});return Object(N.a)(Object(N.a)({},e),{},{loading:!1,purchased:!0,orders:e.orders.concat(n)});case"FETCH_INGRENIENTS_FAILED":return Object(N.a)(Object(N.a)({},e),{},{loading:!1});case"PURCHASE_INIT":return Object(N.a)(Object(N.a)({},e),{},{purchased:!1});case"FETCH_ORDERS_START":return Object(N.a)(Object(N.a)({},e),{},{loading:!0});case"FETCH_ORDERS_SUCCESS":return Object(N.a)(Object(N.a)({},e),{},{orders:t.orders,loading:!1});case"FETCH_ORDERS_FAIL":return Object(N.a)(Object(N.a)({},e),{},{loading:!1});default:return e}},ie=n(40),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,le=Object(K.c)({burgerBuilder:ne,order:re}),oe=Object(K.e)(le,ce(Object(K.a)(ie.a))),se=r.a.createElement(k.a,{store:oe},r.a.createElement(E.a,null,r.a.createElement(Z,null)));c.a.render(se,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.4bd8b4b2.chunk.js.map