import React from 'react';
import './table.css'
import Header from '../Header/Header';
function Table() {
    return (
        <>       <div className="mbox col-9 ">     <Header />
            <div className="table-responsive
                tab  col-12 ">
                <table className='table text-center  tab2'>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td> <th className="thead">Invoice ID</th>
                            <th className="thead">Date</th>
                            <th className="thead">Customer
                            </th>
                            <th className="thead">Payable Amount</th>                    <th className="thead">PaidAmount</th>
                            <th className="thead">Due</th>
                        </tr>
                        <tr className="2">
                            <td><input type="checkbox" /></td>  <td className="tdid">#AHGA68</td>
                            <td className="t">23 /09 / 202</td>
                            <td className="t">vijay</td>
                            <td className="t">1100</td>
                            <td className="t">1000</td>
                            <td className="t">1000</td>
                        </tr>
                        <tr className="3">
                            <td><input type="checkbox" /></td>  <td className="tdid">'#AHGA68'</td>
                            <td className="t">23 /09 / 2022</td>
                            <td className="t">bala</td>
                            <td className="t">2100</td>
                            <td className="t">2000</td>
                            <td className="t">2000</td>
                        </tr>
                        <tr className="4">
                            <td><input type="checkbox" /></td> <td className="tdid">'#AHGA68'</td>
                            <td className="t">23 /09 / 2022</td>
                            <td className="t">sathya</td>
                            <td className="t">3100</td>
                            <td className="t">3000</td>
                            <td className="t">3000</td>
                        </tr>
                        <tr className="5">
                            <td><input type="checkbox" /></td>  <td className="tdid">'#AHGA68'</td>
                            <td className="t">23 /09 / 2022</td>
                            <td className="t">ashok</td>
                            <td className="t">4100</td>
                            <td className="t">4000</td>
                            <td className="t">4000</td>
                        </tr>
                        <tr className="6">
                            <td><input type="checkbox" /></td> <td className="tdid">'#AHGA68'</td>
                            <td className="t">23 /09 / 2022</td>
                            <td className="t">Jack</td>
                            <td className="t">5100</td>
                            <td className="t">5000</td>
                            <td className="t">5000</td>
                        </tr>
                        <tr className="7">
                            <td><input type="checkbox" /></td> <td className="tdid">#AHGA68</td>
                            <td className="t">23 /09 / 2022</td>
                            <td className="t">Marcus</td>
                            <td className="t">6100</td>
                            <td className="t">6000</td>
                            <td className="t">6000</td>
                        </tr>
                        <tr className="8">
                            <td><input type="checkbox" /></td> <td className="tdid">#AHGA68</td>
                            <td className="t">23 /09 / 2022</td>
                            <td className="t">Jacob </td>
                            <td className="t">7100</td>
                            <td className="t">7000</td>
                            <td className="t">7000</td>
                        </tr>
                        <tr className="9">
                            <td><input type="checkbox" /></td> <td className="tdid">#AHGA68</td>
                            <td className="t">23 /09 / 2022</td>
                            <td className="t">sam</td>
                            <td className="t">8100</td>
                            <td className="t">8000</td>
                            <td className="t">8000</td>
                        </tr>
                        <tr className="10">
                            <td><input type="checkbox" className='ti' /></td> <td className="tdid">#AHGA68</td>
                            <td className="t">23 /09 / 2022</td>
                            <td className="t">akash</td>
                            <td className="t">9100</td>
                            <td className="t">9000</td>
                            <td className="t">9000</td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </div>
        </>

    );
}

export default Table;