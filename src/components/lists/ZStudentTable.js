import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ZStudenTable.css';

// component style : theme for cells
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'rgb(219, 61, 68)',
    color: 'white',
    fontSize: 18,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

// component style : theme for rows
const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

// component style
const useStyles = makeStyles(theme => ({
  root: {
    height: 600,
    width: '150%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
    justifyContent: 'center',
  },
  table: {
    minWidth: 'auto',
  },
  head: {
    minWidth: 'auto !important',
    position: 'sticky',
    top: 0,
  },
}));

// component structure
function ZStudentTable({listStudents, selectStudent}) {
  const classes = useStyles();
  return (
    <React.Fragment>
    <h1 className='title'>Eligible students</h1>
    <div className='table'>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.head}>
                First Name
              </StyledTableCell>
              <StyledTableCell className={classes.head}>
                Last Name
              </StyledTableCell>
              <StyledTableCell className={classes.head}>Course</StyledTableCell>
              <StyledTableCell className={classes.head}>
                Select eligible student
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listStudents.map(student => (
              <StyledTableRow key={student.id}>
                <StyledTableCell>
                  {JSON.stringify(student.firstName).slice(1, -1)}
                </StyledTableCell>
                <StyledTableCell>
                  {JSON.stringify(student.lastName).slice(1, -1)}
                </StyledTableCell>
                {student.courses.map(course => (
                  <StyledTableCell key={course.id}>
                    {JSON.stringify(course.name).slice(1, -1)}
                  </StyledTableCell>
                ))}
                <StyledTableCell>
                  <button
                    className='button select-table-btn'
                    onClick={() => selectStudent(student.id)}>
                    Select
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
    </React.Fragment>
  );
}

export default ZStudentTable;
