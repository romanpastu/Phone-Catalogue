import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import InfoPanel from './InfoPanel.js';
import './Table.css';

export default function TablePhones(props) {
  const rows = props.phones;

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    {
      id: 'name', numeric: false, disablePadding: true, label: 'Name',
    },
    {
      id: 'manufacturer',
      numeric: false,
      disablePadding: false,
      label: 'Manufacturer',
    },
    {
      id: 'color', numeric: true, disablePadding: false, label: 'Color',
    },
    {
      id: 'price', numeric: true, disablePadding: false, label: 'Price',
    },
    {
      id: 'screen', numeric: true, disablePadding: false, label: 'Screen',
    },
    {
      id: 'processor', numeric: true, disablePadding: false, label: 'Processor',
    },
    {
      id: 'ram', numeric: true, disablePadding: false, label: 'Ram',
    },
  ];

  function EnhancedTableHead(props) {
    const {
      classes, order, orderBy, onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedPhoneInfo, setSelectedPhoneInfo] = React.useState({
    id: '',
    name: '',
    manufacturer: '',
    description: '',
    color: '',
    price: '',
    screen: '',
    processor: '',
    ram: '',
  });

  const handleClick = (event, name, id, manufacturer, description, color, price, imageFileName, screen, processor, ram) => {
    setIsSelected(true);
    console.log(name, id, manufacturer, description, color, price, imageFileName, screen, processor, ram);
    const obj = { ...selectedPhoneInfo };

    obj.id = id;
    obj.name = name;
    obj.manufacturer = manufacturer;
    obj.description = description;
    obj.color = color;
    obj.price = price;
    obj.imageFileName = imageFileName;
    obj.screen = screen;
    obj.processor = processor;
    obj.ram = ram;

    setSelectedPhoneInfo(obj);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const toggleIsSelected = (val) => {
    setIsSelected(val);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className="tableContainer">
      <div>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <TableContainer>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
                aria-label="enhanced table"
              >
                <EnhancedTableHead
                  classes={classes}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                            <TableRow
                                hover
                                onClick={(event) => handleClick(event, row.name, row.id, row.manufacturer, row.description, row.color, row.price, row.imageFileName, row.screen, row.processor, row.ram)}
                                role="checkbox"
                                tabIndex={-1}
                                key={row.name}
                              >
                                <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                  >
                                    {row.name}
                                  </TableCell>
                                <TableCell align="right">{row.manufacturer}</TableCell>
                                <TableCell align="right">{row.color}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.screen}</TableCell>
                                <TableCell align="right">{row.processor}</TableCell>
                                <TableCell align="right">{row.ram}</TableCell>

                              </TableRow>

                      );
                    })}
                  {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                  )}
                </TableBody>

              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
        {isSelected ? <InfoPanel toggleIsSelected={toggleIsSelected} selectedPhoneInfo={selectedPhoneInfo} /> : null}
      </div>
    </div>
  );
}
