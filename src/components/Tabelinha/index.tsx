import axios from "axios";
import DataTable from "react-data-table-component";
import { useQuery } from "react-query";

const columns = [
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "SelfLink",
    selector: (row: any) => row.selfLink,
    sortable: true,
  },
  {
    name: "Created At",
    selector: (row: any) => row.creationTimestamp,
    sortable: true,
  },
];

interface Props {
  theme: string;
}

const Tabelinha: React.FC<Props> = ({ theme }) => {
  // useEffect(() => {
  //   return setTableColor(theme);
  // }, [theme]);
  console.log(theme);
  const { isLoading, isError, data, error } = useQuery("allPost", async () => {
    const response = await axios.get("http://localhost:3333/namespaces");
    return response.data;
  });
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    // return <p>{error.message}</p>;
  }

  return (
    <DataTable
      title={"Namespaces"}
      columns={columns}
      data={data}
      selectableRows
      pagination
      theme={theme}
    />
  );
};

export default Tabelinha;
