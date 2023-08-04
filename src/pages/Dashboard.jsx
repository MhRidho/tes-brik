import React from "react";
import Pagination from "../components/Pagination";
import {AiFillFileExcel} from "react-icons/ai"

function Dashboard() {
  return (
    <div className="w-full border-2 mt-5">
      <div className="flex justify-evenly pt-5 pb-5">
        <h2 className="rounded-sm">
          List Produk
        </h2>
        <input type="text" className="bg-gray-50 p-1 border-2 border-blue-400 rounded-sm" placeholder="Search produk"/>
      </div>
      <table className="w-full ">
        <thead className="bg-red-400 border-b-2 border-blue-200 text-white">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              No
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Nama Produk
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Jumlah
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Keterangan
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="p-3 text-sm text-gray-700">1</td>
            <td className="p-3 text-sm text-gray-700 cursor-pointer" title="Detail produk">Monitor</td>
            <td className="p-3 text-sm text-gray-700">10</td>
            <td className="p-3 text-sm text-gray-700">Active</td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
<div className="flex justify-around items-center ">
  <Pagination/>
  <button className="flex items-center p-1 border-2 bg-blue-300 border-gray-400 rounded-sm ">
<AiFillFileExcel className=""/>
 Download Excel</button>
</div>

    </div>
  );
}

export default Dashboard;