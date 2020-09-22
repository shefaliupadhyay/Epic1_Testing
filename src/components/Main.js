import React, { useState, useEffect } from 'react';
import './Main.css'; 
function ApiContent() {
  const [name, setName] = useState('');
  const [id, setId] = useState(0);
  const [streamId, setStreamId] = useState('');
  const [subjects, setSubjects] = useState('');
  const [percentage, setPercentage] = useState(0);
  const [cgpa, setCgpa] = useState(0);
  const [fresult, setResult] = useState('');
  let result;

  const submitValue = (e) => {
    e.preventDefault();
    if(fresult === "true"){
      result = true;
    }
    else{
      result = false;
    }

    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    console.log(typeof time);

    const form_details = {
      'id' : id,
      'name' : name,
      'subjects': subjects.split(", "),
      'percentage': percentage,
      'CGPA': cgpa,
      'stream_id': streamId,
      'result': result,
      'result_date': time
    }

    const stream_details = [
      {
        "stream_name": "Computer Science and Engineering",
        "id": "CSE",
        "created_date": time
      },
      {
        "stream_name": "Information Technology",
        "id": "IT",
        "created_date": time
      },
      {
        "stream_name": "Master of Business Administration",
        "id": "MBA",
        "created_date": time
      },
      {
        "stream_name": "Bachelor of Business Administration",
        "id": "BBA",
        "created_date": time
      },
      {
        "stream_name": "Master of Engineering",
        "id": "MTech",
        "created_date": time
      }
    ];
    add(form_details, stream_details);
  }

  useEffect(() => {
    setTimeout(async () => {
      get();
    }, 1000)
  }, []);

  const add = async (form_details, stream_details) => {
    console.log(form_details);
    console.log(stream_details);
  };

  const get = async () => {
    
  };

  const deleteData = async (id) => {
    console.log("Delete");
  };

  return (
    <React.Fragment>
    <div className="container font">
      <div className="row">
        <form className="col-12 p-4">
          <div className="form-inline">
            <div className="col-md-12 form-group mb-2">
              <label className="col-sm-2 col-form-label">Student Name</label>
              <input type="text" className="form-control col-sm-10" onChange={e => setName(e.target.value)} />
            </div>
            <div className="col-md-12 form-group mb-2">
              <label className="col-sm-2 col-form-label">Student ID</label>
              <input type="number" className="form-control col-sm-10" onChange={e => setId(parseInt(e.target.value), 10)}/>
            </div>
            <div className="col-md-12 form-group mb-2">
              <label className="col-sm-2 col-form-label">Stream ID</label>
              <input type="text" className="form-control col-sm-10" onChange={e => setStreamId(e.target.value)}/>
            </div>
            <div className="col-md-12 form-group mb-2">
              <label className="col-sm-2 col-form-label">Subjects</label>
              <input type="text" className="form-control col-sm-10" onChange={e => setSubjects(e.target.value)}/>
            </div>
            <div className="col-md-12 form-group mb-2">
              <label className="col-sm-2 col-form-label">Percentage</label>
              <input type="number" step="0.01" className="form-control col-sm-10" onChange={e => setPercentage(parseFloat(e.target.value))}/>
            </div>
            <div className="col-md-12 form-group mb-2">
              <label className="col-sm-2 col-form-label">CGPA</label>
              <input type="number" step="0.01" className="form-control col-sm-10" onChange={e => setCgpa(Number(e.target.value))}/>
            </div>
            <div className="col-md-12 form-group mb-2" onChange={e => setResult(e.target.value)}>
              <div className="form-check form-check-inline col-md-5">
                <input className="form-check-input" type="radio" value="true" name="result" id="pass"/>
                <label className="form-check-label">Pass</label>
              </div>
              <div className="form-check form-check-inline col-md-5">
                <input className="form-check-input" type="radio" value="false" name="result" id="fail"/>
                <label className="form-check-label">Fail</label>
              </div>
            </div>
          </div>
          <div className="col-md-12 form-group mb-2">
            <button className="btn btn-primary col-md-6" type="button" onClick={(event) => submitValue(event)}>Submit</button>
            <button type="reset" className="btn btn-warning col-md-6">Reset</button>
          </div>
        </form>
      </div>
      <React.Fragment>
        <div className="row">
          <button className="btn btn-info col-12 my-2">Get All Data</button>
          <button className="btn btn-success col-12 mb-4">Update</button>
          <table className="table table-hover col-12 text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Subjects</th>
                <th>Percentage</th>
                <th>CGPA</th>
                <th>Stream</th>
                <th>Result</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>Shefali</td>
                  <td>Maths</td>
                  <td>79</td>
                  <td>7.9</td>
                  <td>CSE</td>
                  <td>pass</td>
                  <td><button className="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    </div>
    </React.Fragment>
  );
}
export default ApiContent;
