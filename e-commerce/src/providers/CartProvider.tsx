// providers/CartProvider.tsx
import { useMemo, useState, type ReactNode } from "react";
import type { ProductType, CartItem } from "../types/ProductType";
import CartContext from "../context/CartContext";

type Props = {
  children: ReactNode;
};

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addProductCart = (product: ProductType) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const sumProduct = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const resProduct = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeProduct = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart],
  );

  const totalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductCart,
        sumProduct,
        resProduct,
        removeProduct,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
