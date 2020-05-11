// Table.js
import React, {useState} from "react";
import {useTable, useFilters, useSortBy} from "react-table";

export default function Table({columns, data}) {
    const [filterInput,
        setFilterInput] = useState("");
    // Table component logic and UI come here
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
        setFilter
    } = useTable({
        columns,
        data
    }, useFilters, useSortBy);
    console.log(rows)

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("fullname", value);
        setFilterInput(value);
    };

    return ( <div> <input
        value={filterInput}
        onChange={handleFilterChange}
        className="form-control w3-input w3-animate-input w3-centered"
        placeholder={"Search name"}/> < br /> <div className="w3-center">
        <div className="w3-responsive w3-card-4">
            <table className="w3-table w3-bordered w3-centered" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr className="w3-black" {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup
                                .headers
                                .map(column => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className={column.isSorted
                                        ? column.isSortedDesc
                                            ? "sort-desc"
                                            : "sort-asc"
                                        : ""}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        console.log(row)
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row
                                    .cells
                                    .map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                    })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div> </div>
  );
}