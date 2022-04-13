import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import './Table.css'

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [
   {
       acType: "Minimum Investment",
       xtenM: "10",
       XtenP: "500",
       xtenV: "1000"
   },
   {
       acType: "Spreads",
       xtenM: "Variable",
       XtenP: "Start 0.0 pips",
       xtenV: "Start 0.0 pips"
   },
   {
       acType: "Commissions",
       xtenM: "Cross icon",
       XtenP: "6$",
       xtenV: "4$"
   },
   {
       acType: "Leverage",
       xtenM: "1:500",
       XtenP: "1:500",
       xtenV: "1:500"
   },
   {
       acType: "Minimum Size",
       xtenM: "0.01",
       XtenP: "0.01",
       xtenV: "0.01"
   },
   {
       acType: "Stop Out",
       xtenM: "10%",
       XtenP: "10%",
       xtenV: "10%"
   },
   {
       acType: "Margin Call",
       xtenM: "100%",
       XtenP: "100%",
       xtenV: "100%"
   },
   {
       acType: "Execution Type",
       xtenM: "NDD",
       XtenP: "NDD",
       xtenV: "NDD"
   },
   {
       acType: "Scalping",
       xtenM: "Yes",
       XtenP: "Yes",
       xtenV: "Yes"
   },
   {
       acType: "EAs",
       xtenM: "Yes",
       XtenP: "Yes",
       xtenV: "Yes"
   },
   {
       acType: "VPS",
       xtenM: "No",
       XtenP: "No",
       xtenV: "Free"
   }
];

const Root = styled('div')`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #ddd;
  }
`;

const CustomTablePagination = styled(TablePaginationUnstyled)`
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }

  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }

  & .MuiTablePaginationUnstyled-actions {
    display: flex;
    gap: 0.25rem;
  }
`;

export default function UnstyledTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(11);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    return (
        <Root className='root'  sx={{ maxWidth: '100%', width: '100%' }}>
            <table aria-label="custom pagination table" >
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center', fontSize: '20px', padding: '25px',backgroundColor: "rgba(8, 8, 63, 0.877)",color: 'white' }}>Account Type</th>
                        <th style={{ textAlign: 'center', fontSize: '20px',backgroundColor: "rgba(8, 8, 63, 0.877)",color: 'white'}}>XTen Mini</th>
                        <th style={{ textAlign: 'center', fontSize: '20px',backgroundColor: "rgba(8, 8, 63, 0.877)",color: 'white'  }}>XTen PRO</th>
                        <th style={{ textAlign: 'center', fontSize: '20px',backgroundColor: "rgba(8, 8, 63, 0.877)" ,color: 'white' }}>XTen VIP</th>
                    </tr>
                </thead>
                <tbody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <tr key={row.name}>
                            <td style={{ width: 560, textAlign: 'center' }}>{row.acType}</td>
                            <td style={{ width: 560, textAlign: 'center', padding: '17px' }}>
                                {row.xtenM}
                            </td>
                            <td style={{ width: 560, textAlign: 'center' }}>
                                {row.XtenP}
                            </td>
                            <td style={{ width: 560, textAlign: 'center' }}>
                                {row.xtenV}
                            </td>
                        </tr>
                    ))}

                </tbody>
               
            </table>
        </Root>
    );
}
