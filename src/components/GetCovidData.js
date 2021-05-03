import React, { useState, useEffect } from "react";
import CovidData from "../utils/CovidData.json";
function GetCovidData() {
  const [data, setData] = useState([]);
  const [state, setState] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [tableData, setTableData] = useState([]);

  const convertToJson = (data) => {
    let emptyArray = [];
    Object.keys(data).forEach((ele) =>
      emptyArray.push({
        state: ele,
        data: data[ele],
      })
    );
    setData(emptyArray);
  };

  const fetchCovidData = () => {
    const URL = "https://api.covid19india.org/state_district_wise.json";

    convertToJson(CovidData);
    console.log(data);
    //  console.log(finalCovidData)
    // const [{state}] = finalCovidData;
    // setData(finalCovidData);
  };
  const getCases = (event) => {
    console.log(event.target.value);
    let districtsCovidData = [];
    Object.keys(districts).forEach((ele) => {
      districtsCovidData.push({
        districtName: ele,
        cases: districts[ele],
      });
    });
    const districtData = districtsCovidData.filter((ele) => {
      if (ele.districtName === event.target.value) {
        return ele;
      }
    });
    // console.log(districtData);
    setTableData(districtData);
  };

  useEffect(() => {
    fetchCovidData();
  }, []);
  
  const getState = (event) => {
    console.log(event.target.value);
    const districtData = data.filter((ele) => {
      if (ele.state === event.target.value) {
        return ele.data.districtData;
      }
    });
    // debugger;
    let districts = districtData[0].data.districtData;
    let dist = Object.keys(districts);
    // const districtsArray = Object.values(districts);
    setDistricts(districts);
    setState(dist);
  };
  return (
    <div>
      <select onChange={getState}>
        {data.map((ele) => (
          <option key={ele.state}> {ele.state} </option>
        ))}
      </select>

      <select onChange={getCases}>
        {state.map((ele) => (
          <option key={ele}>{ele}</option>
        ))}
      </select>
      <div>
        {tableData.map((ele) => (
          <table>
            <thead>
              {console.log(ele)}
              <tr>
                <th>active</th>
                <th>confirmed</th>
                <th>migratedother</th>
                <th>deceased</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ele.districtName}</td>
                {/* <td>{console.log(ele.cases)}</td> */}
                {Object.values(ele.cases).map((ele) => (
                  <>
                    <td>{console.log(ele)}</td>
                    {/* <td>{console.log(ele)}</td> */}
                  </>
                ))}
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}

export default GetCovidData;
