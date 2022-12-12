import { NextPage } from "next";
import styled from "styled-components";

interface Quote {
  id: number,
  quote: string,
  author: string
}

interface Quotes {
  limit: number,
  quotes: Quote[],
  skip: number,
  total: number
}

interface Props {
  data: Quotes
}

const QuoteWrapper = styled.div`
  max-width: 400px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  background-color: black;
  color: white;
`;

const index: NextPage<Props> = ({ data }) => {

  const quotes = data.quotes;
  const quotesElem = quotes.map((quote: Quote) => <QuoteWrapper key={quote.id}>
    <p>id : {quote.id}</p>
    <p>quote : {quote.quote}</p>
    <p>author : {quote.author}</p>
  </QuoteWrapper>)
  return (
    <>
      {quotesElem}
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/quotes`)
  const data: Quotes = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default index;