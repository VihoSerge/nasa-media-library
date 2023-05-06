import { ReactNode } from "react";

interface QueryResultProps {
  loading: boolean;
  loader?: any;
  error: any;
  data: unknown;

  children: ReactNode;
}

export default function QueryResult({ loading, loader, error, data, children }: QueryResultProps): JSX.Element {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  if (loading) {
    return <>{loader ? loader : "Loading"} </>;
  }

  if (!data) {
    return <p>Nothing to show...</p>;
  }

  if (data) {
    return <>{children}</>;
  }
}
