import "./App.css";
import { useQuery, gql } from "@apollo/client";
import BarChart from "./components/BarChart";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const ContinentsQuery = gql`
  query GetCountriesListByContinent {
    continents {
      name
      countries {
        code
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ContinentsQuery);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error :(</p>;
  const continentsObjects = data.continents;
  var i = 0;
  var total = continentsObjects.length;
  var continentsNames = [];
  var countriesByContinent = [];
  for (; i < total; i++) {
    continentsNames.push(continentsObjects[i].name);
    countriesByContinent.push(continentsObjects[i].countries);
  }

  return (
    <div>
      <Card>
        <CardBody className="text-center">
          <CardTitle tag="h2">Cantidad de países por continente</CardTitle>
          <BarChart
            continentsNames={continentsNames}
            countriesByContinent={countriesByContinent}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
