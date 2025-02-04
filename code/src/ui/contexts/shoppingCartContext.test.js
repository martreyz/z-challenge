import { render, screen, act, fireEvent } from "@testing-library/react";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "@/ui/contexts/ShoppingCartContext";
import { useMessages } from "@/ui/hooks/useMessages";

const setupLocalStorageMocks = () => {
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: jest.fn((key) => store[key] || null),
      setItem: jest.fn((key, value) => {
        store[key] = value.toString();
      }),
      removeItem: jest.fn((key) => {
        delete store[key];
      }),
      clear: jest.fn(() => {
        store = {};
      }),
    };
  })();
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });
};

const TestComponent = ({ action, smartphone }) => {
  const {
    cartSmartphonesList,
    addNewSmartphoneToCart,
    removeSmartphoneFromCart,
  } = useShoppingCart();

  return (
    <div>
      {cartSmartphonesList.map((phone) => (
        <div key={phone.cartId}>{phone.name}</div>
      ))}
      {action === "add" && (
        <button onClick={() => addNewSmartphoneToCart(smartphone)}>
          Add Smartphone
        </button>
      )}
      {action === "remove" && (
        <button onClick={() => removeSmartphoneFromCart(smartphone.cartId)}>
          Remove Smartphone
        </button>
      )}
    </div>
  );
};

describe("ShoppingCartProvider", () => {
  beforeEach(() => {
    setupLocalStorageMocks();
  });

  it("should render children after loading", async () => {
    await act(async () => {
      render(
        <ShoppingCartProvider>
          <div>Test Content</div>
        </ShoppingCartProvider>
      );
    });

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should add a new smartphone to the cart", async () => {
    const smartphone = { id: 3, name: "Smartphone 3" };

    await act(async () => {
      render(
        <ShoppingCartProvider>
          <TestComponent action="add" smartphone={smartphone} />
        </ShoppingCartProvider>
      );
    });

    const addButton = screen.getByText("Add Smartphone");

    await act(async () => {
      fireEvent.click(addButton);
    });

    expect(screen.getByText("Smartphone 3")).toBeInTheDocument();
    const calls = localStorage.setItem.mock.calls;
    const updatedCart = JSON.parse(calls[calls.length - 1][1]);
    expect(updatedCart).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 3, name: "Smartphone 3" }),
      ])
    );
  });

  it("should remove a smartphone from the cart", async () => {
    const initialCart = [
      { id: 1, name: "Smartphone 1", cartId: "1-0" },
      { id: 2, name: "Smartphone 2", cartId: "2-1" },
    ];

    localStorage.setItem("cartSmartphones", JSON.stringify(initialCart));

    await act(async () => {
      render(
        <ShoppingCartProvider>
          <TestComponent action="remove" smartphone={{ cartId: "1-0" }} />
        </ShoppingCartProvider>
      );
    });

    const removeButton = screen.getByText("Remove Smartphone");

    await act(async () => {
      fireEvent.click(removeButton);
    });

    expect(screen.queryByText("Smartphone 1")).not.toBeInTheDocument();
    const calls = localStorage.setItem.mock.calls;
    const updatedCart = JSON.parse(calls[calls.length - 1][1]);
    expect(updatedCart).toEqual([
      expect.objectContaining({ id: 2, name: "Smartphone 2", cartId: "2-1" }),
    ]);
  });
});
