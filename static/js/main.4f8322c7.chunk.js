(this.webpackJsonpburgerbuilder=this.webpackJsonpburgerbuilder||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},42:function(e,t,n){e.exports=n(71)},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),l=n(2),o=n(6),s=n(7),u=n(9),d=n(8),m=n(36),p=n.n(m),h=function(e){return r.a.createElement("div",{className:"Logo",style:{height:e.height}},r.a.createElement("img",{src:p.a,alt:"BurgerBuilder"}))},g=n(13),E=n(16),b=function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement(E.b,{to:e.link,exact:!0,activeClassName:"active"},e.children))},f=function(){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(b,{link:"/BurgerBuilder",exact:g.checkPropTypes.exact},"Burger Builder"),r.a.createElement(b,{link:"/orders"},"Orders"))},v=function(e){return r.a.createElement("div",{className:"DrawerToggle",onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},O=function(e){return r.a.createElement("header",{className:"Toolbar"},r.a.createElement(v,{clicked:e.drawerToggleClicked}),r.a.createElement(h,{height:"80%"}),r.a.createElement("nav",{className:"DesktopOnly"},r.a.createElement(f,null)))},C=function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null},y=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(h,{height:"11%"}),r.a.createElement("nav",null,r.a.createElement(f,null))))},N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(y,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:"content"},this.props.children))}}]),n}(a.Component),j=n(1),k=n(11),S=function(){return r.a.createElement("div",{className:"Loader"},"Loading...")},T=n(41),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"salad":e=r.a.createElement("div",{className:"Salad"});break;case"bacon":e=r.a.createElement("div",{className:"Bacon"});break;default:e=null}return e}}]),n}(a.Component),R=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(T.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(I,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),r.a.createElement("div",{className:"Burger"},r.a.createElement(I,{type:"bread-top"}),t,r.a.createElement(I,{type:"bread-bottom"}))},D=function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:"More",onClick:e.added},"More"))},w=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],_=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),w.map((function(t){return r.a.createElement(D,{key:t.label,label:t.label,added:function(){return e.ingrinientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},B=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},F=function(e){return r.a.createElement("button",{onClick:e.clicked,disabled:e.disabled,className:[e.btnType,"Button"].join(" ")},e.children)},H=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following integridients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(F,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(F,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},A=n(39),P=n.n(A),L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={purchasing:!1},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}))>0}},{key:"render",value:function(){var e=Object(j.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.props.error?r.a.createElement("p",null,"Ingredients can't be loaded!"):r.a.createElement(S,null);return this.props.ings&&(a=r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{ingredients:this.props.ings}),r.a.createElement(_,{ingrinientAdded:this.props.onIngridientAdded,ingredientRemoved:this.props.onIngridientRemoved,disabled:e,price:this.props.price,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler})),n=r.a.createElement(H,{ingredients:this.props.ings,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.props.price})),r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),n}(a.Component),x=Object(k.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error}}),(function(e){return{onIngridientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngridientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){fetch("https://api.npoint.io/944cecc87fb14ec6dbe0/ingredients").then((function(e){return e.json()})).then((function(t){e({type:"SET_INGREDIENTS",ingredients:t})})).catch((function(t){e({type:"FETCH_INGRENIENTS_FAILED"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})}}}))(L,P.a),U=function(e){return r.a.createElement("div",{className:"CeckoutSummary"},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(R,{ingredients:e.ingredients})),r.a.createElement(F,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(F,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},G=function(e){var t=null,n=[t];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push("Invalid"),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"trxtarea":t=r.a.createElement("textarea",Object.assign({className:"InputElement"},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:"InputElement",value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:"InputElement"},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:"Input"},r.a.createElement("label",{className:"Label"},e.label),t)},V=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:n};e.props.onOrderBurger(r)},e.inputChangedHandler=function(t,n){var a=Object(j.a)({},e.state.orderForm),r=Object(j.a)({},a[n]);r.value=t.target.value,r.valid=e.checkValidity(r.value,r.validation),r.touched=!0,a[n]=r;var c=!0;for(var i in a)c=a[i].valid&&c;e.setState({orderForm:a,formIsValid:c})},e}return Object(s.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(G,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),r.a.createElement(F,{btnType:"Success",disabled:!this.state.formIsValid,clicked:this.orderHandler},"ORDER"));return this.props.loading&&(a=r.a.createElement(S,null)),r.a.createElement("div",{className:"ContactData"},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),n}(a.Component),M=Object(k.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading}}),(function(e){return{onOrderBurger:function(t){return e(function(e){var t=null;return function(n){n({type:"PURCHASE_BURGER_START"}),fetch("https://api.npoint.io/944cecc87fb14ec6dbe0/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderData:e})}).then((function(e){return e.json()})).then((function(e){return t=e}),console.log(t),n(function(e,t){return{type:"PURCHASE_BURGER_SUCCES",orderId:e,orderData:t}}(t,e))).catch((function(e){return n(function(e){return{type:"PUTCHASE_BURGER_FAIL",error:e}}(e))}))}}(t))}}}))(V),z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=r.a.createElement(l.a,{to:"/BurgerBuilder"});if(this.props.ings){var t=this.props.purchased?r.a.createElement(l.a,{to:"/BurgerBuilder"}):null;e=r.a.createElement(r.a.Fragment,null,t,r.a.createElement(U,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(l.b,{path:this.props.match.path+"/contact-data",component:M}))}return e}}]),n}(a.Component),q=Object(k.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(z),Y=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," ",e.amount)}));return r.a.createElement("div",{className:"Order"},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: PLN ",Number.parseFloat(e.price.toFixed(2))))},W=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders()}},{key:"render",value:function(){console.log(this.props.orders);var e=r.a.createElement(S,null);return this.props.loading||(e=this.props.orders.map((function(e){return r.a.createElement(Y,{key:e.id,ingredients:e.orderData.ingredients,price:+e.orderData.price})}))),r.a.createElement(r.a.Fragment,null,e)}}]),n}(a.Component),$=Object(k.b)((function(e){return{orders:e.order.orders,loading:e.order.loading}}),(function(e){return{onFetchOrders:function(){return e((function(e){e({type:"FETCH_ORDERS_START"}),fetch("https://api.npoint.io/944cecc87fb14ec6dbe0/orders").then((function(e){return e.json()})).then((function(t){console.log(t);var n=[];for(var a in t)n.push(Object(j.a)(Object(j.a)({},t[a]),{},{id:a}));e({type:"FETCH_ORDERS_SUCCESS",orders:n})})).catch((function(t){e({type:"FETCH_ORDERS_FAIL",error:t})}))}))}}}))(W);var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/checkout",component:q}),r.a.createElement(l.b,{path:"/orders",component:$}),r.a.createElement(l.b,{path:"/BurgerBuilder",exact:!0,component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(70);var X=n(15),Z=n(18),K={ingredients:null,totalPrice:4,error:!1},Q={salad:.4,cheese:.5,meat:1.3,bacon:.7},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Object(j.a)(Object(j.a)({},e),{},{ingredients:Object(j.a)(Object(j.a)({},e.ingredients),{},Object(Z.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+Q[t.ingredientName]});case"REMOVE_INGREDIENT":return Object(j.a)(Object(j.a)({},e),{},{ingredients:Object(j.a)(Object(j.a)({},e.ingredients),{},Object(Z.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-Q[t.ingredientName]});case"SET_INGREDIENTS":return Object(j.a)(Object(j.a)({},e),{},{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4});case"FETCH_INGRENIENTS_FAILED":return Object(j.a)(Object(j.a)({},e),{},{error:!0});default:return e}},te={orders:[],loading:!1,purchased:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_BURGER_START":return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case"PURCHASE_BURGER_SUCCES":var n=Object(j.a)(Object(j.a)({},t.orderData),{},{id:t.orderId});return Object(j.a)(Object(j.a)({},e),{},{loading:!1,purchased:!0,orders:e.orders.concat(n)});case"FETCH_INGRENIENTS_FAILED":return Object(j.a)(Object(j.a)({},e),{},{loading:!1});case"PURCHASE_INIT":return Object(j.a)(Object(j.a)({},e),{},{purchased:!1});case"FETCH_ORDERS_START":return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case"FETCH_ORDERS_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{orders:t.orders,loading:!1});case"FETCH_ORDERS_FAIL":return Object(j.a)(Object(j.a)({},e),{},{loading:!1});default:return e}},ae=n(40),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,ce=Object(X.c)({burgerBuilder:ee,order:ne}),ie=Object(X.e)(ce,re(Object(X.a)(ae.a))),le=r.a.createElement(k.a,{store:ie},r.a.createElement(E.a,null,r.a.createElement(J,null)));i.a.render(le,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.4f8322c7.chunk.js.map