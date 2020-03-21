import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from './gql';
import Loader from './Loader';


const { useCallback, useMemo, memo, lazy, Suspense } = React;

const TableView = lazy(() => import('./Table'));

const CountriesTable = () => {
    const { loading, data, error } = useQuery(GET_COUNTRIES)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const rows = useMemo(() => data && data.countries ? data.countries : [], [data])


    const emptyRows = useMemo(() => rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage), [rows.length, page , rowsPerPage]);

    const handleChangePage = useCallback((event, newPage) => {
        setPage(newPage);
    }, [setPage]);

    const handleChangeRowsPerPage = useCallback(event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }, [setRowsPerPage, setPage]);

    const formatedRows = useMemo(() => {
        return rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
     }, [rows, rowsPerPage, page])

    return (
        <TableContainer component={Paper}>

            <Suspense fallback={<Loader loading={loading} error={JSON.stringify(error)} />}>
                <TableView
                    emptyRows={emptyRows}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    page={page}
                    rowLength={rows.length}
                    rowsPerPage={rowsPerPage}
                    rows={formatedRows}
                />
            </Suspense>
        </TableContainer>
    );
}

export default memo(CountriesTable)



