import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import sum from "lodash.sum";
import { makeDateSexy } from "../../utils";
import {
  Card,
  BlocksHeader,
  BlocksRow,
  TxHeader,
  TxRow
} from "../../Components/Shared";

const TableContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;

const HomePresenter = ({ blocks, transactions }) => (
  <Fragment>
    <TableContainer>
      <h2>Latest Blocks</h2>
      <Card>
        <BlocksHeader />
        {blocks.map((block) => (
          <BlocksRow
            index={block.index}
            hash={block.hash}
            timestamp={makeDateSexy(block.timestamp)}
            difficulty={block.difficulty}
          />
        ))}
      </Card>
    </TableContainer>
    <TableContainer>
      <h2>Latest Transactions</h2>
      <Card>
        <TxHeader />
        {transactions.map((transaction) => (
          <TxRow
            timestamp={makeDateSexy(transaction.timestamp)}
            id={transaction.id}
            insOuts={`${transaction.txIns.length}/${transaction.txOuts.length}`}
            amount={sum(transaction.txOuts.map((txOut) => txOut.amount))}
          />
        ))}
      </Card>
    </TableContainer>
  </Fragment>
);

HomePresenter.propTypes = {
  blocks: PropTypes.array.isRequired,
  transactions: PropTypes.array.isRequired
};
export default HomePresenter;
