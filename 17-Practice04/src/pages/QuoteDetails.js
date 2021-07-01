import { Fragment, useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "Karn", text: "A Karn new quote" },
  {
    id: "q2",
    author: "Managorger hydra",
    text: "A Managorger hydra new quote",
  },
  {
    id: "q3",
    author: "Quasali Pridemage",
    text: "A Quasali Pridemage new quote",
  },
  { id: "q4", author: "Urza", text: "A Urza new quote" },
];

const QuoteDetails = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered">{error}</div>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }

  const quoteComments = `${match.url}/comments`;
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={quoteComments}>
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={quoteComments}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
