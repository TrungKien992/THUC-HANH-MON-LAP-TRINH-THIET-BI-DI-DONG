

import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useMemo,
  } from "react";
  
  // Khai báo kiểu dữ liệu cho Context
  export interface Ctx {
    ids: string[];
    toggle: (id: string) => void;
    has: (id: string) => boolean;
  }
  
  const FavoritesContext = createContext<Ctx | null>(null);
  
  export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [ids, setIds] = useState<string[]>([]);
  
    const toggle = useCallback(
      (id: string) =>
        setIds((cur) =>
          cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]
        ),
      []
    );
  
    const value = useMemo(
      () => ({
        ids,
        toggle,
        has: (x: string) => ids.includes(x),
      }),
      [ids, toggle]
    );
  
    return (
      <FavoritesContext.Provider value={value}>
        {children}
      </FavoritesContext.Provider>
    );
  }
  
  // Hook lấy dữ liệu kèm kiểm tra null an toàn
  export const useFavorites = (): Ctx => {
    const ctx = useContext(FavoritesContext);
    if (!ctx) {
      throw new Error("useFavorites phải được dùng bên trong FavoritesProvider");
    }
    return ctx;
  };