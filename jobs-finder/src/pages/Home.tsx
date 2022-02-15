import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { randLine, randUuid } from "@ngneat/falso";
import { Link } from "react-router-dom";

const rows = Array(10)
  .fill(0)
  .map(() => ({
    id: randUuid(),
    text: randLine(),
    done: Math.random() > 0.5 ? "Done" : "Not done yet",
    createdAt: new Date(),
  }));

const columns = ["ID", "Text", "Complete", "Created"];

export default function Home() {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={"/todos/" + row.id}>{row.id}</Link>
              </TableCell>
              <TableCell align="right">{row.text}</TableCell>
              <TableCell align="right">{row.done}</TableCell>
              <TableCell align="right">{row.createdAt.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={5}
              page={1}
              SelectProps={{
                native: true,
              }}
              onPageChange={() => {}}
              onRowsPerPageChange={() => {}}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
