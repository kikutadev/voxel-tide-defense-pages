import{A as pf,B as mf}from"./sound-H-GIUK7L.js";const pn=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,ka=s=>1-Math.pow(1-Math.max(0,Math.min(1,s)),3);class xf{items=[];get active(){return this.items.length>0}has(e){return this.items.some(t=>t.object===e)}discardWithin(e){this.items=this.items.filter(t=>{for(let n=t.object;n;n=n.parent)if(n===e)return!1;return!0})}reveal(e,t,n,i,r=!1){if(pn())return;const a={object:e,position:e.position.clone(),scale:e.scale.clone(),delay:t,duration:n,rise:i,grow:r,elapsed:0};this.items.push(a),this.apply(a,0)}apply(e,t){const n=ka(t);e.object.position.copy(e.position),e.object.position.y-=e.rise*(1-n),e.object.scale.copy(e.scale),e.grow&&e.object.scale.multiplyScalar(.05+.95*n),e.object.visible=e.elapsed>=e.delay}tick(e){for(const t of this.items)t.elapsed+=e,this.apply(t,Math.max(0,Math.min(1,(t.elapsed-t.delay)/t.duration)));this.items=this.items.filter(t=>t.elapsed<t.delay+t.duration)}finish(){for(const e of this.items)e.object.position.copy(e.position),e.object.scale.copy(e.scale),e.object.visible=!0;this.items=[]}}function qn(s,e="select"){if(pn()||!("animate"in s))return;s.getAnimations().filter(n=>n.id==="tide-pulse").forEach(n=>n.cancel());const t=s.animate([{transform:"scale(1)",filter:"brightness(1)"},{transform:e==="loss"?"scale(.94)":"scale(1.07)",filter:e==="loss"?"brightness(1.65) saturate(1.7)":"brightness(1.28)",offset:.28},{transform:"scale(1)",filter:"brightness(1)"}],{duration:e==="unlock"?500:260,easing:"ease-out"});t.id="tide-pulse"}function Hd(s){if(pn())return;s.getAnimations().filter(t=>t.id==="tide-scene").forEach(t=>t.cancel());const e=s.animate([{opacity:.18,filter:"brightness(.72)"},{opacity:1,filter:"brightness(1)"}],{duration:380,easing:"cubic-bezier(.2,.75,.3,1)"});e.id="tide-scene"}const Cn={bolt:{name:"連射砲",cost:70,range:3.45,damage:22,cooldown:.7,description:"遠くの敵を素早く狙う"},cannon:{name:"榴弾砲",cost:120,range:3.05,damage:48,cooldown:1.85,description:"着弾地点に範囲ダメージ"},frost:{name:"氷結塔",cost:90,range:3.05,damage:9,cooldown:1.15,description:"敵の移動速度を半分に"},mine:{name:"資源施設",cost:90,range:0,damage:0,cooldown:0,description:"資源のあるマスを開発する"}},Ur={bolt:[{name:"速射型",cost:100,detail:"発射間隔 0.35秒",damage:22,cooldown:.35,range:3.45,pierce:0,splash:0,income:0},{name:"狙撃型",cost:120,detail:"威力54・射程5・装甲貫通",damage:54,cooldown:1.15,range:5,pierce:20,splash:0,income:0}],cannon:[{name:"重砲型",cost:145,detail:"威力104・装甲貫通",damage:104,cooldown:2,range:3.3,pierce:16,splash:1.26,income:0},{name:"散弾型",cost:125,detail:"爆風半径2.2・高速装填",damage:46,cooldown:1.25,range:3.05,pierce:0,splash:2.2,income:0}],frost:[{name:"極寒型",cost:100,detail:"移動速度25%に低下",damage:9,cooldown:1.15,range:3.05,pierce:0,splash:0,income:0},{name:"吹雪型",cost:125,detail:"周囲1.8マスも減速",damage:9,cooldown:1.15,range:3.4,pierce:0,splash:1.8,income:0}],mine:[{name:"精錬所",cost:100,detail:"毎波の収入 +95G",damage:0,cooldown:0,range:0,pierce:0,splash:0,income:95},{name:"交易所",cost:60,detail:"毎波 +65G・即時 +20G",damage:0,cooldown:0,range:0,pierce:0,splash:0,income:65}]};function Fn(s){const e=Cn[s.type];return s.upgrade!==void 0?Ur[s.type][s.upgrade]:{...e,pierce:0,splash:s.type==="cannon"?1.26:0,income:s.type==="mine"?45:0}}const ah={raider:"突撃兵",runner:"偵察兵",armored:"盾兵",support:"衛生兵",boss:"破城機"},Z=(s,e)=>String(s)+","+String(e),Tr=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}],an=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),Wd=(s,e,t)=>Math.max(e,Math.min(t,s));function Ot(s){return s?.resource??(s?.biome==="ore"?"ore":void 0)}const rs={ore:"採掘所",wood:"製材所",harbor:"造船所",relic:"研究所"},Xd={ore:12294890,wood:7521674,harbor:8836077,relic:15450229};function po(s,e=2){switch(s){case"ore":return"採掘所 +"+(15+15*e)+"G";case"wood":return"製材所 建設−"+8*e+"%";case"harbor":return"造船所 遠征+"+(4+4*e)+"pt";case"relic":return"研究所 特殊強化解放";default:return"高台 射程+25%"}}function qd(s,e,t){let n=20,i=0,r=32,a=!1;for(const o of e){if(o.type!=="mine"||t?.has(o.id))continue;const c=s.get(Z(o.x,o.z)),l=Ot(c),h=c?.richness??2;l==="ore"&&(n+=Math.round(Fn(o).income*(15+15*h)/45)),l==="wood"&&(i+=h*8),l==="harbor"&&(r+=4+4*h),l==="relic"&&(a=!0)}return{income:n,discount:Math.min(24,i),budget:Math.min(64,r),research:a}}function Kd(s,e){let t=0;for(const n of s)n.bridge||t++;return Math.max(2,Math.floor(t/7))+e}function Yd(s){return 8+4*(s?.richness??2)}function Ar(s,e,t,n,i,r,a={x:0,z:0}){const o=(u,f)=>{const m=Z(u,f);return m!==n&&(s.has(m)||i?.has(m)===!0)&&(!e.has(m)||m===r)},c=Z(t.x,t.z);if(!o(t.x,t.z))return[];const l=[t];let h=0;const d=new Map([[c,null]]);for(;h<l.length;){const u=l[h++];if(u.x===a.x&&u.z===a.z){const f=[];let m=Z(a.x,a.z);for(;m!==null;){const[g,x]=m.split(",").map(Number);f.push({x:g,z:x}),m=d.get(m)??null}return f.reverse()}for(const f of Tr){const m=u.x+f.x,g=u.z+f.z,x=Z(m,g);!o(m,g)||d.has(x)||(d.set(x,Z(u.x,u.z)),l.push({x:m,z:g}))}}return[]}const oh=2;function Tn(s,e,t,n=0){let i=Math.imul(e+16391,374761393)^Math.imul(t+823,668265263)^Math.imul(s+n,1442695041);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function jd(s,e,t){const n=Wd(Math.round(2.1+.9*Math.sin(e*.31+s*.011)+.7*Math.cos(t*.39-s*.009)+(Tn(s,e,t,1)-.5)*1.1),1,4),i=Tn(s,e,t,2);return{x:e,z:t,h:n,biome:i<.11?"grove":i<.15?"ore":n>=4?"ridge":n===1&&i>.77?"sand":"grass"}}function gf(s){const e=new Map,t=[];for(let o=-2;o<=2;o++)for(let c=-2;c<=2;c++){if(Math.hypot(o,c)>2.22+(Tn(s,o,c,40)-.5)*.34)continue;const l=jd(s,o,c);l.biome==="ore"&&(l.biome="grass"),e.set(Z(o,c),{...l,islandId:1})}const n=e.get(Z(0,0));if(!n)throw Error("Core generation failed");n.h=3,n.biome="ridge";for(const o of[-1,1])for(const c of[-1,0,1]){const l=e.get(Z(o,c));l&&(l.h=Math.max(2,l.h))}const i=[...e.values()].filter(o=>o.x<=-2).sort((o,c)=>o.x-c.x||Math.abs(o.z)-Math.abs(c.z))[0],r=[...e.values()].filter(o=>o.x>=2).sort((o,c)=>c.x-o.x||Math.abs(o.z)-Math.abs(c.z))[0],a=Tn(s,0,0,81)<.5?i:r;return a&&t.push({id:1,x:a.x,z:a.z,createdWave:0}),{tiles:e,ports:t}}const Za=8,_f=["ore","wood","harbor","relic"];function vf(s,e,t){const n={x:e*Za,z:t*Za},i=Math.abs(e)>=Math.abs(t)?e>0?0:2:t>0?1:3,o=Math.abs(e)+Math.abs(t)>1&&Tn(s,e,t,900)<.18?void 0:_f[(i+Math.floor(Tn(s,0,0,800)*4))%4],c=1+Math.floor(Tn(s,e,t,901)*3),l=o==="ore"?"ore":o==="wood"?"grove":"ridge",h=[];for(let d=-3;d<=3;d++)for(let u=-3;u<=3;u++){const f=n.x+d,m=n.z+u;if(Math.hypot(d,u)>2.45+Tn(s,f,m,1001)*.55)continue;const g=jd(s,f,m);g.biome==="ore"&&(g.biome="grass"),o==="wood"&&Tn(s,f,m,330)>.3&&(g.biome="grove"),(!o||o==="relic")&&(g.h=Math.max(3,g.h),g.biome="ridge"),o==="harbor"&&(g.h=Math.min(2,g.h),Math.hypot(d,u)>1.7&&(g.biome="sand")),d===0&&u===0&&o&&(g.resource=o,g.richness=c,g.biome=o==="ore"?"ore":o==="wood"?"grove":o==="harbor"?"sand":"ridge"),h.push(g)}return{center:n,tiles:h,resource:o,richness:c,biome:l}}function ch(s,e,t,n,i,r=new Set){const a=new Map;for(const c of t.values()){if(c.bridge)continue;const l=Math.round(c.x/Za),h=Math.round(c.z/Za);for(const d of Tr){const u=l+d.x,f=h+d.z;(u||f)&&a.set(Z(u,f),{x:u,z:f})}}const o=[];for(const c of a.values()){const l=vf(s,c.x,c.z);if(l.tiles.some(I=>t.has(Z(I.x,I.z))||Tr.some(v=>t.has(Z(I.x+v.x,I.z+v.z)))))continue;const h=l.tiles.map(I=>({...I,islandId:i+1})),d=new Set(h.map(I=>Z(I.x,I.z))),u=h.map(I=>({p:I,path:[],source:I})),f=new Set(d);let m;for(let I=0;I<u.length&&!m;I++){const v=u[I];for(const b of Tr){const L={x:v.p.x+b.x,z:v.p.z+b.z},B=Z(L.x,L.z),z=t.get(B);if(z){if(!z.bridge&&v.path.length>0&&!r.has(B)&&Ar(t,r,z).length){m={anchor:z,path:v.path,source:v.source};break}continue}f.has(B)||v.path.length>=5||(f.add(B),u.push({p:L,path:[...v.path,L],source:v.source}))}}if(!m)continue;const{anchor:g,path:x,source:p}=m,y=[...h,...x.map(I=>({...I,h:1,biome:"sand",bridge:!0,islandId:i+1}))],S=h.filter(I=>!I.resource).sort((I,v)=>an(v,p)-an(I,p))[0],T=Ar(t,r,S,void 0,new Map(y.map(I=>[Z(I.x,I.z),I])));if(!T.length)continue;const R=n.find(I=>I.x===g.x&&I.z===g.z)?.id,E=["cache","repair","permit"][Math.floor(Tn(s,c.x,c.z,913)*3)],C=l.resource==="ore"?"鉱山島":l.resource==="wood"?"森林島":l.resource==="harbor"?"港湾島":l.resource==="relic"?"遺跡島":"高台島";o.push({id:0,candidateKey:[s,"site",c.x,c.z].join(":"),title:C,biome:l.biome,resource:l.resource,richness:l.richness,center:l.center,bonus:60+(E==="cache"?25:0),tiles:y,landing:{x:S.x,z:S.z},area:h.length,distance:T.length-1,replacePortId:R,route:T,reward:E})}return o.sort((c,l)=>an(c.center,{x:0,z:0})-an(l.center,{x:0,z:0})||c.center.x-l.center.x||c.center.z-l.center.z).map((c,l)=>({...c,id:l}))}const is=.05,oi={raider:1,runner:2,armored:3,support:3,boss:8},xn={raider:{hp:50,speed:1,armor:0,windup:.35,recover:.75,impact:1,name:"突撃兵",role:"数で押す連続攻撃"},runner:{hp:35,speed:1.65,armor:0,windup:.25,recover:.55,impact:1,name:"偵察兵",role:"森林を駆け抜け資源を狙う"},armored:{hp:150,speed:.65,armor:12,windup:.65,recover:1.15,impact:1,name:"盾兵",role:"装甲で砲撃を受ける前衛"},support:{hp:70,speed:.9,armor:0,windup:.8,recover:1.6,impact:1,name:"衛生兵",role:"負傷した味方を回復"},boss:{hp:240,speed:.5,armor:0,windup:2,recover:2,impact:1,name:"破城機",role:"砲台を6秒停止させる"}},Ja=4,bf={raider:{...xn.raider,hp:32,windup:.45,recover:1.15},runner:{...xn.runner,hp:27,windup:.3,recover:1.05},armored:{...xn.armored,hp:105,windup:.9,recover:2.7},support:{...xn.support,hp:55,windup:1,recover:3.2},boss:{...xn.boss,hp:205,armor:6,windup:2,recover:3}};function as(s,e){return e===4?bf[s]:xn[s]}function yf(s,e){if(s.fx=[],s.duration+=e,s.messageTime>0&&(s.messageTime=Math.max(0,s.messageTime-e)),s.phase!=="combat")return;s.waveTimer+=e,s.spawnTimer-=e;const t=Wd(1.02-s.wave*.043,.38,1.02);for(;!s.raid&&s.spawnTimer<=0&&s.waveSpawned<s.waveTotal;){const c=s.createEnemy(s.waveSpawned++);c&&s.enemies.push(c),s.spawnTimer+=t}const n=s.raid?.rulesVersion===4,i=(s.raid?.rulesVersion??0)>=3,r=!s.raid;for(const c of s.enemies){if(c.hp<=0)continue;if(i||r){if((c.launchDelay??0)>0){c.launchDelay=Math.max(0,c.launchDelay-e);continue}c.attackPulse=Math.max(0,(c.attackPulse??0)-e),c.healPulse=Math.max(0,(c.healPulse??0)-e)}c.hit=Math.max(0,c.hit-e),c.slow=Math.max(0,c.slow-e);let l=c.speed*(c.slow>0?c.slowFactor??.47:1)*e;for(;l>0&&c.segment<c.path.length-1;){const h=c.path[c.segment+1],d=c.path[c.segment],f=s.tiles.get(Z(d.x,d.z))?.biome==="grove"&&!((i||r)&&c.kind==="runner")?.7:1,m=Math.min(l*f,1-c.step);c.step+=m,l-=m/f,c.x=d.x+(h.x-d.x)*c.step,c.z=d.z+(h.z-d.z)*c.step,c.step>=.99999&&(c.segment++,c.step=0)}}for(const c of s.enemies)if(c.kind==="support"&&c.hp>0){if(i||r){if((c.launchDelay??0)>0)continue;if(c.healClock=(c.healClock??0)-e,c.healClock<=0){const l=s.enemies.filter(h=>h.kind!=="support"&&h.hp>0&&h.hp<h.maxHp&&(h.launchDelay??0)<=0&&an(h,c)<=1.5).sort((h,d)=>h.hp/h.maxHp-d.hp/d.maxHp||h.id-d.id).slice(0,2);if(l.length){c.healClock=1,c.healPulse=.45;for(const h of l)h.hp=Math.min(h.maxHp,h.hp+12),s.fx.push({kind:"heal",from:{x:c.x,z:c.z},to:{x:h.x,z:h.z},unit:c.kind})}}continue}for(const l of s.enemies)l!==c&&l.hp>0&&an(l,c)<=2&&(l.hp=Math.min(l.maxHp,l.hp+8*e))}for(const c of s.towers.values()){if(i&&(c.disabledFor=Math.max(0,(c.disabledFor??0)-e),c.disabledFor>0)||(c.deploy=Math.max(0,(c.deploy??0)-e),c.type==="mine")||(c.cooldown-=e,c.deploy>0)||c.cooldown>0)continue;const l=Fn(c),h=s.tiles.get(Z(c.x,c.z)),d=l.range*(h&&h.h>=3?1.25:1),f=s.enemies.filter(m=>m.hp>0&&(i||r?(m.launchDelay??0)<=0:m.segment<m.path.length-1)&&an(m,c)<=d).sort((m,g)=>m.path.length-m.segment-m.step-(g.path.length-g.segment-g.step))[0];if(f){if(c.cooldown=l.cooldown,c.rotation=Math.atan2(f.x-c.x,f.z-c.z),s.fx.push({kind:"shot",from:{x:c.x,z:c.z},to:{x:f.x,z:f.z},type:c.type}),c.type==="cannon")for(const m of s.enemies)m.hp>0&&(!i||(m.launchDelay??0)<=0)&&an(m,f)<=l.splash*(n?1.18:1)&&s.damage(m,l.damage*(m===f?1:n?.82:.65),c.type,n?Math.max(l.pierce,12):l.pierce,c.id);else if(s.damage(f,l.damage,c.type,n&&c.type==="frost"?Math.max(l.pierce,12):l.pierce,c.id),c.type==="frost"){for(const m of s.enemies)if((!i||(m.launchDelay??0)<=0)&&(m===f||l.splash>0&&an(m,f)<=l.splash)){const g=c.upgrade===0?.25:.47;m.slowFactor=m.slow>0?Math.min(m.slowFactor??.47,g):g,m.slow=2.15}}}}if(!s.raid)for(const c of s.towers.values()){if(c.type!=="mine"||s.plundered.has(c.id))continue;let l=0;for(const h of s.enemies)h.hp>0&&an(h,c)<=1.25&&(l+=e);l!==0&&(s.resourceDamage[c.id]=(s.resourceDamage[c.id]??0)+l,s.resourceDamage[c.id]>=3&&(s.plundered.add(c.id),s.fx.push({kind:"capture",at:{x:c.x,z:c.z}}),s.say("資源施設が襲撃されました。今波の生産停止")))}const a=[],o=new Map;for(const c of s.enemies){if(c.hp<=0){s.kills++,s.raid||(s.gold+=c.kind==="boss"?100:c.kind==="armored"?9:5),s.fx.push({kind:"kill",at:{x:c.x,z:c.z},type:c.kind,unitId:c.id});continue}if(i&&(c.launchDelay??0)>0){a.push(c);continue}if(c.segment>=c.path.length-1){if(i){const h=s.raid,d=as(c.kind,h.rulesVersion),u=c.resourceTarget===void 0?void 0:[...s.towers.values()].find(g=>g.id===c.resourceTarget);if(u&&(h.captured.includes(u.id)||u.type!=="mine"&&(u.disabledFor??0)>0)){s.redirectRaid(c)&&a.push(c);continue}const f=Z(c.x,c.z),m=o.get(f)??0;if(m>=3){c.attackPhase=void 0,c.attackClock=void 0,a.push(c);continue}if(o.set(f,m+1),c.attackPhase===void 0&&(c.attackPhase="windup",c.attackClock=d.windup),c.attackClock=(c.attackClock??0)-e*(n&&c.slow>0?c.slowFactor??.47:1),c.attackClock<=1e-8)if(c.attackPhase==="recover")c.attackPhase="windup",c.attackClock=d.windup;else{c.attackPhase="recover",c.attackClock=d.recover,c.attackPulse=.25;const g=u??{x:0,z:0};s.fx.push({kind:"strike",from:{x:c.x,z:c.z},to:{x:g.x,z:g.z},unit:c.kind}),u?.type==="mine"?(h.resourceDamage[u.id]=(h.resourceDamage[u.id]??0)+(c.kind==="runner"?2:1),h.resourceDamage[u.id]>=3&&(h.captured.push(u.id),s.fx.push({kind:"capture",at:g}))):u&&c.kind==="boss"?(u.disabledFor=6,s.fx.push({kind:"disable",from:c,to:g,unit:c.kind})):(s.hp=Math.max(0,s.hp-d.impact),s.fx.push({kind:"core",at:g}))}a.push(c);continue}if(r){if(c.attackPhase===void 0&&(c.attackPhase="windup",c.attackClock=xn[c.kind].windup),c.attackClock=(c.attackClock??0)-e*(c.slow>0?c.slowFactor??.47:1),c.attackClock>1e-8){a.push(c);continue}s.fx.push({kind:"strike",from:{x:c.x,z:c.z},to:{x:0,z:0},unit:c.kind,unitId:c.id})}const l=c.kind==="boss"?5:c.kind==="armored"?2:1;if(s.raid?.rulesVersion===2&&c.resourceTarget!==void 0){const h=c.resourceTarget,d=s.raid;d.captured.includes(h)||(d.resourceDamage[h]=(d.resourceDamage[h]??0)+l,d.resourceDamage[h]>=3&&(d.captured.push(h),s.fx.push({kind:"capture",at:{x:c.x,z:c.z}})));continue}s.hp-=l,s.fx.push({kind:"core",at:{x:0,z:0}});continue}a.push(c)}if(s.enemies=a,s.hp<=0){s.hp=0,s.phase="gameover",s.raid&&(s.raid.result="win"),s.say("灯台が陥落した");return}if(s.raid){s.raid.remaining=Math.max(0,s.raid.remaining-e),(s.raid.remaining===0||s.raid.budget===0&&s.enemies.length===0)&&(s.raid.result="loss",s.phase="gameover");return}s.waveSpawned>=s.waveTotal&&s.enemies.length===0&&s.completeWave()}const Mf=[{id:"frost",name:"氷結塔",cost:3,group:"defense",detail:"敵の移動速度を低下させる施設",icon:"frost"},{id:"heavy",name:"重砲型",cost:3,group:"defense",detail:"榴弾砲の装甲貫通を強化",icon:"cannon"},{id:"sniper",name:"狙撃型",cost:5,group:"defense",detail:"連射砲の長射程・装甲貫通強化（研究所が必要）",icon:"bolt"},{id:"scatter",name:"散弾型",cost:5,group:"defense",detail:"榴弾砲の広範囲攻撃（研究所が必要）",icon:"cannon",requires:"heavy"},{id:"extreme",name:"極寒型",cost:4,group:"defense",detail:"氷結塔の減速を強化",icon:"frost",requires:"frost"},{id:"blizzard",name:"吹雪型",cost:5,group:"defense",detail:"周囲の敵も減速（研究所が必要）",icon:"frost",requires:"frost"},{id:"trade",name:"交易所",cost:4,group:"economy",detail:"採掘所の強化先。即時資金と収入",icon:"ore"},{id:"supply1",name:"初期補給 I",cost:3,group:"economy",detail:"次の挑戦から開始資金 +40G",icon:"ore"},{id:"supply2",name:"初期補給 II",cost:6,group:"economy",detail:"開始資金をさらに +60G",icon:"ore",requires:"supply1"},{id:"repair",name:"修復技術",cost:5,group:"economy",detail:"5波ごとの防衛成功で灯台HP +2",icon:"relic"}],ss=Mf,fc=ss.map(s=>s.id),Sf=(s,e)=>({bolt:[void 0,"sniper"],cannon:["heavy","scatter"],frost:["extreme","blizzard"],mine:[void 0,"trade"]})[s][e],$d=s=>ss.find(e=>e.id===s).name,wf=s=>190+(s.includes("supply1")?40:0)+(s.includes("supply2")?60:0);function Zd(s){return s>0?1+Math.floor(s/2)+Math.floor(s/5):0}const Ut=(s,e=0,t=Number.MAX_SAFE_INTEGER)=>typeof s=="number"&&Number.isSafeInteger(s)&&s>=e&&s<=t,To=s=>s&&Ut(s.x,-1e5,1e5)&&Ut(s.z,-1e5,1e5),Ef=new Set(["grass","sand","ridge","grove","ore"]);function mo(s,e=!1){const t=s,n=()=>{throw Error("Invalid or unsupported base data")};(!t||t.schemaVersion!==1||!Ut(t.generatorVersion,1)||!Ut(t.seed,0,4294967295)||!Ut(t.wave,1,e?Number.MAX_SAFE_INTEGER:1e4)||!Ut(t.hp,1,18)||!Ut(t.gold)||!Ut(t.islandCount,1,e?Number.MAX_SAFE_INTEGER:1e3)||!Ut(t.expandedWave,0,t.wave)||!Ut(t.bonusSlots,0,t.islandCount)||!Ut(t.completedWaves,0,t.wave-1)||!Ut(t.kills)||!Ut(t.nextBuildingId,1)||t.expeditionWins!==void 0&&!Ut(t.expeditionWins,0,1e6)||t.expansionPermits!==void 0&&!Ut(t.expansionPermits,0,t.expeditionWins??0)||t.partialClaims!==void 0&&(!Array.isArray(t.partialClaims)||t.partialClaims.length>3||t.partialClaims.some(l=>typeof l!="string"||l.length>100))||!Array.isArray(t.tiles)||!e&&t.tiles.length>4e4||!Array.isArray(t.buildings)||!Array.isArray(t.ports)||!t.ports.length)&&n();const i=new Map,r=new Set,a=new Set,o=new Set,c=new Set;for(const l of t.tiles)(!To(l)||!Ut(l.h,1,4)||!Ef.has(l.biome)||!Ut(l.islandId,1,t.islandCount)||i.has(Z(l.x,l.z))||l.bridge!==void 0&&typeof l.bridge!="boolean")&&n(),l.resource!==void 0&&(!["ore","wood","harbor","relic"].includes(l.resource)||!Ut(l.richness,1,3)||l.bridge)&&n(),i.set(Z(l.x,l.z),l),l.bridge||o.add(l.islandId);(!i.has("0,0")||o.size!==t.islandCount)&&n();for(const l of t.buildings){(!To(l)||!Ut(l.id,1,t.nextBuildingId-1)||r.has(l.id)||!Object.hasOwn(Cn,l.type)||!Ut(l.paid,1)||l.upgrade!==void 0&&l.upgrade!==0&&l.upgrade!==1)&&n();const h=Z(l.x,l.z),d=i.get(h);(!d||d.bridge||h==="0,0"||a.has(h)||l.type==="mine"&&!Ot(d))&&n(),a.add(h),r.add(l.id)}t.buildings.length>t.tiles.length&&n();for(const l of t.ports){(!To(l)||!Ut(l.id,1)||c.has(l.id)||!Ut(l.createdWave,0,t.wave))&&n();const h=Z(l.x,l.z),d=i.get(h);(!d||d.bridge||h==="0,0"||a.has(h))&&n(),c.add(l.id),a.add(h)}}class Bt{seed;localTech=null;raidAttemptWave=0;get localRun(){return this.localTech!==null}get canAttemptRaid(){return!this.localRun||this.raidAttemptWave!==this.wave}configureLocal(e,t=!1){this.localTech=[...e],t&&(this.gold=wf(e))}buildLock(e){return this.localRun&&e==="frost"&&!this.localTech.includes("frost")?"技術開発で氷結塔を解放":null}upgradeCost(e,t){return Math.ceil(Ur[e.type][t].cost*(this.localRun&&this.economy.research?.85:1))}tiles=new Map;towers=new Map;ports=[];enemies=[];fx=[];expansions=[];paths=new Map;phase="prepare";wave=1;hp=18;gold=190;islandCount=1;expandedWave=0;bonusSlots=0;expeditionWins=0;expansionPermits=0;partialClaims=[];get buildLimit(){return Math.max(this.towers.size,Kd(this.tiles.values(),this.bonusSlots))}plundered=new Set;resourceDamage={};get economy(){return qd(this.tiles,this.towers.values(),this.plundered)}get income(){return this.economy.income}get expeditionBudget(){return this.economy.budget}get canExpand(){return!this.raid&&this.phase==="prepare"&&(this.expandedWave!==this.wave||this.expansionPermits>0)}kills=0;battleKills=0;battleStats=new Map;lossSites=new Map;waveStartGold=0;waveStartHp=18;lastDefense=null;placementPaths(e,t,n){return new Map(this.ports.map(i=>[i.id,this.findPath(i,Z(e,t),void 0,n)]))}completedWaves=0;lastReward=0;waveSpawned=0;waveTotal=0;waveTimer=0;spawnTimer=0;duration=0;speed=1;nextEnemyId=1;nextPortId=1;message="防衛施設を配置し、襲撃を開始しよう";messageTime=0;constructor(e,t,n=!1){if(this.seed=Math.floor(e)>>>0,t){if(mo(t,n),this.tiles=new Map(t.tiles.map(i=>[Z(i.x,i.z),{...i}])),this.towers=new Map(t.buildings.map(i=>[Z(i.x,i.z),{...i,cooldown:0,rotation:0,deploy:0}])),this.ports=t.ports.map(i=>({...i})),this.wave=t.wave,this.hp=t.hp,this.gold=t.gold,this.islandCount=t.islandCount,this.expandedWave=t.expandedWave,this.bonusSlots=t.bonusSlots,this.completedWaves=t.completedWaves,this.partialClaims=[...t.partialClaims??[]],this.expeditionWins=t.expeditionWins??0,this.expansionPermits=t.expansionPermits??0,this.kills=t.kills,this.nextPortId=Math.max(0,...this.ports.map(i=>i.id))+1,this.generationVersion=t.generatorVersion,this.nextBuildingId=t.nextBuildingId,this.updatePaths(),[...this.paths.values()].some(i=>i.length<2))throw Error("Invalid base routes")}else{const i=gf(this.seed);this.tiles=i.tiles,this.ports=i.ports,this.nextPortId=2,this.updatePaths()}}generationVersion=oh;nextBuildingId=1;static fromBase(e){return new Bt(e.seed,e)}toBase(){const e=[...this.towers.values()].map(({id:t,x:n,z:i,type:r,paid:a,upgrade:o})=>({id:t,x:n,z:i,type:r,paid:a,...o===void 0?{}:{upgrade:o}}));return{schemaVersion:1,generatorVersion:this.generationVersion,seed:this.seed,tiles:[...this.tiles.values()].map(t=>({...t})),buildings:e,ports:this.ports.map(t=>({...t})),wave:this.wave,hp:this.hp,gold:this.gold,islandCount:this.islandCount,expandedWave:this.expandedWave,bonusSlots:this.bonusSlots,completedWaves:this.completedWaves,kills:this.kills,nextBuildingId:this.nextBuildingId,expeditionWins:this.expeditionWins,expansionPermits:this.expansionPermits,partialClaims:[...this.partialClaims]}}random(e,t,n=0){return Tn(this.seed,e,t,n)}get activePorts(){return this.ports}passable(e,t,n){const i=Z(e,t);return i!==n&&this.tiles.has(i)&&!this.towers.has(i)}findPath(e,t,n,i){return Ar(this.tiles,this.towers,e,t,n,i)}get canEdit(){return!this.raid&&(this.phase==="prepare"||this.phase==="combat")}buildCost(e){const t=Cn[e].cost+[...this.towers.values()].filter(n=>n.type===e).length*(e==="mine"?15:20);return e==="mine"?t:Math.ceil(t*(100-this.economy.discount)/100)}moveCost(e){return this.phase==="combat"?Math.ceil(Cn[e.type].cost*.15):0}sellValue(e){return Math.floor(e.paid*.8)}remainingPath(e,t,n){const i=e.path[e.segment];if(!i)return[];if(e.step>0&&e.segment<e.path.length-1){const a=e.path[e.segment+1];if(Z(i.x,i.z)===t||Z(a.x,a.z)===t)return[];const o=this.findPath(a,t,void 0,n);return!this.raid&&o.length>1&&o.pop(),o.length?[i,...o]:[]}const r=this.findPath(i,t,void 0,n);return!this.raid&&r.length>1&&r.pop(),r}updatePaths(){this.paths.clear();for(const e of this.ports)this.paths.set(e.id,this.findPath(e));for(const e of this.enemies){const t=this.remainingPath(e);t.length&&(e.path=t,e.segment=0,t.length>1&&(delete e.attackPhase,delete e.attackClock))}}canPlace(e,t,n,i){const r=Z(t,n),a=this.tiles.get(r);if(!this.canEdit)return"今は施設を操作できません";if(!a)return"陸地を選んでください";if(a.bridge)return"陸橋には建設できません";if(t===0&&n===0)return"ここは灯台です";if(this.ports.some(o=>o.x===t&&o.z===n))return"ここは敵の上陸地点です";if(this.towers.has(r)&&r!==i)return"すでに施設があります";if(e==="mine"&&!Ot(a))return"資源があるマスを選んでください";if(e!=="mine"&&a.resource)return"資源マスは資源施設専用です";for(const o of this.enemies){if(o.hp<=0)continue;const c=o.path[o.segment],l=o.path[o.segment+1];if(c&&Z(c.x,c.z)===r||o.step>0&&l&&Z(l.x,l.z)===r)return"敵が通過中です";if(o.path.slice(o.segment).some(h=>Z(h.x,h.z)===r)&&!this.remainingPath(o,r,i).length)return"敵の退路を塞ぐため置けません"}for(const o of this.ports){const c=this.paths.get(o.id);if((!c?.length||c.some(l=>Z(l.x,l.z)===r))&&!this.findPath(o,r,void 0,i).length)return"敵の通り道を塞ぐため置けません"}return null}canBuild(e,t,n){const i=this.buildLock(e);return i||(this.towers.size>=this.buildLimit?"建設枠が満杯です。島を開拓してください":this.gold<this.buildCost(e)?"資金が足りません":this.canPlace(e,t,n))}build(e,t,n){const i=this.canBuild(e,t,n);if(i)return this.say(i),!1;const r=this.buildCost(e);return this.gold-=r,this.towers.set(Z(t,n),{id:this.nextBuildingId++,x:t,z:n,type:e,paid:r,cooldown:0,deploy:this.phase==="combat"?1:0,rotation:0}),this.updatePaths(),this.say((e==="mine"?rs[Ot(this.tiles.get(Z(t,n)))]:Cn[e].name)+"を建設"),!0}canMove(e,t,n){const i=this.towers.get(e);return i?Z(t,n)===e?"移動先を選んでください":i.type==="mine"&&Ot(this.tiles.get(e))!==Ot(this.tiles.get(Z(t,n)))?"同じ種類の資源へ移動してください":this.gold<this.moveCost(i)?"移動費用が足りません":this.canPlace(i.type,t,n,e):"施設がありません"}move(e,t,n){const i=this.canMove(e,t,n);if(i)return this.say(i),!1;const r=this.towers.get(e);return this.gold-=this.moveCost(r),this.towers.delete(e),r.x=t,r.z=n,r.deploy=this.phase==="combat"?Math.max(2.5,r.deploy??0):0,this.towers.set(Z(t,n),r),this.updatePaths(),this.say(Cn[r.type].name+"を移動"),!0}sell(e){const t=this.towers.get(e);if(!t||!this.canEdit)return!1;const n=this.sellValue(t);return this.gold+=n,this.towers.delete(e),this.updatePaths(),this.say("売却 +"+n+"G"),!0}upgradeError(e,t){if(e.type==="mine"&&Ot(this.tiles.get(Z(e.x,e.z)))!=="ore")return"この資源施設に強化はありません";const n=Sf(e.type,t);return this.localRun&&n&&!this.localTech.includes(n)?"技術開発で"+$d(n)+"を解放":(e.type!=="mine"||this.localRun)&&t===1&&!this.economy.research?"研究所を建てると解放されます":this.gold<this.upgradeCost(e,t)?"資金が足りません":null}upgrade(e,t){const n=this.towers.get(e);if(!n||!this.canEdit||n.upgrade!==void 0)return!1;const i=Ur[n.type][t],r=this.upgradeError(n,t);if(r)return this.say(r),!1;const a=this.upgradeCost(n,t);return this.gold-=a,n.paid+=a,n.upgrade=t,n.type==="mine"&&t===1&&(this.gold+=20),this.phase==="combat"&&(n.deploy=Math.max(1.5,n.deploy??0)),this.say(i.name+"に強化"),!0}say(e){this.message=e,this.messageTime=3.6}get enemyCount(){return this.localRun?Math.min(120,6+this.wave*3+Math.floor(this.wave*this.wave/6)+(this.wave%5===0?Math.min(6,Math.ceil(this.wave/15)):0)):6+this.wave*3+Math.floor(this.wave*this.wave/6)+(this.wave%5===0?1:0)}enemyKind(e){return this.wave%5===0&&e>=this.enemyCount-(this.localRun?Math.min(6,Math.ceil(this.wave/15)):1)?"boss":this.wave>=4&&e%9===7?"support":this.wave>=3&&(this.wave%3===0?e%3===1:e%6===4)?"armored":(this.wave%3===2?e%2===1:e%4===2)?"runner":"raider"}get forecast(){const e={raider:0,runner:0,armored:0,support:0,boss:0};for(let t=0;t<this.enemyCount;t++)e[this.enemyKind(t)]++;return e}startWave(){if(this.raid||this.phase!=="prepare")return!1;this.phase="combat",this.plundered.clear(),this.resourceDamage={};for(const e of this.towers.values())e.cooldown=0,e.deploy=0,e.rotation=0;return this.battleKills=0,this.battleStats.clear(),this.lossSites.clear(),this.waveStartGold=this.gold,this.waveStartHp=this.hp,this.waveTimer=0,this.spawnTimer=.3,this.waveSpawned=0,this.waveTotal=this.enemyCount,this.say("第"+this.wave+"波、接近中！"),!0}createEnemy(e,t,n){const i=this.activePorts;if(!i.length)return null;const r=n===void 0?i[(e+this.wave)%i.length]:i.find(g=>g.id===n);if(!r)return null;const a=this.paths.get(r.id)??[];if(a.length<2)return null;const o=t??this.enemyKind(e),c=o==="boss",l=o==="support"?55+this.wave*10:c?460+this.wave*60:o==="armored"?76+this.wave*18+this.wave*this.wave*1.1:o==="runner"?26+this.wave*6+this.wave*this.wave*.9:35+this.wave*8+this.wave*this.wave*1.1,h=(c?.48:o==="armored"?.55:o==="runner"?1.42:.85)*(1+(this.localRun?Math.min(1,Math.max(0,this.wave-4)*.045):Math.max(0,this.wave-4)*.045)),d=(this.raid?.rulesVersion??0)>=3,u=as(o,this.raid?.rulesVersion),f=this.localRun?this.wave<=4?.65:this.wave<=5?.76:this.wave<=10?.76+(this.wave-5)*.108:1.3:1,m=d?u.hp:this.localRun?Math.round(l*f):l;return{id:this.nextEnemyId++,kind:o,hp:m,maxHp:m,speed:d?u.speed:h,path:this.raid?a:a.slice(0,-1),segment:0,step:0,x:a[0].x,z:a[0].z,slow:0,hit:0}}raid=null;static raidFrom(e,t={}){const n=Bt.fromBase(e),i=t.budget??Math.max(24,18+n.towers.size*5);return n.raid={rulesVersion:t.rulesVersion??2,captured:[],resourceDamage:{},budget:i,initialBudget:i,step:0,commands:[],remaining:Math.max(75,Math.max(...[...n.paths.values()].map(r=>r.length))*2.5+25),result:null},n.phase=t.scout?"prepare":"combat",n.hp=18,n}startRaid(){return!this.raid||this.phase!=="prepare"?!1:(this.phase="combat",!0)}resourceRoute(e,t){const n=this.ports.find(r=>r.id===e),i=[...this.towers.values()].find(r=>r.id===t&&(r.type==="mine"||(this.raid?.rulesVersion??0)>=3));return!n||!i?[]:(this.raid?.rulesVersion??0)>=3?this.attackRoute(n,i):Ar(this.tiles,this.towers,n,void 0,void 0,Z(i.x,i.z),i)}attackRoutes(e,t){return Tr.map(n=>Ar(this.tiles,this.towers,e,void 0,void 0,void 0,{x:t.x+n.x,z:t.z+n.z})).filter(n=>n.length).sort((n,i)=>n.length-i.length)}attackRoute(e,t){return this.attackRoutes(e,t)[0]??[]}chooseAttackRoute(e,t,n){const i=this.attackRoutes(e,t);if(!i.length)return[];const r=i[0].length,a=new Map;for(const c of this.enemies)if(c.hp>0&&c.resourceTarget===n){const l=c.path.at(-1);if(l){const h=Z(l.x,l.z);a.set(h,(a.get(h)??0)+1)}}const o=c=>{const l=c.at(-1);return c.length+(a.get(Z(l.x,l.z))??0)*1.5};return i.filter(c=>c.length<=r+3).sort((c,l)=>o(c)-o(l))[0]}raidRouteCache=new Map;raidRoute(e,t){const n=e+":"+(t??"core"),i=this.raidRouteCache.get(n);if(i)return i;const r=this.ports.find(o=>o.id===e),a=t!==void 0?this.resourceRoute(e,t):(this.raid?.rulesVersion??0)>=3&&r?this.attackRoute(r,{x:0,z:0}):this.paths.get(e)??[];return this.raidRouteCache.set(n,a),a}redirectRaid(e){const t=this.chooseAttackRoute({x:Math.round(e.x),z:Math.round(e.z)},{x:0,z:0});return t.length?(e.path=t,e.segment=0,e.step=0,delete e.resourceTarget,delete e.attackPhase,delete e.attackClock,!0):!1}deployRaid(e,t,n){if(!this.raid||this.phase!=="combat"||!Object.hasOwn(oi,e)||this.raid.budget<oi[e])return!1;const i=this.createEnemy(this.waveSpawned,e,t);if(!i)return!1;if(n!==void 0){const r=[...this.towers.values()].find(o=>o.id===n);if(this.raid.rulesVersion===1||!Number.isSafeInteger(n)||this.raid.captured.includes(n)||!r||r.type!=="mine"&&(this.raid.rulesVersion<3||e!=="boss"||(r.disabledFor??0)>0))return!1;const a=this.resourceRoute(t,n);if(a.length<(this.raid.rulesVersion>=3?1:2))return!1;i.path=a,i.resourceTarget=n}if(this.raid.rulesVersion>=3){const r=n===void 0?{x:0,z:0}:[...this.towers.values()].find(l=>l.id===n),a=this.chooseAttackRoute(i.path[0],r,n);if(!a.length)return!1;i.path=a;const o=this.raid.launchAt??(this.raid.launchAt={}),c=Math.max(this.raid.step,o[t]??0);i.launchDelay=(c-this.raid.step)*.05,o[t]=c+4}return this.raid.commands.push({step:this.raid.step,kind:e,portId:t,...n===void 0?{}:{resourceTarget:n}}),this.raid.budget-=oi[e],this.enemies.push(i),this.waveSpawned++,!0}endRaid(){!this.raid||this.phase!=="combat"||(this.raid.result="loss",this.phase="gameover")}tick(e){this.raid&&this.phase==="combat"&&this.raid.step++,yf(this,e);for(const t of this.fx)if(t.kind==="kill"&&(this.battleKills++,this.raid)){const n=Z(Math.round(t.at.x),Math.round(t.at.z));this.lossSites.set(n,(this.lossSites.get(n)??0)+1)}}damage(e,t,n,i=0,r){const a=(this.raid?.rulesVersion??0)>=3?as(e.kind,this.raid?.rulesVersion).armor:e.kind==="armored"?Math.min(19,10+this.wave):e.kind==="boss"?8:0;if(t=Math.max(1,t-Math.max(0,a-i)),r!==void 0){const o=this.battleStats.get(r)??{damage:0,kills:0};o.damage+=Math.min(e.hp,t),e.hp>0&&e.hp<=t&&o.kills++,this.battleStats.set(r,o)}e.hp-=t,e.hit=.19,this.fx.push({kind:"hit",at:{x:e.x,z:e.z},value:t,type:n})}completeWave(){this.completedWaves++,this.lastReward=this.income+(this.wave%5===0?120:0),this.gold+=this.lastReward,this.localRun&&(this.wave%5===0&&this.localTech.includes("repair")&&(this.hp=Math.min(18,this.hp+2)),this.expansionPermits=0),this.lastDefense={kills:this.battleKills+this.fx.filter(e=>e.kind==="kill").length,total:this.waveTotal,hpBefore:this.waveStartHp,hpAfter:this.hp,goldDelta:this.gold-this.waveStartGold,stats:[...this.battleStats].map(([e,t])=>[e,{...t}])},this.plundered.clear(),this.resourceDamage={},this.wave++,this.phase="prepare";for(const e of this.towers.values())e.deploy=0;this.expansions=[],this.say("防衛成功！　次の島を追加できます")}openExpansion(){return this.canExpand?(this.expansions=this.generateExpansions(),this.expansions.length?(this.phase="expansion",!0):(this.say("接続できる島が見つかりません"),!1)):!1}closeExpansion(){this.phase==="expansion"&&(this.phase="prepare",this.expansions=[])}generateExpansions(){const e=ch(this.seed,this.islandCount,this.tiles,this.ports,this.islandCount),t=this.towers.size?new Map(ch(this.seed,this.islandCount,this.tiles,this.ports,this.islandCount,this.towers).map(n=>[n.candidateKey,n])):new Map(e.map(n=>[n.candidateKey,n]));return e.map(n=>{const i={...t.get(n.candidateKey)??n,id:n.id,blocked:!t.has(n.candidateKey)};return this.localRun&&i.center&&Math.abs(i.center.x)+Math.abs(i.center.z)===8&&i.resource&&(i.richness=2,i.tiles=i.tiles.map(r=>r.resource?{...r,richness:2}:r)),i})}chooseExpansion(e){if(this.phase!=="expansion"||this.expandedWave===this.wave&&this.expansionPermits===0)return!1;const t=this.expansions.find(i=>i.id===e);if(!t||t.blocked)return this.say("接続先への道が塞がれています"),!1;for(const i of t.tiles)this.tiles.set(Z(i.x,i.z),i);const n=this.ports.find(i=>i.id===t.replacePortId);return n?(n.x=t.landing.x,n.z=t.landing.z,n.createdWave=this.wave):this.ports.push({id:this.nextPortId++,x:t.landing.x,z:t.landing.z,createdWave:this.wave}),this.gold+=t.bonus,t.reward==="repair"&&(this.hp=Math.min(18,this.hp+3)),t.reward==="permit"&&this.bonusSlots++,this.islandCount++,this.generationVersion=oh,this.expandedWave===this.wave&&this.expansionPermits--,this.expandedWave=this.wave,this.expansions=[],this.phase="prepare",this.updatePaths(),this.fx.push({kind:"land",at:t.landing}),this.say(t.title+"を開拓！ "+(t.reward==="repair"?"灯台HP回復":t.reward==="permit"?"追加建設枠+1":"資材を発見")),!0}getBestWave(){return this.completedWaves}}const Ml="181",Tf=0,lh=1,Af=2,Jd=1,Qd=2,yi=3,Ai=0,_n=1,An=2,Ei=0,Bs=1,hh=2,dh=3,uh=4,Rf=5,Qi=100,Cf=101,If=102,Pf=103,Lf=104,Df=200,Nf=201,Uf=202,Ff=203,pc=204,mc=205,Of=206,Bf=207,kf=208,zf=209,Vf=210,Gf=211,Hf=212,Wf=213,Xf=214,xc=0,gc=1,_c=2,Gs=3,vc=4,bc=5,yc=6,Mc=7,eu=0,qf=1,Kf=2,Vi=0,Yf=1,jf=2,$f=3,Sc=4,Zf=5,Jf=6,Qf=7,fh="attached",ep="detached",tu=300,Hs=301,Ws=302,wc=303,Ec=304,xo=306,Xs=1e3,ri=1001,Qa=1002,cn=1003,nu=1004,yr=1005,on=1006,za=1007,Si=1008,ci=1009,iu=1010,su=1011,Fr=1012,Sl=1013,os=1014,jn=1015,nr=1016,wl=1017,El=1018,Or=1020,ru=35902,au=35899,ou=1021,cu=1022,On=1023,Br=1026,kr=1027,Tl=1028,Al=1029,Rl=1030,Cl=1031,Il=1033,Va=33776,Ga=33777,Ha=33778,Wa=33779,Tc=35840,Ac=35841,Rc=35842,Cc=35843,Ic=36196,Pc=37492,Lc=37496,Dc=37808,Nc=37809,Uc=37810,Fc=37811,Oc=37812,Bc=37813,kc=37814,zc=37815,Vc=37816,Gc=37817,Hc=37818,Wc=37819,Xc=37820,qc=37821,Kc=36492,Yc=36494,jc=36495,$c=36283,Zc=36284,Jc=36285,Qc=36286,lu=2200,hu=2201,tp=2202,zr=2300,Vr=2301,Ao=2302,Ns=2400,Us=2401,eo=2402,Pl=2500,np=2501,ip=0,du=1,el=2,sp=3200,rp=3201,uu=0,ap=1,Bi="",zt="srgb",dn="srgb-linear",to="linear",pt="srgb",_s=7680,ph=519,op=512,cp=513,lp=514,fu=515,hp=516,dp=517,up=518,fp=519,tl=35044,pp=35048,mh="300 es",ai=2e3,no=2001;function pu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mp(){const s=Gr("canvas");return s.style.display="block",s}const xh={};function io(...s){const e="THREE."+s.shift();console.log(e,...s)}function Me(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Xe(...s){const e="THREE."+s.shift();console.error(e,...s)}function Hr(...s){const e=s.join(" ");e in xh||(xh[e]=!0,Me(...s))}function xp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const Rr=Math.PI/180,qs=180/Math.PI;function $n(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[s&255]+Jt[s>>8&255]+Jt[s>>16&255]+Jt[s>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function Ll(s,e){return(s%e+e)%e}function gp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function _p(s,e,t){return s!==e?(t-s)/(e-s):0}function Cr(s,e,t){return(1-t)*s+t*e}function vp(s,e,t,n){return Cr(s,e,1-Math.exp(-t*n))}function bp(s,e=1){return e-Math.abs(Ll(s,e*2)-e)}function yp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Mp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Sp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wp(s,e){return s+Math.random()*(e-s)}function Ep(s){return s*(.5-Math.random())}function Tp(s){s!==void 0&&(gh=s);let e=gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ap(s){return s*Rr}function Rp(s){return s*qs}function Cp(s){return(s&s-1)===0&&s!==0}function Ip(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*f,o*h,o*l);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mr={DEG2RAD:Rr,RAD2DEG:qs,generateUUID:$n,clamp:Ye,euclideanModulo:Ll,mapLinear:gp,inverseLerp:_p,lerp:Cr,damp:vp,pingpong:bp,smoothstep:yp,smootherstep:Mp,randInt:Sp,randFloat:wp,randFloatSpread:Ep,seededRandom:Tp,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Pp,setQuaternionFromProperEuler:Lp,normalize:ht,denormalize:Kn};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],m=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=u,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(d!==g||c!==u||l!==f||h!==m){let x=c*u+l*f+h*m+d*g;x<0&&(u=-u,f=-f,m=-m,g=-g,x=-x);let p=1-o;if(x<.9995){const y=Math.acos(x),S=Math.sin(y);p=Math.sin(p*y)/S,o=Math.sin(o*y)/S,c=c*p+u*o,l=l*p+f*o,h=h*p+m*o,d=d*p+g*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+m*o,d=d*p+g*o;const y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*d+c*f-l*u,e[t+1]=c*m+h*u+l*d-o*f,e[t+2]=l*m+h*f+o*u-c*d,e[t+3]=h*m-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new U,_h=new zn;class Ge{constructor(e,t,n,i,r,a,o,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],g=i[0],x=i[3],p=i[6],y=i[1],S=i[4],T=i[7],R=i[2],E=i[5],C=i[8];return r[0]=a*g+o*y+c*R,r[3]=a*x+o*S+c*E,r[6]=a*p+o*T+c*C,r[1]=l*g+h*y+d*R,r[4]=l*x+h*S+d*E,r[7]=l*p+h*T+d*C,r[2]=u*g+f*y+m*R,r[5]=u*x+f*S+m*E,r[8]=u*p+f*T+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,m=t*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=d*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Ge,vh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dp(){const s={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?to:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[dn]:{primaries:e,whitePoint:n,transfer:to,toXYZ:vh,fromXYZ:bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:vh,fromXYZ:bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),s}const it=Dp();function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class Np{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Gr("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Up=0;class Dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Io(i[a].image)):r.push(Io(i[a]))}else r=Io(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Io(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Np.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let Fp=0;const Po=new U;class Kt extends ps{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=ri,i=ri,r=on,a=Si,o=On,c=ci,l=Kt.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=$n(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Po).x}get height(){return this.source.getSize(Po).y}get depth(){return this.source.getSize(Po).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=tu;Kt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],g=c[2],x=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(m+x)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,T=(f+1)/2,R=(p+1)/2,E=(h+u)/4,C=(d+g)/4,I=(m+x)/4;return S>T&&S>R?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=C/n):T>R?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=E/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=I/r),this.set(n,i,r,t),this}let y=Math.sqrt((x-m)*(x-m)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(x-m)/y,this.y=(d-g)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Op extends ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Kt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Dl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends Op{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mu extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bp extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),oa.subVectors(this.max,hr),bs.subVectors(e.a,hr),ys.subVectors(e.b,hr),Ms.subVectors(e.c,hr),Ii.subVectors(ys,bs),Pi.subVectors(Ms,ys),Xi.subVectors(bs,Ms);let t=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-Xi.z,Xi.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,Xi.z,0,-Xi.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-Xi.y,Xi.x,0];return!Lo(t,bs,ys,Ms,oa)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,bs,ys,Ms,oa))?!1:(ca.crossVectors(Ii,Pi),t=[ca.x,ca.y,ca.z],Lo(t,bs,ys,Ms,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new U,new U,new U,new U,new U,new U,new U,new U],Hn=new U,aa=new Ci,bs=new U,ys=new U,Ms=new U,Ii=new U,Pi=new U,Xi=new U,hr=new U,oa=new U,ca=new U,qi=new U;function Lo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){qi.fromArray(s,r);const o=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),c=e.dot(qi),l=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const kp=new Ci,dr=new U,Do=new U;class hi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(Do)),this.expandByPoint(dr.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pi=new U,No=new U,la=new U,Li=new U,Uo=new U,ha=new U,Fo=new U;class Jr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){No.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(No);const r=e.distanceTo(t)*.5,a=-this.direction.dot(la),o=Li.dot(this.direction),c=-Li.dot(la),l=Li.lengthSq(),h=Math.abs(1-a*a);let d,u,f,m;if(h>0)if(d=a*c-o,u=a*o-c,m=r*h,d>=0)if(u>=-m)if(u<=m){const g=1/h;d*=g,u*=g,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(No).addScaledVector(la,u),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,r){Uo.subVectors(t,e),ha.subVectors(n,e),Fo.crossVectors(Uo,ha);let a=this.direction.dot(Fo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const c=o*this.direction.dot(ha.crossVectors(Li,ha));if(c<0)return null;const l=o*this.direction.dot(Uo.cross(Li));if(l<0||c+l>a)return null;const h=-o*Li.dot(Fo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,r,a,o,c,l,h,d,u,f,m,g,x){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,u,f,m,g,x)}set(e,t,n,i,r,a,o,c,l,h,d,u,f,m,g,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,m=o*h,g=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=u-g*l,t[9]=-o*c,t[2]=g-u*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,m=l*h,g=l*d;t[0]=u+g*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=g+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,m=l*h,g=l*d;t[0]=u-g*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*d,m=o*h,g=o*d;t[0]=c*h,t[4]=m*l-f,t[8]=u*l+g,t[1]=c*d,t[5]=g*l+u,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=g-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+m,t[10]=u-g*d}else if(e.order==="XZY"){const u=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+g,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Vp)}lookAt(e,t,n){const i=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Di.crossVectors(n,Sn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Di.crossVectors(n,Sn)),Di.normalize(),da.crossVectors(Sn,Di),i[0]=Di.x,i[4]=da.x,i[8]=Sn.x,i[1]=Di.y,i[5]=da.y,i[9]=Sn.y,i[2]=Di.z,i[6]=da.z,i[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],g=n[6],x=n[10],p=n[14],y=n[3],S=n[7],T=n[11],R=n[15],E=i[0],C=i[4],I=i[8],v=i[12],b=i[1],L=i[5],B=i[9],z=i[13],W=i[2],Y=i[6],q=i[10],re=i[14],X=i[3],se=i[7],le=i[11],Te=i[15];return r[0]=a*E+o*b+c*W+l*X,r[4]=a*C+o*L+c*Y+l*se,r[8]=a*I+o*B+c*q+l*le,r[12]=a*v+o*z+c*re+l*Te,r[1]=h*E+d*b+u*W+f*X,r[5]=h*C+d*L+u*Y+f*se,r[9]=h*I+d*B+u*q+f*le,r[13]=h*v+d*z+u*re+f*Te,r[2]=m*E+g*b+x*W+p*X,r[6]=m*C+g*L+x*Y+p*se,r[10]=m*I+g*B+x*q+p*le,r[14]=m*v+g*z+x*re+p*Te,r[3]=y*E+S*b+T*W+R*X,r[7]=y*C+S*L+T*Y+R*se,r[11]=y*I+S*B+T*q+R*le,r[15]=y*v+S*z+T*re+R*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],g=e[7],x=e[11],p=e[15];return m*(+r*c*d-i*l*d-r*o*u+n*l*u+i*o*f-n*c*f)+g*(+t*c*f-t*l*u+r*a*u-i*a*f+i*l*h-r*c*h)+x*(+t*l*d-t*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*d+t*o*u+i*a*d-n*a*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],g=e[13],x=e[14],p=e[15],y=d*x*l-g*u*l+g*c*f-o*x*f-d*c*p+o*u*p,S=m*u*l-h*x*l-m*c*f+a*x*f+h*c*p-a*u*p,T=h*g*l-m*d*l+m*o*f-a*g*f-h*o*p+a*d*p,R=m*d*c-h*g*c-m*o*u+a*g*u+h*o*x-a*d*x,E=t*y+n*S+i*T+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=y*C,e[1]=(g*u*r-d*x*r-g*i*f+n*x*f+d*i*p-n*u*p)*C,e[2]=(o*x*r-g*c*r+g*i*l-n*x*l-o*i*p+n*c*p)*C,e[3]=(d*c*r-o*u*r-d*i*l+n*u*l+o*i*f-n*c*f)*C,e[4]=S*C,e[5]=(h*x*r-m*u*r+m*i*f-t*x*f-h*i*p+t*u*p)*C,e[6]=(m*c*r-a*x*r-m*i*l+t*x*l+a*i*p-t*c*p)*C,e[7]=(a*u*r-h*c*r+h*i*l-t*u*l-a*i*f+t*c*f)*C,e[8]=T*C,e[9]=(m*d*r-h*g*r-m*n*f+t*g*f+h*n*p-t*d*p)*C,e[10]=(a*g*r-m*o*r+m*n*l-t*g*l-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*f-t*o*f)*C,e[12]=R*C,e[13]=(h*g*i-m*d*i+m*n*u-t*g*u-h*n*x+t*d*x)*C,e[14]=(m*o*i-a*g*i-m*n*c+t*g*c+a*n*x-t*o*x)*C,e[15]=(a*d*i-h*o*i+h*n*c-t*d*c-a*n*u+t*o*u)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,m=r*d,g=a*h,x=a*d,p=o*d,y=c*l,S=c*h,T=c*d,R=n.x,E=n.y,C=n.z;return i[0]=(1-(g+p))*R,i[1]=(f+T)*R,i[2]=(m-S)*R,i[3]=0,i[4]=(f-T)*E,i[5]=(1-(u+p))*E,i[6]=(x+y)*E,i[7]=0,i[8]=(m+S)*C,i[9]=(x-y)*C,i[10]=(1-(u+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ss.set(i[0],i[1],i[2]).length();const a=Ss.set(i[4],i[5],i[6]).length(),o=Ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Wn.copy(this);const l=1/r,h=1/a,d=1/o;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ai,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(c)m=r/(a-r),g=a*r/(a-r);else if(o===ai)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===no)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ai,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,g;if(c)m=1/(a-r),g=a/(a-r);else if(o===ai)m=-2/(a-r),g=-(a+r)/(a-r);else if(o===no)m=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ss=new U,Wn=new Ve,zp=new U(0,0,0),Vp=new U(1,1,1),Di=new U,da=new U,Sn=new U,yh=new Ve,Mh=new zn;class li{constructor(e=0,t=0,n=0,i=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gp=0;const Sh=new U,ws=new zn,mi=new Ve,ua=new U,ur=new U,Hp=new U,Wp=new zn,wh=new U(1,0,0),Eh=new U(0,1,0),Th=new U(0,0,1),Ah={type:"added"},Xp={type:"removed"},Es={type:"childadded",child:null},Oo={type:"childremoved",child:null};class Et extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new U,t=new li,n=new zn,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ge}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ua.copy(e):ua.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ur,ua,this.up):mi.lookAt(ua,ur,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(mi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ah),Es.child=e,this.dispatchEvent(Es),Es.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xp),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ah),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Et.DEFAULT_UP=new U(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new U,xi=new U,Bo=new U,gi=new U,Ts=new U,As=new U,Rh=new U,ko=new U,zo=new U,Vo=new U,Go=new at,Ho=new at,Wo=new at;class Yn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xn.subVectors(i,t),xi.subVectors(n,t),Bo.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(xi),c=Xn.dot(Bo),l=xi.dot(xi),h=xi.dot(Bo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,m=(a*h-o*c)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(a,gi.y),c.addScaledVector(o,gi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Go.setScalar(0),Ho.setScalar(0),Wo.setScalar(0),Go.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,n),Wo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Ho,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),xi.subVectors(e,t),Xn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Xn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ts.subVectors(i,n),As.subVectors(r,n),ko.subVectors(e,n);const c=Ts.dot(ko),l=As.dot(ko);if(c<=0&&l<=0)return t.copy(n);zo.subVectors(e,i);const h=Ts.dot(zo),d=As.dot(zo);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ts,a);Vo.subVectors(e,r);const f=Ts.dot(Vo),m=As.dot(Vo);if(m>=0&&f<=m)return t.copy(r);const g=f*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(As,o);const x=h*m-f*d;if(x<=0&&d-h>=0&&f-m>=0)return Rh.subVectors(r,i),o=(d-h)/(d-h+(f-m)),t.copy(i).addScaledVector(Rh,o);const p=1/(x+g+u);return a=g*p,o=u*p,t.copy(n).addScaledVector(Ts,a).addScaledVector(As,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Xo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Ll(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xo(a,r,e+1/3),this.g=Xo(a,r,e),this.b=Xo(a,r,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return it.workingToColorSpace(Qt.copy(this),e),Math.round(Ye(Qt.r*255,0,255))*65536+Math.round(Ye(Qt.g*255,0,255))*256+Math.round(Ye(Qt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Qt.copy(this),t);const n=Qt.r,i=Qt.g,r=Qt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=zt){it.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,i=Qt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(fa);const n=Cr(Ni.h,fa.h,t),i=Cr(Ni.s,fa.s,t),r=Cr(Ni.l,fa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Be;Be.NAMES=xu;let qp=0;class In extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Bs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nt extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new U,pa=new He;let Kp=0;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),e}}class gu extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _u extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yp=0;const Dn=new Ve,qo=new Et,Rs=new U,wn=new Ci,fr=new Ci,Xt=new U;class Vt extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?_u:gu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(wn.min,fr.min),wn.expandByPoint(Xt),Xt.addVectors(wn.max,fr.max),wn.expandByPoint(Xt)):(wn.expandByPoint(fr.min),wn.expandByPoint(fr.max))}wn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Xt.fromBufferAttribute(o,l),c&&(Rs.fromBufferAttribute(e,l),Xt.add(Rs)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new U,c[I]=new U;const l=new U,h=new U,d=new U,u=new He,f=new He,m=new He,g=new U,x=new U;function p(I,v,b){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,v),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,v),m.fromBufferAttribute(r,b),h.sub(l),d.sub(l),f.sub(u),m.sub(u);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),x.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),o[I].add(g),o[v].add(g),o[b].add(g),c[I].add(x),c[v].add(x),c[b].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,v=y.length;I<v;++I){const b=y[I],L=b.start,B=b.count;for(let z=L,W=L+B;z<W;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new U,T=new U,R=new U,E=new U;function C(I){R.fromBufferAttribute(i,I),E.copy(R);const v=o[I];S.copy(v),S.sub(R.multiplyScalar(R.dot(v))).normalize(),T.crossVectors(E,v);const L=T.dot(c[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,L)}for(let I=0,v=y.length;I<v;++I){const b=y[I],L=b.start,B=b.count;for(let z=L,W=L+B;z<W;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),g=e.getX(u+1),x=e.getX(u+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,m=0;for(let g=0,x=c.length;g<x;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new ln(u,h,d)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ch=new Ve,Ki=new Jr,ma=new hi,Ih=new U,xa=new U,ga=new U,_a=new U,Ko=new U,va=new U,Ph=new U,ba=new U;class mt extends Et{constructor(e=new Vt,t=new nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Ko.fromBufferAttribute(d,e),a?va.addScaledVector(Ko,h):va.addScaledVector(Ko.sub(t),h))}t.add(va)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(ma.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ma,Ih)===null||Ki.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Ch.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Ch),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=u.length;m<g;m++){const x=u[m],p=a[x.materialIndex],y=Math.max(x.start,f.start),S=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let T=y,R=S;T<R;T+=3){const E=o.getX(T),C=o.getX(T+1),I=o.getX(T+2);i=ya(this,p,e,n,l,h,d,E,C,I),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const y=o.getX(x),S=o.getX(x+1),T=o.getX(x+2);i=ya(this,a,e,n,l,h,d,y,S,T),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=u.length;m<g;m++){const x=u[m],p=a[x.materialIndex],y=Math.max(x.start,f.start),S=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let T=y,R=S;T<R;T+=3){const E=T,C=T+1,I=T+2;i=ya(this,p,e,n,l,h,d,E,C,I),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const y=x,S=x+1,T=x+2;i=ya(this,a,e,n,l,h,d,y,S,T),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function jp(s,e,t,n,i,r,a,o){let c;if(e.side===_n?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Ai,o),c===null)return null;ba.copy(o),ba.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ba);return l<t.near||l>t.far?null:{distance:l,point:ba.clone(),object:s}}function ya(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,xa),s.getVertexPosition(c,ga),s.getVertexPosition(l,_a);const h=jp(s,e,t,n,xa,ga,_a,Ph);if(h){const d=new U;Yn.getBarycoord(Ph,xa,ga,_a,d),i&&(h.uv=Yn.getInterpolatedAttribute(i,o,c,l,d,new He)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,o,c,l,d,new He)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,c,l,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new U,materialIndex:0};Yn.getNormal(xa,ga,_a,u.normal),h.face=u,h.barycoord=d}return h}class ms extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function m(g,x,p,y,S,T,R,E,C,I,v){const b=T/C,L=R/I,B=T/2,z=R/2,W=E/2,Y=C+1,q=I+1;let re=0,X=0;const se=new U;for(let le=0;le<q;le++){const Te=le*L-z;for(let tt=0;tt<Y;tt++){const dt=tt*b-B;se[g]=dt*y,se[x]=Te*S,se[p]=W,l.push(se.x,se.y,se.z),se[g]=0,se[x]=0,se[p]=E>0?1:-1,h.push(se.x,se.y,se.z),d.push(tt/C),d.push(1-le/I),re+=1}}for(let le=0;le<I;le++)for(let Te=0;Te<C;Te++){const tt=u+Te+Y*le,dt=u+Te+Y*(le+1),vt=u+(Te+1)+Y*(le+1),bt=u+(Te+1)+Y*le;c.push(tt,dt,bt),c.push(dt,vt,bt),X+=6}o.addGroup(f,X,v),f+=X,u+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function rn(s){const e={};for(let t=0;t<s.length;t++){const n=Ks(s[t]);for(const i in n)e[i]=n[i]}return e}function $p(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Zp={clone:Ks,merge:rn};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bu extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new U,Lh=new He,Dh=new He;class gn extends bu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Lh,Dh),t.subVectors(Dh,Lh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Is=1;class em extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gn(Cs,Is,e,t);i.layers=this.layers,this.add(i);const r=new gn(Cs,Is,e,t);r.layers=this.layers,this.add(r);const a=new gn(Cs,Is,e,t);a.layers=this.layers,this.add(a);const o=new gn(Cs,Is,e,t);o.layers=this.layers,this.add(o);const c=new gn(Cs,Is,e,t);c.layers=this.layers,this.add(c);const l=new gn(Cs,Is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class yu extends Kt{constructor(e=[],t=Hs,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tm extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ms(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Ei});r.uniforms.tEquirect.value=t;const a=new mt(i,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=on),new em(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class lt extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nm={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,n),p=this._getHandJoint(l,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Nh extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class im{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tl,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new U;class Ul{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ul(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Uh=new U,Fh=new at,Oh=new at,sm=new U,Bh=new Ve,Ma=new U,jo=new hi,kh=new Ve,$o=new Jr;class rm extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(i),e.ray.intersectsSphere(jo)!==!1&&(kh.copy(i).invert(),$o.copy(e.ray).applyMatrix4(kh),!(this.boundingBox!==null&&$o.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$o)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ep?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Fh.fromBufferAttribute(i.attributes.skinIndex,e),Oh.fromBufferAttribute(i.attributes.skinWeight,e),Uh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Oh.getComponent(r);if(a!==0){const o=Fh.getComponent(r);Bh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sm.copy(Uh).applyMatrix4(Bh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Mu extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fl extends Kt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=cn,h=cn,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new Ve,am=new Ve;class Ol{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:am;zh.multiplyMatrices(o,t[r]),zh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ol(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fl(t,e,e,On,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Me("Skeleton: No bone found with UUID:",r),a=new Mu),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class nl extends ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new Ve,Vh=new Ve,Sa=[],Gh=new Ci,om=new Ve,pr=new mt,mr=new hi;class Xa extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,om)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Gh.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Gh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),mr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),e.ray.intersectsSphere(mr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ps),Vh.multiplyMatrices(n,Ps),pr.matrixWorld=Vh,pr.raycast(e,Sa);for(let a=0,o=Sa.length;a<o;a++){const c=Sa[a];c.instanceId=r,c.object=this,t.push(c)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fl(new Float32Array(i*this.count),i,this.count,Tl,jn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zo=new U,cm=new U,lm=new Ge;class Ji{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zo.subVectors(n,t).cross(cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lm.getNormalMatrix(e),i=this.coplanarPoint(Zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new hi,hm=new He(.5,.5),wa=new U;class Bl{constructor(e=new Ji,t=new Ji,n=new Ji,i=new Ji,r=new Ji,a=new Ji){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],y=r[12],S=r[13],T=r[14],R=r[15];if(i[0].setComponents(l-a,f-h,p-m,R-y).normalize(),i[1].setComponents(l+a,f+h,p+m,R+y).normalize(),i[2].setComponents(l+o,f+d,p+g,R+S).normalize(),i[3].setComponents(l-o,f-d,p-g,R-S).normalize(),n)i[4].setComponents(c,u,x,T).normalize(),i[5].setComponents(l-c,f-u,p-x,R-T).normalize();else if(i[4].setComponents(l-c,f-u,p-x,R-T).normalize(),t===ai)i[5].setComponents(l+c,f+u,p+x,R+T).normalize();else if(t===no)i[5].setComponents(c,u,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);const t=hm.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wa.x=i.normal.x>0?e.max.x:e.min.x,wa.y=i.normal.y>0?e.max.y:e.min.y,wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mi extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const so=new U,ro=new U,Hh=new Ve,xr=new Jr,Ea=new hi,Jo=new U,Wh=new U;class En extends Et{constructor(e=new Vt,t=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)so.fromBufferAttribute(t,i-1),ro.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=so.distanceTo(ro);e.setAttribute("lineDistance",new Yt(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(i),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;Hh.copy(i).invert(),xr.copy(e.ray).applyMatrix4(Hh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=l){const p=h.getX(g),y=h.getX(g+1),S=Ta(this,e,xr,c,p,y,g);S&&t.push(S)}if(this.isLineLoop){const g=h.getX(m-1),x=h.getX(f),p=Ta(this,e,xr,c,g,x,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=l){const p=Ta(this,e,xr,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Ta(this,e,xr,c,m-1,f,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ta(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(so.fromBufferAttribute(o,i),ro.fromBufferAttribute(o,r),t.distanceSqToSegment(so,ro,Jo,Wh)>n)return;Jo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Jo);if(!(l<e.near||l>e.far))return{distance:l,point:Wh.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Xh=new U,qh=new U;class dm extends En{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Xh.fromBufferAttribute(t,i),qh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xh.distanceTo(qh);e.setAttribute("lineDistance",new Yt(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class um extends En{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Su extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kh=new Ve,il=new Jr,Aa=new hi,Ra=new U;class fm extends Et{constructor(e=new Vt,t=new Su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Kh.copy(i).invert(),il.copy(e.ray).applyMatrix4(Kh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=u,g=f;m<g;m++){const x=l.getX(m);Ra.fromBufferAttribute(d,x),Yh(Ra,x,c,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,g=f;m<g;m++)Ra.fromBufferAttribute(d,m),Yh(Ra,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Yh(s,e,t,n,i,r,a){const o=il.distanceSqToPoint(s);if(o<t){const c=new U;il.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class wu extends Kt{constructor(e,t,n=os,i,r,a,o=cn,c=cn,l,h=Br,d=1){if(h!==Br&&h!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Eu extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class go extends Vt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let m=0;const g=[],x=n/2;let p=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function y(){const T=new U,R=new U;let E=0;const C=(t-e)/n;for(let I=0;I<=r;I++){const v=[],b=I/r,L=b*(t-e)+e;for(let B=0;B<=i;B++){const z=B/i,W=z*c+o,Y=Math.sin(W),q=Math.cos(W);R.x=L*Y,R.y=-b*n+x,R.z=L*q,d.push(R.x,R.y,R.z),T.set(Y,C,q).normalize(),u.push(T.x,T.y,T.z),f.push(z,1-b),v.push(m++)}g.push(v)}for(let I=0;I<i;I++)for(let v=0;v<r;v++){const b=g[v][I],L=g[v+1][I],B=g[v+1][I+1],z=g[v][I+1];(e>0||v!==0)&&(h.push(b,L,z),E+=3),(t>0||v!==r-1)&&(h.push(L,B,z),E+=3)}l.addGroup(p,E,0),p+=E}function S(T){const R=m,E=new He,C=new U;let I=0;const v=T===!0?e:t,b=T===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,x*b,0),u.push(0,b,0),f.push(.5,.5),m++;const L=m;for(let B=0;B<=i;B++){const W=B/i*c+o,Y=Math.cos(W),q=Math.sin(W);C.x=v*q,C.y=x*b,C.z=v*Y,d.push(C.x,C.y,C.z),u.push(0,b,0),E.x=Y*.5+.5,E.y=q*.5*b+.5,f.push(E.x,E.y),m++}for(let B=0;B<i;B++){const z=R+B,W=L+B;T===!0?h.push(W,W+1,z):h.push(W+1,W,z),I+=3}l.addGroup(p,I,T===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kl extends go{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new kl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zl extends Vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new U,T=new U,R=new U;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],T),f(t[E+2],R),c(S,T,R,y)}function c(y,S,T,R){const E=R+1,C=[];for(let I=0;I<=E;I++){C[I]=[];const v=y.clone().lerp(T,I/E),b=S.clone().lerp(T,I/E),L=E-I;for(let B=0;B<=L;B++)B===0&&I===E?C[I][B]=v:C[I][B]=v.clone().lerp(b,B/L)}for(let I=0;I<E;I++)for(let v=0;v<2*(E-I)-1;v++){const b=Math.floor(v/2);v%2===0?(u(C[I][b+1]),u(C[I+1][b]),u(C[I][b])):(u(C[I][b+1]),u(C[I+1][b+1]),u(C[I+1][b]))}}function l(y){const S=new U;for(let T=0;T<r.length;T+=3)S.x=r[T+0],S.y=r[T+1],S.z=r[T+2],S.normalize().multiplyScalar(y),r[T+0]=S.x,r[T+1]=S.y,r[T+2]=S.z}function h(){const y=new U;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const T=x(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(T,1-R)}m(),d()}function d(){for(let y=0;y<a.length;y+=6){const S=a[y+0],T=a[y+2],R=a[y+4],E=Math.max(S,T,R),C=Math.min(S,T,R);E>.9&&C<.1&&(S<.2&&(a[y+0]+=1),T<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,S){const T=y*3;S.x=e[T+0],S.y=e[T+1],S.z=e[T+2]}function m(){const y=new U,S=new U,T=new U,R=new U,E=new He,C=new He,I=new He;for(let v=0,b=0;v<r.length;v+=9,b+=6){y.set(r[v+0],r[v+1],r[v+2]),S.set(r[v+3],r[v+4],r[v+5]),T.set(r[v+6],r[v+7],r[v+8]),E.set(a[b+0],a[b+1]),C.set(a[b+2],a[b+3]),I.set(a[b+4],a[b+5]),R.copy(y).add(S).add(T).divideScalar(3);const L=x(R);g(E,b+0,y,L),g(C,b+2,S,L),g(I,b+4,T,L)}}function g(y,S,T,R){R<0&&y.x===1&&(a[S]=y.x-1),T.x===0&&T.z===0&&(a[S]=R/2/Math.PI+.5)}function x(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.vertices,e.indices,e.radius,e.details)}}class _o extends zl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _o(e.radius,e.detail)}}class Qr extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,f=[],m=[],g=[],x=[];for(let p=0;p<h;p++){const y=p*u-a;for(let S=0;S<l;S++){const T=S*d-r;m.push(T,-y,0),g.push(0,0,1),x.push(S/o),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const S=y+l*p,T=y+l*(p+1),R=y+1+l*(p+1),E=y+1+l*p;f.push(S,T,E),f.push(T,R,E)}this.setIndex(f),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fs extends Vt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=e;const u=(t-e)/i,f=new U,m=new He;for(let g=0;g<=i;g++){for(let x=0;x<=n;x++){const p=r+x/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let g=0;g<i;g++){const x=g*(n+1);for(let p=0;p<n;p++){const y=p+x,S=y,T=y+n+1,R=y+n+2,E=y+1;o.push(S,T,E),o.push(T,R,E)}}this.setIndex(o),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ea extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class di extends ea{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pm extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mm extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ca(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function xm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function gm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function jh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Tu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ta{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _m extends ta{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ns,endingEnd:Ns}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Us:r=e,o=2*t-n;break;case eo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Us:a=e,c=2*n-t;break;case eo:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),g=m*m,x=g*m,p=-u*x+2*u*g-u*m,y=(1+u)*x+(-1.5-2*u)*g+(-.5+u)*m+1,S=(-1-f)*x+(1.5+f)*g+.5*m,T=f*x-f*g;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[l+R]+S*a[c+R]+T*a[d+R];return r}}class Au extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}}class vm extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _m(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case Vr:t=this.InterpolantFactoryMethodLinear;break;case Ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Xe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Xe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&xm(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Xe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ao,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const g=t[d+m];if(g!==t[u+m]||g!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Vr;class ir extends Qn{constructor(e,t,n){super(e,t,n)}}ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=zr;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Ru extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}Ru.prototype.ValueTypeName="color";class Ys extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}Ys.prototype.ValueTypeName="number";class bm extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)zn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class js extends Qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new bm(this.times,this.values,this.getValueSize(),e)}}js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends Qn{constructor(e,t,n){super(e,t,n)}}sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=zr;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}$s.prototype.ValueTypeName="vector";class sl{constructor(e="",t=-1,n=[],i=Pl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Mm(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=gm(c);c=jh(c,1,h),l=jh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ys(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Xe("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,m,g){if(f.length!==0){const x=[],p=[];Tu(f,x,p,m),x.length!==0&&g.push(new d(u,x,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let g=0;g<u[m].morphTargets.length;g++)f[u[m].morphTargets[g]]=-1;for(const g in f){const x=[],p=[];for(let y=0;y!==u[m].morphTargets.length;++y){const S=u[m];x.push(S.time),p.push(S.morphTarget===g?1:0)}i.push(new Ys(".morphTargetInfluence["+g+"]",x,p))}c=f.length*a}else{const f=".bones["+t[d].name+"]";n($s,f+".position",u,"pos",i),n(js,f+".quaternion",u,"rot",i),n($s,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ym(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return Ru;case"quaternion":return js;case"bool":case"boolean":return ir;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Mm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ym(s.type);if(s.times===void 0){const t=[],n=[];Tu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const wi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Sm{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wm=new Sm;class rr{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class Em extends Error{constructor(e,t){super(e),this.response=t}}class Cu extends rr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=wi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:i});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=_i[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let g=0;const x=new ReadableStream({start(p){y();function y(){d.read().then(({done:S,value:T})=>{if(S)p.close();else{g+=T.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let E=0,C=h.length;E<C;E++){const I=h[E];I.onProgress&&I.onProgress(R)}p.enqueue(T),y()}},S=>{p.error(S)})}}});return new Response(x)}else throw new Em(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{wi.add(`file:${e}`,l);const h=_i[e];delete _i[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=_i[e];if(h===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=new WeakMap;class Tm extends rr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=wi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Ls.get(a);d===void 0&&(d=[],Ls.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Gr("img");function c(){h(),t&&t(this);const d=Ls.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),wi.remove(`image:${e}`);const u=Ls.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(d)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Am extends rr{constructor(e){super(e)}load(e,t,n,i){const r=new Kt,a=new Tm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class vo extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $h extends vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qo=new Ve,Zh=new U,Jh=new U;class Vl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bl,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rm extends Vl{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cm extends vo{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Rm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qh=new Ve,gr=new U,ec=new U;class Im extends Vl{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),ec.copy(n.position),ec.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ec),n.updateMatrixWorld(),i.makeTranslation(-gr.x,-gr.y,-gr.z),Qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh,n.coordinateSystem,n.reversedDepth)}}class Iu extends vo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Im}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wr extends bu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pm extends Vl{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rl extends vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Pm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ir{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const tc=new WeakMap;class Lm extends rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=wi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(tc.has(a)===!0)i&&i(tc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return wi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),tc.set(c,l),wi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});wi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Dm extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){zn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;zn.multiplyQuaternionsFlat(e,a,e,t,e,n),zn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Gl="\\[\\]\\.:\\/",Um=new RegExp("["+Gl+"]","g"),Hl="[^"+Gl+"]",Fm="[^"+Gl.replace("\\.","")+"]",Om=/((?:WC+[\/:])*)/.source.replace("WC",Hl),Bm=/(WCOD+)?/.source.replace("WCOD",Fm),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),zm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),Vm=new RegExp("^"+Om+Bm+km+zm+"$"),Gm=["material","materials","bones","map"];class Hm{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Um,"")}static parseTrackName(e){const t=Vm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=Hm;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Wm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ns,endingEnd:Ns};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=hu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case np:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Pl:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===tp;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===lu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Us,i.endingEnd=Us):(e?i.endingStart=this.zeroSlopeAtStart?Us:Ns:i.endingStart=eo,t?i.endingEnd=this.zeroSlopeAtEnd?Us:Ns:i.endingEnd=eo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const Xm=new Float32Array(1);class qm extends ps{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const g=t&&t._propertyBindings[d].binding.parsedPath;m=new Nm(ot.create(n,f,g),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Au(new Float32Array(2),new Float32Array(2),1,Xm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?sl.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Pl),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Wm(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?sl.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const ed=new Ve;class Km{constructor(e,t,n=0,i=1/0){this.ray=new Jr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ed.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ed),this}intersectObject(e,t=!0,n=[]){return al(e,this,n,t),n.sort(td),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)al(e[i],this,n,t);return n.sort(td),n}}function td(s,e){return s.distance-e.distance}function al(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)al(r[a],e,t,!0)}}function nd(s,e,t,n){const i=Ym(n);switch(t){case ou:return s*e;case Tl:return s*e/i.components*i.byteLength;case Al:return s*e/i.components*i.byteLength;case Rl:return s*e*2/i.components*i.byteLength;case Cl:return s*e*2/i.components*i.byteLength;case cu:return s*e*3/i.components*i.byteLength;case On:return s*e*4/i.components*i.byteLength;case Il:return s*e*4/i.components*i.byteLength;case Va:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Cc:return Math.max(s,16)*Math.max(e,8)/4;case Tc:case Rc:return Math.max(s,8)*Math.max(e,8)/2;case Ic:case Pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Kc:case Yc:case jc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $c:case Zc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jc:case Qc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(s){switch(s){case ci:case iu:return{byteLength:1,components:1};case Fr:case su:case nr:return{byteLength:2,components:1};case wl:case El:return{byteLength:2,components:4};case os:case Sl:case jn:return{byteLength:4,components:1};case ru:case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);function Pu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function jm(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],g=d[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const g=d[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,v0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,G0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ag=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:$m,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:Qm,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:s0,batching_vertex:r0,begin_vertex:a0,beginnormal_vertex:o0,bsdfs:c0,iridescence_fragment:l0,bumpmap_pars_fragment:h0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:x0,color_pars_vertex:g0,color_vertex:_0,common:v0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:y0,displacementmap_pars_vertex:M0,displacementmap_vertex:S0,emissivemap_fragment:w0,emissivemap_pars_fragment:E0,colorspace_fragment:T0,colorspace_pars_fragment:A0,envmap_fragment:R0,envmap_common_pars_fragment:C0,envmap_pars_fragment:I0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:G0,envmap_vertex:L0,fog_vertex:D0,fog_pars_vertex:N0,fog_fragment:U0,fog_pars_fragment:F0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:B0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:z0,lights_pars_begin:V0,lights_toon_fragment:H0,lights_toon_pars_fragment:W0,lights_phong_fragment:X0,lights_phong_pars_fragment:q0,lights_physical_fragment:K0,lights_physical_pars_fragment:Y0,lights_fragment_begin:j0,lights_fragment_maps:$0,lights_fragment_end:Z0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:tx,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:sx,map_particle_pars_fragment:rx,metalnessmap_fragment:ax,metalnessmap_pars_fragment:ox,morphinstance_vertex:cx,morphcolor_vertex:lx,morphnormal_vertex:hx,morphtarget_pars_vertex:dx,morphtarget_vertex:ux,normal_fragment_begin:fx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:xx,normal_vertex:gx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:yx,iridescence_pars_fragment:Mx,opaque_fragment:Sx,packing:wx,premultiplied_alpha_fragment:Ex,project_vertex:Tx,dithering_fragment:Ax,dithering_pars_fragment:Rx,roughnessmap_fragment:Cx,roughnessmap_pars_fragment:Ix,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Lx,shadowmap_vertex:Dx,shadowmask_pars_fragment:Nx,skinbase_vertex:Ux,skinning_pars_vertex:Fx,skinning_vertex:Ox,skinnormal_vertex:Bx,specularmap_fragment:kx,specularmap_pars_fragment:zx,tonemapping_fragment:Vx,tonemapping_pars_fragment:Gx,transmission_fragment:Hx,transmission_pars_fragment:Wx,uv_pars_fragment:Xx,uv_pars_vertex:qx,uv_vertex:Kx,worldpos_vertex:Yx,background_vert:jx,background_frag:$x,backgroundCube_vert:Zx,backgroundCube_frag:Jx,cube_vert:Qx,cube_frag:eg,depth_vert:tg,depth_frag:ng,distanceRGBA_vert:ig,distanceRGBA_frag:sg,equirect_vert:rg,equirect_frag:ag,linedashed_vert:og,linedashed_frag:cg,meshbasic_vert:lg,meshbasic_frag:hg,meshlambert_vert:dg,meshlambert_frag:ug,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:xg,meshphong_vert:gg,meshphong_frag:_g,meshphysical_vert:vg,meshphysical_frag:bg,meshtoon_vert:yg,meshtoon_frag:Mg,points_vert:Sg,points_frag:wg,shadow_vert:Eg,shadow_frag:Tg,sprite_vert:Ag,sprite_frag:Rg},he={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},si={basic:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Be(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:rn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:rn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Be(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:rn([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:rn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:rn([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:rn([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:rn([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:rn([he.lights,he.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};si.physical={uniforms:rn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ia={r:0,b:0,g:0},ji=new li,Cg=new Ve;function Ig(s,e,t,n,i,r,a){const o=new Be(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function m(S){let T=S.isScene===!0?S.background:null;return T&&T.isTexture&&(T=(S.backgroundBlurriness>0?t:e).get(T)),T}function g(S){let T=!1;const R=m(S);R===null?p(o,c):R&&R.isColor&&(p(R,1),T=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,T){const R=m(T);R&&(R.isCubeTexture||R.mapping===xo)?(h===void 0&&(h=new mt(new ms(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Ks(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ji.copy(T.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(ji)),h.material.toneMapped=it.getTransfer(R.colorSpace)!==pt,(d!==R||u!==R.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new mt(new Qr(2,2),new Ri({name:"BackgroundMaterial",uniforms:Ks(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=it.getTransfer(R.colorSpace)!==pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=R,u=R.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,T){S.getRGB(Ia,vu(s)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,T,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),c=T,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(o,c)},render:g,addToRenderList:x,dispose:y}}function Pg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(b,L,B,z,W){let Y=!1;const q=d(z,B,L);r!==q&&(r=q,l(r.object)),Y=f(b,z,B,W),Y&&m(b,z,B,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,T(b,L,B,z),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function d(b,L,B){const z=B.wireframe===!0;let W=n[b.id];W===void 0&&(W={},n[b.id]=W);let Y=W[L.id];Y===void 0&&(Y={},W[L.id]=Y);let q=Y[z];return q===void 0&&(q=u(c()),Y[z]=q),q}function u(b){const L=[],B=[],z=[];for(let W=0;W<t;W++)L[W]=0,B[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:z,object:b,attributes:{},index:null}}function f(b,L,B,z){const W=r.attributes,Y=L.attributes;let q=0;const re=B.getAttributes();for(const X in re)if(re[X].location>=0){const le=W[X];let Te=Y[X];if(Te===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor)),le===void 0||le.attribute!==Te||Te&&le.data!==Te.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function m(b,L,B,z){const W={},Y=L.attributes;let q=0;const re=B.getAttributes();for(const X in re)if(re[X].location>=0){let le=Y[X];le===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(le=b.instanceColor));const Te={};Te.attribute=le,le&&le.data&&(Te.data=le.data),W[X]=Te,q++}r.attributes=W,r.attributesNum=q,r.index=z}function g(){const b=r.newAttributes;for(let L=0,B=b.length;L<B;L++)b[L]=0}function x(b){p(b,0)}function p(b,L){const B=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;B[b]=1,z[b]===0&&(s.enableVertexAttribArray(b),z[b]=1),W[b]!==L&&(s.vertexAttribDivisor(b,L),W[b]=L)}function y(){const b=r.newAttributes,L=r.enabledAttributes;for(let B=0,z=L.length;B<z;B++)L[B]!==b[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function S(b,L,B,z,W,Y,q){q===!0?s.vertexAttribIPointer(b,L,B,W,Y):s.vertexAttribPointer(b,L,B,z,W,Y)}function T(b,L,B,z){g();const W=z.attributes,Y=B.getAttributes(),q=L.defaultAttributeValues;for(const re in Y){const X=Y[re];if(X.location>=0){let se=W[re];if(se===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const le=se.normalized,Te=se.itemSize,tt=e.get(se);if(tt===void 0)continue;const dt=tt.buffer,vt=tt.type,bt=tt.bytesPerElement,j=vt===s.INT||vt===s.UNSIGNED_INT||se.gpuType===Sl;if(se.isInterleavedBufferAttribute){const Q=se.data,xe=Q.stride,ze=se.offset;if(Q.isInstancedInterleavedBuffer){for(let Se=0;Se<X.locationSize;Se++)p(X.location+Se,Q.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Se=0;Se<X.locationSize;Se++)x(X.location+Se);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let Se=0;Se<X.locationSize;Se++)S(X.location+Se,Te/X.locationSize,vt,le,xe*bt,(ze+Te/X.locationSize*Se)*bt,j)}else{if(se.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,se.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Q=0;Q<X.locationSize;Q++)x(X.location+Q);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let Q=0;Q<X.locationSize;Q++)S(X.location+Q,Te/X.locationSize,vt,le,Te*bt,Te/X.locationSize*Q*bt,j)}}else if(q!==void 0){const le=q[re];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(X.location,le);break;case 3:s.vertexAttrib3fv(X.location,le);break;case 4:s.vertexAttrib4fv(X.location,le);break;default:s.vertexAttrib1fv(X.location,le)}}}}y()}function R(){I();for(const b in n){const L=n[b];for(const B in L){const z=L[B];for(const W in z)h(z[W].object),delete z[W];delete L[B]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const B in L){const z=L[B];for(const W in z)h(z[W].object),delete z[W];delete L[B]}delete n[b.id]}function C(b){for(const L in n){const B=n[L];if(B[b.id]===void 0)continue;const z=B[b.id];for(const W in z)h(z[W].object),delete z[W];delete B[b.id]}}function I(){v(),a=!0,r!==i&&(r=i,l(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:x,disableUnusedAttributes:y}}function Lg(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];t.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g]*u[g];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Dg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==On&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ci&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jn&&!I)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Me("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:R,maxSamples:E}}function Ng(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ji,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,g=d.clipIntersection,x=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!x)r?h(null):l();else{const y=r?0:n,S=y*4;let T=p.clippingState||null;c.value=T,T=h(m,u,S,f);for(let R=0;R!==S;++R)T[R]=t[R];p.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){const g=d!==null?d.length:0;let x=null;if(g!==0){if(x=c.value,m!==!0||x===null){const p=f+g*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let S=0,T=f;S!==g;++S,T+=4)a.copy(d[S]).applyMatrix4(y,o),a.normal.toArray(x,T),x[T+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function Ug(s){let e=new WeakMap;function t(a,o){return o===wc?a.mapping=Hs:o===Ec&&(a.mapping=Ws),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wc||o===Ec)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new tm(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ki=4,id=[.125,.215,.35,.446,.526,.582],es=20,Fg=256,_r=new Wr,sd=new Be;let nc=null,ic=0,sc=0,rc=!1;const Og=new U;class rd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Og}=r;nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nc,ic,sc),this._renderer.xr.enabled=rc,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:nr,format:On,colorSpace:dn,depthBuffer:!1},i=ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bg(r)),this._blurMaterial=zg(r,e,t),this._ggxMaterial=kg(r,e,t)}return i}_compileMaterial(e){const t=new mt(new Vt,e);this._renderer.compile(t,_r)}_sceneToCubeUV(e,t,n,i,r){const c=new gn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(sd),d.toneMapping=Vi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new ms,new nt({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let p=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,p=!0):(x.color.copy(sd),p=!0);for(let S=0;S<6;S++){const T=S%3;T===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):T===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));const R=this._cubeSize;Ds(i,T*R,S>2?R:0,R,R),d.setRenderTarget(i),p&&d.render(g,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hs||e.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ds(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,_r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=.05+l*.95,f=d*u,{_lodMax:m}=this,g=this._sizeLods[n],x=3*g*(n>m-ki?n-m+ki:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Ds(r,x,p,3*g,2*g),i.setRenderTarget(r),i.render(o,_r),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Ds(e,x,p,3*g,2*g),i.setRenderTarget(e),i.render(o,_r)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=l;const u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),g=r/m,x=isFinite(r)?1+Math.floor(h*g):es;x>es&&Me(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${es}`);const p=[];let y=0;for(let C=0;C<es;++C){const I=C/g,v=Math.exp(-I*I/2);p.push(v),C===0?y+=v:C<x&&(y+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=m,u.mipInt.value=S-n;const T=this._sizeLods[i],R=3*T*(i>S-ki?i-S+ki:0),E=4*(this._cubeSize-T);Ds(t,R,E,3*T,2*T),c.setRenderTarget(t),c.render(d,_r)}}function Bg(s){const e=[],t=[],n=[];let i=s;const r=s-ki+1+id.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-ki?c=id[a-s+ki-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,g=3,x=2,p=1,y=new Float32Array(g*m*f),S=new Float32Array(x*m*f),T=new Float32Array(p*m*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,I=E>2?0:-1,v=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(v,g*m*E),S.set(u,x*m*E);const b=[E,E,E,E,E,E];T.set(b,p*m*E)}const R=new Vt;R.setAttribute("position",new ln(y,g)),R.setAttribute("uv",new ln(S,x)),R.setAttribute("faceIndex",new ln(T,p)),n.push(new mt(R,null)),i>ki&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ad(s,e,t){const n=new cs(s,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function kg(s,e,t){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function zg(s,e,t){const n=new Float32Array(es),i=new U(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function od(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function cd(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===wc||c===Ec,h=c===Hs||c===Ws;if(l||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new rd(s)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new rd(s)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Hr("WebGLRenderer: "+n+" extension not supported."),i}}}function Hg(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,m=d.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let S=0,T=y.length;S<T;S+=3){const R=y[S+0],E=y[S+1],C=y[S+2];u.push(R,E,E,C,C,R)}}else if(m!==void 0){const y=m.array;g=m.version;for(let S=0,T=y.length/3-1;S<T;S+=3){const R=S+0,E=S+1,C=S+2;u.push(R,E,E,C,C,R)}}else return;const x=new(pu(u)?_u:gu)(u,1);x.version=g;const p=r.get(d);p&&e.remove(p),r.set(d,x)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Wg(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function l(u,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,u*a,m),t.update(f,n,m))}function h(u,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let x=0;for(let p=0;p<m;p++)x+=f[p];t.update(x,n,1)}function d(u,f,m,g){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],g[p]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,g,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*g[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qg(s,e,t){const n=new WeakMap,i=new at;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;f===!0&&(S=1),m===!0&&(S=2),g===!0&&(S=3);let T=o.attributes.position.count*S,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const E=new Float32Array(T*R*4*d),C=new mu(E,T,R,d);C.type=jn,C.needsUpdate=!0;const I=S*4;for(let b=0;b<d;b++){const L=x[b],B=p[b],z=y[b],W=T*R*4*b;for(let Y=0;Y<L.count;Y++){const q=Y*I;f===!0&&(i.fromBufferAttribute(L,Y),E[W+q+0]=i.x,E[W+q+1]=i.y,E[W+q+2]=i.z,E[W+q+3]=0),m===!0&&(i.fromBufferAttribute(B,Y),E[W+q+4]=i.x,E[W+q+5]=i.y,E[W+q+6]=i.z,E[W+q+7]=0),g===!0&&(i.fromBufferAttribute(z,Y),E[W+q+8]=i.x,E[W+q+9]=i.y,E[W+q+10]=i.z,E[W+q+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new He(T,R)},n.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Kg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Lu=new Kt,ld=new wu(1,1),Du=new mu,Nu=new Bp,Uu=new yu,hd=[],dd=[],ud=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function ar(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=hd[i];if(r===void 0&&(r=new Float32Array(i),hd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yo(s,e){let t=dd[e];t===void 0&&(t=new Int32Array(e),dd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Yg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Wt(t,e)}}function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Wt(t,e)}}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Wt(t,e)}}function Jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;pd.set(n),s.uniformMatrix2fv(this.addr,!1,pd),Wt(t,n)}}function Qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;fd.set(n),s.uniformMatrix3fv(this.addr,!1,fd),Wt(t,n)}}function e_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;ud.set(n),s.uniformMatrix4fv(this.addr,!1,ud),Wt(t,n)}}function t_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function n_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Wt(t,e)}}function i_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Wt(t,e)}}function s_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Wt(t,e)}}function r_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function a_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Wt(t,e)}}function o_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Wt(t,e)}}function c_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Wt(t,e)}}function l_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ld.compareFunction=fu,r=ld):r=Lu,t.setTexture2D(e||r,i)}function h_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nu,i)}function d_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Uu,i)}function u_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Du,i)}function f_(s){switch(s){case 5126:return Yg;case 35664:return jg;case 35665:return $g;case 35666:return Zg;case 35674:return Jg;case 35675:return Qg;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return a_;case 36295:return o_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return u_}}function p_(s,e){s.uniform1fv(this.addr,e)}function m_(s,e){const t=ar(e,this.size,2);s.uniform2fv(this.addr,t)}function x_(s,e){const t=ar(e,this.size,3);s.uniform3fv(this.addr,t)}function g_(s,e){const t=ar(e,this.size,4);s.uniform4fv(this.addr,t)}function __(s,e){const t=ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function v_(s,e){const t=ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function b_(s,e){const t=ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function y_(s,e){s.uniform1iv(this.addr,e)}function M_(s,e){s.uniform2iv(this.addr,e)}function S_(s,e){s.uniform3iv(this.addr,e)}function w_(s,e){s.uniform4iv(this.addr,e)}function E_(s,e){s.uniform1uiv(this.addr,e)}function T_(s,e){s.uniform2uiv(this.addr,e)}function A_(s,e){s.uniform3uiv(this.addr,e)}function R_(s,e){s.uniform4uiv(this.addr,e)}function C_(s,e,t){const n=this.cache,i=e.length,r=yo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Lu,r[a])}function I_(s,e,t){const n=this.cache,i=e.length,r=yo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Nu,r[a])}function P_(s,e,t){const n=this.cache,i=e.length,r=yo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Uu,r[a])}function L_(s,e,t){const n=this.cache,i=e.length,r=yo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Du,r[a])}function D_(s){switch(s){case 5126:return p_;case 35664:return m_;case 35665:return x_;case 35666:return g_;case 35674:return __;case 35675:return v_;case 35676:return b_;case 5124:case 35670:return y_;case 35667:case 35671:return M_;case 35668:case 35672:return S_;case 35669:case 35673:return w_;case 5125:return E_;case 36294:return T_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return L_}}class N_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f_(t.type)}}class U_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=D_(t.type)}}class F_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ac=/(\w+)(\])?(\[|\.)?/g;function md(s,e){s.seq.push(e),s.map[e.id]=e}function O_(s,e,t){const n=s.name,i=n.length;for(ac.lastIndex=0;;){const r=ac.exec(n),a=ac.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){md(t,l===void 0?new N_(o,s,e):new U_(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new F_(o),md(t,d)),t=d}}}class qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);O_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function xd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const B_=37297;let k_=0;function z_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const gd=new Ge;function V_(s){it._getMatrix(gd,it.workingColorSpace,s);const e=`mat3( ${gd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case to:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _d(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+z_(s.getShaderSource(e),o)}else return r}function G_(s,e){const t=V_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function H_(s,e){let t;switch(e){case Yf:t="Linear";break;case jf:t="Reinhard";break;case $f:t="Cineon";break;case Sc:t="ACESFilmic";break;case Jf:t="AgX";break;case Qf:t="Neutral";break;case Zf:t="Custom";break;default:Me("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pa=new U;function W_(){it.getLuminanceCoefficients(Pa);const s=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function q_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Sr(s){return s!==""}function vd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(s){return s.replace(Y_,$_)}const j_=new Map;function $_(s,e){let t=We[e];if(t===void 0){const n=j_.get(e);if(n!==void 0)t=We[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ol(t)}const Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(s){return s.replace(Z_,J_)}function J_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Md(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function ev(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Ws:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tv(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ws&&(e="ENVMAP_MODE_REFRACTION"),e}function nv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eu:e="ENVMAP_BLENDING_MULTIPLY";break;case qf:e="ENVMAP_BLENDING_MIX";break;case Kf:e="ENVMAP_BLENDING_ADD";break}return e}function iv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Q_(t),l=ev(t),h=tv(t),d=nv(t),u=iv(t),f=X_(t),m=q_(r),g=i.createProgram();let x,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sr).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(x=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?We.tonemapping_pars_fragment:"",t.toneMapping!==Vi?H_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,G_("linearToOutputTexel",t.outputColorSpace),W_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=ol(a),a=vd(a,t),a=bd(a,t),o=ol(o),o=vd(o,t),o=bd(o,t),a=yd(a),o=yd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+x+a,T=y+p+o,R=xd(i,i.VERTEX_SHADER,S),E=xd(i,i.FRAGMENT_SHADER,T);i.attachShader(g,R),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(L){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(g)||"",z=i.getShaderInfoLog(R)||"",W=i.getShaderInfoLog(E)||"",Y=B.trim(),q=z.trim(),re=W.trim();let X=!0,se=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,R,E);else{const le=_d(i,R,"vertex"),Te=_d(i,E,"fragment");Xe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+le+`
`+Te)}else Y!==""?Me("WebGLProgram: Program Info Log:",Y):(q===""||re==="")&&(se=!1);se&&(L.diagnostics={runnable:X,programLog:Y,vertexShader:{log:q,prefix:x},fragmentShader:{log:re,prefix:p}})}i.deleteShader(R),i.deleteShader(E),I=new qa(i,g),v=K_(i,g)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(g,B_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=E,this}let rv=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ov(e),t.set(e,n)),n}}class ov{constructor(e){this.id=rv++,this.code=e,this.usedTimes=0}}function cv(s,e,t,n,i,r,a){const o=new Nl,c=new av,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,b,L,B,z){const W=B.fog,Y=z.geometry,q=v.isMeshStandardMaterial?B.environment:null,re=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),X=re&&re.mapping===xo?re.image.height:null,se=m[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Me("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Te=le!==void 0?le.length:0;let tt=0;Y.morphAttributes.position!==void 0&&(tt=1),Y.morphAttributes.normal!==void 0&&(tt=2),Y.morphAttributes.color!==void 0&&(tt=3);let dt,vt,bt,j;if(se){const ut=si[se];dt=ut.vertexShader,vt=ut.fragmentShader}else dt=v.vertexShader,vt=v.fragmentShader,c.update(v),bt=c.getVertexShaderID(v),j=c.getFragmentShaderID(v);const Q=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),ze=z.isInstancedMesh===!0,Se=z.isBatchedMesh===!0,$e=!!v.map,$t=!!v.matcap,Ke=!!re,Tt=!!v.aoMap,P=!!v.lightMap,Ze=!!v.bumpMap,Je=!!v.normalMap,yt=!!v.displacementMap,ve=!!v.emissiveMap,Rt=!!v.metalnessMap,Ee=!!v.roughnessMap,ke=v.anisotropy>0,A=v.clearcoat>0,_=v.dispersion>0,k=v.iridescence>0,K=v.sheen>0,J=v.transmission>0,H=ke&&!!v.anisotropyMap,ye=A&&!!v.clearcoatMap,de=A&&!!v.clearcoatNormalMap,Ae=A&&!!v.clearcoatRoughnessMap,be=k&&!!v.iridescenceMap,ee=k&&!!v.iridescenceThicknessMap,ie=K&&!!v.sheenColorMap,De=K&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,pe=!!v.specularColorMap,Ue=!!v.specularIntensityMap,N=J&&!!v.transmissionMap,ue=J&&!!v.thicknessMap,ae=!!v.gradientMap,oe=!!v.alphaMap,te=v.alphaTest>0,$=!!v.alphaHash,ge=!!v.extensions;let Oe=Vi;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const St={shaderID:se,shaderType:v.type,shaderName:v.name,vertexShader:dt,fragmentShader:vt,defines:v.defines,customVertexShaderID:bt,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Se,batchingColor:Se&&z._colorsTexture!==null,instancing:ze,instancingColor:ze&&z.instanceColor!==null,instancingMorph:ze&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:dn,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:$t,envMap:Ke,envMapMode:Ke&&re.mapping,envMapCubeUVHeight:X,aoMap:Tt,lightMap:P,bumpMap:Ze,normalMap:Je,displacementMap:u&&yt,emissiveMap:ve,normalMapObjectSpace:Je&&v.normalMapType===ap,normalMapTangentSpace:Je&&v.normalMapType===uu,metalnessMap:Rt,roughnessMap:Ee,anisotropy:ke,anisotropyMap:H,clearcoat:A,clearcoatMap:ye,clearcoatNormalMap:de,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:k,iridescenceMap:be,iridescenceThicknessMap:ee,sheen:K,sheenColorMap:ie,sheenRoughnessMap:De,specularMap:Ce,specularColorMap:pe,specularIntensityMap:Ue,transmission:J,transmissionMap:N,thicknessMap:ue,gradientMap:ae,opaque:v.transparent===!1&&v.blending===Bs&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:te,alphaHash:$,combine:v.combine,mapUv:$e&&g(v.map.channel),aoMapUv:Tt&&g(v.aoMap.channel),lightMapUv:P&&g(v.lightMap.channel),bumpMapUv:Ze&&g(v.bumpMap.channel),normalMapUv:Je&&g(v.normalMap.channel),displacementMapUv:yt&&g(v.displacementMap.channel),emissiveMapUv:ve&&g(v.emissiveMap.channel),metalnessMapUv:Rt&&g(v.metalnessMap.channel),roughnessMapUv:Ee&&g(v.roughnessMap.channel),anisotropyMapUv:H&&g(v.anisotropyMap.channel),clearcoatMapUv:ye&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(v.sheenRoughnessMap.channel),specularMapUv:Ce&&g(v.specularMap.channel),specularColorMapUv:pe&&g(v.specularColorMap.channel),specularIntensityMapUv:Ue&&g(v.specularIntensityMap.channel),transmissionMapUv:N&&g(v.transmissionMap.channel),thicknessMapUv:ue&&g(v.thicknessMap.channel),alphaMapUv:oe&&g(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Je||ke),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&($e||oe),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:tt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:ve&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===An,flipSided:v.side===_n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)b.push(L),b.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(y(b,v),S(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function S(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),v.push(o.mask)}function T(v){const b=m[v.type];let L;if(b){const B=si[b];L=Zp.clone(B.uniforms)}else L=v.uniforms;return L}function R(v,b){let L;for(let B=0,z=h.length;B<z;B++){const W=h[B];if(W.cacheKey===b){L=W,++L.usedTimes;break}}return L===void 0&&(L=new sv(s,b,v,r),h.push(L)),L}function E(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function C(v){c.remove(v)}function I(){c.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:T,acquireProgram:R,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:I}}function lv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function hv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,m,g,x){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:g,group:x},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=g,p.group=x),e++,p}function o(d,u,f,m,g,x){const p=a(d,u,f,m,g,x);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(d,u,f,m,g,x){const p=a(d,u,f,m,g,x);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||hv),n.length>1&&n.sort(u||Sd),i.length>1&&i.sort(u||Sd)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function dv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new wd,s.set(n,[a])):i>=r.length?(a=new wd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function uv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function fv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pv=0;function mv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xv(s){const e=new uv,t=fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,r=new Ve,a=new Ve;function o(l){let h=0,d=0,u=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,m=0,g=0,x=0,p=0,y=0,S=0,T=0,R=0,E=0,C=0;l.sort(mv);for(let v=0,b=l.length;v<b;v++){const L=l[v],B=L.color,z=L.intensity,W=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*z,d+=B.g*z,u+=B.b*z;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],z);C++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const re=L.shadow,X=t.get(L);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=q,f++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar(z),q.distance=W,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[g]=q;const re=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,re.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[g]=re.matrix,L.castShadow){const X=t.get(L);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=Y,T++}g++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(B).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[x]=q,x++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const re=L.shadow,X=t.get(L);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=q,m++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(z),q.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=q,p++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==g||I.rectAreaLength!==x||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==T||I.numSpotMaps!==R||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=T+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.directionalLength=f,I.pointLength=m,I.spotLength=g,I.rectAreaLength=x,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=T,I.numSpotMaps=R,I.numLightProbes=C,n.version=pv++)}function c(l,h){let d=0,u=0,f=0,m=0,g=0;const x=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const S=l[p];if(S.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(x),d++}else if(S.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(x),f++}else if(S.isRectAreaLight){const T=n.rectArea[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(x),a.identity(),r.copy(S.matrixWorld),r.premultiply(x),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const T=n.point[u];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(x),u++}else if(S.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(x),g++}}}return{setup:o,setupView:c,state:n}}function Ed(s){const e=new xv(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function gv(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Ed(s),e.set(i,[o])):r>=a.length?(o=new Ed(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bv(s,e,t){let n=new Bl;const i=new He,r=new He,a=new at,o=new pm({depthPacking:rp}),c=new mm,l={},h=t.maxTextureSize,d={[Ai]:_n,[_n]:Ai,[An]:An},u=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:_v,fragmentShader:vv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Vt;m.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new mt(m,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jd;let p=this.type;this.render=function(E,C,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;const v=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Ei),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=p!==yi&&this.type===yi,W=p===yi&&this.type!==yi;for(let Y=0,q=E.length;Y<q;Y++){const re=E[Y],X=re.shadow;if(X===void 0){Me("WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const se=X.getFrameExtents();if(i.multiply(se),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/se.x),i.x=r.x*se.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/se.y),i.y=r.y*se.y,X.mapSize.y=r.y)),X.map===null||z===!0||W===!0){const Te=this.type!==yi?{minFilter:cn,magFilter:cn}:{};X.map!==null&&X.map.dispose(),X.map=new cs(i.x,i.y,Te),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const le=X.getViewportCount();for(let Te=0;Te<le;Te++){const tt=X.getViewport(Te);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),B.viewport(a),X.updateMatrices(re,Te),n=X.getFrustum(),T(C,I,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===yi&&y(X,I),X.needsUpdate=!1}p=this.type,x.needsUpdate=!1,s.setRenderTarget(v,b,L)};function y(E,C){const I=e.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new cs(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,I,u,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,I,f,g,null)}function S(E,C,I,v){let b=null;const L=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=I.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=b.uuid,z=C.uuid;let W=l[B];W===void 0&&(W={},l[B]=W);let Y=W[z];Y===void 0&&(Y=b.clone(),W[z]=Y,C.addEventListener("dispose",R)),b=Y}if(b.visible=C.visible,b.wireframe=C.wireframe,v===yi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=s.properties.get(b);B.light=I}return b}function T(E,C,I,v,b){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===yi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const z=e.update(E),W=E.material;if(Array.isArray(W)){const Y=z.groups;for(let q=0,re=Y.length;q<re;q++){const X=Y[q],se=W[X.materialIndex];if(se&&se.visible){const le=S(E,se,v,b);E.onBeforeShadow(s,E,C,I,z,le,X),s.renderBufferDirect(I,null,z,le,E,X),E.onAfterShadow(s,E,C,I,z,le,X)}}}else if(W.visible){const Y=S(E,W,v,b);E.onBeforeShadow(s,E,C,I,z,Y,null),s.renderBufferDirect(I,null,z,Y,E,null),E.onAfterShadow(s,E,C,I,z,Y,null)}}const B=E.children;for(let z=0,W=B.length;z<W;z++)T(B[z],C,I,v,b)}function R(E){E.target.removeEventListener("dispose",R);for(const I in l){const v=l[I],b=E.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const yv={[xc]:gc,[_c]:yc,[vc]:Mc,[Gs]:bc,[gc]:xc,[yc]:_c,[Mc]:vc,[bc]:Gs};function Mv(s,e){function t(){let N=!1;const ue=new at;let ae=null;const oe=new at(0,0,0,0);return{setMask:function(te){ae!==te&&!N&&(s.colorMask(te,te,te,te),ae=te)},setLocked:function(te){N=te},setClear:function(te,$,ge,Oe,St){St===!0&&(te*=Oe,$*=Oe,ge*=Oe),ue.set(te,$,ge,Oe),oe.equals(ue)===!1&&(s.clearColor(te,$,ge,Oe),oe.copy(ue))},reset:function(){N=!1,ae=null,oe.set(-1,0,0,0)}}}function n(){let N=!1,ue=!1,ae=null,oe=null,te=null;return{setReversed:function($){if(ue!==$){const ge=e.get("EXT_clip_control");$?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ue=$;const Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return ue},setTest:function($){$?Q(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function($){ae!==$&&!N&&(s.depthMask($),ae=$)},setFunc:function($){if(ue&&($=yv[$]),oe!==$){switch($){case xc:s.depthFunc(s.NEVER);break;case gc:s.depthFunc(s.ALWAYS);break;case _c:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case vc:s.depthFunc(s.EQUAL);break;case bc:s.depthFunc(s.GEQUAL);break;case yc:s.depthFunc(s.GREATER);break;case Mc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=$}},setLocked:function($){N=$},setClear:function($){te!==$&&(ue&&($=1-$),s.clearDepth($),te=$)},reset:function(){N=!1,ae=null,oe=null,te=null,ue=!1}}}function i(){let N=!1,ue=null,ae=null,oe=null,te=null,$=null,ge=null,Oe=null,St=null;return{setTest:function(ut){N||(ut?Q(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(ut){ue!==ut&&!N&&(s.stencilMask(ut),ue=ut)},setFunc:function(ut,ti,Gn){(ae!==ut||oe!==ti||te!==Gn)&&(s.stencilFunc(ut,ti,Gn),ae=ut,oe=ti,te=Gn)},setOp:function(ut,ti,Gn){($!==ut||ge!==ti||Oe!==Gn)&&(s.stencilOp(ut,ti,Gn),$=ut,ge=ti,Oe=Gn)},setLocked:function(ut){N=ut},setClear:function(ut){St!==ut&&(s.clearStencil(ut),St=ut)},reset:function(){N=!1,ue=null,ae=null,oe=null,te=null,$=null,ge=null,Oe=null,St=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,g=!1,x=null,p=null,y=null,S=null,T=null,R=null,E=null,C=new Be(0,0,0),I=0,v=!1,b=null,L=null,B=null,z=null,W=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,re=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=re>=2);let se=null,le={};const Te=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),dt=new at().fromArray(Te),vt=new at().fromArray(tt);function bt(N,ue,ae,oe){const te=new Uint8Array(4),$=s.createTexture();s.bindTexture(N,$),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ge=0;ge<ae;ge++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(ue+ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return $}const j={};j[s.TEXTURE_2D]=bt(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=bt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=bt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=bt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(Gs),Ze(!1),Je(lh),Q(s.CULL_FACE),Tt(Ei);function Q(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function xe(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function ze(N,ue){return d[N]!==ue?(s.bindFramebuffer(N,ue),d[N]=ue,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ue),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function Se(N,ue){let ae=f,oe=!1;if(N){ae=u.get(ue),ae===void 0&&(ae=[],u.set(ue,ae));const te=N.textures;if(ae.length!==te.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let $=0,ge=te.length;$<ge;$++)ae[$]=s.COLOR_ATTACHMENT0+$;ae.length=te.length,oe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,oe=!0);oe&&s.drawBuffers(ae)}function $e(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const $t={[Qi]:s.FUNC_ADD,[Cf]:s.FUNC_SUBTRACT,[If]:s.FUNC_REVERSE_SUBTRACT};$t[Pf]=s.MIN,$t[Lf]=s.MAX;const Ke={[Df]:s.ZERO,[Nf]:s.ONE,[Uf]:s.SRC_COLOR,[pc]:s.SRC_ALPHA,[Vf]:s.SRC_ALPHA_SATURATE,[kf]:s.DST_COLOR,[Of]:s.DST_ALPHA,[Ff]:s.ONE_MINUS_SRC_COLOR,[mc]:s.ONE_MINUS_SRC_ALPHA,[zf]:s.ONE_MINUS_DST_COLOR,[Bf]:s.ONE_MINUS_DST_ALPHA,[Gf]:s.CONSTANT_COLOR,[Hf]:s.ONE_MINUS_CONSTANT_COLOR,[Wf]:s.CONSTANT_ALPHA,[Xf]:s.ONE_MINUS_CONSTANT_ALPHA};function Tt(N,ue,ae,oe,te,$,ge,Oe,St,ut){if(N===Ei){g===!0&&(xe(s.BLEND),g=!1);return}if(g===!1&&(Q(s.BLEND),g=!0),N!==Rf){if(N!==x||ut!==v){if((p!==Qi||T!==Qi)&&(s.blendEquation(s.FUNC_ADD),p=Qi,T=Qi),ut)switch(N){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFunc(s.ONE,s.ONE);break;case dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xe("WebGLState: Invalid blending: ",N);break}else switch(N){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",N);break}y=null,S=null,R=null,E=null,C.set(0,0,0),I=0,x=N,v=ut}return}te=te||ue,$=$||ae,ge=ge||oe,(ue!==p||te!==T)&&(s.blendEquationSeparate($t[ue],$t[te]),p=ue,T=te),(ae!==y||oe!==S||$!==R||ge!==E)&&(s.blendFuncSeparate(Ke[ae],Ke[oe],Ke[$],Ke[ge]),y=ae,S=oe,R=$,E=ge),(Oe.equals(C)===!1||St!==I)&&(s.blendColor(Oe.r,Oe.g,Oe.b,St),C.copy(Oe),I=St),x=N,v=!1}function P(N,ue){N.side===An?xe(s.CULL_FACE):Q(s.CULL_FACE);let ae=N.side===_n;ue&&(ae=!ae),Ze(ae),N.blending===Bs&&N.transparent===!1?Tt(Ei):Tt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const oe=N.stencilWrite;o.setTest(oe),oe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){b!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),b=N)}function Je(N){N!==Tf?(Q(s.CULL_FACE),N!==L&&(N===lh?s.cullFace(s.BACK):N===Af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),L=N}function yt(N){N!==B&&(q&&s.lineWidth(N),B=N)}function ve(N,ue,ae){N?(Q(s.POLYGON_OFFSET_FILL),(z!==ue||W!==ae)&&(s.polygonOffset(ue,ae),z=ue,W=ae)):xe(s.POLYGON_OFFSET_FILL)}function Rt(N){N?Q(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function Ee(N){N===void 0&&(N=s.TEXTURE0+Y-1),se!==N&&(s.activeTexture(N),se=N)}function ke(N,ue,ae){ae===void 0&&(se===null?ae=s.TEXTURE0+Y-1:ae=se);let oe=le[ae];oe===void 0&&(oe={type:void 0,texture:void 0},le[ae]=oe),(oe.type!==N||oe.texture!==ue)&&(se!==ae&&(s.activeTexture(ae),se=ae),s.bindTexture(N,ue||j[N]),oe.type=N,oe.texture=ue)}function A(){const N=le[se];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function K(){try{s.texSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function J(){try{s.texSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function de(){try{s.texStorage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Ae(){try{s.texStorage3D(...arguments)}catch(N){N("WebGLState:",N)}}function be(){try{s.texImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function ee(){try{s.texImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function ie(N){dt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),dt.copy(N))}function De(N){vt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),vt.copy(N))}function Ce(N,ue){let ae=l.get(ue);ae===void 0&&(ae=new WeakMap,l.set(ue,ae));let oe=ae.get(N);oe===void 0&&(oe=s.getUniformBlockIndex(ue,N.name),ae.set(N,oe))}function pe(N,ue){const oe=l.get(ue).get(N);c.get(ue)!==oe&&(s.uniformBlockBinding(ue,oe,N.__bindingPointIndex),c.set(ue,oe))}function Ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},se=null,le={},d={},u=new WeakMap,f=[],m=null,g=!1,x=null,p=null,y=null,S=null,T=null,R=null,E=null,C=new Be(0,0,0),I=0,v=!1,b=null,L=null,B=null,z=null,W=null,dt.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:xe,bindFramebuffer:ze,drawBuffers:Se,useProgram:$e,setBlending:Tt,setMaterial:P,setFlipSided:Ze,setCullFace:Je,setLineWidth:yt,setPolygonOffset:ve,setScissorTest:Rt,activeTexture:Ee,bindTexture:ke,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:k,texImage2D:be,texImage3D:ee,updateUBOMapping:Ce,uniformBlockBinding:pe,texStorage2D:de,texStorage3D:Ae,texSubImage2D:K,texSubImage3D:J,compressedTexSubImage2D:H,compressedTexSubImage3D:ye,scissor:ie,viewport:De,reset:Ue}}function Sv(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,_){return f?new OffscreenCanvas(A,_):Gr("canvas")}function g(A,_,k){let K=1;const J=ke(A);if((J.width>k||J.height>k)&&(K=k/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const H=Math.floor(K*J.width),ye=Math.floor(K*J.height);d===void 0&&(d=m(H,ye));const de=_?m(H,ye):d;return de.width=H,de.height=ye,de.getContext("2d").drawImage(A,0,0,H,ye),Me("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+H+"x"+ye+")."),de}else return"data"in A&&Me("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function x(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(A,_,k,K,J=!1){if(A!==null){if(s[A]!==void 0)return s[A];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let H=_;if(_===s.RED&&(k===s.FLOAT&&(H=s.R32F),k===s.HALF_FLOAT&&(H=s.R16F),k===s.UNSIGNED_BYTE&&(H=s.R8)),_===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(H=s.R8UI),k===s.UNSIGNED_SHORT&&(H=s.R16UI),k===s.UNSIGNED_INT&&(H=s.R32UI),k===s.BYTE&&(H=s.R8I),k===s.SHORT&&(H=s.R16I),k===s.INT&&(H=s.R32I)),_===s.RG&&(k===s.FLOAT&&(H=s.RG32F),k===s.HALF_FLOAT&&(H=s.RG16F),k===s.UNSIGNED_BYTE&&(H=s.RG8)),_===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(H=s.RG8UI),k===s.UNSIGNED_SHORT&&(H=s.RG16UI),k===s.UNSIGNED_INT&&(H=s.RG32UI),k===s.BYTE&&(H=s.RG8I),k===s.SHORT&&(H=s.RG16I),k===s.INT&&(H=s.RG32I)),_===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(H=s.RGB8UI),k===s.UNSIGNED_SHORT&&(H=s.RGB16UI),k===s.UNSIGNED_INT&&(H=s.RGB32UI),k===s.BYTE&&(H=s.RGB8I),k===s.SHORT&&(H=s.RGB16I),k===s.INT&&(H=s.RGB32I)),_===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),k===s.UNSIGNED_INT&&(H=s.RGBA32UI),k===s.BYTE&&(H=s.RGBA8I),k===s.SHORT&&(H=s.RGBA16I),k===s.INT&&(H=s.RGBA32I)),_===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),_===s.RGBA){const ye=J?to:it.getTransfer(K);k===s.FLOAT&&(H=s.RGBA32F),k===s.HALF_FLOAT&&(H=s.RGBA16F),k===s.UNSIGNED_BYTE&&(H=ye===pt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function T(A,_){let k;return A?_===null||_===os||_===Or?k=s.DEPTH24_STENCIL8:_===jn?k=s.DEPTH32F_STENCIL8:_===Fr&&(k=s.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===os||_===Or?k=s.DEPTH_COMPONENT24:_===jn?k=s.DEPTH_COMPONENT32F:_===Fr&&(k=s.DEPTH_COMPONENT16),k}function R(A,_){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==on?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function E(A){const _=A.target;_.removeEventListener("dispose",E),I(_),_.isVideoTexture&&h.delete(_)}function C(A){const _=A.target;_.removeEventListener("dispose",C),b(_)}function I(A){const _=n.get(A);if(_.__webglInit===void 0)return;const k=A.source,K=u.get(k);if(K){const J=K[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(A),Object.keys(K).length===0&&u.delete(k)}n.remove(A)}function v(A){const _=n.get(A);s.deleteTexture(_.__webglTexture);const k=A.source,K=u.get(k);delete K[_.__cacheKey],a.memory.textures--}function b(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let J=0;J<_.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(_.__webglFramebuffer[K][J]);else s.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)s.deleteFramebuffer(_.__webglFramebuffer[K]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=A.textures;for(let K=0,J=k.length;K<J;K++){const H=n.get(k[K]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(A)}let L=0;function B(){L=0}function z(){const A=L;return A>=i.maxTextures&&Me("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),L+=1,A}function W(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function Y(A,_){const k=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const K=A.image;if(K===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,A,_);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+_)}function q(A,_){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){j(k,A,_);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+_)}function re(A,_){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){j(k,A,_);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+_)}function X(A,_){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Q(k,A,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+_)}const se={[Xs]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[Qa]:s.MIRRORED_REPEAT},le={[cn]:s.NEAREST,[nu]:s.NEAREST_MIPMAP_NEAREST,[yr]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[za]:s.LINEAR_MIPMAP_NEAREST,[Si]:s.LINEAR_MIPMAP_LINEAR},Te={[op]:s.NEVER,[fp]:s.ALWAYS,[cp]:s.LESS,[fu]:s.LEQUAL,[lp]:s.EQUAL,[up]:s.GEQUAL,[hp]:s.GREATER,[dp]:s.NOTEQUAL};function tt(A,_){if(_.type===jn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===on||_.magFilter===za||_.magFilter===yr||_.magFilter===Si||_.minFilter===on||_.minFilter===za||_.minFilter===yr||_.minFilter===Si)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,se[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,se[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,se[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,le[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,le[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==yr&&_.minFilter!==Si||_.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function dt(A,_){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",E));const K=_.source;let J=u.get(K);J===void 0&&(J={},u.set(K,J));const H=W(_);if(H!==A.__cacheKey){J[H]===void 0&&(J[H]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[H].usedTimes++;const ye=J[A.__cacheKey];ye!==void 0&&(J[A.__cacheKey].usedTimes--,ye.usedTimes===0&&v(_)),A.__cacheKey=H,A.__webglTexture=J[H].texture}return k}function vt(A,_,k){return Math.floor(Math.floor(A/k)/_)}function bt(A,_,k,K){const H=A.updateRanges;if(H.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,k,K,_.data);else{H.sort((ee,ie)=>ee.start-ie.start);let ye=0;for(let ee=1;ee<H.length;ee++){const ie=H[ye],De=H[ee],Ce=ie.start+ie.count,pe=vt(De.start,_.width,4),Ue=vt(ie.start,_.width,4);De.start<=Ce+1&&pe===Ue&&vt(De.start+De.count-1,_.width,4)===pe?ie.count=Math.max(ie.count,De.start+De.count-ie.start):(++ye,H[ye]=De)}H.length=ye+1;const de=s.getParameter(s.UNPACK_ROW_LENGTH),Ae=s.getParameter(s.UNPACK_SKIP_PIXELS),be=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let ee=0,ie=H.length;ee<ie;ee++){const De=H[ee],Ce=Math.floor(De.start/4),pe=Math.ceil(De.count/4),Ue=Ce%_.width,N=Math.floor(Ce/_.width),ue=pe,ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ue),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Ue,N,ue,ae,k,K,_.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,de),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,be)}}function j(A,_,k){let K=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=s.TEXTURE_3D);const J=dt(A,_),H=_.source;t.bindTexture(K,A.__webglTexture,s.TEXTURE0+k);const ye=n.get(H);if(H.version!==ye.__version||J===!0){t.activeTexture(s.TEXTURE0+k);const de=it.getPrimaries(it.workingColorSpace),Ae=_.colorSpace===Bi?null:it.getPrimaries(_.colorSpace),be=_.colorSpace===Bi||de===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ee=g(_.image,!1,i.maxTextureSize);ee=Ee(_,ee);const ie=r.convert(_.format,_.colorSpace),De=r.convert(_.type);let Ce=S(_.internalFormat,ie,De,_.colorSpace,_.isVideoTexture);tt(K,_);let pe;const Ue=_.mipmaps,N=_.isVideoTexture!==!0,ue=ye.__version===void 0||J===!0,ae=H.dataReady,oe=R(_,ee);if(_.isDepthTexture)Ce=T(_.format===kr,_.type),ue&&(N?t.texStorage2D(s.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ee.width,ee.height,0,ie,De,null));else if(_.isDataTexture)if(Ue.length>0){N&&ue&&t.texStorage2D(s.TEXTURE_2D,oe,Ce,Ue[0].width,Ue[0].height);for(let te=0,$=Ue.length;te<$;te++)pe=Ue[te],N?ae&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,De,pe.data):t.texImage2D(s.TEXTURE_2D,te,Ce,pe.width,pe.height,0,ie,De,pe.data);_.generateMipmaps=!1}else N?(ue&&t.texStorage2D(s.TEXTURE_2D,oe,Ce,ee.width,ee.height),ae&&bt(_,ee,ie,De)):t.texImage2D(s.TEXTURE_2D,0,Ce,ee.width,ee.height,0,ie,De,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Ce,Ue[0].width,Ue[0].height,ee.depth);for(let te=0,$=Ue.length;te<$;te++)if(pe=Ue[te],_.format!==On)if(ie!==null)if(N){if(ae)if(_.layerUpdates.size>0){const ge=nd(pe.width,pe.height,_.format,_.type);for(const Oe of _.layerUpdates){const St=pe.data.subarray(Oe*ge/pe.data.BYTES_PER_ELEMENT,(Oe+1)*ge/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Oe,pe.width,pe.height,1,ie,St)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ee.depth,ie,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Ce,pe.width,pe.height,ee.depth,0,pe.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ee.depth,ie,De,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Ce,pe.width,pe.height,ee.depth,0,ie,De,pe.data)}else{N&&ue&&t.texStorage2D(s.TEXTURE_2D,oe,Ce,Ue[0].width,Ue[0].height);for(let te=0,$=Ue.length;te<$;te++)pe=Ue[te],_.format!==On?ie!==null?N?ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Ce,pe.width,pe.height,0,pe.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ae&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,De,pe.data):t.texImage2D(s.TEXTURE_2D,te,Ce,pe.width,pe.height,0,ie,De,pe.data)}else if(_.isDataArrayTexture)if(N){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Ce,ee.width,ee.height,ee.depth),ae)if(_.layerUpdates.size>0){const te=nd(ee.width,ee.height,_.format,_.type);for(const $ of _.layerUpdates){const ge=ee.data.subarray($*te/ee.data.BYTES_PER_ELEMENT,($+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,ie,De,ge)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,De,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,ie,De,ee.data);else if(_.isData3DTexture)N?(ue&&t.texStorage3D(s.TEXTURE_3D,oe,Ce,ee.width,ee.height,ee.depth),ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,De,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,ie,De,ee.data);else if(_.isFramebufferTexture){if(ue)if(N)t.texStorage2D(s.TEXTURE_2D,oe,Ce,ee.width,ee.height);else{let te=ee.width,$=ee.height;for(let ge=0;ge<oe;ge++)t.texImage2D(s.TEXTURE_2D,ge,Ce,te,$,0,ie,De,null),te>>=1,$>>=1}}else if(Ue.length>0){if(N&&ue){const te=ke(Ue[0]);t.texStorage2D(s.TEXTURE_2D,oe,Ce,te.width,te.height)}for(let te=0,$=Ue.length;te<$;te++)pe=Ue[te],N?ae&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ie,De,pe):t.texImage2D(s.TEXTURE_2D,te,Ce,ie,De,pe);_.generateMipmaps=!1}else if(N){if(ue){const te=ke(ee);t.texStorage2D(s.TEXTURE_2D,oe,Ce,te.width,te.height)}ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,De,ee)}else t.texImage2D(s.TEXTURE_2D,0,Ce,ie,De,ee);x(_)&&p(K),ye.__version=H.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Q(A,_,k){if(_.image.length!==6)return;const K=dt(A,_),J=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);const H=n.get(J);if(J.version!==H.__version||K===!0){t.activeTexture(s.TEXTURE0+k);const ye=it.getPrimaries(it.workingColorSpace),de=_.colorSpace===Bi?null:it.getPrimaries(_.colorSpace),Ae=_.colorSpace===Bi||ye===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const be=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ie=[];for(let $=0;$<6;$++)!be&&!ee?ie[$]=g(_.image[$],!0,i.maxCubemapSize):ie[$]=ee?_.image[$].image:_.image[$],ie[$]=Ee(_,ie[$]);const De=ie[0],Ce=r.convert(_.format,_.colorSpace),pe=r.convert(_.type),Ue=S(_.internalFormat,Ce,pe,_.colorSpace),N=_.isVideoTexture!==!0,ue=H.__version===void 0||K===!0,ae=J.dataReady;let oe=R(_,De);tt(s.TEXTURE_CUBE_MAP,_);let te;if(be){N&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ue,De.width,De.height);for(let $=0;$<6;$++){te=ie[$].mipmaps;for(let ge=0;ge<te.length;ge++){const Oe=te[ge];_.format!==On?Ce!==null?N?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,Oe.width,Oe.height,Ce,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,Ue,Oe.width,Oe.height,0,Oe.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,Oe.width,Oe.height,Ce,pe,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,Ue,Oe.width,Oe.height,0,Ce,pe,Oe.data)}}}else{if(te=_.mipmaps,N&&ue){te.length>0&&oe++;const $=ke(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ue,$.width,$.height)}for(let $=0;$<6;$++)if(ee){N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ie[$].width,ie[$].height,Ce,pe,ie[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ue,ie[$].width,ie[$].height,0,Ce,pe,ie[$].data);for(let ge=0;ge<te.length;ge++){const St=te[ge].image[$].image;N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,St.width,St.height,Ce,pe,St.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,Ue,St.width,St.height,0,Ce,pe,St.data)}}else{N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,pe,ie[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ue,Ce,pe,ie[$]);for(let ge=0;ge<te.length;ge++){const Oe=te[ge];N?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,Ce,pe,Oe.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,Ue,Ce,pe,Oe.image[$])}}}x(_)&&p(s.TEXTURE_CUBE_MAP),H.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function xe(A,_,k,K,J,H){const ye=r.convert(k.format,k.colorSpace),de=r.convert(k.type),Ae=S(k.internalFormat,ye,de,k.colorSpace),be=n.get(_),ee=n.get(k);if(ee.__renderTarget=_,!be.__hasExternalTextures){const ie=Math.max(1,_.width>>H),De=Math.max(1,_.height>>H);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,H,Ae,ie,De,_.depth,0,ye,de,null):t.texImage2D(J,H,Ae,ie,De,0,ye,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),ve(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,ee.__webglTexture,0,yt(_)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,ee.__webglTexture,H),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(A,_,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){const K=_.depthTexture,J=K&&K.isDepthTexture?K.type:null,H=T(_.stencilBuffer,J),ye=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=yt(_);ve(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,H,_.width,_.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,H,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,H,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,A)}else{const K=_.textures;for(let J=0;J<K.length;J++){const H=K[J],ye=r.convert(H.format,H.colorSpace),de=r.convert(H.type),Ae=S(H.internalFormat,ye,de,H.colorSpace),be=yt(_);k&&ve(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,Ae,_.width,_.height):ve(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,Ae,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const J=K.__webglTexture,H=yt(_);if(_.depthTexture.format===Br)ve(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(_.depthTexture.format===kr)ve(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function $e(A){const _=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=K}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const K=A.texture.mipmaps;K&&K.length>0?Se(_.__webglFramebuffer[0],A):Se(_.__webglFramebuffer,A)}else if(k){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=s.createRenderbuffer(),ze(_.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,H)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),ze(_.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,H)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(A,_,k){const K=n.get(A);_!==void 0&&xe(K.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&$e(A)}function Ke(A){const _=A.texture,k=n.get(A),K=n.get(_);A.addEventListener("dispose",C);const J=A.textures,H=A.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=_.version,a.memory.textures++),H){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)k.__webglFramebuffer[de][Ae]=s.createFramebuffer()}else k.__webglFramebuffer[de]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)k.__webglFramebuffer[de]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ye)for(let de=0,Ae=J.length;de<Ae;de++){const be=n.get(J[de]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&ve(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<J.length;de++){const Ae=J[de];k.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[de]);const be=r.convert(Ae.format,Ae.colorSpace),ee=r.convert(Ae.type),ie=S(Ae.internalFormat,be,ee,Ae.colorSpace,A.isXRRenderTarget===!0),De=yt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ie,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,k.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),tt(s.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)xe(k.__webglFramebuffer[de][Ae],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae);else xe(k.__webglFramebuffer[de],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let de=0,Ae=J.length;de<Ae;de++){const be=J[de],ee=n.get(be);let ie=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),tt(ie,be),xe(k.__webglFramebuffer,A,be,s.COLOR_ATTACHMENT0+de,ie,0),x(be)&&p(ie)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,K.__webglTexture),tt(de,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)xe(k.__webglFramebuffer[Ae],A,_,s.COLOR_ATTACHMENT0,de,Ae);else xe(k.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,de,0);x(_)&&p(de),t.unbindTexture()}A.depthBuffer&&$e(A)}function Tt(A){const _=A.textures;for(let k=0,K=_.length;k<K;k++){const J=_[k];if(x(J)){const H=y(A),ye=n.get(J).__webglTexture;t.bindTexture(H,ye),p(H),t.unbindTexture()}}}const P=[],Ze=[];function Je(A){if(A.samples>0){if(ve(A)===!1){const _=A.textures,k=A.width,K=A.height;let J=s.COLOR_BUFFER_BIT;const H=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(A),de=_.length>1;if(de)for(let be=0;be<_.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let be=0;be<_.length;be++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[be]);const ee=n.get(_[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,J,s.NEAREST),c===!0&&(P.length=0,Ze.length=0,P.push(s.COLOR_ATTACHMENT0+be),A.depthBuffer&&A.resolveDepthBuffer===!1&&(P.push(H),Ze.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ze)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<_.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ye.__webglColorRenderbuffer[be]);const ee=n.get(_[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function yt(A){return Math.min(i.maxSamples,A.samples)}function ve(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Rt(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ee(A,_){const k=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==dn&&k!==Bi&&(it.getTransfer(k)===pt?(K!==On||J!==ci)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",k)),_}function ke(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=re,this.setTextureCube=X,this.rebindTextures=$t,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ve}function wv(s,e){function t(n,i=Bi){let r;const a=it.getTransfer(i);if(n===ci)return s.UNSIGNED_BYTE;if(n===wl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===El)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return s.BYTE;if(n===su)return s.SHORT;if(n===Fr)return s.UNSIGNED_SHORT;if(n===Sl)return s.INT;if(n===os)return s.UNSIGNED_INT;if(n===jn)return s.FLOAT;if(n===nr)return s.HALF_FLOAT;if(n===ou)return s.ALPHA;if(n===cu)return s.RGB;if(n===On)return s.RGBA;if(n===Br)return s.DEPTH_COMPONENT;if(n===kr)return s.DEPTH_STENCIL;if(n===Tl)return s.RED;if(n===Al)return s.RED_INTEGER;if(n===Rl)return s.RG;if(n===Cl)return s.RG_INTEGER;if(n===Il)return s.RGBA_INTEGER;if(n===Va||n===Ga||n===Ha||n===Wa)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===Ac||n===Rc||n===Cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Pc||n===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ic||n===Pc)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kc||n===Yc||n===jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Kc)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===Zc||n===Jc||n===Qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Av{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Eu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:Ev,fragmentShader:Tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rv extends ps{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null;const g=typeof XRWebGLBinding<"u",x=new Av,p={},y=t.getContextAttributes();let S=null,T=null;const R=[],E=[],C=new He;let I=null;const v=new gn;v.viewport=new at;const b=new gn;b.viewport=new at;const L=[v,b],B=new Dm;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=R[j];return Q===void 0&&(Q=new Yo,R[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=R[j];return Q===void 0&&(Q=new Yo,R[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=R[j];return Q===void 0&&(Q=new Yo,R[j]=Q),Q.getHandSpace()};function Y(j){const Q=E.indexOf(j.inputSource);if(Q===-1)return;const xe=R[Q];xe!==void 0&&(xe.update(j.inputSource,j.frame,l||a),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",re);for(let j=0;j<R.length;j++){const Q=E[j];Q!==null&&(E[j]=null,R[j].disconnect(Q))}z=null,W=null,x.reset();for(const j in p)delete p[j];e.setRenderTarget(S),f=null,u=null,d=null,i=null,T=null,bt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",q),i.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ze=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?kr:Br,ze=y.stencil?Or:os);const $e={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($e),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new cs(u.textureWidth,u.textureHeight,{format:On,type:ci,depthTexture:new wu(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new cs(f.framebufferWidth,f.framebufferHeight,{format:On,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),bt.setContext(i),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(j){for(let Q=0;Q<j.removed.length;Q++){const xe=j.removed[Q],ze=E.indexOf(xe);ze>=0&&(E[ze]=null,R[ze].disconnect(xe))}for(let Q=0;Q<j.added.length;Q++){const xe=j.added[Q];let ze=E.indexOf(xe);if(ze===-1){for(let $e=0;$e<R.length;$e++)if($e>=E.length){E.push(xe),ze=$e;break}else if(E[$e]===null){E[$e]=xe,ze=$e;break}if(ze===-1)break}const Se=R[ze];Se&&Se.connect(xe)}}const X=new U,se=new U;function le(j,Q,xe){X.setFromMatrixPosition(Q.matrixWorld),se.setFromMatrixPosition(xe.matrixWorld);const ze=X.distanceTo(se),Se=Q.projectionMatrix.elements,$e=xe.projectionMatrix.elements,$t=Se[14]/(Se[10]-1),Ke=Se[14]/(Se[10]+1),Tt=(Se[9]+1)/Se[5],P=(Se[9]-1)/Se[5],Ze=(Se[8]-1)/Se[0],Je=($e[8]+1)/$e[0],yt=$t*Ze,ve=$t*Je,Rt=ze/(-Ze+Je),Ee=Rt*-Ze;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ee),j.translateZ(Rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Se[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ke=$t+Rt,A=Ke+Rt,_=yt-Ee,k=ve+(ze-Ee),K=Tt*Ke/A*ke,J=P*Ke/A*ke;j.projectionMatrix.makePerspective(_,k,K,J,ke,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Te(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Q=j.near,xe=j.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),B.near=b.near=v.near=Q,B.far=b.far=v.far=xe,(z!==B.near||W!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),z=B.near,W=B.far),B.layers.mask=j.layers.mask|6,v.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;const ze=j.parent,Se=B.cameras;Te(B,ze);for(let $e=0;$e<Se.length;$e++)Te(Se[$e],ze);Se.length===2?le(B,v,b):B.projectionMatrix.copy(v.projectionMatrix),tt(j,B,ze)};function tt(j,Q,xe){xe===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(j){return p[j]};let dt=null;function vt(j,Q){if(h=Q.getViewerPose(l||a),m=Q,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let ze=!1;xe.length!==B.cameras.length&&(B.cameras.length=0,ze=!0);for(let Ke=0;Ke<xe.length;Ke++){const Tt=xe[Ke];let P=null;if(f!==null)P=f.getViewport(Tt);else{const Je=d.getViewSubImage(u,Tt);P=Je.viewport,Ke===0&&(e.setRenderTargetTextures(T,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(T))}let Ze=L[Ke];Ze===void 0&&(Ze=new gn,Ze.layers.enable(Ke),Ze.viewport=new at,L[Ke]=Ze),Ze.matrix.fromArray(Tt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Tt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(P.x,P.y,P.width,P.height),Ke===0&&(B.matrix.copy(Ze.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ze===!0&&B.cameras.push(Ze)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const Ke=d.getDepthInformation(xe[0]);Ke&&Ke.isValid&&Ke.texture&&x.init(Ke,i.renderState)}if(Se&&Se.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let Ke=0;Ke<xe.length;Ke++){const Tt=xe[Ke].camera;if(Tt){let P=p[Tt];P||(P=new Eu,p[Tt]=P);const Ze=d.getCameraImage(Tt);P.sourceTexture=Ze}}}}for(let xe=0;xe<R.length;xe++){const ze=E[xe],Se=R[xe];ze!==null&&Se!==void 0&&Se.update(ze,Q,l||a)}dt&&dt(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const bt=new Pu;bt.setAnimationLoop(vt),this.setAnimationLoop=function(j){dt=j},this.dispose=function(){}}}const $i=new li,Cv=new Ve;function Iv(s,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,vu(s)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,y,S,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),d(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p)):p.isMeshStandardMaterial?(r(x,p),u(x,p),p.isMeshPhysicalMaterial&&f(x,p,T)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),g(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?c(x,p,y,S):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===_n&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===_n&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,T=y.envMapRotation;S&&(x.envMap.value=S,$i.copy(T),$i.x*=-1,$i.y*=-1,$i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),x.envMapRotation.value.setFromMatrix4(Cv.makeRotationFromEuler($i)),x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,y,S){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=S*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function d(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function u(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){const y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pv(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const T=S.program;n.uniformBlockBinding(y,T)}function l(y,S){let T=i[y.id];T===void 0&&(m(y),T=h(y),i[y.id]=T,y.addEventListener("dispose",x));const R=S.program;n.updateUBOMapping(y,R);const E=e.render.frame;r[y.id]!==E&&(u(y),r[y.id]=E)}function h(y){const S=d();y.__bindingPointIndex=S;const T=s.createBuffer(),R=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,R,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const S=i[y.id],T=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,C=T.length;E<C;E++){const I=Array.isArray(T[E])?T[E]:[T[E]];for(let v=0,b=I.length;v<b;v++){const L=I[v];if(f(L,E,v,R)===!0){const B=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Y=0;Y<z.length;Y++){const q=z[Y],re=g(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,B+W,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,W),W+=re.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,S,T,R){const E=y.value,C=S+"_"+T;if(R[C]===void 0)return typeof E=="number"||typeof E=="boolean"?R[C]=E:R[C]=E.clone(),!0;{const I=R[C];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return R[C]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(y){const S=y.uniforms;let T=0;const R=16;for(let C=0,I=S.length;C<I;C++){const v=Array.isArray(S[C])?S[C]:[S[C]];for(let b=0,L=v.length;b<L;b++){const B=v[b],z=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Y=z.length;W<Y;W++){const q=z[W],re=g(q),X=T%R,se=X%re.boundary,le=X+se;T+=se,le!==0&&R-le<re.storage&&(T+=R-le),B.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=re.storage}}}const E=T%R;return E>0&&(T+=R-E),y.__size=T,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",y),S}function x(y){const S=y.target;S.removeEventListener("dispose",x);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}const Lv=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let vi=null;function Dv(){return vi===null&&(vi=new Fl(Lv,32,32,Rl,nr),vi.minFilter=on,vi.magFilter=on,vi.wrapS=ri,vi.wrapT=ri,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class Td{constructor(e={}){const{canvas:t=mp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Set([Il,Cl,Al]),g=new Set([ci,os,Fr,Or,wl,El]),x=new Uint32Array(4),p=new Int32Array(4);let y=null,S=null;const T=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1;this._outputColorSpace=zt;let I=0,v=0,b=null,L=-1,B=null;const z=new at,W=new at;let Y=null;const q=new Be(0);let re=0,X=t.width,se=t.height,le=1,Te=null,tt=null;const dt=new at(0,0,X,se),vt=new at(0,0,X,se);let bt=!1;const j=new Bl;let Q=!1,xe=!1;const ze=new Ve,Se=new U,$e=new at,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Tt(){return b===null?le:1}let P=n;function Ze(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",ge,!1),P===null){const F="webgl2";if(P=Ze(F,M),P===null)throw Ze(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let Je,yt,ve,Rt,Ee,ke,A,_,k,K,J,H,ye,de,Ae,be,ee,ie,De,Ce,pe,Ue,N,ue;function ae(){Je=new Gg(P),Je.init(),Ue=new wv(P,Je),yt=new Dg(P,Je,e,Ue),ve=new Mv(P,Je),yt.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),Rt=new Xg(P),Ee=new lv,ke=new Sv(P,Je,ve,Ee,yt,Ue,Rt),A=new Ug(E),_=new Vg(E),k=new jm(P),N=new Pg(P,k),K=new Hg(P,k,Rt,N),J=new Kg(P,K,k,Rt),De=new qg(P,yt,ke),be=new Ng(Ee),H=new cv(E,A,_,Je,yt,N,be),ye=new Iv(E,Ee),de=new dv,Ae=new gv(Je),ie=new Ig(E,A,_,ve,J,f,c),ee=new bv(E,J,yt),ue=new Pv(P,Rt,yt,ve),Ce=new Lg(P,Je,Rt),pe=new Wg(P,Je,Rt),Rt.programs=H.programs,E.capabilities=yt,E.extensions=Je,E.properties=Ee,E.renderLists=de,E.shadowMap=ee,E.state=ve,E.info=Rt}ae();const oe=new Rv(E,P);this.xr=oe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(M){M!==void 0&&(le=M,this.setSize(X,se,!1))},this.getSize=function(M){return M.set(X,se)},this.setSize=function(M,F,V=!0){if(oe.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,se=F,t.width=Math.floor(M*le),t.height=Math.floor(F*le),V===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(X*le,se*le).floor()},this.setDrawingBufferSize=function(M,F,V){X=M,se=F,le=V,t.width=Math.floor(M*V),t.height=Math.floor(F*V),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(dt)},this.setViewport=function(M,F,V,G){M.isVector4?dt.set(M.x,M.y,M.z,M.w):dt.set(M,F,V,G),ve.viewport(z.copy(dt).multiplyScalar(le).round())},this.getScissor=function(M){return M.copy(vt)},this.setScissor=function(M,F,V,G){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,F,V,G),ve.scissor(W.copy(vt).multiplyScalar(le).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(M){ve.setScissorTest(bt=M)},this.setOpaqueSort=function(M){Te=M},this.setTransparentSort=function(M){tt=M},this.getClearColor=function(M){return M.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,V=!0){let G=0;if(M){let O=!1;if(b!==null){const ne=b.texture.format;O=m.has(ne)}if(O){const ne=b.texture.type,fe=g.has(ne),_e=ie.getClearColor(),me=ie.getClearAlpha(),Le=_e.r,Ne=_e.g,we=_e.b;fe?(x[0]=Le,x[1]=Ne,x[2]=we,x[3]=me,P.clearBufferuiv(P.COLOR,0,x)):(p[0]=Le,p[1]=Ne,p[2]=we,p[3]=me,P.clearBufferiv(P.COLOR,0,p))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ie.dispose(),de.dispose(),Ae.dispose(),Ee.dispose(),A.dispose(),_.dispose(),J.dispose(),N.dispose(),ue.dispose(),H.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ql),oe.removeEventListener("sessionend",eh),Hi.stop()};function te(M){M.preventDefault(),io("WebGLRenderer: Context Lost."),C=!0}function $(){io("WebGLRenderer: Context Restored."),C=!1;const M=Rt.autoReset,F=ee.enabled,V=ee.autoUpdate,G=ee.needsUpdate,O=ee.type;ae(),Rt.autoReset=M,ee.enabled=F,ee.autoUpdate=V,ee.needsUpdate=G,ee.type=O}function ge(M){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const F=M.target;F.removeEventListener("dispose",Oe),St(F)}function St(M){ut(M),Ee.remove(M)}function ut(M){const F=Ee.get(M).programs;F!==void 0&&(F.forEach(function(V){H.releaseProgram(V)}),M.isShaderMaterial&&H.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,V,G,O,ne){F===null&&(F=$t);const fe=O.isMesh&&O.matrixWorld.determinant()<0,_e=cf(M,F,V,G,O);ve.setMaterial(G,fe);let me=V.index,Le=1;if(G.wireframe===!0){if(me=K.getWireframeAttribute(V),me===void 0)return;Le=2}const Ne=V.drawRange,we=V.attributes.position;let Qe=Ne.start*Le,ft=(Ne.start+Ne.count)*Le;ne!==null&&(Qe=Math.max(Qe,ne.start*Le),ft=Math.min(ft,(ne.start+ne.count)*Le)),me!==null?(Qe=Math.max(Qe,0),ft=Math.min(ft,me.count)):we!=null&&(Qe=Math.max(Qe,0),ft=Math.min(ft,we.count));const Dt=ft-Qe;if(Dt<0||Dt===1/0)return;N.setup(O,G,_e,V,me);let Nt,xt=Ce;if(me!==null&&(Nt=k.get(me),xt=pe,xt.setIndex(Nt)),O.isMesh)G.wireframe===!0?(ve.setLineWidth(G.wireframeLinewidth*Tt()),xt.setMode(P.LINES)):xt.setMode(P.TRIANGLES);else if(O.isLine){let Re=G.linewidth;Re===void 0&&(Re=1),ve.setLineWidth(Re*Tt()),O.isLineSegments?xt.setMode(P.LINES):O.isLineLoop?xt.setMode(P.LINE_LOOP):xt.setMode(P.LINE_STRIP)}else O.isPoints?xt.setMode(P.POINTS):O.isSprite&&xt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Hr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))xt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Re=O._multiDrawStarts,Ct=O._multiDrawCounts,st=O._multiDrawCount,yn=me?k.get(me).bytesPerElement:1,gs=Ee.get(G).currentProgram.getUniforms();for(let Mn=0;Mn<st;Mn++)gs.setValue(P,"_gl_DrawID",Mn),xt.render(Re[Mn]/yn,Ct[Mn])}else if(O.isInstancedMesh)xt.renderInstances(Qe,Dt,O.count);else if(V.isInstancedBufferGeometry){const Re=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ct=Math.min(V.instanceCount,Re);xt.renderInstances(Qe,Dt,Ct)}else xt.render(Qe,Dt)};function ti(M,F,V){M.transparent===!0&&M.side===An&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,ra(M,F,V),M.side=Ai,M.needsUpdate=!0,ra(M,F,V),M.side=An):ra(M,F,V)}this.compile=function(M,F,V=null){V===null&&(V=M),S=Ae.get(V),S.init(F),R.push(S),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),M!==V&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),S.setupLights();const G=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const _e=ne[fe];ti(_e,V,O),G.add(_e)}else ti(ne,V,O),G.add(ne)}),S=R.pop(),G},this.compileAsync=function(M,F,V=null){const G=this.compile(M,F,V);return new Promise(O=>{function ne(){if(G.forEach(function(fe){Ee.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){O(M);return}setTimeout(ne,10)}Je.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Gn=null;function of(M){Gn&&Gn(M)}function Ql(){Hi.stop()}function eh(){Hi.start()}const Hi=new Pu;Hi.setAnimationLoop(of),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(M){Gn=M,oe.setAnimationLoop(M),M===null?Hi.stop():Hi.start()},oe.addEventListener("sessionstart",Ql),oe.addEventListener("sessionend",eh),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,F,b),S=Ae.get(M,R.length),S.init(F),R.push(S),ze.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(ze,ai,F.reversedDepth),xe=this.localClippingEnabled,Q=be.init(this.clippingPlanes,xe),y=de.get(M,T.length),y.init(),T.push(y),oe.enabled===!0&&oe.isPresenting===!0){const ne=E.xr.getDepthSensingMesh();ne!==null&&wo(ne,F,-1/0,E.sortObjects)}wo(M,F,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(Te,tt),Ke=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ke&&ie.addToRenderList(y,M),this.info.render.frame++,Q===!0&&be.beginShadows();const V=S.state.shadowsArray;ee.render(V,M,F),Q===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,O=y.transmissive;if(S.setupLights(),F.isArrayCamera){const ne=F.cameras;if(O.length>0)for(let fe=0,_e=ne.length;fe<_e;fe++){const me=ne[fe];nh(G,O,M,me)}Ke&&ie.render(M);for(let fe=0,_e=ne.length;fe<_e;fe++){const me=ne[fe];th(y,M,me,me.viewport)}}else O.length>0&&nh(G,O,M,F),Ke&&ie.render(M),th(y,M,F);b!==null&&v===0&&(ke.updateMultisampleRenderTarget(b),ke.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(E,M,F),N.resetDefaultState(),L=-1,B=null,R.pop(),R.length>0?(S=R[R.length-1],Q===!0&&be.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function wo(M,F,V,G){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){G&&$e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ze);const fe=J.update(M),_e=M.material;_e.visible&&y.push(M,fe,_e,V,$e.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){const fe=J.update(M),_e=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$e.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),$e.copy(fe.boundingSphere.center)),$e.applyMatrix4(M.matrixWorld).applyMatrix4(ze)),Array.isArray(_e)){const me=fe.groups;for(let Le=0,Ne=me.length;Le<Ne;Le++){const we=me[Le],Qe=_e[we.materialIndex];Qe&&Qe.visible&&y.push(M,fe,Qe,V,$e.z,we)}}else _e.visible&&y.push(M,fe,_e,V,$e.z,null)}}const ne=M.children;for(let fe=0,_e=ne.length;fe<_e;fe++)wo(ne[fe],F,V,G)}function th(M,F,V,G){const{opaque:O,transmissive:ne,transparent:fe}=M;S.setupLightsView(V),Q===!0&&be.setGlobalState(E.clippingPlanes,V),G&&ve.viewport(z.copy(G)),O.length>0&&sa(O,F,V),ne.length>0&&sa(ne,F,V),fe.length>0&&sa(fe,F,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function nh(M,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[G.id]===void 0&&(S.state.transmissionRenderTarget[G.id]=new cs(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?nr:ci,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ne=S.state.transmissionRenderTarget[G.id],fe=G.viewport||z;ne.setSize(fe.z*E.transmissionResolutionScale,fe.w*E.transmissionResolutionScale);const _e=E.getRenderTarget(),me=E.getActiveCubeFace(),Le=E.getActiveMipmapLevel();E.setRenderTarget(ne),E.getClearColor(q),re=E.getClearAlpha(),re<1&&E.setClearColor(16777215,.5),E.clear(),Ke&&ie.render(V);const Ne=E.toneMapping;E.toneMapping=Vi;const we=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),Q===!0&&be.setGlobalState(E.clippingPlanes,G),sa(M,V,G),ke.updateMultisampleRenderTarget(ne),ke.updateRenderTargetMipmap(ne),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ft=0,Dt=F.length;ft<Dt;ft++){const Nt=F[ft],{object:xt,geometry:Re,material:Ct,group:st}=Nt;if(Ct.side===An&&xt.layers.test(G.layers)){const yn=Ct.side;Ct.side=_n,Ct.needsUpdate=!0,ih(xt,V,G,Re,Ct,st),Ct.side=yn,Ct.needsUpdate=!0,Qe=!0}}Qe===!0&&(ke.updateMultisampleRenderTarget(ne),ke.updateRenderTargetMipmap(ne))}E.setRenderTarget(_e,me,Le),E.setClearColor(q,re),we!==void 0&&(G.viewport=we),E.toneMapping=Ne}function sa(M,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ne=M.length;O<ne;O++){const fe=M[O],{object:_e,geometry:me,group:Le}=fe;let Ne=fe.material;Ne.allowOverride===!0&&G!==null&&(Ne=G),_e.layers.test(V.layers)&&ih(_e,F,V,me,Ne,Le)}}function ih(M,F,V,G,O,ne){M.onBeforeRender(E,F,V,G,O,ne),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(E,F,V,G,M,ne),O.transparent===!0&&O.side===An&&O.forceSinglePass===!1?(O.side=_n,O.needsUpdate=!0,E.renderBufferDirect(V,F,G,O,M,ne),O.side=Ai,O.needsUpdate=!0,E.renderBufferDirect(V,F,G,O,M,ne),O.side=An):E.renderBufferDirect(V,F,G,O,M,ne),M.onAfterRender(E,F,V,G,O,ne)}function ra(M,F,V){F.isScene!==!0&&(F=$t);const G=Ee.get(M),O=S.state.lights,ne=S.state.shadowsArray,fe=O.state.version,_e=H.getParameters(M,O.state,ne,F,V),me=H.getProgramCacheKey(_e);let Le=G.programs;G.environment=M.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(M.isMeshStandardMaterial?_:A).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",Oe),Le=new Map,G.programs=Le);let Ne=Le.get(me);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===fe)return rh(M,_e),Ne}else _e.uniforms=H.getUniforms(M),M.onBeforeCompile(_e,E),Ne=H.acquireProgram(_e,me),Le.set(me,Ne),G.uniforms=_e.uniforms;const we=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=be.uniform),rh(M,_e),G.needsLights=hf(M),G.lightsStateVersion=fe,G.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function sh(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=qa.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function rh(M,F){const V=Ee.get(M);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function cf(M,F,V,G,O){F.isScene!==!0&&(F=$t),ke.resetTextureUnits();const ne=F.fog,fe=G.isMeshStandardMaterial?F.environment:null,_e=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:dn,me=(G.isMeshStandardMaterial?_:A).get(G.envMap||fe),Le=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,ft=!!V.morphAttributes.color;let Dt=Vi;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Dt=E.toneMapping);const Nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xt=Nt!==void 0?Nt.length:0,Re=Ee.get(G),Ct=S.state.lights;if(Q===!0&&(xe===!0||M!==B)){const tn=M===B&&G.id===L;be.setState(G,M,tn)}let st=!1;G.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ct.state.version||Re.outputColorSpace!==_e||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==me||G.fog===!0&&Re.fog!==ne||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==be.numPlanes||Re.numIntersection!==be.numIntersection)||Re.vertexAlphas!==Le||Re.vertexTangents!==Ne||Re.morphTargets!==we||Re.morphNormals!==Qe||Re.morphColors!==ft||Re.toneMapping!==Dt||Re.morphTargetsCount!==xt)&&(st=!0):(st=!0,Re.__version=G.version);let yn=Re.currentProgram;st===!0&&(yn=ra(G,F,O));let gs=!1,Mn=!1,lr=!1;const It=yn.getUniforms(),un=Re.uniforms;if(ve.useProgram(yn.program)&&(gs=!0,Mn=!0,lr=!0),G.id!==L&&(L=G.id,Mn=!0),gs||B!==M){ve.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),It.setValue(P,"projectionMatrix",M.projectionMatrix),It.setValue(P,"viewMatrix",M.matrixWorldInverse);const fn=It.map.cameraPosition;fn!==void 0&&fn.setValue(P,Se.setFromMatrixPosition(M.matrixWorld)),yt.logarithmicDepthBuffer&&It.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&It.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,Mn=!0,lr=!0)}if(O.isSkinnedMesh){It.setOptional(P,O,"bindMatrix"),It.setOptional(P,O,"bindMatrixInverse");const tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),It.setValue(P,"boneTexture",tn.boneTexture,ke))}O.isBatchedMesh&&(It.setOptional(P,O,"batchingTexture"),It.setValue(P,"batchingTexture",O._matricesTexture,ke),It.setOptional(P,O,"batchingIdTexture"),It.setValue(P,"batchingIdTexture",O._indirectTexture,ke),It.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&It.setValue(P,"batchingColorTexture",O._colorsTexture,ke));const Ln=V.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&De.update(O,V,yn),(Mn||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,It.setValue(P,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(un.envMap.value=me,un.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(un.envMapIntensity.value=F.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=Dv()),Mn&&(It.setValue(P,"toneMappingExposure",E.toneMappingExposure),Re.needsLights&&lf(un,lr),ne&&G.fog===!0&&ye.refreshFogUniforms(un,ne),ye.refreshMaterialUniforms(un,G,le,se,S.state.transmissionRenderTarget[M.id]),qa.upload(P,sh(Re),un,ke)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qa.upload(P,sh(Re),un,ke),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&It.setValue(P,"center",O.center),It.setValue(P,"modelViewMatrix",O.modelViewMatrix),It.setValue(P,"normalMatrix",O.normalMatrix),It.setValue(P,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const tn=G.uniformsGroups;for(let fn=0,Eo=tn.length;fn<Eo;fn++){const Wi=tn[fn];ue.update(Wi,yn),ue.bind(Wi,yn)}}return yn}function lf(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function hf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,F,V){const G=Ee.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ee.get(M.texture).__webglTexture=F,Ee.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const V=Ee.get(M);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const df=P.createFramebuffer();this.setRenderTarget=function(M,F=0,V=0){b=M,I=F,v=V;let G=!0,O=null,ne=!1,fe=!1;if(M){const me=Ee.get(M);if(me.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(me.__webglFramebuffer===void 0)ke.setupRenderTarget(M);else if(me.__hasExternalTextures)ke.rebindTextures(M,Ee.get(M.texture).__webglTexture,Ee.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const we=M.depthTexture;if(me.__boundDepthTexture!==we){if(we!==null&&Ee.has(we)&&(M.width!==we.image.width||M.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);const Ne=Ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?O=Ne[F][V]:O=Ne[F],ne=!0):M.samples>0&&ke.useMultisampledRTT(M)===!1?O=Ee.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[V]:O=Ne,z.copy(M.viewport),W.copy(M.scissor),Y=M.scissorTest}else z.copy(dt).multiplyScalar(le).floor(),W.copy(vt).multiplyScalar(le).floor(),Y=bt;if(V!==0&&(O=df),ve.bindFramebuffer(P.FRAMEBUFFER,O)&&G&&ve.drawBuffers(M,O),ve.viewport(z),ve.scissor(W),ve.setScissorTest(Y),ne){const me=Ee.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,V)}else if(fe){const me=F;for(let Le=0;Le<M.textures.length;Le++){const Ne=Ee.get(M.textures[Le]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,V,me)}}else if(M!==null&&V!==0){const me=Ee.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,V)}L=-1},this.readRenderTargetPixels=function(M,F,V,G,O,ne,fe,_e=0){if(!(M&&M.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ve.bindFramebuffer(P.FRAMEBUFFER,me);try{const Le=M.textures[_e],Ne=Le.format,we=Le.type;if(!yt.textureFormatReadable(Ne)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(we)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-G&&V>=0&&V<=M.height-O&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+_e),P.readPixels(F,V,G,O,Ue.convert(Ne),Ue.convert(we),ne))}finally{const Le=b!==null?Ee.get(b).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,F,V,G,O,ne,fe,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(F>=0&&F<=M.width-G&&V>=0&&V<=M.height-O){ve.bindFramebuffer(P.FRAMEBUFFER,me);const Le=M.textures[_e],Ne=Le.format,we=Le.type;if(!yt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+_e),P.readPixels(F,V,G,O,Ue.convert(Ne),Ue.convert(we),0);const ft=b!==null?Ee.get(b).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,ft);const Dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await xp(P,Dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer(Qe),P.deleteSync(Dt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,V=0){const G=Math.pow(2,-V),O=Math.floor(M.image.width*G),ne=Math.floor(M.image.height*G),fe=F!==null?F.x:0,_e=F!==null?F.y:0;ke.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,fe,_e,O,ne),ve.unbindTexture()};const uf=P.createFramebuffer(),ff=P.createFramebuffer();this.copyTextureToTexture=function(M,F,V=null,G=null,O=0,ne=null){ne===null&&(O!==0?(Hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let fe,_e,me,Le,Ne,we,Qe,ft,Dt;const Nt=M.isCompressedTexture?M.mipmaps[ne]:M.image;if(V!==null)fe=V.max.x-V.min.x,_e=V.max.y-V.min.y,me=V.isBox3?V.max.z-V.min.z:1,Le=V.min.x,Ne=V.min.y,we=V.isBox3?V.min.z:0;else{const Ln=Math.pow(2,-O);fe=Math.floor(Nt.width*Ln),_e=Math.floor(Nt.height*Ln),M.isDataArrayTexture?me=Nt.depth:M.isData3DTexture?me=Math.floor(Nt.depth*Ln):me=1,Le=0,Ne=0,we=0}G!==null?(Qe=G.x,ft=G.y,Dt=G.z):(Qe=0,ft=0,Dt=0);const xt=Ue.convert(F.format),Re=Ue.convert(F.type);let Ct;F.isData3DTexture?(ke.setTexture3D(F,0),Ct=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ke.setTexture2DArray(F,0),Ct=P.TEXTURE_2D_ARRAY):(ke.setTexture2D(F,0),Ct=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const st=P.getParameter(P.UNPACK_ROW_LENGTH),yn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gs=P.getParameter(P.UNPACK_SKIP_PIXELS),Mn=P.getParameter(P.UNPACK_SKIP_ROWS),lr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Nt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we);const It=M.isDataArrayTexture||M.isData3DTexture,un=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Ln=Ee.get(M),tn=Ee.get(F),fn=Ee.get(Ln.__renderTarget),Eo=Ee.get(tn.__renderTarget);ve.bindFramebuffer(P.READ_FRAMEBUFFER,fn.__webglFramebuffer),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,Eo.__webglFramebuffer);for(let Wi=0;Wi<me;Wi++)It&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ee.get(M).__webglTexture,O,we+Wi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ee.get(F).__webglTexture,ne,Dt+Wi)),P.blitFramebuffer(Le,Ne,fe,_e,Qe,ft,fe,_e,P.DEPTH_BUFFER_BIT,P.NEAREST);ve.bindFramebuffer(P.READ_FRAMEBUFFER,null),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||Ee.has(M)){const Ln=Ee.get(M),tn=Ee.get(F);ve.bindFramebuffer(P.READ_FRAMEBUFFER,uf),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,ff);for(let fn=0;fn<me;fn++)It?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ln.__webglTexture,O,we+fn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ln.__webglTexture,O),un?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tn.__webglTexture,ne,Dt+fn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,tn.__webglTexture,ne),O!==0?P.blitFramebuffer(Le,Ne,fe,_e,Qe,ft,fe,_e,P.COLOR_BUFFER_BIT,P.NEAREST):un?P.copyTexSubImage3D(Ct,ne,Qe,ft,Dt+fn,Le,Ne,fe,_e):P.copyTexSubImage2D(Ct,ne,Qe,ft,Le,Ne,fe,_e);ve.bindFramebuffer(P.READ_FRAMEBUFFER,null),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else un?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Ct,ne,Qe,ft,Dt,fe,_e,me,xt,Re,Nt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Ct,ne,Qe,ft,Dt,fe,_e,me,xt,Nt.data):P.texSubImage3D(Ct,ne,Qe,ft,Dt,fe,_e,me,xt,Re,Nt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,Qe,ft,fe,_e,xt,Re,Nt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,Qe,ft,Nt.width,Nt.height,xt,Nt.data):P.texSubImage2D(P.TEXTURE_2D,ne,Qe,ft,fe,_e,xt,Re,Nt);P.pixelStorei(P.UNPACK_ROW_LENGTH,st),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gs),P.pixelStorei(P.UNPACK_SKIP_ROWS,Mn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,lr),ne===0&&F.generateMipmaps&&P.generateMipmap(Ct),ve.unbindTexture()},this.initRenderTarget=function(M){Ee.get(M).__webglFramebuffer===void 0&&ke.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),ve.unbindTexture()},this.resetState=function(){I=0,v=0,b=null,ve.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function Ad(s,e){if(e===ip)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===el||e===du){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===el)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Nv extends rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Qv(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ir.extractUrlBase(e);a=Ir.resolveURL(l,this.path)}else a=Ir.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Cu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Fu){try{a[je.KHR_BINARY_GLTF]=new eb(e)}catch(d){i&&i(d);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new fb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case je.KHR_MATERIALS_UNLIT:a[d]=new Ov;break;case je.KHR_DRACO_MESH_COMPRESSION:a[d]=new tb(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[d]=new nb;break;case je.KHR_MESH_QUANTIZATION:a[d]=new ib;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Uv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Fv{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],dn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new rl(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Iu(h),l.distance=d;break;case"spot":l=new Cm(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ii(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Ov{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return nt}extendParams(e,t,n){const i=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],dn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(i)}}class Bv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class kv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(o,o)}return Promise.all(r)}}class zv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Vv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Gv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],dn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,zt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Hv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Wv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(o[0],o[1],o[2],dn),Promise.all(r)}}class Xv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class qv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(o[0],o[1],o[2],dn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,zt)),Promise.all(r)}}class Kv{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Yv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class jv{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class $v{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Zv{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Jv{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class Qv{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Nn.TRIANGLES&&l.mode!==Nn.TRIANGLE_STRIP&&l.mode!==Nn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const m of d){const g=new Ve,x=new U,p=new zn,y=new U(1,1,1),S=new Xa(m.geometry,m.material,u);for(let T=0;T<u;T++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,T),c.SCALE&&y.fromBufferAttribute(c.SCALE,T),S.setMatrixAt(T,g.compose(x,p,y));for(const T in c)if(T==="_COLOR_0"){const R=c[T];S.instanceColor=new nl(R.array,R.itemSize,R.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&m.geometry.setAttribute(T,c[T]);Et.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Fu="glTF",vr=12,Rd={JSON:1313821514,BIN:5130562};class eb{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-vr,r=new DataView(e,vr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Rd.JSON){const l=new Uint8Array(e,vr+a,o);this.content=n.decode(l)}else if(c===Rd.BIN){const l=vr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const d=cl[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=cl[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=zs[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const g=f.attributes[m],x=c[m];x!==void 0&&(g.normalized=x)}d(f)},o,l,dn,u)})})}}class nb{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ib{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Ou extends ta{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,m=e*l,g=m-l,x=-2*f+3*u,p=f-u,y=1-x,S=p-u+d;for(let T=0;T!==o;T++){const R=a[g+T+o],E=a[g+T+c]*h,C=a[m+T+o],I=a[m+T]*h;r[T]=y*R+S*E+x*C+p*I}return r}}const sb=new zn;class rb extends Ou{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return sb.fromArray(r).normalize().toArray(r),r}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cd={9728:cn,9729:on,9984:nu,9985:za,9986:yr,9987:Si},Id={33071:ri,33648:Qa,10497:Xs},oc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ab={CUBICSPLINE:void 0,LINEAR:Vr,STEP:zr},cc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ob(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ea({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),s.DefaultMaterial}function Zi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ii(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cb(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function lb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hb(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lc(t.attributes):e=s.indices+":"+lc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+lc(s.targets[n]);return e}function lc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ll(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function db(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ub=new Ve;class fb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Uv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Am(this.options.manager):this.textureLoader=new Lm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Zi(r,o,i),ii(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ir.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=oc[i.type],o=zs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ln(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=oc[i.type],l=zs[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let g,x;if(f&&f!==d){const p=Math.floor(u/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(y);S||(g=new l(o,p*f,i.count*f/h),S=new im(g,f/h),t.cache.add(y,S)),x=new Ul(S,c,u%f/h,m)}else o===null?g=new l(i.count*c):g=new l(o,u,i.count*c),x=new ln(g,c,m);if(i.sparse!==void 0){const p=oc.SCALAR,y=zs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,R=new y(a[1],S,i.sparse.count*p),E=new l(a[2],T,i.sparse.count*c);o!==null&&(x=new ln(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let C=0,I=R.length;C<I;C++){const v=R[C];if(x.setX(v,E[C*c]),c>=2&&x.setY(v,E[C*c+1]),c>=3&&x.setZ(v,E[C*c+2]),c>=4&&x.setW(v,E[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Cd[u.magFilter]||on,h.minFilter=Cd[u.minFilter]||Si,h.wrapS=Id[u.wrapS]||Xs,h.wrapT=Id[u.wrapT]||Xs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==cn&&h.minFilter!==on,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let m=u;t.isImageBitmapLoader===!0&&(m=function(g){const x=new Kt(g);x.needsUpdate=!0,u(x)}),t.load(Ir.resolveURL(d,r.path),m,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),ii(d,a),d.userData.mimeType=a.mimeType||db(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Su,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Mi,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ea}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const d=i[je.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],dn),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,zt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=An);const h=r.alphaMode||cc.OPAQUE;if(h===cc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===cc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==nt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==nt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==nt){const d=r.emissiveFactor;o.emissive=new Be().setRGB(d[0],d[1],d[2],dn)}return r.emissiveTexture!==void 0&&a!==nt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,zt)),Promise.all(l).then(function(){const d=new a(o);return r.name&&(d.name=r.name),ii(d,r),t.associations.set(d,{materials:e}),r.extensions&&Zi(i,d,r),d})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Pd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=hb(l),d=i[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Pd(new Vt,l,t),i[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?ob(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,m=h.length;f<m;f++){const g=h[f],x=a[f];let p;const y=l[f];if(x.mode===Nn.TRIANGLES||x.mode===Nn.TRIANGLE_STRIP||x.mode===Nn.TRIANGLE_FAN||x.mode===void 0)p=r.isSkinnedMesh===!0?new rm(g,y):new mt(g,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),x.mode===Nn.TRIANGLE_STRIP?p.geometry=Ad(p.geometry,du):x.mode===Nn.TRIANGLE_FAN&&(p.geometry=Ad(p.geometry,el));else if(x.mode===Nn.LINES)p=new dm(g,y);else if(x.mode===Nn.LINE_STRIP)p=new En(g,y);else if(x.mode===Nn.LINE_LOOP)p=new um(g,y);else if(x.mode===Nn.POINTS)p=new fm(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&lb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ii(p,r),x.extensions&&Zi(i,p,x),t.assignFinalMaterial(p),d.push(p)}for(let f=0,m=d.length;f<m;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Zi(i,d[0],r),d[0];const u=new lt;r.extensions&&Zi(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gn(Mr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ii(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const d=a[l];if(d){o.push(d);const u=new Ve;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ol(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],m=i.samplers[f.sampler],g=f.target,x=g.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;g.node!==void 0&&(a.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],m=d[2],g=d[3],x=d[4],p=[];for(let S=0,T=u.length;S<T;S++){const R=u[S],E=f[S],C=m[S],I=g[S],v=x[S];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const b=n._createAnimationTracks(R,E,C,I,v);if(b)for(let L=0;L<b.length;L++)p.push(b[L])}const y=new sl(r,void 0,p);return ii(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,ub)});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Mu:l.length>1?h=new lt:l.length===1?h=l[0]:h=new Et,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),ii(h,r),r.extensions&&Zi(n,h,r),r.matrix!==void 0){const d=new Ve;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new lt;n.name&&(r.name=i.createUniqueName(n.name)),ii(r,n),n.extensions&&Zi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);const l=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof In||u instanceof Kt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Fi[r.path]===Fi.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(Fi[r.path]){case Fi.weights:l=Ys;break;case Fi.rotation:l=js;break;case Fi.translation:case Fi.scale:l=$s;break;default:n.itemSize===1?l=Ys:l=$s;break}const h=i.interpolation!==void 0?ab[i.interpolation]:Vr,d=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){const m=new l(c[u]+"."+Fi[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ll(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof js?rb:Ou;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pb(s,e,t){const n=e.attributes,i=new Ci;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),o.normalized){const h=ll(zs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new U,c=new U;for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){const g=ll(zs[u.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new hi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Pd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=cl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return it.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),ii(s,e),pb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cb(s,e.targets,t):s})}function mb(s){const e=new Map,t=new Map,n=s.clone();return Bu(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Bu(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Bu(s.children[n],e.children[n],t)}const hl=new Map,Ld=new Map,xb=new Nv;function gb(s){if(hl.has(s))return Promise.resolve();const e=Ld.get(s);if(e)return e;const t=xb.loadAsync("./units/"+s+".glb").then(n=>{n.scene.traverse(i=>{i instanceof mt&&(i.castShadow=!0,i.receiveShadow=!1)}),hl.set(s,{scene:n.scene,animations:n.animations})}).catch(n=>{console.warn("Unit asset unavailable",s,n)});return Ld.set(s,t),t}function Dd(s){const e=hl.get(s);if(!e)return;const t=mb(e.scene),n=new lt;return n.add(t),{model:n,mixer:new qm(t),clips:new Map(e.animations.map(r=>[r.name,r])),state:""}}function hc(s,e,t=1){if(s.state===e){s.action&&(s.action.timeScale=t);return}const n=s.clips.get(e);if(!n)return;const i=s.action,r=s.mixer.clipAction(n);r.reset(),r.enabled=!0,r.setEffectiveWeight(1),r.timeScale=t,e==="Move"||e==="Idle"?(r.setLoop(hu,1/0),r.clampWhenFinished=!1):(r.setLoop(lu,1),r.clampWhenFinished=!0),r.play(),i&&i!==r&&(i.fadeOut(.075),r.fadeIn(.075)),s.action=r,s.state=e}function La(s){s&&(s.mixer.stopAllAction(),s.mixer.uncacheRoot(s.mixer.getRoot()))}const bi={meadow:7059294,meadow2:8635240,sand:13286537,ridge:9218454,forest:4100436,ore:9597889,earth:7821637,darkEarth:4866115,rock:6186857},Fe=new ms(1,1,1),ni=new _o(1,1),Oi=new _o(1,0),en=new kl(1,1,4),sn=new go(1,1,1,8),Nd=(s,e,t)=>Math.max(e,Math.min(t,s)),wt=(s,e=1)=>new ea({color:s,roughness:e,metalness:0}),_b=new nt({color:14873040,transparent:!0,opacity:.64}),ce={dirt:wt(bi.earth),cliff:wt(bi.darkEarth),rock:wt(bi.rock),grass:wt(bi.meadow),grass2:wt(bi.meadow2),sand:wt(bi.sand),ridge:wt(bi.ridge),grove:wt(bi.forest),ore:wt(bi.ore),trunk:wt(6511429),leaf:wt(4096341),leaf2:wt(6924396),metal:wt(3694181,.6),gun:wt(8436137,.42),orange:wt(14191448,.5),red:wt(12148298),midnight:wt(2245207),ivory:wt(15263688),white:wt(16777215),ice:wt(10149095,.4),purple:wt(12296433,.5),wood:wt(8678228),coal:wt(3359818),brass:wt(15582590,.52),flag:wt(14121811)};class vb{canvas;scene=new Nh;renderer;camera;ray=new Km;land=new lt;decorations=new lt;roads=new lt;structures=new lt;ghost=new lt;placementLayer=new lt;planLayer=new lt;threatLayer=new lt;placementKey="";placementNext=0;planKey="";draft=null;placementEnabled=!0;review=!1;markerRoot;markers=[];markerKey="";dangerMarker;threatKey="";buildMat=new nt({color:12253853,transparent:!0,opacity:.53,depthWrite:!1});blockedMat=new nt({color:1457477,transparent:!0,opacity:.38,depthWrite:!1});plusMat=new nt({color:4682830,transparent:!0,opacity:.92,depthWrite:!1});rangeMat=new nt({color:16750706,transparent:!0,opacity:.24,depthWrite:!1,side:An});routeMat=new Mi({color:16764034,transparent:!0,opacity:.9,depthTest:!1});useMat=new Mi({color:12253853,transparent:!0,opacity:.95,depthTest:!1});setPlanning(e,t){(this.draft!==e||this.placementEnabled!==t)&&(this.draft=e,this.placementEnabled=t,this.updateHover(this.hovered))}motion=new xf;revealUntil=0;draftMotionKey="";recoil=new Map;cameraBlend=null;smoothCamera(){!pn()&&!this.titleMode&&!this.userAdjusted&&this.currentGame&&(this.cameraBlend={left:this.camera.left,right:this.camera.right,top:this.camera.top,bottom:this.camera.bottom,position:this.camera.position.clone(),quaternion:this.camera.quaternion.clone(),time:0})}finishReveal(){this.motion.finish(),this.revealUntil=0,this.placementLayer.visible=!0,this.threatLayer.visible=!0,this.markerRoot.style.visibility=""}ripple(e,t=13238152,n=1.2,i=.55,r=this.tileHeight(e.x,e.z)+.08,a=!1){if(pn()||this.flashes.length>=(a?120:96))return;const o=new lt,c=new mt(new Fs(.94,1,40),new nt({color:t,transparent:!0,side:An,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.set(e.x,r,e.z),c.scale.setScalar(.15),c.userData.grow=n,o.add(c),this.particleLayer.add(o),this.flashes.push({group:o,time:0,total:i,priority:a})}markConstruction(e,t="build"){const n=this.structureMeshes.get(Z(e.x,e.z));n&&(t==="move"?this.motion.reveal(n.model,0,.32,-.65):t==="upgrade"?this.motion.reveal(n.head,0,.36,-.25,!0):(n.model.children.filter(r=>r!==n.head).forEach((r,a)=>this.motion.reveal(r,a*.065,.23,-.45,!0)),this.motion.reveal(n.head,.15,.28,-.55,!0)),this.ripple(e,13238152,.82,.48))}markSell(e,t){if(pn())return;const{model:n}=this.towerModel(e,t);n.position.set(e.x,this.tileHeight(e.x,e.z),e.z),n.traverse(r=>{r instanceof mt&&(r.material=r.material.clone(),r.material.transparent=!0,r.castShadow=!1)});const i=new lt;n.userData.shrink=!0,i.add(n),this.particleLayer.add(i),this.flashes.push({group:i,time:0,total:.28}),this.ripple(e,16767872,.9,.45)}markRejected(e){this.ripple(e,16742505,.62,.28)}markMoveOrigin(e){this.ripple(e,12053464,.8,.35)}markIsland(e,t){if(this.ripple(e,13039336,3.4,.68,-.19),pn())return;const n=t.filter(a=>!a.bridge&&[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}].some(o=>!this.currentGame?.tiles.has(Z(a.x+o.x,a.z+o.z)))),i=new lt,r=new nt({color:13891312,transparent:!0,depthWrite:!1});n.slice(0,18).forEach((a,o)=>{const c=a.x-e.x,l=a.z-e.z,h=Math.hypot(c,l)||1,d=this.shape(Fe,r,a.x+c/h*.47,-.18,a.z+l/h*.47,.11,.14,.11);d.castShadow=!1,d.userData.velocity=new U(c/h*.55,.6+o%3*.12,l/h*.55),i.add(d)}),i.children.length?(this.particleLayer.add(i),this.flashes.push({group:i,time:0,total:.48})):r.dispose()}setReview(e){this.review=e,this.threatKey="",this.markerKey="",e&&(this.clear(this.ghost),this.raidRouteKey="")}getFacilityIcons(){const e={},t=new Td({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});t.setSize(128,128),t.setClearColor(0,0),t.outputColorSpace=zt,t.toneMapping=Sc,t.toneMappingExposure=1.08;const n=new Nh;n.add(new $h(15202527,2642533,1.8));const i=new rl(16769457,2.5);i.position.set(-3,8,5),n.add(i);const r=new Wr(-.77,.77,.77,-.77,.1,20);r.position.set(3,3.2,4),r.lookAt(0,.65,0);for(const a of["bolt","cannon","frost","ore","wood","harbor","relic"]){const o=["bolt","cannon","frost"].includes(a)?a:"mine",c={id:0,type:o,x:0,z:0,cooldown:0,rotation:0,paid:0},{model:l}=this.towerModel(c,o==="mine"?a:void 0);l.position.set(0,0,0),n.add(l),t.render(n,r),e[a]=t.domElement.toDataURL("image/png"),n.remove(l)}return t.dispose(),t.forceContextLoss(),e}drawPath(e,t,n){if(t.length<2)return;const i=new En(new Vt().setFromPoints(t.map(r=>new U(r.x,this.tileHeight(r.x,r.z)+.15,r.z))),n);i.renderOrder=8,e.add(i);for(let r=0;r<t.length-1;r++){const a=t[r],o=t[r+1],c=(a.x+o.x)/2,l=(a.z+o.z)/2,h=new mt(en,new nt({color:n.color,depthTest:!1,transparent:!0,opacity:.85}));h.scale.set(.12,.29,.12),h.rotation.x=Math.PI/2,h.rotation.z=-Math.atan2(o.x-a.x,o.z-a.z),h.position.set(c,Math.max(this.tileHeight(a.x,a.z),this.tileHeight(o.x,o.z))+.15,l),h.renderOrder=9,e.add(h)}}clearOverlay(e){this.motion.discardWithin(e);for(const t of[...e.children])t.traverse(n=>{(n instanceof mt||n instanceof En)&&(n instanceof Xa&&n.dispose(),[Fe,ni,Oi,en,sn].includes(n.geometry)||n.geometry.dispose(),n.material instanceof In&&![...Object.values(ce),this.buildMat,this.blockedMat,this.plusMat,this.rangeMat,this.routeMat,this.useMat].includes(n.material)&&n.material.dispose())}),e.remove(t)}syncPlanning(e){const t=e.canEdit&&this.placementEnabled,n=this.moving&&this.facilityKey?this.facilityKey:void 0,i=n?e.towers.get(n)?.type??this.hoveredType:this.hoveredType,r=t?[e.phase,e.gold,e.buildLimit,i,n??"",e.tiles.size,[...e.towers.keys()].join(";"),e.enemies.map(c=>c.path[c.segment]?Z(c.path[c.segment].x,c.path[c.segment].z)+":"+c.segment+":"+(c.step>0):"").join(";")].join("|"):"";if(r!==this.placementKey&&(e.phase!=="combat"||!t||this.elapsed>=this.placementNext||this.placementKey==="!")&&(this.placementNext=this.elapsed+.3,this.placementKey=r,this.clearOverlay(this.placementLayer),t)){const c=[],l=[];for(const d of e.tiles.values()){const u=Z(d.x,d.z);if(d.bridge||e.towers.has(u)||u==="0,0"||e.ports.some(m=>Z(m.x,m.z)===u))continue;((n?e.canMove(n,d.x,d.z):e.canBuild(i,d.x,d.z))?l:c).push(d)}const h=(d,u,f,m,g,x,p)=>{if(!d.length)return;const y=new Xa(u,f,d.length),S=new Ve,T=new U(g,x,p),R=new zn;d.forEach((E,C)=>{S.compose(new U(E.x,this.height(E)+m,E.z),R,T),y.setMatrixAt(C,S)}),y.instanceMatrix.needsUpdate=!0,y.castShadow=!1,y.receiveShadow=!1,this.placementLayer.add(y)};h(c,Fe,this.buildMat,.026,.88,.035,.88),h(l,Fe,this.blockedMat,.026,.88,.035,.88),h(c,sn,this.plusMat,.066,.09,.035,.09)}const a=this.draft,o=t&&a?this.placementKey+"|"+Z(a.x,a.z):"";if(o!==this.planKey){this.planKey=o,this.clearOverlay(this.planLayer);const c=t&&a?i+"|"+(n??"")+"|"+Z(a.x,a.z):"",l=c!==this.draftMotionKey;if(this.draftMotionKey=c,t&&a){const h=e.tiles.get(Z(a.x,a.z)),d=n?e.canMove(n,a.x,a.z):e.canBuild(i,a.x,a.z);if(h&&!d){const u=n?{...e.towers.get(n),...a}:{...a,id:0,type:i,paid:0,rotation:0,cooldown:0},{model:f}=this.towerModel(u,Ot(h));if(f.position.set(a.x,this.height(h),a.z),f.traverse(m=>{m instanceof mt&&(m.material=m.material.clone(),m.material.transparent=!0,m.material.opacity=.68,m.material.depthWrite=!1,m.castShadow=!1)}),this.planLayer.add(f),l&&this.motion.reveal(f,0,.14,-.14,!0),i!=="mine"){const m=Fn(u).range*(h.h>=3?1.25:1),g=new mt(new Fs(m-.045,m,80),this.buildMat);g.rotation.x=-Math.PI/2,g.position.set(a.x,this.height(h)+.07,a.z),this.planLayer.add(g)}for(const[m,g]of e.placementPaths(a.x,a.z,n))(e.paths.get(m)??[]).map(p=>Z(p.x,p.z)).join(";")!==g.map(p=>Z(p.x,p.z)).join(";")&&this.drawPath(this.planLayer,g,this.useMat)}}}}syncTactical(e){const t=!!e.raid||e.phase==="combat"||e.phase==="prepare",n=t?[!!e.raid,e.phase,this.review,e.tiles.size,[...e.towers.values()].map(a=>a.id+":"+a.x+":"+a.z+":"+a.upgrade+":"+Math.ceil(a.disabledFor??0)).join(";"),e.ports.map(a=>Z(a.x,a.z)).join(";"),this.review?[...e.lossSites].join(";"):""].join("|"):"";if(n!==this.threatKey&&(this.threatKey=n,this.clearOverlay(this.threatLayer),t))if(e.raid){if(!this.review&&e.phase==="prepare")for(const a of e.towers.values()){if(a.type==="mine"||(a.disabledFor??0)>0)continue;const o=Fn(a).range*((e.tiles.get(Z(a.x,a.z))?.h??0)>=3?1.25:1),c=new mt(new Fs(o-.035,o,64),this.rangeMat);c.rotation.x=-Math.PI/2,c.position.set(a.x,this.tileHeight(a.x,a.z)+.09,a.z),this.threatLayer.add(c)}}else for(const a of e.paths.values())this.drawPath(this.threatLayer,a,this.routeMat);const i=[e.phase,!!e.raid,this.review,e.tiles.size,[...e.towers.keys()].join(";"),e.ports.map(a=>Z(a.x,a.z)).join(";"),[...e.plundered].join(";"),e.raid?.captured.join(";"),this.review?[...e.lossSites].join(";"):""].join("|");if(i!==this.markerKey){this.markerKey=i,this.markerRoot.replaceChildren(),this.markers=[];const a=(o,c,l,h,d=!0)=>{const u=document.createElement("button");u.type="button",u.className="map-marker "+l,u.textContent=c,d?u.onclick=()=>this.onTileClick(o.x,o.z):(u.tabIndex=-1,u.style.pointerEvents="none"),this.markerRoot.append(u),this.markers.push({el:u,point:o,height:h})};if(e.phase!=="expansion")if(this.review&&e.raid)for(const[o,c]of e.lossSites){const[l,h]=o.split(",").map(Number);a({x:l,z:h},"×"+c,"loss-marker",.38,!1)}else{e.ports.forEach((o,c)=>a(o,(e.raid?"上陸 ":"侵入口 ")+(c+1),"port-marker"+(e.raid?" selectable":""),1.1));for(const o of e.tiles.values()){const c=Ot(o);if(!c)continue;const l=e.towers.get(Z(o.x,o.z));!l&&!e.raid?a(o,"＋ "+rs[c],"resource-marker",1.12):l?.type==="mine"&&(e.plundered.has(l.id)||e.raid?.captured.includes(l.id))?a(o,"停止","loss-marker",1.12,!1):l?.type==="mine"&&e.raid&&a(o,rs[c],"resource-marker",1.22)}}}if(!this.dangerMarker){const a=document.createElement("div");a.className="map-marker danger-marker",a.style.pointerEvents="none",this.dangerMarker=a,this.markerRoot.parentElement.append(a)}const r=!e.raid&&e.phase==="combat"?e.enemies.filter(a=>a.hp>0).sort((a,o)=>a.path.length-a.segment-a.step-(o.path.length-o.segment-o.step))[0]:null;if(this.dangerMarker.hidden=!r||r.path.length-1-r.segment-r.step>2,r&&!this.dangerMarker.hidden){const a=new U(r.x,this.worldHeight(r.x,r.z)+1.5,r.z).project(this.camera);this.dangerMarker.style.left=(a.x+1)*50+"%",this.dangerMarker.style.top=(1-a.y)*50+"%",this.dangerMarker.textContent="！"}for(const a of this.markers){const o=new U(a.point.x,this.tileHeight(a.point.x,a.point.z)+a.height,a.point.z).project(this.camera);a.el.style.left=(o.x+1)*50+"%",a.el.style.top=(1-o.y)*50+"%",a.el.hidden=Math.abs(o.x)>1.02||Math.abs(o.y)>1.02||o.z>1}}figures=new lt;particleLayer=new lt;tileMeshes=[];candidateMeshes=[];enemies=new Map;fallen=[];structureMeshes=new Map;flashes=[];onTileClick;onHover;highlight;rangeRing;lighthouseLight;target=new U(0,0,0);yaw=.73;pitch=.99;zoomFactor=1;baseView=15;hovered=null;hoveredType="bolt";facilityKey=null;raidPortId=null;selectRaidPort(e){this.raidPortId=e,this.updateHover(this.hovered)}moving=!1;selectFacility(e,t){this.facilityKey=e,this.moving=t,this.updateHover(this.hovered)}previewIndex=-1;raidRouteKey="";selectRaidRoute(e,t){const n=this.currentGame;if(!n?.raid||this.review)return;const i=String(e)+":"+(t??"core")+":"+[...n.towers.values()].filter(h=>(h.disabledFor??0)>0).map(h=>h.id).join(",");if(i===this.raidRouteKey)return;this.raidRouteKey=i,this.clear(this.ghost);const r=n.raidRoute(e,t);if(!r.length)return;if(t!==void 0){const h=[...n.towers.values()].find(d=>d.id===t);if(h){const d=this.shape(Fe,new nt({color:16764006,transparent:!0,opacity:.46,depthWrite:!1}),h.x,this.tileHeight(h.x,h.z)+.035,h.z,.97,.035,.97);d.castShadow=!1,this.ghost.add(d)}}const a=r.map(h=>new U(h.x,this.tileHeight(h.x,h.z)+.1,h.z)),o=new nt({color:16767624,depthTest:!1,transparent:!0,opacity:.9}),c=new nt({color:16744554,depthTest:!1,transparent:!0,opacity:.95});for(const h of a){const d=[...n.towers.values()].some(f=>f.type!=="mine"&&(f.disabledFor??0)<=0&&Math.hypot(f.x-h.x,f.z-h.z)<=Fn(f).range*((n.tiles.get(Z(f.x,f.z))?.h??0)>=3?1.25:1)),u=this.shape(ni,d?c:o,h.x,h.y,h.z,.13,.13,.13);u.castShadow=!1,u.renderOrder=11,this.ghost.add(u)}const l=new En(new Vt().setFromPoints(a),new Mi({color:16767624,depthTest:!1,transparent:!0,opacity:.8}));l.renderOrder=10,this.ghost.add(l)}currentGame=null;pointers=new Map;pointerStart=null;lastPinch=0;userAdjusted=!1;waterTime=0;waveBatch;waveTransforms=[];beacon;elapsed=0;cameraTarget=new U(0,0,0);constructor(e,t,n){this.markerRoot=document.createElement("div"),this.markerRoot.className="map-markers",e.parentElement.append(this.markerRoot),this.onTileClick=t,this.onHover=n,this.renderer=new Td({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(2,devicePixelRatio||1)),this.renderer.outputColorSpace=zt,this.renderer.toneMapping=Sc,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qd,this.canvas=this.renderer.domElement,e.appendChild(this.canvas),this.camera=new Wr(-10,10,10,-10,.1,250),this.scene.add(this.land,this.decorations,this.roads,this.structures,this.ghost,this.placementLayer,this.threatLayer,this.planLayer,this.figures,this.particleLayer),this.scene.add(new $h(15202527,2642533,1.65));const i=new rl(16769457,2.5);i.position.set(-12,23,10),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.camera.left=-32,i.shadow.camera.right=32,i.shadow.camera.top=32,i.shadow.camera.bottom=-32,i.shadow.normalBias=.05,this.scene.add(i);const r=new mt(new Qr(4e3,4e3),new ea({color:2588315,roughness:.44,metalness:.08}));r.rotation.x=-Math.PI/2,r.position.y=-.35,r.receiveShadow=!0,this.scene.add(r),this.makeSea(),this.highlight=new mt(new ms(1.017,.055,1.017),new nt({color:13303709,opacity:.34,transparent:!0,depthWrite:!1})),this.highlight.visible=!1,this.scene.add(this.highlight),this.rangeRing=new mt(new Fs(.975,1,96),new nt({color:14024602,side:An,opacity:.43,transparent:!0,depthWrite:!1})),this.rangeRing.rotation.x=-Math.PI/2,this.rangeRing.visible=!1,this.scene.add(this.rangeRing),this.lighthouseLight=new Iu(16773020,4,9,1.4),this.scene.add(this.lighthouseLight),this.resize(),new ResizeObserver(()=>this.resize()).observe(e),this.installPointers();for(const a of["raider","runner","armored","support","boss"])gb(a)}shape(e,t,n,i,r,a=1,o=1,c=1){const l=new mt(e,t);return l.position.set(n,i,r),l.scale.set(a,o,c),l.castShadow=!0,l.receiveShadow=!0,l}makeSea(){const e=new nt({color:12052195,transparent:!0,opacity:.3,depthWrite:!1});this.waveBatch=new Xa(Fe,e,180),this.waveBatch.castShadow=!1,this.waveBatch.receiveShadow=!1,this.waveBatch.frustumCulled=!1,this.waveBatch.instanceMatrix.setUsage(pp);for(let t=0;t<180;t++){const n=t*2.3999632,i=5+Math.sqrt(t/180)*37,r=new Et;r.position.set(Math.cos(n)*i,-.316,Math.sin(n)*i),r.scale.set(.27+t%4*.08,.008,.025),r.rotation.y=t*1.76,r.updateMatrix(),this.waveTransforms.push(r),this.waveBatch.setMatrixAt(t,r.matrix)}this.scene.add(this.waveBatch)}topMaterial(e){return e.biome==="sand"?ce.sand:e.biome==="ridge"?ce.ridge:e.biome==="grove"?ce.grove:e.biome==="ore"?ce.ore:Math.abs(e.x+e.z*17)%3===0?ce.grass2:ce.grass}height(e){return e?e.h*.35:.7}tileHeight(e,t){return this.height(this.currentGame?.tiles.get(Z(e,t)))}worldHeight(e,t){const n=this.currentGame?.tiles.get(Z(Math.round(e),Math.round(t)));return this.height(n)}clear(e){const t=new Set;for(const n of[...e.children])e.remove(n),n.traverse(i=>{(e===this.ghost||e===this.particleLayer)&&(i instanceof mt||i instanceof En)&&i.material instanceof In&&t.add(i.material),(i instanceof mt||i instanceof En)&&i.geometry!==Fe&&i.geometry!==ni&&i.geometry!==Oi&&i.geometry!==en&&i.geometry!==sn&&i.geometry.dispose()});for(const n of t)n.dispose()}setSelected(e){this.hoveredType=e,this.updateHover(this.hovered)}rebuild(e,t=!1,n){if(this.finishReveal(),this.recoil.clear(),this.draftMotionKey="",n&&(this.clear(this.particleLayer),this.flashes.length=0),n&&t&&this.smoothCamera(),this.currentGame!==e){for(const l of this.enemies.values())La(l.actor);for(const l of this.fallen)La(l.view.actor);this.figures.clear(),this.enemies.clear(),this.fallen=[],this.clear(this.particleLayer),this.flashes.length=0,this.hovered=null,n||(this.cameraBlend=null)}this.currentGame=e,this.placementKey="!",this.planKey="!",this.threatKey="!",this.markerKey="!",this.clear(this.land),this.clear(this.decorations),this.clear(this.roads),this.clear(this.structures),this.tileMeshes.length=0,this.structureMeshes.clear(),this.previewIndex=-1,this.raidRouteKey="",this.clear(this.ghost),this.candidateMeshes.length=0;const i=n&&!pn()?[...e.tiles.values()].filter(l=>!n.old.has(Z(l.x,l.z))):[],r=new Map,a=i.filter(l=>l.bridge),o=(l,h)=>Math.abs(l.x-h.x)+Math.abs(l.z-h.z),c=[...e.tiles.values()].filter(l=>n?.old.has(Z(l.x,l.z)));a.length&&a.map(h=>({t:h,d:c.reduce((d,u)=>Math.min(d,o(h,u)),1/0)})).sort((h,d)=>h.d-d.d).forEach(({t:h},d)=>r.set(Z(h.x,h.z),d/Math.max(1,a.length-1)));for(const l of e.tiles.values()){const h=this.height(l),d=this.land.children.length,u=this.decorations.children.length,f=!!n&&!n.old.has(Z(l.x,l.z)),m=this.shape(Fe,[ce.dirt,ce.cliff,l.bridge?ce.wood:this.topMaterial(l),ce.rock,ce.dirt,ce.cliff],l.x,(h-.35)/2,l.z,.986,h+.35,.986);if(m.userData={tileX:l.x,tileZ:l.z},this.land.add(m),this.tileMeshes.push(m),l.bridge)for(let g=0;g<3;g++){const x=this.shape(Fe,ce.brass,l.x,h+.024,l.z+(g-1)*.27,.86,.05,.045);this.land.add(x)}!l.bridge&&!e.towers.has(Z(l.x,l.z))&&!(l.x===0&&l.z===0)&&!e.ports.some(g=>g.x===l.x&&g.z===l.z)&&this.makeDecoration(l),e.ports.some(g=>g.x===l.x&&g.z===l.z)&&this.makeDock(l);for(const g of[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}]){if(e.tiles.has(Z(l.x+g.x,l.z+g.z)))continue;const x=this.shape(Fe,_b,l.x+g.x*.48,-.21,l.z+g.z*.48,g.x!==0?.09:.87,.03,g.z!==0?.09:.87);x.castShadow=!1,this.decorations.add(x)}if(f&&n&&!pn()){const g=l.bridge?.26+.22*(r.get(Z(l.x,l.z))??0):.06+Math.min(.18,o(l,n.center)*.035);for(const x of this.land.children.slice(d))this.motion.reveal(x,g,l.bridge?.27:.42,l.bridge?.8:h+.6);for(const x of this.decorations.children.slice(u))this.motion.reveal(x,g+.34,.23,-.24,!0)}}for(const l of e.activePorts){const h=e.paths.get(l.id)||[];for(let d=0;d<h.length-1;d++){const u=h[d],f=e.tiles.get(Z(u.x,u.z));if(!f||f.bridge)continue;const m=this.shape(Fe,ce.sand,u.x,this.height(f)+.018,u.z,.7,.038,.7);if(m.castShadow=!1,this.roads.add(m),n&&!n.old.has(Z(u.x,u.z))&&this.motion.reveal(m,.6,.2,-.05,!0),d>0&&d%2===0){const g=h[d+1],x=this.shape(en,ce.brass,u.x,this.height(f)+.075,u.z,.115,.15,.115);x.rotation.z=Math.PI/2,x.rotation.y=Math.atan2(g.x-u.x,g.z-u.z),x.castShadow=!1,this.roads.add(x),n&&!n.old.has(Z(u.x,u.z))&&this.motion.reveal(x,.65,.18,-.05,!0)}}}this.makeLighthouse(e);for(const l of e.towers.values())this.makeTower(l,e);if(n&&!pn()&&(this.revealUntil=this.elapsed+.88,this.markIsland(n.center,i),!n.old.size)){const l=this.structures.children[0];l&&this.motion.reveal(l,.43,.35,-1.5,!0)}t&&!this.userAdjusted&&this.autoFit(),this.updateHover(this.hovered)}makeDecoration(e){const t=this.currentGame?.random(e.x,e.z,122)??.5;if(e.resource){const n=this.height(e);for(const i of[-.37,.37])for(const r of[-.37,.37]){const a=this.shape(Fe,ce.brass,e.x+i,n+.12,e.z+r,.1,.25,.1);a.castShadow=!1,this.decorations.add(a)}}if(e.resource==="harbor"||e.resource==="relic"){const n=this.height(e),i=e.resource==="harbor"?ce.ice:ce.brass;this.decorations.add(this.shape(Fe,ce.rock,e.x,n+.1,e.z,.67,.2,.67)),this.decorations.add(this.shape(Fe,i,e.x,n+.31,e.z,.43,.25,.43)),this.decorations.add(this.shape(en,i,e.x,n+.66,e.z,.42,.45,.42))}else if(e.biome==="ore")for(let n=0;n<3;n++){const i=e.x+Math.sin(n*2.2+t)*.19,r=e.z+Math.cos(n*2.3+t)*.16,a=this.shape(en,ce.purple,i,this.height(e)+.22,r,.12,.45+n*.12,.14);a.rotation.y=.75,this.decorations.add(a)}else if(e.biome==="grove"&&(t>.16||e.resource==="wood")){const n=this.shape(Fe,ce.trunk,e.x,this.height(e)+.22,e.z,.17,.47,.16),i=this.shape(Fe,t>.55?ce.leaf2:ce.leaf,e.x,this.height(e)+.63,e.z,.7,.56,.64),r=this.shape(Fe,ce.leaf2,e.x-.1,this.height(e)+.94,e.z+.06,.4,.24,.46);this.decorations.add(n,i,r)}else if(e.biome==="ridge"&&t>.7)this.decorations.add(this.shape(Oi,ce.rock,e.x+.15,this.height(e)+.08,e.z+.1,.22,.17,.25));else if(e.biome==="grass"&&t>.7)for(let n=0;n<2;n++){const i=this.shape(en,ce.grove,e.x+(n===0?-.23:.2),this.height(e)+.09,e.z+(n===0?-.17:.2),.09,.18,.09);i.rotation.y=n,this.decorations.add(i)}}makeDock(e){const t=this.height(e);this.decorations.add(this.shape(Fe,ce.wood,e.x,t+.045,e.z,.89,.09,.89));const n=this.shape(Fe,ce.midnight,e.x-.28,t+.45,e.z-.26,.09,.82,.09),i=this.shape(Fe,ce.flag,e.x-.05,t+.72,e.z-.26,.43,.19,.065),r=this.shape(ni,ce.brass,e.x+.26,t+.2,e.z+.23,.13,.13,.13);this.decorations.add(n,i,r)}makeLighthouse(e){const t=this.tileHeight(0,0),n=new lt;n.position.set(0,t,0),n.add(this.shape(Fe,ce.rock,0,.18,0,.9,.36,.9)),n.add(this.shape(sn,ce.ivory,0,.99,0,.3,1.56,.3)),n.add(this.shape(sn,ce.red,0,.5,0,.335,.21,.335)),n.add(this.shape(sn,ce.red,0,1.12,0,.33,.19,.33)),n.add(this.shape(sn,ce.coal,0,1.8,0,.48,.19,.48));const i=this.shape(ni,e.hp>0?ce.brass:ce.coal,0,2.02,0,.3,.3,.3);this.beacon=i,n.add(i);const r=this.shape(en,ce.midnight,0,2.35,0,.6,.45,.6);r.rotation.y=Math.PI/4,n.add(r),n.add(this.shape(Fe,ce.midnight,0,.95,.31,.13,.29,.07)),this.lighthouseLight.position.set(0,t+2,0),this.lighthouseLight.intensity=e.hp<6?8:4,this.structures.add(n)}towerModel(e,t){const n=new lt;n.position.set(e.x,0,e.z);const i=new lt;if(n.add(this.shape(Fe,ce.rock,0,.13,0,.7,.25,.7)),n.add(this.shape(Fe,ce.metal,0,.42,0,.39,.45,.39)),i.position.y=.75,e.type==="bolt"){i.add(this.shape(sn,ce.gun,0,.02,0,.28,.31,.28));const r=this.shape(sn,ce.ivory,0,.04,.33,.12,.6,.12);r.rotation.x=Math.PI/2,i.add(r),i.add(this.shape(Fe,ce.brass,0,.28,0,.24,.07,.34))}else if(e.type==="cannon"){i.add(this.shape(sn,ce.orange,0,.05,0,.32,.31,.32));const r=this.shape(sn,ce.coal,0,.08,.32,.2,.69,.2);r.rotation.x=Math.PI/2,i.add(r),i.add(this.shape(sn,ce.brass,0,.08,.62,.23,.12,.23))}else if(e.type==="frost")i.add(this.shape(Fe,ce.ice,0,.18,0,.4,.42,.4)),i.add(this.shape(en,ce.ice,0,.68,0,.27,.64,.27)),i.add(this.shape(en,ce.purple,-.28,.3,.05,.14,.35,.14));else if(t==="wood"){i.add(this.shape(Fe,ce.wood,0,.1,0,.62,.46,.56)),i.add(this.shape(Fe,ce.brass,0,.39,0,.74,.14,.64));for(let r=0;r<3;r++)i.add(this.shape(sn,ce.trunk,-.22+r*.22,.02,.3,.075,.58,.075))}else if(t==="harbor"){i.add(this.shape(Fe,ce.ice,0,.1,0,.62,.4,.6)),i.add(this.shape(Fe,ce.wood,0,.35,0,.68,.12,.72));const r=this.shape(Fe,ce.ivory,0,.65,0,.07,.62,.07);i.add(r),i.add(this.shape(Fe,ce.ice,.16,.65,0,.26,.3,.06))}else t==="relic"?(i.add(this.shape(Fe,ce.ivory,0,.12,0,.56,.42,.56)),i.add(this.shape(en,ce.brass,0,.54,0,.65,.5,.65)),i.add(this.shape(ni,ce.ice,0,.84,0,.18,.18,.18))):(i.add(this.shape(Fe,ce.wood,0,.1,0,.35,.42,.34)),i.add(this.shape(en,ce.purple,.16,.59,0,.2,.68,.2)),i.add(this.shape(en,ce.brass,-.16,.56,.1,.15,.54,.15)));return e.upgrade!==void 0&&(n.add(this.shape(Fe,e.upgrade===0?ce.brass:ce.ice,0,.22,0,.74,.08,.74)),i.add(this.shape(Fe,e.upgrade===0?ce.brass:ce.ice,0,.32,0,.22,.08,.22))),n.add(i),{model:n,head:i}}makeTower(e,t){const{model:n,head:i}=this.towerModel(e,Ot(t.tiles.get(Z(e.x,e.z))));if(n.position.y=this.tileHeight(e.x,e.z),this.structures.add(n),this.structureMeshes.set(Z(e.x,e.z),{model:n,head:i}),e.type!=="mine"&&t.tiles.get(Z(e.x,e.z))?.h===4){const r=this.shape(Fe,ce.brass,0,-.01,0,.71,.06,.71);n.add(r)}}makeEnemy(e){const t=new lt,n=new lt,i=e.kind==="boss"?1.42:e.kind==="armored"?1.12:e.kind==="runner"?.87:1,r=Dd(e.kind);if(r)n.add(r.model),hc(r,"Land");else{const h=e.kind==="support"?ce.ice:e.kind==="armored"?ce.coal:e.kind==="runner"?ce.orange:e.kind==="boss"?ce.midnight:ce.red;n.add(this.shape(Fe,h,0,.3,0,.44,.45,.51),this.shape(Fe,h,0,.67,.1,.36,.32,.38))}n.scale.setScalar(i),t.add(n);const a=.52*i,o=new lt;o.position.y=1.17*i,o.add(this.shape(Fe,ce.coal,0,0,0,a,.075,.038));const c=this.shape(Fe,ce.red,0,0,.029,a,.053,.04);o.add(c),t.add(o);const l=this.shape(Fe,ce.ice,0,.035,0,.44*i,.045,.44*i);return l.visible=!1,l.castShadow=!1,t.add(l),this.figures.add(t),{group:t,fill:c,model:n,actor:r,age:0,width:a,lastHit:0,lane:0,depth:0,frost:l}}setPreview(e){if(this.previewIndex===e||!this.currentGame)return;const t=this.previewIndex<0;this.previewIndex=e,this.clear(this.ghost),this.candidateMeshes.length=0;const n=this.currentGame.expansions.find(c=>c.id===e);if(!n){this.userAdjusted||this.autoFit();return}t&&!this.userAdjusted&&(this.zoomFactor=1);for(const c of this.currentGame.expansions){const l=c.id===e,h=c.resource?Xd[c.resource]:14016686,d=new nt({color:h,transparent:!0,opacity:l?.94:.52,depthWrite:!1}),u=new nt({color:16773303,transparent:!0,opacity:l?1:.85,depthWrite:!1});for(const f of c.tiles){if(f.bridge&&!l)continue;const m=this.height(f),g=this.shape(Fe,d,f.x,(m-.3)/2,f.z,.94,m+.3,.94);g.castShadow=!1,g.userData={candidateTile:f},this.ghost.add(g),f.bridge||this.candidateMeshes.push(g),f.resource&&this.ghost.add(this.shape(en,u,f.x,m+.36,f.z,.46,.7,.46))}}const i=this.shape(sn,new nt({color:16763047,transparent:!0,opacity:.38,depthWrite:!1}),n.landing.x,this.height(n.tiles.find(c=>c.x===n.landing.x&&c.z===n.landing.z))+1,n.landing.z,.25,2,.25);i.castShadow=!1,this.ghost.add(i);const r=n.route.map(c=>new U(c.x,this.height(n.tiles.find(l=>l.x===c.x&&l.z===c.z)??this.currentGame?.tiles.get(Z(c.x,c.z)))+.12,c.z)),a=new En(new Vt().setFromPoints(r),new Mi({color:16768904,depthTest:!1,transparent:!0,opacity:1}));a.renderOrder=10,this.ghost.add(a);const o=new nt({color:16768904,depthTest:!1,transparent:!0,opacity:1});for(const c of r){const l=this.shape(ni,o,c.x,c.y,c.z,.075,.075,.075);l.castShadow=!1,l.renderOrder=11,this.ghost.add(l)}this.userAdjusted||this.autoFit()}updateHover(e){this.hovered=e;const t=this.currentGame;if(t?.raid){const o=t.ports.find(l=>l.id===this.raidPortId);this.highlight.visible=!!o,this.rangeRing.visible=!1,o&&(this.highlight.material.color.setHex(16760678),this.highlight.position.set(o.x,this.tileHeight(o.x,o.z)+.12,o.z));const c=e?t.towers.get(Z(e.x,e.z)):void 0;if(c&&c.type!=="mine"){const l=Fn(c).range*(e.h>=3?1.25:1);this.rangeRing.visible=!0,this.rangeRing.scale.set(l,l,1),this.rangeRing.position.set(c.x,this.height(e)+.055,c.z)}return}if(!t||!t.canEdit||!this.placementEnabled&&!this.facilityKey){this.highlight.visible=!1,this.rangeRing.visible=!1;return}const n=this.facilityKey?t.towers.get(this.facilityKey):void 0;if(n&&!this.moving&&(e=t.tiles.get(Z(n.x,n.z))??null),this.draft){this.highlight.visible=!1,this.rangeRing.visible=!1;return}if(!e){this.highlight.visible=!1,this.rangeRing.visible=!1;return}const i=t.towers.get(Z(e.x,e.z)),r=n?.type??i?.type??this.hoveredType,a=this.moving&&this.facilityKey?t.canMove(this.facilityKey,e.x,e.z):i?null:t.canBuild(r,e.x,e.z);if(this.highlight.visible=!0,this.highlight.material.color.setHex(a?16092014:13238149),this.highlight.position.set(e.x,this.height(e)+.034,e.z),this.rangeRing.visible=r!=="mine"&&!a&&!!(n||i),this.rangeRing.visible){const o=(n?Fn(n).range:i?Fn(i).range:Cn[r].range)*(e.h>=3?1.25:1);this.rangeRing.scale.set(o,o,1),this.rangeRing.position.set(e.x,this.height(e)+.055,e.z)}}hitTest(e,t){const n=this.canvas.getBoundingClientRect(),i=new He((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.ray.setFromCamera(i,this.camera);const r=this.ray.intersectObjects(this.currentGame?.phase==="expansion"?this.candidateMeshes:this.tileMeshes,!1);if(!r.length||!this.currentGame)return null;const a=r[0].object.userData;return a.candidateTile?a.candidateTile:this.currentGame.tiles.get(Z(a.tileX,a.tileZ))||null}installPointers(){this.canvas.addEventListener("pointerdown",n=>{n.button!==0&&n.pointerType==="mouse"||(this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),this.canvas.setPointerCapture(n.pointerId),this.pointers.size===1?this.pointerStart={id:n.pointerId,x:n.clientX,y:n.clientY,moved:!1}:(this.pointerStart&&(this.pointerStart.moved=!0),this.lastPinch=0))}),this.canvas.addEventListener("pointermove",n=>{const i=this.pointers.get(n.pointerId);if(i)if(this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),this.pointers.size>=2){this.panCamera((n.clientX-i.x)/2,(n.clientY-i.y)/2);const[r,a]=[...this.pointers.values()],o=Math.hypot(r.x-a.x,r.y-a.y);this.lastPinch>0&&this.setZoom(this.zoomFactor*o/this.lastPinch),this.lastPinch=o,this.userAdjusted=!0}else this.pointerStart&&Math.hypot(n.clientX-this.pointerStart.x,n.clientY-this.pointerStart.y)>8&&(this.pointerStart.moved=!0),this.pointerStart?.moved&&(n.shiftKey?(this.interruptCamera(),this.yaw+=(n.clientX-i.x)*.0065,this.pitch=Nd(this.pitch-(n.clientY-i.y)*.005,.58,1.28)):this.panCamera(n.clientX-i.x,n.clientY-i.y),this.userAdjusted=!0,this.updateCamera());else if(n.pointerType==="mouse"){const r=this.hitTest(n.clientX,n.clientY);r!==this.hovered&&(this.updateHover(r),this.onHover(r))}});const e=n=>{const i=this.pointerStart&&this.pointerStart.id===n.pointerId&&!this.pointerStart.moved&&this.pointers.size===1&&n.type==="pointerup";if(this.pointers.delete(n.pointerId),this.lastPinch=0,i){this.revealUntil>this.elapsed&&(this.finishReveal(),this.scene.updateMatrixWorld(!0));const r=this.hitTest(n.clientX,n.clientY);r&&this.onTileClick(r.x,r.z)}this.pointerStart?.id===n.pointerId&&(this.pointerStart=null),n.pointerType!=="mouse"&&(this.updateHover(null),this.onHover(null))};for(const n of["pointerup","pointercancel","lostpointercapture"])this.canvas.addEventListener(n,e);const t=()=>{this.pointers.clear(),this.pointerStart=null,this.lastPinch=0};window.addEventListener("blur",t),document.addEventListener("visibilitychange",()=>{document.hidden&&t()}),this.canvas.addEventListener("wheel",n=>{n.preventDefault(),this.interruptCamera(),this.userAdjusted=!0,this.setZoom(this.zoomFactor*Math.exp(-n.deltaY*.0013))},{passive:!1})}interruptCamera(){if(!this.cameraBlend)return;const{x:e,z:t}=this.camera.position,n=new U;this.camera.getWorldDirection(n);const i=(.55-this.camera.position.y)/n.y;this.cameraTarget.set(e+n.x*i,0,t+n.z*i);const r=this.canvas.clientWidth/Math.max(1,this.canvas.clientHeight);this.zoomFactor=this.baseView*(r<.8?.76/r:1)*(this.currentGame?.raid?r<.8?1.02:1.08:1)/(this.camera.top-this.camera.bottom),this.cameraBlend=null}cameraState(){return{target:this.cameraTarget.clone(),base:this.baseView,zoom:this.zoomFactor,yaw:this.yaw,pitch:this.pitch,adjusted:this.userAdjusted}}restoreCamera(e){this.cameraBlend=null,this.cameraTarget.copy(e.target),this.baseView=e.base,this.zoomFactor=e.zoom,this.yaw=e.yaw,this.pitch=e.pitch,this.userAdjusted=e.adjusted,this.updateCamera()}panCamera(e,t){this.interruptCamera();const n=(this.camera.top-this.camera.bottom)/Math.max(1,this.canvas.clientHeight);this.cameraTarget.x-=e*n*Math.cos(this.yaw)+t*n*Math.sin(this.yaw)/Math.sin(this.pitch),this.cameraTarget.z+=e*n*Math.sin(this.yaw)-t*n*Math.cos(this.yaw)/Math.sin(this.pitch),this.userAdjusted=!0,this.updateCamera()}zoomIn(){this.interruptCamera(),this.userAdjusted=!0,this.setZoom(this.zoomFactor*1.18)}zoomOut(){this.interruptCamera(),this.userAdjusted=!0,this.setZoom(this.zoomFactor/1.18)}setZoom(e){this.cameraBlend=null,this.zoomFactor=Nd(e,.55,Math.max(2.9,this.baseView/6)),this.updateCamera()}autoFit(){if(!this.currentGame)return;const e=[...this.currentGame.tiles.values(),...this.previewIndex>=0?this.currentGame.expansions.flatMap(o=>o.tiles):[]],t=Math.min(...e.map(o=>o.x)),n=Math.max(...e.map(o=>o.x)),i=Math.min(...e.map(o=>o.z)),r=Math.max(...e.map(o=>o.z)),a=Math.max(n-t,r-i);this.smoothCamera(),this.baseView=Math.max(7.5,a*1.25+4.5),this.cameraTarget.set((t+n)/2,0,(i+r)/2),this.updateCamera()}resetView(){this.userAdjusted=!1,this.yaw=.73,this.pitch=.99,this.zoomFactor=1,this.autoFit()}resize(){const e=this.canvas.parentElement;if(!e)return;const t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);this.renderer.setSize(t,n,!1),this.updateCamera()}titleMode=!1;titleTime=0;setTitleMode(e){this.cameraBlend=null,this.titleMode=e,this.titleTime=0,this.hudStamp="",this.hudNext=0,this.hudBottom=0,this.hudTop=0,this.markerRoot.hidden=e,this.dangerMarker&&(this.dangerMarker.hidden=!0),e&&(this.clearOverlay(this.placementLayer),this.clearOverlay(this.planLayer),this.clearOverlay(this.threatLayer),this.highlight.visible=!1,this.rangeRing.visible=!1),this.updateCamera()}hudStamp="";hudNext=0;hudBottom=0;hudTop=0;fitHUD(){const e=performance.now();if(e<this.hudNext||(this.hudNext=e+150,innerWidth>650))return;const t=document.querySelector(".bottom-area"),n=document.getElementById("expand-panel"),i=document.getElementById("facility-panel"),r=this.canvas.clientHeight,a=Math.max(52,document.querySelector(".topbar").getBoundingClientRect().bottom+12),o=Math.min(r,...[t,n,i].filter(h=>!h.hidden&&getComputedStyle(h).visibility!=="hidden"&&h.getBoundingClientRect().height>0).map(h=>h.getBoundingClientRect().top)),c=Math.round(r-o),l=a+":"+c+":"+r;l!==this.hudStamp&&(this.hudStamp=l,this.smoothCamera(),this.hudTop=a,this.hudBottom=c,this.canvas.closest(".field")?.setAttribute("style","--hud-bottom:"+c+"px"),this.updateCamera())}updateCamera(){const e=this.canvas.parentElement;if(!e)return;const t=Math.max(1,e.clientWidth)/Math.max(1,e.clientHeight),n=t<.8?.76/t:1,i=this.currentGame?.raid?t<.8?1.02:1.08:1;let r=this.baseView*n*i/this.zoomFactor;if(t<.8&&this.hudBottom&&this.currentGame&&!this.userAdjusted){const o=e.clientHeight,c=Math.max(o*.28,o-this.hudBottom-this.hudTop-30),h=[...this.currentGame.tiles.values(),...this.previewIndex>=0?this.currentGame.expansions.flatMap(u=>u.tiles):[]].map(u=>-(u.x*Math.sin(this.yaw)+u.z*Math.cos(this.yaw))*Math.sin(this.pitch)),d=Math.max(...h)-Math.min(...h)+2.6;r=Math.max(r,d*o/c)}if(this.camera.left=-r*t/2,this.camera.right=r*t/2,this.camera.top=r/2,this.camera.bottom=-r/2,this.currentGame?.raid&&t>=.8){const o=r*.12;this.camera.top-=o,this.camera.bottom-=o}if(t<.8&&this.hudBottom){const o=(this.hudTop+e.clientHeight-this.hudBottom-26)/2,c=r*(o/e.clientHeight-.5);this.camera.top+=c,this.camera.bottom+=c}if(this.previewIndex>=0&&this.currentGame?.phase==="expansion"){if(e.clientWidth>=760){const o=r*t*.14;this.camera.left+=o,this.camera.right+=o}else if(!this.hudBottom){const o=r*.13;this.camera.top-=o,this.camera.bottom-=o}}if(this.titleMode){const o=e.clientWidth<=650,c=o?this.baseView*Math.max(1,.94/t):this.baseView*1.04,l=o?0:-c*t*.23,h=o?c*(e.clientHeight<=680?.28:.19):0;this.camera.left=-c*t/2+l,this.camera.right=c*t/2+l,this.camera.top=c/2-h,this.camera.bottom=-c/2-h}this.camera.updateProjectionMatrix(),this.camera.position.set(this.cameraTarget.x+Math.sin(this.yaw)*Math.cos(this.pitch)*30,30*Math.sin(this.pitch),this.cameraTarget.z+Math.cos(this.yaw)*Math.cos(this.pitch)*30),this.target.set(this.cameraTarget.x,.55,this.cameraTarget.z),this.camera.lookAt(this.target);const a=this.cameraBlend;if(this.userAdjusted||this.titleMode)this.cameraBlend=null;else if(a){const o=ka(a.time/.43);this.camera.left=Mr.lerp(a.left,this.camera.left,o),this.camera.right=Mr.lerp(a.right,this.camera.right,o),this.camera.top=Mr.lerp(a.top,this.camera.top,o),this.camera.bottom=Mr.lerp(a.bottom,this.camera.bottom,o),this.camera.position.lerpVectors(a.position,this.camera.position,o),this.camera.quaternion.slerpQuaternions(a.quaternion,this.camera.quaternion,o),this.camera.updateProjectionMatrix()}this.camera.updateMatrixWorld(!0)}syncEnemies(e,t){const n=new Set(e.enemies.map(a=>a.id));for(const[a,o]of this.enemies)if(!n.has(a)){this.enemies.delete(a);const c=e.fx.some(h=>h.kind==="kill"&&h.unitId===a),l=e.fx.some(h=>h.kind==="strike"&&h.unitId===a);o.actor&&o.group.visible&&(c||l)?(hc(o.actor,c?"Death":"Attack"),o.fill.parent.visible=!1,o.frost.visible=!1,this.fallen.push({view:o,time:c?.8:.45})):(La(o.actor),this.figures.remove(o.group))}for(const a of[...this.fallen])a.time-=t,a.view.actor?.mixer.update(t),a.time<=0&&(La(a.view.actor),this.figures.remove(a.view.group),this.fallen.splice(this.fallen.indexOf(a),1));const i=new Map([...e.towers.values()].map(a=>[a.id,a])),r=new Map;for(const a of e.enemies)if(a.hp>0&&(a.launchDelay??0)<=0&&a.segment>=a.path.length-1){const o=Z(a.x,a.z),c=r.get(o)??[];c.push(a),r.set(o,c)}for(const a of e.enemies){let o=this.enemies.get(a.id);if(o||(o=this.makeEnemy(a),this.enemies.set(a.id,o)),o.group.visible=(a.launchDelay??0)<=0,!o.group.visible)continue;o.age+=t;const c=a.path[Math.min(a.segment+1,a.path.length-1)],l=a.path[Math.min(a.segment,a.path.length-1)],h=a.resourceTarget===void 0?{x:0,z:0}:i.get(a.resourceTarget)??{x:0,z:0},d=a.segment>=a.path.length-1,u=d?h.x-a.x:c.x-l.x,f=d?h.z-a.z:c.z-l.z,m=Math.atan2(u,f);let g=(a.id%3-1)*.17,x=0;if(d){const v=r.get(Z(a.x,a.z))??[a],b=v.indexOf(a),L=Math.max(1,Math.min(3,v.length));g=(b%3-(L-1)/2)*.26,x=Math.min(.44,Math.floor(b/3)*.21)}const p=1-Math.exp(-t*12);o.lane+=(g-o.lane)*p,o.depth+=(x-o.depth)*p;const y=Math.cos(m)*o.lane-Math.sin(m)*o.depth,S=-Math.sin(m)*o.lane-Math.cos(m)*o.depth,T=a.x+y,R=this.worldHeight(a.x,a.z)+.015,E=a.z+S;if(o.age<=t||(o.group.position.x-T)**2+(o.group.position.y-R)**2+(o.group.position.z-E)**2>4)o.group.position.set(T,R,E);else{const v=1-Math.exp(-t*25);o.group.position.x+=(T-o.group.position.x)*v,o.group.position.y+=(R-o.group.position.y)*v,o.group.position.z+=(E-o.group.position.z)*v}const C=Math.atan2(Math.sin(m-o.group.rotation.y),Math.cos(m-o.group.rotation.y));if(o.group.rotation.y+=C*(1-Math.exp(-t*18)),o.frost.visible=a.slow>0,!o.actor){const v=Dd(a.kind);v&&(o.model.clear(),o.model.add(v.model),o.actor=v)}if(o.actor){const v=(a.attackPulse??0)>0?"Attack":a.attackPhase==="windup"?"Windup":a.hit>o.lastHit+.01?"Hit":(a.healPulse??0)>0?"Heal":o.age<.33?"Land":d?"Idle":"Move",b=o.actor.action&&o.actor.action.isRunning()&&["Hit","Attack","Heal"].includes(o.actor.state)&&(v==="Move"||v==="Idle"),L=a.slow>0?a.slowFactor??.47:1,B=as(a.kind,e.raid?.rulesVersion),z=o.actor.clips.get("Windup")?.duration??B.windup,W=v==="Move"?Math.max(.25,a.speed*L*(e.tiles.get(Z(l.x,l.z))?.biome==="grove"&&a.kind!=="runner"?.7:1)):v==="Windup"?z/B.windup*L:1;b||hc(o.actor,v,W),o.actor.mixer.update(t)}o.lastHit=a.hit;const I=Math.max(.02,a.hp/a.maxHp);o.fill.parent.visible=I<.995||a.kind==="boss",o.fill.scale.x=o.width*I,o.fill.position.x=-o.width*(1-I)/2,o.fill.parent.rotation.y=this.yaw-o.group.rotation.y}}retireFlash(e){this.particleLayer.remove(e.group);const t=new Set;e.group.traverse(n=>{(n instanceof mt||n instanceof En)&&([Fe,ni,Oi,en,sn].includes(n.geometry)||n.geometry.dispose(),n.material instanceof In&&t.add(n.material))}),t.forEach(n=>n.dispose()),this.flashes.splice(this.flashes.indexOf(e),1)}majorEffect(e,t){if(pn())return;for(;this.flashes.length>=112;){const l=this.flashes.find(h=>!h.priority)??this.flashes[0];this.retireFlash(l)}const n=t==="arrival"?16757366:t==="defeat"?16019024:15268786,i=this.worldHeight(e.x,e.z)+.08;this.ripple(e,n,t==="defeat"?2.5:t==="victory"?2.9:1.7,.63,i,!0);const r=new lt,a=new nt({color:n,transparent:!0,depthWrite:!1}),o=new nt({color:5199702,transparent:!0,depthWrite:!1}),c=t==="boss-kill"||t==="defeat"?12:8;for(let l=0;l<c;l++){const h=l*Math.PI*2/c,d=this.shape(Fe,a,e.x+Math.cos(h)*.3,i+.24,e.z+Math.sin(h)*.3,.11,.18,.11);d.castShadow=!1,d.userData.velocity=new U(Math.cos(h)*1.9,.8+l%3*.24,Math.sin(h)*1.9),r.add(d)}if(t==="boss-kill"||t==="defeat")for(let l=0;l<3;l++){const h=this.shape(Oi,o,e.x+(l-1)*.24,i+.7,e.z,.25,.25,.25);h.castShadow=!1,h.userData.smoke=!0,h.userData.velocity=new U((l-1)*.2,.55,0),r.add(h)}else o.dispose();this.particleLayer.add(r),this.flashes.push({group:r,time:0,total:t==="defeat"?.86:.65,priority:!0})}markBossArrival(e){this.majorEffect(e,"arrival")}markVictory(){this.majorEffect({x:0,z:0},"victory")}markDefeat(){this.majorEffect({x:0,z:0},"defeat")}syncShots(e){for(const t of e.fx){if(t.kind==="kill"&&t.type==="boss"){this.majorEffect(t.at,"boss-kill");continue}if(this.flashes.length>=120||(this.flashes.length>=72||e.speed>1||e.enemies.length>60)&&t.kind==="hit"||this.flashes.length>=96&&t.kind!=="core"&&t.kind!=="capture"&&!(t.kind==="kill"&&t.type==="boss"))continue;const n=new lt;if(t.kind==="strike"||t.kind==="heal"||t.kind==="disable"){const i=t.kind==="heal"?7862212:t.kind==="disable"?10414847:16766091,r=new U(t.from.x,this.worldHeight(t.from.x,t.from.z)+.55,t.from.z),a=new U(t.to.x,this.worldHeight(t.to.x,t.to.z)+.5,t.to.z);n.add(new En(new Vt().setFromPoints([r,a]),new Mi({color:i,transparent:!0,opacity:.85}))),n.add(this.shape(ni,new nt({color:i,transparent:!0,opacity:.7,wireframe:t.kind==="disable"}),a.x,a.y,a.z,.25,.25,.25))}else if(t.kind==="shot"){const i=t.type==="cannon"?.19:t.type==="bolt"?.08:.035;this.recoil.set(Z(t.from.x,t.from.z),i);const r=t.type==="cannon"?16753509:t.type==="frost"?9297919:15007665,a=this.structureMeshes.get(Z(t.from.x,t.from.z)),o=new U(t.from.x,this.worldHeight(t.from.x,t.from.z)+1.05,t.from.z);if(a&&t.type!=="frost"){const u=Math.atan2(t.to.x-t.from.x,t.to.z-t.from.z);o.x+=Math.sin(u)*.63,o.z+=Math.cos(u)*.63}const c=new U(t.to.x,this.worldHeight(t.to.x,t.to.z)+.55,t.to.z),l=new Vt().setFromPoints([o,c]);n.add(new En(l,new Mi({color:r,transparent:!0,opacity:.9})));const h=this.shape(Oi,new nt({color:r,transparent:!0,opacity:1,depthWrite:!1}),o.x,o.y,o.z,t.type==="cannon"?.34:.17,.2,.2);h.castShadow=!1,n.add(h);const d=this.shape(ni,new nt({color:r,transparent:!0,opacity:.86,depthWrite:!1}),c.x,c.y,c.z,.21,.21,.21);if(d.castShadow=!1,n.add(d),t.type==="cannon"||t.type==="frost"){this.ripple(t.to,r,t.type==="cannon"?.96:.72,.4,this.worldHeight(t.to.x,t.to.z)+.09);const u=e.speed>1?3:t.type==="cannon"?6:4;if(t.type==="cannon"){const f=this.shape(Oi,new nt({color:5458243,transparent:!0,opacity:.6,depthWrite:!1}),c.x,c.y+.1,c.z,.22,.22,.22);f.castShadow=!1,f.userData.smoke=!0,f.userData.velocity=new U(0,.55,0),n.add(f)}for(let f=0;f<u;f++){const m=f*2*Math.PI/u,g=this.shape(t.type==="frost"?en:Oi,new nt({color:t.type==="frost"?13498367:15316873,transparent:!0,depthWrite:!1}),c.x,c.y,c.z,.12,.18,.12);g.castShadow=!1,g.userData.velocity=new U(Math.cos(m)*1.4,.8,Math.sin(m)*1.4),n.add(g)}}}else if(t.kind==="kill"||t.kind==="hit"||t.kind==="core"||t.kind==="capture"){const i=t.kind==="capture"?16765562:t.kind==="core"?16732257:t.kind==="kill"?16765594:15204285;(t.kind==="core"||t.kind==="capture")&&this.ripple(t.at,i,t.kind==="core"?1.5:1.1,.55,void 0,!0);for(let r=0;r<(t.kind==="kill"?7:3);r++){const a=r*(Math.PI*2/(t.kind==="kill"?7:3)),o=t.at.x+Math.cos(a)*.17,c=t.at.z+Math.sin(a)*.17,l=this.shape(Fe,new nt({color:i,transparent:!0,opacity:.88,depthWrite:!1}),o,this.worldHeight(t.at.x,t.at.z)+.5+r*.04,c,.09,.14,.09);l.castShadow=!1,l.userData.velocity=new U(Math.cos(a)*1.1,1.1,Math.sin(a)*1.1),n.add(l)}}n.children.length&&(this.particleLayer.add(n),this.flashes.push({group:n,time:0,total:t.kind==="land"?.9:t.kind==="kill"?.55:.25}))}}render(e,t,n=t){if(this.elapsed+=n,this.cameraBlend&&(this.cameraBlend.time+=n,this.cameraBlend.time>=.43&&(this.cameraBlend=null),this.updateCamera()),this.waterTime+=t,!pn())for(let r=0;r<this.waveTransforms.length;r++){const a=this.waveTransforms[r];a.scale.x=(.3+r%4*.08)*(1+Math.sin(this.waterTime*.8+r*1.7)*.22),a.updateMatrix(),this.waveBatch.setMatrixAt(r,a.matrix)}this.waveBatch.instanceMatrix.needsUpdate=!0,this.titleMode?(this.titleTime+=t,this.yaw=pn()?.73:.73+Math.sin(this.titleTime*.12)*.1,this.updateCamera(),this.highlight.visible=!1,this.rangeRing.visible=!1):(this.fitHUD(),this.syncPlanning(e),this.syncTactical(e)),pn()&&this.motion.active&&this.finishReveal();const i=this.revealUntil>this.elapsed;this.placementLayer.visible=!i,this.threatLayer.visible=!i,this.markerRoot.style.visibility=i?"hidden":"",this.syncEnemies(e,t);for(const r of e.towers.values()){const a=this.structureMeshes.get(Z(r.x,r.z));if(a&&!this.motion.has(a.head)&&r.type==="mine"){const o=e.plundered.has(r.id)||e.raid?.captured.includes(r.id);a.head.scale.y=o?.28:1,a.head.position.y=o?.3:.75}a&&!this.motion.has(a.head)&&r.type!=="mine"&&(a.head.rotation.y+=Math.atan2(Math.sin(r.rotation-a.head.rotation.y),Math.cos(r.rotation-a.head.rotation.y))*(1-Math.exp(-t*24)),a.head.position.y=(r.deploy??0)>0?.55:.75,a.head.scale.y=(r.disabledFor??0)>0?.55:1)}this.motion.tick(n),this.syncShots(e);for(const[r,a]of this.recoil){const o=this.structureMeshes.get(r);o&&(o.head.position.x=-Math.sin(o.head.rotation.y)*a,o.head.position.z=-Math.cos(o.head.rotation.y)*a);const c=Math.max(0,a-n*1.2);c===0?(o&&(o.head.position.x=0,o.head.position.z=0),this.recoil.delete(r)):this.recoil.set(r,c)}for(const r of[...this.flashes]){r.time+=Math.max(t,n);const a=r.time/r.total;r.group.traverse(o=>{typeof o.userData.grow=="number"&&o.scale.setScalar(.15+o.userData.grow*ka(a)),o.userData.shrink&&(o.scale.setScalar(Math.max(.01,1-a)),o.position.y+=n*.5),o.userData.smoke&&o.scale.setScalar(.22+ka(a)*.36),o.userData.velocity&&(o.position.addScaledVector(o.userData.velocity,n),o.userData.velocity.y-=n*1.2),o instanceof mt&&o.material instanceof nt&&(o.material.opacity=Math.max(0,1-a)),o instanceof En&&o.material instanceof Mi&&(o.material.opacity=Math.max(0,1-a))}),a>=1&&this.retireFlash(r)}this.beacon&&(this.beacon.material=e.hp<=0?ce.coal:ce.brass),this.lighthouseLight.intensity=e.hp<=0?0:e.hp<=5?6.5+Math.sin(this.elapsed*5)*1.25:3.5+Math.sin(this.elapsed*3)*.8,this.renderer.render(this.scene,this.camera)}}const Ka="voxel-tide-defense:local-run:v1",bb="voxel-tide-defense:base:v1",Ud=()=>({version:1,profile:{tp:0,unlocked:[],bestWave:0,runCount:0,lastResult:null},active:null});function dc(s,e){if(e.raid||!e.localRun||e.phase==="gameover")throw Error("保存対象外のラン");const t=e.toBase();return mo(t,!0),{id:s,tech:[...e.localTech],base:t,phase:e.phase==="combat"?"combat":"prepare",raidAttemptWave:e.raidAttemptWave,battle:{enemies:e.enemies.map(n=>({...n,path:n.path.map(i=>({...i}))})),towers:[...e.towers.values()].map(n=>({...n})),waveSpawned:e.waveSpawned,waveTotal:e.waveTotal,waveTimer:e.waveTimer,spawnTimer:e.spawnTimer,duration:e.duration,nextEnemyId:e.nextEnemyId,waveStartGold:e.waveStartGold,waveStartHp:e.waveStartHp,battleKills:e.battleKills,battleStats:[...e.battleStats].map(([n,i])=>[n,{...i}]),plundered:[...e.plundered],resourceDamage:{...e.resourceDamage},lastDefense:e.lastDefense,lastReward:e.lastReward,speed:e.speed}}}function ku(s){if(mo(s.base,!0),!s.id||!Array.isArray(s.tech)||s.tech.some(n=>!fc.includes(n))||!["prepare","combat"].includes(s.phase)||!s.battle||!Array.isArray(s.battle.enemies)||!Array.isArray(s.battle.towers))throw Error("ランの保存データが不正です");const e=new Bt(s.base.seed,s.base,!0);e.configureLocal(s.tech),e.raidAttemptWave=s.raidAttemptWave??0;const t=structuredClone(s.battle);return e.phase=s.phase,e.enemies=t.enemies,e.towers=new Map(t.towers.map(n=>[n.x+","+n.z,n])),e.waveSpawned=t.waveSpawned,e.waveTotal=t.waveTotal,e.waveTimer=t.waveTimer,e.spawnTimer=t.spawnTimer,e.duration=t.duration,e.nextEnemyId=t.nextEnemyId,e.waveStartGold=t.waveStartGold,e.waveStartHp=t.waveStartHp,e.battleKills=t.battleKills,e.battleStats=new Map(t.battleStats),e.plundered=new Set(t.plundered),e.resourceDamage=t.resourceDamage,e.lastDefense=t.lastDefense,e.lastReward=t.lastReward,e.speed=t.speed,e}class Fd{state=Ud();raw=null;storage;constructor(e){if(this.storage=e,!e)return;const t=e.getItem(Ka);if(this.raw=t,t){const i=JSON.parse(t);if(i.version!==1||!i.profile||!Number.isSafeInteger(i.profile.tp)||i.profile.tp<0||!Array.isArray(i.profile.unlocked)||i.profile.unlocked.some(r=>!fc.includes(r))||!Number.isSafeInteger(i.profile.bestWave)||!Number.isSafeInteger(i.profile.runCount))throw Error("プロフィールを読み込めません");i.active&&ku(i.active),this.state=i;return}const n=e.getItem(bb);if(n){const i=JSON.parse(n);mo(i,!0);const r=new Bt(i.seed,i,!0);r.configureLocal(fc),this.commit({...Ud(),active:dc(crypto.randomUUID(),r)})}}get profile(){return this.state.profile}get active(){return this.state.active}commit(e){if(this.storage){if(this.storage.getItem(Ka)!==this.raw)throw Error("別のタブで進行が更新されました。再読み込みしてください");const t=JSON.stringify(e);this.storage.setItem(Ka,t),this.raw=t}this.state=e}start(e){if(this.active)throw Error("現在の挑戦を終了してください");const t=new Bt(e);return t.configureLocal(this.profile.unlocked,!0),this.commit({...this.state,active:dc(crypto.randomUUID(),t)}),t}save(e){this.active&&this.commit({...this.state,active:dc(this.active.id,e)})}finish(e,t){if(!this.active){if(this.profile.lastResult)return this.profile.lastResult;throw Error("精算する挑戦がありません")}if(e.seed!==this.active.base.seed)throw Error("異なる挑戦は精算できません");const n=this.profile,i=e.completedWaves,r={id:this.active.id,seed:e.seed,wave:e.wave,cleared:i,islands:e.islandCount,kills:e.kills,tp:Zd(i),best:i>n.bestWave,reason:t};return this.commit({version:1,active:null,profile:{...n,tp:n.tp+r.tp,bestWave:Math.max(i,n.bestWave),runCount:n.runCount+1,lastResult:r}}),r}purchase(e){const t=this.profile,n=ss.find(i=>i.id===e);return!n||t.unlocked.includes(e)||t.tp<n.cost||n.requires&&!t.unlocked.includes(n.requires)?!1:(this.commit({...this.state,profile:{...t,tp:t.tp-n.cost,unlocked:[...t.unlocked,e]}}),!0)}}const yb=[{name:"沿岸警備島",description:"連射砲中心。装甲兵で突破を狙う。",types:["bolt","bolt","frost"]},{name:"砲撃要塞",description:"榴弾砲中心。分散した投入で爆風を避ける。",types:["cannon","bolt","cannon"]},{name:"氷結群島",description:"減速と砲撃の連携。複数の港を狙う。",types:["frost","cannon","bolt"]}];function zu(s,e=Ja,t=!1){const n=s.expeditionWins??0,i=Math.min(8,Math.floor(n/3)),r=new Bt(s.seed,s,t).economy,a=r.budget;return yb.map((o,c)=>{const l=Math.floor(Tn(s.seed,n,c,1701)*4294967296),h=new Bt(l),d=Math.min(e===4?8:6,2+(c===2?1:0)+Math.floor(i/2)),u=e===4;for(;h.islandCount<d&&h.openExpansion();){const m=h.expansions.filter(x=>!x.blocked),g=(c===2&&h.islandCount>=2?m.find(x=>!x.replacePortId):void 0)??m[c%m.length];if(!g||!h.chooseExpansion(g.id))break;h.completeWave()}h.wave=1+i,h.completedWaves=i,h.expandedWave=0,h.ports.forEach(m=>m.createdWave=0),h.gold=1e5;for(const m of h.tiles.values())if(m.resource&&h.canBuild("mine",m.x,m.z)===null){h.build("mine",m.x,m.z);break}const f=Math.min(h.buildLimit-h.towers.size,(u?2+c*3:e===3?1+c*2:1+c)+Math.floor(i/2));for(let m=0;m<f;m++){const g=o.types[m%o.types.length],x=[];for(const y of h.tiles.values()){if(y.bridge||h.towers.has(Z(y.x,y.z))||h.ports.some(E=>E.x===y.x&&E.z===y.z)||y.x===0&&y.z===0)continue;const T=Cn[g].range*(y.h>=3?1.25:1);let R=0;for(const E of h.paths.values())for(const C of E.slice(0,-1)){if(an(C,y)>T)continue;const I=[...h.towers.values()].filter(v=>v.type===g&&an(v,C)<=Fn(v).range).length;R+=(1+.25*(y.h>=3?1:0))/(1+I*.3)}R+=Tn(l,y.x,y.z,900+m)*.8,x.push({tile:y,score:R})}const p=x.sort((y,S)=>S.score-y.score).find(({tile:y})=>!h.canBuild(g,y.x,y.z))?.tile;if(!p||!h.build(g,p.x,p.z))break;(u&&(c===2&&m===0||c===1&&m===0)||i>=3&&m<Math.floor(i/3))&&h.upgrade(Z(p.x,p.z),u?0:c===1?1:0)}return h.gold=0,h.hp=18,h.expeditionWins=0,h.expansionPermits=0,{id:[s.seed,n,c].join(":"),rulesVersion:e,name:o.name,description:o.description,rank:c+1,reward:t?60+30*c:90+70*c+25*i+r.income,budget:a,base:h.toBase()}})}function Mb(s,e){if(e.rulesVersion!==(s.rulesVersion??1)||e.targetId!==s.id||!Number.isSafeInteger(e.endStep)||e.endStep<0||e.endStep>4e4||!Array.isArray(e.commands)||e.commands.length>s.budget)return null;const t=Bt.raidFrom(s.base,{budget:s.budget,rulesVersion:e.rulesVersion});let n=0;for(;t.raid.step<=e.endStep;){const i=t.raid.step;for(;n<e.commands.length&&e.commands[n].step===i;){const r=e.commands[n++];if(!t.deployRaid(r.kind,r.portId,r.resourceTarget))return null}if(n<e.commands.length&&e.commands[n].step<i)return null;if(i===e.endStep||t.phase!=="combat")break;t.tick(is)}return n===e.commands.length&&t.raid.step===e.endStep?t:null}function Sb(s,e){return!s.raid||s.raid.rulesVersion===1?0:Math.min(Math.floor(e.reward*.35),[...s.towers.values()].filter(t=>t.type==="mine"&&s.raid.captured.includes(t.id)).reduce((t,n)=>t+Yd(s.tiles.get(Z(n.x,n.z))),0))}function wb(s,e,t,n=!0){if(t.raid?.result==="win")return s.gold+=e.reward,s.expeditionWins++,s.partialClaims=[],n&&s.expansionPermits++,e.reward;const r=Sb(t,e);if(!r)return 0;if(!e.id.startsWith("p:")){if(s.partialClaims.includes(e.id)||s.partialClaims.length>=3)return 0;s.partialClaims.push(e.id)}return s.gold+=r,r}function Eb(s,e){if(s.phase!=="prepare"||s.raid)return 0;const t=zu(s.toBase(),e.rulesVersion===4?4:e.rulesVersion===3?3:2,s.localRun).find(i=>i.id===e.targetId);if(!t)return 0;const n=Mb(t,e);return n?wb(s,t,n):0}const Tb="https://voxel-tide-defense-preview.kikutadev.workers.dev",Da="voxel-tide-defense:online-code:v1",Na="voxel-tide-defense:online-finish:v1";class Xr{token;constructor(e=localStorage.getItem(Da)??""){this.token=e}get hasToken(){return/^[a-f0-9]{64}$/.test(this.token)}static newCode(){return Array.from(crypto.getRandomValues(new Uint8Array(32)),e=>e.toString(16).padStart(2,"0")).join("")}async call(e,t){const n=await fetch(Tb+e,{method:t===void 0?"GET":"POST",headers:{Authorization:"Bearer "+this.token,...t===void 0?{}:{"Content-Type":"application/json"}},body:t===void 0?void 0:JSON.stringify(t),signal:AbortSignal.timeout(15e3)}),i=await n.json();if(!n.ok)throw Error(i.error??"通信に失敗しました");return i}async connect(e){if(e!==void 0&&(this.token=e.trim().toLowerCase()),!this.hasToken)return this.token=Xr.newCode(),localStorage.setItem(Da,this.token),this.call("/register",{});const t=await this.call("/profile");return localStorage.setItem(Da,this.token),t}async register(){this.hasToken||(this.token=Xr.newCode());const e=await this.call("/register",{});return localStorage.setItem(Da,this.token),e}edit(e,t){return this.call("/edit",{revision:e,action:t})}targets(){return this.call("/targets")}start(e,t){return this.call("/start",{revision:e,targetId:t})}async finish(e,t){const n={id:e,...t?{record:t}:{abandon:!0}};localStorage.setItem(Na,JSON.stringify({token:this.token,data:n}));const i=await this.call("/finish",n);return localStorage.removeItem(Na),i}async recoverPending(){try{const e=localStorage.getItem(Na);if(!e)return null;const t=JSON.parse(e);if(t.token!==this.token)return null;const n=await this.call("/finish",t.data);return localStorage.removeItem(Na),n.profile}catch(e){throw e}}history(){return this.call("/history")}replay(e){return this.call("/replay/"+encodeURIComponent(e))}ranking(){return this.call("/ranking")}}const dl=8,Vu="voxel-tide-defense:replays:v1";function Gu(){try{const s=JSON.parse(localStorage.getItem(Vu)??"[]");return Array.isArray(s)?s.slice(0,12):[]}catch{return[]}}function Ab(s){try{localStorage.setItem(Vu,JSON.stringify([s,...Gu().filter(e=>e.id!==s.id)].slice(0,12)))}catch{}}class Rb{game;cursor=0;entry;constructor(e){this.entry=e,this.game=Bt.raidFrom(e.target.base,{budget:e.target.budget,rulesVersion:e.record.rulesVersion})}tick(){const{record:e}=this.entry,t=this.game,n=t.raid.step;if(t.phase==="combat"){for(;this.cursor<e.commands.length&&e.commands[this.cursor].step===n;){const i=e.commands[this.cursor++];if(!t.deployRaid(i.kind,i.portId,i.resourceTarget)){t.endRaid();return}}if(n>=e.endStep){t.endRaid();return}if(t.tick(is),t.raid.step>=e.endStep&&t.phase==="combat"){for(;this.cursor<e.commands.length&&e.commands[this.cursor].step===e.endStep;){const i=e.commands[this.cursor++];t.deployRaid(i.kind,i.portId,i.resourceTarget)}t.endRaid()}}}}const D=s=>{const e=document.getElementById(s);if(!e)throw new Error("Missing UI: "+s);return e},qr=()=>Math.floor(Math.random()*2**31),ao=new URLSearchParams(location.search).get("seed"),Zs=!!(ao&&/^\d+$/.test(ao));let w,Pn="",vn=!0,Kr=!1,Hu=!1,_t;try{_t=new Fd(Zs?null:localStorage),w=_t.active?ku(_t.active):new Bt(Zs?Number(ao):qr())}catch{_t=new Fd(null),w=new Bt(qr()),Pn="保存データを読み込めません。元のデータを保持したまま試遊します",Hu=!0}let Wl=_t.profile.lastResult,Xl=w.toBase(),ct=null,Pr=null,Ie=null,jt=null,Zn=null,et=!1,wr=[],Os=[],qt=null,zi=null,Un=null,Ua=[],Ft=null,Bn=!1,ts=0,Vs=0;function ql(s){if(!s.localRun||!_t.active||s.phase==="gameover")return!0;try{return _t.save(s),Hu||(Pn=""),!0}catch(e){return Pn=bn(e),!1}}function Vn(){ct||Ie||vn||!_t.active||w.phase==="gameover"||(Xl=w.toBase(),ql(w))}let Js="bolt",gt=null,Pt=!1,At=null,mn=!1,ls=!1,ul="",Ya="";const Wu={bolt:"単体・速射",cannon:"範囲攻撃",frost:"移動を減速",mine:"資源開発"};function Xu(s,e){return[s.income!==e.income?"収入 "+s.income+"→"+e.income+"G":null,s.discount!==e.discount?"建設割引 "+s.discount+"→"+e.discount+"%":null,s.budget!==e.budget?"遠征 "+s.budget+"→"+e.budget+"pt":null,!s.research&&e.research?"特殊強化解放":null].filter(Boolean).join(" · ")}function or(){At=null,Pe.setPlanning(null,!gt||Pt)}function Od(s,e){const t=w.tiles.get(Z(s,e));if(!t)return;!Pt&&Ot(t)&&!w.towers.has(Z(s,e))&&na("mine");const n=Pt&&gt?w.canMove(gt,s,e):w.canBuild(Js,s,e);if(n){Pe.markRejected(t),Mt.feedback("reject"),or(),kn((Ot(t)?po(Ot(t),t.richness)+" · ":"")+n);return}At={x:s,z:e},Pe.setPlanning(At,!0),Mt.feedback("select"),qe()}let Lr=null,rt=!1,Qs=0,fl=-1,Dr=0,pl=0,Bd="",cr=0,oo=0,Yr=!1,jr=new Set,ml=0,$r=performance.now();const Fa=D("hp"),Oa=D("gold"),br=D("wave"),ja=D("tooltip"),Cb=D("status-label"),Ib=D("wave-progress"),Kl=D("start-wave"),Er=D("expand-btn"),Pb=D("territory-info"),Zr=D("speed-btn"),co=D("expand-panel"),xl=D("expand-choices"),Mo=D("intro-tip"),hs=D("wave-banner"),Jn=D("overlay"),Nr=D("overlay-label"),ns=D("overlay-title"),Gi=D("overlay-description"),Zt=D("overlay-primary"),Rn=D("overlay-secondary"),$a=D("pause-btn"),er=D("build-bar"),Lb=D("facility-panel"),gl=D("facility-move"),_l=D("facility-sell"),qu=[D("facility-upgrade0"),D("facility-upgrade1")];function Db(s,e=!1){jt=s,w=Bt.fromBase(s.base),Pe.rebuild(w,e)}function hn(s){et=s,D("field").classList.toggle("network-busy",s)}function kn(s){cr=0,hs.classList.remove("visible"),w.say(s),qe()}const bn=s=>s instanceof Error?s.message:"通信に失敗しました";async function So(s,e,t){if(!et){if(!Ie||!jt){e()?(Vn(),t()):Mt.feedback("reject"),qe();return}hn(!0);try{const n=await Ie.edit(jt.revision,s);jt=n,w=Bt.fromBase(n.base),t()}catch(n){Mt.feedback("reject"),kn(bn(n))}finally{hn(!1),qe()}}}const Pe=new vb(D("scene"),(s,e)=>{if(vn||rt||et||qt||mn)return;if(w.raid){const n=w.ports.find(r=>r.x===s&&r.z===e);if(n){Gt.value=String(n.id),Pe.selectRaidPort(n.id);return}const i=w.towers.get(Z(s,e));i&&(i.type==="mine"&&w.raid.rulesVersion>=2||w.raid.rulesVersion>=3)&&!w.raid.captured.includes(i.id)&&(Lt.value=String(i.id),qe());return}if(w.phase==="expansion"){const n=w.expansions.find(i=>i.tiles.some(r=>!r.bridge&&r.x===s&&r.z===e));n&&vl(n.id);return}if(!w.canEdit)return;const t=Z(s,e);if(Pt&&gt){Od(s,e);return}if(w.towers.has(t))or(),gt=t,Pt=!1,Pe.selectFacility(t,!1),Mt.feedback("select");else{ei(),Od(s,e);return}qe()},s=>{});function ei(){gt=null,Pt=!1,or(),Pe.selectFacility(null,!1)}function Nb(){const s=gt?w.towers.get(gt):void 0;if(Lb.hidden=!s||!w.canEdit||!!At,!s||!w.canEdit)return;const e=Fn(s),t=w.tiles.get(Z(s.x,s.z)),n=Ot(t);D("facility-name").textContent=s.upgrade===void 0?s.type==="mine"&&n?rs[n]:Cn[s.type].name:Ur[s.type][s.upgrade].name,D("facility-stats").textContent=w.plundered.has(s.id)?"襲撃済み・今波の生産停止":s.type==="mine"?n==="ore"?"収入 +"+Math.round(e.income*(15+15*(t?.richness??2))/45)+(Ie?"G/勝利":"G/波"):po(n,t?.richness):"威力 "+e.damage+" / 射程 "+(e.range*(w.tiles.get(Z(s.x,s.z)).h>=3?1.25:1)).toFixed(1)+((s.deploy??0)>0&&w.phase==="combat"?" / 設置 "+(s.deploy??0).toFixed(1)+"秒":"");const i=w.battleStats.get(s.id);D("facility-performance").textContent=s.type==="mine"?"":"攻撃間隔 "+e.cooldown+"秒"+(e.splash?" · 爆風 "+e.splash+"マス":"")+(i?" · 撃破 "+i.kills+" / ダメージ "+Math.round(i.damage):""),gl.textContent=Pt?"移動先を選択中（取消）":"移動 "+(w.moveCost(s)?w.moveCost(s)+"G":"無料"),_l.hidden=Pt,gl.disabled=!Pt&&w.gold<w.moveCost(s),_l.textContent="売却 +"+w.sellValue(s)+"G",qu.forEach((r,a)=>{r.hidden=s.upgrade!==void 0||Pt||s.type==="mine"&&n!=="ore";const o=Ur[s.type][a],c=w.upgradeCost(s,a);if(!r.hidden){r.textContent=o.name+" "+c+"G · "+(s.type==="mine"?Math.round(e.income*(15+15*(t?.richness??2))/45)+"→"+Math.round(o.income*(15+15*(t?.richness??2))/45)+"G/戦":[o.damage!==e.damage?"威力 "+e.damage+"→"+o.damage:null,o.cooldown!==e.cooldown?"間隔 "+e.cooldown+"→"+o.cooldown+"秒":null,o.range!==e.range?"射程 "+e.range+"→"+o.range:null,s.type==="frost"?o.detail:null,o.pierce!==e.pierce?"貫通 "+o.pierce:null,o.splash!==e.splash?"爆風 "+o.splash:null].filter(Boolean).join(" / "));const l=w.upgradeError(s,a);r.disabled=!!l,r.title=l??"",l?.includes("技術開発")?r.textContent=o.name+" · 技術未解放":l&&l.includes("研究所")&&(r.textContent=o.name+" "+c+"G · 研究所で解放")}})}gl.onclick=()=>{et||!gt||!w.canEdit||(or(),Pt=!Pt,Pe.selectFacility(gt,Pt),qe())};_l.onclick=()=>{if(gt&&!et){const s=gt,e=w.towers.get(s);if(!e||!window.confirm(Cn[e.type].name+"を売却して "+w.sellValue(e)+"G を受け取りますか？"))return;So({kind:"sell",from:s},()=>w.sell(s),()=>{ei(),Pe.rebuild(w),Pe.markSell(e,Ot(w.tiles.get(s))),Mt.feedback("sell")})}};qu.forEach((s,e)=>s.onclick=()=>{if(gt&&!et){const t=gt,n=e;So({kind:"upgrade",from:t,branch:n},()=>w.upgrade(t,n),()=>{Pe.rebuild(w);const i=w.towers.get(t);i&&Pe.markConstruction(i,"upgrade"),Mt.feedback("upgrade"),qn(D("facility-name"),"unlock"),Pe.selectFacility(gt,!1)})}});D("facility-close").onclick=()=>{ei(),qe()};function na(s){if(w.buildLock(s)){kn(w.buildLock(s));return}ei(),Js=s;for(const e of er.querySelectorAll("[data-tool]"))e.classList.toggle("selected",e.dataset.tool===s),e.setAttribute("aria-pressed",String(e.dataset.tool===s)),e.dataset.tool===s&&!vn&&qn(e.querySelector(".tile-icon")??e);Pe.setSelected(s),qe()}const Yl=Pe.getFacilityIcons();for(const s of er.querySelectorAll("[data-tool]")){const e=s.dataset.tool,t=s.querySelector(".tile-icon");t.replaceChildren();const n=document.createElement("img");n.src=Yl[e==="mine"?"ore":e],n.alt="",t.append(n);const i=document.createElement("em");i.className="tool-role",i.textContent=Wu[e],s.querySelector(".tool-text").append(i)}D("plan-cancel").onclick=()=>{or(),qe()};D("plan-confirm").onclick=()=>{if(!At||et||rt||!w.canEdit)return;const{x:s,z:e}=At,t=Pt?gt:null,n=Js,i=t?w.canMove(t,s,e):w.canBuild(n,s,e);if(i){kn(i);return}const r=w.economy,a=w.gold,o=t?w.towers.get(t):void 0;So(t?{kind:"move",from:t,x:s,z:e}:{kind:"build",type:n,x:s,z:e},()=>t?w.move(t,s,e):w.build(n,s,e),()=>{ei(),Pe.rebuild(w),Pe.markConstruction({x:s,z:e},t?"move":"build"),o&&Pe.markMoveOrigin(o),Mt.feedback(t?"move":"build"),Mo.hidden=!0;const c=Xu(r,w.economy);c?ds(c,2.5):ds((t?"移動":"建設")+(a-w.gold>0?" −"+(a-w.gold)+"G":""),1.5)})};function Ub(){const s=w.canEdit&&!mn&&!rt;if(Pe.setPlanning(At,s&&(!gt||Pt)),D("build-status").hidden=!s||!!At||!!gt&&!Pt,D("build-plan").hidden=!s||!At,!s)return;const e=Pt&&gt?w.towers.get(gt)?.type??Js:Js,t=[...w.tiles.values()].filter(i=>Ot(i)&&!w.towers.has(Z(i.x,i.z))),n=[w.gold,w.towers.size,w.buildLimit,e,Pt,gt,w.tiles.size,t.map(i=>Z(i.x,i.z)).join(";")].join("|");if(n!==ul){ul=n;const i=w.towers.size>=w.buildLimit&&!Pt?"建設枠が満杯 · 島を開拓":!Pt&&w.gold<w.buildCost(e)?"資金不足 · あと "+(w.buildCost(e)-w.gold)+"G":e==="mine"&&!t.length&&!Pt?"未開発の資源なし · 資源島を開拓":Pt?"移動先を選択":e==="mine"?"未開発 "+t.length+"か所 · 資源を選択":Wu[e]+" · 緑のマスに建設";D("build-status").textContent=i;const r=er.querySelector("[data-tool=mine]"),a=r.querySelector("img"),o=t.length?Ot(t[0]):void 0;o&&(a.src=Yl[o]),r.querySelector("b").textContent=t.length===1&&o?rs[o]:"資源施設",r.querySelector(".tool-role").textContent=t.length?t.length+"か所":"未開発地なし"}if(!At){Ya="";return}if(At){const i=n+"|"+Z(At.x,At.z)+"|"+et+"|"+Math.floor(w.waveTimer*3);if(i===Ya)return;Ya=i;const r=w.tiles.get(Z(At.x,At.z)),a=Ot(r),o=Pt&&gt?w.towers.get(gt):void 0,c=o?w.moveCost(o):w.buildCost(e),l=e==="mine"&&a?rs[a]:Cn[e].name,h=o&&gt?w.canMove(gt,At.x,At.z):w.canBuild(e,At.x,At.z);D("plan-name").textContent=l+" · "+c+"G";const d=e==="mine"&&r?qd(w.tiles,[...w.towers.values()].filter(m=>m.id!==o?.id).concat({...At,id:-1,type:e,paid:0,cooldown:0,rotation:0,upgrade:o?.upgrade}),w.plundered):null,u=[...w.placementPaths(At.x,At.z,o?gt??void 0:void 0)].some(([m,g])=>g.map(x=>Z(x.x,x.z)).join(";")!==(w.paths.get(m)??[]).map(x=>Z(x.x,x.z)).join(";"));D("plan-effect").textContent=h??(e==="mine"?(Xu(w.economy,d)||"現在の生産・能力は変化なし")+(u?" · 経路変更あり":""):"射程 "+(Fn(o??{type:e}).range*((r?.h??0)>=3?1.25:1)).toFixed(1)+" · "+(r&&r.h>=3?"高台 +25% · ":"")+(u?"緑：変更後の経路":"経路変更なし"));const f=D("plan-confirm");f.textContent=(o?"移動":"建設")+" "+c+"G",f.disabled=!!h||et}}function ds(s,e=2.5){w.messageTime=0,ja.classList.remove("show"),hs.textContent=s,cr=oo+e,hs.classList.add("visible")}function vl(s){fl!==s&&Mt.feedback("select"),fl=s;for(const n of xl.querySelectorAll(".expand-choice")){const i=Number(n.dataset.expansion)===s;n.classList.toggle("selected",i),n.setAttribute("aria-pressed",String(i))}const e=w.expansions.find(n=>n.id===s),t=D("confirm-expand");if(t.disabled=!e||!!e.blocked,e&&(t.textContent=e.blocked?"接続先の施設を移動してください":e.title+"をつなぐ"),e){const n=Kd([...w.tiles.values(),...e.tiles],w.bonusSlots+(e.reward==="permit"?1:0));D("expand-detail").textContent=po(e.resource,e.richness)+" · 建設枠 "+w.buildLimit+"→"+Math.max(n,w.towers.size)+" · 資材 +"+e.bonus+"G"}Pe.setPreview(s)}function Fb(){xl.replaceChildren();for(const s of w.expansions){const e=document.createElement("button");e.type="button",e.className="expand-choice",e.dataset.expansion=String(s.id);const t=s.resource==="ore"?"◆":s.resource==="wood"?"♣":s.resource==="harbor"?"⚓":s.resource==="relic"?"▣":"▲",n=s.center,i=(n.z<0?"北":n.z>0?"南":"")+(n.x<0?"西":n.x>0?"東":""),r=s.resource?"#"+Xd[s.resource].toString(16):"#b9d49a";e.innerHTML='<span class="choice-icon" style="color:'+r+'">'+t+"</span><strong>"+i+"・"+s.title+"</strong><small>"+po(s.resource,s.richness)+'</small><span class="warning">'+(s.blocked?"接続不可":s.replacePortId?"港を移動":"侵入口+1")+" · 経路 "+s.distance+"マス</span>",e.addEventListener("click",()=>vl(s.id)),xl.appendChild(e)}vl(w.expansions[0]?.id??-1)}const Mt=new mf,jl=Object.keys(pf).length>0;jl||(Mt.muted=!0,D("sound-btn").disabled=!0,D("sound-btn").textContent="音 なし");D("sound-btn").onclick=()=>{Mt.toggle(),D("sound-btn").textContent=Mt.muted?"音 OFF":"音 ON"};document.addEventListener("pointerdown",()=>{Mt.muted||Mt.unlock()},{passive:!0});document.addEventListener("click",s=>{const e=s.target?.closest("button");e&&!e.disabled&&!e.matches("#plan-confirm,#confirm-expand,#start-wave,#facility-sell,[id^=facility-upgrade],[data-tech],.expand-choice")&&Mt.feedback("select")});const Ob=D("raid-panel"),Gt=D("raid-port"),Lt=D("raid-objective"),Ku=new Map;for(const s of Object.keys(oi)){const e=document.createElement("button"),t=document.createElement("img");t.src="./units/"+s+".png",t.alt="";const n=document.createElement("span");n.textContent=xn[s].name;const i=document.createElement("small");i.textContent=oi[s]+"pt",e.append(t,n,i),e.title=xn[s].role,e.setAttribute("aria-label",xn[s].name+" "+oi[s]+"pt："+xn[s].role),e.addEventListener("pointerenter",()=>{D("unit-role").textContent=xn[s].name+"："+e.title}),e.onclick=()=>{D("unit-role").textContent=xn[s].name+"："+e.title,!rt&&!qt&&w.deployRaid(s,Number(Gt.value),Lt.value?Number(Lt.value):void 0)&&qe()},D("raid-troops").append(e),Ku.set(s,e)}Gt.onchange=()=>{Pe.selectRaidPort(Number(Gt.value)),qe()};Lt.onchange=()=>qe();D("raid-end").onclick=()=>{w.endRaid(),qe()};const Bb=D("scout-panel"),lo=D("scout-port"),ho=D("scout-objective");let bl="";function Yu(){if(!Bn)return;lo.value=Gt.value,ho.value=Lt.value;const s=Gt.value+":"+Lt.value+":"+(Ft?.id??"self");if(s===bl)return;bl=s;const e=w.raidRoute(Number(Gt.value),Lt.value?Number(Lt.value):void 0),t=e.filter(n=>[...w.towers.values()].some(i=>i.type!=="mine"&&an(i,n)<=Fn(i).range*((w.tiles.get(Z(i.x,i.z))?.h??0)>=3?1.25:1))).length;D("scout-risk").textContent=e.length?"経路 "+(e.length-1)+"マス · 砲撃範囲内 "+t+"/"+e.length+"マス":"経路なし"}lo.onchange=()=>{Gt.value=lo.value,Pe.selectRaidPort(Number(Gt.value)),qe()};ho.onchange=()=>{Lt.value=ho.value,qe()};function kb(){const s=D("scout-comparison");s.open=innerWidth>650,D("scout-units").replaceChildren(...Object.keys(oi).map(e=>{const t=document.createElement("div"),n=document.createElement("img"),i=document.createElement("span"),r=document.createElement("small"),a=as(e,w.raid?.rulesVersion);return n.src="./units/"+e+".png",n.alt="",i.textContent=a.name+" "+oi[e]+"pt",r.textContent="HP "+a.hp+" · "+{raider:"連続攻撃",runner:"資源奇襲",armored:"重装前衛",support:"範囲回復",boss:"砲台停止"}[e],t.title=a.role,t.append(n,i,r),t}))}function ju(){Gt.replaceChildren(...w.ports.map((s,e)=>new Option("上陸地点 "+(e+1),String(s.id)))),Pe.selectRaidPort(w.ports[0].id),D("unit-role").textContent="",Lt.replaceChildren(new Option("灯台",""),...[...w.towers.values()].filter(s=>s.type==="mine"&&(w.raid?.rulesVersion??1)>=2).map(s=>new Option(rs[Ot(w.tiles.get(Z(s.x,s.z)))]+" "+s.id+" (+"+Yd(w.tiles.get(Z(s.x,s.z)))+"G)",String(s.id))),...(w.raid?.rulesVersion??0)>=3?[...w.towers.values()].filter(s=>s.type!=="mine").map(s=>new Option(Cn[s.type].name+" "+s.id+"（破城機）",String(s.id))):[]),lo.replaceChildren(...Array.from(Gt.options,s=>s.cloneNode(!0))),ho.replaceChildren(...Array.from(Lt.options,s=>s.cloneNode(!0))),bl="",Yu()}function uo(s){if(!ct||et)return;Ft=s,Bn=!0,ts=0,Un=null;const e=s?.base??ct.toBase();xs(Bt.raidFrom(e,{budget:s?.budget,scout:!0,rulesVersion:s?.rulesVersion??Ja})),zi=s??{id:"self",name:"自分の基地",description:"",rank:0,reward:0,budget:w.raid.initialBudget,base:e,rulesVersion:Ja},ju(),kb(),D("scout-info").textContent=s?s.description.replaceAll("装甲兵","盾兵")+"　"+w.islandCount+"島 / 防衛 "+[...w.towers.values()].filter(t=>t.type!=="mine").length+"基 / 上陸 "+w.ports.length+"か所　部隊 "+s.budget+"pt":"自分の基地のコピーを攻撃します。報酬なし。",D("scout-start").textContent=s?"侵攻開始 · "+s.reward+"G":"テスト開始";for(const t of D("scout-targets").querySelectorAll("button"))t.classList.toggle("selected",t.dataset.target===s?.id);qe()}function fo(s,e=!1){Ua=s,D("cpu-tab").classList.toggle("selected",!e),D("pvp-tab").classList.toggle("selected",e);const t=Ua.map(n=>{const i=document.createElement("button");i.dataset.target=n.id;const r=document.createElement("b");r.textContent=n.name;const a=document.createElement("small");return a.textContent=(e?"対人":["","初級","中級","上級"][n.rank])+" · "+n.reward+"G",i.append(r,a),i.onclick=()=>uo(n),i});D("scout-targets").replaceChildren(...t),Ua.length&&uo(Ua[0])}D("cpu-tab").onclick=()=>fo(wr);D("pvp-tab").onclick=()=>{Os.length?fo(Os,!0):D("scout-info").textContent=ct&&ct.towers.size===0?"防衛施設を建てると対人戦に参加できます。":"現在、近いレート・発展度の対戦相手がいません。CPU遠征を選べます。"};D("raid-btn").onclick=async()=>{if(!(w.phase!=="prepare"||ct||et)){if(Ie){hn(!0);try{const s=await Ie.targets();wr=s.cpu,Os=s.players,jt&&(jt.rating=s.rating)}catch(s){kn(bn(s));return}finally{hn(!1)}}else Vn(),wr=w.canAttemptRaid?zu(Xl,Ja,!0):[],Os=[];Lr=Pe.cameraState(),ct=w,D("scout-tabs").hidden=!Ie,D("pvp-tab").textContent="対人 ("+Os.length+")",D("pvp-tab").disabled=!1,D("pvp-tab").title=Os.length?"":"同程度の防衛力・レートの相手がいません（防衛施設が必要）",wr.length?fo(wr):(fo([]),uo(null))}};D("scout-test").onclick=()=>uo(null);D("scout-home").onclick=()=>us();D("scout-start").onclick=async()=>{if(!(!Bn||et)){if(!w.raidRoute(Number(Gt.value),Lt.value?Number(Lt.value):void 0).length){kn("攻撃経路のある目標を選んでください");return}if(Ie&&jt&&Ft){const s=Gt.value,e=Lt.value;hn(!0);try{Zn=await Ie.start(jt.revision,Ft.id),Ft=Zn.target,zi=Ft,jt.rating=Zn.rating,xs(Bt.raidFrom(Ft.base,{budget:Ft.budget,scout:!0,rulesVersion:Ft.rulesVersion??1})),ju(),[...Gt.options].some(t=>t.value===s)&&(Gt.value=s),[...Lt.options].some(t=>t.value===e)&&(Lt.value=e),Pe.selectRaidPort(Number(Gt.value))}catch(t){kn(bn(t));return}finally{hn(!1)}}if(!Ie&&Ft&&ct?.localRun){if(!ct.canAttemptRaid){kn("今波の遠征は終了済み");return}if(ct.raidAttemptWave=ct.wave,!ql(ct)){ct.raidAttemptWave=0,kn(Pn);return}}w.startRaid()&&(Bn=!1,Mt.feedback("start"),Vs=0,$r=performance.now(),qe())}};D("raid-speed").onclick=()=>{w.speed=w.speed===1?2:1,D("raid-speed").textContent="×"+w.speed};function us(){if(!ct||et)return;if(Zn&&w.phase==="combat"){w.endRaid(),qe();return}const s=Kr;Kr=!1;const e=ct;ct=null,Ft=null,Bn=!1,qt=null,zi=null,Un=null,Zn=null,xs(e),Lr&&Pe.restoreCamera(Lr),Lr=null,Vn(),s&&tr()}function zb(){return!w.raid||!zi?null:{id:crypto.randomUUID(),created:Math.floor(Date.now()/1e3),target:zi,record:{rulesVersion:w.raid.rulesVersion,targetId:zi.id,commands:w.raid.commands.map(s=>({...s})),endStep:w.raid.step},hp:w.hp,win:w.raid.result==="win",reward:0,direction:Ft?"attack":"test",name:zi.name}}async function $u(){if(!(!Ie||!Zn||!Un||!ct||et)){hn(!0),Zt.disabled=!0,Rn.hidden=!0,Gi.textContent="戦果を検証しています…";try{const s=await Ie.finish(Zn.id,Un.record);jt=s.profile,ct=Bt.fromBase(s.profile.base),Zn=null,ts=s.reward,ns.textContent=s.win?"灯台を攻略！":s.reward?"資源を攻略！":"侵攻失敗",Gi.textContent="灯台へのダメージ "+(18-s.hp)+" / 18。"+(s.reward?"獲得 "+s.reward+"G"+(s.win?"・追加開拓権（上限まで）":"・資源攻略"):"報酬なし")+"　レート "+jt.rating,Zt.textContent="自分の基地に戻る",Zt.onclick=us}catch(s){Gi.textContent="戦果未確定："+bn(s),Zt.textContent="再送",Zt.onclick=()=>{$u()},Rn.hidden=!1,Rn.textContent="オフラインに戻る",Rn.onclick=Jl}finally{Zt.disabled=!1,hn(!1),qe()}}}function Zu(){D("result-reward").hidden=!0;const s=D("result-detail");s.hidden=!1,s.replaceChildren();const e=(t,n)=>{const i=document.createElement("div"),r=document.createElement("span"),a=document.createElement("strong");r.textContent=t,a.textContent=n,i.append(r,a),s.append(i)};if(w.raid)e("投入 / 生存",w.raid.commands.length+" / "+w.enemies.filter(t=>t.hp>0&&(t.launchDelay??0)<=0).length+"体"),e("撃破された部隊",String(w.battleKills)+"体"),e("攻略した資源",w.raid.captured.length+"か所"),D("review-field").hidden=!1;else{const t=ls?w.lastDefense:null,n=t?.goldDelta??w.gold-w.waveStartGold;e("撃破",(t?.kills??w.battleKills)+" / "+(t?.total??w.waveTotal)+"体"),e("灯台HP",(t?.hpBefore??w.waveStartHp)+" → "+(t?.hpAfter??w.hp)),e("資金増減",(n>=0?"+":"")+n+"G");for(const[i,r]of[...t?.stats??w.battleStats].sort((a,o)=>o[1].damage-a[1].damage)){const a=[...w.towers.values()].find(o=>o.id===i);e(a?Cn[a.type].name+" #"+i:"売却済み施設 #"+i,r.kills+"撃破 / "+Math.round(r.damage)+"ダメージ")}}}D("review-field").onclick=()=>{mn=!0,Jn.hidden=!0,Pe.setReview(!0),qe()};D("review-return").onclick=()=>{mn=!1,Pe.setReview(!1),Jn.hidden=!1,qe()};D("wave-report").onclick=()=>{ls=!0,rt=!0,D("overlay-home").hidden=!0,Jn.hidden=!1,Nr.textContent="第"+w.completedWaves+"波",ns.textContent="防衛成功",Gi.textContent="収入 +"+w.lastReward+"G",Zu(),Zt.textContent="基地に戻る",Zt.onclick=()=>{ls=!1,rt=!1,Jn.hidden=!0,qe()},Rn.hidden=!0};function Vb(){const s=new Bt(321);for(const e of["ore","wood","harbor"]){if(!s.openExpansion())break;const t=s.expansions.find(n=>!n.blocked&&n.resource===e)??s.expansions.find(n=>!n.blocked);if(!t||!s.chooseExpansion(t.id)){s.closeExpansion();break}s.completeWave()}s.gold=1e4;for(const e of s.tiles.values())Ot(e)&&!s.canBuild("mine",e.x,e.z)&&s.build("mine",e.x,e.z);for(const e of["cannon","bolt","frost","bolt","cannon"]){const t=[...s.paths.values()].flat(),n=[...s.tiles.values()].filter(i=>!s.canBuild(e,i.x,i.z)).sort((i,r)=>t.filter(a=>an(r,a)<3).length-t.filter(a=>an(i,a)<3).length)[0];n&&s.build(e,n.x,n.z)}return s}const Ju=Vb();function fs(){const s=Ie?Pr??w:w;D("home-play-label").textContent=_t.active?"続きから":"新しい挑戦",D("home-progress").textContent=_t.active?"第"+s.wave+"波 · "+s.islandCount+"島"+(s.phase==="combat"?" · 戦闘中":""):"無限ウェーブ防衛",D("home-new").hidden=!_t.active,D("home-new").querySelector("span").textContent="現在の挑戦を終了",D("home-tp").textContent=_t.profile.tp+" TP ・ "+_t.profile.unlocked.length+"/"+ss.length+" 解放",D("home-record").textContent="最高記録 "+_t.profile.bestWave+"波防衛  /  挑戦 "+_t.profile.runCount+"回"+(_t.profile.lastResult?" · 前回 +"+_t.profile.lastResult.tp+"TP":""),Zs&&(D("home-record").textContent+="（試遊）"),D("home-save-error").hidden=!Pn,D("home-save-error").textContent=Pn,D("home-history").disabled=s.phase!=="prepare",D("home-sound").textContent=jl?Mt.muted?"効果音 OFF":"効果音 ON":"効果音 試聴",D("home-sound").setAttribute("aria-pressed",String(!Mt.muted))}function tr(){if(!(et||ct)){if(Kr=!1,Ie){Jl();return}w.phase==="expansion"&&w.closeExpansion(),Vn(),!_t.active&&w.phase==="gameover"&&(w=new Bt(qr())),ei(),Pe.setReview(!1),mn=!1,ls=!1,rt=!0,vn=!0,D("field").classList.add("home-active"),D("home-screen").hidden=!1,Jn.hidden=!0,Pe.setTitleMode(!0),Pe.rebuild(Ju,!0),Pe.resetView(),fs(),Hd(D("scene"))}}function $l(){vn=!1,D("field").classList.remove("home-active"),D("home-screen").hidden=!0,Pe.setTitleMode(!1)}function Qu(){const s=!_t.active;if(s)try{let e=Zs&&_t.profile.runCount===0?Number(ao):qr();e===Wl?.seed&&(e=e+1>>>0),w=_t.start(e)}catch(e){Pn=bn(e),fs();return}$l(),xs(w,s),Vn()}D("home-play").onclick=()=>{et||Qu()};function ef(s){try{return Wl=_t.finish(w,s),!0}catch(e){return Pn=bn(e),!1}}D("home-new").onclick=()=>{et||!_t.active||window.confirm("現在の挑戦を終了します。島・施設・資金は失われ、"+Zd(w.completedWaves)+"TPを獲得します。よろしいですか？")&&(ef("retire")&&(w=new Bt(qr())),fs())};function tf(){const s=_t.profile;D("tech-balance").textContent=s.tp+" TP",D("tech-count").textContent=s.unlocked.length+" / "+ss.length+" 解放";const e=D("tech-list");e.replaceChildren();for(const t of["defense","economy"]){const n=document.createElement("h3");n.textContent=t==="defense"?"防衛技術":"経済・補給",e.append(n);const i=document.createElement("div");i.className="tech-grid",e.append(i);for(const r of ss.filter(a=>a.group===t)){const a=s.unlocked.includes(r.id),o=!!r.requires&&!s.unlocked.includes(r.requires),c=document.createElement("div");c.className="tech-row"+(a?" owned":"");const l=document.createElement("img");l.src=Yl[r.icon],l.alt="";const h=document.createElement("div"),d=document.createElement("strong"),u=document.createElement("small");d.textContent=r.name,u.textContent=r.detail+(o?" / 前提："+$d(r.requires):""),h.append(d,u);const f=document.createElement("button");f.textContent=a?"解放済み":r.cost+" TP",f.disabled=a||o||s.tp<r.cost,f.dataset.tech=r.id,f.onclick=()=>{try{const m=new Set(_t.profile.unlocked);if(!_t.purchase(r.id))return;D("tech-error").textContent="",tf(),fs(),Mt.feedback("tech"),qn(D("tech-balance"),"loss");const g=D("tech-list").querySelector("[data-tech="+r.id+"]");g?.closest(".tech-row")&&qn(g.closest(".tech-row"),"unlock");for(const x of ss.filter(p=>p.requires===r.id&&!m.has(p.id))){const p=D("tech-list").querySelector("[data-tech="+x.id+"]");p?.closest(".tech-row")&&qn(p.closest(".tech-row"),"unlock")}}catch(m){D("tech-error").textContent=bn(m)}},c.append(l,h,f),i.append(c)}}}function nf(){D("tech-error").textContent="",tf(),ui("tech-dialog").showModal()}D("home-tech").onclick=nf;D("tech-close").onclick=()=>ui("tech-dialog").close();D("home-online").onclick=()=>{et||sf()};D("home-history").onclick=()=>{!et&&w.phase==="prepare"&&(Kr=!0,D("history-btn").click())};D("home-sound").onclick=()=>{if(!jl){location.href="./sound-preview.html";return}D("sound-btn").click(),fs()};D("overlay-home").onclick=()=>tr();function Zl(){const s=!Yr;if(Yr=!0,cr=0,hs.classList.remove("visible"),Jn.classList.toggle("defeat-result",!w.raid),s&&(Mt.feedback(w.raid?.result==="win"?"win":"lose"),w.raid||Pe.markDefeat()),D("overlay-home").hidden=!!w.raid,rt=!1,Zu(),Jn.hidden=!1,w.raid){if(qt){Nr.textContent="リプレイ",ns.textContent=qt.entry.win?"灯台陥落":"防衛成功",Gi.textContent="灯台へのダメージ "+(18-w.hp)+" / 18",Zt.textContent="基地に戻る",Zt.onclick=us,Rn.hidden=!0;return}if(Un=zb(),Nr.textContent=Ft?Ft.name:"侵攻テスト",ns.textContent=w.raid.result==="win"?"灯台を攻略！":"侵攻失敗",Zt.textContent="自分の基地に戻る",Zt.onclick=us,Rn.hidden=!0,Ie&&Zn&&Un){$u();return}Ft&&ct&&!Ie&&Un&&(ts=Eb(ct,Un.record),Xl=ct.toBase(),ql(ct)),Un&&!Ie&&!Zs&&(Un.reward=ts,Ab(Un)),ts&&w.raid.result!=="win"&&(ns.textContent="資源を攻略！"),Gi.textContent="灯台へのダメージ "+(18-w.hp)+" / 18。"+(Ft?ts?"獲得 "+ts+"G"+(w.raid.result==="win"?"・追加開拓権 1枚":"・資源攻略"):w.raid.result==="win"?"戦果の検証に失敗：報酬未確定":"報酬なし":"基地と資金は変更されません。");return}Nr.textContent="防衛終了",ns.textContent="第"+w.wave+"波で灯台陥落";const e=ef("defeat"),t=Wl;Gi.textContent=e&&t?"防衛成功 "+t.cleared+"波 ・ 開拓 "+t.islands+"島"+(t.best?" ・ 自己ベスト更新！":""):"戦果を保存できません："+Pn,D("result-reward").hidden=!1,D("result-tp").textContent=e&&t?"+"+t.tp+" TP":"未精算",D("result-tp-balance").textContent=e?"所持 "+_t.profile.tp+" TP":"",Zt.textContent=e?"技術開発":"保存を再試行",Rn.hidden=!e,Rn.textContent="もう一度",D("overlay-home").hidden=!e,Zt.onclick=e?()=>{tr(),nf()}:()=>Zl(),Rn.onclick=()=>{tr(),Qu()}}function ia(){if(w.phase==="gameover"){Yr||Zl();return}Jn.hidden=!rt,rt&&(Jn.classList.remove("defeat-result"),D("result-reward").hidden=!0,D("result-detail").hidden=!0,D("review-field").hidden=!0,D("overlay-home").hidden=!!ct,Nr.textContent=w.raid?Ft?Ft.name:"侵攻テスト":"防衛",ns.textContent="一時停止",Gi.textContent="敵と砲台の動きは止まっています。",Zt.textContent="再開する ▶",Rn.hidden=!ct,Rn.textContent="自分の基地に戻る",Zt.onclick=()=>{rt=!1,ia()},Rn.onclick=us)}function xs(s,e=!1){w=s,jr=new Set(s.enemies.filter(t=>(t.launchDelay??0)<=0&&t.kind==="boss").map(t=>t.id)),ml=jr.size?s.wave:0,D("result-reward").hidden=!0,D("overlay-home").hidden=!0,mn=!1,ls=!1,ul="",Pe.setReview(!1),Ya="",D("result-detail").hidden=!0,D("review-field").hidden=!0,ei(),Js="bolt",rt=!1,Qs=0,Dr=w.completedWaves,pl=0,Yr=!1,Vs=0,$r=performance.now(),co.hidden=!0,Jn.hidden=!0,Jn.classList.remove("defeat-result"),Mo.hidden=!0,hs.classList.remove("visible"),cr=0,Zr.textContent="速度 ×"+w.speed,Pe.selectRaidPort(null),Pe.rebuild(w,!0,e?{old:new Set,center:{x:0,z:0}}:void 0),Pe.resetView(),Hd(D("scene")),na("bolt"),qe()}let kd=null,Ba=-1,uc=-1,zd="";function qe(s=0){const e=w.raid;if(Bb.hidden=!Bn,Ob.hidden=!e||Bn||!!qt||mn||w.phase==="gameover",D("replay-panel").hidden=!qt||mn||w.phase==="gameover",D("review-bar").hidden=!mn,D("review-summary").textContent=w.battleKills?"部隊が倒れた地点 ×人数":"部隊の損失なし",D("wave-report").hidden=!!e||w.phase!=="prepare"||!w.lastDefense,D("field").classList.toggle("in-combat",w.phase==="combat"),D("field").classList.toggle("core-danger",!e&&w.phase==="combat"&&w.hp<=5),qt&&(D("replay-time").textContent="リプレイ "+Math.floor(w.raid.step*is)+" / "+Math.ceil(qt.entry.record.endStep*is)+"秒",D("replay-speed").textContent="×"+w.speed,D("replay-pause").textContent=rt?"再開":"一時停止"),D("online-nav").hidden=!!e||w.phase!=="prepare",D("online-toggle").textContent=Ie?"オフラインへ":"オンライン",D("ranking-btn").hidden=!Ie,D("code-btn").hidden=!Ie,D("sync-btn").hidden=!Ie,Ie&&jt?br.parentElement.querySelector("small").textContent="レート":br.parentElement.querySelector("small").textContent="襲撃",D("raid-speed").textContent="×"+w.speed,D("sound-btn").setAttribute("aria-pressed",String(!Mt.muted)),D("battle-controls").hidden=!!e,er.hidden=!!e,D("raid-btn").hidden=w.phase!=="prepare"||!!e,D("raid-btn").textContent=w.canAttemptRaid?"遠征":"侵攻済み / テスト",e){for(const l of Lt.options)l.value&&(l.disabled=e.captured.includes(Number(l.value))||[...w.towers.values()].some(h=>h.id===Number(l.value)&&(h.disabledFor??0)>0));Lt.value&&Lt.selectedOptions[0]?.disabled&&(Lt.value="");const a=Lt.value?Number(Lt.value):void 0,o=a===void 0||!e.captured.includes(a)&&w.raidRoute(Number(Gt.value),a).length>=(e.rulesVersion>=3?1:2);!qt&&!mn&&Number(Gt.value)>0&&Pe.selectRaidRoute(Number(Gt.value),a),Lt.title=o?"投入する部隊の攻撃目標":"選んだ港から目標への経路がありません",D("raid-budget").textContent="残り "+e.budget+"pt · "+Math.ceil(e.remaining)+"秒"+(e.captured.length?" · 資源 "+e.captured.length+"か所":""),Yu();const c=[...w.towers.values()].find(l=>l.id===a);D("raid-state").textContent="投入 "+e.commands.length+"体 · 生存 "+w.enemies.filter(l=>l.hp>0&&(l.launchDelay??0)<=0).length+"体 · 損失 "+w.battleKills+"体";for(const[l,h]of Ku){h.title=e.rulesVersion>=3?as(l,e.rulesVersion).role+(e.rulesVersion===4?" · HP "+as(l,e.rulesVersion).hp:""):{raider:"通常攻撃",runner:"高速移動",armored:"装甲",support:"周囲を回復",boss:"大型・高耐久"}[l];const d=xn[l].name+" "+oi[l]+"pt："+h.title;h.getAttribute("aria-label")!==d&&h.setAttribute("aria-label",d),h.disabled=c&&c.type!=="mine"&&l!=="boss"||!o||e.budget<oi[l]||w.phase!=="combat"}}Fa.parentElement.querySelector("small").textContent=e?"敵灯台":"灯台",Oa.parentElement.hidden=!!e,br.parentElement.hidden=!!e;const t=kd===w;(!t||Ba!==w.hp)&&(Fa.innerHTML=String(w.hp)+" <span>♥</span>",t&&(qn(Fa,w.hp<Ba?"loss":"gain"),w.hp<Ba&&!w.raid&&qn(Fa.parentElement,"loss")),Ba=w.hp),(!t||uc!==w.gold)&&(Oa.innerHTML=String(w.gold)+" <span>G</span>",t&&qn(Oa,w.gold>uc?"gain":"loss"),uc=w.gold);const n=Ie&&jt?String(jt.rating):String(w.wave).padStart(2,"0");(!t||n!==zd)&&(br.textContent=n,t&&qn(br,"gain"),zd=n),kd=w,Cb.textContent=mn?"戦闘分析":qt?"リプレイ":e?Bn?"偵察":Ft?Ft.name:"侵攻テスト":w.phase==="combat"?"襲撃中":w.phase==="expansion"?"領土の拡張":w.phase==="gameover"?"防衛失敗":Ie?"オンライン基地":"",Ib.textContent=!e&&w.phase==="combat"?"撃破 "+w.battleKills+" / "+w.waveTotal+" · 残り "+(w.waveTotal-w.waveSpawned+w.enemies.length)+"体":"",Pb.textContent=e?mn?"損失 "+w.battleKills+"体":Bn?"":"灯台・資源施設を攻略":w.islandCount+"島　施設 "+w.towers.size+"/"+w.buildLimit+"　収入 +"+w.income+(Ie?"G/勝利":"G/波");const i=w.economy;D("save-state").hidden=!!Ie||!Pn,D("save-state").textContent=Pn,D("economy-info").textContent=e?"":"遠征 "+i.budget+"pt"+(i.discount?" · 建設−"+i.discount+"%":"")+(i.research?" · 研究済":"");for(const a of er.querySelectorAll("[data-tool]")){const o=a.dataset.tool,c=w.buildCost(o),l=w.buildLock(o);a.querySelector("small").textContent=l?"未解放":c+" G",a.title=l??"",a.classList.toggle("tech-locked",!!l),a.classList.toggle("unaffordable",w.gold<c||w.towers.size>=w.buildLimit||o==="mine"&&![...w.tiles.values()].some(h=>Ot(h)&&!w.towers.has(Z(h.x,h.z)))),a.disabled=!w.canEdit||!!l}Nb(),Ub(),D("wave-meter").hidden=!!e||w.phase!=="combat",!e&&w.waveTotal&&(D("wave-meter").querySelector("i").style.width=100*w.battleKills/w.waveTotal+"%"),pl!==w.wave&&(pl=w.wave,Bd=Object.entries(w.forecast).filter(([,a])=>a>0).map(([a,o])=>ah[a]+" "+o).join("  ·  "));const r=!e&&w.phase==="combat"?w.enemies.filter(a=>a.hp>0).sort((a,o)=>a.path.length-a.segment-a.step-(o.path.length-o.segment-o.step))[0]:null;D("enemy-forecast").textContent=r?"接近中 "+ah[r.kind]+" · 灯台まで "+Math.max(0,Math.ceil(r.path.length-1-r.segment-r.step))+"マス":"次の襲撃 "+Bd,D("enemy-forecast").hidden=!!e||!!Ie||w.phase==="gameover"||w.phase==="expansion",Kl.hidden=!!Ie||w.phase!=="prepare",Er.hidden=w.phase!=="prepare",Er.disabled=!w.canExpand||et||!!Ie&&w.islandCount>=dl,Er.textContent=Ie&&w.islandCount>=dl?"開拓上限":w.canExpand?w.expandedWave===w.wave?"海域を開拓（権利"+w.expansionPermits+"）":"海域を開拓（無料）":"追加済み",Zr.hidden=w.phase!=="combat",$a.disabled=et||mn||w.phase==="gameover"||ls,$a.textContent=rt?"▶":"Ⅱ",$a.setAttribute("aria-label",rt?"再開":"一時停止"),w.phase==="expansion"&&Qs!==w.wave&&(Qs=w.wave,Fb(),co.hidden=!1,Mo.hidden=!0,hs.classList.remove("visible")),w.phase!=="expansion"&&(co.hidden=!0),w.completedWaves>Dr&&(Dr=w.completedWaves,Vn(),jr.clear(),ds("第"+Dr+"波 防衛成功"+(s?" · 破城機撃破":"")+"　収入 +"+w.lastReward+"G",2.1),Pe.markVictory(),Mt.feedback("win"),qn(Er,"unlock"),qn(Oa,"gain")),!vn&&w.phase==="gameover"&&!Yr&&Zl(),w.messageTime>0&&w.phase!=="gameover"&&cr<=oo?(ja.textContent=w.message,ja.classList.add("show")):ja.classList.remove("show")}const ui=s=>D(s);ui("history-dialog").addEventListener("close",()=>{vn&&(Kr=!1)});for(const s of document.querySelectorAll("[data-close]"))s.onclick=()=>ui(s.dataset.close).close();D("online-toggle").onclick=()=>{if(!(et||w.phase!=="prepare")){if(Ie){Jl();return}sf()}};function sf(){D("online-error").textContent="";const s=D("online-code");s.value="",D("online-connect").disabled=!1,ui("online-dialog").showModal()}async function rf(s){if(et)return;const e=D("online-code").value.trim();if(!s&&e&&!/^[a-fA-F0-9]{64}$/.test(e)){D("online-error").textContent="復帰コードは64文字です";return}const t=new Xr;if(!s&&!e&&!t.hasToken){D("online-error").textContent="新しい基地を作るか、復帰コードを入力してください";return}if(s&&t.hasToken&&!window.confirm("保存済みの復帰コードがあります。新規基地に切り替えますか？"))return;hn(!0);const n=[D("online-create"),D("online-connect")];n.forEach(i=>i.disabled=!0),D("online-error").textContent="接続中…";try{s&&(t.token=Xr.newCode());let i=s?await t.register():await t.connect(e||void 0);const r=await t.recoverPending();if(r&&(i={...r,active:null}),i.active){if(!window.confirm("未完了の侵攻があります。中断（敗北扱い）として基地に戻りますか？")){D("online-error").textContent="未完了の侵攻があります";return}i=(await t.finish(i.active.id)).profile}Pr=w,Ie=t,jt=i,ui("online-dialog").close(),vn&&$l(),xs(Bt.fromBase(i.base)),Pn=""}catch(i){D("online-error").textContent=bn(i)}finally{hn(!1),n.forEach(i=>i.disabled=!1),qe()}}D("online-create").onclick=()=>{rf(!0)};D("online-connect").onclick=()=>{rf(!1)};function Jl(){if(!Pr||et)return;const s=Pr;Pr=null,Ie=null,jt=null,Zn=null,ct=null,qt=null,Bn=!1,Ft=null,zi=null,Un=null,xs(s),Vn(),tr(),qe()}D("sync-btn").onclick=async()=>{if(!(!Ie||et)){hn(!0);try{const s=await Ie.call("/profile");if(s.active){kn("進行中の侵攻があります。再接続してください");return}ei(),Db(s,!0),kn("同期しました")}catch(s){kn(bn(s))}finally{hn(!1),qe()}}};D("code-btn").onclick=()=>{Ie&&(D("recovery-code").value=Ie.token,D("copy-code").textContent="コピー",ui("code-dialog").showModal())};D("copy-code").onclick=async()=>{if(Ie)try{await navigator.clipboard.writeText(Ie.token),D("copy-code").textContent="コピー済み"}catch{D("recovery-code").select(),D("copy-code").textContent="選択済み"}};function Vd(s){if(!(et||ct||w.phase!=="prepare"))try{const e=new Rb(s);ui("history-dialog").close(),Lr=vn?null:Pe.cameraState(),ct=w,Ft=null,Bn=!1,qt=e,Zn=null,vn&&$l(),xs(e.game),qe()}catch(e){D("history-list").textContent=bn(e)}}D("replay-exit").onclick=us;D("replay-pause").onclick=()=>{rt=!rt,qe()};D("replay-speed").onclick=()=>{w.speed=w.speed===1?2:w.speed===2?4:1,qe()};function yl(s,e,t,n,i){const r=document.createElement(i?"button":"div");r.className="history-row "+(n?"win":"loss");const a=document.createElement("span"),o=document.createElement("small"),c=document.createElement("strong");return a.textContent=s,o.textContent=e,a.append(o),c.textContent=t,r.append(a,c),i&&(r.onclick=i),r}D("history-btn").onclick=async()=>{if(et||w.phase!=="prepare")return;const s=D("history-list");if(D("history-title").textContent="戦闘履歴",s.textContent="読み込み中…",ui("history-dialog").showModal(),!Ie){const n=Gu();s.replaceChildren(...n.map(i=>yl((i.direction==="test"?"自己テスト":"攻撃")+" · "+i.name,new Date(i.created*1e3).toLocaleDateString()+" · 灯台 "+(18-i.hp)+"/18",i.win?"攻略成功":i.reward?"資源攻略":"侵攻失敗",i.win,()=>Vd(i)))),n.length||(s.textContent="まだ戦闘履歴がありません");return}const e=Ie,t=jt?.id;try{const{entries:n}=await e.history();if(Ie!==e)return;s.replaceChildren(...n.map(i=>{const r=i.defender===t,a=r?!i.win:!!i.win,o=r?i.attacker:i.defender;return yl((r?"防衛":"攻撃")+" · "+(o?"島 "+o.slice(0,6).toUpperCase():"CPU"),new Date(i.created*1e3).toLocaleDateString()+" · 灯台 "+(18-i.hp)+"/18",a?"勝利":"敗北",a,async()=>{if(!et){hn(!0);try{const c=await e.replay(i.id);if(Ie!==e)return;hn(!1),Vd({id:i.id,created:i.created,target:c.target,record:c.record,hp:i.hp,win:!!i.win,reward:i.reward,direction:r?"defense":"attack",name:c.target.name})}catch(c){s.textContent=bn(c)}finally{hn(!1)}}})})),n.length||(s.textContent="まだ戦闘履歴がありません")}catch(n){s.textContent=bn(n)}};D("ranking-btn").onclick=async()=>{if(!Ie||et)return;const s=Ie,e=D("history-list");D("history-title").textContent="レーティング 上位20人",e.textContent="読み込み中…",ui("history-dialog").showModal();try{const{entries:t}=await s.ranking();if(Ie!==s)return;e.replaceChildren(...t.map((n,i)=>yl(i+1+"位 · 島 "+n.id.slice(0,6).toUpperCase()+(n.id===jt?.id?"（自分）":""),n.strength+"島 · 防衛 "+n.defense_count+"基",String(n.rating),!0))),t.length||(e.textContent="登録された基地はありません")}catch(t){e.textContent=bn(t)}};er.addEventListener("click",s=>{const e=s.target.closest("[data-tool]");e&&!e.disabled&&na(e.dataset.tool)});Er.addEventListener("click",()=>{et||Ie&&w.islandCount>=dl||!w.openExpansion()||(ei(),Qs=0,qe())});D("confirm-expand").addEventListener("click",()=>{const s=w.expansions.find(t=>t.id===fl);if(!s||s.blocked||et)return;const e=new Set(w.tiles.keys());So({kind:"expand",candidate:s.candidateKey},()=>w.chooseExpansion(s.id),()=>{Qs=0,Pe.rebuild(w,!0,{old:e,center:s.center??s.landing}),Pe.setPreview(-1),Mt.feedback("land"),ds(s.title+" 開拓　+"+s.bonus+"G",1.8),co.hidden=!0})});D("close-expand").addEventListener("click",()=>{et||(w.closeExpansion(),Qs=0,Pe.setPreview(-1),qe())});Kl.addEventListener("click",()=>{Ie||et||(ei(),Vn(),w.startWave()&&(Vn(),Mo.hidden=!0,Mt.feedback("start"),ds("襲撃 "+String(w.wave).padStart(2,"0"),1.3),qe()))});Zr.addEventListener("click",()=>{w.speed=w.speed===1?2:1,Zr.textContent="速度 ×"+w.speed});$a.addEventListener("click",()=>{et||(rt=!rt,qt||ia(),qe())});D("zoom-in").addEventListener("click",()=>Pe.zoomIn());D("zoom-out").addEventListener("click",()=>Pe.zoomOut());D("reset-view").addEventListener("click",()=>Pe.resetView());window.addEventListener("keydown",s=>{if(et||document.querySelector("dialog[open]")||vn)return;if(s.key==="Escape"&&mn){D("review-return").click();return}if(s.key==="Escape"&&ls){Zt.click();return}if(s.key==="Escape"&&At&&!rt){or(),qe();return}if(s.key==="Escape"&&gt&&!rt){ei(),qe();return}if(s.key==="Escape"&&Bn&&!rt){us();return}if(s.key==="Escape"&&w.phase==="expansion"&&!rt){D("close-expand").click();return}if(s.key==="Escape"){rt=!rt,qt||ia(),qe();return}if(rt||w.phase==="gameover"||w.raid)return;const e={1:"bolt",2:"cannon",3:"frost",4:"mine"};if(e[s.key]&&na(e[s.key]),s.key==="Enter"&&At){s.preventDefault(),D("plan-confirm").click();return}s.key==="Enter"&&w.phase==="prepare"&&(s.preventDefault(),Kl.click()),s.code==="Space"&&w.phase==="combat"&&(s.preventDefault(),Zr.click())});window.addEventListener("storage",s=>{!Zs&&s.key===Ka&&(rt=!0,Pn="別のタブで進行が更新されました。再読み込みしてください",vn?fs():!ct&&!Ie&&ia())});window.addEventListener("pagehide",()=>Vn());document.addEventListener("visibilitychange",()=>{document.hidden&&Vn(),$r=performance.now(),Vs=0,!vn&&document.hidden&&w.phase==="combat"&&(rt=!0,qt||ia())});let Gd=0;function af(s){requestAnimationFrame(af);const e=Math.min(.05,Math.max(0,(s-$r)/1e3));if($r=s,oo+=e,vn){Pe.render(Ju,e);return}if(!rt){Vs+=e*w.speed;const n=[...w.fx];for(;Vs+1e-9>=is;)Vs-=is,qt?qt.tick():w.tick(is),n.push(...w.fx);w.fx=n}const t=w.fx.filter(n=>n.kind==="kill"&&n.type==="boss").length;if(!rt){if(w.phase==="combat"){const n=w.enemies.filter(i=>i.kind==="boss"&&(i.launchDelay??0)<=0&&!jr.has(i.id));n.forEach(i=>{jr.add(i.id),Pe.markBossArrival(i)}),n.length&&!w.raid&&ml!==w.wave&&(ml=w.wave,ds("破城機 上陸",1.6),Mt.feedback("boss")),t&&!w.raid&&ds("破城機 撃破　+"+100*t+"G",1.6)}Mt.play(w.fx)}Pe.render(w,rt?0:e*w.speed,e),w.fx=[],cr<oo&&hs.classList.remove("visible"),qe(t),s>=Gd&&w.phase==="combat"&&!rt&&!ct&&!Ie&&(Gd=s+2500,Vn())}Dr=w.completedWaves;na("bolt");tr();requestAnimationFrame(af);
