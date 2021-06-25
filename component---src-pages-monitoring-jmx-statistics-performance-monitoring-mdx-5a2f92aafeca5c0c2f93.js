(self.webpackChunkspm_kubernetes=self.webpackChunkspm_kubernetes||[]).push([[6788],{6881:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return m}});var n=a(9756),i=(a(7294),a(4983)),r=a(4295),s={},l={_frontmatter:s},o=r.Z;function m(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)(o,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"What is Cúram JMX?"),(0,i.kt)("p",null,"Cúram JMX statistics provides operational data from a running IBM® Cúram Social Program Management (SPM) application.\nJMX statistics for use with a traditional application server are documented\nin this ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/JMXAdministrator/ctr_CuramJMXAdministratorsGuide.html"},"Knowledge Center")," page."),(0,i.kt)("h3",null,"Cúram JMX Kubernetes Limitations"),(0,i.kt)("p",null,"Cúram JMX statistics behave similarly in Kubernetes, but have the following limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access by using the ",(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/JMXAdministrator/c_JMXADMIN_Accessjmxstatsusingurl.html"},"SPM Administration Application"),"\nis not supported because:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Not all pods have the requisite SPM client installed, which means JMS performance is unavailable using this access mechanism."),(0,i.kt)("li",{parentName:"ul"},"The reverse proxy nature of Kubernetes means that even for the pods with clients installed, identifying the correct target server would be difficult.")))),(0,i.kt)("p",null,"Therefore, for Kubernetes you are restricted to using the timer-based access method, for more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/JMXAdministrator/c_JMXADMIN_Accesstothejmxstatsusingjmxtimer.html"},"Using the JMX Timer"),"."),(0,i.kt)("h2",null,"Cúram JMX timer-based statistics on Kubernetes"),(0,i.kt)("p",null,"This mechanism writes the JMX statistics periodically at a file system location. The advantage of this mechanism is that it can be used for collecting statistics from every server in an environment"),(0,i.kt)("p",null,"The primary properties used to configure timer-based statistics are integrated into the Helm Charts."),(0,i.kt)("p",null,"A prerequisite for using timer-based SPM JMX statistics is to override ",(0,i.kt)("inlineCode",{parentName:"p"},"global.apps.common.persistence.enabled=true"),"."),(0,i.kt)("p",null,"You must also consider the other persistence-related settings and configure them appropriately."),(0,i.kt)("h3",null,"Cúram JMX statistics persisteance"),(0,i.kt)("p",null,"Persistence is required for timer-based statistics because the non-permanent nature of pods means that as they come and go, you might need statistics from an earlier execution."),(0,i.kt)("p",null,"Enable timer-based JMX statistics with a ",(0,i.kt)("inlineCode",{parentName:"p"},"global.apps.common.persistence.jmxstats.enabled=true")," override.\nOnce configured, the following SPM properties are added to the Liberty pod jvm.options files with the defaults shown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"-Dcuram.jmx.output_statistics_timer_enabled=true\n-Dcuram.jmx.output_statistics_timer_folder=/tmp/jmx/\n-Dcuram.jmx.output_statistics_timer_period=60000\n")),(0,i.kt)("p",null,"You can override the value of the timer period by using ",(0,i.kt)("inlineCode",{parentName:"p"},"global.apps.common.persistence.jmxstats.timerPeriod")," where the value is specified as the\nnumber of milliseconds between each timer. For example, 60000 = 1 minute."),(0,i.kt)("p",null,"Inside the specified timer folder are the statistics XML files, named with a datetimestamp and pod name."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For example:"),(0,i.kt)("inlineCode",{parentName:"p"},"202009171025363411@bugsbunny-apps-curam-producer-6c9bf7dc46-snw4w-1661122509.xml")),(0,i.kt)("h2",null,"Considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The default of ",(0,i.kt)("inlineCode",{parentName:"p"},"1 minute")," for the timer period might be too short because over an extended time, depending upon the amount of application activity, the persistent storage could be exhausted."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Consider also the length of time a pod will run; if the timer period is too short, data since the last timer period is lost."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No timer-based statistics are generated until the first login or JMS message is processed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Turn off statistics for running pods by editing the configmaps where ",(0,i.kt)("inlineCode",{parentName:"p"},"-Dcuram.jmx.output_statistics_timer_enabled=true")," is set, changing the value to false, and restarting the pods.\nFor example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get configmaps")," command to list all the configmaps."),(0,i.kt)("li",{parentName:"ul"},"The configmaps you need to change are those named with ",(0,i.kt)("inlineCode",{parentName:"li"},"*-jvm-override-*")," and the number and names of the configmaps vary depending on your configuration."),(0,i.kt)("li",{parentName:"ul"},"For each configmap, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl edit configmap")," command to change the ",(0,i.kt)("inlineCode",{parentName:"li"},"curam.jmx.output_statistics_timer_enabled")," setting to false."),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl delete pod")," command for each of the application producer and consumer pods that have a corresponding application name to the configmap."),(0,i.kt)("li",{parentName:"ul"},"On restart the new pod no longer generates statistics files."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"By default, statistics are accumulated over the life of a pod; therefore, the last file generated is a superset of all the other files for that pod, therefore and you should only need the latest file."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There is a property to change this behavior so each period resets the statistics, but then you would have to address how to amalgamate the data and make sense of it; so,changing this is not recommended."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In support of EJB timers, IBM WebSphere Liberty dynamically creates three tables each time a pod starts; a ",(0,i.kt)("inlineCode",{parentName:"p"},"PART"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PROP"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"TASK")," table."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The amount of data in these tables is small; but, over time could result in a large number of these tables in your database."),(0,i.kt)("li",{parentName:"ul"},"You should monitor these tables and drop those for pods that no longer exist."),(0,i.kt)("li",{parentName:"ul"},"These tables are prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"EJBTIMER_"),", followed by the pod name. For example, for the bugsbunny-apps-curam-consumer deployment, the following three tables were created for a single pod:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  EJBTIMER_BUGSBUNNY_APPS_CURAM_CONSUMER_786586FD5F_BGMGWPART\n  EJBTIMER_BUGSBUNNY_APPS_CURAM_CONSUMER_786586FD5F_BGMGWPROP\n  EJBTIMER_BUGSBUNNY_APPS_CURAM_CONSUMER_786586FD5F_BGMGWTASK\n")),(0,i.kt)("p",{parentName:"li"},"In the context of Kubernetes pods, if the JMX and Liberty metrics are being made available from the pods by the JMX Exporter to be scraped by Prometheus,\nthe following rules file may be employed to ensure that the metrics are surfaced and labelled appropriately."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/spm-kubernetes/resources/example_jmx_rules.yml"},"Example jmxExporter rules file")))))}m.isMDXComponent=!0},4295:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var n=a(7294),i=a(8650),r=a.n(i),s=a(5444),l=a(6949),o=a(1551),m=a(5900),p=a.n(m),c=function(e){var t,a=e.title,i=e.theme,r=e.tabs,s=void 0===r?[]:r;return n.createElement("div",{className:p()("PageHeader-module--page-header--1JmOE",(t={},t["PageHeader-module--with-tabs--ezlJE"]=s.length,t["PageHeader-module--dark-mode--aV7If"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--J1--B"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,i=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||i,l=r.baseUrl,o=r.subDirectory,m=l+"/edit/"+r.branch+o+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--2vJiZ"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--t_pLX",href:m},"Edit this page on GitHub"))):null},d=a(4275),h=a(3552),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,l=i.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===l,m=new RegExp(l+"/?(#.*)?$"),c=i.replace(m,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--3CjGa"]=o,t),"PageTabs-module--list-item--2X02I")},n.createElement(s.Link,{className:"PageTabs-module--link--2anNu",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--18QsR"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--3gLeN"},o))))))},t}(n.Component),g=a(2881),b=a(6958),k=a(36),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--Bb0E9"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--1RmBx"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,i=e.location,m=e.Title,p=t.frontmatter,h=void 0===p?{}:p,k=t.relativePagePath,v=t.titleType,y=h.tabs,w=h.title,E=h.theme,_=h.description,M=h.keywords,x=h.date,C=(0,b.Z)().interiorTheme,P=(0,s.useStaticQuery)("2456312558").site.pathPrefix,T=P?i.pathname.replace(P,""):i.pathname,S=y?T.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",J=E||C;return n.createElement(o.Z,{tabs:y,homepage:!1,theme:J,pageTitle:w,pageDescription:_,pageKeywords:M,titleType:v},n.createElement(c,{title:m?n.createElement(m,null):w,label:"label",tabs:y,theme:J}),y&&n.createElement(f,{title:w,slug:T,tabs:y,currentTab:S}),n.createElement(g.Z,{padded:!0},a,n.createElement(u,{relativePagePath:k}),n.createElement(N,{date:x})),n.createElement(d.Z,{pageContext:t,location:i,slug:T,tabs:y,currentTab:S}),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-monitoring-jmx-statistics-performance-monitoring-mdx-5a2f92aafeca5c0c2f93.js.map