import { ReactNode } from "react";

interface QueryResultProps {
  loading: boolean;
  error: any;
  data: unknown;

  children: ReactNode;
}

export default function QueryResult({ loading, error, data, children }: QueryResultProps): JSX.Element {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  if (loading) {
    return <div>loading</div>;
  }

  if (!data) {
    return <p>Nothing to show...</p>;
  }

  if (data) {
    return <>{children}</>;
  }
}
