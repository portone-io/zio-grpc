"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[892],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:"Decorating services",description:"Transformation of an effect or a stream.",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/decorating.md"},c=void 0,p={unversionedId:"decorating",id:"version-0.5.x/decorating",title:"Decorating services",description:"Transformation of an effect or a stream.",source:"@site/versioned_docs/version-0.5.x/decorating.md",sourceDirName:".",slug:"/decorating",permalink:"/zio-grpc/docs/decorating",draft:!1,editUrl:"https://github.com/scalapb/zio-grpc/edit/master/docs/decorating.md",tags:[],version:"0.5.x",frontMatter:{title:"Decorating services",description:"Transformation of an effect or a stream.",custom_edit_url:"https://github.com/scalapb/zio-grpc/edit/master/docs/decorating.md"},sidebar:"version-0.5.x/someSidebar",previous:{title:"Context and Dependencies",permalink:"/zio-grpc/docs/context"},next:{title:"ZIO gRPC and Deadlines",permalink:"/zio-grpc/docs/deadlines"}},u={},l=[],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When implementing a server, sometimes you might want to decorate all methods (effects or streams)\nin the service, for example to add access and error logging.  "),(0,a.kt)("p",null,"It can be done with the help of ",(0,a.kt)("inlineCode",{parentName:"p"},"ZTransform"),'. Instances of this class can be used\nto apply a transformation to all methods of a service to generate a new "decorated" service.\nThis can be used for pre- or post-processing of requests/responses and also for environment\nand context transformations.'),(0,a.kt)("p",null,"We define decoration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import io.grpc.Status\nimport scalapb.zio_grpc.{ RequestContext, ZTransform }\nimport zio._\nimport zio.stream.ZStream\n\nclass LoggingTransform[R] extends ZTransform[R, Status, R with Has[RequestContext]] {\n\n  def logCause(cause: Cause[Status]): URIO[Has[RequestContext], Unit] = ???\n\n  def accessLog: URIO[Has[RequestContext], Unit] = ???\n\n  override def effect[A](io: ZIO[R, Status, A]): ZIO[R with Has[RequestContext], Status, A] =\n    io.zipLeft(accessLog).tapCause(logCause)\n\n  override def stream[A](io: ZStream[R, Status, A]): ZStream[R with Has[RequestContext], Status, A] =\n    (io ++ ZStream.fromEffect(accessLog).drain).onError(logCause)\n}\n")),(0,a.kt)("p",null,"and then we apply it to our service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import myexample.testservice.ZioTestservice.ZSimpleService\nimport myexample.testservice.{Request, Response}\n\nobject MyService extends ZSimpleService[Any, Any] {\n  def sayHello(req: Request): ZIO[Any, Status, Response] =\n    ZIO.succeed(Response(s"Hello user"))\n}\n\nval decoratedService =\n  MyService.transform(new LoggingTransform[Any])\n// decoratedService: ZSimpleService[Has[RequestContext], Any] = myexample.testservice.ZioTestservice$ZSimpleService$$anon$6$$anon$7@67739b99\n')))}f.isMDXComponent=!0}}]);