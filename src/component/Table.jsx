import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComp = () => {
    const rows = [
        {
            id: 1957,
            nama_ortu: "Dessy",
            alamat: "Raya Tenggilis 127 Apartment Metropolis B1210",
            bulan_masuk: "Lama",
            kota: "Surabaya",
            provinsi: "",
            email: "desipriyatiningsih@gmail.com",
            catatan: "Sudah mendapat pengajar tetapi lesnya selalu dibatalkan sepihak",
            regional: "Surabaya"
        },
        {
            id: 1958,
            nama_ortu: "Desta",
            alamat: "Raya Tenggilis 127 Apartment Metropolis B1210",
            bulan_masuk: "Lama",
            kota: "Surabaya",
            provinsi: "",
            email: "desipriyatiningsih@gmail.com",
            catatan: "Sudah mendapat pengajar tetapi lesnya selalu dibatalkan sepihak",
            regional: "Surabaya"
        },
        {
            id: 1959,
            nama_ortu: "Ani",
            alamat: "Raya Tenggilis 127 Apartment Metropolis B1210",
            bulan_masuk: "Lama",
            kota: "Surabaya",
            provinsi: "",
            email: "desipriyatiningsih@gmail.com",
            catatan: "Sudah mendapat pengajar tetapi lesnya selalu dibatalkan sepihak",
            regional: "Surabaya"
        },
        {
            id: 1960,
            nama_ortu: "Budi",
            alamat: "Raya Tenggilis 127 Apartment Metropolis B1210",
            bulan_masuk: "Lama",
            kota: "Surabaya",
            provinsi: "",
            email: "desipriyatiningsih@gmail.com",
            catatan: "Sudah mendapat pengajar tetapi lesnya selalu dibatalkan sepihak",
            regional: "Surabaya"
        },
        {
            id: 1961,
            nama_ortu: "Johan",
            alamat: "Raya Tenggilis 127 Apartment Metropolis B1210",
            bulan_masuk: "Lama",
            kota: "Surabaya",
            provinsi: "",
            email: "desipriyatiningsih@gmail.com",
            catatan: "Sudah mendapat pengajar tetapi lesnya selalu dibatalkan sepihak",
            regional: "Surabaya"
        }
    ]
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Nama</TableCell>
                        <TableCell >Alamat</TableCell>
                        <TableCell >Bulan Masuk</TableCell>
                        <TableCell >Kota</TableCell>
                        <TableCell >Regional</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={rows.id}>
                            <TableCell >{row.nama_ortu}</TableCell>
                            <TableCell >{row.alamat}</TableCell>
                            <TableCell >{row.bulan_masuk}</TableCell>
                            <TableCell >{row.kota}</TableCell>
                            <TableCell >{row.regional}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComp