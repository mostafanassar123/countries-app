import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import TablePaginationActions from './TablePaginationActions' 
import { useTableStyles } from './styles'

const rowsPerPageOptions = [5, 10, 25, { label: 'All', value: -1 }]


const TableView = ({ 
    handleChangePage,
    emptyRows,
    handleChangeRowsPerPage,
    rowsPerPage,
    page,
    rows,
    rowLength
 }) => {
    const classes = useTableStyles();
    const history = useHistory();

    const onShowCountry = useCallback((code) => () => {
        history.push(`country-details/${code}`)
    }, [history])


    return (
        <Table className={classes.table} aria-label="custom pagination table">
            <TableHead>
                <TableRow>
                    <TableCell component="th" scope="row">code</TableCell>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell align="right">emoji</TableCell>
                    <TableCell align="right">action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.code}>
                        <TableCell component="th" scope="row">{row.code}</TableCell>
                        <TableCell>
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.emoji}</TableCell>
                        <TableCell align="right">
                            <IconButton size="small" onClick={onShowCountry(row.code)}> 
                                <RemoveRedEyeIcon color="primary" />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}

                {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                )}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={rowsPerPageOptions}
                        colSpan={3}
                        count={rowLength}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: { 'aria-label': 'rows per page' },
                            native: true,
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
            </TableFooter>
        </Table>
    )
}

export default memo(TableView)