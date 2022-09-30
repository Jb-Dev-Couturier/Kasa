import React from 'react'
import Banner from '../components/Banner';
import CollapseAP from '../components/CollapseAP';
import { A_Propos } from '../data/data';
import heroBG from '../styles/assets/images/heroBGaPropos.png';

const APropos = () => {
  return (
    <main className="aPropos">
      <Banner img={heroBG} text1={''} text2={''} />
      <div className="contentA-Propos">
        {A_Propos.map((propo)=>(
          <CollapseAP propo={propo} key={propo.id}/>
        ))}
      </div>
    </main>
  );
}

export default APropos