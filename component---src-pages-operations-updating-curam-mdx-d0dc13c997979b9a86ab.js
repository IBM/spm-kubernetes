(self.webpackChunkspm_kubernetes=self.webpackChunkspm_kubernetes||[]).push([[1962],{6316:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return m}});var n=a(9756),l=(a(7294),a(4983)),o=a(4295),i={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},s=r("Caption"),p=r("InlineNotification"),c={_frontmatter:i},d=o.Z;function m(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)(d,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"One of the benefits of IBM® Cúram Social Program Management (SPM) on Kubernetes is the reduced time required to roll out a new version of your application from development all the way to production."),(0,l.kt)("p",null,"Depending on the type of change that needs to be made, there are multiple options for rolling out the change. The different options are visualized in figure 1."),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"532px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"137.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAIAAADuuAg3AAAACXBIWXMAAAsTAAALEwEAmpwYAAACg0lEQVQ4y52Ua2/aMBSG8/8/V9o/mPplXatpbbXCqGgZG0OUhmtLCWzcEgiJ7diO4+sUwlbalQr6yoqSKI9yzuvz2urVh/Wrtl3qzsdLY4zW2uwsq/Dp+vzD1/xx8e7G2RsGi2jS9xajkFFu9pRljMGEmDcphSPgScHeAovYH3c/I7emtVQ7SAihlMqsseiyXb54N2we8zgglFFK6HZhjMMwJITEcZzCSinitzhx9yoYY7zuGUDIhdgLJiuPUxhCJKV8I0xwqOSTTdZGa6PSq1aPL7XSRimV+rqGBUNeP4fmTa0VF1wrDUjQGNW7s5Y9upnCsTFGSsl4/OB3W5PG3aLt+PeErHqmQat4euDYRwn1F36AEGqObs9+np0UTy4beRgDnnAEkeM9XNS/HJ4fnlVPZ3DC4nQuLK0EXd5yMslq45JPwO8x+DVY9BbYXbWQagbHjnfvzHvOvMdFQild98wY22jstWBkzBPDMMY7ZiljtNaPMAAgSZLUx1clhMhm4xkMMcbbRpLFyXpRljX4BI5QIOXWMFOBsUBRAkkSPR8SwSIwvsLLTlZ2lhitdXovFWKg0i9/65Sqg0p/caeV3qzfgm6teHrQrrxPqE8p8zxvNpu5rhuEYYSintfJ27lLu1Cw8ygGgguyUhSlVVhS8mBcJuEgq+dfbrNHxCBKQMQhEdHLsx3HdN8zZA2PRiPbth3HgRD+/9EqIeu18fav2xBAd+oiGFGy6/+VMSgzTBnlgglgQciWm5uxTZoLOp2EzoNAyBr6/UIjn6tdVAbfPTCNaYwJJi8KY4QxbjXRdTG4LpIfZas1a+SquY+Fo9vhjTH6tYNTykRI0u1E5VJYLpFq5Q+H8E+RzJb18QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("picture",{parentName:"span"},"\n          ",(0,l.kt)("source",{parentName:"picture",srcSet:["/spm-kubernetes/static/93cc873d76386c8a0595ee41a91d1cb5/0eda2/upgrade_flow.webp 288w","/spm-kubernetes/static/93cc873d76386c8a0595ee41a91d1cb5/d122d/upgrade_flow.webp 532w"],sizes:"(max-width: 532px) 100vw, 532px",type:"image/webp"}),"\n          ",(0,l.kt)("source",{parentName:"picture",srcSet:["/spm-kubernetes/static/93cc873d76386c8a0595ee41a91d1cb5/7fc1e/upgrade_flow.png 288w","/spm-kubernetes/static/93cc873d76386c8a0595ee41a91d1cb5/5774b/upgrade_flow.png 532w"],sizes:"(max-width: 532px) 100vw, 532px",type:"image/png"}),"\n          ",(0,l.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/93cc873d76386c8a0595ee41a91d1cb5/5774b/upgrade_flow.png",alt:"Upgrade Flow",title:"Upgrade Flow",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,l.kt)(s,{mdxType:"Caption"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Figure 1:")," Upgrade process flow")),(0,l.kt)("p",null,"All the application images should be built by a continuous integration environment, tagged appropriately (e.g. combination of product version and a timestamp), and then promoted throughout all the phases."),(0,l.kt)("p",null,"Updates can be applied using 2 ways: Helm values, or by editing the deployed resources using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,l.kt)("h2",null,"Updating with ",(0,l.kt)("inlineCode",{parentName:"h2"},"kubectl")),(0,l.kt)("p",null,"You can update a running application by using the following command to switch out an image, Kubernetes takes care of everything else.\nA new pod with the new image is started up, and when it reports as ‘Ready’, it takes over serving traffic."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl set image deployment/<deploymentName> <containerName>=<newImage>:<newTag>\n")),(0,l.kt)("p",null,"This process is described in greater detail in ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment"},"Updating a Deployment"),"."),(0,l.kt)("p",null,"For example, the following command will issue an instruction to the Kubernetes Master to change the image used by the ",(0,l.kt)("inlineCode",{parentName:"p"},"apps-producer-rest")," container of a deployment called ",(0,l.kt)("inlineCode",{parentName:"p"},"myRelease-apps-rest-producer")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"minikube.local:5000/rest:vNext")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl set image deployment/myRelease-apps-rest-producer apps-producer-rest=minikube.local:5000/rest:vNext\n")),(0,l.kt)("p",null,"The status of this change can be monitored using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods --watch")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl rollout status deployment/myRelease-apps-rest-producer")),(0,l.kt)("p",null,"If the rollout is not successful (for example, becasue of a typo), the last update can be rolled back:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl rollout undo deployment/<deploymentName>\n")),(0,l.kt)("p",null,"This is convenient when only a single image needs to be updated, and the changes do not require any database changes (for example, the Universal Access React application would be a good candidate).\nHowever, bulk updates of images or configuration should be handled with Helm."),(0,l.kt)("h2",null,"Rolling out updates with Helm"),(0,l.kt)("p",null,"An update using Helm can include configuration changes, as well as a change of Docker® images. Assuming that all images are tagged with the same tag, the upgrade command would look like the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade <releasename> <chartName> --reuse-values --set images.tag=vNext\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade")," command keeps all the values used with the original ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," due to the ",(0,l.kt)("inlineCode",{parentName:"p"},"--reuse-values")," flag, and only changes the ",(0,l.kt)("inlineCode",{parentName:"p"},"images.tag")," value, so all new images are deployed with the ",(0,l.kt)("inlineCode",{parentName:"p"},"vNext")," tag."),(0,l.kt)("p",null,"Like ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),", if you must reverse any configuration changes applied by the last action, use ",(0,l.kt)("inlineCode",{parentName:"p"},"helm rollback <releasename>"),"."),(0,l.kt)("p",null,"The full documentation of the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade")," command is available on the Helm ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_upgrade/"},"Updating a Deployment")," page."),(0,l.kt)("h2",null,"Upgrade with SQL changes"),(0,l.kt)("p",null,"Both of the scenarios described assume a no-impact, zero-downtime upgrade, that is no changes to the database are required.\nHowever, should the rollout include schema changes, the application must be halted. This must be coordinated together with your IT Operations and DBA teams."),(0,l.kt)("p",null,"To halt the application for the duration of the upgrade without deleting all Kubernetes objects, the application can be scaled down to 0 pods:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale --replicas=0 deployment/<deploymentName>\n")),(0,l.kt)("p",null,"After the database upgrade is completed, the new version of application code can be rolled out using the Helm method described in\n",(0,l.kt)("a",{parentName:"p",href:"#rolling-out-updates-with-helm"},"Rolling out updates with Helm"),"."),(0,l.kt)(p,{mdxType:"InlineNotification"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," The ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl scale")," command can be used to horizontally ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#scaling-a-deployment"},"scale your application"),".")))}m.isMDXComponent=!0},4295:function(e,t,a){"use strict";a.d(t,{Z:function(){return y}});var n=a(7294),l=a(8650),o=a.n(l),i=a(5444),r=a(6949),s=a(1551),p=a(5900),c=a.n(p),d=function(e){var t,a=e.title,l=e.theme,o=e.tabs,i=void 0===o?[]:o;return n.createElement("div",{className:c()("PageHeader-module--page-header--1JmOE",(t={},t["PageHeader-module--with-tabs--ezlJE"]=i.length,t["PageHeader-module--dark-mode--aV7If"]="dark"===l,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--J1--B"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,l=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||l,r=o.baseUrl,s=o.subDirectory,p=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?n.createElement("div",{className:"bx--row EditLink-module--row--2vJiZ"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--t_pLX",href:p},"Edit this page on GitHub"))):null},u=a(4275),g=a(3552),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,r=l.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===r,p=new RegExp(r+"/?(#.*)?$"),d=l.replace(p,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--3CjGa"]=s,t),"PageTabs-module--list-item--2X02I")},n.createElement(i.Link,{className:"PageTabs-module--link--2anNu",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--18QsR"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--3gLeN"},s))))))},t}(n.Component),b=a(2881),k=a(6958),f=a(36),w=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--Bb0E9"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--1RmBx"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,l=e.location,p=e.Title,c=t.frontmatter,g=void 0===c?{}:c,f=t.relativePagePath,y=t.titleType,N=g.tabs,v=g.title,E=g.theme,A=g.description,x=g.keywords,T=g.date,C=(0,k.Z)().interiorTheme,P=(0,i.useStaticQuery)("2456312558").site.pathPrefix,S=P?l.pathname.replace(P,""):l.pathname,B=N?S.split("/").filter(Boolean).slice(-1)[0]||o()(N[0],{lower:!0}):"",H=E||C;return n.createElement(s.Z,{tabs:N,homepage:!1,theme:H,pageTitle:v,pageDescription:A,pageKeywords:x,titleType:y},n.createElement(d,{title:p?n.createElement(p,null):v,label:"label",tabs:N,theme:H}),N&&n.createElement(h,{title:v,slug:S,tabs:N,currentTab:B}),n.createElement(b.Z,{padded:!0},a,n.createElement(m,{relativePagePath:f}),n.createElement(w,{date:T})),n.createElement(u.Z,{pageContext:t,location:l,slug:S,tabs:N,currentTab:B}),n.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-operations-updating-curam-mdx-d0dc13c997979b9a86ab.js.map