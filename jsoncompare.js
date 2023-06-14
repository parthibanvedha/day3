//1.to compare JSON have same properties without order
//a) var obj1 = {name:"person",age:5};
//b) var obj2 = {age:5,name:"person"};


const obj1={
 name:"person",
 age:"5"},

const obj2={
 age:"5",
 name:"person"}
 
JSON.srtingify(obj1)===JSON.srtingify(obj2)
//false

_.isequal(obj1,obj2);
//true

console.log("two jsons sre equal")




//output:
//two jsons are equal



//2.To display all country fags in console

var xhr = new XMLHttpRequest();
xhr.onload = function() {
if(xhr.status>= 0 && xhr.status < 300){
var t = JSON.parse(this.response);
t.forEach(element =>{
 for(let key in t){
 console.log(t[key].fag)
 }
});
}
else
{
console.log(xhr.responseText);
}
};
xhr.open("GET","https://restcountries.eu/rest/v2/all");
xhr.send();
// displays fags of all countries in console





output::
https://restcountries.eu/data/afg.svg
https://restcountries.eu/data/ala.svg
https://restcountries.eu/data/alb.svg
https://restcountries.eu/data/dza.svg
https://restcountries.eu/data/asm.svg
https://restcountries.eu/data/and.svg
https://restcountries.eu/data/ago.svg
https://restcountries.eu/data/aia.svg
https://restcountries.eu/data/ata.svg
https://restcountries.eu/data/atg.svg
https://restcountries.eu/data/arg.svg
https://restcountries.eu/data/arm.svg
https://restcountries.eu/data/abw.svg
https://restcountries.eu/data/aus.svg
https://restcountries.eu/data/aut.svg
https://restcountries.eu/data/aze.svg
https://restcountries.eu/data/bhs.svg
https://restcountries.eu/data/bhr.svg
https://restcountries.eu/data/bgd.svg
https://restcountries.eu/data/brb.svg
https://restcountries.eu/data/blr.svg
https://restcountries.eu/data/bel.svg
https://restcountries.eu/data/blz.svg
https://restcountries.eu/data/ben.svg
https://restcountries.eu/data/bmu.svg
https://restcountries.eu/data/btn.svg
https://restcountries.eu/data/bol.svg
https://restcountries.eu/data/bes.svg
https://restcountries.eu/data/bih.svg
https://restcountries.eu/data/bwa.svg
https://restcountries.eu/data/bvt.svg
https://restcountries.eu/data/bra.svg
https://restcountries.eu/data/iot.svg
https://restcountries.eu/data/umi.svg
https://restcountries.eu/data/vgb.svg
https://restcountries.eu/data/vir.svg
https://restcountries.eu/data/brn.svg
https://restcountries.eu/data/bgr.svg
https://restcountries.eu/data/bfa.svg
https://restcountries.eu/data/bdi.svg
https://restcountries.eu/data/khm.svg
https://restcountries.eu/data/cmr.svg
https://restcountries.eu/data/can.svg
https://restcountries.eu/data/cpv.svg
https://restcountries.eu/data/cym.svg
https://restcountries.eu/data/caf.svg
https://restcountries.eu/data/tcd.svg
https://restcountries.eu/data/chl.svg
https://restcountries.eu/data/chn.svg
https://restcountries.eu/data/cxr.svg
https://restcountries.eu/data/cck.svg
https://restcountries.eu/data/col.svg
https://restcountries.eu/data/com.svg
https://restcountries.eu/data/cog.svg
https://restcountries.eu/data/cod.svg
https://restcountries.eu/data/cok.svg
https://restcountries.eu/data/cri.svg
https://restcountries.eu/data/hrv.svg
https://restcountries.eu/data/cub.svg
https://restcountries.eu/data/cuw.svg
https://restcountries.eu/data/cyp.svg
https://restcountries.eu/data/cze.svg
https://restcountries.eu/data/dnk.svg
https://restcountries.eu/data/dji.svg
https://restcountries.eu/data/dma.svg
https://restcountries.eu/data/dom.svg
https://restcountries.eu/data/ecu.svg
https://restcountries.eu/data/egy.svg
https://restcountries.eu/data/slv.svg
https://restcountries.eu/data/gnq.svg
https://restcountries.eu/data/eri.svg
https://restcountries.eu/data/est.svg
https://restcountries.eu/data/eth.svg
https://restcountries.eu/data/fk.svg
https://restcountries.eu/data/fro.svg
https://restcountries.eu/data/fji.svg
https://restcountries.eu/data/fn.svg
https://restcountries.eu/data/fra.svg
https://restcountries.eu/data/guf.svg
https://restcountries.eu/data/pyf.svg
https://restcountries.eu/data/atf.svg
https://restcountries.eu/data/gab.svg
https://restcountries.eu/data/gmb.svg
https://restcountries.eu/data/geo.svg
https://restcountries.eu/data/deu.svg
https://restcountries.eu/data/gha.svg
https://restcountries.eu/data/gib.svg
https://restcountries.eu/data/grc.svg
https://restcountries.eu/data/grl.svg
https://restcountries.eu/data/grd.svg
https://restcountries.eu/data/glp.svg
https://restcountries.eu/data/gum.svg
https://restcountries.eu/data/gtm.svg
https://restcountries.eu/data/ggy.svg
https://restcountries.eu/data/gin.svg
https://restcountries.eu/data/gnb.svg
https://restcountries.eu/data/guy.svg
https://restcountries.eu/data/hti.svg
https://restcountries.eu/data/hmd.svg
https://restcountries.eu/data/vat.svg
https://restcountries.eu/data/hnd.svg
https://restcountries.eu/data/hkg.svg
https://restcountries.eu/data/hun.svg
https://restcountries.eu/data/isl.svg
https://restcountries.eu/data/ind.svg
https://restcountries.eu/data/idn.svg
https://restcountries.eu/data/civ.svg
https://restcountries.eu/data/irn.svg
https://restcountries.eu/data/irq.svg
https://restcountries.eu/data/irl.svg
https://restcountries.eu/data/imn.svg
https://restcountries.eu/data/isr.svg
https://restcountries.eu/data/ita.svg
https://restcountries.eu/data/jam.svg
https://restcountries.eu/data/jpn.svg
https://restcountries.eu/data/jey.svg
https://restcountries.eu/data/jor.svg
https://restcountries.eu/data/kaz.svg
https://restcountries.eu/data/ken.svg
https://restcountries.eu/data/kir.svg
https://restcountries.eu/data/kwt.svg
https://restcountries.eu/data/kgz.svg
https://restcountries.eu/data/lao.svg
https://restcountries.eu/data/lva.svg
https://restcountries.eu/data/lbn.svg
https://restcountries.eu/data/lso.svg
https://restcountries.eu/data/lbr.svg
https://restcountries.eu/data/lby.svg
https://restcountries.eu/data/lie.svg
https://restcountries.eu/data/ltu.svg
https://restcountries.eu/data/lux.svg
https://restcountries.eu/data/mac.svg
https://restcountries.eu/data/mkd.svg
https://restcountries.eu/data/mdg.svg
https://restcountries.eu/data/mwi.svg
https://restcountries.eu/data/mys.svg
https://restcountries.eu/data/mdv.svg
https://restcountries.eu/data/mli.svg
https://restcountries.eu/data/mlt.svg
https://restcountries.eu/data/mhl.svg
https://restcountries.eu/data/mtq.svg
https://restcountries.eu/data/mrt.svg
https://restcountries.eu/data/mus.svg
https://restcountries.eu/data/myt.svg
https://restcountries.eu/data/mex.svg
https://restcountries.eu/data/fsm.svg
https://restcountries.eu/data/mda.svg
https://restcountries.eu/data/mco.svg
https://restcountries.eu/data/mng.svg
https://restcountries.eu/data/mne.svg
https://restcountries.eu/data/msr.svg
https://restcountries.eu/data/mar.svg
https://restcountries.eu/data/moz.svg
https://restcountries.eu/data/mmr.svg
https://restcountries.eu/data/nam.svg
https://restcountries.eu/data/nru.svg
https://restcountries.eu/data/npl.svg
https://restcountries.eu/data/nld.svg
https://restcountries.eu/data/ncl.svg
https://restcountries.eu/data/nzl.svg
https://restcountries.eu/data/nic.svg
https://restcountries.eu/data/ner.svg
https://restcountries.eu/data/nga.svg
https://restcountries.eu/data/niu.svg
https://restcountries.eu/data/nfk.svg
https://restcountries.eu/data/prk.svg
https://restcountries.eu/data/mnp.svg
https://restcountries.eu/data/nor.svg
https://restcountries.eu/data/omn.svg
https://restcountries.eu/data/pak.svg
https://restcountries.eu/data/plw.svg
https://restcountries.eu/data/pse.svg
https://restcountries.eu/data/pan.svg
https://restcountries.eu/data/png.svg
https://restcountries.eu/data/pry.svg
https://restcountries.eu/data/per.svg
https://restcountries.eu/data/phl.svg
https://restcountries.eu/data/pcn.svg
https://restcountries.eu/data/pol.svg
https://restcountries.eu/data/prt.svg
https://restcountries.eu/data/pri.svg
https://restcountries.eu/data/qat.svg
https://restcountries.eu/data/kos.svg
https://restcountries.eu/data/reu.svg
https://restcountries.eu/data/rou.svg
https://restcountries.eu/data/rus.svg
https://restcountries.eu/data/rwa.svg
https://restcountries.eu/data/blm.svg
https://restcountries.eu/data/shn.svg
https://restcountries.eu/data/kna.svg
https://restcountries.eu/data/lca.svg
https://restcountries.eu/data/maf.svg
https://restcountries.eu/data/spm.svg
https://restcountries.eu/data/vct.svg
https://restcountries.eu/data/wsm.svg
https://restcountries.eu/data/smr.svg
https://restcountries.eu/data/stp.svg
https://restcountries.eu/data/sau.svg
https://restcountries.eu/data/sen.svg
https://restcountries.eu/data/srb.svg
https://restcountries.eu/data/syc.svg
https://restcountries.eu/data/sle.svg
https://restcountries.eu/data/sgp.svg
https://restcountries.eu/data/sxm.svg
https://restcountries.eu/data/svk.svg
https://restcountries.eu/data/svn.svg
https://restcountries.eu/data/slb.svg
https://restcountries.eu/data/som.svg
https://restcountries.eu/data/zaf.svg
https://restcountries.eu/data/sgs.svg
https://restcountries.eu/data/kor.svg
https://restcountries.eu/data/ssd.svg
https://restcountries.eu/data/esp.svg
https://restcountries.eu/data/lka.svg
https://restcountries.eu/data/sdn.svg
https://restcountries.eu/data/sur.svg
https://restcountries.eu/data/sjm.svg
https://restcountries.eu/data/swz.svg
https://restcountries.eu/data/swe.svg
https://restcountries.eu/data/che.svg
https://restcountries.eu/data/syr.svg
https://restcountries.eu/data/twn.svg
https://restcountries.eu/data/tjk.svg
https://restcountries.eu/data/tza.svg
https://restcountries.eu/data/tha.svg
https://restcountries.eu/data/tls.svg
https://restcountries.eu/data/tgo.svg
https://restcountries.eu/data/tkl.svg
https://restcountries.eu/data/ton.svg
https://restcountries.eu/data/tto.svg
https://restcountries.eu/data/tun.svg
https://restcountries.eu/data/tur.svg
https://restcountries.eu/data/tkm.svg
https://restcountries.eu/data/tca.svg
https://restcountries.eu/data/tuv.svg
https://restcountries.eu/data/uga.svg
https://restcountries.eu/data/ukr.svg
https://restcountries.eu/data/are.svg
https://restcountries.eu/data/gbr.svg
https://restcountries.eu/data/usa.svg
https://restcountries.eu/data/ury.svg
https://restcountries.eu/data/uzb.svg
https://restcountries.eu/data/vut.svg
https://restcountries.eu/data/ven.svg
https://restcountries.eu/data/vnm.svg
https://restcountries.eu/data/wlf.svg
https://restcountries.eu/data/esh.svg
https://restcountries.eu/data/yem.svg
https://restcountries.eu/data/zmb.svg
https://restcountries.eu/data/zwe.svg
https://restcountries.eu/data/afg.svg
https://restcountries.eu/data/ala.svg
https://restcountries.eu/data/alb.svg
https://restcountries.eu/data/dza.svg
https://restcountries.eu/data/asm.svg
https://restcountries.eu/data/and.svg
https://restcountries.eu/data/ago.svg
https://restcountries.eu/data/aia.svg
https://restcountries.eu/data/ata.svg
https://restcountries.eu/data/atg.svg
https://restcountries.eu/data/arg.svg
https://restcountries.eu/data/arm.svg
https://restcountries.eu/data/abw.svg
https://restcountries.eu/data/aus.svg
https://restcountries.eu/data/aut.svg
https://restcountries.eu/data/aze.svg
https://restcountries.eu/data/bhs.svg
https://restcountries.eu/data/bhr.svg
https://restcountries.eu/data/bgd.svg
https://restcountries.eu/data/brb.svg
https://restcountries.eu/data/blr.svg
https://restcountries.eu/data/bel.svg
https://restcountries.eu/data/blz.svg
https://restcountries.eu/data/ben.svg
https://restcountries.eu/data/bmu.svg
https://restcountries.eu/data/btn.svg
https://restcountries.eu/data/bol.svg
https://restcountries.eu/data/bes.svg
https://restcountries.eu/data/bih.svg
https://restcountries.eu/data/bwa.svg
https://restcountries.eu/data/bvt.svg
https://restcountries.eu/data/bra.svg
https://restcountries.eu/data/iot.svg
https://restcountries.eu/data/umi.svg
https://restcountries.eu/data/vgb.svg
https://restcountries.eu/data/vir.svg
https://restcountries.eu/data/brn.svg
https://restcountries.eu/data/bgr.svg
https://restcountries.eu/data/bfa.svg
https://restcountries.eu/data/bdi.svg
https://restcountries.eu/data/khm.svg
https://restcountries.eu/data/cmr.svg
https://restcountries.eu/data/can.svg
https://restcountries.eu/data/cpv.svg
https://restcountries.eu/data/cym.svg
https://restcountries.eu/data/caf.svg
https://restcountries.eu/data/tcd.svg
https://restcountries.eu/data/chl.svg
https://restcountries.eu/data/chn.svg
https://restcountries.eu/data/cxr.svg
https://restcountries.eu/data/cck.svg
https://restcountries.eu/data/col.svg
https://restcountries.eu/data/com.svg
https://restcountries.eu/data/cog.svg
https://restcountries.eu/data/cod.svg
https://restcountries.eu/data/cok.svg
https://restcountries.eu/data/cri.svg
https://restcountries.eu/data/hrv.svg
https://restcountries.eu/data/cub.svg
https://restcountries.eu/data/cuw.svg
https://restcountries.eu/data/cyp.svg
https://restcountries.eu/data/cze.svg
https://restcountries.eu/data/dnk.svg
https://restcountries.eu/data/dji.svg
https://restcountries.eu/data/dma.svg
https://restcountries.eu/data/dom.svg
https://restcountries.eu/data/ecu.svg
https://restcountries.eu/data/egy.svg
https://restcountries.eu/data/slv.svg
https://restcountries.eu/data/gnq.svg
https://restcountries.eu/data/eri.svg
https://restcountries.eu/data/est.svg
https://restcountries.eu/data/eth.svg
https://restcountries.eu/data/fk.svg
https://restcountries.eu/data/fro.svg
https://restcountries.eu/data/fji.svg
https://restcountries.eu/data/fn.svg
https://restcountries.eu/data/fra.svg
https://restcountries.eu/data/guf.svg
https://restcountries.eu/data/pyf.svg
https://restcountries.eu/data/atf.svg
https://restcountries.eu/data/gab.svg
https://restcountries.eu/data/gmb.svg
https://restcountries.eu/data/geo.svg
https://restcountries.eu/data/deu.svg
https://restcountries.eu/data/gha.svg
https://restcountries.eu/data/gib.svg
https://restcountries.eu/data/grc.svg
https://restcountries.eu/data/grl.svg
https://restcountries.eu/data/grd.svg
https://restcountries.eu/data/glp.svg
https://restcountries.eu/data/gum.svg
https://restcountries.eu/data/gtm.svg
https://restcountries.eu/data/ggy.svg
https://restcountries.eu/data/gin.svg
https://restcountries.eu/data/gnb.svg
https://restcountries.eu/data/guy.svg
https://restcountries.eu/data/hti.svg
https://restcountries.eu/data/hmd.svg
https://restcountries.eu/data/vat.svg
https://restcountries.eu/data/hnd.svg
https://restcountries.eu/data/hkg.svg
https://restcountries.eu/data/hun.svg
https://restcountries.eu/data/isl.svg
https://restcountries.eu/data/ind.svg
https://restcountries.eu/data/idn.svg
https://restcountries.eu/data/civ.svg
https://restcountries.eu/data/irn.svg
https://restcountries.eu/data/irq.svg
https://restcountries.eu/data/irl.svg
https://restcountries.eu/data/imn.svg
https://restcountries.eu/data/isr.svg
https://restcountries.eu/data/ita.svg
https://restcountries.eu/data/jam.svg
https://restcountries.eu/data/jpn.svg
https://restcountries.eu/data/jey.svg
https://restcountries.eu/data/jor.svg
https://restcountries.eu/data/kaz.svg
https://restcountries.eu/data/ken.svg
https://restcountries.eu/data/kir.svg
https://restcountries.eu/data/kwt.svg
https://restcountries.eu/data/kgz.svg
https://restcountries.eu/data/lao.svg
https://restcountries.eu/data/lva.svg
https://restcountries.eu/data/lbn.svg
https://restcountries.eu/data/lso.svg
https://restcountries.eu/data/lbr.svg
https://restcountries.eu/data/lby.svg
https://restcountries.eu/data/lie.svg
https://restcountries.eu/data/ltu.svg
https://restcountries.eu/data/lux.svg
https://restcountries.eu/data/mac.svg
https://restcountries.eu/data/mkd.svg
https://restcountries.eu/data/mdg.svg
https://restcountries.eu/data/mwi.svg
https://restcountries.eu/data/mys.svg
https://restcountries.eu/data/mdv.svg
https://restcountries.eu/data/mli.svg
https://restcountries.eu/data/mlt.svg
https://restcountries.eu/data/mhl.svg
https://restcountries.eu/data/mtq.svg
https://restcountries.eu/data/mrt.svg
https://restcountries.eu/data/mus.svg
https://restcountries.eu/data/myt.svg
https://restcountries.eu/data/mex.svg
https://restcountries.eu/data/fsm.svg
https://restcountries.eu/data/mda.svg
https://restcountries.eu/data/mco.svg
https://restcountries.eu/data/mng.svg
https://restcountries.eu/data/mne.svg
https://restcountries.eu/data/msr.svg
https://restcountries.eu/data/mar.svg
https://restcountries.eu/data/moz.svg
https://restcountries.eu/data/mmr.svg
https://restcountries.eu/data/nam.svg
https://restcountries.eu/data/nru.svg
https://restcountries.eu/data/npl.svg
https://restcountries.eu/data/nld.svg
https://restcountries.eu/data/ncl.svg
https://restcountries.eu/data/nzl.svg
https://restcountries.eu/data/nic.svg
https://restcountries.eu/data/ner.svg
https://restcountries.eu/data/nga.svg
https://restcountries.eu/data/niu.svg
https://restcountries.eu/data/nfk.svg
https://restcountries.eu/data/prk.svg
https://restcountries.eu/data/mnp.svg
https://restcountries.eu/data/nor.svg
https://restcountries.eu/data/omn.svg
https://restcountries.eu/data/pak.svg
https://restcountries.eu/data/plw.svg
https://restcountries.eu/data/pse.svg
https://restcountries.eu/data/pan.svg
https://restcountries.eu/data/png.svg
https://restcountries.eu/data/pry.svg
https://restcountries.eu/data/per.svg
https://restcountries.eu/data/phl.svg
https://restcountries.eu/data/pcn.svg
https://restcountries.eu/data/pol.svg
https://restcountries.eu/data/prt.svg
https://restcountries.eu/data/pri.svg
https://restcountries.eu/data/qat.svg
https://restcountries.eu/data/kos.svg
https://restcountries.eu/data/reu.svg
https://restcountries.eu/data/rou.svg
https://restcountries.eu/data/rus.svg
https://restcountries.eu/data/rwa.svg
https://restcountries.eu/data/blm.svg
https://restcountries.eu/data/shn.svg
https://restcountries.eu/data/kna.svg
https://restcountries.eu/data/lca.svg
https://restcountries.eu/data/maf.svg
https://restcountries.eu/data/spm.svg
https://restcountries.eu/data/vct.svg
https://restcountries.eu/data/wsm.svg
https://restcountries.eu/data/smr.svg
https://restcountries.eu/data/stp.svg
https://restcountries.eu/data/sau.svg
https://restcountries.eu/data/sen.svg
https://restcountries.eu/data/srb.svg
https://restcountries.eu/data/syc.svg
https://restcountries.eu/data/sle.svg
https://restcountries.eu/data/sgp.svg
https://restcountries.eu/data/sxm.svg
https://restcountries.eu/data/svk.svg
https://restcountries.eu/data/svn.svg
https://restcountries.eu/data/slb.svg
https://restcountries.eu/data/som.svg
https://restcountries.eu/data/zaf.svg
https://restcountries.eu/data/sgs.svg
https://restcountries.eu/data/kor.svg
https://restcountries.eu/data/ssd.svg
https://restcountries.eu/data/esp.svg
https://restcountries.eu/data/lka.svg
https://restcountries.eu/data/sdn.svg
https://restcountries.eu/data/sur.svg
https://restcountries.eu/data/sjm.svg
https://restcountries.eu/data/swz.svg
https://restcountries.eu/data/swe.svg
https://restcountries.eu/data/che.svg
https://restcountries.eu/data/syr.svg
https://restcountries.eu/data/twn.svg
https://restcountries.eu/data/tjk.svg
https://restcountries.eu/data/tza.svg
https://restcountries.eu/data/tha.svg
https://restcountries.eu/data/tls.svg
https://restcountries.eu/data/tgo.svg
https://restcountries.eu/data/tkl.svg
https://restcountries.eu/data/ton.svg
https://restcountries.eu/data/tto.svg
https://restcountries.eu/data/tun.svg
https://restcountries.eu/data/tur.svg
https://restcountries.eu/data/tkm.svg
https://restcountries.eu/data/tca.svg
https://restcountries.eu/data/tuv.svg
https://restcountries.eu/data/uga.svg
https://restcountries.eu/data/ukr.svg
https://restcountries.eu/data/are.svg
https://restcountries.eu/data/gbr.svg
https://restcountries.eu/data/usa.svg
https://restcountries.eu/data/ury.svg
https://restcountries.eu/data/uzb.svg
https://restcountries.eu/data/vut.svg
https://restcountries.eu/data/ven.svg
https://restcountries.eu/data/vnm.svg
https://restcountries.eu/data/wlf.svg
https://restcountries.eu/data/esh.svg
https://restcountries.eu/data/yem.svg
https://restcountries.eu/data/zmb.svg
https://restcountries.eu/data/zwe.svg
https://restcountries.eu/data/afg.svg
https://restcountries.eu/data/ala.svg
https://restcountries.eu/data/alb.svg
https://restcountries.eu/data/dza.svg
https://restcountries.eu/data/asm.svg
https://restcountries.eu/data/and.svg
https://restcountries.eu/data/ago.svg
https://restcountries.eu/data/aia.svg
https://restcountries.eu/data/ata.svg
https://restcountries.eu/data/atg.svg
https://restcountries.eu/data/arg.svg
https://restcountries.eu/data/arm.svg
https://restcountries.eu/data/abw.svg
https://restcountries.eu/data/aus.svg
https://restcountries.eu/data/aut.svg
https://restcountries.eu/data/aze.svg
https://restcountries.eu/data/bhs.svg
https://restcountries.eu/data/bhr.svg
https://restcountries.eu/data/bgd.svg
https://restcountries.eu/data/brb.svg
https://restcountries.eu/data/blr.svg
https://restcountries.eu/data/bel.svg
https://restcountries.eu/data/blz.svg
https://restcountries.eu/data/ben.svg
https://restcountries.eu/data/bmu.svg
https://restcountries.eu/data/btn.svg
https://restcountries.eu/data/bol.svg
https://restcountries.eu/data/bes.svg
https://restcountries.eu/data/bih.svg
https://restcountries.eu/data/bwa.svg
https://restcountries.eu/data/bvt.svg
https://restcountries.eu/data/bra.svg
https://restcountries.eu/data/iot.svg
https://restcountries.eu/data/umi.svg
https://restcountries.eu/data/vgb.svg
https://restcountries.eu/data/vir.svg
https://restcountries.eu/data/brn.svg
https://restcountries.eu/data/bgr.svg
https://restcountries.eu/data/bfa.svg
https://restcountries.eu/data/bdi.svg
https://restcountries.eu/data/khm.svg
https://restcountries.eu/data/cmr.svg
https://restcountries.eu/data/can.svg
https://restcountries.eu/data/cpv.svg
https://restcountries.eu/data/cym.svg
https://restcountries.eu/data/caf.svg
https://restcountries.eu/data/tcd.svg
https://restcountries.eu/data/chl.svg
https://restcountries.eu/data/chn.svg
https://restcountries.eu/data/cxr.svg
https://restcountries.eu/data/cck.svg
https://restcountries.eu/data/col.svg
https://restcountries.eu/data/com.svg
https://restcountries.eu/data/cog.svg
https://restcountries.eu/data/cod.svg
https://restcountries.eu/data/cok.svg
https://restcountries.eu/data/cri.svg
https://restcountries.eu/data/hrv.svg
https://restcountries.eu/data/cub.svg
https://restcountries.eu/data/cuw.svg
https://restcountries.eu/data/cyp.svg
https://restcountries.eu/data/cze.svg
https://restcountries.eu/data/dnk.svg
https://restcountries.eu/data/dji.svg
https://restcountries.eu/data/dma.svg
https://restcountries.eu/data/dom.svg
https://restcountries.eu/data/ecu.svg
https://restcountries.eu/data/egy.svg
https://restcountries.eu/data/slv.svg
https://restcountries.eu/data/gnq.svg
https://restcountries.eu/data/eri.svg
https://restcountries.eu/data/est.svg
https://restcountries.eu/data/eth.svg
https://restcountries.eu/data/fk.svg
https://restcountries.eu/data/fro.svg
https://restcountries.eu/data/fji.svg
https://restcountries.eu/data/fn.svg
https://restcountries.eu/data/fra.svg
https://restcountries.eu/data/guf.svg
https://restcountries.eu/data/pyf.svg
https://restcountries.eu/data/atf.svg
https://restcountries.eu/data/gab.svg
https://restcountries.eu/data/gmb.svg
https://restcountries.eu/data/geo.svg
https://restcountries.eu/data/deu.svg
https://restcountries.eu/data/gha.svg
https://restcountries.eu/data/gib.svg
https://restcountries.eu/data/grc.svg
https://restcountries.eu/data/grl.svg
https://restcountries.eu/data/grd.svg
https://restcountries.eu/data/glp.svg
https://restcountries.eu/data/gum.svg
https://restcountries.eu/data/gtm.svg
https://restcountries.eu/data/ggy.svg
https://restcountries.eu/data/gin.svg
https://restcountries.eu/data/gnb.svg
https://restcountries.eu/data/guy.svg
https://restcountries.eu/data/hti.svg
https://restcountries.eu/data/hmd.svg
https://restcountries.eu/data/vat.svg
https://restcountries.eu/data/hnd.svg
https://restcountries.eu/data/hkg.svg
https://restcountries.eu/data/hun.svg
https://restcountries.eu/data/isl.svg
https://restcountries.eu/data/ind.svg
https://restcountries.eu/data/idn.svg
https://restcountries.eu/data/civ.svg
https://restcountries.eu/data/irn.svg
https://restcountries.eu/data/irq.svg
https://restcountries.eu/data/irl.svg
https://restcountries.eu/data/imn.svg
https://restcountries.eu/data/isr.svg
https://restcountries.eu/data/ita.svg
https://restcountries.eu/data/jam.svg
https://restcountries.eu/data/jpn.svg
https://restcountries.eu/data/jey.svg
https://restcountries.eu/data/jor.svg
https://restcountries.eu/data/kaz.svg
https://restcountries.eu/data/ken.svg
https://restcountries.eu/data/kir.svg
https://restcountries.eu/data/kwt.svg
https://restcountries.eu/data/kgz.svg
https://restcountries.eu/data/lao.svg
https://restcountries.eu/data/lva.svg
https://restcountries.eu/data/lbn.svg
https://restcountries.eu/data/lso.svg
https://restcountries.eu/data/lbr.svg
https://restcountries.eu/data/lby.svg
https://restcountries.eu/data/lie.svg
https://restcountries.eu/data/ltu.svg
https://restcountries.eu/data/lux.svg
https://restcountries.eu/data/mac.svg
https://restcountries.eu/data/mkd.svg
https://restcountries.eu/data/mdg.svg
https://restcountries.eu/data/mwi.svg
https://restcountries.eu/data/mys.svg
https://restcountries.eu/data/mdv.svg
https://restcountries.eu/data/mli.svg
https://restcountries.eu/data/mlt.svg
https://restcountries.eu/data/mhl.svg
https://restcountries.eu/data/mtq.svg
https://restcountries.eu/data/mrt.svg
https://restcountries.eu/data/mus.svg
https://restcountries.eu/data/myt.svg
https://restcountries.eu/data/mex.svg
https://restcountries.eu/data/fsm.svg
https://restcountries.eu/data/mda.svg
https://restcountries.eu/data/mco.svg
https://restcountries.eu/data/mng.svg
https://restcountries.eu/data/mne.svg
https://restcountries.eu/data/msr.svg
https://restcountries.eu/data/mar.svg
https://restcountries.eu/data/moz.svg
https://restcountries.eu/data/mmr.svg
https://restcountries.eu/data/nam.svg
https://restcountries.eu/data/nru.svg
https://restcountries.eu/data/npl.svg
https://restcountries.eu/data/nld.svg
https://restcountries.eu/data/ncl.svg
https://restcountries.eu/data/nzl.svg
https://restcountries.eu/data/nic.svg
https://restcountries.eu/data/ner.svg
https://restcountries.eu/data/nga.svg
https://restcountries.eu/data/niu.svg
https://restcountries.eu/data/nfk.svg
https://restcountries.eu/data/prk.svg
https://restcountries.eu/data/mnp.svg
https://restcountries.eu/data/nor.svg
https://restcountries.eu/data/omn.svg
https://restcountries.eu/data/pak.svg
https://restcountries.eu/data/plw.svg
https://restcountries.eu/data/pse.svg
https://restcountries.eu/data/pan.svg
https://restcountries.eu/data/png.svg
https://restcountries.eu/data/pry.svg
https://restcountries.eu/data/per.svg
https://restcountries.eu/data/phl.svg
https://restcountries.eu/data/pcn.svg
https://restcountries.eu/data/pol.svg
https://restcountries.eu/data/prt.svg
https://restcountries.eu/data/pri.svg
https://restcountries.eu/data/qat.svg
https://restcountries.eu/data/kos.svg
https://restcountries.eu/data/reu.svg
https://restcountries.eu/data/rou.svg
https://restcountries.eu/data/rus.svg
https://restcountries.eu/data/rwa.svg
https://restcountries.eu/data/blm.svg
https://restcountries.eu/data/shn.svg
https://restcountries.eu/data/kna.svg
https://restcountries.eu/data/lca.svg
https://restcountries.eu/data/maf.svg
https://restcountries.eu/data/spm.svg
https://restcountries.eu/data/vct.svg
https://restcountries.eu/data/wsm.svg
https://restcountries.eu/data/smr.svg
https://restcountries.eu/data/stp.svg
https://restcountries.eu/data/sau.svg
https://restcountries.eu/data/sen.svg
https://restcountries.eu/data/srb.svg
https://restcountries.eu/data/syc.svg
https://restcountries.eu/data/sle.svg
https://restcountries.eu/data/sgp.svg
https://restcountries.eu/data/sxm.svg
https://restcountries.eu/data/svk.svg
https://restcountries.eu/data/svn.svg
https://restcountries.eu/data/slb.svg
https://restcountries.eu/data/som.svg
https://restcountries.eu/data/zaf.svg
https://restcountries.eu/data/sgs.svg
https://restcountries.eu/data/kor.svg
https://restcountries.eu/data/ssd.svg
https://restcountries.eu/data/esp.svg
https://restcountries.eu/data/lka.svg
https://restcountries.eu/data/sdn.svg
https://restcountries.eu/data/sur.svg
https://restcountries.eu/data/sjm.svg
https://restcountries.eu/data/swz.svg
https://restcountries.eu/data/swe.svg
https://restcountries.eu/data/che.svg
https://restcountries.eu/data/syr.svg
https://restcountries.eu/data/twn.svg
https://restcountries.eu/data/tjk.svg
https://restcountries.eu/data/tza.svg
https://restcountries.eu/data/tha.svg
https://restcountries.eu/data/tls.svg
https://restcountries.eu/data/tgo.svg
https://restcountries.eu/data/tkl.svg
https://restcountries.eu/data/ton.svg
https://restcountries.eu/data/tto.svg
https://restcountries.eu/data/tun.svg
https://restcountries.eu/data/tur.svg
https://restcountries.eu/data/tkm.svg
https://restcountries.eu/data/tca.svg
https://restcountries.eu/data/tuv.svg
https://restcountries.eu/data/uga.svg
https://restcountries.eu/data/ukr.svg
https://restcountries.eu/data/are.svg
https://restcountries.eu/data/gbr.svg
https://restcountries.eu/data/usa.svg
https://restcountries.eu/data/ury.svg
https://restcountries.eu/data/uzb.svg
https://restcountries.eu/data/vut.svg
https://restcountries.eu/data/ven.svg
https://restcountries.eu/data/vnm.svg
https://restcountries.eu/data/wlf.svg
https://restcountries.eu/data/esh.svg
https://restcountries.eu/data/yem.svg
https://restcountries.eu/data/zmb.svg
https://restcountries.eu/data/zwe.svg
https://restcountries.eu/data/afg.svg
https://restcountries.eu/data/ala.svg
https://restcountries.eu/data/alb.svg
https://restcountries.eu/data/dza.svg
https://restcountries.eu/data/asm.svg
https://restcountries.eu/data/and.svg
https://restcountries.eu/data/ago.svg
https://restcountries.eu/data/aia.svg
https://restcountries.eu/data/ata.svg
https://restcountries.eu/data/atg.svg
https://restcountries.eu/data/arg.svg
https://restcountries.eu/data/arm.svg
https://restcountries.eu/data/abw.svg
https://restcountries.eu/data/aus.svg
https://restcountries.eu/data/aut.svg
https://restcountries.eu/data/aze.svg
https://restcountries.eu/data/bhs.svg
https://restcountries.eu/data/bhr.svg
https://restcountries.eu/data/bgd.svg
https://restcountries.eu/data/brb.svg
https://restcountries.eu/data/blr.svg
https://restcountries.eu/data/bel.svg
https://restcountries.eu/data/blz.svg
https://restcountries.eu/data/ben.svg
https://restcountries.eu/data/bmu.svg
https://restcountries.eu/data/btn.svg
https://restcountries.eu/data/bol.svg
https://restcountries.eu/data/bes.svg
https://restcountries.eu/data/bih.svg
https://restcountries.eu/data/bwa.svg
https://restcountries.eu/data/bvt.svg
https://restcountries.eu/data/bra.svg
https://restcountries.eu/data/iot.svg
https://restcountries.eu/data/umi.svg
https://restcountries.eu/data/vgb.svg
https://restcountries.eu/data/vir.svg
https://restcountries.eu/data/brn.svg
https://restcountries.eu/data/bgr.svg
https://restcountries.eu/data/bfa.svg
https://restcountries.eu/data/bdi.svg
https://restcountries.eu/data/khm.svg
https://restcountries.eu/data/cmr.svg
https://restcountries.eu/data/can.svg
https://restcountries.eu/data/cpv.svg
https://restcountries.eu/data/cym.svg
https://restcountries.eu/data/caf.svg
https://restcountries.eu/data/tcd.svg
https://restcountries.eu/data/chl.svg
https://restcountries.eu/data/chn.svg
https://restcountries.eu/data/cxr.svg
https://restcountries.eu/data/cck.svg
https://restcountries.eu/data/col.svg
https://restcountries.eu/data/com.svg
https://restcountries.eu/data/cog.svg
https://restcountries.eu/data/cod.svg
https://restcountries.eu/data/cok.svg
https://restcountries.eu/data/cri.svg
https://restcountries.eu/data/hrv.svg
https://restcountries.eu/data/cub.svg
https://restcountries.eu/data/cuw.svg
https://restcountries.eu/data/cyp.svg
https://restcountries.eu/data/cze.svg
https://restcountries.eu/data/dnk.svg
https://restcountries.eu/data/dji.svg
https://restcountries.eu/data/dma.svg
https://restcountries.eu/data/dom.svg
https://restcountries.eu/data/ecu.svg
https://restcountries.eu/data/egy.svg
https://restcountries.eu/data/slv.svg
https://restcountries.eu/data/gnq.svg
https://restcountries.eu/data/eri.svg
https://restcountries.eu/data/est.svg
https://restcountries.eu/data/eth.svg
https://restcountries.eu/data/fk.svg
https://restcountries.eu/data/fro.svg
https://restcountries.eu/data/fji.svg
https://restcountries.eu/data/fn.svg
https://restcountries.eu/data/fra.svg
https://restcountries.eu/data/guf.svg
https://restcountries.eu/data/pyf.svg
https://restcountries.eu/data/atf.svg
https://restcountries.eu/data/gab.svg
https://restcountries.eu/data/gmb.svg
https://restcountries.eu/data/geo.svg
https://restcountries.eu/data/deu.svg
https://restcountries.eu/data/gha.svg
https://restcountries.eu/data/gib.svg
https://restcountries.eu/data/grc.svg
https://restcountries.eu/data/grl.svg
https://restcountries.eu/data/grd.svg
https://restcountries.eu/data/glp.svg
https://restcountries.eu/data/gum.svg
https://restcountries.eu/data/gtm.svg
https://restcountries.eu/data/ggy.svg
https://restcountries.eu/data/gin.svg
https://restcountries.eu/data/gnb.svg
https://restcountries.eu/data/guy.svg
https://restcountries.eu/data/hti.svg
https://restcountries.eu/data/hmd.svg
https://restcountries.eu/data/vat.svg
https://restcountries.eu/data/hnd.svg
https://restcountries.eu/data/hkg.svg
https://restcountries.eu/data/hun.svg
https://restcountries.eu/data/isl.svg
https://restcountries.eu/data/ind.svg
https://restcountries.eu/data/idn.svg
https://restcountries.eu/data/civ.svg
https://restcountries.eu/data/irn.svg
https://restcountries.eu/data/irq.svg
https://restcountries.eu/data/irl.svg
https://restcountries.eu/data/imn.svg
https://restcountries.eu/data/isr.svg
https://restcountries.eu/data/ita.svg
https://restcountries.eu/data/jam.svg
https://restcountries.eu/data/jpn.svg
https://restcountries.eu/data/jey.svg
https://restcountries.eu/data/jor.svg
https://restcountries.eu/data/kaz.svg
https://restcountries.eu/data/ken.svg
https://restcountries.eu/data/kir.svg
https://restcountries.eu/data/kwt.svg
https://restcountries.eu/data/kgz.svg
https://restcountries.eu/data/lao.svg
https://restcountries.eu/data/lva.svg
https://restcountries.eu/data/lbn.svg
https://restcountries.eu/data/lso.svg
https://restcountries.eu/data/lbr.svg
https://restcountries.eu/data/lby.svg
https://restcountries.eu/data/lie.svg
https://restcountries.eu/data/ltu.svg
https://restcountries.eu/data/lux.svg
https://restcountries.eu/data/mac.svg
https://restcountries.eu/data/mkd.svg
https://restcountries.eu/data/mdg.svg
https://restcountries.eu/data/mwi.svg
https://restcountries.eu/data/mys.svg
https://restcountries.eu/data/mdv.svg
https://restcountries.eu/data/mli.svg
https://restcountries.eu/data/mlt.svg
https://restcountries.eu/data/mhl.svg
https://restcountries.eu/data/mtq.svg
https://restcountries.eu/data/mrt.svg
https://restcountries.eu/data/mus.svg
https://restcountries.eu/data/myt.svg
https://restcountries.eu/data/mex.svg
https://restcountries.eu/data/fsm.svg
https://restcountries.eu/data/mda.svg
https://restcountries.eu/data/mco.svg
https://restcountries.eu/data/mng.svg
https://restcountries.eu/data/mne.svg
https://restcountries.eu/data/msr.svg
https://restcountries.eu/data/mar.svg
https://restcountries.eu/data/moz.svg
https://restcountries.eu/data/mmr.svg
https://restcountries.eu/data/nam.svg
https://restcountries.eu/data/nru.svg
https://restcountries.eu/data/npl.svg
https://restcountries.eu/data/nld.svg
https://restcountries.eu/data/ncl.svg
https://restcountries.eu/data/nzl.svg
https://restcountries.eu/data/nic.svg
https://restcountries.eu/data/ner.svg
https://restcountries.eu/data/nga.svg
node.js:13 https://restcountries.eu/data/niu.svg
node.js:13 https://restcountries.eu/data/nfk.svg
node.js:13 https://restcountries.eu/data/prk.svg
node.js:13 https://restcountries.eu/data/mnp.svg
node.js:13 https://restcountries.eu/data/nor.svg
node.js:13 https://restcountries.eu/data/omn.svg
node.js:13 https://restcountries.eu/data/pak.svg
node.js:13 https://restcountries.eu/data/plw.svg
node.js:13 https://restcountries.eu/data/pse.svg
node.js:13 https://restcountries.eu/data/pan.svg
node.js:13 https://restcountries.eu/data/png.svg
node.js:13 https://restcountries.eu/data/pry.svg
node.js:13 https://restcountries.eu/data/per.svg
node.js:13 https://restcountries.eu/data/phl.svg
node.js:13 https://restcountries.eu/data/pcn.svg
node.js:13 https://restcountries.eu/data/pol.svg
node.js:13 https://restcountries.eu/data/prt.svg
node.js:13 https://restcountries.eu/data/pri.svg
node.js:13 https://restcountries.eu/data/qat.svg
node.js:13 https://restcountries.eu/data/kos.svg
node.js:13 https://restcountries.eu/data/reu.svg
node.js:13 https://restcountries.eu/data/rou.svg
node.js:13 https://restcountries.eu/data/rus.svg
node.js:13 https://restcountries.eu/data/rwa.svg
node.js:13 https://restcountries.eu/data/blm.svg
node.js:13 https://restcountries.eu/data/shn.svg
node.js:13 https://restcountries.eu/data/kna.svg
node.js:13 https://restcountries.eu/data/lca.svg
node.js:13 https://restcountries.eu/data/maf.svg
node.js:13 https://restcountries.eu/data/spm.svg
node.js:13 https://restcountries.eu/data/vct.svg
node.js:13 https://restcountries.eu/data/wsm.svg
node.js:13 https://restcountries.eu/data/smr.svg
node.js:13 https://restcountries.eu/data/stp.svg
node.js:13 https://restcountries.eu/data/sau.svg
node.js:13 https://restcountries.eu/data/sen.svg
node.js:13 https://restcountries.eu/data/srb.svg
node.js:13 https://restcountries.eu/data/syc.svg
node.js:13 https://restcountries.eu/data/sle.svg
node.js:13 https://restcountries.eu/data/sgp.svg
node.js:13 https://restcountries.eu/data/sxm.svg
node.js:13 https://restcountries.eu/data/svk.svg
node.js:13 https://restcountries.eu/data/svn.svg
node.js:13 https://restcountries.eu/data/slb.svg
node.js:13 https://restcountries.eu/data/som.svg
node.js:13 https://restcountries.eu/data/zaf.svg
node.js:13 https://restcountries.eu/data/sgs.svg
node.js:13 https://restcountries.eu/data/kor.svg
node.js:13 https://restcountries.eu/data/ssd.svg
node.js:13 https://restcountries.eu/data/esp.svg
node.js:13 https://restcountries.eu/data/lka.svg
node.js:13 https://restcountries.eu/data/sdn.svg
node.js:13 https://restcountries.eu/data/sur.svg
node.js:13 https://restcountries.eu/data/sjm.svg
node.js:13 https://restcountries.eu/data/swz.svg
node.js:13 https://restcountries.eu/data/swe.svg
node.js:13 https://restcountries.eu/data/che.svg
node.js:13 https://restcountries.eu/data/syr.svg
node.js:13 https://restcountries.eu/data/twn.svg
node.js:13 https://restcountries.eu/data/tjk.svg
node.js:13 https://restcountries.eu/data/tza.svg
node.js:13 https://restcountries.eu/data/tha.svg
node.js:13 https://restcountries.eu/data/tls.svg
node.js:13 https://restcountries.eu/data/tgo.svg
node.js:13 https://restcountries.eu/data/tkl.svg
node.js:13 https://restcountries.eu/data/ton.svg
node.js:13 https://restcountries.eu/data/tto.svg
node.js:13 https://restcountries.eu/data/tun.svg
node.js:13 https://restcountries.eu/data/tur.svg
node.js:13 https://restcountries.eu/data/tkm.svg
node.js:13 https://restcountries.eu/data/tca.svg
node.js:13 https://restcountries.eu/data/tuv.svg
node.js:13 https://restcountries.eu/data/uga.svg
node.js:13 https://restcountries.eu/data/ukr.svg
node.js:13 https://restcountries.eu/data/are.svg
node.js:13 https://restcountries.eu/data/gbr.svg
node.js:13 https://restcountries.eu/data/usa.svg
node.js:13 https://restcountries.eu/data/ury.svg
node.js:13 https://restcountries.eu/data/uzb.svg
node.js:13 https://restcountries.eu/data/vut.svg
node.js:13 https://restcountries.eu/data/ven.svg
node.js:13 https://restcountries.eu/data/vnm.svg
node.js:13 https://restcountries.eu/data/wlf.svg
node.js:13 https://restcountries.eu/data/esh.svg
node.js:13 https://restcountries.eu/data/yem.svg
node.js:13 https://restcountries.eu/data/zmb.svg
node.js:13 https://restcountries.eu/data/zwe.svg




//3.to display all countries name,reguon,subregion,population
 //code::



var xhr = new XMLHttpRequest();
xhr.onload = function(){
if(xhr.status>= 0 && xhr.status < 300){
var t = JSON.parse(this.response);
t.forEach(element =>{
 for(let key in t){
 console.log(t[key].name)
 console.log(t[key].region)
 console.log(t[key].subregion)
 console.log(t[key].population)
 }
});
}
else
{
console.log(xhr.responseText);
}
};
xhr.open("GET","https://restcountries.eu/rest/v2/all");
xhr.send();



output::
Afghanistan
Asia
Southern Asia
27657145
Åland Islands
Europe
Northern Europe
28875
Albania
Europe
Southern Europe
2886026
Algeria
Africa
Northern Africa
40400000
American Samoa
Oceania
Polynesia
57100
Andorra
Europe
Southern Europe
78014
Angola
Africa
Middle Africa
25868000
Anguilla
Americas
Caribbean
13452
Antarctica
Polar
1000
Antigua and Barbuda
Americas
Caribbean
86295
Argentina
Americas
South America
43590400
Armenia
Asia
Western Asia
2994400
Aruba
Americas
Caribbean
107394
Australia
Oceania
Australia and New Zealand
24117360
Austria
Europe
Western Europe
8725931
Azerbaijan
Asia
Western Asia
9730500
Bahamas
Americas
Caribbean
378040
Bahrain
Asia
Western Asia
1404900
Bangladesh
Asia
Southern Asia
161006790
Barbados
Americas
Caribbean
285000
Belarus
Europe
Eastern Europe
9498700
Belgium
Europe
Western Europe
11319511
Belize
Americas
Central America
370300
Benin
Africa
Western Africa
10653654
Bermuda
Americas
Northern America
61954
Bhutan
Asia
Southern Asia
775620
Bolivia (Plurinational State of)
Americas
South America
10985059
Bonaire, Sint Eustatius and Saba
Americas
Caribbean
17408
Bosnia and Herzegovina
Europe
Southern Europe
3531159
Botswana
Africa
Southern Africa
2141206
Bouvet Island
0
Brazil
Americas
South America
206135893
British Indian Ocean Territory
Africa
Eastern Africa
3000
United States Minor Outlying Islands
Americas
Northern America
300
Virgin Islands (British)
Americas
Caribbean
28514
Virgin Islands (U.S.)
Americas
Caribbean
114743
Brunei Darussalam
Asia
South-Eastern Asia
411900
Bulgaria
Europe
Eastern Europe
7153784
Burkina Faso
Africa
Western Africa
19034397
Burundi
Africa
Eastern Africa
10114505
Cambodia
Asia
South-Eastern Asia
15626444
Cameroon
Africa
Middle Africa
22709892
Canada
Americas
Northern America
36155487
Cabo Verde
Africa
Western Africa
531239
Cayman Islands
Americas
Caribbean
58238
Central African Republic
Africa
Middle Africa
4998000
Chad
Africa
Middle Africa
14497000
Chile
Americas
South America
18191900
China
Asia
Eastern Asia
1377422166
Christmas Island
Oceania
Australia and New Zealand
2072
Cocos (Keeling) Islands
Oceania
Australia and New Zealand
550
Colombia
Americas
South America
48759958
Comoros
Africa
Eastern Africa
806153
Congo
Africa
Middle Africa
4741000
Congo (Democratic Republic of the)
Africa
Middle Africa
85026000
Cook Islands
Oceania
Polynesia
18100
Costa Rica
Americas
Central America
4890379
Croatia
Europe
Southern Europe
4190669
Cuba
Americas
Caribbean
11239004
Curaçao
Americas
Caribbean
154843
Cyprus
Europe
Southern Europe
847000
Czech Republic
Europe
Eastern Europe
10558524
Denmark
Europe
Northern Europe
5717014
Djibouti
Africa
Eastern Africa
900000
Dominica
Americas
Caribbean
71293
Dominican Republic
Americas
Caribbean
10075045
Ecuador
Americas
South America
16545799
Egypt
Africa
Northern Africa
91290000
El Salvador
Americas
Central America
6520675
Equatorial Guinea
Africa
Middle Africa
1222442
Eritrea
Africa
Eastern Africa
5352000
Estonia
Europe
Northern Europe
1315944
Ethiopia
Africa
Eastern Africa
92206005
Falkland Islands (Malvinas)
Americas
South America
2563
Faroe Islands
Europe
Northern Europe
49376
Fiji
Oceania
Melanesia
867000
Finland
Europe
Northern Europe
5491817
France
Europe
Western Europe
66710000
French Guiana
Americas
South America
254541
French Polynesia
Oceania
Polynesia
271800
French Southern Territories
Africa
Southern Africa
140
Gabon
Africa
Middle Africa
1802278
Gambia
Africa
Western Africa
1882450
Georgia
Asia
Western Asia
3720400
Germany
Europe
Western Europe
81770900
Ghana
Africa
Western Africa
27670174
Gibraltar
Europe
Southern Europe
33140
Greece
Europe
Southern Europe
10858018
Greenland
Americas
Northern America
55847
Grenada
Americas
Caribbean
103328
Guadeloupe
Americas
Caribbean
400132
Guam
Oceania
Micronesia
184200
Guatemala
Americas
Central America
16176133
Guernsey
Europe
Northern Europe
62999
Guinea
Africa
Western Africa
12947000
Guinea-Bissau
Africa
Western Africa
1547777
Guyana
Americas
South America
746900
Haiti
Americas
Caribbean
11078033
Heard Island and McDonald Islands
0
Holy See
Europe
Southern Europe
451
Honduras
Americas
Central America
8576532
Hong Kong
Asia
Eastern Asia
7324300
Hungary
Europe
Eastern Europe
9823000
Iceland
Europe
Northern Europe
334300
India
Asia
Southern Asia
1295210000
Indonesia
Asia
South-Eastern Asia
258705000
Côte d'Ivoire
Africa
Western Africa
22671331
Iran (Islamic Republic of)
Asia
Southern Asia
79369900
Iraq
Asia
Western Asia
37883543
Ireland
Europe
Northern Europe
6378000
Isle of Man
Europe
Northern Europe
84497
Israel
Asia
Western Asia
8527400
Italy
Europe
Southern Europe
60665551
Jamaica
Americas
Caribbean
2723246
Japan
Asia
Eastern Asia
126960000
Jersey
Europe
Northern Europe
100800
Jordan
Asia
Western Asia
9531712
Kazakhstan
Asia
Central Asia
17753200
Kenya
Africa
Eastern Africa
47251000
Kiribati
Oceania
Micronesia
113400
Kuwait
Asia
Western Asia
4183658
Kyrgyzstan
Asia
Central Asia
6047800
Lao People's Democratic Republic
Asia
South-Eastern Asia
6492400
Latvia
Europe
Northern Europe
1961600
Lebanon
Asia
Western Asia
5988000
Lesotho
Africa
Southern Africa
1894194
Liberia
Africa
Western Africa
4615000
Libya
Africa
Northern Africa
6385000
Liechtenstein
Europe
Western Europe
37623
Lithuania
Europe
Northern Europe
2872294
Luxembourg
Europe
Western Europe
576200
Macao
Asia
Eastern Asia
649100
Macedonia (the former Yugoslav Republic of)
Europe
Southern Europe
2058539
Madagascar
Africa
Eastern Africa
22434363
Malawi
Africa
Eastern Africa
16832910
Malaysia
Asia
South-Eastern Asia
31405416
Maldives
Asia
Southern Asia
344023
Mali
Africa
Western Africa
18135000
Malta
Europe
Southern Europe
425384
Marshall Islands
Oceania
Micronesia
54880
Martinique
Americas
Caribbean
378243
Mauritania
Africa
Western Africa
3718678
Mauritius
Africa
Eastern Africa
1262879
Mayotte
Africa
Eastern Africa
226915
Mexico
Americas
Central America
122273473
Micronesia (Federated States of)
Oceania
Micronesia
102800
Moldova (Republic of)
Europe
Eastern Europe
3553100
Monaco
Europe
Western Europe
38400
Mongolia
Asia
Eastern Asia
3093100
Montenegro
Europe
Southern Europe
621810
Montserrat
Americas
Caribbean
4922
Morocco
Africa
Northern Africa
33337529
Mozambique
Africa
Eastern Africa
26423700
Myanmar
Asia
South-Eastern Asia
51419420
Namibia
Africa
Southern Africa
2324388
Nauru
Oceania
Micronesia
10084
Nepal
Asia
Southern Asia
28431500
Netherlands
Europe
Western Europe
17019800
New Caledonia
Oceania
Melanesia
268767
New Zealand
Oceania
Australia and New Zealand
4697854
Nicaragua
Americas
Central America
6262703
Niger
Africa
Western Africa
20715000
Nigeria
Africa
Western Africa
186988000
Niue
Oceania
Polynesia
1470
Norfolk Island
Oceania
Australia and New Zealand
2302
Korea (Democratic People's Republic of)
Asia
Eastern Asia
25281000
Northern Mariana Islands
Oceania
Micronesia
56940
Norway
Europe
Northern Europe
5223256
Oman
Asia
Western Asia
4420133
Pakistan
Asia
Southern Asia
194125062
Palau
Oceania
Micronesia
17950
Palestine, State of
Asia
Western Asia
4682467
Panama
Americas
Central America
3814672
Papua New Guinea
Oceania
Melanesia
8083700
Paraguay
Americas
South America
6854536
Peru
Americas
South America
31488700
Philippines
Asia
South-Eastern Asia
103279800
Pitcairn
Oceania
Polynesia
56
Poland
Europe
Eastern Europe
38437239
Portugal
Europe
Southern Europe
10374822
Puerto Rico
Americas
Caribbean
3474182
Qatar
Asia
Western Asia
2587564
Republic of Kosovo
Europe
Eastern Europe
1733842
Réunion
Africa
Eastern Africa
840974
Romania
Europe
Eastern Europe
19861408
Russian Federation
Europe
Eastern Europe
146599183
Rwanda
Africa
Eastern Africa
11553188
Saint Barthélemy
Americas
Caribbean
9417
Saint Helena, Ascension and Tristan da Cunha
Africa
Western Africa
4255
Saint Kitts and Nevis
Americas
Caribbean
46204
Saint Lucia
Americas
Caribbean
186000
Saint Martin (French part)
Americas
Caribbean
36979
Saint Pierre and Miquelon
Americas
Northern America
6069
Saint Vincent and the Grenadines
Americas
Caribbean
109991
Samoa
Oceania
Polynesia
194899
San Marino
Europe
Southern Europe
33005
Sao Tome and Principe
Africa
Middle Africa
187356
Saudi Arabia
Asia
Western Asia
32248200
Senegal
Africa
Western Africa
14799859
Serbia
Europe
Southern Europe
7076372
Seychelles
Africa
Eastern Africa
91400
Sierra Leone
Africa
Western Africa
7075641
Singapore
Asia
South-Eastern Asia
5535000
Sint Maarten (Dutch part)
Americas
Caribbean
38247
Slovakia
Europe
Eastern Europe
5426252
Slovenia
Europe
Southern Europe
2064188
Solomon Islands
Oceania
Melanesia
642000
Somalia
Africa
Eastern Africa
11079000
South Africa
Africa
Southern Africa
55653654
South Georgia and the South Sandwich Islands
Americas
South America
30
Korea (Republic of)
Asia
Eastern Asia
50801405
South Sudan
Africa
Middle Africa
12131000
Spain
Europe
Southern Europe
46438422
Sri Lanka
Asia
Southern Asia
20966000
Sudan
Africa
Northern Africa
39598700
Suriname
Americas
South America
541638
Svalbard and Jan Mayen
Europe
Northern Europe
2562
Swaziland
Africa
Southern Africa
1132657
Sweden
Europe
Northern Europe
9894888
Switzerland
Europe
Western Europe
8341600
Syrian Arab Republic
Asia
Western Asia
18564000
Taiwan
Asia
Eastern Asia
23503349
Tajikistan
Asia
Central Asia
8593600
Tanzania, United Republic of
Africa
Eastern Africa
55155000
Thailand
Asia
South-Eastern Asia
65327652
Timor-Leste
Asia
South-Eastern Asia
1167242
Togo
Africa
Western Africa
7143000
Tokelau
Oceania
Polynesia
1411
Tonga
node.js:14 Oceania
node.js:15 Polynesia
node.js:16 103252
node.js:13 Trinidad and Tobago
node.js:14 Americas
node.js:15 Caribbean
node.js:16 1349667
node.js:13 Tunisia
node.js:14 Africa
node.js:15 Northern Africa
node.js:16 11154400
node.js:13 Turkey
node.js:14 Asia
node.js:15 Western Asia
node.js:16 78741053
node.js:13 Turkmenistan
node.js:14 Asia
node.js:15 Central Asia
node.js:16 4751120
node.js:13 Turks and Caicos Islands
node.js:14 Americas
node.js:15 Caribbean
node.js:16 31458
node.js:13 Tuvalu
node.js:14 Oceania
node.js:15 Polynesia
node.js:16 10640
node.js:13 Uganda
node.js:14 Africa
node.js:15 Eastern Africa
node.js:16 33860700
node.js:13 Ukraine
node.js:14 Europe
node.js:15 Eastern Europe
node.js:16 42692393
node.js:13 United Arab Emirates
node.js:14 Asia
node.js:15 Western Asia
node.js:16 9856000
node.js:13 United Kingdom of Great Britain and Northern Ireland
node.js:14 Europe
node.js:15 Northern Europe
node.js:16 65110000
node.js:13 United States of America
node.js:14 Americas
node.js:15 Northern America
node.js:16 323947000
node.js:13 Uruguay
node.js:14 Americas
node.js:15 South America
node.js:16 3480222
node.js:13 Uzbekistan
node.js:14 Asia
node.js:15 Central Asia
node.js:16 31576400
node.js:13 Vanuatu
node.js:14 Oceania
node.js:15 Melanesia
node.js:16 277500
node.js:13 Venezuela (Bolivarian Republic of)
node.js:14 Americas
node.js:15 South America
node.js:16 31028700
node.js:13 Viet Nam
node.js:14 Asia
node.js:15 South-Eastern Asia
node.js:16 92700000
node.js:13 Wallis and Futuna
node.js:14 Oceania
node.js:15 Polynesia
node.js:16 11750
node.js:13 Western Sahara
node.js:14 Africa
node.js:15 Northern Africa
node.js:16 510713
node.js:13 Yemen
node.js:14 Asia
node.js:15 Western Asia
node.js:16 27478000
node.js:13 Zambia
node.js:14 Africa
node.js:15 Eastern Africa
node.js:16 15933883
node.js:13 Zimbabwe
node.js:14 Africa
node.js:15 Eastern Africa
node.js:16 14240168