import ApolloClient from "apollo-boost";
import withData from "next-with-apollo";
import { serverEndpoint } from "./config";

const apolloClient = ({ headers }) => {
    return new ApolloClient({
        uri:
            process.env.NODE_ENV === "development"
                ? serverEndpoint
                : serverEndpoint,
        request: operation => {
            operation.setContext({
                fetchOptions: {
                    // credentials: 'include',
                },
                headers
            });
        }
    });
};

export default withData(apolloClient);
