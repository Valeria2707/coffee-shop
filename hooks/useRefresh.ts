import { useState } from "react";

export default function useRefresh(callback: () => Promise<void>) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await callback();
    } finally {
      setRefreshing(false);
    }
  };

  return { refreshing, onRefresh };
}
