import React, { Component } from "react";
import { getCustomers, deleteCustomer } from "../services/customerService";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import CustomersTable from "./customersTable";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import _ from "lodash";
import SearchBox from "./searchBox";

class Customers extends Component {
  state = {
    customers: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };
  async componentDidMount() {
    const { data: customers } = await getCustomers();
    this.setState({ customers });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = async (customer) => {
    //console.log(movie);
    const originalCustomers = this.state.customers;

    const customers = this.state.customers.filter(
      (m) => m._id !== customer._id
    );
    this.setState({ customers });

    try {
      await deleteCustomer(customer._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This customer has already been deleted.");

      this.setState({ customers: originalCustomers });
    }
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      customers: allCustomers,
    } = this.state;

    let filtered = allCustomers;
    if (searchQuery)
      filtered = allCustomers.filter((m) =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { user } = this.props;

    const { totalCount, data: customers } = this.getPagedData();

    return (
      <div className="row">
        <div className="col">
          {user && (
            <Link
              to="/customers/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Customer
            </Link>
          )}
          <p>Showing {totalCount} customers in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <CustomersTable
            customers={customers}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />

          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Customers;
