import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import { useTable } from 'react-table';
import data from '../../data/bdata';
import './Records.css';
import ReactTable from "react-table";
import "react-table/react-table.css";




export default class Records extends Component {

    
    openbubblechart(row){
        console.log('works',row)
    }

    render() {
        return(
            <div className='Table-container'>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            // Header: 'Expand',
                            columns: [
                            {
                                Header: () => (<span>&#x22C4;</span>),
                                expander: true,
                                width: 65,
                                Expander: ({ isExpanded, ...rest}) => (
                                    <div>
                                    {isExpanded ? (
                                      <span>&#x25BE;</span>
                                    ) : (
                                      <span>&#x25B8;</span>
                                    )}
                                  </div>
                                ),
                                style: {
                                    cursor: "pointer",
                                    fontSize: 25,
                                    padding: "0",
                                    textAlign: "center",
                                    userSelect: "none"
                                  }
                            }
                            ]
                        },
                        {
                            Header: 'Country',
                            accessor: 'id',
                            style:{
                                cursor: "pointer",
                                textAlign: "center",
                            },
                            
                        },
                        {
                            Header: 'Score',
                            accessor: 'value'
                        },

                    ]}
                    showPagination ={false}
                    defaultPageSize= {5}
                    getTdProps={(state, rowInfo, column, instance) =>{
                        return {
                          onClick: (e, handleOriginal) => {

                            // console.log('It was in this row:', rowInfo)

                            this.props.sendRecord(rowInfo.original)
                     
                            if (handleOriginal) {
                              handleOriginal()
                            }
                          }
                        }
                      }}
                    // className= {'cell-style'}
                    // style={{ padding: '10px'}}
                    // getProps={(e) => console.log(e)}
                    SubComponent={v => console.log(v) || (
                        // <div> {v.original.children.map((cities) => console.log(cities))  }</div>
                        <div style={{ padding: "20px" }}>
                            <ReactTable 
                            data={v.original.children}
                            columns={[
                                {
                                    Header: 'City',
                                    accessor: 'id'
                                },
                                {
                                    Header: 'Score',
                                    accessor: 'value'
                                },
                            ]}
                            showPagination ={false}
                            defaultPageSize= {v.original.children.length}
                            >
                            </ReactTable>
                        </div>
                      )}
                    
                >

                </ReactTable>
            </div>
        )
      }
}
