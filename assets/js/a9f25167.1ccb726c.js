"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[922],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Introduction",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/intro.md",slug:"/"},s=void 0,c={unversionedId:"intro",id:"version-0.5.x/intro",title:"Introduction",description:"ZIO-gRPC lets you write purely functional gRPC servers and clients. It is built on top of ZIO, a library for asynchronous and concurrent functional programming in Scala.",source:"@site/versioned_docs/version-0.5.x/intro.md",sourceDirName:".",slug:"/",permalink:"/zio-grpc/docs/",draft:!1,editUrl:"https://github.com/scalapb/zio-grpc/edit/master/docs/intro.md",tags:[],version:"0.5.x",frontMatter:{title:"Introduction",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/intro.md",slug:"/"},sidebar:"version-0.5.x/someSidebar",next:{title:"Quick Start",permalink:"/zio-grpc/docs/quickstart"}},u={},p=[{value:"Highlights",id:"highlights",level:2},{value:"Why ZIO gRPC?",id:"why-zio-grpc",level:2},{value:"Effects as pure values",id:"effects-as-pure-values",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO-gRPC lets you write purely functional gRPC servers and clients. It is built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://zio.dev/"},"ZIO"),", a library for asynchronous and concurrent functional programming in Scala."),(0,i.kt)("h2",{id:"highlights"},"Highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports all types of RPCs (unary, client streaming, server streaming, bidirectional)."),(0,i.kt)("li",{parentName:"ul"},"Cancellable RPCs: easily cancel RPCs by calling ",(0,i.kt)("inlineCode",{parentName:"li"},"interrupt")," on the effect. Server will immediately abort execution."),(0,i.kt)("li",{parentName:"ul"},"Scala.js support: call your service from Scala code running on the browser.")),(0,i.kt)("h2",{id:"why-zio-grpc"},"Why ZIO gRPC?"),(0,i.kt)("p",null,"One of the advantages of a microservice architecture is the ability to write different microservices using different technogies. ZIO gRPC might be a great choice for your project if you value:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type-safety"),": Your business logic and the data types are checked at compile time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Resource safety"),": Managed resources (such as database connections) are guaranteed to be released."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reusable behaviors"),": Create complex behaviors by easily combining basic building blocks. For example:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Exponential backoff, is a ",(0,i.kt)("inlineCode",{parentName:"li"},"retry")," method call that gets an exponential schedule as a parameter."),(0,i.kt)("li",{parentName:"ul"},"Sending a few identical requests to a number of servers and waiting only until the first response."),(0,i.kt)("li",{parentName:"ul"},"Sending different requests in parallel and collecting all the results as a list."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Living on the edge"),": Yes, this is a word of warning. Both ZIO and ZIO gRPC are new technologies. While a lot of effort has been put to test, it is possible that you will encounter bugs. For ZIO gRPC, APIs may change between minor releases without notice.")),(0,i.kt)("h2",{id:"effects-as-pure-values"},"Effects as pure values"),(0,i.kt)("p",null,'In ZIO gRPC, the services you will write will be purely functional. When a client makes an RPC call to your service, a "handler" method in your service will be invoked. In contrast to imperative programming, instead of actually handling the call, this handler method will return a pure immutable value of type ',(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),". This value, on its own, doesn't do anything - it represents the work that needs to get done to fulfill the request, for example:  reading from a database, making a network call, or calling a local function. ZIO's runtime is going to run the effect immediately after you return it. As you will see, structuring your program by combining functional effects will lead to reusable code that is easier to reason about and more likely to be correct once you get it to compile."),(0,i.kt)("p",null,"There are also technical advantages: in case the client aborts the request, ZIO gRPC can interrupt the server computation even if the server is executing an effect that is unrelated to ZIO gRPC (in grpc-java for example, this can only be accomplished by the server occassionally checking for a cancellation). Using ZIO building blocks such as ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.bracket"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#onExit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.uninterruptible")," you remain in control over the behavior of the program in case of interruptions."),(0,i.kt)("h1",{id:"try-it-out"},"Try it out"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Got 5 to 10 more minutes? Check out our ",(0,i.kt)("a",{parentName:"li",href:"/zio-grpc/docs/quickstart"},"Quick Start tutorial"),". You will clone an existing ZIO gRPC client and a server. You will run them and add a new RPC method."),(0,i.kt)("li",{parentName:"ul"},"Got up to an hour? Take a look at the ",(0,i.kt)("a",{parentName:"li",href:"/zio-grpc/docs/basics"},"Basics tutorial"),". You will learn how to implement gRPC servers and clients, including all sort of streaming requests available in gRPC. The tutorial will also show you how to hook the clients and servers into a full working ZIO application.")))}f.isMDXComponent=!0}}]);