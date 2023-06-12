import { useAppQuery, useAuthenticatedFetch } from "../../hooks";
import * as React from "react";
const DemoProject = () => {
    const fetch = useAuthenticatedFetch();

    const [state, setState] = React.useState(null);
    const fetchData = () => {
        const response = fetch("/api/demo/products");
        setState(response);
    }
    const {
        data,
        refetch: refetchProductCount,
        isLoading: isLoadingCount,
        isRefetching: isRefetchingCount,
      } = useAppQuery({
        url: "/api/demo/products",
        reactQueryOptions: {
          onSuccess: () => {
            setIsLoading(false);
          },
        },
      });
    return (
        <>
            <h1>Here is web api data : {JSON.stringify(data)}</h1>
            <button type="button" onClick={fetchData}>Click to fetch data</button>
        </>
    )
};

export default DemoProject;