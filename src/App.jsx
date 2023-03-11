import React, { useState, useEffect } from 'react';
import Support from './components/Support';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav'
import "./App.scss";

function App() {
  let [memberInfo, setMemberInfo] = useState(null); //intilize the value as null, setMemberInfo will change the value of memberInfo
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast(); //using with state so item receive is fed to the cast variable 
  });

  return (
    <>
      <Nav cast={cast} onChoice={(memberInfo) => {setMemberInfo(memberInfo)}}/>

      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the Stargazers</h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast cast={cast} onChoice={ (info) => {setMemberInfo(info)}}/>
          { memberInfo && <Modals member={memberInfo} handleClose={() => { setMemberInfo(null)}} handleChange={(info) => {setMemberInfo(cast[info])}}/> }
          <Support />
        </hgroup>     
      </div>
    </>
  )
}
export default App
