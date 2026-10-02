import {
  createContext,
  useContext,
  useState,
} from "react";

import type { ReactNode } from "react";

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface OrderDetails {
  orderNumber: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  items: CartItem[];
  total: number;
  paymentMethod: string;
  date: string;
}

type AddToCartItem = Omit<CartItem, "quantity"> & {
  quantity?: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: AddToCartItem) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (
    id: string | number,
    quantity: number
  ) => void;
  clearCart: () => void;
  total: number;
  orders: OrderDetails[];
  placeOrder: (
    details: Omit<
      OrderDetails,
      "orderNumber" | "items" | "total" | "date"
    >
  ) => OrderDetails | null;
}

const CartContext = createContext<
  CartContextType | undefined
>(undefined);

export const CartProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<OrderDetails[]>([]);

  const addToCart = (product: AddToCartItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + (product.quantity ?? 1),
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: product.quantity ?? 1,
        },
      ];
    });
  };

  const removeFromCart = (id: string | number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const updateQuantity = (
    id: string | number,
    quantity: number
  ) => {
    if (quantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = (
    details: Omit<
      OrderDetails,
      "orderNumber" | "items" | "total" | "date"
    >
  ): OrderDetails | null => {
    if (cartItems.length === 0) {
      return null;
    }

    const newOrder: OrderDetails = {
      ...details,
      orderNumber:
        "VEL-" + Date.now().toString().slice(-8),
      items: [...cartItems],
      total,
      date: new Date().toISOString(),
    };

    setOrders((prev) => [...prev, newOrder]);
    setCartItems([]);

    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        orders,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
};