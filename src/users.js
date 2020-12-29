import React, { useEffect, useState } from 'react';
import useHooks from './common/CustomHooks';

import validate from './common/Validation/registeration';
import UserAPI from './api/users.js';

const RESET_VALUES = {
    first_name: '',
    last_name: '',
    mobile:'',
    email: '',
    country_code:'',
};
 
export default function Users() {

    const [searchText, setSearchText] = useState('');
    const [userList, setUserList] = useState([]);
    
    const isNotNullNUndefined = (value) => {
        return (value !== null && value !== undefined)
    }

    const submitPage = async () => {
        try{
            const result = await UserAPI.register({
                first_name: inputs.first_name,
                last_name: inputs.last_name,
                mobile: inputs.mobile,
                email: inputs.email,
                country_code: inputs.country_code
            });
            alert('insert successfully');
            handleReset(RESET_VALUES);
            getUserList();
        }catch(e){
            console.log('Error...', e);
        }
    }

    const getUserList = async  () => {
        try{
            const result = await UserAPI.getUserList({
                searchText: searchText
            });                       
            setUserList(result.userList);
        }catch(e){
            console.log('Error...', e);
        }
    }
    

    useEffect(() => {
        getUserList();
    },[searchText]);

    const { inputs, errors, handleChange, handleReset, handleSubmit } = useHooks(RESET_VALUES, submitPage, validate);

  return (
    <div>
        <div>
            <p>Regiter User</p>
            <input type="text" placeholder="First Name" id="first_name" name="first_name" value={inputs.first_name} onChange={handleChange} />
            <br />
            {(isNotNullNUndefined(errors.first_name)) && <span style={{color: 'red'}}>{errors.first_name}</span> }
            <br />
            <input type="text" placeholder="Last Name" id="last_name" name="last_name" value={inputs.last_name} onChange={handleChange} />
            <br />
            {(isNotNullNUndefined(errors.last_name)) && <span style={{color: 'red'}}>{errors.last_name}</span> }
            <br />
            <input type="text" placeholder="Email " id="email" name="email" value={inputs.email} onChange={handleChange} />
            <br />
            {(isNotNullNUndefined(errors.email)) && <span style={{color: 'red'}}>{errors.email}</span> }
            <br />
            <input type="text" placeholder="Mobile" id="mobile" name="mobile" value={inputs.mobile} onChange={handleChange} />
            <br />
            {(isNotNullNUndefined(errors.mobile)) && <span style={{color: 'red'}}>{errors.mobile}</span> }
            <br />
            <input type="text" placeholder="Country Code" id="country_code" name="country_code" value={inputs.country_code} onChange={handleChange} />
            <br />
            {(isNotNullNUndefined(errors.country_code)) && <span style={{color: 'red'}}>{errors.country_code}</span> }
            <br /><br />
            <input type="button" value="Submit" onClick={handleSubmit} />
        </div>
        <div>
            <br />
            <br />
            <p>Search User</p>
            <input  type="text" placeholder="Search box" id="search" name="search" value = {searchText} onChange={(e) => {setSearchText(e.target.value)}} />
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                        <td>Country Code</td>
                    </tr>
                </thead>
                <tbody>
                    {(userList || []).map((data, index) => {
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.email}</td>
                                <td>{data.mobile}</td>
                                <td>{data.country_code}</td>
                            </tr>
                        )
                    })}                    
                </tbody>                
            </table>
        </div>
    </div>
  );
}


