import React, { useEffect, useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';

const Home = () => {
    const [tableData, setTableData] = useState([]);
    const [order, setOrder] = useState("ASC");

    useEffect(() => {
        fetch('TableTestData.json')
            .then(res => res.json())
            .then(data => setTableData(data))
    }, [])


    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...tableData].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setTableData(sorted);
            setOrder("DSC")
        };
        if (order === "DSC") {
            const sorted = [...tableData].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setTableData(sorted);
            setOrder("ASC")
        };
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-1/2 mx-auto mt-10">
                    <thead>
                        <tr className='border'>
                            <th onClick={() => sorting("name")}>Name <BiSortAlt2 className='inline-block' /></th>
                            <th onClick={() => sorting("city")}>City <BiSortAlt2 className='inline-block' /></th>
                            <th onClick={() => sorting("email")}>Email Address <BiSortAlt2 className='inline-block' /></th>
                            <th onClick={() => sorting("joiningDate")}>Joining Date <BiSortAlt2 className='inline-block' /></th>
                            <th onClick={() => sorting("role")}>Role <BiSortAlt2 className='inline-block' /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((singleTableData, idx) => <tr key={idx} className='border'>
                                <td className='flex'>
                                    <img className='pr-2' src={singleTableData.avatar} alt="" />
                                    <span>{singleTableData.name}</span>
                                </td>
                                <td>{singleTableData.city}</td>
                                <td><a href="#" className='text-blue-600 underline'>{singleTableData.email}</a></td>
                                <td>{singleTableData.joiningDate}</td>
                                <td>{singleTableData.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-1/2 mx-auto mt-10 ">
                    <thead>
                        <tr className='border'>
                            <th onClick={() => sorting("name")}>Name <BiSortAlt2 className='inline-block' /></th>
                            <th>Email Address</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((singleTableData, idx) => <tr key={idx} className='border'>
                                <td className='flex'>
                                    <img className='pr-2' src={singleTableData.avatar} alt="" />
                                    <span>{singleTableData.name}</span>
                                </td>
                                <td><a href="#" className='text-blue-600 underline'>{singleTableData.email}</a></td>
                                <td>{singleTableData.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-1/2 mx-auto mt-10">
                    <thead>
                        <tr className='border'>
                            <th>Email Address</th>
                            <th onClick={() => sorting("joiningDate")}>Joining Date <BiSortAlt2 className='inline-block' /></th>
                            <th onClick={() => sorting("role")}>Role <BiSortAlt2 className='inline-block' /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((singleTableData, idx) => <tr key={idx} className='border'>
                                <td>{singleTableData.email}</td>
                                <td>{singleTableData.joiningDate}</td>
                                <td>{singleTableData.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-1/2 mx-auto mt-10">
                    <thead>
                        <tr className='border'>
                            <th>Name</th>
                            <th onClick={() => sorting("city")}>City <BiSortAlt2 className='inline-block' /></th>
                            <th>Joining Date</th>
                            <th onClick={() => sorting("role")}>Role <BiSortAlt2 className='inline-block' /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((singleTableData, idx) => <tr key={idx} className='border'>
                                <td className='flex'>
                                    <img className='pr-2' src={singleTableData.avatar} alt="" />
                                    <span>{singleTableData.name}</span>
                                </td>
                                <td>{singleTableData.city}</td>
                                <td>{singleTableData.joiningDate}</td>
                                <td>{singleTableData.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;