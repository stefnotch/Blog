import{r as M,d as G,w as q,a as y,c as g,b as e,e as O,v as C,F as S,k as D,u as z,t as $,f,l as L,g as N,h as E,i as I}from"./app.0ea0da1a.js";const p={Empty:0,Stone:1,Goal:2};function T(r){const{width:o,height:l}=r;if(o<3||l<3)throw new Error("Board must have at least 3x3 cells");const n=[];for(let d=0;d<l;d++){const w=[];for(let v=0;v<o;v++)d<=0||v<=0||d>=l-1||v>=o-1?w.push(p.Stone):w.push(p.Empty);n.push(w)}return{cells:n,width:o,height:l}}function R(r){return{width:r.width,height:r.height,cells:r.cells.map(o=>o.slice())}}function j(r,o){for(let l=0;l<r.cells.length;l++)for(let n=0;n<r.cells[l].length;n++)o.cells[l][n]=r.cells[l][n]}function U(){const r=M({x:0,y:0});function o(l){const{width:n,height:d}=l;r.value={x:n-2,y:d-1},l.cells[r.value.y][r.value.x]=p.Empty}return{position:r,placeOnBoard:o}}const W=f(" Playing field size "),K=f(" x "),X={key:0,style:{position:"absolute",transform:"translate(0%, -50%)","text-align":"center"}},Y=f(" Solution in an arcane language understood by computer-wizards: "),H=G({name:"SlidingPuzzle",setup(r){const o=M({width:10,height:10}),l=M(T(o.value)),n=U(),d=M([]);n.placeOnBoard(l.value),w(l.value),q(o,t=>{l.value=T(t),n.placeOnBoard(l.value),w(l.value)},{deep:!0});async function w(t){for(;!v(t);)await new Promise(s=>setTimeout(s,0))}function v(t){const{width:a,height:s}=t;let m=Math.floor(Math.random()*(a*s)/3);for(;m>0;){for(let c=0;c<2;c++){const i=R(t),u=Math.floor(Math.random()*(a-2))+1,b=Math.floor(Math.random()*(s-2))+1;i.cells[b][u]=p.Goal;for(let h=0;h<m;h++){const k=Math.floor(Math.random()*(a-2))+1,B=Math.floor(Math.random()*(s-2))+1;i.cells[B][k]===p.Empty?i.cells[B][k]=p.Stone:Math.random()>.5&&h--}const _=P(i);if(_!=null)return j(i,t),d.value=V(_),!0}m-=1}return console.log("Oh no, it failed. Retrying...?"),!1}function P(t){const a=new Set,s=u=>{a.add(`${u.x},${u.y}`)},m=u=>a.has(`${u.x},${u.y}`),c=[],i=[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}];for(s(n.position.value),i.forEach(u=>{c.push({position:n.position.value,direction:u,previous:null})});c.length>0;){const u=c.shift(),{position:b,direction:_}=u,h=x(b,_,t);if(t.cells[h.y][h.x]===p.Goal)return{position:h,direction:_,previous:u};m(h)||(s(h),i.forEach(k=>{c.push({position:h,direction:k,previous:u})}))}return null}function V(t){const a=[];let s=t;for(;s!=null;)a.push(s.position),s=s.previous;return a.reverse()}function x(t,a,s){const{width:m,height:c}=s;for(;;){const i={x:t.x+a.x,y:t.y+a.y};if(i.x<0||i.x>=m||i.y<0||i.y>=c||s.cells[i.y][i.x]===p.Stone)return t;t=i}}function A(t){return t===p.Empty?" ":t===p.Stone?"\u26F0":t===p.Goal?"\u{1F41F}":"?"}function F(t){t.code=="ArrowUp"?(console.log("up"),n.position.value=x(n.position.value,{x:0,y:-1},l.value),t.preventDefault()):t.code=="ArrowDown"?(console.log("down"),n.position.value=x(n.position.value,{x:0,y:1},l.value),t.preventDefault()):t.code=="ArrowLeft"?(console.log("left"),n.position.value=x(n.position.value,{x:-1,y:0},l.value),t.preventDefault()):t.code=="ArrowRight"&&(console.log("right"),n.position.value=x(n.position.value,{x:1,y:0},l.value),t.preventDefault())}return(t,a)=>(y(),g(S,null,[e("div",null,[W,O(e("input",{type:"number",min:"3",max:"999",size:3,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value.width=s)},null,512),[[C,o.value.width]]),K,O(e("input",{type:"number",min:"3",max:"999",size:3,"onUpdate:modelValue":a[1]||(a[1]=s=>o.value.height=s)},null,512),[[C,o.value.height]])]),e("table",{tabIndex:0,className:"game-table",onKeydown:a[2]||(a[2]=s=>F(s))},[e("tbody",null,[(y(!0),g(S,null,D(l.value.cells,(s,m)=>(y(),g("tr",null,[(y(!0),g(S,null,D(s,(c,i)=>(y(),g("td",null,[e("span",null,$(A(c)),1),i==z(n).position.value.x&&m==z(n).position.value.y?(y(),g("span",X,"\u{1F408}")):L("",!0)]))),256))]))),256))])],32),e("div",null,[e("button",{onClick:a[3]||(a[3]=s=>z(n).placeOnBoard(l.value))},"Back to square 1")]),Y,e("pre",null,$(d.value),1)],64))}}),J=e("p",null,[f("A cute little sliding puzzle game. Given a board with a "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"n")]),e("annotation",{encoding:"application/x-tex"},"n")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal"},"n")])])]),f(" x "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"m")]),e("annotation",{encoding:"application/x-tex"},"m")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal"},"m")])])]),f(" size, we solve it by starting at the player \u{1F408}. Then there are 4 possible directions (up, down, left, right). We try walking in those directions until we hit a rock. This gives us our potentially new solutions. So we add those to a queue and mark the field of the player as completed.")],-1),Q=e("p",null,"Then, unsurprisingly, we take a position out of the queue. We do this whole 'walk in 4 directions, check if visited and add to queue' again. And repeat.",-1),Z=e("p",null,[f("In the worst case, we visit every single tile once, before having marked everything as completed. So "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"n"),e("mo",null,"\u22C5"),e("mi",null,"m"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(n \\cdot m)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\u22C5"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"m"),e("span",{class:"mclose"},")")])])]),f(", which is nice and polynomial!")],-1),ee=e("p",null,"Verifying that this will always find a solution if one exists is left as an exercise for the reader. The author appreciates any and all proper proofs or decent explanations sent their way.",-1),te=e("p",null,"Click on the board to start playing.",-1),se='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"SlidingPuzzle/index.md"}',ne={},ae=Object.assign(ne,{name:"index",setup(r){return(o,l)=>{const n=N("ClientOnly");return y(),g("div",null,[J,Q,Z,ee,te,E(n,null,{default:I(()=>[E(H)]),_:1})])}}});export{se as __pageData,ae as default};
