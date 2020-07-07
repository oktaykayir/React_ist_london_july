import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ProductSearch from "./DataSearch";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '10px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
    formControl: {
        margin: 0,
        fullWidth: true,
        display: 'flex',
        wrap: 'nowrap'
    },

}));


export class UserData {
    _id: '';
    isActive: '';
    price: '';
    picture: '';
    name: '';
    about: '';
    tags: []
}

const initialValue = [{ _id: '',
isActive: '',
price: '',
picture: '',
name: '',
about: '',
tags: [] }];


function App() {

    const [products, setProducts] = React.useState(initialValue);

    const classes = useStyles();

    return (
        <>
            <ProductSearch onInput={selection => setProducts(selection)}/>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                    <caption>secilenler</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">price</TableCell>
                            <TableCell align="right">about</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.about}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default App;
