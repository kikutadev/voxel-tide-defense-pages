(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Gn={bolt:{name:"連射砲",cost:70,range:3.45,damage:22,cooldown:.7,description:"遠くの敵を素早く狙う"},cannon:{name:"榴弾砲",cost:120,range:3.05,damage:48,cooldown:1.85,description:"着弾地点に範囲ダメージ"},frost:{name:"氷結塔",cost:90,range:3.05,damage:9,cooldown:1.15,description:"敵の移動速度を半分に"},mine:{name:"資源施設",cost:90,range:0,damage:0,cooldown:0,description:"資源のあるマスを開発する"}},cr={bolt:[{name:"速射型",cost:100,detail:"発射間隔 0.35秒",damage:22,cooldown:.35,range:3.45,pierce:0,splash:0,income:0},{name:"狙撃型",cost:120,detail:"威力54・射程5・装甲貫通",damage:54,cooldown:1.15,range:5,pierce:20,splash:0,income:0}],cannon:[{name:"重砲型",cost:145,detail:"威力104・装甲貫通",damage:104,cooldown:2,range:3.3,pierce:16,splash:1.26,income:0},{name:"散弾型",cost:125,detail:"爆風半径2.2・高速装填",damage:46,cooldown:1.25,range:3.05,pierce:0,splash:2.2,income:0}],frost:[{name:"極寒型",cost:100,detail:"移動速度25%に低下",damage:9,cooldown:1.15,range:3.05,pierce:0,splash:0,income:0},{name:"吹雪型",cost:125,detail:"周囲1.8マスも減速",damage:9,cooldown:1.15,range:3.4,pierce:0,splash:1.8,income:0}],mine:[{name:"精錬所",cost:100,detail:"毎波の収入 +95G",damage:0,cooldown:0,range:0,pierce:0,splash:0,income:95},{name:"交易所",cost:60,detail:"毎波 +65G・即時 +20G",damage:0,cooldown:0,range:0,pierce:0,splash:0,income:65}]};function Es(s){const e=Gn[s.type];return s.upgrade!==void 0?cr[s.type][s.upgrade]:{...e,pierce:0,splash:s.type==="cannon"?1.26:0,income:s.type==="mine"?45:0}}const ud={raider:"通常",runner:"高速",armored:"装甲",support:"回復",boss:"大型"},me=(s,e)=>String(s)+","+String(e),nr=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}],_n=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),qh=(s,e,t)=>Math.max(e,Math.min(t,s));function bn(s){return s?.resource??(s?.biome==="ore"?"ore":void 0)}const Uc={ore:"採掘所",wood:"製材所",harbor:"造船所",relic:"研究所"},Yh={ore:12294890,wood:7521674,harbor:8836077,relic:15450229};function Ia(s,e=2){switch(s){case"ore":return"採掘所 +"+(15+15*e)+"G";case"wood":return"製材所 建設−"+8*e+"%";case"harbor":return"造船所 遠征+"+(4+4*e)+"pt";case"relic":return"研究所 特殊強化解放";default:return"高台 射程+25%"}}function dd(s,e,t){let n=20,i=0,r=32,a=!1;for(const o of e){if(o.type!=="mine"||t?.has(o.id))continue;const c=s.get(me(o.x,o.z)),l=bn(c),h=c?.richness??2;l==="ore"&&(n+=Math.round(Es(o).income*(15+15*h)/45)),l==="wood"&&(i+=h*8),l==="harbor"&&(r+=4+4*h),l==="relic"&&(a=!0)}return{income:n,discount:Math.min(24,i),budget:Math.min(64,r),research:a}}function Kh(s,e){let t=0;for(const n of s)n.bridge||t++;return Math.max(2,Math.floor(t/7))+e}function jh(s){return 8+4*(s?.richness??2)}function ir(s,e,t,n,i,r,a={x:0,z:0}){const o=(d,f)=>{const x=me(d,f);return x!==n&&(s.has(x)||i?.has(x)===!0)&&(!e.has(x)||x===r)},c=me(t.x,t.z);if(!o(t.x,t.z))return[];const l=[t];let h=0;const u=new Map([[c,null]]);for(;h<l.length;){const d=l[h++];if(d.x===a.x&&d.z===a.z){const f=[];let x=me(a.x,a.z);for(;x!==null;){const[g,m]=x.split(",").map(Number);f.push({x:g,z:m}),x=u.get(x)??null}return f.reverse()}for(const f of nr){const x=d.x+f.x,g=d.z+f.z,m=me(x,g);!o(x,g)||u.has(m)||(u.set(m,me(d.x,d.z)),l.push({x,z:g}))}}return[]}const xl=2;function hn(s,e,t,n=0){let i=Math.imul(e+16391,374761393)^Math.imul(t+823,668265263)^Math.imul(s+n,1442695041);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function $h(s,e,t){const n=qh(Math.round(2.1+.9*Math.sin(e*.31+s*.011)+.7*Math.cos(t*.39-s*.009)+(hn(s,e,t,1)-.5)*1.1),1,4),i=hn(s,e,t,2);return{x:e,z:t,h:n,biome:i<.11?"grove":i<.15?"ore":n>=4?"ridge":n===1&&i>.77?"sand":"grass"}}function fd(s){const e=new Map,t=[];for(let o=-2;o<=2;o++)for(let c=-2;c<=2;c++){if(Math.hypot(o,c)>2.22+(hn(s,o,c,40)-.5)*.34)continue;const l=$h(s,o,c);l.biome==="ore"&&(l.biome="grass"),e.set(me(o,c),{...l,islandId:1})}const n=e.get(me(0,0));if(!n)throw Error("Core generation failed");n.h=3,n.biome="ridge";for(const o of[-1,1])for(const c of[-1,0,1]){const l=e.get(me(o,c));l&&(l.h=Math.max(2,l.h))}const i=[...e.values()].filter(o=>o.x<=-2).sort((o,c)=>o.x-c.x||Math.abs(o.z)-Math.abs(c.z))[0],r=[...e.values()].filter(o=>o.x>=2).sort((o,c)=>c.x-o.x||Math.abs(o.z)-Math.abs(c.z))[0],a=hn(s,0,0,81)<.5?i:r;return a&&t.push({id:1,x:a.x,z:a.z,createdWave:0}),{tiles:e,ports:t}}const _a=8,pd=["ore","wood","harbor","relic"];function md(s,e,t){const n={x:e*_a,z:t*_a},i=Math.abs(e)>=Math.abs(t)?e>0?0:2:t>0?1:3,o=Math.abs(e)+Math.abs(t)>1&&hn(s,e,t,900)<.18?void 0:pd[(i+Math.floor(hn(s,0,0,800)*4))%4],c=1+Math.floor(hn(s,e,t,901)*3),l=o==="ore"?"ore":o==="wood"?"grove":"ridge",h=[];for(let u=-3;u<=3;u++)for(let d=-3;d<=3;d++){const f=n.x+u,x=n.z+d;if(Math.hypot(u,d)>2.45+hn(s,f,x,1001)*.55)continue;const g=$h(s,f,x);g.biome==="ore"&&(g.biome="grass"),o==="wood"&&hn(s,f,x,330)>.3&&(g.biome="grove"),(!o||o==="relic")&&(g.h=Math.max(3,g.h),g.biome="ridge"),o==="harbor"&&(g.h=Math.min(2,g.h),Math.hypot(u,d)>1.7&&(g.biome="sand")),u===0&&d===0&&o&&(g.resource=o,g.richness=c,g.biome=o==="ore"?"ore":o==="wood"?"grove":o==="harbor"?"sand":"ridge"),h.push(g)}return{center:n,tiles:h,resource:o,richness:c,biome:l}}function gl(s,e,t,n,i,r=new Set){const a=new Map;for(const c of t.values()){if(c.bridge)continue;const l=Math.round(c.x/_a),h=Math.round(c.z/_a);for(const u of nr){const d=l+u.x,f=h+u.z;(d||f)&&a.set(me(d,f),{x:d,z:f})}}const o=[];for(const c of a.values()){const l=md(s,c.x,c.z);if(l.tiles.some(I=>t.has(me(I.x,I.z))||nr.some(b=>t.has(me(I.x+b.x,I.z+b.z)))))continue;const h=l.tiles.map(I=>({...I,islandId:i+1})),u=new Set(h.map(I=>me(I.x,I.z))),d=h.map(I=>({p:I,path:[],source:I})),f=new Set(u);let x;for(let I=0;I<d.length&&!x;I++){const b=d[I];for(const v of nr){const P={x:b.p.x+v.x,z:b.p.z+v.z},O=me(P.x,P.z),z=t.get(O);if(z){if(!z.bridge&&b.path.length>0&&!r.has(O)&&ir(t,r,z).length){x={anchor:z,path:b.path,source:b.source};break}continue}f.has(O)||b.path.length>=5||(f.add(O),d.push({p:P,path:[...b.path,P],source:b.source}))}}if(!x)continue;const{anchor:g,path:m,source:p}=x,S=[...h,...m.map(I=>({...I,h:1,biome:"sand",bridge:!0,islandId:i+1}))],y=h.filter(I=>!I.resource).sort((I,b)=>_n(b,p)-_n(I,p))[0],E=ir(t,r,y,void 0,new Map(S.map(I=>[me(I.x,I.z),I])));if(!E.length)continue;const A=n.find(I=>I.x===g.x&&I.z===g.z)?.id,T=["cache","repair","permit"][Math.floor(hn(s,c.x,c.z,913)*3)],R=l.resource==="ore"?"鉱山島":l.resource==="wood"?"森林島":l.resource==="harbor"?"港湾島":l.resource==="relic"?"遺跡島":"高台島";o.push({id:0,candidateKey:[s,"site",c.x,c.z].join(":"),title:R,biome:l.biome,resource:l.resource,richness:l.richness,center:l.center,bonus:60+(T==="cache"?25:0),tiles:S,landing:{x:y.x,z:y.z},area:h.length,distance:E.length-1,replacePortId:A,route:E,reward:T})}return o.sort((c,l)=>_n(c.center,{x:0,z:0})-_n(l.center,{x:0,z:0})||c.center.x-l.center.x||c.center.z-l.center.z).map((c,l)=>({...c,id:l}))}const Xi=.05,Ti={raider:1,runner:2,armored:3,support:3,boss:8},vn={raider:{hp:50,speed:1,armor:0,windup:.35,recover:.75,impact:1,name:"突撃兵",role:"数で押す連続攻撃"},runner:{hp:35,speed:1.65,armor:0,windup:.25,recover:.55,impact:1,name:"偵察兵",role:"森林を駆け抜け資源を狙う"},armored:{hp:150,speed:.65,armor:12,windup:.65,recover:1.15,impact:1,name:"盾兵",role:"装甲で砲撃を受ける前衛"},support:{hp:70,speed:.9,armor:0,windup:.8,recover:1.6,impact:1,name:"衛生兵",role:"負傷した味方を回復"},boss:{hp:240,speed:.5,armor:0,windup:2,recover:2,impact:1,name:"破城機",role:"砲台を6秒停止させる"}};function xd(s,e){if(s.fx=[],s.duration+=e,s.messageTime>0&&(s.messageTime=Math.max(0,s.messageTime-e)),s.phase!=="combat")return;s.waveTimer+=e,s.spawnTimer-=e;const t=qh(1.02-s.wave*.043,.38,1.02);for(;!s.raid&&s.spawnTimer<=0&&s.waveSpawned<s.waveTotal;){const a=s.createEnemy(s.waveSpawned++);a&&s.enemies.push(a),s.spawnTimer+=t}const n=s.raid?.rulesVersion===3;for(const a of s.enemies){if(a.hp<=0)continue;if(n){if((a.launchDelay??0)>0){a.launchDelay=Math.max(0,a.launchDelay-e);continue}a.attackPulse=Math.max(0,(a.attackPulse??0)-e),a.healPulse=Math.max(0,(a.healPulse??0)-e)}a.hit=Math.max(0,a.hit-e),a.slow=Math.max(0,a.slow-e);let o=a.speed*(a.slow>0?a.slowFactor??.47:1)*e;for(;o>0&&a.segment<a.path.length-1;){const c=a.path[a.segment+1],l=a.path[a.segment],u=s.tiles.get(me(l.x,l.z))?.biome==="grove"&&!(n&&a.kind==="runner")?.7:1,d=Math.min(o*u,1-a.step);a.step+=d,o-=d/u,a.x=l.x+(c.x-l.x)*a.step,a.z=l.z+(c.z-l.z)*a.step,a.step>=.99999&&(a.segment++,a.step=0)}}for(const a of s.enemies)if(a.kind==="support"&&a.hp>0){if(n){if((a.launchDelay??0)>0)continue;if(a.healClock=(a.healClock??0)-e,a.healClock<=0){const o=s.enemies.filter(c=>c.kind!=="support"&&c.hp>0&&c.hp<c.maxHp&&(c.launchDelay??0)<=0&&_n(c,a)<=1.5).sort((c,l)=>c.hp/c.maxHp-l.hp/l.maxHp||c.id-l.id).slice(0,2);if(o.length){a.healClock=1,a.healPulse=.45;for(const c of o)c.hp=Math.min(c.maxHp,c.hp+12),s.fx.push({kind:"heal",from:{x:a.x,z:a.z},to:{x:c.x,z:c.z},unit:a.kind})}}continue}for(const o of s.enemies)o!==a&&o.hp>0&&_n(o,a)<=2&&(o.hp=Math.min(o.maxHp,o.hp+8*e))}for(const a of s.towers.values()){if(n&&(a.disabledFor=Math.max(0,(a.disabledFor??0)-e),a.disabledFor>0)||(a.deploy=Math.max(0,(a.deploy??0)-e),a.type==="mine")||(a.cooldown-=e,a.deploy>0)||a.cooldown>0)continue;const o=Es(a),c=s.tiles.get(me(a.x,a.z)),l=o.range*(c&&c.h>=3?1.25:1),u=s.enemies.filter(d=>d.hp>0&&(n?(d.launchDelay??0)<=0:d.segment<d.path.length-1)&&_n(d,a)<=l).sort((d,f)=>d.path.length-d.segment-d.step-(f.path.length-f.segment-f.step))[0];if(u){if(a.cooldown=o.cooldown,a.rotation=Math.atan2(u.x-a.x,u.z-a.z),s.fx.push({kind:"shot",from:{x:a.x,z:a.z},to:{x:u.x,z:u.z},type:a.type}),a.type==="cannon")for(const d of s.enemies)d.hp>0&&(!n||(d.launchDelay??0)<=0)&&_n(d,u)<=o.splash&&s.damage(d,o.damage*(d===u?1:.65),a.type,o.pierce);else if(s.damage(u,o.damage,a.type,o.pierce),a.type==="frost"){for(const d of s.enemies)if((!n||(d.launchDelay??0)<=0)&&(d===u||o.splash>0&&_n(d,u)<=o.splash)){const f=a.upgrade===0?.25:.47;d.slowFactor=d.slow>0?Math.min(d.slowFactor??.47,f):f,d.slow=2.15}}}}if(!s.raid)for(const a of s.towers.values()){if(a.type!=="mine"||s.plundered.has(a.id))continue;let o=0;for(const c of s.enemies)c.hp>0&&_n(c,a)<=1.25&&(o+=e);o!==0&&(s.resourceDamage[a.id]=(s.resourceDamage[a.id]??0)+o,s.resourceDamage[a.id]>=3&&(s.plundered.add(a.id),s.fx.push({kind:"capture",at:{x:a.x,z:a.z}}),s.say("資源施設が襲撃されました。今波の生産停止")))}const i=[],r=new Map;for(const a of s.enemies){if(a.hp<=0){s.kills++,s.raid||(s.gold+=a.kind==="boss"?100:a.kind==="armored"?9:5),s.fx.push({kind:"kill",at:{x:a.x,z:a.z},type:a.kind});continue}if(n&&(a.launchDelay??0)>0){i.push(a);continue}if(a.segment>=a.path.length-1){if(n){const c=s.raid,l=vn[a.kind],h=a.resourceTarget===void 0?void 0:[...s.towers.values()].find(f=>f.id===a.resourceTarget);if(h&&(c.captured.includes(h.id)||h.type!=="mine"&&(h.disabledFor??0)>0)){s.redirectRaid(a)&&i.push(a);continue}const u=me(a.x,a.z),d=r.get(u)??0;if(d>=3){a.attackPhase=void 0,a.attackClock=void 0,i.push(a);continue}if(r.set(u,d+1),a.attackPhase===void 0&&(a.attackPhase="windup",a.attackClock=l.windup),a.attackClock=(a.attackClock??0)-e,a.attackClock<=1e-8)if(a.attackPhase==="recover")a.attackPhase="windup",a.attackClock=l.windup;else{a.attackPhase="recover",a.attackClock=l.recover,a.attackPulse=.25;const f=h??{x:0,z:0};s.fx.push({kind:"strike",from:{x:a.x,z:a.z},to:{x:f.x,z:f.z},unit:a.kind}),h?.type==="mine"?(c.resourceDamage[h.id]=(c.resourceDamage[h.id]??0)+(a.kind==="runner"?2:1),c.resourceDamage[h.id]>=3&&(c.captured.push(h.id),s.fx.push({kind:"capture",at:f}))):h&&a.kind==="boss"?(h.disabledFor=6,s.fx.push({kind:"disable",from:a,to:f,unit:a.kind})):(s.hp=Math.max(0,s.hp-l.impact),s.fx.push({kind:"core",at:f}))}i.push(a);continue}const o=a.kind==="boss"?5:a.kind==="armored"?2:1;if(s.raid?.rulesVersion===2&&a.resourceTarget!==void 0){const c=a.resourceTarget,l=s.raid;l.captured.includes(c)||(l.resourceDamage[c]=(l.resourceDamage[c]??0)+o,l.resourceDamage[c]>=3&&(l.captured.push(c),s.fx.push({kind:"capture",at:{x:a.x,z:a.z}})));continue}s.hp-=o,s.fx.push({kind:"core",at:{x:0,z:0}});continue}i.push(a)}if(s.enemies=i,s.hp<=0){s.hp=0,s.phase="gameover",s.raid&&(s.raid.result="win"),s.say("灯台が陥落した");return}if(s.raid){s.raid.remaining=Math.max(0,s.raid.remaining-e),(s.raid.remaining===0||s.raid.budget===0&&s.enemies.length===0)&&(s.raid.result="loss",s.phase="gameover");return}s.waveSpawned>=s.waveTotal&&s.enemies.length===0&&s.completeWave()}const Tt=(s,e=0,t=Number.MAX_SAFE_INTEGER)=>typeof s=="number"&&Number.isSafeInteger(s)&&s>=e&&s<=t,Wa=s=>s&&Tt(s.x,-1e5,1e5)&&Tt(s.z,-1e5,1e5),gd=new Set(["grass","sand","ridge","grove","ore"]);function Fc(s){const e=s,t=()=>{throw Error("Invalid or unsupported base data")};(!e||e.schemaVersion!==1||!Tt(e.generatorVersion,1)||!Tt(e.seed,0,4294967295)||!Tt(e.wave,1,1e4)||!Tt(e.hp,1,18)||!Tt(e.gold)||!Tt(e.islandCount,1,1e3)||!Tt(e.expandedWave,0,e.wave)||!Tt(e.bonusSlots,0,e.islandCount)||!Tt(e.completedWaves,0,e.wave-1)||!Tt(e.kills)||!Tt(e.nextBuildingId,1)||e.expeditionWins!==void 0&&!Tt(e.expeditionWins,0,1e6)||e.expansionPermits!==void 0&&!Tt(e.expansionPermits,0,e.expeditionWins??0)||e.partialClaims!==void 0&&(!Array.isArray(e.partialClaims)||e.partialClaims.length>3||e.partialClaims.some(c=>typeof c!="string"||c.length>100))||!Array.isArray(e.tiles)||e.tiles.length>4e4||!Array.isArray(e.buildings)||!Array.isArray(e.ports)||!e.ports.length)&&t();const n=new Map,i=new Set,r=new Set,a=new Set,o=new Set;for(const c of e.tiles)(!Wa(c)||!Tt(c.h,1,4)||!gd.has(c.biome)||!Tt(c.islandId,1,e.islandCount)||n.has(me(c.x,c.z))||c.bridge!==void 0&&typeof c.bridge!="boolean")&&t(),c.resource!==void 0&&(!["ore","wood","harbor","relic"].includes(c.resource)||!Tt(c.richness,1,3)||c.bridge)&&t(),n.set(me(c.x,c.z),c),c.bridge||a.add(c.islandId);(!n.has("0,0")||a.size!==e.islandCount)&&t();for(const c of e.buildings){(!Wa(c)||!Tt(c.id,1,e.nextBuildingId-1)||i.has(c.id)||!Object.hasOwn(Gn,c.type)||!Tt(c.paid,1)||c.upgrade!==void 0&&c.upgrade!==0&&c.upgrade!==1)&&t();const l=me(c.x,c.z),h=n.get(l);(!h||h.bridge||l==="0,0"||r.has(l)||c.type==="mine"&&!bn(h))&&t(),r.add(l),i.add(c.id)}e.buildings.length>e.tiles.length&&t();for(const c of e.ports){(!Wa(c)||!Tt(c.id,1)||o.has(c.id)||!Tt(c.createdWave,0,e.wave))&&t();const l=me(c.x,c.z),h=n.get(l);(!h||h.bridge||l==="0,0"||r.has(l))&&t(),o.add(c.id),r.add(l)}}class Bt{seed;tiles=new Map;towers=new Map;ports=[];enemies=[];fx=[];expansions=[];paths=new Map;phase="prepare";wave=1;hp=18;gold=190;islandCount=1;expandedWave=0;bonusSlots=0;expeditionWins=0;expansionPermits=0;partialClaims=[];get buildLimit(){return Math.max(this.towers.size,Kh(this.tiles.values(),this.bonusSlots))}plundered=new Set;resourceDamage={};get economy(){return dd(this.tiles,this.towers.values(),this.plundered)}get income(){return this.economy.income}get expeditionBudget(){return this.economy.budget}get canExpand(){return!this.raid&&this.phase==="prepare"&&(this.expandedWave!==this.wave||this.expansionPermits>0)}kills=0;completedWaves=0;lastReward=0;waveSpawned=0;waveTotal=0;waveTimer=0;spawnTimer=0;duration=0;speed=1;nextEnemyId=1;nextPortId=1;message="防衛施設を配置し、襲撃を開始しよう";messageTime=0;constructor(e,t){if(this.seed=Math.floor(e)>>>0,t){if(Fc(t),this.tiles=new Map(t.tiles.map(n=>[me(n.x,n.z),{...n}])),this.towers=new Map(t.buildings.map(n=>[me(n.x,n.z),{...n,cooldown:0,rotation:0,deploy:0}])),this.ports=t.ports.map(n=>({...n})),this.wave=t.wave,this.hp=t.hp,this.gold=t.gold,this.islandCount=t.islandCount,this.expandedWave=t.expandedWave,this.bonusSlots=t.bonusSlots,this.completedWaves=t.completedWaves,this.partialClaims=[...t.partialClaims??[]],this.expeditionWins=t.expeditionWins??0,this.expansionPermits=t.expansionPermits??0,this.kills=t.kills,this.nextPortId=Math.max(0,...this.ports.map(n=>n.id))+1,this.generationVersion=t.generatorVersion,this.nextBuildingId=t.nextBuildingId,this.updatePaths(),[...this.paths.values()].some(n=>n.length<2))throw Error("Invalid base routes")}else{const n=fd(this.seed);this.tiles=n.tiles,this.ports=n.ports,this.nextPortId=2,this.updatePaths()}}generationVersion=xl;nextBuildingId=1;static fromBase(e){return new Bt(e.seed,e)}toBase(){const e=[...this.towers.values()].map(({id:t,x:n,z:i,type:r,paid:a,upgrade:o})=>({id:t,x:n,z:i,type:r,paid:a,...o===void 0?{}:{upgrade:o}}));return{schemaVersion:1,generatorVersion:this.generationVersion,seed:this.seed,tiles:[...this.tiles.values()].map(t=>({...t})),buildings:e,ports:this.ports.map(t=>({...t})),wave:this.wave,hp:this.hp,gold:this.gold,islandCount:this.islandCount,expandedWave:this.expandedWave,bonusSlots:this.bonusSlots,completedWaves:this.completedWaves,kills:this.kills,nextBuildingId:this.nextBuildingId,expeditionWins:this.expeditionWins,expansionPermits:this.expansionPermits,partialClaims:[...this.partialClaims]}}random(e,t,n=0){return hn(this.seed,e,t,n)}get activePorts(){return this.ports}passable(e,t,n){const i=me(e,t);return i!==n&&this.tiles.has(i)&&!this.towers.has(i)}findPath(e,t,n,i){return ir(this.tiles,this.towers,e,t,n,i)}get canEdit(){return!this.raid&&(this.phase==="prepare"||this.phase==="combat")}buildCost(e){const t=Gn[e].cost+[...this.towers.values()].filter(n=>n.type===e).length*(e==="mine"?15:20);return e==="mine"?t:Math.ceil(t*(100-this.economy.discount)/100)}moveCost(e){return this.phase==="combat"?Math.ceil(Gn[e.type].cost*.15):0}sellValue(e){return Math.floor(e.paid*.8)}remainingPath(e,t,n){const i=e.path[e.segment];if(!i)return[];if(e.step>0&&e.segment<e.path.length-1){const r=e.path[e.segment+1];if(me(i.x,i.z)===t||me(r.x,r.z)===t)return[];const a=this.findPath(r,t,void 0,n);return a.length?[i,...a]:[]}return this.findPath(i,t,void 0,n)}updatePaths(){this.paths.clear();for(const e of this.ports)this.paths.set(e.id,this.findPath(e));for(const e of this.enemies){const t=this.remainingPath(e);t.length&&(e.path=t,e.segment=0)}}canPlace(e,t,n,i){const r=me(t,n),a=this.tiles.get(r);if(!this.canEdit)return"今は施設を操作できません";if(!a)return"陸地を選んでください";if(a.bridge)return"陸橋には建設できません";if(t===0&&n===0)return"ここは灯台です";if(this.ports.some(o=>o.x===t&&o.z===n))return"ここは敵の上陸地点です";if(this.towers.has(r)&&r!==i)return"すでに施設があります";if(e==="mine"&&!bn(a))return"資源があるマスを選んでください";if(e!=="mine"&&a.resource)return"資源マスは資源施設専用です";for(const o of this.enemies){if(o.hp<=0)continue;const c=o.path[o.segment],l=o.path[o.segment+1];if(c&&me(c.x,c.z)===r||o.step>0&&l&&me(l.x,l.z)===r)return"敵が通過中です";if(!this.remainingPath(o,r,i).length)return"敵の退路を塞ぐため置けません"}for(const o of this.ports)if(!this.findPath(o,r,void 0,i).length)return"敵の通り道を塞ぐため置けません";return null}canBuild(e,t,n){return this.towers.size>=this.buildLimit?"建設枠が満杯です。島を開拓してください":this.gold<this.buildCost(e)?"資金が足りません":this.canPlace(e,t,n)}build(e,t,n){const i=this.canBuild(e,t,n);if(i)return this.say(i),!1;const r=this.buildCost(e);return this.gold-=r,this.towers.set(me(t,n),{id:this.nextBuildingId++,x:t,z:n,type:e,paid:r,cooldown:0,deploy:this.phase==="combat"?1:0,rotation:0}),this.updatePaths(),this.say((e==="mine"?Uc[bn(this.tiles.get(me(t,n)))]:Gn[e].name)+"を建設"),!0}canMove(e,t,n){const i=this.towers.get(e);return i?me(t,n)===e?"移動先を選んでください":i.type==="mine"&&bn(this.tiles.get(e))!==bn(this.tiles.get(me(t,n)))?"同じ種類の資源へ移動してください":this.gold<this.moveCost(i)?"移動費用が足りません":this.canPlace(i.type,t,n,e):"施設がありません"}move(e,t,n){const i=this.canMove(e,t,n);if(i)return this.say(i),!1;const r=this.towers.get(e);return this.gold-=this.moveCost(r),this.towers.delete(e),r.x=t,r.z=n,r.deploy=this.phase==="combat"?Math.max(2.5,r.deploy??0):0,this.towers.set(me(t,n),r),this.updatePaths(),this.say(Gn[r.type].name+"を移動"),!0}sell(e){const t=this.towers.get(e);if(!t||!this.canEdit)return!1;const n=this.sellValue(t);return this.gold+=n,this.towers.delete(e),this.updatePaths(),this.say("売却 +"+n+"G"),!0}upgradeError(e,t){return e.type==="mine"&&bn(this.tiles.get(me(e.x,e.z)))!=="ore"?"この資源施設に強化はありません":e.type!=="mine"&&t===1&&!this.economy.research?"研究所を建てると解放されます":this.gold<cr[e.type][t].cost?"資金が足りません":null}upgrade(e,t){const n=this.towers.get(e);if(!n||!this.canEdit||n.upgrade!==void 0)return!1;const i=cr[n.type][t],r=this.upgradeError(n,t);return r?(this.say(r),!1):(this.gold-=i.cost,n.paid+=i.cost,n.upgrade=t,n.type==="mine"&&t===1&&(this.gold+=20),this.phase==="combat"&&(n.deploy=Math.max(1.5,n.deploy??0)),this.say(i.name+"に強化"),!0)}say(e){this.message=e,this.messageTime=3.6}get enemyCount(){return 6+this.wave*3+Math.floor(this.wave*this.wave/6)+(this.wave%5===0?1:0)}enemyKind(e){return this.wave%5===0&&e===this.enemyCount-1?"boss":this.wave>=4&&e%9===7?"support":this.wave>=3&&(this.wave%3===0?e%3===1:e%6===4)?"armored":(this.wave%3===2?e%2===1:e%4===2)?"runner":"raider"}get forecast(){const e={raider:0,runner:0,armored:0,support:0,boss:0};for(let t=0;t<this.enemyCount;t++)e[this.enemyKind(t)]++;return e}startWave(){if(this.raid||this.phase!=="prepare")return!1;this.phase="combat",this.plundered.clear(),this.resourceDamage={};for(const e of this.towers.values())e.cooldown=0,e.deploy=0,e.rotation=0;return this.waveTimer=0,this.spawnTimer=.3,this.waveSpawned=0,this.waveTotal=this.enemyCount,this.say("第"+this.wave+"波、接近中！"),!0}createEnemy(e,t,n){const i=this.activePorts;if(!i.length)return null;const r=n===void 0?i[(e+this.wave)%i.length]:i.find(f=>f.id===n);if(!r)return null;const a=this.paths.get(r.id)??[];if(a.length<2)return null;const o=t??this.enemyKind(e),c=o==="boss",l=o==="support"?55+this.wave*10:c?460+this.wave*60:o==="armored"?76+this.wave*18+this.wave*this.wave*1.1:o==="runner"?26+this.wave*6+this.wave*this.wave*.9:35+this.wave*8+this.wave*this.wave*1.1,h=(c?.48:o==="armored"?.55:o==="runner"?1.42:.85)*(1+Math.max(0,this.wave-4)*.045),u=this.raid?.rulesVersion===3,d=u?vn[o].hp:l;return{id:this.nextEnemyId++,kind:o,hp:d,maxHp:d,speed:u?vn[o].speed:h,path:a,segment:0,step:0,x:a[0].x,z:a[0].z,slow:0,hit:0}}raid=null;static raidFrom(e,t={}){const n=Bt.fromBase(e),i=t.budget??Math.max(24,18+n.towers.size*5);return n.raid={rulesVersion:t.rulesVersion??2,captured:[],resourceDamage:{},budget:i,initialBudget:i,step:0,commands:[],remaining:Math.max(75,Math.max(...[...n.paths.values()].map(r=>r.length))*2.5+25),result:null},n.phase=t.scout?"prepare":"combat",n.hp=18,n}startRaid(){return!this.raid||this.phase!=="prepare"?!1:(this.phase="combat",!0)}resourceRoute(e,t){const n=this.ports.find(r=>r.id===e),i=[...this.towers.values()].find(r=>r.id===t&&(r.type==="mine"||this.raid?.rulesVersion===3));return!n||!i?[]:this.raid?.rulesVersion===3?this.attackRoute(n,i):ir(this.tiles,this.towers,n,void 0,void 0,me(i.x,i.z),i)}attackRoutes(e,t){return nr.map(n=>ir(this.tiles,this.towers,e,void 0,void 0,void 0,{x:t.x+n.x,z:t.z+n.z})).filter(n=>n.length).sort((n,i)=>n.length-i.length)}attackRoute(e,t){return this.attackRoutes(e,t)[0]??[]}chooseAttackRoute(e,t,n){const i=this.attackRoutes(e,t);if(!i.length)return[];const r=i[0].length,a=new Map;for(const c of this.enemies)if(c.hp>0&&c.resourceTarget===n){const l=c.path.at(-1);if(l){const h=me(l.x,l.z);a.set(h,(a.get(h)??0)+1)}}const o=c=>{const l=c.at(-1);return c.length+(a.get(me(l.x,l.z))??0)*1.5};return i.filter(c=>c.length<=r+3).sort((c,l)=>o(c)-o(l))[0]}raidRouteCache=new Map;raidRoute(e,t){const n=e+":"+(t??"core"),i=this.raidRouteCache.get(n);if(i)return i;const r=this.ports.find(o=>o.id===e),a=t!==void 0?this.resourceRoute(e,t):this.raid?.rulesVersion===3&&r?this.attackRoute(r,{x:0,z:0}):this.paths.get(e)??[];return this.raidRouteCache.set(n,a),a}redirectRaid(e){const t=this.chooseAttackRoute({x:Math.round(e.x),z:Math.round(e.z)},{x:0,z:0});return t.length?(e.path=t,e.segment=0,e.step=0,delete e.resourceTarget,delete e.attackPhase,delete e.attackClock,!0):!1}deployRaid(e,t,n){if(!this.raid||this.phase!=="combat"||!Object.hasOwn(Ti,e)||this.raid.budget<Ti[e])return!1;const i=this.createEnemy(this.waveSpawned,e,t);if(!i)return!1;if(n!==void 0){const r=[...this.towers.values()].find(o=>o.id===n);if(this.raid.rulesVersion===1||!Number.isSafeInteger(n)||this.raid.captured.includes(n)||!r||r.type!=="mine"&&(this.raid.rulesVersion!==3||e!=="boss"||(r.disabledFor??0)>0))return!1;const a=this.resourceRoute(t,n);if(a.length<(this.raid.rulesVersion===3?1:2))return!1;i.path=a,i.resourceTarget=n}if(this.raid.rulesVersion===3){const r=n===void 0?{x:0,z:0}:[...this.towers.values()].find(l=>l.id===n),a=this.chooseAttackRoute(i.path[0],r,n);if(!a.length)return!1;i.path=a;const o=this.raid.launchAt??(this.raid.launchAt={}),c=Math.max(this.raid.step,o[t]??0);i.launchDelay=(c-this.raid.step)*.05,o[t]=c+4}return this.raid.commands.push({step:this.raid.step,kind:e,portId:t,...n===void 0?{}:{resourceTarget:n}}),this.raid.budget-=Ti[e],this.enemies.push(i),this.waveSpawned++,!0}endRaid(){!this.raid||this.phase!=="combat"||(this.raid.result="loss",this.phase="gameover")}tick(e){this.raid&&this.phase==="combat"&&this.raid.step++,xd(this,e)}damage(e,t,n,i=0){const r=this.raid?.rulesVersion===3?vn[e.kind].armor:e.kind==="armored"?Math.min(19,10+this.wave):e.kind==="boss"?8:0;t=Math.max(1,t-Math.max(0,r-i)),e.hp-=t,e.hit=.19,this.fx.push({kind:"hit",at:{x:e.x,z:e.z},value:t,type:n})}completeWave(){this.completedWaves++,this.lastReward=this.income+(this.wave%5===0?120:0),this.gold+=this.lastReward,this.plundered.clear(),this.resourceDamage={},this.wave++,this.phase="prepare";for(const e of this.towers.values())e.deploy=0;this.expansions=[],this.say("防衛成功！　次の島を追加できます")}openExpansion(){return this.canExpand?(this.expansions=this.generateExpansions(),this.expansions.length?(this.phase="expansion",!0):(this.say("接続できる島が見つかりません"),!1)):!1}closeExpansion(){this.phase==="expansion"&&(this.phase="prepare",this.expansions=[])}generateExpansions(){const e=gl(this.seed,this.islandCount,this.tiles,this.ports,this.islandCount),t=this.towers.size?new Map(gl(this.seed,this.islandCount,this.tiles,this.ports,this.islandCount,this.towers).map(n=>[n.candidateKey,n])):new Map(e.map(n=>[n.candidateKey,n]));return e.map(n=>({...t.get(n.candidateKey)??n,id:n.id,blocked:!t.has(n.candidateKey)}))}chooseExpansion(e){if(this.phase!=="expansion"||this.expandedWave===this.wave&&this.expansionPermits===0)return!1;const t=this.expansions.find(i=>i.id===e);if(!t||t.blocked)return this.say("接続先への道が塞がれています"),!1;for(const i of t.tiles)this.tiles.set(me(i.x,i.z),i);const n=this.ports.find(i=>i.id===t.replacePortId);return n?(n.x=t.landing.x,n.z=t.landing.z,n.createdWave=this.wave):this.ports.push({id:this.nextPortId++,x:t.landing.x,z:t.landing.z,createdWave:this.wave}),this.gold+=t.bonus,t.reward==="repair"&&(this.hp=Math.min(18,this.hp+3)),t.reward==="permit"&&this.bonusSlots++,this.islandCount++,this.generationVersion=xl,this.expandedWave===this.wave&&this.expansionPermits--,this.expandedWave=this.wave,this.expansions=[],this.phase="prepare",this.updatePaths(),this.fx.push({kind:"land",at:t.landing}),this.say(t.title+"を開拓！ "+(t.reward==="repair"?"灯台HP回復":t.reward==="permit"?"追加建設枠+1":"資材を発見")),!0}getBestWave(){return this.completedWaves}}const Oc="181",_d=0,_l=1,vd=2,Zh=1,Jh=2,ri=3,ui=0,rn=1,Cn=2,ci=0,bs=1,vl=2,bl=3,Ml=4,bd=5,Vi=100,Md=101,yd=102,Sd=103,Ed=104,Td=200,wd=201,Ad=202,Rd=203,Po=204,Lo=205,Cd=206,Id=207,Pd=208,Ld=209,Dd=210,Nd=211,Ud=212,Fd=213,Od=214,Do=0,No=1,Uo=2,Ts=3,Fo=4,Oo=5,Bo=6,ko=7,Qh=0,Bd=1,kd=2,wi=0,zd=1,Vd=2,Gd=3,eu=4,Hd=5,Wd=6,Xd=7,yl="attached",qd="detached",tu=300,ws=301,As=302,zo=303,Vo=304,Pa=306,Rs=1e3,Hn=1001,va=1002,$t=1003,nu=1004,er=1005,jt=1006,oa=1007,ai=1008,qn=1009,iu=1010,su=1011,lr=1012,Bc=1013,Yi=1014,Ln=1015,Bs=1016,kc=1017,zc=1018,hr=1020,ru=35902,au=35899,ou=1021,cu=1022,yn=1023,ur=1026,dr=1027,Vc=1028,Gc=1029,Hc=1030,Wc=1031,Xc=1033,ca=33776,la=33777,ha=33778,ua=33779,Go=35840,Ho=35841,Wo=35842,Xo=35843,qo=36196,Yo=37492,Ko=37496,jo=37808,$o=37809,Zo=37810,Jo=37811,Qo=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,rc=37818,ac=37819,oc=37820,cc=37821,lc=36492,hc=36494,uc=36495,dc=36283,fc=36284,pc=36285,mc=36286,lu=2200,hu=2201,Yd=2202,fr=2300,pr=2301,Xa=2302,xs=2400,gs=2401,ba=2402,qc=2500,Kd=2501,jd=0,uu=1,xc=2,$d=3200,Zd=3201,du=0,Jd=1,yi="",Ut="srgb",Qt="srgb-linear",Ma="linear",ct="srgb",es=7680,Sl=519,Qd=512,ef=513,tf=514,fu=515,nf=516,sf=517,rf=518,af=519,gc=35044,El="300 es",Wn=2e3,ya=2001;function pu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function of(){const s=mr("canvas");return s.style.display="block",s}const Tl={};function Sa(...s){const e="THREE."+s.shift();console.log(e,...s)}function ye(...s){const e="THREE."+s.shift();console.warn(e,...s)}function We(...s){const e="THREE."+s.shift();console.error(e,...s)}function xr(...s){const e=s.join(" ");e in Tl||(Tl[e]=!0,ye(...s))}function cf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wl=1234567;const sr=Math.PI/180,Cs=180/Math.PI;function Nn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function Yc(s,e){return(s%e+e)%e}function lf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function hf(s,e,t){return s!==e?(t-s)/(e-s):0}function rr(s,e,t){return(1-t)*s+t*e}function uf(s,e,t,n){return rr(s,e,1-Math.exp(-t*n))}function df(s,e=1){return e-Math.abs(Yc(s,e*2)-e)}function ff(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function pf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function mf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xf(s,e){return s+Math.random()*(e-s)}function gf(s){return s*(.5-Math.random())}function _f(s){s!==void 0&&(wl=s);let e=wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vf(s){return s*sr}function bf(s){return s*Cs}function Mf(s){return(s&s-1)===0&&s!==0}function yf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Sf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ef(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*x,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*x,o*l);break;case"ZYZ":s.set(c*x,c*f,o*h,o*l);break;default:ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Tf={DEG2RAD:sr,RAD2DEG:Cs,generateUUID:Nn,clamp:qe,euclideanModulo:Yc,mapLinear:lf,inverseLerp:hf,lerp:rr,damp:uf,pingpong:df,smoothstep:ff,smootherstep:pf,randInt:mf,randFloat:xf,randFloatSpread:gf,seededRandom:_f,degToRad:vf,radToDeg:bf,isPowerOfTwo:Mf,ceilPowerOfTwo:yf,floorPowerOfTwo:Sf,setQuaternionFromProperEuler:Ef,normalize:st,denormalize:In};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],x=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==x){let m=c*d+l*f+h*x+u*g;m<0&&(d=-d,f=-f,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),y=Math.sin(S);p=Math.sin(p*S)/y,o=Math.sin(o*S)/y,c=c*p+d*o,l=l*p+f*o,h=h*p+x*o,u=u*p+g*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+x*o,u=u*p+g*o;const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+h*u+c*f-l*d,e[t+1]=c*x+h*d+l*u-o*f,e[t+2]=l*x+h*f+o*d-c*u,e[t+3]=h*x-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),x=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"YZX":this._x=d*h*u+l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u-d*f*x;break;case"XZY":this._x=d*h*u-l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u+d*f*x;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new N,Al=new Un;class ke{constructor(e,t,n,i,r,a,o,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],g=i[0],m=i[3],p=i[6],S=i[1],y=i[4],E=i[7],A=i[2],T=i[5],R=i[8];return r[0]=a*g+o*S+c*A,r[3]=a*m+o*y+c*T,r[6]=a*p+o*E+c*R,r[1]=l*g+h*S+u*A,r[4]=l*m+h*y+u*T,r[7]=l*p+h*E+u*R,r[2]=d*g+f*S+x*A,r[5]=d*m+f*y+x*T,r[8]=d*p+f*E+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,x=t*u+n*d+i*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new ke,Rl=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){const s={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?Ma:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Qt]:{primaries:e,whitePoint:n,transfer:Ma,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),s}const Qe=wf();function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ts;class Af{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=mr("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rf=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ka(i[a].image)):r.push(Ka(i[a]))}else r=Ka(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Af.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ye("Texture: Unable to serialize Texture."),{})}let Cf=0;const ja=new N;class kt extends $i{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Hn,i=Hn,r=jt,a=ai,o=yn,c=qn,l=kt.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Nn(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=tu;kt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],x=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,E=(f+1)/2,A=(p+1)/2,T=(h+d)/4,R=(u+g)/4,I=(x+m)/4;return y>E&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=R/n):E>A?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=T/i,r=I/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=R/r,i=I/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends $i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new kt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Kc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends If{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mu extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Pr.subVectors(this.max,Ws),ns.subVectors(e.a,Ws),is.subVectors(e.b,Ws),ss.subVectors(e.c,Ws),mi.subVectors(is,ns),xi.subVectors(ss,is),Di.subVectors(ns,ss);let t=[0,-mi.z,mi.y,0,-xi.z,xi.y,0,-Di.z,Di.y,mi.z,0,-mi.x,xi.z,0,-xi.x,Di.z,0,-Di.x,-mi.y,mi.x,0,-xi.y,xi.x,0,-Di.y,Di.x,0];return!$a(t,ns,is,ss,Pr)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,ns,is,ss,Pr))?!1:(Lr.crossVectors(mi,xi),t=[Lr.x,Lr.y,Lr.z],$a(t,ns,is,ss,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new N,new N,new N,new N,new N,new N,new N,new N],Tn=new N,Ir=new pi,ns=new N,is=new N,ss=new N,mi=new N,xi=new N,Di=new N,Ws=new N,Pr=new N,Lr=new N,Ni=new N;function $a(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ni.fromArray(s,r);const o=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),c=e.dot(Ni),l=t.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Lf=new pi,Xs=new N,Za=new N;class jn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Za)),this.expandByPoint(Xs.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Jn=new N,Ja=new N,Dr=new N,gi=new N,Qa=new N,Nr=new N,eo=new N;class Sr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ja.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Ja);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=gi.dot(this.direction),c=-gi.dot(Dr),l=gi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,x;if(h>0)if(u=a*c-o,d=a*o-c,x=r*h,u>=0)if(d>=-x)if(d<=x){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ja).addScaledVector(Dr,d),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,r){Qa.subVectors(t,e),Nr.subVectors(n,e),eo.crossVectors(Qa,Nr);let a=this.direction.dot(eo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);const c=o*this.direction.dot(Nr.crossVectors(gi,Nr));if(c<0)return null;const l=o*this.direction.dot(Qa.cross(gi));if(l<0||c+l>a)return null;const h=-o*gi.dot(eo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,x,g,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,x,g,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,x,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,x=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+x*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=x+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,x=l*h,g=l*u;t[0]=d+g*o,t[4]=x*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,x=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,x=o*h,g=o*u;t[0]=c*h,t[4]=x*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,x=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=x*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+x,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*c,f=a*l,x=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Df,e,Nf)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),_i.crossVectors(n,cn),_i.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),_i.crossVectors(n,cn)),_i.normalize(),Ur.crossVectors(cn,_i),i[0]=_i.x,i[4]=Ur.x,i[8]=cn.x,i[1]=_i.y,i[5]=Ur.y,i[9]=cn.y,i[2]=_i.z,i[6]=Ur.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],g=n[6],m=n[10],p=n[14],S=n[3],y=n[7],E=n[11],A=n[15],T=i[0],R=i[4],I=i[8],b=i[12],v=i[1],P=i[5],O=i[9],z=i[13],q=i[2],X=i[6],j=i[10],ee=i[14],W=i[3],se=i[7],oe=i[11],we=i[15];return r[0]=a*T+o*v+c*q+l*W,r[4]=a*R+o*P+c*X+l*se,r[8]=a*I+o*O+c*j+l*oe,r[12]=a*b+o*z+c*ee+l*we,r[1]=h*T+u*v+d*q+f*W,r[5]=h*R+u*P+d*X+f*se,r[9]=h*I+u*O+d*j+f*oe,r[13]=h*b+u*z+d*ee+f*we,r[2]=x*T+g*v+m*q+p*W,r[6]=x*R+g*P+m*X+p*se,r[10]=x*I+g*O+m*j+p*oe,r[14]=x*b+g*z+m*ee+p*we,r[3]=S*T+y*v+E*q+A*W,r[7]=S*R+y*P+E*X+A*se,r[11]=S*I+y*O+E*j+A*oe,r[15]=S*b+y*z+E*ee+A*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+g*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],g=e[13],m=e[14],p=e[15],S=u*m*l-g*d*l+g*c*f-o*m*f-u*c*p+o*d*p,y=x*d*l-h*m*l-x*c*f+a*m*f+h*c*p-a*d*p,E=h*g*l-x*u*l+x*o*f-a*g*f-h*o*p+a*u*p,A=x*u*c-h*g*c-x*o*d+a*g*d+h*o*m-a*u*m,T=t*S+n*y+i*E+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=S*R,e[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*R,e[2]=(o*m*r-g*c*r+g*i*l-n*m*l-o*i*p+n*c*p)*R,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*R,e[4]=y*R,e[5]=(h*m*r-x*d*r+x*i*f-t*m*f-h*i*p+t*d*p)*R,e[6]=(x*c*r-a*m*r-x*i*l+t*m*l+a*i*p-t*c*p)*R,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*R,e[8]=E*R,e[9]=(x*u*r-h*g*r-x*n*f+t*g*f+h*n*p-t*u*p)*R,e[10]=(a*g*r-x*o*r+x*n*l-t*g*l-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*R,e[12]=A*R,e[13]=(h*g*i-x*u*i+x*n*d-t*g*d-h*n*m+t*u*m)*R,e[14]=(x*o*i-a*g*i-x*n*c+t*g*c+a*n*m-t*o*m)*R,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,x=r*u,g=a*h,m=a*u,p=o*u,S=c*l,y=c*h,E=c*u,A=n.x,T=n.y,R=n.z;return i[0]=(1-(g+p))*A,i[1]=(f+E)*A,i[2]=(x-y)*A,i[3]=0,i[4]=(f-E)*T,i[5]=(1-(d+p))*T,i[6]=(m+S)*T,i[7]=0,i[8]=(x+y)*R,i[9]=(m-S)*R,i[10]=(1-(d+g))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=rs.set(i[0],i[1],i[2]).length();const a=rs.set(i[4],i[5],i[6]).length(),o=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);const l=1/r,h=1/a,u=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Wn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let x,g;if(c)x=r/(a-r),g=a*r/(a-r);else if(o===Wn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ya)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Wn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let x,g;if(c)x=1/(a-r),g=a/(a-r);else if(o===Wn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===ya)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rs=new N,wn=new Ve,Df=new N(0,0,0),Nf=new N(1,1,1),_i=new N,Ur=new N,cn=new N,Il=new Ve,Pl=new Un;class Yn{constructor(e=0,t=0,n=0,i=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uf=0;const Ll=new N,as=new Un,Qn=new Ve,Fr=new N,qs=new N,Ff=new N,Of=new Un,Dl=new N(1,0,0),Nl=new N(0,1,0),Ul=new N(0,0,1),Fl={type:"added"},Bf={type:"removed"},os={type:"childadded",child:null},to={type:"childremoved",child:null};class vt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new N,t=new Yn,n=new Un,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ke}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Ul,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(qs,Fr,this.up):Qn.lookAt(Fr,qs,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),as.setFromRotationMatrix(Qn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fl),os.child=e,this.dispatchEvent(os),os.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bf),to.child=e,this.dispatchEvent(to),to.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fl),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new N(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new N,ei=new N,no=new N,ti=new N,cs=new N,ls=new N,Ol=new N,io=new N,so=new N,ro=new N,ao=new tt,oo=new tt,co=new tt;class Pn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){An.subVectors(i,t),ei.subVectors(n,t),no.subVectors(e,t);const a=An.dot(An),o=An.dot(ei),c=An.dot(no),l=ei.dot(ei),h=ei.dot(no),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,x=(a*h-o*c)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return ao.setScalar(0),oo.setScalar(0),co.setScalar(0),ao.fromBufferAttribute(e,t),oo.fromBufferAttribute(e,n),co.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ao,r.x),a.addScaledVector(oo,r.y),a.addScaledVector(co,r.z),a}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),ei.subVectors(e,t),An.cross(ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),An.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;cs.subVectors(i,n),ls.subVectors(r,n),io.subVectors(e,n);const c=cs.dot(io),l=ls.dot(io);if(c<=0&&l<=0)return t.copy(n);so.subVectors(e,i);const h=cs.dot(so),u=ls.dot(so);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(cs,a);ro.subVectors(e,r);const f=cs.dot(ro),x=ls.dot(ro);if(x>=0&&f<=x)return t.copy(r);const g=f*l-c*x;if(g<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(ls,o);const m=h*x-f*u;if(m<=0&&u-h>=0&&f-x>=0)return Ol.subVectors(r,i),o=(u-h)/(u-h+(f-x)),t.copy(i).addScaledVector(Ol,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(cs,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function lo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Yc(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lo(a,r,e+1/3),this.g=lo(a,r,e),this.b=lo(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,i),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Qe.workingToColorSpace(Xt.copy(this),e),Math.round(qe(Xt.r*255,0,255))*65536+Math.round(qe(Xt.g*255,0,255))*256+Math.round(qe(Xt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ut){Qe.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Or);const n=rr(vi.h,Or.h,t),i=rr(vi.s,Or.s,t),r=rr(vi.l,Or.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Fe;Fe.NAMES=xu;let kf=0;class Sn extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=bs,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Lo,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Po&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class At extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new N,Br=new ze;let zf=0;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}}class gu extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _u extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vf=0;const dn=new Ve,ho=new vt,hs=new N,ln=new pi,Ys=new pi,Nt=new N;class Ot extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?_u:gu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(ln.min,Ys.min),ln.expandByPoint(Nt),Nt.addVectors(ln.max,Ys.max),ln.expandByPoint(Nt)):(ln.expandByPoint(Ys.min),ln.expandByPoint(Ys.max))}ln.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(hs.fromBufferAttribute(e,l),Nt.add(hs)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new N,c[I]=new N;const l=new N,h=new N,u=new N,d=new ze,f=new ze,x=new ze,g=new N,m=new N;function p(I,b,v){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),x.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),x.sub(d);const P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(P),o[I].add(g),o[b].add(g),o[v].add(g),c[I].add(m),c[b].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,b=S.length;I<b;++I){const v=S[I],P=v.start,O=v.count;for(let z=P,q=P+O;z<q;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new N,E=new N,A=new N,T=new N;function R(I){A.fromBufferAttribute(i,I),T.copy(A);const b=o[I];y.copy(b),y.sub(A.multiplyScalar(A.dot(b))).normalize(),E.crossVectors(T,b);const P=E.dot(c[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,b=S.length;I<b;++I){const v=S[I],P=v.start,O=v.count;for(let z=P,q=P+O;z<q;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,x=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)d[x++]=l[f++]}return new Zt(d,h,u)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new Ve,Ui=new Sr,kr=new jn,kl=new N,zr=new N,Vr=new N,Gr=new N,uo=new N,Hr=new N,zl=new N,Wr=new N;class Rt extends vt{constructor(e=new Ot,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(uo.fromBufferAttribute(u,e),a?Hr.addScaledVector(uo,h):Hr.addScaledVector(uo.sub(t),h))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(kr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(kr,kl)===null||Ui.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(Bl.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,A=y;E<A;E+=3){const T=o.getX(E),R=o.getX(E+1),I=o.getX(E+2);i=Xr(this,p,e,n,l,h,u,T,R,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const S=o.getX(m),y=o.getX(m+1),E=o.getX(m+2);i=Xr(this,a,e,n,l,h,u,S,y,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,A=y;E<A;E+=3){const T=E,R=E+1,I=E+2;i=Xr(this,p,e,n,l,h,u,T,R,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const S=m,y=m+1,E=m+2;i=Xr(this,a,e,n,l,h,u,S,y,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Gf(s,e,t,n,i,r,a,o){let c;if(e.side===rn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===ui,o),c===null)return null;Wr.copy(o),Wr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Wr);return l<t.near||l>t.far?null:{distance:l,point:Wr.clone(),object:s}}function Xr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,zr),s.getVertexPosition(c,Vr),s.getVertexPosition(l,Gr);const h=Gf(s,e,t,n,zr,Vr,Gr,zl);if(h){const u=new N;Pn.getBarycoord(zl,zr,Vr,Gr,u),i&&(h.uv=Pn.getInterpolatedAttribute(i,o,c,l,u,new ze)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,o,c,l,u,new ze)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};Pn.getNormal(zr,Vr,Gr,d.normal),h.face=d,h.barycoord=u}return h}class Zi extends Ot{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function x(g,m,p,S,y,E,A,T,R,I,b){const v=E/R,P=A/I,O=E/2,z=A/2,q=T/2,X=R+1,j=I+1;let ee=0,W=0;const se=new N;for(let oe=0;oe<j;oe++){const we=oe*P-z;for(let Je=0;Je<X;Je++){const rt=Je*v-O;se[g]=rt*S,se[m]=we*y,se[p]=q,l.push(se.x,se.y,se.z),se[g]=0,se[m]=0,se[p]=T>0?1:-1,h.push(se.x,se.y,se.z),u.push(Je/R),u.push(1-oe/I),ee+=1}}for(let oe=0;oe<I;oe++)for(let we=0;we<R;we++){const Je=d+we+X*oe,rt=d+we+X*(oe+1),dt=d+(we+1)+X*(oe+1),ft=d+(we+1)+X*oe;c.push(Je,rt,ft),c.push(rt,dt,ft),W+=6}o.addGroup(f,W,b),f+=W,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(s){const e={};for(let t=0;t<s.length;t++){const n=Is(s[t]);for(const i in n)e[i]=n[i]}return e}function Hf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Wf={clone:Is,merge:Kt};var Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bu extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new N,Vl=new ze,Gl=new ze;class nn extends bu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Gl),t.subVectors(Gl,Vl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class Yf extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(us,ds,e,t);i.layers=this.layers,this.add(i);const r=new nn(us,ds,e,t);r.layers=this.layers,this.add(r);const a=new nn(us,ds,e,t);a.layers=this.layers,this.add(a);const o=new nn(us,ds,e,t);o.layers=this.layers,this.add(o);const c=new nn(us,ds,e,t);c.layers=this.layers,this.add(c);const l=new nn(us,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Mu extends kt{constructor(e=[],t=ws,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kf extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zi(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ci});r.uniforms.tEquirect.value=t;const a=new Rt(i,r),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=jt),new Yf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class wt extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;l.inputState.pinching&&d>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $f extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new N;class $c{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $c(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Hl=new N,Wl=new tt,Xl=new tt,Jf=new N,ql=new Ve,qr=new N,po=new jn,Yl=new Ve,mo=new Sr;class Qf extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingSphere.expandByPoint(qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1&&(Yl.copy(i).invert(),mo.copy(e.ray).applyMatrix4(Yl),!(this.boundingBox!==null&&mo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qd?this.bindMatrixInverse.copy(this.bindMatrix).invert():ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wl.fromBufferAttribute(i.attributes.skinIndex,e),Xl.fromBufferAttribute(i.attributes.skinWeight,e),Hl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Xl.getComponent(r);if(a!==0){const o=Wl.getComponent(r);ql.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jf.copy(Hl).applyMatrix4(ql),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yu extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zc extends kt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=$t,h=$t,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kl=new Ve,ep=new Ve;class Jc{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:ep;Kl.multiplyMatrices(o,t[r]),Kl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Zc(t,e,e,yn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(ye("Skeleton: No bone found with UUID:",r),a=new yu),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class _c extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new Ve,jl=new Ve,Yr=[],$l=new pi,tp=new Ve,Ks=new Rt,js=new jn;class np extends Rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),$l.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union($l)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),js.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),e.ray.intersectsSphere(js)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fs),jl.multiplyMatrices(n,fs),Ks.matrixWorld=jl,Ks.raycast(e,Yr);for(let a=0,o=Yr.length;a<o;a++){const c=Yr[a];c.instanceId=r,c.object=this,t.push(c)}Yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zc(new Float32Array(i*this.count),i,this.count,Vc,Ln));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xo=new N,ip=new N,sp=new ke;class zi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xo.subVectors(n,t).cross(ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sp.getNormalMatrix(e),i=this.coplanarPoint(xo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new jn,rp=new ze(.5,.5),Kr=new N;class Qc{constructor(e=new zi,t=new zi,n=new zi,i=new zi,r=new zi,a=new zi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],x=r[8],g=r[9],m=r[10],p=r[11],S=r[12],y=r[13],E=r[14],A=r[15];if(i[0].setComponents(l-a,f-h,p-x,A-S).normalize(),i[1].setComponents(l+a,f+h,p+x,A+S).normalize(),i[2].setComponents(l+o,f+u,p+g,A+y).normalize(),i[3].setComponents(l-o,f-u,p-g,A-y).normalize(),n)i[4].setComponents(c,d,m,E).normalize(),i[5].setComponents(l-c,f-d,p-m,A-E).normalize();else if(i[4].setComponents(l-c,f-d,p-m,A-E).normalize(),t===Wn)i[5].setComponents(l+c,f+d,p+m,A+E).normalize();else if(t===ya)i[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);const t=rp.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gi extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ea=new N,Ta=new N,Zl=new Ve,$s=new Sr,jr=new jn,go=new N,Jl=new N;class Rn extends vt{constructor(e=new Ot,t=new Gi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ea.fromBufferAttribute(t,i-1),Ta.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ea.distanceTo(Ta);e.setAttribute("lineDistance",new zt(n,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;Zl.copy(i).invert(),$s.copy(e.ray).applyMatrix4(Zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let g=f,m=x-1;g<m;g+=l){const p=h.getX(g),S=h.getX(g+1),y=$r(this,e,$s,c,p,S,g);y&&t.push(y)}if(this.isLineLoop){const g=h.getX(x-1),m=h.getX(f),p=$r(this,e,$s,c,g,m,x-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let g=f,m=x-1;g<m;g+=l){const p=$r(this,e,$s,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=$r(this,e,$s,c,x-1,f,x-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $r(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Ea.fromBufferAttribute(o,i),Ta.fromBufferAttribute(o,r),t.distanceSqToSegment(Ea,Ta,go,Jl)>n)return;go.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(go);if(!(l<e.near||l>e.far))return{distance:l,point:Jl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Ql=new N,eh=new N;class ap extends Rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ql.fromBufferAttribute(t,i),eh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ql.distanceTo(eh);e.setAttribute("lineDistance",new zt(n,1))}else ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class op extends Rn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Su extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const th=new Ve,vc=new Sr,Zr=new jn,Jr=new N;class cp extends vt{constructor(e=new Ot,t=new Su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;th.copy(i).invert(),vc.copy(e.ray).applyMatrix4(th);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let x=d,g=f;x<g;x++){const m=l.getX(x);Jr.fromBufferAttribute(u,m),nh(Jr,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=d,g=f;x<g;x++)Jr.fromBufferAttribute(u,x),nh(Jr,x,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nh(s,e,t,n,i,r,a){const o=vc.distanceSqToPoint(s);if(o<t){const c=new N;vc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Eu extends kt{constructor(e,t,n=Yi,i,r,a,o=$t,c=$t,l,h=ur,u=1){if(h!==ur&&h!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tu extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class La extends Ot{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let x=0;const g=[],m=n/2;let p=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function S(){const E=new N,A=new N;let T=0;const R=(t-e)/n;for(let I=0;I<=r;I++){const b=[],v=I/r,P=v*(t-e)+e;for(let O=0;O<=i;O++){const z=O/i,q=z*c+o,X=Math.sin(q),j=Math.cos(q);A.x=P*X,A.y=-v*n+m,A.z=P*j,u.push(A.x,A.y,A.z),E.set(X,R,j).normalize(),d.push(E.x,E.y,E.z),f.push(z,1-v),b.push(x++)}g.push(b)}for(let I=0;I<i;I++)for(let b=0;b<r;b++){const v=g[b][I],P=g[b+1][I],O=g[b+1][I+1],z=g[b][I+1];(e>0||b!==0)&&(h.push(v,P,z),T+=3),(t>0||b!==r-1)&&(h.push(P,O,z),T+=3)}l.addGroup(p,T,0),p+=T}function y(E){const A=x,T=new ze,R=new N;let I=0;const b=E===!0?e:t,v=E===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),x++;const P=x;for(let O=0;O<=i;O++){const q=O/i*c+o,X=Math.cos(q),j=Math.sin(q);R.x=b*j,R.y=m*v,R.z=b*X,u.push(R.x,R.y,R.z),d.push(0,v,0),T.x=X*.5+.5,T.y=j*.5*v+.5,f.push(T.x,T.y),x++}for(let O=0;O<i;O++){const z=A+O,q=P+O;E===!0?h.push(q,q+1,z):h.push(q+1,q,z),I+=3}l.addGroup(p,I,E===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class el extends La{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new el(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tl extends Ot{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const y=new N,E=new N,A=new N;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],E),f(t[T+2],A),c(y,E,A,S)}function c(S,y,E,A){const T=A+1,R=[];for(let I=0;I<=T;I++){R[I]=[];const b=S.clone().lerp(E,I/T),v=y.clone().lerp(E,I/T),P=T-I;for(let O=0;O<=P;O++)O===0&&I===T?R[I][O]=b:R[I][O]=b.clone().lerp(v,O/P)}for(let I=0;I<T;I++)for(let b=0;b<2*(T-I)-1;b++){const v=Math.floor(b/2);b%2===0?(d(R[I][v+1]),d(R[I+1][v]),d(R[I][v])):(d(R[I][v+1]),d(R[I+1][v+1]),d(R[I+1][v]))}}function l(S){const y=new N;for(let E=0;E<r.length;E+=3)y.x=r[E+0],y.y=r[E+1],y.z=r[E+2],y.normalize().multiplyScalar(S),r[E+0]=y.x,r[E+1]=y.y,r[E+2]=y.z}function h(){const S=new N;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const E=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;a.push(E,1-A)}x(),u()}function u(){for(let S=0;S<a.length;S+=6){const y=a[S+0],E=a[S+2],A=a[S+4],T=Math.max(y,E,A),R=Math.min(y,E,A);T>.9&&R<.1&&(y<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){const E=S*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function x(){const S=new N,y=new N,E=new N,A=new N,T=new ze,R=new ze,I=new ze;for(let b=0,v=0;b<r.length;b+=9,v+=6){S.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),E.set(r[b+6],r[b+7],r[b+8]),T.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),I.set(a[v+4],a[v+5]),A.copy(S).add(y).add(E).divideScalar(3);const P=m(A);g(T,v+0,S,P),g(R,v+2,y,P),g(I,v+4,E,P)}}function g(S,y,E,A){A<0&&S.x===1&&(a[y]=S.x-1),E.x===0&&E.z===0&&(a[y]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.vertices,e.indices,e.radius,e.details)}}class Da extends tl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Da(e.radius,e.detail)}}class Er extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],x=[],g=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let y=0;y<l;y++){const E=y*u-r;x.push(E,-S,0),g.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const y=S+l*p,E=S+l*(p+1),A=S+1+l*(p+1),T=S+1+l*p;f.push(y,E,T),f.push(E,A,T)}this.setIndex(f),this.setAttribute("position",new zt(x,3)),this.setAttribute("normal",new zt(g,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.widthSegments,e.heightSegments)}}class nl extends Ot{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new N,x=new ze;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const S=p+m,y=S,E=S+n+1,A=S+n+2,T=S+1;o.push(y,E,T),o.push(E,A,T)}}this.setIndex(o),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Tr extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $n extends Tr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class lp extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hp extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Qr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function up(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function dp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ih(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function wu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class wr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fp extends wr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xs,endingEnd:xs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case gs:r=e,o=2*t-n;break;case ba:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gs:a=e,c=2*n-t;break;case ba:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-t)/(i-t),g=x*x,m=g*x,p=-d*m+2*d*g-d*x,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*x+1,y=(-1-f)*m+(1.5+f)*g+.5*x,E=f*m-f*g;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+S*a[l+A]+y*a[c+A]+E*a[u+A];return r}}class Au extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class pp extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){We("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&up(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){const g=t[u+x];if(g!==t[d+x]||g!==t[f+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=pr;class ks extends On{constructor(e,t,n){super(e,t,n)}}ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=fr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Ru extends On{constructor(e,t,n,i){super(e,t,n,i)}}Ru.prototype.ValueTypeName="color";class Ps extends On{constructor(e,t,n,i){super(e,t,n,i)}}Ps.prototype.ValueTypeName="number";class mp extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Un.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Ls extends On{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new mp(this.times,this.values,this.getValueSize(),e)}}Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends On{constructor(e,t,n){super(e,t,n)}}zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=fr;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends On{constructor(e,t,n,i){super(e,t,n,i)}}Ds.prototype.ValueTypeName="vector";class bc{constructor(e="",t=-1,n=[],i=qc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gp(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=dp(c);c=ih(c,1,h),l=ih(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ps(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(ye("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return We("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,x,g){if(f.length!==0){const m=[],p=[];wu(f,m,p,x),m.length!==0&&g.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let g=0;g<d[x].morphTargets.length;g++)f[d[x].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let S=0;S!==d[x].morphTargets.length;++S){const y=d[x];m.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new Ps(".morphTargetInfluence["+g+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(Ds,f+".position",d,"pos",i),n(Ls,f+".quaternion",d,"rot",i),n(Ds,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function xp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Ds;case"color":return Ru;case"quaternion":return Ls;case"bool":case"boolean":return ks;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function gp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xp(s.type);if(s.times===void 0){const t=[],n=[];wu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const oi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _p{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],x=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const vp=new _p;class Vs{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class bp extends Error{constructor(e,t){super(e),this.response=t}}class Cu extends Vs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=oi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:i});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ni[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,x=f!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:y,value:E})=>{if(y)p.close();else{g+=E.byteLength;const A=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:f});for(let T=0,R=h.length;T<R;T++){const I=h[T];I.onProgress&&I.onProgress(A)}p.enqueue(E),S()}},y=>{p.error(y)})}}});return new Response(m)}else throw new bp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(x=>f.decode(x))}}}).then(l=>{oi.add(`file:${e}`,l);const h=ni[e];delete ni[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ni[e];if(h===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ps=new WeakMap;class Mp extends Vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=oi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ps.get(a);u===void 0&&(u=[],ps.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=mr("img");function c(){h(),t&&t(this);const u=ps.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ps.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),oi.remove(`image:${e}`);const d=ps.get(this)||[];for(let f=0;f<d.length;f++){const x=d[f];x.onError&&x.onError(u)}ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),oi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class yp extends Vs{constructor(e){super(e)}load(e,t,n,i){const r=new kt,a=new Mp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Na extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Sp extends Na{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _o=new Ve,sh=new N,rh=new N;class il{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(sh),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ep extends il{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Cs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tp extends Na{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ep}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ah=new Ve,Zs=new N,vo=new N;class wp extends il{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zs),vo.copy(n.position),vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vo),n.updateMatrixWorld(),i.makeTranslation(-Zs.x,-Zs.y,-Zs.z),ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah,n.coordinateSystem,n.reversedDepth)}}class Iu extends Na{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ua extends bu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ap extends il{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pu extends Na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Ap}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ar{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const bo=new WeakMap;class Rp extends Vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=oi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(bo.has(a)===!0)i&&i(bo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return oi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),bo.set(c,l),oi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});oi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Cp extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ip{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Un.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Un.multiplyQuaternionsFlat(e,a,e,t,e,n),Un.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const sl="\\[\\]\\.:\\/",Pp=new RegExp("["+sl+"]","g"),rl="[^"+sl+"]",Lp="[^"+sl.replace("\\.","")+"]",Dp=/((?:WC+[\/:])*)/.source.replace("WC",rl),Np=/(WCOD+)?/.source.replace("WCOD",Lp),Up=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rl),Fp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rl),Op=new RegExp("^"+Dp+Np+Up+Fp+"$"),Bp=["material","materials","bones","map"];class kp{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pp,"")}static parseTrackName(e){const t=Op.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Bp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=kp;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:xs,endingEnd:xs};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=hu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Kd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case qc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Yd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===lu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=gs,i.endingEnd=gs):(e?i.endingStart=this.zeroSlopeAtStart?gs:xs:i.endingStart=ba,t?i.endingEnd=this.zeroSlopeAtEnd?gs:xs:i.endingEnd=ba)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const Vp=new Float32Array(1);class Gp extends $i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let x=h[f];if(x!==void 0)++x.referenceCount,a[u]=x;else{if(x=a[u],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,c,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;x=new Ip(nt.create(n,f,g),d.ValueTypeName,d.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,c,f),a[u]=x}o[u].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Au(new Float32Array(2),new Float32Array(2),1,Vp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?bc.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=qc),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new zp(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?bc.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const oh=new Ve;class Hp{constructor(e,t,n=0,i=1/0){this.ray=new Sr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return oh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oh),this}intersectObject(e,t=!0,n=[]){return Mc(e,this,n,t),n.sort(ch),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Mc(e[i],this,n,t);return n.sort(ch),n}}function ch(s,e){return s.distance-e.distance}function Mc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Mc(r[a],e,t,!0)}}function lh(s,e,t,n){const i=Wp(n);switch(t){case ou:return s*e;case Vc:return s*e/i.components*i.byteLength;case Gc:return s*e/i.components*i.byteLength;case Hc:return s*e*2/i.components*i.byteLength;case Wc:return s*e*2/i.components*i.byteLength;case cu:return s*e*3/i.components*i.byteLength;case yn:return s*e*4/i.components*i.byteLength;case Xc:return s*e*4/i.components*i.byteLength;case ca:case la:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ha:case ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Xo:return Math.max(s,16)*Math.max(e,8)/4;case Go:case Wo:return Math.max(s,8)*Math.max(e,8)/2;case qo:case Yo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case lc:case hc:case uc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pc:case mc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wp(s){switch(s){case qn:case iu:return{byteLength:1,components:1};case lr:case su:case Bs:return{byteLength:2,components:1};case kc:case zc:return{byteLength:2,components:4};case Yi:case Bc:case Ln:return{byteLength:4,components:1};case ru:case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);function Lu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xp(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){const x=u[d],g=u[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){const g=u[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
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
#endif`,Wm=`uniform sampler2D dfgLUT;
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
}`,Xm=`
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
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
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,ex=`#define DISTANCE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,lx=`#define MATCAP
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
}`,hx=`#define MATCAP
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
}`,ux=`#define NORMAL
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
}`,dx=`#define NORMAL
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
}`,fx=`#define PHONG
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
}`,px=`#define PHONG
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
}`,mx=`#define STANDARD
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
}`,xx=`#define STANDARD
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
}`,gx=`#define TOON
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
}`,_x=`#define TOON
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
}`,vx=`uniform float size;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,yx=`uniform vec3 color;
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
}`,Sx=`uniform float rotation;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:Kp,alphamap_pars_fragment:jp,alphatest_fragment:$p,alphatest_pars_fragment:Zp,aomap_fragment:Jp,aomap_pars_fragment:Qp,batching_pars_vertex:em,batching_vertex:tm,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:lm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:dm,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:gm,displacementmap_pars_vertex:_m,displacementmap_vertex:vm,emissivemap_fragment:bm,emissivemap_pars_fragment:Mm,colorspace_fragment:ym,colorspace_pars_fragment:Sm,envmap_fragment:Em,envmap_common_pars_fragment:Tm,envmap_pars_fragment:wm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Bm,envmap_vertex:Rm,fog_vertex:Cm,fog_pars_vertex:Im,fog_fragment:Pm,fog_pars_fragment:Lm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Nm,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Fm,lights_pars_begin:Om,lights_toon_fragment:km,lights_toon_pars_fragment:zm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Xm,lights_fragment_maps:qm,lights_fragment_end:Ym,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:Qm,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:a0,morphtarget_pars_vertex:o0,morphtarget_vertex:c0,normal_fragment_begin:l0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:_0,opaque_fragment:v0,packing:b0,premultiplied_alpha_fragment:M0,project_vertex:y0,dithering_fragment:S0,dithering_pars_fragment:E0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:I0,skinbase_vertex:P0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:N0,specularmap_fragment:U0,specularmap_pars_fragment:F0,tonemapping_fragment:O0,tonemapping_pars_fragment:B0,transmission_fragment:k0,transmission_pars_fragment:z0,uv_pars_fragment:V0,uv_pars_vertex:G0,uv_vertex:H0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:K0,cube_vert:j0,cube_frag:$0,depth_vert:Z0,depth_frag:J0,distanceRGBA_vert:Q0,distanceRGBA_frag:ex,equirect_vert:tx,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:sx,meshbasic_vert:rx,meshbasic_frag:ax,meshlambert_vert:ox,meshlambert_frag:cx,meshmatcap_vert:lx,meshmatcap_frag:hx,meshnormal_vert:ux,meshnormal_frag:dx,meshphong_vert:fx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:xx,meshtoon_vert:gx,meshtoon_frag:_x,points_vert:vx,points_frag:bx,shadow_vert:Mx,shadow_frag:yx,sprite_vert:Sx,sprite_frag:Ex},ce={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Vn={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Vn.physical={uniforms:Kt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ea={r:0,b:0,g:0},Oi=new Yn,Tx=new Ve;function wx(s,e,t,n,i,r,a){const o=new Fe(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function x(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?t:e).get(E)),E}function g(y){let E=!1;const A=x(y);A===null?p(o,c):A&&A.isColor&&(p(A,1),E=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,E){const A=x(E);A&&(A.isCubeTexture||A.mapping===Pa)?(h===void 0&&(h=new Rt(new Zi(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Is(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Oi.copy(E.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(Oi)),h.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ct,(u!==A||d!==A.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Rt(new Er(2,2),new di({name:"BackgroundMaterial",uniforms:Is(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,E){y.getRGB(ea,vu(s)),n.buffers.color.setClear(ea.r,ea.g,ea.b,E,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),c=E,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:g,addToRenderList:m,dispose:S}}function Ax(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,P,O,z,q){let X=!1;const j=u(z,O,P);r!==j&&(r=j,l(r.object)),X=f(v,z,O,q),X&&x(v,z,O,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(v,P,O,z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,P,O){const z=O.wireframe===!0;let q=n[v.id];q===void 0&&(q={},n[v.id]=q);let X=q[P.id];X===void 0&&(X={},q[P.id]=X);let j=X[z];return j===void 0&&(j=d(c()),X[z]=j),j}function d(v){const P=[],O=[],z=[];for(let q=0;q<t;q++)P[q]=0,O[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:z,object:v,attributes:{},index:null}}function f(v,P,O,z){const q=r.attributes,X=P.attributes;let j=0;const ee=O.getAttributes();for(const W in ee)if(ee[W].location>=0){const oe=q[W];let we=X[W];if(we===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(we=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(we=v.instanceColor)),oe===void 0||oe.attribute!==we||we&&oe.data!==we.data)return!0;j++}return r.attributesNum!==j||r.index!==z}function x(v,P,O,z){const q={},X=P.attributes;let j=0;const ee=O.getAttributes();for(const W in ee)if(ee[W].location>=0){let oe=X[W];oe===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor));const we={};we.attribute=oe,oe&&oe.data&&(we.data=oe.data),q[W]=we,j++}r.attributes=q,r.attributesNum=j,r.index=z}function g(){const v=r.newAttributes;for(let P=0,O=v.length;P<O;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const O=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;O[v]=1,z[v]===0&&(s.enableVertexAttribArray(v),z[v]=1),q[v]!==P&&(s.vertexAttribDivisor(v,P),q[v]=P)}function S(){const v=r.newAttributes,P=r.enabledAttributes;for(let O=0,z=P.length;O<z;O++)P[O]!==v[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function y(v,P,O,z,q,X,j){j===!0?s.vertexAttribIPointer(v,P,O,q,X):s.vertexAttribPointer(v,P,O,z,q,X)}function E(v,P,O,z){g();const q=z.attributes,X=O.getAttributes(),j=P.defaultAttributeValues;for(const ee in X){const W=X[ee];if(W.location>=0){let se=q[ee];if(se===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const oe=se.normalized,we=se.itemSize,Je=e.get(se);if(Je===void 0)continue;const rt=Je.buffer,dt=Je.type,ft=Je.bytesPerElement,K=dt===s.INT||dt===s.UNSIGNED_INT||se.gpuType===Bc;if(se.isInterleavedBufferAttribute){const J=se.data,xe=J.stride,Be=se.offset;if(J.isInstancedInterleavedBuffer){for(let Se=0;Se<W.locationSize;Se++)p(W.location+Se,J.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Se=0;Se<W.locationSize;Se++)y(W.location+Se,we/W.locationSize,dt,oe,xe*ft,(Be+we/W.locationSize*Se)*ft,K)}else{if(se.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,se.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let J=0;J<W.locationSize;J++)y(W.location+J,we/W.locationSize,dt,oe,we*ft,we/W.locationSize*J*ft,K)}}else if(j!==void 0){const oe=j[ee];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(W.location,oe);break;case 3:s.vertexAttrib3fv(W.location,oe);break;case 4:s.vertexAttrib4fv(W.location,oe);break;default:s.vertexAttrib1fv(W.location,oe)}}}}S()}function A(){I();for(const v in n){const P=n[v];for(const O in P){const z=P[O];for(const q in z)h(z[q].object),delete z[q];delete P[O]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const O in P){const z=P[O];for(const q in z)h(z[q].object),delete z[q];delete P[O]}delete n[v.id]}function R(v){for(const P in n){const O=n[P];if(O[v.id]===void 0)continue;const z=O[v.id];for(const q in z)h(z[q].object),delete z[q];delete O[v.id]}}function I(){b(),a=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function Rx(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)a(l[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*d[g];t.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==yn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ln&&!I)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(ye("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:A,maxSamples:T}}function Ix(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new zi,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||x===null||x.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,y=S*4;let E=p.clippingState||null;c.value=E,E=h(x,d,y,f);for(let A=0;A!==y;++A)E[A]=t[A];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,x){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,x!==!0||m===null){const p=f+g*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,E=f;y!==g;++y,E+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Px(s){let e=new WeakMap;function t(a,o){return o===zo?a.mapping=ws:o===Vo&&(a.mapping=As),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===zo||o===Vo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Kf(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Si=4,hh=[.125,.215,.35,.446,.526,.582],Hi=20,Lx=256,Js=new Ua,uh=new Fe;let Mo=null,yo=0,So=0,Eo=!1;const Dx=new N;class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Dx}=r;Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,yo,So),this._renderer.xr.enabled=Eo,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Bs,format:yn,colorSpace:Qt,depthBuffer:!1},i=fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nx(r)),this._blurMaterial=Fx(r,e,t),this._ggxMaterial=Ux(r,e,t)}return i}_compileMaterial(e){const t=new Rt(new Ot,e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,n,i,r){const c=new nn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(uh),u.toneMapping=wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new Zi,new At({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(uh),p=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):E===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const A=this._cubeSize;ms(i,E*A,y>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(g,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ws||e.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ms(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=.05+l*.95,f=u*d,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-Si?n-x+Si:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=x-t,ms(r,m,p,3*g,2*g),i.setRenderTarget(r),i.render(o,Js),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,ms(e,m,p,3*g,2*g),i.setRenderTarget(e),i.render(o,Js)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):Hi;m>Hi&&ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const p=[];let S=0;for(let R=0;R<Hi;++R){const I=R/g,b=Math.exp(-I*I/2);p.push(b),R===0?S+=b:R<m&&(S+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=x,d.mipInt.value=y-n;const E=this._sizeLods[i],A=3*E*(i>y-Si?i-y+Si:0),T=4*(this._cubeSize-E);ms(t,A,T,3*E,2*E),c.setRenderTarget(t),c.render(u,Js)}}function Nx(s){const e=[],t=[],n=[];let i=s;const r=s-Si+1+hh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Si?c=hh[a-s+Si-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,g=3,m=2,p=1,S=new Float32Array(g*x*f),y=new Float32Array(m*x*f),E=new Float32Array(p*x*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,I=T>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];S.set(b,g*x*T),y.set(d,m*x*T);const v=[T,T,T,T,T,T];E.set(v,p*x*T)}const A=new Ot;A.setAttribute("position",new Zt(S,g)),A.setAttribute("uv",new Zt(y,m)),A.setAttribute("faceIndex",new Zt(E,p)),n.push(new Rt(A,null)),i>Si&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function fh(s,e,t){const n=new Ki(s,e,t);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ux(s,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Fx(s,e,t){const n=new Float32Array(Hi),i=new N(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ph(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function mh(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Fa(){return`

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
	`}function Ox(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===zo||c===Vo,h=c===ws||c===As;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new dh(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new dh(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Bx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&xr("WebGLRenderer: "+n+" extension not supported."),i}}}function kx(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,x=u.attributes.position;let g=0;if(f!==null){const S=f.array;g=f.version;for(let y=0,E=S.length;y<E;y+=3){const A=S[y+0],T=S[y+1],R=S[y+2];d.push(A,T,T,R,R,A)}}else if(x!==void 0){const S=x.array;g=x.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const A=y+0,T=y+1,R=y+2;d.push(A,T,T,R,R,A)}}else return;const m=new(pu(d)?_u:gu)(d,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function zx(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,x){x!==0&&(s.drawElementsInstanced(n,f,r,d*a,x),t.update(f,n,x))}function h(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];t.update(m,n,1)}function u(d,f,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,x);let p=0;for(let S=0;S<x;S++)p+=f[S]*g[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gx(s,e,t){const n=new WeakMap,i=new tt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let A=o.attributes.position.count*E,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*T*4*u),I=new mu(R,A,T,u);I.type=Ln,I.needsUpdate=!0;const b=E*4;for(let P=0;P<u;P++){const O=p[P],z=S[P],q=y[P],X=A*T*4*P;for(let j=0;j<O.count;j++){const ee=j*b;x===!0&&(i.fromBufferAttribute(O,j),R[X+ee+0]=i.x,R[X+ee+1]=i.y,R[X+ee+2]=i.z,R[X+ee+3]=0),g===!0&&(i.fromBufferAttribute(z,j),R[X+ee+4]=i.x,R[X+ee+5]=i.y,R[X+ee+6]=i.z,R[X+ee+7]=0),m===!0&&(i.fromBufferAttribute(q,j),R[X+ee+8]=i.x,R[X+ee+9]=i.y,R[X+ee+10]=i.z,R[X+ee+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new ze(A,T)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const g=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Hx(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Du=new kt,xh=new Eu(1,1),Nu=new mu,Uu=new Pf,Fu=new Mu,gh=[],_h=[],vh=new Float32Array(16),bh=new Float32Array(9),Mh=new Float32Array(4);function Gs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=gh[i];if(r===void 0&&(r=new Float32Array(i),gh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Lt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Oa(s,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function Yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function Kx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Mh.set(n),s.uniformMatrix2fv(this.addr,!1,Mh),Dt(t,n)}}function jx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;bh.set(n),s.uniformMatrix3fv(this.addr,!1,bh),Dt(t,n)}}function $x(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;vh.set(n),s.uniformMatrix4fv(this.addr,!1,vh),Dt(t,n)}}function Zx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function Qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function tg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function rg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xh.compareFunction=fu,r=xh):r=Du,t.setTexture2D(e||r,i)}function ag(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Uu,i)}function og(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fu,i)}function cg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nu,i)}function lg(s){switch(s){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return Kx;case 35675:return jx;case 35676:return $x;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return cg}}function hg(s,e){s.uniform1fv(this.addr,e)}function ug(s,e){const t=Gs(e,this.size,2);s.uniform2fv(this.addr,t)}function dg(s,e){const t=Gs(e,this.size,3);s.uniform3fv(this.addr,t)}function fg(s,e){const t=Gs(e,this.size,4);s.uniform4fv(this.addr,t)}function pg(s,e){const t=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mg(s,e){const t=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xg(s,e){const t=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gg(s,e){s.uniform1iv(this.addr,e)}function _g(s,e){s.uniform2iv(this.addr,e)}function vg(s,e){s.uniform3iv(this.addr,e)}function bg(s,e){s.uniform4iv(this.addr,e)}function Mg(s,e){s.uniform1uiv(this.addr,e)}function yg(s,e){s.uniform2uiv(this.addr,e)}function Sg(s,e){s.uniform3uiv(this.addr,e)}function Eg(s,e){s.uniform4uiv(this.addr,e)}function Tg(s,e,t){const n=this.cache,i=e.length,r=Oa(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Du,r[a])}function wg(s,e,t){const n=this.cache,i=e.length,r=Oa(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Uu,r[a])}function Ag(s,e,t){const n=this.cache,i=e.length,r=Oa(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Fu,r[a])}function Rg(s,e,t){const n=this.cache,i=e.length,r=Oa(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Nu,r[a])}function Cg(s){switch(s){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return xg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return bg;case 5125:return Mg;case 36294:return yg;case 36295:return Sg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}class Ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lg(t.type)}}class Pg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cg(t.type)}}class Lg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const To=/(\w+)(\])?(\[|\.)?/g;function yh(s,e){s.seq.push(e),s.map[e.id]=e}function Dg(s,e,t){const n=s.name,i=n.length;for(To.lastIndex=0;;){const r=To.exec(n),a=To.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){yh(t,l===void 0?new Ig(o,s,e):new Pg(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Lg(o),yh(t,u)),t=u}}}class da{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Dg(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Sh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ng=37297;let Ug=0;function Fg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Eh=new ke;function Og(s){Qe._getMatrix(Eh,Qe.workingColorSpace,s);const e=`mat3( ${Eh.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case Ma:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Th(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Fg(s.getShaderSource(e),o)}else return r}function Bg(s,e){const t=Og(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kg(s,e){let t;switch(e){case zd:t="Linear";break;case Vd:t="Reinhard";break;case Gd:t="Cineon";break;case eu:t="ACESFilmic";break;case Wd:t="AgX";break;case Xd:t="Neutral";break;case Hd:t="Custom";break;default:ye("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new N;function zg(){Qe.getLuminanceCoefficients(ta);const s=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function Gg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function tr(s){return s!==""}function wh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ah(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(s){return s.replace(Wg,qg)}const Xg=new Map;function qg(s,e){let t=Ge[e];if(t===void 0){const n=Xg.get(e);if(n!==void 0)t=Ge[n],ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(s){return s.replace(Yg,Kg)}function Kg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ch(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function jg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function $g(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case As:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zg(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===As&&(e="ENVMAP_MODE_REFRACTION"),e}function Jg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case Bd:e="ENVMAP_BLENDING_MIX";break;case kd:e="ENVMAP_BLENDING_ADD";break}return e}function Qg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function e_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=jg(t),l=$g(t),h=Zg(t),u=Jg(t),d=Qg(t),f=Vg(t),x=Gg(r),g=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==wi?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Bg("linearToOutputTexel",t.outputColorSpace),zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=yc(a),a=wh(a,t),a=Ah(a,t),o=yc(o),o=wh(o,t),o=Ah(o,t),a=Rh(a),o=Rh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+a,E=S+p+o,A=Sh(i,i.VERTEX_SHADER,y),T=Sh(i,i.FRAGMENT_SHADER,E);i.attachShader(g,A),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function R(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(g)||"",z=i.getShaderInfoLog(A)||"",q=i.getShaderInfoLog(T)||"",X=O.trim(),j=z.trim(),ee=q.trim();let W=!0,se=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,T);else{const oe=Th(i,A,"vertex"),we=Th(i,T,"fragment");We("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+oe+`
`+we)}else X!==""?ye("WebGLProgram: Program Info Log:",X):(j===""||ee==="")&&(se=!1);se&&(P.diagnostics={runnable:W,programLog:X,vertexShader:{log:j,prefix:m},fragmentShader:{log:ee,prefix:p}})}i.deleteShader(A),i.deleteShader(T),I=new da(i,g),b=Hg(i,g)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,Ng)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ug++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=T,this}let t_=0;class n_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i_(e),t.set(e,n)),n}}class i_{constructor(e){this.id=t_++,this.code=e,this.usedTimes=0}}function s_(s,e,t,n,i,r,a){const o=new jc,c=new n_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,v,P,O,z){const q=O.fog,X=z.geometry,j=b.isMeshStandardMaterial?O.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),W=ee&&ee.mapping===Pa?ee.image.height:null,se=x[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&ye("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,we=oe!==void 0?oe.length:0;let Je=0;X.morphAttributes.position!==void 0&&(Je=1),X.morphAttributes.normal!==void 0&&(Je=2),X.morphAttributes.color!==void 0&&(Je=3);let rt,dt,ft,K;if(se){const at=Vn[se];rt=at.vertexShader,dt=at.fragmentShader}else rt=b.vertexShader,dt=b.fragmentShader,c.update(b),ft=c.getVertexShaderID(b),K=c.getFragmentShaderID(b);const J=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,Se=z.isBatchedMesh===!0,Ke=!!b.map,Gt=!!b.matcap,Xe=!!ee,gt=!!b.aoMap,C=!!b.lightMap,je=!!b.bumpMap,$e=!!b.normalMap,pt=!!b.displacementMap,ve=!!b.emissiveMap,bt=!!b.metalnessMap,Te=!!b.roughnessMap,Oe=b.anisotropy>0,w=b.clearcoat>0,_=b.dispersion>0,B=b.iridescence>0,Y=b.sheen>0,Z=b.transmission>0,G=Oe&&!!b.anisotropyMap,Me=w&&!!b.clearcoatMap,le=w&&!!b.clearcoatNormalMap,Ae=w&&!!b.clearcoatRoughnessMap,be=B&&!!b.iridescenceMap,Q=B&&!!b.iridescenceThicknessMap,ie=Y&&!!b.sheenColorMap,Pe=Y&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,fe=!!b.specularColorMap,De=!!b.specularIntensityMap,L=Z&&!!b.transmissionMap,he=Z&&!!b.thicknessMap,re=!!b.gradientMap,ae=!!b.alphaMap,te=b.alphaTest>0,$=!!b.alphaHash,ge=!!b.extensions;let Ue=wi;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const mt={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:rt,fragmentShader:dt,defines:b.defines,customVertexShaderID:ft,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Se,batchingColor:Se&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Qt,alphaToCoverage:!!b.alphaToCoverage,map:Ke,matcap:Gt,envMap:Xe,envMapMode:Xe&&ee.mapping,envMapCubeUVHeight:W,aoMap:gt,lightMap:C,bumpMap:je,normalMap:$e,displacementMap:d&&pt,emissiveMap:ve,normalMapObjectSpace:$e&&b.normalMapType===Jd,normalMapTangentSpace:$e&&b.normalMapType===du,metalnessMap:bt,roughnessMap:Te,anisotropy:Oe,anisotropyMap:G,clearcoat:w,clearcoatMap:Me,clearcoatNormalMap:le,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:B,iridescenceMap:be,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:ie,sheenRoughnessMap:Pe,specularMap:Ce,specularColorMap:fe,specularIntensityMap:De,transmission:Z,transmissionMap:L,thicknessMap:he,gradientMap:re,opaque:b.transparent===!1&&b.blending===bs&&b.alphaToCoverage===!1,alphaMap:ae,alphaTest:te,alphaHash:$,combine:b.combine,mapUv:Ke&&g(b.map.channel),aoMapUv:gt&&g(b.aoMap.channel),lightMapUv:C&&g(b.lightMap.channel),bumpMapUv:je&&g(b.bumpMap.channel),normalMapUv:$e&&g(b.normalMap.channel),displacementMapUv:pt&&g(b.displacementMap.channel),emissiveMapUv:ve&&g(b.emissiveMap.channel),metalnessMapUv:bt&&g(b.metalnessMap.channel),roughnessMapUv:Te&&g(b.roughnessMap.channel),anisotropyMapUv:G&&g(b.anisotropyMap.channel),clearcoatMapUv:Me&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(b.sheenRoughnessMap.channel),specularMapUv:Ce&&g(b.specularMap.channel),specularColorMapUv:fe&&g(b.specularColorMap.channel),specularIntensityMapUv:De&&g(b.specularIntensityMap.channel),transmissionMapUv:L&&g(b.transmissionMap.channel),thicknessMapUv:he&&g(b.thicknessMap.channel),alphaMapUv:ae&&g(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&($e||Oe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Ke||ae),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Je,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ke&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:ve&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Cn,flipSided:b.side===rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ge&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&b.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function p(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)v.push(P),v.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(S(v,b),y(v,b),v.push(s.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function S(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function y(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function E(b){const v=x[b.type];let P;if(v){const O=Vn[v];P=Wf.clone(O.uniforms)}else P=b.uniforms;return P}function A(b,v){let P;for(let O=0,z=h.length;O<z;O++){const q=h[O];if(q.cacheKey===v){P=q,++P.usedTimes;break}}return P===void 0&&(P=new e_(s,v,b,r),h.push(P)),P}function T(b){if(--b.usedTimes===0){const v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function R(b){c.remove(b)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:I}}function r_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function a_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ih(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ph(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,x,g,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,d,f,x,g,m){const p=a(u,d,f,x,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,x,g,m){const p=a(u,d,f,x,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||a_),n.length>1&&n.sort(d||Ih),i.length>1&&i.sort(d||Ih)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function o_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ph,s.set(n,[a])):i>=r.length?(a=new Ph,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function c_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Fe};break;case"SpotLight":t={position:new N,direction:new N,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function l_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let h_=0;function u_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function d_(s){const e=new c_,t=l_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,r=new Ve,a=new Ve;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,S=0,y=0,E=0,A=0,T=0,R=0;l.sort(u_);for(let b=0,v=l.length;b<v;b++){const P=l[b],O=P.color,z=P.intensity,q=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],z);R++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,W=t.get(P);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=j,f++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(O).multiplyScalar(z),j.distance=q,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[g]=j;const ee=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,ee.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[g]=ee.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=X,E++}g++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(O).multiplyScalar(z),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=j,m++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const ee=P.shadow,W=t.get(P);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=X,n.pointShadowMatrix[x]=P.shadow.matrix,y++}n.point[x]=j,x++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(z),j.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=j,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==x||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==E||I.numSpotMaps!==A||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.directionalLength=f,I.pointLength=x,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=E,I.numSpotMaps=A,I.numLightProbes=R,n.version=h_++)}function c(l,h){let u=0,d=0,f=0,x=0,g=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const y=l[p];if(y.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),u++}else if(y.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const E=n.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Lh(s){const e=new d_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function f_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Lh(s),e.set(i,[o])):r>=a.length?(o=new Lh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`;function x_(s,e,t){let n=new Qc;const i=new ze,r=new ze,a=new tt,o=new lp({depthPacking:Zd}),c=new hp,l={},h=t.maxTextureSize,u={[ui]:rn,[rn]:ui,[Cn]:Cn},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new Ot;x.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Rt(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let p=this.type;this.render=function(T,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=s.getRenderTarget(),v=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ci),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=p!==ri&&this.type===ri,q=p===ri&&this.type!==ri;for(let X=0,j=T.length;X<j;X++){const ee=T[X],W=ee.shadow;if(W===void 0){ye("WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const se=W.getFrameExtents();if(i.multiply(se),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/se.x),i.x=r.x*se.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/se.y),i.y=r.y*se.y,W.mapSize.y=r.y)),W.map===null||z===!0||q===!0){const we=this.type!==ri?{minFilter:$t,magFilter:$t}:{};W.map!==null&&W.map.dispose(),W.map=new Ki(i.x,i.y,we),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const oe=W.getViewportCount();for(let we=0;we<oe;we++){const Je=W.getViewport(we);a.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),O.viewport(a),W.updateMatrices(ee,we),n=W.getFrustum(),E(R,I,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===ri&&S(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,v,P)};function S(T,R){const I=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ki(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,I,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,I,f,g,null)}function y(T,R,I,b){let v=null;const P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)v=P;else if(v=I.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=v.uuid,z=R.uuid;let q=l[O];q===void 0&&(q={},l[O]=q);let X=q[z];X===void 0&&(X=v.clone(),q[z]=X,R.addEventListener("dispose",A)),v=X}if(v.visible=R.visible,v.wireframe=R.wireframe,b===ri?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=s.properties.get(v);O.light=I}return v}function E(T,R,I,b,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const z=e.update(T),q=T.material;if(Array.isArray(q)){const X=z.groups;for(let j=0,ee=X.length;j<ee;j++){const W=X[j],se=q[W.materialIndex];if(se&&se.visible){const oe=y(T,se,b,v);T.onBeforeShadow(s,T,R,I,z,oe,W),s.renderBufferDirect(I,null,z,oe,T,W),T.onAfterShadow(s,T,R,I,z,oe,W)}}}else if(q.visible){const X=y(T,q,b,v);T.onBeforeShadow(s,T,R,I,z,X,null),s.renderBufferDirect(I,null,z,X,T,null),T.onAfterShadow(s,T,R,I,z,X,null)}}const O=T.children;for(let z=0,q=O.length;z<q;z++)E(O[z],R,I,b,v)}function A(T){T.target.removeEventListener("dispose",A);for(const I in l){const b=l[I],v=T.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const g_={[Do]:No,[Uo]:Bo,[Fo]:ko,[Ts]:Oo,[No]:Do,[Bo]:Uo,[ko]:Fo,[Oo]:Ts};function __(s,e){function t(){let L=!1;const he=new tt;let re=null;const ae=new tt(0,0,0,0);return{setMask:function(te){re!==te&&!L&&(s.colorMask(te,te,te,te),re=te)},setLocked:function(te){L=te},setClear:function(te,$,ge,Ue,mt){mt===!0&&(te*=Ue,$*=Ue,ge*=Ue),he.set(te,$,ge,Ue),ae.equals(he)===!1&&(s.clearColor(te,$,ge,Ue),ae.copy(he))},reset:function(){L=!1,re=null,ae.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,re=null,ae=null,te=null;return{setReversed:function($){if(he!==$){const ge=e.get("EXT_clip_control");$?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),he=$;const Ue=te;te=null,this.setClear(Ue)}},getReversed:function(){return he},setTest:function($){$?J(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function($){re!==$&&!L&&(s.depthMask($),re=$)},setFunc:function($){if(he&&($=g_[$]),ae!==$){switch($){case Do:s.depthFunc(s.NEVER);break;case No:s.depthFunc(s.ALWAYS);break;case Uo:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Fo:s.depthFunc(s.EQUAL);break;case Oo:s.depthFunc(s.GEQUAL);break;case Bo:s.depthFunc(s.GREATER);break;case ko:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=$}},setLocked:function($){L=$},setClear:function($){te!==$&&(he&&($=1-$),s.clearDepth($),te=$)},reset:function(){L=!1,re=null,ae=null,te=null,he=!1}}}function i(){let L=!1,he=null,re=null,ae=null,te=null,$=null,ge=null,Ue=null,mt=null;return{setTest:function(at){L||(at?J(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(at){he!==at&&!L&&(s.stencilMask(at),he=at)},setFunc:function(at,Bn,En){(re!==at||ae!==Bn||te!==En)&&(s.stencilFunc(at,Bn,En),re=at,ae=Bn,te=En)},setOp:function(at,Bn,En){($!==at||ge!==Bn||Ue!==En)&&(s.stencilOp(at,Bn,En),$=at,ge=Bn,Ue=En)},setLocked:function(at){L=at},setClear:function(at){mt!==at&&(s.clearStencil(at),mt=at)},reset:function(){L=!1,he=null,re=null,ae=null,te=null,$=null,ge=null,Ue=null,mt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,y=null,E=null,A=null,T=null,R=new Fe(0,0,0),I=0,b=!1,v=null,P=null,O=null,z=null,q=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ee=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=ee>=2);let se=null,oe={};const we=s.getParameter(s.SCISSOR_BOX),Je=s.getParameter(s.VIEWPORT),rt=new tt().fromArray(we),dt=new tt().fromArray(Je);function ft(L,he,re,ae){const te=new Uint8Array(4),$=s.createTexture();s.bindTexture(L,$),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ge=0;ge<re;ge++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,ae,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(he+ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return $}const K={};K[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(s.DEPTH_TEST),a.setFunc(Ts),je(!1),$e(_l),J(s.CULL_FACE),gt(ci);function J(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function xe(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Be(L,he){return u[L]!==he?(s.bindFramebuffer(L,he),u[L]=he,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=he),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=he),!0):!1}function Se(L,he){let re=f,ae=!1;if(L){re=d.get(he),re===void 0&&(re=[],d.set(he,re));const te=L.textures;if(re.length!==te.length||re[0]!==s.COLOR_ATTACHMENT0){for(let $=0,ge=te.length;$<ge;$++)re[$]=s.COLOR_ATTACHMENT0+$;re.length=te.length,ae=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,ae=!0);ae&&s.drawBuffers(re)}function Ke(L){return x!==L?(s.useProgram(L),x=L,!0):!1}const Gt={[Vi]:s.FUNC_ADD,[Md]:s.FUNC_SUBTRACT,[yd]:s.FUNC_REVERSE_SUBTRACT};Gt[Sd]=s.MIN,Gt[Ed]=s.MAX;const Xe={[Td]:s.ZERO,[wd]:s.ONE,[Ad]:s.SRC_COLOR,[Po]:s.SRC_ALPHA,[Dd]:s.SRC_ALPHA_SATURATE,[Pd]:s.DST_COLOR,[Cd]:s.DST_ALPHA,[Rd]:s.ONE_MINUS_SRC_COLOR,[Lo]:s.ONE_MINUS_SRC_ALPHA,[Ld]:s.ONE_MINUS_DST_COLOR,[Id]:s.ONE_MINUS_DST_ALPHA,[Nd]:s.CONSTANT_COLOR,[Ud]:s.ONE_MINUS_CONSTANT_COLOR,[Fd]:s.CONSTANT_ALPHA,[Od]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(L,he,re,ae,te,$,ge,Ue,mt,at){if(L===ci){g===!0&&(xe(s.BLEND),g=!1);return}if(g===!1&&(J(s.BLEND),g=!0),L!==bd){if(L!==m||at!==b){if((p!==Vi||E!==Vi)&&(s.blendEquation(s.FUNC_ADD),p=Vi,E=Vi),at)switch(L){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vl:s.blendFunc(s.ONE,s.ONE);break;case bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ml:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:We("WebGLState: Invalid blending: ",L);break}else switch(L){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bl:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",L);break}S=null,y=null,A=null,T=null,R.set(0,0,0),I=0,m=L,b=at}return}te=te||he,$=$||re,ge=ge||ae,(he!==p||te!==E)&&(s.blendEquationSeparate(Gt[he],Gt[te]),p=he,E=te),(re!==S||ae!==y||$!==A||ge!==T)&&(s.blendFuncSeparate(Xe[re],Xe[ae],Xe[$],Xe[ge]),S=re,y=ae,A=$,T=ge),(Ue.equals(R)===!1||mt!==I)&&(s.blendColor(Ue.r,Ue.g,Ue.b,mt),R.copy(Ue),I=mt),m=L,b=!1}function C(L,he){L.side===Cn?xe(s.CULL_FACE):J(s.CULL_FACE);let re=L.side===rn;he&&(re=!re),je(re),L.blending===bs&&L.transparent===!1?gt(ci):gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ae=L.stencilWrite;o.setTest(ae),ae&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(L){v!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),v=L)}function $e(L){L!==_d?(J(s.CULL_FACE),L!==P&&(L===_l?s.cullFace(s.BACK):L===vd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),P=L}function pt(L){L!==O&&(j&&s.lineWidth(L),O=L)}function ve(L,he,re){L?(J(s.POLYGON_OFFSET_FILL),(z!==he||q!==re)&&(s.polygonOffset(he,re),z=he,q=re)):xe(s.POLYGON_OFFSET_FILL)}function bt(L){L?J(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function Te(L){L===void 0&&(L=s.TEXTURE0+X-1),se!==L&&(s.activeTexture(L),se=L)}function Oe(L,he,re){re===void 0&&(se===null?re=s.TEXTURE0+X-1:re=se);let ae=oe[re];ae===void 0&&(ae={type:void 0,texture:void 0},oe[re]=ae),(ae.type!==L||ae.texture!==he)&&(se!==re&&(s.activeTexture(re),se=re),s.bindTexture(L,he||K[L]),ae.type=L,ae.texture=he)}function w(){const L=oe[se];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Y(){try{s.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Z(){try{s.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function le(){try{s.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ae(){try{s.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function be(){try{s.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Q(){try{s.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ie(L){rt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),rt.copy(L))}function Pe(L){dt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),dt.copy(L))}function Ce(L,he){let re=l.get(he);re===void 0&&(re=new WeakMap,l.set(he,re));let ae=re.get(L);ae===void 0&&(ae=s.getUniformBlockIndex(he,L.name),re.set(L,ae))}function fe(L,he){const ae=l.get(he).get(L);c.get(he)!==ae&&(s.uniformBlockBinding(he,ae,L.__bindingPointIndex),c.set(he,ae))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},se=null,oe={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,y=null,E=null,A=null,T=null,R=new Fe(0,0,0),I=0,b=!1,v=null,P=null,O=null,z=null,q=null,rt.set(0,0,s.canvas.width,s.canvas.height),dt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:xe,bindFramebuffer:Be,drawBuffers:Se,useProgram:Ke,setBlending:gt,setMaterial:C,setFlipSided:je,setCullFace:$e,setLineWidth:pt,setPolygonOffset:ve,setScissorTest:bt,activeTexture:Te,bindTexture:Oe,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:be,texImage3D:Q,updateUBOMapping:Ce,uniformBlockBinding:fe,texStorage2D:le,texStorage3D:Ae,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:Me,scissor:ie,viewport:Pe,reset:De}}function v_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,_){return f?new OffscreenCanvas(w,_):mr("canvas")}function g(w,_,B){let Y=1;const Z=Oe(w);if((Z.width>B||Z.height>B)&&(Y=B/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const G=Math.floor(Y*Z.width),Me=Math.floor(Y*Z.height);u===void 0&&(u=x(G,Me));const le=_?x(G,Me):u;return le.width=G,le.height=Me,le.getContext("2d").drawImage(w,0,0,G,Me),ye("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+Me+")."),le}else return"data"in w&&ye("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(w,_,B,Y,Z=!1){if(w!==null){if(s[w]!==void 0)return s[w];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=_;if(_===s.RED&&(B===s.FLOAT&&(G=s.R32F),B===s.HALF_FLOAT&&(G=s.R16F),B===s.UNSIGNED_BYTE&&(G=s.R8)),_===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(G=s.R8UI),B===s.UNSIGNED_SHORT&&(G=s.R16UI),B===s.UNSIGNED_INT&&(G=s.R32UI),B===s.BYTE&&(G=s.R8I),B===s.SHORT&&(G=s.R16I),B===s.INT&&(G=s.R32I)),_===s.RG&&(B===s.FLOAT&&(G=s.RG32F),B===s.HALF_FLOAT&&(G=s.RG16F),B===s.UNSIGNED_BYTE&&(G=s.RG8)),_===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(G=s.RG8UI),B===s.UNSIGNED_SHORT&&(G=s.RG16UI),B===s.UNSIGNED_INT&&(G=s.RG32UI),B===s.BYTE&&(G=s.RG8I),B===s.SHORT&&(G=s.RG16I),B===s.INT&&(G=s.RG32I)),_===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(G=s.RGB8UI),B===s.UNSIGNED_SHORT&&(G=s.RGB16UI),B===s.UNSIGNED_INT&&(G=s.RGB32UI),B===s.BYTE&&(G=s.RGB8I),B===s.SHORT&&(G=s.RGB16I),B===s.INT&&(G=s.RGB32I)),_===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),B===s.UNSIGNED_INT&&(G=s.RGBA32UI),B===s.BYTE&&(G=s.RGBA8I),B===s.SHORT&&(G=s.RGBA16I),B===s.INT&&(G=s.RGBA32I)),_===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),_===s.RGBA){const Me=Z?Ma:Qe.getTransfer(Y);B===s.FLOAT&&(G=s.RGBA32F),B===s.HALF_FLOAT&&(G=s.RGBA16F),B===s.UNSIGNED_BYTE&&(G=Me===ct?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(w,_){let B;return w?_===null||_===Yi||_===hr?B=s.DEPTH24_STENCIL8:_===Ln?B=s.DEPTH32F_STENCIL8:_===lr&&(B=s.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Yi||_===hr?B=s.DEPTH_COMPONENT24:_===Ln?B=s.DEPTH_COMPONENT32F:_===lr&&(B=s.DEPTH_COMPONENT16),B}function A(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==$t&&w.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function T(w){const _=w.target;_.removeEventListener("dispose",T),I(_),_.isVideoTexture&&h.delete(_)}function R(w){const _=w.target;_.removeEventListener("dispose",R),v(_)}function I(w){const _=n.get(w);if(_.__webglInit===void 0)return;const B=w.source,Y=d.get(B);if(Y){const Z=Y[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(w),Object.keys(Y).length===0&&d.delete(B)}n.remove(w)}function b(w){const _=n.get(w);s.deleteTexture(_.__webglTexture);const B=w.source,Y=d.get(B);delete Y[_.__cacheKey],a.memory.textures--}function v(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Z=0;Z<_.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(_.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[Y]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=w.textures;for(let Y=0,Z=B.length;Y<Z;Y++){const G=n.get(B[Y]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(w)}let P=0;function O(){P=0}function z(){const w=P;return w>=i.maxTextures&&ye("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function q(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function X(w,_){const B=n.get(w);if(w.isVideoTexture&&bt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const Y=w.image;if(Y===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ye("WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,w,_);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+_)}function j(w,_){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){K(B,w,_);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+_)}function ee(w,_){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){K(B,w,_);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+_)}function W(w,_){const B=n.get(w);if(w.version>0&&B.__version!==w.version){J(B,w,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+_)}const se={[Rs]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},oe={[$t]:s.NEAREST,[nu]:s.NEAREST_MIPMAP_NEAREST,[er]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[oa]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},we={[Qd]:s.NEVER,[af]:s.ALWAYS,[ef]:s.LESS,[fu]:s.LEQUAL,[tf]:s.EQUAL,[rf]:s.GEQUAL,[nf]:s.GREATER,[sf]:s.NOTEQUAL};function Je(w,_){if(_.type===Ln&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===jt||_.magFilter===oa||_.magFilter===er||_.magFilter===ai||_.minFilter===jt||_.minFilter===oa||_.minFilter===er||_.minFilter===ai)&&ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,se[_.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,se[_.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,se[_.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,oe[_.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,oe[_.minFilter]),_.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$t||_.minFilter!==er&&_.minFilter!==ai||_.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function rt(w,_){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",T));const Y=_.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const G=q(_);if(G!==w.__cacheKey){Z[G]===void 0&&(Z[G]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[G].usedTimes++;const Me=Z[w.__cacheKey];Me!==void 0&&(Z[w.__cacheKey].usedTimes--,Me.usedTimes===0&&b(_)),w.__cacheKey=G,w.__webglTexture=Z[G].texture}return B}function dt(w,_,B){return Math.floor(Math.floor(w/B)/_)}function ft(w,_,B,Y){const G=w.updateRanges;if(G.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,B,Y,_.data);else{G.sort((Q,ie)=>Q.start-ie.start);let Me=0;for(let Q=1;Q<G.length;Q++){const ie=G[Me],Pe=G[Q],Ce=ie.start+ie.count,fe=dt(Pe.start,_.width,4),De=dt(ie.start,_.width,4);Pe.start<=Ce+1&&fe===De&&dt(Pe.start+Pe.count-1,_.width,4)===fe?ie.count=Math.max(ie.count,Pe.start+Pe.count-ie.start):(++Me,G[Me]=Pe)}G.length=Me+1;const le=s.getParameter(s.UNPACK_ROW_LENGTH),Ae=s.getParameter(s.UNPACK_SKIP_PIXELS),be=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Q=0,ie=G.length;Q<ie;Q++){const Pe=G[Q],Ce=Math.floor(Pe.start/4),fe=Math.ceil(Pe.count/4),De=Ce%_.width,L=Math.floor(Ce/_.width),he=fe,re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,De),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,De,L,he,re,B,Y,_.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,be)}}function K(w,_,B){let Y=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=s.TEXTURE_3D);const Z=rt(w,_),G=_.source;t.bindTexture(Y,w.__webglTexture,s.TEXTURE0+B);const Me=n.get(G);if(G.version!==Me.__version||Z===!0){t.activeTexture(s.TEXTURE0+B);const le=Qe.getPrimaries(Qe.workingColorSpace),Ae=_.colorSpace===yi?null:Qe.getPrimaries(_.colorSpace),be=_.colorSpace===yi||le===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Q=g(_.image,!1,i.maxTextureSize);Q=Te(_,Q);const ie=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type);let Ce=y(_.internalFormat,ie,Pe,_.colorSpace,_.isVideoTexture);Je(Y,_);let fe;const De=_.mipmaps,L=_.isVideoTexture!==!0,he=Me.__version===void 0||Z===!0,re=G.dataReady,ae=A(_,Q);if(_.isDepthTexture)Ce=E(_.format===dr,_.type),he&&(L?t.texStorage2D(s.TEXTURE_2D,1,Ce,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,Ce,Q.width,Q.height,0,ie,Pe,null));else if(_.isDataTexture)if(De.length>0){L&&he&&t.texStorage2D(s.TEXTURE_2D,ae,Ce,De[0].width,De[0].height);for(let te=0,$=De.length;te<$;te++)fe=De[te],L?re&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,fe.width,fe.height,ie,Pe,fe.data):t.texImage2D(s.TEXTURE_2D,te,Ce,fe.width,fe.height,0,ie,Pe,fe.data);_.generateMipmaps=!1}else L?(he&&t.texStorage2D(s.TEXTURE_2D,ae,Ce,Q.width,Q.height),re&&ft(_,Q,ie,Pe)):t.texImage2D(s.TEXTURE_2D,0,Ce,Q.width,Q.height,0,ie,Pe,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ce,De[0].width,De[0].height,Q.depth);for(let te=0,$=De.length;te<$;te++)if(fe=De[te],_.format!==yn)if(ie!==null)if(L){if(re)if(_.layerUpdates.size>0){const ge=lh(fe.width,fe.height,_.format,_.type);for(const Ue of _.layerUpdates){const mt=fe.data.subarray(Ue*ge/fe.data.BYTES_PER_ELEMENT,(Ue+1)*ge/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Ue,fe.width,fe.height,1,ie,mt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,Q.depth,ie,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Ce,fe.width,fe.height,Q.depth,0,fe.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,Q.depth,ie,Pe,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Ce,fe.width,fe.height,Q.depth,0,ie,Pe,fe.data)}else{L&&he&&t.texStorage2D(s.TEXTURE_2D,ae,Ce,De[0].width,De[0].height);for(let te=0,$=De.length;te<$;te++)fe=De[te],_.format!==yn?ie!==null?L?re&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,fe.width,fe.height,ie,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Ce,fe.width,fe.height,0,fe.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?re&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,fe.width,fe.height,ie,Pe,fe.data):t.texImage2D(s.TEXTURE_2D,te,Ce,fe.width,fe.height,0,ie,Pe,fe.data)}else if(_.isDataArrayTexture)if(L){if(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ce,Q.width,Q.height,Q.depth),re)if(_.layerUpdates.size>0){const te=lh(Q.width,Q.height,_.format,_.type);for(const $ of _.layerUpdates){const ge=Q.data.subarray($*te/Q.data.BYTES_PER_ELEMENT,($+1)*te/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ie,Pe,ge)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ie,Pe,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,Q.width,Q.height,Q.depth,0,ie,Pe,Q.data);else if(_.isData3DTexture)L?(he&&t.texStorage3D(s.TEXTURE_3D,ae,Ce,Q.width,Q.height,Q.depth),re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ie,Pe,Q.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,Q.width,Q.height,Q.depth,0,ie,Pe,Q.data);else if(_.isFramebufferTexture){if(he)if(L)t.texStorage2D(s.TEXTURE_2D,ae,Ce,Q.width,Q.height);else{let te=Q.width,$=Q.height;for(let ge=0;ge<ae;ge++)t.texImage2D(s.TEXTURE_2D,ge,Ce,te,$,0,ie,Pe,null),te>>=1,$>>=1}}else if(De.length>0){if(L&&he){const te=Oe(De[0]);t.texStorage2D(s.TEXTURE_2D,ae,Ce,te.width,te.height)}for(let te=0,$=De.length;te<$;te++)fe=De[te],L?re&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ie,Pe,fe):t.texImage2D(s.TEXTURE_2D,te,Ce,ie,Pe,fe);_.generateMipmaps=!1}else if(L){if(he){const te=Oe(Q);t.texStorage2D(s.TEXTURE_2D,ae,Ce,te.width,te.height)}re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,Pe,Q)}else t.texImage2D(s.TEXTURE_2D,0,Ce,ie,Pe,Q);m(_)&&p(Y),Me.__version=G.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function J(w,_,B){if(_.image.length!==6)return;const Y=rt(w,_),Z=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);const G=n.get(Z);if(Z.version!==G.__version||Y===!0){t.activeTexture(s.TEXTURE0+B);const Me=Qe.getPrimaries(Qe.workingColorSpace),le=_.colorSpace===yi?null:Qe.getPrimaries(_.colorSpace),Ae=_.colorSpace===yi||Me===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const be=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ie=[];for(let $=0;$<6;$++)!be&&!Q?ie[$]=g(_.image[$],!0,i.maxCubemapSize):ie[$]=Q?_.image[$].image:_.image[$],ie[$]=Te(_,ie[$]);const Pe=ie[0],Ce=r.convert(_.format,_.colorSpace),fe=r.convert(_.type),De=y(_.internalFormat,Ce,fe,_.colorSpace),L=_.isVideoTexture!==!0,he=G.__version===void 0||Y===!0,re=Z.dataReady;let ae=A(_,Pe);Je(s.TEXTURE_CUBE_MAP,_);let te;if(be){L&&he&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,De,Pe.width,Pe.height);for(let $=0;$<6;$++){te=ie[$].mipmaps;for(let ge=0;ge<te.length;ge++){const Ue=te[ge];_.format!==yn?Ce!==null?L?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,Ue.width,Ue.height,Ce,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,De,Ue.width,Ue.height,0,Ue.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,Ue.width,Ue.height,Ce,fe,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,De,Ue.width,Ue.height,0,Ce,fe,Ue.data)}}}else{if(te=_.mipmaps,L&&he){te.length>0&&ae++;const $=Oe(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,De,$.width,$.height)}for(let $=0;$<6;$++)if(Q){L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ie[$].width,ie[$].height,Ce,fe,ie[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,De,ie[$].width,ie[$].height,0,Ce,fe,ie[$].data);for(let ge=0;ge<te.length;ge++){const mt=te[ge].image[$].image;L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,mt.width,mt.height,Ce,fe,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,De,mt.width,mt.height,0,Ce,fe,mt.data)}}else{L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,fe,ie[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,De,Ce,fe,ie[$]);for(let ge=0;ge<te.length;ge++){const Ue=te[ge];L?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,Ce,fe,Ue.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,De,Ce,fe,Ue.image[$])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),G.__version=Z.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function xe(w,_,B,Y,Z,G){const Me=r.convert(B.format,B.colorSpace),le=r.convert(B.type),Ae=y(B.internalFormat,Me,le,B.colorSpace),be=n.get(_),Q=n.get(B);if(Q.__renderTarget=_,!be.__hasExternalTextures){const ie=Math.max(1,_.width>>G),Pe=Math.max(1,_.height>>G);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,Ae,ie,Pe,_.depth,0,Me,le,null):t.texImage2D(Z,G,Ae,ie,Pe,0,Me,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ve(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,Q.__webglTexture,0,pt(_)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,Q.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(w,_,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),_.depthBuffer){const Y=_.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,G=E(_.stencilBuffer,Z),Me=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=pt(_);ve(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,G,_.width,_.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,G,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,G,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,w)}else{const Y=_.textures;for(let Z=0;Z<Y.length;Z++){const G=Y[Z],Me=r.convert(G.format,G.colorSpace),le=r.convert(G.type),Ae=y(G.internalFormat,Me,le,G.colorSpace),be=pt(_);B&&ve(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,Ae,_.width,_.height):ve(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,Ae,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const Z=Y.__webglTexture,G=pt(_);if(_.depthTexture.format===ur)ve(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(_.depthTexture.format===dr)ve(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ke(w){const _=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=Y}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=w.texture.mipmaps;Y&&Y.length>0?Se(_.__webglFramebuffer[0],w):Se(_.__webglFramebuffer,w)}else if(B){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=s.createRenderbuffer(),Be(_.__webglDepthbuffer[Y],w,!1);else{const Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,G)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Be(_.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,G)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(w,_,B){const Y=n.get(w);_!==void 0&&xe(Y.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ke(w)}function Xe(w){const _=w.texture,B=n.get(w),Y=n.get(_);w.addEventListener("dispose",R);const Z=w.textures,G=w.isWebGLCubeRenderTarget===!0,Me=Z.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=_.version,a.memory.textures++),G){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)B.__webglFramebuffer[le][Ae]=s.createFramebuffer()}else B.__webglFramebuffer[le]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)B.__webglFramebuffer[le]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Me)for(let le=0,Ae=Z.length;le<Ae;le++){const be=n.get(Z[le]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&ve(w)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const Ae=Z[le];B.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const be=r.convert(Ae.format,Ae.colorSpace),Q=r.convert(Ae.type),ie=y(Ae.internalFormat,be,Q,Ae.colorSpace,w.isXRRenderTarget===!0),Pe=pt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,ie,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,B.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Je(s.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)xe(B.__webglFramebuffer[le][Ae],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae);else xe(B.__webglFramebuffer[le],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,Ae=Z.length;le<Ae;le++){const be=Z[le],Q=n.get(be);let ie=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,Q.__webglTexture),Je(ie,be),xe(B.__webglFramebuffer,w,be,s.COLOR_ATTACHMENT0+le,ie,0),m(be)&&p(ie)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),Je(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)xe(B.__webglFramebuffer[Ae],w,_,s.COLOR_ATTACHMENT0,le,Ae);else xe(B.__webglFramebuffer,w,_,s.COLOR_ATTACHMENT0,le,0);m(_)&&p(le),t.unbindTexture()}w.depthBuffer&&Ke(w)}function gt(w){const _=w.textures;for(let B=0,Y=_.length;B<Y;B++){const Z=_[B];if(m(Z)){const G=S(w),Me=n.get(Z).__webglTexture;t.bindTexture(G,Me),p(G),t.unbindTexture()}}}const C=[],je=[];function $e(w){if(w.samples>0){if(ve(w)===!1){const _=w.textures,B=w.width,Y=w.height;let Z=s.COLOR_BUFFER_BIT;const G=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(w),le=_.length>1;if(le)for(let be=0;be<_.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ae=w.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let be=0;be<_.length;be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);const Q=n.get(_[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,B,Y,0,0,B,Y,Z,s.NEAREST),c===!0&&(C.length=0,je.length=0,C.push(s.COLOR_ATTACHMENT0+be),w.depthBuffer&&w.resolveDepthBuffer===!1&&(C.push(G),je.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,je)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<_.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);const Q=n.get(_[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function pt(w){return Math.min(i.maxSamples,w.samples)}function ve(w){const _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function bt(w){const _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function Te(w,_){const B=w.colorSpace,Y=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Qt&&B!==yi&&(Qe.getTransfer(B)===ct?(Y!==yn||Z!==qn)&&ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",B)),_}function Oe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=Gt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ve}function b_(s,e){function t(n,i=yi){let r;const a=Qe.getTransfer(i);if(n===qn)return s.UNSIGNED_BYTE;if(n===kc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return s.BYTE;if(n===su)return s.SHORT;if(n===lr)return s.UNSIGNED_SHORT;if(n===Bc)return s.INT;if(n===Yi)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===Bs)return s.HALF_FLOAT;if(n===ou)return s.ALPHA;if(n===cu)return s.RGB;if(n===yn)return s.RGBA;if(n===ur)return s.DEPTH_COMPONENT;if(n===dr)return s.DEPTH_STENCIL;if(n===Vc)return s.RED;if(n===Gc)return s.RED_INTEGER;if(n===Hc)return s.RG;if(n===Wc)return s.RG_INTEGER;if(n===Xc)return s.RGBA_INTEGER;if(n===ca||n===la||n===ha||n===ua)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Ho||n===Wo||n===Xo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qo||n===Yo||n===Ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qo||n===Yo)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jo||n===$o||n===Zo||n===Jo||n===Qo||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ic)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===hc||n===uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lc)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===fc||n===pc||n===mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
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

}`;class S_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Tu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:M_,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E_ extends $i{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,x=null;const g=typeof XRWebGLBinding<"u",m=new S_,p={},S=t.getContextAttributes();let y=null,E=null;const A=[],T=[],R=new ze;let I=null;const b=new nn;b.viewport=new tt;const v=new nn;v.viewport=new tt;const P=[b,v],O=new Cp;let z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=A[K];return J===void 0&&(J=new fo,A[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=A[K];return J===void 0&&(J=new fo,A[K]=J),J.getGripSpace()},this.getHand=function(K){let J=A[K];return J===void 0&&(J=new fo,A[K]=J),J.getHandSpace()};function X(K){const J=T.indexOf(K.inputSource);if(J===-1)return;const xe=A[J];xe!==void 0&&(xe.update(K.inputSource,K.frame,l||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",ee);for(let K=0;K<A.length;K++){const J=T[K];J!==null&&(T[K]=null,A[K].disconnect(J))}z=null,q=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(y),f=null,d=null,u=null,i=null,E=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",j),i.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Be=null,Se=null;S.depth&&(Se=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?dr:ur,Be=S.stencil?hr:Yi);const Ke={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ki(d.textureWidth,d.textureHeight,{format:yn,type:qn,depthTexture:new Eu(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Ki(f.framebufferWidth,f.framebufferHeight,{format:yn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(K){for(let J=0;J<K.removed.length;J++){const xe=K.removed[J],Be=T.indexOf(xe);Be>=0&&(T[Be]=null,A[Be].disconnect(xe))}for(let J=0;J<K.added.length;J++){const xe=K.added[J];let Be=T.indexOf(xe);if(Be===-1){for(let Ke=0;Ke<A.length;Ke++)if(Ke>=T.length){T.push(xe),Be=Ke;break}else if(T[Ke]===null){T[Ke]=xe,Be=Ke;break}if(Be===-1)break}const Se=A[Be];Se&&Se.connect(xe)}}const W=new N,se=new N;function oe(K,J,xe){W.setFromMatrixPosition(J.matrixWorld),se.setFromMatrixPosition(xe.matrixWorld);const Be=W.distanceTo(se),Se=J.projectionMatrix.elements,Ke=xe.projectionMatrix.elements,Gt=Se[14]/(Se[10]-1),Xe=Se[14]/(Se[10]+1),gt=(Se[9]+1)/Se[5],C=(Se[9]-1)/Se[5],je=(Se[8]-1)/Se[0],$e=(Ke[8]+1)/Ke[0],pt=Gt*je,ve=Gt*$e,bt=Be/(-je+$e),Te=bt*-je;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Te),K.translateZ(bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Oe=Gt+bt,w=Xe+bt,_=pt-Te,B=ve+(Be-Te),Y=gt*Xe/w*Oe,Z=C*Xe/w*Oe;K.projectionMatrix.makePerspective(_,B,Y,Z,Oe,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function we(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let J=K.near,xe=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),O.near=v.near=b.near=J,O.far=v.far=b.far=xe,(z!==O.near||q!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,q=O.far),O.layers.mask=K.layers.mask|6,b.layers.mask=O.layers.mask&3,v.layers.mask=O.layers.mask&5;const Be=K.parent,Se=O.cameras;we(O,Be);for(let Ke=0;Ke<Se.length;Ke++)we(Se[Ke],Be);Se.length===2?oe(O,b,v):O.projectionMatrix.copy(b.projectionMatrix),Je(K,O,Be)};function Je(K,J,xe){xe===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(K){return p[K]};let rt=null;function dt(K,J){if(h=J.getViewerPose(l||a),x=J,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Be=!1;xe.length!==O.cameras.length&&(O.cameras.length=0,Be=!0);for(let Xe=0;Xe<xe.length;Xe++){const gt=xe[Xe];let C=null;if(f!==null)C=f.getViewport(gt);else{const $e=u.getViewSubImage(d,gt);C=$e.viewport,Xe===0&&(e.setRenderTargetTextures(E,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(E))}let je=P[Xe];je===void 0&&(je=new nn,je.layers.enable(Xe),je.viewport=new tt,P[Xe]=je),je.matrix.fromArray(gt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(gt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(C.x,C.y,C.width,C.height),Xe===0&&(O.matrix.copy(je.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Be===!0&&O.cameras.push(je)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const Xe=u.getDepthInformation(xe[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,i.renderState)}if(Se&&Se.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<xe.length;Xe++){const gt=xe[Xe].camera;if(gt){let C=p[gt];C||(C=new Tu,p[gt]=C);const je=u.getCameraImage(gt);C.sourceTexture=je}}}}for(let xe=0;xe<A.length;xe++){const Be=T[xe],Se=A[xe];Be!==null&&Se!==void 0&&Se.update(Be,J,l||a)}rt&&rt(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}const ft=new Lu;ft.setAnimationLoop(dt),this.setAnimationLoop=function(K){rt=K},this.dispose=function(){}}}const Bi=new Yn,T_=new Ve;function w_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),y=S.envMap,E=S.envMapRotation;y&&(m.envMap.value=y,Bi.copy(E),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function A_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const E=y.program;n.uniformBlockBinding(S,E)}function l(S,y){let E=i[S.id];E===void 0&&(x(S),E=h(S),i[S.id]=E,S.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(S,A);const T=e.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){const y=u();S.__bindingPointIndex=y;const E=s.createBuffer(),A=S.__size,T=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,E),E}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=i[S.id],E=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,R=E.length;T<R;T++){const I=Array.isArray(E[T])?E[T]:[E[T]];for(let b=0,v=I.length;b<v;b++){const P=I[b];if(f(P,T,b,A)===!0){const O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let X=0;X<z.length;X++){const j=z[X],ee=g(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,O+q,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,q),q+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,y,E,A){const T=S.value,R=y+"_"+E;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{const I=A[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function x(S){const y=S.uniforms;let E=0;const A=16;for(let R=0,I=y.length;R<I;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,P=b.length;v<P;v++){const O=b[v],z=Array.isArray(O.value)?O.value:[O.value];for(let q=0,X=z.length;q<X;q++){const j=z[q],ee=g(j),W=E%A,se=W%ee.boundary,oe=W+se;E+=se,oe!==0&&A-oe<ee.storage&&(E+=A-oe),O.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=ee.storage}}}const T=E%A;return T>0&&(E+=A-T),S.__size=E,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ye("WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}const R_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ii=null;function C_(){return ii===null&&(ii=new Zc(R_,32,32,Hc,Bs),ii.minFilter=jt,ii.magFilter=jt,ii.wrapS=Hn,ii.wrapT=Hn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class I_{constructor(e={}){const{canvas:t=of(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const x=new Set([Xc,Wc,Gc]),g=new Set([qn,Yi,lr,hr,kc,zc]),m=new Uint32Array(4),p=new Int32Array(4);let S=null,y=null;const E=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let R=!1;this._outputColorSpace=Ut;let I=0,b=0,v=null,P=-1,O=null;const z=new tt,q=new tt;let X=null;const j=new Fe(0);let ee=0,W=t.width,se=t.height,oe=1,we=null,Je=null;const rt=new tt(0,0,W,se),dt=new tt(0,0,W,se);let ft=!1;const K=new Qc;let J=!1,xe=!1;const Be=new Ve,Se=new N,Ke=new tt,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function gt(){return v===null?oe:1}let C=n;function je(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",ge,!1),C===null){const U="webgl2";if(C=je(U,M),C===null)throw je(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let $e,pt,ve,bt,Te,Oe,w,_,B,Y,Z,G,Me,le,Ae,be,Q,ie,Pe,Ce,fe,De,L,he;function re(){$e=new Bx(C),$e.init(),De=new b_(C,$e),pt=new Cx(C,$e,e,De),ve=new __(C,$e),pt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),bt=new Vx(C),Te=new r_,Oe=new v_(C,$e,ve,Te,pt,De,bt),w=new Px(T),_=new Ox(T),B=new Xp(C),L=new Ax(C,B),Y=new kx(C,B,bt,L),Z=new Hx(C,Y,B,bt),Pe=new Gx(C,pt,Oe),be=new Ix(Te),G=new s_(T,w,_,$e,pt,L,be),Me=new w_(T,Te),le=new o_,Ae=new f_($e),ie=new wx(T,w,_,ve,Z,f,c),Q=new x_(T,Z,pt),he=new A_(C,bt,pt,ve),Ce=new Rx(C,$e,bt),fe=new zx(C,$e,bt),bt.programs=G.programs,T.capabilities=pt,T.extensions=$e,T.properties=Te,T.renderLists=le,T.shadowMap=Q,T.state=ve,T.info=bt}re();const ae=new E_(T,C);this.xr=ae,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(M){M!==void 0&&(oe=M,this.setSize(W,se,!1))},this.getSize=function(M){return M.set(W,se)},this.setSize=function(M,U,k=!0){if(ae.isPresenting){ye("WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,se=U,t.width=Math.floor(M*oe),t.height=Math.floor(U*oe),k===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(W*oe,se*oe).floor()},this.setDrawingBufferSize=function(M,U,k){W=M,se=U,oe=k,t.width=Math.floor(M*k),t.height=Math.floor(U*k),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(rt)},this.setViewport=function(M,U,k,V){M.isVector4?rt.set(M.x,M.y,M.z,M.w):rt.set(M,U,k,V),ve.viewport(z.copy(rt).multiplyScalar(oe).round())},this.getScissor=function(M){return M.copy(dt)},this.setScissor=function(M,U,k,V){M.isVector4?dt.set(M.x,M.y,M.z,M.w):dt.set(M,U,k,V),ve.scissor(q.copy(dt).multiplyScalar(oe).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(M){ve.setScissorTest(ft=M)},this.setOpaqueSort=function(M){we=M},this.setTransparentSort=function(M){Je=M},this.getClearColor=function(M){return M.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,k=!0){let V=0;if(M){let F=!1;if(v!==null){const ne=v.texture.format;F=x.has(ne)}if(F){const ne=v.texture.type,de=g.has(ne),_e=ie.getClearColor(),pe=ie.getClearAlpha(),Ie=_e.r,Le=_e.g,Ee=_e.b;de?(m[0]=Ie,m[1]=Le,m[2]=Ee,m[3]=pe,C.clearBufferuiv(C.COLOR,0,m)):(p[0]=Ie,p[1]=Le,p[2]=Ee,p[3]=pe,C.clearBufferiv(C.COLOR,0,p))}else V|=C.COLOR_BUFFER_BIT}U&&(V|=C.DEPTH_BUFFER_BIT),k&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ie.dispose(),le.dispose(),Ae.dispose(),Te.dispose(),w.dispose(),_.dispose(),Z.dispose(),L.dispose(),he.dispose(),G.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ll),ae.removeEventListener("sessionend",hl),Pi.stop()};function te(M){M.preventDefault(),Sa("WebGLRenderer: Context Lost."),R=!0}function $(){Sa("WebGLRenderer: Context Restored."),R=!1;const M=bt.autoReset,U=Q.enabled,k=Q.autoUpdate,V=Q.needsUpdate,F=Q.type;re(),bt.autoReset=M,Q.enabled=U,Q.autoUpdate=k,Q.needsUpdate=V,Q.type=F}function ge(M){We("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ue(M){const U=M.target;U.removeEventListener("dispose",Ue),mt(U)}function mt(M){at(M),Te.remove(M)}function at(M){const U=Te.get(M).programs;U!==void 0&&(U.forEach(function(k){G.releaseProgram(k)}),M.isShaderMaterial&&G.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,k,V,F,ne){U===null&&(U=Gt);const de=F.isMesh&&F.matrixWorld.determinant()<0,_e=rd(M,U,k,V,F);ve.setMaterial(V,de);let pe=k.index,Ie=1;if(V.wireframe===!0){if(pe=Y.getWireframeAttribute(k),pe===void 0)return;Ie=2}const Le=k.drawRange,Ee=k.attributes.position;let Ze=Le.start*Ie,ot=(Le.start+Le.count)*Ie;ne!==null&&(Ze=Math.max(Ze,ne.start*Ie),ot=Math.min(ot,(ne.start+ne.count)*Ie)),pe!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,pe.count)):Ee!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,Ee.count));const St=ot-Ze;if(St<0||St===1/0)return;L.setup(F,V,_e,k,pe);let Et,ht=Ce;if(pe!==null&&(Et=B.get(pe),ht=fe,ht.setIndex(Et)),F.isMesh)V.wireframe===!0?(ve.setLineWidth(V.wireframeLinewidth*gt()),ht.setMode(C.LINES)):ht.setMode(C.TRIANGLES);else if(F.isLine){let Re=V.linewidth;Re===void 0&&(Re=1),ve.setLineWidth(Re*gt()),F.isLineSegments?ht.setMode(C.LINES):F.isLineLoop?ht.setMode(C.LINE_LOOP):ht.setMode(C.LINE_STRIP)}else F.isPoints?ht.setMode(C.POINTS):F.isSprite&&ht.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)xr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Re=F._multiDrawStarts,Mt=F._multiDrawCounts,et=F._multiDrawCount,an=pe?B.get(pe).bytesPerElement:1,Qi=Te.get(V).currentProgram.getUniforms();for(let on=0;on<et;on++)Qi.setValue(C,"_gl_DrawID",on),ht.render(Re[on]/an,Mt[on])}else if(F.isInstancedMesh)ht.renderInstances(Ze,St,F.count);else if(k.isInstancedBufferGeometry){const Re=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Mt=Math.min(k.instanceCount,Re);ht.renderInstances(Ze,St,Mt)}else ht.render(Ze,St)};function Bn(M,U,k){M.transparent===!0&&M.side===Cn&&M.forceSinglePass===!1?(M.side=rn,M.needsUpdate=!0,Cr(M,U,k),M.side=ui,M.needsUpdate=!0,Cr(M,U,k),M.side=Cn):Cr(M,U,k)}this.compile=function(M,U,k=null){k===null&&(k=M),y=Ae.get(k),y.init(U),A.push(y),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(y.pushLight(F),F.castShadow&&y.pushShadow(F))}),M!==k&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(y.pushLight(F),F.castShadow&&y.pushShadow(F))}),y.setupLights();const V=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ne=F.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const _e=ne[de];Bn(_e,k,F),V.add(_e)}else Bn(ne,k,F),V.add(ne)}),y=A.pop(),V},this.compileAsync=function(M,U,k=null){const V=this.compile(M,U,k);return new Promise(F=>{function ne(){if(V.forEach(function(de){Te.get(de).currentProgram.isReady()&&V.delete(de)}),V.size===0){F(M);return}setTimeout(ne,10)}$e.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let En=null;function sd(M){En&&En(M)}function ll(){Pi.stop()}function hl(){Pi.start()}const Pi=new Lu;Pi.setAnimationLoop(sd),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(M){En=M,ae.setAnimationLoop(M),M===null?Pi.stop():Pi.start()},ae.addEventListener("sessionstart",ll),ae.addEventListener("sessionend",hl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,U,v),y=Ae.get(M,A.length),y.init(U),A.push(y),Be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Be,Wn,U.reversedDepth),xe=this.localClippingEnabled,J=be.init(this.clippingPlanes,xe),S=le.get(M,E.length),S.init(),E.push(S),ae.enabled===!0&&ae.isPresenting===!0){const ne=T.xr.getDepthSensingMesh();ne!==null&&Ga(ne,U,-1/0,T.sortObjects)}Ga(M,U,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(we,Je),Xe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Xe&&ie.addToRenderList(S,M),this.info.render.frame++,J===!0&&be.beginShadows();const k=y.state.shadowsArray;Q.render(k,M,U),J===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=S.opaque,F=S.transmissive;if(y.setupLights(),U.isArrayCamera){const ne=U.cameras;if(F.length>0)for(let de=0,_e=ne.length;de<_e;de++){const pe=ne[de];dl(V,F,M,pe)}Xe&&ie.render(M);for(let de=0,_e=ne.length;de<_e;de++){const pe=ne[de];ul(S,M,pe,pe.viewport)}}else F.length>0&&dl(V,F,M,U),Xe&&ie.render(M),ul(S,M,U);v!==null&&b===0&&(Oe.updateMultisampleRenderTarget(v),Oe.updateRenderTargetMipmap(v)),M.isScene===!0&&M.onAfterRender(T,M,U),L.resetDefaultState(),P=-1,O=null,A.pop(),A.length>0?(y=A[A.length-1],J===!0&&be.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,E.pop(),E.length>0?S=E[E.length-1]:S=null};function Ga(M,U,k,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)y.pushLight(M),M.castShadow&&y.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){V&&Ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Be);const de=Z.update(M),_e=M.material;_e.visible&&S.push(M,de,_e,k,Ke.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const de=Z.update(M),_e=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ke.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ke.copy(de.boundingSphere.center)),Ke.applyMatrix4(M.matrixWorld).applyMatrix4(Be)),Array.isArray(_e)){const pe=de.groups;for(let Ie=0,Le=pe.length;Ie<Le;Ie++){const Ee=pe[Ie],Ze=_e[Ee.materialIndex];Ze&&Ze.visible&&S.push(M,de,Ze,k,Ke.z,Ee)}}else _e.visible&&S.push(M,de,_e,k,Ke.z,null)}}const ne=M.children;for(let de=0,_e=ne.length;de<_e;de++)Ga(ne[de],U,k,V)}function ul(M,U,k,V){const{opaque:F,transmissive:ne,transparent:de}=M;y.setupLightsView(k),J===!0&&be.setGlobalState(T.clippingPlanes,k),V&&ve.viewport(z.copy(V)),F.length>0&&Rr(F,U,k),ne.length>0&&Rr(ne,U,k),de.length>0&&Rr(de,U,k),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function dl(M,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[V.id]===void 0&&(y.state.transmissionRenderTarget[V.id]=new Ki(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Bs:qn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ne=y.state.transmissionRenderTarget[V.id],de=V.viewport||z;ne.setSize(de.z*T.transmissionResolutionScale,de.w*T.transmissionResolutionScale);const _e=T.getRenderTarget(),pe=T.getActiveCubeFace(),Ie=T.getActiveMipmapLevel();T.setRenderTarget(ne),T.getClearColor(j),ee=T.getClearAlpha(),ee<1&&T.setClearColor(16777215,.5),T.clear(),Xe&&ie.render(k);const Le=T.toneMapping;T.toneMapping=wi;const Ee=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),y.setupLightsView(V),J===!0&&be.setGlobalState(T.clippingPlanes,V),Rr(M,k,V),Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ot=0,St=U.length;ot<St;ot++){const Et=U[ot],{object:ht,geometry:Re,material:Mt,group:et}=Et;if(Mt.side===Cn&&ht.layers.test(V.layers)){const an=Mt.side;Mt.side=rn,Mt.needsUpdate=!0,fl(ht,k,V,Re,Mt,et),Mt.side=an,Mt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne))}T.setRenderTarget(_e,pe,Ie),T.setClearColor(j,ee),Ee!==void 0&&(V.viewport=Ee),T.toneMapping=Le}function Rr(M,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ne=M.length;F<ne;F++){const de=M[F],{object:_e,geometry:pe,group:Ie}=de;let Le=de.material;Le.allowOverride===!0&&V!==null&&(Le=V),_e.layers.test(k.layers)&&fl(_e,U,k,pe,Le,Ie)}}function fl(M,U,k,V,F,ne){M.onBeforeRender(T,U,k,V,F,ne),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(T,U,k,V,M,ne),F.transparent===!0&&F.side===Cn&&F.forceSinglePass===!1?(F.side=rn,F.needsUpdate=!0,T.renderBufferDirect(k,U,V,F,M,ne),F.side=ui,F.needsUpdate=!0,T.renderBufferDirect(k,U,V,F,M,ne),F.side=Cn):T.renderBufferDirect(k,U,V,F,M,ne),M.onAfterRender(T,U,k,V,F,ne)}function Cr(M,U,k){U.isScene!==!0&&(U=Gt);const V=Te.get(M),F=y.state.lights,ne=y.state.shadowsArray,de=F.state.version,_e=G.getParameters(M,F.state,ne,U,k),pe=G.getProgramCacheKey(_e);let Ie=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?_:w).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",Ue),Ie=new Map,V.programs=Ie);let Le=Ie.get(pe);if(Le!==void 0){if(V.currentProgram===Le&&V.lightsStateVersion===de)return ml(M,_e),Le}else _e.uniforms=G.getUniforms(M),M.onBeforeCompile(_e,T),Le=G.acquireProgram(_e,pe),Ie.set(pe,Le),V.uniforms=_e.uniforms;const Ee=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=be.uniform),ml(M,_e),V.needsLights=od(M),V.lightsStateVersion=de,V.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Le,V.uniformsList=null,Le}function pl(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=da.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function ml(M,U){const k=Te.get(M);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function rd(M,U,k,V,F){U.isScene!==!0&&(U=Gt),Oe.resetTextureUnits();const ne=U.fog,de=V.isMeshStandardMaterial?U.environment:null,_e=v===null?T.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Qt,pe=(V.isMeshStandardMaterial?_:w).get(V.envMap||de),Ie=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!k.morphAttributes.position,Ze=!!k.morphAttributes.normal,ot=!!k.morphAttributes.color;let St=wi;V.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(St=T.toneMapping);const Et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ht=Et!==void 0?Et.length:0,Re=Te.get(V),Mt=y.state.lights;if(J===!0&&(xe===!0||M!==O)){const qt=M===O&&V.id===P;be.setState(V,M,qt)}let et=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Mt.state.version||Re.outputColorSpace!==_e||F.isBatchedMesh&&Re.batching===!1||!F.isBatchedMesh&&Re.batching===!0||F.isBatchedMesh&&Re.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Re.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Re.instancing===!1||!F.isInstancedMesh&&Re.instancing===!0||F.isSkinnedMesh&&Re.skinning===!1||!F.isSkinnedMesh&&Re.skinning===!0||F.isInstancedMesh&&Re.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Re.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Re.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Re.instancingMorph===!1&&F.morphTexture!==null||Re.envMap!==pe||V.fog===!0&&Re.fog!==ne||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==be.numPlanes||Re.numIntersection!==be.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Le||Re.morphTargets!==Ee||Re.morphNormals!==Ze||Re.morphColors!==ot||Re.toneMapping!==St||Re.morphTargetsCount!==ht)&&(et=!0):(et=!0,Re.__version=V.version);let an=Re.currentProgram;et===!0&&(an=Cr(V,U,F));let Qi=!1,on=!1,Hs=!1;const yt=an.getUniforms(),en=Re.uniforms;if(ve.useProgram(an.program)&&(Qi=!0,on=!0,Hs=!0),V.id!==P&&(P=V.id,on=!0),Qi||O!==M){ve.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),yt.setValue(C,"projectionMatrix",M.projectionMatrix),yt.setValue(C,"viewMatrix",M.matrixWorldInverse);const tn=yt.map.cameraPosition;tn!==void 0&&tn.setValue(C,Se.setFromMatrixPosition(M.matrixWorld)),pt.logarithmicDepthBuffer&&yt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&yt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),O!==M&&(O=M,on=!0,Hs=!0)}if(F.isSkinnedMesh){yt.setOptional(C,F,"bindMatrix"),yt.setOptional(C,F,"bindMatrixInverse");const qt=F.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),yt.setValue(C,"boneTexture",qt.boneTexture,Oe))}F.isBatchedMesh&&(yt.setOptional(C,F,"batchingTexture"),yt.setValue(C,"batchingTexture",F._matricesTexture,Oe),yt.setOptional(C,F,"batchingIdTexture"),yt.setValue(C,"batchingIdTexture",F._indirectTexture,Oe),yt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&yt.setValue(C,"batchingColorTexture",F._colorsTexture,Oe));const un=k.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Pe.update(F,k,an),(on||Re.receiveShadow!==F.receiveShadow)&&(Re.receiveShadow=F.receiveShadow,yt.setValue(C,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(en.envMap.value=pe,en.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(en.envMapIntensity.value=U.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=C_()),on&&(yt.setValue(C,"toneMappingExposure",T.toneMappingExposure),Re.needsLights&&ad(en,Hs),ne&&V.fog===!0&&Me.refreshFogUniforms(en,ne),Me.refreshMaterialUniforms(en,V,oe,se,y.state.transmissionRenderTarget[M.id]),da.upload(C,pl(Re),en,Oe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(da.upload(C,pl(Re),en,Oe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&yt.setValue(C,"center",F.center),yt.setValue(C,"modelViewMatrix",F.modelViewMatrix),yt.setValue(C,"normalMatrix",F.normalMatrix),yt.setValue(C,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const qt=V.uniformsGroups;for(let tn=0,Ha=qt.length;tn<Ha;tn++){const Li=qt[tn];he.update(Li,an),he.bind(Li,an)}}return an}function ad(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function od(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(M,U,k){const V=Te.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Te.get(M.texture).__webglTexture=U,Te.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const k=Te.get(M);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const cd=C.createFramebuffer();this.setRenderTarget=function(M,U=0,k=0){v=M,I=U,b=k;let V=!0,F=null,ne=!1,de=!1;if(M){const pe=Te.get(M);if(pe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(pe.__webglFramebuffer===void 0)Oe.setupRenderTarget(M);else if(pe.__hasExternalTextures)Oe.rebindTextures(M,Te.get(M.texture).__webglTexture,Te.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ee=M.depthTexture;if(pe.__boundDepthTexture!==Ee){if(Ee!==null&&Te.has(Ee)&&(M.width!==Ee.image.width||M.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(de=!0);const Le=Te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?F=Le[U][k]:F=Le[U],ne=!0):M.samples>0&&Oe.useMultisampledRTT(M)===!1?F=Te.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[k]:F=Le,z.copy(M.viewport),q.copy(M.scissor),X=M.scissorTest}else z.copy(rt).multiplyScalar(oe).floor(),q.copy(dt).multiplyScalar(oe).floor(),X=ft;if(k!==0&&(F=cd),ve.bindFramebuffer(C.FRAMEBUFFER,F)&&V&&ve.drawBuffers(M,F),ve.viewport(z),ve.scissor(q),ve.setScissorTest(X),ne){const pe=Te.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,k)}else if(de){const pe=U;for(let Ie=0;Ie<M.textures.length;Ie++){const Le=Te.get(M.textures[Ie]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ie,Le.__webglTexture,k,pe)}}else if(M!==null&&k!==0){const pe=Te.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,pe.__webglTexture,k)}P=-1},this.readRenderTargetPixels=function(M,U,k,V,F,ne,de,_e=0){if(!(M&&M.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe){ve.bindFramebuffer(C.FRAMEBUFFER,pe);try{const Ie=M.textures[_e],Le=Ie.format,Ee=Ie.type;if(!pt.textureFormatReadable(Le)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Ee)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&k>=0&&k<=M.height-F&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e),C.readPixels(U,k,V,F,De.convert(Le),De.convert(Ee),ne))}finally{const Ie=v!==null?Te.get(v).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,U,k,V,F,ne,de,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe)if(U>=0&&U<=M.width-V&&k>=0&&k<=M.height-F){ve.bindFramebuffer(C.FRAMEBUFFER,pe);const Ie=M.textures[_e],Le=Ie.format,Ee=Ie.type;if(!pt.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.bufferData(C.PIXEL_PACK_BUFFER,ne.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e),C.readPixels(U,k,V,F,De.convert(Le),De.convert(Ee),0);const ot=v!==null?Te.get(v).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,ot);const St=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await cf(C,St,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ne),C.deleteBuffer(Ze),C.deleteSync(St),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,k=0){const V=Math.pow(2,-k),F=Math.floor(M.image.width*V),ne=Math.floor(M.image.height*V),de=U!==null?U.x:0,_e=U!==null?U.y:0;Oe.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,de,_e,F,ne),ve.unbindTexture()};const ld=C.createFramebuffer(),hd=C.createFramebuffer();this.copyTextureToTexture=function(M,U,k=null,V=null,F=0,ne=null){ne===null&&(F!==0?(xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=F,F=0):ne=0);let de,_e,pe,Ie,Le,Ee,Ze,ot,St;const Et=M.isCompressedTexture?M.mipmaps[ne]:M.image;if(k!==null)de=k.max.x-k.min.x,_e=k.max.y-k.min.y,pe=k.isBox3?k.max.z-k.min.z:1,Ie=k.min.x,Le=k.min.y,Ee=k.isBox3?k.min.z:0;else{const un=Math.pow(2,-F);de=Math.floor(Et.width*un),_e=Math.floor(Et.height*un),M.isDataArrayTexture?pe=Et.depth:M.isData3DTexture?pe=Math.floor(Et.depth*un):pe=1,Ie=0,Le=0,Ee=0}V!==null?(Ze=V.x,ot=V.y,St=V.z):(Ze=0,ot=0,St=0);const ht=De.convert(U.format),Re=De.convert(U.type);let Mt;U.isData3DTexture?(Oe.setTexture3D(U,0),Mt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),Mt=C.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),Mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const et=C.getParameter(C.UNPACK_ROW_LENGTH),an=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qi=C.getParameter(C.UNPACK_SKIP_PIXELS),on=C.getParameter(C.UNPACK_SKIP_ROWS),Hs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Et.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Et.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ie),C.pixelStorei(C.UNPACK_SKIP_ROWS,Le),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ee);const yt=M.isDataArrayTexture||M.isData3DTexture,en=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const un=Te.get(M),qt=Te.get(U),tn=Te.get(un.__renderTarget),Ha=Te.get(qt.__renderTarget);ve.bindFramebuffer(C.READ_FRAMEBUFFER,tn.__webglFramebuffer),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ha.__webglFramebuffer);for(let Li=0;Li<pe;Li++)yt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.get(M).__webglTexture,F,Ee+Li),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.get(U).__webglTexture,ne,St+Li)),C.blitFramebuffer(Ie,Le,de,_e,Ze,ot,de,_e,C.DEPTH_BUFFER_BIT,C.NEAREST);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||Te.has(M)){const un=Te.get(M),qt=Te.get(U);ve.bindFramebuffer(C.READ_FRAMEBUFFER,ld),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,hd);for(let tn=0;tn<pe;tn++)yt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,un.__webglTexture,F,Ee+tn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,un.__webglTexture,F),en?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qt.__webglTexture,ne,St+tn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qt.__webglTexture,ne),F!==0?C.blitFramebuffer(Ie,Le,de,_e,Ze,ot,de,_e,C.COLOR_BUFFER_BIT,C.NEAREST):en?C.copyTexSubImage3D(Mt,ne,Ze,ot,St+tn,Ie,Le,de,_e):C.copyTexSubImage2D(Mt,ne,Ze,ot,Ie,Le,de,_e);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else en?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Mt,ne,Ze,ot,St,de,_e,pe,ht,Re,Et.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Mt,ne,Ze,ot,St,de,_e,pe,ht,Et.data):C.texSubImage3D(Mt,ne,Ze,ot,St,de,_e,pe,ht,Re,Et):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ne,Ze,ot,de,_e,ht,Re,Et.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ne,Ze,ot,Et.width,Et.height,ht,Et.data):C.texSubImage2D(C.TEXTURE_2D,ne,Ze,ot,de,_e,ht,Re,Et);C.pixelStorei(C.UNPACK_ROW_LENGTH,et),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,an),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qi),C.pixelStorei(C.UNPACK_SKIP_ROWS,on),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Hs),ne===0&&U.generateMipmaps&&C.generateMipmap(Mt),ve.unbindTexture()},this.initRenderTarget=function(M){Te.get(M).__webglFramebuffer===void 0&&Oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Oe.setTextureCube(M,0):M.isData3DTexture?Oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Oe.setTexture2DArray(M,0):Oe.setTexture2D(M,0),ve.unbindTexture()},this.resetState=function(){I=0,b=0,v=null,ve.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Dh(s,e){if(e===jd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===xc||e===uu){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===xc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class P_ extends Vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new F_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new z_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new $_(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=ar.extractUrlBase(e);a=ar.resolveURL(l,this.path)}else a=ar.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Cu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ou){try{a[Ye.KHR_BINARY_GLTF]=new Z_(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new hv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:a[u]=new N_;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[u]=new J_(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[u]=new Q_;break;case Ye.KHR_MESH_QUANTIZATION:a[u]=new ev;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function L_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class D_{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Qt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Pu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Iu(h),l.distance=u;break;case"spot":l=new Tp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class N_{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return At}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(i)}}class U_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class F_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(o,o)}return Promise.all(r)}}class O_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class B_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class k_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ut)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class z_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class V_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(o[0],o[1],o[2],Qt),Promise.all(r)}}class G_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class H_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(o[0],o[1],o[2],Qt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ut)),Promise.all(r)}}class W_{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class X_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class q_{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Y_{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class K_{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class j_{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class $_{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==mn.TRIANGLES&&l.mode!==mn.TRIANGLE_STRIP&&l.mode!==mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const x of u){const g=new Ve,m=new N,p=new Un,S=new N(1,1,1),y=new np(x.geometry,x.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,E),c.SCALE&&S.fromBufferAttribute(c.SCALE,E),y.setMatrixAt(E,g.compose(m,p,S));for(const E in c)if(E==="_COLOR_0"){const A=c[E];y.instanceColor=new _c(A.array,A.itemSize,A.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&x.geometry.setAttribute(E,c[E]);vt.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ou="glTF",Qs=12,Nh={JSON:1313821514,BIN:5130562};class Z_{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ou)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Qs,r=new DataView(e,Qs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Nh.JSON){const l=new Uint8Array(e,Qs+a,o);this.content=n.decode(l)}else if(c===Nh.BIN){const l=Qs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class J_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=Sc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Sc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ys[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const x in f.attributes){const g=f.attributes[x],m=c[x];m!==void 0&&(g.normalized=m)}u(f)},o,l,Qt,d)})})}}class Q_{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ev{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Bu extends wr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,x=e*l,g=x-l,m=-2*f+3*d,p=f-d,S=1-m,y=p-d+u;for(let E=0;E!==o;E++){const A=a[g+E+o],T=a[g+E+c]*h,R=a[x+E+o],I=a[x+E]*h;r[E]=S*A+y*T+m*R+p*I}return r}}const tv=new Un;class nv extends Bu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return tv.fromArray(r).normalize().toArray(r),r}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uh={9728:$t,9729:jt,9984:nu,9985:oa,9986:er,9987:ai},Fh={33071:Hn,33648:va,10497:Rs},wo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iv={CUBICSPLINE:void 0,LINEAR:pr,STEP:fr},Ao={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Tr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),s.DefaultMaterial}function ki(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rv(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function av(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ov(s){let e;const t=s.extensions&&s.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ro(t.attributes):e=s.indices+":"+Ro(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ro(s.targets[n]);return e}function Ro(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ec(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lv=new Ve;class hv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new L_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new yp(this.options.manager):this.textureLoader=new Rp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ki(r,o,i),zn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(ar.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=wo[i.type],o=ys[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Zt(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=wo[i.type],l=ys[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let g,m;if(f&&f!==u){const p=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(S);y||(g=new l(o,p*f,i.count*f/h),y=new Zf(g,f/h),t.cache.add(S,y)),m=new $c(y,c,d%f/h,x)}else o===null?g=new l(i.count*c):g=new l(o,d,i.count*c),m=new Zt(g,c,x);if(i.sparse!==void 0){const p=wo.SCALAR,S=ys[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,A=new S(a[1],y,i.sparse.count*p),T=new l(a[2],E,i.sparse.count*c);o!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=A.length;R<I;R++){const b=A[R];if(m.setX(b,T[R*c]),c>=2&&m.setY(b,T[R*c+1]),c>=3&&m.setZ(b,T[R*c+2]),c>=4&&m.setW(b,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Uh[d.magFilter]||jt,h.minFilter=Uh[d.minFilter]||ai,h.wrapS=Fh[d.wrapS]||Rs,h.wrapT=Fh[d.wrapT]||Rs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==jt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let x=d;t.isImageBitmapLoader===!0&&(x=function(g){const m=new kt(g);m.needsUpdate=!0,d(m)}),t.load(ar.resolveURL(u,r.path),x,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),zn(u,a),u.userData.mimeType=a.mimeType||cv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Su,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Gi,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Tr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const u=i[Ye.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Qt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Ut)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Cn);const h=r.alphaMode||Ao.OPAQUE;if(h===Ao.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ao.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==At&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==At&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==At){const u=r.emissiveFactor;o.emissive=new Fe().setRGB(u[0],u[1],u[2],Qt)}return r.emissiveTexture!==void 0&&a!==At&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),zn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ki(i,u,r),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Oh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=ov(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Oh(new Ot,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?sv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,x=h.length;f<x;f++){const g=h[f],m=a[f];let p;const S=l[f];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Qf(g,S):new Rt(g,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===mn.TRIANGLE_STRIP?p.geometry=Dh(p.geometry,uu):m.mode===mn.TRIANGLE_FAN&&(p.geometry=Dh(p.geometry,xc));else if(m.mode===mn.LINES)p=new ap(g,S);else if(m.mode===mn.LINE_STRIP)p=new Rn(g,S);else if(m.mode===mn.LINE_LOOP)p=new op(g,S);else if(m.mode===mn.POINTS)p=new cp(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&av(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),zn(p,r),m.extensions&&ki(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,x=u.length;f<x;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ki(i,u[0],r),u[0];const d=new wt;r.extensions&&ki(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,x=u.length;f<x;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(Tf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ua(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Jc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],x=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,S=i.parameters!==void 0?i.parameters[x.output]:x.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(x),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],x=u[2],g=u[3],m=u[4],p=[];for(let y=0,E=d.length;y<E;y++){const A=d[y],T=f[y],R=x[y],I=g[y],b=m[y];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const v=n._createAnimationTracks(A,T,R,I,b);if(v)for(let P=0;P<v.length;P++)p.push(v[P])}const S=new bc(r,void 0,p);return zn(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,lv)});for(let f=0,x=u.length;f<x;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new yu:l.length>1?h=new wt:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),zn(h,r),r.extensions&&ki(n,h,r),r.matrix!==void 0){const u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new wt;n.name&&(r.name=i.createUniqueName(n.name)),zn(r,n),n.extensions&&ki(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Sn||d instanceof kt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Mi[r.path]===Mi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Mi[r.path]){case Mi.weights:l=Ps;break;case Mi.rotation:l=Ls;break;case Mi.translation:case Mi.scale:l=Ds;break;default:n.itemSize===1?l=Ps:l=Ds;break}const h=i.interpolation!==void 0?iv[i.interpolation]:pr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const x=new l(c[d]+"."+Mi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ec(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ls?nv:Bu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uv(s,e,t){const n=e.attributes,i=new pi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),o.normalized){const h=Ec(ys[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new N,c=new N;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,x=d.max;if(f!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),d.normalized){const g=Ec(ys[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new jn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Oh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Sc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Qe.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),zn(s,e),uv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?rv(s,e.targets,t):s})}function dv(s){const e=new Map,t=new Map,n=s.clone();return ku(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ku(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)ku(s.children[n],e.children[n],t)}const Tc=new Map,Bh=new Map,fv=new P_;function pv(s){if(Tc.has(s))return Promise.resolve();const e=Bh.get(s);if(e)return e;const t=fv.loadAsync("./units/"+s+".glb").then(n=>{n.scene.traverse(i=>{i instanceof Rt&&(i.castShadow=!0,i.receiveShadow=!1)}),Tc.set(s,{scene:n.scene,animations:n.animations})}).catch(n=>{console.warn("Unit asset unavailable",s,n)});return Bh.set(s,t),t}function kh(s){const e=Tc.get(s);if(!e)return;const t=dv(e.scene),n=new wt;return n.add(t),{model:n,mixer:new Gp(t),clips:new Map(e.animations.map(r=>[r.name,r])),state:""}}function Co(s,e,t=1){if(s.state===e){s.action&&(s.action.timeScale=t);return}const n=s.clips.get(e);if(!n)return;const i=s.action,r=s.mixer.clipAction(n);r.reset(),r.enabled=!0,r.setEffectiveWeight(1),r.timeScale=t,e==="Move"||e==="Idle"?(r.setLoop(hu,1/0),r.clampWhenFinished=!1):(r.setLoop(lu,1),r.clampWhenFinished=!0),r.play(),i&&i!==r&&(i.fadeOut(.075),r.fadeIn(.075)),s.action=r,s.state=e}function na(s){s&&(s.mixer.stopAllAction(),s.mixer.uncacheRoot(s.mixer.getRoot()))}const si={meadow:7059294,meadow2:8635240,sand:13286537,ridge:9218454,forest:4100436,ore:9597889,earth:7821637,darkEarth:4866115,rock:6186857},He=new Zi(1,1,1),kn=new Da(1,1),zh=new Da(1,0),fn=new el(1,1,4),pn=new La(1,1,1,8),Vh=(s,e,t)=>Math.max(e,Math.min(t,s)),xt=(s,e=1)=>new Tr({color:s,roughness:e,metalness:0}),ue={dirt:xt(si.earth),cliff:xt(si.darkEarth),rock:xt(si.rock),grass:xt(si.meadow),grass2:xt(si.meadow2),sand:xt(si.sand),ridge:xt(si.ridge),grove:xt(si.forest),ore:xt(si.ore),trunk:xt(6511429),leaf:xt(4096341),leaf2:xt(6924396),metal:xt(3694181,.6),gun:xt(8436137,.42),orange:xt(14191448,.5),red:xt(12148298),midnight:xt(2245207),ivory:xt(15263688),white:xt(16777215),ice:xt(10149095,.4),purple:xt(12296433,.5),wood:xt(8678228),coal:xt(3359818),brass:xt(15582590,.52),flag:xt(14121811)};class mv{canvas;scene=new $f;renderer;camera;ray=new Hp;land=new wt;decorations=new wt;roads=new wt;structures=new wt;ghost=new wt;figures=new wt;particleLayer=new wt;tileMeshes=[];candidateMeshes=[];enemies=new Map;fallen=[];structureMeshes=new Map;flashes=[];onTileClick;onHover;highlight;rangeRing;lighthouseLight;target=new N(0,0,0);yaw=.73;pitch=.99;zoomFactor=1;baseView=15;hovered=null;hoveredType="bolt";facilityKey=null;raidPortId=null;selectRaidPort(e){this.raidPortId=e,this.updateHover(this.hovered)}moving=!1;selectFacility(e,t){this.facilityKey=e,this.moving=t,this.updateHover(this.hovered)}previewIndex=-1;raidRouteKey="";selectRaidRoute(e,t){const n=this.currentGame;if(!n?.raid)return;const i=String(e)+":"+(t??"core");if(i===this.raidRouteKey)return;this.raidRouteKey=i,this.clear(this.ghost);const r=n.raidRoute(e,t);if(!r.length)return;const a=r.map(l=>new N(l.x,this.tileHeight(l.x,l.z)+.1,l.z)),o=new At({color:16767624,depthTest:!1,transparent:!0,opacity:.9});for(const l of a){const h=this.shape(kn,o,l.x,l.y,l.z,.09,.09,.09);h.castShadow=!1,h.renderOrder=11,this.ghost.add(h)}const c=new Rn(new Ot().setFromPoints(a),new Gi({color:16767624,depthTest:!1,transparent:!0,opacity:.8}));c.renderOrder=10,this.ghost.add(c)}currentGame=null;pointers=new Map;pointerStart=null;lastPinch=0;userAdjusted=!1;waterTime=0;waveMeshes=[];elapsed=0;cameraTarget=new N(0,0,0);constructor(e,t,n){this.onTileClick=t,this.onHover=n,this.renderer=new I_({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(2,devicePixelRatio||1)),this.renderer.outputColorSpace=Ut,this.renderer.toneMapping=eu,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jh,this.canvas=this.renderer.domElement,e.appendChild(this.canvas),this.camera=new Ua(-10,10,10,-10,.1,250),this.scene.add(this.land,this.decorations,this.roads,this.structures,this.ghost,this.figures,this.particleLayer),this.scene.add(new Sp(15202527,2642533,1.65));const i=new Pu(16769457,2.5);i.position.set(-12,23,10),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.camera.left=-32,i.shadow.camera.right=32,i.shadow.camera.top=32,i.shadow.camera.bottom=-32,i.shadow.normalBias=.05,this.scene.add(i);const r=new Rt(new Er(4e3,4e3),new Tr({color:2588315,roughness:.44,metalness:.08}));r.rotation.x=-Math.PI/2,r.position.y=-.35,r.receiveShadow=!0,this.scene.add(r),this.makeSea(),this.highlight=new Rt(new Zi(1.017,.055,1.017),new At({color:13303709,opacity:.34,transparent:!0,depthWrite:!1})),this.highlight.visible=!1,this.scene.add(this.highlight),this.rangeRing=new Rt(new nl(.975,1,96),new At({color:14024602,side:Cn,opacity:.43,transparent:!0,depthWrite:!1})),this.rangeRing.rotation.x=-Math.PI/2,this.rangeRing.visible=!1,this.scene.add(this.rangeRing),this.lighthouseLight=new Iu(16773020,4,9,1.4),this.scene.add(this.lighthouseLight),this.resize(),new ResizeObserver(()=>this.resize()).observe(e),this.installPointers();for(const a of["raider","runner","armored","support","boss"])pv(a)}shape(e,t,n,i,r,a=1,o=1,c=1){const l=new Rt(e,t);return l.position.set(n,i,r),l.scale.set(a,o,c),l.castShadow=!0,l.receiveShadow=!0,l}makeSea(){const e=new At({color:12052195,transparent:!0,opacity:.3,depthWrite:!1});for(let t=0;t<180;t++){const n=t*2.3999632,i=5+Math.sqrt(t/180)*37,r=Math.cos(n)*i,a=Math.sin(n)*i,o=this.shape(He,e,r,-.316,a,.27+t%4*.08,.008,.025);o.rotation.y=t*1.76,this.scene.add(o),this.waveMeshes.push(o)}}topMaterial(e){return e.biome==="sand"?ue.sand:e.biome==="ridge"?ue.ridge:e.biome==="grove"?ue.grove:e.biome==="ore"?ue.ore:Math.abs(e.x+e.z*17)%3===0?ue.grass2:ue.grass}height(e){return e?e.h*.35:.7}tileHeight(e,t){return this.height(this.currentGame?.tiles.get(me(e,t)))}worldHeight(e,t){const n=this.currentGame?.tiles.get(me(Math.round(e),Math.round(t)));return this.height(n)}clear(e){const t=new Set;for(const n of[...e.children])e.remove(n),n.traverse(i=>{(e===this.ghost||e===this.particleLayer)&&(i instanceof Rt||i instanceof Rn)&&i.material instanceof Sn&&t.add(i.material),(i instanceof Rt||i instanceof Rn)&&i.geometry!==He&&i.geometry!==kn&&i.geometry!==zh&&i.geometry!==fn&&i.geometry!==pn&&i.geometry.dispose()});for(const n of t)n.dispose()}setSelected(e){this.hoveredType=e,this.updateHover(this.hovered)}rebuild(e,t=!1){if(this.currentGame!==e){for(const n of this.enemies.values())na(n.actor);for(const n of this.fallen)na(n.view.actor);this.figures.clear(),this.enemies.clear(),this.fallen=[],this.clear(this.particleLayer),this.flashes.length=0,this.hovered=null}this.currentGame=e,this.clear(this.land),this.clear(this.decorations),this.clear(this.roads),this.clear(this.structures),this.tileMeshes.length=0,this.structureMeshes.clear(),this.previewIndex=-1,this.raidRouteKey="",this.clear(this.ghost),this.candidateMeshes.length=0;for(const n of e.tiles.values()){const i=this.height(n),r=this.shape(He,[ue.dirt,ue.cliff,n.bridge?ue.wood:this.topMaterial(n),ue.rock,ue.dirt,ue.cliff],n.x,(i-.35)/2,n.z,.986,i+.35,.986);if(r.userData={tileX:n.x,tileZ:n.z},this.land.add(r),this.tileMeshes.push(r),n.bridge)for(let a=0;a<3;a++){const o=this.shape(He,ue.brass,n.x,i+.024,n.z+(a-1)*.27,.86,.05,.045);this.land.add(o)}!n.bridge&&!e.towers.has(me(n.x,n.z))&&!(n.x===0&&n.z===0)&&!e.ports.some(a=>a.x===n.x&&a.z===n.z)&&this.makeDecoration(n),e.ports.some(a=>a.x===n.x&&a.z===n.z)&&this.makeDock(n);for(const a of[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}]){if(e.tiles.has(me(n.x+a.x,n.z+a.z)))continue;const o=this.shape(He,new At({color:14873040,transparent:!0,opacity:.64}),n.x+a.x*.48,-.21,n.z+a.z*.48,a.x!==0?.09:.87,.03,a.z!==0?.09:.87);o.castShadow=!1,this.decorations.add(o)}}for(const n of e.activePorts){const i=e.paths.get(n.id)||[];for(let r=0;r<i.length-1;r++){const a=i[r],o=e.tiles.get(me(a.x,a.z));if(!o||o.bridge)continue;const c=this.shape(He,ue.sand,a.x,this.height(o)+.018,a.z,.7,.038,.7);if(c.castShadow=!1,this.roads.add(c),r>0&&r%2===0){const l=i[r+1],h=this.shape(fn,ue.brass,a.x,this.height(o)+.075,a.z,.115,.15,.115);h.rotation.z=Math.PI/2,h.rotation.y=Math.atan2(l.x-a.x,l.z-a.z),h.castShadow=!1,this.roads.add(h)}}}this.makeLighthouse(e);for(const n of e.towers.values())this.makeTower(n,e);t&&!this.userAdjusted&&this.autoFit(),this.updateHover(this.hovered)}makeDecoration(e){const t=this.currentGame?.random(e.x,e.z,122)??.5;if(e.resource){const n=this.height(e);for(const i of[-.37,.37])for(const r of[-.37,.37]){const a=this.shape(He,ue.brass,e.x+i,n+.12,e.z+r,.1,.25,.1);a.castShadow=!1,this.decorations.add(a)}}if(e.resource==="harbor"||e.resource==="relic"){const n=this.height(e),i=e.resource==="harbor"?ue.ice:ue.brass;this.decorations.add(this.shape(He,ue.rock,e.x,n+.1,e.z,.67,.2,.67)),this.decorations.add(this.shape(He,i,e.x,n+.31,e.z,.43,.25,.43)),this.decorations.add(this.shape(fn,i,e.x,n+.66,e.z,.42,.45,.42))}else if(e.biome==="ore")for(let n=0;n<3;n++){const i=e.x+Math.sin(n*2.2+t)*.19,r=e.z+Math.cos(n*2.3+t)*.16,a=this.shape(fn,ue.purple,i,this.height(e)+.22,r,.12,.45+n*.12,.14);a.rotation.y=.75,this.decorations.add(a)}else if(e.biome==="grove"&&(t>.16||e.resource==="wood")){const n=this.shape(He,ue.trunk,e.x,this.height(e)+.22,e.z,.17,.47,.16),i=this.shape(He,t>.55?ue.leaf2:ue.leaf,e.x,this.height(e)+.63,e.z,.7,.56,.64),r=this.shape(He,ue.leaf2,e.x-.1,this.height(e)+.94,e.z+.06,.4,.24,.46);this.decorations.add(n,i,r)}else if(e.biome==="ridge"&&t>.7)this.decorations.add(this.shape(zh,ue.rock,e.x+.15,this.height(e)+.08,e.z+.1,.22,.17,.25));else if(e.biome==="grass"&&t>.7)for(let n=0;n<2;n++){const i=this.shape(fn,ue.grove,e.x+(n===0?-.23:.2),this.height(e)+.09,e.z+(n===0?-.17:.2),.09,.18,.09);i.rotation.y=n,this.decorations.add(i)}}makeDock(e){const t=this.height(e);this.decorations.add(this.shape(He,ue.wood,e.x,t+.045,e.z,.89,.09,.89));const n=this.shape(He,ue.midnight,e.x-.28,t+.45,e.z-.26,.09,.82,.09),i=this.shape(He,ue.flag,e.x-.05,t+.72,e.z-.26,.43,.19,.065),r=this.shape(kn,ue.brass,e.x+.26,t+.2,e.z+.23,.13,.13,.13);this.decorations.add(n,i,r)}makeLighthouse(e){const t=this.tileHeight(0,0),n=new wt;n.position.set(0,t,0),n.add(this.shape(He,ue.rock,0,.18,0,.9,.36,.9)),n.add(this.shape(pn,ue.ivory,0,.99,0,.3,1.56,.3)),n.add(this.shape(pn,ue.red,0,.5,0,.335,.21,.335)),n.add(this.shape(pn,ue.red,0,1.12,0,.33,.19,.33)),n.add(this.shape(pn,ue.coal,0,1.8,0,.48,.19,.48));const i=this.shape(kn,ue.brass,0,2.02,0,.3,.3,.3);n.add(i);const r=this.shape(fn,ue.midnight,0,2.35,0,.6,.45,.6);r.rotation.y=Math.PI/4,n.add(r),n.add(this.shape(He,ue.midnight,0,.95,.31,.13,.29,.07)),this.lighthouseLight.position.set(0,t+2,0),this.lighthouseLight.intensity=e.hp<6?8:4,this.structures.add(n)}makeTower(e,t){const n=this.tileHeight(e.x,e.z),i=new wt;i.position.set(e.x,n,e.z);const r=new wt;if(i.add(this.shape(He,ue.rock,0,.13,0,.7,.25,.7)),i.add(this.shape(He,ue.metal,0,.42,0,.39,.45,.39)),r.position.y=.75,e.type==="bolt"){r.add(this.shape(pn,ue.gun,0,.02,0,.28,.31,.28));const a=this.shape(pn,ue.ivory,0,.04,.33,.12,.6,.12);a.rotation.x=Math.PI/2,r.add(a),r.add(this.shape(He,ue.brass,0,.28,0,.24,.07,.34))}else if(e.type==="cannon"){r.add(this.shape(pn,ue.orange,0,.05,0,.32,.31,.32));const a=this.shape(pn,ue.coal,0,.08,.32,.2,.69,.2);a.rotation.x=Math.PI/2,r.add(a),r.add(this.shape(pn,ue.brass,0,.08,.62,.23,.12,.23))}else if(e.type==="frost")r.add(this.shape(He,ue.ice,0,.18,0,.4,.42,.4)),r.add(this.shape(fn,ue.ice,0,.68,0,.27,.64,.27)),r.add(this.shape(fn,ue.purple,-.28,.3,.05,.14,.35,.14));else if(bn(t.tiles.get(me(e.x,e.z)))==="wood"){r.add(this.shape(He,ue.wood,0,.1,0,.62,.46,.56)),r.add(this.shape(He,ue.brass,0,.39,0,.74,.14,.64));for(let a=0;a<3;a++)r.add(this.shape(pn,ue.trunk,-.22+a*.22,.02,.3,.075,.58,.075))}else if(bn(t.tiles.get(me(e.x,e.z)))==="harbor"){r.add(this.shape(He,ue.ice,0,.1,0,.62,.4,.6)),r.add(this.shape(He,ue.wood,0,.35,0,.68,.12,.72));const a=this.shape(He,ue.ivory,0,.65,0,.07,.62,.07);r.add(a),r.add(this.shape(He,ue.ice,.16,.65,0,.26,.3,.06))}else bn(t.tiles.get(me(e.x,e.z)))==="relic"?(r.add(this.shape(He,ue.ivory,0,.12,0,.56,.42,.56)),r.add(this.shape(fn,ue.brass,0,.54,0,.65,.5,.65)),r.add(this.shape(kn,ue.ice,0,.84,0,.18,.18,.18))):(r.add(this.shape(He,ue.wood,0,.1,0,.35,.42,.34)),r.add(this.shape(fn,ue.purple,.16,.59,0,.2,.68,.2)),r.add(this.shape(fn,ue.brass,-.16,.56,.1,.15,.54,.15)));if(e.upgrade!==void 0&&(i.add(this.shape(He,e.upgrade===0?ue.brass:ue.ice,0,.22,0,.74,.08,.74)),r.add(this.shape(He,e.upgrade===0?ue.brass:ue.ice,0,.32,0,.22,.08,.22))),i.add(r),this.structures.add(i),this.structureMeshes.set(me(e.x,e.z),{model:i,head:r}),e.type!=="mine"&&t.tiles.get(me(e.x,e.z))?.h===4){const a=this.shape(He,ue.brass,0,-.01,0,.71,.06,.71);i.add(a)}}makeEnemy(e){const t=new wt,n=new wt,i=e.kind==="boss"?1.42:e.kind==="armored"?1.12:e.kind==="runner"?.87:1,r=kh(e.kind);if(r)n.add(r.model),Co(r,"Land");else{const l=e.kind==="support"?ue.ice:e.kind==="armored"?ue.coal:e.kind==="runner"?ue.orange:e.kind==="boss"?ue.midnight:ue.red;n.add(this.shape(He,l,0,.3,0,.44,.45,.51),this.shape(He,l,0,.67,.1,.36,.32,.38))}n.scale.setScalar(i),t.add(n);const a=.62*i,o=new wt;o.position.y=1.17*i,o.add(this.shape(He,ue.coal,0,0,0,a,.075,.038));const c=this.shape(He,ue.red,0,0,.029,a,.053,.04);return o.add(c),t.add(o),this.figures.add(t),{group:t,fill:c,model:n,actor:r,age:0,width:a,lastHit:0}}setPreview(e){if(this.previewIndex===e||!this.currentGame)return;const t=this.previewIndex<0;this.previewIndex=e,this.clear(this.ghost),this.candidateMeshes.length=0;const n=this.currentGame.expansions.find(c=>c.id===e);if(!n){this.userAdjusted=!1,this.zoomFactor=1,this.autoFit();return}t&&(this.userAdjusted=!1,this.zoomFactor=1);for(const c of this.currentGame.expansions){const l=c.id===e,h=c.resource?Yh[c.resource]:14016686,u=new At({color:h,transparent:!0,opacity:l?.94:.52,depthWrite:!1}),d=new At({color:16773303,transparent:!0,opacity:l?1:.85,depthWrite:!1});for(const f of c.tiles){if(f.bridge&&!l)continue;const x=this.height(f),g=this.shape(He,u,f.x,(x-.3)/2,f.z,.94,x+.3,.94);g.castShadow=!1,g.userData={candidateTile:f},this.ghost.add(g),f.bridge||this.candidateMeshes.push(g),f.resource&&this.ghost.add(this.shape(fn,d,f.x,x+.36,f.z,.46,.7,.46))}}const i=this.shape(pn,new At({color:16763047,transparent:!0,opacity:.38,depthWrite:!1}),n.landing.x,this.height(n.tiles.find(c=>c.x===n.landing.x&&c.z===n.landing.z))+1,n.landing.z,.25,2,.25);i.castShadow=!1,this.ghost.add(i);const r=n.route.map(c=>new N(c.x,this.height(n.tiles.find(l=>l.x===c.x&&l.z===c.z)??this.currentGame?.tiles.get(me(c.x,c.z)))+.12,c.z)),a=new Rn(new Ot().setFromPoints(r),new Gi({color:16768904,depthTest:!1,transparent:!0,opacity:1}));a.renderOrder=10,this.ghost.add(a);const o=new At({color:16768904,depthTest:!1,transparent:!0,opacity:1});for(const c of r){const l=this.shape(kn,o,c.x,c.y,c.z,.075,.075,.075);l.castShadow=!1,l.renderOrder=11,this.ghost.add(l)}this.userAdjusted||this.autoFit()}updateHover(e){this.hovered=e;const t=this.currentGame;if(t?.raid){const o=t.ports.find(c=>c.id===this.raidPortId);this.highlight.visible=!!o,this.rangeRing.visible=!1,o&&(this.highlight.material.color.setHex(16760678),this.highlight.position.set(o.x,this.tileHeight(o.x,o.z)+.12,o.z));return}if(!t||!t.canEdit){this.highlight.visible=!1,this.rangeRing.visible=!1;return}const n=this.facilityKey?t.towers.get(this.facilityKey):void 0;if(n&&!this.moving&&(e=t.tiles.get(me(n.x,n.z))??null),!e){this.highlight.visible=!1,this.rangeRing.visible=!1;return}const i=t.towers.get(me(e.x,e.z)),r=n?.type??i?.type??this.hoveredType,a=this.moving&&this.facilityKey?t.canMove(this.facilityKey,e.x,e.z):i?null:t.canBuild(r,e.x,e.z);if(this.highlight.visible=!0,this.highlight.material.color.setHex(a?16092014:13238149),this.highlight.position.set(e.x,this.height(e)+.034,e.z),this.rangeRing.visible=r!=="mine"&&!a,this.rangeRing.visible){const o=(n?Es(n).range:i?Es(i).range:Gn[r].range)*(e.h>=3?1.25:1);this.rangeRing.scale.set(o,o,1),this.rangeRing.position.set(e.x,this.height(e)+.055,e.z)}}hitTest(e,t){const n=this.canvas.getBoundingClientRect(),i=new ze((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.ray.setFromCamera(i,this.camera);const r=this.ray.intersectObjects(this.currentGame?.phase==="expansion"?this.candidateMeshes:this.tileMeshes,!1);if(!r.length||!this.currentGame)return null;const a=r[0].object.userData;return a.candidateTile?a.candidateTile:this.currentGame.tiles.get(me(a.tileX,a.tileZ))||null}installPointers(){this.canvas.addEventListener("pointerdown",n=>{n.button!==0&&n.pointerType==="mouse"||(this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),this.canvas.setPointerCapture(n.pointerId),this.pointers.size===1?this.pointerStart={id:n.pointerId,x:n.clientX,y:n.clientY,moved:!1}:(this.pointerStart&&(this.pointerStart.moved=!0),this.lastPinch=0))}),this.canvas.addEventListener("pointermove",n=>{const i=this.pointers.get(n.pointerId);if(i)if(this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),this.pointers.size>=2){this.panCamera((n.clientX-i.x)/2,(n.clientY-i.y)/2);const[r,a]=[...this.pointers.values()],o=Math.hypot(r.x-a.x,r.y-a.y);this.lastPinch>0&&this.setZoom(this.zoomFactor*o/this.lastPinch),this.lastPinch=o,this.userAdjusted=!0}else this.pointerStart&&Math.hypot(n.clientX-this.pointerStart.x,n.clientY-this.pointerStart.y)>8&&(this.pointerStart.moved=!0),this.pointerStart?.moved&&(n.shiftKey?(this.yaw+=(n.clientX-i.x)*.0065,this.pitch=Vh(this.pitch-(n.clientY-i.y)*.005,.58,1.28)):this.panCamera(n.clientX-i.x,n.clientY-i.y),this.userAdjusted=!0,this.updateCamera());else if(n.pointerType==="mouse"){const r=this.hitTest(n.clientX,n.clientY);r!==this.hovered&&(this.updateHover(r),this.onHover(r))}});const e=n=>{const i=this.pointerStart&&this.pointerStart.id===n.pointerId&&!this.pointerStart.moved&&this.pointers.size===1&&n.type==="pointerup";if(this.pointers.delete(n.pointerId),this.lastPinch=0,i){const r=this.hitTest(n.clientX,n.clientY);r&&this.onTileClick(r.x,r.z)}this.pointerStart?.id===n.pointerId&&(this.pointerStart=null),n.pointerType!=="mouse"&&(this.updateHover(null),this.onHover(null))};for(const n of["pointerup","pointercancel","lostpointercapture"])this.canvas.addEventListener(n,e);const t=()=>{this.pointers.clear(),this.pointerStart=null,this.lastPinch=0};window.addEventListener("blur",t),document.addEventListener("visibilitychange",()=>{document.hidden&&t()}),this.canvas.addEventListener("wheel",n=>{n.preventDefault(),this.userAdjusted=!0,this.setZoom(this.zoomFactor*Math.exp(-n.deltaY*.0013))},{passive:!1})}panCamera(e,t){const n=(this.camera.top-this.camera.bottom)/Math.max(1,this.canvas.clientHeight);this.cameraTarget.x-=e*n*Math.cos(this.yaw)+t*n*Math.sin(this.yaw)/Math.sin(this.pitch),this.cameraTarget.z+=e*n*Math.sin(this.yaw)-t*n*Math.cos(this.yaw)/Math.sin(this.pitch),this.userAdjusted=!0,this.updateCamera()}zoomIn(){this.userAdjusted=!0,this.setZoom(this.zoomFactor*1.18)}zoomOut(){this.userAdjusted=!0,this.setZoom(this.zoomFactor/1.18)}setZoom(e){this.zoomFactor=Vh(e,.55,Math.max(2.9,this.baseView/6)),this.updateCamera()}autoFit(){if(!this.currentGame)return;const e=[...this.currentGame.tiles.values(),...this.previewIndex>=0?this.currentGame.expansions.flatMap(o=>o.tiles):[]],t=Math.min(...e.map(o=>o.x)),n=Math.max(...e.map(o=>o.x)),i=Math.min(...e.map(o=>o.z)),r=Math.max(...e.map(o=>o.z)),a=Math.max(n-t,r-i);this.baseView=Math.max(7.5,a*1.25+4.5),this.cameraTarget.set((t+n)/2,0,(i+r)/2),this.updateCamera()}resetView(){this.userAdjusted=!1,this.yaw=.73,this.pitch=.99,this.zoomFactor=1,this.autoFit()}resize(){const e=this.canvas.parentElement;if(!e)return;const t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);this.renderer.setSize(t,n,!1),this.updateCamera()}updateCamera(){const e=this.canvas.parentElement;if(!e)return;const t=Math.max(1,e.clientWidth)/Math.max(1,e.clientHeight),n=t<.8?.82/t:1,i=this.currentGame?.raid?t<.8?1.02:1.08:1,r=this.baseView*n*i/this.zoomFactor;if(this.camera.left=-r*t/2,this.camera.right=r*t/2,this.camera.top=r/2,this.camera.bottom=-r/2,this.currentGame?.raid){const a=r*.12;this.camera.top-=a,this.camera.bottom-=a}if(this.previewIndex>=0&&this.currentGame?.phase==="expansion")if(e.clientWidth>=760){const a=r*t*.14;this.camera.left+=a,this.camera.right+=a}else{const a=r*.13;this.camera.top-=a,this.camera.bottom-=a}this.camera.updateProjectionMatrix(),this.camera.position.set(this.cameraTarget.x+Math.sin(this.yaw)*Math.cos(this.pitch)*30,30*Math.sin(this.pitch),this.cameraTarget.z+Math.cos(this.yaw)*Math.cos(this.pitch)*30),this.target.set(this.cameraTarget.x,.55,this.cameraTarget.z),this.camera.lookAt(this.target)}syncEnemies(e,t){const n=new Set(e.enemies.map(i=>i.id));for(const[i,r]of this.enemies)if(!n.has(i)){this.enemies.delete(i);const a=e.fx.some(o=>o.kind==="kill"&&Math.hypot(o.at.x-r.group.position.x,o.at.z-r.group.position.z)<.7);r.actor&&r.group.visible&&a?(Co(r.actor,"Death"),r.fill.parent.visible=!1,this.fallen.push({view:r,time:.8})):(na(r.actor),this.figures.remove(r.group))}for(const i of[...this.fallen])i.time-=t,i.view.actor?.mixer.update(t),i.time<=0&&(na(i.view.actor),this.figures.remove(i.view.group),this.fallen.splice(this.fallen.indexOf(i),1));for(const i of e.enemies){let r=this.enemies.get(i.id);if(r||(r=this.makeEnemy(i),this.enemies.set(i.id,r)),r.group.visible=(i.launchDelay??0)<=0,!r.group.visible)continue;r.age+=t;const a=i.path[Math.min(i.segment+1,i.path.length-1)],o=i.path[Math.min(i.segment,i.path.length-1)],c=i.resourceTarget===void 0?{x:0,z:0}:[...e.towers.values()].find(S=>S.id===i.resourceTarget)??{x:0,z:0},l=i.segment>=i.path.length-1,h=l?c.x-i.x:a.x-o.x,u=l?c.z-i.z:a.z-o.z,d=Math.atan2(h,u);let f=(i.id%3-1)*.17,x=0;if(l){const S=e.enemies.filter(A=>A.segment>=A.path.length-1&&A.x===i.x&&A.z===i.z&&A.hp>0&&(A.launchDelay??0)<=0),y=S.indexOf(i),E=Math.max(1,Math.min(3,S.length));f=(y%3-(E-1)/2)*.26,x=Math.min(.44,Math.floor(y/3)*.21)}const g=Math.cos(d)*f-Math.sin(d)*x,m=-Math.sin(d)*f-Math.cos(d)*x;if(r.group.position.set(i.x+g,this.worldHeight(i.x,i.z)+.015,i.z+m),r.group.rotation.y=d,!r.actor){const S=kh(i.kind);S&&(r.model.clear(),r.model.add(S.model),r.actor=S)}if(r.actor){const S=(i.attackPulse??0)>0?"Attack":i.attackPhase==="windup"?"Windup":i.hit>r.lastHit+.01?"Hit":(i.healPulse??0)>0?"Heal":r.age<.33?"Land":l?"Idle":"Move";r.actor.action&&r.actor.action.isRunning()&&["Hit","Attack","Heal"].includes(r.actor.state)&&(S==="Move"||S==="Idle")||Co(r.actor,S,S==="Move"?Math.max(.25,i.speed*(i.slow>0?i.slowFactor??.47:1)):1),r.actor.mixer.update(t)}r.lastHit=i.hit;const p=Math.max(.02,i.hp/i.maxHp);r.fill.scale.x=r.width*p,r.fill.position.x=-r.width*(1-p)/2,r.fill.parent.rotation.y=this.yaw-d}}syncShots(e){for(const t of e.fx){const n=new wt;if(t.kind==="strike"||t.kind==="heal"||t.kind==="disable"){const i=t.kind==="heal"?7862212:t.kind==="disable"?10414847:16766091,r=new N(t.from.x,this.worldHeight(t.from.x,t.from.z)+.55,t.from.z),a=new N(t.to.x,this.worldHeight(t.to.x,t.to.z)+.5,t.to.z);n.add(new Rn(new Ot().setFromPoints([r,a]),new Gi({color:i,transparent:!0,opacity:.85}))),n.add(this.shape(kn,new At({color:i,transparent:!0,opacity:.7,wireframe:t.kind==="disable"}),a.x,a.y,a.z,.25,.25,.25))}else if(t.kind==="shot"){const i=t.type==="cannon"?16753509:t.type==="frost"?9297919:15007665,r=new N(t.from.x,this.worldHeight(t.from.x,t.from.z)+1.05,t.from.z),a=new N(t.to.x,this.worldHeight(t.to.x,t.to.z)+.55,t.to.z),o=new Ot().setFromPoints([r,a]);n.add(new Rn(o,new Gi({color:i,transparent:!0,opacity:.9}))),n.add(this.shape(kn,new At({color:i,transparent:!0,opacity:.8}),a.x,a.y,a.z,.21,.21,.21))}else if(t.kind==="kill"||t.kind==="hit"||t.kind==="core"||t.kind==="capture"){const i=t.kind==="capture"?16765562:t.kind==="core"?16732257:t.kind==="kill"?16765594:15204285;for(let r=0;r<(t.kind==="kill"?7:3);r++){const a=r*(Math.PI*2/(t.kind==="kill"?7:3)),o=t.at.x+Math.cos(a)*.17,c=t.at.z+Math.sin(a)*.17;n.add(this.shape(He,new At({color:i,transparent:!0,opacity:.88}),o,this.worldHeight(t.at.x,t.at.z)+.5+r*.04,c,.09,.14,.09))}}else t.kind==="land"&&n.add(this.shape(kn,new At({color:12124046,wireframe:!0,transparent:!0,opacity:.8}),t.at.x,this.worldHeight(t.at.x,t.at.z)+.6,t.at.z,2,.65,2));n.children.length&&(this.particleLayer.add(n),this.flashes.push({group:n,time:0,total:t.kind==="land"?.9:t.kind==="kill"?.55:.25}))}}render(e,t){this.elapsed+=t,this.waterTime+=t;for(let n=0;n<this.waveMeshes.length;n++){const i=this.waveMeshes[n],r=Math.sin(this.waterTime*.8+n*1.7);i.scale.x=(.3+n%4*.08)*(1+r*.22)}this.syncEnemies(e,t);for(const n of e.towers.values()){const i=this.structureMeshes.get(me(n.x,n.z));if(i&&n.type==="mine"){const r=e.plundered.has(n.id)||e.raid?.captured.includes(n.id);i.head.scale.y=r?.28:1,i.head.position.y=r?.3:.75}i&&n.type!=="mine"&&(i.head.rotation.y=n.rotation,i.head.position.y=(n.deploy??0)>0?.55:.75,i.head.scale.y=(n.disabledFor??0)>0?.55:1)}this.syncShots(e);for(const n of[...this.flashes]){n.time+=t;const i=n.time/n.total;n.group.traverse(r=>{r instanceof Rt&&r.material instanceof At&&(r.material.opacity=Math.max(0,1-i)),r instanceof Rn&&r.material instanceof Gi&&(r.material.opacity=Math.max(0,1-i))}),i>=1&&(this.particleLayer.remove(n.group),n.group.traverse(r=>{(r instanceof Rt||r instanceof Rn)&&(r.geometry!==He&&r.geometry!==kn&&r.geometry.dispose(),r.material instanceof Sn&&r.material.dispose())}),this.flashes.splice(this.flashes.indexOf(n),1))}this.lighthouseLight.intensity=(e.hp<=5?7:3.5)+Math.sin(this.elapsed*3)*.8,this.renderer.render(this.scene,this.camera)}}const zu="voxel-tide-defense:base:v1";function xv(){const s=localStorage.getItem(zu);if(!s)return null;const e=JSON.parse(s);return Fc(e),e}function Vu(s){Fc(s),localStorage.setItem(zu,JSON.stringify(s))}class gv{context;bus;last=new Map;muted=!1;async unlock(){if(!this.muted)try{if(!this.context){const e=window.AudioContext;if(!e)return;this.context=new e,this.bus=this.context.createGain(),this.bus.gain.value=.18,this.bus.connect(this.context.destination)}this.context.state==="suspended"&&await this.context.resume()}catch{}}toggle(){this.muted=!this.muted,this.bus&&(this.bus.gain.value=this.muted?0:.18),this.muted||this.unlock()}tone(e,t,n,i,r){const a=this.context,o=this.bus;if(!a||!o||a.state!=="running"||this.muted)return;const c=a.currentTime,l=a.createOscillator(),h=a.createGain();l.type=r,l.frequency.setValueAtTime(e,c),l.frequency.exponentialRampToValueAtTime(Math.max(20,t),c+n),h.gain.setValueAtTime(.001,c),h.gain.linearRampToValueAtTime(i,c+.006),h.gain.exponentialRampToValueAtTime(.001,c+n),l.connect(h),h.connect(o),l.start(c),l.stop(c+n+.01)}play(e){if(!(!this.context||this.muted||this.context.state!=="running"))for(const t of e){if(t.kind==="hit")continue;const n=t.kind==="shot"?t.kind+t.type:t.kind==="strike"?t.kind+t.unit:t.kind,i=this.context.currentTime;i-(this.last.get(n)??-1)<.075||(this.last.set(n,i),t.kind==="shot"?t.type==="cannon"?this.tone(180,37,.19,.42,"triangle"):t.type==="frost"?this.tone(950,410,.13,.13,"sine"):this.tone(480,120,.075,.17,"square"):t.kind==="strike"?this.tone(t.unit==="boss"?160:360,t.unit==="boss"?35:85,t.unit==="boss"?.19:.08,.21,"triangle"):t.kind==="heal"?this.tone(660,880,.19,.12,"sine"):t.kind==="disable"?this.tone(210,75,.31,.28,"sawtooth"):t.kind==="capture"?this.tone(440,880,.23,.19,"sine"):t.kind==="core"?this.tone(95,32,.21,.25,"triangle"):t.kind==="kill"&&this.tone(210,90,.1,.11,"triangle"))}}}const _v=[{name:"沿岸警備島",description:"連射砲中心。装甲兵で突破を狙う。",types:["bolt","bolt","frost"]},{name:"砲撃要塞",description:"榴弾砲中心。分散した投入で爆風を避ける。",types:["cannon","bolt","cannon"]},{name:"氷結群島",description:"減速と砲撃の連携。複数の港を狙う。",types:["frost","cannon","bolt"]}];function Gu(s,e=3){const t=s.expeditionWins??0,n=Math.min(8,Math.floor(t/3)),i=Bt.fromBase(s).economy,r=i.budget;return _v.map((a,o)=>{const c=Math.floor(hn(s.seed,t,o,1701)*4294967296),l=new Bt(c),h=Math.min(6,2+(o===2?1:0)+Math.floor(n/2));for(;l.islandCount<h&&l.openExpansion();){const d=l.expansions.filter(x=>!x.blocked),f=(o===2&&l.islandCount>=2?d.find(x=>!x.replacePortId):void 0)??d[o%d.length];if(!f||!l.chooseExpansion(f.id))break;l.completeWave()}l.wave=1+n,l.completedWaves=n,l.expandedWave=0,l.ports.forEach(d=>d.createdWave=0),l.gold=1e5;for(const d of l.tiles.values())if(d.resource&&l.canBuild("mine",d.x,d.z)===null){l.build("mine",d.x,d.z);break}const u=Math.min(l.buildLimit-l.towers.size,(e===3?1+o*2:1+o)+Math.floor(n/2));for(let d=0;d<u;d++){const f=a.types[d%a.types.length],x=[];for(const m of l.tiles.values()){if(m.bridge||l.towers.has(me(m.x,m.z))||l.ports.some(E=>E.x===m.x&&E.z===m.z)||m.x===0&&m.z===0)continue;const S=Gn[f].range*(m.h>=3?1.25:1);let y=0;for(const E of l.paths.values())for(const A of E.slice(0,-1)){if(_n(A,m)>S)continue;const T=[...l.towers.values()].filter(R=>R.type===f&&_n(R,A)<=Es(R).range).length;y+=(1+.25*(m.h>=3?1:0))/(1+T*.3)}y+=hn(c,m.x,m.z,900+d)*.8,x.push({tile:m,score:y})}const g=x.sort((m,p)=>p.score-m.score).find(({tile:m})=>!l.canBuild(f,m.x,m.z))?.tile;if(!g||!l.build(f,g.x,g.z))break;n>=3&&d<Math.floor(n/3)&&l.upgrade(me(g.x,g.z),o===1?1:0)}return l.gold=0,l.hp=18,l.expeditionWins=0,l.expansionPermits=0,{id:[s.seed,t,o].join(":"),rulesVersion:e,name:a.name,description:a.description,rank:o+1,reward:90+70*o+25*n+i.income,budget:r,base:l.toBase()}})}function vv(s,e){if(e.rulesVersion!==(s.rulesVersion??1)||e.targetId!==s.id||!Number.isSafeInteger(e.endStep)||e.endStep<0||e.endStep>4e4||!Array.isArray(e.commands)||e.commands.length>s.budget)return null;const t=Bt.raidFrom(s.base,{budget:s.budget,rulesVersion:e.rulesVersion});let n=0;for(;t.raid.step<=e.endStep;){const i=t.raid.step;for(;n<e.commands.length&&e.commands[n].step===i;){const r=e.commands[n++];if(!t.deployRaid(r.kind,r.portId,r.resourceTarget))return null}if(n<e.commands.length&&e.commands[n].step<i)return null;if(i===e.endStep||t.phase!=="combat")break;t.tick(Xi)}return n===e.commands.length&&t.raid.step===e.endStep?t:null}function bv(s,e){return!s.raid||s.raid.rulesVersion===1?0:Math.min(Math.floor(e.reward*.35),[...s.towers.values()].filter(t=>t.type==="mine"&&s.raid.captured.includes(t.id)).reduce((t,n)=>t+jh(s.tiles.get(me(n.x,n.z))),0))}function Mv(s,e,t,n=!0){if(t.raid?.result==="win")return s.gold+=e.reward,s.expeditionWins++,s.partialClaims=[],n&&s.expansionPermits++,e.reward;const r=bv(t,e);if(!r)return 0;if(!e.id.startsWith("p:")){if(s.partialClaims.includes(e.id)||s.partialClaims.length>=3)return 0;s.partialClaims.push(e.id)}return s.gold+=r,r}function yv(s,e){if(s.phase!=="prepare"||s.raid)return 0;const t=Gu(s.toBase(),e.rulesVersion===3?3:2).find(i=>i.id===e.targetId);if(!t)return 0;const n=vv(t,e);return n?Mv(s,t,n):0}const Sv="https://voxel-tide-defense-preview.kikutadev.workers.dev",ia="voxel-tide-defense:online-code:v1",sa="voxel-tide-defense:online-finish:v1";class gr{token;constructor(e=localStorage.getItem(ia)??""){this.token=e}get hasToken(){return/^[a-f0-9]{64}$/.test(this.token)}static newCode(){return Array.from(crypto.getRandomValues(new Uint8Array(32)),e=>e.toString(16).padStart(2,"0")).join("")}async call(e,t){const n=await fetch(Sv+e,{method:t===void 0?"GET":"POST",headers:{Authorization:"Bearer "+this.token,...t===void 0?{}:{"Content-Type":"application/json"}},body:t===void 0?void 0:JSON.stringify(t),signal:AbortSignal.timeout(15e3)}),i=await n.json();if(!n.ok)throw Error(i.error??"通信に失敗しました");return i}async connect(e){if(e!==void 0&&(this.token=e.trim().toLowerCase()),!this.hasToken)return this.token=gr.newCode(),localStorage.setItem(ia,this.token),this.call("/register",{});const t=await this.call("/profile");return localStorage.setItem(ia,this.token),t}async register(){this.hasToken||(this.token=gr.newCode());const e=await this.call("/register",{});return localStorage.setItem(ia,this.token),e}edit(e,t){return this.call("/edit",{revision:e,action:t})}targets(){return this.call("/targets")}start(e,t){return this.call("/start",{revision:e,targetId:t})}async finish(e,t){const n={id:e,...t?{record:t}:{abandon:!0}};localStorage.setItem(sa,JSON.stringify({token:this.token,data:n}));const i=await this.call("/finish",n);return localStorage.removeItem(sa),i}async recoverPending(){try{const e=localStorage.getItem(sa);if(!e)return null;const t=JSON.parse(e);if(t.token!==this.token)return null;const n=await this.call("/finish",t.data);return localStorage.removeItem(sa),n.profile}catch(e){throw e}}history(){return this.call("/history")}replay(e){return this.call("/replay/"+encodeURIComponent(e))}ranking(){return this.call("/ranking")}}const wc=8,Hu="voxel-tide-defense:replays:v1";function Wu(){try{const s=JSON.parse(localStorage.getItem(Hu)??"[]");return Array.isArray(s)?s.slice(0,12):[]}catch{return[]}}function Ev(s){try{localStorage.setItem(Hu,JSON.stringify([s,...Wu().filter(e=>e.id!==s.id)].slice(0,12)))}catch{}}class Tv{game;cursor=0;entry;constructor(e){this.entry=e,this.game=Bt.raidFrom(e.target.base,{budget:e.target.budget,rulesVersion:e.record.rulesVersion})}tick(){const{record:e}=this.entry,t=this.game,n=t.raid.step;if(t.phase==="combat"){for(;this.cursor<e.commands.length&&e.commands[this.cursor].step===n;){const i=e.commands[this.cursor++];if(!t.deployRaid(i.kind,i.portId,i.resourceTarget)){t.endRaid();return}}if(n>=e.endStep){t.endRaid();return}if(t.tick(Xi),t.raid.step>=e.endStep&&t.phase==="combat"){for(;this.cursor<e.commands.length&&e.commands[this.cursor].step===e.endStep;){const i=e.commands[this.cursor++];t.deployRaid(i.kind,i.portId,i.resourceTarget)}t.endRaid()}}}}const H=s=>{const e=document.getElementById(s);if(!e)throw new Error("Missing UI: "+s);return e},Ac=()=>Math.floor(Math.random()*2**31),Rc=new URLSearchParams(location.search).get("seed"),_r=!!(Rc&&/^\d+$/.test(Rc));let D,Ri="",Ba=!1;try{const s=_r?null:xv();D=s?Bt.fromBase(s):new Bt(_r?Number(Rc):Ac())}catch{D=new Bt(Ac()),Ri="保存データを読み込めません。新規作成まで上書きしません",Ba=!0}let Ns=D.toBase(),Ct=null,fa=null,Ne=null,Vt=null,Fn=null,ut=!1,pa=[],_s=[],Ft=null,Ei=null,xn=null,ra=[],Pt=null,Dn=!1,Wi=0,Ss=0;function Ci(){if(!(Ct||D.phase!=="prepare"||Ne)&&(Ns=D.toBase(),!(_r||Ba)))try{Vu(Ns),Ri=""}catch{Ri="端末への保存に失敗しました"}}let wa="bolt",Ht=null,Xn=!1,_t=!1,Us=0,Xu=-1,or=0,Cc=0,Gh="",ka=0,Aa=0,za=!1,vr=performance.now();const Hh=H("hp"),Wh=H("gold"),aa=H("wave"),Io=H("tooltip"),wv=H("status-label"),Av=H("wave-progress"),al=H("start-wave"),ma=H("expand-btn"),Rv=H("territory-info"),br=H("speed-btn"),Ra=H("expand-panel"),Ic=H("expand-choices"),Fs=H("intro-tip"),Mr=H("wave-banner"),ol=H("overlay"),xa=H("overlay-label"),vs=H("overlay-title"),qi=H("overlay-description"),sn=H("overlay-primary"),Mn=H("overlay-secondary"),ga=H("pause-btn"),Ca=H("build-bar"),Cv=H("facility-panel"),Pc=H("facility-move"),qu=H("facility-sell"),Yu=[H("facility-upgrade0"),H("facility-upgrade1")];function Iv(s,e=!1){Vt=s,D=Bt.fromBase(s.base),lt.rebuild(D,e)}function Jt(s){ut=s,H("field").classList.toggle("network-busy",s)}function hi(s){D.say(s),it()}const Kn=s=>s instanceof Error?s.message:"通信に失敗しました";async function yr(s,e,t,n=!1){if(!ut){if(!Ne||!Vt){e()&&(Ci(),t()),it();return}Jt(!0);try{const i=await Ne.edit(Vt.revision,s);Vt=i,D=Bt.fromBase(i.base),t(),n&&lt.resetView()}catch(i){hi(Kn(i))}finally{Jt(!1),it()}}}const lt=new mv(H("scene"),(s,e)=>{if(_t||ut||Ft)return;if(D.raid){const n=D.ports.find(r=>r.x===s&&r.z===e);if(n){Ai.value=String(n.id),lt.selectRaidPort(n.id);return}const i=D.towers.get(me(s,e));i&&(i.type==="mine"&&D.raid.rulesVersion>=2||D.raid.rulesVersion===3)&&!D.raid.captured.includes(i.id)&&(gn.value=String(i.id),it());return}if(D.phase==="expansion"){const n=D.expansions.find(i=>i.tiles.some(r=>!r.bridge&&r.x===s&&r.z===e));n&&Lc(n.id);return}if(!D.canEdit)return;const t=me(s,e);if(Xn&&Ht){const n=Ht,i=D.canMove(n,s,e);if(i){hi(i);return}yr({kind:"move",from:n,x:s,z:e},()=>D.move(n,s,e),()=>{Ht=t,Xn=!1,lt.rebuild(D),lt.selectFacility(Ht,!1)})}else if(D.towers.has(t))Ht=t,Xn=!1,lt.selectFacility(t,!1),Fs.hidden=!0;else if(Ht)fi();else{fi();const n=D.tiles.get(t);if(n?.resource&&wa!=="mine"){Ar("mine"),hi(Ia(n.resource,n.richness));return}const i=wa,r=D.canBuild(i,s,e);if(r){hi(r);return}yr({kind:"build",type:i,x:s,z:e},()=>D.build(i,s,e),()=>{lt.rebuild(D),Fs.hidden=!0})}it()},s=>{});function fi(){Ht=null,Xn=!1,lt.selectFacility(null,!1)}function Pv(){const s=Ht?D.towers.get(Ht):void 0;if(Cv.hidden=!s||!D.canEdit,!s||!D.canEdit)return;const e=Es(s),t=D.tiles.get(me(s.x,s.z)),n=bn(t);H("facility-name").textContent=s.upgrade===void 0?s.type==="mine"&&n?Uc[n]:Gn[s.type].name:cr[s.type][s.upgrade].name,H("facility-stats").textContent=D.plundered.has(s.id)?"襲撃済み・今波の生産停止":s.type==="mine"?n==="ore"?"収入 +"+Math.round(e.income*(15+15*(t?.richness??2))/45)+(Ne?"G/勝利":"G/波"):Ia(n,t?.richness):"威力 "+e.damage+" / 射程 "+(e.range*(D.tiles.get(me(s.x,s.z)).h>=3?1.25:1)).toFixed(1)+((s.deploy??0)>0&&D.phase==="combat"?" / 設置 "+(s.deploy??0).toFixed(1)+"秒":""),Pc.textContent=Xn?"移動先を選択中（取消）":"移動 "+(D.moveCost(s)?D.moveCost(s)+"G":"無料"),Pc.disabled=!Xn&&D.gold<D.moveCost(s),qu.textContent="売却 +"+D.sellValue(s)+"G",Yu.forEach((i,r)=>{i.hidden=s.upgrade!==void 0||Xn||s.type==="mine"&&n!=="ore";const a=cr[s.type][r];if(!i.hidden){i.textContent=a.name+" "+a.cost+"G · "+a.detail;const o=D.upgradeError(s,r);i.disabled=!!o,i.title=o??"",o&&o.includes("研究所")&&(i.textContent=a.name+" · 研究所で解放")}})}Pc.onclick=()=>{ut||!Ht||!D.canEdit||(Xn=!Xn,lt.selectFacility(Ht,Xn),it())};qu.onclick=()=>{if(Ht&&!ut){const s=Ht;yr({kind:"sell",from:s},()=>D.sell(s),()=>{fi(),lt.rebuild(D)})}};Yu.forEach((s,e)=>s.onclick=()=>{if(Ht&&!ut){const t=Ht,n=e;yr({kind:"upgrade",from:t,branch:n},()=>D.upgrade(t,n),()=>{lt.rebuild(D),lt.selectFacility(Ht,!1)})}});H("facility-close").onclick=()=>{fi(),it()};function Ar(s){fi(),wa=s;for(const e of Ca.querySelectorAll("[data-tool]"))e.classList.toggle("selected",e.dataset.tool===s),e.setAttribute("aria-pressed",String(e.dataset.tool===s));lt.setSelected(s),it()}function Ku(s,e=2.5){Mr.textContent=s,ka=Aa+e,Mr.classList.add("visible")}function Lc(s){Xu=s;for(const n of Ic.querySelectorAll(".expand-choice")){const i=Number(n.dataset.expansion)===s;n.classList.toggle("selected",i),n.setAttribute("aria-pressed",String(i))}const e=D.expansions.find(n=>n.id===s),t=H("confirm-expand");if(t.disabled=!e||!!e.blocked,e&&(t.textContent=e.blocked?"接続先の施設を移動してください":e.title+"をつなぐ"),e){const n=Kh([...D.tiles.values(),...e.tiles],D.bonusSlots+(e.reward==="permit"?1:0));H("expand-detail").textContent=Ia(e.resource,e.richness)+" · 建設枠 "+D.buildLimit+"→"+Math.max(n,D.towers.size)+" · 資材 +"+e.bonus+"G"}lt.setPreview(s)}function Lv(){Ic.replaceChildren();for(const s of D.expansions){const e=document.createElement("button");e.type="button",e.className="expand-choice",e.dataset.expansion=String(s.id);const t=s.resource==="ore"?"◆":s.resource==="wood"?"♣":s.resource==="harbor"?"⚓":s.resource==="relic"?"▣":"▲",n=s.center,i=(n.z<0?"北":n.z>0?"南":"")+(n.x<0?"西":n.x>0?"東":""),r=s.resource?"#"+Yh[s.resource].toString(16):"#b9d49a";e.innerHTML='<span class="choice-icon" style="color:'+r+'">'+t+"</span><strong>"+i+"・"+s.title+"</strong><small>"+Ia(s.resource,s.richness)+'</small><span class="warning">'+(s.blocked?"接続不可":s.replacePortId?"港を移動":"侵入口+1")+" · 経路 "+s.distance+"マス</span>",e.addEventListener("click",()=>Lc(s.id)),Ic.appendChild(e)}Lc(D.expansions[0]?.id??-1)}const Os=new gv;H("sound-btn").onclick=()=>{Os.toggle(),H("sound-btn").textContent=Os.muted?"音 OFF":"音 ON"};document.addEventListener("pointerdown",()=>{Os.muted||Os.unlock()},{passive:!0});const Dv=H("raid-panel"),Ai=H("raid-port"),gn=H("raid-objective"),ju=new Map;for(const s of Object.keys(Ti)){const e=document.createElement("button"),t=document.createElement("img");t.src="./units/"+s+".png",t.alt="";const n=document.createElement("span");n.textContent=vn[s].name;const i=document.createElement("small");i.textContent=Ti[s]+"pt",e.append(t,n,i),e.title=vn[s].role,e.setAttribute("aria-label",vn[s].name+" "+Ti[s]+"pt："+vn[s].role),e.addEventListener("pointerenter",()=>{H("unit-role").textContent=vn[s].name+"："+e.title}),e.onclick=()=>{H("unit-role").textContent=vn[s].name+"："+e.title,!_t&&!Ft&&D.deployRaid(s,Number(Ai.value),gn.value?Number(gn.value):void 0)&&it()},H("raid-troops").append(e),ju.set(s,e)}Ai.onchange=()=>{lt.selectRaidPort(Number(Ai.value)),it()};gn.onchange=()=>it();H("raid-end").onclick=()=>{D.endRaid(),it()};const Nv=H("scout-panel");function $u(){Ai.replaceChildren(...D.ports.map((s,e)=>new Option("上陸地点 "+(e+1),String(s.id)))),lt.selectRaidPort(D.ports[0].id),H("unit-role").textContent="",gn.replaceChildren(new Option("灯台",""),...[...D.towers.values()].filter(s=>s.type==="mine"&&(D.raid?.rulesVersion??1)>=2).map(s=>new Option(Uc[bn(D.tiles.get(me(s.x,s.z)))]+" "+s.id+" (+"+jh(D.tiles.get(me(s.x,s.z)))+"G)",String(s.id))),...D.raid?.rulesVersion===3?[...D.towers.values()].filter(s=>s.type!=="mine").map(s=>new Option(Gn[s.type].name+" "+s.id+"（破城機）",String(s.id))):[])}function Dc(s){if(!Ct||ut)return;Pt=s,Dn=!0,Wi=0,xn=null;const e=s?.base??Ct.toBase();Ii(Bt.raidFrom(e,{budget:s?.budget,scout:!0,rulesVersion:s?.rulesVersion??3})),Ei=s??{id:"self",name:"自分の基地",description:"",rank:0,reward:0,budget:D.raid.initialBudget,base:e,rulesVersion:3},$u(),H("scout-info").textContent=s?s.description+"　"+D.islandCount+"島 / 防衛 "+[...D.towers.values()].filter(t=>t.type!=="mine").length+"基 / 上陸 "+D.ports.length+"か所　部隊 "+s.budget+"pt":"自分の基地のコピーを攻撃します。報酬なし。",H("scout-start").textContent=s?"侵攻開始 · "+s.reward+"G":"テスト開始";for(const t of H("scout-targets").querySelectorAll("button"))t.classList.toggle("selected",t.dataset.target===s?.id);it()}function cl(s,e=!1){ra=s,H("cpu-tab").classList.toggle("selected",!e),H("pvp-tab").classList.toggle("selected",e);const t=ra.map(n=>{const i=document.createElement("button");i.dataset.target=n.id;const r=document.createElement("b");r.textContent=n.name;const a=document.createElement("small");return a.textContent=(e?"対人":["","初級","中級","上級"][n.rank])+" · "+n.reward+"G",i.append(r,a),i.onclick=()=>Dc(n),i});H("scout-targets").replaceChildren(...t),ra.length&&Dc(ra[0])}H("cpu-tab").onclick=()=>cl(pa);H("pvp-tab").onclick=()=>{_s.length?cl(_s,!0):H("scout-info").textContent=Ct&&Ct.towers.size===0?"防衛施設を建てると対人戦に参加できます。":"現在、近いレート・発展度の対戦相手がいません。CPU遠征を選べます。"};H("raid-btn").onclick=async()=>{if(!(D.phase!=="prepare"||Ct||ut)){if(Ne){Jt(!0);try{const s=await Ne.targets();pa=s.cpu,_s=s.players,Vt&&(Vt.rating=s.rating)}catch(s){hi(Kn(s));return}finally{Jt(!1)}}else Ci(),pa=Gu(Ns),_s=[];Ct=D,H("scout-tabs").hidden=!Ne,H("pvp-tab").textContent="対人 ("+_s.length+")",H("pvp-tab").disabled=!1,H("pvp-tab").title=_s.length?"":"同程度の防衛力・レートの相手がいません（防衛施設が必要）",cl(pa)}};H("scout-test").onclick=()=>Dc(null);H("scout-home").onclick=()=>ji();H("scout-start").onclick=async()=>{if(!(!Dn||ut)){if(Ne&&Vt&&Pt){Jt(!0);try{Fn=await Ne.start(Vt.revision,Pt.id),Pt=Fn.target,Ei=Pt,Vt.rating=Fn.rating,Ii(Bt.raidFrom(Pt.base,{budget:Pt.budget,scout:!0,rulesVersion:Pt.rulesVersion??1})),$u()}catch(s){hi(Kn(s));return}finally{Jt(!1)}}D.startRaid()&&(Dn=!1,Ss=0,vr=performance.now(),it())}};H("raid-speed").onclick=()=>{D.speed=D.speed===1?2:1,H("raid-speed").textContent="×"+D.speed};function ji(){if(!Ct||ut)return;if(Fn&&D.phase==="combat"){D.endRaid(),it();return}const s=Ct;Ct=null,Pt=null,Dn=!1,Ft=null,Ei=null,xn=null,Fn=null,Ii(s),Ci()}function Uv(){return!D.raid||!Ei?null:{id:crypto.randomUUID(),created:Math.floor(Date.now()/1e3),target:Ei,record:{rulesVersion:D.raid.rulesVersion,targetId:Ei.id,commands:D.raid.commands.map(s=>({...s})),endStep:D.raid.step},hp:D.hp,win:D.raid.result==="win",reward:0,direction:Pt?"attack":"test",name:Ei.name}}async function Zu(){if(!(!Ne||!Fn||!xn||!Ct||ut)){Jt(!0),sn.disabled=!0,Mn.hidden=!0,qi.textContent="戦果を検証しています…";try{const s=await Ne.finish(Fn.id,xn.record);Vt=s.profile,Ct=Bt.fromBase(s.profile.base),Fn=null,Wi=s.reward,vs.textContent=s.win?"灯台を攻略！":s.reward?"資源を攻略！":"侵攻失敗",qi.textContent="灯台へのダメージ "+(18-s.hp)+" / 18。"+(s.reward?"獲得 "+s.reward+"G"+(s.win?"・追加開拓権（上限まで）":"・資源攻略"):"報酬なし")+"　レート "+Vt.rating,sn.textContent="自分の基地に戻る",sn.onclick=ji}catch(s){qi.textContent="戦果未確定："+Kn(s),sn.textContent="再送",sn.onclick=()=>{Zu()},Mn.hidden=!1,Mn.textContent="オフラインに戻る",Mn.onclick=nd}finally{sn.disabled=!1,Jt(!1),it()}}}function Ju(){if(za=!0,_t=!1,ol.hidden=!1,D.raid){if(Ft){xa.textContent="リプレイ",vs.textContent=Ft.entry.win?"灯台陥落":"防衛成功",qi.textContent="灯台へのダメージ "+(18-D.hp)+" / 18",sn.textContent="基地に戻る",sn.onclick=ji,Mn.hidden=!0;return}if(xn=Uv(),xa.textContent=Pt?Pt.name:"侵攻テスト",vs.textContent=D.raid.result==="win"?"灯台を攻略！":"侵攻失敗",sn.textContent="自分の基地に戻る",sn.onclick=ji,Mn.hidden=!0,Ne&&Fn&&xn){Zu();return}if(Pt&&Ct&&!Ne&&xn&&(Wi=yv(Ct,xn.record),Ns=Ct.toBase(),!_r&&!Ba))try{Vu(Ns),Ri=""}catch{Ri="端末への保存に失敗しました"}xn&&!Ne&&!_r&&(xn.reward=Wi,Ev(xn)),Wi&&D.raid.result!=="win"&&(vs.textContent="資源を攻略！"),qi.textContent="灯台へのダメージ "+(18-D.hp)+" / 18。"+(Pt?Wi?"獲得 "+Wi+"G"+(D.raid.result==="win"?"・追加開拓権 1枚":"・資源攻略"):D.raid.result==="win"?"戦果の検証に失敗：報酬未確定":"報酬なし":"基地と資金は変更されません。");return}xa.textContent="防衛結果",vs.textContent="灯台が陥落",qi.textContent="第"+D.wave+"波で防衛失敗。襲撃前の島・施設・資金に戻して再挑戦できます。",sn.textContent="基地に戻る",Mn.hidden=!1,Mn.textContent="新しい島で最初から",sn.onclick=Qu,Mn.onclick=ed}function Va(){if(D.phase==="gameover"){za||Ju();return}ol.hidden=!_t,_t&&(xa.textContent=D.raid?Pt?Pt.name:"侵攻テスト":"防衛",vs.textContent="一時停止",qi.textContent="敵と砲台の動きは止まっています。",sn.textContent="再開する ▶",Mn.hidden=!!Ne&&!Ct,Mn.textContent=Ct?"自分の基地に戻る":D.phase==="combat"?"襲撃前の基地に戻る":"新しい島で最初から",sn.onclick=()=>{_t=!1,Va()},Mn.onclick=Ct?ji:D.phase==="combat"?Qu:ed)}function Qu(){Ii(Bt.fromBase(Ns))}function ed(){Ne||window.confirm("現在の島・施設・進行を破棄して、新しい島を作りますか？")&&(Ba=!1,Ii(new Bt(Ac())),Ci())}function Ii(s){D=s,fi(),wa="bolt",_t=!1,Us=0,or=D.completedWaves,Cc=0,za=!1,Ss=0,vr=performance.now(),Ra.hidden=!0,ol.hidden=!0,Fs.hidden=!0,Mr.classList.remove("visible"),ka=0,br.textContent="速度 ×1",lt.selectRaidPort(null),lt.rebuild(D,!0),lt.resetView(),Ar("bolt"),it()}function it(){const s=D.raid;if(Nv.hidden=!Dn,Dv.hidden=!s||Dn||!!Ft,H("replay-panel").hidden=!Ft,Ft&&(H("replay-time").textContent="リプレイ "+Math.floor(D.raid.step*Xi)+" / "+Math.ceil(Ft.entry.record.endStep*Xi)+"秒",H("replay-speed").textContent="×"+D.speed,H("replay-pause").textContent=_t?"再開":"一時停止"),H("online-nav").hidden=!!s||D.phase!=="prepare",H("online-toggle").textContent=Ne?"オフラインへ":"オンライン",H("ranking-btn").hidden=!Ne,H("code-btn").hidden=!Ne,H("sync-btn").hidden=!Ne,Ne&&Vt?aa.parentElement.querySelector("small").textContent="レート":aa.parentElement.querySelector("small").textContent="襲撃",H("raid-speed").textContent="×"+D.speed,H("sound-btn").setAttribute("aria-pressed",String(!Os.muted)),H("battle-controls").hidden=!!s,Ca.hidden=!!s,H("raid-btn").hidden=D.phase!=="prepare"||!!s,H("save-state").hidden=!Ri,H("save-state").textContent=Ri,s){for(const r of gn.options)r.value&&(r.disabled=s.captured.includes(Number(r.value))||[...D.towers.values()].some(a=>a.id===Number(r.value)&&(a.disabledFor??0)>0));gn.value&&gn.selectedOptions[0]?.disabled&&(gn.value="");const t=gn.value?Number(gn.value):void 0,n=t===void 0||!s.captured.includes(t)&&D.raidRoute(Number(Ai.value),t).length>=(s.rulesVersion===3?1:2);!Ft&&Number(Ai.value)>0&&lt.selectRaidRoute(Number(Ai.value),t),gn.title=n?"投入する部隊の攻撃目標":"選んだ港から目標への経路がありません",H("raid-budget").textContent="残り "+s.budget+"pt · "+Math.ceil(s.remaining)+"秒"+(s.captured.length?" · 資源 "+s.captured.length+"か所":"");const i=[...D.towers.values()].find(r=>r.id===t);for(const[r,a]of ju)a.title=s.rulesVersion===3?vn[r].role:{raider:"通常攻撃",runner:"高速移動",armored:"装甲",support:"周囲を回復",boss:"大型・高耐久"}[r],a.setAttribute("aria-label",vn[r].name+" "+Ti[r]+"pt："+a.title),a.disabled=i&&i.type!=="mine"&&r!=="boss"||!n||s.budget<Ti[r]||D.phase!=="combat"}Hh.parentElement.querySelector("small").textContent=s?"敵灯台":"灯台",Wh.parentElement.hidden=!!s,aa.parentElement.hidden=!!s,Hh.innerHTML=String(D.hp)+" <span>♥</span>",Wh.innerHTML=String(D.gold)+" <span>G</span>",aa.textContent=Ne&&Vt?String(Vt.rating):String(D.wave).padStart(2,"0"),wv.textContent=Ft?"リプレイ":s?Dn?"偵察":Pt?Pt.name:"侵攻テスト":D.phase==="combat"?"襲撃中":D.phase==="expansion"?"領土の拡張":D.phase==="gameover"?"防衛失敗":Ne?"オンライン基地":"防衛準備",Av.textContent=!s&&D.phase==="combat"?D.waveSpawned+" / "+D.waveTotal:"",Rv.textContent=s?Dn?"防衛配置を確認":"灯台・資源施設を攻略":D.islandCount+"島　施設 "+D.towers.size+"/"+D.buildLimit+"　収入 +"+D.income+(Ne?"G/勝利":"G/波");const e=D.economy;H("economy-info").textContent=s?"":"遠征 "+e.budget+"pt"+(e.discount?" · 建設−"+e.discount+"%":"")+(e.research?" · 研究済":"");for(const t of Ca.querySelectorAll("[data-tool]")){const n=t.dataset.tool,i=D.buildCost(n);t.querySelector("small").textContent=i+" G",t.classList.toggle("unaffordable",D.gold<i||D.towers.size>=D.buildLimit),t.disabled=!D.canEdit}Pv(),Cc!==D.wave&&(Cc=D.wave,Gh=Object.entries(D.forecast).filter(([,t])=>t>0).map(([t,n])=>ud[t]+" "+n).join("  ·  ")),H("enemy-forecast").textContent=(D.phase==="combat"?"襲撃編成 ":"次の襲撃 ")+Gh,H("enemy-forecast").hidden=!!s||!!Ne||D.phase==="gameover"||D.phase==="expansion",al.hidden=!!Ne||D.phase!=="prepare",ma.hidden=D.phase!=="prepare",ma.disabled=!D.canExpand||ut||!!Ne&&D.islandCount>=wc,ma.textContent=Ne&&D.islandCount>=wc?"開拓上限":D.canExpand?D.expandedWave===D.wave?"海域を開拓（権利"+D.expansionPermits+"）":"海域を開拓（無料）":"追加済み",br.hidden=D.phase!=="combat",ga.disabled=ut,ga.textContent=_t?"▶":"Ⅱ",ga.setAttribute("aria-label",_t?"再開":"一時停止"),D.phase==="expansion"&&Us!==D.wave&&(Us=D.wave,Lv(),Ra.hidden=!1,Fs.hidden=!0,Mr.classList.remove("visible")),D.phase!=="expansion"&&(Ra.hidden=!0),D.completedWaves>or&&(or=D.completedWaves,Ci(),Ku("第"+or+"波 防衛成功",2.1)),D.phase==="gameover"&&!za&&Ju(),D.messageTime>0&&D.phase!=="gameover"&&!(ka>Aa&&D.message.includes("接近中"))?(Io.textContent=D.message,Io.classList.add("show")):Io.classList.remove("show")}const Ji=s=>H(s);for(const s of document.querySelectorAll("[data-close]"))s.onclick=()=>Ji(s.dataset.close).close();H("online-toggle").onclick=()=>{if(ut||D.phase!=="prepare")return;if(Ne){nd();return}H("online-error").textContent="";const s=H("online-code");s.value="",H("online-connect").disabled=!1,Ji("online-dialog").showModal()};async function td(s){if(ut)return;const e=H("online-code").value.trim();if(!s&&e&&!/^[a-fA-F0-9]{64}$/.test(e)){H("online-error").textContent="復帰コードは64文字です";return}const t=new gr;if(!s&&!e&&!t.hasToken){H("online-error").textContent="新しい基地を作るか、復帰コードを入力してください";return}if(s&&t.hasToken&&!window.confirm("保存済みの復帰コードがあります。新規基地に切り替えますか？"))return;Jt(!0);const n=[H("online-create"),H("online-connect")];n.forEach(i=>i.disabled=!0),H("online-error").textContent="接続中…";try{s&&(t.token=gr.newCode());let i=s?await t.register():await t.connect(e||void 0);const r=await t.recoverPending();if(r&&(i={...r,active:null}),i.active){if(!window.confirm("未完了の侵攻があります。中断（敗北扱い）として基地に戻りますか？")){H("online-error").textContent="未完了の侵攻があります";return}i=(await t.finish(i.active.id)).profile}fa=D,Ne=t,Vt=i,Ji("online-dialog").close(),Ii(Bt.fromBase(i.base)),Ri=""}catch(i){H("online-error").textContent=Kn(i)}finally{Jt(!1),n.forEach(i=>i.disabled=!1),it()}}H("online-create").onclick=()=>{td(!0)};H("online-connect").onclick=()=>{td(!1)};function nd(){if(!fa||ut)return;const s=fa;fa=null,Ne=null,Vt=null,Fn=null,Ct=null,Ft=null,Dn=!1,Pt=null,Ei=null,xn=null,Ii(s),Ci(),it()}H("sync-btn").onclick=async()=>{if(!(!Ne||ut)){Jt(!0);try{const s=await Ne.call("/profile");if(s.active){hi("進行中の侵攻があります。再接続してください");return}fi(),Iv(s,!0),hi("同期しました")}catch(s){hi(Kn(s))}finally{Jt(!1),it()}}};H("code-btn").onclick=()=>{Ne&&(H("recovery-code").value=Ne.token,H("copy-code").textContent="コピー",Ji("code-dialog").showModal())};H("copy-code").onclick=async()=>{if(Ne)try{await navigator.clipboard.writeText(Ne.token),H("copy-code").textContent="コピー済み"}catch{H("recovery-code").select(),H("copy-code").textContent="選択済み"}};function Xh(s){if(!(ut||Ct||D.phase!=="prepare"))try{const e=new Tv(s);Ji("history-dialog").close(),Ct=D,Pt=null,Dn=!1,Ft=e,Fn=null,Ii(e.game),it()}catch(e){H("history-list").textContent=Kn(e)}}H("replay-exit").onclick=ji;H("replay-pause").onclick=()=>{_t=!_t,it()};H("replay-speed").onclick=()=>{D.speed=D.speed===1?2:D.speed===2?4:1,it()};function Nc(s,e,t,n,i){const r=document.createElement(i?"button":"div");r.className="history-row "+(n?"win":"loss");const a=document.createElement("span"),o=document.createElement("small"),c=document.createElement("strong");return a.textContent=s,o.textContent=e,a.append(o),c.textContent=t,r.append(a,c),i&&(r.onclick=i),r}H("history-btn").onclick=async()=>{if(ut||D.phase!=="prepare")return;const s=H("history-list");if(H("history-title").textContent="戦闘履歴",s.textContent="読み込み中…",Ji("history-dialog").showModal(),!Ne){const n=Wu();s.replaceChildren(...n.map(i=>Nc((i.direction==="test"?"自己テスト":"攻撃")+" · "+i.name,new Date(i.created*1e3).toLocaleDateString()+" · 灯台 "+(18-i.hp)+"/18",i.win?"攻略成功":"防衛成功",i.win,()=>Xh(i)))),n.length||(s.textContent="まだ戦闘履歴がありません");return}const e=Ne,t=Vt?.id;try{const{entries:n}=await e.history();if(Ne!==e)return;s.replaceChildren(...n.map(i=>{const r=i.defender===t,a=r?!i.win:!!i.win,o=r?i.attacker:i.defender;return Nc((r?"防衛":"攻撃")+" · "+(o?"島 "+o.slice(0,6).toUpperCase():"CPU"),new Date(i.created*1e3).toLocaleDateString()+" · 灯台 "+(18-i.hp)+"/18",a?"勝利":"敗北",a,async()=>{if(!ut){Jt(!0);try{const c=await e.replay(i.id);if(Ne!==e)return;Jt(!1),Xh({id:i.id,created:i.created,target:c.target,record:c.record,hp:i.hp,win:!!i.win,reward:i.reward,direction:r?"defense":"attack",name:c.target.name})}catch(c){s.textContent=Kn(c)}finally{Jt(!1)}}})})),n.length||(s.textContent="まだ戦闘履歴がありません")}catch(n){s.textContent=Kn(n)}};H("ranking-btn").onclick=async()=>{if(!Ne||ut)return;const s=Ne,e=H("history-list");H("history-title").textContent="レーティング 上位20人",e.textContent="読み込み中…",Ji("history-dialog").showModal();try{const{entries:t}=await s.ranking();if(Ne!==s)return;e.replaceChildren(...t.map((n,i)=>Nc(i+1+"位 · 島 "+n.id.slice(0,6).toUpperCase()+(n.id===Vt?.id?"（自分）":""),n.strength+"島 · 防衛 "+n.defense_count+"基",String(n.rating),!0))),t.length||(e.textContent="登録された基地はありません")}catch(t){e.textContent=Kn(t)}};Ca.addEventListener("click",s=>{const e=s.target.closest("[data-tool]");e&&!e.disabled&&Ar(e.dataset.tool)});ma.addEventListener("click",()=>{ut||Ne&&D.islandCount>=wc||!D.openExpansion()||(fi(),Us=0,it())});H("confirm-expand").addEventListener("click",()=>{const s=D.expansions.find(e=>e.id===Xu);!s||s.blocked||ut||yr({kind:"expand",candidate:s.candidateKey},()=>D.chooseExpansion(s.id),()=>{Us=0,lt.rebuild(D,!0),lt.setPreview(-1),Ra.hidden=!0},!0)});H("close-expand").addEventListener("click",()=>{ut||(D.closeExpansion(),Us=0,lt.setPreview(-1),it())});al.addEventListener("click",()=>{Ne||ut||(Ci(),D.startWave()&&(Fs.hidden=!0,Ku("襲撃 "+String(D.wave).padStart(2,"0"),1.8),it()))});br.addEventListener("click",()=>{D.speed=D.speed===1?2:1,br.textContent="速度 ×"+D.speed});ga.addEventListener("click",()=>{ut||(_t=!_t,Ft||Va(),it())});H("zoom-in").addEventListener("click",()=>lt.zoomIn());H("zoom-out").addEventListener("click",()=>lt.zoomOut());H("reset-view").addEventListener("click",()=>lt.resetView());window.addEventListener("keydown",s=>{if(ut||document.querySelector("dialog[open]"))return;if(s.key==="Escape"&&Ht&&!_t){fi(),it();return}if(s.key==="Escape"&&Dn&&!_t){ji();return}if(s.key==="Escape"&&D.phase==="expansion"&&!_t){H("close-expand").click();return}if(s.key==="Escape"){_t=!_t,Ft||Va(),it();return}if(_t||D.phase==="gameover"||D.raid)return;const e={1:"bolt",2:"cannon",3:"frost",4:"mine"};e[s.key]&&Ar(e[s.key]),s.key==="Enter"&&D.phase==="prepare"&&(s.preventDefault(),al.click()),s.code==="Space"&&D.phase==="combat"&&(s.preventDefault(),br.click())});document.addEventListener("visibilitychange",()=>{vr=performance.now(),Ss=0,document.hidden&&D.phase==="combat"&&(_t=!0,Ft||Va())});function id(s){requestAnimationFrame(id);const e=Math.min(.05,Math.max(0,(s-vr)/1e3));if(vr=s,Aa+=e,!_t){Ss+=e*D.speed;const t=[...D.fx];for(;Ss+1e-9>=Xi;)Ss-=Xi,Ft?Ft.tick():D.tick(Xi),t.push(...D.fx);D.fx=t}_t||Os.play(D.fx),lt.render(D,_t?0:e*D.speed),D.fx=[],(ka<Aa||D.messageTime>0&&!D.message.includes("接近中")&&D.phase==="combat")&&Mr.classList.remove("visible"),it()}or=D.completedWaves;lt.rebuild(D,!0);D.towers.size&&(Fs.hidden=!0);Ci();Ar("bolt");requestAnimationFrame(id);
