import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header'
import SearchPanel from '../SearchPanel/Searchpanel';
import Main from '../Main/main';
import Footer from '../footer/foter';


function App() {
  const [darkmode, setDarkmode] = useState(false)
  const [data, setData] = useState(null)
  const [fiterCityData, setFilterCityData] = useState(null)
  const [filterLeftItem, setFilterLeftItem] = useState(null)
  const [search, setSearch] = useState("")
  const [cnt, setCnt] = useState("")

  const onCahngeTheme = () => {
    setDarkmode(!darkmode)
  }

  const filterCity = (city = "") => {
    switch (city) {
      case "Qarshi": setFilterCityData(data.filter(item => item.region === "Qarshi"));break;
      case "Koson": setFilterCityData(data.filter(item => item.region === "Koson")); break;
      case "Shahrisabz": setFilterCityData(data.filter(item => item.region === "Shahrisabz"));break;
      case "Yakkabog'": setFilterCityData(data.filter(item => item.region === "Yakkabog'")); break;
      default: setFilterCityData(data);
    }
    filterLeft()
  }

  const filterLeft = (el) => {
    switch (el) {
      case "IT markazlari": setFilterLeftItem(fiterCityData.filter(elem => elem.direction === "IT"));break;
      case "Abituriyentlarni tayyorlash kurslari": setFilterLeftItem(fiterCityData.filter(elem => elem.direction === "Abiturient"));break;
      case "Kasb Hunar o'rgatish markazlari": setFilterLeftItem(fiterCityData.filter(elem => elem.direction === "Service"));break;
      case "Bolalar uchun tayyorlov markazlari": setFilterLeftItem(fiterCityData.filter(elem => elem.direction === "Kids"));break;
      default: setFilterLeftItem(fiterCityData);
    }
  }

  async function getData() {
    await fetch(
      "https://json-base-git-main-sardors-projects-643d5d36.vercel.app/api.json"
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch(console.error("Serverda xatolik mavjud!"));

      filterCity()
  }

  const getProps = (cnt) =>{ 
    setCnt(cnt)
  }
  useEffect(() => {
    getData()
  }, [cnt])

  return (
    <div className="App">
      <Header getProps = {getProps} darkmode={darkmode} onCahngeTheme={onCahngeTheme} filterCity={filterCity} />
      <SearchPanel darkmode={darkmode} setSearch={setSearch}/>
      <Main darkmode={darkmode} data={filterLeftItem} filterLeft={filterLeft} search={search}/>
      <Footer darkmode={darkmode} />
    </div>
  );
}
export default App;