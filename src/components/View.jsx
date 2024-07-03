import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const View = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
      axios.get('https://dummyjson.com/users')
        .then((res) => {
          setRows(res.data.users);
        })
        .catch((error) => {
          console.error("There was an error fetching the users!", error);
        });
    }, []);

    return (
      <div>
        <TableContainer style={{ marginTop: '20px' }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(rows) && rows.map((row) => (
                <TableRow
                  key={row.id} // Assuming each user has a unique `id`
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
};
