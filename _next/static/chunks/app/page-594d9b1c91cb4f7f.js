(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{572:function(e,r,t){Promise.resolve().then(t.bind(t,2409))},9285:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var s=t(7437);function n(){return(0,s.jsx)("footer",{class:"p-4 bg-gray-800 md:p-8 lg:p-10 dark:bg-gray-800 z-100",children:(0,s.jsxs)("div",{class:"mx-auto max-w-screen-xl text-center z-100",children:[(0,s.jsx)("a",{href:"#",class:"flex justify-center items-center text-2xl font-semibold text-white dark:text-white",children:"Emerging Coders"}),(0,s.jsx)("ul",{class:"flex flex-wrap justify-center items-center mb-6 text-white dark:text-white",children:[{name:"Home",url:"/"},{name:"Upcoming Events",url:"/Events"},{name:"Board",url:"/ExecutiveBoard"},{name:"Contact Us",url:"/Contact"},{name:"FAQ",url:"/FAQ"},{name:"Resources",url:"/Additional-Resources"},{name:"Opportunities",url:"/Opportunities"},{name:"Sponsors",url:"/Sponsors"}].map((e,r)=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.url,class:"mr-4 hover:underline md:mr-6",children:e.name})},r))}),(0,s.jsxs)("div",{class:"flex flex-col justify-center mt-6 space-x-4 gap-2",children:[(0,s.jsxs)("span",{class:"text-sm text-white sm:text-center dark:text-gray-400",children:["\xa9 2023 ",(0,s.jsx)("a",{href:"#",class:"hover:underline",children:"Emerging Coders™"}),". All Rights Reserved."]}),(0,s.jsxs)("span",{class:"text-sm text-white sm:text-center dark:text-gray-400",children:["Built and Designed By: ",(0,s.jsx)("a",{href:"https://www.linkedin.com/in/ethanpineda/",target:"blank",class:"hover:underline",children:"Ethan Pineda"})]}),(0,s.jsxs)("span",{class:"text-sm text-white sm:text-center dark:text-gray-400",children:["This project is open source, contribute ",(0,s.jsx)("a",{href:"https://github.com/ethanpaneraa/Emerging-Coders-Website",target:"blank",class:"hover:underline",children:"here"})]})]})]})})}t(2265)},5780:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var s=t(7437),n=t(2265);function a(){let[e,r]=(0,n.useState)(!1),[t,a]=(0,n.useState)(!1),[l,o]=(0,n.useState)(!1),[i,d]=(0,n.useState)(!1),c=()=>{o(!l)},x=()=>{d(!i)};return(0,s.jsx)("nav",{className:"bg-white border-gray-200 dark:bg-gray-900",children:(0,s.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,s.jsxs)("a",{href:"/",className:"flex items-center",children:[(0,s.jsx)("img",{src:"https://se-images.campuslabs.com/clink/images/7fa49590-7782-41cb-942b-c4602cdf50c4e027cf3b-b17e-4e7c-82c9-4012c2c07b3c.png?preset=med-sq",className:"h-8 mr-3",alt:"Emerging Coders Logo"}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:"Emerging Coders"})})]}),(0,s.jsxs)("button",{type:"button",className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-default","aria-expanded":e,onClick:()=>{r(!e)},children:[(0,s.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,s.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:(0,s.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]}),(0,s.jsx)("div",{className:"".concat(e?"block":"hidden"," w-full md:block md:w-auto"),id:"navbar-default",children:(0,s.jsx)("ul",{className:"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[{name:"Home",url:"/"},{name:"Board",url:"/ExecutiveBoard"},{name:"Contact Us",url:"/Contact"},{name:"FAQ",url:"/FAQ"},{name:"Resources",url:"/Additional-Resources",dropdown:[{name:"Underclassmen",url:"/Additional-Resources/Underclassmen-Guide"},{name:"Technical Interviews",url:"/Additional-Resources/Technical-Interview"}]},{name:"Opportunities",url:"/Opportunities",dropdown:[{name:"SWE Internships",url:"/Opportunities/SWE-Opportunities"},{name:"Underclassmen",url:"/Opportunities/Underclassmen-Opportunities"}]},{name:"Sponsors",url:"/Sponsors"}].map((e,r)=>(0,s.jsx)("li",{children:"Resources"===e.name||"Opportunities"===e.name?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("button",{id:"dropdownNavbarLink".concat(r),"data-dropdown-toggle":"dropdownNavbar".concat(r),onClick:()=>{"Resources"===e.name?c():"Opportunities"===e.name&&x()},className:"flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent",children:[e.name,(0,s.jsx)("svg",{className:"w-2.5 h-2.5 ml-2.5 transform transition-transform ".concat("Resources"===e.name?l?"rotate-180":"":i?"rotate-180":""),"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:(0,s.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]}),(0,s.jsx)("div",{id:"dropdownNavbar".concat(r),className:"z-10 ".concat("Resources"===e.name?l?"block":"hidden":i?"block":"hidden"," absolute my-2 z-100 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"),children:(0,s.jsx)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-400","aria-labelledby":"dropdownLargeButton".concat(r),children:e.dropdown.map((e,r)=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.url,className:"block px-4 py-2 text-gray-700",children:e.name})},r))})})]}):(0,s.jsx)("a",{href:e.url,className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:e.name})},r))})})]})})}},2409:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var s=t(7437),n=t(2265),a=t(5576),l=t(5780),o=t(9285),i=t(3352),d=t(555),c=t(7623);function x(e){let{delay:r,children:t}=e,[a,l]=(0,n.useState)(!1),o=n.useRef();return(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&l(!0)})});return e.observe(o.current),()=>e.unobserve(o.current)},[]),(0,s.jsx)("div",{className:"pop-in-section ".concat(a?"is-show":""),style:{transitionDelay:"".concat(r)},ref:o,children:t})}function m(){return(0,s.jsx)("div",{class:"flex flex-col items-center justify-center px-4 text-center text-black gap-5",children:(0,s.jsxs)(x,{children:[(0,s.jsx)("h1",{class:"text-4xl font-bold md:text-5xl lg:text-6xl",children:"Emerging Coders"}),(0,s.jsx)("p",{class:"mt-2 text-lg md:text-xl lg:text-2xl",children:"Northwestern University's Community of First-Generation and Low-Income Technologist"}),(0,s.jsxs)("div",{class:"flex flex-row justify-center mt-6 space-x-4 gap-2",children:[(0,s.jsx)(c.A,{color:"secondary",onPress:()=>window.open("https://groupme.com/join_group/89417887/c1x6DI3U","_blank"),children:"Join"}),(0,s.jsx)(c.A,{color:"secondary",children:(0,s.jsx)("a",{href:"#About",name:"About",children:"About"})})]})]})})}function h(){let e=async e=>{console.log(e),await (0,d.R)(e)};return(0,s.jsxs)("div",{class:"relative h-screen",children:[(0,s.jsx)(i.Z,{id:"tsparticles",init:e,loaded:e=>{console.log(e)},options:{fpsLimit:120,interactivity:{modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#8a51fd"},links:{color:"#8a51fd",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},fullScreen:{enable:!1},detectRetina:!0}}),(0,s.jsx)("div",{class:"absolute inset-0 flex items-center justify-center",children:(0,s.jsx)(m,{})})]})}function u(){return(0,s.jsx)("div",{class:"max-w-xl",children:(0,s.jsxs)("div",{class:"grid gap-5",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{class:"h-auto max-w-full rounded-lg",src:"/Photo3.png",alt:""})}),(0,s.jsxs)("div",{class:"grid grid-cols-5 gap-4",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{class:"h-auto max-w-full rounded-lg",src:"/Photo8.png",alt:""})}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{class:"h-auto max-w-full rounded-lg",src:"/Photo5.png",alt:""})}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{class:"h-auto max-w-full rounded-lg",src:"/Photo1.png",alt:""})}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{class:"h-auto max-w-full rounded-lg",src:"/Photo4.png",alt:""})}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{class:"h-auto max-w-full rounded-lg",src:"/Photo6.png",alt:""})})]})]})})}function g(){return(0,s.jsx)("div",{class:"bg-gray-50 p-1",id:"#About",children:(0,s.jsx)(x,{children:(0,s.jsx)("div",{class:"container my-24 mx-auto md:px-6",children:(0,s.jsx)("div",{id:"#About",class:"mb-32 text-center",children:(0,s.jsxs)("div",{class:"space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-10 md:space-y-0 lg:gap-12 lg:items-center",children:[(0,s.jsx)(u,{}),(0,s.jsxs)("div",{class:"md:7/12 lg:w-1/2",children:[(0,s.jsx)("h2",{class:"text-3xl font-bold text-gray-900 md:text-4xl dark:text-black",children:"About Emerging Coders"}),(0,s.jsx)("p",{class:"my-8 text-gray-600 dark:text-gray-300 py-8 mx-auto max-w-screen-2xl text-center lg:px-6",children:"Emerging Coders is a community for FGLI (First-generation, Low-income) students who are interested in Tech. Our purpose is to enable students in the club improve their skills (e.g., coding projects, networking etc.), provide mentorship and resources throughout your college experience, and to create meaningful projects. "})]})]})})})})})}function p(){return(0,s.jsx)("div",{class:"py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6",children:(0,s.jsx)(x,{children:(0,s.jsxs)("section",{class:"mb-32 text-center",children:[(0,s.jsx)("h2",{class:"text-3xl font-bold text-gray-900 md:text-4xl dark:text-black my-11",children:"What We Do At Emerging Coders"}),(0,s.jsxs)("div",{class:"grid gap-x-6 md:grid-cols-3 lg:gap-x-12",children:[(0,s.jsxs)("div",{class:"mb-12 md:mb-0",children:[(0,s.jsx)("div",{class:"mb-6 inline-block rounded-md bg-secondary-200 p-4 text-primary",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"black",class:"h-6 w-6",children:(0,s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"})})}),(0,s.jsx)("h5",{class:"mb-4 text-lg font-bold",children:"Mentorship"}),(0,s.jsx)("p",{class:"text-neutral-500 dark:text-neutral-300",children:"We aim to provide mentorship and support opportunities for underrepresented groups within the Northwestern Computer Science community and beyond. We are welcoming of all majors and backgrounds, and we hope to provide a safe space for students to learn and grow together."})]}),(0,s.jsxs)("div",{class:"mb-12 md:mb-0",children:[(0,s.jsx)("div",{class:"mb-6 inline-block rounded-md bg-secondary-200 p-4 text-primary",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"black",class:"h-6 w-6",children:(0,s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"})})}),(0,s.jsx)("h5",{class:"mb-4 text-lg font-bold",children:"Technical Development"}),(0,s.jsx)("p",{class:"text-neutral-500 dark:text-neutral-200",children:"We strive to provide accessible and inclusive technical development opportunities for all of our members by hosting workshops, speaker events, and other events to help our members learn and grow as developers, engineers, designers, product managers, and more."})]}),(0,s.jsxs)("div",{class:"mb-12 md:mb-0",children:[(0,s.jsx)("div",{class:"mb-6 inline-block rounded-md bg-secondary-200 p-4 text-primary",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"black",class:"h-6 w-6",children:[" ",(0,s.jsxs)("g",{children:[" ",(0,s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19zm2-8h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2V7zm-4 0h2v2h-2V7z"})," "]})," "]})}),(0,s.jsx)("h5",{class:"mb-4 text-lg font-bold",children:"Establish Community"}),(0,s.jsx)("p",{class:"text-neutral-500 dark:text-neutral-200",children:"We want to provide a safe, welcoming, and inclusive community for all of our members. We hope that we can all lean on one another for support and guidance."})]})]})]})})})}function v(e){let{}=e;return(0,s.jsx)("div",{class:"grid grid-cols-2 md:grid-cols-3 gap-4",children:["/Apple.JPG","/EmergingLeetCoders.JPG","/IceCreamSocial.JPG","/ProfHeadshot.JPG","/ResumeWorkshop.JPG","/ScavengerHunt.JPG"].map((e,r)=>(0,s.jsx)("div",{children:(0,s.jsx)("img",{class:"h-auto max-w-full rounded-lg",src:e,alt:""})},r))})}function j(){return(0,s.jsx)("div",{class:"bg-gray-50 p-10",children:(0,s.jsx)(x,{children:(0,s.jsx)("div",{class:"container mx-auto",children:(0,s.jsx)("div",{id:"#PastEvents",class:"mb-32 text-center",children:(0,s.jsxs)("div",{class:"space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-10 md:space-y-0 lg:gap-12 lg:items-center",children:[(0,s.jsx)(v,{}),(0,s.jsxs)("div",{class:"md:7/12 lg:w:-1/2",children:[(0,s.jsx)("h2",{class:"text-3xl font-bold text-gray-900 md:text-4xl dark:text-black",children:"What We've Done"}),(0,s.jsxs)("p",{class:"my-8 text-gray-600 dark:gray-300",children:["We've hosted a variety of event types ranging from social events to professional development events. Our events are open to all Northwestern students and we encourage you to attend our events to learn more about Emerging Coders and the FGLI community at Northwestern. To learn what we have upcoming next, check out our ",(0,s.jsx)("a",{href:"/UpcomingEvents",class:"text-purple-700",children:"events page"}),"."]})]})]})})})})})}function b(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(h,{}),(0,s.jsx)(g,{}),(0,s.jsx)(p,{}),(0,s.jsx)(j,{})]})}function f(){return(0,s.jsx)("div",{children:(0,s.jsxs)(a.w,{children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)(b,{}),(0,s.jsx)(o.Z,{})]})})}function w(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.w,{children:(0,s.jsx)(f,{})})})}}},function(e){e.O(0,[576,399,415,623,375,971,596,744],function(){return e(e.s=572)}),_N_E=e.O()}]);